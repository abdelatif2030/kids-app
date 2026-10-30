import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../../design/focusable_tap.dart';
import '../../design/motion.dart';
import '../../design/worlds.dart';
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

/// Where the islands go on a canvas of [width]: a snake path, 2 columns on a phone, 3 on a tablet, 4 on a desktop window.
/// Pure and tested: every centre stays inside the canvas and neighbouring islands never overlap.
class IslandLayout {
  final List<Offset> centers;
  final double islandSize;
  final double height;
  final int columns;
  const IslandLayout(this.centers, this.islandSize, this.height, this.columns);

  static IslandLayout compute(int count, double width) {
    final cols = width >= 900 ? 4 : (width >= 600 ? 3 : 2);
    final cellW = width / cols;
    final size = math.min(cellW * 0.78, 176.0);
    final cellH = size + 74; // room for the label under each island
    final rows = (count / cols).ceil();
    final centers = <Offset>[];
    for (var i = 0; i < count; i++) {
      final row = i ~/ cols;
      var col = i % cols;
      if (row.isOdd) col = cols - 1 - col; // a snake: the path turns back at the end of each row
      final wiggle = (col.isOdd ? 1 : -1) * size * 0.06;
      centers.add(Offset((col + 0.5) * cellW, 16 + size / 2 + row * cellH + wiggle + size * 0.06));
    }
    return IslandLayout(centers, size, 16 + rows * cellH + 16, cols);
  }
}

/// The island map: a sea with floating islands joined by rope bridges, one island per section. Original artwork drawn in
/// code (no images). Each island is one big tap target with its name; the islands bob gently unless motion is reduced.
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
    return LayoutBuilder(
      builder: (context, box) {
        final width = box.maxWidth.isFinite ? box.maxWidth : 400.0;
        final layout = IslandLayout.compute(widget.islands.length, width);
        final c = _c;
        return ClipRRect(
          borderRadius: BorderRadius.circular(28),
          child: SizedBox(
            width: width,
            height: layout.height,
            child: WorldBackground(
              world: RWorld.ocean,
              child: Stack(
                children: [
                  Positioned.fill(child: IgnorePointer(child: CustomPaint(painter: _BridgesPainter(layout.centers, layout.islandSize)))),
                  for (final (i, spec) in widget.islands.indexed)
                    Positioned(
                      left: layout.centers[i].dx - layout.islandSize / 2 - 8,
                      top: layout.centers[i].dy - layout.islandSize / 2,
                      width: layout.islandSize + 16,
                      height: layout.islandSize + 62,
                      child: _bob(c, i, _IslandTile(spec: spec, size: layout.islandSize)),
                    ),
                ],
              ),
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
      builder: (context, ch) => Transform.translate(offset: Offset(0, math.sin((c.value + i * 0.13) * 2 * math.pi) * 4), child: ch),
    );
  }
}

class _IslandTile extends StatelessWidget {
  final IslandSpec spec;
  final double size;
  const _IslandTile({required this.spec, required this.size});

  @override
  Widget build(BuildContext context) {
    return FocusableTap(
      key: ValueKey('island_${spec.id}'),
      onTap: spec.onTap,
      radius: 28,
      semanticLabel: spec.title,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          SizedBox(
            width: size + 16,
            height: size,
            child: Stack(
              alignment: Alignment.center,
              children: [
                Positioned.fill(child: CustomPaint(painter: _IslandPainter(spec.grass, spec.grassDark))),
                Positioned(top: size * 0.12, child: ExcludeSemantics(child: Text(spec.emoji, style: TextStyle(fontSize: size * 0.40)))),
              ],
            ),
          ),
          const SizedBox(height: 2),
          Container(
            constraints: BoxConstraints(maxWidth: size + 16, minHeight: 44),
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
            alignment: Alignment.center,
            decoration: BoxDecoration(
              color: const Color(0xFFFFF3D6),
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: const Color(0xFF9A6B3A), width: 3),
              boxShadow: const [BoxShadow(color: Color(0x33000000), blurRadius: 4, offset: Offset(0, 2))],
            ),
            child: Text(spec.title, textAlign: TextAlign.center, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w900, color: Color(0xFF4A3320), height: 1.1)),
          ),
        ],
      ),
    );
  }
}

