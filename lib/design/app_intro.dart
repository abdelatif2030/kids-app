import 'dart:async';

import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter/material.dart';

/// The first seconds of the app: only the app's picture (the children and the "رحلتي Rehlaty" sign, the same one the web page
/// shows while it loads) for a moment, then the app opens. A tap or the skip button opens the app at once. Shown once per run,
/// and never under a test binding unless a test asks for it.
///
/// The owner's intro VIDEO was taken out on 2026-11-07 because it did not play for him; the file is still in
/// assets/branding/intro.mp4 and the old player is in the git history (commit "Intro: the page after it waits...") to bring
/// back once the cause is found.
class AppIntro extends StatefulWidget {
  final Widget child;
  const AppIntro({super.key, required this.child});

  /// How long the picture stays.
  static const duration = Duration(milliseconds: 2200);

  static const posterAsset = 'assets/branding/intro_poster.webp';

  /// Tests set this to true to see the intro; otherwise it is skipped under a test binding.
  static bool? forceShow;
  static bool _shown = false;

  /// True while the intro is on screen. The page that opens after it (the child's home) waits for this to turn false: a page
  /// pushed on top of the intro would hide it.
  static final ValueNotifier<bool> running = ValueNotifier<bool>(false);

  /// Completes when the intro is not on screen (at once when it is not shown).
  static Future<void> whenFinished() {
    if (!running.value) return Future<void>.value();
    final done = Completer<void>();
    void check() {
      if (!running.value && !done.isCompleted) {
        running.removeListener(check);
        done.complete();
      }
    }

    running.addListener(check);
    return done.future;
  }

  /// For tests: forget that the intro was shown in this run.
  static void resetForTest() {
    _shown = false;
    running.value = false;
  }

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
    // On the web the page's own splash picture (web/splash.js) is the intro: showing a second one made the screen flicker.
    if (kIsWeb) return;
    final underTest = WidgetsBinding.instance.runtimeType.toString().contains('Test');
    if (!(AppIntro.forceShow ?? !underTest)) return;
    AppIntro._shown = true;
    _done = false;
    AppIntro.running.value = true;
    _hold = Timer(AppIntro.duration, _skip);
  }

  @override
  void dispose() {
    _hold?.cancel();
    AppIntro.running.value = false;
    super.dispose();
  }

  void _skip() {
    _hold?.cancel();
    if (!mounted) return;
    if (!_done) {
      setState(() => _done = true);
      AppIntro.running.value = false;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      fit: StackFit.expand,
      children: [
        widget.child,
        if (!_done) Positioned.fill(child: IntroPictureLayer(key: const ValueKey('intro_picture'), onDone: _skip)),
      ],
    );
  }
}

/// The app's picture, full screen. A wide screen fills (cover); an upright phone shows it whole on sky blue.
class IntroPictureLayer extends StatelessWidget {
  final VoidCallback onDone;
  const IntroPictureLayer({super.key, required this.onDone});

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.sizeOf(context);
    final wide = size.width / size.height >= 1.2;
    return GestureDetector(
      behavior: HitTestBehavior.opaque,
      onTap: onDone,
      child: Semantics(
        label: 'رحلتي Rehlaty',
        child: Stack(
          fit: StackFit.expand,
          children: [
            const ColoredBox(color: Color(0xFF58A8F2)),
            Image.asset(AppIntro.posterAsset, key: const ValueKey('intro_poster'), fit: wide ? BoxFit.cover : BoxFit.contain, errorBuilder: (_, _, _) => const SizedBox()),
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
                      onTap: onDone,
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
