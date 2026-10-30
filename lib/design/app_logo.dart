import 'package:flutter/material.dart';

import '../l10n/strings.dart';
import '../ui.dart' show Mascot;

/// The Rehlaty logo (two children jumping over an open book, with the name). One place to use it, with a spoken label
/// and a safe fallback to the drawn mascot if the file is ever missing.
class AppLogo extends StatelessWidget {
  final double width;
  const AppLogo({super.key, this.width = 260});

  static const asset = 'assets/branding/logo.png';

  @override
  Widget build(BuildContext context) {
    return Semantics(
      label: tr2('شعار رحلتي', 'Rehlaty logo'),
      image: true,
      child: ExcludeSemantics(
        child: Image.asset(
          asset,
          key: const ValueKey('app_logo'),
          width: width,
          fit: BoxFit.contain,
          filterQuality: FilterQuality.high,
          errorBuilder: (context, error, stack) => Mascot(size: width * 0.6),
        ),
      ),
    );
  }
}
