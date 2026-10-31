import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'motion.dart';

/// The one place for durations and curves. Screens use these names instead of their own numbers, so the whole app
/// moves at the same pace.
class Motion {
  Motion._();
  static const micro = Duration(milliseconds: 150);
  static const button = Duration(milliseconds: 200);
  static const page = Duration(milliseconds: 300);
  static const entrance = Duration(milliseconds: 380);
  static const celebrate = Duration(milliseconds: 900);
  static const floatCycle = Duration(seconds: 4);
  static const breatheCycle = Duration(seconds: 4);
  static const rotateCycle = Duration(seconds: 6);
  static const ease = Curves.easeOutCubic;
  static const soft = Curves.easeInOut;

  /// Tests set this to true to run the endless ambient effects; under a test binding they stay still otherwise
  /// (an endless animation would keep `pumpAndSettle` from ever finishing).
  static bool? forceAmbient;

  /// May the endless decorative effects (float, breathe, sparkle idle) run here? Not when the system or the parent's
  /// "reduce motion" setting is on, and not under a test binding unless forced.
  static bool ambientAllowed(BuildContext context) {
    final underTest = WidgetsBinding.instance.runtimeType.toString().contains(
      'Test',
    );
    return (forceAmbient ?? !underTest) && !motionReduced(context);
  }

  /// Short feedback (a press, a pop, a celebration) may still run under a test binding; it always stops with reduced motion.
  static bool feedbackAllowed(BuildContext context) => !motionReduced(context);
}

enum IconEffect { none, float, breathe, wiggle }

/// Gives an icon or picture one gentle, meaningful motion:
/// - [IconEffect.float]: a small up-and-down drift (islands, balloons, the bell of something new).
/// - [IconEffect.breathe]: a very small grow and shrink (the one featured thing on a screen).
/// - [IconEffect.wiggle]: a short shake every [wiggleEvery] time [attention] is true (something waiting for a tap).
/// With reduced motion, or when the screen is covered by another page, nothing runs: the controller is created only
/// when the effect is allowed, it stops by itself while its route is hidden (Flutter mutes the tickers of pages that
/// are not on top), and it is disposed with the widget.
class AnimatedIconWrapper extends StatefulWidget {
  final Widget child;
  final IconEffect effect;
  final bool attention;
  final double amplitude;
  const AnimatedIconWrapper({
    super.key,
    required this.child,
    this.effect = IconEffect.float,
    this.attention = true,
    this.amplitude = 4,
  });

  @override
  State<AnimatedIconWrapper> createState() => _AnimatedIconWrapperState();
}

class _AnimatedIconWrapperState extends State<AnimatedIconWrapper>
    with TickerProviderStateMixin {
  AnimationController? _c;

  Duration get _duration => switch (widget.effect) {
    IconEffect.float => Motion.floatCycle,
    IconEffect.breathe => Motion.breatheCycle,
    IconEffect.wiggle => const Duration(seconds: 5),
    IconEffect.none => Duration.zero,
  };

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final run =
        widget.effect != IconEffect.none &&
        Motion.ambientAllowed(context) &&
        (widget.effect != IconEffect.wiggle || widget.attention);
    if (run && _c == null) {
      _c = AnimationController(vsync: this, duration: _duration)..repeat();
    } else if (!run && _c != null) {
      _c!.dispose();
      _c = null;
    }
  }

  @override
  void dispose() {
    _c?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final c = _c;
    if (c == null) return widget.child;
    return AnimatedBuilder(
      animation: c,
      child: widget.child,
      builder: (context, child) {
        final t = c.value;
        switch (widget.effect) {
          case IconEffect.float:
            return Transform.translate(
              offset: Offset(0, math.sin(t * 2 * math.pi) * widget.amplitude),
              child: child,
            );
          case IconEffect.breathe:
            return Transform.scale(
              scale: 1 + 0.04 * math.sin(t * 2 * math.pi),
              child: child,
            );
          case IconEffect.wiggle:
            // Shakes only in the first 12% of each cycle, then rests: never a constant shake.
            final k = t < 0.12
                ? math.sin(t / 0.12 * 4 * math.pi) * (1 - t / 0.12)
                : 0.0;
            return Transform.rotate(angle: k * 0.18, child: child);
          case IconEffect.none:
            return child!;
        }
      },
    );
  }
}

/// A soft press response: shrinks a little while a finger or mouse is down and springs back. It only listens, so the
/// wrapped widget's own tap still works. Does nothing under reduced motion.
class PressFeedback extends StatefulWidget {
  final Widget child;
  final double scale;
  const PressFeedback({super.key, required this.child, this.scale = 0.96});

  @override
  State<PressFeedback> createState() => _PressFeedbackState();
}

class _PressFeedbackState extends State<PressFeedback> {
  bool _down = false;

  void _set(bool v) {
    if (_down != v && mounted) setState(() => _down = v);
  }

  @override
  Widget build(BuildContext context) {
    if (!Motion.feedbackAllowed(context)) return widget.child;
    return Listener(
      onPointerDown: (_) => _set(true),
      onPointerUp: (_) => _set(false),
      onPointerCancel: (_) => _set(false),
      child: AnimatedScale(
        scale: _down ? widget.scale : 1,
        duration: Motion.micro,
        curve: Motion.ease,
        child: widget.child,
      ),
    );
  }
}

