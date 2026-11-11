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

  /// For a rebuilt LEARNING game: the old game id, so its learning star and progress stay the same
  /// (`GameRewards`, `ProgressStore`). Null for the fun games (no learning stars).
  final String? learnId;
  const WebGame({required this.id, required this.folder, required this.global, required this.storeKey, required this.minAge, required this.title, this.learnId});

  bool get isLearning => learnId != null;

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

/// «مزرعتي السعيدة» (Happy Farm): the relaxing 3D combine-harvester farm (docs/HAPPY_FARM.md).
final WebGame kHappyFarm = WebGame(
  id: 'happy_farm',
  folder: 'happy_farm',
  global: 'HappyFarm',
  storeKey: 'happy_farm',
  minAge: 3,
  title: () => tr2('مزرعتي السعيدة', 'Happy Farm'),
);

/// «مخبز اليقطين» (Pumpkin Pie Maker): the cozy 3D pumpkin pie bakery (docs/PUMPKIN_PIE.md).
final WebGame kPumpkinPie = WebGame(
  id: 'pumpkin_pie',
  folder: 'pumpkin_pie',
  global: 'PumpkinPie',
  storeKey: 'pumpkin_pie',
  minAge: 3,
  title: () => tr2('مخبز اليقطين', 'Pumpkin Pie Maker'),
);

/// «سيف الساموراي» (Samurai Action): the cherry-blossom courtyard samurai (docs/SAMURAI_ACTION.md).
final WebGame kSamuraiAction = WebGame(
  id: 'samurai',
  folder: 'samurai',
  global: 'SamuraiAction',
  storeKey: 'samurai',
  minAge: 4,
  title: () => tr2('سيف الساموراي', 'Samurai Action'),
);

/// «مغامرة الذيل الذهبي» (Golden Tail Chase): the treetop chase with the plush dino (docs/GOLDEN_TAIL.md).
final WebGame kGoldenTail = WebGame(
  id: 'golden_tail',
  folder: 'golden_tail',
  global: 'GoldenTail',
  storeKey: 'golden_tail',
  minAge: 3,
  title: () => tr2('مغامرة الذيل الذهبي', 'Golden Tail Chase'),
);

/// «دفاع القلعة البحرية» (Ocean Defense): the clownfish guarding the coral fortress (docs/OCEAN_DEFENSE.md).
final WebGame kOceanDefense = WebGame(
  id: 'ocean_defense',
  folder: 'ocean_defense',
  global: 'OceanDefense',
  storeKey: 'ocean_defense',
  minAge: 3,
  title: () => tr2('دفاع القلعة البحرية', 'Ocean Defense'),
);

/// «سباق الدراجات النارية» (Motorcycle Racing): the coastal circuit with animal riders (docs/MOTO_RACE.md).
final WebGame kMotoRace = WebGame(
  id: 'moto_race',
  folder: 'moto_race',
  global: 'MotoRace',
  storeKey: 'moto_race',
  minAge: 3,
  title: () => tr2('سباق الدراجات النارية', 'Motorcycle Racing'),
);

/// «البقاء على الإيقاع» (Rhythm Survival): plush animals on a giant spinning record (docs/RHYTHM_SURVIVAL.md).
final WebGame kRhythmSurvival = WebGame(
  id: 'rhythm',
  folder: 'rhythm',
  global: 'RhythmSurvival',
  storeKey: 'rhythm',
  minAge: 3,
  title: () => tr2('البقاء على الإيقاع', 'Rhythm Survival'),
);

final List<WebGame> kWebGames = [kMotoRace, kCarnivalRace, kJungleAdventure, kHappyFarm, kPumpkinPie, kSamuraiAction, kGoldenTail, kOceanDefense, kRhythmSurvival, kSplashRace, kSpaceStore, kFoxFamily, kAirRace, kZombieRooftop, kGumBall, kDeepSea, kCoastalDrive, kHungryFrog, kFrostCoil, kSummitRush];

/// «متجر الفضاء الذكي» (Space Store Manager): a grocery store on a space station (docs/SPACE_STORE.md).
final WebGame kSpaceStore = WebGame(
  id: 'space_store',
  folder: 'space_store',
  global: 'SpaceStore',
  storeKey: 'space_store',
  minAge: 3,
  title: () => tr2('متجر الفضاء الذكي', 'Space Store Manager'),
);

/// «سباق السباحة العجيب» (Splash Race): the goggle-wearing otter's swimming obstacle race (docs/SPLASH_RACE.md).
final WebGame kSplashRace = WebGame(
  id: 'splash_race',
  folder: 'splash_race',
  global: 'SplashRace',
  storeKey: 'splash_race',
  minAge: 3,
  title: () => tr2('سباق السباحة العجيب', 'Splash Race'),
);

/// «أم الثعلب ومغامرات العيور» (Fox Family Rescue): hop a fox mother and her cubs home (docs/FOX_FAMILY.md).
final WebGame kFoxFamily = WebGame(
  id: 'fox_family',
  folder: 'fox_family',
  global: 'FoxFamily',
  storeKey: 'fox_family',
  minAge: 3,
  title: () => tr2('أم الثعلب ومغامرات العيور', 'Fox Family Rescue'),
);

