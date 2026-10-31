# World experience and visual identity: audit and plan (2026-10-30)

Method: counted real usage in the code (not a visual review of every screen on a device). Screens listed are the ones that exist as files; they were checked through the automated layout tests at 320, 360, 768 and 1280 px in Arabic and English, and the six games plus the Parent and entry screens were also looked at in a browser build. The rest were not looked at by a person in this pass.

## Findings
- 36 screen files, 53 files that use emoji. Emoji appear 847 times outside translation files.
- Emoji are used as real artwork in: vocabulary pictures (`library/vocab.dart` 125), story illustrations (`stories/story_extras.dart` 163, `story_data.dart`), journey content and lands (`journey/content.dart` 113, `lands.dart`), the Arabic letters picture words (`literacy/letters_data.dart` 108, `letters_game.dart`), stickers (24), the existing games (choice games 19, match pictures 9, where-animal 7, memory 6), family phrases and stickers (25), Creative Studio (about 25), the home map signs (5), quiz views and activity screens.
- The six new games no longer use emoji for artwork (illustrations in `lib/games/game_art.dart`, shown in `docs/screens/games_art_sheet.png`).
- Two palettes still coexist (`RC` for the child kit, `DS` for adult screens); the child home map uses a different style (houses on an island) from the games and the Parent area.
- Adam and Nour exist as cut-out images used on the Notification Center, banners and the entry screen; they do not yet appear in the games or the child home.

## Prioritised plan (not done unless marked)
1. DONE: six new games illustrated and verified at phone and landscape sizes.
2. Replace emoji artwork in the existing games and vocabulary with the same illustration system (largest visible win: the 22 animals, fruits, vehicles, objects).
3. Redraw the home map destinations (Games, Cartoons and Stories, Learn, Create, Rewards) as five distinct illustrated places instead of the same house shape with an emoji sign.
4. Use Adam and Nour inside the games and stories as the speaking characters (they now have voices in the engine).
5. Unify the RC and DS palettes.
6. Story art: replace emoji scenes with illustrated pages (needs an illustrator; the code-drawn system suits objects and animals, not whole scenes).

## Status of this phase
Audit written. Items 2-6 are NOT done: they are large visual-design tasks that need original artwork. No existing screen was changed in this phase beyond the six games, the engine and the settings screen.
