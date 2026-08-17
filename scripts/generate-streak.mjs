#!/usr/bin/env node
// Renders assets/streak.svg from the GitHub GraphQL API.
//
// Replaces the streak-stats.demolab.com card for the same reason the top
// languages card was replaced: it is a free public instance, and when it is
// rate limited or down the README image breaks. Contribution days come
// straight from GitHub, so the committed SVG stays in sync without depending
// on a third party at page-render time.
//
// Note: contributionsCollection reflects what the calling token can see, so a
// workflow-scoped GITHUB_TOKEN counts public contributions only — the same
// caveat the hosted card carries.

import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

const TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
const LOGIN = process.env.GH_LOGIN || "P5YC0DR3AM3R";
const OUT = process.env.OUT_PATH || "assets/streak.svg";

// Matches the README's capsule-render header and the top languages card.
const THEME = {
  bg: "#0D1117",
  title: "#58A6FF",
  text: "#C9D1D9",
  muted: "#8B949E",
  ring: "#58A6FF",
  divider: "#21262D",
};

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const CREATED_QUERY = `
  query($login: String!) {
    user(login: $login) { createdAt }
  }
`;

const CALENDAR_QUERY = `
  query($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          weeks { contributionDays { date contributionCount } }
        }
      }
    }
  }
`;

async function graphql(query, variables) {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
      "User-Agent": "p5yc0dr3am3r-streak",
    },
    body: JSON.stringify({ query, variables }),
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
  return body.data.user;
}

// contributionsCollection caps each query at one year, so walk calendar years
// from the account's creation to today. Windows are disjoint, which keeps the
// total a plain sum with no double counting.
export function yearWindows(createdAt, now) {
  const windows = [];
  const firstYear = createdAt.getUTCFullYear();
  const lastYear = now.getUTCFullYear();

  for (let year = firstYear; year <= lastYear; year++) {
    const start = new Date(Date.UTC(year, 0, 1));
    const end = new Date(Date.UTC(year, 11, 31, 23, 59, 59));
    windows.push({
      from: (start < createdAt ? createdAt : start).toISOString(),
      to: (end > now ? now : end).toISOString(),
    });
  }
  return windows;
}

async function collectDays(now) {
  const { createdAt } = await graphql(CREATED_QUERY, { login: LOGIN });
  const byDate = new Map();

  for (const window of yearWindows(new Date(createdAt), now)) {
    const user = await graphql(CALENDAR_QUERY, { login: LOGIN, ...window });
    for (const week of user.contributionsCollection.contributionCalendar.weeks) {
      for (const day of week.contributionDays) {
        byDate.set(day.date, day.contributionCount);
      }
    }
  }

  return [...byDate.entries()]
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => a.date.localeCompare(b.date));
}

// `today` is passed in so the caller decides what "now" means, and so the
// streak arithmetic is testable without a clock.
export function summarize(days, today) {
  const total = days.reduce((sum, day) => sum + day.count, 0);
  const active = days.filter((day) => day.count > 0);

  let longest = { length: 0, start: null, end: null };
  let run = { length: 0, start: null, end: null };

  for (const day of days) {
    if (day.count > 0) {
      run = {
        length: run.length + 1,
        start: run.length ? run.start : day.date,
        end: day.date,
      };
      if (run.length > longest.length) longest = { ...run };
    } else {
      run = { length: 0, start: null, end: null };
    }
  }

  // Walk back from the most recent day. A zero on `today` does not end the
  // streak — the day is not over yet — but a zero on any earlier day does.
  let current = { length: 0, start: null, end: null };
  for (let i = days.length - 1; i >= 0; i--) {
    const day = days[i];
    if (day.count > 0) {
      current = {
        length: current.length + 1,
        start: day.date,
        end: current.length ? current.end : day.date,
      };
    } else if (day.date === today) {
      continue;
    } else {
      break;
    }
  }

  return {
    total,
    current,
    longest,
    firstContribution: active.length ? active[0].date : null,
  };
}

const parseDay = (iso) => {
  const [year, month, day] = iso.split("-").map(Number);
  return { year, month, day };
};

export function formatDate(iso, { withYear = true } = {}) {
  const { year, month, day } = parseDay(iso);
  const short = `${MONTHS[month - 1]} ${day}`;
  return withYear ? `${short}, ${year}` : short;
}

