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
  title: () => tr2('عربيات الملاهي', 'Funfair Cars'),
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
  title: () => tr2('سباق الموتوسيكل', 'Motorbike Race'),
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

final List<WebGame> kWebGames = [kMotoRace, kCarnivalRace, kJungleAdventure, kHappyFarm, kPumpkinPie, kSamuraiAction, kGoldenTail, kOceanDefense, kRhythmSurvival, kSplashRace, kSpaceStore, kFoxFamily, kAirRace, kZombieRooftop, kGumBall, kDeepSea, kCoastalDrive, kHungryFrog, kFrostCoil, kSummitRush, kHeroTower, kCloudDash, kSkyCapy, kMarbleDozer, kDuneTitans, kCastawayRaft, kWinterCamp, kRainCircuit, kSquadShooter, kArcherBridge, kAlienSky, kRhinoSummit, kSunsetHighway, kCreatorTycoon, kPearlDivers, kHoneyFarm, kIceDragon, kBallScoop, kHamsterWarrior, kChompMaze, kFizzRunner, kHotSpring, kHopWorld, kMarsFarm, kPinPuzzle, kGemQuarry, kSkyAce, kNutmegRush, kTrickOrTreat, kVikingSling, kCardBattle, kDinoGrow, kIceRink, kTombPuzzle, kSweetTray, kBarrelKnights, kGummySquad, kFashionQueen, kRugCleaning, kTempleArmy, kSkyJumper, kGirlsWorld];

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
  title: () => tr2('عربيات الشاطئ', 'Beach Cars'),
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

/// «برج الأبطال» (Hero Tower): a tower-climbing power puzzle, from the owner's video (docs/HERO_TOWER.md).
final WebGame kHeroTower = WebGame(
  id: 'hero_tower',
  folder: 'hero_tower',
  global: 'HeroTower',
  storeKey: 'hero_tower',
  minAge: 4,
  title: () => tr2('برج الأبطال', 'Hero Tower'),
);

/// «ركضة السحاب» (Cloud Dash): a 3D pastel cloud runner, from the owner's video (docs/CLOUD_DASH.md).
final WebGame kCloudDash = WebGame(
  id: 'cloud_dash',
  folder: 'cloud_dash',
  global: 'CloudDash',
  storeKey: 'cloud_dash',
  minAge: 3,
  title: () => tr2('ركضة السحاب', 'Cloud Dash'),
);

/// «سكاي كابي» (SKY CAPY): a top-down bubble shoot-'em-up with a capybara pilot, from the owner's video (docs/SKY_CAPY.md).
final WebGame kSkyCapy = WebGame(
  id: 'sky_capy',
  folder: 'sky_capy',
  global: 'SkyCapy',
  storeKey: 'sky_capy',
  minAge: 4,
  title: () => tr2('سكاي كابي', 'SKY CAPY'),
);

/// «جرّافة الكرات» (Marble Dozer): a physics puzzle, from the owner's video (docs/MARBLE_DOZER.md).
final WebGame kMarbleDozer = WebGame(
  id: 'marble_dozer',
  folder: 'marble_dozer',
  global: 'MarbleDozer',
  storeKey: 'marble_dozer',
  minAge: 4,
  title: () => tr2('جرّافة الكرات', 'Marble Dozer'),
);

/// «تيتان الكثبان» (Dune Titans): 3D desert truck race, from the owner's video (docs/DUNE_TITANS.md).
final WebGame kDuneTitans = WebGame(
  id: 'dune_titans',
  folder: 'dune_titans',
  global: 'DuneTitans',
  storeKey: 'dune_titans',
  minAge: 4,
  title: () => tr2('عربيات الصحرا', 'Desert Trucks'),
);

/// «طوف الناجي» (Castaway Raft): ocean survival with a hook, from the owner's video (docs/CASTAWAY_RAFT.md).
final WebGame kCastawayRaft = WebGame(
  id: 'castaway_raft',
  folder: 'castaway_raft',
  global: 'CastawayRaft',
  storeKey: 'castaway_raft',
  minAge: 4,
  title: () => tr2('طوف الناجي', 'Castaway Raft'),
);

/// «معسكر الشتاء» (Winter Camp): cozy idle-tycoon in a snowy forest (docs/WINTER_CAMP.md).
final WebGame kWinterCamp = WebGame(
  id: 'winter_camp',
  folder: 'winter_camp',
  global: 'WinterCamp',
  storeKey: 'winter_camp',
  minAge: 4,
  title: () => tr2('معسكر الشتاء', 'Winter Camp'),
);

