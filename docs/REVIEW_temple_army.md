# Review: «جيش المعبد» Temple Army vs the original video (brief #29)
Video: 370x612 portrait, 36 s. Compared by ffmpeg frames and by playing the build in headless Chrome (370x612, software GL).

## What the original does
Tilted top-down 3D camera following a crowd of tiny blue warriors; floating joystick (white ring + knob); a plain white army number over the crowd; sandy stone temple floor with green moss patches, low walls; stone arch gates with a glowing yellow x10 and white +5 boards; spike plates, cages, red hordes; HUD = coin pill (left), goal pill ("Pick the stronger gate" / "Smash the Brute") with a boss HP bar, round sound button; fail card "Almost there! Your army fell. Try again!".

## Differences found
1. Level 1 was a dark green hedge maze; the original is warm sand.
2. A blue army pill sat in the HUD and a blue pill over the crowd; original has only a white number over the crowd.
3. A minimap (not in the video).
4. The goal pill showed the temple name instead of the goal text.
5. Gates are floating coloured banners (x2 / +4 / -3 in a row) instead of stone arches with glowing numbers.

## Fixed (game_src/temple_army)
Level 1 theme sand/gold; plain outlined white number over the crowd; army pill and minimap removed; goal pill shows "اختر البوابة الأقوى" and switches to "حطّم الوحش" in the boss fight. `npm test` 17/17, build ok, no console errors.

## Still different
Stone-arch gate models; walls still show green moss tops; HUD has a pause button where the video has a sound button; other levels keep their own themes; no progress bar under the goal pill. Headless software GL loses the WebGL context after ~10 s, so long play was checked only by the node bot tests.
