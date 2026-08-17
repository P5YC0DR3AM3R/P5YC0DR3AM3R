<!-- Animated Wave Header -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0D1117,50:1A1B27,100:0D1117&height=220&section=header&text=P5YC0DR3AM3R&fontSize=70&fontColor=58A6FF&animation=fadeIn&fontAlignY=35&desc=Micah%20Read%20%7C%20Phygital%20DevOps%20%7C%20Full%20Stack%20Developer&descSize=18&descColor=8B949E&descAlignY=55" width="100%" alt="Header" />
</p>

<!-- Typing SVG -->
<p align="center">
  <a href="https://github.com/P5YC0DR3AM3R">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&duration=3000&pause=1000&color=58A6FF&center=true&vCenter=true&repeat=true&width=760&height=45&lines=Creator+of+Phygital+DevOps;Full+Stack+Developer+%7C+Musician+%7C+Lifelong+Learner;Seven+projects+across+web%2C+mobile%2C+edge+and+3D" alt="Typing SVG" />
  </a>
</p>

<!-- Contact Badges -->
<p align="center">
  <a href="https://phygitaldevops.com"><img src="https://img.shields.io/badge/Phygital_DevOps-00E5FF?style=for-the-badge&logo=googlechrome&logoColor=black" alt="Phygital DevOps" /></a>&nbsp;
  <a href="https://github.com/Phygital-DevOps"><img src="https://img.shields.io/badge/Studio_GitHub-00E5FF?style=for-the-badge&logo=github&logoColor=black" alt="Phygital DevOps on GitHub" /></a>&nbsp;
  <a href="https://github.com/P5YC0DR3AM3R"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>&nbsp;
  <a href="https://www.linkedin.com/in/micahreadmgmt/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>&nbsp;
  <a href="mailto:micahreadmgmt@gmail.com"><img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>&nbsp;
  <a href="mailto:micah@lyricshow.live"><img src="https://img.shields.io/badge/Business-635BFF?style=for-the-badge&logo=maildotru&logoColor=white" alt="Business Email" /></a>
</p>

<br/>

---

## About Me

