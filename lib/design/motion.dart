import 'package:flutter/material.dart';

/// Gentle entrance motion built from Flutter's own animation classes (no package). It follows the app's
/// "reduce motion" setting and the system setting: with either on, the child is shown at once, with no animation.
bool motionReduced(BuildContext context) =>
    MediaQuery.maybeOf(context)?.disableAnimations ?? false;

/// Fades a widget in while it slides up a little. [index] staggers a list (each step waits 60 ms, at most 6 steps), so a
/// column of cards arrives one after another instead of all at once. Plays once, when the widget first appears.
class Appear extends StatefulWidget {
  final Widget child;
  final int index;
  final Duration duration;
  final double distance;
  const Appear({
    super.key,
    required this.child,
    this.index = 0,
    this.duration = const Duration(milliseconds: 320),
    this.distance = 14,
  });

  @override
  State<Appear> createState() => _AppearState();
}

class _AppearState extends State<Appear> with SingleTickerProviderStateMixin {
  AnimationController? _c;
  Animation<double>? _a;
  bool _started = false;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (_started || motionReduced(context)) return;
    _started = true;
    // One controller covers the stagger delay and the fade, so no timer is needed.
    final delay = Duration(milliseconds: 60 * widget.index.clamp(0, 6));
    final total = delay + widget.duration;
    final c = AnimationController(vsync: this, duration: total);
    _c = c;
    _a = CurvedAnimation(
      parent: c,
      curve: Interval(delay.inMilliseconds / total.inMilliseconds, 1, curve: Curves.easeOutCubic),
    );
    c.forward();
  }

  @override
  void dispose() {
    _c?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final a = _a;
    if (a == null) return widget.child;
    return AnimatedBuilder(
      animation: a,
      child: widget.child,
      builder: (context, child) => Opacity(
        opacity: a.value,
        child: Transform.translate(offset: Offset(0, (1 - a.value) * widget.distance), child: child),
      ),
    );
  }
}

/// A short, soft "pop" (a little bigger, then back) every time [trigger] changes, for a right answer or a new sticker.
/// Does nothing with reduced motion.
class PopOnChange extends StatefulWidget {
  final Object? trigger;
  final Widget child;
  const PopOnChange({super.key, required this.trigger, required this.child});

  @override
  State<PopOnChange> createState() => _PopOnChangeState();
}

class _PopOnChangeState extends State<PopOnChange>
    with SingleTickerProviderStateMixin {
  late final AnimationController _c = AnimationController(
    vsync: this,
    duration: const Duration(milliseconds: 360),
  );

  @override
  void didUpdateWidget(PopOnChange old) {
    super.didUpdateWidget(old);
    if (old.trigger != widget.trigger && !motionReduced(context))
      _c.forward(from: 0);
  }

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => ScaleTransition(
    scale: TweenSequence<double>([
      TweenSequenceItem(
        tween: Tween(
          begin: 1.0,
          end: 1.12,
        ).chain(CurveTween(curve: Curves.easeOut)),
        weight: 40,
      ),
      TweenSequenceItem(
        tween: Tween(
          begin: 1.12,
          end: 1.0,
        ).chain(CurveTween(curve: Curves.easeIn)),
        weight: 60,
      ),
    ]).animate(_c),
    child: widget.child,
  );
}

/// Page changes: a short fade with a small slide, on every platform (the web too). With reduced motion the page just
/// appears. Built from Flutter's own transitions.
class SoftPageTransitionsBuilder extends PageTransitionsBuilder {
  const SoftPageTransitionsBuilder();

  @override
  Widget buildTransitions<T>(PageRoute<T> route, BuildContext context, Animation<double> animation, Animation<double> secondaryAnimation, Widget child) {
    if (motionReduced(context)) return child;
    final curved = CurvedAnimation(parent: animation, curve: Curves.easeOutCubic);
    return FadeTransition(
      opacity: curved,
      child: SlideTransition(position: Tween(begin: const Offset(0, 0.03), end: Offset.zero).animate(curved), child: child),
    );
  }
}

const kSoftPageTransitions = PageTransitionsTheme(builders: {
  TargetPlatform.android: SoftPageTransitionsBuilder(),
  TargetPlatform.iOS: SoftPageTransitionsBuilder(),
  TargetPlatform.windows: SoftPageTransitionsBuilder(),
  TargetPlatform.macOS: SoftPageTransitionsBuilder(),
  TargetPlatform.linux: SoftPageTransitionsBuilder(),
  TargetPlatform.fuchsia: SoftPageTransitionsBuilder(),
});
