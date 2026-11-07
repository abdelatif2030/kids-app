import 'package:flutter/material.dart';

import '../../design/picture_stage.dart';
import '../../drawing_screen.dart';
import '../../l10n/app_locale.dart';
import '../../l10n/strings.dart';
import '../../studio/studio_screens.dart';
import '../models.dart';

/// «إبداع»: the owner's picture with two islands (2026-11-07): «رسم حر» opens the drawing pad and «استوديو الإبداع» the
/// creative studio. The picture is shown whole; the two islands and the round arrow are invisible buttons on it.
const String kCreatePicture = 'assets/home/create_scene.webp';
const double kCreateAspect = 1672 / 941;

class CreateChoiceScreen extends StatelessWidget {
  final ChildProfile child;

  /// The round arrow painted in the picture: back to the home tab.
  final VoidCallback? onBack;
  const CreateChoiceScreen({super.key, required this.child, this.onBack});

  @override
  Widget build(BuildContext context) {
    final ar = AppLocale.instance.isArabic;
    return PictureStage(
      key: const ValueKey('create_picture'),
      asset: kCreatePicture,
      aspect: kCreateAspect,
      showLabels: !ar,
      labels: [
        PictureNameLabel(const Offset(0.512, 0.235), 0.13, 0.085, tr2('إبداع', 'Create')),
        PictureNameLabel(const Offset(0.374, 0.655), 0.16, 0.07, tr2('رسم حر', 'Free drawing')),
        PictureNameLabel(const Offset(0.652, 0.655), 0.17, 0.07, tr2('استوديو الإبداع', 'Creative studio')),
      ],
      spots: [
        if (onBack != null) PictureSpot('back', const Offset(0.06, 0.08), 0.085, 0.15, tr2('رجوع', 'Back'), onBack!, radius: 44, key: const ValueKey('create_back')),
        PictureSpot('drawing', const Offset(0.374, 0.62), 0.25, 0.46, tr2('رسم حر', 'Free drawing'), () => Navigator.push(context, MaterialPageRoute<void>(builder: (_) => DrawingScreen(child: child))), radius: 40, key: const ValueKey('create_drawing')),
        PictureSpot('studio', const Offset(0.652, 0.62), 0.25, 0.46, tr2('استوديو الإبداع', 'Creative studio'), () => Navigator.push(context, MaterialPageRoute<void>(builder: (_) => StudioScreen(child: child))), radius: 40, key: const ValueKey('create_studio')),
      ],
    );
  }
}
