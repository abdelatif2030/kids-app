# Rehlaty (رحلتي) — FULL HANDOFF for the next Claude account
**Last updated:** 2026-11-26 (covers the long chat that started 2026-11-17 and ended 2026-11-26).
**Read order for the new Claude:** this file → `CLAUDE.md` (project rules, always loaded) → `docs/START_HERE_NEW_ACCOUNT.md` → `docs/README_FULL_HANDOVER.md` → `docs/REMAINING_PROMPTS_FOR_INSTINCT.md` (the live art queue).
**New plan to read before building anything: section 11 (English + German learning worlds).**
**First thing to run:** `bash tools/sync_and_status.sh` (pulls, checks tools, builds and tests, prints what is left).
**Talk to the owner in short, concrete Egyptian Arabic.** He is Abdellatif (`abdelatif2030` on GitHub). He tests on a landscape phone and by the demo link, and gives feedback in one-line Arabic messages.

---

## 0. The 60-second picture
- **Rehlaty** = Arabic-first (Egyptian dialect) kids app, ages **1–6**, "mini home school". Flutter (Android first + a web demo) + **~73 web games** (three.js / canvas, in `game_src/<game>`, built into `assets/games/<game>/game.js`).
- **Repo:** `C:\dev\rehlaty` = `github.com/abdelatif2030/kids-app`, branch **`feature/rehlaty`** (527 commits at the time of writing). Demo branch **`demo-site`** (Cloudflare Pages): **https://demo-site-e3g.pages.dev** (publishing lags 1–3 min).
- **Current phase:** make every *fun/entertainment* game look **professional and distinct** (key art, UI skin, a different backdrop per level using Egyptian + world landmarks, kid-friendly Egyptian names, original characters, shared back/sound/pause buttons), one game at a time, tested as a child on a landscape phone, then deployed to the demo and verified. In parallel: new Egyptian voices for the learning games (3588 clips, **all installed**) and section greetings.
- **Standing rule from the owner:** "work game by game, don't stop, don't run extra agents unless I ask, ask nothing I can decide myself".

---

## 1. Hard rules (from `CLAUDE.md` + owner decisions — never break)
1. **No YouTube** (owner decision 2026-11-06). Only the owner's OWN lesson videos streamed from `LESSONS_BASE_URL`. No ads, no external links, no tracking, no analytics SDKs, no third-party content for the child.
2. Child data stays **local**. **Online features are OFF in Release 1** (`kOnlineFeaturesIntended = false`; Firebase/family chat/calls/teachers code kept for a later phase).
3. Stars/rewards **only for finishing an activity**; no streaks, no comeback nudges, no hard losses in games (age 3 = easy mode).
4. **Copyright:** no copyrighted characters or brands (no Pepsi-Man → we made the original «فيزمان/فيزو الشاطر»; no Batman/Spider-Man style heroes). Heroes are original "in the same spirit".
5. **Secrets:** never put keys in files. ElevenLabs / Cloudflare / Firebase values only from environment variables. **The owner pasted a Cloudflare API token in chat once — remind him to delete/roll it** (he has been reminded repeatedly; still do it at the end of the art work). **Never type passwords** — the owner signs in himself (ChatGPT, Gemini, Firebase, Cloudflare, Oracle).
6. **Ask before** installing packages, publishing rules, anything outward-facing. Standing approval: commit + push to `feature/rehlaty` after finishing a piece of work; demo deploys to `demo-site` were requested by the owner each time ("publish / deploy") — keep doing it when he says so. Deploys must **not run in parallel**.
7. Never invent YouTube IDs, credentials, bundle ids, Firebase config or approvals.
8. Dart gotcha: a title with an apostrophe in `tr2('…', 'Amoora's Truck')` breaks the build → use **double quotes** for that string.

---

