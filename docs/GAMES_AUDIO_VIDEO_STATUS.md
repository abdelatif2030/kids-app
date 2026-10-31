# Six new games, audio engine, motion system, video controls (status, 2026-10-30)

Everything here is uncommitted and tested only with Flutter's test framework (no real device, no real audio output).

## Six games (lib/games/adventure_games.dart, rules in adventure_logic.dart)
| Game | Ages | Mechanic | Verified by tests |
|---|---|---|---|
| Ladders and slides (snakes_ladders) | 4-6 | dice 1-4, ladders up, slides down at most 4 cells, a friend plays too; the game ends when the CHILD finishes | board validity, ladders/slides, 100 seeded full games finish, friend finishing first does not end it |
| Puzzle picture (jigsaw) | 3-6 | 2x2 / 2x3 / 3x3 pieces; drag or tap piece then place; a wrong place bounces back | fit rules, drag, tap, completion, star |
| Mouse and cheese (maze) | 4-6 | three mazes of growing size, arrow buttons or keyboard, "show me the way" hint | 750 generated mazes solvable and tree-shaped, full play-through |
| Island treasure (treasure_hunt) | 4-6 | clues from the map; every clue is true and together leave exactly one cell | 1,200 generated maps, play-through incl. wrong cell and landmark taps |
| Connect the dots | 3-6 | tap numbered dots in order, shape is filled when done; wrong dot changes nothing | shape data, order rule, play-through |
| Where does it live? (animal_habitats) | 3-6 | drag or tap an animal to its home (farm, sea, forest, sky, desert) | every animal has a home, rounds, wrong home gentle, play-through |
Common: star only on the first finish (GameRewards), no failure screen, ar/en, small phone at 1.6x text, small landscape, offline (no network code).
Art: drawn in code (emoji for animals/landmarks as in the existing vocabulary). Not "premium 3D" illustrations: that artwork does not exist yet.

## Audio engine (lib/media/rehlaty_audio_engine.dart)
Real: one line at a time (queue, interrupt, stop), parent switches, call/background silencing without auto-resume, per-character voice choice (Adam, Nour, companion) per language, approved dialogue catalogue (12 lines), speaker button on every game, parent screen.
NOT real: no human recordings of Adam/Nour/companion; voices are the phone's text-to-speech. No sound-effect files exist, so cues (roll, ladder...) are routed to the engine but nothing plays, and the engine says so. Pronunciation/dialect quality has not been listened to by a person.

## Motion system (lib/design/motion_system.dart)
Durations/curves in one place; AnimatedIconWrapper (float, breathe, wiggle), PressFeedback (also inside FocusableTap), AnimatedActionButton, AnimatedFeatureCard, AnimatedEntrance, AnimatedNavigationItem, AnimatedReward. Respects reduce-motion, stops when a page is covered, disposes controllers. Not measured on a low-end device.

## Video controls (lib/video_controls.dart)
Videos may carry `approval` (approved|pending|rejected); only approved ones, not hidden by the parent, reach a child. Parent screen lists all videos with age and status. NOT done: verification of any YouTube video (YouTube is unreachable from the build environment, so none was watched or embed-checked), new lessons, timestamps, the 1-6 age-group curriculum screens.

## Not started
World progression, companion character, weekly adventures, Adam/Nour teaching roles, everyday-life learning, Family Time, achievement museum.
