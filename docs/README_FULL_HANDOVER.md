# «رحلتي / Rehlaty» — FULL HANDOVER (everything done, what remains, how to continue on another Claude account)

Written 2026-11-17 at the end of a long working session. Read this file first. The owner is an Egyptian-Arabic speaker: talk to him in Egyptian
Arabic, short and concrete, and show him the result (screenshots / the demo) before deploying when he says "show me first".

---------------------------------------------------------------------------------------------------------------------------------------------

## ⚡ QUICK START FOR THE NEW CLAUDE ACCOUNT (copy this)

**One command — pulls the latest of everything, checks the tools, builds + tests the game and prints what is left:**
```bash
git clone https://github.com/abdelatif2030/kids-app.git rehlaty && cd rehlaty && git checkout feature/rehlaty && bash tools/sync_and_status.sh
```
(already cloned? just `cd rehlaty && bash tools/sync_and_status.sh`). Deploy the demo with `tools/deploy_demo.sh` (needs the Firebase web values + `LESSONS_BASE_URL` from the owner in the environment).

**First message to paste in the new Claude chat:**
> Read `docs/README_FULL_HANDOVER.md` (Part A, Part C, Appendix 1) and run `bash tools/sync_and_status.sh`. Then continue from Part C: I will send you picture sheets one by one
> (4 columns × 3 rows, packs in Appendix 1, or the 4 home pads). For each sheet: cut it with `tools/art/cut_pack.py`, turn the pack on, rebuild the voice lines and readings,
> record the new voices (I will give you the ElevenLabs key in the environment, never in a file), build, run the tests, show me the result, then commit, push and deploy the demo.
> Talk to me in Egyptian Arabic, short and concrete.

**What the new account does with the scripts and the new values:** I (the owner) generate the sheets in ChatGPT with the prompts of Appendix 1 and send them; Claude cuts them, the new words/pictures
appear automatically in the «فين الصورة؟» and «أول حرف» levels (and in new levels if asked), the new scenes use the new values (pictures, words, pads), then voices + deploy.

**Status right now (2026-11-17):** 12 worlds ✔, 8 questions per level ✔, 103 picture-words ✔, all 737 voice sentences recorded ✔ (voice review closed by the owner), demo deployed ✔
(`Demo: Final state…`). Waiting for: the 12 picture sheets (144 words), the 4 home pads, a real-device test.

---

## PART A — HOW TO SYNC THE NEW CLAUDE ACCOUNT (do this first)

1. **Code:** the whole project is in git (`https://github.com/abdelatif2030/kids-app.git`, branch `feature/rehlaty`). On the new machine/account:
   ```bash
   git clone https://github.com/abdelatif2030/kids-app.git rehlaty && cd rehlaty && git checkout feature/rehlaty && git pull
   ```
   Latest commit at the time of writing: the one after `03fa13a` ("Apply take B … for القاف زي قرد"). Everything described below is committed.
2. **Tools to install:** Flutter (web build; needs several free GB of RAM, close Chrome tabs if `dart2js` dies with "Could not start thread"),
   Node 22+ (game bundle: esbuild; `npm` in `game_src/learn_games`), Python 3.12+ (set `PYTHONUTF8=1` on Windows), ffmpeg + ffprobe on the PATH,
   `git`. Windows + Git Bash was used.
3. **Read, in this order:** `CLAUDE.md` (rules; child-safety), `docs/README_FULL_HANDOVER.md` (this file), `docs/LEARNING_WORLD_HANDOVER.md` (technical map of
   the learning game), `docs/IMAGE_SCRIPTS_NEXT.md` (prompts for the next pictures), `docs/GAME_VOICE.md` (voice pipeline).
