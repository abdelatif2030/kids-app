# REVIEW — archer_bridge «رماة جسر قصر النيل / Qasr El Nil Archers» (Batch D2, 2026-11-27)

## What it was
The other half of `lane_shooter`: archers shooting **skeletons over lava** — scary content for the
age group, and the same sim/waves as squad_shooter with different colours.

## What it is now
Target shooting on a great bridge over the Nile at golden hour:
- The "enemies" are **wooden target dummies** on the far bank (post + ringed board + gold centre).
  They never advance and cost nothing when passed — nobody is hurt, nothing is scary.
- **Arrows arc** (vy 5.5, gravity −14) and **the wind bends them** — each level has a wind value
  (−1.4 … +1.4 m/s) the child learns to lean into; the boss is a **grand target** that blocks the
  bridge like a gate until shot down.
- 8 real bridges (Qasr El Nil → Aswan Dam) replace the lava names; bridge lamps replace the flame
  cones; the "lava" plane under the bridge is now the Nile; warmer, faster volley (0.30 s) and
  longer arrow range (46 m/s) give it a different rhythm from the rescue boat (0.42 s rings).
- Gates/cages stay (grow the squad / free archers) — the shared skeleton — but the verb, the physics
  and the fantasy are now entirely its own.

## Tests / verification
- `npm test` in game_src/lane_shooter: **9/9 pass** (new: targets never advance, a real wind exists
  and measurably bends a flying arrow, the grand target blocks, robot archer wins ≥6/8 levels).
- Real-click harness: menu shows «رماة جسر قصر النيل», level 1 starts a `theme:'archers'` run
  (wind −1.4 on L1), target/grand traits present, **zero page errors**, frames at 3 sizes eyeballed
  (stone bridge, lamps, Nile below, target dummies ahead).

## Honest gaps
- Headless fps meaningless (SwiftShader); no real-device test.
- The wind is not yet shown in the HUD (a flag/ribbon indicator is a polish item for Batch F).
