
---

## Phase 2D — Egypt anchor + Batch C fix: «لفة إسكندرية الكبيرة / The Great Alex Roll» (2026-11-27)

**What was wrong:** (1) stars were pure diameter thresholds (20/40/60 m)
— the size-pressure grading Batch C listed for conversion; (2) a
generic "Gum Ball Roll" rolling up a generic city.

**What changed:**
- **Stars now come from stop completion**: the roll's six growth stops
  (the GOALS milestones) — 2 stops → 1★, 4 stops → 2★, all 6 → 3★ —
  never from the raw final diameter. The menu legend was updated to say
  so ("⭐ 2 stops ⭐⭐ 4 stops ⭐⭐⭐ all the stops"). A test pins it,
  including that a small ball which finished the stops still earns 3★.
- Title: «كرة العلكة العملاقة / Gum Ball Roll» → **«لفة إسكندرية
  الكبيرة / The Great Alex Roll»** — the roll now runs Alexandria's
  Corniche: the stop labels are corniche stuff → tram carts and
  umbrellas (Alex's famous tram) → cars → buses → corniche buildings →
  Alex towers. Group ids, sizes and saves unchanged.

**Scope note (owner question logged):** the 2-minute roll format stays
— when time ends the roll stops and celebrates (there is no losing),
but a timer does end the run. The master plan mandates only the star
conversion for this game; making the roll endless-until-finished would
be a redesign — flagged for the owner.

**Tested:** `npm test` 6/6 (+1: stop-completion stars + Corniche
labels; the robot roll still earns ≥2★). Build green. Real click-flow
verify PASS — new title and stops legend on the menu, roll HUD with
next-goal marker, frames at 3 sizes, 0 page errors.

**Not done (Batch F):** the Corniche Roll route (a seafront route past
named Alex landmarks instead of a free arena) is not built. Not tested
on a real device.

---

## Owner decision executed — the 2-minute timer never cuts the roll (2026-11-27)

**What the code did before:** `Roll` started with `left = 120` s (150 s on
easy), counted down every step, fired `tick` events in the last 10 seconds,
and at zero forced `state = 'done'` with a `timeUp` event — main.js showed
the results card titled "Time's up!" and the HUD time pill counted down and
turned "low" (red) under 10 s. No losing, but a clock did end the run. The
owner was asked about this rule and answered "do the right thing".

**What changed:**
- `src/sim.js` — the countdown is gone entirely. `left`/`time` were removed;
  `elapsed` counts UP during play and is never compared against anything.
  The roll now ends only in `_goalCheck()`: when the final GOALS stop is
  reached (the whole city, d ≥ 60 m), the sim sets `state = 'done'`, computes
  the result and emits a new `finished` event. The collision loop breaks
  cleanly if the course completes mid-step. `robotRoll` now reads
  `g.elapsed` as its clock. Stars are unchanged (stop completion, fixed in
  2D). `easy` is still accepted — it used to buy extra time; with no clock
  it now changes nothing in the sim (documented in the constructor).
- `src/main.js` — the `timeUp` event case became `finished` (win jingle +
  VoiceCoach `win` + the celebration banner); the results card title is now
  «لفّيت إسكندرية كلها! 🎉 / You rolled up all of Alexandria! 🎉»; the dead
  `tick` case was removed. The HUD pill is an elapsed-time display only:
  label «وقت اللفة / Roll time», counts up from ٠٠:٠٠, and the red "low"
  warning class is gone.
- `src/i18n.js` — `timeLeft` → `elapsed`, `timeUp` → `finished` strings.
  (audio.js still defines the old tick/timeUp sound routines; unused now,
  left as library.)

**Tested:** `npm test` 6/6. The robot test now pins completion-by-course:
state `done` via exactly one `finished` event, all 7 stops reached, 3★,
and **zero `tick` events**. New regression test (the one the decision asked
for): an idle ball stepped for 150 sim-seconds — past the old 2:00 cut —
is still in state `roll` with no result forced on it, and the *same* run
then driven by the robot completes the course with 3★. The anchor test's
idle run now asserts state `roll` + `_result()` stars instead of a forced
result. Build green — game.js 121.8 KB. Real click-flow verify
(phase2d_verify.mjs, real menu clicks, audio unlocked): PASS, 0 page
errors at 844×390 / 1024×768 / 1366×1024; frame eyeballed — HUD shows
«وقت اللفة ⏱ ٠٠:٠٠» counting up, no countdown styling.

**Not tested:** a full human playthrough to course completion in the
browser (the robot proves it in the sim in ~91 s of play); not tested on a
real device.
