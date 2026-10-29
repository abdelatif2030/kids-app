import 'dart:math' as math;

import 'package:flutter/material.dart';

/// Rehlaty's visual worlds. Every screen of the child app lives in ONE of them, so the app feels like a single place
/// with a few rooms rather than unrelated pages. All artwork is drawn in code (no image files, nothing to download).
///
/// - journey: sky, sun, clouds, soft hills with flowers and a gentle path. Home, learning map, general screens.
/// - forest: friendly trees, leaves, grass. Letters and words.
/// - ocean: calm water, bubbles, a little fish, seaweed. Listening and vocabulary.
/// - space: friendly planets and stars (a LIGHT sky so dark text stays readable). Numbers and patterns.
/// - story: a warm reading corner with a lamp glow and a shelf of books. Stories.
/// - calm: almost no decoration. Long instructions, forms, reading.
enum RWorld { journey, forest, ocean, space, story, calm }

/// The soft colours of a world's sky/ground. Always light: the dark ink (#2D3A5C) keeps a contrast of at least 7:1
/// on both ends (checked by a test).
class WorldPalette {
  final Color top;
  final Color bottom;
  const WorldPalette(this.top, this.bottom);
}

const Map<RWorld, WorldPalette> kWorldPalettes = {
  RWorld.journey: WorldPalette(Color(0xFFDDF0FF), Color(0xFFF1FAEC)),
  RWorld.forest: WorldPalette(Color(0xFFEAF7E6), Color(0xFFD6EDD1)),
  RWorld.ocean: WorldPalette(Color(0xFFDFF5F8), Color(0xFFC2E8EF)),
  RWorld.space: WorldPalette(Color(0xFFE8E5FB), Color(0xFFD8DDF6)),
  RWorld.story: WorldPalette(Color(0xFFFFF4DF), Color(0xFFFBE6CC)),
  RWorld.calm: WorldPalette(Color(0xFFEDF4FF), Color(0xFFF7FAFF)),
};

/// A background with decoration behind [child].
///
/// - The static decoration is painted once and sized by the window's
///   SHORT side up to 520 dp: on a desktop window the art stays the same size at the edges instead of stretching.
/// - It never takes taps, mouse clicks, focus or screen-reader attention (IgnorePointer + ExcludeSemantics).
/// - It is not mirrored for right-to-left: the artwork is fixed in place, so the sun is always in the same corner.
/// - A slow motion layer (clouds, bubbles, stars, lamp glow) runs on top, only when motion is allowed: never with
///   reduced motion (app or system setting), never in `quiet` or `calm`.
/// - [quiet] keeps only a faint ground line, for reading and audio playback.
class WorldBackground extends StatefulWidget {
  final RWorld world;
  final Widget child;
  final bool quiet;
  const WorldBackground({super.key, this.world = RWorld.journey, required this.child, this.quiet = false});

  /// Tests set this to true to exercise the motion layer. Otherwise the motion layer is off under a test binding, so
  /// `pumpAndSettle` is not held up by a background that never stops moving.
  static bool? forceMotion;

  static bool get _motionAllowedHere => forceMotion ?? !WidgetsBinding.instance.runtimeType.toString().contains('Test');

  @override
  State<WorldBackground> createState() => _WorldBackgroundState();
}

class _WorldBackgroundState extends State<WorldBackground> with SingleTickerProviderStateMixin {
  AnimationController? _c;