/// «سباق الطائرات الجوي» (Airplane Racing): two laps above tropical islands against three rival planes (docs/AIR_RACE.md).
final WebGame kAirRace = WebGame(
  id: 'air_race',
  folder: 'air_race',
  global: 'AirRace',
  storeKey: 'air_race',
  minAge: 3,
  title: () => tr2('سباق الطائرات الجوي', 'Airplane Racing'),
);

/// «البقاء على قيد الحياة» (Zombie Rooftop Shooter): a cartoon fighter clears city rooftops of goofy zombies and leaps
/// from building to building (docs/ZOMBIE_ROOFTOP.md). Ages 4+, like the samurai game; nobody is hurt, no blood.
final WebGame kZombieRooftop = WebGame(
  id: 'zombie_rooftop',
  folder: 'zombie_rooftop',
  global: 'ZombieRooftop',
  storeKey: 'zombie_rooftop',
  minAge: 4,
  title: () => tr2('البقاء على قيد الحياة', 'Zombie Rooftop Shooter'),
);

/// «كرة العلكة العملاقة» (Gum Ball Roll): docs/GUM_BALL.md.
final WebGame kGumBall = WebGame(
  id: 'gum_ball',
  folder: 'gum_ball',
  global: 'GumBall',
  storeKey: 'gum_ball',
  minAge: 3,
  title: () => tr2('كرة العلكة العملاقة', 'Gum Ball Roll'),
);

/// «أسماك الأعماق» (Deep Sea Fish): docs/DEEP_SEA.md.
final WebGame kDeepSea = WebGame(
  id: 'deep_sea',
  folder: 'deep_sea',
  global: 'DeepSea',
  storeKey: 'deep_sea',
  minAge: 4,
  title: () => tr2('أسماك الأعماق', 'Deep Sea Fish'),
);

/// «سباق الطريق الساحلي» (Coastal Drive): docs/COASTAL_DRIVE.md.
final WebGame kCoastalDrive = WebGame(
  id: 'coastal_drive',
  folder: 'coastal_drive',
  global: 'CoastalDrive',
  storeKey: 'coastal_drive',
  minAge: 4,
  title: () => tr2('سباق الطريق الساحلي', 'Coastal Drive'),
);

/// «لعبة الضفدع الجائع» (Hungry Frog): docs/HUNGRY_FROG.md.
final WebGame kHungryFrog = WebGame(
  id: 'hungry_frog',
  folder: 'hungry_frog',
  global: 'HungryFrog',
  storeKey: 'hungry_frog',
  minAge: 3,
  title: () => tr2('لعبة الضفدع الجائع', 'Hungry Frog'),
);

/// «سباق القمة» (Summit Rush): a 3D race up a snowy mountain against three rivals, from the owner's video
/// (docs/SUMMIT_RUSH.md).
final WebGame kSummitRush = WebGame(
  id: 'summit_rush',
  folder: 'summit_rush',
  global: 'SummitRush',
  storeKey: 'summit_rush',
  minAge: 4,
  title: () => tr2('سباق القمة', 'Summit Rush'),
);

/// «طريق التنين الجليدي» (Frost Coil): a snowy ice-path puzzle, from the owner's video (docs/FROST_COIL.md).
final WebGame kFrostCoil = WebGame(
  id: 'frost_coil',
  folder: 'frost_coil',
  global: 'FrostCoil',
  storeKey: 'frost_coil',
  minAge: 4,
  title: () => tr2('طريق التنين الجليدي', 'Frost Coil'),
);

// ---- rebuilt learning games (docs/LEARNING_GAMES_REBUILD.md) ----------------------------------------------------------
// Same contract as the fun games, plus three messages: 'round' (one answer, for the parent dashboard), 'complete' (the
// set is finished: the learning star the first time) and 'speak' (a word said by the app's own voice).

/// «الفأر والجبنة» (Mouse and Cheese): a 3D toy-box hedge maze.
final WebGame kLearnMaze = WebGame(
  id: 'learn_maze',
  folder: 'learn_maze',
  global: 'LearnMaze',
  storeKey: 'learn_maze',
  minAge: 4,
  title: () => tr2('الفأر والجبنة', 'Mouse and Cheese'),
  learnId: 'maze',
);

/// «رتّب في مجموعات» (Sort into Groups): a 3D toy shop with a conveyor belt and baskets.
final WebGame kLearnSort = WebGame(
  id: 'learn_sort',
  folder: 'learn_sort',
  global: 'LearnSort',
  storeKey: 'learn_sort',
  minAge: 4,
  title: () => tr2('رتّب في مجموعات', 'Sort into Groups'),
  learnId: 'sort_groups',
);

/// Rebuilt learning games, by their old game id.
final Map<String, WebGame> kLearnWebGames = {for (final g in [kLearnMaze, kLearnSort]) g.learnId!: g};
