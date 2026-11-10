import 'package:flutter/material.dart';

import '../design/focusable_tap.dart';
import '../design/picture_stage.dart';
import '../journey/models.dart';
import '../l10n/strings.dart';
import 'carnival_race/carnival_race_screen.dart';

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

/// The owner's picture behind the fun games page. To change it, replace the one file [kFunScenePicture].
const String kFunScenePicture = 'assets/games/fun_scene.webp';

/// The youngest age that sees «سباق الملاهي» (owner decision, 2026-11-10: ages 3-6; age 3 plays in easy mode).
const int kCarnivalRaceMinAge = 3;

/// «ألعاب للتسلية»: the owner's picture fills the whole page, with a back arrow and the fun games on top of it
/// (owner request 2026-11-10: the 3D carnival race). Children too young for every game here see a friendly line.
class FunGamesScreen extends StatelessWidget {
  /// The child playing (tickets and garage are kept per child). Null in old callers and tests.
  final ChildProfile? child;
  const FunGamesScreen({super.key, this.child});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        fit: StackFit.expand,
        children: [
          const ColoredBox(color: Color(0xFF58A8F2)),
          ExcludeSemantics(
            child: Image.asset(kFunScenePicture, key: const ValueKey('fun_scene'), fit: BoxFit.cover, errorBuilder: (_, _, _) => const SizedBox()),
          ),
          PositionedDirectional(
            top: 0,
            start: 0,
            child: SafeArea(
              child: Padding(
                padding: const EdgeInsets.all(12),
                child: FocusableTap(
                  key: const ValueKey('fun_back'),
                  onTap: () => Navigator.maybePop(context),
                  radius: 40,
                  semanticLabel: tr2('رجوع', 'Back'),
                  child: Container(
                    width: 56,
                    height: 56,
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
            ),
          ),
          if ((child?.age ?? 6) >= kCarnivalRaceMinAge)
            Center(
              child: SafeArea(
                child: _RaceCard(
                  onTap: () => Navigator.push(
                    context,
                    MaterialPageRoute<void>(
                      builder: (_) => CarnivalRaceScreen(childId: child?.id, age: child?.age ?? 6),
                    ),
                  ),
                ),
              ),
            )
          else
            Align(
              alignment: const Alignment(0, 0.88),
              child: SafeArea(
                child: Container(
                  key: const ValueKey('fun_empty'),
                  padding: const EdgeInsets.symmetric(horizontal: 26, vertical: 12),
                  decoration: BoxDecoration(
                    color: const Color(0xFF5B2BB8),
                    borderRadius: BorderRadius.circular(40),
                    border: Border.all(color: Colors.white, width: 3),
                    boxShadow: const [BoxShadow(color: Color(0x55000000), blurRadius: 8, offset: Offset(0, 4))],
                  ),
                  child: Text(
                    tr2('ألعاب جديدة جاية قريب', 'New games are coming soon'),
                    style: const TextStyle(fontFamily: 'Tajawal', fontSize: 22, fontWeight: FontWeight.w900, color: Colors.white),
                  ),
                ),
              ),
            ),
        ],
      ),
    );
  }
}

/// The owner's own card picture for «سباق ملاهي الأبطال» (2026-11-10), shown whole, exactly as designed.
const String kRaceCardPicture = 'assets/games/race_card.webp';

/// The card that opens the race: the owner's square picture, as big as fits (it is a large tap target).
class _RaceCard extends StatelessWidget {
  final VoidCallback onTap;
  const _RaceCard({required this.onTap});

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, box) {
        final side = [box.maxWidth * 0.84, box.maxHeight * 0.78, 520.0].reduce((a, b) => a < b ? a : b).clamp(200.0, 520.0);
        return FocusableTap(
          key: const ValueKey('fun_carnival_race'),
          onTap: onTap,
          radius: side * 0.1,
          semanticLabel: tr2('سباق ملاهي الأبطال', 'Glowfair Rally'),
          child: SizedBox(
            width: side,
            height: side,
            child: Image.asset(kRaceCardPicture, key: const ValueKey('race_card_picture'), fit: BoxFit.contain),
          ),
        );
      },
    );
  }
}