4. **Secrets are NEVER in the repository.** They are given by the owner in chat and used only as inline environment variables:
   - `ELEVENLABS_API_KEY` (voice «Fatima», id `I3u6waC588j43py1kDN2`, model `eleven_multilingual_v2`). A key was pasted in an old chat of this
     project and used for the clips; **ask the owner for a key and advise him to rotate the old one** (it exists in chat logs). Never write it to a file.
   - Firebase web config for the demo (`FIREBASE_API_KEY`, `FIREBASE_APP_ID`, `FIREBASE_SENDER_ID`, `FIREBASE_PROJECT_ID`, `FIREBASE_AUTH_DOMAIN`) and
     `LESSONS_BASE_URL` (owner's lesson-video storage) are passed to `tool/build_demo_login.sh` by the deploy script. Ask the owner for the same values
     (they are in the Firebase console, project `kids-app-2361e`, web app) — do not invent them.
5. **Deploy script (now in the repo: `tools/deploy_demo.sh`; the old one lived in a temp folder):** a bash script that (a) runs `tool/build_demo_login.sh build/demo_login` with the five
   FIREBASE_* variables and `LESSONS_BASE_URL`, (b) `git fetch origin demo-site`, adds a worktree of `origin/demo-site`, deletes its files (keeps `.git`),
   copies `build/demo_login/.` into it, commits "Demo: <message>" and pushes `HEAD:demo-site`, (c) removes the worktree. The demo is Cloudflare Pages on branch
   `demo-site`: **https://demo-site-e3g.pages.dev** (publishing lags 1–3 minutes; verify with md5 of `game.js` or of a clip, with a cache-busting query).
   Commit + push of source to `feature/rehlaty` is pre-approved by the owner (CLAUDE.md); deploying to the demo is done when he asks.
6. **Claude memory/context on the new account:** the old transcript is NOT available. Everything that matters is in this README, the other docs and git
   history (`git log --oneline`). The original picture sheets the owner sent in chat are NOT in the repo (only the cut results in `assets/games/art/`). If a
   picture must be re-cut differently, ask the owner to send the sheet again.
7. **Preview locally:** `cd assets && python -m http.server 8765`, open
   `http://127.0.0.1:8765/games/learn_letters/index.html?age=5&level=<levelId>` (levels: letters, words, first, numbers, counting, order, shapes,
   animals, colors, fruits, vehicles, habits; `age` 3..6; `g=girl|boy`). After rebuilding, force-reload the script: `fetch('game.js',{cache:'reload'})` then reload.
   Review pages (voices) are in `docs/voice_preview/` (serve `docs/` on another port).
8. **Another Claude session may push to the same branch** (it happened: design skills under `.claude/skills/`). Always `git fetch` and merge (not force) before pushing.

---------------------------------------------------------------------------------------------------------------------------------------------

## PART B — WHAT IS FINISHED (this session, 2026-11-13 → 2026-11-17)

### B1. The learning game «عالم رحلتي التعليمي» (`game_src/learn_games`, built to `assets/games/learn_letters/game.js`)
- **12 levels, 12 worlds**, each world made only of the owner's pictures (his ChatGPT designs) with something moving: pond, farm, beach, space, rainbow,
  city, snow, castle, underwater, jungle, desert, home+garden. Hero (boy/girl) + blue owl, 4 choices standing on the owner's pad pictures, the question picture
  stands clearly above the question sign (landscape stand `[-0.2, 3.3]`, portrait `[2.2, 2.6]`).
- **Eight questions per level** (stars row + owl rack follow `ROUNDS = 8`). Wider letter pools (8/16/28 letters by age 4/5/6).
- **103 picture-words** for the «فين الصورة؟» and «أول حرف» levels (28 letter words + 75 extra, all with the owner's pictures), 10 new vehicles, 2 fruits,
  10 new habits, 13 animals to feed (horse+hay, hen+corn, donkey+carrot, goat+grass, parrot+seeds were added).
- Layout rules for landscape/portrait/tablet, camera, panoramas, floors: see `docs/LEARNING_WORLD_HANDOVER.md` sections 2–4.
- 71 node tests (`cd game_src/learn_games && npm test`), `flutter analyze` has no errors (25 old infos/warnings), 35 Flutter tests of the learning pages pass.

### B2. Voices (Fatima, ElevenLabs)
- 737 Arabic sentences, **all 737 have a recorded clip** (`assets/games/learn_voice/ar/<id>.mp3`, id = FNV-1a of "ar|<text>", list `assets/games/learn_voice/lines.json`).
  The Arabic text sent to the voice is the fully diacritized reading in `tools/game_voice/tashkeel.json`, built by `make_tashkeel.py` from
  `tashkeel_games.py`, `tashkeel_levels.py`, `tashkeel_more.py` (it stops if a reading is missing or its spelling differs).
- Rules of the reading: final ة is said «ه» (فَرَاشَه) and «كلمة X» is said «كَلِمِت X»; Egyptian verbs; stretch/sukun to fix swallowed words.
- 251 new clips were made on 2026-11-17 with the same settings as the old ones (stability .55, similarity .8, mp3 44.1k/64k): loudness/length match the old clips.
- Review loop used with the owner: `node tools/game_voice/takes.mjs make <list.txt> <work dir>` → 3 takes (A/B/C) per sentence → `… page …` builds an HTML page → he
  picks → `… apply picks.json …` copies the chosen takes. Pages are in `docs/voice_preview/` (27 = all new clips, 28 = first round of 28 sentences, 29 = second round
  of 6, 30 = qaf of قرد). **Applied so far:** 22 picks of round 1 (commit `04282eb`) and take **B** (hamza qaf) of «القاف زي قرد» (commit after `8fc9b92`).
  The 22 applied clips were compared byte-for-byte with the chosen takes.
- **Round 2 closed (2026-11-17):** the owner confirmed the voices are finished. The five sentences of round 2 (بالون, دولفين, فارس, فرشاة, الساعة) stay as they are in the game; his picks
  of take C-version for «القاف زي قرد» (B) were applied. Nothing is pending in the voices review. (If he complains later: ids بالون 3515efc1, دولفين d930a9ff, فارس b9021808, فرشاة 1eb4113a,
  الساعة 8c703f50; takes pages `docs/voice_preview/29_pick_takes_1117b.html`.)
- Earlier hearts sentences («دي قلب …», qaf must not sound like «جلب») were redone with takes and the orange one applied (see git log `feefdc0`); #27–#30 were reported pending
  in the previous handover — re-check with the owner.

### B3. Art pipeline and pictures
- ~330 pictures cut from the owner's sheets into `assets/games/art/<prefix>_<name>.webp` (prefixes: b beach, f farm, s space, r rainbow, c city, w snow, k castle,
  u underwater, j jungle, d desert, h home; plus older un-prefixed ones). Textures `ground_*.webp`, panoramas `*_pano.webp`.
- `tools/art/cut_art.sh` + `recut.mjs` (+ `matte.mjs`) cut a sheet; `tools/art/cut_pack.py` cuts a 4×3 "pack" sheet for the next words (below).
- All worlds, helpers (`scenery`, `tickScenery`, snowfall, bubbles, leaves, panorama plane): `game_src/learn_games/src/kit/worlds3d.js`.

### B4. Other fixes
- Demo sign-out on every visit: `lib/firebase_config.dart` now waits for the first auth-state event (deployed; the owner has not confirmed it yet).
- Question picture no longer hidden under the question sign; portrait choices wider apart; wide camera for every aspect; picture pads under choices.
- Demo: https://demo-site-e3g.pages.dev (last deploy commit "Voice corrections applied (23 clips)").

---------------------------------------------------------------------------------------------------------------------------------------------

## PART C — WHAT REMAINS (in order of value)

1. ~~Apply the picks for the 5 round-2 voice sentences~~ — DONE/closed: the owner said the voices are finished (see B2).
2. **Verify on the live demo** that new clips play (the live file lagged a few minutes after the last deploy: compare md5 of
   `https://demo-site-e3g.pages.dev/assets/assets/games/learn_voice/ar/f681e410.mp3` with the repo file `cd5107c2…`).
3. **The 12 picture packs (144 more words)** — prompts in Appendix 1. The owner generates the sheets with a ChatGPT account and sends them one by one.
   For each: `PYTHONUTF8=1 python tools/art/cut_pack.py <pack> <sheet number> "<images folder>"`, look at a contact sheet, then
   `PYTHONUTF8=1 python tools/game_voice/make_more_words.py && node tools/game_voice/lines.mjs && PYTHONUTF8=1 python tools/game_voice/make_tashkeel.py`,
   then **generate the new voices** (`ELEVENLABS_API_KEY=… node tools/game_voice/generate.mjs --provider elevenlabs --voice I3u6waC588j43py1kDN2 --lang ar`
   — only missing clips are made), then `node tools/game_voice/listening_page.mjs --new` for the owner to review, `cd game_src/learn_games && npm run build:letters && npm test`, commit, deploy.
   The 144 words and their diacritics are already written in `tools/game_voice/packs/*.json` (a pack turns on only when ALL its 12 pictures exist). A dry run with fake pictures
   passed the diacritics check for the first 132 (the new shapes pack was added after it and not dry-run yet).
4. **Home pads (H5)** — the picture sheet with 4 pads for the home world was never sent; the home world uses the plain wooden raft. When received: cut as `h_pad_*`
   (2×2 grid 768×512 cells) and add `padPics` to the `home` world in `worlds3d.js`.
5. **Real device test** (phones sideways/upright, iPad, sound, touch, performance) — never done. Check the 8-slot rack and the stars row on small phones.
6. **Shapes level**: only 5 shapes × 5 colours; a rectangle/oval/diamond/hexagon/… need geometry in `kit/shapes3d.js` + names in `shapes/sim.js` + readings in `tashkeel_games.py`.
   The numbers level stops at 20; the counting level uses apples only; there are no English words yet.
7. **New levels per topic** (clothes, body, jobs, weather, food, school, family, music, creatures): after the pack pictures exist, add a `PICKS` table + a `LEVELS` entry in
   `letters/levels.js` (levels wrap onto worlds with `%`), prompts to `tashkeel_more.py` PICKS, and optionally new worlds (ideas at the end of Appendix 1).
8. Pond butterflies/birds are still code-made; the owner's pictures `butterfly_1..3`, `bird_blue`, `bird_yellow`, `dragonfly`, `ladybug_leaf` are in `assets/games/art/` unused.
9. Hero clips used for the demo came from free-tier (watermarked-derived) videos: replace with clean ones before a real release (`assets/games/clips`, `tools/clips`).
10. Underwater floor uses the plain beach sand (`ground_sand`); the owner's busy coral sand (`ground_under`) is installed but unused.
11. The rest of the app (Flutter: parent area, teachers, family chat, journey, printables …) is described in `CLAUDE.md`; release blockers (Android build, real Firebase,
    store submission) are in `docs/RELEASE_1_*.md` — untouched this session.

---------------------------------------------------------------------------------------------------------------------------------------------

## PART D — QUICK COMMAND SHEET

```bash
# build + test the learning game
cd game_src/learn_games && npm run build:letters && npm test
# more words (reads tools/game_voice/packs + make_more_words.py) -> sentences -> readings
PYTHONUTF8=1 python tools/game_voice/make_more_words.py && node tools/game_voice/lines.mjs && PYTHONUTF8=1 python tools/game_voice/make_tashkeel.py
# generate ONLY the missing voice clips (key from the environment, never a file)
ELEVENLABS_API_KEY=... node tools/game_voice/generate.mjs --provider elevenlabs --voice I3u6waC588j43py1kDN2 --lang ar
node tools/game_voice/check_ends.mjs                       # finds clips whose ending is cut
node tools/game_voice/listening_page.mjs --new             # page with only the newest clips (docs/voice_preview/27_new_voices.html)
# takes for sentences the owner marked bad (add spellings to VARIANTS in takes.mjs first)
ELEVENLABS_API_KEY=... node tools/game_voice/takes.mjs make list.txt work && node tools/game_voice/takes.mjs page list.txt work
# cut a picture sheet / a pack
node tools/art/recut.mjs "<images folder>" <names...>      # lines come from tools/art/cut_art.sh
PYTHONUTF8=1 python tools/art/cut_pack.py <pack> <sheet no.> "<images folder>"
```

---------------------------------------------------------------------------------------------------------------------------------------------

## APPENDIX 1 — PROMPTS FOR THE NEXT PICTURES (also in `docs/IMAGE_SCRIPTS_NEXT.md`)

Give these to the ChatGPT account. First upload any finished sheet (e.g. a worlds sheet) as the style reference: "Use the attached image as the exact style reference".

### Picture packs (12 sheets, 144 words)

Each pack is ONE sheet: a 4 x 3 grid read left to right, top to bottom. Send the sheets back one at a time; Claude cuts them with
`python tools/art/cut_pack.py <pack> <sheet number>` and rebuilds the game (the pack switches on when all 12 pictures exist).
Paste the STYLE block, then the SHEET block, then the ITEMS line of each pack. Upload any finished sheet as the style reference.

## STYLE
```
Glossy 3D-rendered cartoon style for a children's learning game: soft studio lighting, smooth rounded shapes, bright saturated colors, thick clean edges, cute friendly look, simple readable silhouettes. No text, no letters, no logos, nothing scary.
```

## SHEET (12 items)
```
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no light rays, no particles, no motion trails. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
```

## Pack `veg` — Vegetables (art prefix `v_`)
```
Vegetables sheet. The 12 items, left to right, top to bottom: red tomato; green cucumber; brown potato; onion; purple eggplant; red bell pepper; lettuce head; broccoli; open pea pod with peas; orange pumpkin; garlic bulb; white mushroom.
```

## Pack `fruit2` — More fruit (art prefix `q_`)
```
More fruit sheet. The 12 items, left to right, top to bottom: kiwi fruit cut in half; melon slice; bunch of dates; fig; apricot; blue berries; plum; avocado cut in half; peach; two red cherries; green olives on a branch; coconut cut in half.
```

## Pack `school` — School (art prefix `e_`)
```
School sheet. The 12 items, left to right, top to bottom: yellow pencil; closed colorful book; spiral notebook; child scissors; ruler; pink eraser; box of crayons; classroom blackboard on a stand; folded colorful map; glue bottle; school desk with a chair; sheet of paper.
```

## Pack `clothes` — Clothes (art prefix `l_`)
```
Clothes sheet. The 12 items, left to right, top to bottom: blue shirt; trousers; pink dress; sun hat; pair of striped socks; jacket; long scarf; pair of gloves; round glasses; baseball cap; pajamas with stars; yellow raincoat.
```

## Pack `body` — Body parts (cute, friendly, not realistic) (art prefix `y_`)
```
Body parts (cute, friendly, not realistic) sheet. The 12 items, left to right, top to bottom: cartoon eye; cartoon ear; cartoon nose; smiling mouth; waving hand; bare foot; brown hair tuft; shiny white tooth; child head with a happy face; pointing finger; knee; round belly.
```

## Pack `jobs` — People who help us (friendly cartoon adults, standing) (art prefix `z_`)
```
People who help us (friendly cartoon adults, standing) sheet. The 12 items, left to right, top to bottom: doctor with a stethoscope; teacher holding a book; police officer; firefighter with a helmet; farmer with a straw hat; cook with a tall white hat; bus driver; pilot with a cap; nurse; builder with a yellow helmet; singer with a microphone; painter with a brush and palette.
```

## Pack `weather` — Weather and nature (art prefix `t_`)
```
Weather and nature sheet. The 12 items, left to right, top to bottom: rain cloud with raindrops; snow pile with snowflakes; swirling wind with leaves; cloud with a lightning bolt; golden lightning bolt; open umbrella; big snowflake; red flower; orange autumn leaves; very hot sun with a thermometer; cold thermometer with ice; green mountain.
```

## Pack `food` — Food and drinks (art prefix `o_`)
```
Food and drinks sheet. The 12 items, left to right, top to bottom: loaf of bread; cheese wedge; boiled egg; milk bottle; bowl of rice; cooked chicken leg; glass of orange juice with a straw; glass of water; cookie; honey jar with a dipper; bowl of soup; pizza slice.
```

## Pack `music` — Music (art prefix `m_`)
```
Music sheet. The 12 items, left to right, top to bottom: drum with sticks; guitar; small piano; violin with a bow; reed flute (nay); trumpet; tambourine (daff); oud (Arabic lute); microphone; headphones; two music notes; golden bell.
```

## Pack `insects` — Small creatures and birds (art prefix `i_`)
```
Small creatures and birds sheet. The 12 items, left to right, top to bottom: friendly ant; fly; cute spider; green caterpillar; eagle; peacock with open tail; pink flamingo; white swan; ostrich; small sparrow; cute bat; snail.
```

## Pack `shapes` — Glossy geometric shapes (each ONE solid color, centered, 3D look) (art prefix `g_`)
```
Glossy geometric shapes (each ONE solid color, centered, 3D look) sheet. The 12 items, left to right, top to bottom: blue rectangle; green oval; orange diamond (rhombus); purple hexagon; yellow pentagon; red arrow pointing right; cube; glossy sphere; cone; cylinder; golden ring; red heart.
```

## Pack `family` — Family (friendly cartoon people, standing, different ages) (art prefix `a_`)
```
Family (friendly cartoon people, standing, different ages) sheet. The 12 items, left to right, top to bottom: mother; father; grandmother; grandfather; baby; older brother; older sister; boy; girl; two friends holding hands; family of four together; uncle.
```

## Panoramas and floors for NEW worlds (optional, one world = panorama + floor + decor sheet + pads sheet)

The same recipe as the 12 worlds already built (see docs/LEARNING_WORLD_HANDOVER.md). Ideas for worlds 13+: farm night, mountain camp,
playground, supermarket, kitchen, bedroom, school, hospital, airport, zoo, mosque courtyard (calm, no people), Ramadan street with lanterns.


### World recipe (to make a NEW world: 5 pictures)  — replace {WORLD} and the item lists
**1. Panorama**
```
Glossy 3D-rendered cartoon style for a children's learning game: soft lighting, smooth rounded shapes, bright saturated colors. No text, no characters, nothing scary.
Image 2:1 landscape, 2048x1024, a game-background panorama. Scene: {WORLD, a bright friendly place with its typical landmarks near the left and right edges and a few far things in the center back}. The horizon is at about 58% of the height. The bottom 40% is plain open ground with nothing tall or detailed in the center (empty space for gameplay).
```
**2. Floor texture**
```
Glossy cartoon style for a children's game. Seamless tileable texture, 1024x1024, strictly top-down view, flat even lighting, no vignette, no horizon, no single large object that stands out. It must tile perfectly on all four edges. Surface: {ground of the world}. No text.
```
**3. Decor sheet / 4. Creatures sheet** — use the SHEET block above with "12 items: {list}".
**5. Pads sheet**
```
Glossy 3D-rendered cartoon style, soft lighting, bright colors, thick clean edges. No text.
Image 1536x1024, pure flat white background (#FFFFFF). Four separate round ground pads in a 2x2 grid, each in its own quarter, centered with at least 60 px of white margin. Same size (about 700 px wide), same 3/4 top-down angle (about 35 degrees), visible thickness, flat top surface for a character to stand on. No glow beams, no ground shadow, no particles.
The four pads: (1) {…}; (2) {…}; (3) {…}; (4) {…}.
```
After the sheets arrive: add `cutw` lines (grid cells with 15 px margins, see the existing lines in `tools/art/cut_art.sh`), recut, copy textures/panorama with ffmpeg
(`scale=1024:1024` / `scale=1600:-1`, libwebp quality 85), add a `BUILD` entry in `worlds3d.js` modelled on `jungle`/`desert`, extend `WORLD_IDS`/`WORLD_NAMES`, test at 932x430 and 390x844.
Ideas for worlds 13+: farm at night, mountain camp, playground, supermarket, kitchen, bedroom, school, hospital, airport, zoo, Ramadan street with lanterns, mosque courtyard (calm, no people).


---------------------------------------------------------------------------------------------------------------------------------------------

## APPENDIX 2 — TECHNICAL HANDOVER OF THE LEARNING GAME (copy of `docs/LEARNING_WORLD_HANDOVER.md`)

# «عالم رحلتي التعليمي» — Handover (2026-11-13 → 2026-11-17)

Everything done in this working session on the letters/learning game (`game_src/learn_games`, output `assets/games/learn_letters/game.js`),
written so another Claude account can continue without the chat history. Owner: Egyptian-Arabic speaker; reply to him in Egyptian Arabic.

## 1. What the game is now
One premium cartoon learning game with **12 levels** and **12 worlds** (one per level; world index = level index). Every world is built
from the OWNER'S OWN pictures (generated by him with ChatGPT), the hero (boy/girl) and a blue owl stand in front, four choices float/stand
on pads, the question picture stands clearly above the question sign, and **something moves in every world**.

| # | Level id (age 5) | World | Motion |
|---|---|---|---|
| 1 | letters | pond (meadow) | windmill turns, lotus bobs, birds, butterflies, jumping fish |
| 2 | words | farm | animals breathe and wander, pump sways |
| 3 | first | beach | sea scrolls, shore waves, dolphin leaps, gulls fly, crab walks, boat bobs, lighthouse beam flashes |
| 4 | numbers | space | stars twinkle, shooting star + comet, UFO, robot, astronaut pets float, station turns |
| 5 | counting | rainbow | balloons float, unicorn, butterflies, pinwheel and sun spin |
| 6 | order | city | buses/taxis/police/fire truck/tram drive, helicopter and plane fly |
| 7 | shapes | snow | snowfall, penguin waddles, rabbit hops, bear/reindeer/seal move |
| 8 | animals | castle | flags and torches move, king/queen/knight/princess/dragon/horse/jester/wizard move |
| 9 | colors | underwater | bubbles, fish/dolphin/whale swim, jellyfish, seahorse, crab |
| 10 | fruits | jungle | falling leaves, trees sway, animals move (monkey, lion, elephant, giraffe, …) |
| 11 | vehicles | desert | camel walks, hawk and balloon fly, jeep and donkey cart drive, boat on the oasis |
| 12 | habits | home + garden | ball bounces, clock swings, towel/plants sway; daily-habit things around the garden |

Levels beyond 12 do not exist (`LEVELS` has 12 entries); `WORLD_IDS[i % length]` wraps.

## 2. Where things live
- `game_src/learn_games/src/kit/worlds3d.js` — all worlds (`BUILD` table). Helpers: `scenery(g, list)` returns `P(file, height, x, z, opts)`;
  `opts`: `y`, `flip`, `center` (pivot in the middle, for spinning), `sway`, `anim = {bob, sp, r, wsp, tilt, spin, drive, smooth}`;
  `tickScenery(list, t, dt)` runs the motion; `pictureGround` (owner's tiling floor), `panoPlane` (owner's panorama far behind),
  `makeSnowfall`, `makeBubbles`, `makeLeaves`. A world returns `{ pad, padPics: [4 art names], update }`. First child of a world must be the sky
  (`addSky`) — the level-to-level walk clips it. Panorama `bottom` is chosen so the picture's horizon sits ~y 2 (see each world).
- `game_src/learn_games/src/letters/main.js` — the Game class. `LANDSCAPE` / `PORTRAIT` layout objects (camera box, hero, owl, `stand`, option
  span/rows `zs`). `_option()` draws choices; if the world has `padPics` they stand on those pictures (lifted 0.62). `stand` is the question
  picture position: landscape `[-0.2, 3.3]`, portrait `[2.2, 2.6]` (owner: clear, just above the question sign).
- `game_src/learn_games/src/kit/actors.js` — `ART_FILE` (thing → picture), `artProp`, `artTexture`, hero clips.
- `game_src/learn_games/src/letters/levels.js` — the 12 levels. `kit/shell.js` — HUD, age clamp 3..6.
- Flutter side: `lib/games/learning_page.dart`, `lib/games/web_games/web_game_screen.dart` (`level` param), `lib/media/page_voice.dart`.
- Build: `cd game_src/learn_games && npm run build:letters` (esbuild → `assets/games/learn_letters/game.js`, committed), `npm test` (67 node tests).
- Preview page: `assets/games/learn_letters/index.html?age=5&level=<levelId>` (boot.js reads `level`, `age`, `g`, `lang`). Serve `assets/` with
  `python -m http.server 8765` and open `http://127.0.0.1:8765/games/learn_letters/index.html?age=5&level=words`. Force-reload the script when
  testing: `fetch('game.js', {cache:'reload'})` then reload.

## 3. Art pipeline (owner's pictures → game)
1. The owner sends sheets (1536×1024 white background grids, 2:1 panoramas, 1024 seamless textures). Claude saves them as
   `…/scratchpad`-adjacent `images/<n>.webp`; sheets 36–104 were used here.
2. Cut: `tools/art/cut_art.sh` lists `cutw <sheet> w h x y <name>` lines (grid cells with 15 px margins; later lines override earlier ones with the
   same name). `node tools/art/recut.mjs "<images folder>" <names…>` cuts, mattes the white paper (`tools/art/matte.mjs`), writes lossless
   2× `assets/games/art/<name>.webp` and sizes in `game_src/learn_games/src/kit/art_dims.json`. Names with a prefix `x_` (b_ f_ s_ r_ c_ w_ k_ u_ j_ d_ h_)
   are not grown (they would swallow neighbours). "STILL CUT" on those usually means a neighbour's crumb touches the box; check by eye with a
   contact sheet (ffmpeg hstack/vstack) and widen the box with an override line if the picture itself is cut.
3. Textures/panoramas: `ffmpeg -i N.webp -vf scale=1024:1024 -c:v libwebp -quality 85 assets/games/art/ground_<world>.webp`;
   panoramas `scale=1600:-1` → `<world>_pano.webp`.
4. Prefix map: `b_` beach, `f_` farm (new) / `_f` (old farm props), `s_` space, `r_` rainbow, `c_` city, `w_` snow, `k_` castle, `u_` underwater,
   `j_` jungle, `d_` desert, `h_` home. Pad pictures: `<prefix>_pad_*`.
5. Not yet installed: **home pads (H5)** — the home world falls back to the plain wooden raft pad. When the owner sends H5, cut it as
   `h_pad_*` (2×2, 768×512 cells) and add `padPics` to the `home` world.
6. Prompts given to the owner for every sheet are in the chat history; the style block was: glossy 3D-rendered cartoon, soft studio lighting,
   thick clean edges, white (#FFF) background, items centered in invisible grid cells with ≥50 px margin, no shadows/glow/particles; white items
   with a soft grey-blue edge; panoramas 2:1 with horizon at ~58% and an empty bottom 40%; textures seamless top-down.

## 4. Layout rules learnt (do not regress)
- Landscape phones are the most important target (932×430, 667×375), then portrait (390×844), tablets, desktop.
- Nothing tall may stand in the choice area. Landscape choices: x ≈ −3.7…5.5, z −1.3/−0.2; portrait: |x| < 4, z −4.4/−2.5. Put props behind
  (z ≤ −5.4) or far to the sides (|x| > 7) or low in front. Portrait only shows |x| ≲ 4, so a few centered background props per world matter.
- Portrait uses a wider choice row (span 8.0, cam box 6.6×4.4) and smaller number plaques (1.2).
- Camera far plane 120; panoramas at z −14.5 (52×26) just beyond the playable area; sky dome renderOrder −10, panorama −1.
- The hero is big (scale 1.3 landscape), the owl beside it, `minAspect` uses `??` not `||` (0 is valid).

## 5. Deploy
- Source commits go to `feature/rehlaty` (owner pre-approved). Demo = Cloudflare Pages branch `demo-site`:
  `bash "$TEMP/deploy2.sh" "<message>"` (script in the Windows temp dir; it builds `tool/build_demo_login.sh build/demo_login` with the
  demo Firebase env, then pushes a worktree of `origin/demo-site`). If the script is lost, recreate it from `tool/build_demo_login.sh` and the
  demo-site worktree push. The web build needs several free GB of RAM; close Chrome tabs if dart2js dies with "Could not start thread".
  Verify live by comparing md5 of `…/games/learn_letters/game.js` (with `tr -d '\r'`) — Cloudflare can lag a minute.
- Live demo: https://demo-site-e3g.pages.dev. Last demo commit before this README: `bb409ef` (worlds 1–10); worlds 11–12 are committed on
  `feature/rehlaty` and deployed in the commit that follows this document.
- Fixed this session: the demo signed users out on every visit because `currentUser` was read before Firebase restored the saved session;
  `lib/firebase_config.dart` now waits for the first `authStateChanges()` (4 s cap). Not verified by the owner yet.

## 6. Still open
- Home pads (H5); optional unused cuts: `s_*`/`r_*`/… extras that no world uses yet.
- Voice: hearts sentences #27–#30 («دي قلب …», the qaf must not sound like «جلب»); owner chose take C only for «دي قلب برتقالي».
  Tools in `tools/game_voice/` (takes.mjs, fix_readings.mjs, check_ends.mjs, listening_page.mjs, orange.mjs). ElevenLabs voice Fatima; key only in env.
- Replace the code-made butterflies/birds in the pond with the owner's pictures (`butterfly_1..3`, `bird_blue`, `bird_yellow`, `dragonfly`,
  `ladybug_leaf` exist in `assets/games/art/`).
- Pond/farm windmill blades could turn if the owner sends the blades as a separate picture.
- Free-tier watermarked clips used for the demo hero animations must be replaced before a real release (`assets/games/clips`, `tools/clips`).
- Everything was checked in a desktop browser only; no real phone/tablet testing (sound, touch, performance not verified on devices).
- Underwater floor uses the plain beach sand (`ground_sand`), not the owner's busy coral sand (`ground_under`, installed but unused).

## 7. Rules from the project (CLAUDE.md) that still apply
No ads/tracking/YouTube; no invented credentials/IDs; commit+push of source to `feature/rehlaty` is pre-approved, publishing Firebase rules and
anything outward-facing is not; keep secrets out of files (API keys only in env). Another Claude session added design skills under
`.claude/skills/` (merged on 2026-11-17); they are optional and not part of the game.

## 8. Content expansion (2026-11-17): eight rounds, many more words, picture packs, voices

### What changed
- **Eight rounds per level** (was five): `ROUNDS = 8` in `letters/sim.js`, `counting/sim.js`, `shapes/sim.js`, `animals/sim.js`; the HUD stars (`sh.topBar(ROUNDS)`)
  and the owl's rack (8 slots, smaller dishes) follow it. Pools are wider: letters 8 / 16 / 28 for ages ≤4 / 5 / 6 (`poolFor`).
- **Words level and first-letter level** now draw from `WORD_ITEMS` (`letters/levels.js`): the 28 letter words plus **75 extra words**
  (`letters/more_words.json`, written by `tools/game_voice/make_more_words.py`), every one with a picture the owner already gave
  (jungle/farm/sea/snow/desert/beach/home/city/castle/space/rainbow). Each has a youngest age (3 = easy). Questions: «فين القرد؟»,
  «إيه الحرف الأول في كلمة قرد؟», reward «القاف زي قرد».
- More **vehicles** (10 new: school bus, city bus, taxi, tram, bulldozer, bike, jeep, hot-air balloon, felucca, donkey cart),
  **fruits** (lemon, pomegranate), **habits** (10 new, with home pictures), **animals to feed** (13 now: horse+hay, hen+corn, donkey+carrot,
  goat+grass, parrot+seeds were added; foods `f_haypile` and `corn`).
- `kit/actors.js` maps every new thing id to the art file of the same name (`EXTRA_ART`, `BIG`).
- Tests: `game_src/learn_games/test/more_words.test.js` (pictures exist, 8 rounds at every age, no duplicate options). 71 node tests pass.

### Picture packs (11 sheets × 12 = 132 more words, NOT drawn yet)
`docs/IMAGE_SCRIPTS_NEXT.md` has the prompts (STYLE + SHEET + one items line per pack): vegetables `v_`, more fruit `q_`, school `e_`, clothes `l_`,
body `y_`, people who help `z_`, weather/nature `t_`, food and drinks `o_`, music `m_`, small creatures and birds `i_`, family `a_`.
The words, diacritics and first letters of every pack are already written (`tools/game_voice/packs/*.json`, made by `make_packs.py`).
When the owner returns a sheet (4 × 3 grid, white background):
1. save it as `images/<n>.webp`, then `PYTHONUTF8=1 python tools/art/cut_pack.py <pack> <n> "<images folder>"` (cuts 12 pictures, fixed boxes);
   look at a contact sheet; widen a box with an override line in `tools/art/cut_art.sh` if an item crosses its cell;
2. `PYTHONUTF8=1 python tools/game_voice/make_more_words.py` (a pack switches on only when ALL its 12 pictures exist),
   `node tools/game_voice/lines.mjs`, `PYTHONUTF8=1 python tools/game_voice/make_tashkeel.py` (fails loudly if a reading is missing or its spelling differs);
3. `cd game_src/learn_games && npm run build:letters && npm test`, then deploy. The new words appear in the words and first-letter levels automatically.
A pack was dry-run with fake pictures: all 132 words pass the diacritics check.
To make a whole new level from a pack (e.g. «الملابس»), add a `PICKS` table + a `LEVELS` entry in `letters/levels.js`, the prompts
(«فين القميص؟») to `tools/game_voice/tashkeel_more.py` PICKS, and extend `LEVELS`/worlds (`WORLD_IDS`) — levels wrap onto worlds with `%`.

### Voices (IMPORTANT: not generated yet)
- No ElevenLabs key was available in this session (`ELEVENLABS_API_KEY` not set; never store it in a file). The game plays a recorded clip when
  `assets/games/learn_voice/ar/<id>.mp3` exists and the device voice otherwise, so everything works now but new sentences use the device voice.
- `assets/games/learn_voice/lines.json` / `docs/GAME_VOICE_LINES.csv` list every sentence (737 Arabic); **423 clips are missing**
  (list: `docs/VOICE_CLIPS_MISSING.csv`, ~7.7k characters, includes English lines that the Arabic-only games never use).
  Diacritics for all Arabic lines are in `tools/game_voice/tashkeel.json` (built from the python files; mandatory for the voice).
- Generate (only missing clips are made; voice «Fatima» id `I3u6waC588j43py1kDN2`, model `eleven_multilingual_v2`):
  `ELEVENLABS_API_KEY=… node tools/game_voice/generate.mjs --provider elevenlabs --voice I3u6waC588j43py1kDN2 --lang ar`
  then `node tools/game_voice/generate.mjs --manifest`, rebuild, deploy. Listen to a sample page with `tools/game_voice/listening_page.mjs`.
  Azure (`ar-EG-SalmaNeural`) and Gemini are also supported by `generate.mjs`.

### Still missing / ideas
- The 132 pack pictures; voices for the 423 new sentences; real-device test of 8 rounds (rack size, stars row on small phones).
- Shapes level only has 5 shapes × 5 colours (a rectangle/oval/diamond need `kit/shapes3d.js` geometry); the numbers level stops at 20;
  the counting level uses apples only; no English words yet (English lines exist only for the older games).
- Optional: separate levels for the packs (clothes, body, jobs, weather, food, school, family, music, creatures) with their own worlds.
- Hearts sentences #27–#30 and pond butterflies/birds from the owner's pictures (see section 6).

## APPENDIX 3 — WORLD-BY-WORLD INVENTORY (generated from `worlds3d.js` on 2026-11-17)

Each world: level id it belongs to (index = level order), floor texture, panorama, pads, and every picture with its height (h), position (x, z) and motion.
Motion keys: `drive` (crosses the screen, units/s, wraps at ±17), `bob`/`sp` (bounce height/speed), `r`/`wsp` (wanders ±r), `tilt` (swings), `spin` (turns), `sway` (swaying), `smooth` (sine instead of hops).

### 1 pond (البركة) — level `letters`
- floor: ground_grass, ground_grass, ground_path; panorama: ; pads: plain raft (no pad pictures)
- built with the older prop() helper (meadow, farm, beach): see the function in the file.

### 2 farm (المزرعة) — level `words`
- floor: ground_grass, ground_grass, farm_pano, ground_farm; panorama: farm_pano, see code; pads: f_pad_stump, f_pad_hay, f_pad_nest, f_pad_plank
- built with the older prop() helper (meadow, farm, beach): see the function in the file.

### 3 beach (الشاطئ) — level `first`
- floor: ground_water, ground_sand, ground_sand, ground_water; panorama: ; pads: plain raft (no pad pictures)
- built with the older prop() helper (meadow, farm, beach): see the function in the file.

### 4 space (الفضاء) — level `numbers`
- floor: ground_moon, ground_moon, space_pano; panorama: space_pano, see code; pads: s_pad_moon, s_pad_energy, s_pad_metal, s_pad_crystal
- built with the older prop() helper (meadow, farm, beach): see the function in the file.

### 5 rainbow (ملعب قوس قزح) — level `counting`
- floor: ground_rainbow; panorama: rainbow_pano, -6.4; pads: r_pad_candy, r_pad_cloud, r_pad_rainbow, r_pad_cookie
- built with the older prop() helper (meadow, farm, beach): see the function in the file.

### 6 city (المدينة) — level `order`
- floor: ground_city; panorama: city_pano, -7.6; pads: c_pad_manhole, c_pad_tire, c_pad_round, c_pad_cone
- built with the older prop() helper (meadow, farm, beach): see the function in the file.

### 7 snow (جبال الثلج) — level `shapes`
- floor: ground_snow; panorama: snow_pano, -8.4; pads: w_pad_ice, w_pad_snow, w_pad_log, w_pad_crystal
- built with the older prop() helper (meadow, farm, beach): see the function in the file.

### 8 castle (القلعة) — level `animals`
- floor: ground_castle; panorama: castle_pano, -7.8; pads: k_pad_stone, k_pad_velvet, k_pad_shield, k_pad_gold
- built with the older prop() helper (meadow, farm, beach): see the function in the file.

### 9 underwater (تحت الماء) — level `colors`
- floor: ground_sand; panorama: under_pano, -7.4; pads: u_pad_sand, u_pad_shell, u_pad_coral, u_pad_pearl
- built with the older prop() helper (meadow, farm, beach): see the function in the file.

### 10 jungle (الغابة) — level `fruits`
- floor: ground_jungle; panorama: jungle_pano, -7.4; pads: j_pad_stump, j_pad_lily, j_pad_stone, j_pad_bamboo
- built with the older prop() helper (meadow, farm, beach): see the function in the file.

### 11 desert (الصحراء) — level `vehicles`
- floor: ground_desert; panorama: desert_pano, -6.9; pads: d_pad_stone, d_pad_carpet, d_pad_clay, d_pad_wood
- built with the older prop() helper (meadow, farm, beach): see the function in the file.

### 12 home+garden (بيتي والحديقة) — level `habits`
- floor: ground_home; panorama: home_pano, -8.5; pads: plain raft (no pad pictures)
- built with the older prop() helper (meadow, farm, beach): see the function in the file.

## APPENDIX 4 — THE 75 EXTRA WORDS NOW IN THE GAME (`letters/more_words.json`)

Format: picture file · word · reading · first letter id · youngest age.

| picture | word | reading | letter | age |
|---|---|---|---|---|
| `j_monkey` | قرد | قِرْد | qaaf | 3 |
| `j_lion` | أسد | أَسَد | alef | 3 |
| `j_elephant` | فيل | فِيل | faa | 3 |
| `j_zebra` | حمار وحشي | حِمَار وَحْشِي | haa | 5 |
| `j_parrot` | ببغاء | بَبَّغَاء | baa | 4 |
| `j_tiger` | نمر | نِمِر | noon | 4 |
| `j_toucan` | طوقان | طُوقَان | tah | 6 |
| `j_gorilla` | غوريلا | غُورِيلَّا | ghayn | 5 |
| `j_chameleon` | حرباء | حِرْبَاء | haa | 6 |
| `j_snake` | ثعبان | ثُعْبَان | thaa | 5 |
| `f_cow` | بقرة | بَقَرَة | baa | 3 |
| `f_pig` | خنزير | خِنْزِير | khaa | 4 |
| `f_goat` | ماعز | مَاعِز | meem | 5 |
| `f_donkey` | حمار | حِمَار | haa | 4 |
| `f_rooster` | ديك | دِيك | dal | 3 |
| `u_octopus` | أخطبوط | أُخْطُبُوط | alef | 5 |
| `u_turtle` | سلحفاة | سُلَحْفَاة | seen | 4 |
| `u_dolphin` | دولفين | دُولْفِين | dal | 5 |
| `u_whale` | حوت | حُوت | haa | 4 |
| `u_crab` | سرطان | سَرَطَان | seen | 5 |
| `u_star` | نجمة بحر | نَجْمَة بَحْر | noon | 5 |
| `u_jelly` | قنديل بحر | قِنْدِيل بَحْر | qaaf | 6 |
| `u_seahorse` | حصان بحر | حِصَان بَحْر | haa | 6 |
| `w_penguin` | بطريق | بِطْرِيق | baa | 4 |
| `w_bear` | دب | دُبّ | dal | 3 |
| `w_owl` | بومة | بُومَة | baa | 4 |
| `w_reindeer` | رنة | رَنَّة | raa | 6 |
| `w_seal` | فقمة | فُقْمَة | faa | 5 |
| `w_snowman` | رجل ثلج | رَجُل ثَلْج | raa | 5 |
| `d_pyramid` | هرم | هَرَم | haa2 | 4 |
| `d_tent` | خيمة | خَيْمَة | khaa | 4 |
| `d_palm` | نخلة | نَخْلَة | noon | 4 |
| `d_cactus` | صبار | صَبَّار | sad | 6 |
| `d_scorpion` | عقرب | عَقْرَب | ayn | 5 |
| `d_lizard` | سحلية | سِحْلِيَّة | seen | 6 |
| `d_hawk` | صقر | صَقْر | sad | 5 |
| `d_balloon` | منطاد | مِنْطَاد | meem | 5 |
| `d_jeep` | جيب | جِيب | jeem | 4 |
| `b_umbrella` | مظلة | مِظَلَّة | meem | 4 |
| `b_castle` | قلعة | قَلْعَة | qaaf | 4 |
| `b_shell` | صدفة | صَدَفَة | sad | 4 |
| `b_lighthouse` | فنار | فَنَار | faa | 6 |
| `h_bed` | سرير | سَرِير | seen | 3 |
| `h_toothbrush` | فرشاة | فُرْشَاة | faa | 5 |
| `h_sink` | حوض | حَوْض | haa | 5 |
| `h_towel` | منشفة | مِنْشَفَة | meem | 5 |
| `h_backpack` | شنطة | شَنْطَة | sheen | 3 |
| `h_shoes` | جزمة | جَزْمَة | jeem | 3 |
| `h_wardrobe` | دولاب | دُولَاب | dal | 5 |
| `h_table` | ترابيزة | تَرَابِيزَة | taa | 5 |
| `h_broom` | مكنسة | مِكْنِسَة | meem | 5 |
| `h_clock` | ساعة | سَاعَة | seen | 4 |
| `h_swing` | أرجوحة | أُرْجُوحَة | alef | 4 |
| `h_bike` | عجلة | عَجَلَة | ayn | 4 |
| `h_tree` | شجرة | شَجَرَة | sheen | 3 |
| `c_school` | مدرسة | مَدْرَسَة | meem | 4 |
| `c_hospital` | مستشفى | مُسْتَشْفَى | meem | 5 |
| `c_light` | إشارة | إِشَارَة | alef | 5 |
| `c_fountain` | نافورة | نَافُورَة | noon | 5 |
| `c_skyscraper` | عمارة | عِمَارَة | ayn | 4 |
| `k_king` | ملك | مَلِك | meem | 4 |
| `k_queen` | ملكة | مَلِكَة | meem | 5 |
| `k_dragon` | تنين | تِنِّين | taa | 4 |
| `k_knight` | فارس | فَارِس | faa | 4 |
| `k_wizard` | ساحر | سَاحِر | seen | 5 |
| `k_chest` | كنز | كَنْز | kaaf | 4 |
| `s_alien` | فضائي | فَضَائِي | faa | 5 |
| `s_robot` | روبوت | رُوبُوت | raa | 4 |
| `s_moon` | قمر | قَمَر | qaaf | 3 |
| `s_star` | نجمة | نَجْمَة | noon | 3 |
| `s_ringplanet` | كوكب | كَوْكَب | kaaf | 5 |
| `r_balloons` | بالون | بَالُون | baa | 3 |
| `r_cloud` | سحابة | سَحَابَة | seen | 4 |
| `r_candy` | حلوى | حَلْوَى | haa | 4 |
| `r_cupcake` | كعكة | كَعْكَة | kaaf | 4 |

## APPENDIX 5 — THE 12 PICTURE PACKS NOT DRAWN YET (`tools/game_voice/packs/*.json`)

Grid order = left to right, top to bottom. Art file = `<prefix>_<name>.webp`.

### body — Body parts (cute, friendly, not realistic) (prefix `y_`)

| # | art | word | reading | letter | age |
|---|---|---|---|---|---|
| 1 | `y_eye` | عين | عَيْن | ayn | 3 |
| 2 | `y_ear` | ودن | وِدْن | waaw | 3 |
| 3 | `y_nose` | أنف | أَنْف | alef | 3 |
| 4 | `y_mouth` | فم | فَم | faa | 3 |
| 5 | `y_hand` | إيد | إِيد | alef | 3 |
| 6 | `y_foot` | رجل | رِجْل | raa | 3 |
| 7 | `y_hair` | شعر | شَعْر | sheen | 4 |
| 8 | `y_tooth` | سنة | سِنَّة | seen | 4 |
| 9 | `y_head` | راس | رَاس | raa | 3 |
| 10 | `y_finger` | صباع | صُبَّاع | sad | 4 |
| 11 | `y_knee` | ركبة | رُكْبَة | raa | 5 |
| 12 | `y_belly` | بطن | بَطْن | baa | 5 |

### clothes — Clothes (prefix `l_`)

| # | art | word | reading | letter | age |
|---|---|---|---|---|---|
| 1 | `l_shirt` | قميص | قَمِيص | qaaf | 4 |
| 2 | `l_trousers` | بنطلون | بَنْطَلُون | baa | 4 |
| 3 | `l_dress` | فستان | فُسْتَان | faa | 4 |
| 4 | `l_hat` | قبعة | قُبَّعَة | qaaf | 4 |
| 5 | `l_socks` | شراب | شُرَّاب | sheen | 3 |
| 6 | `l_jacket` | جاكت | جَاكِت | jeem | 5 |
| 7 | `l_scarf` | وشاح | وِشَاح | waaw | 6 |
| 8 | `l_gloves` | قفاز | قُفَّاز | qaaf | 6 |
| 9 | `l_glasses` | نضارة | نَضَّارَة | noon | 5 |
| 10 | `l_cap` | كاب | كَاب | kaaf | 4 |
| 11 | `l_pajamas` | بيجامة | بِيجَامَة | baa | 4 |
| 12 | `l_raincoat` | معطف | مِعْطَف | meem | 6 |

### family — Family (friendly cartoon people, standing, different ages) (prefix `a_`)

| # | art | word | reading | letter | age |
|---|---|---|---|---|---|
| 1 | `a_mama` | ماما | مَامَا | meem | 3 |
| 2 | `a_baba` | بابا | بَابَا | baa | 3 |
| 3 | `a_grandma` | تيتة | تِيتَة | taa | 3 |
| 4 | `a_grandpa` | جدو | جَدُّو | jeem | 3 |
| 5 | `a_baby` | طفل | طِفْل | tah | 3 |
| 6 | `a_brother` | أخ | أَخ | alef | 4 |
| 7 | `a_sister` | أخت | أُخْت | alef | 4 |
| 8 | `a_boy` | ولد | وَلَد | waaw | 3 |
| 9 | `a_girl` | بنت | بِنْت | baa | 3 |
| 10 | `a_friends` | صحاب | صُحَاب | sad | 5 |
| 11 | `a_family` | عيلة | عِيلَة | ayn | 5 |
| 12 | `a_uncle` | عمو | عَمُّو | ayn | 5 |

### food — Food and drinks (prefix `o_`)

| # | art | word | reading | letter | age |
|---|---|---|---|---|---|
| 1 | `o_bread` | عيش | عَيْش | ayn | 3 |
| 2 | `o_cheese` | جبنة | جُبْنَة | jeem | 4 |
| 3 | `o_egg` | بيضة | بَيْضَة | baa | 3 |
| 4 | `o_milk` | لبن | لَبَن | laam | 3 |
| 5 | `o_rice` | رز | رُزّ | raa | 4 |
| 6 | `o_chicken` | فراخ | فِرَاخ | faa | 5 |
| 7 | `o_juice` | عصير | عَصِير | ayn | 4 |
| 8 | `o_water` | مية | مَيَّة | meem | 3 |
| 9 | `o_cookie` | بسكوت | بِسْكُوت | baa | 4 |
| 10 | `o_honey` | عسل | عَسَل | ayn | 5 |
| 11 | `o_soup` | شوربة | شُورْبَة | sheen | 5 |
| 12 | `o_pizza` | بيتزا | بِيتْزَا | baa | 4 |

### fruit2 — More fruit (prefix `q_`)

| # | art | word | reading | letter | age |
|---|---|---|---|---|---|
| 1 | `q_kiwi` | كيوي | كِيوِي | kaaf | 5 |
| 2 | `q_melon` | شمام | شَمَّام | sheen | 5 |
| 3 | `q_dates` | بلح | بَلَح | baa | 5 |
| 4 | `q_fig` | تين | تِين | taa | 5 |
| 5 | `q_apricot` | مشمش | مِشْمِش | meem | 5 |
| 6 | `q_berries` | توت | تُوت | taa | 4 |
| 7 | `q_plum` | برقوق | بَرْقُوق | baa | 6 |
| 8 | `q_avocado` | أفوكادو | أَفُوكَادُو | alef | 6 |
| 9 | `q_peach` | خوخ | خُوخ | khaa | 5 |
| 10 | `q_cherry` | كرز | كَرَز | kaaf | 4 |
| 11 | `q_olives` | زيتون | زَيْتُون | zayn | 5 |
| 12 | `q_coconut` | نارجيل | نَارْجِيل | noon | 6 |

### insects — Small creatures and birds (prefix `i_`)

| # | art | word | reading | letter | age |
|---|---|---|---|---|---|
| 1 | `i_ant` | نملة | نَمْلَة | noon | 4 |
| 2 | `i_fly` | ذبابة | ذُبَابَة | dhal | 6 |
| 3 | `i_spider` | عنكبوت | عَنْكَبُوت | ayn | 6 |
| 4 | `i_worm` | دودة | دُودَة | dal | 4 |
| 5 | `i_eagle` | نسر | نِسْر | noon | 6 |
| 6 | `i_peacock` | طاووس | طَاوُوس | tah | 6 |
| 7 | `i_flamingo` | فلامنجو | فِلَامِنْجُو | faa | 6 |
| 8 | `i_swan` | بجعة | بَجَعَة | baa | 6 |
| 9 | `i_ostrich` | نعامة | نَعَامَة | noon | 6 |
| 10 | `i_sparrow` | عصفورة | عُصْفُورَة | ayn | 4 |
| 11 | `i_bat` | خفاش | خُفَّاش | khaa | 6 |
| 12 | `i_snail` | حلزونة | حَلَزُونَة | haa | 5 |

### jobs — People who help us (friendly cartoon adults, standing) (prefix `z_`)

| # | art | word | reading | letter | age |
|---|---|---|---|---|---|
| 1 | `z_doctor` | دكتور | دُكْتُور | dal | 3 |
| 2 | `z_teacher` | مدرس | مُدَرِّس | meem | 4 |
| 3 | `z_police` | شرطي | شُرْطِي | sheen | 4 |
| 4 | `z_firefighter` | إطفائي | إِطْفَائِي | alef | 5 |
| 5 | `z_farmer` | فلاح | فَلَّاح | faa | 5 |
| 6 | `z_cook` | طباخ | طَبَّاخ | tah | 5 |
| 7 | `z_driver` | سواق | سَوَّاق | seen | 5 |
| 8 | `z_pilot` | طيار | طَيَّار | tah | 5 |
| 9 | `z_nurse` | ممرضة | مُمَرِّضَة | meem | 6 |
| 10 | `z_builder` | بناء | بَنَّاء | baa | 6 |
| 11 | `z_singer` | مطرب | مُطْرِب | meem | 6 |
| 12 | `z_painter` | رسام | رَسَّام | raa | 5 |

### music — Music (prefix `m_`)

| # | art | word | reading | letter | age |
|---|---|---|---|---|---|
| 1 | `m_drum` | طبلة | طَبْلَة | tah | 4 |
| 2 | `m_guitar` | جيتار | جِيتَار | jeem | 5 |
| 3 | `m_piano` | بيانو | بِيَانُو | baa | 5 |
| 4 | `m_violin` | كمان | كَمَان | kaaf | 5 |
| 5 | `m_flute` | ناي | نَاي | noon | 6 |
| 6 | `m_trumpet` | بوق | بُوق | baa | 5 |
| 7 | `m_tambourine` | دف | دُفّ | dal | 5 |
| 8 | `m_oud` | عود | عُود | ayn | 6 |
| 9 | `m_mic` | ميكروفون | مِيكْرُوفُون | meem | 5 |
| 10 | `m_headphones` | سماعة | سَمَّاعَة | seen | 5 |
| 11 | `m_note` | نوتة | نُوتَة | noon | 6 |
| 12 | `m_bell` | جرس | جَرَس | jeem | 4 |

### school — School (prefix `e_`)

| # | art | word | reading | letter | age |
|---|---|---|---|---|---|
| 1 | `e_pencil` | قلم | قَلَم | qaaf | 3 |
| 2 | `e_book` | كتاب | كِتَاب | kaaf | 3 |
| 3 | `e_notebook` | كراسة | كُرَّاسَة | kaaf | 4 |
| 4 | `e_scissors` | مقص | مَقَص | meem | 5 |
| 5 | `e_ruler` | مسطرة | مِسْطَرَة | meem | 5 |
| 6 | `e_eraser` | أستيكة | أُسْتِيكَة | alef | 5 |
| 7 | `e_crayons` | ألوان | أَلْوَان | alef | 4 |
| 8 | `e_board` | سبورة | سَبُّورَة | seen | 5 |
| 9 | `e_map` | خريطة | خَرِيطَة | khaa | 6 |
| 10 | `e_glue` | صمغ | صَمْغ | sad | 6 |
| 11 | `e_desk` | مكتب | مَكْتَب | meem | 5 |
| 12 | `e_paper` | ورقة | وَرَقَة | waaw | 4 |

### shapes — Glossy geometric shapes (each ONE solid color, centered, 3D look) (prefix `g_`)

| # | art | word | reading | letter | age |
|---|---|---|---|---|---|
| 1 | `g_rectangle` | مستطيل | مُسْتَطِيل | meem | 4 |
| 2 | `g_oval` | بيضاوي | بَيْضَاوِي | baa | 5 |
| 3 | `g_diamond` | معين | مُعَيَّن | meem | 5 |
| 4 | `g_hexagon` | سداسي | سُدَاسِي | seen | 6 |
| 5 | `g_pentagon` | خماسي | خُمَاسِي | khaa | 6 |
| 6 | `g_arrow` | سهم | سَهْم | seen | 4 |
| 7 | `g_cube` | مكعب | مُكَعَّب | meem | 5 |
| 8 | `g_sphere` | كرة | كُرَة | kaaf | 4 |
| 9 | `g_cone` | مخروط | مَخْرُوط | meem | 6 |
| 10 | `g_cylinder` | أسطوانة | أُسْطُوَانَة | alef | 6 |
| 11 | `g_ring` | حلقة | حَلْقَة | haa | 5 |
| 12 | `g_heart` | قلب | قَلْب | qaaf | 3 |

### veg — Vegetables (prefix `v_`)

| # | art | word | reading | letter | age |
|---|---|---|---|---|---|
| 1 | `v_tomato` | طماطم | طَمَاطِم | tah | 4 |
| 2 | `v_cucumber` | خيار | خِيَار | khaa | 4 |
| 3 | `v_potato` | بطاطس | بَطَاطِس | baa | 4 |
| 4 | `v_onion` | بصل | بَصَل | baa | 5 |
| 5 | `v_eggplant` | باذنجان | بَاذِنْجَان | baa | 5 |
| 6 | `v_pepper` | فلفل | فِلْفِل | faa | 5 |
| 7 | `v_lettuce` | خس | خَس | khaa | 5 |
| 8 | `v_broccoli` | بروكلي | بُرُوكْلِي | baa | 5 |
| 9 | `v_peas` | بسلة | بِسِلَّة | baa | 6 |
| 10 | `v_pumpkin` | قرع | قَرْع | qaaf | 5 |
| 11 | `v_garlic` | ثوم | ثُوم | thaa | 6 |
| 12 | `v_mushroom` | فطر | فُطْر | faa | 6 |

### weather — Weather and nature (prefix `t_`)

| # | art | word | reading | letter | age |
|---|---|---|---|---|---|
| 1 | `t_rain` | مطر | مَطَر | meem | 4 |
| 2 | `t_snow` | ثلج | ثَلْج | thaa | 4 |
| 3 | `t_wind` | هوا | هَوَا | haa2 | 5 |
| 4 | `t_thunder` | رعد | رَعْد | raa | 6 |
| 5 | `t_lightning` | برق | بَرْق | baa | 6 |
| 6 | `t_umbrella` | شمسية | شَمْسِيَّة | sheen | 4 |
| 7 | `t_flake` | ندفة | نُدْفَة | noon | 6 |
| 8 | `t_flower` | زهرة | زَهْرَة | zayn | 3 |
| 9 | `t_leaves` | أوراق | أَوْرَاق | alef | 5 |
| 10 | `t_hot` | حر | حَرّ | haa | 5 |
| 11 | `t_cold` | برد | بَرْد | baa | 5 |
| 12 | `t_mountain` | جبل | جَبَل | jeem | 5 |

## APPENDIX 6 — COMMIT LOG SINCE 2026-11-13 (what was built, in order)

| commit | date | message |
|---|---|---|
| `13ebe07` | 2026-11-16 | Add UI UX Pro Max, taste skill and HyperFrames skills (reviewed); usage rules in dev-tools.md and docs/DESIGN_SKILLS.md |
| `2166eb8` | 2026-11-16 | Merge remote-tracking branch 'origin/feature/rehlaty' into feature/rehlaty |
| `9498721` | 2026-11-16 | Add LinkedIn agent skills (11 skills, MIT; reviewed: local Python only, no hooks, no network) |
| `1cf5087` | 2026-11-16 | Remove LinkedIn skills from the project (owner wants them in his Claude chats instead) |
| `72ca1b6` | 2026-11-17 | Jungle animals and pads; desert and home worlds from the owner's pictures (levels 11 and 12); worlds 11 and 12 |
| `fd35010` | 2026-11-17 | Merge remote-tracking branch 'origin/feature/rehlaty' into feature/rehlaty |
| `663b521` | 2026-11-17 | Add handover README for the learning-world work (worlds, art pipeline, layout rules, deploy, open items) |
| `5bb4db9` | 2026-11-17 | Eight rounds per level; 75 more words with the owner's pictures (animals, home, city, castle, sea, desert), more vehicles, fruits and habits; wider letter pools; voice lines and diacritics for all of it; picture packs (11 sheets, 132 words) ready to switch on |
| `c5f0236` | 2026-11-17 | More animals to feed (13); handover: content expansion, packs, voices, what is missing |
| `8fc9b92` | 2026-11-17 | Voice clips (Fatima) for all new sentences, listening page of the new clips, shapes pack prompts |
| `04282eb` | 2026-11-17 | Apply the owner's voice picks (22 clips), second round of takes for 6 sentences |
| `3723622` | 2026-11-17 | Apply take B (hamza qaf) for 'القاف زي قرد'; takes pages for the last round |
| `17b4d01` | 2026-11-17 | Full handover README (sync guide, finished, remaining, scripts, appendices) |

## APPENDIX 7 — DETAILS OF EVERYTHING DECIDED AND LEARNT (hand-written log)

### 7.1 The owner's requests, in the order they came (summary)
1. Voices: pick the best take for each marked sentence (hearts «دي قلب …», qaf must not sound like «جلب»; chosen: take C for «دي قلب برتقالي»); letters ز / ذ — decided to KEEP
   ز = الزاي (giraffe) and ذ = الذال (corn); pictures of the girl hero (clips: laugh, walk, clap, wave) from his free-tier videos (demo only).
2. Levels page and learning page: his own pictures; straight from the game card to the levels page (the old start page removed); all levels open from the start;
   no Mama/Baba characters in the habits level (title «عاداتي اليومية»); the blue penguin/owl bigger and complete; «هنلعب سوا النهارده» (fun) and «هنتعلم سوا النهارده» (learning) said when a page opens.
3. Level 1 scenery from his designs (house, windmill, fields, trees, grass), everything that moves keeps moving; frames while walking between levels must line up (seam planes).
4. Camera: zoom a little closer so it looks like a game and not a video; ideal size for phones in landscape (most important) and portrait; bigger hero; hero + owl beside him;
   big clear letter signs and animals; any age can open the game (not only 3–6).
5. Farm level: first video/picture backgrounds were rejected and the earlier code-built farm restored; later rebuilt from his farm sheets; the four choices must be in the right place
   (not behind the fence/barn), nothing may overlap.
6. Each level needs life in the background (windmill turning etc.): beach water, gulls, dolphin, crab, boat, lighthouse beam; space stars, UFO, robot; city vehicles; snowfall; …
7. Complete all level-1 pictures (frog, plane, grapes, dove, butterflies, birds), then the next worlds; he generated every sheet with ChatGPT from prompts written here.
8. Question picture (monkey, rabbit …) must be clear, big and just above the question sign (not under it, not far away).
9. Fix sign-out on every visit of the demo.
10. More learning: 8–10 questions per level, many more words/letters/things per level, new voices in the same Fatima voice, scripts for new pictures, README for another account.
11. Voice review loop: he marked the mispronounced sentences (23 + a few), picked takes, then only «القاف زي قرد» remained → take B chosen.

### 7.2 Layout and camera numbers (landscape / portrait)
- `LANDSCAPE = { span 9.2, off 0.9, zs [-1.3,-0.2], hero [-4.4,4.6,1.3], owl [-6.7,4.0,0.85], stand [-0.2,3.3], cam {box [9.0,5.1], target [0,2.5,0.3], minAspect 0} }`
- `PORTRAIT = { span 8.0, off 0, zs [-4.4,-2.5], hero [-2.2,5.8,1.25], owl [0.2,5.4,0.85], stand [2.2,2.6], cam {box [6.6,4.4], target [0,2.6,1.8], minAspect 0} }`
- Number plaques scale 1.6 landscape / 1.2 portrait; the picture the child is asked about is fitted into 2.5 × 2.3 units; pads (owner pictures) are 1.75 high and lift the standing item by 0.62.
- Choice rows alternate between the two z values; hit radius 1.5; plaque pole centred above the picture; golden halo rings around plaques.
- Nothing tall in the choice area; panoramas are planes 52×26 at z −14.5 whose `bottom` y is chosen so the picture's horizon is ≈ y 2 (values in each world); the sky dome is the FIRST child
  of every world (the walk between levels clips it), `renderOrder` sky −10, panorama −1.
- Rack of the owl: 8 slots (spacing 0.56, dish radius 0.25), kept pictures scaled ×0.8×0.62.
- Rounds: `ROUNDS = 8`; HUD stars = `ROUNDS`; the counting wait is `9000 + n*1700` ms; footsteps timed from the walk clip.

### 7.3 Art pipeline lessons
- Cut boxes with 15 px margin per grid cell; items that cross their cell need an override line (later lines in `cut_art.sh` win). Prefixed names (`b_ f_ s_ r_ c_ w_ k_ u_ j_ d_ h_`) are never "grown"
  (growing swallowed neighbours the first time: a silo appeared where the pump should be). "STILL CUT" on a prefixed picture usually = a neighbour's crumb touching the box;
  check with a contact sheet (ffmpeg hstack/vstack over a coloured background).
- Textures are scaled to 1024², panoramas to 1600 wide, webp quality 85; cuts are lossless 2×.
- White animals on a white sheet need a soft grey-blue edge in the prompt, otherwise the matte eats them.
- Files in `assets/games/art/` + sizes in `game_src/learn_games/src/kit/art_dims.json` (written by `recut.mjs`).

### 7.4 Voice pipeline details
- The clip id of a sentence = FNV-1a over "ar|<spoken text>" (emoji/symbols stripped). The game plays `learn_voice/ar/<id>.mp3` if listed in `manifest.js`, else the device voice.
- Arabic is never sent without full vowel marks (`tashkeel.json`); a spelling difference between screen text and reading is allowed only for the `SPELLING` set in `make_tashkeel.py`.
- Takes: A = steady (stability .75, speed .92), B = natural (.55, .92), C = lively (.38, speed .95); sentences with their own VARIANTS use spellings/speeds listed in `takes.mjs`.
- Sentences redone in this session (round 1, 28): first-letter questions for إشارة, بالون, بقرة, بطريق, حرباء, سحابة, صدفة, فارس, فرشاة, كنز, مدرسة, مكنسة, منشفة, نمر; rewards الباء زي بالون,
  الحاء زي حمار وحشي, الدال زي دولاب, الدال زي دولفين, السين زي سلحفاة, الفاء زي فارس, الفاء زي فرشاة, القاف زي قرد, القاف زي قنديل بحر, الكاف زي كنز, الكاف زي كوكب, الميم زي مكنسة;
  فين قنديل البحر؟; يلا نشوف الساعة كام. The owner's picks (22 applied): إشارة A, بقرة A, بطريق A, حرباء C, سحابة C, صدفة C, فارس A, فرشاة B, كنز A, مدرسة C, مكنسة B, منشفة B, نمر B,
  الباء زي بالون B, الحاء زي حمار وحشي C, الدال زي دولاب C, السين زي سلحفاة A, القاف زي قنديل بحر A, الكاف زي كنز A, الكاف زي كوكب A, الميم زي مكنسة B, فين قنديل البحر؟ A.
  Not liked (round 2 made, page 29): بالون (first letter), الدال زي دولفين, الفاء زي فارس, الفاء زي فرشاة, القاف زي قرد (→ round 3, page 30, chosen B), يلا نشوف الساعة كام.
- Cost: the 251 new clips ≈ 4.6k characters of ElevenLabs text.

### 7.5 Environment gotchas (Windows, this machine)
- Arabic text on a command line or in a bash heredoc gets mangled: write files with the editor tool, then run them; always `PYTHONUTF8=1` for python.
- The C: drive filled up once (flutter test/build crashed "not enough space"): delete `%TEMP%\flutter_tools.*`; the web build needs several GB of free RAM (dart2js "Could not start thread" = low memory, retry after closing Chrome).
- The local preview server (`python -m http.server`) dies when a session ends: restart it. The preview browser caches `game.js`: fetch it with `{cache:'reload'}` before reloading.
- Cloudflare Pages needs 1–3 minutes after a push; an empty extra commit to `demo-site` helped once. Compare md5 of a live file with the build output, not only `main.dart.js`.
- A `git push` can be rejected because another Claude session pushed (design skills): `git fetch`, `git merge origin/feature/rehlaty`, push.
- `minAspect: 0` must be read with `??` (not `||`); a method named `_frame` collided with the per-frame update (renamed `_pictureFrame`).

### 7.6 Tests and checks run
- `npm test` in `game_src/learn_games`: 71 tests (levels, letters, animals, shapes, counting, more words, maze, ladders, …). `flutter analyze`: 0 errors, 25 infos/warnings (old).
- Flutter tests of the learning page, educational games, page voice and animated characters passed (35).
- Browser checks at 932×430 and ~390×844 (and 780×850) for: farm, beach, space, rainbow, city, snow, castle, underwater, jungle, desert, home, the words level (8 stars) and the animals level.
- Not run: the full Flutter test suite, any real device, screen readers, the Android build.

### 7.7 Safety and project rules that still apply
No ads, no tracking, no external links for the child; no YouTube; the only videos are the owner's own lessons; child mode is started by the parent and left with a PIN; stars only for finishing
an activity (never for time or streaks). Never invent credentials, bundle ids, Firebase config or approvals; never commit keys. Publishing Firebase rules or anything outward-facing needs the owner's say.
