# AI Work Log — Phase 2A (shared-engine conversion, Batch A remainder)

Coordinator: Phase 2A agent. Scope: convert the remaining 31 three.js source
packages (33 built folders) to the shared engine (`three_shared`), remove the
14 dead `three` dependencies, and sweep the converted games for the Sunset
per-frame-rebuild anti-pattern. Mechanism: `docs/SHARED_THREE_ROLLOUT.md`
(cozy_kit `three_shim.js` + `build_game.mjs`; each game's index.html loads
`../three_shared.js` before `game.js`). Pilots already done before this
phase: sunset_highway, deep_sea, gum_ball. `learn_games` is excluded
(owner's area).

Method per package: swap build script → `npm test` → `npm run build` →
patch index.html → headless Chromium smoke through the REAL menu click flow
(first menu button clicked, audio unlocked by the gesture; harness
`~/tools/recorder/smoke_p2a.mjs`), recording draw calls / triangles per
frame from WebGL prototype instrumentation. Target: game.js ≤ 200 KB.

A package is skipped (logged, retried later) if the parallel Phase 2B
coordinator has uncommitted work inside it, to avoid clobbering.

---

## Result summary

- **31/31 packages converted (33/33 built folders)** — no package needed the
  two-failure fallback; every conversion passed tests and boot smoke on the
  first attempt.
- **game.js total for the 33 folders: 23,350,715 B → 4,547,653 B (−80.5%,
  ≈17.9 MiB saved).** With the 3 pilots, the whole non-learn three fleet is
  now ≈4.96 MB of game.js + the one shared 685 KB engine, vs ≈25.6 MB of
  private bundles before the program started.
- **Tests: 291/291 passing** across the 31 converted packages (per-package
  counts in the tables), plus 136/136 in the 14 dead-dep packages.
- **Boot smoke: 33/33 PASS** — zero page errors in every folder, through a
  real menu click with audio unlocked (harness above). Draw calls /
  triangles per frame are recorded per folder in the tables (SwiftShader
  headless; the sampled state is the live scene right after the click —
  menu attract scene or early gameplay, as noted by the clicked button).
- **14/14 dead `three` dependencies removed** (details below).
- **Anti-pattern sweep: no Sunset-class per-frame rebuilds found** in the
  converted fleet (evidence below); minor findings logged for Phase 4.

### Honest gaps / deviations

- **5 folders land above the 200 KB target**: dune_titans 246,554 B,
  carnival_race 231,635 B, rain_circuit 208,861 B, coastal_drive 208,570 B,
  zombie_rooftop 200,907 B. The first four import `GLTFLoader` (plus
  `BufferGeometryUtils`), which the validated mechanism deliberately keeps
  bundled per game (`docs/SHARED_THREE_ROLLOUT.md`: addons are not matched
  by the shim). Their engine core is fully shared; the excess is the addon.
  A future shared *addons* bundle could reclaim ~60–90 KB × 4–5 games.
  zombie_rooftop is 0.9 KB over — its own game code/data, no addon cause
  found; recorded as-is.
- Draw calls exceed the ≤200 ceiling in several menu/attract scenes
  (rain_circuit 1005, summit_rush 995, coastal_drive 901, ocean_defense
  551, golden_tail 485, rhythm 371 per frame). These are static, pooled
  scene density (individual crowd/fence/post meshes), **not** per-frame
  rebuilds (heap-proven, see sweep). Merging/instancing them is per-game
  scene surgery → Phase 4 perf pass, not this conversion phase.
- Smoke numbers are SwiftShader (software GL) measurements: comparable
  across games, not real-device fps. No real-device/iOS WebView testing
  exists in this environment.
- fps was not separately recorded in this phase; the recorded perf evidence
  is draw calls + triangles per frame plus the heap probes. The per-game
  REVIEW docs with 4×-CPU fps belong to each game's own upgrade phase
  (Phases 2/4 of `docs/GAMES_ROLLOUT_PLAN.md`).

---

## Batch 1 — Racing (8 packages, 8 folders)

| Package | game.js before | game.js after | npm test | Smoke (clicked → draw calls/frame, tris/frame) |
|---|---:|---:|---:|---|
| moto_race | 848,762 | 166,367 | 7/7 | PASS (→, 119.5, 170,667) |
| dune_titans | 925,930 | 246,554 | 9/9 | PASS (→, 304.0, 40,333) |
| rain_circuit | 888,225 | 208,861 | 7/7 | PASS (→, 1005.5, 83,156) |
| carnival_race | 910,281 | 231,635 | 10/10 | PASS (→, 24.0, 6,434) |
| coastal_drive | 888,764 | 208,570 | 9/9 | PASS (›, 901.5, 36,404) |
| air_race | 821,769 | 139,067 | 7/7 | PASS (→, 36.0, 463,732) — menu needed a 120 s wait under SwiftShader; zero errors |
| splash_race | 640,694 | 137,613 | 6/6 | PASS (→, 205.8, 103,245) |
| summit_rush | 663,615 | 140,722 | 9/9 | PASS (🔊, 995.0, 104,040) |

## Batch 2 — Action (11 packages, 12 folders)

| Package | game.js before | game.js after | npm test | Smoke (clicked → draw calls/frame, tris/frame) |
|---|---:|---:|---:|---|
| samurai | 835,639 | 152,212 | 13/13 | PASS (→, 71.8, 5,606) |
| lane_shooter → squad_shooter | 550,995 | 57,170 | 6/6 (pkg) | PASS (weapon btn, 276.0, 21,868) |
| lane_shooter → archer_bridge | 550,997 | 57,172 | — | PASS (bow btn, 227.0, 11,552) |
| zombie_rooftop | 883,218 | 200,907 | 9/9 | PASS (→, 268.0, 34,806) |
| ice_dragon | 546,095 | 53,283 | 4/4 | PASS (level 1 btn, 93.0, 5,900) |
| hamster_warrior | 753,382 | 69,789 | 6/6 | PASS (power btn, 215.0, 212,336) |
| ocean_defense | 844,909 | 162,115 | 8/8 | PASS (→, 551.0, 66,706) |
| nutmeg_rush | 647,571 | 152,314 | 16/16 | PASS (▶ العب, 180.0, 238,058) |
| dino_grow | 663,649 | 172,667 | 12/12 | PASS (▶ العب, 254.3, 101,356) |
| barrel_knights | 646,403 | 152,728 | 14/14 | PASS (▶ العب, 294.0, 109,384) |
| gummy_squad | 642,338 | 148,831 | 17/17 | PASS (◀, 150.0, 69,374) |
| temple_army | 643,972 | 148,893 | 17/17 | PASS (▶ العب, 80.0, 21,298) |

## Batch 3 — Runners (7 packages, 8 folders)

golden_tail and rhythm were initially skipped — the Phase 2B coordinator
had uncommitted panorama-wiring work in them — and converted after that
work landed (their commits 652d8aca / a22fd165), on top of it.

| Package | game.js before | game.js after | npm test | Smoke (clicked → draw calls/frame, tris/frame) |
|---|---:|---:|---:|---|
| cloud_dash | 802,366 | 118,891 | 7/7 | PASS (→, 209.7, 14,355) |
| course_race → alien_sky | 544,871 | 59,984 | 6/6 (pkg) | PASS (round 1 btn, 127.0, 15,964) |
| course_race → rhino_summit | 544,871 | 59,984 | — | PASS (round 1 btn, 130.5, 14,524) |
| fizz_runner | 546,712 | 61,801 | 5/5 | PASS (▶ العب, 200.6, 8,315) |
| ball_scoop | 636,129 | 138,661 | 8/8 | PASS (▶ play lvl 1, 68.0, 30,674) |
| golden_tail | 625,400 | 137,234 | 11/11 | PASS (→, 484.5, 36,368) |
| rhythm | 614,999 | 129,230 | 7/7 | PASS (→, 371.0, 49,266) |
| fox_family | 803,542 | 119,821 | 6/6 | PASS (→, 136.3, 7,711) |

## Batch 4 — Build + Puzzle (5 packages, 5 folders)

pumpkin_pie was likewise deferred while Phase 2B worked in it, then
converted on top of their commit 016f4328.

| Package | game.js before | game.js after | npm test | Smoke (clicked → draw calls/frame, tris/frame) |
|---|---:|---:|---:|---|
| happy_farm | 677,576 | 150,468 | 19/19 | PASS (→, 55.0, 10,320) |
| pumpkin_pie | 654,606 | 139,857 | 8/8 | PASS (→, 192.8, 18,398) |
| space_store | 821,443 | 139,026 | 5/5 | PASS (→, 274.3, 18,046) |
| hungry_frog | 639,325 | 137,519 | 6/6 | PASS (→, 187.0, 16,658) |
| tomb_puzzle | 641,667 | 147,707 | 17/17 | PASS (▶ العب, 51.0, 4,272) |

## Dead `three` dependencies (14 canvas packages)

Verified by grep first: **zero** `three` imports in `src/` or `test/` of
every package (the fleet audit's list). Removed the sole `dependencies`
entry (`"three": "0.170.0"`) from package.json in: card_battle, chomp_maze,
creator_tycoon, frost_coil, gem_quarry, hero_tower, honey_farm, ice_rink,
marble_dozer, pearl_divers, pin_puzzle, rug_cleaning, sky_ace, sky_capy.
None of the 14 has a package-lock.json, so no lock surgery was needed.
After removal: `npm test` green in all 14 (136 tests total) and
`npm run build` green in all 14; 12 of 14 bundles rebuilt byte-identical
(card_battle and sky_capy differed by a 4-line esbuild stamp only — their
committed bundles were left untouched, since the dep change cannot affect
bundle content). sky_ace's change is manifest hygiene only, per the plan;
it stays out of all fun sections.

## Anti-pattern sweep (Sunset class: per-frame rebuilds)

Three layers of evidence:

1. **Static scan** of every converted package's `src/` for THREE
   constructions inside per-frame code paths (analyzer:
   `~/workspace/projects/p2a/antipattern_scan.py`). Every flagged hit
   resolves to a setup/spawn builder — level/arena builders
   (`_buildArena`, `_buildStands`, track/fence builders), unit/vehicle
   factories (`makeUnit`, `makeTruck`, `makeModelVehicle`, `mesh()` /
   `M()` / `BM()` helpers), or label/sprite factories — never a
   construction inside a frame body.
2. **Manual reading of the frame paths** of the highest-draw-call family
   (moto chassis: moto_race, dune_titans, rain_circuit, coastal_drive) and
   barrel_knights: `_frame()` → `_raceFrame()` / `_sync()` contain **no**
   geometry/mesh/material construction. Scenes and vehicles are built once
   at race setup (`this.bikes = riders.map(...)`) and only re-posed per
   frame.
3. **Runtime heap probes** (`~/tools/recorder/probe_heap.mjs`, precise
   memory info, 15 s of live rendering after a real menu click):
   rain_circuit heap 12.3 → 13.2 MB (total range 1.0 MB); summit_rush
   17.1 → 17.9 MB (range 0.9 MB). A per-frame rebuild churns tens of MB
   with a violent sawtooth (Sunset pre-fix: 21.8 s of script per 20 s);
   both probed games are flat. **Verdict: the anti-pattern does not exist
   in the converted fleet; nothing to fix in this class.**

Logged for the per-game Phase 4 perf pass (not fixed here — they are
micro-allocations / scene-density items inside gameplay code that the
per-game phases own):

- Per-frame small math allocations in camera/sync code: 1× `Matrix4` +
  1× `Vector3` per frame in `_sync` (moto_race, dune_titans, rain_circuit),
  1–3× `Vector3` (coastal_drive incl. camera shake), 1× `Vector3` in
  splash_race `_sync`, zombie_rooftop `_sync`, ocean_defense `_num()`.
  ≈100 B/frame of GC pressure — negligible next to draw calls; scratch
  objects would remove it.
- High static draw calls in menu/attract scenes (see gaps above):
  merging/instancing the crowd, fence-post and scenery meshes is the
  single biggest remaining perf lever in those games.

## Push status (2026-11-27)

All Phase 2A work is committed locally (26 commits: 8 racing + 11 action +
5 runners + 4 build/puzzle conversions counted per package, 1 dead-dep
commit, this log). Remote head was re-checked before pushing
(`01035a066`, unchanged since Phase 1 — nothing to merge, no protected
paths in any manifest). Four snapshot pushes were prepared
(~/workspace/projects/p2a/push_{racing,action,runners,build_dead_log}.paths,
1.49 / 1.54 / 0.83 / 0.74 MB — all under the ~4.2 MiB ceiling). The first
push's approval card expired unanswered (owner away), so **no Phase 2A
files are on GitHub yet**; all four pushes stay queued and can be sent
as-is when approvals resume. Nothing else is blocked by this.
