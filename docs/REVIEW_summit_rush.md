# Review: «سباق التلج» Summit Rush — Phase 2B (Batch C, rollout 2.1)

## What was reviewed
Audit card (racing_action.md): the only hard fail clock in Racing — every course ended
at ~60 s ('timeup'), and three wipeouts ended the run ('out'). Both are pressure
mechanics the house rules ban for ages 3–6. The audit's identity proposal (Mount
Catherine + "reach the monastery before the lanterns light") needs new art; the
kind-rules conversion below adopts its lantern story beat in code now.

## Changed (game_src/summit_rush)
- `src/sim.js`: the course clock is no longer a deadline. At `course.time` the summit
  lanterns light — a one-time 'lanterns' event that also warms the child back to 3
  hearts — and the run simply continues. The 'timeup' and 'out' endings are deleted:
  the only way a run ends is reaching the summit ('won'), in whatever place. Wipeouts
  still cost a heart (floored at 0) and ground, but hearts can never end the run.
- `src/main.js`: 'lanterns' event → summit chime, celebration voice clip and a
  "🏮 The summit lanterns are lit!" float. The HUD clock now fills toward the lantern
  moment and then shows 🏮 (the red 'low time' urgency state is gone). Finishing in
  any place plays the WIN voice (was: 'lose' for places 2–4), and the win-card text
  for non-first places is now a plain celebration. The dead `_loseCard` and its
  "Out of hearts / Time's up" strings are removed.

## Tests & playtest evidence
- The old "three hits end the race" test is replaced by: repeated hits can never end
  the race (no 'out'/'timeup' events exist), plus a new lantern test (fires once at
  the course moment, refills hearts 1 → 3, race continues). `npm test` 10/10;
  `npm run build` ok.
- Real click-flow harness (phase2b_verify.mjs): a tap on the menu starts the race;
  at the lantern moment the HUD clock becomes 🏮 with hearts refilled and the race
  still running; reaching the summit opens the celebration card. Zero page errors.
  Frames at 3 sizes in ~/workspace/projects/audit/shots_phase2b/.

## Honest gaps
- The full Mount Catherine re-anchor (monastery finish landmark, Sinai identity,
  rename) needs new backdrop art — it stays a Batch E identity item; this batch only
  removed the pressure mechanics and adopted the lantern beat.
- Score is still points-based (+10/+5/+20) with place medals; converting scoring to
  the fleet's completion-stars is a wider change, noted in the work log.

---

## Phase 2D — Egypt anchor: «قمة سانت كاترين / Catherine Summit» (2026-11-27)

**What changed (names only):** the title «سباق التلج / Snow Race» →
**«قمة سانت كاترين / Catherine Summit»**, and the course list now
climbs one mountain instead of touring the world: St Catherine Snow →
Catherine Village → **Wadi El-Arbaein** (the valley on the real
Catherine trail) → Catherine Return → **Mount Catherine Summit**. The
Alps Village and Kilimanjaro names are gone. Course data, the Phase 2B
kind-rules conversion (no fail clock; the summit lanterns refill
hearts; the run ends only at the summit) and saves are untouched —
the verified frame shows the course list with the new names over the
start line.

**Tested:** `npm test` 11/11 (+1 anchor test); build green; real
click-flow verify PASS — title and course names in the menu scene,
frames at 3 sizes, 0 page errors.

**Not done (Batch F):** sunrise-summit ceremony dressing and a
monastery bell at the finish are not built. Not tested on a real
device.

---

## Phase 2H — Three peaks + base camp (2026-11-27)

The Batch F remainder from the master plan (§3 row: "3 peaks (Catherine,
Abbas, Safsafa) + base-camp hub + sled-home bonuses · ≈20 min") is built.
The game was a 5-course list, so the expansion follows that architecture:
courses are append-only, grouped into peaks by a new `PEAKS` table in
`src/sim.js`. No endless-climber zoning was needed.

**The three peaks (13 courses, ids append-only 6–13):**
- **Catherine (1–5)** — frozen byte-identical (test-pinned deep-equal +
  laid-course snapshot). Blue-white snow, pines, red summit arch.