  bool get _wantsMotion => !widget.quiet && widget.world != RWorld.calm && WorldBackground._motionAllowedHere;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    _sync();
  }

  @override
  void didUpdateWidget(WorldBackground old) {
    super.didUpdateWidget(old);
    _sync();
  }

  /// One slow controller for the whole background (60 s loop). Off for reduced motion, quiet worlds and calm.
  void _sync() {
    final on = _wantsMotion && !(MediaQuery.maybeOf(context)?.disableAnimations ?? false);
    if (on && _c == null) {
      _c = AnimationController(vsync: this, duration: const Duration(seconds: 60))..repeat();
    } else if (!on && _c != null) {
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
    final world = widget.world;
    final p = kWorldPalettes[world]!;
    final c = _c;
    return DecoratedBox(
      decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [p.top, p.bottom])),
      child: Stack(
        fit: StackFit.expand,
        children: [
          Positioned.fill(
            child: ExcludeSemantics(
              child: IgnorePointer(
                child: RepaintBoundary(
                  child: CustomPaint(key: ValueKey('world_${world.name}'), painter: WorldPainter(world, quiet: widget.quiet || world == RWorld.calm)),
                ),
              ),
            ),
          ),
          if (c != null)
            Positioned.fill(
              child: ExcludeSemantics(
                child: IgnorePointer(
                  // Its own layer: the moving part repaints without touching the screen on top.
                  child: RepaintBoundary(child: CustomPaint(key: ValueKey('world_motion_${world.name}'), painter: WorldMotionPainter(world, c))),
                ),
              ),
            ),
          widget.child,
        ],
      ),
    );
  }
}

/// The slow, gentle movement over a world: drifting clouds (journey, forest), rising bubbles (ocean), twinkling stars
/// (space), a breathing lamp glow (story). Everything is a function of [t] (0..1 over a 60 s loop), so it loops with
/// no jump. Never takes taps; always faint so text on top stays readable.
class WorldMotionPainter extends CustomPainter {
  final RWorld world;
  final Animation<double> t;
  WorldMotionPainter(this.world, this.t) : super(repaint: t);

  static double _frac(double v) => v - v.floorToDouble();

  @override
  void paint(Canvas canvas, Size size) {
    if (size.isEmpty) return;
    final u = math.min(size.shortestSide, 520.0);
    final v = t.value;
    switch (world) {
      case RWorld.journey:
      case RWorld.forest:
        for (var i = 0; i < 3; i++) {
          final w = u * (0.30 + 0.06 * i);
          final x = _frac(v + i / 3) * (size.width + 2 * w) - w;
          final y = size.height * (0.08 + 0.09 * i) + math.sin((v + i) * 2 * math.pi) * u * 0.01;
          _cloud(canvas, Offset(x, y), w);
        }
      case RWorld.ocean:
        final paint = Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 2
          ..color = const Color(0x99FFFFFF);
        for (var i = 0; i < 7; i++) {
          final fx = _frac(i * 0.381 + 0.11);
          final rise = _frac(v * (1 + i % 2) + i / 7); // two speeds, both loop evenly
          final x = size.width * (0.06 + 0.88 * fx) + math.sin(rise * 2 * math.pi * 2 + i) * u * 0.015;
          canvas.drawCircle(Offset(x, size.height * (1 - rise)), u * (0.012 + 0.006 * (i % 3)), paint);
        }
      case RWorld.space:
        for (var i = 0; i < 10; i++) {
          final x = size.width * _frac(i * 0.618 + 0.07);
          final y = size.height * (0.05 + 0.5 * _frac(i * 0.371 + 0.2));
          final a = 0.25 + 0.45 * (0.5 + 0.5 * math.sin(2 * math.pi * (v * 6 + i * 0.37)));
          _sparkle(canvas, Offset(x, y), u * 0.018, const Color(0xFFFFC94D).withValues(alpha: a));
        }
      case RWorld.story:
        final pulse = 0.5 + 0.5 * math.sin(2 * math.pi * v * 4);
        final c = Offset(size.width * 0.82, size.height * 0.14);
        final r = u * (0.30 + 0.03 * pulse);
        canvas.drawCircle(
          c,
          r,
          Paint()..shader = RadialGradient(colors: [const Color(0xFFFFE2A8).withValues(alpha: 0.30 + 0.12 * pulse), const Color(0x00FFE2A8)]).createShader(Rect.fromCircle(center: c, radius: r)),
        );
      case RWorld.calm:
        break;
    }
  }

