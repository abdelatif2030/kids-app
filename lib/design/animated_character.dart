import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';

/// Which character to show. Each one uses the owner's own cut-out art (assets/games/art): Adam is the boy, Nour the girl,
/// and Lulu the owl. Nothing here redraws or replaces them.
enum CharacterKind { boy, girl, owl }

/// What the character is doing besides idling. The names are the moments of the game, not the poses.
enum CharMood { idle, welcome, tap, correct, wrong, celebrate, complete }

/// Tells an [AnimatedCharacter] what just happened in the game. Reusable: one controller per character on screen.
///
/// Rules so animations never fight each other:
///  * a new reaction replaces the one playing only when its priority is the same or higher (complete > celebrate >
///    correct > welcome > tap = wrong), so a small "tap" never cuts a big celebration;
///  * every reaction ends by itself (the widget calls [finish]) and the character returns to idle;
///  * the same reaction triggered again restarts it (repeated correct answers each get their own jump).
class CharacterController extends ChangeNotifier {
  CharMood _mood = CharMood.idle;
  int _serial = 0;

  CharMood get mood => _mood;

  /// Increases with every accepted reaction; the widget uses it to restart an animation that is triggered again.
  int get serial => _serial;

  static int priority(CharMood m) => switch (m) {
        CharMood.complete => 5,
        CharMood.celebrate => 4,
        CharMood.correct => 3,
        CharMood.welcome => 2,
        CharMood.tap => 1,
        CharMood.wrong => 1,
        CharMood.idle => 0,
      };

  /// Starts [m] unless something more important is playing. Returns whether it was accepted.
  bool trigger(CharMood m) {
    if (m == CharMood.idle) return false;
    if (priority(m) < priority(_mood)) return false;
    _mood = m;
    _serial++;
    notifyListeners();
    return true;
  }

  bool welcome() => trigger(CharMood.welcome);
  bool tap() => trigger(CharMood.tap);
  bool correct() => trigger(CharMood.correct);
  bool wrong() => trigger(CharMood.wrong);
  bool celebrate() => trigger(CharMood.celebrate);
  bool complete() => trigger(CharMood.complete);

  /// Called by the widget when the reaction with [serial] has played to its end.
  void finish(int serial) {
    if (serial != _serial || _mood == CharMood.idle) return;
    _mood = CharMood.idle;
    notifyListeners();
  }
}

enum _Micro { none, look, hop, wave, excited }

/// A character that is always a little alive: it breathes and bounces gently, looks around, waves now and then and
/// hops with excitement at random moments, and reacts to the game through a [CharacterController]: welcome, a playful
/// tap, a happy jump for a correct answer, a kind tilt (never sadness) for a wrong one, a big celebration with
/// sparkles, and a bigger one with a trophy when a game is completed.
///
/// The art is a flat picture, so every movement is the whole body (translate, scale, rotate) and the pose is swapped
/// between the idle, waving and cheering pictures. It does NOT pretend to have facial expressions: a laughing face needs
/// extra pictures (see docs/CHARACTER_ANIMATION.md).
class AnimatedCharacter extends StatefulWidget {
  final CharacterKind kind;
  final CharacterController controller;
  final double height;

  /// Turned off in tests to keep the random hops out of timing checks.
  final bool randomIdle;
  const AnimatedCharacter({super.key, required this.kind, required this.controller, this.height = 200, this.randomIdle = true});

  static String assetFor(CharacterKind kind, String pose) {
    final name = switch ((kind, pose)) {
      (CharacterKind.boy, 'cheer') => 'boy_wave',
      (CharacterKind.boy, 'wave') => 'boy_wave',
      (CharacterKind.boy, _) => 'boy_idle',
      (CharacterKind.girl, 'cheer') => 'girl_cheer',
      (CharacterKind.girl, 'wave') => 'girl_wave',
      (CharacterKind.girl, _) => 'girl_idle',
      (CharacterKind.owl, _) => 'owl',
    };
    return 'assets/games/art/$name.webp';
  }

  @override
  State<AnimatedCharacter> createState() => _AnimatedCharacterState();
}

class _AnimatedCharacterState extends State<AnimatedCharacter> with TickerProviderStateMixin, WidgetsBindingObserver {
  late final AnimationController _loop = AnimationController(vsync: this, duration: const Duration(milliseconds: 2900));
  late final AnimationController _act = AnimationController(vsync: this);
  late final AnimationController _micro = AnimationController(vsync: this, duration: const Duration(milliseconds: 1500));
  final math.Random _rnd = math.Random();
  Timer? _timer;
  CharMood _playing = CharMood.idle;
  int _playingSerial = -1;
  _Micro _microKind = _Micro.none;
  double _lookDir = 1;
  bool _reduced = false;
  bool _paused = false;

