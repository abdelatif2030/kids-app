import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';

import 'app_logo.dart';
import 'motion.dart';
import 'worlds.dart';

/// The first seconds of the app: the owner's intro video (assets/branding/intro.mp4, about 5 s, bundled in the app, no
/// download), then the app opens. If the video cannot play (no codec, a blocked autoplay with sound is retried muted, an
/// error) the older intro made in code takes over: the two children over the book pop in, the Arabic name «رحلتي»
/// appears, then the English name «Rehlaty», a few stars twinkle, and the app opens. A tap or the skip button opens the
/// app at once. Shown once per run, never with reduced motion, and the code-made one only under a test binding.
/// It does not wait for anything: the app behind it is already built.
class AppIntro extends StatefulWidget {
  final Widget child;
  const AppIntro({super.key, required this.child});

  /// The length of the code-made intro (the fallback).
  static const duration = Duration(milliseconds: 2000);

  /// The owner's intro video and its first frame (shown while the video loads).
  static const videoAsset = 'assets/branding/intro.mp4';
  static const posterAsset = 'assets/branding/intro_poster.jpg';

  /// The longest the video may take before the app opens anyway (it is about 5 s long).
  static const videoLimit = Duration(seconds: 9);

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
  bool _video = false;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (_c != null || AppIntro._shown) return;
    final underTest = WidgetsBinding.instance.runtimeType.toString().contains('Test');
    if (!(AppIntro.forceShow ?? !underTest) || motionReduced(context)) return;
    AppIntro._shown = true;
    _done = false;
    // The video plays in the real app; the code-made intro is what tests see and what takes over if the video fails.
    _video = !underTest;
    if (!_video) _startCodeIntro();
  }

  void _startCodeIntro() {
    _c ??= AnimationController(vsync: this, duration: AppIntro.duration)
      ..addStatusListener((s) {
        if (s == AnimationStatus.completed && mounted) setState(() => _done = true);
      });
    _c!.forward(from: 0);
  }

  void _videoFailed() {
    if (!mounted || _done) return;
    setState(() => _video = false);
    _startCodeIntro();
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
        if (!_done && _video)
          Positioned.fill(child: IntroVideoLayer(key: const ValueKey('intro_video'), onDone: _skip, onFailed: _videoFailed)),
        if (!_done && !_video && c != null)
          Positioned.fill(
            child: GestureDetector(
              behavior: HitTestBehavior.opaque,
              onTap: _skip,
              child: Semantics(
                label: 'رحلتي Rehlaty',
                child: WorldBackground(
                  world: RWorld.journey,
                  logo: false,
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


/// The owner's intro video, full screen. It shows the first frame while it loads, plays once (with its sound; if the
/// browser refuses sound before a tap it plays muted), and calls [onDone] when it ends or after [AppIntro.videoLimit].
/// If anything goes wrong it calls [onFailed] so the code-made intro (or the app) takes over: a broken video never
/// blocks the app. A tap or the skip button calls [onDone] at once.
class IntroVideoLayer extends StatefulWidget {
  final VoidCallback onDone;
  final VoidCallback onFailed;
  const IntroVideoLayer({super.key, required this.onDone, required this.onFailed});

  @override
  State<IntroVideoLayer> createState() => _IntroVideoLayerState();
}

class _IntroVideoLayerState extends State<IntroVideoLayer> {
  VideoPlayerController? _vc;
  Timer? _limit;
  bool _ready = false;
  bool _ended = false;
  bool _failed = false;

  @override
  void initState() {
    super.initState();
    _limit = Timer(AppIntro.videoLimit, _finish);
    _start();
  }

  void _finish() {
    if (_ended) return;
    _ended = true;
    widget.onDone();
  }

  void _fail() {
    if (_ended || _failed) return;
    _failed = true;
    _limit?.cancel();
    widget.onFailed();
  }

  Future<void> _start() async {
    try {
      final c = VideoPlayerController.asset(AppIntro.videoAsset, videoPlayerOptions: VideoPlayerOptions(mixWithOthers: true));
      _vc = c;
      await c.initialize().timeout(const Duration(seconds: 6));
      if (!mounted) return;
      c.addListener(_tick);
      setState(() => _ready = true);
      await c.setLooping(false);
      try {
        await c.play();
      } catch (_) {
        await c.setVolume(0);
        await c.play();
      }
      // A browser may accept play() but keep the video paused until a tap (sound before a tap): retry it muted.
      Future<void>.delayed(const Duration(milliseconds: 600), () async {
        if (!mounted || _ended || c.value.isPlaying || c.value.isCompleted) return;
        try {
          await c.setVolume(0);
          await c.play();
        } catch (_) {
          _fail();
        }
      });
    } catch (_) {
      _fail();
    }
  }

  void _tick() {
    final v = _vc?.value;
    if (v == null) return;
    if (v.hasError) {
      _fail();
    } else if (v.isInitialized && (v.isCompleted || (v.duration > Duration.zero && v.position >= v.duration))) {
      _finish();
    }
  }

  @override
  void dispose() {
    _limit?.cancel();
    _vc?.removeListener(_tick);
    _vc?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.sizeOf(context);
    // The video is centred, so a wide screen fills (cover); an upright phone shows it whole on sky blue.
    final wide = size.width / size.height >= 1.2;
    final vc = _vc;
    return GestureDetector(
      behavior: HitTestBehavior.opaque,
      onTap: _finish,
      child: Semantics(
        label: 'رحلتي Rehlaty',
        child: Stack(
          fit: StackFit.expand,
          children: [
            const ColoredBox(color: Color(0xFF58A8F2)),
            Image.asset(AppIntro.posterAsset, key: const ValueKey('intro_poster'), fit: wide ? BoxFit.cover : BoxFit.contain, errorBuilder: (_, _, _) => const SizedBox()),
            if (_ready && vc != null && vc.value.isInitialized)
              FittedBox(
                key: const ValueKey('intro_player'),
                fit: wide ? BoxFit.cover : BoxFit.contain,
                clipBehavior: Clip.hardEdge,
                child: SizedBox(width: vc.value.size.width, height: vc.value.size.height, child: VideoPlayer(vc)),
              ),
            PositionedDirectional(
              bottom: 16,
              end: 16,
              child: SafeArea(
                child: Semantics(
                  button: true,
                  label: 'تخطي / Skip',
                  child: Material(
                    color: Colors.black26,
                    shape: const StadiumBorder(),
                    child: InkWell(
                      key: const ValueKey('intro_skip'),
                      customBorder: const StadiumBorder(),
                      onTap: _finish,
                      child: const Padding(padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8), child: Text('تخطي • Skip', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 15))),
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