- **Abbas Pasha (6–9)** — dawn-gold sky/fog, warm sun, rocky dressing
  (fewer pines, more boulders), crimson flags, a stone palace-ruins arch
  at the summit (Abbas Pasha's real unfinished palace crowns this peak).
  Mechanics twist: **mountain wind gusts** — every ~7–12 s a 2.2 s gust
  shoves *every* runner sideways (~0.4 m against full steering for the
  child, more for rivals, whose steering is softer). It can never end a
  run; it is a wobble to lean against. Gusts use the sim's rng only on
  gust courses, so the frozen courses' hazard sequence is untouched.
- **Mount Safsafa (10–13)** — green sunset valley: code-drawn willow
  trees instead of pines, green flags, a green stone arch. Twist:
  **crystal trails** (`crysGap` spacing lays 164–208 crystals per course
  vs 66–101 elsewhere) and more boost pads, with gentler hazard gaps —
  a generous finale peak.

**Sled-home bonuses:** finishing a peak's *final* course (5, 9, 13) no
longer ends at the arch: the child turns around and **sleds 170 m back
down** (new sim state `sled`, 17 m/s, ~10 s) on a code-drawn wooden sled,
steering through a line of home crystals (+5 each). No hazards, no
hearts — a fast happy ride to base camp. The win card gains a
"🛷 Sled crystals" stat, and sled crystals count into the save's
crystal total. The camera flips uphill for the descent; the HUD clock
shows 🛷 while sledding.

**Base-camp hub:** the menu is now a camp. Three peak tabs (🔒 until the
peak's first course unlocks, 🏔️ when every course of the peak has a best
place), the selected peak's course chips, and a camp strip — 🏕️ camp ·
💎 total crystals · 🏔️ peaks completed x/3 · 🛷 sled rides home — all
**derived from the existing save** (`best` + `crystals`); no new save
fields, so old saves migrate for free (a pre-2H save with course 5 won
now opens Abbas course 6; test-pinned chain for every course). In
landscape the chip column becomes a 2-column grid so all five Catherine
chips + the camp strip fit at 844×390.

**Kind rules:** untouched — no timers/lives/streaks added; gusts and the
sled cannot fail a run; stars/medals remain completion-only as before.

**Tests:** `npm test` **18/18** (was 11; +7 Phase 2H: Catherine freeze,
peak structure/twists, unlock chain + old-save migration, gust behaviour
incl. "Catherine never gusts", sled only on finals + crystal gathering,
robot wins all 8 new courses, scripted first→last campaign in unlock
order). Two pre-existing assertions were updated for the expansion, not
weakened in spirit: the save cap is now 13 courses, and the anchor test
counts 13 courses. `npm run build` green; built `game.js` **144.0 KB**.

**Playtime (robot-measured, child = model):** the game's robot plays
every course at seeds 1–3 (median, incl. 3 s countdowns): before =
**4.5 min** robot for the whole 5-course game; after = **13.5 min**
robot for 13 courses (Abbas 4.5, Safsafa 4.5, sled rides 30 s of it).
Child model = robot × 1.5 (the child's runner speed is fixed; the
factor covers wipeouts at ~2 s each and missed boosts — stated as a
model, not a measurement): **≈6.8 min → ≈20 min**, matching the plan's
≈20 min target.

**Verify:** `phase2h_verify.mjs summit_rush` PASS, 0 page errors, frames
at 844×390 / 1024×768 / 1366×1024 in
`~/workspace/projects/audit/shots_phase2h/`. Seeded captures added for
what the harness cannot reach: the camp hub with stamps
(`summit_rush_hub_camp.png`), the Abbas menu (`summit_rush_abbas_menu.png`),
the Safsafa willow menu (`summit_rush_safsafa_menu.png`) and a live sled
ride mid-descent with the 🛷 clock (`summit_rush_sled.png`, race state
read back as `sled`, 0 errors). Eyeballed: peak tabs sit cleanly under
the logo, willows read as willows, the sled camera looks down the slope
at the crystal line.

**Not done / not tested:** the monastery bell at the Catherine finish
(carried over from Phase 2D's Batch F note) is still not built; the
gust and sled floats are screen-only until Instinct records the two new
voice lines (listed in the work-log fragment). Not tested on a real
device; the sled framing was eyeballed in headless frames only.

---

## Director Protocol — summit_rush (2026-11-27/28)

### Level table (13 courses + sled-home finales + base camp)

All courses: 4 runners (child + Lila/Saber/Mariam), rolling hazards (boulders/snowballs/logs)
on red warning ladders, crystals +10, dodge +5, overtake +20, boost pads, tailwind/shield
orbs, 3 checkpoint lines, summit-arch finish. Kind rules (Phase 2B) hold everywhere: the
course clock only lights the summit lanterns (hearts refill), a wipeout costs a heart
(floored; free in easy mode) and ground — a run can only end at the summit. Difficulty =
length / hazard gap / hazard speed / log share / rival pace; crystals laid at seed 7:

| # | Course (AR / EN) | Peak | Len | Hazard gap | Hazard speed | Logs | Orbs | Pads | Rival | Crystals | Twist / elements |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | ثلج سانت كاترين / St Catherine Snow | Catherine | 520 m | 34–46 m | 4.5–6 | 0.15 | 3 | 5 | 0.92 | 66 | gentle opener |
| 2 | قرية سانت كاترين / Catherine Village | Catherine | 555 m | 28–40 m | 5–7 | 0.30 | 3 | 5 | 0.97 | 71 | denser hazards |
| 3 | وادي الأربعين / Wadi El-Arbaein | Catherine | 585 m | 24–34 m | 6–8 | 0.40 | 4 | 6 | 1.02 | 76 | valley climb |
| 4 | سانت كاترين تاني / Catherine Return | Catherine | 615 m | 22–31 m | 6.5–8.5 | 0.45 | 4 | 6 | 1.04 | 81 | — |
| 5 | قمة جبل سانت كاترين / Mount Catherine Summit | Catherine | 645 m | 20–29 m | 7–9 | 0.50 | 4 | 7 | 1.06 | 86 | PEAK FINAL → sled-home |
| 6 | سفح عباس باشا / Abbas Pasha Foothills | Abbas | 640 m | 21–30 m | 6.5–8.5 | 0.35 | 5 | 6 | 1.03 | 86 | wind gusts begin |
| 7 | طريق القصر / The Palace Road | Abbas | 675 m | 20–28 m | 7–9 | 0.40 | 5 | 6 | 1.05 | 91 | gusts |
| 8 | صخور عباس / Abbas Rocks | Abbas | 705 m | 19–27 m | 7–9.5 | 0.45 | 5 | 7 | 1.07 | 96 | gusts |
| 9 | قمة عباس باشا / Abbas Pasha Summit | Abbas | 740 m | 18–26 m | 7.5–9.5 | 0.50 | 6 | 7 | 1.08 | 101 | gusts · PEAK FINAL → sled-home · palace-ruins arch |
| 10 | وادي الصفصاف / Willow Valley | Safsafa | 680 m | 24–34 m | 6–8 | 0.30 | 4 | 7 | 1.00 | 164 | crystal trails (crysGap 13–22) |
| 11 | ظل الصفصافة / Willow Shade | Safsafa | 715 m | 23–32 m | 6.5–8.5 | 0.35 | 4 | 7 | 1.02 | 172 | crystal trails |
| 12 | عيون الصفصاف / Willow Springs | Safsafa | 750 m | 22–31 m | 7–9 | 0.40 | 5 | 8 | 1.04 | 194 | crystal trails (crysGap 12–20) |
| 13 | قمة الصفصافة / Mount Safsafa Summit | Safsafa | 790 m | 21–30 m | 7–9 | 0.45 | 5 | 8 | 1.05 | 208 | crystal trails · PEAK FINAL → sled-home |

**Sled-home finales (5/9/13):** after the summit the state becomes `sled` — 170 m descent at
17 m/s (~10 s) steering through a deterministic line of home crystals (+5 each); no hazards,
no hearts; place fixed at the summit; win card gains a 🛷 sled-crystals stat; sled crystals
count into the save's crystal total.

**Base camp (menu):** 3 peak tabs (🔒 locked / ⛰️ open / 🏔️ completed), course chips for the
selected peak (medal = best place), camp strip 🏕️ · 💎 total crystals · 🏔️ peaks x/3 ·
🛷 sled rides — all derived from the existing save `{unlocked, best, crystals, muted}`;
no new save fields, old saves migrate (pinned by test).

### Cycle 1 — inventory + full sim testing + frames (pre-fix build)
- ✅ `npm test` **18/18** on the untouched Phase 2H build. The suite is a real first→last
  playthrough: the careful robot wins **every** course at seeds 1–4 (place ≤2), wins all
  Abbas+Safsafa courses at seeds 1–2 (place ≤3), a scripted campaign plays 1→13 in unlock
  order asserting each course is locked before its turn and won on it; sled fires only on
  the 3 finals and gathers home crystals; gusts fire on Abbas only and can never end a run;
  standing still gets wiped out repeatedly yet the race can never be lost (no `out`/`timeup`
  events exist); easy mode costs no hearts; save normalisation + old-save migration pinned.
- ✅ Frames banked before the fix (real frames, eyeballed): `c01_menu_844x390` (base camp:
  tabs, chips with medals, camp strip 💎 ٤٣٢ · 🏔️ ٢/٣ · 🛷 — counters render correctly),
  `c01_start_844x390` (race running, HUD complete, nothing off-screen or cut), `c06_menu_844x390`,
  `c10_menu_844x390` — in `~/workspace/projects/audit/protocol_frames/summit_rush/`. Plus the
  Phase 2H frames at 3 sizes in `shots_phase2h/`.
- ❌ **Background sameness (protocol hard rule)** — confirmed in code and consistent with the
  frames: presentation was per-PEAK only (`PEAK_VIS`: one sky/sun/flag/arch/tree set per
  peak) and the painted pano backdrop cycled just **3 images** by course id
  (`pano${(id-1)%3+1}`, offset fixed). Courses 1 & 4 shared pano1 + the identical Catherine
  palette, 2 & 5 pano2, 7 & 10 pano1 across peaks, etc. Within a peak, neighbours differed
  only in seeded dressing layout. Two levels with a near-identical background = ❌.
- ⚠️ Suspected, not confirmed (needs native-res frames): in `c01_menu_844x390` the selected
  peak tab appears to touch the rotated logo banner and the drag hint pill overlaps the
  course-3 chip; the racer-card portraits read very dark at small size. CSS math
  (peaks top 44u vs logo bottom ≈150 px at u=3.9) suggests clearance except the logo's −5°
  rotation dip — listed under غير مؤكد below.

### Fix (autonomous decision, presentation only — gameplay data untouched)
New `COURSE_VIS` table in `src/sim.js`, merged over `PEAK_VIS` in `_buildWorld`: **every
course now has its own background** — distinct sky/fog colour, sun colour + intensity, pano
image + horizontal offset + tint, flag/arch colours, pine/rock dressing density, snow-ground
tint and snowfall weight. Time-of-day story per peak: Catherine pale dawn → bright midday
village → warm rocky wadi → golden return → violet-dusk summit; Abbas pale dawn → palace-road
morning → amber rock noon → rose-dusk summit; Safsafa fresh green morning → deep willow
shade → golden springs → sunset summit. Code-drawn only, **zero new files** (demo budget).
Catherine 1–5 gameplay stays byte-frozen (freeze test still green; `COURSE_VIS` is a separate
table and the new test re-pins course 1's data). The monastery bell remains unbuilt —
owner-gated story element, not added.
- ✅ New unit test ("Director Protocol: every course has its OWN background"): all 13 courses
  carry an explicit look; no two share a (sky, pano, offset, tint) signature; in-peak
  neighbours always differ in sky colour. `npm test` **19/19**.
- ✅ `npm run build` green; built `game.js` **145.5 KB**. Commits `2411aad4` (src+test) and
  `bb1f17b4` (rebuild), local only.

### Cycles 2–3 + flow + fps — NOT COMPLETED (environment blocker, stated plainly)
The full browser re-test (per-course frames at 844×390 / 1024×768 / 1366×1024 / portrait
390×844, real-click flow with reload persistence, fps under 4× CPU throttling) could not be
completed in this session: the shared VM (1.5 CPUs) was saturated for hours by the parallel
certification sweep (load averages 20–189, 130+ Chrome processes), two runtime restarts
killed browser sessions, and headless Chrome renderers repeatedly died at boot
("frame got detached", launch timeouts). The capture harness
(`~/tools/recorder/protocol_summit_capture.mjs`, plus `protocol_summit_flow.mjs` and
`protocol_summit_fps.mjs`) is resume-safe (skips banked frames) and was left running detached
in three per-peak loops writing to the frames dir; frames produced after the rebuild marker
(`REBUILD_MARKER.txt`, 2026-11-28T00:13:42Z) by a restarted loop are post-fix evidence.
**Verdict: summit_rush is NOT protocol-certified yet** — the ❌ is fixed and unit-proven, but
the required two consecutive clean browser cycles are still owed.

### غير مؤكد (unconfirmed)
- Post-fix per-course frames at all 4 sizes (incl. portrait) and the background-sameness
  contact-sheet comparison on real frames — capture loops still running/blocked (see above).
- Sled frames on the 3 peak finals post-fix; win-card 🛷 stat frame post-fix.
- Real-click flow this round (win course 1 → next → exit → reload persistence with the
  posted save) — script written (`protocol_summit_flow.mjs`), not yet run to completion;
  the same flow passed in Phase 2H's verify.
- FPS under 4× CPU throttling — script written (`protocol_summit_fps.mjs`), no numbers yet.
  (Headless SwiftShader numbers would be a floor, not a device measurement, in any case.)
- Audio heard by ear; voice events were instrumented in the flow script (request log +
  VoiceCoach.say log) but the run did not complete. The gust/sled voice lines remain
  unrecorded by Instinct (screen floats only) — carried over from Phase 2H.
- Menu crowding observations from `c01_menu_844x390` (peak tab vs rotated logo; drag pill
  over a chip; dark card portraits) — unverified at native resolution.
- Real device / real WebView / iPhone audio — never tested (headless only).
- The monastery bell at the Catherine finish — still not built (owner-gated).
