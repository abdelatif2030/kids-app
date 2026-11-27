# REVIEW — rain_circuit «عاصفة إسكندرية / Alexandria Storm GP» (was Rain Race)

## Phase 2C, Batch D (2026-11-27) — clone separation: the storm is physics
- What was wrong: a reskin of moto_race — byte-identical track.js, the
  same rivals, generic round names (Rain Hills, Thunder Marsh…), and rain
  that was only visual: grip and braking were the dry coastal values.
- What changed:
  - track.js rewritten: a 1.88 km Alexandria Corniche loop (harbour
    straight, beach sweepers, citadel hairpin, min radius 65 m) with a wet
    profile (`wetAt`) — four puddle bands where grip drops to 0.55.
  - sim.js: wet handling — base GRIP 12.5 scaled by each round's `rain`
    (0.3 → 1.0; finale gripBase 9.0), wet braking DECEL 15, slow steering
    STEER_RATE 5.5, skids from 24 m/s; puddles bite live in riding, AI and
    easy-mode braking. Hero car gets +5% grip (good wet tyres) so the
    finale stays winnable. Rounds: Sidi Gaber → Raml Station → El
    Mansheya → Stanley Bridge → Montazah → Qaitbey Citadel Final, the
    storm escalating each round. New cast: Farida, Ziad, Hana, Rami, Dina.
  - main.js: fog distance and rain opacity scale with the round's rain;
    shining puddle decals are drawn exactly where wetAt < 0.8, so the
    child can SEE where the road is slipperiest.
  - i18n title: عاصفة إسكندرية / Alexandria Storm GP.
- Tested: npm test 7/7 (corniche geometry + puddle profile assertions;
  robot podiums all 6 rounds ≈90 s each, incl. the rain-1.0 finale);
  build ok; click-flow verify PASS — new menu title, race starts from a
  real click, round-1 fog far 376 and rain opacity 0.57 measured in the
  live scene, frames at 3 sizes, zero page errors.
- Honest gaps: not tested on a real device; puddle decals are flat
  ellipses (no reflections); thunder/lightning audio drama is unchanged
  from the previous build.
