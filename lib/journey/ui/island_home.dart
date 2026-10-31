import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../../design/focusable_tap.dart';
import '../../design/motion.dart';
import '../../l10n/strings.dart';

/// Which home the child sees: the usual list, or the island map. A local, per-device choice; the list is the default.
class HomeViewPref extends ChangeNotifier {
  HomeViewPref._();
  static final HomeViewPref instance = HomeViewPref._();
  static const _key = 'home_view';

  bool mapView = false;
  bool _loaded = false;

  Future<void> ensureLoaded() async {
    if (_loaded) return;
    _loaded = true;
    try {
      final v =
          (await SharedPreferences.getInstance()).getString(_key) == 'map';
      if (v != mapView) {
        mapView = v;
        notifyListeners();
      }
    } catch (_) {}
  }

  Future<void> set(bool map) async {
    mapView = map;
    _loaded = true;
    notifyListeners();
    try {
      await (await SharedPreferences.getInstance()).setString(
        _key,
        map ? 'map' : 'list',
      );
    } catch (_) {}
  }

  /// For tests.
  void resetForTest() {
    mapView = false;
    _loaded = false;
  }
}

/// One island on the map: a section of the app.
class IslandSpec {
  final String id;
  final String title;
  final String emoji;
  final Color grass;
  final Color grassDark;
  final VoidCallback onTap;

  /// Relative size on the map (1 = normal). The most important destination is bigger.
  final double weight;

  /// House shape 0..3 (cottage, tall house, wide shop, tower); null picks one by position.
  final int? houseStyle;

  /// An optional small widget on the house's top corner (for example a "done" tick or a heart). It has its own tap.
  final Widget? overlay;
  const IslandSpec({
    required this.id,
    required this.title,
    required this.emoji,
    required this.grass,
    required this.grassDark,
    required this.onTap,
    this.weight = 1,
    this.houseStyle,
    this.overlay,
  });
}

/// Where the landmarks go on the world map of width [width]: one zig-zag down a single floating island, first section
/// at the top. Pure and tested: every landmark stays inside the canvas and neighbours never overlap, whatever the
/// reading direction ([rtl] mirrors it, so Arabic starts on the right).
class WorldMapLayout {
  final List<Offset> centers;
  final double size;

  /// Each landmark's own size (the base [size] times its weight, kept inside the canvas).
  final List<double> sizes;
  final double width;
  final double height;

  /// The first landmark's top edge and the island's rim: shared with the painter.
  final double rimTop;

  /// True for the horizontal map (landscape windows): the path runs sideways, left to right (right to left in Arabic).
  final bool wide;
  const WorldMapLayout(
    this.centers,
    this.size,
    this.width,
    this.height,
    this.rimTop, [
    this.sizes = const [],
    this.wide = false,
  ]);

  double sizeAt(int i) => i < sizes.length ? sizes[i] : size;

  static const _xs = [0.28, 0.72, 0.30, 0.70];

  static WorldMapLayout compute(
    int count,
    double width, {
    bool rtl = false,
    List<double>? weights,
  }) {
    final w = math.min(width, 620.0);
    final size = (w * 0.30).clamp(88.0, 140.0);
    final sizes = [
      for (var i = 0; i < count; i++)
        math
            .min(
              size * (weights != null && i < weights.length ? weights[i] : 1.0),
              w * 0.38,
            )
            .toDouble(),
    ];
    final rimTop = w * 0.16;
    final first = rimTop + w * 0.10 + sizes.firstOrNull.orZero / 2;
    final centers = <Offset>[];
    var y = first;
    for (var i = 0; i < count; i++) {
      // Neighbours sit in different columns, so they may share height; the same column is two steps apart.
      if (i > 0) y += math.max(sizes[i - 1], sizes[i]) * 0.5 + 66;
      centers.add(Offset((rtl ? 1 - _xs[i % 4] : _xs[i % 4]) * w, y));
    }
    final bottom = count == 0 ? first : centers.last.dy + sizes.last / 2 + 74;
    return WorldMapLayout(centers, size, w, bottom + w * 0.14, rimTop, sizes);
  }
}

/// The horizontal map: the same island and houses laid out along the width, neighbours alternating between an upper and a
/// lower row. [minWidth] is the window width: a short list is centred on a full-width island, a long list makes the
/// canvas wider than the window (the home scrolls it sideways). [rtl] starts on the right.
WorldMapLayout computeWideMapLayout(
  int count,
  double minWidth,
  double height, {
  bool rtl = false,
  List<double>? weights,
}) {
  final h = height.clamp(380.0, 560.0).toDouble();
  final size = (h * 0.27).clamp(88.0, 132.0).toDouble();
  final sizes = [
    for (var i = 0; i < count; i++)
      math
          .min(
            size * (weights != null && i < weights.length ? weights[i] : 1.0),
            h * 0.36,
          )
          .toDouble(),
  ];
  final margin = h * 0.14;
  final xs = <double>[];
  var x = margin + (sizes.firstOrNull.orZero + 28) / 2;
  for (var i = 0; i < count; i++) {
    if (i > 0) x += math.max(sizes[i - 1], sizes[i]) * 0.95 + 70;
    xs.add(x);
  }
  final natural = count == 0
      ? minWidth
      : xs.last + (sizes.last + 28) / 2 + margin;
  final width = math.max(natural, minWidth);
  final shift = (width - natural) / 2;
  final centers = <Offset>[
    for (var i = 0; i < count; i++)
      Offset(
        rtl ? width - (xs[i] + shift) : xs[i] + shift,
        (i.isEven ? 0.30 : 0.64) * h,
      ),
  ];
  return WorldMapLayout(centers, size, width, h, h * 0.08, sizes, true);
}

extension on double? {
  double get orZero => this ?? 0;
}

/// The world map: ONE floating island with a house for each section of the app, a winding path, a mountain, trees and
/// flowers. Original artwork drawn in code (no images). Each house is one big tap target with its name. It moves
/// gently: the island floats, clouds drift, chimneys smoke, trees sway, birds fly past; all of it stops when motion is
/// reduced (and in tests), leaving the same picture standing still.
class IslandHome extends StatefulWidget {
  final List<IslandSpec> islands;
  const IslandHome({super.key, required this.islands});

  /// Tests set this to true to exercise the movement; otherwise it is off under a test binding.
  static bool? forceMotion;

