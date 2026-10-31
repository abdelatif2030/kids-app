# Rehlaty — games

20 learning games in `kEducationalGames` (`lib/games/game_catalog.dart`), each with an age range, a first-completion star (`GameRewards`, once per child per game),
a leave-confirmation when half played, a speaker button read by the child's guide, and a finish panel with the companion bubble on the first finish.

The six polished games (ladders and slides 4-6, puzzle picture 3-6, mouse and cheese 4-6, island treasure 4-6, connect the dots 3-6, where does it live 3-6) have pure logic
(`adventure_logic.dart`: perfect-maze generation and solving, a treasure map whose clues are all true with a unique answer, jigsaw, snakes board) with unit tests, and
code-drawn art (`game_art.dart`). Browser screenshots at 360x640 and 844x390 are in `docs/screens/`. Not tested on a real touch device.

Honest limits: art is vector drawing, not illustrator work; tracing games validate only a right-to-left cue, not stroke order; sounds are silent (no files).
