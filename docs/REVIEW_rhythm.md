# Review: «البقاء على الإيقاع» Rhythm Survival — Phase 2B (Batch B1)

## What was reviewed
Audit card (racing_action.md) + GAMES_MASTER_PLAN item 2.15: the game shipped 7 painted
venue panoramas (assets/games/rhythm/art/pano1..7.webp, incl. Giza over the Nile and the
Cairo Tower finale) that no code loaded. The diner walls carried a plain cream material.

## Changed (game_src/rhythm)
- `src/models.js`: `makeDiner()` now returns its 3 wall meshes in `group.userData.walls`;
  walls raised 10 → 15 high so they read in portrait / menu-orbit views.
- `src/main.js`: `_buildWorld()` stores the walls and the record-deck side mesh (stage skirt,
  material cloned). New `_setPano(i)`: loads `art/pano<i+1>.webp` onto the walls
  (repeat 1.8×0.62, offset y 0.36 — the scenic band) and wraps a second copy around the stage
  skirt (repeat 3×1) — the one backdrop the top-down gameplay camera always has in frame.
  Called from `showMenu()` (the next track's venue) and `startTrack(i)`.
- `src/sim.js`: stale comments fixed ("Five tracks" → seven; track range 0..6).
- Track ↔ panorama: 1 Diner Jukebox→pano1, 2 Record Shop→pano2, 3 Velvet Hall→pano3,
  4 Music Box→pano4, 5 Party Hall→pano5, 6 World Tour→pano6 (Giza over the Nile),
  7 Grand Orchestra→pano7 (Cairo Tower finale).

## Tests & playtest evidence
- New regression test: every track index has a shipped `art/pano<track+1>.webp`.
  `npm test` 7/7 pass; `npm run build` ok (built game.js committed with the change).
- Real click-flow harness (~/tools/recorder/phase2b_verify.mjs, standalone boot, real
  button clicks): menu walls carry the pano texture; Play starts a track with pano walls;
  after unlocking, `startTrack(6)` shows pano7.webp on the walls. Zero page errors.
- Frames at 844×390 / 1024×768 / 1366×1024 in ~/workspace/projects/audit/shots_phase2b/:
  the finale frame shows the Cairo panorama wrapped around the stage skirt in gameplay;
  walls visible in portrait framing.

## Honest gaps
- In landscape the gameplay camera is steeply top-down, so the walls themselves sit
  mostly out of frame; the skirt band is the in-frame carrier of the art there.
- Headless SwiftShader fps is not meaningful; no per-frame allocations were added
  (textures load once per track start; previous textures disposed).

---

## Phase 2D — Egypt anchor + kind fix: «إيقاع القاهرة / Cairo Rhythm» (2026-11-27)

**What was wrong:** (1) "Rhythm Survival" — a survival frame whose
non-easy players had exactly ONE life: one fall and the show was over;
(2) the easy-mode save had a real flaw: it respawned the child at
radius 3, which is inside the gap rings (gaps start at 2.2), so a gap
fall could chain-burn every life in a second (reproduced in a test
script: saved → saved → out in 3 steps).

**What changed:**
- **Three lives for everyone** (was 3 easy / 1 otherwise), and the
  save respawn moved to radius 1.2 — inside every possible gap ring —
  so a save is a real save. Two tests were updated to pin the new
  rules (first fall = saved; passivity still costs lives), and the
  "standing still" test now asserts the punishment without sudden
  death. Note, honestly: on the easiest track an idle player can now
  outlast the rivals and "win" by survival — that is the game's own
  premise (last one on the record), not a pressure mechanic.
- Title «البقاء على الإيقاع / Rhythm Survival» → **«إيقاع القاهرة /
  Cairo Rhythm»**, the World Tour → Egypt Tour, and the seven venues
  are Egyptian: Hara Café → Khan el-Khalili Records → Hara Rooftop →
  Nile Lounge → Grandma's Music Box → Cairo Opera House → Cairo Grand
  Orchestra (bpm/length/mechanics unchanged; the panoramas wired in
  Phase 2B stay).

**Tested:** `npm test` 8/8; build green; real click-flow verify PASS —
menu title and venue list, show HUD with the ❤️❤️❤️ lives, frames at
3 sizes, 0 page errors.

**Not done (Batch F):** Egyptian instrument flavour in the synth
tracks (tabla/rababa-style patterns) is not built. Not tested on a
real device.
