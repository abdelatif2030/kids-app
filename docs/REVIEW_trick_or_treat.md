# Review: Trick or Treat (brief #28, video 20261118-2140)

## What the video does
Portrait night street, crowd of costumed kids tiny near the bottom (ground at ~78% of the height), lit houses and orange trees behind a picket fence. HUD on torn-paper tags: orange kid count, purple candy count, dark round pause, and a progress strip kid -> house. Tips on torn-paper notes: "Run past doors to ring the bell: more kids!", "Hold for a bigger jump", "Jump in the middle of a pit for a Perfect", "Hold to fly through floating doors". Chips pop up (+5, +8 for doors, "door +14" for a floating door). A kid-count tag floats over the crowd. Candy lies on the sidewalk, leaf pits have orange barriers.

## Differences found (before)
Friendly doors only rang if you jumped to a high bell (video: just run past); grumpy doors were avoided by NOT jumping (brief: jump past them); no floating doors; no Perfect; HUD was one row of round pills; tips were dark pills with the old rules; ground at 60% of the screen leaving a large empty street; no count tag over the crowd.

## Fixed (game_src/trick_or_treat, bundle rebuilt)
- Sim: friendly door rings when the leader runs past on the ground (3-5 kids); jumping through the warm bell still rings it with +2 bonus. Grumpy door scares kids (-3, -1 in easy mode) only if you run past on the ground, a jump clears it. New floating doors (+4 to +6 kids) in rest stretches, reached with a held jump, never a penalty. "Perfect!" (+5 candy) for being near the top of the jump over the middle of a pit. Level generator emits floats and candy arcs over grumpy doors.
- Tests rewritten for the new rules plus floating-door and Perfect tests; the robot still beats all 7 streets and easy mode. `npm test`: 16 pass.
- UI: torn-paper HUD (kids, candy, pause, progress with kid marker and house), torn-paper tips with the video's wording (Arabic + English), tips for pits/floating doors/hold, floating-door art with balloons, crowd-count tag over the leader, "Perfect!" popup, ground moved to 77% in portrait.

## Checked
Headless Chrome 390x780: ground ring, floating door tip, held jump through it (+5 popup, stats floats=1), no console errors.

## Still different
2D canvas, not the video's painted 3D look; no power-up "x2" pickup; no cut-paper in menus/result cards; kid count tag uses an emoji icon; sound not heard by a person; no real device test.
