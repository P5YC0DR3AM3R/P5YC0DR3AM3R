# Micah Read

**Contact Information**
- **Location:** Central Florida &mdash; remote and hybrid
- **Email:** micahreadmgmt@gmail.com &bull; micah@lyricshow.live
- **Phone:** available on request

---

[![Phygital DevOps](https://img.shields.io/badge/Phygital_DevOps-00E5FF?style=for-the-badge&logo=github&logoColor=black)](https://github.com/Phygital-DevOps)&nbsp;
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/P5YC0DR3AM3R)&nbsp;
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/micahreadmgmt/)&nbsp;
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:micahreadmgmt@gmail.com)

---

## Summary

Full stack developer and creator of **Phygital DevOps**, a studio shipping seven projects across web, native mobile, edge compute and realtime 3D. Work spans on-device machine learning, Cloudflare Workers, Swift and Kotlin clients, and a production 3D content pipeline built on Blender, Houdini and glTF.

Foundation in front-end and back-end development from the EdX/UCF Full Stack Flex Coding Bootcamp, with an advanced specialization in Applied Generative AI from the University of Michigan. Twenty-four years and roughly 26,000 hours of professional live performance behind the engineering — storyboarding, character development and audience engagement applied to system design.

---

## Skills

- **Languages:** JavaScript, TypeScript, Python, Swift, Kotlin, HTML, CSS, SQL
- **Frontend:** React, Next.js, Vite, Redux, Tailwind CSS, Material-UI, Bootstrap, styled-components
- **Backend & Edge:** Node.js, Express.js, Cloudflare Workers, Workers KV, Apollo GraphQL, Firebase
- **Databases:** MongoDB, PostgreSQL, Mongoose, Sequelize, IndexedDB, NoSQL, ORM
- **AI & Data Science:** LangChain, LangGraph, CrewAI, OpenAI, Anthropic, Hugging Face, PyTorch, Streamlit, Pandas, NumPy, SciPy, scikit-learn, Plotly, Jupyter
- **On-Device ML:** ONNX Runtime, Transformers.js, Vosk, Whisper, OPUS-MT, Core ML
- **3D & Graphics:** Three.js, WebGL, WebAssembly, Blender, Houdini Karma, Alembic, glTF/GLB, trimesh, xatlas, Canvas 2D
- **Mobile & Native:** Swift, SwiftUI, Kotlin, Jetpack Compose, Xcode, PWA
- **Web Platform:** Service Workers, Web Workers, Cache Storage, WebSocket, Web Audio API, Gamepad API, JWT
- **Tools & Platforms:** Git, GitHub, GitHub Actions, GitLab, Docker, Wrangler, Netlify, Render, Vercel, Stripe, OBS Studio, Claude Code, MCP, Zsh

---

## Selected Work &mdash; Phygital DevOps

