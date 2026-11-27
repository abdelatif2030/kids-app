# REVIEW — squad_shooter «فرقة الإنقاذ / Rescue Squad» (Batch D2, 2026-11-27)

## What it was
One half of the `lane_shooter` package: "Squad Shooter" — soldiers with guns (🪖/🔫) on a night
industrial road, shooting thugs, on the exact same sim, waves and visuals skeleton as
`archer_bridge`. A gun game for ages 3–6, and a clone.

## What it is now
A Nile rescue game. A lifeboat crew in orange vests throws life rings:
- **Swimmers** (68% of waves) are rescued — a ring that wears their "hold on" points down, or simply
  reaching the boat, climbs them aboard: +1 crew, +1 coin, a `rescue` event with voice + fx.
- **Logs** (32%) and the **sunken wreck** (boss) are the only hazards — they cost crew on contact.
- **The current pushes the boat** (sinusoidal drift on x and targetX) — the child keeps correcting,
  which is the game's own steering feel.
- Ducklings in a fishing net replace the prisoner cage; numbered **buoys** replace the gates.
- **16 Nile reaches** (Aswan → Rosetta) replace the 8 industrial levels; daylight sky, palms and
  riverside huts replace the night yard; the tune softened (triangle, 112 bpm); rings splash.
- No guns anywhere: the crew model lost its gun box and carries a life ring; VoiceCoach clips were
  already installed for this folder and the event set (trick/charge/bump/win/lose/count) is unchanged
  except the new `rescue` event mapped to the existing `pickup` clip.

## Tests / verification
- `npm test` in game_src/lane_shooter: **9/9 pass** (3 new: rescue-by-ring and rescue-by-contact,
  current drift, 16 boss roads + robot rescuer wins ≥5/8 late levels).
- Real-click harness (phase2c_verify.mjs): menu shows «فرقة الإنقاذ», level 1 starts a `theme:'squad'`
  run with swim/log/wreck traits present, **zero page errors**, frames at 844×390 / 1024×768 /
  1366×1024 eyeballed (orange crew + rings, water lane, palms/huts, duckling net).

## Honest gaps
- Headless fps is SwiftShader-bound (meaningless); no real-device test.
- The old "soldier/gun" wording survives only in the package's legacy sim comments for the shared
  gate/crate code paths that both games still use (kid-invisible).
