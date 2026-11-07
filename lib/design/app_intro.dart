import 'dart:async';

import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';

/// The first seconds of the app: the owner's picture (the same one the web page shows while it loads), then the owner's
/// intro video (assets/branding/intro.mp4, about 5 s, bundled in the app, no download), then the app opens. The old logo
/// animation made in code was removed (owner decision, 2026-11-06). If the video cannot play, the picture stays for
/// [duration] and the app opens. A tap or the skip button opens the app at once. Shown once per run (also with
/// reduced motion: it is a short video and skipping is one tap), and never under a test binding unless a test asks for it.
class AppIntro extends StatefulWidget {
  final Widget child;
  const AppIntro({super.key, required this.child});

  /// How long the picture stays when the video cannot play.
  static const duration = Duration(milliseconds: 2000);

  /// The owner's intro video and the picture shown before and instead of it.
  static const videoAsset = 'assets/branding/intro.mp4';
  static const posterAsset = 'assets/branding/intro_poster.jpg';

  /// The longest the video may take to start loading before the app opens anyway.
  static const loadLimit = Duration(seconds: 14);

  /// Once playing, the longest it may last (it is about 5 s long).
  static const videoLimit = Duration(seconds: 9);

  /// Tests set this to true to see the intro; otherwise it is skipped under a test binding.
  static bool? forceShow;
  static bool _shown = false;

  /// For tests: forget that the intro was shown in this run.
  static void resetForTest() => _shown = false;

  @override
  State<AppIntro> createState() => _AppIntroState();
}

class _AppIntroState extends State<AppIntro> {
  bool _done = true;
  Timer? _hold;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (!_done || AppIntro._shown) return;
    final underTest = WidgetsBinding.instance.runtimeType.toString().contains(
      'Test',
    );
    // Not skipped for «reduced motion»: the owner's intro is a short video and the skip button is always there.
    if (!(AppIntro.forceShow ?? !underTest)) return;
    AppIntro._shown = true;
    _done = false;
  }

  @override
  void dispose() {
    _hold?.cancel();
    super.dispose();
  }

  void _skip() {
    _hold?.cancel();
    if (!_done) setState(() => _done = true);
  }

  /// The video cannot play: keep the picture for a moment, then open the app.
  void _videoFailed() {
    if (!mounted || _done) return;
    _hold?.cancel();
    _hold = Timer(AppIntro.duration, _skip);
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      fit: StackFit.expand,
      children: [
        widget.child,
        if (!_done)
          Positioned.fill(
            child: IntroVideoLayer(
              key: const ValueKey('intro_video'),
              onDone: _skip,
              onFailed: _videoFailed,
            ),
          ),
      ],
    );
  }
}

/// The owner's intro video, full screen. It shows the first frame while it loads, plays once (with its sound; if the
/// browser refuses sound before a tap, a big "tap to start" button asks for the tap and the video then plays with its sound), and calls [onDone] when it ends or after [AppIntro.videoLimit].
/// If anything goes wrong it calls [onFailed] so the code-made intro (or the app) takes over: a broken video never
/// blocks the app. A tap or the skip button calls [onDone] at once.
class IntroVideoLayer extends StatefulWidget {
  final VoidCallback onDone;
  final VoidCallback onFailed;
  const IntroVideoLayer({
    super.key,
    required this.onDone,
    required this.onFailed,
  });

  @override
  State<IntroVideoLayer> createState() => _IntroVideoLayerState();
}

class _IntroVideoLayerState extends State<IntroVideoLayer> {
  VideoPlayerController? _vc;
  Timer? _limit;
  bool _ready = false;
  bool _ended = false;
  bool _failed = false;

  /// The browser refused to start the video with sound before a tap (every browser does this on a fresh page). The
  /// picture stays and a big "tap to start" button asks for the tap, so the intro is played WITH its sound.
  bool _needsTap = false;

  /// The video is already playing (muted) and only the small sound button is shown.
  bool _mutedPlaying = false;

  /// What happened to the video, shown only when the page address has ?introdebug (to find out why a video does not start).
  String _status = 'starting';
  static bool get _debug => kIsWeb && (Uri.base.queryParameters.containsKey('introdebug') || Uri.base.fragment.contains('introdebug'));
  void _note(String s) {
    if (!mounted) return;
    setState(() => _status = '$_status > $s');
  }

