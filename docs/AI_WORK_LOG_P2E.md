# AI Work Log — Phase 2E (Batch F: longer worlds)

Coordinator: Phase 2E. Scope: Batch F from docs/GAMES_MASTER_PLAN.md §3/§4 —
lengthen the highest-impact games into real worlds: more levels with
DISTINCT identity each (layout/background/difficulty/sections differ per
level, never just stat changes), per the plan's per-game targets.

Priority order: (1) dune_titans Oasis Rally legs → ~25 min campaign,
(2) ocean_defense 10 reefs + reef-guide album, (3) nutmeg_rush 12 levels
with named teams, (4) hero_tower tower map + 2 new-look chapters,
(5) gummy_squad 10 stages + recipe cards, (6) cloud_dash per-sky palettes,
(7) sweet_tray 36 levels in 4 chapters with per-chapter boards,
(8) ice_rink 16 chapters + skating show, (9) card_battle 8-duel campaign,
(10) sky_capy 8 river stops + jungle_adventure 12 real maps.

Rules (same as 2D): own paths only (game_src/<game>/, assets/games/<game>/,
docs/REVIEW_<game>.md, this log); learn_* / book_stories / lib / Firebase
never touched; owner's art never deleted or replaced; kind rules everywhere
(no fail clocks, no lives pressure, no harsh game-over, stars only for
completion/collection/achievement — never speed/par); no per-frame
rebuilds/allocations in hot loops; voices are never generated — new lines
go in an "add to instinct" list in this log.
Verify harness: ~/tools/recorder/phase2e_verify.mjs (real menu clicks,
audio unlocked, 3 landscape sizes 844x390 / 1024x768 / 1366x1024, zero page
errors); frames in ~/workspace/projects/audit/shots_phase2e/.

Pre-existing working-tree state (not Phase 2E, left untouched): modified
assets/games/rug_cleaning/game.js (Phase 2A stamp diff) and the owner's
untracked book_stories voice folder + docs/BOOK_STORY_PILOT_VOICE_REQUEST.csv.

Art-batch note (carried from 2D): ~/workspace/art_batch/out/ sheets need
the owner's cutting/integration step — logged per game, not forced in.

---
## ocean_defense «قلعة مرجان البحر الأحمر / Red Sea Reef Fort» — Phase 2E Batch F

- **Levels 7 → 10.** Three real southern Red Sea sites appended after Red Sea
  Deep: 8 Marsa Alam (boss 240), 9 Elphinstone Reef (280), 10 Brothers
  Islands (320) — boss curve 40→320 with the original seven ids/HP untouched.
  New reefs differ in more than HP via per-level fields the sim already
  consumes (level index): wave size/mix (3-wave swimmer totals: L7 124 →
  L8 141 → L9 160 → L10 177, more puffers/fast/jellies), tighter spawn gaps,
  enemy HP/speed scaling, more octopus helpers. Only 7 bg_reef plates exist —
  new reefs reuse plates 1–3 through the existing `(i % 7) + 1` cycle in
  startLevel (no new images, per rules).