Creator of **[Phygital DevOps](https://github.com/Phygital-DevOps)** — a studio building interactive platforms where the physical and the digital each depend on the other. Twenty-four years and roughly 26,000 hours of professional live performance sit behind the engineering: storyboarding, character development and audience engagement are the same discipline as system design, just applied to a different stack.

Full stack developer with a foundation from the EdX/UCF Full Stack Flex Coding Bootcamp and an advanced specialization in Applied Generative AI from the University of Michigan. The work now spans on-device ML, edge compute, native mobile, and a real 3D content pipeline.

---

## Phygital DevOps

<sub>Seven projects. Studio: <a href="https://phygitaldevops.com">phygitaldevops.com</a> &middot; Full portfolio: <a href="https://github.com/Phygital-DevOps">github.com/Phygital-DevOps</a></sub>

<br/>

| Project | What it is | Status |
|---------|-----------|--------|
| **[LyricShow](https://lyricshow.live)** | On-device live captions and translation, composited into OBS | Live &mdash; v2.0.0 |
| **[Moment on Main](https://momentonmain.events)** | A 7,000 sq ft venue that quotes, books and manages itself | Live |
| **[AMA Audio Customs](https://amaaudiocustoms.com)** | Custom audio gear and installation shop | Live |
| **[Spidersperts](https://spidersperts.com)** | Twenty-level colony survival game behind a marketing front | Live &mdash; engine v21 |
| **[Striper Viper](https://striperviper.com)** | 3D endless runner carrying a Lake Lanier fishing charter | Assets complete &middot; client in development |
| **Key West Treasure Hunt** | Pirate-island survival and treasure-hunt game | In development |
| **[Phygital DevOps](https://phygitaldevops.com)** | The studio site &mdash; the world the portfolio lives inside | Live |

<br/>

### Shipped Software

Products with real users behind them.

<br/>

#### LyricShow
> Real-time captions and translation for live performers, running **on-device** and compositing straight into an OBS broadcast. Two monolingual Vosk recognizers arbitrate on per-word acoustic confidence to decide which language is actually being spoken; a forward-cursor bounded Levenshtein aligner snaps the noisy live hypothesis back onto pasted lyrics. Translation is int8-quantized OPUS-MT through ONNX Runtime, self-hosted WASM, English as the pivot for every pair. Uploaded lyrics live in IndexedDB and never leave the device.
>
> Three first-class clients — web, iOS and Android — converge on one core, with a token-scoped WebSocket overlay whose JWT is idempotent for 30 days so re-copying never breaks a link already pasted into OBS.

`312 tracked files · ~15.0k TypeScript · ~12.9k Swift · Kotlin · Python`

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![SwiftUI](https://img.shields.io/badge/SwiftUI-0071E3?style=flat-square&logo=swift&logoColor=white)
![Jetpack Compose](https://img.shields.io/badge/Compose-4285F4?style=flat-square&logo=jetpackcompose&logoColor=white)
![ONNX Runtime](https://img.shields.io/badge/ONNX_Runtime-005CED?style=flat-square&logo=onnx&logoColor=white)
![Vosk](https://img.shields.io/badge/Vosk-1E88E5?style=flat-square&logoColor=white)
![WebAssembly](https://img.shields.io/badge/WebAssembly-654FF0?style=flat-square&logo=webassembly&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-DD2C00?style=flat-square&logo=firebase&logoColor=white)
![OBS Studio](https://img.shields.io/badge/OBS-302E31?style=flat-square&logo=obsstudio&logoColor=white)

[Live](https://lyricshow.live) &bull; [Repository](https://github.com/Phygital-DevOps/lyric-show)

---

#### Moment on Main
> A 7,000 sq ft event venue that quotes, books and manages itself. One Cloudflare Worker serves four static pages and seven JSON endpoints through a 65-line route table — if a route is not in the table it does not exist. The admin desk fails closed: an unset PIN returns `503 not configured` rather than `401`, with constant-time compare and per-IP lockout, because four digits is 10,000 combinations.
>
> The rate engine exists twice — canonically in a module, and inlined verbatim into the booking wizard so it has no runtime dependency on the API. A parity test prices every date across three years through both copies and fails on any numeric drift. That test is the only reason the duplication is tolerable.

`3 top-level directories · zero-dependency pages · 34 pull requests`

![Cloudflare Workers](https://img.shields.io/badge/Workers-F38020?style=flat-square&logo=cloudflareworkers&logoColor=white)
![Workers KV](https://img.shields.io/badge/Workers_KV-F38020?style=flat-square&logo=cloudflare&logoColor=white)
![Wrangler](https://img.shields.io/badge/Wrangler-F38020?style=flat-square&logo=cloudflare&logoColor=white)
![JavaScript](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

[Live](https://momentonmain.events) &bull; [Repository](https://github.com/Phygital-DevOps/Moment-On-Main)

---

#### AMA Audio Customs
> A custom audio gear and installation shop — the storefront and service side of the business on the web. Newest project in the studio &mdash; live, and still being built out.

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)

[Live](https://amaaudiocustoms.com) &bull; [Repository](https://github.com/Phygital-DevOps/AMA-Audio-Customs)

---

### Games & Interactive

One pattern runs through all of these: the marketing page is the container, the game is the deliverable, and both live in one continuous physical world.

<br/>

#### Spidersperts
> A twenty-level colony survival game with a luxury dock-and-boat spider-control site built over the top of it. **The service is a stage set** — there is no business behind the front, and the front was never the point. Verlet spring-mass web physics drives one simulation, and every silk card holding the page copy is anchored into it, so the marketing text sways in the same wind model that moves the webs.
>
> The service worker is treated as an escape hatch rather than a cache: registered from the always-fresh page, never from the engine, so a broken engine file can never pin itself in cache forever. A watchdog dumps every cache and reloads if the engine goes quiet for four seconds — once per visit, session-keyed, so it can never loop. And a fresh worker taking over mid-visit checks whether your colony is still alive before it reloads.
>
> Twenty levels, 502 spiders to win, egg sacks, a daily golden fly, a dew droplet that can never be lost once earned, and a great moth that lands only on a dewed web. Win screen: the colony performs *Hamlet*.

`7,884 lines · 366 KB · one file · no framework, no bundler, no build`

![Canvas](https://img.shields.io/badge/Canvas_2D-FF6F00?style=flat-square&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Service Worker](https://img.shields.io/badge/Service_Worker-5A0FC8?style=flat-square&logo=pwa&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=flat-square&logo=pwa&logoColor=white)

[Live](https://spidersperts.com) &bull; [Repository](https://github.com/Phygital-DevOps/Spidersperts)

---

#### Striper Viper
> Marketing for a real guided striped bass charter on Lake Lanier, carried by a game instead of a brochure. A 3D endless runner crossing *Subway Surfers* lane-dodging with the growing-tail spatial risk of *Snake* — the track loops back over itself and your own tail becomes the obstacle. A global spatial registry tracks which segments and lanes the tail occupies and flags a lane lethal if the tail holds it during the head's arrival window, so the maze is authored by how you have already played.
>
> The striper and the viper are modelled procedurally in Blender via Python, textured with generated PBR sets — albedo, normal, roughness, plus a caustics sequence — look-dev'd through Houdini's Karma renderer and cached to Alembic for the web client. Built for a television, not a phone: Gamepad API, fullscreen, TV-scale UI, keyboard and touch fallbacks, shipping as a single HTML file.
>
> The lake was made by flooding a valley, which gives the signature set piece — running through the streets, doorways and steeple of the drowned town.

`Blender · Houdini Karma · Alembic · Three.js · Gamepad API`

![Blender](https://img.shields.io/badge/Blender-E87D0D?style=flat-square&logo=blender&logoColor=white)
![Houdini](https://img.shields.io/badge/Houdini_Karma-FF4713?style=flat-square&logo=houdini&logoColor=white)
![Alembic](https://img.shields.io/badge/Alembic-4B8BBE?style=flat-square&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=threedotjs&logoColor=white)
![Gamepad API](https://img.shields.io/badge/Gamepad_API-1E88E5?style=flat-square&logo=w3c&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)

[Live](https://striperviper.com) &bull; [Repository](https://github.com/Phygital-DevOps/Striper-Viper)

---

#### Key West Treasure Hunt
> The backstage layer of the studio portfolio, pulled out into its own project. A large Key West–style pirate island — tropical water, a dilapidated dock, a sailing dinghy and pirate-rooster characters — built phone-first as a PWA.
>
> The loop is gather, build, sail, hunt, return: dig wells, cut wood, plant and harvest seed, bake bread, build barrels and a ship from what you gathered, then take it to sea where bread and water are consumed as you go. Bread spoils in a day and water sours in three, and what spoils converts to ammunition. Treasure recovered at sea unlocks deeper strata of the portfolio — the writings, the thesis, the protocol.

`5 draw calls · 12,044 triangles · 1 texture · 60 fps on a 390×844 viewport`

![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=threedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![glTF](https://img.shields.io/badge/glTF_%2F_GLB-87C540?style=flat-square&logo=khronosgroup&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=flat-square&logo=pwa&logoColor=white)
![WebGL](https://img.shields.io/badge/WebGL-990000?style=flat-square&logo=webgl&logoColor=white)

[Repository](https://github.com/Phygital-DevOps/Key-West-Treasure-Hunt)

---

### Studio Site

#### Phygital DevOps &mdash; Portfolio
> The studio site itself, built on the premise that the world comes first and the portfolio surfaces inside it as structure. You arrive by water at night to an island stage: a proscenium and painted flats in a row, lit from below, one flat per product. Walk around the edge of any flat and it turns out to be canvas on a frame — bracing, counterweights, and an island that does not stop where the scenery does.
>
> Backed by a `canon.json` source of truth so nothing the presentation says is invented, and a real asset pipeline: procedural and generative 3D through Blender and Hunyuan3D, mesh decimation and UV unwrapping in Python with trimesh and xatlas, silhouette-IoU and decimation-error measurement as gates, and glTF repacked to GLB (~26% smaller).

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=threedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Blender](https://img.shields.io/badge/Blender-E87D0D?style=flat-square&logo=blender&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![trimesh](https://img.shields.io/badge/trimesh-2C3E50?style=flat-square&logoColor=white)
![SciPy](https://img.shields.io/badge/SciPy-8CAAE6?style=flat-square&logo=scipy&logoColor=white)

[Live](https://phygitaldevops.com) &bull; [Repository](https://github.com/Phygital-DevOps/Phygital-DevOps)

---

## Tech Stack

<details open><summary><strong>Languages & Markup</strong></summary>
<br/>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Swift](https://img.shields.io/badge/Swift-F05138?style=for-the-badge&logo=swift&logoColor=white)
![Kotlin](https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![SQL](https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white)
![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

</details>

<details open><summary><strong>Frontend</strong></summary>
<br/>

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![styled--components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white)

</details>

<details open><summary><strong>Backend, Edge & Databases</strong></summary>
<br/>

![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Cloudflare Workers](https://img.shields.io/badge/Cloudflare_Workers-F38020?style=for-the-badge&logo=cloudflareworkers&logoColor=white)
![Workers KV](https://img.shields.io/badge/Workers_KV-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![Apollo GraphQL](https://img.shields.io/badge/Apollo_GraphQL-311C87?style=for-the-badge&logo=apollographql&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-DD2C00?style=for-the-badge&logo=firebase&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)
![Handlebars](https://img.shields.io/badge/Handlebars.js-000000?style=for-the-badge&logo=handlebarsdotjs&logoColor=white)

</details>

<details open><summary><strong>AI, ML & Data Science</strong></summary>
<br/>

![LangChain](https://img.shields.io/badge/LangChain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white)
![LangGraph](https://img.shields.io/badge/LangGraph-111111?style=for-the-badge&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)
![Anthropic](https://img.shields.io/badge/Anthropic-D97757?style=for-the-badge&logo=anthropic&logoColor=white)
![CrewAI](https://img.shields.io/badge/CrewAI-FF6B35?style=for-the-badge&logoColor=white)
![Hugging Face](https://img.shields.io/badge/Hugging_Face-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black)
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)
![GPT4All](https://img.shields.io/badge/GPT4All-4B0082?style=for-the-badge&logoColor=white)
![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?style=for-the-badge&logo=streamlit&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white)
![SciPy](https://img.shields.io/badge/SciPy-8CAAE6?style=for-the-badge&logo=scipy&logoColor=white)
![scikit--learn](https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikitlearn&logoColor=white)
![Plotly](https://img.shields.io/badge/Plotly-3F4F75?style=for-the-badge&logo=plotly&logoColor=white)
![Jupyter](https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white)
![Beautiful Soup](https://img.shields.io/badge/Beautiful_Soup-8B4513?style=for-the-badge&logoColor=white)
![Modal](https://img.shields.io/badge/Modal-7F5AF0?style=for-the-badge&logoColor=white)

</details>

<details open><summary><strong>On-Device ML & Audio</strong></summary>
<br/>

![ONNX Runtime](https://img.shields.io/badge/ONNX_Runtime-005CED?style=for-the-badge&logo=onnx&logoColor=white)
![Transformers.js](https://img.shields.io/badge/Transformers.js-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black)
![Whisper](https://img.shields.io/badge/Whisper-000000?style=for-the-badge&logo=openai&logoColor=white)
![Vosk](https://img.shields.io/badge/Vosk-1E88E5?style=for-the-badge&logoColor=white)
![OPUS--MT](https://img.shields.io/badge/OPUS--MT-005CED?style=for-the-badge&logoColor=white)
![Core ML](https://img.shields.io/badge/Core_ML-0A84FF?style=for-the-badge&logo=apple&logoColor=white)
![Web Audio API](https://img.shields.io/badge/Web_Audio_API-FF3E00?style=for-the-badge&logo=javascript&logoColor=white)

</details>

<details open><summary><strong>3D, Graphics & Realtime</strong></summary>
<br/>

![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white)
![React Three Fiber](https://img.shields.io/badge/React_Three_Fiber-black?style=for-the-badge&logo=react&logoColor=61DAFB)
![WebGL](https://img.shields.io/badge/WebGL-990000?style=for-the-badge&logo=webgl&logoColor=white)
![WebAssembly](https://img.shields.io/badge/WebAssembly-654FF0?style=for-the-badge&logo=webassembly&logoColor=white)
![Blender](https://img.shields.io/badge/Blender-E87D0D?style=for-the-badge&logo=blender&logoColor=white)
![Houdini](https://img.shields.io/badge/Houdini_Karma-FF4713?style=for-the-badge&logo=houdini&logoColor=white)
![Alembic](https://img.shields.io/badge/Alembic-4B8BBE?style=for-the-badge&logoColor=white)
![glTF](https://img.shields.io/badge/glTF_%2F_GLB-87C540?style=for-the-badge&logo=khronosgroup&logoColor=white)
![Unreal Engine](https://img.shields.io/badge/Unreal_Engine-0E1128?style=for-the-badge&logo=unrealengine&logoColor=white)
![trimesh](https://img.shields.io/badge/trimesh-2C3E50?style=for-the-badge&logoColor=white)
![xatlas](https://img.shields.io/badge/xatlas-6A5ACD?style=for-the-badge&logoColor=white)
![Hunyuan3D](https://img.shields.io/badge/Hunyuan3D-0052D9?style=for-the-badge&logoColor=white)
![Canvas API](https://img.shields.io/badge/Canvas_2D-FF6F00?style=for-the-badge&logo=html5&logoColor=white)

</details>

<details open><summary><strong>Web Platform APIs</strong></summary>
<br/>

![Service Workers](https://img.shields.io/badge/Service_Workers-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)
![Web Workers](https://img.shields.io/badge/Web_Workers-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Cache Storage](https://img.shields.io/badge/Cache_Storage-4285F4?style=for-the-badge&logoColor=white)
![IndexedDB](https://img.shields.io/badge/IndexedDB-2C3E50?style=for-the-badge&logoColor=white)
![WebSocket](https://img.shields.io/badge/WebSocket-010101?style=for-the-badge&logoColor=white)
![Gamepad API](https://img.shields.io/badge/Gamepad_API-1E88E5?style=for-the-badge&logo=w3c&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

</details>

<details open><summary><strong>Mobile & Native</strong></summary>
<br/>

![Swift](https://img.shields.io/badge/Swift-F05138?style=for-the-badge&logo=swift&logoColor=white)
![SwiftUI](https://img.shields.io/badge/SwiftUI-0071E3?style=for-the-badge&logo=swift&logoColor=white)
![Kotlin](https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white)
![Jetpack Compose](https://img.shields.io/badge/Jetpack_Compose-4285F4?style=for-the-badge&logo=jetpackcompose&logoColor=white)
![Xcode](https://img.shields.io/badge/Xcode-147EFB?style=for-the-badge&logo=xcode&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)

</details>

<details open><summary><strong>Cloud & Deployment</strong></summary>
<br/>

![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)
![Wrangler](https://img.shields.io/badge/Wrangler-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonwebservices&logoColor=white)
![Google Cloud](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-DD2C00?style=for-the-badge&logo=firebase&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Modal](https://img.shields.io/badge/Modal-7F5AF0?style=for-the-badge&logoColor=white)

</details>

<details open><summary><strong>Tools & Platforms</strong></summary>
<br/>

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![GitLab](https://img.shields.io/badge/GitLab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)
![Claude Code](https://img.shields.io/badge/Claude_Code-D97757?style=for-the-badge&logo=anthropic&logoColor=white)
![MCP](https://img.shields.io/badge/Model_Context_Protocol-D97757?style=for-the-badge&logo=anthropic&logoColor=white)
![Windsurf](https://img.shields.io/badge/Windsurf-0B5FFF?style=for-the-badge&logo=windsurf&logoColor=white)
![OBS Studio](https://img.shields.io/badge/OBS_Studio-302E31?style=for-the-badge&logo=obsstudio&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white)
![Discord.js](https://img.shields.io/badge/Discord.js-5865F2?style=for-the-badge&logo=discord&logoColor=white)
![Sharp](https://img.shields.io/badge/sharp-99CC00?style=for-the-badge&logoColor=white)
![macOS](https://img.shields.io/badge/macOS-000000?style=for-the-badge&logo=apple&logoColor=white)
![Zsh](https://img.shields.io/badge/Zsh-F15A24?style=for-the-badge&logo=zsh&logoColor=white)

</details>

---

## GitHub Stats

<p align="center">
  <a href="https://github.com/P5YC0DR3AM3R">
    <img src="https://streak-stats.demolab.com?user=P5YC0DR3AM3R&theme=github-dark-blue&hide_border=true&border_radius=8" alt="GitHub Streak" width="49%" />
  </a>
  <a href="https://github.com/P5YC0DR3AM3R">
    <img src="https://raw.githubusercontent.com/P5YC0DR3AM3R/P5YC0DR3AM3R/main/assets/top-languages.svg" alt="Top Languages" width="49%" />
  </a>
</p>

<p align="center">
  <a href="https://github.com/P5YC0DR3AM3R">
    <img src="https://github-readme-activity-graph.vercel.app/graph?username=P5YC0DR3AM3R&theme=github-compact&hide_border=true&area=true" alt="Activity Graph" width="95%" />
  </a>
</p>

---

## Education & Certifications

<table>
  <tr>
    <td align="center" width="50%">
      <img src="https://img.shields.io/badge/edX-02262B?style=for-the-badge&logo=edx&logoColor=white" alt="edX" /><br/><br/>
      <strong>EdX / UCF Full Stack Flex Coding Bootcamp</strong><br/>
      <sub>Graduated: June 2024</sub><br/><br/>
      <em>Comprehensive training in full stack development covering front-end and back-end technologies.</em><br/><br/>
      <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5" />
      <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3" />
      <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JS" />
      <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
      <img src="https://img.shields.io/badge/Node.js-5FA04E?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node" />
      <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB" />
    </td>
    <td align="center" width="50%">
      <img src="https://img.shields.io/badge/Simplilearn-FF6600?style=for-the-badge" alt="Simplilearn" />
      <img src="https://img.shields.io/badge/U%20of%20Michigan-00274C?style=for-the-badge&logoColor=white" alt="UMich" /><br/><br/>
      <strong>Applied Generative AI Specialization</strong><br/>
      <sub>Completed: October 2025</sub><br/><br/>
      <em>Advanced specialization in applied generative AI concepts and techniques. Issued by University of Michigan / Simplilearn.</em><br/><br/>
      <img src="https://img.shields.io/badge/Generative_AI-412991?style=flat-square&logo=openai&logoColor=white" alt="GenAI" />
      <img src="https://img.shields.io/badge/Machine_Learning-FF6F00?style=flat-square&logo=tensorflow&logoColor=white" alt="ML" />
      <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python" />
      <img src="https://img.shields.io/badge/LangChain-1C3C3C?style=flat-square&logo=langchain&logoColor=white" alt="LangChain" />
      <img src="https://img.shields.io/badge/CrewAI-FF6B35?style=flat-square&logoColor=white" alt="CrewAI" />
      <img src="https://img.shields.io/badge/Streamlit-FF4B4B?style=flat-square&logo=streamlit&logoColor=white" alt="Streamlit" />
      <img src="https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white" alt="OpenAI" />
      <img src="https://img.shields.io/badge/Anthropic-D97757?style=flat-square&logo=anthropic&logoColor=white" alt="Anthropic" />
      <img src="https://img.shields.io/badge/Plotly-3F4F75?style=flat-square&logo=plotly&logoColor=white" alt="Plotly" />
      <img src="https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=pandas&logoColor=white" alt="Pandas" />
      <img src="https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=numpy&logoColor=white" alt="NumPy" />
      <img src="https://img.shields.io/badge/scikit--learn-F7931E?style=flat-square&logo=scikitlearn&logoColor=white" alt="scikit-learn" />
      <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker" />
      <img src="https://img.shields.io/badge/Jupyter-F37626?style=flat-square&logo=jupyter&logoColor=white" alt="Jupyter" />
      <img src="https://img.shields.io/badge/Beautiful_Soup-8B4513?style=flat-square&logoColor=white" alt="Beautiful Soup" />
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <strong>Liberty University</strong> &mdash; Lynchburg, VA<br/>
      <sub>Attended: August 1999 &ndash; May 2000</sub>
    </td>
    <td align="center" width="50%">
      <strong>Collins Hill High School</strong> &mdash; Suwanee, GA<br/>
      <sub>Graduated: 1999</sub>
    </td>
  </tr>
</table>

---

<details><summary><strong>Earlier Projects</strong></summary>
<br/>

### Patent Miner V3
> AI-powered platform that discovers expired patents and transforms them into commercialization opportunities, analyzing 186 patents with hybrid retrieval and multi-dimensional viability scoring.

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?style=flat-square&logo=streamlit&logoColor=white)
![CrewAI](https://img.shields.io/badge/CrewAI-FF6B35?style=flat-square&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Plotly](https://img.shields.io/badge/Plotly-3F4F75?style=flat-square&logo=plotly&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=flat-square&logo=render&logoColor=white)

[Live Demo](https://patent-miner.onrender.com) &bull; [Repository](https://github.com/P5YC0DR3AM3R/Patent-Miner)

---

### J.A.T.E. (Just Another Text Editor)
> A simple and effective tool for capturing code snippets on the fly.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)

[Live Demo](https://inbrowtexed.onrender.com/) &bull; [Repository](https://github.com/P5YC0DR3AM3R/InBrowTexEd)

---

### Note Taker
> A note-taking application built with React.

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)

[Live Demo](https://takenote-k889.onrender.com/) &bull; [Repository](https://github.com/P5YC0DR3AM3R/takeNote)

---

### Portfolio
> Personal portfolio website showcasing my work and skills.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

[Live Demo](https://p5yc0dr3am3r.github.io/personal_portfolio/) &bull; [Repository](https://github.com/P5YC0DR3AM3R/personal_portfolio)

</details>

---

<details><summary><strong>Work Experience</strong></summary>
<br/>

| Company | Role | Period |
|---------|------|--------|
| **Phygital DevOps** | Creator &mdash; Interactive platforms and phygital systems | 2025 - Present |
| **Self Employed** | Performing Artist - Voice and Guitar | 2002 - Present |
| **Hard Rock Hotel at Universal Orlando** | Singer Performer - Trio, Duo and Solo | 2011 - Present |
| **BookIt Entertainment Corporate Events** | Performing Artist - Tripped Up Trio, Duo and Solo | 2009 - 2022 |
| **MRMG Live** | Senior Partner - Stage Management and Entertainment Director | 2017 - 2019 |
| **Fishlips, Cape Canaveral** | Entertainment Director - Schedule, Payroll and Performer | 2014 - 2020 |
| **Brewmaster's Invitational Beer Festival** | Sound Reinforcement Coordinator, Lead Sound Tech, Performer | 2015 & 2016 |
| **Good Company Music Nashville** | Full Band, Trio, Duo and Solo - Logistics/Sound Tech/Performer | 2014 - 2015 |
| **The Sound - Dove Records** | Vocalist and Recording Artist | 2000 - 2001 |
| **Light Ministries, Liberty University** | Vocal Performance Scholarship - Kenya Mission Trip | 2000 |

</details>

---

## License

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://lbesson.mit-license.org/)

<details><summary>View MIT License</summary>
<br/>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

</details>

---

## Contributing

Interested in contributing? Email me and put **"Request to push to GitHub Repo"** in the subject line and we can discuss!

- General &mdash; <micahreadmgmt@gmail.com>
- Phygital DevOps business &mdash; <micah@lyricshow.live>

---

## Learning Sources

![Stack Overflow](https://img.shields.io/badge/Stack_Overflow-F58025?style=for-the-badge&logo=stackoverflow&logoColor=white)
![W3Schools](https://img.shields.io/badge/W3Schools-04AA6D?style=for-the-badge&logo=w3schools&logoColor=white)
![edX](https://img.shields.io/badge/edX-02262B?style=for-the-badge&logo=edx&logoColor=white)
![MDN Web Docs](https://img.shields.io/badge/MDN_Web_Docs-000000?style=for-the-badge&logo=mdnwebdocs&logoColor=white)
![Le Chat](https://img.shields.io/badge/Le_Chat-FF7000?style=for-the-badge&logo=mistral&logoColor=white)
![Claude](https://img.shields.io/badge/Claude-D97757?style=for-the-badge&logo=anthropic&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white)
![Grok](https://img.shields.io/badge/Grok-000000?style=for-the-badge&logo=x&logoColor=white)
![Perplexity](https://img.shields.io/badge/Perplexity-20808D?style=for-the-badge&logo=perplexity&logoColor=white)
![Cohere](https://img.shields.io/badge/Cohere-39594D?style=for-the-badge&logo=cohere&logoColor=white)
![Microsoft Copilot](https://img.shields.io/badge/Microsoft_Copilot-0078D4?style=for-the-badge&logo=microsoft&logoColor=white)
![ChatGPT](https://img.shields.io/badge/ChatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white)
![DeepSeek](https://img.shields.io/badge/DeepSeek-4D6BFE?style=for-the-badge&logo=deepseek&logoColor=white)
![Julius AI](https://img.shields.io/badge/Julius_AI-F05A28?style=for-the-badge&logo=chartdotjs&logoColor=white)
![Three.js Docs](https://img.shields.io/badge/Three.js_Docs-000000?style=for-the-badge&logo=threedotjs&logoColor=white)
![Khronos Group](https://img.shields.io/badge/Khronos_glTF_Spec-87C540?style=for-the-badge&logo=khronosgroup&logoColor=white)
![Cloudflare Docs](https://img.shields.io/badge/Cloudflare_Docs-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)
![Awesome Azure Developer CLI](https://img.shields.io/badge/Awesome_Azure_Developer_CLI-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white)
![Awesome MCP Servers](https://img.shields.io/badge/Awesome_MCP_Servers-D97757?style=for-the-badge&logo=anthropic&logoColor=white)

---

<p align="center">
  <sub>General: <a href="mailto:micahreadmgmt@gmail.com">micahreadmgmt@gmail.com</a> &nbsp;&bull;&nbsp; Business: <a href="mailto:micah@lyricshow.live">micah@lyricshow.live</a></sub>
</p>

<pre align="center"><font size="1">
8888888b.  888888888 Y88b   d88P  .d8888b.   .d8888b.       8888888b.  8888888b.   .d8888b.         d8888 888b     d888  .d8888b.  8888888b.
888   Y88b 888        Y88b d88P  d88P  Y88b d88P  Y88b      888  "Y88b 888   Y88b d88P  Y88b       d88888 8888b   d8888 d88P  Y88b 888   Y88b
888    888 888         Y88o88P   888    888 888    888      888    888 888    888      .d88P      d88P888 88888b.d88888      .d88P 888    888
888   d88P 8888888b.    Y888P    888        888    888      888    888 888   d88P     8888"      d88P 888 888Y88888P888     8888"  888   d88P
8888888P"       "Y88b    888     888        888    888      888    888 8888888P"       "Y8b.    d88P  888 888 Y888P 888      "Y8b. 8888888P"
888               888    888     888    888 888    888      888    888 888 T88b   888    888   d88P   888 888  Y8P  888 888    888 888 T88b
888        Y88b  d88P    888     Y88b  d88P Y88b  d88P      888  .d88P 888  T88b  Y88b  d88P  d8888888888 888   "   888 Y88b  d88P 888  T88b
888         "Y8888P"     888      "Y8888P"   "Y8888P"       8888888P"  888   T88b  "Y8888P"  d88P     888 888       888  "Y8888P"  888   T88b
</font></pre>

<!-- Animated Wave Footer -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0D1117,50:1A1B27,100:0D1117&height=120&section=footer" width="100%" alt="Footer" />
</p>
