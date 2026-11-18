# «جرّافة الكرات» — Marble Dozer (2026-11-18, from the owner's video + prompt)

A physics puzzle on the third fun page. 2D canvas with a tilted (perspective) look, all art and sound made in code, no network. Ages 4+ (age 4: 30% more time, 25% fewer marbles to deliver).

- Drag anywhere to drive a little yellow bulldozer (a stick appears under the finger; arrows/WASD on a keyboard). Its blade and wings push coloured marbles; push each colour into the hole of its colour before the timer ends (circle, triangle, star... one shape per colour). Wrong colours bounce off the rim. Marbles roll, bounce and collide.
- Every hole sits at the point of a V-shaped blue funnel that guides the marbles. Stars by the time left (3 stars while more than half the time is left, 2 above a quarter).
- Ten levels, each adding something: 1 First Push, 2 Two Colors (+ a wall), 3 Double Up (×2 gates multiply the marbles that cross them), 4 Moving Walls, 5 Bump It (bumpers), 6 Belt Up (conveyor belts), 7 Ramp Up (boost ramps), 8 Triple Trouble (×3 gates), 9 Mix Master (three colours), 10 Marble Master.
- Tread marks, gold sparks when a marble drops in, "+N" at the gates, banners (LEVEL, AWESOME!, BLUE DONE!), the "DRAG TO DRIVE" hint on level 1.
- Save per child: unlocked levels and stars (`marble_dozer` key, erased with the child). Code: game_src/marble_dozer (sim.js physics + levels + tests, main.js, audio.js); `npm run build`, `npm test` (9 tests).
- HONEST LIMITS: the physics is tuned by feel; a simple robot only delivers a few marbles per level, so "every level can be won in time" is NOT proven (the times are generous: +25%). It needs a real touch test. Not tested on a real phone; sound not listened to by a person; landscape phones show the portrait arena in the middle.
