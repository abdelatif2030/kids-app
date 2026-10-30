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
      final v = (await SharedPreferences.getInstance()).getString(_key) == 'map';
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
      await (await SharedPreferences.getInstance()).setString(_key, map ? 'map' : 'list');
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
  const IslandSpec({required this.id, required this.title, required this.emoji, required this.grass, required this.grassDark, required this.onTap});
}

/// Where the landmarks go on the world map of width [width]: one zig-zag down a single floating island, first section
/// at the top. Pure and tested: every landmark stays inside the canvas and neighbours never overlap, whatever the
/// reading direction ([rtl] mirrors it, so Arabic starts on the right).
class WorldMapLayout {
  final List<Offset> centers;
  final double size;
  final double width;
  final double height;

  /// The first landmark's top edge and the island's rim: shared with the painter.
  final double rimTop;
  const WorldMapLayout(this.centers, this.size, this.width, this.height, this.rimTop);

  static const _xs = [0.28, 0.72, 0.30, 0.70];

  static WorldMapLayout compute(int count, double width, {bool rtl = false}) {
    final w = math.min(width, 620.0);
    final size = (w * 0.30).clamp(88.0, 140.0);
    // Neighbours sit in different columns, so they may share height; the same column is two steps apart.
    final pitch = size * 0.5 + 66;
    final rimTop = w * 0.16;
    final first = rimTop + w * 0.10 + size / 2;
    final centers = <Offset>[
      for (var i = 0; i < count; i++)
        Offset((rtl ? 1 - _xs[i % 4] : _xs[i % 4]) * w, first + i * pitch),
    ];
    final bottom = count == 0 ? first : centers.last.dy + size / 2 + 74;
    return WorldMapLayout(centers, size, w, bottom + w * 0.14, rimTop);
  }
}

/// The world map: ONE floating island with a winding path, a mountain and trees, and one landmark for each section of
/// the app along the path. Original artwork drawn in code (no images). Each landmark is one big tap target with its name;
/// they bob a little unless motion is reduced.
class IslandHome extends StatefulWidget {
  final List<IslandSpec> islands;
  const IslandHome({super.key, required this.islands});

  /// Tests set this to true to exercise the bobbing; otherwise it is off under a test binding.
  static bool? forceMotion;

  @override
  State<IslandHome> createState() => _IslandHomeState();
}

class _IslandHomeState extends State<IslandHome> with SingleTickerProviderStateMixin {
  AnimationController? _c;

  bool get _motionAllowed => IslandHome.forceMotion ?? !WidgetsBinding.instance.runtimeType.toString().contains('Test');

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final on = _motionAllowed && !motionReduced(context);
    if (on && _c == null) {
      _c = AnimationController(vsync: this, duration: const Duration(seconds: 6))..repeat();
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
    final rtl = Directionality.of(context) == TextDirection.rtl;
    return LayoutBuilder(
      builder: (context, box) {
        final avail = box.maxWidth.isFinite ? box.maxWidth : 400.0;
        final layout = WorldMapLayout.compute(widget.islands.length, avail, rtl: rtl);
        final c = _c;
        return Center(
          child: SizedBox(
            width: layout.width,
            height: layout.height,
            child: Stack(
              children: [
                Positioned.fill(
                  child: ExcludeSemantics(
                    child: IgnorePointer(
                      child: RepaintBoundary(child: CustomPaint(key: const ValueKey('world_map_art'), painter: _WorldMapPainter(layout))),
                    ),
                  ),
                ),
                for (final (i, spec) in widget.islands.indexed)
                  Positioned(
                    left: layout.centers[i].dx - layout.size / 2 - 14,
                    top: layout.centers[i].dy - layout.size / 2,
                    width: layout.size + 28,
                    height: layout.size + 58,
                    child: _bob(c, i, _Landmark(spec: spec, size: layout.size)),
                  ),
              ],
            ),
          ),
        );
      },
    );
  }

  Widget _bob(AnimationController? c, int i, Widget child) {
    if (c == null) return child;
    return AnimatedBuilder(
      animation: c,
      child: child,
      builder: (context, ch) => Transform.translate(offset: Offset(0, math.sin((c.value + i * 0.13) * 2 * math.pi) * 3), child: ch),
    );
  }
}

/// One section on the map: a round, glossy badge with a big picture and a wooden name plate under it.
class _Landmark extends StatelessWidget {
  final IslandSpec spec;
  final double size;
  const _Landmark({required this.spec, required this.size});

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
          Container(
            width: size,
            height: size,
            alignment: Alignment.center,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              gradient: RadialGradient(center: const Alignment(-0.3, -0.4), radius: 0.95, colors: [Color.lerp(spec.grass, Colors.white, 0.35)!, spec.grass, spec.grassDark]),
              border: Border.all(color: Colors.white, width: 5),
              boxShadow: const [BoxShadow(color: Color(0x55000000), blurRadius: 8, offset: Offset(0, 4))],
            ),
            child: ExcludeSemantics(child: Text(spec.emoji, style: TextStyle(fontSize: size * 0.46))),
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
                boxShadow: const [BoxShadow(color: Color(0x33000000), blurRadius: 4, offset: Offset(0, 2))],
              ),
              child: Text(spec.title, textAlign: TextAlign.center, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w900, color: Color(0xFF4A3320), height: 1.1)),
            ),
          ),
        ],
      ),
    );
  }
}

