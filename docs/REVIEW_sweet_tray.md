# Review: «طبق الحلويات» Sweet Tray vs the original video (brief #30)
Video: 370x586, 44 s (match-3 tray game on a pastel bakery counter). Compared by ffmpeg frames and by playing the build in headless Chrome.

## What the original does
A smallish plate (about 60% of width) holding a pile of small stacked sweets (donuts, cupcakes, macarons, cookies, strawberries); tap an uncovered sweet to send it to a 7-slot tray; three equal vanish with +30 floats, "COMBO x2/x3", "SWEET!"; a bonus bar fills with combos; level pill + progress bar, star score pill, sound button; "OUT OF SPACE!" card when the tray fills; bakery shelves with sweets behind the plate; wooden counter.

## Differences found
1. Sweets were ~35% too big and the plate filled the screen; level 1 had 18 sweets (original about 12).
2. Plate too large against the tray.
3. Extra helper buttons (undo, shuffle, extra slot) under the tray: not in the video.
4. The background has bunting and tiles but no shelf with sweets.

## Fixed (game_src/sweet_tray)
Level 1 = 12 sweets (4+level triples), sweet size 15% of the plate shrinking to 11% (was 20 to 12.5), plate 76% of the width. `npm test` 11/11 (solvability proven), build ok, no console errors.

## Still different
Helper buttons kept (an aid for small children, not in the video); no shelf-with-sweets background; no "PLAY NOW" button (that is an ad button, deliberately not copied).
