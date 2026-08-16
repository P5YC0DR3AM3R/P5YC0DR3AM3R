#!/usr/bin/env node
// Renders assets/top-languages.svg from the GitHub GraphQL API.
//
// Replaces the github-readme-stats.vercel.app top-langs card, whose public
// instance is rate limited often enough that the README image breaks. Language
// names, byte counts and colors all come straight from GitHub, so the committed
// SVG stays in sync without depending on a third party at page-render time.

import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

const TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
const LOGIN = process.env.GH_LOGIN || "P5YC0DR3AM3R";
const OUT = process.env.OUT_PATH || "assets/top-languages.svg";
const COUNT = Number(process.env.LANGS_COUNT || 8);
const EXCLUDE = new Set(
  (process.env.EXCLUDE_LANGS || "")
    .split(",")
    .map((name) => name.trim().toLowerCase())
    .filter(Boolean),
);

// Matches the README's capsule-render header (bg 0D1117, accent 58A6FF).
const THEME = {
  bg: "#0D1117",
  title: "#58A6FF",
  text: "#C9D1D9",
  muted: "#8B949E",
  track: "#21262D",
  unknown: "#8B949E",
};

const QUERY = `
  query($login: String!, $after: String) {
    user(login: $login) {
      repositories(
        first: 100
        after: $after
        ownerAffiliations: OWNER
        isFork: false
        privacy: PUBLIC
      ) {
        pageInfo { hasNextPage endCursor }
        nodes {
          languages(first: 20, orderBy: { field: SIZE, direction: DESC }) {
            edges { size node { name color } }
          }
        }
      }
    }
  }
`;

async function graphql(after) {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
      "User-Agent": "p5yc0dr3am3r-top-languages",
    },
    body: JSON.stringify({ query: QUERY, variables: { login: LOGIN, after } }),
  });

  if (!res.ok) {
    throw new Error(`GitHub API returned ${res.status} ${res.statusText}`);
  }

  const body = await res.json();
  if (body.errors?.length) {
    throw new Error(body.errors.map((e) => e.message).join("; "));
  }
  if (!body.data?.user) {
    throw new Error(`No such user: ${LOGIN}`);
  }
  return body.data.user.repositories;
}

async function collectLanguages() {
  const totals = new Map();
  let after = null;

  do {
    const page = await graphql(after);
    for (const repo of page.nodes) {
      for (const { size, node } of repo.languages.edges) {
        if (EXCLUDE.has(node.name.toLowerCase())) continue;
        const seen = totals.get(node.name);
        if (seen) {
          seen.size += size;
        } else {
          totals.set(node.name, { name: node.name, color: node.color, size });
        }
      }
    }
    after = page.pageInfo.hasNextPage ? page.pageInfo.endCursor : null;
  } while (after);

  const top = [...totals.values()]
    .sort((a, b) => b.size - a.size)
    .slice(0, COUNT);

  // Normalize across the languages actually shown so the bar fills the width.
  const shown = top.reduce((sum, lang) => sum + lang.size, 0);
  return top.map((lang) => ({
    ...lang,
    color: lang.color || THEME.unknown,
    percent: shown ? (lang.size / shown) * 100 : 0,
  }));
}

const escapeXml = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
      })[char],
  );

function renderSvg(langs) {
  const W = 420;
  const PAD = 25;
  const BAR_Y = 58;
  const BAR_H = 10;
  const BAR_W = W - PAD * 2;
  const COLS = 2;
  const COL_W = BAR_W / COLS;
  const ROW_H = 26;
  const FIRST_ROW_Y = 96;

  const rows = Math.max(1, Math.ceil(langs.length / COLS));
  const H = FIRST_ROW_Y + (rows - 1) * ROW_H + 20;

  let offset = 0;
  const segments = langs
    .map((lang) => {
      const width = (lang.percent / 100) * BAR_W;
      const rect = `<rect x="${(PAD + offset).toFixed(2)}" y="${BAR_Y}" width="${width.toFixed(2)}" height="${BAR_H}" fill="${escapeXml(lang.color)}" />`;
      offset += width;
      return rect;
    })
    .join("\n      ");

  const legend = langs
    .map((lang, i) => {
      const x = PAD + (i % COLS) * COL_W;
      const y = FIRST_ROW_Y + Math.floor(i / COLS) * ROW_H;
      return [
        `<g>`,
        `  <circle cx="${x + 5}" cy="${y - 4}" r="5" fill="${escapeXml(lang.color)}" />`,
        `  <text x="${x + 18}" y="${y}" fill="${THEME.text}" font-size="12">${escapeXml(lang.name)}</text>`,
        `  <text x="${x + COL_W - 14}" y="${y}" fill="${THEME.muted}" font-size="12" text-anchor="end">${lang.percent.toFixed(2)}%</text>`,
        `</g>`,
      ].join("\n      ");
    })
    .join("\n      ");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">Top Languages</title>
  <desc id="desc">${escapeXml(langs.map((l) => `${l.name} ${l.percent.toFixed(2)}%`).join(", "))}</desc>
  <style>
    text { font-family: 'Segoe UI', Ubuntu, 'Helvetica Neue', Sans-Serif; }
  </style>
  <rect width="${W}" height="${H}" rx="8" fill="${THEME.bg}" />
  <text x="${PAD}" y="38" fill="${THEME.title}" font-size="18" font-weight="600">Top Languages</text>
  <g>
    <rect x="${PAD}" y="${BAR_Y}" width="${BAR_W}" height="${BAR_H}" rx="${BAR_H / 2}" fill="${THEME.track}" />
    <mask id="bar">
      <rect x="${PAD}" y="${BAR_Y}" width="${BAR_W}" height="${BAR_H}" rx="${BAR_H / 2}" fill="#fff" />
    </mask>
    <g mask="url(#bar)">
      ${segments}
    </g>
  </g>
  <g>
      ${legend}
  </g>
</svg>
`;
}

async function main() {
  if (!TOKEN) {
    throw new Error("GITHUB_TOKEN (or GH_TOKEN) is required");
  }

  const langs = await collectLanguages();
  if (!langs.length) {
    throw new Error(`No public language data found for ${LOGIN}`);
  }

  await mkdir(dirname(OUT), { recursive: true });
  await writeFile(OUT, renderSvg(langs), "utf8");

  console.log(`Wrote ${OUT}`);
  for (const lang of langs) {
    console.log(`  ${lang.name.padEnd(16)} ${lang.percent.toFixed(2)}%`);
  }
}

main().catch((error) => {
  console.error(`Failed to generate top languages card: ${error.message}`);
  process.exit(1);
});