  static Duration _lengthOf(CharMood m) => switch (m) {
        CharMood.welcome => const Duration(milliseconds: 1900),
        CharMood.tap => const Duration(milliseconds: 480),
        CharMood.correct => const Duration(milliseconds: 1300),
        CharMood.wrong => const Duration(milliseconds: 1100),
        CharMood.celebrate => const Duration(milliseconds: 2400),
        CharMood.complete => const Duration(milliseconds: 3200),
        CharMood.idle => const Duration(milliseconds: 1),
      };

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    widget.controller.addListener(_onMood);
    _act.addStatusListener((s) {
      if (s == AnimationStatus.completed) {
        final serial = _playingSerial;
        _playing = CharMood.idle;
        widget.controller.finish(serial);
        if (mounted) setState(() {});
      }
    });
    _micro.addStatusListener((s) {
      if (s == AnimationStatus.completed) _microKind = _Micro.none;
    });
    _loop.repeat();
    _scheduleMicro();
    // a reaction asked for before the first frame still plays
    if (widget.controller.mood != CharMood.idle) WidgetsBinding.instance.addPostFrameCallback((_) => _onMood());
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    _reduced = MediaQuery.maybeDisableAnimationsOf(context) ?? false;
    for (final pose in ['idle', 'wave', 'cheer']) {
      precacheImage(AssetImage(AnimatedCharacter.assetFor(widget.kind, pose)), context).catchError((Object _) {});
    }
  }

  @override
  void didUpdateWidget(covariant AnimatedCharacter old) {
    super.didUpdateWidget(old);
    if (old.controller != widget.controller) {
      old.controller.removeListener(_onMood);
      widget.controller.addListener(_onMood);
    }
  }

  void _onMood() {
    final c = widget.controller;
    if (c.mood == CharMood.idle) return;
    if (c.serial == _playingSerial && _playing == c.mood) return; // already playing this very reaction
    _playing = c.mood;
    _playingSerial = c.serial;
    _microKind = _Micro.none;
    _micro.stop();
    _act.duration = _lengthOf(_playing);
    _act.forward(from: 0);
    if (mounted) setState(() {});
  }

  void _scheduleMicro() {
    _timer?.cancel();
    if (!widget.randomIdle || _reduced) return;
    _timer = Timer(Duration(milliseconds: 2500 + _rnd.nextInt(4500)), () {
      if (!mounted || _paused) return;
      if (_playing == CharMood.idle && TickerMode.valuesOf(context).enabled) {
        final pick = _Micro.values[1 + _rnd.nextInt(4)];
        _lookDir = _rnd.nextBool() ? 1 : -1;
        _microKind = pick;
        _micro.duration = Duration(milliseconds: pick == _Micro.wave ? 1700 : pick == _Micro.look ? 1600 : pick == _Micro.hop ? 650 : 1100);
        _micro.forward(from: 0);
      }
      _scheduleMicro();
    });
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    final resumed = state == AppLifecycleState.resumed;
    if (resumed && _paused) {
      _paused = false;
      _loop.repeat();
      _scheduleMicro();
    } else if (!resumed && !_paused) {
      _paused = true;
      _loop.stop();
      _timer?.cancel();
    }
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    widget.controller.removeListener(_onMood);
    _timer?.cancel();
    _loop.dispose();
    _act.dispose();
    _micro.dispose();
    super.dispose();
  }

  String get _pose {
    switch (_playing) {
      case CharMood.welcome:
        return 'wave';
      case CharMood.correct:
      case CharMood.celebrate:
      case CharMood.complete:
        return 'cheer';
      case CharMood.tap:
      case CharMood.wrong:
      case CharMood.idle:
        return _microKind == _Micro.wave ? 'wave' : 'idle';
    }
  }

  @override
  Widget build(BuildContext context) {
    final h = widget.height;
    final kind = widget.kind;
    return RepaintBoundary(
      child: AnimatedBuilder(
        animation: Listenable.merge([_loop, _act, _micro]),
        builder: (context, _) {
          // idle: gentle bounce and breathing, always on
          final b = _reduced ? 0.0 : math.sin(_loop.value * 2 * math.pi);
          var dy = -b.abs() * h * 0.012;
          var sy = 1 + b * 0.012;
          var sx = 1 - b * 0.006;
          var rot = _reduced ? 0.0 : math.sin(_loop.value * 2 * math.pi * 0.5) * 0.012;
          if (_playing == CharMood.idle && !_reduced) {
            final m = _micro.value;
            switch (_microKind) {
              case _Micro.look:
                rot += math.sin(m * math.pi) * 0.07 * _lookDir;
              case _Micro.hop:
                dy -= math.sin(m * math.pi) * h * 0.06;
              case _Micro.excited:
                dy -= math.sin(m * math.pi * 4).abs() * h * 0.035;
                rot += math.sin(m * math.pi * 10) * 0.02;
              case _Micro.wave:
                rot += math.sin(m * math.pi * 6) * 0.03;
              case _Micro.none:
                break;
            }
          }
          final t = _act.value;
          var sparkle = 0.0;
          var trophy = 0.0;
          if (!_reduced) {
            switch (_playing) {
              case CharMood.welcome:
                dy -= math.sin(t * math.pi * 3).abs() * h * 0.035;
                rot += math.sin(t * math.pi * 6) * 0.05;
                final pop = math.sin(t * math.pi);
                sx += pop * 0.03;
                sy += pop * 0.03;
              case CharMood.tap:
                final s = math.sin(t * math.pi);
                dy -= s * h * 0.05;
                sy += s * 0.07;
                sx -= s * 0.04;
              case CharMood.correct:
                dy -= math.sin(t * math.pi * 2).abs() * h * 0.12;
                rot += math.sin(t * math.pi * 4) * 0.04;
                sparkle = 0.5 * math.sin(t * math.pi);
              case CharMood.wrong:
                // a kind little head tilt and a shake of the head: never sad, never angry
                rot += math.sin(t * math.pi * 3) * 0.08 * (1 - t);
                dy -= math.sin(t * math.pi) * h * 0.015;
              case CharMood.celebrate:
                dy -= math.sin(t * math.pi * 3).abs() * h * 0.22;
                rot += math.sin(t * math.pi * 6) * 0.06;
                final sq = math.cos(t * math.pi * 6).abs() * 0.03;
                sy -= sq;
                sx += sq;
                sparkle = math.sin(t * math.pi);
              case CharMood.complete:
                dy -= math.sin(t * math.pi * 4).abs() * h * 0.26 * (1 - t * 0.4);
                rot += math.sin(t * math.pi * 8) * 0.07;
                sparkle = math.sin(t * math.pi);
                trophy = (t < 0.15 ? t / 0.15 : t > 0.85 ? (1 - t) / 0.15 : 1.0).clamp(0.0, 1.0);
              case CharMood.idle:
                break;
            }
          } else if (_playing == CharMood.complete || _playing == CharMood.celebrate) {
            sparkle = 0.6; // reduced motion: no movement, a still sparkle only
          }
          return SizedBox(
            height: h * 1.35,
            child: Stack(
              alignment: Alignment.bottomCenter,
              clipBehavior: Clip.none,
              children: [
                if (sparkle > 0) Positioned.fill(child: CustomPaint(painter: _SparklePainter(progress: _act.value, strength: sparkle))),
                if (trophy > 0)
                  Positioned(
                    top: 0,
                    child: Opacity(opacity: trophy, child: Transform.translate(offset: Offset(0, -h * 0.05 * (1 - trophy)), child: Icon(Icons.emoji_events_rounded, size: h * 0.3, color: const Color(0xFFFFC107)))),
                  ),
                Transform.translate(
                  offset: Offset(0, dy),
                  child: Transform(
                    alignment: Alignment.bottomCenter,
                    transform: Matrix4.identity()
                      ..rotateZ(rot)
                      ..scaleByDouble(sx, sy, 1, 1),
                    child: Image.asset(
                      AnimatedCharacter.assetFor(kind, _pose),
                      height: h,
                      fit: BoxFit.contain,
                      filterQuality: FilterQuality.medium,
                      gaplessPlayback: true,
                      semanticLabel: switch (kind) { CharacterKind.boy => 'Adam', CharacterKind.girl => 'Nour', CharacterKind.owl => 'Lulu' },
                      errorBuilder: (_, _, _) => SizedBox(height: h, width: h * 0.5),
                    ),
                  ),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}

/// Small stars that float up and fade around the character while it celebrates.
class _SparklePainter extends CustomPainter {
  final double progress;
  final double strength;
  const _SparklePainter({required this.progress, required this.strength});

  @override
  void paint(Canvas canvas, Size size) {
    const colors = [Color(0xFFFFD54F), Color(0xFFFF8A65), Color(0xFF81D4FA), Color(0xFFA5D6A7), Color(0xFFF48FB1)];
    for (var i = 0; i < 12; i++) {
      final seed = i * 2.399;
      final life = (progress * 1.4 + i / 12) % 1.0;
      final x = size.width * (0.5 + 0.48 * math.sin(seed) * (0.4 + 0.6 * life));
      final y = size.height * (0.82 - 0.7 * life) + math.cos(seed * 3) * 6;
      final r = size.height * (0.025 + 0.02 * ((i % 3) / 2)) * (1 - (life - 0.5).abs());
      final paint = Paint()..color = colors[i % colors.length].withValues(alpha: (strength * (1 - life)).clamp(0.0, 1.0));
      final path = Path();
      for (var k = 0; k < 10; k++) {
        final a = -math.pi / 2 + k * math.pi / 5 + life * 2;
        final rr = k.isEven ? r : r * 0.45;
        final p = Offset(x + math.cos(a) * rr, y + math.sin(a) * rr);
        k == 0 ? path.moveTo(p.dx, p.dy) : path.lineTo(p.dx, p.dy);
      }
      path.close();
      canvas.drawPath(path, paint);
    }
  }

  @override
  bool shouldRepaint(covariant _SparklePainter old) => old.progress != progress || old.strength != strength;
}
