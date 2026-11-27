# Review: «الأكول» Chomp Maze — Phase 2B (Batch B3 + rollout 2.7)

## What was reviewed
Audit: the only in-scope game with effectively no music — its Sound class did define a
SynthBase tune, but at vol 0.03 (house norm is 0.045–0.07) with a sparse square line:
present in code, inaudible in play. It was also the fleet's harshest fail state for the
youngest players: 3 ghost catches (5 in easy) ended the maze with a "lost" screen.

## Changed (game_src/chomp_maze)
- Music (B3), in the game's existing pattern (cozy_kit SynthBase `setTune`, no files, no
  packages): `Sound.setMode` now takes 'play' / 'menu' / off. Play = a composed bouncy
  chase loop (triangle melody + walking bass, 126 bpm, vol 0.06); menu = a calm loop
  (92 bpm, vol 0.05). `showMenu()` starts the menu loop; `start()` the chase loop.
- Kind rules (2.7): lives are now a **sweet-count**. `Game.sweets` starts at 3 (easy 5);
  a ghost catch costs one sweet (floored at 0) and Sunny restarts at home — the sim can
  no longer reach a 'lost' state, and no 'lost' event exists. Winning still grades by
  sweets left (all sweets → 3 stars), so care is rewarded without ever ending the game.
  HUD shows 🍬×sweets instead of 🟡×lives.

## Tests & playtest evidence
- Existing tests updated for the rename; NEW test: six consecutive catches — every one
  reports 'caught', the state never leaves 'play', no 'lost' event fires, sweets floor
  at 0, and the maze still completes with 3 stars when sweets are full.
  `npm test` 5/5; `npm run build` ok.
- Real click-flow harness (phase2b_verify.mjs): menu carries the calm tune (vol 0.05);
  clicking level 1 starts play with the chase tune (vol 0.06, 126 bpm); four forced
  catches in easy mode take the HUD from 🍬×5 to 🍬×1 with the game still playing.
  Zero page errors. Frames at 3 sizes in ~/workspace/projects/audit/shots_phase2b/.

## Honest gaps
- The built folder still ships no hero.webp/poster.webp (menu card art) — pre-existing
  gap, unchanged; flagged in docs/AI_WORK_LOG_P2B.md for the art pipeline.
- The now-unreachable 'lost' results branch and its i18n strings remain in main.js as
  dead code (harmless; removing them is a separate cleanup).
- Music was verified as scheduled state (tune object, tempo, volume, ctx running after
  a real click) — headless Chromium cannot prove audibility on a real device.

---

## Phase 2D — Egypt anchor: «مطاردة الحلويات في خان الخليلي / Sweet Chase in Khan el-Khalili» (2026-11-27)

**What changed (name only):** the title «الأكول / Chomp Maze» →
**«مطاردة الحلويات في خان الخليلي / Sweet Chase in Khan el-Khalili»** —
the maze chase now runs through Cairo's famous bazaar alleys. The
Phase 2B conversion stands (audible chase loop, lives shown as sweets
— visible as 🍬×5 in the verified HUD).

**Tested:** `npm test` 6/6 (+1 anchor test); build green; click-flow:
menu title via the harness; gameplay confirmed with a single-click
check — maze HUD with score and sweets, 0 page errors; menu frames at
3 sizes.

**Not done (Batch F):** bazaar dressing (shop-front walls, lantern
dots) is not drawn; the maze art is unchanged. Not tested on a real
device.
