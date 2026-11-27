
## Phase 2B (Batch C, rollout 2.4) — countdown + timeout-loss become endless gentle play
Levels carried 50–100 s budgets; the clock drained a live star preview, ticked in
the last 6 s, and at zero the level was LOST. All of it is gone: level data no
longer carries `time` at all, the sim has no countdown and no 'lost' state — a
level can only be finished. Stars are for completion only (a finish is 3 stars,
fast or slow alike; the draining starsLive preview is deleted). The HUD timer pill
is now a progress pill: 🎯 delivered/total with a bar that FILLS as marbles land
and the three stars waiting dimmed until the win card lights them. The lose card,
its strings and the last-seconds tick are removed. Tests: the robot test now runs
far past the old budgets and asserts never-lost; a 90-minute idle run stays in
'play' with no clock field; the data test asserts time is absent. `npm test` 9/9,
build ok. Playtest (phase2b_verify.mjs): the pill reads ٠/٣٠ with an empty filling
bar; delivering every marble wins the level with 3 stars saved. Zero page errors.

---

## Phase 2D — Egypt anchor: «البنّاء الصغير / Little Builder» (2026-11-27)

**What changed (name only):** the title «جرّافة الكرات / Marble Dozer»
→ **«البنّاء الصغير / Little Builder»** — the dozer driver is a little
builder sorting colour balls on a building site, per the plan's rename.
The Phase 2B conversion stands (batch targets, no clock/lives — the
verify HUD shows the batch goal ٠/٣٠ and no timer).

**Tested:** `npm test` 10/10 (+1 anchor test); build green; real
click-flow verify PASS — menu title, level-1 site HUD with the batch
goal and drag-to-drive hint, frames at 3 sizes, 0 page errors.

**Not done (Batch F):** building-site dressing per level (each level a
different little building going up) is not built. Not tested on a real
device.
