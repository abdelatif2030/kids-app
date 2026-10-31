import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'world_collectibles.dart';
import 'world_look.dart';

// A drawn island scene. Everything is vector code (no image files): sky, sea, an island with the buildings of one place
// and, standing on the grass, the collectibles the child has really earned. It is a rich procedural illustration, but it is
// still code-drawn art and not the work of an illustrator.

const double _w = 200, _h = 150;

Color _shade(Color c, double f) => Color.fromARGB((c.a * 255).round(), (c.r * 255 * f).clamp(0, 255).round(), (c.g * 255 * f).clamp(0, 255).round(), (c.b * 255 * f).clamp(0, 255).round());

/// A place of the world with its buildings and the child's collectibles. [locked] shows a foggy silhouette.
class IslandScene extends StatelessWidget {
  final String place;
  final WorldLook look;
  final List<Collectible> decor;
  final bool locked;
  final double width;
  const IslandScene(this.place, {super.key, this.look = const WorldLook(), this.decor = const [], this.locked = false, this.width = 280});

  @override
  Widget build(BuildContext context) => ExcludeSemantics(
        child: SizedBox(width: width, height: width * _h / _w, child: CustomPaint(painter: _ScenePainter(place, look, decor, locked))),
      );
}

/// A small round version for cards.
class IslandArt extends StatelessWidget {
  final String id;
  final double size;
  final bool locked;
  const IslandArt(this.id, {super.key, this.size = 110, this.locked = false});

  @override
  Widget build(BuildContext context) => ClipRRect(
        borderRadius: BorderRadius.circular(size * 0.2),
        child: SizedBox(width: size, height: size * 0.75, child: FittedBox(fit: BoxFit.cover, child: IslandScene(id, locked: locked, width: size * 1.4))),
      );
}

/// One collectible drawn alone (the same drawing that stands on the island).
class CollectibleArt extends StatelessWidget {
  final Collectible item;
  final double size;
  const CollectibleArt(this.item, {super.key, this.size = 34});

  @override
  Widget build(BuildContext context) => ExcludeSemantics(child: CustomPaint(size: Size(size, size), painter: _GiftPainter(item)));
}

class _GiftPainter extends CustomPainter {
  final Collectible item;
  _GiftPainter(this.item);

  @override
  void paint(Canvas canvas, Size size) {
    canvas.scale(size.width / 26, size.height / 26);
    _ScenePainter(item.place, const WorldLook(), const [], false)._decor(canvas, item, const Offset(13, 23));
  }

  @override
  bool shouldRepaint(covariant _GiftPainter old) => old.item.id != item.id;
}

class _ScenePainter extends CustomPainter {
  final String place;
  final WorldLook look;
  final List<Collectible> decor;
  final bool locked;
  _ScenePainter(this.place, this.look, this.decor, this.locked);

