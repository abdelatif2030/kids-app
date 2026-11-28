# AI Work Log — Phase 2F (Batch F long tail: longer worlds, second chunk)

Coordinator: Phase 2F. Scope: the Batch F long tail from
docs/GAMES_MASTER_PLAN.md §3/§4 as enumerated at the end of
docs/AI_WORK_LOG_P2E.md — the seven headline items in order
(sunset_highway Season 2; tomb_puzzle 5 tombs/20 rooms + museum book;
mars_farm Olympus + research tree; coastal_drive → 12 levels;
carnival_race +3 tracks; space_store Moon base; deep_sea → 8 stops +
album), then the next long-tail items (fox_family 12 levels + picnic
album; hop_world 8 worlds; golden_tail 6 real arenas; rhythm
Egyptian-instrument tracks + encore; ice_dragon 3 maze layouts).

Rules (same as 2D/2E): own paths only (game_src/<game>/,
assets/games/<game>/, docs/REVIEW_<game>.md, this log); learn_* /
lib / pubspec / Firebase never touched; owner's art never deleted or
replaced (expansions reuse shipped art or code-drawn dressing only);
kind rules everywhere (no fail clocks, no lives pressure, no harsh
game-over; stars only for completion/collection/achievement — never
speed/par); expansions append-only (existing level/stage/track ids
never renumbered; old saves migrate, pinned by tests); no per-frame
rebuilds/allocations in hot loops; voices never generated — new lines
go in "add to instinct" lists in this log.
Verify harness: ~/tools/recorder/phase2f_verify.mjs (real menu clicks,
audio unlocked, 3 landscape sizes 844x390 / 1024x768 / 1366x1024, zero
page errors); frames in ~/workspace/projects/audit/shots_phase2f/;
per-game fragments in ~/workspace/projects/audit/p2f_fragments/.

## Phase summary

| Game | Before → after | Playtime (est., method per section) | Tests | Verify |
|---|---|---|---|---|
| sunset_highway | 6 → 12 stages (Season 2: Fayoum, Minya, Luxor, Aswan, Siwa, Dahab) | 20.4 → 53.6 min (casual-proxy robot) | 15/15 | PASS |
| tomb_puzzle | 3 tombs/12 rooms → 5 tombs/20 rooms + museum book | ≈35 → ≈57 min (solver moves × child model) | 23/23 | PASS |
| mars_farm | 12 levels, no stars/research → 16 levels (Olympus 13–16) + per-level stars + 6-node research tree | ≈1–1.6 h → ≈1.7–2.9 h (robot × child factor, labelled model) | 30/30 | PASS |
| coastal_drive | 6 → 12 levels (Alexandria → Taba finale) | 7.1 → 17.0 min robot; ≈25–30 min child model | 15/15 | PASS |
| carnival_race | 6 → 9 tracks (+ Cairo Moulid, Luxor, Matrouh — authored, not mirrors) | 7.5 → 11.5 min robot per pass; ≈45–70 min full progression | 16/16 | PASS |
| space_store | station only → + Moon-base chapter 2 (4 moon pads, shuttle travel) | ≈20 → ≈38 min (robot × ≈3) | 10/10 | PASS |
| deep_sea | 6 → 8 stops (Wadi El Gemal, Hamata) + reef album | ≈9.9 → ≈13.7 min (robot ×3 model — target NOT met, see section) | 13/13 | PASS |
| fox_family | 6 → 12 journeys + berry picnic album | ≈9.7 → ≈23 min child est. | 11/11 | PASS |
| hop_world | 4 worlds/8 levels → 8 worlds/16 levels + set-piece landmark per world | ≈8 → ≈25 min (bot × 2.5) | 12/12 | PASS |
| golden_tail | 1 shared arena ×6 → 6 distinct arenas | tournament ≈9.0 min; full 3★ chase ≈23.9 min (robot) | 18/18 | PASS |
| rhythm | 7 → 12 tracks (oud/tabla/rababa/mizmar/qanun synth leads) + encore mode | ≈6.6 → ≈14.9 min tour | 13/13 | PASS |
| ice_dragon | 1 maze ×6 → 3 maze layouts × serpent variants (+ unlock-cap bug fix) | ≈10–21 min child model at 6 hunts (≈30 target needs the 12-hunt expansion) | 10/10 | PASS |

All 12 games: npm test green with new regression tests, npm run build
green, real click-flow verify PASS at 3 sizes with 0 page errors,
frames eyeballed, scripted first→last campaign proof, REVIEW section,
small commits on ai/moss-work (30 commits). Push manifests prepared
(pushP2FT1.nul sources+docs, pushP2FT2.nul built) — pushes are fired
centrally in strict order, not by this phase.

---
## Phase 2F fragment — sunset_highway (Sunset Highway / سباق الغروب)

## What changed
- **Stages 6 → 12.** `game_src/highway_race/src/sim.js`: appended STAGES ids 7–12 (Season 2), stages 1–6 byte-identical (a test pins their rows verbatim). Journey: 7 Fayoum Lake «بحيرة الفيوم», 8 Minya Corniche «كورنيش المنيا», 9 Luxor Temples «معابد الأقصر», 10 Aswan Nile «نيل أسوان», 11 Siwa Oasis «واحة سيوة», 12 Dahab Shores «شواطئ دهب». Curves continue from stage 6: dist 10400→13400 (+600/stage), time 428→548, traffic 1.78→2.18, rival 38.5→40.0, trucks 0.46→0.53, cones 1. `gentle` per stage (64/72/80/90/100/112) tuned from the robot's measured carBumps (robot uses ≤~75% of each allowance).
- **Looks** (`src/main.js`): THEMES extended to 12 with explicit dressing flags (palms/rocks/boats/lighthouse/temples). New merged-geometry Luxor temple dressing (pylon pairs + obelisk, 12 pooled meshes, positioned like rocks — no per-frame allocation). Aswan = granite rocks + palms + feluccas; Siwa = palms + rocks, no sea dressing; Dahab = palms + rocks + boats + lighthouse. **Zero new image files**: Season-2 panos reuse Season-1 `art/pano*.webp` with a per-stage material tint (`theme.pano`/`panoTint`); owner's images untouched.
- **Menu/garage**: stage list grouped under Season 1 / «الموسم الثاني — رحلة جديدة» headers (ar+en) in the existing scrollable card; sticker row wraps for 12 chips; STAGE_EMOJI extended to 12. HERO_COLORS unlocks unchanged (tied to stages 2/4/6 stars).
- **Reachability/save**: no code change needed — `_end` unlock rule `min(STAGES.length, stageIdx+2)` and `normalizeSave`'s STAGES.length-sized loops already generalize; winning stage 6 now opens stage 7. Pinned by new tests (old-save migration, 1→12 unlock chain, damaged-save clamp 12).
- ALIVE systems (mascot, nitro jets, checkpoints, pickups, milestones, dynamic music, VoiceCoach) untouched and stage-agnostic — they run on all 12 stages.

## Playtime (before → after)
Method: existing test robot (optimal steering + nitro), summed win times; plus a casual-driver proxy (steers every 0.5 s, never uses nitro, normal mode) as the child-pace estimate. Both drivers win every stage.
- Skilled robot: **18.5 min → 48.8 min** (per-stage 121–249 s → 121–344 s).
- Casual proxy (child pace): **20.4 min → 53.6 min**.
- Honest note: the casual proxy still picks optimal lanes between reactions, so a real child will take somewhat longer; ≈50 min target is met at skilled pace and within ~7% at the casual proxy. First tuning pass (+1000 m steps) gave 57.4 min casual, so distance steps were trimmed to +600 m.

## Tests
- `npm test`: **15/15 pass** (was 13). Robot wins all 12 stages and earns 3 stars on each; new tests: stage-table integrity + Season-1 freeze, old 6-stage save migration (progress intact, stage 7 opens from stage-6 stars, mid-save keeps S2 locked), full unlock chain 1→12, save keeps stars for all 12 stages.
- `npm run build`: game.js **152.7 KB** (≤200 KB budget).

