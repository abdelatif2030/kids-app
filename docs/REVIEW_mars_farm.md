# REVIEW — mars_farm «مستعمرة النيل / Nile Colony» (مزرعة المريخ / Mars Farm)

Isometric canvas colony builder: `game_src/mars_farm/` → `assets/games/mars_farm/game.js`.
Note: no REVIEW file existed for this game before Phase 2F; this file was created by the Phase 2F worker.

## Phase 2F (2026-11-27) — stars, research tree, Olympus chapter

Master-plan row (§3): "12 levels + per-level stars (none today) + research tree + Olympus chapter · ≈3 h".

### (A) Per-level stars — never time-based
- 1★ for completing the level's required tasks, +1★ for the level's optional **bonus** task, +1★ for its colony **milestone** task. Every level (1–16) gained a `bonus` and a `milestone` field in `LEVELS` (existing task kinds, measured by the same `taskValue` machinery — per-level counters for bonus, colony-state counters for milestones). No clock, duration or speed value is an input anywhere in star computation; a test idles a ready colony for 100 000 s and earns identical stars.
- Stars are recorded in `advance()` (`stars[level]`, keeping the best), exposed via `starsFor/totalStars/currentStars`, shown in the tasks panel (bonus/milestone rows with ☆/⭐ and progress, total-stars line), in the level-complete modal (⭐⭐⭐ row) and on the menu.
- Save migration: new `stars` field; old saves without it get the completion star (1★) for every already-finished level (for pre-2F `won` saves, levels 1–12). Clamped 0–3, unknown levels dropped, idempotent — all pinned by tests.

### (B) Research tree
- 6 nodes bought with the existing coin currency, 3 tiers: **sprouts** (70 🪙, crops grow ×1.25) and **ovens** (110 🪙, factories run ×1.3) → **drone** (160 🪙, +1 order slot, needs sprouts) and **bargain** (180 🪙, buildings −15%, needs ovens) → **welcome** (200 🪙, colonist arrivals at 0.7× the wait, needs drone) and **bigorders** (260 🪙, deliveries pay +25%, needs bargain).
- Every bonus is wired into the sim (growth step, factory step, `maxOrders`, `costOf`, arrival threshold, `sendOrder` payout) and each effect has a behavioural test. Research persists as a `research` id array in the save (old saves default to empty; unknown ids filtered).
- Research is never required: the scripted robot completes the whole campaign with `research = []` (dedicated test).
- UI: new 🔬 Research dock button opens a panel (ar/en via i18n `RESEARCH_TEXT`) showing owned ✓ / available with price / locked with "needs first: …".

### (C) Olympus chapter — levels 13–16 appended
- `MAX_LEVEL` 12 → 16. Levels 1–12 task data is byte-identical (deep-equal snapshot test against the pre-2F arrays); only `bonus`/`milestone` fields were added. The win (`won`/shuttle) now triggers after level 16; a monkey-patched robot run proves advancing past 12 goes to level 13 unwon, and the shuttle lands only after 16.
- New levels use the full unlocked toolkit with targets continuing the 10–12 curve: L13 «بوابة أوليمبوس / Olympus Gate» (deliver 10, cheese 8, earn 800), L14 «مزارع أوليمبوس / Olympus Farms» (goats 8, bread 12, deliver 10), L15 «مدينة أوليمبوس / Olympus Town» (colonists 14, cheese 10, earn 1000), L16 «قمة أوليمبوس / Olympus Summit» (deliver 12, colonists 16, earn 1200). Names live in a new optional `name: [ar, en]` field on the LEVELS entries (plus matching `LEVEL_TITLES`), consumed by the tasks panel.
- Regions unchanged, deliberately: the 9 existing regions tile the entire 12×12 grid, so there is no spare capacity and appending a region would overlap existing land. The Olympus identity is carried in level names/presentation instead (the fallback the plan allows).