Portfolio: [github.com/Phygital-DevOps](https://github.com/Phygital-DevOps)

### Shipped Software

**LyricShow** &mdash; Live captions and translation for performers &middot; *Live, v2.0.0*
- Real-time captions and translation running on-device, composited directly into an OBS broadcast.
- Two monolingual Vosk recognizers arbitrate on per-word acoustic confidence to select the spoken language; a forward-cursor bounded Levenshtein aligner snaps live hypotheses onto pasted lyrics.
- Translation via int8-quantized OPUS-MT through ONNX Runtime, self-hosted WASM, English as pivot. Uploaded lyrics stay in IndexedDB and never leave the device.
- Three clients on one core: web, iOS and Android. Token-scoped WebSocket overlay with a 30-day idempotent JWT.
- **Technologies:** Next.js, TypeScript, SwiftUI, Jetpack Compose, ONNX Runtime, Vosk, WebAssembly, Firebase
- 312 tracked files &middot; ~15.0k TypeScript &middot; ~12.9k Swift &middot; Kotlin &middot; Python
- [Live](https://lyricshow.live) &bull; [Repository](https://github.com/Phygital-DevOps/lyric-show)

**Moment on Main** &mdash; Self-service booking for a 7,000 sq ft event venue &middot; *Live*
- One Cloudflare Worker serving four static pages and seven JSON endpoints behind a 65-line route table.
- Admin desk fails closed: an unset PIN returns `503 not configured` rather than `401`, with constant-time compare and per-IP lockout.
- Rate engine duplicated deliberately &mdash; canonical module plus verbatim inline copy in the booking wizard &mdash; held together by a parity test pricing every date across three years.
- **Technologies:** Cloudflare Workers, Workers KV, Wrangler, vanilla JavaScript
- 3 top-level directories &middot; zero-dependency pages &middot; 34 pull requests
- [Live](https://momentonmain.events) &bull; [Repository](https://github.com/Phygital-DevOps/Moment-On-Main)

**AMA Audio Customs** &mdash; Custom audio gear and installation shop &middot; *In development*
- Storefront and service site for a custom audio business.
- **Technologies:** JavaScript, HTML, CSS
- [Repository](https://github.com/Phygital-DevOps/AMA-Audio-Customs)

### Games & Interactive

**Spidersperts** &mdash; Colony survival game beneath a marketing front &middot; *Live, engine v21*
- Twenty-level colony survival game with a spider-control service site built over it as a stage set.
- Verlet spring-mass web physics drives one simulation; page copy is anchored into it and moves in the same wind model as the webs.
- Service worker registered from the always-fresh page rather than the engine, so a broken build can never pin itself in cache; a session-keyed watchdog reloads on engine silence but waits if a colony is still alive.
- **Technologies:** Canvas 2D, vanilla JavaScript, Service Workers, PWA
- 7,884 lines &middot; 366 KB &middot; one file &middot; no framework, no bundler, no build
- [Live](https://spidersperts.com) &bull; [Repository](https://github.com/Phygital-DevOps/Spidersperts)

**Striper Viper** &mdash; 3D endless runner carrying a fishing charter &middot; *Assets complete, client in development*
- Marketing for a real guided striped bass charter on Lake Lanier, delivered as a game rather than a brochure.
- Lane-dodging crossed with Snake's growing-tail risk: a global spatial registry flags a lane lethal when the player's own tail occupies it during the head's arrival window.
- Full DCC pipeline &mdash; procedural Blender modelling via Python, generated PBR sets, look-dev through Houdini Karma, cached to Alembic for the web client.
- Built for television: Gamepad API, fullscreen, TV-scale UI, keyboard and touch fallbacks, shipping as a single HTML file.
- **Technologies:** Blender, Houdini Karma, Alembic, Three.js, Gamepad API, Python
- [Live](https://striperviper.com) &bull; [Repository](https://github.com/Phygital-DevOps/Striper-Viper)

**Key West Treasure Hunt** &mdash; Pirate-island survival and treasure hunt &middot; *In development*
- Phone-first PWA: a Key West–style island with a dock, a sailing dinghy and pirate-rooster characters.
- Gather, build, sail, hunt, return &mdash; wells, wood, seed and bread with spoilage timers, ship building, and treasure recovered at sea.
- **Technologies:** Three.js, Vite, glTF/GLB, WebGL, PWA
- 5 draw calls &middot; 12,044 triangles &middot; 1 texture &middot; 60 fps on a 390×844 viewport
- [Repository](https://github.com/Phygital-DevOps/Key-West-Treasure-Hunt)

### Studio Site

**Phygital DevOps Portfolio** &mdash; *In development*
- React and Three.js studio site where the portfolio surfaces as structure inside a 3D world.
- Asset pipeline: procedural and generative 3D through Blender and Hunyuan3D, mesh decimation and UV unwrapping in Python with trimesh and xatlas, silhouette-IoU and decimation-error measurement as quality gates, glTF repacked to GLB (~26% smaller).
- Content driven by a `canon.json` source of truth so presentation copy is never invented.
- **Technologies:** React, Three.js, Vite, Blender, Python, trimesh, SciPy
- [Repository](https://github.com/Phygital-DevOps/Phygital-DevOps)

---

## Education & Certifications

![edX](https://img.shields.io/badge/edX-02262B?style=for-the-badge&logo=edx&logoColor=white)

**EdX / UCF Full Stack Flex Coding Bootcamp** (June 2024)
- Comprehensive training in full stack development covering both front-end and back-end technologies.
- Front-end: HTML, CSS, JavaScript, React, Material-UI, Bootstrap, Tailwind
- Back-end: Node.js, Express.js, MongoDB, SQL, PostgreSQL
- Other Technologies: Git, GitHub, GitLab, Netlify, Render, Apollo GraphQL

![Simplilearn](https://img.shields.io/badge/Simplilearn-FF6600?style=for-the-badge)
![University of Michigan](https://img.shields.io/badge/U%20of%20Michigan-00274C?style=for-the-badge&logoColor=white)

**Applied Generative AI Specialization** (October 2025)
- Issued by: University of Michigan / Simplilearn
- Advanced specialization in applied generative AI concepts and techniques.
- Tooling: Python, LangChain, CrewAI, OpenAI, Anthropic, Streamlit, Pandas, NumPy, scikit-learn, Plotly, Docker, Jupyter

**Liberty University, Lynchburg, VA**
- Attended: August 1999 - May 2000

**Collins Hill High School, Suwanee, GA**
- Graduated: 1999

---

<details><summary><strong>Work Experience</strong></summary>
<br/>

**Phygital DevOps** (2025-Present)
- Creator - Interactive platforms and phygital systems

**Self Employed** (2002-Present)
- Performing Artist - Voice and Guitar

**Hard Rock Hotel at Universal Orlando** (2011-Present)
- Singer Performer - Trio, Duo and Solo

**BookIt Entertainment Corporate Events** (2009-2022)
- Performing Artist - Tripped Up Trio, Duo and Solo

**MRMG Live** (2017-2019)
- Senior Partner - Stage Management and Entertainment Director Services

**Fishlips, Cape Canaveral** (2014-2020)
- Entertainment Director - Schedule and Payroll for two stages and Performer

**Brewmaster's Invitational Beer Festival, Cape Canaveral** (2015 & 2016)
- Coordinated Sound Reinforcement, booked acts for three stages, Lead Sound Tech, Performer and Band Leader

**Good Company Music Nashville** (2014-2015)
- Full Band, Trio, Duo and Solo - Logistics/Sound Tech/Performer

**The Sound - Dove Records** (2000-2001)
- Vocalist and Recording Artist

**Light Ministries, Liberty University** (2000)
- Vocal Performance Scholarship - Kenya 2000 Mission Trip

</details>

---

<details><summary><strong>Earlier Projects</strong></summary>
<br/>

### Patent Miner V3
- **Description:** AI-powered platform that discovers expired patents and transforms them into commercialization opportunities using hybrid retrieval and multi-dimensional viability scoring.
- **Technologies Used:** Python, Streamlit, CrewAI, Plotly, Docker
- **Render Link:** [Render Deployment](https://patent-miner.onrender.com)
- **GitHub Link:** [GitHub Repository](https://github.com/P5YC0DR3AM3R/Patent-Miner)

### J.A.T.E. (Just Another Text Editor)
- **Description:** A simple and effective tool for capturing code snippets on the fly.
- **Technologies Used:** HTML, CSS, JavaScript, React
- **Render Link:** [Render Deployment](https://inbrowtexed.onrender.com/)
- **GitHub Link:** [GitHub Repository](https://github.com/P5YC0DR3AM3R/InBrowTexEd)

### Note Taker
- **Description:** A note-taking application built with React.
- **Technologies Used:** React
- **Render Link:** [Render Deployment](https://takenote-k889.onrender.com/)
- **GitHub Link:** [GitHub Repository](https://github.com/P5YC0DR3AM3R/takeNote)

### Portfolio
- **Description:** Personal portfolio website showcasing my work and skills.
- **Technologies Used:** HTML, CSS, JavaScript
- **Deployment Link:** [GitHub Deployment](https://p5yc0dr3am3r.github.io/personal_portfolio/)
- **GitHub Link:** [GitHub Repository](https://github.com/P5YC0DR3AM3R/personal_portfolio)

</details>

---

<details><summary><strong>Technologies</strong></summary>
<br/>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Swift](https://img.shields.io/badge/Swift-F05138?style=for-the-badge&logo=swift&logoColor=white)
![Kotlin](https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Cloudflare Workers](https://img.shields.io/badge/Cloudflare_Workers-F38020?style=for-the-badge&logo=cloudflareworkers&logoColor=white)
![Apollo GraphQL](https://img.shields.io/badge/Apollo_GraphQL-311C87?style=for-the-badge&logo=apollographql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-DD2C00?style=for-the-badge&logo=firebase&logoColor=white)
![LangChain](https://img.shields.io/badge/LangChain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white)
![CrewAI](https://img.shields.io/badge/CrewAI-FF6B35?style=for-the-badge&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)
![Anthropic](https://img.shields.io/badge/Anthropic-D97757?style=for-the-badge&logo=anthropic&logoColor=white)
![Hugging Face](https://img.shields.io/badge/Hugging_Face-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black)
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)
![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?style=for-the-badge&logo=streamlit&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white)
![SciPy](https://img.shields.io/badge/SciPy-8CAAE6?style=for-the-badge&logo=scipy&logoColor=white)
![scikit--learn](https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikitlearn&logoColor=white)
![Plotly](https://img.shields.io/badge/Plotly-3F4F75?style=for-the-badge&logo=plotly&logoColor=white)
![Jupyter](https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white)
![ONNX Runtime](https://img.shields.io/badge/ONNX_Runtime-005CED?style=for-the-badge&logo=onnx&logoColor=white)
![Vosk](https://img.shields.io/badge/Vosk-1E88E5?style=for-the-badge&logoColor=white)
![Whisper](https://img.shields.io/badge/Whisper-000000?style=for-the-badge&logo=openai&logoColor=white)
![Core ML](https://img.shields.io/badge/Core_ML-0A84FF?style=for-the-badge&logo=apple&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white)
![WebGL](https://img.shields.io/badge/WebGL-990000?style=for-the-badge&logo=webgl&logoColor=white)
![WebAssembly](https://img.shields.io/badge/WebAssembly-654FF0?style=for-the-badge&logo=webassembly&logoColor=white)
![Blender](https://img.shields.io/badge/Blender-E87D0D?style=for-the-badge&logo=blender&logoColor=white)
![Houdini](https://img.shields.io/badge/Houdini_Karma-FF4713?style=for-the-badge&logo=houdini&logoColor=white)
![glTF](https://img.shields.io/badge/glTF_%2F_GLB-87C540?style=for-the-badge&logo=khronosgroup&logoColor=white)
![SwiftUI](https://img.shields.io/badge/SwiftUI-0071E3?style=for-the-badge&logo=swift&logoColor=white)
![Jetpack Compose](https://img.shields.io/badge/Jetpack_Compose-4285F4?style=for-the-badge&logo=jetpackcompose&logoColor=white)
![Xcode](https://img.shields.io/badge/Xcode-147EFB?style=for-the-badge&logo=xcode&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![GitLab](https://img.shields.io/badge/GitLab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Wrangler](https://img.shields.io/badge/Wrangler-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white)
![OBS Studio](https://img.shields.io/badge/OBS_Studio-302E31?style=for-the-badge&logo=obsstudio&logoColor=white)
![Claude Code](https://img.shields.io/badge/Claude_Code-D97757?style=for-the-badge&logo=anthropic&logoColor=white)
![MCP](https://img.shields.io/badge/Model_Context_Protocol-D97757?style=for-the-badge&logo=anthropic&logoColor=white)
![Zsh](https://img.shields.io/badge/Zsh-F15A24?style=for-the-badge&logo=zsh&logoColor=white)

</details>
