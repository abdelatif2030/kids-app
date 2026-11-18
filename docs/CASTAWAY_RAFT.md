# Castaway Raft / طوف الناجي (2026-11-18)
Owner request from a video: ocean survival. 2D canvas in game_src/castaway_raft (shared kit game_src/cozy_kit), `npm test` (6 tests, a robot reaches all 8 islands), `npm run build` -> assets/games/castaway_raft/game.js.
- Tap the sea: a hook flies out and grabs the nearest plank/barrel/crate/golden bottle, reels it in. Build raft tile (3 wood), sail (faster), fishing spot (coins), hut. The raft only lands when the level's build list is done ("Finish building to land!").
- Shark from level 3: circles, warns with "!", then takes ONE log; tap it to scare it off. Never destroys the raft. Age <=4: bigger hook radius, slower shark.
- 8 levels: Palm Cay Run, Driftwood Current, Shark Shoals, Fin Rock, Coral Drift, Storm Strait, Whale Gate, Treasure Atoll. Stars: landed / all golden bottles / no logs lost. Coins are only a score for the island, nothing is bought.
- Art and sound are code (waves, tune, whoosh, splash, hammer, shark hum). NOT tested on a real phone; sound not heard by a person.