/// A floating island: a grassy top, a rocky underside, a little waterfall and a few trees, all shapes.
class _IslandPainter extends CustomPainter {
  final Color grass;
  final Color grassDark;
  _IslandPainter(this.grass, this.grassDark);

  @override
  void paint(Canvas canvas, Size s) {
    final w = s.width, h = s.height;
    // shadow on the water
    canvas.drawOval(Rect.fromCenter(center: Offset(w / 2, h * 0.96), width: w * 0.6, height: h * 0.08), Paint()..color = const Color(0x22000000));
    // rock underside
    final rock = Path()
      ..moveTo(w * 0.08, h * 0.52)
      ..quadraticBezierTo(w * 0.14, h * 0.86, w * 0.42, h * 0.92)
      ..quadraticBezierTo(w * 0.5, h * 0.98, w * 0.58, h * 0.92)
      ..quadraticBezierTo(w * 0.86, h * 0.86, w * 0.92, h * 0.52)
      ..close();
    canvas.drawPath(rock, Paint()..color = const Color(0xFF8D6E63));
    canvas.drawPath(rock, Paint()..color = const Color(0xFF6D4C41)..style = PaintingStyle.stroke..strokeWidth = 2);
    // waterfall
    final fall = RRect.fromRectAndRadius(Rect.fromLTWH(w * 0.62, h * 0.55, w * 0.07, h * 0.34), const Radius.circular(6));
    canvas.drawRRect(fall, Paint()..color = const Color(0xCCBDE9FF));
    // grassy top
    final top = Rect.fromLTWH(w * 0.04, h * 0.18, w * 0.92, h * 0.46);
    canvas.drawOval(top, Paint()..color = grassDark);
    canvas.drawOval(top.deflate(h * 0.025).translate(0, -h * 0.02), Paint()..color = grass);
    // tufts
    final tuft = Paint()..color = grassDark.withAlpha(150);
    for (final (fx, fy) in const [(0.2, 0.46), (0.34, 0.54), (0.74, 0.5), (0.82, 0.4)]) {
      canvas.drawCircle(Offset(w * fx, h * fy), h * 0.018, tuft);
    }
    // two small trees
    for (final (fx, fy) in const [(0.16, 0.34), (0.84, 0.32)]) {
      final base = Offset(w * fx, h * fy);
      canvas.drawRect(Rect.fromCenter(center: base.translate(0, h * 0.04), width: w * 0.022, height: h * 0.08), Paint()..color = const Color(0xFF6D4C41));
      canvas.drawCircle(base, h * 0.07, Paint()..color = grassDark);
      canvas.drawCircle(base.translate(-h * 0.03, -h * 0.03), h * 0.045, Paint()..color = grass);
    }
  }

  @override
  bool shouldRepaint(_IslandPainter old) => old.grass != grass || old.grassDark != grassDark;
}

/// Rope bridges: a sagging rope with planks between neighbouring islands (in path order).
class _BridgesPainter extends CustomPainter {
  final List<Offset> centers;
  final double size;
  _BridgesPainter(this.centers, this.size);

  @override
  void paint(Canvas canvas, Size s) {
    final rope = Paint()
      ..color = const Color(0xFF8B5E3C)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 3
      ..strokeCap = StrokeCap.round;
    final plank = Paint()..color = const Color(0xFFB98B5B);
    for (var i = 0; i + 1 < centers.length; i++) {
      final a = centers[i].translate(0, size * 0.1);
      final b = centers[i + 1].translate(0, size * 0.1);
      final mid = Offset((a.dx + b.dx) / 2, (a.dy + b.dy) / 2 + size * 0.10);
      final path = Path()
        ..moveTo(a.dx, a.dy)
        ..quadraticBezierTo(mid.dx, mid.dy, b.dx, b.dy);
      canvas.drawPath(path, rope);
      // planks along the curve
      for (var k = 1; k < 9; k++) {
        final t = k / 9;
        final p = Offset(
          (1 - t) * (1 - t) * a.dx + 2 * (1 - t) * t * mid.dx + t * t * b.dx,
          (1 - t) * (1 - t) * a.dy + 2 * (1 - t) * t * mid.dy + t * t * b.dy,
        );
        canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: p, width: 9, height: 5), const Radius.circular(2)), plank);
      }
    }
  }

  @override
  bool shouldRepaint(_BridgesPainter old) => old.size != size || old.centers.length != centers.length;
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