/// «سباق حلبة المطر» (Rain Circuit): 3-lap wet-road car race with five rivals (docs/RAIN_CIRCUIT.md).
final WebGame kRainCircuit = WebGame(
  id: 'rain_circuit',
  folder: 'rain_circuit',
  global: 'RainCircuit',
  storeKey: 'rain_circuit',
  minAge: 4,
  title: () => tr2('سباق المطر', 'Rain Race'),
);

/// «فرقة الجنود» (Squad Shooter): 3D night-road lane shooter (docs/LANE_SHOOTERS.md).
final WebGame kSquadShooter = WebGame(
  id: 'squad_shooter',
  folder: 'squad_shooter',
  global: 'SquadShooter',
  storeKey: 'squad_shooter',
  minAge: 4,
  title: () => tr2('فرقة الجنود', 'Squad Shooter'),
);

/// «رماة الجسر» (Archer Bridge): 3D lane shooter over lava, same engine as the squad shooter.
final WebGame kArcherBridge = WebGame(
  id: 'archer_bridge',
  folder: 'archer_bridge',
  global: 'ArcherBridge',
  storeKey: 'archer_bridge',
  minAge: 4,
  title: () => tr2('رماة الجسر', 'Archer Bridge'),
);

/// «سباق السماء الغريبة» (Alien Sky Race): 3D obstacle race with a jetpack (docs/COURSE_RACES.md).
final WebGame kAlienSky = WebGame(
  id: 'alien_sky',
  folder: 'alien_sky',
  global: 'AlienSky',
  storeKey: 'alien_sky',
  minAge: 4,
  title: () => tr2('سباق السماء الغريبة', 'Alien Sky Race'),
);

/// «سباق القمة» (Summit Race): 3D obstacle race for a helmeted rhino, same engine as the alien race.
final WebGame kRhinoSummit = WebGame(
  id: 'rhino_summit',
  folder: 'rhino_summit',
  global: 'RhinoSummit',
  storeKey: 'rhino_summit',
  minAge: 4,
  title: () => tr2('سباق القمة', 'Summit Race'),
);

/// «طريق الغروب» (Sunset Highway): 3D coastal highway traffic race (docs/SUNSET_HIGHWAY.md).
final WebGame kSunsetHighway = WebGame(
  id: 'sunset_highway',
  folder: 'sunset_highway',
  global: 'SunsetHighway',
  storeKey: 'sunset_highway',
  minAge: 4,
  title: () => tr2('طريق الغروب', 'Sunset Highway'),
);

/// «مبدع الذكاء» (AI Creator).
final WebGame kCreatorTycoon = WebGame(
  id: 'creator_tycoon',
  folder: 'creator_tycoon',
  global: 'CreatorTycoon',
  storeKey: 'creator_tycoon',
  minAge: 4,
  title: () => tr2('مبدع الذكاء', 'AI Creator'),
);

/// «غوّاصو اللؤلؤ» (Pearl Divers).
final WebGame kPearlDivers = WebGame(
  id: 'pearl_divers',
  folder: 'pearl_divers',
  global: 'PearlDivers',
  storeKey: 'pearl_divers',
  minAge: 4,
  title: () => tr2('غوّاصو اللؤلؤ', 'Pearl Divers'),
);

/// «مزرعة العسل» (Honey Farm).
final WebGame kHoneyFarm = WebGame(
  id: 'honey_farm',
  folder: 'honey_farm',
  global: 'HoneyFarm',
  storeKey: 'honey_farm',
  minAge: 4,
  title: () => tr2('مزرعة العسل', 'Honey Farm'),
);

/// «تنين الجليد» (Ice Dragon).
final WebGame kIceDragon = WebGame(
  id: 'ice_dragon',
  folder: 'ice_dragon',
  global: 'IceDragon',
  storeKey: 'ice_dragon',
  minAge: 4,
  title: () => tr2('تنين الجليد', 'Ice Dragon'),
);

/// «شاحنة الكور» (Ball Scoop).
final WebGame kBallScoop = WebGame(
  id: 'ball_scoop',
  folder: 'ball_scoop',
  global: 'BallScoop',
  storeKey: 'ball_scoop',
  minAge: 4,
  title: () => tr2('شاحنة الكور', 'Ball Scoop'),
);

