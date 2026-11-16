import 'package:flutter/material.dart';

import '../design/focusable_tap.dart';
import '../design/picture_stage.dart';
import '../journey/models.dart';
import '../media/page_voice.dart';
import '../l10n/strings.dart';
import 'web_games/web_game_screen.dart';

/// The first page of the Games tab (owner's picture, 2026-11-06): two big cards, «ألعاب تعليمية» (the ten-island hub) and
/// «ألعاب للتسلية» (the four fun games). The picture is shown whole; the two cards are large invisible buttons on it.
const String kGamesChoicePicture = 'assets/games/choice_scene.webp';
const double kGamesChoiceAspect = 1672 / 941;

class GamesChoiceScreen extends StatelessWidget {
  final VoidCallback onEducational;
  final VoidCallback onFun;

  /// The round arrow at the top of the page: back to the home tab.
  final VoidCallback? onBack;
  const GamesChoiceScreen({super.key, required this.onEducational, required this.onFun, this.onBack});

  @override
  Widget build(BuildContext context) {
    return PictureStage(
      key: const ValueKey('games_choice'),
      asset: kGamesChoicePicture,
      aspect: kGamesChoiceAspect,
      spots: [
        // the two cards of the picture (centre and size as fractions of it)
        PictureSpot(
          'choice_educational',
          const Offset(0.312, 0.655),
          0.325,
          0.46,
          tr2('ألعاب تعليمية', 'Learning games'),
          onEducational,
          radius: 36,
          key: const ValueKey('choice_educational'),
        ),
        PictureSpot(
          'choice_fun',
          const Offset(0.695, 0.655),
          0.335,
          0.46,
          tr2('ألعاب للتسلية', 'Fun games'),
          onFun,
          radius: 36,
          key: const ValueKey('choice_fun'),
        ),
      ],
      overlays: onBack == null
          ? null
          : (w, h) => [
              Positioned(
                left: 0.02 * w,
                top: 0.03 * h,
                width: (0.075 * w).clamp(44.0, 90.0),
                height: (0.075 * w).clamp(44.0, 90.0),
                child: FocusableTap(
                  key: const ValueKey('choice_back'),
                  onTap: onBack!,
                  radius: 40,
                  semanticLabel: tr2('رجوع', 'Back'),
                  child: Container(
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: const Color(0xFF7A3FE0),
                      border: Border.all(color: Colors.white, width: 3),
                      boxShadow: const [BoxShadow(color: Color(0x55000000), blurRadius: 6, offset: Offset(0, 3))],
                    ),
                    child: const Icon(Icons.arrow_back_rounded, color: Colors.white, size: 30),
                  ),
                ),
              ),
            ],
    );
  }
}

/// The owner's picture of the fun games page (2026-11-11, 1536 x 1024): the wooden sign, a back arrow and sixteen game
/// cards (Glowfair rally, jungle, farm, bakery, samurai / ocean defense, golden tail, rhythm survival, motorcycle racing,
/// splash race / space store manager, fox family rescue, airplane racing, zombie rooftop shooter, gum ball roll / a wide
/// deep sea fish card). It is shown whole; the arrow and the cards are large invisible buttons on it. A "more games"
/// button opens the second page (coastal drive and hungry frog). To change a page, replace its one file.
const String kFunGamesPicture = 'assets/games/fun_games_scene.webp';
const double kFunGamesAspect = 1536 / 1024;

/// The second page: the owner's own coastal drive and hungry frog cards (cut from the owner's pictures of 2026-11-11)
/// and a frost coil card made in the same style, on the softened page background with the same sign and back arrow.
const String kFunGamesMorePicture = 'assets/games/fun_games_more.webp';

void _openGame(BuildContext context, ChildProfile? child, WebGame game) {
  final age = child?.age ?? 6;
  if (age < game.minAge) {
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(tr2('اللعبة دي لما تكبر شوية!', 'This game is for a little later!'))));
    return;
  }
  Navigator.push(
    context,
    MaterialPageRoute<void>(
      builder: (_) => WebGameScreen(game: game, childId: child?.id, age: age, gender: child?.gender),
    ),
  );
}

PictureSpot _backSpot(BuildContext context, String id) => PictureSpot(
      id,
      const Offset(0.067, 0.083),
      0.085,
      0.125,
      tr2('رجوع', 'Back'),
      () => Navigator.maybePop(context),
      radius: 60,
      key: ValueKey(id),
    );

/// «ألعاب للتسلية»: the owner's picture with sixteen cards. A child younger than a game's [WebGame.minAge] gets a
/// friendly note instead of the game.
class FunGamesScreen extends StatefulWidget {
  /// The child playing (progress is kept per child). Null in old callers and tests.
  final ChildProfile? child;
  const FunGamesScreen({super.key, this.child});

  @override
  State<FunGamesScreen> createState() => _FunGamesScreenState();
}

class _FunGamesScreenState extends State<FunGamesScreen> {
  ChildProfile? get child => widget.child;

