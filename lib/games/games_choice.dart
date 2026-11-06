import 'package:flutter/material.dart';

import '../design/focusable_tap.dart';
import '../design/picture_stage.dart';
import '../l10n/strings.dart';

/// The first page of the Games tab (owner's picture, 2026-11-06): two big cards, «ألعاب تعليمية» (the ten-island hub) and
/// «ألعاب للتسلية» (the four fun games). The picture is shown whole; the two cards are large invisible buttons on it.
const String kGamesChoicePicture = 'assets/games/choice_scene.jpg';
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
