# Review: «شاحنة الكور» Ball Scoop vs the original video (brief #31)
Video: 366x590, 84 s (wheel loader on a plank bridge over a teal sea). Compared by ffmpeg frames and headless Chrome play (touch drag).

## What the original does
Higher chase camera on a wide wooden plank bridge with red/white rails over teal water and clouds; yellow wheel loader with a front shovel; piles of coloured balls that spill and stack in the shovel; glass gate frames (+10, +20 blue, x3 green) and walls; a white count bubble with a ball icon over the pile; HUD: orange pause, LEVEL pill, coin pill, truck-to-flag progress bar, GOAL pill (green tick when reached); hint banners; at the end a metal grate and a bank machine, "LEVEL n COMPLETE!" with 3 stars.

## Differences found
1. Level 1 world was a green meadow with trees; original is a bridge over teal sea with clouds.
2. Road colour was pale tan; original is warm orange planks.
3. Count bubble was red; original is white with dark text.
4. Camera is a little lower and flatter than the video; gates are narrower boxes rather than full-width frames.

## Fixed (game_src/ball_scoop)
Meadow theme is now sea blue sky/water, orange planks, red/white rails, white cloud puffs; white count bubble. `npm test` 8/8, build ok, no console errors; played with touch drag, balls scooped, gates multiplied.

## Still different
No ball icon inside the bubble; camera angle and gate frame width not changed; other themes (desert, snow, candy, space) are the game's own extras.

## Phase 2B (Batch B2) — panorama ↔ theme alignment
The backdrop ring was chosen by a 5-level rotation (`floor(level/5)+1`) while themes change
every 6 levels, so backdrops drifted out of their worlds (a candy funfair behind the sea
bridge, the Alexandria coast behind snow…). Now `panoOf(level)` in sim.js keys the painting
to the theme by what it actually depicts: meadow/sea → pano3 (Alexandria, Qaitbay Citadel),
desert → pano2 (Old Cairo bazaar), candy → pano1 (funfair), space → pano5 (rainbow sky
road), finale level 30 → pano6 (treasure vault). Snow has no truthful painting among the
six, so it keeps its code-drawn world with no ring rather than a wrong picture.
Tests: new regression test asserts pano constancy inside a theme, the five mappings, the
finale override and that all six files exist — `npm test` 9/9, build ok. Playtest
(phase2b_verify.mjs, real clicks): level 1 shows pano3 visible; snow level 13 has no ring;
finale shows pano6; zero page errors. Frames in ~/workspace/projects/audit/shots_phase2b/.

---

## Phase 2D — Egypt anchor: «جولة الكورنيش / Corniche Scoop Tour» (2026-11-27)

**What changed (names only):** the title «شاحنة عمورة / Amoora's Truck»
→ **«جولة الكورنيش / Corniche Scoop Tour»**, and the five theme names
now tell the truth about the panoramas Phase 2B matched to them:
meadow → **Qaitbey Coast** (its pano is the Alexandria/Qaitbey sea
bridge), desert → **Khan el-Khalili** (the Old Cairo bazaar pano),
snow → **Catherine Snow** (code-drawn, no pano), candy → **Moulid
Funfair**, space → **Rainbow Sky Road**. Theme keys, pano mapping,
levels, upgrades and saves are unchanged.

**Tested:** `npm test` 10/10 (+1 anchor test; one import fix in the
test file on the way). Build green. Click-flow: menu title via the
harness; gameplay confirmed with a single-click check — level-1 run
HUD with the 150-ball goal, 0 page errors; menu frames at 3 sizes.

**Not done (Batch F):** a named 30-stop tour card (each level a
Corniche stop from Qaitbey to Montazah) is not built. Not tested on a
real device. → **Done in Phase 2H below.**

---

## Phase 2H — the 30-stop tour card «بطاقة الجولة» (2026-11-27)