  @override
  void initState() {
    super.initState();
    // Loading may take a while on a slow network, but never forever.
    _limit = Timer(AppIntro.loadLimit, _fail);
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

  /// Playing started: from now the video may last at most [AppIntro.videoLimit] more.
  void _playing() {
    _limit?.cancel();
    _limit = Timer(AppIntro.videoLimit, _finish);
  }

  Future<void> _start() async {
    try {
      final c = VideoPlayerController.asset(
        AppIntro.videoAsset,
        videoPlayerOptions: VideoPlayerOptions(mixWithOthers: true),
      );
      _vc = c;
      _note('initialising');
      await c.initialize().timeout(const Duration(seconds: 8));
      if (!mounted) return;
      _note('ready ${c.value.size.width.toInt()}x${c.value.size.height.toInt()}');
      c.addListener(_tick);
      setState(() => _ready = true);
      await c.setLooping(false);
      await c.setVolume(1); // with its sound, always
      try {
        await c.play();
        _note('play with sound ok');
      } catch (e) {
        _note('play with sound refused: $e');
      }
      // A browser may refuse sound before a tap (iPhone Safari always does). The video must still MOVE: play it muted
      // at once, and offer a sound button that restarts it with its sound.
      await Future<void>.delayed(const Duration(milliseconds: 600));
      if (!mounted || _ended || _failed) return;
      if (!c.value.isPlaying && !c.value.isCompleted) {
        try {
          await c.setVolume(0);
          await c.play();
          await Future<void>.delayed(const Duration(milliseconds: 600));
          _note('muted play: ${c.value.isPlaying ? 'playing' : 'NOT playing'}');
        } catch (e) {
          _note('muted play failed: $e');
        }
        if (!mounted || _ended || _failed) return;
        if (c.value.isPlaying) {
          _playing();
          setState(() {
            _needsTap = true;
            _mutedPlaying = true;
          }); // the small sound button, over a video that is already playing
          return;
        }
        _limit?.cancel();
        await c.pause();
        if (mounted)
          setState(
            () => _needsTap = true,
          ); // nothing plays before a tap: the big button
        return;
      }
      _playing();
    } catch (e) {
      _note('error: $e');
      _fail();
    }
  }

  /// The tap the browser was waiting for: start the video with its sound.
  Future<void> _tapToStart() async {
    final c = _vc;
    if (c == null) return;
    setState(() {
      _needsTap = false;
      _mutedPlaying = false;
    });
    try {
      // All three calls are made at once, inside the tap itself: Safari and Chrome only allow sound when play() starts
      // within the tap (waiting for one call before the next would lose that permission).
      final volume = c.setVolume(1);
      final rewind = c.seekTo(Duration.zero);
      final play = c.play();
      await Future.wait([volume, rewind, play]);
      _note('sound play started by tap');
      _playing();
    } catch (e) {
      _note('tap play failed: $e');
      _fail();
    }
  }

  void _tick() {
    final v = _vc?.value;
    if (v == null) return;
    if (v.hasError) {
      _fail();
    } else if (v.isInitialized &&
        (v.isCompleted ||
            (v.duration > Duration.zero && v.position >= v.duration))) {
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
      // While the browser waits for a tap, the tap STARTS the video (with sound); otherwise it skips the intro.
      onTap: _needsTap ? _tapToStart : _finish,
      child: Semantics(
        label: 'رحلتي Rehlaty',
        child: Stack(
          fit: StackFit.expand,
          children: [
            const ColoredBox(color: Color(0xFF58A8F2)),
            Image.asset(
              AppIntro.posterAsset,
              key: const ValueKey('intro_poster'),
              fit: wide ? BoxFit.cover : BoxFit.contain,
              errorBuilder: (_, _, _) => const SizedBox(),
            ),
            if (_ready && vc != null && vc.value.isInitialized)
              FittedBox(
                key: const ValueKey('intro_player'),
                fit: wide ? BoxFit.cover : BoxFit.contain,
                clipBehavior: Clip.hardEdge,
                child: SizedBox(
                  width: vc.value.size.width,
                  height: vc.value.size.height,
                  child: VideoPlayer(vc),
                ),
              ),
            if (_needsTap)
              Align(
                alignment: _mutedPlaying
                    ? const Alignment(0, 0.8)
                    : Alignment.center,
                child: Semantics(
                  button: true,
                  label: 'اضغط لبدء الفيديو بالصوت / Tap to start with sound',
                  child: Material(
                    key: const ValueKey('intro_tap_to_start'),
                    color: const Color(0xFF5B2BB8),
                    elevation: 8,
                    shape: const StadiumBorder(
                      side: BorderSide(color: Colors.white, width: 3),
                    ),
                    child: InkWell(
                      customBorder: const StadiumBorder(),
                      onTap: _tapToStart,
                      child: const Padding(
                        padding: EdgeInsets.symmetric(
                          horizontal: 28,
                          vertical: 14,
                        ),
                        child: Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            Icon(
                              Icons.play_circle_fill_rounded,
                              color: Colors.white,
                              size: 44,
                            ),
                            SizedBox(width: 12),
                            Column(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                Text(
                                  'اضغط للبدء 🔊',
                                  style: TextStyle(
                                    color: Colors.white,
                                    fontSize: 24,
                                    fontWeight: FontWeight.w900,
                                  ),
                                ),
                                Text(
                                  'Tap to start with sound',
                                  style: TextStyle(
                                    color: Colors.white70,
                                    fontSize: 14,
                                    fontWeight: FontWeight.w700,
                                  ),
                                ),
                              ],
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            if (_debug)
              PositionedDirectional(
                top: 8,
                start: 8,
                end: 8,
                child: SafeArea(child: ColoredBox(color: const Color(0xCC000000), child: Padding(padding: const EdgeInsets.all(6), child: Text(_status, style: const TextStyle(color: Colors.white, fontSize: 12))))),
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
                      child: const Padding(
                        padding: EdgeInsets.symmetric(
                          horizontal: 16,
                          vertical: 8,
                        ),
                        child: Text(
                          'تخطي • Skip',
                          style: TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.w800,
                            fontSize: 15,
                          ),
                        ),
                      ),
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
