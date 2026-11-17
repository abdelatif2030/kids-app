# START HERE — continue the Rehlaty learning game on another Claude account, exactly like the previous one

State at the end of this session (2026-11-17): 12 worlds, 8 questions per level, **12 of 12 picture packs on** (219 picture-words),
**1168 of 1168 Arabic sentences recorded** with Fatima's voice, demo deployed (`Demo: Music pack: all 12 packs on`). Everything is in git
(`github.com/abdelatif2030/kids-app`, branch `feature/rehlaty`). Long details: `docs/README_FULL_HANDOVER.md` (map, packs, voices) and
`docs/LEARNING_WORLD_HANDOVER.md` (technical map of the game).

## 0. Why the other account could not record voices (and how to fix it for good)
That account ran in a **cloud sandbox**: `api.elevenlabs.io` is blocked there (403 from a proxy) and its saved key used the wrong header
(`Authorization: Bearer`; ElevenLabs needs `xi-api-key`). Nothing in the repo is wrong. The previous session worked because **Claude Code ran on the
owner's own Windows computer** (full internet, Git Bash, Node, Python, ffmpeg, Flutter).
=> **Run Claude Code locally on the same computer (desktop app → Code tab, folder `C:\dev\rehlaty`), not in a cloud/web session.**

## 1. One-time setup on the computer (already done on the owner's PC)
- Folder `C:\dev\rehlaty` (clone: `git clone https://github.com/abdelatif2030/kids-app.git rehlaty`, then `git checkout feature/rehlaty`).
- Installed: Git for Windows (Git Bash), Node 22+, Python 3.12+ (`PYTHONUTF8=1`), ffmpeg + ffprobe on PATH, Flutter (web).
- `bash tools/sync_and_status.sh` pulls the latest, checks the tools, builds and tests the game and prints what is left.

## 2. The ElevenLabs key (give it to Claude in the environment, never in a file)
1. In ElevenLabs create an API key with **Text to Speech only** and a small credit limit (old key: delete it, it was pasted in an old chat).
2. In the chat tell Claude: "use this key only as an environment variable for this session" and paste it, OR set it yourself in PowerShell before
   starting the work:
   `$env:ELEVENLABS_API_KEY = "sk_..."`  (this lasts only for that window), then start Claude Code from the same window.
3. Claude uses it inline: `ELEVENLABS_API_KEY=… node tools/game_voice/generate.mjs --provider elevenlabs --voice I3u6waC588j43py1kDN2 --lang ar`
   (voice **Fatima**, model `eleven_multilingual_v2`, stability 0.55, similarity 0.8, 64 kbps mp3 — identical to every existing clip). Header is `xi-api-key`.
4. When finished, delete the key in ElevenLabs.
The one-click alternative on the PC: `tools\make_voices.ps1` (asks for the key, records the missing clips, pushes them).

## 3. The deploy values for the demo (from the owner, never in the repo)
`tools/deploy_demo.sh` needs these in the environment: `FIREBASE_API_KEY`, `FIREBASE_APP_ID`, `FIREBASE_SENDER_ID`, `FIREBASE_PROJECT_ID`, `FIREBASE_AUTH_DOMAIN`
(the web app of Firebase project `kids-app-2361e`) and `LESSONS_BASE_URL` (the owner's video storage). On the owner's PC they are in the old script
`C:\Users\lenovo\AppData\Local\Temp\deploy2.sh` (a copy was sent to the owner in the chat as `deploy_demo_local.sh`). The demo is Cloudflare Pages on
branch `demo-site`: https://demo-site-e3g.pages.dev (publishing lags 1–3 minutes). Close Chrome tabs before building (dart2js needs several free GB).

## 4. The first message to paste in the new Claude chat
> Read `docs/START_HERE_NEW_ACCOUNT.md`, `CLAUDE.md` and `docs/README_FULL_HANDOVER.md`. Run `bash tools/sync_and_status.sh`.
> Work exactly like the previous session: I send picture sheets or change requests; you cut/wire them (`tools/art/cut_pack.py`, `cut_art.sh`, worlds in
> `game_src/learn_games/src/kit/worlds3d.js`), rebuild the voice lines and diacritics (`make_more_words.py`, `node tools/game_voice/lines.mjs`,
> `make_tashkeel.py`), record every new sentence with Fatima (I will give you the key as an environment variable), build, run the tests, show me the
> result in the browser, then commit, push to `feature/rehlaty` and deploy the demo. Talk to me in Egyptian Arabic, short and concrete.

## 5. The daily loop (same as before)
1. `git pull` (merge, never force; another Claude may have pushed).
2. Change → `cd game_src/learn_games && npm run build:letters && npm test` (71 tests).
3. Preview: `cd assets && python -m http.server 8765` → `http://127.0.0.1:8765/games/learn_letters/index.html?age=5&level=<levelId>`
   (force-reload the script after a build: `fetch('game.js',{cache:'reload'})`).
4. New sentences → `PYTHONUTF8=1 python tools/game_voice/make_more_words.py && node tools/game_voice/lines.mjs && PYTHONUTF8=1 python tools/game_voice/make_tashkeel.py`
   (the last one fails loudly if a diacritized reading is missing or spelled differently) → record with `generate.mjs` (only missing clips are made) →
   `node tools/game_voice/check_ends.mjs` (cut endings) → review page `node tools/game_voice/listening_page.mjs --new`.
5. A sentence the owner says is mispronounced: add 3 spellings to `VARIANTS` in `tools/game_voice/takes.mjs`, `takes.mjs make list.txt work`,
   `takes.mjs page …`, he picks, `takes.mjs apply picks.txt work`. Rules learnt: final ة is read «ه» (فُرْشَاه), «كلمة X» is read «كَلِمِت X», verbs Egyptian
   (نِغْسِل), stretch with a sukun or doubled letter when a sound is swallowed.
6. `git add -A assets/games docs tools game_src && git commit && git push`, then `tools/deploy_demo.sh "<message>"`.

## 6. What is left (ideas the owner mentioned)
- Real phone/tablet test (touch, sound, 8-star bar, owl's rack of 8 dishes).
- Jungle/space etc. already have pads; only home pads came late (installed by the other account).
- New worlds or levels per topic (clothes, body, jobs, weather, food, school, family, music…): each needs a `PICKS` table + `LEVELS` entry
  (`letters/levels.js`), prompts in `tools/game_voice/tashkeel_more.py`, and a world in `WORLD_IDS` (levels wrap onto worlds).
- Shapes level only has 5 shapes (rectangle/oval/diamond need geometry in `kit/shapes3d.js`).
- Hearts sentences #27–#30 and pond butterflies/birds with the owner's pictures; replace the free-tier watermarked hero clips before a real release.
