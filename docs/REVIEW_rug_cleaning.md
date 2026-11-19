# Review: Rug Cleaning («تنظيف السجاد») against the owner's original video (brief #20)

Original (recording 20261118-2122, portrait, 72 s): tilted 3D view of a rug on limestone tiles with a drain at the bottom edge,
bottle + bucket at the top. A ticket card first ("Rosa Marino", quote, what's on it, job goals, pay, Accept job / Tool shed).
HUD: job pill, money, pause; a big "0%" bar; hint pill; an eye button. Bottom row of five round tool buttons with progress rings
(beater, foam, rotary brush, rinse jet, squeegee). Tools can be picked in any order. Dust is a grey layer, foam white blobs, the
rotary brush is a disc with a long handle, the squeegee leaves stripes and reveals the bright pattern. Before/after slider at the end.

## Differences found
1. No client ticket before a job. 2. Tools were forced in a fixed order with a "Next" button. 3. Tool buttons were rounded squares with
labels and no per-tool progress. 4. No big overall % bar (a thin bar only). 5. No eye/peek button. 6. Flat top-down 2D rug (no perspective),
pale look. 7. Rug patterns are original code-drawn designs, not the video's medallion rug.

## Fixed (game_src/rug_cleaning)
- Ticket card (`_ticket`): client name + quote, tags (dust, coffee x N, mud boots), goals (95 percent, par time, par water), pay and tips, Accept / Workshop.
- Five round tool buttons with progress rings; any tool can be picked at any time (`_pick`); baselines in logic.js only grow so rings do not jump back; rinse/squeegee rings stay empty until there is foam/water.
- Big percent bar (cleanliness gained since the start) replaces the thin bar; "Done" button replaces "Next" and glows when beating and squeegee are done.
- Eye button: hold to peek at the clean rug.
- New unit test (12 tests pass). Re-played in headless Chrome at 390x800 with real pointer events: all five tools, ticket, rings, result slider, no console errors.

## Still different
- No 3D perspective/tilted camera, no 3D tool models with long handles reaching from the top (tools are drawn flat at the pointer).
- Rug art is original (not the video's red medallion rug); courtyard is code-drawn, no bottle/bucket props.
- Ticket avatar is an emoji; rinse tool is a spinning disc without the long handle.
