import 'package:flutter/material.dart';

import '../design/focusable_tap.dart';
import '../design/picture_stage.dart';
import '../journey/models.dart';
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

/// The owner's picture of the fun games page (2026-11-11, 1672 x 941): a wooden «ألعاب التسلية» sign, a back arrow
/// and five game cards («سباق ملاهي الأبطال», «مغامرة الأدغال», «مزرعتي السعيدة», «مخبز اليقطين», «سيف الساموراي»). It is shown whole; the arrow and the cards are
/// large invisible buttons on it, like the Games page. To change it, replace the one file.
const String kFunGamesPicture = 'assets/games/fun_games_scene.webp';
const double kFunGamesAspect = 1672 / 941;

/// «ألعاب للتسلية»: the owner's picture with two cards. A child younger than a game's [WebGame.minAge] gets a friendly
/// note instead of the game.
class FunGamesScreen extends StatelessWidget {
  /// The child playing (progress is kept per child). Null in old callers and tests.
  final ChildProfile? child;
  const FunGamesScreen({super.key, this.child});

  void _open(BuildContext context, WebGame game) {
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

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF8FD3FF),
      body: PictureStage(
        key: const ValueKey('fun_games_page'),
        asset: kFunGamesPicture,
        aspect: kFunGamesAspect,
        spots: [
          // the seven cards of the owner's picture (centre and size as fractions of it); a card whose game is
          // still being built says so
          for (final (id, game, ar, en, cx, cy, w) in <(String, WebGame?, String, String, double, double, double)>[
            ('fun_carnival_race', kCarnivalRace, '', '', 0.144, 0.404, 0.23),
            ('fun_jungle_adventure', kJungleAdventure, '', '', 0.381, 0.404, 0.22),
            ('fun_happy_farm', kHappyFarm, '', '', 0.614, 0.404, 0.22),
            ('fun_pumpkin_pie', kPumpkinPie, '', '', 0.854, 0.404, 0.23),
            ('fun_samurai', kSamuraiAction, 'سيف الساموراي', 'Samurai Action', 0.182, 0.760, 0.28),
            ('fun_golden_tail', kGoldenTail, 'مغامرة الذيل الذهبي', 'Golden Tail Chase', 0.465, 0.760, 0.26),
            ('fun_ocean_defense', null, 'دفاع القلعة البحرية', 'Ocean Defense', 0.787, 0.760, 0.36),
          ])
            PictureSpot(
              id,
              Offset(cx, cy),
              w,
              0.34,
              game?.title() ?? tr2(ar, en),
              game != null
                  ? () => _open(context, game)
                  : () => ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(tr2('اللعبة دي جاية قريب!', 'This game is coming soon!')))),
              radius: 40,
              key: ValueKey(id),
            ),
          PictureSpot(
            'fun_back',
            const Offset(0.061, 0.094),
            0.08,
            0.14,
            tr2('رجوع', 'Back'),
            () => Navigator.maybePop(context),
            radius: 60,
            key: const ValueKey('fun_back'),
          ),
        ],
      ),
    );
  }
}