## 2. Tools, accounts and environment
| Thing | Where / how |
|---|---|
| Machine | Windows 11, user `lenovo`. Git Bash + PowerShell. Flutter at `/c/src/flutter`. Node 22+, Python 3.12+ (Python 3.14 on PATH, default console is cp1252: print Arabic only after `PYTHONUTF8=1` or write to files), ffmpeg/ffprobe on PATH. |
| Desktop path | **`C:\Users\lenovo\OneDrive\Desktop`** (it is a OneDrive Desktop!). In Python from Git Bash use `os.path.expanduser('~/OneDrive/Desktop/...')`; writing to `/c/Users/lenovo/Desktop` puts files where the owner cannot see them. |
| Local game server for headless tests | `cd assets/games && python -m http.server 8099`, then the helpers in `game_src/` (`_eval.mjs`, `_shot_seq.mjs`, `_record.mjs`, `_fit_check.mjs`, `_walk_levels.mjs`, `_play_tour.mjs`, `_err.mjs`, `_con.mjs`, `_live.mjs`). Headless Chrome cannot watch the moto countdown animate; real motion was never seen live. |
| Build one game | `cd game_src/<game> && npm run build` (→ `assets/games/<game>/game.js`), `npm test`. |
| Whole-app tests | `flutter analyze` and `flutter test` (1449+ tests in 141 files; one old `_round` warning is known). |
| Demo deploy | `bash tools/deploy_demo.sh "message"` — needs `FIREBASE_API_KEY, FIREBASE_APP_ID, FIREBASE_SENDER_ID, FIREBASE_PROJECT_ID, FIREBASE_AUTH_DOMAIN, LESSONS_BASE_URL` in the env (on the owner's PC: `C:\Users\lenovo\AppData\Local\Temp\deploy2.sh`; a copy `deploy_demo_local.sh` was sent to him). Builds with `tool/build_demo_login.sh`, publishes to `demo-site`. Log to `build/deployNN.log` and wait for the line `PUSHED`. Last deploys: **deploy66** (section voices) and **deploy67** (music fix, below) both reached `PUSHED` on 2026-11-26 and the section MP3s are served as `audio/mpeg`. Log to `build/deployNN.log`, wait for `PUSHED` (a build takes ~6 min). The six deploy values are stored in the git-ignored `build/.deploy_env` (run `set -a; . build/.deploy_env; set +a` before `bash tools/deploy_demo.sh "message"`; `game_src/_find_deploy_env.py` rebuilds that file from old chat logs if it is lost). |
| Deploy pitfalls | (a) Disk full ("unable to write file") → delete `build/chrome_*`, preview folders, the temp git worktree, then redeploy. (b) Close Chrome tabs first (dart2js needs several GB). (c) Python `urllib` gets 403 from the demo → use `curl`. (d) `web/_headers` has `/assets/assets/games/*  Cache-Control: no-cache` so game updates show at once. |
| Cloudflare | Pages hosts the demo; **R2** is planned for lesson videos. Decision 2026-11-17: **stay on Cloudflare** (Oracle trial account exists, unused). Cloudflare Workers AI token (env `CLOUDFLARE_AI_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`) was used by `tools/gen_images_cf.mjs` for free FLUX images (low quality, ~190/day) — replaced by ChatGPT images. |
| ElevenLabs | Voice "Fatima" id `I3u6waC588j43py1kDN2`, model `eleven_multilingual_v2`, stability 0.55, similarity 0.8, mp3 64 kbps, text always diacritized (`tools/game_voice/tashkeel.json`). New account since 2026-11-18; key only in env `ELEVENLABS_API_KEY` (header `xi-api-key`). Run `node tools/game_voice/check_voice.mjs` first. Details: `docs/VOICE_CONTINUITY.md`, memory file `voice-fatima-continuity.md`. |
| Firebase | Project `kids-app-2361e` (web app config only used by the demo build). Rules file `firestore.rules` (59 emulator tests in `rules_test/`) — **not published**; online gate stays off. |
| Instinct | Another AI/assistant the owner works with through WhatsApp. It makes (a) the 3588 Egyptian voice clips, (b) section greeting recordings (voice "Lida"), (c) layered/animated character art (Zizo). The owner relays files by Downloads zips. Instinct agreed with our rule "video = idea reference, not source assets; use our cartoon pictures + code motion". |

### Browser/ChatGPT automation (how images are made)
- All key art is generated in **ONE ChatGPT chat** (owner's subscription), driven through Claude-in-Chrome. Owner insisted: **same chat only** (he deleted the first chat because Adam/Nour came out wrong), and wait between images ("one by one, don't fast-generate"; after ~10 minutes when a rate limit shows).
- Method: press Escape (avoid typing into the viewer's edit box), `execCommand('insertText')` into the contenteditable, Return, wait for the image, open it in the viewer (click image ~ (880,300) after (880,570)), download icon ~ (1086,26), menu "Download image" ~ (936,77). Guard against duplicate downloads with md5. Scripts: `tools/gpt_take.py`, `tools/cut_sheet.py` (cuts sprite sheets; inner 2.5% margin), `tools/install_keyart.py`, `tools/process_art.py`, progress notes in `tools/gpt_progress.json`.
- **Adam & Nour** (official app characters) appear small in the corner of key art, with an outfit that fits the game. The owner **rejected the round badge version** and approved a set of 8 outfit pairs (`adam_nour_outfits_APPROVED` on the Desktop; chef outfit missing in chat → for farm use the farmer pair, chef pair for the bakery). Reference sheets in `assets/characters/`.
- Gemini (`gemini.google.com/u/1/app`) was also used for a batch earlier (memory file `gemini-image-batch.md`), then ChatGPT replaced it.

---

## 3. Architecture cheat-sheet
- **Flutter app** (`lib/`): child shell with picture screens (`lib/journey/ui/picture_screens.dart`, owner's own pictures with invisible tap areas), parent area behind PIN, journey/lands, letters, stories, studio, family chat (off), teachers marketplace (off), printables (PDF), demo mode (`--dart-define=DEMO=true`).
- **Web games contract:** `window.<Global>.start(el, config, post)`, plus `crStart/crStop` from `boot.js`. Each game is registered in `lib/games/web_games/web_game.dart` (`WebGame(id, folder, global, storeKey, minAge, title: tr2(ar, en))`, 73 definitions: 62 fun games + 11 learning). `tools/register_game.py` registers a new game (Flutter entry, reset key, pubspec asset dir, card on a fun page, test). Every `assets/games/<folder>/` directory must be listed in `pubspec.yaml` (e.g. `skin/`, `models/`, `art/`).
- **Fun-games UI** (`lib/games/fun_sections.dart`, `fun_games_*`): sections/hub pages with backdrops `assets/games/sections/bg_<id>.webp`, tiles `<id>.webp`, per-game `card.webp`, emoji fallback `kFunGameEmoji`. **Planned redesign:** a Nile scene where each *boat* is a section showing its name + game count (prompts CAT-1/CAT-2 in the remaining-prompts file).
- **Learning games:** 10 rebuilt as 3D web games in `game_src/learn_games` (shared kit: Stage3d, tone mapping, nature, `things3d`), Arabic voice from recorded clips `assets/games/learn_voice/ar/<id>.mp3` (ids come from the plain text; `docs/LEARNING_GAMES_VOICE_REQUEST.csv`), fallback device voice. Page `LearningGamesScreen` (`lib/games/learning_page.dart`).
- **Per-game art pipeline (what "done" means for a game):**
  1. `poster.webp` — menu backdrop, applied by `assets/games/menubg.js` when a visible `[class*="-panel"], [class*="-tracks"], .sh-card, .ar-card, .as-card, .rs-card, .fz-menu, .hw-card` exists.
  2. `card.webp` — the game's card on the fun pages (key art; Adam & Nour small in a corner).
  3. `skin/` (`panel, play, lv_open/lock/done/sel, ribbon, sound, pill_*.webp`) + `skin.css` linked in `index.html` + `assets/games/<g>/skin/` in `pubspec.yaml`.
  4. **Panoramas** `art/pano{N}.webp`: mirrored cylinder rings — `THREE.CylinderGeometry` BackSide, `MirroredRepeatWrapping`, `repeat(2,0.66)`, `offset(0,0.34)`, follows the camera; one per level so **no place repeats across levels or games** (registry in memory `egypt-content-ideas.md`; watch out for `depthWrite`/`renderOrder` hiding the panorama — fixed in air_race and carnival).
  5. Kid-friendly Egyptian name (`tr2`), level names after real places.
- **Shared controls:** `assets/games/shared_controls.js` restyles back/sound/pause with the kit in `assets/ui/kit/` (data-sk attributes); `nozoom.js` blocks iOS zoom. (A copy of the kit at `assets/games/ui` is TEMP for local tests — do not commit.)
- **Sections voices (new):** `lib/media/section_voice.dart` plays Lida's greetings on entering sections (`assets/audio/voices/lida/ar/section_{games,fun,learning,stories,coloring,videos}.mp3`, `intro_app.mp3`); `WelcomeVoice` now points at `intro_app.mp3`; `SectionVoice.testing` is set in tests (the plugin throws `MissingPluginException` in widget tests otherwise). **Fixes 2026-11-26 (deployed as deploy67):** (a) the old «هنتعلم سوا النهارده» greeting was removed from `LearningGamesScreen` (the page now says only the new Lida section greeting); the fun-games picture page `FunGamesScreen` (lib/games/games_choice.dart) still plays the old «هنلعب سوا النهارده» (`PageVoice.playToday`) - the owner has not asked to remove it yet. (b) Hub music (`lib/media/hub_music.dart`) did not stop when leaving a page: `await p.play()` never returns while playing, so the queued stop (`release`) waited behind it. Now `play()` is not awaited and `release` pauses at once. (c) Music starts only after the section welcome ends (`SectionVoice.waitIdle()`, max 12 s). `brand_cartoon.mp3` (8th line) is **not wired**; the mapping of the 8 recordings to sections was done by order/duration only and **not audibly verified** — ask the owner to listen on the demo.
- **Zizo layered animation** (moto race): `game_src/moto_race/src/main.js` `_initZizoLayers/_makeZl` draws a canvas texture from Instinct's 219×383 layers (wheel tread scroll, tail rotation, nitro flame), assets `assets/games/moto_race/art/zl_*.webp`. Race pace: `RACE_PACE = 0.78` applied as a time scale (`race.step(dt*RACE_PACE)`, speedometer `kmh = round(p.v*3.6*RACE_PACE)`); scaling `vmax` in `sim.js` broke tests, so don't. Camera: `back = portrait ? 5.2 : 3.7`, `up = portrait ? 2.6 : 1.85`, `lerp(…, min(1, dt*18))`, fov grows with speed (max +4, +3 boost). Opening voice `intro.mp3` plays once when the moto game opens (owner's voice message).

---

## 4. Chronology (Nov 17 → Nov 26) — what was decided and built
**Nov 17 — learning game finishing.** New voices review file; fixed "first sentence not spoken when entering the next level"; owner decided learning is **not tied tightly to age** (2–6 can do everything; the app knows the age and adapts); finished colours, shapes packs. Oracle Cloud trial account created and inspected; comparison for >10 GB storage → **decision: stay on Cloudflare** (Pages + R2, pay later if needed).
**Nov 18 — more content + new fun games.** Fixed rotating numbers in level selection; rewards shown top-right; level-selector circle made obvious in landscape. Letter-order question list voice review (owner picked approved/rejected per line). Owner asked ≥50 things to learn per level (12 levels), then performance + store-readiness pass (`docs/PERFORMANCE_AND_STORE_READINESS.md`; mic permission kept for family calls, privacy-policy draft must be hosted). First recordings of fun-game videos pasted with prompts (tower climbing knight → Hero Tower; top-down shooter; idle clicker "creator"; pearl diving; rug cleaning; hamster warrior; viking slingshot; neon card battle; ice rink; football ball; dino grow; barrel knights; Halloween crowd runner; temple army maze; sweet tray; scooping truck…). Owner wanted each game **exactly like its video + prompt**, tested. New ElevenLabs account; Fatima voice preserved. Left/right inversion bug in a runner fixed.
**Nov 19–20 — scripts for images, agents.** Owner asked for ONE file of image scripts for all games (`docs/ALL_GAMES_IMAGE_SCRIPTS.md`, 370 → later more). Free image generation explored (Cloudflare FLUX → quality poor; AI Horde; Pollinations). Back button added to every fun game (small, both sides). Games reviewed and rebuilt against videos (`docs/REVIEW_<game>.md`, `docs/ORIGINAL_BRIEFS.md`). Hamster Warrior rebuilt like its video.
**Nov 21 — review marathon.** Owner: "more than 24 learning games existed — did you remove levels?" (answer: final set is 10 rebuilt 3D games + others on page 2). Sound of fun games must stop when going to educational. Reviewed all fun games, fixed slow ones, coastal drive traffic cars driving sideways, ugly cars after first image; per-level backgrounds must be new and consistent; "cars must look cartoon-professional". Disk cleanup commands given. Girls section: 5 new toddler-girl games the owner disliked → merged into **one game "عالم الأميرة" (Princess World)** with levels and interactive music instead of sound-only; back navigation fixed (back goes one step, not out of the world). **Fashion Queen** simplified instead of merged.
**Nov 22 — art tooling.** Owner wants real "professional game" polish: motion + sound improvements per game (done for one game, owner loved it, then "do the same for all, different sounds per game"). Gemini in Chrome used for a batch (owner signed in). 3D conversion of what can be 3D (carnival cards etc.). Rename of the Pepsi-Man request to an original hero (**Fizzo the Brave / فيزو الشاطر**). Subscription research for image generation (owner chose ChatGPT).
**Nov 25 — ChatGPT era + voices.** Generated key art one by one in the single ChatGPT chat; designer-level text on art (e.g. "كاس المتحف الكبير" big, readable). Created `docs/PRO_GAMES_FINAL_PROMPTS.md` (1011 prompts, 61 games), later `docs/REMAINING_PROMPTS_FOR_INSTINCT.md` (844 prompts, 54 games). Voices: file for Instinct (CSV + brief), **backup of the old voices** (git tag `voices-backup-2026-11-26`, folder + zip on Desktop), batches 1–7 (3588 clips) validated with ffprobe and installed (`learn_voice/ar` now 3599 files), demo deployed (`3828e264 Demo: All new Egyptian voices (3588 clips)`). Owner noticed some games on the demo looked new only on the outside picture (later fixed by per-game skins/panoramas). Moto race owner feedback applied step by step (see §6). Section voices from Instinct wired. Owner asked for this handoff. **Nov 26:** deploy66/67 verified, music-stop bug fixed, learning page greeting de-duplicated, then planning of the **English + German learning worlds** (section 11).

---

## 5. Status table of the fun games (art pass)
Legend: ✅ done (card + skin + names + panoramas, deployed) · 🟡 key art/name only · ⬜ not started. "Backdrops" = per-level panoramas.
| Game (id) | AR name | Status |
|---|---|---|
| moto_race | سباق الموتوسيكل (Zizo fox) | ✅ key art, skin, 6 panoramas, Zizo layers, nitro flames, pause panel, opening voice. **Never watched live** (headless can't); police/ambulance/fire vehicles idea pending |
| carnival_race | عربيات الملاهي | ✅ 6 panoramas (Nile Funfair, Alexandria Pier, Eid Night, Paris, Sinbad, Snow) |
| coastal_drive | عربيات الشاطئ | ✅ Siwa, Dahab, Nubian Aswan, Mount Sinai, Matrouh, Game City; closer camera |
| sunset_highway | سباق الغروب | ✅ 6 panoramas + stage names |
| air_race | سباق الطيارات | ✅ Cairo Airport, New Capital, Alex Library, Montaza, Baron Palace |
| splash_race | سباق السباحة | ✅ Aqua Park, Dream Park, Qarun, Moses Springs, Aswan Island, Champions Final |
| summit_rush | سباق التلج | 🟡 key art + 3 panoramas (Saint Catherine, Alpine village, Kilimanjaro); no skin/pills yet; chips c4–c12 names missing in i18n |
| rain_circuit | سباق المطر | 🟡 key art + skin; backdrops pending |
| dune_titans | عربيات الصحرا | 🟡 key art + skin + name; backdrops pending |
| hamster_warrior | هامي الشجاع | 🟡 key art, name, 3 skies (Moqattam, Black Desert, Eastern Mountains) |
| alien_sky | زومي في الفضا | 🟡 key art + name; **bg1/bg2 downloaded in `build/gpt_art`, not installed; bg3 not generated** |
| rhino_summit | كركوز والغيوم | 🟡 key art + name |
| ball_scoop | شاحنة عمورة | 🟡 key art + name (earlier art had pyramids/pig → redone) |
| fizz_runner | فيزو الشاطر | 🟡 original hero key art; card moved aside via skin.css; hero art still to redo |
| All other ~48 fun games | see `build/_games_list.txt` copy in this folder | ⬜ prompts exist in `REMAINING_PROMPTS_FOR_INSTINCT.md`; most are still code-drawn 2D |
Learning games (10 rebuilt 3D + page 2 extras) are functionally done; "رتّب يومي" is still 2D canvas. **Not built:** Hot Spring Village, Mars Farm (12 levels) screens exist only as placeholders/sim; Ice Dragon has only the sim.

**Order to continue ("continue from here"):** alien_sky (bg3 + skin + install bg1/bg2) → rhino_summit → summit_rush (skin + chips) → rain_circuit → dune_titans → ball_scoop → fizz_runner → the remaining ~48 games, each: key art → card → skin → per-level panoramas → names → test on landscape phone sizes (667×375, 844×390, 932×430) → build → commit → deploy → verify.

---

## 6. Moto race — the model for "one game done completely"
Owner feedback sequence (all applied): bike too far on landscape phone → closer camera + bigger bike; wheels not turning → tread scroll ×7; looks far when fast → tighter camera at speed, lerp 18; too fast → whole race at 78%; nitro must look real → flames drawn from the exhausts; title/signals must be visible; pause panel moved to the right; "the word doesn't fit" → renamed **«سباق الموتوسيكل»**; levels must not repeat places → 6 unique panoramas; opening voice → `intro.mp3` plays when the moto game opens (not at app start — the app greeting was restored). Instinct delivered Zizo layers + 5 poses + 5 rivals + rear-view sheet (sent as Document for full 2172 px). Open ideas: police/army/ambulance/fire vehicles in racing games; test video of the real game (`docs/MOTO_VIDEO_PROMPT.md` is the prompt for Instinct's reference clip: 6 s, 24 fps, green background, straight → left → right → nitro → soft crash → loop).

---

## 7. Voices — status
- Learning-game narrator: **3588 new Egyptian clips by Instinct** are installed (batches 1–7, files named by id from the CSV, ffprobe-validated). Old Fatima set is backed up (tag `voices-backup-2026-11-26`, Desktop folder + zip). ~2 old issues: owner listens to samples himself ("`voice-review-file-at-the-end`" memory: build ONE listening page only when he asks).
- Section greetings (Lida, via Instinct): 8 recordings installed as `assets/audio/voices/lida/ar/*.mp3` (opening, games, fun, learning, stories, coloring, videos, brand cartoon). The first 7 are wired through `SectionVoice`/`WelcomeVoice`; the last is not. **Verify audibly.**
- Adam's greetings `welcome_back` approved earlier; `new_place`, `lets_play` exist but are unapproved. Audio manifest: 0 of 360 library items approved (older audit; the learning-game voices are a separate system).
- Possible AI assistant for children (LLM with the recorded voice): discussed 2026-11-25, **decision pending** (parent consent, key handling, Oracle free tier + Docker vs Cloud Run, Gemini Flash vs Claude Haiku, Fatima/ElevenLabs voice vs pre-recorded phrases). Owner wants: a child can ask questions while learning, fast replies, interaction. Must follow the child-safety rules (parent opt-in, no logging of child data, safe answers only).

---

## 8. Open requests / backlog (owner intent, not yet done)
1. Finish art for all remaining games (see §5), then the **Nile catalog redesign**: fun-games home as a Nile scene with boats (each boat = a section: name + number of games).
2. **Egyptian Museum game** (6 halls: Ramses, Tutankhamun, Cleopatra… spec at the end of `REMAINING_PROMPTS_FOR_INSTINCT.md`).
3. Police/army/ambulance/fire vehicles for the racing games; original heroes (e.g., kid detective).
4. Zizo-style layered animation for other characters (Instinct can produce layers).
5. LLM assistant decision (see §7).
6. Alien-sky bg3 + install bg1/bg2; confirm **deploy66**.
7. Learning-game voices: lines the owner dislikes are re-recorded by Instinct when he reports them; ~270 "new fact" sentences from the older Fatima plan are superseded by the new set.
8. Real-device testing (Android/iPhone), sound listening, iOS silent-audio behavior — never verified by a person. Android build/store steps are documented (`docs/ANDROID_RELEASE.md`, `PLAY_STORE_CHECKLIST.md`) but not executed.
9. Rotate the Cloudflare token; delete/roll the old ElevenLabs key; keep Firebase values out of the repo.
10. Owner's lesson videos upload (R2) and the privacy-policy hosting are release-time items (`docs/OWNER_TODO.md`).

---

## 9. Files in this folder
| File | What |
|---|---|
| `README.md` | this handoff |
| `REMAINING_PROMPTS_FOR_INSTINCT.md` | **latest** prompt file (844 prompts / 54 games, order, unique places pool, Nile catalog + museum spec). Also on the Desktop. |
| `PRO_GAMES_FINAL_PROMPTS.md` | earlier 1011 prompts for 61 games (already used for the finished games) |
| `ALL_GAMES_IMAGE_SCRIPTS.md` | oldest, broadest list of image scripts |
| `APP_SUMMARY_FOR_INSTINCT.md` | app summary sent to Instinct (Arabic) |
| `MOTO_VIDEO_PROMPT.md` | reference-clip prompt for Instinct |
| `gpt_progress.json` | progress notes of the ChatGPT image work |
| `games_list.txt` | the 73 registered games (id, min age, Arabic and English title) |
| `memory/*.md` | the previous account's memory notes (voice continuity, ChatGPT pipeline, Egypt content registry, hosting, art reuse) |
| `ENGLISH_WORDLIST.csv`, `GERMAN_WORDLIST.csv` | the exact words/clips to record for English (433 words, 1299 clips) and German (437 words, 1311 clips) |
| `ENGLISH_GERMAN_IMAGE_PROMPTS.md` | 36 image prompts for the language worlds |
| `owner_messages_timeline.md` | condensed list of the owner's messages in this chat (Arabic), for context |

## 10. Suggested first message for the new Claude chat
> Read `docs/HANDOFF/README.md`, `CLAUDE.md` and `docs/START_HERE_NEW_ACCOUNT.md`. Run `bash tools/sync_and_status.sh`. Check whether deploy66 (section voices) reached the demo; if not, deploy. Then continue the fun-games art pass from alien_sky exactly as in the README (one game at a time: art → install → test on landscape phone sizes → build → commit → deploy → verify), using `docs/REMAINING_PROMPTS_FOR_INSTINCT.md` and the single ChatGPT chat. Talk to me in short Egyptian Arabic.

---

## 11. English + German learning worlds (NEW, planned 2026-11-26 - nothing is built in the app yet)

### What the owner wants
Add **English and German** to the educational games, with the SAME amount of content that exists in Arabic, for children 3-6, so that children really learn. Owner decisions in chat: the owner has an excellent voice source and will produce the recordings from the word lists; each word must be **heard 3 times**; when a child picks "learn English" a **level map of English levels** appears (same for German).

### The agreed design (follow this, do not re-invent)
1. **Not separate games.** The same ten learning games (feed the animal, letter fishing, counting, shapes, sort, pattern, ladders, treasure, day, ball) with a **learning-language parameter**; words, voice clips and level names come from data. Arabic stays the instruction/praise language (Egyptian voice); only the TARGET word/sentence is English or German. Never mix two languages in one session.
2. **Language chooser** = first thing in «الألعاب التعليمية» (cards: Arabic / English / Deutsch), stored in the child profile field `ChildProfile.learnLang` (already exists, separate from the interface language; `lib/letters_game.dart` already has a 4-language first-letter game). German appears only when its clips exist. Open question to the owner: first screen vs small button (recommended: first screen).
3. **Level map per language** (all levels open, no locks; a star only for finishing): English 9 levels = Animals, Colours, Numbers, Shapes, Food, Body & clothes, Family & home, Greetings, Letters & sounds (phonics). German 10 levels = the same 9 + Umlaute (Ä Ö Ü ß). English first (the pilot); German after.
4. **Pilot first:** one level end to end - "Animals" in English inside «أطعم الحيوان» (10 words, pictures, voice, play) - then generalise. Recommended first batch ~150 English words (animals, colours, numbers, letters = ~450 clips).
5. **Three exposures per word (teaching method):** (a) before the action: the word at normal speed (`clip1`) with the Arabic instruction around it; (b) on a correct answer: the word inside a short sentence (`clip3`, e.g. "This is a cat."); (c) end-of-round recap: each word once, and the slow version (`clip2`, same text read slowly) when the child hesitates or is wrong. Wrong answer: never say the wrong word; replay the correct one slowly and highlight the picture; after 2 misses show and say the answer (no penalty). Never the same clip twice in a row; max 3 consecutive repeats of one word. Next sessions: old words twice before play, a lighter weekly review, struggling words more often (reuse the Leitner/adaptive logic of the letters). Listening alone is exposure, not mastery (existing Evidence model).
6. **Voice rules:** never use device TTS or the Egyptian Fatima voice for English/German words (the accent would be wrong). Recordings come from the owner's voice source; German MUST be checked by a native German speaker before recording/installing (the German text was written by Claude). German nouns are taught WITH their article (der/die/das). Praise/instructions stay Arabic.
7. **Do not build the 3588-sentence equivalent.** The Arabic 3588 clips are mostly generated questions/riddles about Egyptian culture; English/German need only the vocabulary + simple sentences (about 1300 clips each).

### Files and tools (all in the repo)
| Item | Where |
|---|---|
| English word list (433 words x 3 clips, with file names) | `docs/ENGLISH_WORDLIST.csv`, generated by `node tools/game_voice/english_wordlist.mjs` from the games' own data (animals, packs, letters-game words, colours, shapes, days, months, seasons, routine, positions, beads, sort items) |
| German word list (437 words x 3 clips, article + sentence) | `docs/GERMAN_WORDLIST.csv`, `node tools/game_voice/german_wordlist.mjs` (the dictionary is inside the script; it reads the English CSV for order) |
| Clip file names | `file1_word` = word normal, `file2_slow` = same text read slowly (`<id>_slow.mp3`), `file3_sentence`. English ids use the game's `clipId(text,'en')`. German ids use hash prefix `de|` (own copy in the script). **`clipId` in `game_src/learn_games/src/kit/voice.js` still maps every non-`en` language to `ar` - extend it to `de` when wiring.** |
| Image prompts (36) | `docs/ENGLISH_GERMAN_IMAGE_PROMPTS.md`, built by `python tools/build_language_prompts.py`: language chooser backdrop + 3 cards, guide characters (Pip the puppy for English, Iggy the hedgehog for German), per-language map backdrop + level badges + one backdrop per level (9 EN, 10 DE, unique places, no Alps/pyramids) + completion screen, shared greetings cards, seasons, weekdays, months, parts of the day, passport + stamps |
| Where words live in the games | `game_src/learn_games/src/**/sim.js`, `kit/words.js` (ITEM_WORDS has an English name per item, NUMBERS 1-30 has English), `letters/levels.js` (WORD_ITEMS), `tools/game_voice/packs/*.json`; the 7 older games already have an English text column in their `TEXT` tables (used by `tools/game_voice/lines.mjs` -> `assets/games/learn_voice/lines.json`); the four newest games are Arabic-only |

### Known caveats in the lists (check before recording)
- English `ball` merged the toy and the shape; German splits them (`der Ball` / `die Kugel`). Family words use "mom/dad" (US English); the owner can switch to mum/dad.
- Colours include 34 shades; the owner may keep only ~12-15 basic ones. German jobs are masculine forms (`der Arzt`); add feminine forms if wanted.
- English `Letters A-Z` clips are the letter NAME; phonics sounds (the /b/ sound) are a separate recording need not yet listed.
- Plural/mass nouns use "These are..." / "Das sind..." / "This is milk" - verify they sound natural.

### Next steps for the new Claude
1. Ask the owner the two open questions: language chooser as the first screen (recommended) or a small button; start with the English "Animals" level (recommended).
2. Receive the recorded files for the pilot batch, validate with ffprobe (as for the 3588 batch: `tools/game_voice/import_batch.mjs`), install under `assets/games/learn_voice/en/` (and `de/`), extend `clipId`/`voice.js` for `de`, add the learning-language switch in the games' data and the 3-exposure flow in «أطعم الحيوان», then the level map and chooser screens; add tests (a voice file exists for every word; no device-TTS fallback for English/German).
3. Generate the pictures from `ENGLISH_GERMAN_IMAGE_PROMPTS.md` in the single ChatGPT chat, install, deploy, verify.