### Playtime (model, not a measurement)
- Perfect-robot sim time at 1× speed, zero research (the test suite's own robot): **before 831 s (13.8 min) for 12 levels → after 1 496 s (24.9 min) for 16 levels**. Level 12 completes at 830 s in both runs — the early campaign is untouched.
- Child-play model: assuming a child's active play runs ≈4–7× the perfect robot's sim time (exploring, idle taps, celebrations — the suite's own note says children are much slower), that is **≈1–1.6 h before → ≈1.7–2.9 h after**, with optional research detours (980 🪙 for the full tree, earned through extra deliveries) pushing a completionist run toward the plan's ≈3 h target. This is a stated model with an assumed factor, not a measured playtime.

### Verification
- `npm test`: **30/30 pass** (23 pre-existing + 7 new Phase 2F tests: level-data snapshot, star rules incl. no-time behaviour, research purchase/prerequisites/all six effects, zero-research campaign, old-save migration, scripted 1→16 campaign).
- `npm run build`: game.js **156 190 bytes** (was 146 864; ≤200 KB target kept). No per-frame allocations added — all new logic runs on taps, purchases and level transitions.
- `node phase2f_verify.mjs mars_farm` → **PASS, 0 page errors**; frames eyeballed at 844×390 / 1024×768 / 1366×1024. Seeded-save captures (level 14, 29 stars, sprouts owned) eyeballed: research panel shows owned/available/locked states correctly in Arabic; tasks panel shows «مزارع أوليمبوس», total stars and the bonus/milestone rows — 0 page errors.
- NOT tested: real-device/WebView play; a human child playing levels 13–16 end-to-end (robot + seeded UI only); the level-complete modal's star row was code-reviewed but not screenshot-captured.

---

## Certification Sweep A (2026-11-28) — Director Protocol

Harness: `~/tools/recorder/cert_a_mars_farm.mjs` (real menu click-flow, seeded per-level saves
generated by the test-suite robot, real canvas mouse taps, frames in
`~/workspace/audit/cert_a/mars_farm/cycle<N>/`). Inherited commit `01747ece` (per-level themes)
was verified, not redone: its cycle-1 frames predate it (see Cycle 1).

### Level inventory — 16 levels, 16 distinct code-drawn season themes

Every level = 3 required tasks + optional `bonus` (+1★) + colony `milestone` (+1★). Difficulty
grows by target size, new verbs/buildings and region unlocks — not by timers (there are none).

| # | Theme (code-drawn sky/dunes/soil) | Required tasks | Bonus | Milestone | New at this level |
|---|---|---|---|---|---|
| 1 | Rust Dawn | harvest wheat 8, have 6 fields, deliver 1 | wheat 16 | 8 fields | fields, orders |
| 2 | Teal Morning | carrot 6, 1 home, milk 3 | milk 6 | 2 colonists | carrot, home, region 1, goats |
| 3 | Violet Dusk | 1 bakery, bread 4, deliver 3 | bread 8 | 2 goats | bakery, region 2 |
| 4 | Golden Noon | corn 8, 2 colonists, 3 regions | corn 16 | 4 colonists | corn, region 3 |
| 5 | Rose Canyon | 1 dairy, cheese 3, 2 pens | cheese 6 | 3 goats | dairy, region 4 |
| 6 | Aurora Verde | 1 juicer, juice 4, 4 colonists | juice 8 | 6 colonists | juicer, region 5 |
| 7 | Crimson Storm | deliver 5, 3 homes, earn 250 | deliver 8 | earn 400 | region 6, economy push |
| 8 | Lavender Fields | 5 regions, 5 goats, bread 8 | bread 12 | 6 goats | region 7 |
| 9 | Amber Desert | 8 colonists, deliver 6, cheese 5 | deliver 9 | 10 colonists | region 8 (map complete) |
| 10 | Sapphire Night | 7 regions, juice 8, earn 500 | juice 12 | earn 700 | consolidation |
| 11 | Peach Oasis | 5 homes, 9 regions, earn 700 | earn 900 | 12 colonists | town scale |
| 12 | Spaceport White-Gold | 1 spaceport, 12 colonists, deliver 8 | deliver 12 | 14 colonists | spaceport |
| 13 | Olympus Gate Gold | deliver 10, cheese 8, earn 800 | cheese 12 | 14 colonists | Olympus chapter |
| 14 | Olympus Farms Green-Gold | 8 goats, bread 12, deliver 10 | corn 24 | 9 goats | — |
| 15 | Olympus Town Royal | 14 colonists, cheese 10, earn 1000 | earn 1300 | 8 homes | — |
| 16 | Olympus Summit Ice | deliver 12, 16 colonists, earn 1200 | juice 16 | 16 colonists | finale → shuttle |

Plus the 6-node research tree (sprouts/ovens → drone/bargain → welcome/bigorders, 70–260 🪙),
never required (pinned by a zero-research campaign test).

**Background rule:** ✅ PASS — all 16 themes are distinct entries in `LEVEL_THEMES`
(sky gradient, planet, moon, dunes, open/closed soil, pebble), pinned by the unit test
"every level has a DISTINCT background theme", and confirmed in-browser: cycle 2+ sky sampling
gives **16/16 distinct signatures**; frames eyeballed (L5 Rose Canyon magenta, L13 gold,
L14 green-gold, L16 ice-blue all read clearly differently).

**Kind-rules / no-time proof:** ✅ `currentStars()` reads only task/bonus/milestone completion;
grep over `game_src/mars_farm/src/` for timer/countdown/deadline/streak/speed/par finds no
fail-time input anywhere (the only hits are comments); the suite idles a ready colony
100 000 s and earns identical stars. No lives, no fail state — a level simply waits for the child.

### Cycles

- **Cycle 1 ❌ (pre-fix build).** Frames/report timestamped 00:29–00:35, i.e. *before* the theme
  commit `01747ece` (00:39) landed: sky signatures identical for 15/16 levels (L3 sampled black
  behind a panel). This cycle is the ❌ that the inherited fix answers. Interaction anomalies in
  it (plant 0/4 in cycle 1's fresh run, no pan, no harvest) were investigated in cycles 2–3.
- **Cycle 2 ❌ (one latent bug, everything else ✅).** 0 page errors; all 16 levels open in
  `play` mode with 3 tasks; 16/16 distinct skies; complete-modals for L1/L8/L16 advance correctly
  (16 → won); pre-2F old save loads won with 1★ migration and empty research; posted-save
  persistence ✅ (41 saves). But: planting 3/4, harvest no-op, drag-pan no-op.
- **Cycle 3 ❌ (same single bug, root-caused).** Same ✅ set (44 posted saves, perf mean 323 ms).
  A focused probe then proved the cause: `_pick` ran its tall-building lookahead (d=2) *before*
  the tapped tile itself, so a centre tap on starter field (5,5) — exactly 2 tiles up-left of the
  2-wide HQ — selected the HQ and opened the drone-orders modal; that modal then blocked every
  later canvas gesture (harvest taps, drag-pan). Not a harness artefact and not a timing issue.
  **Fix (commit `6d0b9e45`):** `_pick` checks the tapped tile's own building first, tall
  lookahead after. `npm test` 31/31, build green.
- **Cycle 4 ✅ CLEAN.** 0 page errors; plant **4/4**, harvest wheat **2 → 10** via real taps after
  real growth; drag-pan moves the camera (cam.x 0 → 64.3, userCam ✅); exit→menu→continue returns
  to `play`; tasks + research panels open/close; 16/16 levels, 16/16 distinct skies; L1/L8/L16
  modals; old-save migration; persistence (41 posted saves). Perf (below).
- **Cycle 5 ✅ CLEAN (second consecutive).** Identical check set, all green (43 posted saves).
- **Final review (as-if-first-time) ✅.** Menu → fresh play click («يلا نبدأ»), L16 finale modal
  screenshot shows the earned ⭐⭐☆ row + gift + shuttle button (closing the 2F "modal not
  captured" gap); frames at 844×390 / 1024×768 / 1366×1024 + portrait eyeballed across cycles
  4–5: HUD, docks and panels fit at every size, no covered buttons, no cut text.

### Performance & tests
- `npm test`: **31/31 pass** (incl. the distinct-theme pin, star/no-time rules, research effects,
  zero-research campaign, old-save migration, scripted 1→16 campaign). `npm run build`:
  game.js **155.8 KB** (≤200 KB). No new files; all art code-drawn.
- Perf under 4× CPU throttling (headless SwiftShader, biggest final colony): rAF mean
  **377 / 323 / 314 / 223 ms** across cycles 2–5, p95 ≤ 917 ms. These numbers are
  environment-bound, not device numbers: in the same headless box the game's own clock advances
  only ≈0.43× wall time (measured), i.e. the renderer is software-rasterising a full-screen
  canvas on ~1.5 shared CPUs. The draw path adds no per-frame DOM rebuilds and no allocations
  in hot loops (all 2F/cert logic runs on taps/transitions). Real-device fps: see غير مؤكد.
- Audio/voice: shared `VoiceCoach` (cozy_kit) with 9 s per-event cooldown + 4 s global gap;
  events match actions (harvest/milk/deliver → pickup, build/region/goat/colonist → charge,
  made → trick, level-ready → win, start → go); audio unlocks on first real pointerdown (the
  harness's real clicks produce posted saves and zero audio errors). Sound-by-ear: غير مؤكد.

### Decisions
- Kept the inherited theme design (season per level) — verified distinct in data, in unit test
  and in live pixels before accepting it.
- Fixed the pick order in `main.js` rather than moving the field/HQ: smallest change, keeps all
  saves and layouts identical; tall-sprite tapping still works on empty tiles.
- No regression test was added for `_pick` (it lives in the DOM UI layer, which the node sim
  suite cannot reach); the harness cycles 4–5 are its regression evidence (plant 4/4 + harvest).

### Add to instinct
- None. No new spoken lines; existing clips cover every event.

### غير مؤكد (unconfirmed)
- Real-device / Flutter WebView play and real-device fps (headless SwiftShader only).
- A human child playing levels 13–16 end-to-end (robot campaign + seeded UI + tap-flow only).
- Sound and voice clips by ear.
- In portrait, the world-space region-lock chips at the map's far left/right edges can sit
  partially off-screen until the child pans (all HUD buttons/docks themselves fit and work).
- English UI exercised via i18n strings + ar captures; no full en screenshot pass this sweep.

**Verdict: PASS** — 5 cycles run, cycles 4 and 5 consecutive clean with zero ❌.
Weakest feel: the colony's look changes per level, but the *play* rhythm (plant→wait→harvest→
deliver) is the same verb loop for all 16 levels — distinct seasons, one heartbeat.