  void _cloud(Canvas canvas, Offset o, double w) {
    final p = Paint()..color = const Color(0x99FFFFFF);
    final h = w * 0.34;
    canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: o, width: w, height: h), Radius.circular(h / 2)), p);
    canvas.drawCircle(o.translate(-w * 0.12, -h * 0.35), h * 0.5, p);
    canvas.drawCircle(o.translate(w * 0.10, -h * 0.5), h * 0.62, p);
  }

  void _sparkle(Canvas canvas, Offset c, double r, Color color) {
    final path = Path()
      ..moveTo(c.dx, c.dy - r)
      ..quadraticBezierTo(c.dx, c.dy, c.dx + r, c.dy)
      ..quadraticBezierTo(c.dx, c.dy, c.dx, c.dy + r)
      ..quadraticBezierTo(c.dx, c.dy, c.dx - r, c.dy)
      ..quadraticBezierTo(c.dx, c.dy, c.dx, c.dy - r);
    canvas.drawPath(path, Paint()..color = color);
  }

  @override
  bool shouldRepaint(WorldMotionPainter old) => old.world != world;
}

/// Draws one world. Public so tests can paint it directly.
class WorldPainter extends CustomPainter {
  final RWorld world;
  final bool quiet;
  const WorldPainter(this.world, {this.quiet = false});

  @override
  void paint(Canvas canvas, Size size) {
    if (size.isEmpty) return;
    final u = math.min(size.shortestSide, 520.0); // one unit of artwork size
    // Decoration is clipped to the window and never larger than the unit allows.
    canvas.save();
    canvas.clipRect(Offset.zero & size);
    switch (world) {
      case RWorld.journey:
        _journey(canvas, size, u);
      case RWorld.forest:
        _forest(canvas, size, u);
      case RWorld.ocean:
        _ocean(canvas, size, u);
      case RWorld.space:
        _space(canvas, size, u);
      case RWorld.story:
        _story(canvas, size, u);
      case RWorld.calm:
        _calm(canvas, size, u);
    }
    canvas.restore();
  }

  Paint _p(Color c, [double alpha = 1]) => Paint()..color = c.withValues(alpha: alpha);