  @override
  State<IslandHome> createState() => _IslandHomeState();
}

class _IslandHomeState extends State<IslandHome>
    with SingleTickerProviderStateMixin {
  AnimationController? _c;

  bool get _motionAllowed =>
      IslandHome.forceMotion ??
      !WidgetsBinding.instance.runtimeType.toString().contains('Test');

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final on = _motionAllowed && !motionReduced(context);
    if (on && _c == null) {
      // One slow loop for everything (the pieces use whole multiples of it, so it never jumps).
      _c = AnimationController(
        vsync: this,
        duration: const Duration(seconds: 24),
      )..repeat();
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

  /// The horizontal map: a sea with every section on its own floating island, joined by rope bridges.
  Widget _buildWide(
    BuildContext context,
    WorldMapLayout layout,
    double avail,
    AnimationController? c,
  ) {
    final canvas = ClipRRect(
      borderRadius: BorderRadius.circular(28),
      child: SizedBox(
        width: layout.width,
        height: layout.height,
        child: Stack(
          clipBehavior: Clip.none,
          children: [
            Positioned.fill(
              child: ExcludeSemantics(
                child: IgnorePointer(
                  child: RepaintBoundary(
                    child: CustomPaint(
                      key: const ValueKey('world_map_sky'),
                      painter: _SeaPainter(layout, c),
                    ),
                  ),
                ),
              ),
            ),
            Positioned.fill(
              child: ExcludeSemantics(
                child: IgnorePointer(
                  child: RepaintBoundary(
                    child: CustomPaint(
                      key: const ValueKey('world_map_art'),
                      painter: _BridgesPainter(layout),
                    ),
                  ),
                ),
              ),
            ),
            for (final (i, spec) in widget.islands.indexed)
              Positioned(
                left: layout.centers[i].dx - layout.sizeAt(i) * 0.95,
                top: layout.centers[i].dy - layout.sizeAt(i) / 2,
                width: layout.sizeAt(i) * 1.9,
                height: layout.sizeAt(i) * 1.8,
                child: _WideIsland(
                  spec: spec,
                  size: layout.sizeAt(i),
                  style: spec.houseStyle ?? i % 4,
                  t: c,
                  index: i,
                ),
              ),
          ],
        ),
      ),
    );
    if (layout.width > avail + 0.5) {
      // Longer than the window: slide it sideways (it starts at the right in Arabic).
      return SingleChildScrollView(
        key: const ValueKey('world_map_scroll'),
        scrollDirection: Axis.horizontal,
        child: canvas,
      );
    }
    return Center(child: canvas);
  }

  @override
  Widget build(BuildContext context) {
    final rtl = Directionality.of(context) == TextDirection.rtl;
    return LayoutBuilder(
      builder: (context, box) {
        final avail = box.maxWidth.isFinite ? box.maxWidth : 400.0;
        final screen = MediaQuery.sizeOf(context);
        // Landscape windows get the horizontal map; a portrait phone keeps the tall one.
        final wide = avail >= 700 || avail > screen.height * 1.1;
        final weights = [for (final i in widget.islands) i.weight];
        final layout = wide
            ? computeWideMapLayout(
                widget.islands.length,
                avail,
                box.maxHeight.isFinite ? box.maxHeight : screen.height - 200,
                rtl: rtl,
                weights: weights,
              )
            : WorldMapLayout.compute(
                widget.islands.length,
                avail,
                rtl: rtl,
                weights: weights,
              );
        final c = _c;
        if (layout.wide) return _buildWide(context, layout, avail, c);
        final decor = _Decor.of(layout);
        Widget floating(Widget child) {
          if (c == null) return child;
          return AnimatedBuilder(
            animation: c,
            child: child,
            builder: (context, ch) => Transform.translate(
              offset: Offset(0, math.sin(c.value * 2 * math.pi * 4) * 3),
              child: ch,
            ),
          );
        }

        final canvas = SizedBox(
          width: layout.width,
          height: layout.height,
          child: Stack(
            clipBehavior: Clip.none,
            children: [
              // Sky: clouds drifting behind the island.
              Positioned.fill(
                child: ExcludeSemantics(
                  child: IgnorePointer(
                    child: RepaintBoundary(
                      child: CustomPaint(
                        key: const ValueKey('world_map_sky'),
                        painter: _SkyMotionPainter(layout, c),
                      ),
                    ),
                  ),
                ),
              ),
              // The island, floating up and down a little, with the swaying trees on it.
              Positioned.fill(
                child: floating(
                  ExcludeSemantics(
                    child: IgnorePointer(
                      child: Stack(
                        fit: StackFit.expand,
                        children: [
                          RepaintBoundary(
                            child: CustomPaint(
                              key: const ValueKey('world_map_art'),
                              painter: _WorldMapPainter(layout, decor),
                            ),
                          ),
                          RepaintBoundary(
                            child: CustomPaint(
                              key: const ValueKey('world_map_trees'),
                              painter: _TreesPainter(layout, decor, c),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
              for (final (i, spec) in widget.islands.indexed)
                Positioned(
                  left: layout.centers[i].dx - layout.sizeAt(i) / 2 - 14,
                  top: layout.centers[i].dy - layout.sizeAt(i) / 2,
                  width: layout.sizeAt(i) + 28,
                  height: layout.sizeAt(i) + 58,
                  child: floating(
                    _House(
                      spec: spec,
                      size: layout.sizeAt(i),
                      style: spec.houseStyle ?? i % 4,
                      t: c,
                    ),
                  ),
                ),
            ],
          ),
        );
        return Center(child: canvas);
      },
    );
  }
}

/// One section on the map: a little house, a round sign with the picture on its wall, and a wooden name plate.
class _House extends StatelessWidget {
  final IslandSpec spec;
  final double size;
  final int style;
  final Animation<double>? t;
  const _House({
    required this.spec,
    required this.size,
    required this.style,
    required this.t,
  });

  @override
  Widget build(BuildContext context) {
    return FocusableTap(
      key: ValueKey('island_${spec.id}'),
      onTap: spec.onTap,
      radius: 28,
      semanticLabel: spec.title,
      child: Stack(
        alignment: Alignment.topCenter,
        children: [
          SizedBox(
            width: size + 28,
            height: size,
            child: Stack(
              alignment: Alignment.topCenter,
              children: [
                Positioned.fill(
                  child: RepaintBoundary(
                    child: CustomPaint(
                      painter: _HousePainter(
                        spec.grass,
                        spec.grassDark,
                        style,
                        t,
                        spec.id.hashCode,
                      ),
                    ),
                  ),
                ),
                // The picture on the round sign on the wall.
                Positioned(
                  top: size * 0.46,
                  child: ExcludeSemantics(
                    child: _MovingEmoji(
                      emoji: spec.emoji,
                      fontSize: size * 0.26,
                      t: t,
                      phase: (spec.id.hashCode % 97) / 97,
                    ),
                  ),
                ),
              ],
            ),
          ),
          Positioned(
            bottom: 0,
            child: Container(
              constraints: BoxConstraints(maxWidth: size + 28, minHeight: 40),
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
              alignment: Alignment.center,
              decoration: BoxDecoration(
                color: const Color(0xFFFFF3D6),
                borderRadius: BorderRadius.circular(14),
                border: Border.all(color: const Color(0xFF9A6B3A), width: 3),
                boxShadow: const [
                  BoxShadow(
                    color: Color(0x33000000),
                    blurRadius: 4,
                    offset: Offset(0, 2),
                  ),
                ],
              ),
              child: Text(
                spec.title,
                textAlign: TextAlign.center,
                maxLines: 2,
                overflow: TextOverflow.ellipsis,
                style: const TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.w900,
                  color: Color(0xFF4A3320),
                  height: 1.1,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

/// One section on the horizontal map: a floating island (grass, rock, a waterfall into the sea) with the house on it. The
/// island and the house bob together, each at its own moment. Standing still when [t] is null.
class _WideIsland extends StatelessWidget {
  final IslandSpec spec;
  final double size;
  final int style;
  final Animation<double>? t;
  final int index;
  const _WideIsland({
    required this.spec,
    required this.size,
    required this.style,
    required this.t,
    required this.index,
  });

  @override
  Widget build(BuildContext context) {
    final a = t;
    final body = Stack(
      clipBehavior: Clip.none,
      children: [
        Positioned.fill(
          child: ExcludeSemantics(
            child: IgnorePointer(
              child: RepaintBoundary(
                child: CustomPaint(
                  painter: _IslandBasePainter(
                    size,
                    spec.grass,
                    spec.grassDark,
                    a,
                    index,
                  ),
                ),
              ),
            ),
          ),
        ),
        Positioned(
          left: size * 0.95 - (size + 28) / 2,
          top: 0,
          width: size + 28,
          height: size + 58,
          child: _House(spec: spec, size: size, style: style, t: a),
        ),
        if (spec.overlay != null)
          Positioned(
            left: size * 0.95 + (size + 28) / 2 - 36,
            top: 0,
            child: spec.overlay!,
          ),
      ],
    );
    if (a == null) return body;
    return AnimatedBuilder(
      animation: a,
      child: body,
      builder: (context, ch) => Transform.translate(
        offset: Offset(
          0,
          math.sin((a.value * 6 + index * 0.31) * 2 * math.pi) * 6,
        ),
        child: ch,
      ),
    );
  }
}

/// The sea: sky at the top, turquoise to deep blue water below, with drifting clouds and wave lines.
class _SeaPainter extends CustomPainter {
  final WorldMapLayout l;
  final Animation<double>? t;
  _SeaPainter(this.l, this.t) : super(repaint: t);

  @override
  void paint(Canvas canvas, Size s) {
    final tt = t?.value ?? 0;
    final horizon = s.height * 0.16;
    canvas.drawRect(
      Rect.fromLTWH(0, 0, s.width, horizon + 2),
      Paint()
        ..shader = const LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [Color(0xFF8ED6F8), Color(0xFFD9F3FF)],
        ).createShader(Rect.fromLTWH(0, 0, s.width, horizon)),
    );
    canvas.drawRect(
      Rect.fromLTWH(0, horizon, s.width, s.height - horizon),
      Paint()
        ..shader = const LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [Color(0xFF45C8E8), Color(0xFF1C8FD0), Color(0xFF1470B8)],
        ).createShader(Rect.fromLTWH(0, horizon, s.width, s.height - horizon)),
    );
    final cloud = Paint()..color = const Color(0xE6FFFFFF);
    final r0 = s.height * 0.045;
    for (var i = 0; i < 4; i++) {
      final x = ((i * 0.27 + tt * (1 + i % 2)) % 1.0) * (s.width + 200) - 100;
      final y = horizon * (0.25 + 0.4 * (i % 2));
      final r = r0 * (1 + 0.2 * (i % 3));
      canvas.drawCircle(Offset(x, y), r, cloud);
      canvas.drawCircle(Offset(x + r * 0.9, y + r * 0.2), r * 0.8, cloud);
      canvas.drawCircle(Offset(x - r * 0.9, y + r * 0.3), r * 0.7, cloud);
    }
    final wave = Paint()
      ..color = const Color(0x55FFFFFF)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2.4
      ..strokeCap = StrokeCap.round;
    final rnd = math.Random(8);
    final count = (s.width / 70).round().clamp(10, 60);
    for (var i = 0; i < count; i++) {
      final y =
          horizon + (s.height - horizon) * (0.1 + 0.85 * rnd.nextDouble());
      final base = rnd.nextDouble();
      final x = ((base + tt * (1 + i % 3)) % 1.0) * (s.width + 80) - 40;
      final len = 14 + 14 * rnd.nextDouble();
      final path = Path()
        ..moveTo(x - len, y)
        ..quadraticBezierTo(x - len / 2, y - 5, x, y)
        ..quadraticBezierTo(x + len / 2, y + 5, x + len, y);
      canvas.drawPath(path, wave);
    }
  }

  @override
  bool shouldRepaint(_SeaPainter old) =>
      old.l.width != l.width || old.l.height != l.height;
}

/// A rope bridge between each island and the next (planks, a rope below and a hand rope above).
class _BridgesPainter extends CustomPainter {
  final WorldMapLayout l;
  _BridgesPainter(this.l);

  @override
  void paint(Canvas canvas, Size s) {
    final rope = Paint()
      ..color = const Color(0xFF6B4423)
      ..style = PaintingStyle.stroke
      ..strokeCap = StrokeCap.round;
    final plank = Paint()..color = const Color(0xFFB97B3F);
    for (var i = 0; i + 1 < l.centers.length; i++) {
      final a = l.centers[i], b = l.centers[i + 1];
      final za = l.sizeAt(i), zb = l.sizeAt(i + 1);
      final dir = b.dx >= a.dx ? 1.0 : -1.0;
      final p0 = Offset(a.dx + dir * za * 0.62, a.dy + za * 0.46);
      final p1 = Offset(b.dx - dir * zb * 0.62, b.dy + zb * 0.46);
      final ctrl = Offset((p0.dx + p1.dx) / 2, math.max(p0.dy, p1.dy) + 18);
      Offset at(double u) {
        final v = 1 - u;
        return Offset(
          v * v * p0.dx + 2 * v * u * ctrl.dx + u * u * p1.dx,
          v * v * p0.dy + 2 * v * u * ctrl.dy + u * u * p1.dy,
        );
      }

      final low = Path()..moveTo(p0.dx, p0.dy);
      final high = Path()..moveTo(p0.dx, p0.dy - 22);
      for (var k = 1; k <= 24; k++) {
        final p = at(k / 24);
        low.lineTo(p.dx, p.dy);
        high.lineTo(p.dx, p.dy - 22);
      }
      canvas.drawPath(low, rope..strokeWidth = 3);
      canvas.drawPath(high, rope..strokeWidth = 2.2);
      for (var k = 0; k <= 12; k++) {
        final p = at(k / 12);
        canvas.drawRRect(
          RRect.fromRectAndRadius(
            Rect.fromCenter(center: p.translate(0, 3), width: 9, height: 16),
            const Radius.circular(2),
          ),
          plank,
        );
        if (k % 3 == 0) {
          canvas.drawLine(p, p.translate(0, -22), rope..strokeWidth = 2);
        }
      }
    }
  }

  @override
  bool shouldRepaint(_BridgesPainter old) =>
      old.l.width != l.width ||
      old.l.height != l.height ||
      old.l.centers != l.centers;
}

/// The island under a house: a grass top, a rock that narrows to a point, a flowing waterfall with foam, and a few
/// flowers and bushes. [t] drives only the water; the island itself is still.
class _IslandBasePainter extends CustomPainter {
  final double z;
  final Color grass;
  final Color grassDark;
  final Animation<double>? t;
  final int index;
  _IslandBasePainter(this.z, this.grass, this.grassDark, this.t, this.index)
    : super(repaint: t);

  @override
  void paint(Canvas canvas, Size s) {
    final cx = s.width / 2;
    final gy = z * 0.93; // the ground line under the house
    final rx = z * 0.92, ry = z * 0.19;
    final rockBottom = gy + z * 0.55;
    final rock = Path()
      ..moveTo(cx - rx, gy)
      ..cubicTo(
        cx - rx * 0.95,
        gy + z * 0.30,
        cx - rx * 0.45,
        gy + z * 0.42,
        cx - rx * 0.12,
        rockBottom,
      )
      ..quadraticBezierTo(cx, rockBottom + z * 0.08, cx + rx * 0.12, rockBottom)
      ..cubicTo(
        cx + rx * 0.45,
        gy + z * 0.42,
        cx + rx * 0.95,
        gy + z * 0.30,
        cx + rx,
        gy,
      )
      ..close();
    canvas.drawPath(rock, Paint()..color = const Color(0xFF8A5A3A));
    canvas.save();
    canvas.clipPath(rock);
    canvas.drawRect(
      Rect.fromLTWH(cx - rx, gy, rx * 2, z * 0.7),
      Paint()
        ..shader = const LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [Color(0xFFB07A4F), Color(0xFF6E4429)],
        ).createShader(Rect.fromLTWH(cx - rx, gy, rx * 2, z * 0.7)),
    );
    final cr = Paint()
      ..color = const Color(0x40000000)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2;
    for (var i = 0; i < 4; i++) {
      final x = cx - rx * 0.6 + rx * 0.4 * i;
      canvas.drawLine(
        Offset(x, gy + z * 0.05),
        Offset(x + z * 0.03 * (i.isEven ? 1 : -1), gy + z * (0.22 + 0.04 * i)),
        cr,
      );
    }
    canvas.restore();
    // a waterfall from the rock down into the sea
    final wx = cx + rx * 0.30;
    final wTop = gy + z * 0.12;
    final wBot = s.height;
    final tt = t?.value ?? 0;
    canvas.drawRRect(
      RRect.fromRectAndRadius(
        Rect.fromLTRB(wx - z * 0.07, wTop, wx + z * 0.07, wBot),
        const Radius.circular(6),
      ),
      Paint()..color = const Color(0xCCE8F8FF),
    );
    final streak = Paint()
      ..color = Colors.white
      ..strokeWidth = 2.4
      ..strokeCap = StrokeCap.round;
    for (var k = 0; k < 3; k++) {
      final x = wx + (k - 1) * z * 0.04;
      for (var d = 0; d < 5; d++) {
        final y0 = wTop + ((d / 5 + tt * 12 + k * 0.17) % 1.0) * (wBot - wTop);
        canvas.drawLine(
          Offset(x, y0),
          Offset(x, math.min(y0 + z * 0.09, wBot)),
          streak,
        );
      }
    }
    canvas.drawOval(
      Rect.fromCenter(
        center: Offset(wx, wBot - 2),
        width: z * 0.42,
        height: z * 0.1,
      ),
      Paint()..color = const Color(0x99FFFFFF),
    );
    // grass top
    final top = Rect.fromCenter(
      center: Offset(cx, gy),
      width: rx * 2,
      height: ry * 2,
    );
    canvas.drawOval(
      top.shift(const Offset(0, 4)),
      Paint()..color = const Color(0xFF3F8A2E),
    );
    canvas.drawOval(top, Paint()..color = grassDark);
    canvas.drawOval(
      top.deflate(4),
      Paint()..color = Color.lerp(grass, const Color(0xFF8ED45A), 0.7)!,
    );
    final rnd = math.Random(index * 7 + 3);
    for (var k = 0; k < 5; k++) {
      final side = k.isEven ? -1.0 : 1.0;
      final bx = cx + side * rx * (0.62 + 0.28 * rnd.nextDouble());
      final by = gy + ry * 0.35 * rnd.nextDouble();
      if (k < 2) {
        canvas.drawCircle(
          Offset(bx, by),
          z * 0.07,
          Paint()..color = const Color(0xFF3FA34D),
        );
        canvas.drawCircle(
          Offset(bx - z * 0.02, by - z * 0.02),
          z * 0.04,
          Paint()..color = const Color(0xFF7BC96F),
        );
      } else {
        canvas.drawCircle(
          Offset(bx, by),
          3.4,
          Paint()..color = k == 3 ? Colors.white : const Color(0xFFFF8FB1),
        );
        canvas.drawCircle(
          Offset(bx, by),
          1.4,
          Paint()..color = const Color(0xFFFFA000),
        );
      }
    }
  }

  @override
  bool shouldRepaint(_IslandBasePainter old) =>
      old.z != z || old.grass != grass || old.index != index;
}

/// The picture on a house's sign: it bobs, tilts and pulses a little (each house at its own moment) so the map feels
/// alive. Standing still when [t] is null (motion reduced, or under a test binding). Whole cycles per loop, so no jump.
class _MovingEmoji extends StatelessWidget {
  final String emoji;
  final double fontSize;
  final Animation<double>? t;
  final double phase;
  const _MovingEmoji({
    required this.emoji,
    required this.fontSize,
    required this.t,
    required this.phase,
  });

  @override
  Widget build(BuildContext context) {
    final text = Text(emoji, style: TextStyle(fontSize: fontSize));
    final a = t;
    if (a == null) return text;
    return AnimatedBuilder(
      animation: a,
      child: text,
      builder: (context, child) {
        final bob = math.sin((a.value * 12 + phase) * 2 * math.pi);
        final tilt = math.sin((a.value * 6 + phase) * 2 * math.pi);
        final pulse = math.sin(
          (a.value * 12 + phase) * 2 * math.pi + math.pi / 2,
        );
        return Transform.translate(
          offset: Offset(0, bob * fontSize * 0.14),
          child: Transform.rotate(
            angle: tilt * 0.14,
            child: Transform.scale(scale: 1 + pulse * 0.09, child: child),
          ),
        );
      },
    );
  }
}

/// A house in four shapes (cottage, tall house, wide shop, tower), coloured from the section's colours. A chimney puffs
/// smoke when [t] is moving.
class _HousePainter extends CustomPainter {
  final Color color;
  final Color dark;
  final int style;
  final Animation<double>? t;
  final int seed;
  _HousePainter(this.color, this.dark, this.style, this.t, this.seed)
    : super(repaint: t);

  @override
  void paint(Canvas canvas, Size s) {
    final w = s.width, h = s.height;
    final cx = w / 2;
    final unit = math.min(
      w - 28,
      h,
    ); // the house itself is as wide as the layout's size
    final u = unit;
    final left = cx - u / 2;
    Rect r(double x0, double y0, double x1, double y1) =>
        Rect.fromLTRB(left + x0 * u, y0 * h, left + x1 * u, y1 * h);

    final wall = Color.lerp(Colors.white, color, 0.28)!;
    final wallEdge = Color.lerp(color, Colors.black, 0.15)!;
    final roof = dark;
    final roofLight = Color.lerp(dark, Colors.white, 0.18)!;

    // shadow on the grass
    canvas.drawOval(
      Rect.fromCenter(
        center: Offset(cx, h * 0.93),
        width: u * 1.0,
        height: h * 0.1,
      ),
      Paint()..color = const Color(0x33000000),
    );

    // chimney (behind the roof) and its smoke
    final chimneyX = style == 3 ? 0.66 : (style == 1 ? 0.7 : 0.68);
    final chimneyTop = style == 3 ? 0.14 : 0.16;
    final chim = r(chimneyX, chimneyTop, chimneyX + 0.1, chimneyTop + 0.2);
    canvas.drawRRect(
      RRect.fromRectAndRadius(chim, const Radius.circular(2)),
      Paint()..color = const Color(0xFF9C6B4E),
    );
    canvas.drawRect(
      Rect.fromLTWH(chim.left - 2, chim.top - 3, chim.width + 4, 5),
      Paint()..color = const Color(0xFF7D5238),
    );
    final tt = t?.value ?? 0;
    for (var k = 0; k < 3; k++) {
      final p =
          (tt * 24 / 6 + k / 3 + (seed % 7) / 7) %
          1; // a puff every 2 s: 24 s loop, whole cycles
      final pos = Offset(
        chim.center.dx + math.sin((p + k) * 5) * u * 0.03 + p * u * 0.05,
        chim.top - 4 - p * h * 0.22,
      );
      canvas.drawCircle(
        pos,
        u * (0.03 + 0.04 * p),
        Paint()
          ..color = Colors.white.withValues(
            alpha: (t == null ? 0.0 : 0.75 * (1 - p)),
          ),
      );
    }

    // wall
    final wallRect = switch (style) {
      1 => r(0.18, 0.34, 0.82, 0.92),
      2 => r(0.06, 0.48, 0.94, 0.92),
      3 => r(0.26, 0.36, 0.74, 0.92),
      _ => r(0.12, 0.44, 0.88, 0.92),
    };
    final wr = RRect.fromRectAndRadius(wallRect, const Radius.circular(8));
    canvas.drawRRect(wr, Paint()..color = wall);
    canvas.drawRRect(
      wr,
      Paint()
        ..color = wallEdge
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2.5,
    );

    // roof
    final roofPath = Path();
    switch (style) {
      case 1: // tall house: steep roof with an attic window
        roofPath
          ..moveTo(left + 0.1 * u, 0.4 * h)
          ..lineTo(left + 0.5 * u, 0.04 * h)
          ..lineTo(left + 0.9 * u, 0.4 * h)
          ..close();
      case 2: // wide shop: low roof
        roofPath
          ..moveTo(left + 0.0 * u, 0.52 * h)
          ..lineTo(left + 0.18 * u, 0.28 * h)
          ..lineTo(left + 0.82 * u, 0.28 * h)
          ..lineTo(left + 1.0 * u, 0.52 * h)
          ..close();
      case 3: // tower: a cone
        roofPath
          ..moveTo(left + 0.2 * u, 0.42 * h)
          ..lineTo(left + 0.5 * u, 0.02 * h)
          ..lineTo(left + 0.8 * u, 0.42 * h)
          ..close();
      default: // cottage
        roofPath
          ..moveTo(left + 0.04 * u, 0.5 * h)
          ..lineTo(left + 0.5 * u, 0.12 * h)
          ..lineTo(left + 0.96 * u, 0.5 * h)
          ..close();
    }
    canvas.drawPath(roofPath, Paint()..color = roof);
    canvas.drawPath(
      roofPath,
      Paint()
        ..color = Color.lerp(roof, Colors.black, 0.2)!
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2.5
        ..strokeJoin = StrokeJoin.round,
    );
    // roof tiles: a light stripe
    final tile = Paint()
      ..color = roofLight
      ..strokeWidth = 3
      ..strokeCap = StrokeCap.round;
    final b = roofPath.getBounds();
    canvas.drawLine(
      Offset(b.left + b.width * 0.28, b.bottom - b.height * 0.28),
      Offset(b.right - b.width * 0.28, b.bottom - b.height * 0.28),
      tile,
    );

    // attic window / round window
    if (style == 1 || style == 3) {
      final wc = Offset(left + 0.5 * u, style == 1 ? 0.27 * h : 0.3 * h);
      canvas.drawCircle(wc, u * 0.07, Paint()..color = const Color(0xFFBFE6FF));
      canvas.drawCircle(
        wc,
        u * 0.07,
        Paint()
          ..color = const Color(0xFF7A5A3A)
          ..style = PaintingStyle.stroke
          ..strokeWidth = 2.5,
      );
    }

    // the round sign for the picture (the emoji is drawn over it by the widget)
    final signC = Offset(cx, wallRect.top + wallRect.height * 0.42);
    canvas.drawCircle(
      signC.translate(0, 2),
      u * 0.19,
      Paint()..color = const Color(0x33000000),
    );
    canvas.drawCircle(signC, u * 0.19, Paint()..color = Colors.white);
    canvas.drawCircle(
      signC,
      u * 0.19,
      Paint()
        ..color = color
        ..style = PaintingStyle.stroke
        ..strokeWidth = 4,
    );

    // side windows
    final win = Paint()..color = const Color(0xFFBFE6FF);
    final frame = Paint()
      ..color = const Color(0xFF7A5A3A)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2;
    if (style != 3) {
      for (final fx in [
        wallRect.left + wallRect.width * 0.1,
        wallRect.right - wallRect.width * 0.1 - u * 0.1,
      ]) {
        final wr2 = Rect.fromLTWH(
          fx,
          wallRect.top + wallRect.height * 0.12,
          u * 0.1,
          u * 0.1,
        );
        canvas.drawRect(wr2, win);
        canvas.drawRect(wr2, frame);
        canvas.drawLine(wr2.centerLeft, wr2.centerRight, frame);
        canvas.drawLine(wr2.topCenter, wr2.bottomCenter, frame);
      }
    }

    // door
    final doorW = u * 0.16, doorH = h * 0.17;
    final door = RRect.fromRectAndCorners(
      Rect.fromLTWH(cx - doorW / 2, wallRect.bottom - doorH, doorW, doorH),
      topLeft: Radius.circular(doorW / 2),
      topRight: Radius.circular(doorW / 2),
    );
    canvas.drawRRect(door, Paint()..color = const Color(0xFF8A5A33));
    canvas.drawCircle(
      Offset(cx + doorW * 0.2, wallRect.bottom - doorH * 0.4),
      2,
      Paint()..color = const Color(0xFFFFD54F),
    );

    // an awning over the door for the wide shop
    if (style == 2) {
      for (var i = 0; i < 5; i++) {
        final x0 = cx - u * 0.2 + i * u * 0.08;
        canvas.drawRect(
          Rect.fromLTWH(x0, wallRect.bottom - doorH - 8, u * 0.08, 8),
          Paint()..color = i.isEven ? const Color(0xFFE5484D) : Colors.white,
        );
      }
    }
  }

  @override
  bool shouldRepaint(_HousePainter old) =>
      old.color != color || old.dark != dark || old.style != style;
}

/// Trees and flowers are placed once per layout (the same on every repaint), keeping clear of the path and the houses.
class _Decor {
  final List<(Offset, double, int)> trees; // centre, radius, colour index
  final List<Offset> flowers;
  final List<Offset> pathSamples;
  const _Decor(this.trees, this.flowers, this.pathSamples);

  static _Decor? _last;
  static String? _lastKey;

  static _Decor of(WorldMapLayout l) {
    final key =
        '${l.width}:${l.height}:${l.centers.length}:${l.centers.isEmpty ? 0 : l.centers.first.dx}:${l.sizes.isEmpty ? 0 : l.sizes.first}';
    if (_lastKey == key && _last != null) return _last!;
    final w = l.width, top = l.rimTop, bot = l.height - w * 0.13;
    final pts = [
      Offset(l.centers.isEmpty ? w / 2 : l.centers.first.dx, top + w * 0.07),
      ...l.centers,
    ];
    final samples = <Offset>[];
    if (pts.length >= 2) {
      for (final m in _WorldMapPainter._open(pts).computeMetrics()) {
        for (var d = 0.0; d < m.length; d += 18) {
          samples.add(m.getTangentForOffset(d)!.position);
        }
      }
    }
    bool clear(Offset p, double r) {
      for (final (i, c) in l.centers.indexed) {
        // the whole house, its sign and its name plate
        final z = l.sizeAt(i);
        if (p.dx > c.dx - z * 0.7 - r &&
            p.dx < c.dx + z * 0.7 + r &&
            p.dy > c.dy - z * 0.55 - r &&
            p.dy < c.dy + z * 0.5 + 62 + r) {
          return false;
        }
      }
      for (final q in samples) {
        if ((p - q).distance < l.size * 0.17 + r + 4) return false;
      }
      return true;
    }

    final rnd = math.Random(5);
    final trees = <(Offset, double, int)>[];
    for (var tries = 0; tries < 600 && trees.length < 26; tries++) {
      final p = Offset(
        w * (0.08 + 0.84 * rnd.nextDouble()),
        top + w * 0.14 + (bot - top - w * 0.22) * rnd.nextDouble(),
      );
      final r = w * (0.026 + 0.018 * rnd.nextDouble());
      if (clear(p, r * 1.3)) trees.add((p, r, trees.length % 4));
    }
    final flowers = <Offset>[];
    for (var tries = 0; tries < 500 && flowers.length < 30; tries++) {
      final p = Offset(
        w * (0.07 + 0.86 * rnd.nextDouble()),
        top + w * 0.12 + (bot - top - w * 0.18) * rnd.nextDouble(),
      );
      if (clear(p, 6) && !trees.any((t) => (t.$1 - p).distance < t.$2 + 8)) {
        flowers.add(p);
      }
    }
    _lastKey = key;
    return _last = _Decor(trees, flowers, samples);
  }
}

/// Clouds drifting slowly across the sky behind the island, and two birds passing. Still when [t] is null.
class _SkyMotionPainter extends CustomPainter {
  final WorldMapLayout l;
  final Animation<double>? t;
  _SkyMotionPainter(this.l, this.t) : super(repaint: t);

  @override
  void paint(Canvas canvas, Size s) {
    final tt = t?.value ?? 0;
    final cloud = Paint()..color = const Color(0xE6FFFFFF);
    for (var i = 0; i < 5; i++) {
      final speed = 1 + i % 2; // whole cycles per loop: it wraps without a jump
      final x = ((i * 0.23 + tt * speed) % 1.0) * (s.width + 160) - 80;
      final y = s.height * (0.08 + 0.2 * i);
      final r =
          (l.wide ? math.min(s.width, s.height) : s.width) *
          (0.05 + 0.012 * (i % 3));
      canvas.drawCircle(Offset(x, y), r, cloud);
      canvas.drawCircle(Offset(x + r * 0.9, y + r * 0.2), r * 0.8, cloud);
      canvas.drawCircle(Offset(x - r * 0.9, y + r * 0.3), r * 0.7, cloud);
      canvas.drawRect(
        Rect.fromLTRB(x - r * 1.4, y + r * 0.3, x + r * 1.6, y + r * 0.9),
        cloud,
      );
    }
    // two birds flying across
    final bird = Paint()
      ..color = const Color(0xFF3A4B6B)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2
      ..strokeCap = StrokeCap.round;
    for (var i = 0; i < 2; i++) {
      final p = (tt * 2 + i * 0.5) % 1.0;
      final x = p * (s.width + 60) - 30;
      final y = s.height * (0.1 + 0.07 * i) + math.sin(p * 6.28 * 2) * 8;
      final flap = math.sin((tt * 24 * 1.5 + i) * 6.28) * 3;
      final path = Path()
        ..moveTo(x - 8, y + flap)
        ..quadraticBezierTo(x - 4, y - 5, x, y)
        ..quadraticBezierTo(x + 4, y - 5, x + 8, y + flap);
      canvas.drawPath(path, bird);
    }
  }

  @override
  bool shouldRepaint(_SkyMotionPainter old) =>
      old.l.width != l.width || old.l.height != l.height;
}

/// The trees, swaying a little in the wind. Standing still when [t] is null.
class _TreesPainter extends CustomPainter {
  final WorldMapLayout l;
  final _Decor decor;
  final Animation<double>? t;
  _TreesPainter(this.l, this.decor, this.t) : super(repaint: t);

  static const _canopy = [
    Color(0xFF3FA34D),
    Color(0xFFFFB6C9),
    Color(0xFF7BC96F),
    Color(0xFFB59AE8),
  ];

  @override
  void paint(Canvas canvas, Size s) {
    final tt = t?.value ?? 0;
    for (final (i, tree) in decor.trees.indexed) {
      final p = tree.$1, r = tree.$2;
      final sway = t == null
          ? 0.0
          : math.sin((tt * 24 / 3 + i * 0.37) * 6.28318) * r * 0.12;
      canvas.drawOval(
        Rect.fromCenter(
          center: p.translate(0, r * 1.15),
          width: r * 1.9,
          height: r * 0.6,
        ),
        Paint()..color = const Color(0x33000000),
      );
      canvas.drawRRect(
        RRect.fromRectAndRadius(
          Rect.fromCenter(
            center: p.translate(0, r * 0.7),
            width: r * 0.45,
            height: r * 1.1,
          ),
          const Radius.circular(3),
        ),
        Paint()..color = const Color(0xFF8A5A33),
      );
      final col = _canopy[tree.$3];
      final top = p.translate(sway, 0);
      canvas.drawCircle(top, r, Paint()..color = col);
      canvas.drawCircle(
        top.translate(-r * 0.35, -r * 0.35),
        r * 0.55,
        Paint()..color = Color.lerp(col, Colors.white, 0.35)!,
      );
    }
    final flower = [
      const Color(0xFFFFE066),
      Colors.white,
      const Color(0xFFFF8FB1),
    ];
    for (final (i, f) in decor.flowers.indexed) {
      final twinkle = t == null
          ? 1.0
          : 0.85 + 0.15 * math.sin((tt * 24 / 4 + i * 0.21) * 6.28318);
      canvas.drawCircle(f, 4 * twinkle, Paint()..color = flower[i % 3]);
      canvas.drawCircle(f, 1.6, Paint()..color = const Color(0xFFFFA000));
    }
  }

  @override
  bool shouldRepaint(_TreesPainter old) =>
      old.l.height != l.height || old.l.width != l.width || old.decor != decor;
}

/// The island itself, all shapes: a stacked orange cliff, grass in two greens, a mountain with a snow cap and a winding
/// sand path with white stepping dots. It stands still; the moving parts are drawn by the painters above.
class _WorldMapPainter extends CustomPainter {
  final WorldMapLayout l;
  final _Decor decor;
  _WorldMapPainter(this.l, this.decor);

  /// A closed smooth curve through [pts] (Catmull-Rom turned into cubic Beziers).
  static Path _blob(List<Offset> pts) {
    final n = pts.length;
    final path = Path()..moveTo(pts[0].dx, pts[0].dy);
    for (var i = 0; i < n; i++) {
      final p0 = pts[(i - 1 + n) % n],
          p1 = pts[i],
          p2 = pts[(i + 1) % n],
          p3 = pts[(i + 2) % n];
      path.cubicTo(
        p1.dx + (p2.dx - p0.dx) / 6,
        p1.dy + (p2.dy - p0.dy) / 6,
        p2.dx - (p3.dx - p1.dx) / 6,
        p2.dy - (p3.dy - p1.dy) / 6,
        p2.dx,
        p2.dy,
      );
    }
    return path..close();
  }

  static Path _open(List<Offset> pts) {
    final path = Path()..moveTo(pts[0].dx, pts[0].dy);
    for (var i = 0; i + 1 < pts.length; i++) {
      final p0 = pts[math.max(i - 1, 0)],
          p1 = pts[i],
          p2 = pts[i + 1],
          p3 = pts[math.min(i + 2, pts.length - 1)];
      path.cubicTo(
        p1.dx + (p2.dx - p0.dx) / 6,
        p1.dy + (p2.dy - p0.dy) / 6,
        p2.dx - (p3.dx - p1.dx) / 6,
        p2.dy - (p3.dy - p1.dy) / 6,
        p2.dx,
        p2.dy,
      );
    }
    return path;
  }

  @override
  void paint(Canvas canvas, Size s) {
    final w = l.width, h = l.height, top = l.rimTop, bot = h - w * 0.13;
    final rim = [
      Offset(w * 0.50, top - w * 0.015),
      Offset(w * 0.80, top + w * 0.01),
      Offset(w * 0.965, top + w * 0.09),
      Offset(w * 0.985, h * 0.30),
      Offset(w * 0.945, h * 0.50),
      Offset(w * 0.985, h * 0.72),
      Offset(w * 0.90, bot - w * 0.03),
      Offset(w * 0.62, bot + w * 0.01),
      Offset(w * 0.40, bot - w * 0.02),
      Offset(w * 0.10, bot - w * 0.04),
      Offset(w * 0.02, h * 0.72),
      Offset(w * 0.055, h * 0.50),
      Offset(w * 0.015, h * 0.30),
      Offset(w * 0.04, top + w * 0.09),
      Offset(w * 0.20, top + w * 0.01),
    ];
    // keep a margin of sky on both sides so it reads as a floating island, not a green page
    final pinched = [
      for (final p in rim) Offset(w * 0.5 + (p.dx - w * 0.5) * 0.9, p.dy),
    ];
    final grass = _blob(pinched);

    // soft shadow on the sky under the island
    canvas.drawOval(
      Rect.fromLTWH(w * 0.12, bot + w * 0.06, w * 0.76, w * 0.07),
      Paint()..color = const Color(0x22000000),
    );

    // cliff: the same outline stacked downwards in orange, darker towards the bottom
    final depth = w * 0.075;
    for (var d = depth; d >= 0; d -= 3) {
      final t = d / depth;
      canvas.drawPath(
        grass.shift(Offset(0, d)),
        Paint()
          ..color = Color.lerp(
            const Color(0xFFFFC76B),
            const Color(0xFFE08F3C),
            t,
          )!,
      );
    }
    final rnd = math.Random(11);
    for (var i = 0; i < 26; i++) {
      final x = w * (0.1 + 0.8 * rnd.nextDouble());
      canvas.drawCircle(
        Offset(x, bot + depth * (0.1 + 0.5 * rnd.nextDouble()) + w * 0.01),
        2 + 2 * rnd.nextDouble(),
        Paint()..color = const Color(0x33B25E1A),
      );
    }

    // grass: dark rim, light fill
    canvas.drawPath(grass, Paint()..color = const Color(0xFF59A83A));
    canvas.save();
    canvas.translate(w / 2, h / 2);
    canvas.scale(0.965, 0.975);
    canvas.translate(-w / 2, -h / 2);
    canvas.drawPath(grass, Paint()..color = const Color(0xFF8ED45A));
    canvas.restore();

    // mountain with a snow cap, behind the first house
    final mx = w * 0.5, mBase = top + w * 0.09, mTop = top - w * 0.12;
    final mountain = Path()
      ..moveTo(mx - w * 0.22, mBase)
      ..quadraticBezierTo(mx - w * 0.08, mTop + w * 0.05, mx, mTop)
      ..quadraticBezierTo(mx + w * 0.08, mTop + w * 0.05, mx + w * 0.22, mBase)
      ..close();
    canvas.drawPath(mountain, Paint()..color = const Color(0xFFC79A6B));
    final snow = Path()
      ..moveTo(mx - w * 0.07, mTop + w * 0.06)
      ..quadraticBezierTo(mx - w * 0.03, mTop + w * 0.02, mx, mTop)
      ..quadraticBezierTo(
        mx + w * 0.03,
        mTop + w * 0.02,
        mx + w * 0.07,
        mTop + w * 0.06,
      )
      ..lineTo(mx + w * 0.035, mTop + w * 0.05)
      ..lineTo(mx, mTop + w * 0.07)
      ..lineTo(mx - w * 0.035, mTop + w * 0.05)
      ..close();
    canvas.drawPath(snow, Paint()..color = Colors.white);

    // the winding path through every house, with white stepping dots
    final pts = [
      Offset(l.centers.isEmpty ? w / 2 : l.centers.first.dx, top + w * 0.07),
      ...l.centers,
    ];
    if (pts.length >= 2) {
      final path = _open(pts);
      final outer = Paint()
        ..color = const Color(0xFFD9A35B)
        ..style = PaintingStyle.stroke
        ..strokeWidth = l.size * 0.34
        ..strokeCap = StrokeCap.round
        ..strokeJoin = StrokeJoin.round;
      final inner = Paint()
        ..color = const Color(0xFFF2D49B)
        ..style = PaintingStyle.stroke
        ..strokeWidth = l.size * 0.27
        ..strokeCap = StrokeCap.round
        ..strokeJoin = StrokeJoin.round;
      canvas.drawPath(path, outer);
      canvas.drawPath(path, inner);
      final dot = Paint()..color = Colors.white;
      for (final m in path.computeMetrics()) {
        for (var d = 14.0; d < m.length; d += 24) {
          canvas.drawCircle(m.getTangentForOffset(d)!.position, 4, dot);
        }
      }
    }
  }

  @override
  bool shouldRepaint(_WorldMapPainter old) =>
      old.l.height != l.height ||
      old.l.width != l.width ||
      old.l.centers.length != l.centers.length;
}

/// A small switch between the two homes. The list stays the default.
class HomeViewToggle extends StatelessWidget {
  const HomeViewToggle({super.key});

  @override
  Widget build(BuildContext context) {
    return ListenableBuilder(
      listenable: HomeViewPref.instance,
      builder: (context, _) {
        final map = HomeViewPref.instance.mapView;
        return IconButton(
          key: const ValueKey('home_view_toggle'),
          tooltip: map
              ? tr2('عرض القائمة', 'List view')
              : tr2('عرض الخريطة', 'Map view'),
          onPressed: () => HomeViewPref.instance.set(!map),
          icon: Icon(map ? Icons.view_agenda_rounded : Icons.map_rounded),
        );
      },
    );
  }
}