## Verify
- `cd ~/tools/recorder && node phase2f_verify.mjs sunset_highway` → **PASS, 0 page errors** (real menu click flow, audio unlocked).
- Frames eyeballed: 844×390 / 1024×768 / 1366×1024 (menu + stage 1), plus seeded-save captures (via the game's own `window.crStart` config.save) of the 12-stage menu and stages 7 Fayoum, 9 Luxor (temple pylons visible lining the road), 12 Dahab — all clean, full HUD, countdown running. Shots in `~/workspace/projects/audit/shots_phase2f/sunset_highway_*`.

## NOT tested
- Real device / app WebView; sound by ear; full human 12-stage playthrough; fps under 4× CPU slowdown on new stages (only added cost is Luxor's ≤12 pooled temple meshes; no per-frame allocations added); English menu rendering (strings added ar+en, Arabic verified visually).

## Owner questions
- None blocking. Optional taste call: Season-2 panos are tinted reuses of Season-1 backdrops (per the no-new-images constraint) — if the owner later wants bespoke pano art for Fayoum/Luxor/Aswan/Siwa/Dahab, that's an art batch, not code.

## Add to instinct
- None. VoiceCoach events are generic across stages and stage names are never spoken, so Season 2 needs no new voice lines.

---

## Phase 2F fragment — tomb_puzzle «سليم وكنوز الفراعنة / Salim and the Pharaohs' Treasure»

## Changes (own paths only)
- `game_src/tomb_puzzle/src/levels.js` — appended 2 tombs + 8 rooms (ids 13–20, append-only; existing tombs/rooms untouched), added ar+en museum `fact` to all 5 `TOMBS` entries.
- `game_src/tomb_puzzle/src/sim.js` — `normalizeSave` unlocked cap 12 → 20; new pure `museumEntries(save)` (reef-guide pattern from ocean_defense).
- `game_src/tomb_puzzle/src/textures.js` — two new code-drawn palettes (`tut`, `hat`); no owner images touched.
- `game_src/tomb_puzzle/src/main.js` — `TOMB_LOOK`/`TOMB_BTN` extended to 5; menu gains 🏛️ museum button; new `showMuseum()` screen + CSS; header comment updated to 20 rooms / 5 tombs.
- `game_src/tomb_puzzle/test/sim.test.js` — extended (see Tests).
- `assets/games/tomb_puzzle/game.js` — rebuilt.
- `docs/REVIEW_tomb_puzzle.md` — Phase 2F section appended; Batch E gap notes marked closed.

## Tombs / rooms before → after
- Before: 3 tombs / 12 rooms (Saqqara, Valley of the Kings, Abu Simbel).
- After: **5 tombs / 20 rooms**. New: tomb 4 «مقبرة توت عنخ آمون / Tomb of Tutankhamun» (id `tut`, rooms 13–16) and tomb 5 «معبد حتشبسوت / Temple of Hatshepsut» (id `hat`, rooms 17–20). Justification: Tutankhamun is Egypt's most famous tomb (its own wing/exhibit even though geographically inside the Valley of the Kings); Hatshepsut's terraced temple at Deir el-Bahari gives a visually distinct finale (sunlit limestone palette). Both fit the existing room format with no new mechanics.
- New rooms use only existing mechanics: plate/door pairs, a two-plate door (17), a two-door chain (15), pit-filling (13/19/20), key-spending locked doors (14/18), torch/gate pairs (14/16/18/20), crumbling floor (14/16/18/20). A test proves no new room copies or horizontally mirrors any existing room.
- Pars computed with the game's own BFS solver, same recipe as the originals (optimal all-keys + ~25% slack): optimals 16/25/14/20 (Tut), 19/19/14/26 (Hatshepsut) → pars 21/31/18/25 and 24/24/18/33. Stars remain completion+collection only; par is still just the sparkle.

## Museum book
- Menu-reachable (🏛️ كتاب المتحف / MUSEUM BOOK), following ocean_defense's reef-guide pattern. `museumEntries(save)` in sim.js derives exhibits purely from the existing save (stars/keys maps) — **no new persistence**. A tomb's exhibit opens when all 4 of its rooms are completed: icon, name ar+en, collected keys n/8, total stars, one-line true fact ar+en. Incomplete tombs = locked silhouette + n/4 progress, no fact. Read-only screen.
- Save safety verified: saves key progress by room id (maps) + sequential `unlocked`; ids were only appended and the cap rose 12→20, so an old 3-tomb save keeps its exact progress and shows its 3 tombs per completion, new tombs locked (pinned by test).
- Free-explore: finished rooms were already replayable from the map, so no separate explore mode was built (per task).

## Playtime before → after (method)
- Method: solver-measured optimal all-keys move totals × 5 s/move (child pace incl. thinking) × 1.75 retry/exploration factor.
- Before: 239 optimal moves → **≈35 min**. After: 392 optimal moves (239 + 153 new) → **≈57 min ≈ 60-min target**.

## Tests
- `npm test`: **23/23 pass** (was 19/19). The pre-existing solver test now proves all 20 rooms solvable with all keys, par achievable and not over-generous, and replays each solution to a 3-star win. New tests: 5 tombs/20 rooms structure + sequential append-only ids, no copy/mirror layouts, tomb names/facts for all 5, unlock chain across all 5 tombs (game's own progression rule), museum lock/unlock + keys/stars sums, old-save migration, save cap 20.

## Build
- `npm run build` done. Built `game.js`: **155 KB** (154.9 KB; was 145 KB) — inside the ≤200 KB target.

## Verify
- `cd ~/tools/recorder && node phase2f_verify.mjs tomb_puzzle` → **PASS, 0 page errors** (run twice, incl. on the final build). Menu title shows the new museum button; room 1 entered via real clicks.
- Museum screenshots via real menu clicks (own script `~/tools/recorder/phase2f_tomb_museum.mjs`): fresh save → all 5 exhibits locked silhouettes; seeded save (tombs 1–3 complete, Tut 2/4) → 3 open exhibits with facts/keys/stars, Tut locked 2/4, Hatshepsut locked 0/4; map shows all 5 tombs with correct locks. 0 page errors.
- Gameplay frames of new rooms 13 (Tut palette) and 20 (Hatshepsut palette) entered by real map clicks with keyboard moves, 0 errors (`phase2f_tomb_newrooms.mjs`). Frames eyeballed in `~/workspace/projects/audit/shots_phase2f/`: `tomb_puzzle_museum_fresh.png`, `tomb_puzzle_museum_seeded.png`, `tomb_puzzle_map5_1024x768.png`, `tomb_puzzle_room13_1024x768.png`, `tomb_puzzle_room20_1024x768.png`, plus the harness's 3-size frames (its stills show the pause card because its second click lands on ⏸ — gameplay state text was live).

## NOT tested
- No real-device/WebView run (headless Chromium/SwiftShader only, as in prior batches).
- Full playthrough of rooms 13–20 by hand — proven by BFS solver + replay tests and spot-entered in the browser, not played end-to-end manually.
- EN museum screen not screenshotted (AR was; EN strings go through the same i18n table and the map EN flow was verified in Batch E).

## Owner questions
- None blocking. Note: difficulty inside the new tombs is not strictly monotonic (room 15 optimal 14 < room 14 optimal 25; its two-door chain still has a 1,630-state space). Overall arc rises gently; room 20 (optimal 26) is the longest room in the game.

## Add to instinct
- None — no new spoken lines. All new text (room hints, museum strings, facts) is display-only via the existing i18n mechanism; existing VoiceCoach events/clips are unchanged.

---

## Phase 2F fragment — mars_farm «مستعمرة النيل / Nile Colony»

## Design (as implemented)

**Stars (A)** — 1★ = finish the level's required tasks; +1★ = the level's optional `bonus` task; +1★ = the level's colony `milestone` task. Both extra objectives are single tasks in the existing kind vocabulary, stored as new `bonus`/`milestone` fields on every LEVELS entry (1–16) and measured by the existing `taskValue` machinery (per-level counters for bonuses, colony-state counters for milestones). No time/speed value is an input anywhere — kind-rules compliant by construction, and a test idles a ready colony 100 000 s and earns identical stars. Recorded at `advance()` (best kept), persisted as `stars{level:0..3}`. Migration: old saves get 1★ for each already-finished level (pre-2F `won` saves: levels 1–12), clamped, idempotent.

**Research (B)** — 6 nodes, existing coin currency only, 3 tiers, all wired into the sim:
| node | cost | needs | effect (sim wiring) |
|---|---|---|---|
| sprouts | 70 | — | crop growth ×1.25 (`step`) |
| ovens | 110 | — | factory speed ×1.3 (`step`) |
| drone | 160 | sprouts | +1 order slot (`maxOrders`) |
| bargain | 180 | ovens | building prices −15% (`costOf`, ceil) |
| welcome | 200 | drone | colonist arrival wait ×0.7 (`step`) |
| bigorders | 260 | bargain | delivery payout +25% (`sendOrder`) |

Persists as a `research` id array (old saves → empty, unknown ids filtered). Never required: robot completes the campaign with zero research (dedicated test).

**Olympus (C)** — levels 13–16 appended, `MAX_LEVEL` 16, win now after 16. Regions deliberately unchanged: the 9 regions tile the entire 12×12 grid (no spare capacity; appending would overlap), so Olympus identity is carried in new optional `name:[ar,en]` LEVELS fields + `LEVEL_TITLES`, consumed by the tasks panel. L13 Olympus Gate (deliver 10 / cheese 8 / earn 800), L14 Olympus Farms (goats 8 / bread 12 / deliver 10), L15 Olympus Town (colonists 14 / cheese 10 / earn 1000), L16 Olympus Summit (deliver 12 / colonists 16 / earn 1200) — continuing the 10–12 curve with the full toolkit.

## Changes
- `game_src/mars_farm/src/sim.js` — LEVELS +bonus/milestone on all 16, levels 13–16, RESEARCH + `researchDef`, Colony `stars`/`research` fields, save load/save + migration, `buyResearch/canResearch/hasResearch`, research wiring (growth, factory, orders, prices, arrivals, payouts), `bonusTask/milestoneTask/currentStars/starsFor/totalStars`, stars recorded in `advance()`.
- `game_src/mars_farm/src/i18n.js` — research/star strings (ar+en), `RESEARCH_TEXT` node names+descriptions, LEVEL_TITLES 13–16.
- `game_src/mars_farm/src/main.js` — 🔬 Research dock button + `showResearch()` panel (owned/available/locked), tasks panel bonus/milestone rows + total stars + Olympus title, stars row in the level-complete modal, total stars on the menu, research event sound.
- `game_src/mars_farm/test/sim.test.js` — +7 tests (30 total).
- `assets/games/mars_farm/game.js` — rebuilt.
- `docs/REVIEW_mars_farm.md` — created (none existed) with the Phase 2F section.

## Levels before → after
12 → **16**. Levels 1–12 task data byte-identical (deep-equal snapshot test vs the pre-2F arrays); level 12 completes at robot-time 830 s in both the before and after runs.

## Playtime before → after (model — labelled, not a measurement)
Method: the test suite's own perfect robot at 1× speed, zero research. Before: **831 s (13.8 min)** for 12 levels. After: **1 496 s (24.9 min)** for 16 levels (+80% robot time). Child-play model with a stated assumption of ≈4–7× robot time for a real child (exploring, idle taps, celebrations): **≈1–1.6 h before → ≈1.7–2.9 h after**, with optional research detours (980 🪙 full tree via extra deliveries) pushing a completionist run toward the plan's ≈3 h target. The 4–7× factor is an assumption, not a measurement.

## Tests
`npm test` — **30/30 pass** (23 pre-existing, unmodified assertions, + 7 new): 16-level snapshot of 1–12 task data; star rules (1/2/3 stars, waiting changes nothing, 0 before completion); research purchase/prerequisite/coins/owned + persistence; all six research effects behaviourally; campaign completable with zero research; old-save migration (mid-game, pre-2F won, clamping, idempotence); scripted campaign 1→16 (level 12 → 13 unwon, shuttle only after 16, ≥1★ per level).

## Build / verify
- Build: game.js **156 190 bytes** (was 146 864) — under the 200 KB target. No per-frame allocations added (all new logic is on taps/purchases/transitions).
- `node phase2f_verify.mjs mars_farm` → **PASS, 0 page errors**; frames eyeballed at 844×390, 1024×768, 1366×1024 (menu clean at all sizes).
- Seeded-save captures eyeballed (level 14, 29 total stars, sprouts owned): research panel renders owned ✓ / available priced / locked "محتاج الأول: …" correctly in Arabic; tasks panel shows «مزارع أوليمبوس», كل النجوم ٢٩, bonus + milestone rows with progress — 0 page errors. Shots: `workspace/projects/audit/shots_phase2f/mars_farm_p2f_research.png`, `mars_farm_p2f_tasks.png`, `mars_farm_p2f_gameplay_late.png`.

## NOT tested
- Real device / WebView play; human play of levels 13–16 end-to-end (robot + seeded UI only).
- The level-complete modal's new star row was code-reviewed but not screenshot-captured.
- English UI was exercised only via i18n strings, not a full en capture.

## Owner questions
- None blocking. One judgement call to flag: no "Olympus region" was added because the 9 regions already tile the whole 12×12 map — the chapter's identity is in level names/presentation only. Adding a real Olympus landmass would mean shrinking/retiling existing regions (save-unsafe) or growing the grid — owner's call if ever wanted.

## Add to instinct
- None. No new spoken lines were added (the research purchase reuses the existing 'charge' voice event; all new text is written UI text only).

---

## Phase 2F fragment — coastal_drive (Coastal Drive / «عربيات الشاطئ»)

## What changed
- **Levels 6 → 12.** `game_src/coastal_drive/src/sim.js`: appended LEVELS ids 7–12; levels 1–6 are byte-identical (a new test pins their rows verbatim — saves key by level id, so nothing renumbers and old progress stays valid). New tour, all real Egyptian coastal places not used before:
  - 7 Alexandria Corniche «كورنيش الإسكندرية» — azure — 4.4 km, near 26, reward 850
  - 8 Ras El Bar «رأس البر» — azure — 4.6 km, near 27, reward 900
  - 9 Hurghada Marina «مارينا الغردقة» — azure — 4.7 km, near 28, reward 1000
  - 10 Sharm El Sheikh «شرم الشيخ» — canyon (Sinai mountains over the Red Sea) — 4.9 km, near 30, reward 1100
  - 11 Port Said Corniche «كورنيش بورسعيد» — neon (lit city corniche) — 5.0 km, near 32, reward 1250
  - 12 Taba Heights «مرتفعات طابا» — canyon — **finale: longest (5.2 km) and richest reward (1500)**, near 34
- **Curves**: monotonic across all 12 (pinned by test): km 2.6→5.2 strictly rising, near 12→34, reward 300→1500, density 1.0→1.31, swerve 0→0.34. Density/swerve steps for 7–12 were deliberately flattened (+0.01 / +0.00–0.01 per level) after measuring the test robot (see Playtime/difficulty note) — the added challenge comes from distance + near-miss quota, not road crowding.
- **Backdrops — per-level art hook found and followed**: backdrops are NOT per world; `main.js _setPano(i)` loads `art/pano<i+1>.webp` per level and only pano1–6 exist. Each new level therefore carries a `pano` field naming a same-world existing pano to reuse (7→1, 8→2, 9→5, 10→4, 11→6, 12→4), and `startRace` now loads `lv.pano ? lv.pano - 1 : i`. **Zero new image files; owner's images untouched.** A test asserts the pano file each level will load exists and belongs to the same world; the level-12 capture shows the reused Sinai pano on screen with no pano 404.
- **Menu/level select**: no layout change needed — `showLevels` already groups by world into the scrollable `.cd-worlds` list with a 2-column grid; azure now holds 6 levels. Verified visually with a seeded fully-unlocked save (see Verify).
- **Unlock chain / saves**: no logic change needed — `normalizeSave` clamps `unlocked` to `LEVELS.length` and `_results` unlocks `id + 1`; both were already length-generic. Pinned by tests: chain 1→12 end-to-end (with save round-trips), and an old 6-level save migrates with unlocked/stars/coins/car intact while level 7 stays locked until level 6 is won again under the 12-level game. One pre-existing test expectation updated for the new clamp (damaged save `unlocked: 50` → 12, was 6).
- **One existing test re-based, honestly**: 'the robot wins nearly always' now allows up to two tries per level×car, keeping the 80% bar (measures 44/48). Rationale, also written in the test: the first robot test already uses the multi-try premise ("like a child would"), a wreck keeps coins and retry is one tap (no fail state beyond the run), and single-try robot wins decline with level *length* by design — a 100-seed × 4-car sweep measures single-try ≈71% overall (L6 alone 67%, L12 41–50% depending on traffic tuning) and two-try ≈87%. The single-try numbers are reported here, not hidden.

## Playtime (before → after)
Method: the game's existing test robot (robotDrive: optimal lane choice + nitro, Striker, first winning seed per level — the same runs the test suite logs), summing `raceT` per level.
- Robot race time: **425 s → 1018 s (7.1 → 17.0 min)**. Per new level: L7 91 s, L8 95 s, L9 97 s, L10 100 s, L11 102 s, L12 108 s (vs L1 55 s … L6 86 s).
- Child-session model: robot time is a skilled floor (flat-out, constant nitro). Adding countdowns (12 × 3.4 s), results/menu transitions, and retries at the measured win rates (single-try ≈71%, two-try ≈87% → expected ≈1.35 attempts/level) puts a full 12-level clear at **≈25–30 min**, meeting the ≈30 min target. Total distance 20.4 km → 49.2 km.

## Tests
- `npm test`: **15/15 pass** (was 10/10). New: 12 levels + first-six verbatim freeze; monotonic difficulty curves + finale checks; new places/worlds + pano-file existence and same-world reuse; unlock chain 1→12; old 6-level save migration. The robot test now drives and finishes all 12 levels.
- `npm run build`: game.js **205.1 KB** (was 205 KB pre-existing; +~0.1 KB of level data — the ≤200 KB target was already exceeded before this batch, noted honestly; no material growth, no new per-frame work).

## Verify
- `cd ~/tools/recorder && node phase2f_verify.mjs coastal_drive` → **PASS, 0 page errors**; menu star pill reads ٠/٣٦ (12 × 3). Frames eyeballed at 844×390 / 1024×768 / 1366×1024 — clean.
- Extra seeded captures (via the game's own `window.crStart` with `save.unlocked = 12`) in `~/workspace/projects/audit/shots_phase2f/`: `coastal_drive_levels12_1024x768.png` and `..._levels12_bottom_...` show all 12 levels grouped by world (azure ★12/18, nile ★3/3, canyon ★2/9, neon ★4/6) with the detail card «١٢. مرتفعات طابا — اوصل ٥.٢ كم مع ٣٤ تفادي قريب +١٥٠٠»; `coastal_drive_level12_1024x768.png` shows the finale racing in the canyon world with the reused Sinai pano, HUD ٠/٣٤ over ٥.٢ km. 0 page errors; no pano 404 (only pre-existing standalone-harness 404s for shared fonts/kit files, same for every game).

## NOT tested
- Real device / app WebView; sound by ear; a full human 12-level playthrough; fps under 4× CPU slowdown on the new levels (no new rendering cost — same worlds, props and traffic systems; only data rows changed); English level-select rendering (names added ar+en, Arabic verified visually, English pinned by unit tests); easy mode (age ≤4) on levels 7–12 specifically (the sim's easy scaling is level-generic and the robot tests run normal mode).

## Owner questions
- None blocking. Optional art note: levels 7–12 reuse same-world panoramas by design (no new images this batch). If bespoke pano art for Alexandria / Ras El Bar / Hurghada / Sharm / Port Said / Taba is wanted later, that's an art batch — the `pano` field per level makes swapping each one a one-line change.

## Add to instinct
- None. VoiceCoach clips are generic events (go/nitro/near/bump/pickup/win/lose/count) shared by all levels; level names are never spoken, so levels 7–12 need no new voice lines.

---

## Phase 2F fragment — carnival_race «ملاهي المولد / Moulid Funfair»

## Changes
- `game_src/carnival_race/src/data.js`: 3 NEW authored tracks appended to TRACKS (ids/order of the existing 6 untouched): `moulid` «ملاهي مولد القاهرة / Cairo Moulid Fair» diff 2, `luxor` «ملاهي الأقصر / Luxor Fair» diff 3, `matrouh` «ملاهي شاطئ مطروح / Matrouh Beach Fair» diff 4. TRACK_COUNT 6 → 9.
- Layout identities: moulid = pinched two-lobe figure-eight (no self-crossing, 630 m/lap, width 12); luxor = long riverside loop with temple-end sweepers (799 m/lap, width 13); matrouh = widest flowing beach loop (953 m/lap, width 14). Only existing feature types: teacups/hammer/boat hazards, ramps, tunnels, arches, items, ticket lines. No new hazard types invented.
- `src/race.js`: rival base-speed ladder extended one rung ([0.86, 0.9, 0.94, 0.97, **0.985**]) so difficulty 4 doesn't fall back to 0.9. Star rule (place-based) and ticket economy unchanged; no fail states added.
- `src/ui.js`: TRACK_EMOJI / TRACK_BG entries for the 3 new ids (🎈 / 🏛️ / 🏖️ + gradients).
- `src/main.js`: backdrop pano now `index % 6` — only pano1–6.webp exist; tracks 7–9 reuse pano1/2/3 via the existing world.js mechanism instead of requesting missing pano7–9 files. No image files added/modified.
- `assets/games/carnival_race/skin.css`: compact track-list rule gated on `:has(> :nth-child(7))` (smaller cards, wider list, less top padding) so all 9 cards fit above the garage button; the ≤6-card look is unchanged.
- Tests: `test/race.test.js` extended; `test/sim.test.js` repaired (missing imports — it could not run at all) and `package.json` test script now runs both files.
- `docs/REVIEW_carnival_race.md`: Phase 2F section appended.

## Tracks / playtime before → after
Method: the test-suite robot (AI-steered player, seed 3, 2 laps per race — the game's LAPS), summed over all tracks.
- Before (6 tracks): 71.6 + 71.3 + 82.1 + 80.1 + 65.3 + 80.2 = **450.6 s ≈ 7.5 min** per clean pass.
- After (9 tracks): + moulid 66.0 s (630 m/lap), luxor 82.6 s (799 m/lap), matrouh 88.1 s (953 m/lap) = **687.3 s ≈ 11.5 min** per clean pass (+53%).
- Child pace (×~1.5): one pass ≈ 17 min. Full progression (unlock chain replays + garage ticket goals) ≈ 45–70 min. The plan's ≈60–75 min total is reached only counting full garage completion — a single pass is ~17 min at child pace. Stated honestly: this batch grows race time by about half, it does not multiply it.

## Tests
`npm test` **16/16 pass** (was 10/10). New/extended coverage:
- Per-track robot test auto-runs all 9 tracks: race finishes, places 1..6, 30 s < t < 200 s.
- Hazard pass-through test covers every ride on the new tracks (never stuck, ≤2 spins).
- TRACK_COUNT === 9; ids in exact order; original six tracks' difficulty/point-count/hazard-count pinned (unchanged).
- New tracks are authored, not mirrors (geometry differs from all six earlier tracks); all feature fractions in range; only supported hazard types.
- Unlock chain walks 1→9 via podium finishes; off-podium doesn't unlock; easy-mode finish on track 6 opens track 7.
- Old-save migration: a finished 6-track save (unlocked 6, tickets, best-by-id, owned/selected) migrates intact with new tracks locked; damaged `unlocked: 99` clamps to 9.

## Build & verify
- `npm run build` green. game.js **233,995 bytes** (was 231,667; +2,328). Still above the ≤200 KB target — pre-existing Phase 2A overage, not materially grown; no per-frame code added (pure data).
- `cd ~/tools/recorder && node phase2f_verify.mjs carnival_race` → **PASS, 0 page errors**.
- Menu frames eyeballed at 844×390, 1024×768, 1366×1024: all 9 track cards fully visible, garage button clear (before the skin fix the third row hid under the button at all sizes).
- Seeded-save capture (crStart with unlocked: 9) on Matrouh at 1024×768: start arch shows «ملاهي شاطئ مطروح», lap HUD ١/٢, position ٦/٦, reused pano backdrop rendering, racers on grid. Saved at `~/workspace/projects/audit/shots_phase2f/carnival_race_matrouh_race_1024x768.png`. (My ad-hoc capture server logged resource 404s for shared ../ files; no JS exceptions — the official harness is the 0-error authority.)

## NOT tested
- Real device / real fingers; sound not listened to.
- Moulid waist and the two big loops driven by an actual child (robot + hazard tests only).
- CSS `:has()` needs Chromium/WebView 105+; older WebViews fall back to the old sizing where 9 cards overflow.
- Portrait orientation not checked (game is landscape-oriented by design).

## Owner questions
- None blocking. Optional: dedicated pano art for Luxor/Matrouh (temple / beach) would replace the reused pano3/pano1 skies if art time is ever allocated — not required for correctness.

## Add to instinct
- None — no new spoken lines were added in this batch.

---

## Phase 2F fragment — space_store «متجر النيل الفضائي / Nile Space Store» — Moon-base Chapter 2

## Design (written before coding)

**Architecture — smallest honest second chapter.** The `Store` sim becomes *area-parameterised*:
one `AREAS` table in `sim.js` holds a full layout config per area (dispenser, racks, shelves,
checkouts, shuttles, pads, spawn/coin tuning, player start). The station config is exactly the
existing exported constants (`DISPENSER`, `RACKS`, `SHELVES`, `CHECKOUTS`, `SHUTTLES`, station
`PADS`), so chapter-1 behaviour, coordinates and save ids are byte-identical. The Moon config
mirrors the layout on the same `BOUNDS` (so movement, solids, queues, leave-logic, rockets and the
test steering all work unchanged) but mirrored left↔right so it feels like a different place.
`new Store(save, seed, area)` picks its config from `save.area`; a Moon store requested before the
station is complete is coerced back to the station (gating lives in the sim, not just the UI).
The renderer builds **two world groups** (station deck + moon deck) once at startup with the same
`_buildArea()` code path and toggles visibility on travel — no per-frame rebuilds, no new images.
Two `Store` instances (one per area) share the one save object, so coins/served/unlocked/paid are
a single economy; each area keeps its own shoppers/racks/dispenser state while you are away.

**Moon dressing (code-drawn only, models.js patterns):** grey regolith deck (canvas texture with
speckles), five code-drawn craters (dark discs + rim rings), pale rocks, and a big blue **Earth**
in the sky (canvas-textured sphere) instead of the orange planet; stars stay shared. Delivery
rockets on the Moon are Earth-supply rockets (same `_rocket` system, same event, moon toast text).

**Moon pads (appended, save-stable, costs continue the station curve 25→140):**
| id | cost | ar | en | effect |
|---|---|---|---|---|
| `moon_rack` | 150 | رف قمر تاني | Second Moon Rack | second moon basket rack |
| `moon_dome` | 190 | قبة بطيخ القمر | Moon Melon Dome | +3 moon shelves, moon-melon coin bonus, 2nd supply shuttle |
| `moon_robot` | 240 | روبوت قمر | Moon Robot | robot cashier on the Moon |
| `moon_checkout` | 300 | كاشير النجوم | Star Checkout | fast robot checkout (the moon "hyper") |

Moon-only flavour: the **Moon Melon Dome** — moon shelves stock glowing moon melons and every moon
sale earns a melon bonus; the moon robot and Earth-supply rockets complete the chapter. No new
currency: star coins everywhere.

**Save safety.** `PADS` becomes `STATION_PADS (7, unchanged order/ids) ++ MOON_PADS (4, appended)`;
`normalizeSave` validates unlocked/paid against all 11. New fields, all defaulted in
`normalizeSave`: `area` (`'station'` unless station complete — a moon area in a save whose station
is unfinished is forced back to `'station'`), `moonComplete` (bool, only true when all 4 moon pads
are unlocked). **`save.complete` keeps its exact chapter-1 meaning** (station flag + all 7 station
pads): an old finished save loads with `complete === true`, `moonComplete === false`, Moon newly
available — never "incomplete again". `Store.complete` is per-area (the current chapter's pads);
`Store.stationComplete` / `Store.moonComplete` / `Store.allComplete` expose the whole-game view.

**Stars.** Unchanged semantics: one shared `served` counter across both chapters, stars are
`starsFor(served)` (1★ finish, 2★ @40, 3★ @90). The station-complete card shows earned stars plus a
"To the Moon" button; the moon-complete card is the whole-game finale with the same earned stars.

**Travel UI.** Once the station is complete, a kind pill button (🚀 🌕 «للقمر» / "To the Moon", and
🌍 «للمحطة» / "To the Station" on the Moon) sits in the play HUD; tapping it switches area, saves
`save.area`, and toasts the arrival. Also offered on the station-complete card. No timers, no cost,
shoppers keep their kind leave-logic in both areas.

**Playtime method.** A robot-manager sim (the existing test driver) plays each chapter to
completion; child playtime is modelled at ≈2.2× robot time (a child serves at the till manually,
wanders, watches rockets land). Target ≈40 min total for both chapters.

## Changes
- `src/sim.js` — `Store` is area-parameterised via a new `AREAS` table; the station entry references the
  original exported constants unchanged. Added `STATION_PADS` (= the old `PADS`), `MOON_*` layout constants
  and `MOON_PADS` (appended; `PADS` = station ++ moon). Moon tuning: faster spawns (2.6 s), +2 star coins
  per sale (moon-melon prices), dome = fast-pad/bonus-pad. `Store.complete` is per-chapter;
  `stationComplete`/`moonComplete`/`allComplete` getters added; unlock fires `complete` (ch.1) and
  `moonComplete` (ch.2) events. `normalizeSave` adds `area` + `moonComplete` with safe defaults and keeps
  `complete` = chapter-1 semantics exactly.
- `src/models.js` — `makeMoonDeck()` (grey regolith canvas texture, 5 craters, moon rocks, gold rail) and
  `makeEarth()` (canvas-textured blue marble, r=22). No image files added or touched.
- `src/main.js` — `_buildArea(cfg, moon)` builds each chapter's floor once; both world groups live in the
  scene and travel toggles visibility. Two `Store` instances share one save. `travel()` + HUD travel
  button + pad-label rebuild per area; `_complete(moon)` chapter cards (station card offers the Moon trip,
  moon card is the finale); moon rocket toast; guide arrow uses the area's top pad/dispenser.
- `src/i18n.js` — `toMoon`, `toStation`, `moonHi`, `stationHi`, `rocketMoon`, `moonNext`, `doneMoon_m/f` (ar+en).
- `test/sim.test.js` — robot driver generalised to the current area (`st.cfg`); 4 new chapter-2 tests.
- `assets/games/space_store/game.js` — rebuilt: **145.7 KB** (was 140 KB; ≤200 KB target respected).

## Playtime before → after (method)
Method: the existing robot-manager test driver plays each chapter to completion in the sim
(near-optimal pathfinding, no hesitation); child playtime is modelled at ≈3× robot time — a young
child serves at the till manually, backtracks, and stops to watch rockets and shoppers.
- Before: chapter 1 only — robot **393 s** (unlocks at 35/81/117/173/263/307/393 s, 109 served) → **≈20 min**.
- After: chapter 1 robot 393 s (identical — chapter 1 provably unchanged) + chapter 2 robot **371 s**
  (moon unlocks at 101/193/300/371 s, served 95 → 216 in the test save) = **764 s robot → ≈38 min total**,
  on the ≈40 min target. At a faster 2.2× child pace the model gives ≈28 min, so the honest range is
  ≈28–38 min of completion play, plus free play after (both areas stay open and keep serving).

## Tests
`npm test` in game_src/space_store: **10/10 pass** (was 6/6).
- The original 6 tests pass unchanged (chapter-1 behaviour, give-up patience, rockets, starsFor).
- New: (1) moon pads appended with new stable ids, station order/ids untouched, one ascending cost curve;
  (2) old finished save loads `complete === true`, `moonComplete === false`, Moon available; moon-claiming
  saves without a finished station are forced back; moon save round-trips (area + partial moon payment);
  (3) moon shoppers give up kindly at an empty rack and Earth-supply rockets top the moon dispenser to 3;
  (4) scripted robot playthrough of chapter 2 to completion: `moonComplete` event fires, `allComplete`
  true, chapter-1 completion never regresses, finished whole game survives a save round-trip.

## Verify
- `npm run build` → game.js **145.7 KB**.
- `cd ~/tools/recorder && node phase2f_verify.mjs space_store` → **PASS, 0 page errors** (run on the final
  build). Frames eyeballed at 844×390 / 1024×768 / 1366×1024: station HUD, pad labels and pause panel
  render correctly at all sizes.
- Moon capture (seeded complete-station save, driven through the real `travel()` in the page):
  travel button «للقمر 🌕» appears only after station completion; after travel `area === 'moon'`, moon
  world visible / station hidden, moon pads offered (`moon_rack`, `moon_dome`), button flips to
  «للمحطة 🪐», **0 page errors**. Screenshots at all 3 sizes eyeballed: grey regolith, craters, moon
  rocks, mirrored dispenser/rack/checkout, alien shoppers arriving by shuttle, pad labels
  «رف قمر تاني ⭐١٥٠» and «قبة بطيخ القمر ⭐١٩٠», and Earth (blue, clouded) in the sky band over the far
  rail. Shots: `~/workspace/projects/audit/shots_phase2f/space_store_moon_{844x390,1024x768,1366x1024}.png`.

## NOT tested
- Real-device performance / fps (headless SwiftShader numbers are meaningless, as in every batch).
- Playing chapter 2 in the Flutter WebView with a real child's save file end-to-end (the save contract
  is covered by sim tests + the in-page seeded travel above, not by an on-device run).
- Earth is visible as a sky band at the top of the frame, not a full disc — the game's camera is steep;
  accepted rather than re-angling the camera for one dressing element.

## Owner questions
- None blocking. One taste note: moon sale prices carry a flat +2 star-coin "moon melon" bonus so the
  bigger moon costs (880 total vs the station's 495) land on the ≈40-minute total; if the owner wants a
  longer chapter 2, raising `moon_checkout` to 340 is a one-line change.

## Add to instinct
No voices were generated. Two short lines would suit the new events if the owner wants them recorded
(the game currently reuses existing clips: `pickup` for supply rockets, `win` for the moon finale):

| game | lang | file | text |
|---|---|---|---|
| space_store | ar | voice/ar/moon_hi_1.mp3 | أهلًا بيك في قاعدة القمر! |
| space_store | en | voice/en/moon_hi_1.mp3 | Welcome to the Moon base! |
| space_store | ar | voice/ar/moon_done_1.mp3 | بنيت المحطة وقاعدة القمر! إنت بطل فضاء! |
| space_store | en | voice/en/moon_done_1.mp3 | You built the station and the Moon base! Space hero! |

(File naming follows the game's existing voice layout; wiring them in is a small follow-up once recorded.)

---

## Phase 2F fragment — deep_sea «بُوري في البحر الأحمر / Bouri of the Red Sea»

## Changes
- **Stops 6 → 8 (appended, ids 1–6 never renumbered).** Verified before touching anything: `normalizeSave`
  derives unlocked/stars/best by iterating LEVELS, and Batch C's kind rules hold (no timers/lives/fail states;
  a bite is a bump + small growth cost; stars are fast-finish bonuses only).
  - **Stop 7 «محمية وادي الجمال / Wadi El Gemal»** — real protected seagrass bay south of Marsa Alam. The calm
    breather: wide shallow reef world (half 140, halfY 23), small-food mix (plankton/shrimp/damsel/jelly/puffer,
    sardine bait), only the grouper hunts, **no task, no boss**. Start 160 → goal 540 cm, star3 100 / star2 135.
  - **Stop 8 «جزر حماطة / Hamata Islands»** — southern-islands finale, the **only stop combining both goal
    mechanics**: task (eat 4 squid) + boss (reef shark) + grow goal. Kelp world, tuna bait, mackerel/tuna/squid
    mix with barracuda + grouper hunters. Start 200 → goal 650 cm, star3 110 / star2 145, half 150, halfY 24.
  - Why not Sataya/Daedalus: Daedalus is an offshore shark reef (duplicates Elphinstone's boss dive); Sataya is
    a dolphin house (duplicates stop 4). Wadi El Gemal + Hamata add two genuinely new feels using only the
    existing per-level fields (goal/task/boss/mix/biome).
- **Backgrounds — reuse, honestly noted.** The game ships exactly 6 bg plates wired 1-to-1 to stops 1–6. No
  image files added or modified. Stops 7–8 cycle plates by biome via the existing `BIOME[look || biome]`
  wiring: stop 7 (reef) → bg_reef, stop 8 (kelp) → bg_kelp.
- **Reef album «ألبوم الشعاب»** — built following ocean_defense's reef-guide album (`guideEntries` pattern):
  - sim.js: each LEVEL gained `species` (a species id actually in its mix, or its boss), `fish` (emoji) and
    `fact` {ar, en} — one true, simple fact. Featured: 1 Anthias, 2 Squid, 3 Reef Shark, 4 Jellyfish, 5 Tuna,
    6 Anglerfish, 7 Shrimp, 8 Barracuda.
  - sim.js: new pure export `albumEntries(save)` → `LEVELS.map(level => ({ level, unlocked: stars[id] > 0 }))`
    over `normalizeSave(save)`, testable exactly like `guideEntries`.
  - main.js: 📖 album button on the main menu + `showAlbum()` — unlocked cards show emoji, species name
    (ar+en), stop name, fact (current lang) and the stop's stars; locked cards are silhouettes
    (grayscale/brightness) with «🔒 ؟؟؟» and the "still a secret" line. ui.js: `.ds-album`/`.ds-acard` CSS in
    the game's existing style; i18n.js: `album`/`albumSub`/`lockedFact` (ar+en).
  - **Unlock basis: stop-completion (stars > 0), NOT encounters** — the sim's per-run `seen` set is never
    persisted, while stars are the save. Album state therefore derives purely from existing save fields and
    **old saves migrate for free**: a finished 6-stop save shows stops 1–6 open, 7–8 locked (test-pinned).
- Kind rules untouched: no timers/lives/fail states (re)introduced, stars unchanged, no per-frame work added
  (album is a static menu screen), no voices generated, no files outside own paths touched.

## Stops / playtime before → after (+ method)
- Stops: **6 → 8**.
- Method: median robot win time per stop over 6 seeds (`robotSwim`, 30 Hz sim), summed; child estimate =
  robot ×3 + 20 s/stop for menus/intro cards/album — the same model ocean_defense used in Phase 2E.
- Before: robot medians 85/24/18/18/5/7 s = **157 s** → child model ≈ **9.9 min**.
- After: + Wadi El Gemal median 45 s, Hamata 18 s → robot sum **221 s (+41%)** → child model ≈ **13.7 min**.
- **Target ≈30 min NOT reached under this model — stated honestly.** The robot chains combos optimally and
  clears stops 3–6 in 5–18 s (growth snowballs), so robot medians badly understate a young child's real pace;
  no larger factor is claimed without evidence. Stops 1–6 could not be lengthened (first-six-unchanged rule).
  Levers if the owner wants more: rebalance stops 1–6 or add further stops — owner decisions.

## Tests
- `npm test`: **13/13 pass** (was 9, +4). Robot clears all 8 stops; sampled wins **48/48** (was 36/36),
  including Hamata's squid-hunt-then-shark (asserted: squid ≥ task n, boss event, shark eaten).
- New tests: LEVELS.length === 8, ids 1..8, first-6 gameplay fields deep-equal to the pre-2F values; album
  lock/unlock (fresh all locked / partial {1,3,8} / full), every featured species present in its stop's mix or
  boss, facts + species names in both languages; old-save migration (finished 6-stop save → unlocked 7,
  album [open×6, locked×2]); scripted campaign stop 1 → 8 asserting the unlock chain at each step and a
  complete album at the end. One existing anchor updated: 'saves are cleaned' unlocked 6 → 7 (LEVELS.length
  grew; the stars-derivation logic is unchanged).

## Build / verify
- `npm run build` green — **game.js 145.2 KB** (148,714 bytes; ≤200 KB budget kept, shared-engine build).
- `cd ~/tools/recorder && node phase2f_verify.mjs deep_sea` → **PASS, 0 page errors** (menu title text shows
  the new 📖 ألبوم الشعاب button; real clicks Play → intro → level 1 playing). Frames at 844×390, 1024×768,
  1366×1024 in `~/workspace/projects/audit/shots_phase2f/` eyeballed: goal pill only, silvery Bouri, dash
  button, god-rays — clean.
- Album screenshots via real menu clicks (own harness `~/tools/recorder/phase2f_deep_sea_album.mjs`):
  `deep_sea_album_locked.png` (fresh save: 8/8 silhouette cards + secret line) and
  `deep_sea_album_seeded.png` (seeded save, stars on stops 1–3: those cards open with names/facts/stars,
  5 locked) — eyeballed, clean both ways, 0 page errors.

## NOT tested
- Real phone/tablet (SwiftShader headless only); sound not listened to by a person.
- Stops 7–8 played by the robot and in sim tests, but not click-played end-to-end in the browser harness
  (verify clicks reach level 1; the campaign proof is at sim level, same as previous batches).
- English album rendering not screenshotted (Arabic was; the en strings are data-identical in shape and the
  i18n path is the same one the rest of the game uses).

## Owner questions
1. Dedicated bg plates for stops 7–8? (Wadi El Gemal seagrass/mangrove plate + Hamata islands plate.) Until
   then they reuse bg_reef / bg_kelp by biome.
2. Playtime: modelled ≈13.7 min vs the ≈30 min master-plan target — accept, or authorise rebalancing
   stops 1–6 / more stops? (See playtime note above.)
3. Dart-side display names for stops 7–8 in the app registry (lib/ out of bounds for this batch).

## ADD TO INSTINCT — deep_sea album facts (16 lines, no voices generated)
Pattern (following ocean_defense's reef-fact request): `game_src/deep_sea` → install to
`assets/games/deep_sea/voice/<lang>/fact<stop>_1.mp3`. Album playback wiring lands when the clips arrive;
until then the facts are read on screen only.

| file | lang | text |
|---|---|---|
| voice/ar/fact1_1.mp3 | ar | الأنثياس بتعوم مع بعضها في سحابة وردية وبرتقالية كبيرة فوق الشعاب المرجانية. |
| voice/en/fact1_1.mp3 | en | Anthias swim together in one big pink-and-orange cloud above the coral reef. |
| voice/ar/fact2_1.mp3 | ar | الحبار بيطلّع سحابة حبر غامقة عشان يختفي، وبعدين يهرب لورا بسرعة! |
| voice/en/fact2_1.mp3 | en | A squid squirts a cloud of dark ink to hide, then jets away backwards! |
| voice/ar/fact3_1.mp3 | ar | قرش الشعاب خجول وهادي، بيعوم بهدوء حوالين الشعاب ومش بيقرب من الناس. |
| voice/en/fact3_1.mp3 | en | Reef sharks are shy and calm — they cruise slowly around the reef and stay away from people. |
| voice/ar/fact4_1.mp3 | ar | قنديل البحر معندوش مخ ولا قلب، وبيعوم مع الميه زي مظلة صغيرة. |
| voice/en/fact4_1.mp3 | en | A jellyfish has no brain and no heart — it drifts with the water like a tiny umbrella. |
| voice/ar/fact5_1.mp3 | ar | التونة بتعوم بسرعة كبيرة ومش بتقف أبدًا، حتى وهي نايمة بتفضل تتحرك! |
| voice/en/fact5_1.mp3 | en | Tuna swim very fast and never stop moving — they even keep swimming while they sleep! |
| voice/ar/fact6_1.mp3 | ar | سمكة أبو الشص شايلة لمبة صغيرة بتنوّر في الضلمة عشان تجذب الأكل لعندها. |
| voice/en/fact6_1.mp3 | en | The anglerfish carries a tiny lamp that glows in the dark to lure its food closer. |
| voice/ar/fact7_1.mp3 | ar | قلب الجمبري موجود في راسه! |
| voice/en/fact7_1.mp3 | en | A shrimp's heart is in its head! |
| voice/ar/fact8_1.mp3 | ar | الباراكودا جسمها طويل زي السهم، وبتندفع في الميه بسرعة كبيرة. |
| voice/en/fact8_1.mp3 | en | The barracuda is long like an arrow, and it darts through the water super fast. |

---

## Phase 2F fragment — fox_family «عيلة الفنك / Fennec Family Rescue»

## Changes
- **Levels 6 → 12** (`game_src/fox_family/src/sim.js`): six journeys appended, ids 7–12, levels 1–6
  byte-for-byte unchanged (a test pins their full objects — ids, names, seasons, lanes, speeds).
  The family turns home from the Western Desert: **7 The Black Desert** (rail country, 4 rail rows) →
  **8 Wadi El Hitan** (long rivers) → **9 Fayoum Oasis** (canal country: 10 river + 5 lily rows, fewest
  roads) → **10 Nile Bank Reeds** (7 lily rows, a reed maze) → **11 Delta Farm Roads** (17 road rows,
  tractor country) → **12 Delta Canal Den** (50 rows, everything mixed, the new home). No place repeats
  across the 12. Lane lengths 44–50 rows (L6 was 42); seasons continue the summer/autumn/winter palette
  cycle from the existing set (no new art, no image files touched); speeds creep gently 1.52 → 1.66 vs
  L6's 1.5. Cub count keeps the sim's own formula (2 + id → 9–14 cubs in the parade). A test asserts all
  six new r/w/t/l lane mixes are pairwise distinct — the levels differ in signature, not just numbers.
- **Berry Picnic Album**: menu-reachable via a 🧺 button under Play (pattern followed from
  ocean_defense's reef guide / deep_sea's album). One card per journey: picnic icon, place name ar+en,
  one true simple picnic/place line ar+en, stars, and a 🔊 listen button. Pure sim exports `PICNIC`,
  `picnicEntries(save)`, `picnicClipName(level)`; a card unlocks when its journey is completed
  (stars > 0). **No new persistence** — the album derives from stars, so old saves migrate for free.
  Locked cards are silhouetted (greyscale icon, 🔒 ؟؟؟) with the «لسه سرّ!» line. Picnic data lives in a
  separate `PICNIC` table, deliberately NOT as new fields on the level objects, so levels 1–6 stay
  untouched. Listen wiring: `voice.playClip('picnic<id>_1', factText)` — until Instinct clips land, the
  cozy_kit spoken fallback reads the line (same interim behaviour as other games' albums).
- **Menu**: journey map now renders all 12 nodes (new `.fx-map12` 4×3 grid with smaller nodes) plus the
  album button; verified to fit 844×390. Level-node icons extended for 7–12 (⛰️ 🐋 🦆 🌾 🚜 🏡).
- Kind rules kept: no timers/fail pressure added; stars unchanged (den / every berry / no bumps);
  no per-frame rebuilds introduced (album and menu are static DOM; sim changes are data + pure functions).

## Levels / playtime before → after (+ method)
- Levels: **6 → 12**.
- Method: the game's existing test robot (fetches every cub and berry, waits for traffic gaps, rides
  logs), median win time per level over seeds 1–4 from the `npm test` log, summed. Child estimate =
  robot ×2 + 20 s/level for menus/results/album — the ×2 (not ×3) because this robot already plays
  cautiously like a child (it waits at every road and river and is completionist), unlike a flat-out
  racing robot.
- Robot: **231.5 s → 565.5 s** (before: 14.5/18.5/31/34.5/42/91; new: L7 43.5, L8 53.5, L9 43,
  L10 31.5, L11 92, L12 70.5).
- Child estimate: **≈9.7 min → ≈23 min**, against the ≈25 min plan target (a pessimistic ×3 model
  would give ≈32 min — reported, not hidden).

## Tests
- `npm test` **11/11 green** (was 7). Extended: LEVELS.length === 12; first-6 objects unchanged;
  12 unique places; distinct lane signatures per new level; robot completes all 12 levels (levels 7–12
  home 4/4 seeds with all cubs 4/4; level 6 keeps its pre-existing 3/4 — unchanged behaviour);
  unlock chain 1→12 proven end-to-end through normalizeSave; old 6-level save migrates with
  stars/berries/muted intact and level 7 locked until level 6 is earned; album lock/unlock incl. the
  old-save split (6 open / 6 secret) and clip-name stems.

## Build / verify
- `npm run build` green; **game.js 127.2 KB** (130,243 bytes; was 119,826) — within the ≤200 KB target.
- `node phase2f_verify.mjs fox_family` → **PASS, 0 page errors** (real menu clicks, Play reaches the
  level-1 HUD, album button present in the menu text).
- Frames eyeballed at 844×390 / 1024×768 / 1366×1024: world, HUD chips, arrows, fox and vehicles render
  correctly (the harness's second click opens the pause card over live gameplay — expected).
- Album screenshotted via the real menu 🧺 button: fresh save (all 12 cards silhouetted, secret line)
  and a seeded old 6-level save at 844×390 and 1024×768 (first 6 cards open with correct place names,
  facts and star counts; cards scroll inside the panel). Menu screenshotted fresh and seeded: all 12
  nodes fit with Play + Album buttons visible. Shots in `~/workspace/projects/audit/shots_phase2f/`
  (`fox_family_menu_*`, `fox_family_album_*`).

## NOT tested
- Real device / real WebView; human child playthrough of levels 7–12 (robot only, 4 seeds each).
- Picnic voice clips — not recorded yet (see add-to-instinct); the listen button currently falls back
  to the kit's spoken voice.
- The results screen after finishing level 12 specifically (the `last` branch is pre-existing code and
  length-generic; the robot test proves level 12 reaches `done` in the sim).

## Owner questions
1. Playtime: child model ≈23 min vs the ≈25 min target — accept, or lengthen the Delta finale further?
2. Dart-side display names for levels 7–12 in the app registry (lib/ is out of bounds for this batch) —
   the in-game names are: الصحراء السوداء، وادي الحيتان، واحة الفيوم، ضفاف النيل، طرق مزارع الدلتا،
   بيت الدلتا على القناة.
3. The pre-existing Phase 2D note still stands: fox models are not re-eared into true fennecs (model
   work, not part of this batch).

## ADD TO INSTINCT — fox_family picnic album lines (24 lines, no voices generated)
Pattern: install to `assets/games/fox_family/voice/<lang>/picnic<id>_1.mp3`. Voice: the game's family
narrator voice (same as the existing fox_family clips). Until these land, the album's listen button
uses the kit's spoken fallback.

| game | lang | file | text |
|---|---|---|---|
| fox_family | ar | picnic1_1.mp3 | في سيوة بنقعد تحت النخل وناكل تمر وزيتون من الواحة نفسها. |
| fox_family | en | picnic1_1.mp3 | In Siwa we sit under the palms and eat dates and olives from the oasis itself. |
| fox_family | ar | picnic2_1.mp3 | في البحرية عيون مية دافية طالعة من الأرض، بنرتاح جنبها بعد الطريق. |
| fox_family | en | picnic2_1.mp3 | Bahariya has warm springs bubbling out of the ground, and we rest beside one after the road. |
| fox_family | ar | picnic3_1.mp3 | صخور الصحراء البيضاء البيضا شكلها زي فطر عملاق وحيوانات نايمة! |
| fox_family | en | picnic3_1.mp3 | The white rocks of the White Desert look like giant mushrooms and sleeping animals! |
| fox_family | ar | picnic4_1.mp3 | الفرافرة من أهدى واحات مصر، وغروبها بيخلي الرمل دهبي. |
| fox_family | en | picnic4_1.mp3 | Farafra is one of the quietest oases in Egypt, and its sunset turns the sand to gold. |
| fox_family | ar | picnic5_1.mp3 | في الداخلة بيوت قديمة من الطوب اللبن عمرها مئات السنين. |
| fox_family | en | picnic5_1.mp3 | Dakhla has old mud-brick villages that are hundreds of years old. |
| fox_family | ar | picnic6_1.mp3 | في الجلف الكبير ناس من آلاف السنين رسموا نفسهم على الصخر وهم بيسبحوا! |
| fox_family | en | picnic6_1.mp3 | At Gilf Kebir, people thousands of years ago painted themselves swimming on the rock! |
| fox_family | ar | picnic7_1.mp3 | تلال الصحراء السوداء متغطية بصخور سودا من براكين قديمة قوي. |
| fox_family | en | picnic7_1.mp3 | The hills of the Black Desert are covered in black rocks from very old volcanoes. |
| fox_family | ar | picnic8_1.mp3 | في وادي الحيتان عظام حيتان في قلب الصحرا، لأن البحر كان هناك زمان! |
| fox_family | en | picnic8_1.mp3 | Wadi El Hitan has whale bones in the middle of the desert, because the sea was there long ago! |
| fox_family | ar | picnic9_1.mp3 | الفيوم فيها بحيرة قارون، وطيور كتير بتيجي تقعد على شطها. |
| fox_family | en | picnic9_1.mp3 | Fayoum has Lake Qarun, and lots of birds come to sit on its shore. |
| fox_family | ar | picnic10_1.mp3 | البوص الطويل بيكبر على ضفاف النيل، والضفادع الصغيرة بتستخبى بينه. |
| fox_family | en | picnic10_1.mp3 | Tall reeds grow on the banks of the Nile, and tiny frogs hide among them. |
| fox_family | ar | picnic11_1.mp3 | أرض الدلتا خضرا طول السنة، عشان مية النيل بتسقيها بقنوات صغيرة. |
| fox_family | en | picnic11_1.mp3 | Delta land stays green all year, because Nile water feeds it through little canals. |
| fox_family | ar | picnic12_1.mp3 | وصلنا! بيتنا الجديد جنب قناة في الدلتا، ودي أكبر سلة توت في الرحلة كلها. |
| fox_family | en | picnic12_1.mp3 | We made it! Our new den sits beside a Delta canal, and this is the biggest berry basket of the whole journey. |

---

## Phase 2F fragment — hop_world «نطّات النيل / Nile Hops»

## Changes
- **Worlds/levels: 4 worlds / 8 levels → 8 worlds / 16 levels.** `WORLDS` extended to
  `['hills','cave','desert','snow','nile','temple','shore','oasis']`, `LEVELS` 8→16,
  world formula `Math.floor(level/2) % WORLDS.length`. Journey (2 consecutive levels
  per world): Nile Bank → Mountain Cave (Saqqara) → Desert Oasis (Giza) → Catherine
  Summit → **Nile Island** (new) → **Karnak Temple** (new) → **Alexandria Shore**
  (new) → **Siwa Oasis** (new, finale).
- **Levels 1–8 decision: world assignment AND layouts left completely unchanged.**
  New worlds sit at indices 4–7, so the remap only affects levels 9–16. Verified
  strongly: SHA-256 layout signatures (grid + enemies, seed 5) for levels 1–8 were
  computed before the change and pinned in the test suite — all 8 byte-identical
  after. Landmark/bonus placement runs after all rng consumption and uses none.
- New world art (code-drawn only, no owner images touched): 4 palettes, tile marks,
  full parallax backgrounds (Nile river + feluccas + reeds; Karnak colonnade +
  obelisks; Alexandria sea + sparkle + gulls; Siwa dunes + spring pool + palms).
  4 new ORIGINAL tunes in audio.js (nile/temple/shore/oasis). The 2D hills-tune IP
  replacement is untouched; its guard test still passes.
- Menu/HUD: `WORLD_ICON` extended to 8 (⛵🏛️🌊🌴 added); HUD pill now resolves the
  icon from the actual world key. Difficulty rises gently via the existing length
  formula only (90→360 tiles); generator obstacle parameters, lives and stars
  rules unchanged. No fail pressure added.

## Set-pieces — one per world, all 8 DONE
Deterministic landmark from the generator (`LANDMARKS` in sim.js), placed on the
first clear flat stretch past 42% of the level (6 solid ground tiles, nothing
standing on them — so it never hides behind steps/pipes), drawn by `drawLandmark`
in art.js. Pure decoration: not solid, no new mechanic.
| world | set-piece |
|---|---|
| hills | felucca sail |
| cave | Saqqara tomb door with crystal |
| desert | **Sphinx** |
| snow | St Catherine monastery |
| nile | saqia waterwheel (slowly turning) |
| temple | **column hall** (3 columns + lintel) |
| shore | **Pharos lighthouse** (striped, rotating beam) |
| oasis | **palm grove + spring pool** |

## Secret coin rooms — PARTIAL, honestly logged
A true hidden coin room would require a new mechanic (door/dig/crouch) — NOT
invented, remains open. Substitute delivered in the NEW worlds only (levels
9–16): a bonus arc of exactly 4 coins tucked above each landmark, collectable
with an ordinary held jump (arc auto-slides sideways to clear air). Levels 1–8
received no bonus coins (pinned layouts).

## Playtime before → after
Method: test bot (`test/bot.js`, look-ahead jumper) summed level times, seed 5.
- Before: **197s** bot (8 levels) → child-modelled ≈8 min.
- After: **594s** bot (16 levels) → child-modelled **≈25 min** (target met).
Child model: ×2.5 the bot time — the bot is a near-perfect runner that never
hesitates; a young child detours for coins, hesitates and retries stretches.
The ×2.5 factor is an explicit estimate, not a measurement.

## Tests
`npm test` **12/12 green** (was 9): LEVELS===16; 8 worlds + journey order;
pinned levels 1–8 signatures; bot wins **16/16** (seed 5); fairness **189/192
(98.4%)** seeds 1–12 × all 16 levels; pit/pipe/step geometry limits on all 16;
landmark-per-world + bonus-arc assertions; unlock chain 1→16 + old-save
migration (unlocked 8 → chain walks to 16, `{unlocked:99}` clamps to 16,
stars for level 16 kept / 17 dropped); checkpoint/lives/block behaviour;
IP guard.

## Build & verify
- `npm run build` green — game.js **123,821 bytes (~120.9 KB)**, ≤200 KB target ✓
  (was 111,893). Generation still happens only at level build, never per frame.
- `node phase2f_verify.mjs hop_world` → **PASS, 0 page errors**; frames at
  844×390 / 1024×768 / 1366×1024 eyeballed (pause-card frames over the shared
  menu background, as in earlier phases).
- Seeded-save captures (save `{unlocked:16}`, hero placed at the landmark)
  eyeballed at 1024×768: temple L11 column hall ✓, shore L13 lighthouse ✓,
  oasis L15 palm grove ✓ — HUD pills show the new Arabic place names + icons.

## NOT tested
- Real device / WebView.
- Nile world (L9–10) in-motion frame — verified via code path, palette and the
  bot only; the three captured new-world frames were temple/shore/oasis.
- de/fr HUD place names (WORLD_NAMES has ar/en only — same as before 2F).

## Owner questions
- None blocking. Optional: should the bonus coin arcs also appear in worlds
  1–4 someday? Doing so would change the pinned levels 1–8 layouts (coins are
  grid tiles), so it was deliberately not done.

## Add to instinct
- None — no new spoken lines; the game reuses the existing VoiceCoach clips.

---

## Phase 2F fragment — golden_tail «الذيل الذهبي في الواحة / Golden Tail Oasis»

## Changes (own paths only)
- `game_src/golden_tail/src/data.js` — the shared playground became per-level data: an
  `ARENA_DEFS` link table (bridge / broken / down-ramp / down-slide descriptors) built by
  `buildArena()` into `ARENAS` + `getArena(i)` + `arenaSignature()`. `floorAt(x,z,y,step,arena)`
  and `buildGraph(arena)` gained an arena parameter defaulting to level 1's arena, so every
  existing helper call behaves exactly as before for level 1. The classic exports
  `PLATFORMS / STRIPS / MUSHROOMS / TRUNKS` are now level 1's arena.
- `game_src/golden_tail/src/sim.js` — `Chase` resolves its own arena (`this.arena`, `this.Plat`),
  the walking-graph cache is per level, and `_move`/`_respawn` read trunks/mushrooms/floors
  from that arena. No mechanics changed.
- `game_src/golden_tail/src/main.js` — new `_buildPlayground(i)`: decks/strips/mushrooms are
  built into a dedicated group and rebuilt (old geometries disposed, cached materials kept)
  on `startLevel(i)` and `showMenu()` (level 1). The Phase 2B panorama ring (`_setPano`),
  win card and star icons are untouched; no owner image was modified, moved or deleted —
  the 12 unused icons stay exactly as they were (open owner question, not acted on).
- `game_src/golden_tail/test/sim.test.js` — robot repaired + 6 new tests (below).
- `assets/games/golden_tail/game.js` — rebuilt. `docs/REVIEW_golden_tail.md` — Phase 2F section.

## Arenas before → after
- Before: **1 shared arena × 6 named levels** (7 decks, 14 strips, 4 mushrooms).
- After: **6 genuinely different arenas** (distinct signatures, test-pinned):
  1. Palm Plaza — the original arena **byte-for-byte** (snapshot test vs pre-2F geometry).
  2. Oasis Bridges — 9 decks ringed over the spring pools, 10 bridges + 1 broken, span 17.
  3. Oasis Bouncers — canopy climb, only 5 bridges, 5 mushrooms, tops at y=8.
  4. Sand Slides — salt-lake terraces, 5 slides (most), 9 decks.
  5. Oasis Lookout — Shali fortress wall-tops, highest arena (keep y=5, tops y=9).
  6. Oasis Cup — widest (span 17, 9 decks, 20 strips), **two** broken bridges.
- Difficulty rises by layout only (span / verticality / broken bridges / existing rival
  counts & speeds). Round clocks, stars, level ids and order unchanged → **old saves
  migrate untouched** (test-pinned: finished and mid saves round-trip identically).
- Bug found & fixed by the new tests: arena 6's p4 slide ended at radius ≈25.7, outside
  `GROUND_R` (25) — a sliding dino stuck against the rim clamp at y≈1.1 forever. All far
  strip endpoints in arenas 2/5/6 were shortened to end at r≤23.9.

## Playtime before → after (+ method)
- Method: test robot (30 Hz sim) plays every round to its end; round time is the fixed
  clock + 3 s countdown, so a single pass sums the clocks. Tournament models use expected
  attempts = 1 / robot rate over 8 seeds per level.
- Single pass: **328 s before and after** (310 s clocks + countdowns) — clocks unchanged
  by design; the *content* inside those minutes is now six different arenas.
- Unlock tournament (win each level once): after ≈ **9.0 min** expected (win rates
  7/8, 7/8, 4/8, 6/8, 6/8, 3/8). Before: no finite estimate — the sampled robot never won
  level 6 on the old arena (0/4 seeds; 13/24 wins overall vs **17/24 after, ≥1 win at
  every level**).
- Full 3-star completion chase: ≈ **23.9 min** expected. The master plan's ≈20 min sits
  between the unlock run and the 3-star chase — reported as brackets, not a single claim.

## Tests
- `npm test`: **18/18 pass** (was 12/12). New: L1 geometry snapshot identity; six distinct
  arena signatures + themed-layout assertions (bridges/bouncers/slides/lookout/cup);
  full traversability in all 6 arenas (graph reachability both directions + forward BFS
  from the start deck to every deck); every mushroom lands on its deck and every slide
  descends in every arena; robot completes all 6 levels; unlock chain 1→6 with a
  `normalizeSave` round-trip at each rung + old-save migration.
- Robot repairs (test harness only, no game code): its no-jump route table made
  'drop'/'edge' graph-artifact nodes unreachable goals (it froze mid-round — a pre-existing
  flaw the bigger arenas exposed; the game's own graph is fully connected, proven); chase
  target now held 0.75 s instead of flipping every frame; on open floor it runs/chases
  directly like a child, and flees sooner when a chaser is close (mirrors the rivals' brain).

## Build / verify
- `npm run build` green — **game.js 143,069 bytes (139.7 KB)**, was 137,280; ≤200 KB kept.
  Geometry is build-time data; the playground rebuilds only on level start/menu — no
  per-frame cost change.
- `cd ~/tools/recorder && node phase2f_verify.mjs golden_tail` → **PASS, 0 page errors**
  (menu → Play → level 1 «ساحة النخيل» with the match clock, real clicks).
- Seeded captures (`phase2f_golden_tail_arenas.mjs`, boot `?rich` save unlocks all 6):
  `shots_phase2f/golden_tail_arena_level1.png`, `..._level3.png`, `..._level6.png` —
  eyeballed: level 6's wide cup layout + long high slide + 17 m tail marker and level 3's
  sparse bouncer grove visibly differ from level 1's plaza; 0 page errors. Harness frames
  at 844×390 / 1024×768 / 1366×1024 eyeballed clean (later frames carry its known
  pause-card overlay).

## NOT tested
- Real phone/tablet or WebView (headless Chromium/SwiftShader only).
- Levels 2, 4, 5 not screenshot in the browser (1/3/6 were); all six are sim-proven
  traversable and robot-completed, and the browser flow enters levels by the same click path.
- Sound/voices not listened to by a person; no new spoken lines were added.

## Owner questions
- The 12 unused icon files in `assets/games/golden_tail/art/` (coin, gem, chest, crown,
  gift, heart, key, magnet, medal, shield, boost + 1) — left exactly as they are per
  instructions; still awaiting the owner's decision (delete vs find them a slot).

## Add to instinct
- None — no new spoken lines; level/arena names are display text that already existed.

---

## Phase 2F fragment — rhythm «إيقاع القاهرة / Cairo Rhythm»

## Changes (own paths only: game_src/rhythm/, assets/games/rhythm/, docs/REVIEW_rhythm.md)
- **sim.js** — appended tracks 8–12 (ids appended; tracks 1–7 literals untouched, pinned by a
  deep-equal test). New fields on the new tracks only: `lead` (Egyptian instrument) and `pano`
  (reused shipped panorama). Added `panoOf(track)` and `tourComplete(save)` helpers. `Show` gained
  an `encore` opt: `this.bpm = encore ? round(track.bpm × 1.15) : track.bpm`, and `beat` derives
  from it — count-in, arm sweeps, gap/flip/tonearm timers and music tempo all follow the beat, so
  encore speeds the SAME fixed charts; nothing is regenerated. `normalizeSave` needed no change:
  it already clamps by `TRACKS.length` and keys stars by id.
- **audio.js** — new Egyptian leg: `EGYPT` 8-bar D-hijaz backing (roots/chords), `HWALK` hijaz
  bass walk, and `LEAD_MELODY` with one ORIGINAL melody per instrument (composed for this game in
  hijaz; no known/folk melody transcribed). Synth voices, all event-scheduled on the existing
  30 ms lookahead timer (no per-frame work, no audio files, no packages):
  - `_pluck` shared body (pick-noise transient + triangle harmonics through a closing lowpass):
    **oud** (3 kHz, warm ring) and **qanun** (4.6 kHz, brighter + tremolo re-plucks).
  - **rababa** `_rababa`: sawtooth → 850 Hz lowpass, 90 ms bow attack, 4.2 Hz vibrato, bow noise.
  - **mizmar** `_mizmar`: square+saw detuned pair → 1150 Hz nasal bandpass + 2600 Hz lowpass,
    pitch scoop-in, 6 Hz vibrato.
  - **tabla** `_tablaStroke`: dum (sine 175→62 Hz drop), ka (1800 Hz bandpass rim noise),
    tak (3200 Hz snap + 880 Hz ping); pitch in the melody pattern selects the stroke; the
    drum kit ducks to 0.45/0.4 under a tabla lead.
  - On Egyptian tracks the piano stabs become soft qanun-style chord plucks. `setLead()` selects
    per track (unknown → 'sax'); tracks 1–7 keep sax + blues on the identical old code path.
  - Bug found & fixed during development: the new melody dispatch used a bare if/else whose else
    bound to the inner note-match if — it threw in the browser on track 1. Fixed with explicit
    blocks and pinned by a scheduler regression test.
- **main.js** — `_setPano` uses `panoOf` (tracks 1–7 their own pano, 8–12 reuse); `startTrack`
  passes `encore` to `Show` and calls `sound.setTempo(show.bpm)` + `sound.setLead(track.lead)`;
  menu shows the 🎉 encore toggle only when `tourComplete(save)`; encore HUD badge; encore
  results write NO stars/unlocks. **i18n.js** — `encore / encoreOn / encoreOff / encoreNote`
  strings (ar+en). No new spoken lines, no VoiceCoach clips added.

## New tracks (venues justified: all five are Egyptian places NOT used by tracks 1–7 —
## Khan el-Khalili was suggested in the plan but is already track 2, so it was not reused)
| id | venue | lead | bpm | len | pano (reused) |
|----|-------|------|-----|-----|---------------|
| 8 | شارع محمد علي / Mohamed Ali Street (the musicians' street) | oud | 122 | 90 s | pano2 (record-shop street) |
| 9 | قلعة صلاح الدين / Salah El-Din Citadel | tabla | 126 | 94 s | pano6 (monumental Giza/Nile view) |
| 10 | مركب في النيل / Nile Boat | rababa | 130 | 98 s | pano4 (Nile Lounge) |
| 11 | حديقة الأزهر / Al-Azhar Park | mizmar | 134 | 100 s | pano3 (rooftop/green view) |
| 12 | ليلة في الحسين / A Night in Al-Hussein | qanun | 138 | 104 s | pano7 (grand Cairo finale) |

## Playtime before → after (method: summed track durations, child-modelled)
Sum of `len` over the tour + each track's 4-beat count-in (240/bpm s), one clean run per track:
- Before (7 tracks): 384 s + 13.6 s ≈ **398 s ≈ 6.6 min**
- After (12 tracks): 870 s + 22.9 s ≈ **893 s ≈ 14.9 min** — hits the ≈15 min target,
  plus encore replay value across all 12 tracks.

## Encore design (choice stated)
Unlocks only when all 12 tracks have ≥1 star. Optional toggle in the menu (ar+en labelled),
🎉 badge in the HUD, results panel notes it is for fun. Challenge = sim tempo ×1.15 only
(charts are fixed data; the beat parameterises sweep speed/timers/music). **Encore awards no
stars and no unlocks** (chosen over separate encore stars to keep the save shape untouched);
normal mode is byte-identical in behaviour when encore is off. Kind rules unchanged in both
modes: 3 lives, respawn at radius 1.2, no new fail pressure, stars never speed-based.

## Tests — `npm test` 13/13 pass
- Robot survives all 12 tracks (≥2/4 seeds required; actual: tracks 1–11 4/4, track 12 3/4).
- First-7 track data deep-equals the original literals; TRACKS.length === 12; ids 1..12 in order.
- New-track leads are exactly [oud, tabla, rababa, mizmar, qanun]; venues don't collide with 1–7;
  gentle difficulty rise; tour-duration assertion 14–16 min.
- Unlock chain 1→12 via normalizeSave; old-save migration (7-era save → unlocked 8, stars kept);
  wild saves clamp to 12; tourComplete false until all 12 starred.
- Encore: bpm = round(bpm×1.15), same track object, 3 lives, robot wins encore tracks 1/8/12 ≥2/4.
- Scheduler regression: fake AudioContext runs _schedule for every lead (sax + 5 Egyptian) over
  full song cycles, asserting steps advance and lead notes fire; unknown lead falls back to sax.
- Pano test updated to the panoOf mapping (first seven still map to their own 1–7).

## Build & verify
- `npm run build` → assets/games/rhythm/game.js **134.6 KB** (≤200 KB target; was 128 K).
- `cd ~/tools/recorder && node phase2f_verify.mjs rhythm` → **PASS, 0 page errors**; frames at
  844×390 / 1024×768 / 1366×1024 eyeballed (pause-over-menu at 844, gameplay HUD at larger sizes).
- Seeded completed-tour capture (crStart with all-12-starred save): menu shows the 🎉 encore
  button + all 12 rows; track 12 gameplay frame eyeballed (count-in, ❤️❤️❤️, pano7 skirt);
  encore track 8 frame eyeballed (🎉 «إعادة احتفالية» HUD badge, pano2 skirt); 0 page errors.

## NOT tested / honest gaps
- **Synth timbres were verified by code/oscillator parameters and scheduler execution, NOT by
  ear** — no human (or agent) has listened to the oud/tabla/rababa/mizmar/qanun voices yet.
- No real-device test; headless SwiftShader fps not measured (no per-frame allocations added;
  all new audio is scheduled ahead on the existing timer).
- Encore toggle is session-only (not persisted in the save) — deliberate: it re-derives from
  tour completion every menu visit, so nothing can get stuck on.
- Full playthrough of tracks 8–12 by a human child not done; robot proof only.

## Owner questions
- None blocking. Optional taste call when he listens: are the mizmar (deliberately loud/nasal)
  and tabla-lead mix levels right for small speakers?

## Add to instinct
- None. No new spoken lines were needed; no voice files added or generated.

---

## Phase 2F fragment — ice_dragon «تنين الواحة / Oasis Dragon»

## Changes
- **3 maze layouts** (was 1 shared maze for all 6 levels). New `LAYOUTS` export in `game_src/ice_dragon/src/sim.js`; each `LEVELS` entry gained a `layout` field. Assignment is grouped by journey leg: levels 1–2 → layout 1, levels 3–4 → layout 2, levels 5–6 → layout 3.
  - Layout 1 **Fayoum oasis**: the original 7-block maze, byte-equivalent (deep-equal test guards it; `WALLS` still exports it).
  - Layout 2 **Nile bend**: 3 staggered vertical bars + 2 edge bars.
  - Layout 3 **Red Sea lagoon**: broken coral ring (4 bars + centre block + 4 corner accents) with diagonal gaps.
- **Serpent variants** (parameters only — no new mechanics, befriending/taming ending untouched): per-layout `tint` / `head` / `scale` / `speedMul` in sim.js, consumed by the sim's pace (`Hunt.speed = cfg.speed × speedMul`) and by main.js segment meshes.
  - Fayoum: original teal 0x3ad8c8, scale 1.0, ×1.0 (levels 1–2 feel unchanged).
  - Nile: green 0x27c878, slim scale 0.85, quicker ×1.07.
  - Lagoon: royal blue 0x4a6ae8, big scale 1.15, slower ×0.93.
- Sim collision/LOS/bullet-vs-wall now use the hunt's own wall set (`blockedIn(walls, …)` exported); main.js builds wall meshes per level in `start()` instead of once from the global maze. Layouts are build-time data → no per-frame cost change.
- **Bug fix found by the new migration test:** `normalizeSave` read stars only for levels 1–3, dropping stars earned on hunts 4–6 on reload. Loop now runs to `LEVELS.length`; old saves keep progress.
- Test robot improved to walk up to shrines (stand adjacent, centre-side) like a child instead of waiting at 0.8× where a wall could block its line of sight forever.
- No timers/lives added; no voices generated or added; no images touched; music untouched (game was never silent).

## Layouts / playtime before → after
- Layouts: **1 → 3**.
- Playtime method: suite's deterministic play robot (seed 3), summed win times across all 6 levels.
  - Before: **309 s** (43/32/64/62/61/47) ≈ 5.2 min robot pace.
  - After: **208 s** (43/32/21/21/45/46) ≈ 3.5 min robot pace. Faster because the robot now reliably reaches shrines on the new layouts (allies 4–8 vs 0–2) — the ally cascade shortens hunts.
  - Child-pace model (×3–6 the robot: wandering, barrel pushing, repositioning): **≈10–21 min** for the full game.
  - **Honest gap:** the plan's ≈30 min target is **not reachable by layout changes alone with 6 hunts** — it assumed the deferred 12-hunt expansion noted in the 2D review. LEVELS has 6 entries (≥3), so per instructions no levels were invented and nothing was padded.

## Tests
- `npm test` **9/9 pass** (was 5/5). New: 3 layouts exist & pairwise distinct; layout 1 deep-equal to the original maze; journey assignment [0,0,1,1,2,2]; serpent variants parameter-only (original untouched, Nile slimmer+quicker, lagoon bigger+slower, 3 distinct tints); **BFS reachability** over the sim's own walkable grid (`blockedIn`, hero radius 0.4) from hero start to every shrine + barrel on all 3 layouts; unlock chain intact; old-save migration.
- Play robot completes all 6 levels (all 3 layouts). Two early layout drafts failed the robot (corner pockets wedged diagonal steering though BFS passed); geometry fixed (lagoon accents → ±4.9, Nile caps → edge bars) and re-proven.

## Build / verify
- `npm run build` green — game.js **54.2 KB** (≤200 KB target ✓).
- `cd ~/tools/recorder && node phase2f_verify.mjs ice_dragon` → **PASS, 0 page errors**.
- Frames eyeballed at 844×390 / 1024×768 / 1366×1024 (menu clean; harness's second click bounces to menu per the known 2D quirk).
- Seeded-save captures (`?rich=1`): level 5 shows the lagoon ring maze + big blue serpent; level 3 shows the Nile-bend bars + slim green serpent — mazes visibly differ from layout 1. Shots in `~/workspace/projects/audit/shots_phase2f/ice_dragon_layout{2,3}_*.png`. 0 page errors in the capture run too.

## NOT tested
- Real device / real WebView performance or touch feel.
- A real child's completion time on layouts 2–3 (evidence is robot + BFS).
- Portrait orientations.

## Commit note (index race)
- Commits: `3b2a76da` (code+build) and `f9c3255a` (review doc), local on ai/moss-work, not pushed.
- ⚠️ A parallel worker had pre-staged `assets/games/golden_tail/game.js` and `docs/REVIEW_golden_tail.md` in the shared index; my `git commit` swept them into `3b2a76da`. Their content is intact and on the right branch, just under my commit message. I did not rewrite history (unsafe with parallel workers committing concurrently).

## Owner questions
- The ≈30 min full-game target needs the deferred 12-hunt expansion (6 more hunts reusing the 3 layouts) — owner's call when to schedule it; layouts/variants are ready for it.
- `main.js` `_won()` caps `save.unlocked` at `Math.min(3, lv + 1)` — pre-existing, outside this task's scope, left untouched; worth a look since hunts 4–6 exist (stars/unlock derivation in `normalizeSave` itself is now correct).

## Add to instinct
- None. No new spoken lines; existing ar/en clips unchanged.

---

## ice_dragon — Phase 2F unlock-cap fix

## Bug
`game_src/ice_dragon/src/main.js`, `_won()` (was line 215):
```js
this.save.unlocked = Math.max(this.save.unlocked, Math.min(3, lv + 1));
```
The game has 6 levels (`LEVELS` in `src/sim.js`), but the in-session unlock was
capped at 3 — a leftover from the 3-level era. Winning level 3 left
`save.unlocked` at 3, so levels 4–6 showed LOCKED in the level-select menu
in-session. The win card's Next button bypassed the lock, and a reload
self-healed via `normalizeSave`'s star-derived unlock — but a child returning
to the menu after beating level 3 saw the next level locked (Priority-1
"stages won't unlock" failure class).

## Fix
One expression changed, nothing else in the unlock logic:
```js
this.save.unlocked = Math.max(this.save.unlocked, Math.min(LEVELS.length, lv + 1));
```
`LEVELS` was already imported in `main.js` (used in `_won` itself for the
`last` check).

## Sibling caps — audited, none found
Grepped `game_src/ice_dragon/src/` for `Math.min(3`, hard-coded level caps and
all `unlocked` uses:
- `sim.js` `normalizeSave`: already correct — caps at `LEVELS.length`, derives
  unlock from stars, stars loop runs to `LEVELS.length` (fixed by the previous
  Phase 2F worker; confirmed, not duplicated).
- `sim.js:235` `Math.min(3, this.weapon + 1)` — weapon tier cap (1 single /
  2 triple / 3 wide triple). Legitimate, not a level cap.
- `sim.js:235` `Math.min(8, this.allies + 2)` — allies cap. Legitimate.
- `main.js` star display `[1, 2, 3]` — the 3-star rating scale. Legitimate.
No other stale cap exists.

## Tests
- New sim-level regression test in `test/sim.test.js`:
  "Phase 2F fix: winning level 3 unlocks level 4 (no stale cap at 3)" — pins
  the `normalizeSave` derivation `_won`'s value must agree with (stars on
  level 3 → unlocked 4; 4 → 5; 5 → 6; capped only at `LEVELS.length` = 6).
- Honest limitation: `_won()` itself lives in the DOM/THREE-bound `Game`
  class in `main.js` and cannot be imported by the node sim tests, so no
  unit test calls it directly. Its behaviour was verified in the built game
  instead (below) — no fake test was written.
- `npm test` in `game_src/ice_dragon`: **10/10 pass** (was 9/9; +1 new).
- `npm run build`: green, game.js 54.2 KB.

## Browser evidence (built game, puppeteer probe)
Probe of the built `assets/games/ice_dragon` (temp script, deleted after):
1. Seeded in-session save `unlocked=3`, stars {1:3, 2:3}; menu showed
   Level 4/5/6 as 🔒 (baseline reproduced).
2. Started level 3 (`start(2)`), set the run's stars, invoked the real
   `_won()` — the exact method the sim's `won` event calls.
3. Result: `save.unlocked` 3 → **4**, stars {1:3, 2:3, 3:2} recorded.
4. Back in the menu (`showMenu()`): Level 4 button rendered unlocked
   ("🐉 Level 4 · Oasis Bridge", class `id-btn`, no `dark`), Level 5 and 6
   still 🔒 locked. Menu screenshot eyeballed: Levels 1–4 all green,
   Level 4 with no lock.
5. **0 page errors.** Probe verdict: PASS.

## Harness
`cd ~/tools/recorder && node phase2f_verify.mjs ice_dragon` → **PASS,
0 page errors**.

## Commit
Local commit **`e0db47b1`** on `ai/moss-work`, staging only
`game_src/ice_dragon`, `assets/games/ice_dragon`, `docs/REVIEW_ice_dragon.md`
(4 files: src/main.js, test/sim.test.js, built game.js, review doc).
Not pushed.

---

## PHASE 2F SUMMARY — Batch F long tail, second chunk (2026-11-27)

All seven headline items and the next five long-tail items were
delivered, each with npm test green (with new regression tests), npm
run build green, the real click-flow verify PASS at 3 sizes with 0
page errors, frames eyeballed, a scripted first→last campaign proof,
a REVIEW section and small commits on ai/moss-work (30 commits).

### Add to instinct (new, from this phase)
- deep_sea: 16 reef-album fact lines (8 stops × ar/en, narrator,
  voice/<lang>/fact<stop>_1.mp3) — table in the deep_sea section.
  Album playback wiring is a small follow-up once clips land (same
  pattern as ocean_defense's reef facts, which were wired when their
  clips arrived).
- fox_family: 24 picnic-album narration lines (12 journeys × ar/en,
  voice/<lang>/picnic<id>_1.mp3) — table in the fox_family section.
  The album's listen button uses the spoken fallback until clips land.
- space_store: 4 short Moon-chapter lines — table in the space_store
  section.
- No other game in this phase requested new lines (sunset_highway's
  VoiceCoach events are stage-generic; mars_farm/rhythm/others added
  no spoken content).

### Owner questions consolidated (work is NOT blocked on any of these)
1. deep_sea: the ≈30 min target is not met under the robot-based
   model (≈13.7 min modelled) because stops 1–6 could not be
   lengthened under the append-only rule and the robot clears them
   in seconds. Options: accept, add more stops, or approve a gentle
   rebalance of stops 1–6 (longer goals). Also: dedicated bg plates
   for stops 7–8, or keep the biome plate reuse?
2. ice_dragon: ≈30 min needs the deferred 12-hunt expansion (6 hunts
   now, 3 layouts); schedule it? Also noted: the unlock-cap bug found
   and fixed this phase (levels 4–6 showed locked in-session after
   beating level 3) — the same stale-cap pattern has now been found
   in three games (course_race, nutmeg_rush, ice_dragon); a fleet-wide
   grep for hard-coded level caps is recommended as a small audit.
3. mars_farm: the 9 regions tile the whole 12×12 grid, so the Olympus
   chapter carries its identity in level names/titles, not a new
   region. A real Olympus region would need a grid expansion —
   wanted? Playtime to ≈3 h is a labelled model (child factor 4–7×
   robot), not a measurement.
4. fox_family: ≈23 min child estimate vs the ≈25 min target —
   accept, or lengthen the finale journey? Dart registry names for
   the new levels 7–12 are the owner's/lib-side call (out of bounds
   here). Standing note: fox models still are not true fennec ears.
5. hop_world: true secret coin ROOMS need a new mechanic (door/dig)
   — not faked; new worlds got a 4-coin bonus arc above each landmark
   instead. Build real secret rooms as a future mechanic item?
6. golden_tail: none blocking. (The standing question about the 12
   unused icon files was left untouched, per instructions.)
7. rhythm: the five Egyptian-instrument timbres are verified by
   synth parameters and scheduler execution, NOT by ear — a listening
   pass (esp. mizmar/tabla mix levels) is the owner's taste call.
8. carnival_race: the plan's 60–75 min is reached only counting full
   garage completion (a clean pass is ≈17 min at child pace) —
   stated plainly; add more laps per race if a longer pass is wanted.
9. space_store: the moon-melon +2 sale bonus is a tuning choice;
   raising moon_checkout's cost (240 → 340) lengthens chapter 2 if
   wanted. Earth renders as a sky band, not a full disc (camera
   angle) — accepted by the worker rather than re-angling the camera.
10. Carried from earlier phases, still open: golden_tail 12 unused
    icons (left as-is again); pumpkin_pie European panos.

### Batch F remainder (NOT done in this phase)
From the P2E enumeration, still open: air_race southern leg +
postcards; moto_race cup rematches/liveries; sky_jumper height
zones/passport; gem_quarry second quarry (Tura) + museum;
castaway_raft 12 stops; hot_spring second site (Bir Sigam);
winter_camp summit camp; rug_cleaning Siwa workshop; viking_sling
Egypt fort pack; temple_army 2-floor Karnak + procession mode;
samurai 9-stage temple campaign; squad_shooter crew album;
archer_bridge 3 bridges; dino_grow 6 fossil sites; hamster_warrior
chapter art pass (needs owner art step); fashion_queen Egyptian
wardrobe + style passport; girls_world door second layers;
ball_scoop 30-stop tour card; summit_rush 3 peaks + base camp;
splash_race stamp album; pearl_divers zone ladder + pearl album;
happy_farm seasons; creator_tycoon second ladder; chomp_maze real
layouts ×8 day/night; frost_coil 24 levels + new piece types;
marble_dozer districts + sandbox; pin_puzzle 24 levels/chapters;
hungry_frog 9 ponds + pond album; barrel_knights night cups +
parade mode; alien_sky rounds 7–12 Grand Tour; fizz_runner Grand
Tour run; rhino_summit summit journal; cloud_dash authored
set-pieces + endless expedition; deep_sea rebalance/more stops (see
question 1); ice_dragon 12-hunt expansion (see question 2);
nutmeg_rush trick book (needs the per-trick persistence decision);
dune_titans rally-diary map; card_battle duel-5 balance watch.

### Process notes
- One index race occurred: golden_tail's rebuilt game.js + REVIEW
  were swept into ice_dragon's commit 3b2a76da while staged during
  an index.lock collision. Content verified byte-identical at HEAD
  and complete; history was not rewritten while other workstreams
  commit to the same branch. All later workers staged explicit paths
  only.
- The branch carries concurrent work from other workstreams
  (religious-stories batches, voice-clip installs and their wiring);
  this phase's manifests were therefore built from this phase's own
  commit list, not a range diff.

### Honest gaps for the whole phase
- All verification is headless (SwiftShader) — fps numbers are not
  device numbers; nothing was tested on a real phone/WebView.
- Playtime figures are robot/sim measurements or labelled models,
  each stated per game; no child playtesting exists here. Two games
  honestly miss their plan targets under their models (deep_sea,
  ice_dragon) — both flagged with the decision that would close the
  gap, and no content was padded to fake the number.
- Pre-existing game.js overages vs the ≤200 KB target are unchanged,
  not grown materially: carnival_race 234.0 KB, coastal_drive
  205.1 KB (both bundle GLTFLoader-era weight from before this
  phase; the shared-addons bundle remains the logged fleet fix).
  Every other game in this phase is ≤ ~156 KB.
