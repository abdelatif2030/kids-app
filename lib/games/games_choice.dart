import 'package:flutter/material.dart';

import '../design/focusable_tap.dart';
import '../design/picture_stage.dart';
import '../l10n/strings.dart';

/// The first page of the Games tab (owner's picture, 2026-11-06): two big cards, «ألعاب تعليمية» (the ten-island hub) and
/// «ألعاب للتسلية» (the four fun games). The picture is shown whole; the two cards are large invisible buttons on it.
const String kGamesChoicePicture = 'assets/games/choice_scene.webp';
const double kGamesChoiceAspect = 1672 / 941;

class GamesChoiceScreen extends StatelessWidget {
  final VoidCallback onEducational;
  final VoidCallback onFun;

  /// The round arrow at the top of the page: back to the home tab.
  final VoidCallback? onBack;
  const GamesChoiceScreen({
    super.key,
    required this.onEducational,
    required this.onFun,
    this.onBack,
  });

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
                      boxShadow: const [
                        BoxShadow(
                          color: Color(0x55000000),
                          blurRadius: 6,
                          offset: Offset(0, 3),
                        ),
                      ],
                    ),
                    child: const Icon(
                      Icons.arrow_back_rounded,
                      color: Colors.white,
                      size: 30,
                    ),
                  ),
                ),
              ),
            ],
    );
  }
}

/// The owner's picture behind the (still empty) fun games page. To change it, replace the one file [kFunScenePicture].
const String kFunScenePicture = 'assets/games/fun_scene.webp';

/// «ألعاب للتسلية»: empty for now (owner decision, 2026-11-07). The owner's picture fills the whole page, with a friendly
/// line at the bottom and a back arrow; new fun games will be listed here later.
class FunGamesScreen extends StatelessWidget {
  const FunGamesScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        fit: StackFit.expand,
        children: [
          const ColoredBox(color: Color(0xFF58A8F2)),
          ExcludeSemantics(child: Image.asset(kFunScenePicture, key: const ValueKey('fun_scene'), fit: BoxFit.cover, errorBuilder: (_, _, _) => const SizedBox())),
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
                    decoration: BoxDecoration(shape: BoxShape.circle, color: const Color(0xFF7A3FE0), border: Border.all(color: Colors.white, width: 3), boxShadow: const [BoxShadow(color: Color(0x55000000), blurRadius: 6, offset: Offset(0, 3))]),
                    child: const Icon(Icons.arrow_back_rounded, color: Colors.white, size: 30),
                  ),
                ),
              ),
            ),
          ),
          Align(
            alignment: const Alignment(0, 0.88),
            child: SafeArea(
              child: Container(
                key: const ValueKey('fun_empty'),
                padding: const EdgeInsets.symmetric(horizontal: 26, vertical: 12),
                decoration: BoxDecoration(color: const Color(0xFF5B2BB8), borderRadius: BorderRadius.circular(40), border: Border.all(color: Colors.white, width: 3), boxShadow: const [BoxShadow(color: Color(0x55000000), blurRadius: 8, offset: Offset(0, 4))]),
                child: Text(tr2('ألعاب جديدة جاية قريب', 'New games are coming soon'), style: const TextStyle(fontFamily: 'Tajawal', fontSize: 22, fontWeight: FontWeight.w900, color: Colors.white)),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