- **Reef-guide album** (new 📖 «دليل الشعاب / Reef guide» button on the menu,
  follows the shop's screen pattern): 10 cards; locked = greyed card, fish as
  dark silhouette, «🔒 ؟؟؟», "still a secret" line; unlocked (stars > 0) =
  fish, reef name ar+en, one true simple fact (ar+en, stored as `fact` data on
  each LEVELS entry), star row. Unlock logic is the pure sim export
  `guideEntries(save)`. i18n keys added: album, albumSub, lockedFact.
- **Saves migrate:** normalizeSave already derives unlocks/stars from LEVELS;
  a 7-level save keeps all stars and unlocks reef 8 — pinned by test.
- **Playtime (estimate):** robot campaign sum 6.8 min (7 reefs) → 10.0 min
  (10 reefs), measured from the sim robot's win times. Child-paced estimate
  ≈×3 (aiming, power-choice pauses, retries) + ~30 s/reef of menu/shop/album
  time: ≈27 min → ≈40 min — the master-plan target.
- **Tests:** npm test 14/14 (was 9/9; anchor test re-pinned to "first seven
  unchanged", +5 Batch F tests: LEVELS.length === 10 + facts present + wave
  growth, unlock chain across all 10, album lock/unlock logic, 7-level save
  migration, scripted campaign first→last completing with album complete).
  Robot beats every level 3/3 seeds with the upgrades buyable by then.
- **Build:** npm run build green; game.js 166.4 KB (170,414 bytes).
- **Verify:** `node phase2e_verify.mjs ocean_defense` → PASS, 0 page errors.
  Screenshots eyeballed: harness frames at 844×390 / 1024×768 / 1366×1024 show
  level-1 gameplay HUD (wall ١٠٠) with the pause panel over the bg_reef1
  plate (the harness's 2nd click hits ⏸ — known quirk, gameplay confirmed).
  Album screenshotted separately by real menu clicks
  (shots_phase2e/ocean_defense_album_locked.png / _unlocked.png): fresh save =
  10 shadowed 🔒 cards; seeded save (stars on reefs 1–3) = those three open
  with fish, ar+en names, facts and stars, the rest shadowed. 0 page errors.
- **Kind rules:** untouched — no timers/lives added; stars remain
  completion-only (wall-remaining, as before); album rewards completion only.
- **Performance:** no hot-loop changes; album is a static menu screen built
  once per open; sim additions are data + one pure helper.
- **NOT tested:** real device/WebView; English-language album rendering
  (data + i18n paths are symmetric and the en fact strings are asserted
  non-trivial in tests, but no en screenshot was taken); spoken-fact playback
  (clips don't exist yet — see below).
- **OWNER QUESTIONS:** (1) New reefs 8–10 reuse bg_reef plates 1–3 (only 7
  plates exist) — commission 3 dedicated southern-reef plates, or is reuse
  fine? (2) Album facts are text-only until the ADD TO INSTINCT clips below
  are recorded; wiring playback into the album is a small follow-up once
  they land.

### ADD TO INSTINCT — ocean_defense reef-guide facts (speaker: narrator)
Naming follows the game's VoiceCoach convention `voice/<lang>/<event>_<n>.mp3`
with event = `reef<levelId>`, n = 1 → files `reef1_1.mp3` … `reef10_1.mp3`
in each of voice/ar and voice/en (20 files). Text is byte-identical to the
`fact` data shown in the album.

| file | ar | en |
|---|---|---|
| reef1_1 | سمكة المهرج مرجان بتعيش جوه شقائق النعمان اللاسعة، ومش بتوجعها خالص! | Marjan the clownfish lives inside the stinging anemone's arms, and it never hurts him! |
| reef2_1 | جزيرة الجفتون محمية طبيعية، والدلافين بتيجي ترتاح وتلعب في المياه الهادية حواليها. | Giftun Island is a nature reserve, and dolphins come to rest and play in the calm water around it. |
| reef3_1 | رأس محمد أول محمية طبيعية في مصر، وفيها أكتر من ٢٠٠ نوع من المرجان الملوّن. | Ras Mohammed is Egypt's very first national park, with more than 200 kinds of colourful coral. |
| reef4_1 | كلمة دهب يعني ذهب! والشعاب المرجانية هناك بتبدأ من عند الشط على طول. | The word Dahab means gold! And its coral reefs begin right at the shore. |
| reef5_1 | الثقب الأزرق حفرة عميقة تحت الميه عمقها أكتر من ١٠٠ متر، وشكلها من فوق دايرة زرقا غامقة. | The Blue Hole is an underwater sinkhole more than 100 metres deep, and from above it looks like a dark blue circle. |
| reef6_1 | حول جزيرة تيران أربع شعاب مرجانية مشهورة، والسلاحف البحرية بتحب تعوم وترتاح هناك. | Four famous coral reefs surround Tiran Island, and sea turtles love to swim and rest there. |
| reef7_1 | البحر الأحمر من أدفى بحار العالم، وعمقه بيعدّي ٢٠٠٠ متر في أعمق حتة فيه. | The Red Sea is one of the warmest seas in the world, and it is more than 2,000 metres deep at its deepest. |
| reef8_1 | في مرسى علم بيعيش الدوجونج — بقرة البحر اللطيفة — وبياكل عشب البحر زي البقرة في المراعي. | Marsa Alam is home to the dugong — the gentle sea cow — which grazes on seagrass like a cow in a meadow. |
| reef9_1 | شعاب ألفينستون حيطان مرجان ملوّنة نازلة في الأعماق، وقروش كبيرة بتعوم حواليها بهدوء. | Elphinstone Reef is a wall of colourful coral dropping into the deep, where big sharks cruise calmly by. |
| reef10_1 | جزر الإخوة جزيرتين صغيرين في نص البحر الأحمر، وعلى الجزيرة الكبيرة فنار قديم بينوّر للسفن. | The Brothers are two tiny islands in the middle of the Red Sea, and the bigger one has an old lighthouse that guides the ships. |
## dune_titans «رالي الواحات / Oasis Rally» — Phase 2E Batch F: six real legs, ≈23 min campaign
- Was: 6 rounds on ONE shared ≈4.0 km loop, differing only by reverse flag,
  rival speed/skill and the sunset flag; whole campaign ≈10 min robot time.
- Now (track.js LEG_DEFS, sim.js builds buildTrack(roundIndex), `reverse`
  field removed): every leg has its own control-point layout, scale and
  drift placement — L1 flowing snake (6 wide rows), L2 dune S-fields
  (tighter rows, 5 drifts, deepest sand), L3 White Desert chalk slalom
  (7 zigzag rows, ×0.94), L4 Black Desert switchbacks (7 columns,
  semicircle hairpins, ×1.05), L5 Farafra scalloped polar ring (×1.38),
  L6 Dakhla grand snake (8 rows, sunset kept). Turn apexes are arc
  triples and closings run round the perimeter into the start line —
  development caught spline kinks of ≈3 m radius from lone apexes and
  diagonal closings; final tightest corner ≥8.1 m (most legs ≥10 m).
  All legs ≤740 m from centre, inside the 780 m pano ring.
- Legs before → after (length, robot time, seed 7 campaign run):
  every leg was 4,014 m / ≈95 s. Now: L1 7,814 m / 211.5 s ·
  L2 7,332 m / 234.8 s · L3 8,802 m / 292.2 s · L4 9,718 m / 236.0 s ·
  L5 4,658 m / 138.2 s · L6 9,278 m / 254.3 s. Campaign total:
  ≈570 s (≈9.5 min) → 1,367 s ≈ 22.8 min robot time. HONESTY CAVEAT:
  the robot is a near-perfect driver (the rivals' racing brain through
  the child's controls); a child's real pace will be slower, so the
  real campaign runs longer than 22.8 min. L5 is deliberately the
  short flowing breather between the two longest legs.
- main.js (rendering only): fence-post and roadside-prop spacing scales
  with track length (same per-metre density/draw counts as the old
  track); dune-hump ring + fallback mountains now sit beyond each leg's
  measured extent (was a fixed 420/520 m the new legs overrun); camera
  far 900 → 2,400 so the pano ring is never clipped from a big leg's
  far side. Sunset sky/fog path untouched and pinned (finale only).
- Saves/kind rules: normalizeSave pattern untouched; star rule still
  place-only (never time); old pre-2E saves migrate with progress kept
  (pinned by test). Scripted full-campaign playthrough (robot, mirroring
  _results): legs 1→6 all 1st place, unlocks 1→2→3→4→5→6, Dakhla finale
  reachable and won, final save well-formed.
- Tests: npm test 11/11 (+2 new Phase 2E tests: geometry pins —
  distinct lengths >150 m apart, distinct control counts, disjoint
  centrelines, distinct drift patterns, arena fit, no-spike bound,
  straight leg-1 start, sunset pin — and the campaign unlock chain with
  old-save migration; robot podium test now races all 6 distinct legs
  ×3 seeds, all 1st, 0 wall hits). Build green: game.js 245.6 KB
  (pre-existing overage — 245.3 KB at HEAD, +0.3 KB here; folder 4.9 MB
  ≤ 5 MB cap). Click-flow verify PASS, 3 sizes, 0 page errors; frames
  eyeballed: pause card over leg 1 start with correct title/HUD, plus a
  30 s mid-race probe frame — chase cam on the new start straight,
  rivals ahead, curbs/fences/stands/minimap (snake layout) all correct,
  no floating or missing props.
- NOT tested: legs 2–6 in a browser (fresh save builds only leg 1;
  they are covered by the sim robot + geometry pins + shared render
  path — including the sunset finale's sky); real device; FPS on the
  longer legs (prop density is capped per metre, but that is inference,
  not a measurement). Falcon co-pilot still not modelled.
- Owner questions: (1) game.js 245.6 KB vs the ≤200 KB fleet target is
  pre-existing, not a 2E regression — a shrink pass is a separate job.
  (2) Leg 5 ≈138 s robot is the deliberate breather; a ≥3.5 min robot
  pace for every leg would need leg 5 folded instead of a ring.
  (3) Standing 2C question: Dart registry display names for renamed
  rounds untouched.
- Process note: this fragment supersedes the earlier coordinator-written
  fragment for this game — the geometry was refined after that version
  (arc turns, perimeter closings, leg-5 knot removed in favour of a
  clean scalloped ring, scale retunes), so lengths/times/test counts
  here are the final working-tree numbers.

## nutmeg_rush «كورة الحارة / Hara Football» — Phase 2E Batch F (longer worlds)

**What changed**
- `game_src/nutmeg_rush/src/sim.js`: LEVELS 7 → 12, structured 4 venues × 3
  (new `VENUES` export; each level gained `venue` index + `team: {ar, en}`).
  The 7 original tunings are byte-identical, re-slotted to 1, 2, 4, 6, 8, 10, 12
  (old L7 stadium tuning = the new Cup Final); 5 new levels interpolate the same
  curves — every difficulty field (defenders/chase/aggro/reach/sway/tspeed
  non-decreasing, windup/cooldown non-increasing) is monotonic across all 12.
  `normalizeSave`: `best` array now sized to LEVELS.length (was hard-capped at 5).
- `game_src/nutmeg_rush/src/main.js` (minimal, existing patterns): menu
  current-level line now shows "… • VS <team>"; level-select cards gained a
  "⚔ <team>" line. Fixed latent unlock caps that would have blocked a 12-level
  campaign: PLAY target `min(unlocked-1, 4)` → `LEVELS.length-1`; `_finish`
  unlock `min(5, i+2)` → `min(LEVELS.length, i+2)`; result-card Next button
  `i < 4` → `i < LEVELS.length - 1`.
- Tests: 18 → 21, all passing (details below). Build output rebuilt.

**Levels before → after (7 → 12) with teams**
| # | Level | Team (ar / en) | Origin |
|---|---|---|---|
| 1 | ملعب الحارة / Hara Pitch | أولاد الحارة / Hara Kids | old 1, tuning verbatim |
| 2 | تحدي الحارة / Hara Challenge | صقور الحارة / Hara Falcons | old 2, verbatim |
| 3 | نهائي الحارة / Hara Final | نجوم الحارة / Hara Stars | NEW (interpolated) |
| 4 | ملعب المدرسة / School Pitch | أبطال المدرسة / School Champs | old 3, verbatim |
| 5 | ماتش المدرسة الكبير / School Big Match | أسود المدرسة / School Lions | NEW |
| 6 | بطولة المدارس / Schools Cup | فرسان المدارس / School Knights | old 4, verbatim |
| 7 | اختبارات النادي / Club Trials | مواهب النادي / Club Talents | NEW |
| 8 | نادي الحي / Local Club | نجوم الحي / Local Stars | old 5, verbatim |
| 9 | مشوار الكأس / Club Cup Run | ذئاب النادي / Club Wolves | NEW |
| 10 | نصف نهائي الكأس / Cup Semi-Final | نجوم الكأس / Cup Stars | old 6, verbatim |
| 11 | استاد القاهرة الدولي / Cairo International Stadium | أبطال الاستاد / Stadium Champs | NEW (old-7 curve, slightly softened) |
| 12 | نهائي الكأس / Cup Final | فريق الأحلام / Dream Team | old 7 tuning verbatim |

Venues: Hara (1–3), School (4–6), Local Club (7–9), Cairo Stadium (10–12).

**Playtime before → after (estimate + method)**
Robot (near-perfect play) win-time sum: 65 s (old 7) → 112 s (new 12).
Child estimate: ball only moves while dragging, so a 4–6-year-old plays in
bursts, detours for coins, needs ~1.5 attempts/level at the measured robot win
rates, plus menus/celebrations/result cards ≈ 20 s/level. Applying ≈×8 to bot
time × attempts + overhead: **≈13–15 min before → ≈25–30 min after** — in line
with the master plan's ≈30 min target. This is a modelled estimate, not a
timed child playtest.

**Beatability / fairness**
Test robot upgraded to a reasonable policy (diagonal lane-flee, clear-mate
one-twos, nutmeg isolated defenders to build comet, comet = run through,
otherwise most-open-lane; shoot only when safe). Over 10 seeds/level it wins
3–10 of 10 on **every** level (Cup Final 4/10, L1 10/10) — hard-but-fair
gradient; age ≤4 easy mode unchanged. Suite pins: a robot goal on all 12
levels + a scripted campaign that plays 1→12 through the real save
bookkeeping (stars/unlocked + normalizeSave each step) and beats the Cup Final.

**Verification numbers**
- `npm test`: **21/21 pass** (was 18). New/changed: 12-level monotonic curves;
  4-venue × 3 structure + every level has ar+en team (12 distinct teams);
  robot beats all 12; old 7-level save migration (stars intact at same
  indices, padded to 12, unlock star-derived and never regressing, best
  preserved); full campaign unlock chain; star-rule regression unchanged
  (slow clean goal = 2★, fast stolen = 1★ — no speed/par grading).
- `npm run build`: green — **game.js 151.3 KB** (154,928 bytes).
- `node phase2e_verify.mjs nutmeg_rush`: **PASS, 0 page errors**, 3 sizes.
  Screenshots (shots_phase2e/nutmeg_rush_{844x390,1024x768,1366x1024}.png) all
  show the same healthy state: night pitch rendered behind the pause card
  (استراحة / كمّل / إعادة / الرئيسية), HUD pill «م ١ ملعب الحارة», 3 ball
  icons, coin pill, red defender + yellow dummy + ball visible on the grass.
  Harness DOM text confirms the menu: "المرحلة ١ - ملعب الحارة • ضد أولاد
  الحارة" with PLAY/LEVELS/BALLS/SETTINGS tiles.

**Trick book — SKIPPED (per brief's condition)**
The save persists only aggregate totals (`save.tricks`, `save.goals` counts);
there is no per-trick-type history (nutmeg vs one-two vs dodge) stored across
levels, so there is no existing data to build the book from. Per the brief I
did not invent a new persistence system. The result card already shows the
per-match breakdown. Owner decision needed if a persistent per-trick book is
wanted (small change: accumulate `save.trickBook = {nutmeg, onetwo, dodge,
burn}` in `_finish` + a menu tile).

**ADD TO INSTINCT**: none — no new spoken lines were wired (team names are
shown as text only).

**What was NOT tested**
- Level-select grid not screenshotted (harness goes menu → PLAY → pause);
  its team lines are code-reviewed, and the menu vs-line is harness-confirmed
  in DOM text.
- No human/child playtest; no real device; sound not listened to.
- FPS not measured this batch (no per-frame changes were made — LEVELS/team
  data is read at menu/build time only; sim hot loops untouched).

**Owner questions**
1. (Carried from 2D, unchanged) The 3-balls rule stays as shipped — confirm or
   change separately.
2. Trick book: add per-trick persistence + menu tile, or leave as the
   per-match result breakdown?
3. Note for the coordinator: the old main.js unlock caps (5/4) meant the
   shipped 7-level game also relied on star-derived unlocks on reload to pass
   level 5 in-session — now fixed for all 12; worth a glance in review.
## E/F hero_tower → «برج القلعة / Citadel Tower» — Batch F: 2 new-look chapters + visible tower map
- Chapters/floors: 6 × 13 (72 floors + roofs) → **8 × 13 = 104 floors**. Chapters 1–6 untouched (ids/themes/places/numbers/saves). New: ch7 «قلعة قايتباي في إسكندرية / Qaitbey Citadel, Alexandria» (place `qaitbey`, start 68, ratio 0.91, mulMax 4) and ch8 «باب زويلة في القاهرة / Bab Zuweila, Cairo» (place `zweila`, start 78, ratio 0.92, mulMax 4) — difficulty curve continues ch5–6.
- Two genuinely NEW themes in art.js (code-painted only, no external images, same cached paintSky path; missing ART sky image falls through to procedural painting as before):
  - `sea`: teal sky, Mediterranean painted into the lower sky (horizon line, layered sea, white wave crests, gull silhouettes), sandstone rooms with a round porthole window + wave trim, foam at the tower base, sea-water ground strip. Icon ⚓.
  - `dawn`: rose-gold sky, big low sun with halo, old-Cairo dome-and-minaret skyline silhouette, warm rose sandstone rooms with a hanging flickering lantern + crescent by the window. Icon 🌅.
- Visible tower map: the menu chapter selector IS the tower — tapered stacked segments (ch1 at the base → ch8 under a roof triangle + dragon). Reads only existing save data (`normalizeSave` stars + unlocked; no per-floor progress exists, so the map is per-chapter, honestly): won chapters light up gold with their stars, the next climbable chapter pulses, locked stay grey 🔒. Segments remain the fully functional chapter buttons. Eyeballed at 844×390 / 1024×768 / 1366×1024 with a mid-progress save — everything fits at 844×390 with no scrolling; sea + dawn gameplay frames eyeballed and clearly distinct looks.
- Playtime (honest): measured ≈68 planned taps/chapter (10 seeds avg) → 409 taps (6 ch) → 547 taps (8 ch). Flawless play ≈20–33 min → ≈26–45 min; with normal child pacing/retries/replays the full climb ≈ the plan's ~60 min of engagement (flawless number itself is below 60, stated plainly).
- Kind rules untouched (gentle bonk, floor retry with start power, nothing lost; no timers/lives/stars changes). No per-frame painting added.
- Tests 28/28 (was 20; +4 Phase 2E tests: CHAPTERS.length===8, new distinct themes/places, ch7–8 build + robot climb to roof, full 1→8 unlock chain, 6-chapter save migration keeping progress with 7–8 locked until earned; per-chapter solver tests now cover 7–8 too). Build ok (141.1 KB). Click-flow verify PASS, 0 errors.
- Not tested: real device; human end-to-end play of ch7–8 in browser (sim robot + first-floor frames only); sound not heard.
- ADD TO INSTINCT: none — no new spoken lines needed.
- Owner questions: none blocking. (Win card's "all chapters done" now fires after ch8, derived from CHAPTERS.length.)
## gummy_squad «فرقة الحلويات / The Sweet Shop Squad» — Phase 2E Batch F

- **Stages 6 → 10.** Tour extended past The Eid Feast: 7 نصبة حلاوة المولد /
  The Moulid Sweet Stall (Date King), 8 دكان الحلواني الكبير / The Grand
  Halawani Shop (Honey Queen), 9 سوق ليلة رمضان / The Ramadan Night Market
  (Kunafa Giant), 10 مائدة العيد الكبيرة / The Grand Eid Banquet (أبطال
  الحلويات الثلاثة / The Three Sweet Champions — roster finale name, shared
  boss model at the top multiplier). Full list 1–10: Sweet Shop/Date King,
  Ramadan Tent/Honey Queen, Hara Bakery/Kunafa Giant, Moulid Market/Date
  King, Eid Night/Honey Queen, Eid Feast/Kunafa Giant, then 7–10 as above.
  Save stage clamp widened 5 → 9; unlock chain verified to stage 10.
- **Waves.** New FOURTH_WAVE opens stages 7–9; FINALE_WAVE (23 sweets, the
  richest single wave) opens stage 10. Wave counts: 2,2,3,3,3,3,4,4,4,5.
  HUD wave counter was hard-coded "/2" — now uses `run.waves.length`.
  `stageMul` linear curve kept unchanged: probe + suite prove every stage
  winnable with buyable upgrades (robot 6/6 seeds at all 10 stages).
- **Recipe cards.** New `RECIPES` (sim.js), one per stage; win collects it
  (applyResult, no duplicates, none on a loss), win card shows
  "📖 وصفة جديدة!" + name + ingredients, menu gains a 📖 Recipes button
  (n/10) opening a book view (collected = name+ingredients, locked = place
  name + 🔒). Save gains `recipes`; migration is safe — missing field
  derives recipes from stages already beaten, garbage is dropped, a
  finished 6-stage save opens with recipes 1–5 and can tour on to 10.
  The 10 recipes: 1 كنافة (كنافة، سمن، سكر، مكسرات) · 2 قطايف (دقيق، ماء،
  خميرة، مكسرات) · 3 بسبوسة (سميد، سكر، زبادي، سمن) · 4 سمسمية (سمسم، سكر،
  عسل، ليمون) · 5 أم علي (رقاق، لبن، سكر، مكسرات) · 6 كحك العيد (دقيق، سمن،
  سكر، ملبن) · 7 فولية (فول سوداني، سكر، عسل، ليمون) · 8 لقمة القاضي (دقيق،
  نشا، خميرة، شربات) · 9 مهلبية (لبن، نشا، سكر، مكسرات) · 10 وليمة الحلويات
  (كنافة، بسبوسة، كحك، قطايف).
- **Playtime.** Robot clear-time sums (campaign-grown upgrades): 425 s for
  6 stages → 902 s for 10 (≈2.1×). Child estimate ≈15 min → ≈30 min —
  matches the master-plan ≈30 min target.
- **Verification.** npm test 21/21 (was 18; new: STAGES=10, places/bosses
  ×10, wave growth + richest finale, unlock chain, save migration, recipe
  rules, robot wins all 10). Scripted from-zero campaign: won all 10
  stages first try on earned-candy upgrades, 10/10 recipes, finale won.
  Build green, game.js 152.7 KB. phase2e_verify PASS, 0 page errors;
  screenshots eyeballed (gameplay/pause at 3 sizes; seeded veteran save
  shows menu "Stage 10/10 · The Grand Eid Banquet" and the recipe book
  at 4/10 with locked rows).
- **Not tested:** win-card recipe block in a live browser (sim-tested
  only — harness doesn't play a full stage); real device/WebView.
- **Owner questions:** none blocking. Note: the stage-10 "Three Sweet
  Champions" finale is a name + max-multiplier finale on the shared boss
  model (all bosses share one model — pre-existing); a true three-boss
  finale would be a bigger sim change, left for the owner to request.
- **ADD TO INSTINCT:** none (no new spoken lines added).
## cloud_dash → «ركضة فوق مصر / Dash Over Egypt» — Phase 2E Batch F: the 10 skies now LOOK different

- **What changed:** Phase 2D gave the 10 levels Egyptian sky *names*; every
  run still looked identical (one gradient, one fog, one light rig). Now each
  sky has a full palette in `sim.js` (`PALETTES` + `paletteOf(n)` +
  `skyIndexOf(n)`, clamped exactly like `skyOf`, so palette and HUD name can
  never disagree — runs past 10 stay Aswan in name and colour). Each palette:
  sky gradient top/mid/bottom, fog, hemisphere sky/ground + intensity, sun
  colour + intensity, cloud tint, backdrop tint, track ground tint.
- **The 10 palettes** (top / fog):
  1. Cairo `#d9a860` / `#f0cd9c` — hazy gold
  2. Giza `#dd943a` / `#eeb264` — desert amber
  3. Nile Delta `#63b8e4` / `#b7e5c9` — fresh morning
  4. Alexandria `#38b1d6` / `#a2dfe9` — bright sea teal
  5. Red Sea Coast `#2ab8ab` / `#9fe0c8` — turquoise-coral
  6. Sinai `#c284b4` / `#eaafc0` — rose dawn
  7. Siwa `#46a87a` / `#b9e0a9` — emerald-gold
  8. Western Desert Oases `#ddd2a6` / `#ece2c2` — pale chalk
  9. Luxor `#d67f2c` / `#eaa452` — deep gold dusk
  10. Aswan `#468bd4` / `#a5c9e9` — Nile blue-rose
- **How applied (main.js):** `_applySky(n)` runs at run start (and in the
  menu, under the sky Play will start in) — never per frame. It sets fog,
  hemisphere + sun, puff-cloud sprite tints and the track tiles' ground tint
  (base pastel × palette ground), and repaints the background: gradient
  textures are cached per sky (≤10 tiny 4×256 canvases); the painted backdrop
  is multiplied by the sky's tint (+16% of its gradient) into ONE canvas
  texture, disposed and repainted only on sky change. Zero per-frame cost.
- **Backdrop check (task point 3):** `assets/games/cloud_dash/art/` contains
  ONLY `bg_sky.webp` — no per-sky backdrop images exist, so no per-sky keys
  could be wired. The owner's painted backdrop is kept in every sky (tinted,
  never replaced); the `applyBackdrop` call was replaced by an equivalent
  in-game TextureLoader load so the tinted copy can be painted (missing
  picture → the sky gradient shows, same fallback as before). Palettes are
  the deliverable, as scoped.
- **Kind rules / scope:** names, toast, HUD, specs, hearts, saves untouched;
  visual identity only. Playtime unchanged by this task — the master plan's
  10 authored set-pieces + endless expedition (≈25 min) remain a leftover.
- **Tests:** `npm test` 12/12 (was 8; +4: palette completeness/valid hex,
  pairwise-distinct top+fog, palette↔name index alignment for runs 1..10 and
  clamped beyond, full robot runs completing on skies 1/5/10; the pre-existing
  robot suite still finishes all 10 levels × 12 seeds × easy/normal).
  Build green, game.js 120.7 KB (shared three engine, not re-bundled).
- **Verify:** `phase2e_verify.mjs cloud_dash` PASS, 0 page errors, frames at
  3 sizes in shots_phase2e/. Extra probe (rich save → the game's own level
  grid) captured skies 1/5/10 at 1024×768
  (`cloud_dash_sky{1,5,10}_1024x768.png`) and read the live scene back:
  fog/hemi/sun/cloud values match the palettes exactly, HUD names aligned,
  0 errors. Eyeball: Cairo = warm peachy-gold haze; Red Sea = fresh
  mint-turquoise wash; Aswan = calm periwinkle Nile blue — clearly different
  moods, painted balloons/lollipops/clouds intact in all three.
- **Not tested:** real device / real WebView; skies 2,3,4,6,7,8,9 verified by
  unit tests + code path (same `_applySky`), not by individual screenshots.
- **Owner questions:** none blocking. Note: Dart registry display names for
  renamed games (open question from Batch C/D) still stands for this game
  too if not yet settled globally.
## F sweet_tray → «صينية الكنافة / Kunafa Tray» — 4 chapters × 9 trays, board changes per chapter
- Structure as data: sim.js exports `CHAPTERS` (4×9) + pure `chapterOf(level)`
  (clamped like levelParams). Level generation byte-identical — chapters are
  presentation + framing only; stars/unlocked/save format untouched (pinned
  by a save-opens-identically test).
- The 4 chapters and their boards (all code-drawn in sprites.js, no images):
  1. «دكان الحلواني / The Sweet Shop» (1–9), board `shop` — the original round
     pink porcelain plate on a lace doily, bakery bunting (unchanged look).
  2. «ليالي رمضان / Ramadan Nights» (10–18), board `ramadan` — round copper
     tray (engraved rings + crescent) on a purple patterned cloth; night wall,
     stars, crescent moon, glowing lantern string, red diamond tablecloth.
  3. «نصبة المولد / The Mawled Stall» (19–27), board `mawled` — rectangular
     wooden stall shelf (planks, nails, front lip); red/white striped awning,
     back shelves with sweet jars.
  4. «نزهة العيلة / The Family Picnic» (28–36), board `picnic` — round red
     gingham cloth with scalloped frill on grass; sky, sun, clouds, flowers.
- Implementation: `drawBackground(g, W, H, plate, layout, board)` dispatches
  to drawRamadan/drawMawled/drawPicnic (shop keeps the original path).
  Background is rendered once into the cached bg canvas at level start /
  resize — no per-frame redraw additions. Sweets/pieces identical in
  behaviour and readability in every chapter.
- UI framing: level select groups each chapter's 9 buttons under a coloured
  chapter header; starting a level in a new chapter shows a ~2.5 s banner
  («الفصل ٢ · ليالي رمضان»); winning 9/18/27/36 adds «🎉 خلّصت فصل…» to the
  existing win card. No new screens. Soft fail state untouched.
- Playtime: plan target ≈60 min. Evidence: constructive path taps 2,367
  sweets total (243/486/729/909 per chapter) → ≈59 min at a child's
  ~1.5 s/tap incl. thinking (47 min @1.2 s, 79 min @2 s). On target.
- Tests 17/17 (+5 new: chapter tiling no gaps/overlaps, chapterOf boundaries
  1/9/10/18/19/27/28/36, per-chapter constructive wins for all 36, save
  unchanged, board wiring). Scripted sim check: 36/36 won via top-first.
  Build ok — game.js 127.9 KB.
- Verify: phase2e_verify PASS, 0 page errors, 3 sizes eyeballed. Cross-chapter
  frames (seeded save via the game's own crStart config.save, {unlocked:36};
  the game has no localStorage): sweet_tray_map_chapters.png,
  sweet_tray_ch2_ramadan_banner.png, sweet_tray_ch2_ramadan.png,
  sweet_tray_ch3_mawled.png, sweet_tray_ch4_picnic.png in
  audit/shots_phase2e/ — boards visibly differ per chapter. Level 9 also won
  in-browser via the real tap path (3 stars); win card chapter-complete line
  screenshot-verified (sweet_tray_ch1_win_chaptercomplete.png).
- Not tested: real device/WebView; chapter-complete lines for 18/27/36
  in-browser (same code path as verified 9); English-UI frames.
- Owner questions: none. (Chapter names chosen per the brief's suggested
  set; the 2D REVIEW note's older sweet-based chapter idea — kunafa →
  qatayef → basbousa → kahk — was superseded by the brief's place-based
  chapters, which match the master plan's board list.)
# Phase 2E (Batch F) — card_battle «بطاقات الأبطال / Heroes' Cards»

## What changed
- **Campaign (new):** `CAMPAIGN` export in `game_src/card_battle/src/sim.js` — 8 duels, south→north Nile tour, each with ar+en landmark name, icon, difficulty key, narrative `focus`, and a named foe. Menu gains a Nile Tour map screen (locked/unlocked/done stops) and campaign-aware result flow (Next duel / Retry / Tour map, completion celebration on duel 8). Free play untouched.
- **Landmark album (new):** menu-reachable 4×2 grid reusing the game's card-frame styling (gold border owned / dimmed + 🔒 locked), one card per won duel. Collection only.
- **Save:** new nested field `campaign { unlocked, won[8], album[], complete }` via `normalizeSave` + `recordCampaignResult` + `campaignUnlocked` in sim.js. Old saves migrate to a fresh tour, nothing lost.
- **No per-frame changes:** campaign data is read at menu/match start only. No match clock reintroduced; matches still end only when a base falls.

## The 8 duels
| # | Landmark | Diff | Deck theme |
|---|----------|------|-----------|
| 1 | أسوان / Aswan 🌴 | easy | bugs |
| 2 | جزيرة فيلة / Philae Island 🏝️ | easy | spitters |
| 3 | معبد الأقصر / Luxor Temple 🏛️ | normal | slimes |
| 4 | سقارة / Saqqara 🔺 | normal | bugs + slimes |
| 5 | أهرامات الجيزة / Giza Pyramids 🐪 | hard | brutes |
| 6 | القاهرة القديمة / Old Cairo 🕌 | expert | spitters + slimes |
| 7 | قلعة قايتباي / Qaitbey Citadel 🏰 | expert | brutes + spitters |
| 8 | المتحف المصري الكبير / Grand Egyptian Museum 🏺 | expert | all four |

**Honest deck note:** the sim has NO deck-selection system — the Overlord AI always draws from the single shared `ALIEN_CARDS` pool with hard-coded preference orders in `AI.update`. I did not invent one. Duels are themed mechanically by difficulty (rising curve easy→easy→normal→normal→hard→expert→expert→expert) and narratively by `focus` (flavour/foe line only; the code says so).

## Progression / album / save fields
- Added save field: `campaign.unlocked` (1–8), `campaign.won` (bool[8]), `campaign.album` (landmark ids, tour order, deduped), `campaign.complete` (derived: all won).
- Win duel k → won[k]=true, album gains landmark k (no duplicates), unlocked = max(unlocked, k+2 capped 8); win duel 8 → complete=true + celebration state on the tour map and result card. Loss/draw changes nothing.
- Migration: `normalizeSave` on a pre-campaign save yields `{unlocked:1, won:all false, album:[], complete:false}` and preserves stars/wins/plays/diff/muted/tutorial exactly; album is healed from `won` so inconsistent saves self-repair. `recordResult` (free play) never touches campaign fields, and `recordCampaignResult` never touches plays/stars (a campaign match counts exactly once; its stars land on the duel's difficulty).

## Playtime before → after
- Before: endless standalone matches, no finite total (single bot matches ~30 s–8 min, replay forever).
- After: a campaign run = sum of duel lengths. Estimated from the test bot's *winning* runs, seeds 1–24, averaged per duel: 50+50+99+99+104+303+303+303 s ≈ **21.8 min** of pure match time; a child at their own pace with retries ≈ **30 min** (the master-plan target).

## Verification
- `npm test`: **18/18 pass** (13 pre-existing + 5 new): CAMPAIGN structure (8 distinct landmarks, rising curve), unlock chain (win k → k+1, win 8 → complete), album awards (win → card, no dup, loss/draw → none), save migration (old save → fresh tour, free play intact), sim matches for all 8 duels complete with a winner.
- Bot winnability per duel (suite seeds): D1 12/12, D2 12/12, D3 8/12, D4 8/12, **D5 (Hard) 2/24 — the tightest duel**, D6 8/12, D7 8/12, D8 8/12. Not a wall, but see owner question below.
- `npm run build`: green — **game.js 152.9 KB** (156,519 bytes).
- Scripted campaign through the real save flow (same calls `main.js` makes): old save migrated, duels 1→8 won in order, each unlocking the next, finale completed the campaign with an 8-card album. ✔
- `node phase2e_verify.mjs card_battle` → **PASS, 0 page errors**. Screenshots eyeballed in `~/workspace/projects/audit/shots_phase2e/`: the tour map (duel 1 ▶️ open, duels 2–8 🔒, Arabic names + difficulty + foe per stop), a live duel-1 match started by clicking the Aswan stop (gold «أسوان • مبارزة ١» pill, arena + hand + hint all correct), and the harness's free-play match/pause frames at 844×390, 1024×768, 1366×1024.

## Not tested
- Real device / WebView. The album screen shares the verified menu flow and was code-reviewed, but was not separately screenshotted (the tour map and a campaign match were). A full human playthrough of duels 5–8 was simulated by bot only.

## Owner questions
1. **Duel 5 (Giza, Hard) is the campaign's hardest step for the scripted bot (2/24 wins)** — a pre-existing sim quirk: Hard is paradoxically harder for the bot than Expert (Expert matches run long and the bot wins the attrition war; Hard kills it fast). A human should fare better than the bot's fixed habits, and the duel is provably winnable, so I kept the honest rising curve. If playtesting shows kids stuck at Giza, the kind fix is swapping duel 5 to `normal` and duel 4 to `hard` is NOT allowed (breaks the curve) — better: duel 5 stays Hard but a future balance pass could soften Hard's `think`/`pushAt`. No change made.
2. No narrator voice lines were added for the campaign (skipped per instructions — no "ADD TO INSTINCT" lines; the existing VoiceCoach clips already cover win/lose/count-in inside matches).

## Files touched
- `game_src/card_battle/src/sim.js` (CAMPAIGN, DIFF_RANK, save migration, campaign record helpers)
- `game_src/card_battle/src/main.js` (menu buttons, tour map, album, campaign start/result flow, CSS)
- `game_src/card_battle/test/sim.test.js` (+5 tests)
- `assets/games/card_battle/game.js` (build output)
- `docs/REVIEW_card_battle.md` (Phase 2E — Batch F section appended)
## ice_rink «حلبة شرم / Sharm Ice Rink» — Phase 2E Batch F (longer world)

- **Chapters 12 → 16**, appended (not inserted) after the Catherine Final as an
  encore tour, so old saves stay byte-correct (stars keyed by chapter number;
  `unlocked` is a count). A 12-chapter save keeps stars/unlocks; ch13–16 stay
  locked until ch12 is beaten again under the existing derived unlock rule.
- **The 16 chapters in order:** 1 Sharm Start · 2 Rink Friends · 3 Snowball
  Match · 4 Slush Pool · 5 Mall of Egypt Walls · 6 Captain Snow (boss) ·
  7 The Big Match · 8 Healers Rest · 9 The Two Giants · 10 The Little Swarm ·
  11 Ice Team Camp · 12 Catherine Final (boss) · 13 Alexandria Corniche Rink
  (حلبة كورنيش إسكندرية) · 14 Genena Mall Rink (حلبة مول جنينة) ·
  15 Catherine Champions Cup (كأس أبطال كاترين, boss) · 16 Sharm Skating Show
  (عرض شرم للتزلج).
- **New chapters are data with real variance** (foe mixes, crystals, blocks,
  pool, boss flag follow the ch9–12 curve; all four layouts distinct —
  pinned by test). Sim gained two level-data fields: `hpMul`/`atkMul`
  overrides and `show`.
- **Show finale — honest version:** I built the genuine variant, not just a
  gentle match. In a `show` chapter the rival skaters are fellow performers:
  charge moves launch non-attacking (they skate laps, never hurt a hero),
  HP/atk halved via level multipliers, and the routine is won by gently
  bumping every performer out (existing clear-the-rink win). It cannot be
  lost; stars stay completion/HP-based. Robot proof: ch16 won with
  `taken = 0`, team HP 264/264. Level select shows 🎉 for the show.
- **Playtime:** robot turns 102 (ch1–12) + 49 (ch13–16) = 151; at ≈12 s per
  real child turn ≈20 min before → **≈30 min after** (master-plan target).
- **Tests:** `npm test` 19/19 (was 16/16). Robot test extended to all 16 and
  asserts 16/16 wins (turns: 3,4,5,5,6,7,15,7,10,7,14,19,9,14,20,6). New
  regression tests: LEVELS.length===16, tour/finale structure, unlock chain
  across 16, 12-chapter save migration, show zero-damage. Two stale
  assertions updated (save clamp 12→16; 2D anchor now pins first-12 verbatim
  instead of total length/boss count — bosses now 3).
- **Build:** green, game.js 138.6 KB (141,932 bytes). New chapters are pure
  data — no per-frame changes.
- **Verify:** `phase2e_verify.mjs ice_rink` PASS, 0 page errors, 3 sizes.
  Frames eyeballed: chapter-1 match over the painted festival rink — HUD
  pill "المرحلة ١ · الدور ١ / دورك!", rival counter ×٢, Gala Spirit bar,
  hero cards (لولو ٨٠/٨٠، لهب ٦٤/٦٤، دبدوب ١٢٠/١٢٠), rink with crowd rim,
  rival skaters top, hero trio bottom (1366×1024 frame); pause card open in
  the saved frames (harness clicks ☰). The 16-button chapter grid was not
  captured in the saved frames; the menu itself was text-verified by the
  harness.
- **Scripted playthrough:** fresh save → derived unlock rule → robot won all
  16 chapters in order (finale: WON, taken=0, stars 3) → final save
  unlocked=16, 16/16 stars, 665 coins. PLAYTHROUGH OK.
- **Not tested:** real device; chapter-select grid visually.
- **Owner questions:** none blocking. Note: a player who already finished
  the old 12-chapter game must replay/beat ch12 once to unlock the encore
  tour (consequence of the append-don't-insert choice that protects saves).

### ADD TO INSTINCT
- (none — no new voice lines requested; the show reuses existing win/cheer clips.)
# Phase 2E — Batch F: sky_capy «كابي فوق النيل / Capy over the Nile»

## What changed
- **Journey mode** (menu lead): 8 Nile stops, each a stage built by the new `buildStop()` using the exact existing stage-event mechanism — the stop's base pattern (boss stripped), +1 extra spawn per stop (density ramp), and a boss event appended as the LAST timeline event. Boss HP ramps monotonically 150 → 505 across stops.
- **Finale:** clearing stop 8 → new run state `journeycomplete` → journey-complete card (score, ranks, feathers, Migration button). No silent loop.
- **Migration Season:** the legacy endless 3-stage loop is byte-for-byte the same code path (`Run` default mode stays `migration`; journey is opt-in via `opts`). It appears on the menu only after `journeyDone`. A finished journey replays from stop 1.
- **Save:** new fields `journeyStops` (0–8) + `journeyDone` in `normalizeSave`; old saves default 0/false with feathers/upgrades/paints/top/badges/best/muted preserved exactly (test-pinned). Progress is written at stop-clear time only — a failed stop never loses completed stops (test-pinned); no new timers/lives/pressure added.
- **Backdrops:** the existing per-stage backdrop system DOES vary (3 `paintSky` palettes + 3 island kinds), so each stop assigns a palette/island pair via `Run.backdrop`/`Run.islandKind`; stop names + event mixes carry the remaining identity.
- **Title** renamed to «كابي فوق النيل / Capy over the Nile» per master plan §3.
- **Art batch:** `~/workspace/art_batch/out/sky_capy-01..14.png` exist — LOGGED ONLY, not wired (multi-cell sheets; need the owner's cutting step, per standing rule).

## The 8 stops (south → north) and their bosses
| # | Stop (ar / en) | Base pattern | Backdrop (sky/island) | Boss | Boss HP |
|---|---|---|---|---|---|
| 1 | بحيرة ناصر / Lake Nasser | stage 1 | 0 / village | Pirate Captain | 150 |
| 2 | أسوان / Aswan | stage 2 | 1 / laundry | Pirate Captain | 195 |
| 3 | كوم أمبو / Kom Ombo | stage 3 | 2 / nest tree | Storm Heron | 280 |
| 4 | إدفو / Edfu | stage 1 | 1 / village | Pirate Captain | 285 |
| 5 | الأقصر / Luxor | stage 2 | 2 / laundry | Storm Heron | 370 |
| 6 | قنا / Qena | stage 3 | 0 / nest tree | Pirate Captain | 375 |
| 7 | القاهرة / Cairo | stage 1 | 2 / laundry | Storm Heron | 460 |
| 8 | الإسكندرية / Alexandria | stage 3 | 0 / nest tree | Storm Heron (finale) | 505 |

## Second boss — honest scope
The Storm Heron is a **re-parameterised boss** on the existing boss machinery (`BOSS_KINDS` spec override on the spawn path): base HP 190 (vs 150), score 7500, fire interval 1.05 (vs 1.3), tighter/faster bolt fan (spread 0.16 @ speed 26), faster sway, summons gyros instead of gliders, own banner («مالك الحزين العاصف وصل!»). It reuses the captain's airship drawing — no distinct heron art exists yet (see owner questions).

## How Migration Season is preserved
- `Run` constructor default mode = `migration`; `buildStage`, `_startStage` (migration branch), and the `nextStage` loop (`stage>=3 → loop++ → stage 1`) are unchanged. All 9 legacy tests pass unmodified, including the invulnerable-robot loop test.
- Menu: before completion only the Journey button leads; after `journeyDone`, a «موسم الهجرة / Migration Season» button appears (menu + journey-complete card). Old saves (no journey fields) simply start the journey at stop 1 with everything else intact.

## Badge audit — 20 badges
Before: only **1** badge existed (`firstpop`); the save merely capped the list at 20. Now `BADGES` in sim.js defines all 20; conditions read a run-stats snapshot (`Run.badgeStats` → `checkBadges(save, stats)`), awarded by main.js at stage-clear / game-over / journey-complete with the achievement pill.

| # | Badge id | Condition | Awardable before | Awardable after |
|---|---|---|---|---|
| 1 | firstpop | pop ≥1 pirate | ✅ (only one) | ✅ |
| 2 | pop10 | pops ≥10 (run) | ❌ didn't exist | ✅ |
| 3 | pop50 | pops ≥50 | ❌ | ✅ |
| 4 | pop150 | pops ≥150 | ❌ | ✅ |
| 5 | combo10 | combo ≥10 unbroken | ❌ | ✅ |
| 6 | combo20 | combo ≥20 unbroken | ❌ | ✅ (proven via real `_pop` drive; bot takes combo-resetting hits) |
| 7 | rescue1 | rescue ≥1 songbird | ❌ | ✅ |
| 8 | rescue3 | rescues ≥3 | ❌ | ✅ |
| 9 | fullwings | both wing slots filled | ❌ | ✅ |
| 10 | boss1 | bosses down ≥1 | ❌ | ✅ |
| 11 | boss3 | bosses down ≥3 | ❌ | ✅ |
| 12 | storm1 | use Bubble Storm ≥1 | ❌ | ✅ |
| 13 | feather25 | feathers ≥25 (run) | ❌ | ✅ |
| 14 | pearl50 | pearls ≥50 (run) | ❌ | ✅ |
| 15 | score10k | score ≥10,000 | ❌ | ✅ |
| 16 | score30k | score ≥30,000 | ❌ | ✅ |
| 17 | rankS | any stage ranked S | ❌ | ✅ |
| 18 | journey4 | journey stops ≥4 | ❌ | ✅ |
| 19 | journeyDone | complete the journey | ❌ | ✅ |
| 20 | migration1 | complete ≥1 migration loop | ❌ | ✅ |

The badge test earns all 20 in one save across a scripted journey (258 pops, 8 bosses, 8 rescues, score >150k combined) + a migration loop, and asserts the missing list is empty.

## Playtime before → after
- Before: endless loop of 3 stages ≈ 5–6 min per cycle (timelines 50–60 s + boss), repeating forever, no ending.
- After: journey = 8 stops × ~1.7–2.5 min (55–65 s spawn timelines + boss fights vs 150–505 HP at base plane DPS ≈ 8–15/s with wings) ≈ **15–20 min** to the finale, then endless Migration Season post-game. Estimate derived from measured timeline lengths (`buildStop` last-event times 55–65 s) + boss HP/DPS, cross-checked by the scripted playthrough.

## Verification
- `npm test`: **14/14 pass** (9 legacy + 5 new: stops/names/rising difficulty/boss endings; full journey playthrough 1→8 + finale state + migration unlock; fail-stop-keeps-progress; all-20-badges; save migration).
- `npm run build`: green — **game.js 147.0 KB** (150,534 bytes).
- `node phase2e_verify.mjs sky_capy`: **PASS, 0 page errors**. Screenshots eyeballed: menu (1024×768 + 844×390) shows the new «كابي فوق النيل» logo, BEST pill, big red «رحلة النيل» journey button, hangar/top-10 icons, plane over village islands. The harness's start-regex doesn't match the journey label (it clicked the exit arrow), so I drove one extra capture with the real journey button + SKIP: stop-1 gameplay — HP bar 100%, Pip hint bubble, balloon pirate, bubble stream, FIRE/STORM buttons, and the «إنجاز / أول فرقعة» achievement pill firing live (`sky_capy_gameplay_1024x768.png`).
- Scripted journey playthrough (in tests): invulnerable robot flew stops 1→8 in order, each clear persisted progress and unlocked the next stop, stop 8 ended in `journeycomplete` (8 ranks, 8 bosses), and a migration run on the same save still loops.

## NOT tested
- Journey-complete card and Migration Season menu button in a live browser (proven in sim tests; browser save starts fresh so reaching them needs a full played journey).
- Storm Heron visual identity (reuses captain art — see below).
- Real phone/WebView; sound by ear; landscape-phone portrait field (pre-existing note).

## Owner questions
1. Storm Heron art: it currently flies the captain's airship sprite with a different banner/pattern. Want a distinct heron boss drawing (code-drawn or from the art-batch sheets after cutting)?
2. Art-batch sheets `sky_capy-01..14.png` are logged, not wired — they need your cutting/integration step whenever you're ready.
3. Journey replay: after completion, the Journey button replays from stop 1 (progress stays 8/8). OK, or should replay start at a chosen stop (stop-select screen)?

## ADD TO INSTINCT
None requested — stop names/banners are UI text only; no new narrator lines were added.
# Phase 2E — Batch F fragment: jungle_adventure «مغامرة الفيوم / Fayoum Adventure»

## What changed
- **12 real maps.** `game_src/jungle_adventure/src/levels.js`: the 3 `remix()` entries are gone and the
  `remix()` function is deleted (it was only used by LEVELS). 9 new maps authored with the existing
  Builder, at the same indices for 4–6 and appended 7–12, so unlock indices never moved. First 3 ids
  (`trail`, `ruins`, `temple`) and their names are untouched; new ids: falls, qarun, hitan, oasis, salt,
  shali, spring, palms, oracle.
- **Relic album (placed-pickup version, NOT completion-only).** Each level def now carries a named
  `relicName {ar,en}`. The album relic is earned by collecting all 3 hidden jade relics (`R` tiles,
  already placed in every map) in a single run — `save.best[id].relics` already tracked the best run's
  count, so `save.js` gained `save.album` (maintained in `applyLevel`, rebuilt in `normalizeSave` from
  the stored list ∪ any map whose best is already 3). Menu-reachable album screen in `main.js`
  (💎 ألبوم الآثار button beside the shop): found = relic name + 💎, missing = ❔ «لسه مستخبي…» + map
  name, counter n/12; a newly earned relic is announced on the win card. Relics are never required to
  finish a map or unlock anything, and earning one needs no win and no streak.
- **Siwa backdrop identity.** New `oasis` theme: tile palette in `art.js` (golden sand + palm-green top)
  and sky palette in `backdrop.js` (pale desert sky, dunes, palm canopy mid-layer). Maps 7, 8, 10, 11 use
  it; Shali (9) and the Oracle finale (12) use the sandy `temple` theme. No new art files; a missing
  `sky_oasis` picture falls back to the code-drawn sky as designed.
- **Menu fix for 12 cards:** the level-card area scrolls (`max-height` + overflow) — with 12 cards the
  logo/hero/shop rows were clipped off-screen before this. Progress-bar end icon now follows the goal
  kind (altar ☀️ / totem 🗿) instead of hard-coding level index 2. `LEVEL_ICON` gained the 9 new ids;
  i18n gained album strings (ar/en).
- Note on framing: the REVIEW and the P2D log contain no Fayoum renaming for this game (the anchor lives
  only in GAMES_MASTER_PLAN §3), and the in-game title still reads «مغامرة الأدغال». I did not rename the
  game title (out of this task's map/relic scope); the Fayoum→Siwa journey is carried by maps 4–12 names.

## The 12 maps (robot win time = sim seconds from the test log)
1. `trail` درب الأدغال / Jungle Trail — original (36.0 s)
2. `ruins` الأطلال الغارقة / Sunken Ruins — original (36.9 s)
3. `temple` معبد الشمس / Sun Temple — original (30.6 s)
4. `falls` شلالات وادي الريان / Wadi El Rayan Falls — waterfall terrace climb (tops 10→8→6), drop to a
   shaft pool, wall-kick falls shaft, descent home (37.3 s)
5. `qarun` بوابة قصر قارون / Qasr Qarun Gate — fast flat gate run, two wall-kick gate shafts, spike
   strips and beetle guards (31.7 s)
6. `hitan` مدرجات وادي الحيتان / Wadi El Hitan Terraces — dig terraces stepping down (7→9→10), one
   shaft out of the dig pit, fossil-ridge finish (34.6 s)
7. `oasis` واحة سيوة / Siwa Oasis — palm-ledge maze: low+high ledge zig-zag over the oasis floor,
   relics on the high ledges (33.1 s)
8. `salt` بحيرة الملح / Salt Lake Flats — long calm flats, relics on small salt ledges; gentlest Siwa
   map (35.1 s)
9. `shali` قلعة شالي / Shali Fortress — two tall wall-kick shafts up the mud-brick walls, guarded
   courtyards between (34.3 s)
10. `spring` عين كليوباترا / Cleopatra Spring — island-hop ponds: 13 short islands, every gap a 2–3
    tile hop (34.4 s)
11. `palms` بساتين النخيل / Palm Groves — long grove floors with pairs of palm ledges looping overhead
    (32.2 s)
12. `oracle` معبد الوحي الكبير / Great Oracle Temple — finale: two gate shafts + treasury court + long
    final hall, ends at the sun altar `A` (40.3 s)

Difficulty ramp: gaps stay 2–3 tiles throughout (kid rule), load grows via bat counts (0–1 early → 2 in
qarun/oracle halls), shaft count (0 → 1 → 2), spike strips and vertical range (temple tops 10→2 climbs).

## The 12 album relics
trail: حجر درب الفيوم / Fayoum Trail Stone · ruins: لوح الأطلال الغارقة / Sunken Ruins Tablet ·
temple: عين الشمس الذهبية / Golden Sun Eye · falls: قطرة الشلال البلورية / Crystal Falls Drop ·
qarun: مفتاح قصر قارون / Key of Qasr Qarun · hitan: أحفورة حوت وادي الحيتان / Wadi El Hitan Whale
Fossil · oasis: تمرة الواحة الذهبية / Golden Oasis Date · salt: بلورة ملح سيوة / Siwa Salt Crystal ·
shali: مفتاح قلعة شالي / Shali Fortress Key · spring: لؤلؤة عين كليوباترا / Cleopatra Spring Pearl ·
palms: سعفة النخلة الذهبية / Golden Palm Frond · oracle: تاج معبد الوحي / Oracle Temple Crown.

## Playtime estimate
Method: sum of the test robot's win times (sim seconds; the robot plays near-optimally).
Before: 6 levels ≈ 207 s ≈ 3.4 min, of which maps 4–6 were near-identical replays (~1.7 min unique).
After: 416 s ≈ 6.9 min of distinct maps. A child playing slowly, falling and hunting relics runs roughly
2–3× the robot, so ≈ 15–20 min total — in line with the plan's ≈20 min target.

## Verification
- `npm test`: **34/34 pass** (was 30 test cases over 6 levels; per-level grid+robot tests now cover all
  12 maps). New pins: LEVELS.length === 12 with the exact id order; all 12 row-signatures distinct and
  no `extraBeetles` remix marker; unlock chain 1→12; **save migration** (remix-era save: unlocked 6 kept,
  trail/ruins/temple stars intact by id, remix ids dropped, trail's album relic derived, chain continues
  into the new maps); **album logic** (2/3 relics = no relic, 3/3 = earned even on a lost run, earned
  once, never required for unlock, save/load round trip drops unknown ids). One pre-existing assertion
  updated: the damaged-save clamp now expects `LEVELS.length` (12) instead of 6.
- Solvability method (honest): the game's own test robot (jump/wall-kick/spike/beetle/bat rules from
  sim.js constants) plays every map start→goal and must win with time left — all 12 pass. That is a full
  robot playthrough of maps 1→12, not just static reachability; the separate relic-reachability test
  also passes for all 36 placed relics.
- `npm run build`: green. **game.js = 164.9 KB** (168,911 bytes built).
- `node phase2e_verify.mjs jungle_adventure`: **PASS, 0 page errors** (3 landscape sizes). Screenshots
  eyeballed: gameplay on map 1 with HUD/pause card clean at 844×390 and 1024×768; my own menu capture
  at 1366×1024 shows the logo, coin total, the 12-card scrollable grid (map 1 open, the rest locked with
  the new icons/names), hero picker, and the shop + album buttons; the album capture shows the title,
  the «لاقي الآثار التلاتة…» explainer, a ٠/١٢ counter and scrollable ❔ rows per map.

## Design traps found by the robot and fixed (worth knowing for other shaft games)
- A shaft climb shorter than ~7 rows lets a held jump + one kick fly the runner over the column top;
  all new shafts copy the ruins proportions exactly (climb 7, column ends 3 rows above the floor).
- A bat within ~3 tiles of a shaft mouth makes the runner jump into the column face forever (oracle).
- A relic ledge ending right before a shaft traps the runner kicking against the column (qarun).

## NOT tested
- No human playthrough of maps 4–12 (robot only), no real-device touch, sound not listened to.
- The album's "found" state was eyeballed only in the empty state (standalone harness starts with a
  fresh save); the earned state is covered by unit tests + the win-card line, not by a screenshot.
- Flutter-side integration (save round trip through the host) not exercised.

## Art batch
Checked `~/workspace/art_batch/queue.json` and `out/`: **there are no jungle_adventure sheets** (no
`jungle_adventure-*.png` in `out/`, no jungle_adventure entries among the 830 queue ids). Nothing to
wire or log beyond this note; if sheets are generated later they will still need the owner's cutting
step before use.

## Owner questions
- None blocking. One heads-up: remix-era stars recorded under the old ids trail2/ruins2/temple2 do not
  carry onto the new falls/qarun/hitan maps (ids are new by design); the unlock count and the first
  three maps' stars are fully preserved.

---

## PHASE 2E SUMMARY — Batch F priority list complete (2026-11-27)

All 10 priority items from the master plan's Batch F were delivered, each
with npm test green (with new regression tests), npm run build green, the
real click-flow verify PASS at 3 sizes with 0 page errors, frames
eyeballed, a scripted first→last campaign proof, a REVIEW section and a
small commit on ai/moss-work:

| Game | Before → after | Playtime (est.) | Commit |
|---|---|---|---|
| dune_titans | 1 shared 4.0 km loop ×6 (3 reversed) → 6 distinct legs, 48.8 km | ~9.5 → ~22.8 min robot (child: longer) | ae67a4f3 + 422d7bb6 |
| ocean_defense | 7 → 10 reefs + reef-guide album (10 facts ar/en) | ~27 → ~40 min child est. | a4d333a2 |
| nutmeg_rush | 7 → 12 levels, 4 venues × 3, 12 named teams (+ latent level-cap bug fixed) | ~13–15 → ~25–30 min | 9b9ff7f8 |
| hero_tower | 6 → 8 chapters (104 floors), 2 new painted themes (sea/dawn) + visible tower map | ~20–33 → ~26–45 min flawless | 999a0e1c |
| gummy_squad | 6 → 10 stages + 10 recipe cards + recipe book | ~15 → ~30 min | 0a13bd4c |
| cloud_dash | 10 skies named → 10 skies with distinct palettes (fog/lights/tints) | unchanged (set-pieces remain) | 8c8be649 |
| sweet_tray | 36 flat levels → 4 chapters × 9 with per-chapter boards + chapter framing | ≈59 min by constructive-path taps | 761e7668 |
| ice_rink | 12 → 16 chapters + zero-damage skating-show finale | ~20 → ~30 min | e65685e5 |
| card_battle | standalone matches → 8-duel Nile Tour campaign + landmark album | endless → ~21.8 min bot / ~30 child | 32fece34 |
| sky_capy | endless 3-stage loop → 8-stop Nile journey with an ending + Migration Season post-game; badges 1 real → 20 real | ~5–6 min loop → ~15–20 min journey + endless | e9f323a5 |
| jungle_adventure | 3 maps + 3 remixes → 12 authored maps + relic album (placed pickups) | ~1.7 min unique → ~15–20 min child est. | 7092737f |

### Add to instinct (new, from this phase)
- ocean_defense: 20 reef-fact lines (10 ar + 10 en, narrator,
  voice/<lang>/reef<id>_1.mp3) — full table in the ocean_defense
  section above. Album wiring for playback is a small follow-up once
  the clips land. No other game in this phase requested new lines.

### Owner questions consolidated (work is NOT blocked on any of these)
1. ocean_defense: commission 3 dedicated bg plates for reefs 8–10, or
   keep reusing plates 1–3?
2. nutmeg_rush: the 3-balls rule (standing question from 2D) — confirm
   or redesign; trick book — add per-trick persistence or keep the
   per-match breakdown?
3. gummy_squad: stage-10 finale is a name + top-multiplier finale on
   the shared boss model — a true three-boss finale is a bigger sim
   change; wanted?
4. card_battle: duel 5 (Hard/Giza) is the bot's tightest duel (2/24
   wins) — a pre-existing sim quirk, provably winnable; soften Hard if
   kids stall there?
5. sky_capy: the Storm Heron reuses the captain's airship drawing —
   distinct heron art wanted (art-batch/cutting pipeline)? Journey
   replay: from stop 1 only, or add a stop-select screen?
6. jungle_adventure: the in-game title still reads «مغامرة الأدغال» —
   the Fayoum/Siwa anchor lives in the master plan and now in maps
   4–12, but the title itself was left alone as out of this phase's
   scope; rename to «مغامرة الفيوم»?
7. dune_titans: leg 5 is the deliberate short breather (~138 s robot);
   fold it if every leg should run ≥3.5 min robot pace. The
   rally-diary map remains unbuilt.
8. Carried from 2C/2D, still open: Dart registry display names for
   renamed games; samurai ~5 MB Japanese panos delete-or-keep;
   golden_tail 12 unused icons; pumpkin_pie European panos.

### Batch F remainder (NOT done in this phase — the plan's long tail)
The priority list above is complete; these plan items remain for a
future phase: sunset_highway Season 2; coastal_drive levels → 12;
carnival_race +3 tracks; air_race southern leg + postcards; moto_race
cup rematches/liveries; sky_jumper height zones/passport; fox_family
12 levels; hop_world 8 worlds; golden_tail 6 real arenas; rhythm
Egyptian-instrument tracks; ice_dragon 3 maze layouts; zombie_rooftop
second-district geometry; space_store Moon base; mars_farm Olympus +
research tree; gem_quarry second quarry (Tura) + museum; tomb_puzzle
5 tombs/20 rooms + museum book; deep_sea stops → 8 + reef album;
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
hungry_frog 9 ponds + pond album; barrel_knights night cups + parade
mode; alien_sky rounds 7–12 Grand Tour; fizz_runner Grand Tour run;
rhino_summit summit journal.

### Honest gaps for the whole phase
- All verification is headless (SwiftShader) — fps numbers are not
  device numbers; nothing was tested on a real phone/WebView.
- Playtime figures are robot/sim measurements or modelled estimates,
  each labelled as such per game; no child playtesting exists here.
- dune_titans game.js is 245.6 KB (pre-existing overage vs the 200 KB
  target — it bundles GLTFLoader per game; the shared-addons bundle
  remains the logged fleet fix). All other games in this phase are
  ≤ ~170 KB.
