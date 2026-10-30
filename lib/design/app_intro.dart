import 'package:flutter/material.dart';

import '../l10n/strings.dart';
import 'app_logo.dart';
import 'motion.dart';
import 'worlds.dart';

/// The first moment of the app: the mascot pops in over the sky, the name fades in under it, then the app opens (about
/// 1.6 seconds; a tap opens it at once). Shown once per run, never with reduced motion, and never under a test binding.
/// It does not wait for anything: the app behind it is already built.
class AppIntro extends StatefulWidget {
  final Widget child;
  const AppIntro({super.key, required this.child});

  /// Tests set this to true to see the intro; otherwise it is skipped under a test binding.
  static bool? forceShow;
  static bool _shown = false;

  /// For tests: forget that the intro was shown in this run.
  static void resetForTest() => _shown = false;

  @override
  State<AppIntro> createState() => _AppIntroState();
}

class _AppIntroState extends State<AppIntro> with SingleTickerProviderStateMixin {
  AnimationController? _c;
  bool _done = true;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (_c != null || AppIntro._shown) return;
    final underTest = WidgetsBinding.instance.runtimeType.toString().contains('Test');
    if (!(AppIntro.forceShow ?? !underTest) || motionReduced(context)) return;
    AppIntro._shown = true;
    _done = false;
    _c = AnimationController(vsync: this, duration: const Duration(milliseconds: 1600))
      ..addStatusListener((s) {
        if (s == AnimationStatus.completed && mounted) setState(() => _done = true);
      })
      ..forward();
  }

  @override
  void dispose() {
    _c?.dispose();
    super.dispose();
  }

  void _skip() {
    if (!_done) setState(() => _done = true);
  }

  @override
  Widget build(BuildContext context) {
    final c = _c;
    return Stack(
      fit: StackFit.expand,
      children: [
        widget.child,
        if (!_done && c != null)
          Positioned.fill(
            child: GestureDetector(
              behavior: HitTestBehavior.opaque,
              onTap: _skip,
              child: Semantics(
                label: tr2('رحلتي', 'Rehlaty'),
                child: WorldBackground(
                  world: RWorld.journey,
                  child: Center(
                    child: AnimatedBuilder(
                      animation: c,
                      builder: (context, _) {
                        final pop = Curves.elasticOut.transform((c.value / 0.55).clamp(0.0, 1.0));
                        final name = Curves.easeOut.transform(((c.value - 0.35) / 0.35).clamp(0.0, 1.0));
                        final out = 1 - Curves.easeIn.transform(((c.value - 0.85) / 0.15).clamp(0.0, 1.0));
                        return Opacity(
                          opacity: out,
                          child: Transform.scale(
                            scale: 0.7 + 0.3 * pop,
                            child: Opacity(opacity: (0.35 + 0.65 * name).clamp(0.0, 1.0), child: const AppLogo(width: 300)),
                          ),
                        );
                      },
                    ),
                  ),
                ),
              ),
            ),
          ),
      ],
    );
  }
}
