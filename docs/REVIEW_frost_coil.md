
## Phase 2B (Batch C, rollout 2.5) — move-limit fail becomes unlimited turns + sparkle guidance
Each level gave a move budget (solution + slack); running out ended the try with
an "Out of moves" card, and the third star rewarded leftover moves. The budget is
deleted from level data and the Puzzle: turns are unlimited (a movesUsed counter
remains as a stat), the 'out' state/result/card/strings are gone, and the HUD bar
that drained with the budget now FILLS with ice progress (lit tiles / path length,
e.g. ٠/٥). Stars: finishing always earns 2, and routing the ice through the
sparkle earns the third — the sparkle's role is now guidance, and its halo in
art.js pulses like a beacon. The `slack` fields in LEVELS are now unused data
(left in place; harmless). Tests: run-out test replaced by a 500-tap never-fail
test; solvability test asserts no budget exists; easy-mode test updated (easy no
longer inflates a budget). `npm test` 8/8, build ok. Playtest
(phase2b_verify.mjs): no budget field, progress bar at ٠/٥, solving through the
game's own tap handler wins with 3 stars in 9 turns. Zero page errors.

---

## Phase 2D — Egypt anchor: «تنين إسكندرية الثلجي / Snow Dragon of Alexandria» (2026-11-27)

**What changed (name only):** the title «طريق التنين الجليدي / Frost
Coil» → **«تنين إسكندرية الثلجي / Snow Dragon of Alexandria»** — the
little ice dragon now coils over Alexandria, the one Egyptian city
where a snow day is a famous event. The Phase 2B conversion stands
(percent + slack stars, no fail clock — the verify HUD shows the
level's ice counter and no timer).

**Tested:** `npm test` 9/9 (+1 anchor test); build green; real
click-flow verify PASS — menu title, level 1/12 board with the
build-a-path hint, frames at 3 sizes, 0 page errors.

**Not done (Batch F):** Alexandria dressing (a corniche gate arch, sea
behind the board) is not drawn. Not tested on a real device.