  @override
  void initState() {
    super.initState();
    // «هنلعب سوا النهارده», once the page is on screen
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (mounted) PageVoice.say(PageVoice.playToday);
    });
  }

  @override
  void dispose() {
    PageVoice.stop();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF8FD3FF),
      body: PictureStage(
        key: const ValueKey('fun_games_page'),
        asset: kFunGamesPicture,
        aspect: kFunGamesAspect,
        spots: [
          // the sixteen cards of the owner's picture (centre, width, height as fractions of it)
          for (final (id, game, cx, cy, w, hh) in <(String, WebGame, double, double, double, double)>[
            ('fun_carnival_race', kCarnivalRace, 0.112, 0.289, 0.19, 0.225),
            ('fun_jungle_adventure', kJungleAdventure, 0.306, 0.289, 0.185, 0.225),
            ('fun_happy_farm', kHappyFarm, 0.499, 0.289, 0.185, 0.225),
            ('fun_pumpkin_pie', kPumpkinPie, 0.694, 0.289, 0.185, 0.225),
            ('fun_samurai', kSamuraiAction, 0.892, 0.289, 0.19, 0.225),
            ('fun_ocean_defense', kOceanDefense, 0.112, 0.516, 0.19, 0.2),
            ('fun_golden_tail', kGoldenTail, 0.306, 0.516, 0.185, 0.2),
            ('fun_rhythm', kRhythmSurvival, 0.499, 0.516, 0.185, 0.2),
            ('fun_moto_race', kMotoRace, 0.694, 0.516, 0.185, 0.2),
            ('fun_splash_race', kSplashRace, 0.892, 0.516, 0.19, 0.2),
            ('fun_space_store', kSpaceStore, 0.112, 0.73, 0.19, 0.2),
            ('fun_fox_family', kFoxFamily, 0.306, 0.73, 0.185, 0.2),
            ('fun_airplane', kAirRace, 0.499, 0.73, 0.185, 0.2),
            ('fun_zombie_rooftop', kZombieRooftop, 0.694, 0.73, 0.185, 0.2),
            ('fun_gum_ball', kGumBall, 0.892, 0.73, 0.19, 0.2),
            ('fun_deep_sea', kDeepSea, 0.846, 0.909, 0.29, 0.155),
          ])
            PictureSpot(id, Offset(cx, cy), w, hh, game.title(), () => _openGame(context, child, game), radius: 40, key: ValueKey(id)),
          _backSpot(context, 'fun_back'),
        ],
        overlays: (w, h) => [
          // "more games": opens the second page (on the flowers at the bottom left, in the page's purple style)
          Positioned(
            left: 0.03 * w,
            top: 0.865 * h,
            width: 0.25 * w,
            height: 0.09 * h,
            child: FocusableTap(
              key: const ValueKey('fun_more'),
              onTap: () => Navigator.push(context, MaterialPageRoute<void>(builder: (_) => FunGamesMoreScreen(child: child))),
              radius: 60,
              semanticLabel: tr2('ألعاب أكتر', 'More games'),
              child: Container(
                alignment: Alignment.center,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(999),
                  gradient: const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF9A5AF0), Color(0xFF6A2AD0)]),
                  border: Border.all(color: const Color(0xFFFFD23A), width: 3),
                  boxShadow: const [BoxShadow(color: Color(0x66000000), blurRadius: 8, offset: Offset(0, 4))],
                ),
                child: FittedBox(
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 4),
                    child: Text(tr2('ألعاب أكتر ◀', 'More games ▶'), style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 26)),
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

/// The second page of fun games: Coastal Drive, Hungry Frog and Frost Coil.
class FunGamesMoreScreen extends StatelessWidget {
  final ChildProfile? child;
  const FunGamesMoreScreen({super.key, this.child});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF8FD3FF),
      body: PictureStage(
        key: const ValueKey('fun_games_more_page'),
        asset: kFunGamesMorePicture,
        aspect: kFunGamesAspect,
        spots: [
          // two rows of two (owner's cards for coastal drive and hungry frog; frost coil and summit rush made in code)
          PictureSpot('fun_coastal_drive', const Offset(0.344, 0.373), 0.2845, 0.367, kCoastalDrive.title(), () => _openGame(context, child, kCoastalDrive), radius: 36, key: const ValueKey('fun_coastal_drive')),
          PictureSpot('fun_hungry_frog', const Offset(0.6566, 0.373), 0.2845, 0.367, kHungryFrog.title(), () => _openGame(context, child, kHungryFrog), radius: 36, key: const ValueKey('fun_hungry_frog')),
          PictureSpot('fun_frost_coil', const Offset(0.344, 0.7695), 0.2845, 0.367, kFrostCoil.title(), () => _openGame(context, child, kFrostCoil), radius: 36, key: const ValueKey('fun_frost_coil')),
          PictureSpot('fun_summit_rush', const Offset(0.6566, 0.7695), 0.2845, 0.367, kSummitRush.title(), () => _openGame(context, child, kSummitRush), radius: 36, key: const ValueKey('fun_summit_rush')),
          _backSpot(context, 'fun_more_back'),
        ],
      ),
    );
  }
}
