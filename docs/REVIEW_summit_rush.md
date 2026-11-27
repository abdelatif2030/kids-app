# Review: «سباق التلج» Summit Rush — Phase 2B (Batch C, rollout 2.1)

## What was reviewed
Audit card (racing_action.md): the only hard fail clock in Racing — every course ended
at ~60 s ('timeup'), and three wipeouts ended the run ('out'). Both are pressure
mechanics the house rules ban for ages 3–6. The audit's identity proposal (Mount
Catherine + "reach the monastery before the lanterns light") needs new art; the
kind-rules conversion below adopts its lantern story beat in code now.

## Changed (game_src/summit_rush)
- `src/sim.js`: the course clock is no longer a deadline. At `course.time` the summit
  lanterns light — a one-time 'lanterns' event that also warms the child back to 3
  hearts — and the run simply continues. The 'timeup' and 'out' endings are deleted:
  the only way a run ends is reaching the summit ('won'), in whatever place. Wipeouts
  still cost a heart (floored at 0) and ground, but hearts can never end the run.
- `src/main.js`: 'lanterns' event → summit chime, celebration voice clip and a
  "🏮 The summit lanterns are lit!" float. The HUD clock now fills toward the lantern
  moment and then shows 🏮 (the red 'low time' urgency state is gone). Finishing in
  any place plays the WIN voice (was: 'lose' for places 2–4), and the win-card text
  for non-first places is now a plain celebration. The dead `_loseCard` and its
  "Out of hearts / Time's up" strings are removed.

## Tests & playtest evidence
- The old "three hits end the race" test is replaced by: repeated hits can never end
  the race (no 'out'/'timeup' events exist), plus a new lantern test (fires once at
  the course moment, refills hearts 1 → 3, race continues). `npm test` 10/10;
  `npm run build` ok.
- Real click-flow harness (phase2b_verify.mjs): a tap on the menu starts the race;
  at the lantern moment the HUD clock becomes 🏮 with hearts refilled and the race
  still running; reaching the summit opens the celebration card. Zero page errors.
  Frames at 3 sizes in ~/workspace/projects/audit/shots_phase2b/.

## Honest gaps
- The full Mount Catherine re-anchor (monastery finish landmark, Sinai identity,
  rename) needs new backdrop art — it stays a Batch E identity item; this batch only
  removed the pressure mechanics and adopted the lantern beat.
- Score is still points-based (+10/+5/+20) with place medals; converting scoring to
  the fleet's completion-stars is a wider change, noted in the work log.

---

## Phase 2D — Egypt anchor: «قمة سانت كاترين / Catherine Summit» (2026-11-27)

**What changed (names only):** the title «سباق التلج / Snow Race» →
**«قمة سانت كاترين / Catherine Summit»**, and the course list now
climbs one mountain instead of touring the world: St Catherine Snow →
Catherine Village → **Wadi El-Arbaein** (the valley on the real
Catherine trail) → Catherine Return → **Mount Catherine Summit**. The
Alps Village and Kilimanjaro names are gone. Course data, the Phase 2B
kind-rules conversion (no fail clock; the summit lanterns refill
hearts; the run ends only at the summit) and saves are untouched —
the verified frame shows the course list with the new names over the
start line.

**Tested:** `npm test` 11/11 (+1 anchor test); build green; real
click-flow verify PASS — title and course names in the menu scene,
frames at 3 sizes, 0 page errors.

**Not done (Batch F):** sunrise-summit ceremony dressing and a
monastery bell at the finish are not built. Not tested on a real
device.