// Drop the year from both ends when a range sits inside the current year —
// "Jul 2 - Aug 17" reads better than repeating a year the reader already has.
export function formatRange(startIso, endIso, todayIso) {
  if (!startIso || !endIso) return "—";

  const thisYear = parseDay(todayIso).year;
  const sameYear = parseDay(startIso).year === parseDay(endIso).year;
  const currentYear = sameYear && parseDay(startIso).year === thisYear;

  if (startIso === endIso) return formatDate(startIso, { withYear: !currentYear });

  return `${formatDate(startIso, { withYear: !currentYear })} - ${formatDate(endIso, { withYear: !currentYear })}`;
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

const number = (value) => value.toLocaleString("en-US");

export function renderSvg(stats, todayIso) {
  // 420x194 matches the top languages card, so the two sit level side by side.
  const W = 420;
  const H = 194;
  const COL_W = W / 3;
  const centers = [COL_W / 2, COL_W * 1.5, COL_W * 2.5];

  const columns = [
    {
      value: number(stats.total),
      label: "Total Contributions",
      range: stats.firstContribution
        ? `${formatDate(stats.firstContribution)} - Present`
        : "—",
    },
    {
      value: number(stats.current.length),
      label: "Current Streak",
      range: formatRange(stats.current.start, stats.current.end, todayIso),
    },
    {
      value: number(stats.longest.length),
      label: "Longest Streak",
      range: formatRange(stats.longest.start, stats.longest.end, todayIso),
    },
  ];

  // All three columns share these baselines, so the labels and date ranges
  // line up straight across and the ring is the only thing setting the middle
  // column apart. VALUE_Y is chosen so the digits' visual center lands on
  // RING_CY — digits have no descender, so that is baseline minus half the
  // cap height rather than half the font size.
  const VALUE_Y = 85;
  const LABEL_Y = 133;
  const RANGE_Y = 152;
  const RING_CY = 76;
  const RING_R = 35;

  const column = (i, ring) => {
    const c = centers[i];
    const col = columns[i];
    return [
      `<g text-anchor="middle">`,
      ring
        ? `  <circle cx="${c}" cy="${RING_CY}" r="${RING_R}" fill="none" stroke="${THEME.ring}" stroke-width="3" />`
        : null,
      `  <text x="${c}" y="${VALUE_Y}" fill="${THEME.text}" font-size="26" font-weight="600">${escapeXml(col.value)}</text>`,
      `  <text x="${c}" y="${LABEL_Y}" fill="${THEME.title}" font-size="12" font-weight="600">${escapeXml(col.label)}</text>`,
      `  <text x="${c}" y="${RANGE_Y}" fill="${THEME.muted}" font-size="9">${escapeXml(col.range)}</text>`,
      `</g>`,
    ]
      .filter(Boolean)
      .join("\n  ");
  };

  const body = [column(0, false), column(1, true), column(2, false)].join("\n  ");

  const dividers = [1, 2]
    .map(
      (i) =>
        `<line x1="${COL_W * i}" y1="38" x2="${COL_W * i}" y2="158" stroke="${THEME.divider}" stroke-width="1" />`,
    )
    .join("\n  ");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">
  <title id="title">GitHub Streak</title>
  <desc id="desc">${escapeXml(`${number(stats.total)} total contributions, ${number(stats.current.length)} day current streak, ${number(stats.longest.length)} day longest streak`)}</desc>
  <style>
    text { font-family: 'Segoe UI', Ubuntu, 'Helvetica Neue', Sans-Serif; }
  </style>
  <rect width="${W}" height="${H}" rx="8" fill="${THEME.bg}" />
  ${dividers}
  ${body}
</svg>
`;
}

async function main() {
  if (!TOKEN) {
    throw new Error("GITHUB_TOKEN (or GH_TOKEN) is required");
  }

  const now = new Date();
  const today = now.toISOString().slice(0, 10);

  const days = await collectDays(now);
  if (!days.length) {
    throw new Error(`No contribution data found for ${LOGIN}`);
  }

  const stats = summarize(days, today);

  await mkdir(dirname(OUT), { recursive: true });
  await writeFile(OUT, renderSvg(stats, today), "utf8");

  console.log(`Wrote ${OUT}`);
  console.log(`  Total contributions  ${number(stats.total)}`);
  console.log(`  Current streak       ${number(stats.current.length)} days`);
  console.log(`  Longest streak       ${number(stats.longest.length)} days`);
}

// Skipped when the module is imported by the tests.
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error(`Failed to generate streak card: ${error.message}`);
    process.exit(1);
  });
}
