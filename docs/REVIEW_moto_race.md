# REVIEW — moto_race «سباق الموتوسيكل / Motorbike Race»

## Phase 2C, Batch D (2026-11-27) — clone separation: the original, sharpened
- What was wrong: moto_race was one of three games sharing a byte-identical
  track.js and a near-identical sim (dune_titans and rain_circuit were
  reskins of it, down to the same five rivals).
- What changed: the heritage coastal circuit is now moto's own layout —
  tightened harbour hairpin and a new chicane on the back straight
  (≈1.65 km, 21 control points); ACCEL 15→16 and STEER_RATE 10 so the light
  bikes feel nimbler than the trucks (6) and the wet cars (5.5). Rounds
  (Alexandria → Giza → Luxor → Grand Museum), the original cast and GRIP 16
  dry-tarmac handling are unchanged — this game is the heritage GP.
- Tested: npm test 7/7 (robot podiums all 6 rounds on the new geometry);
  npm run build ok; click-flow verify (phase2c_verify.mjs) PASS — menu
  title, real race-button click starts the race, cast intact, frames at
  844×390 / 1024×768 / 1366×1024, zero page errors.
- Not tested: real device / iOS WebView (no such environment here); fps is
  SwiftShader-bound headless and not reported as a device number.