**The honest count:** the game already had exactly 30 levels, so the
tour is a true 30 stops — nothing was added or padded. Each level is
now a named stop, six per theme leg, matched to what the leg actually
shows (Phase 2B pano truth): leg 1 is the Alexandria Corniche
west→east exactly as promised (Qaitbey Citadel → El Anfoushi →
Bibliotheca → Stanley Bridge → San Stefano → Montazah Palace), then
Old Cairo (Khan el-Khalili → … → Citadel of Saladin), Sinai
(St Catherine's → … → Ras Mohammed), Egypt's moulids (Tanta → … →
Sidi Gaber) and a sky leg (Cairo Tower → … → Aswan Sky).

**What changed (own paths only):**
- `sim.js`: new `STOPS` table (append-only, stop n = level n−1
  forever) with ar+en names and one true one-line fact per stop
  (ar+en, display-only), and a pure `tourCards(save)` that derives
  the whole card from the existing save — no new persistence, old
  saves get their cards for free. A card is earned by **finishing**
  its level (stars ≥ 1, completion only, kind rules intact); locked
  cards' facts are not even returned by the derivation.
- `main.js`: menu gains an «✉️ بطاقة الجولة n/30» button; a new
  paged tour screen (one page per leg, same nav/dots pattern as the
  level grid) — earned cards are cream postcards with the stop's
  name, its stars and its fact; locked cards are grey silhouettes
  («؟؟؟», «سرّي لسه!»). Finishing a stop for the first time adds a
  «بطاقة جديدة وصلت!» line with the stop's name to the results card.
  All text display-only via the existing i18n table; no voices
  generated, no new spoken lines.
- Levels, roads, goals, physics and saves are untouched — a freeze
  test pins road thing-counts/lengths for levels 1/8/30 and the
  goals of levels 1/30.

**Tested:** `npm test` 16/16 (was 10; +6: freeze, stop-table shape,
card derivation incl. fact secrecy, old-save migration, a scripted
robot campaign playing levels 1→30 in order under the game's own
progression rule ending with all 30 cards earned, and the menu
wiring). Build green, game.js 156,573 B (≤ ~200 KB). Verify
(phase2h_verify, real menu clicks): PASS, 0 page errors at
844×390 / 1024×768 / 1366×1024. Seeded captures eyeballed: fresh
tour = 30 grey silhouettes; a save with levels 1–8 finished shows
leg 1 fully earned with names/stars/facts and leg 2 partially open.

**Playtime (method labelled):** the robot driver (the game's own
sim) runs the full 30-level campaign in 1,736.6 s ≈ 29 min of
perfect play — unchanged by this phase, since no level changed.
Child model = robot ×2 (pauses, imperfect steering, replays) ≈
58 min to complete the whole tour card. Before this phase the same
levels existed but with no collection goal tying them together.

**Not tested:** real device/WebView; the EN tour screen was not
screenshotted (AR was; EN strings share the same i18n path and are
asserted in tests). At 1024×768 the tour panel scrolls for the last
row's facts — the same behaviour as the game's existing panels in
this skin.

---

## Director Protocol (2026-11-28) — finisher pass

### Audit of the inherited state (before trusting any of it)

The original protocol worker was killed by a runtime restart
mid-task. What it left, and what the audit found:

- **Commit `89da7b23`** (DRESS table) — diffed in full. `sim.js` gains
  the append-only `DRESS` table (30 entries: unique `lm` landmark key,
  unique sky hex, unique lamp hex per level) + `dressOf()`; `main.js`
  gains `buildLandmark(kind)` — 30 code-drawn landmark builders from
  three.js primitives only — placed twice per road at different
  side/scale by `_dress()`, plus instanced lamp posts in the level's
  accent colour; the scene sky/fog now come from `dress.sky` and the
  ground is tinted 14% toward it. **No new files** (only `sim.js`,
  `main.js`, `test/sim.test.js`, and the rebuilt `game.js`).
  **Presentation-only**: `buildRoad`, goals, physics and saves are
  untouched by the diff, and the Phase 2H freeze test (road
  thing-counts/lengths for levels 1/8/30, goals of 1/30) still passes
  — see test run below. Verdict: **the inherited fix is sound.**
- **Frames in `protocol_frames/ball_scoop/cycle2/`** — 360 PNGs =
  30 levels × start/mid/end × 4 sizes (844×390, 1024×768, 1366×1024,
  portrait 390×844), plus 5 within-leg contact sheets and
  `framestats.json`. Stitched from several resumed runs
  (`summary_0_29 / 13_29 / 22_25 / 26_29.json`, all `errors: []`, every
  level's recorded scene-background hex equals its DRESS sky).
  `cycle2_run_a.log` records one crashed attempt (a 180 s
  `waitForFunction` timeout at page open on the contended VM) that
  was relaunched and completed by the resume logic; `cycle2_run_b.log`
  is empty (the run the restart killed). Frame timestamps
  (21:44→00:47 UTC) are all **after** the `89da7b23` build
  (21:21 UTC), and a fresh `npm run build` in this pass reproduced
  `game.js` byte-identically (164,618 B, no git diff) — so the banked
  frames are on the current build.
- **Not inherited**: any functional verify (touch/keyboard/save/
  audio/fps) for the DRESS build, and any pass accounting. Both are
  done from scratch in this pass below.

### Level table — all 30 levels

Design common to all: drive the loader down a plank road, scoop ball
piles, pass multiplier gates (+/×/−), dodge or bump walls, finish at
the bank; goal = balls banked for stars. Road length grows +26 per
level (230 → 984). Elements key: pile = ball pile, gate = multiplier
gate, wall = fixed wall, mwall = moving wall, bump = bumpmark pad,
ramp = jump ramp, conv = conveyor, spin = spinner. Background =
leg pano (shared inside a leg, per Phase 2B truth) **+ this level's
own DRESS sky / code-drawn landmark / lamp accent — all 30 unique**.

| # | Stop (ar / en) | Leg (theme) | Len | Goal | Background (landmark · sky · lamp) | Elements |
|---|---|---|---|---|---|---|
| 1 | قلعة قايتباي / Qaitbey Citadel | 1 Qaitbey Coast (meadow) | 230 | 150 | citadel towers · #8fd8e8 · #ffd23a | pile×14 gate×6 wall×2 |
| 2 | الأنفوشي / El Anfoushi | 1 | 256 | 250 | fishing boats · #6fd8c8 · #ff8a2a | gate×12 pile×9 wall×3 |
| 3 | مكتبة إسكندرية / Bibliotheca Alexandrina | 1 | 282 | 200 | slanted library disc · #7ec8f0 · #4ab8ff | pile×21 gate×6 wall×3 |
| 4 | كوبري ستانلي / Stanley Bridge | 1 | 308 | 150 | bridge pylons+cables · #f8d890 · #ffb81a | gate×14 pile×12 wall×7 |
| 5 | سان ستيفانو / San Stefano | 1 | 334 | 90 | twin hotel towers · #f0a878 · #ff6a8a | wall×15 pile×18 gate×4 bump×2 |
| 6 | قصر المنتزه / Montazah Palace | 1 | 360 | 100 | palace + palms · #9fe0b8 · #5af08a | pile×22 wall×11 gate×4 bump×2 |
| 7 | خان الخليلي / Khan el-Khalili | 2 Old Cairo (desert) | 386 | 150 | bazaar stalls+lanterns · #ffd9a0 · #ff7a3a | pile×22 gate×10 wall×7 bump×3 mwall×2 |
| 8 | الجامع الأزهر / Al-Azhar Mosque | 2 | 412 | 300 | mosque + 2 minarets · #ffe8c0 · #ffe36a | pile×28 gate×8 ramp×1 bump×3 mwall×2 wall×1 |
| 9 | شارع المعز / Al-Muizz Street | 2 | 438 | 350 | Muizz gate walls · #f8c888 · #e0a010 | gate×17 pile×23 mwall×2 wall×2 bump×1 |
| 10 | باب زويلة / Bab Zuweila | 2 | 464 | 500 | gate + twin minarets · #f0b070 · #ff6a3a | pile×30 gate×14 bump×3 mwall×1 |
| 11 | جامع ابن طولون / Ibn Tulun Mosque | 2 | 490 | 500 | spiral minaret · #e89878 · #ff4a6a | pile×31 gate×24 ramp×1 bump×2 |
| 12 | قلعة صلاح الدين / Citadel of Saladin | 2 | 516 | 350 | citadel + dome · #e8a0b8 · #b86aff | pile×30 gate×13 wall×5 ramp×1 mwall×2 bump×2 |
| 13 | دير سانت كاترين / Saint Catherine's Monastery | 3 Catherine Snow (snow) | 542 | 300 | monastery + snowy peak · #d8ecff · #3a9aff | pile×31 gate×14 wall×6 ramp×2 conv×1 mwall×2 bump×1 |
| 14 | جبل موسى / Mount Moses | 3 | 568 | 300 | snowy Moses peak + sun · #f8d8b8 · #ffc85a | pile×32 gate×13 spin×3 ramp×1 conv×1 wall×4 bump×4 mwall×2 |
| 15 | جبل كاترين / Mount Catherine | 3 | 594 | 250 | twin snowy peaks · #b8d8f8 · #7affd0 | pile×34 gate×19 conv×3 wall×5 spin×3 ramp×1 bump×1 |
| 16 | الوادي الملون / The Coloured Canyon | 3 | 620 | 300 | coloured canyon strata · #e8c8e0 · #ff4a9a | pile×42 gate×16 spin×1 ramp×1 conv×2 wall×3 bump×2 mwall×1 |
| 17 | البلو هول — دهب / Dahab Blue Hole | 3 | 646 | 150 | coral ring + blue hole · #9fd8e8 · #2a6ae0 | pile×32 gate×19 ramp×3 wall×8 spin×2 mwall×2 bump×3 |
| 18 | محمية رأس محمد / Ras Mohammed | 3 | 672 | 400 | lighthouse + corals · #88c8e8 · #ff4a4a | gate×28 pile×34 ramp×3 conv×2 wall×5 spin×1 mwall×2 bump×3 |
| 19 | مولد طنطا / Tanta Moulid | 4 Moulid Funfair (candy) | 698 | 450 | mosque + festoon bulbs · #ffc8e8 · #2ab05a | pile×39 gate×32 conv×2 wall×6 spin×2 ramp×1 mwall×2 bump×3 |
| 20 | مولد السيدة زينب / Sayyida Zaynab Moulid | 4 | 724 | 300 | shrine + gold dome · #d8b8ff · #ffb8ff | pile×38 spin×4 conv×2 gate×12 ramp×3 wall×5 mwall×3 bump×3 |
| 21 | مولد دسوق / Desouk Moulid | 4 | 750 | 550 | Nile bridge + felucca · #a8e8ff · #6ac8ff | gate×33 pile×41 wall×7 ramp×2 spin×1 mwall×1 bump×3 |
| 22 | مولد الأقصر / Luxor Moulid | 4 | 776 | 800 | Luxor pylons + obelisk · #ffd8a0 · #d89a2a | pile×52 gate×6 wall×7 ramp×4 conv×4 spin×3 mwall×2 bump×4 |
| 23 | مولد الحسين / Al-Hussein Moulid | 4 | 802 | 350 | mosque + bulb strings · #b898e8 · #ff8aff | pile×49 gate×17 wall×12 spin×4 ramp×4 mwall×3 conv×1 |
| 24 | مولد سيدي جابر / Sidi Gaber Moulid | 4 | 828 | 800 | seaside mosque + palms · #98e0d8 · #3ae0b0 | pile×52 gate×34 ramp×2 conv×2 spin×2 mwall×3 bump×5 |
| 25 | برج القاهرة / Cairo Tower | 5 Rainbow Sky Road (space) | 854 | 600 | Cairo Tower lattice · #140a38 · #3affff | gate×34 pile×39 wall×17 mwall×3 conv×3 ramp×1 spin×1 bump×2 |
| 26 | أهرامات الجيزة / Giza Pyramids | 5 | 880 | 350 | pyramids + sphinx · #2a1a58 · #ffe98a | pile×52 gate×34 spin×5 ramp×2 wall×7 conv×1 mwall×2 bump×2 |
| 27 | واحة سيوة / Siwa Oasis | 5 | 906 | 600 | palm oasis + spring · #0a2a58 · #8affd0 | pile×64 gate×22 ramp×3 spin×2 wall×4 conv×1 mwall×1 bump×4 |
| 28 | الصحراء السوداء / The Black Desert | 5 | 932 | 400 | black volcanic hills · #1a0a28 · #ffa85a | gate×39 pile×52 wall×10 ramp×2 conv×1 spin×2 mwall×1 bump×1 |
| 29 | وادي الحيتان / Wadi El-Hitan | 5 | 958 | 400 | whale ribcage fossils · #38284a · #ff6ad0 | pile×52 gate×33 wall×14 conv×5 mwall×3 ramp×1 spin×1 bump×2 |
| 30 | شمس أسوان / Aswan Sky | 5 | 984 | 700 | Aswan sun + felucca · #4a3a68 · #ffd88a | gate×32 pile×59 wall×5 bump×4 mwall×3 spin×2 conv×2 ramp×1 |

Difficulty read: length and element density rise monotonically;
goals vary by design (a low goal after a hard level is a breather —
levels 5, 17). New mechanics enter in leg order: moving walls (7),
ramps (8), conveyors + spinners (13–14) — nothing appears before it
is introduced gently, and there is **no fail state**: the gentle-rules
test (added in `89da7b23`) drives all 30 levels with zero steering and
every one still finishes with ≥1 star and a non-negative ball count.

**Background-differentiation verdict: ✅ PASS.** All 30 landmark keys,
sky hexes and lamp hexes are unique (asserted by test); every level's
recorded in-game scene background equals its own DRESS sky; the five
within-leg contact sheets (`cycle2/sheets/leg{1..5}_mid_1024x768.png`)
were eyeballed — inside each leg the six frames differ in sky tone,
lamp colour and landmark (leg 5's skies are all night-family by
design, but lamps/landmarks separate them clearly: cyan tower,
gold pyramids, mint oasis, orange black-desert, pink wadi, cream
Aswan). Caveat recorded honestly: `framestats.json`'s "sky" sample
region lands on the shared leg pano ring, so L27/L29 score identical
there — the pano is shared inside a leg by design (Phase 2B); the
differentiation evidence is the DRESS table + per-level scene hexes +
the eyeballed sheets, not that one stat.

### Cycles (pass bar: two consecutive clean rounds, ≥3 cycles total)

**Cycle 1 = Phase 2H verify (pre-DRESS build)** — counted only for
what it covered: robot campaign 1→30 and tour/save logic in tests,
real-click menu flow at 3 sizes, roads/goals freeze. Backgrounds were
the known ❌ it left open (six near-identical backdrops per leg).

**Cycle 2 — ✅ CLEAN (zero game ❌).** Banked frames (above) +
everything re-run in this finisher pass on the byte-identical build:
- `npm test` **19/19** (16 from 2H + gentle-rules + DRESS-uniqueness
  + renderer-wiring); `npm run build` green, output byte-identical
  to the committed `game.js` (164,618 B).
- Frames: 360/360 in `protocol_frames/ball_scoop/cycle2/`, summaries
  `errors: []`, every level's scene hex = its DRESS sky; contact
  sheets for all 5 legs eyeballed (legs 1/5 in this pass's record,
  spot frames L13 portrait + L30 end likewise).
- Functional verify (`cycle2/verify.json`, 0 page errors): audio
  context absent before touch → `running` after the real Play click;
  `music.mp3` requested; touch drag steers (z advances, x moves);
  pause shows → resume works; ☰ exit → menu; level-grid entry opens
  a level (leg-5 tile → level 25, the grid opens on the current leg).
- Three apparent ❌s were **harness bugs, not game faults**, each
  proven by a dedicated probe on the same build:
  (1) *Keyboard*: the verify sampled `targetX` after key-up, when it
  resets to 0 by design — probe 1 sampled during the hold:
  `targetX −2.6`, x moving; after release 0. ✅ keyboard works.
  (2) *Real-time robot finish*: the in-browser robot crawls at
  ~0.07 units/s because SwiftShader renders this three.js game at
  **0.09–0.21 fps on this VM** (probe 1/2, all sizes, throttle 1 and
  4; load spiked to 45–51 from parallel workers). The finish chain
  was therefore driven through the game's own `_update(1/30)` path
  with robot steering (probe 2): level 1 finishes in 772 steps
  (25.7 sim-s), 3 stars, **save post observed ×1**, reload shows
  «بطاقة الجولة ١/٣٠», and probe 4 paging to leg 1 with the tour
  screen's own nav shows card 1 earned with ★★★ and its fact.
  (3) *Voice*: clips are armed by the first pointerdown; probe 3
  armed with a real mouse press, and the session request log shows
  event-matched clips — `go_1`, `pickup_1/2`, `charge_1/2`,
  `bump_1/2`, `win_1` (ar). ✅
- Performance: the game's own per-frame JS cost, measured in-page
  (probe 2): `_update` = **15.9 ms on L15, 27.7 ms on L30** (≈63 /
  ≈36 fps JS-only, ~300 live balls) — the portable part of the
  budget. Rendered fps under 4x throttling could not be completed
  here (bench(240)/(120) time out at 600/200 s) because rendering,
  not game logic, is the bottleneck on this VM — see «غير مؤكد».

**Cycle 3 — ✅ CLEAN (zero game ❌), run from scratch on the final
build.** `npm test` **19/19** again. Frames recaptured fresh into
`protocol_frames/ball_scoop/cycle3/`: **360/360, errors: 0**, every
level's recorded sky = its DRESS sky (run logs
`cycle3_frames_run.log` + `cycle3_frames_run2.log` — a VM restart
killed Chrome at L22; the capture resumed and completed; no frame
predates the final build). Sheets regenerated: **no dead-sky frames**
(sky-strip std < 2: none); within-leg mid sky-strip pairwise minimum
distances all > 0 (leg1 3.0, leg2 3.6, leg3 19.0, legs 4–5 in
`cycle3/framestats.json`); legs 2/3/4 sheets eyeballed in this pass
(leg 2 is the closest family — warm desert tones — but sky, lamp
accent and landmark differ on every level). Functional verify
replicated cycle 2 exactly (`cycle3/verify.json`, 0 page errors,
same passes; its three known harness artifacts are the ones already
resolved by probes on this byte-identical build; both 4x-throttle
bench attempts timed out at 200 s for the same documented
SwiftShader reason).

**Final review (as if new):** menu → tour card → grid → play reads
as one coherent «جولة الكورنيش»; every stop now announces itself
with its own sky, lamps and landmark (the citadel is even visible
behind the tour panel in the menu demo scene). No off-screen HUD,
no covered buttons, no cut text in any eyeballed frame at any size;
portrait holds up (L07/L13). Old saves: the DRESS work added no
persistence, and the old-save migration test still passes.

### Decisions taken in this pass
- Counted the banked cycle2 frames toward cycle 2 only after proving
  they sit on the current build (timestamps + byte-identical rebuild)
  and are complete (360/360, 0 errors). Cycle 3 was still recaptured
  from scratch, so the pass does not rest on inherited evidence alone.
- Fixed the *harness*, never the game: verify script gained
  `protocolTimeout` 900 s, incremental result writes, and poll-style
  bench (the original lost a whole run when `bench(240)` exceeded
  puppeteer's 180 s protocol timeout). No game code changed in this
  pass — no ❌ required a fix, so the clean-round count never reset.
- Rendered-fps: accepted JS-cost + environment evidence instead of
  blocking the game on a software renderer; flagged below.

### غير مؤكد (not proven)
- **Rendered fps on a real device / WebView** — unmeasurable here:
  headless SwiftShader on this shared VM renders at 0.09–0.21 fps
  regardless of size or throttling. Only the JS update cost
  (15.9/27.7 ms) is proven; GPU rendering on hardware is not.
- **Real-time in-browser robot finish** — the sim campaign (tests)
  and the `_update`-path finish (probe 2) prove winnability and the
  save chain; a wall-clock robot drive to the bank in the browser
  was not completed on this VM.
- **Sound by ear** (voice/music balance, iPhone audio) — requests
  and AudioContext state are proven, listening is not.
- **EN tour screen** in the browser (AR proven; EN shares the i18n
  path and is asserted in tests, as in 2H).
- Touch on a real touchscreen (mouse-emulated pointer events used).

### Verdict: ✅ PASS — two consecutive clean rounds (cycles 2 and 3)
on the final build, three cycles total, zero game ❌ in either
round. The one open item is environmental (rendered fps on real
hardware), recorded above, not a game fault found by any test.
