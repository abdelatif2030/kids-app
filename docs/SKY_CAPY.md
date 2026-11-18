# «سكاي كابي» — SKY CAPY (2026-11-18, from the owner's video + prompt)

A top-down bubble shoot-'em-up on the third fun page («ألعاب أكتر»). 2D canvas, all art and sound made in code, no network. Ages 4+ (age 4: more HP, softer pirates, slow healing).

- A calm capybara pilot in a teal seaplane over floating islands. Drag a finger (or arrows/WASD) to fly; the plane shoots bubbles by itself; hold FIRE for a faster stream (the ring is the bubble tank); STORM clears every enemy bullet and hits every pirate on the screen.
- Pirates: rats in balloons, umbrella balloons (soak up bubbles from the front), gyrocopters, gliders, bandit thieves, cage balloons (a songbird in a cage). The final boss is the pirate captain's airship.
- Songbird wings (two at most), each with its own power and shooting on its own: robin (homing bubbles), jay (fast darts at the nearest pirate), canary (heals).
- Weapon capsules (triple bubbles, big piercing bubble, rapid fire, 12 s), pearls (score), feathers (the hangar's money), combo multipliers up to X5.
- Three stages back to back: cloud village, laundry-line ambush, the giant nest tree + the captain's airship; then the loop starts again, harder, until the plane is shot down. Stage ranks S/A/B/C (pirates popped + damage taken), a top-10 table with arcade initials (▲▼ letters).
- Hangar: feathers buy upgrades (engine, bubble tank, bubble power, armor, magnet, storm stock; 3 levels each) and 8 paint jobs. Save per child (`sky_capy` key, erased with the child).
- Code: game_src/sky_capy (sim.js rules + tests, art.js, audio.js, main.js); `npm run build`, `npm test` (8 tests: timelines, a robot clears all stages and the boss, storm, combo, wings, capsules, hangar, top 10).
- NOT tested on a real phone; sound not listened to by a person. Landscape phones show the portrait field in the middle.