/// «الهامستر المحارب» (Hamster Warrior).
final WebGame kHamsterWarrior = WebGame(
  id: 'hamster_warrior',
  folder: 'hamster_warrior',
  global: 'HamsterWarrior',
  storeKey: 'hamster_warrior',
  minAge: 4,
  title: () => tr2('الهامستر المحارب', 'Hamster Warrior'),
);

/// «الأكول» (Chomp Maze).
final WebGame kChompMaze = WebGame(
  id: 'chomp_maze',
  folder: 'chomp_maze',
  global: 'ChompMaze',
  storeKey: 'chomp_maze',
  minAge: 4,
  title: () => tr2('الأكول', 'Chomp Maze'),
);

/// «فيزمان» (Fizz Man).
final WebGame kFizzRunner = WebGame(
  id: 'fizz_runner',
  folder: 'fizz_runner',
  global: 'FizzRunner',
  storeKey: 'fizz_runner',
  minAge: 4,
  title: () => tr2('فيزمان', 'Fizz Man'),
);

/// «ينابيع القرية» (Hot Spring Village).
final WebGame kHotSpring = WebGame(
  id: 'hot_spring',
  folder: 'hot_spring',
  global: 'HotSpring',
  storeKey: 'hot_spring',
  minAge: 4,
  title: () => tr2('ينابيع القرية', 'Hot Spring Village'),
);

/// «عالم القفز» (Hop World).
final WebGame kHopWorld = WebGame(
  id: 'hop_world',
  folder: 'hop_world',
  global: 'HopWorld',
  storeKey: 'hop_world',
  minAge: 4,
  title: () => tr2('عالم القفز', 'Hop World'),
);

/// «مزرعة المريخ» (Mars Farm Colony).
final WebGame kMarsFarm = WebGame(
  id: 'mars_farm',
  folder: 'mars_farm',
  global: 'MarsFarm',
  storeKey: 'mars_farm',
  minAge: 4,
  title: () => tr2('مزرعة المريخ', 'Mars Farm Colony'),
);

/// «اسحب الدبوس» (Pull the Pin).
final WebGame kPinPuzzle = WebGame(
  id: 'pin_puzzle',
  folder: 'pin_puzzle',
  global: 'PinPuzzle',
  storeKey: 'pin_puzzle',
  minAge: 4,
  title: () => tr2('اسحب الدبوس', 'Pull the Pin'),
);

/// «محجر الجواهر» (Gemlode Quarry).
final WebGame kGemQuarry = WebGame(
  id: 'gem_quarry',
  folder: 'gem_quarry',
  global: 'GemQuarry',
  storeKey: 'gem_quarry',
  minAge: 4,
  title: () => tr2('محجر الجواهر', 'Gemlode Quarry'),
);

/// «طيار السحاب» (Sky Ace).
final WebGame kSkyAce = WebGame(
  id: 'sky_ace',
  folder: 'sky_ace',
  global: 'SkyAce',
  storeKey: 'sky_ace',
  minAge: 4,
  title: () => tr2('طيار السحاب', 'Sky Ace'),
);

/// «سكة الكورة» (Nutmeg Rush).
final WebGame kNutmegRush = WebGame(
  id: 'nutmeg_rush',
  folder: 'nutmeg_rush',
  global: 'NutmegRush',
  storeKey: 'nutmeg_rush',
  minAge: 4,
  title: () => tr2('سكة الكورة', 'Nutmeg Rush'),
);

/// «حلاوة ولا مقلب» (Trick or Treat Crowd).
final WebGame kTrickOrTreat = WebGame(
  id: 'trick_or_treat',
  folder: 'trick_or_treat',
  global: 'TrickOrTreat',
  storeKey: 'trick_or_treat',
  minAge: 4,
  title: () => tr2('حلاوة ولا مقلب', 'Trick or Treat Crowd'),
);

/// «مقلاع الفايكنج» (Viking Slingshot).
final WebGame kVikingSling = WebGame(
  id: 'viking_sling',
  folder: 'viking_sling',
  global: 'VikingSling',
  storeKey: 'viking_sling',
  minAge: 4,
  title: () => tr2('مقلاع الفايكنج', 'Viking Slingshot'),
);

