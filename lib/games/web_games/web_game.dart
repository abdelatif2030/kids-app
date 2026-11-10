import '../../l10n/strings.dart';

/// A fun game written for the browser (canvas / WebGL) and bundled with the app in `assets/games/<folder>/`:
/// `index.html` + `boot.js` (the phone/tablet built-in browser view) and `game.js` (the game; on the web it runs right
/// inside the page). Every game answers the same small contract: `window.<global>.start(div, config, post)` and, in the
/// built-in view, `crStart(config)`, `crPause()`, `crStop()` and the `RehlatyRace` message channel (save, exit).
class WebGame {
  final String id;
  final String folder;

  /// The JavaScript object the game's bundle puts on `window`.
  final String global;

  /// shared_preferences key holding this game's progress, one entry per child.
  final String storeKey;
  final int minAge;
  final String Function() title;
  const WebGame({required this.id, required this.folder, required this.global, required this.storeKey, required this.minAge, required this.title});

  String get page => 'assets/games/$folder/index.html';
  String get bundle => 'assets/games/$folder/game.js';
  String get base => 'assets/games/$folder/';
}

/// «سباق ملاهي الأبطال» (Glowfair Rally): the 3D carnival bumper-car race (docs/CARNIVAL_RACE.md).
final WebGame kCarnivalRace = WebGame(
  id: 'carnival_race',
  folder: 'carnival_race',
  global: 'CarnivalRace',
  storeKey: 'carnival_race',
  minAge: 3,
  title: () => tr2('سباق ملاهي الأبطال', 'Glowfair Rally'),
);

/// «مغامرة الأدغال» (Jungle Adventure): the 2D explorer auto-runner (docs/JUNGLE_ADVENTURE.md).
final WebGame kJungleAdventure = WebGame(
  id: 'jungle_adventure',
  folder: 'jungle_adventure',
  global: 'JungleAdventure',
  storeKey: 'jungle_adventure',
  minAge: 3,
  title: () => tr2('مغامرة الأدغال', 'Jungle Adventure'),
);

final List<WebGame> kWebGames = [kCarnivalRace, kJungleAdventure];
