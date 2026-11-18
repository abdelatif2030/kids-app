# «برج الأبطال» — Hero Tower (2026-11-18, from the owner's video + prompt)

A casual tower-climbing power puzzle in «ألعاب للتسلية» (third page, «ألعاب أكتر»). 2D canvas, all art and sound made in code, no network.

- The knight starts at the bottom of a tall tower. Every floor has foes and treasures with POWER numbers. Tap a GREEN foe (weaker than the hero) to defeat it and ADD its power
  to the hero's; a RED foe is stronger, it only bonks the hero gently and the floor is tried again. Sword, potion and chest (needs the key) add power; a crystal MULTIPLIES it,
  so the order matters (a crystal early is worth less than a crystal late). Clear the foes, the hero climbs the ladder.
- A stone troll waits on floor 6, a dark sorcerer on floor 11, a dragon on the roof; then «الفصل خلص!» with stars (3 = no round lost) and Replay / Next chapter.
- Three chapters (castle, ice tower, fire tower), 12 floors + the roof each. Every play builds a NEW tower (seeded random), always with a winning order.
- Easy mode for age 4 and under (gentler foes, fewer of them). No lives to lose; stars only for finishing.
- Soft-lock guard: if the hero cannot clear a floor any more (an earlier floor was skipped through), a kind card offers to start the chapter again.
- Save per child: unlocked chapters, best stars. Erased with the child (`hero_tower` key in data_reset.dart).
- Code: game_src/hero_tower (sim.js rules + tests, art.js, audio.js, main.js); build `npm run build`; `npm test` (12 tests: every floor has a winning order, planned order wins, key/chest, retry, save).
- NOT tested on a real phone; sound not listened to by a person. Characters are drawn in code (see docs/GAME_CHARACTER_IMAGE_PROMPTS.md for the pictures to replace them).
