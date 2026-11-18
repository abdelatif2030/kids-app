# Winter Camp / معسكر الشتاء (2026-11-18)
Owner request from a video: cozy winter survival idle-tycoon. 2D canvas, top-down, game_src/winter_camp (+ game_src/cozy_kit). `npm test` (5 tests; a robot with helpers builds cabin, workshop, sawmill and sled and opens the gate in ~2 min).
- Drag to walk (or arrows/WASD). Walk up to a pine: it is chopped automatically (3 swings), logs go on the back (bag 4, upgrades +2). Stand on the glowing site to drop them: 1 log = 1 build step = 1 coin. Builds: cabin 8, workshop 14, sawmill 20, supply sled 28 logs; the sled opens the frozen gate (win).
- Coins buy up to 4 helpers (10/25/45/70) who chop and deliver alone, and a bigger bag. Campfire warms; far away you slow down (never worse). A blizzard comes every 70-100 s (colder, whiter). Trees grow back.
- "Same as the video": look and flow are modelled on the owner's video but drawn from scratch (3D look is 2D top-down here). NOT tested on a real phone; sound not heard by a person.