  Color _c(Color c) => locked ? Color.lerp(c, const Color(0xFFB9B3C9), 0.8)! : c;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.save();
    canvas.scale(size.width / _w, size.height / _h);
    final t = look.themeData;
    _sky(canvas, t);
    _sea(canvas, t);
    _island(canvas, t);
    _buildings(canvas);
    final here = [for (final d in decor) if (d.place == place) d];
    for (final (i, d) in here.indexed) {
      _decor(canvas, d, Offset(36 + (i * 37) % 128 + (i.isOdd ? 6 : 0), 108 + (i % 3) * 5.0));
    }
    if (locked) {
      canvas.drawRect(const Rect.fromLTWH(0, 0, _w, _h), Paint()..color = const Color(0x66FFFFFF));
    }
    canvas.restore();
  }

  void _sky(Canvas c, WorldTheme t) {
    final (top, bottom) = switch (look.time) {
      WorldTime.day => (t.sky, const Color(0xFFFFF4E6)),
      WorldTime.sunset => (const Color(0xFFB07CF0), const Color(0xFFFFC38A)),
      WorldTime.night => (const Color(0xFF241B4D), const Color(0xFF5B4AA8)),
    };
    final r = const Rect.fromLTWH(0, 0, _w, 95);
    c.drawRect(r, Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [_c(top), _c(bottom)]).createShader(r));
    if (look.time == WorldTime.night) {
      final p = Paint()..color = _c(Colors.white);
      for (final s in const [Offset(20, 14), Offset(55, 30), Offset(92, 12), Offset(130, 26), Offset(170, 10), Offset(185, 40), Offset(70, 52), Offset(150, 55)]) {
        c.drawCircle(s, 1.2, p);
      }
      c.drawCircle(const Offset(165, 28), 11, Paint()..color = _c(const Color(0xFFFFF3C4)));
      c.drawCircle(const Offset(170, 25), 10, Paint()..color = _c(const Color(0xFF241B4D)));
    } else {
      c.drawCircle(const Offset(165, 28), 12, Paint()..color = _c(look.time == WorldTime.day ? const Color(0xFFFFE066) : const Color(0xFFFFB347)));
      final cloud = Paint()..color = _c(Colors.white.withAlpha(look.time == WorldTime.day ? 235 : 170));
      for (final o in const [Offset(30, 28), Offset(105, 20)]) {
        c.drawOval(Rect.fromCenter(center: o, width: 36, height: 12), cloud);
        c.drawOval(Rect.fromCenter(center: o + const Offset(10, -6), width: 22, height: 14), cloud);
      }
    }
  }

  void _sea(Canvas c, WorldTheme t) {
    final r = const Rect.fromLTWH(0, 88, _w, 62);
    c.drawRect(r, Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [_c(_shade(t.sea, 1.15)), _c(_shade(t.sea, 0.85))]).createShader(r));
    final wave = Paint()..style = PaintingStyle.stroke..strokeWidth = 1.2..color = _c(Colors.white.withAlpha(120));
    for (var y = 100.0; y < 145; y += 14) {
      final p = Path()..moveTo(8 + (y % 28), y);
      for (var x = 8 + (y % 28); x < _w - 16; x += 24) {
        p.quadraticBezierTo(x + 6, y - 3, x + 12, y);
        p.quadraticBezierTo(x + 18, y + 3, x + 24, y);
      }
      c.drawPath(p, wave);
    }
  }

  void _island(Canvas c, WorldTheme t) {
    final earth = Path()..moveTo(18, 112)..quadraticBezierTo(100, 168, 182, 112)..close();
    c.drawPath(earth, Paint()..color = _c(const Color(0xFF9A6A3A)));
    c.drawPath(Path()..moveTo(18, 112)..quadraticBezierTo(100, 168, 182, 112)..quadraticBezierTo(100, 150, 18, 112), Paint()..color = _c(const Color(0xFF7A4F28)));
    final grass = Rect.fromCenter(center: const Offset(100, 110), width: 170, height: 34);
    c.drawOval(grass, Paint()..shader = RadialGradient(colors: [_c(_shade(t.grass, 1.1)), _c(_shade(t.grass, 0.78))]).createShader(grass));
    c.drawOval(grass, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.4..color = _c(_shade(t.grass, 0.55)));
    // a winding path
    final path = Path()..moveTo(96, 126)..quadraticBezierTo(80, 116, 100, 110)..quadraticBezierTo(120, 104, 104, 98);
    c.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeWidth = 6..strokeCap = StrokeCap.round..color = _c(const Color(0xFFF1DDB0)));
  }

  // ---- building blocks ----
  void _box(Canvas c, Rect r, Color fill, {double radius = 1.5}) {
    final rr = RRect.fromRectAndRadius(r, Radius.circular(radius));
    c.drawRRect(rr, Paint()..color = _c(fill));
    c.drawRRect(rr, Paint()..style = PaintingStyle.stroke..strokeWidth = 1..color = _c(_shade(fill, 0.55)));
  }

  void _roof(Canvas c, double x, double y, double w, double h, Color fill) {
    final p = Path()..moveTo(x - 2, y)..lineTo(x + w / 2, y - h)..lineTo(x + w + 2, y)..close();
    c.drawPath(p, Paint()..color = _c(fill));
    c.drawPath(p, Paint()..style = PaintingStyle.stroke..strokeWidth = 1..strokeJoin = StrokeJoin.round..color = _c(_shade(fill, 0.55)));
  }

  void _window(Canvas c, double x, double y, [double s = 5]) {
    _box(c, Rect.fromLTWH(x, y, s, s), const Color(0xFFBFE6FF), radius: 1);
    final p = Paint()..color = _c(const Color(0xFF6C8FB0))..strokeWidth = 0.7;
    c.drawLine(Offset(x + s / 2, y), Offset(x + s / 2, y + s), p);
    c.drawLine(Offset(x, y + s / 2), Offset(x + s, y + s / 2), p);
  }

  void _door(Canvas c, double x, double y, double w, double h, Color color) {
    final r = RRect.fromRectAndCorners(Rect.fromLTWH(x, y, w, h), topLeft: Radius.circular(w / 2), topRight: Radius.circular(w / 2));
    c.drawRRect(r, Paint()..color = _c(color));
    c.drawCircle(Offset(x + w * 0.78, y + h * 0.58), 0.8, Paint()..color = _c(const Color(0xFFFFE066)));
  }

  void _house(Canvas c, double x, double y, double w, double h, Color wall, Color roof) {
    _box(c, Rect.fromLTWH(x, y - h, w, h), wall);
    _roof(c, x, y - h, w, h * 0.7, roof);
    _door(c, x + w * 0.2, y - h * 0.55, w * 0.22, h * 0.55, const Color(0xFF8D5A2B));
    _window(c, x + w * 0.58, y - h * 0.7, w * 0.22);
  }

  void _tree(Canvas c, double x, double y, double s, [Color? leaf]) {
    c.drawRect(Rect.fromLTWH(x - 1.6 * s, y - 9 * s, 3.2 * s, 9 * s), Paint()..color = _c(const Color(0xFF7A4F28)));
    final l = leaf ?? const Color(0xFF3FA65A);
    for (final o in [Offset(x, y - 15 * s), Offset(x - 5 * s, y - 11 * s), Offset(x + 5 * s, y - 11 * s)]) {
      c.drawCircle(o, 6 * s, Paint()..color = _c(l));
    }
    c.drawCircle(Offset(x - 2 * s, y - 17 * s), 2.4 * s, Paint()..color = _c(_shade(l, 1.25)));
  }

  void _flag(Canvas c, double x, double y, double h, Color color) {
    c.drawLine(Offset(x, y), Offset(x, y - h), Paint()..color = _c(const Color(0xFF5A3A1E))..strokeWidth = 1.2);
    final f = Path()..moveTo(x, y - h)..lineTo(x + 8, y - h + 3)..lineTo(x, y - h + 6)..close();
    c.drawPath(f, Paint()..color = _c(color));
  }

  void _buildings(Canvas c) {
    switch (place) {
      case 'island': // a cottage with a chimney, a palm and a flag
        _box(c, const Rect.fromLTWH(118, 84, 5, 12), const Color(0xFFC96F55));
        _house(c, 84, 112, 44, 24, const Color(0xFFFFE3C2), const Color(0xFFE5646E));
        _tree(c, 60, 112, 1.1);
        _flag(c, 150, 112, 22, const Color(0xFFA855F7));
      case 'garden': // a glasshouse, flower beds and a tree
        _box(c, const Rect.fromLTWH(78, 94, 46, 18), const Color(0xFFD9F4FF), radius: 3);
        final arch = Path()..moveTo(78, 94)..quadraticBezierTo(101, 72, 124, 94)..close();
        c.drawPath(arch, Paint()..color = _c(const Color(0xFFBFEAF7)));
        c.drawPath(arch, Paint()..style = PaintingStyle.stroke..strokeWidth = 1..color = _c(const Color(0xFF5A9BB5)));
        for (var x = 88.0; x < 124; x += 11) {
          c.drawLine(Offset(x, 94), Offset(x, 112), Paint()..color = _c(const Color(0xFF5A9BB5))..strokeWidth = 0.8);
        }
        for (final (i, x) in [44.0, 56.0, 150.0, 162.0].indexed) {
          _box(c, Rect.fromLTWH(x, 109, 9, 4), const Color(0xFF9A6A3A));
          c.drawCircle(Offset(x + 4.5, 106), 3, Paint()..color = _c([Colors.pink, Colors.orange, Colors.purpleAccent, Colors.yellow][i]));
        }
        _tree(c, 138, 110, 1.0, const Color(0xFF2F9E6B));
      case 'village': // three houses and a school with a bell tower
        _house(c, 46, 112, 28, 20, const Color(0xFFFFD0E0), const Color(0xFF8E7CF0));
        _house(c, 142, 112, 28, 20, const Color(0xFFCFEFFF), const Color(0xFFE5646E));
        _box(c, const Rect.fromLTWH(80, 90, 40, 22), const Color(0xFFFFF0B8));
        _roof(c, 80, 90, 40, 12, const Color(0xFFE08A3A));
        _box(c, const Rect.fromLTWH(95, 70, 10, 20), const Color(0xFFFFF0B8));
        _roof(c, 95, 70, 10, 8, const Color(0xFFE08A3A));
        c.drawCircle(const Offset(100, 78), 2, Paint()..color = _c(const Color(0xFFFFC83D)));
        _door(c, 94, 100, 12, 12, const Color(0xFF8D5A2B));
        _window(c, 84, 96, 6);
        _window(c, 110, 96, 6);
      case 'kingdom': // a castle with towers and flags
        _box(c, const Rect.fromLTWH(74, 88, 52, 24), const Color(0xFFE5D4FF));
        for (final x in [66.0, 118.0, 92.0]) {
          final tall = x == 92.0;
          final h = tall ? 40.0 : 32.0;
          _box(c, Rect.fromLTWH(x, 112 - h, 16, h), const Color(0xFFD7C2FF));
          _roof(c, x, 112 - h, 16, 13, const Color(0xFFA855F7));
          _flag(c, x + 8, 112 - h - 13, 9, const Color(0xFFFF6B9D));
          _window(c, x + 5.5, 112 - h + 8, 5);
        }
        _door(c, 94, 98, 12, 14, const Color(0xFF6A3BFF));
        for (var x = 76.0; x < 124; x += 8) {
          _box(c, Rect.fromLTWH(x, 85, 4, 4), const Color(0xFFE5D4FF), radius: 0.5);
        }
      case 'creative': // a studio with an easel, a rainbow and paint pots
        _house(c, 74, 112, 52, 26, const Color(0xFFFFE9B0), const Color(0xFFFF6B9D));
        for (final (i, col) in [Colors.red, Colors.orange, Colors.yellow, Colors.green, Colors.blue, Colors.purple].indexed) {
          c.drawArc(Rect.fromCenter(center: const Offset(150, 108), width: 52 - i * 5.0, height: 52 - i * 5.0), math.pi, math.pi, false, Paint()..style = PaintingStyle.stroke..strokeWidth = 2.6..color = _c(col.withAlpha(210)));
        }
        c.drawLine(const Offset(50, 112), const Offset(44, 90), Paint()..color = _c(const Color(0xFF8D5A2B))..strokeWidth = 1.6);
        c.drawLine(const Offset(50, 112), const Offset(56, 90), Paint()..color = _c(const Color(0xFF8D5A2B))..strokeWidth = 1.6);
        _box(c, const Rect.fromLTWH(42, 78, 16, 14), Colors.white);
        c.drawCircle(const Offset(47, 84), 2.2, Paint()..color = _c(Colors.pinkAccent));
        c.drawCircle(const Offset(53, 86), 2.2, Paint()..color = _c(Colors.lightBlue));
      case 'explore': // an observatory with a dome and telescope, a globe and a signpost
        _box(c, const Rect.fromLTWH(80, 90, 40, 22), const Color(0xFFE8E0FF));
        c.drawArc(Rect.fromCenter(center: const Offset(100, 90), width: 40, height: 36), math.pi, math.pi, true, Paint()..color = _c(const Color(0xFF8E7CF0)));
        c.drawLine(const Offset(104, 78), const Offset(122, 64), Paint()..color = _c(const Color(0xFF4A3A9A))..strokeWidth = 4..strokeCap = StrokeCap.round);
        _door(c, 94, 98, 12, 14, const Color(0xFF4A3A9A));
        c.drawCircle(const Offset(52, 100), 11, Paint()..color = _c(const Color(0xFF5BC0FF)));
        c.drawPath(Path()..moveTo(46, 96)..quadraticBezierTo(51, 90, 56, 95)..quadraticBezierTo(53, 103, 47, 104)..close(), Paint()..color = _c(const Color(0xFF66BB6A)));
        c.drawLine(const Offset(52, 111), const Offset(52, 113), Paint()..color = _c(const Color(0xFF8D5A2B))..strokeWidth = 3);
        c.drawLine(const Offset(150, 112), const Offset(150, 92), Paint()..color = _c(const Color(0xFF8D5A2B))..strokeWidth = 1.8);
        _box(c, const Rect.fromLTWH(142, 90, 16, 6), const Color(0xFFFFE066), radius: 1);
        _box(c, const Rect.fromLTWH(146, 98, 16, 6), const Color(0xFFFFB3D1), radius: 1);
    }
  }

  // ---- collectibles ----
  void _decor(Canvas c, Collectible d, Offset at) {
    final tint = [const Color(0xFFFF6B9D), const Color(0xFFFFC83D), const Color(0xFF5BC0FF), const Color(0xFFA855F7)][d.hue % 4];
    final x = at.dx, y = at.dy;
    switch (d.kind) {
      case DecorKind.tree:
        _tree(c, x, y, 0.55, _shade(const Color(0xFF3FA65A), 0.9 + d.hue * 0.07));
      case DecorKind.flowers:
        for (var i = -1; i <= 1; i++) {
          c.drawLine(Offset(x + i * 4, y), Offset(x + i * 4, y - 6), Paint()..color = _c(const Color(0xFF2E7D32))..strokeWidth = 0.9);
          c.drawCircle(Offset(x + i * 4, y - 7), 2.2, Paint()..color = _c(i == 0 ? tint : _shade(tint, 0.85)));
          c.drawCircle(Offset(x + i * 4, y - 7), 0.8, Paint()..color = _c(const Color(0xFFFFE066)));
        }
      case DecorKind.bench:
        _box(c, Rect.fromLTWH(x - 7, y - 6, 14, 2.5), const Color(0xFF9A6A3A), radius: 0.8);
        _box(c, Rect.fromLTWH(x - 7, y - 10, 14, 2), const Color(0xFF9A6A3A), radius: 0.8);
        c.drawLine(Offset(x - 5, y - 4), Offset(x - 5, y), Paint()..color = _c(const Color(0xFF5A3A1E))..strokeWidth = 1.2);
        c.drawLine(Offset(x + 5, y - 4), Offset(x + 5, y), Paint()..color = _c(const Color(0xFF5A3A1E))..strokeWidth = 1.2);
      case DecorKind.lamp:
        c.drawLine(Offset(x, y), Offset(x, y - 14), Paint()..color = _c(const Color(0xFF4A4A5A))..strokeWidth = 1.4);
        c.drawCircle(Offset(x, y - 15), 3, Paint()..color = _c(const Color(0xFFFFE066)));
        c.drawCircle(Offset(x, y - 15), 5.5, Paint()..color = _c(const Color(0x33FFE066)));
      case DecorKind.balloon:
        c.drawLine(Offset(x, y - 6), Offset(x, y), Paint()..color = _c(Colors.black54)..strokeWidth = 0.6);
        c.drawOval(Rect.fromCenter(center: Offset(x, y - 12), width: 8, height: 10), Paint()..color = _c(tint));
      case DecorKind.kite:
        final k = Path()..moveTo(x, y - 20)..lineTo(x + 5, y - 14)..lineTo(x, y - 8)..lineTo(x - 5, y - 14)..close();
        c.drawPath(k, Paint()..color = _c(tint));
        c.drawLine(Offset(x, y - 8), Offset(x - 3, y), Paint()..color = _c(Colors.black45)..strokeWidth = 0.6);
      case DecorKind.boat:
        final b = Path()..moveTo(x - 8, y - 3)..lineTo(x + 8, y - 3)..lineTo(x + 5, y + 1)..lineTo(x - 5, y + 1)..close();
        c.drawPath(b, Paint()..color = _c(const Color(0xFF9A6A3A)));
        c.drawPath(Path()..moveTo(x, y - 3)..lineTo(x, y - 14)..lineTo(x + 7, y - 4)..close(), Paint()..color = _c(tint));
      case DecorKind.butterfly:
        c.drawOval(Rect.fromCenter(center: Offset(x - 3, y - 12), width: 5, height: 6), Paint()..color = _c(tint));
        c.drawOval(Rect.fromCenter(center: Offset(x + 3, y - 12), width: 5, height: 6), Paint()..color = _c(_shade(tint, 0.85)));
        c.drawLine(Offset(x, y - 15), Offset(x, y - 9), Paint()..color = _c(Colors.black54)..strokeWidth = 0.8);
      case DecorKind.fountain:
        c.drawOval(Rect.fromCenter(center: Offset(x, y - 2), width: 16, height: 5), Paint()..color = _c(const Color(0xFFCFD8E8)));
        c.drawLine(Offset(x, y - 3), Offset(x, y - 12), Paint()..color = _c(const Color(0xFF8FD0FF))..strokeWidth = 1.4);
        c.drawArc(Rect.fromCenter(center: Offset(x, y - 12), width: 12, height: 8), math.pi, math.pi, false, Paint()..style = PaintingStyle.stroke..strokeWidth = 0.9..color = _c(const Color(0xFF8FD0FF)));
      case DecorKind.signpost:
        c.drawLine(Offset(x, y), Offset(x, y - 15), Paint()..color = _c(const Color(0xFF8D5A2B))..strokeWidth = 1.5);
        _box(c, Rect.fromLTWH(x - 1, y - 15, 11, 5), tint, radius: 1);
      case DecorKind.banner:
        c.drawLine(Offset(x, y), Offset(x, y - 17), Paint()..color = _c(const Color(0xFF5A3A1E))..strokeWidth = 1.2);
        final f = Path()..moveTo(x, y - 17)..lineTo(x + 10, y - 17)..lineTo(x + 10, y - 7)..lineTo(x + 5, y - 10)..lineTo(x, y - 7)..close();
        c.drawPath(f, Paint()..color = _c(tint));
      case DecorKind.books:
        for (var i = 0; i < 3; i++) {
          _box(c, Rect.fromLTWH(x - 6 + i * 0.8, y - 3 - i * 3.2, 12.0 - i, 3), [tint, _shade(tint, 0.8), const Color(0xFF7C6AD0)][i], radius: 0.6);
        }
      case DecorKind.trophy:
        c.drawPath(Path()..moveTo(x - 5, y - 15)..lineTo(x + 5, y - 15)..lineTo(x + 3, y - 8)..lineTo(x - 3, y - 8)..close(), Paint()..color = _c(const Color(0xFFFFC83D)));
        c.drawRect(Rect.fromLTWH(x - 1, y - 8, 2, 5), Paint()..color = _c(const Color(0xFFE0A100)));
        c.drawRect(Rect.fromLTWH(x - 4, y - 3, 8, 2.5), Paint()..color = _c(const Color(0xFF9A6A3A)));
      case DecorKind.windmill:
        c.drawPath(Path()..moveTo(x - 4, y)..lineTo(x - 2.5, y - 14)..lineTo(x + 2.5, y - 14)..lineTo(x + 4, y)..close(), Paint()..color = _c(const Color(0xFFF1E3D0)));
        for (var i = 0; i < 4; i++) {
          final a = i * math.pi / 2 + 0.5;
          c.drawLine(Offset(x, y - 14), Offset(x + 9 * math.cos(a), y - 14 + 9 * math.sin(a)), Paint()..color = _c(tint)..strokeWidth = 2..strokeCap = StrokeCap.round);
        }
      case DecorKind.bird:
        final p = Paint()..style = PaintingStyle.stroke..strokeWidth = 1.1..color = _c(Colors.black87);
        c.drawArc(Rect.fromCenter(center: Offset(x - 3, y - 14), width: 6, height: 5), math.pi, math.pi, false, p);
        c.drawArc(Rect.fromCenter(center: Offset(x + 3, y - 14), width: 6, height: 5), math.pi, math.pi, false, p);
      case DecorKind.mushroom:
        c.drawRect(Rect.fromLTWH(x - 1.5, y - 5, 3, 5), Paint()..color = _c(const Color(0xFFFFF3E0)));
        c.drawArc(Rect.fromCenter(center: Offset(x, y - 5), width: 11, height: 9), math.pi, math.pi, true, Paint()..color = _c(tint));
        c.drawCircle(Offset(x - 2, y - 7), 0.9, Paint()..color = _c(Colors.white));
    }
  }

  @override
  bool shouldRepaint(covariant _ScenePainter old) => old.place != place || old.locked != locked || old.look.theme != look.theme || old.look.time != look.time || old.decor.length != decor.length;
}