/// «معركة الكروت النيون» (Neon Card Battle).
final WebGame kCardBattle = WebGame(
  id: 'card_battle',
  folder: 'card_battle',
  global: 'CardBattle',
  storeKey: 'card_battle',
  minAge: 4,
  title: () => tr2('معركة الكروت النيون', 'Neon Card Battle'),
);

/// «ديناصور صغير يكبر» (Dino Grow).
final WebGame kDinoGrow = WebGame(
  id: 'dino_grow',
  folder: 'dino_grow',
  global: 'DinoGrow',
  storeKey: 'dino_grow',
  minAge: 4,
  title: () => tr2('ديناصور صغير يكبر', 'Dino Grow'),
);

/// «معركة حلبة الجليد» (Ice Rink Brawl).
final WebGame kIceRink = WebGame(
  id: 'ice_rink',
  folder: 'ice_rink',
  global: 'IceRink',
  storeKey: 'ice_rink',
  minAge: 4,
  title: () => tr2('معركة حلبة الجليد', 'Ice Rink Brawl'),
);

/// «لغز المقبرة» (Tomb Puzzle).
final WebGame kTombPuzzle = WebGame(
  id: 'tomb_puzzle',
  folder: 'tomb_puzzle',
  global: 'TombPuzzle',
  storeKey: 'tomb_puzzle',
  minAge: 4,
  title: () => tr2('لغز المقبرة', 'Tomb Puzzle'),
);

/// «طبق الحلويات» (Sweet Tray).
final WebGame kSweetTray = WebGame(
  id: 'sweet_tray',
  folder: 'sweet_tray',
  global: 'SweetTray',
  storeKey: 'sweet_tray',
  minAge: 4,
  title: () => tr2('طبق الحلويات', 'Sweet Tray'),
);

/// «فرسان البرميل» (Barrel Knights).
final WebGame kBarrelKnights = WebGame(
  id: 'barrel_knights',
  folder: 'barrel_knights',
  global: 'BarrelKnights',
  storeKey: 'barrel_knights',
  minAge: 4,
  title: () => tr2('فرسان البرميل', 'Barrel Knights'),
);

/// «فرقة الدببة الجيلي» (Gummy Squad).
final WebGame kGummySquad = WebGame(
  id: 'gummy_squad',
  folder: 'gummy_squad',
  global: 'GummySquad',
  storeKey: 'gummy_squad',
  minAge: 4,
  title: () => tr2('فرقة الدببة الجيلي', 'Gummy Squad'),
);

/// «ملكة الموضة» (Fashion Queen).
final WebGame kFashionQueen = WebGame(
  id: 'fashion_queen',
  folder: 'fashion_queen',
  global: 'FashionQueen',
  storeKey: 'fashion_queen',
  minAge: 4,
  title: () => tr2('ملكة الموضة', 'Fashion Queen'),
);

/// «تنظيف السجاد» (Rug Cleaning).
final WebGame kRugCleaning = WebGame(
  id: 'rug_cleaning',
  folder: 'rug_cleaning',
  global: 'RugCleaning',
  storeKey: 'rug_cleaning',
  minAge: 4,
  title: () => tr2('تنظيف السجاد', 'Rug Cleaning'),
);

/// «جيش المعبد» (Temple Army).
final WebGame kTempleArmy = WebGame(
  id: 'temple_army',
  folder: 'temple_army',
  global: 'TempleArmy',
  storeKey: 'temple_army',
  minAge: 4,
  title: () => tr2('جيش المعبد', 'Temple Army'),
);

/// «النطاط» (Sky Jumper).
final WebGame kSkyJumper = WebGame(
  id: 'sky_jumper',
  folder: 'sky_jumper',
  global: 'SkyJumper',
  storeKey: 'sky_jumper',
  minAge: 4,
  title: () => tr2('النطاط', 'Sky Jumper'),
);

