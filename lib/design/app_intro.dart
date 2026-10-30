import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'app_logo.dart';
import 'motion.dart';
import 'worlds.dart';

/// The first two seconds of the app, made in code (no video file, nothing to download): the two children over the book pop in,
/// the Arabic name «رحلتي» appears, then the English name «Rehlaty», a few stars twinkle, and the app opens.
/// A tap opens it at once. Shown once per run, never with reduced motion, and never under a test binding.
/// It does not wait for anything: the app behind it is already built.
class AppIntro extends StatefulWidget {
  final Widget child;
  const AppIntro({super.key, required this.child});

  /// The length of the intro.
  static const duration = Duration(milliseconds: 2000);

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
    _c = AnimationController(vsync: this, duration: AppIntro.duration)
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

  static double _span(double v, double from, double to) => ((v - from) / (to - from)).clamp(0.0, 1.0);

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
                label: 'رحلتي Rehlaty',
                child: WorldBackground(
                  world: RWorld.journey,
                  child: AnimatedBuilder(
                    animation: c,
                    builder: (context, _) {
                      final v = c.value;
                      final pop = Curves.elasticOut.transform(_span(v, 0.0, 0.32));
                      final arabic = Curves.easeOutCubic.transform(_span(v, 0.26, 0.5));
                      final english = Curves.easeOutCubic.transform(_span(v, 0.44, 0.68));
                      final out = 1 - Curves.easeIn.transform(_span(v, 0.88, 1.0));
                      return Opacity(
                        opacity: out,
                        child: Stack(
                          fit: StackFit.expand,
                          children: [
                            IgnorePointer(child: CustomPaint(painter: _IntroSparkles(v))),
                            Center(
                              child: Column(
                                mainAxisSize: MainAxisSize.min,
                                children: [
                                  Transform.scale(scale: 0.55 + 0.45 * pop, child: Opacity(opacity: _span(v, 0.0, 0.12), child: const AppLogo(width: 250, artOnly: true))),
                                  const SizedBox(height: 14),
                                  Opacity(
                                    opacity: arabic,
                                    child: Transform.translate(
                                      offset: Offset(0, (1 - arabic) * 14),
                                      child: const Text('رحلتي', textDirection: TextDirection.rtl, key: ValueKey('intro_ar'), style: TextStyle(fontSize: 60, fontWeight: FontWeight.w900, color: Color(0xFF4F4372), height: 1.1)),
                                    ),
                                  ),
                                  Opacity(
                                    opacity: english,
                                    child: Transform.translate(
                                      offset: Offset(0, (1 - english) * 14),
                                      child: const Text('Rehlaty', textDirection: TextDirection.ltr, key: ValueKey('intro_en'), style: TextStyle(fontSize: 34, fontWeight: FontWeight.w900, letterSpacing: 6, color: Color(0xFF6A5C9A))),
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                      );
                    },
                  ),
                ),
              ),
            ),
          ),
      ],
    );
  }
}

/// A handful of twinkling stars around the logo, drawn in code and different on every frame only by the time value.
class _IntroSparkles extends CustomPainter {
  final double t;
  _IntroSparkles(this.t);

  static const _stars = [
    (0.16, 0.22, 0.0), (0.84, 0.18, 0.2), (0.10, 0.52, 0.4), (0.90, 0.48, 0.1), (0.24, 0.80, 0.6), (0.78, 0.78, 0.3), (0.50, 0.10, 0.5), (0.62, 0.90, 0.7),
  ];

  @override
  void paint(Canvas canvas, Size size) {
    for (final (fx, fy, phase) in _stars) {
      final a = (0.5 + 0.5 * math.sin((t * 3 + phase) * 2 * math.pi)).clamp(0.0, 1.0) * (0.3 + 0.7 * math.min(1.0, t * 4));
      final r = size.shortestSide * 0.022 * (0.6 + 0.6 * a);
      final c = Offset(size.width * fx, size.height * fy);
      final path = Path()
        ..moveTo(c.dx, c.dy - r)
        ..quadraticBezierTo(c.dx, c.dy, c.dx + r, c.dy)
        ..quadraticBezierTo(c.dx, c.dy, c.dx, c.dy + r)
        ..quadraticBezierTo(c.dx, c.dy, c.dx - r, c.dy)
        ..quadraticBezierTo(c.dx, c.dy, c.dx, c.dy - r);
      canvas.drawPath(path, Paint()..color = Color.lerp(const Color(0xFFFFC94D), const Color(0xFFE981B1), phase)!.withValues(alpha: a));
    }
  }

  @override
  bool shouldRepaint(_IntroSparkles old) => old.t != t;
}