/// A button with the press response and a loading state: the label is replaced by a small spinner while [loading].
class AnimatedActionButton extends StatelessWidget {
  final String label;
  final VoidCallback? onPressed;
  final IconData? icon;
  final bool loading;
  final bool secondary;
  const AnimatedActionButton({
    super.key,
    required this.label,
    required this.onPressed,
    this.icon,
    this.loading = false,
    this.secondary = false,
  });

  @override
  Widget build(BuildContext context) {
    final child = loading
        ? const SizedBox(
            width: 22,
            height: 22,
            child: CircularProgressIndicator(strokeWidth: 3),
          )
        : Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              if (icon != null) ...[Icon(icon), const SizedBox(width: 8)],
              Flexible(child: Text(label)),
            ],
          );
    final enabled = loading ? null : onPressed;
    return PressFeedback(
      child: secondary
          ? OutlinedButton(
              onPressed: enabled,
              style: OutlinedButton.styleFrom(minimumSize: const Size(64, 56)),
              child: child,
            )
          : FilledButton(
              onPressed: enabled,
              style: FilledButton.styleFrom(minimumSize: const Size(64, 56)),
              child: child,
            ),
    );
  }
}

/// A card that arrives with the staggered entrance and responds to a press. The tap itself belongs to [child].
class AnimatedFeatureCard extends StatelessWidget {
  final Widget child;
  final int index;
  const AnimatedFeatureCard({super.key, required this.child, this.index = 0});

  @override
  Widget build(BuildContext context) => Appear(
    index: index,
    duration: Motion.entrance,
    child: PressFeedback(child: child),
  );
}

/// Entrance for anything that appears: fade and slide up, staggered by [index].
class AnimatedEntrance extends StatelessWidget {
  final Widget child;
  final int index;
  const AnimatedEntrance({super.key, required this.child, this.index = 0});

  @override
  Widget build(BuildContext context) =>
      Appear(index: index, duration: Motion.entrance, child: child);
}

/// A navigation icon that grows a little when it becomes the selected one.
class AnimatedNavigationItem extends StatelessWidget {
  final bool selected;
  final Widget child;
  const AnimatedNavigationItem({
    super.key,
    required this.selected,
    required this.child,
  });

  @override
  Widget build(BuildContext context) => AnimatedScale(
    scale: selected && Motion.feedbackAllowed(context) ? 1.1 : 1,
    duration: Motion.button,
    curve: Curves.easeOutBack,
    child: child,
  );
}

/// A celebration for something really earned: the child widget pops, and a few small stars fly out once, every time
/// [trigger] changes (not at the first build, so opening a screen never celebrates by itself). No stars with reduced motion.
class AnimatedReward extends StatefulWidget {
  final Object? trigger;
  final Widget child;
  const AnimatedReward({super.key, required this.trigger, required this.child});

  @override
  State<AnimatedReward> createState() => _AnimatedRewardState();
}

class _AnimatedRewardState extends State<AnimatedReward>
    with SingleTickerProviderStateMixin {
  late final AnimationController _c = AnimationController(
    vsync: this,
    duration: Motion.celebrate,
  );

  @override
  void didUpdateWidget(AnimatedReward old) {
    super.didUpdateWidget(old);
    if (old.trigger != widget.trigger && Motion.feedbackAllowed(context)) {
      _c.forward(from: 0);
    }
  }

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      clipBehavior: Clip.none,
      alignment: Alignment.center,
      children: [
        PopOnChange(trigger: widget.trigger, child: widget.child),
        Positioned.fill(
          child: IgnorePointer(
            child: AnimatedBuilder(
              animation: _c,
              builder: (context, _) => _c.isAnimating
                  ? CustomPaint(
                      key: const ValueKey('reward_sparkle'),
                      painter: _SparklePainter(_c.value),
                    )
                  : const SizedBox.shrink(),
            ),
          ),
        ),
      ],
    );
  }
}

class _SparklePainter extends CustomPainter {
  final double t;
  const _SparklePainter(this.t);

  @override
  void paint(Canvas canvas, Size size) {
    final c = size.center(Offset.zero);
    final r = math.max(size.width, size.height) * (0.35 + 0.55 * t);
    final paint = Paint()
      ..color = const Color(0xFFFFC83D).withValues(alpha: (1 - t).clamp(0, 1));
    for (var i = 0; i < 6; i++) {
      final a = i * math.pi / 3 + 0.4;
      final p = c + Offset(math.cos(a) * r, math.sin(a) * r);
      final s = 4.0 * (1 - t) + 1.5;
      canvas.drawPath(
        Path()
          ..moveTo(p.dx, p.dy - s * 1.6)
          ..lineTo(p.dx + s * .5, p.dy - s * .5)
          ..lineTo(p.dx + s * 1.6, p.dy)
          ..lineTo(p.dx + s * .5, p.dy + s * .5)
          ..lineTo(p.dx, p.dy + s * 1.6)
          ..lineTo(p.dx - s * .5, p.dy + s * .5)
          ..lineTo(p.dx - s * 1.6, p.dy)
          ..lineTo(p.dx - s * .5, p.dy - s * .5)
          ..close(),
        paint,
      );
    }
  }

  @override
  bool shouldRepaint(_SparklePainter old) => old.t != t;
}