  void _cloud(Canvas c, Offset o, double s) {
    final paint = _p(Colors.white, quiet ? .5 : .85);
    c.drawCircle(o, s * .5, paint);
    c.drawCircle(o + Offset(s * .5, s * .1), s * .42, paint);
    c.drawCircle(o + Offset(-s * .5, s * .15), s * .36, paint);
    c.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: o + Offset(0, s * .3), width: s * 1.6, height: s * .5), Radius.circular(s * .25)), paint);
  }

  void _star(Canvas c, Offset o, double r, Color color) {
    final path = Path();
    for (var i = 0; i < 8; i++) {
      final a = i * math.pi / 4;
      final rr = i.isEven ? r : r * .38;
      final pt = o + Offset(math.cos(a) * rr, math.sin(a) * rr);
      i == 0 ? path.moveTo(pt.dx, pt.dy) : path.lineTo(pt.dx, pt.dy);
    }
    path.close();
    c.drawPath(path, Paint()..color = color);
  }

  // ---- journey ----------------------------------------------------------------------------------
  void _journey(Canvas c, Size s, double u) {
    final groundH = math.min(s.height * .16, u * .3);
    if (!quiet) {
      // sun with a soft halo, top corner
      final sun = Offset(s.width - u * .16, u * .15);
      c.drawCircle(sun, u * .15, _p(const Color(0xFFFFF6CC), .6)); // a pale warm halo (a stronger yellow looks muddy on blue)
      c.drawCircle(sun, u * .085, _p(const Color(0xFFFFD25A), .95));
      _cloud(c, Offset(u * .2, u * .13), u * .13);
      _cloud(c, Offset(s.width - u * .55, u * .3), u * .09);
    }
    // hills
    final far = Path()
      ..moveTo(0, s.height)
      ..lineTo(0, s.height - groundH * .9)
      ..quadraticBezierTo(s.width * .25, s.height - groundH * 1.5, s.width * .5, s.height - groundH * 1.0)
      ..quadraticBezierTo(s.width * .8, s.height - groundH * .5, s.width, s.height - groundH * 1.1)
      ..lineTo(s.width, s.height)
      ..close();
    c.drawPath(far, _p(const Color(0xFFCDEBC3), .9));
    final near = Path()
      ..moveTo(0, s.height)
      ..lineTo(0, s.height - groundH * .5)
      ..quadraticBezierTo(s.width * .3, s.height - groundH * .9, s.width * .6, s.height - groundH * .45)
      ..quadraticBezierTo(s.width * .85, s.height - groundH * .15, s.width, s.height - groundH * .5)
      ..lineTo(s.width, s.height)
      ..close();
    c.drawPath(near, _p(const Color(0xFFB7E1AE), .95));
    if (quiet) return;
    // a gentle path
    final path = Path()
      ..moveTo(s.width * .5 - u * .06, s.height)
      ..quadraticBezierTo(s.width * .5 + u * .02, s.height - groundH * .5, s.width * .55, s.height - groundH * .8)
      ..lineTo(s.width * .55 + u * .03, s.height - groundH * .8)
      ..quadraticBezierTo(s.width * .5 + u * .12, s.height - groundH * .5, s.width * .5 + u * .08, s.height)
      ..close();
    c.drawPath(path, _p(const Color(0xFFFFF1CC), .8));
    // flowers
    final flowers = [(.1, .55, const Color(0xFFF9A8C4)), (.18, .35, const Color(0xFFFFD25A)), (.82, .5, const Color(0xFFF9A8C4)), (.9, .3, const Color(0xFFFFFFFF)), (.72, .2, const Color(0xFFFFD25A))];
    for (final f in flowers) {
      final o = Offset(s.width * f.$1, s.height - groundH * f.$2);
      c.drawLine(o, o + Offset(0, u * .03), Paint()..color = const Color(0xFF86C77C)..strokeWidth = 2);
      c.drawCircle(o, u * .016, _p(f.$3));
      c.drawCircle(o, u * .007, _p(const Color(0xFFFFB347)));
    }
  }

  // ---- forest -----------------------------------------------------------------------------------
  void _tree(Canvas c, Offset base, double h) {
    c.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(base.dx - h * .06, base.dy - h * .45, h * .12, h * .45), Radius.circular(h * .03)), _p(const Color(0xFFC9A27E), .9));
    final crown = _p(const Color(0xFF9ED58F), .95);
    c.drawCircle(base + Offset(0, -h * .62), h * .26, crown);
    c.drawCircle(base + Offset(-h * .2, -h * .48), h * .2, _p(const Color(0xFF8CCB7E), .95));
    c.drawCircle(base + Offset(h * .2, -h * .5), h * .2, _p(const Color(0xFFABDD9C), .95));
  }

  void _leaf(Canvas c, Offset o, double r, double angle) {
    c.save();
    c.translate(o.dx, o.dy);
    c.rotate(angle);
    c.drawOval(Rect.fromCenter(center: Offset.zero, width: r * 1.8, height: r), _p(const Color(0xFF9ED58F), .6));
    c.restore();
  }

  void _forest(Canvas c, Size s, double u) {
    final grass = Path()..moveTo(0, s.height);
    final gh = math.min(s.height * .08, u * .12);
    grass.lineTo(0, s.height - gh);
    for (var i = 1; i <= 8; i++) {
      grass.quadraticBezierTo(s.width * (i - .5) / 8, s.height - gh * (i.isEven ? 1.5 : .6), s.width * i / 8, s.height - gh);
    }
    grass
      ..lineTo(s.width, s.height)
      ..close();
    c.drawPath(grass, _p(const Color(0xFFBFE3B6), .95));
    if (quiet) return;
    _tree(c, Offset(u * .2, s.height - gh * .6), u * .42);
    _tree(c, Offset(s.width - u * .2, s.height - gh * .6), u * .36);
    for (final l in [(.08, .1, .4), (.2, .06, -.5), (.9, .1, .6), (.78, .05, -.3)]) {
      _leaf(c, Offset(s.width * l.$1, u * l.$2 + u * .06), u * .06, l.$3);
    }
  }

  // ---- ocean ------------------------------------------------------------------------------------
  void _wave(Canvas c, Size s, double top, double amp, Color color) {
    final path = Path()..moveTo(0, s.height);
    path.lineTo(0, top);
    const n = 6;
    for (var i = 0; i < n; i++) {
      final x0 = s.width * i / n, x1 = s.width * (i + 1) / n;
      path.quadraticBezierTo((x0 + x1) / 2, top + (i.isEven ? -amp : amp), x1, top);
    }
    path
      ..lineTo(s.width, s.height)
      ..close();
    c.drawPath(path, Paint()..color = color);
  }

  void _ocean(Canvas c, Size s, double u) {
    final h = math.min(s.height * .14, u * .24);
    _wave(c, s, s.height - h * 1.1, h * .18, const Color(0xFF9ED8E6).withValues(alpha: .6));
    _wave(c, s, s.height - h * .7, h * .16, const Color(0xFF7CC8DB).withValues(alpha: .55));
    if (quiet) return;
    final b = Paint()..color = Colors.white.withValues(alpha: .75)..style = PaintingStyle.stroke..strokeWidth = 2;
    for (final bub in [(.06, .1, .03), (.1, .2, .02), (.04, .3, .018), (.93, .14, .025)]) {
      c.drawCircle(Offset(s.width * bub.$1, u * bub.$2 + u * .08), u * bub.$3, b);
    }
    // a little fish
    final fish = Offset(s.width - u * .2, u * .26);
    c.drawOval(Rect.fromCenter(center: fish, width: u * .12, height: u * .07), _p(const Color(0xFFFFB27A), .9));
    final tail = Path()
      ..moveTo(fish.dx + u * .05, fish.dy)
      ..lineTo(fish.dx + u * .1, fish.dy - u * .035)
      ..lineTo(fish.dx + u * .1, fish.dy + u * .035)
      ..close();
    c.drawPath(tail, _p(const Color(0xFFFFB27A), .9));
    c.drawCircle(fish + Offset(-u * .03, -u * .005), u * .007, _p(const Color(0xFF2D3A5C)));
    // seaweed
    final weed = Paint()..color = const Color(0xFF7DC9A6).withValues(alpha: .85)..style = PaintingStyle.stroke..strokeWidth = 5..strokeCap = StrokeCap.round;
    for (final x in [.08, .12]) {
      final base = Offset(s.width * x, s.height - h * .6);
      final p = Path()
        ..moveTo(base.dx, base.dy)
        ..quadraticBezierTo(base.dx - u * .03, base.dy - u * .07, base.dx, base.dy - u * .14)
        ..quadraticBezierTo(base.dx + u * .03, base.dy - u * .2, base.dx, base.dy - u * .26);
      c.drawPath(p, weed);
    }
  }

  // ---- space (a light sky) -------------------------------------------------------------------------
  void _planet(Canvas c, Offset o, double r, Color color, {bool ring = false}) {
    if (ring) {
      c.save();
      c.translate(o.dx, o.dy);
      c.rotate(-.35);
      c.drawOval(Rect.fromCenter(center: Offset.zero, width: r * 3.1, height: r * .9), Paint()..color = color.withValues(alpha: .6)..style = PaintingStyle.stroke..strokeWidth = r * .16);
      c.restore();
    }
    c.drawCircle(o, r, _p(color, .95));
    c.drawCircle(o + Offset(-r * .3, -r * .3), r * .3, _p(Colors.white, .35));
  }

  void _space(Canvas c, Size s, double u) {
    if (!quiet) {
      _planet(c, Offset(s.width - u * .16, u * .17), u * .075, const Color(0xFFF6B8A0), ring: true);
      _planet(c, Offset(u * .1, s.height - u * .16), u * .06, const Color(0xFFA9DCCB));
      _planet(c, Offset(s.width - u * .08, s.height - u * .3), u * .035, const Color(0xFFFFD98A));
      final stars = [(.06, .08, .02), (.16, .2, .014), (.3, .06, .012), (.9, .38, .016), (.7, .08, .012), (.05, .45, .012), (.94, .62, .018), (.2, .88, .016)];
      for (final st in stars) {
        _star(c, Offset(s.width * st.$1, s.height * st.$2 * .9 + u * .03), u * st.$3 * 1.6, st.$3 > .015 ? const Color(0xFFFFD25A) : const Color(0xFFFFFFFF));
      }
    }
    // a faint curved horizon line at the bottom
    final gh = math.min(s.height * .06, u * .1);
    final path = Path()
      ..moveTo(0, s.height)
      ..lineTo(0, s.height - gh)
      ..quadraticBezierTo(s.width / 2, s.height - gh * 2.2, s.width, s.height - gh)
      ..lineTo(s.width, s.height)
      ..close();
    c.drawPath(path, _p(const Color(0xFFC9CCF0), .7));
  }

  // ---- story corner -------------------------------------------------------------------------------
  void _story(Canvas c, Size s, double u) {
    final shelfH = math.min(s.height * .12, u * .2);
    // the floor/rug
    c.drawRect(Rect.fromLTWH(0, s.height - shelfH * .35, s.width, shelfH * .35), _p(const Color(0xFFF4CFA4), .9));
    if (quiet) return;
    // warm lamp glow in a top corner
    final lamp = Offset(u * .16, u * .12);
    c.drawCircle(lamp, u * .2, _p(const Color(0xFFFFE3A3), .35));
    c.drawCircle(lamp, u * .11, _p(const Color(0xFFFFD98A), .55));
    c.drawLine(Offset(lamp.dx, 0), lamp, Paint()..color = const Color(0xFFB98F66)..strokeWidth = 3);
    c.drawCircle(lamp, u * .035, _p(const Color(0xFFFFC857)));
    // a row of books on the floor line, bottom right
    final colors = [const Color(0xFFF4B6A6), const Color(0xFFF8D58E), const Color(0xFFA9D6C9), const Color(0xFFC3B5E8), const Color(0xFFF4B6A6)];
    var x = s.width - u * .45;
    final heights = [.1, .14, .09, .13, .11];
    for (var i = 0; i < colors.length; i++) {
      final w = u * .05;
      c.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(x, s.height - shelfH * .35 - u * heights[i], w, u * heights[i]), const Radius.circular(4)), _p(colors[i], .95));
      x += w + 3;
    }
    // a round cushion, bottom left
    c.drawOval(Rect.fromCenter(center: Offset(u * .22, s.height - shelfH * .3), width: u * .22, height: u * .09), _p(const Color(0xFFF2A9B8), .9));
    _star(c, Offset(s.width - u * .12, u * .14), u * .035, const Color(0xFFFFD25A).withValues(alpha: .8));
  }

  // ---- calm ---------------------------------------------------------------------------------------
  void _calm(Canvas c, Size s, double u) {
    c.drawCircle(Offset(s.width - u * .05, u * .05), u * .3, _p(const Color(0xFFFFE3D6), .35));
    c.drawCircle(Offset(u * .02, s.height - u * .1), u * .34, _p(const Color(0xFFD9E7FF), .5));
  }

  @override
  bool shouldRepaint(covariant WorldPainter old) => old.world != world || old.quiet != quiet;
}