/// The island itself, all shapes: sky-blue shadow, a stacked orange cliff, grass in two greens, a mountain with a snow cap,
/// a winding sand path with white stepping dots, and trees and flowers that keep clear of the path and the landmarks.
class _WorldMapPainter extends CustomPainter {
  final WorldMapLayout l;
  _WorldMapPainter(this.l);

  /// A closed smooth curve through [pts] (Catmull-Rom turned into cubic Beziers).
  static Path _blob(List<Offset> pts) {
    final n = pts.length;
    final path = Path()..moveTo(pts[0].dx, pts[0].dy);
    for (var i = 0; i < n; i++) {
      final p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
      path.cubicTo(
        p1.dx + (p2.dx - p0.dx) / 6, p1.dy + (p2.dy - p0.dy) / 6,
        p2.dx - (p3.dx - p1.dx) / 6, p2.dy - (p3.dy - p1.dy) / 6,
        p2.dx, p2.dy,
      );
    }
    return path..close();
  }

  static Path _open(List<Offset> pts) {
    final path = Path()..moveTo(pts[0].dx, pts[0].dy);
    for (var i = 0; i + 1 < pts.length; i++) {
      final p0 = pts[math.max(i - 1, 0)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[math.min(i + 2, pts.length - 1)];
      path.cubicTo(
        p1.dx + (p2.dx - p0.dx) / 6, p1.dy + (p2.dy - p0.dy) / 6,
        p2.dx - (p3.dx - p1.dx) / 6, p2.dy - (p3.dy - p1.dy) / 6,
        p2.dx, p2.dy,
      );
    }
    return path;
  }

  @override
  void paint(Canvas canvas, Size s) {
    final w = l.width, h = l.height, top = l.rimTop, bot = h - w * 0.13;
    final rim = [
      Offset(w * 0.50, top - w * 0.015), Offset(w * 0.80, top + w * 0.01), Offset(w * 0.965, top + w * 0.09),
      Offset(w * 0.985, h * 0.30), Offset(w * 0.945, h * 0.50), Offset(w * 0.985, h * 0.72),
      Offset(w * 0.90, bot - w * 0.03), Offset(w * 0.62, bot + w * 0.01), Offset(w * 0.40, bot - w * 0.02),
      Offset(w * 0.10, bot - w * 0.04), Offset(w * 0.02, h * 0.72), Offset(w * 0.055, h * 0.50),
      Offset(w * 0.015, h * 0.30), Offset(w * 0.04, top + w * 0.09), Offset(w * 0.20, top + w * 0.01),
    ];
    // keep a margin of sky on both sides so it reads as a floating island, not a green page
    final pinched = [for (final p in rim) Offset(w * 0.5 + (p.dx - w * 0.5) * 0.9, p.dy)];
    final grass = _blob(pinched);

    // a few clouds peeking out from behind the island
    final cloud = Paint()..color = const Color(0xF2FFFFFF);
    for (final (fx, fy, r) in const [(0.02, 0.22, 0.06), (0.99, 0.43, 0.07), (0.01, 0.66, 0.065), (0.98, 0.86, 0.06)]) {
      final c = Offset(w * fx, h * fy);
      canvas.drawCircle(c, w * r, cloud);
      canvas.drawCircle(c.translate(w * r * 0.9, w * r * 0.25), w * r * 0.8, cloud);
      canvas.drawCircle(c.translate(-w * r * 0.9, w * r * 0.3), w * r * 0.7, cloud);
    }

    // soft shadow on the sky under the island
    canvas.drawOval(Rect.fromLTWH(w * 0.12, bot + w * 0.06, w * 0.76, w * 0.07), Paint()..color = const Color(0x22000000));

    // cliff: the same outline stacked downwards in orange, darker towards the bottom
    final depth = w * 0.075;
    for (var d = depth; d >= 0; d -= 3) {
      final t = d / depth;
      canvas.drawPath(grass.shift(Offset(0, d)), Paint()..color = Color.lerp(const Color(0xFFFFC76B), const Color(0xFFE08F3C), t)!);
    }
    // pebbly texture on the cliff
    final rnd = math.Random(11);
    for (var i = 0; i < 26; i++) {
      final x = w * (0.1 + 0.8 * rnd.nextDouble());
      canvas.drawCircle(Offset(x, bot + depth * (0.1 + 0.5 * rnd.nextDouble()) + w * 0.01), 2 + 2 * rnd.nextDouble(), Paint()..color = const Color(0x33B25E1A));
    }

    // grass: dark rim, light fill, a lighter inner patch
    canvas.drawPath(grass, Paint()..color = const Color(0xFF59A83A));
    canvas.save();
    canvas.translate(w / 2, h / 2);
    canvas.scale(0.965, 0.975);
    canvas.translate(-w / 2, -h / 2);
    canvas.drawPath(grass, Paint()..color = const Color(0xFF8ED45A));
    canvas.restore();

    // mountain with a snow cap, behind the first landmark
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
      ..quadraticBezierTo(mx + w * 0.03, mTop + w * 0.02, mx + w * 0.07, mTop + w * 0.06)
      ..lineTo(mx + w * 0.035, mTop + w * 0.05)
      ..lineTo(mx, mTop + w * 0.07)
      ..lineTo(mx - w * 0.035, mTop + w * 0.05)
      ..close();
    canvas.drawPath(snow, Paint()..color = Colors.white);

    // the winding path through every landmark, with white stepping dots
    final pts = [Offset(l.centers.isEmpty ? w / 2 : l.centers.first.dx, top + w * 0.07), ...l.centers];
    final samples = <Offset>[];
    if (pts.length >= 2) {
      final path = _open(pts);
      final outer = Paint()..color = const Color(0xFFD9A35B)..style = PaintingStyle.stroke..strokeWidth = l.size * 0.34..strokeCap = StrokeCap.round..strokeJoin = StrokeJoin.round;
      final inner = Paint()..color = const Color(0xFFF2D49B)..style = PaintingStyle.stroke..strokeWidth = l.size * 0.27..strokeCap = StrokeCap.round..strokeJoin = StrokeJoin.round;
      canvas.drawPath(path, outer);
      canvas.drawPath(path, inner);
      final dot = Paint()..color = Colors.white;
      for (final m in path.computeMetrics()) {
        for (var d = 14.0; d < m.length; d += 24) {
          final p = m.getTangentForOffset(d)!.position;
          canvas.drawCircle(p, 4, dot);
        }
        for (var d = 0.0; d < m.length; d += 18) {
          samples.add(m.getTangentForOffset(d)!.position);
        }
      }
    }

    // trees and flowers, never on the path or under a landmark
    bool clear(Offset p, double r) {
      for (final c in l.centers) {
        if ((p - c).distance < l.size * 0.62 + r) return false;
        // the name plate under each badge
        if (p.dx > c.dx - l.size * 0.65 - r && p.dx < c.dx + l.size * 0.65 + r && p.dy > c.dy + l.size * 0.3 && p.dy < c.dy + l.size * 0.5 + 62 + r) return false;
      }
      for (final q in samples) {
        if ((p - q).distance < l.size * 0.17 + r + 4) return false;
      }
      return true;
    }

    final canopy = const [Color(0xFF3FA34D), Color(0xFFFFB6C9), Color(0xFF7BC96F), Color(0xFFB59AE8)];
    final r2 = math.Random(5);
    var placed = 0;
    for (var tries = 0; tries < 500 && placed < 26; tries++) {
      final p = Offset(w * (0.08 + 0.84 * r2.nextDouble()), top + w * 0.14 + (bot - top - w * 0.22) * r2.nextDouble());
      final r = w * (0.026 + 0.018 * r2.nextDouble());
      if (!clear(p, r * 1.2)) continue;
      placed++;
      canvas.drawOval(Rect.fromCenter(center: p.translate(0, r * 1.15), width: r * 1.9, height: r * 0.6), Paint()..color = const Color(0x33000000));
      canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: p.translate(0, r * 0.7), width: r * 0.45, height: r * 1.1), const Radius.circular(3)), Paint()..color = const Color(0xFF8A5A33));
      final col = canopy[placed % canopy.length];
      canvas.drawCircle(p, r, Paint()..color = col);
      canvas.drawCircle(p.translate(-r * 0.35, -r * 0.35), r * 0.55, Paint()..color = Color.lerp(col, Colors.white, 0.35)!);
    }
    for (var tries = 0, f = 0; tries < 400 && f < 30; tries++) {
      final p = Offset(w * (0.07 + 0.86 * r2.nextDouble()), top + w * 0.12 + (bot - top - w * 0.18) * r2.nextDouble());
      if (!clear(p, 6)) continue;
      f++;
      canvas.drawCircle(p, 4, Paint()..color = [const Color(0xFFFFE066), Colors.white, const Color(0xFFFF8FB1)][f % 3]);
      canvas.drawCircle(p, 1.6, Paint()..color = const Color(0xFFFFA000));
    }
  }

  @override
  bool shouldRepaint(_WorldMapPainter old) => old.l.height != l.height || old.l.width != l.width || old.l.centers.length != l.centers.length;
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
          tooltip: map ? tr2('عرض القائمة', 'List view') : tr2('عرض الخريطة', 'Map view'),
          onPressed: () => HomeViewPref.instance.set(!map),
          icon: Icon(map ? Icons.view_agenda_rounded : Icons.map_rounded),
        );
      },
    );
  }
}
