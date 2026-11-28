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

## Phase 2E — Batch F (2026-11-27) — longer worlds: six real legs, ≈23 min rally
- What was wrong: all 6 rounds raced ONE shared ≈4.0 km loop (rounds
  differed only by a reverse flag, rival speed/skill and the sunset flag);
  the whole campaign measured ≈10 min against the plan's ≈25–30 min.
- What changed:
  - track.js rewritten around LEG_DEFS: each leg has its OWN control-point
    layout, scale and drift-field placement — (1) Siwa → Great Sand Sea:
    flowing snake, six wide rows; (2) Sand Sea → Bahariya: tighter rows,
    strong S wiggles, five drift fields (the deepest sand of the rally);
    (3) White Desert: chalk slalom, seven tight zigzag rows (×0.94);
    (4) Black Desert: volcanic switchbacks — seven columns with
    semicircle hairpins, closing round the south/west edges (×1.05);
    (5) Farafra: the only pure ring — a scalloped polar loop round the
    palm grove (×1.38); (6) Dakhla Cup: the grand snake, eight rows,
    sunset flag kept. No leg is another leg reversed or rescaled; a
    regression test pins distinct lengths (>150 m apart), distinct
    control-point counts, non-overlapping centrelines and distinct drift
    patterns. Turn apexes are semicircle arcs of points and every closing
    straight runs round the perimeter into the start line (a lone apex /
    diagonal closing made spline kinks of ≈3 m radius during development;
    final tightest corner anywhere is ≥8.1 m, most legs ≥10 m). Control
    segments are evened to ≤55 m before Catmull smoothing for the same
    reason. Every leg stays ≤740 m from its centre, inside the 780 m
    panorama ring.
  - sim.js: Race builds buildTrack(roundIndex); the `reverse` field is
    gone from ROUNDS. Rival speeds/skills, the star rule (place only —
    never time), the kind rules and normalizeSave are untouched; old
    saves migrate (pinned by test: an old-era save keeps unlocked/stars/
    best/color).
  - Lengths (robot-measured): legs are now 7,814 / 7,332 / 8,802 /
    9,718 / 4,658 / 9,278 m (was 4,014 m ×6). Leg 5 is deliberately the
    short, flowing breather between the two longest legs.
  - main.js (rendering only): fence-post and roadside-prop spacing now
    scales with track length (same density per metre as the old track,
    so draw counts stay flat on 2× longer legs); the dune-hump ring and
    the fallback mountains sit beyond each leg's measured extent instead
    of a fixed 420/520 m (new legs reach past both); camera far plane
    900 → 2,400 so the pano ring is never clipped from the far side of a
    big leg. Per-leg sunset sky/fog/lighting already read ROUNDS[sunset]
    and are unchanged; the minimap, stands, chevrons, pools and palms all
    derive from the track and follow each geometry.
- Playtime (robot driver, the sim test's racing brain — a near-perfect
  driver, so a child's real pace will be SLOWER and the real campaign
  longer): leg times 211.5 / 234.8 / 292.2 / 236.0 / 138.2 / 254.3 s,
  total 1,367 s ≈ 22.8 min (was ≈570 s ≈ 9.5 min). Scripted full-campaign
  playthrough: legs 1→6 all finished 1st, unlocks advanced 1→2→3→4→5→6,
  the Dakhla finale is reachable and winnable, final save well-formed.
- Tested: npm test 11/11 (2 new Phase 2E tests: geometry pins + the full
  campaign unlock chain with old-save migration; the robot podium test
  now races all six distinct legs ×3 seeds, all 1st, 0 wall hits);
  npm run build green — game.js 245.6 KB (see owner question: it was
  already 245.3 KB at HEAD, +0.3 KB here; the built folder is 4.9 MB,
  inside the 5 MB cap); click-flow verify PASS at 3 landscape sizes,
  0 page errors — frames show the pause card over leg 1's start with the
  correct leg title/HUD, and a separate 30 s mid-race probe frame shows
  the chase camera on the new start straight, rivals ahead, curbs,
  fences, stands and the snake minimap all rendering correctly.
- Honest gaps: only leg 1 was click-flow/mid-race verified in a browser
  (fresh save → menu builds leg 1); legs 2–6 are verified by the sim
  robot, geometry pins and the shared render path, not by browser
  frames — including the sunset finale's sky. Not tested on a real
  device; no FPS measurement on the longer legs (per-metre prop density
  is capped to the old track's, but this is inference, not a measure).
  The falcon co-pilot from the plan is still not modelled.
- Owner questions: (1) game.js is 245.6 KB vs the ≤200 KB fleet target —
  pre-existing (245.3 KB before this batch), not a 2E regression; a
  shrink pass is a separate job. (2) Leg 5 (Farafra ring, ≈138 s robot)
  is the deliberate breather; if every leg should run ≥3.5 min at robot
  pace, leg 5 needs a folded layout instead of a ring — a design call.
  (3) The 2C question still stands: Dart registry display names for the
  renamed rounds were not touched here.

