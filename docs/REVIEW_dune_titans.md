# REVIEW — dune_titans «رالي الواحات / Oasis Rally» (was Desert Trucks)

## Phase 2C, Batch D (2026-11-27) — clone separation: a real desert rally
- What was wrong: a reskin of moto_race — byte-identical coastal track.js,
  the same rivals, a sim header that still said "two laps of the coastal
  circuit. The bikes…", and 3 laps of a seaside circuit in the desert.
- What changed:
  - track.js rewritten: 4.0 km Western Desert loop, road half-width 9 m for
    trucks, and a sand grip profile (`gripAt`) — four soft-sand drift
    fields where cornering grip drops to ≈0.6.
  - sim.js: one point-to-point leg per round (LAPS 1); GRIP 11.5 on packed
    dirt, sampled live through the drifts; ACCEL 10.5 and STEER_RATE 6 for
    heavy trucks; leaving the dirt road bogs down to ×0.32 (deep sand).
    Rounds are the oasis legs Siwa → Great Sand Sea → Bahariya → White
    Desert → Black Desert → Farafra → Dakhla cup. New cast: Hassan, Nadia,
    Tarek, Salma, Bilal. HUD lap pill → leg progress ٪. 'grass' → 'sand'
    event/sound naming throughout.
  - i18n title: رالي الواحات / Oasis Rally; rounds are مراحل / Legs.
- Tested: npm test 9/9 (new track test: >3.5 km, drift dips, firm start;
  robot podiums all 6 legs ≈95 s each; hands-off easy race finishes);
  build ok; click-flow verify PASS — menu title «رالي الواحات», race
  starts from a real click, leg-progress HUD, new cast on the board,
  frames at 3 sizes, zero page errors.
- Honest gaps: total rally ≈10 min vs the master plan's ≈25–30 min
  ambition (leg length is a Batch F content call); not tested on a real
  device; the falcon co-pilot from the plan is not modelled yet (the
  child's truck is unchanged visually apart from existing art).