/// «عالم الأميرة» (Princess World): the five girls' games for ages 2-4 as ONE game with five levels (owner 2026-11-22). Interactive music, no voice.
final WebGame kGirlsWorld = WebGame(
  id: 'girls_world',
  folder: 'girls_world',
  global: 'PrincessWorld',
  storeKey: 'girls_world',
  minAge: 2,
  title: () => tr2('عالم الأميرة', 'Princess World'),
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

/// «كنز الجزيرة» (Island Treasure): a 3D island map with a parrot's clues.
final WebGame kLearnTreasure = WebGame(
  id: 'learn_treasure',
  folder: 'learn_treasure',
  global: 'LearnTreasure',
  storeKey: 'learn_treasure',
  minAge: 4,
  title: () => tr2('كنز الجزيرة', 'Island Treasure'),
  learnId: 'treasure_hunt',
);

/// «رتّب يومي» (Arrange My Day): picture cards on a clothesline, the sky follows the day.
final WebGame kLearnDay = WebGame(
  id: 'learn_day',
  folder: 'learn_day',
  global: 'LearnDay',
  storeKey: 'learn_day',
  minAge: 3,
  title: () => tr2('رتّب يومي', 'Arrange My Day'),
  learnId: 'next_in_day',
);

/// «السلالم والزلاجات» (Ladders & Slides): a 3D playground board, a giant die, counting out loud.
final WebGame kLearnLadders = WebGame(
  id: 'learn_ladders',
  folder: 'learn_ladders',
  global: 'LearnLadders',
  storeKey: 'learn_ladders',
  minAge: 3,
  title: () => tr2('السلالم والزلاجات', 'Ladders & Slides'),
  learnId: 'snakes_ladders',
);

/// «فين الكورة؟» (Where Is the Ball?): a 3D playroom, a puppy, on / under / next to / inside.
final WebGame kLearnBall = WebGame(
  id: 'learn_ball',
  folder: 'learn_ball',
  global: 'LearnBall',
  storeKey: 'learn_ball',
  minAge: 3,
  title: () => tr2('فين الكورة؟', 'Where Is the Ball?'),
  learnId: 'where_ball',
);

/// «كمّل النمط» (Complete the Pattern): glossy beads on a string, the voice names each colour and shape.
final WebGame kLearnPattern = WebGame(
  id: 'learn_pattern',
  folder: 'learn_pattern',
  global: 'LearnPattern',
  storeKey: 'learn_pattern',
  minAge: 3,
  title: () => tr2('كمّل النمط', 'Complete the Pattern'),
  learnId: 'pattern',
);

/// «صيد الحروف» (Letter Fishing): things that start with each letter float on rafts holding the letter.
final WebGame kLearnLetters = WebGame(
  id: 'learn_letters',
  folder: 'learn_letters',
  global: 'LearnLetters',
  storeKey: 'learn_letters',
  minAge: 3,
  title: () => tr2('صيد الحروف', 'Letter Fishing'),
  learnId: 'letter_fishing',
);

/// «الحساب والعدّ» (Counting at the Market): get N apples counted aloud, and count what is in the basket.
final WebGame kLearnCounting = WebGame(
  id: 'learn_counting',
  folder: 'learn_counting',
  global: 'LearnCounting',
  storeKey: 'learn_counting',
  minAge: 3,
  title: () => tr2('الحساب والعدّ', 'Counting at the Market'),
  learnId: 'math',
);

/// «أين الشكل؟» (Find the Shape): a shape-sorter board; names and colours of shapes.
final WebGame kLearnShapes = WebGame(
  id: 'learn_shapes',
  folder: 'learn_shapes',
  global: 'LearnShapes',
  storeKey: 'learn_shapes',
  minAge: 3,
  title: () => tr2('أين الشكل؟', 'Find the Shape'),
  learnId: 'shape_finder',
);

/// «أطعم الحيوان» (Feed the Animal): which food each animal eats.
final WebGame kLearnAnimals = WebGame(
  id: 'learn_animals',
  folder: 'learn_animals',
  global: 'LearnAnimals',
  storeKey: 'learn_animals',
  minAge: 3,
  title: () => tr2('أطعم الحيوان', 'Feed the Animal'),
  learnId: 'feed_animal',
);

/// Rebuilt learning games, by their old game id.
final Map<String, WebGame> kLearnWebGames = {for (final g in [kLearnMaze, kLearnSort, kLearnTreasure, kLearnDay, kLearnLadders, kLearnBall, kLearnPattern, kLearnLetters, kLearnCounting, kLearnShapes, kLearnAnimals]) g.learnId!: g};

/// Lets the screen ask the running game page to step back INSIDE the game first (owner 2026-11-22): the view sets [tryBack] while it is alive.
/// It answers true when the page handled it (paused, returned to the game's menu or level list) and false when the game is at its main menu.
class WebGameBridge {
  static Future<bool> Function()? tryBack;
}
