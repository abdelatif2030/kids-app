# Review: Dino Grow (ديناصور صغير يكبر) against the owner's original video (brief #26)

Video: Recordings\20261118-2136-28.7504658.mp4 (139 s, portrait), checked with contact sheets.

## What the original does
- Near top-down 3D camera, far enough to see a dozen creatures; a small baby raptor with a plain outlined power number above it; every creature shows its number (green/white = edible, red with "!" = bigger, run).
- HUD: leaf level badge; orange power pill (egg icon, claw after evolving) plus a white counter; pause; a thin progress bar with a red goal pill (37); "BEAT THE ALPHA 36"; big teal POUNCE button (claw, cooldown arc, label under it).
- Level title ("FERN HOLLOW - Eat green, run from red!"), hint capsules ("TAP POUNCE TO LEAP!", "GROW TO EVOLVE!", "RED IS BIGGER - RUN!"), floating +N, "EVOLVED! CREST HUNTER", floating joystick with "DRAG TO MOVE".
- The level goal is the ALPHA: a boss bar (name + power) appears, an edge arrow points to it, eating it shows "DEFEATED!". Level 2 "Mirefen Swamp" (start power 40, "Lure the divers into the mud!") ends with the flying "Gale-wing 360" boss; swamp has mud, giant ribs.

## Differences found (before)
1. Camera too close: the baby filled the screen, the world looked empty.
2. Numbers were big coloured pills; HUD was text pills (power, goal 2/32), orange round POUNCE button with a dino.
3. Levels 1 and 2 ended when power reached a number, no alpha, no boss bar, no arrow; level names generic; level 1 started at 2, swamp at 14.
4. Evolution was a hint line, no EVOLVED banner or name "Crest Hunter".

## Changed
- `src/sim.js`: camera zoom starts farther (`zoomFor` 20 + 9 ln(1+P/10), still monotonic); level 1 "Fern Hollow" start 3, alpha "Snapjaw Alpha" 36 (spawns at power 20, hunts you while stronger, flees when weaker, eating it wins); level 2 "Mirefen Swamp" start 40, "Marsh Fang Alpha" 80 (spawns at 55); `alpha` / `alphaDown` events; stage 2 renamed Crest Hunter; level subtitles. Volcano boss unchanged.
- `src/main.js`: steeper, farther camera; outlined plain numbers (red ones with "!"); new HUD (level badge, orange power pill with egg/claw, eaten counter, pause, progress bar + goal pill, "BEAT THE ALPHA 36", alpha bar green/red, edge arrow, teal POUNCE with cooldown number); level title, "DRAG TO MOVE", EVOLVED! / DEFEATED! banners.
- Tests: updated robot (no stuck in corners), two new alpha tests; all pass. Browser check (headless Chrome 390x780): menu, level 1 HUD, camera, numbers, pounce cooldown; no script errors (WebGL context loss only in the software renderer).

## Still different
- No flying divers / mud pools in the swamp, no Gale-wing boss (level 2 ends with a ground alpha; scale 360 not used). No giant ribs or leafy ground texture; the jungle floor is flatter than the original.
- Pack of small purple raptors swarming is not specific; creature models are code-drawn shapes.
- Eaten counter is my reading of the original's second white pill. Alpha bar was not re-checked in the browser (HUD logic covered only by sim tests). Sound not heard; no real phone.
