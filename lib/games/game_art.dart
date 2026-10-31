
import 'package:flutter/material.dart';

import 'adventure_logic.dart';

// Rehlaty's game illustrations, drawn in code so they match the purple "soft 3D sticker" look: each shape has a light
// top-left, a deeper edge, a dark outline and a small shine. Everything is drawn in a 100 x 100 box and scaled.
// These are code-drawn vector illustrations, not hand-painted artwork: a human illustrator can replace them later by
// swapping the widgets in this file.

Color _light(Color c, [double t = 0.3]) => Color.lerp(c, Colors.white, t)!;
Color _dark(Color c, [double t = 0.3]) => Color.lerp(c, const Color(0xFF1E1250), t)!;

void _shade(Canvas c, Path p, Color base, {double line = 2.2}) {
  final b = p.getBounds();
  c.drawPath(
    p,
    Paint()
      ..shader = RadialGradient(center: const Alignment(-0.45, -0.55), radius: 1.15, colors: [_light(base, 0.38), base, _dark(base, 0.22)], stops: const [0, 0.55, 1]).createShader(b.isEmpty ? Rect.fromLTWH(0, 0, 1, 1) : b),
  );
  c.drawPath(p, Paint()..style = PaintingStyle.stroke..strokeWidth = line..strokeJoin = StrokeJoin.round..color = _dark(base, 0.5));
}

Path _oval(double cx, double cy, double rx, double ry) => Path()..addOval(Rect.fromCenter(center: Offset(cx, cy), width: rx * 2, height: ry * 2));
Path _poly(List<double> xy) {
  final p = Path()..moveTo(xy[0], xy[1]);
  for (var i = 2; i < xy.length; i += 2) {
    p.lineTo(xy[i], xy[i + 1]);
  }
  return p..close();
}

void _eye(Canvas c, double x, double y, [double r = 4.2]) {
  c.drawCircle(Offset(x, y), r, Paint()..color = Colors.white);
  c.drawCircle(Offset(x + r * 0.15, y + r * 0.1), r * 0.62, Paint()..color = const Color(0xFF2D1B4E));
  c.drawCircle(Offset(x - r * 0.15, y - r * 0.25), r * 0.22, Paint()..color = Colors.white);
}

void _shine(Canvas c, Rect r) => c.drawOval(Rect.fromLTWH(r.left + r.width * 0.15, r.top + r.height * 0.1, r.width * 0.3, r.height * 0.18), Paint()..color = Colors.white.withAlpha(120));

void _smile(Canvas c, double x, double y, double w) => c.drawArc(Rect.fromCenter(center: Offset(x, y), width: w, height: w * 0.7), 0.25, 2.6, false, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.8..strokeCap = StrokeCap.round..color = const Color(0xFF2D1B4E));

class _Art extends CustomPainter {
  final void Function(Canvas) draw;
  final Object key;
  const _Art(this.draw, this.key);
  @override
  void paint(Canvas canvas, Size size) {
    canvas.save();
    canvas.scale(size.width / 100, size.height / 100);
    draw(canvas);
    canvas.restore();
  }

  @override
  bool shouldRepaint(covariant _Art old) => old.key != key;
}

Widget _art(void Function(Canvas) draw, Object key, double size) => SizedBox(width: size, height: size, child: CustomPaint(painter: _Art(draw, key)));

// ----------------------------------------------------------------------------
// Animals
// ----------------------------------------------------------------------------

void _faceHead(Canvas c, {required Color base, Color? ear, bool pointy = false, bool floppy = false, Color? muzzle, bool pigNose = false}) {
  final earC = ear ?? base;
  if (pointy) {
    _shade(c, _poly([20, 40, 24, 8, 44, 24]), earC);
    _shade(c, _poly([80, 40, 76, 8, 56, 24]), earC);
    c.drawPath(_poly([25, 34, 27, 17, 38, 26]), Paint()..color = const Color(0xFFFFB6C8));
    c.drawPath(_poly([75, 34, 73, 17, 62, 26]), Paint()..color = const Color(0xFFFFB6C8));
  } else if (floppy) {
    _shade(c, _oval(17, 46, 11, 20), _dark(earC, 0.1));
    _shade(c, _oval(83, 46, 11, 20), _dark(earC, 0.1));
  } else {
    _shade(c, _oval(24, 24, 13, 13), earC);
    _shade(c, _oval(76, 24, 13, 13), earC);
    c.drawCircle(const Offset(24, 24), 7, Paint()..color = _light(earC, 0.45));
    c.drawCircle(const Offset(76, 24), 7, Paint()..color = _light(earC, 0.45));
  }
  _shade(c, _oval(50, 54, 34, 32), base);
  _shine(c, const Rect.fromLTWH(24, 28, 40, 40));
  _eye(c, 37, 48);
  _eye(c, 63, 48);
  final m = muzzle ?? _light(base, 0.5);
  _shade(c, _oval(50, 66, 15, 11), m, line: 1.6);
  if (pigNose) {
    c.drawOval(Rect.fromCenter(center: const Offset(45, 66), width: 4, height: 6), Paint()..color = const Color(0xFF8A3552));
    c.drawOval(Rect.fromCenter(center: const Offset(55, 66), width: 4, height: 6), Paint()..color = const Color(0xFF8A3552));
  } else {
    c.drawOval(Rect.fromCenter(center: const Offset(50, 61), width: 9, height: 6), Paint()..color = const Color(0xFF2D1B4E));
    _smile(c, 50, 68, 12);
  }
}

void _bird(Canvas c, {required Color body, required Color wing, Color beak = const Color(0xFFFFB300), Color? crest, bool white = false}) {
  if (crest != null) {
    _shade(c, _poly([44, 22, 50, 6, 56, 22]), crest, line: 1.6);
  }
  _shade(c, _poly([20, 58, 4, 70, 22, 74]), wing); // tail
  _shade(c, _oval(50, 58, 30, 26), body);
  _shade(c, _oval(66, 40, 17, 17), body);
  _shade(c, _poly([80, 38, 94, 44, 80, 50]), beak, line: 1.6);
  _eye(c, 70, 37, 3.6);
  _shade(c, Path()..moveTo(30, 56)..quadraticBezierTo(46, 40, 62, 62)..quadraticBezierTo(46, 78, 30, 56), wing);
  if (!white) _shine(c, const Rect.fromLTWH(30, 40, 30, 30));
}

void _fishBody(Canvas c, Color body, {bool dolphin = false, bool whale = false}) {
  final tail = dolphin ? _poly([20, 52, 3, 36, 8, 56, 3, 70]) : _poly([22, 52, 4, 34, 10, 52, 4, 70]);
  _shade(c, tail, _dark(body, 0.1));
  if (dolphin) _shade(c, _poly([48, 30, 56, 12, 64, 32]), _dark(body, 0.1));
  _shade(c, _oval(whale ? 52 : 54, 52, whale ? 40 : 32, whale ? 26 : 20), body);
  if (!whale) _shade(c, _poly([48, 66, 58, 82, 62, 64]), _dark(body, 0.1), line: 1.6);
  if (dolphin) _shade(c, _poly([78, 52, 96, 54, 78, 60]), _light(body, 0.1), line: 1.6);
  c.drawPath(Path()..addOval(Rect.fromCenter(center: Offset(whale ? 56 : 58, 58), width: whale ? 54 : 40, height: whale ? 16 : 12))..close(), Paint()..color = Colors.white.withAlpha(whale || dolphin ? 150 : 0));
  _eye(c, whale ? 74 : 72, 46, 4);
  _smile(c, whale ? 76 : 74, 58, 10);
  if (whale) {
    c.drawLine(const Offset(52, 24), const Offset(52, 12), Paint()..color = const Color(0xFF8CD2FF)..strokeWidth = 3..strokeCap = StrokeCap.round);
    c.drawLine(const Offset(52, 12), const Offset(44, 6), Paint()..color = const Color(0xFF8CD2FF)..strokeWidth = 3..strokeCap = StrokeCap.round);
    c.drawLine(const Offset(52, 12), const Offset(60, 6), Paint()..color = const Color(0xFF8CD2FF)..strokeWidth = 3..strokeCap = StrokeCap.round);
  }
  _shine(c, const Rect.fromLTWH(34, 36, 30, 26));
}

void _drawAnimal(Canvas c, String id) {
  switch (id) {
    case 'bear':
      _faceHead(c, base: const Color(0xFF9A6233), muzzle: const Color(0xFFEBCB9C));
    case 'fox':
      _faceHead(c, base: const Color(0xFFF08A24), pointy: true, ear: const Color(0xFFD96A12), muzzle: Colors.white);
    case 'squirrel':
      _shade(c, Path()..moveTo(78, 70)..quadraticBezierTo(112, 60, 88, 20)..quadraticBezierTo(98, 50, 70, 56)..close(), const Color(0xFFB27A44));
      _faceHead(c, base: const Color(0xFFC8935B), muzzle: const Color(0xFFF4DDBB));
    case 'cow':
      _shade(c, _poly([22, 30, 18, 12, 32, 24]), const Color(0xFFFFF3D6), line: 1.6);
      _shade(c, _poly([78, 30, 82, 12, 68, 24]), const Color(0xFFFFF3D6), line: 1.6);
      _faceHead(c, base: Colors.white, floppy: true, ear: const Color(0xFF4A4A5A), muzzle: const Color(0xFFFFB6C8));
      c.drawPath(_oval(34, 36, 8, 6), Paint()..color = const Color(0xFF4A4A5A));
      c.drawPath(_oval(70, 40, 7, 8), Paint()..color = const Color(0xFF4A4A5A));
      _eye(c, 37, 48);
      _eye(c, 63, 48);
    case 'pig':
      _faceHead(c, base: const Color(0xFFFFA9C2), pointy: true, ear: const Color(0xFFFF8FB0), muzzle: const Color(0xFFFF8FB0), pigNose: true);
    case 'sheep':
      for (final o in const [Offset(26, 38), Offset(50, 24), Offset(74, 38), Offset(24, 62), Offset(76, 62), Offset(50, 76)]) {
        _shade(c, _oval(o.dx, o.dy, 17, 17), const Color(0xFFF4EEFF), line: 1.8);
      }
      _shade(c, _oval(50, 54, 25, 27), const Color(0xFF51455F));
      _eye(c, 41, 50, 3.8);
      _eye(c, 59, 50, 3.8);
      _smile(c, 50, 64, 10);
    case 'horse':
      _shade(c, _poly([34, 26, 32, 4, 46, 20]), const Color(0xFF8B5A2B));
      _shade(c, _poly([66, 26, 68, 4, 54, 20]), const Color(0xFF8B5A2B));
      _shade(c, Path()..moveTo(50, 8)..quadraticBezierTo(82, 14, 72, 50)..lineTo(56, 40)..close(), const Color(0xFF3A2A1F), line: 1.6);
      _shade(c, _oval(50, 52, 26, 38), const Color(0xFFA9703A));
      _shade(c, _oval(50, 78, 19, 14), const Color(0xFFD9B48A), line: 1.6);
      _eye(c, 38, 44, 3.8);
      _eye(c, 62, 44, 3.8);
      c.drawOval(Rect.fromCenter(center: const Offset(43, 78), width: 4, height: 5), Paint()..color = const Color(0xFF2D1B4E));
      c.drawOval(Rect.fromCenter(center: const Offset(57, 78), width: 4, height: 5), Paint()..color = const Color(0xFF2D1B4E));
    case 'deer':
      final a = Paint()..style = PaintingStyle.stroke..strokeWidth = 4..strokeCap = StrokeCap.round..color = const Color(0xFF7A4A24);
      for (final s in [-1.0, 1.0]) {
        final x = 50 + s * 20;
        c.drawPath(Path()..moveTo(x, 30)..lineTo(50 + s * 28, 8)..moveTo(50 + s * 25, 16)..lineTo(50 + s * 38, 14)..moveTo(50 + s * 26, 22)..lineTo(50 + s * 14, 8), a);
      }
      _faceHead(c, base: const Color(0xFFD29A62), floppy: true, ear: const Color(0xFFB57C46), muzzle: const Color(0xFFF7E3C4));
      c.drawCircle(const Offset(36, 36), 2.2, Paint()..color = Colors.white.withAlpha(200));
      c.drawCircle(const Offset(64, 36), 2.2, Paint()..color = Colors.white.withAlpha(200));
    case 'owl':
      _shade(c, _poly([22, 30, 20, 8, 38, 22]), const Color(0xFF7B5B3A));
      _shade(c, _poly([78, 30, 80, 8, 62, 22]), const Color(0xFF7B5B3A));
      _shade(c, _oval(50, 56, 34, 38), const Color(0xFF9B7448));
      _shade(c, _oval(50, 70, 20, 20), const Color(0xFFEBD3A8), line: 1.4);
      for (final x in [36.0, 64.0]) {
        _shade(c, _oval(x, 44, 13, 13), Colors.white, line: 1.6);
        _eye(c, x, 44, 7);
      }
      _shade(c, _poly([44, 54, 56, 54, 50, 66]), const Color(0xFFFFA000), line: 1.4);
    case 'fish':
      _fishBody(c, const Color(0xFFFF9B3D));
    case 'dolphin':
      _fishBody(c, const Color(0xFF5BA0D8), dolphin: true);
    case 'whale':
      _fishBody(c, const Color(0xFF4B7BD0), whale: true);
    case 'octopus':
      for (var i = 0; i < 6; i++) {
        final x = 24.0 + i * 10.4;
        c.drawPath(Path()..moveTo(x, 62)..quadraticBezierTo(x + (i.isEven ? -8 : 8), 78, x + (i.isEven ? 2 : -2), 92), Paint()..style = PaintingStyle.stroke..strokeWidth = 8..strokeCap = StrokeCap.round..color = const Color(0xFFB04FD6));
      }
      _shade(c, Path()..moveTo(14, 62)..quadraticBezierTo(14, 6, 50, 6)..quadraticBezierTo(86, 6, 86, 62)..close(), const Color(0xFFC663E8));
      _eye(c, 38, 44, 5);
      _eye(c, 62, 44, 5);
      _smile(c, 50, 56, 14);
      _shine(c, const Rect.fromLTWH(20, 10, 50, 40));
    case 'crab':
      for (final s in [-1.0, 1.0]) {
        for (var i = 0; i < 3; i++) {
          c.drawLine(Offset(50 + s * 22, 62 + i * 6), Offset(50 + s * 44, 70 + i * 8), Paint()..color = const Color(0xFFB33A2B)..strokeWidth = 4..strokeCap = StrokeCap.round);
        }
        c.drawLine(Offset(50 + s * 24, 46), Offset(50 + s * 40, 26), Paint()..color = const Color(0xFFB33A2B)..strokeWidth = 5..strokeCap = StrokeCap.round);
        _shade(c, Path()..addOval(Rect.fromCenter(center: Offset(50 + s * 40, 22), width: 24, height: 20)), const Color(0xFFE5533D), line: 1.8);
        c.drawLine(Offset(50 + s * 40, 22), Offset(50 + s * 48, 16), Paint()..color = const Color(0xFF7A1F15)..strokeWidth = 2.5);
      }
      _shade(c, _oval(50, 56, 28, 20), const Color(0xFFE5533D));
      _eye(c, 42, 44, 4);
      _eye(c, 58, 44, 4);
      _smile(c, 50, 58, 12);
    case 'eagle':
      _bird(c, body: const Color(0xFF7A5230), wing: const Color(0xFF5B3A1E), beak: const Color(0xFFFFC107));
      c.drawCircle(const Offset(66, 40), 12, Paint()..color = Colors.white.withAlpha(235));
      _eye(c, 70, 37, 3.6);
      _shade(c, _poly([80, 38, 94, 44, 80, 50]), const Color(0xFFFFC107), line: 1.6);
    case 'parrot':
      _bird(c, body: const Color(0xFF37B35A), wing: const Color(0xFF1F7A3C), beak: const Color(0xFFFF7043), crest: const Color(0xFFE53935));
    case 'dove':
      _bird(c, body: Colors.white, wing: const Color(0xFFE3EAF6), beak: const Color(0xFFFFB74D), white: true);
    case 'rooster':
      _bird(c, body: const Color(0xFFE0562B), wing: const Color(0xFFA33516), beak: const Color(0xFFFFB300), crest: const Color(0xFFE53935));
    case 'butterfly':
      _shade(c, Path()..moveTo(50, 46)..quadraticBezierTo(8, -4, 6, 40)..quadraticBezierTo(8, 62, 50, 52)..close(), const Color(0xFFFF7BB0));
      _shade(c, Path()..moveTo(50, 46)..quadraticBezierTo(92, -4, 94, 40)..quadraticBezierTo(92, 62, 50, 52)..close(), const Color(0xFFFF7BB0));
      _shade(c, Path()..moveTo(50, 54)..quadraticBezierTo(14, 66, 22, 90)..quadraticBezierTo(42, 94, 50, 60)..close(), const Color(0xFFA85BEF));
      _shade(c, Path()..moveTo(50, 54)..quadraticBezierTo(86, 66, 78, 90)..quadraticBezierTo(58, 94, 50, 60)..close(), const Color(0xFFA85BEF));
      c.drawCircle(const Offset(26, 34), 6, Paint()..color = Colors.white.withAlpha(200));
      c.drawCircle(const Offset(74, 34), 6, Paint()..color = Colors.white.withAlpha(200));
      _shade(c, _oval(50, 52, 5, 24), const Color(0xFF5A3E8A), line: 1.6);
      c.drawLine(const Offset(48, 28), const Offset(40, 14), Paint()..color = const Color(0xFF5A3E8A)..strokeWidth = 2);
      c.drawLine(const Offset(52, 28), const Offset(60, 14), Paint()..color = const Color(0xFF5A3E8A)..strokeWidth = 2);
    case 'camel':
      for (final x in [30.0, 40.0, 64.0, 74.0]) {
        c.drawLine(Offset(x, 66), Offset(x, 92), Paint()..color = const Color(0xFFB98A52)..strokeWidth = 7..strokeCap = StrokeCap.round);
      }
      _shade(c, Path()..moveTo(22, 70)..quadraticBezierTo(18, 42, 44, 44)..quadraticBezierTo(50, 22, 58, 44)..quadraticBezierTo(84, 46, 80, 70)..close(), const Color(0xFFE0B173));
      _shade(c, Path()..moveTo(70, 52)..quadraticBezierTo(78, 20, 84, 18)..lineTo(98, 24)..lineTo(96, 34)..quadraticBezierTo(86, 34, 84, 56)..close(), const Color(0xFFE0B173));
      _eye(c, 88, 24, 3);
      _shine(c, const Rect.fromLTWH(26, 46, 40, 24));
    case 'scorpion':
      final red = const Color(0xFFB5472F);
      c.drawPath(Path()..moveTo(34, 62)..quadraticBezierTo(0, 70, 6, 38)..quadraticBezierTo(14, 20, 30, 26), Paint()..style = PaintingStyle.stroke..strokeWidth = 9..strokeCap = StrokeCap.round..color = red);
      _shade(c, _poly([30, 20, 40, 14, 36, 28]), const Color(0xFF7A1F15), line: 1.4);
      for (final s in [-1.0, 1.0]) {
        c.drawPath(Path()..moveTo(60 + s * 6, 52)..quadraticBezierTo(80 + s * 14, 30 + s * 10, 92, 36 + s * 6), Paint()..style = PaintingStyle.stroke..strokeWidth = 5..strokeCap = StrokeCap.round..color = red);
        _shade(c, _oval(92, 36 + s * 6, 8, 7), red, line: 1.6);
      }
      _shade(c, _oval(56, 66, 28, 16), red);
      _eye(c, 66, 62, 3.4);
      _eye(c, 74, 66, 3.4);
    case 'lizard':
      c.drawPath(Path()..moveTo(30, 60)..quadraticBezierTo(2, 60, 8, 84)..quadraticBezierTo(14, 94, 24, 80), Paint()..style = PaintingStyle.stroke..strokeWidth = 8..strokeCap = StrokeCap.round..color = const Color(0xFF5BB85C));
      for (final p in const [Offset(40, 70), Offset(66, 70), Offset(40, 52), Offset(66, 52)]) {
        c.drawLine(Offset(p.dx, p.dy > 60 ? 62 : 58), p, Paint()..color = const Color(0xFF3F8F43)..strokeWidth = 6..strokeCap = StrokeCap.round);
      }
      _shade(c, _oval(54, 58, 28, 13), const Color(0xFF6CCB6D));
      _shade(c, _oval(82, 54, 14, 11), const Color(0xFF6CCB6D));
      _eye(c, 86, 50, 3.4);
      _smile(c, 88, 58, 8);
      _shine(c, const Rect.fromLTWH(34, 46, 30, 16));
    default:
      _faceHead(c, base: const Color(0xFFB39DDB));
  }
}

/// One animal illustration, by the id used in adventure_logic.dart.
class AnimalArt extends StatelessWidget {
  final String id;
  final double size;
  const AnimalArt(this.id, {super.key, this.size = 56});
  @override
  Widget build(BuildContext context) => _art((c) => _drawAnimal(c, id), id, size);
}

// ----------------------------------------------------------------------------
// Landmarks, treasure, tokens
// ----------------------------------------------------------------------------

void _drawLandmark(Canvas c, String id) {
  switch (id) {
    case 'tree':
      _shade(c, _poly([44, 96, 46, 58, 56, 58, 58, 96]), const Color(0xFF8D5A2B), line: 1.8);
      _shade(c, _oval(50, 38, 32, 30), const Color(0xFF4CAF50));
      _shade(c, _oval(32, 52, 18, 16), const Color(0xFF43A047));
      _shade(c, _oval(68, 52, 18, 16), const Color(0xFF43A047));
      _shine(c, const Rect.fromLTWH(26, 14, 44, 40));
    case 'rock':
      _shade(c, Path()..moveTo(10, 90)..quadraticBezierTo(4, 56, 30, 36)..quadraticBezierTo(48, 18, 70, 34)..quadraticBezierTo(96, 54, 92, 90)..close(), const Color(0xFF9AA3B5));
      _shade(c, Path()..moveTo(34, 90)..quadraticBezierTo(34, 66, 52, 60)..quadraticBezierTo(72, 62, 74, 90)..close(), const Color(0xFFB4BCCB), line: 1.6);
      _shine(c, const Rect.fromLTWH(18, 34, 44, 36));
    case 'house':
      _shade(c, Path()..addRRect(RRect.fromRectAndRadius(const Rect.fromLTWH(18, 46, 64, 46), const Radius.circular(4))), const Color(0xFFFFE0B2));
      _shade(c, _poly([8, 50, 50, 12, 92, 50]), const Color(0xFFD64545));
      _shade(c, Path()..addRRect(RRect.fromRectAndRadius(const Rect.fromLTWH(42, 62, 16, 30), const Radius.circular(3))), const Color(0xFF8D5A2B), line: 1.6);
      _shade(c, Path()..addRect(const Rect.fromLTWH(24, 56, 14, 14)), const Color(0xFFBFE6FF), line: 1.6);
      _shade(c, Path()..addRect(const Rect.fromLTWH(62, 56, 14, 14)), const Color(0xFFBFE6FF), line: 1.6);
    case 'pond':
      _shade(c, _oval(50, 62, 44, 28), const Color(0xFF4FB3F6));
      c.drawArc(Rect.fromCenter(center: const Offset(50, 62), width: 50, height: 26), 0, 6.28, false, Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = Colors.white.withAlpha(180));
      c.drawArc(Rect.fromCenter(center: const Offset(50, 62), width: 26, height: 12), 0, 6.28, false, Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = Colors.white.withAlpha(180));
      _shade(c, _oval(76, 40, 10, 7), const Color(0xFF66BB6A), line: 1.4); // lily pad
    default: // flag
      c.drawLine(const Offset(30, 94), const Offset(30, 10), Paint()..color = const Color(0xFF6D4C41)..strokeWidth = 5..strokeCap = StrokeCap.round);
      _shade(c, Path()..moveTo(32, 12)..lineTo(90, 26)..lineTo(32, 46)..close(), const Color(0xFFE53935));
      c.drawCircle(const Offset(30, 8), 5, Paint()..color = const Color(0xFFFFC83D));
  }
}

class LandmarkArt extends StatelessWidget {
  final String id;
  final double size;
  const LandmarkArt(this.id, {super.key, this.size = 56});
  @override
  Widget build(BuildContext context) => _art((c) => _drawLandmark(c, id), id, size);
}

/// A gem (the treasure).
class GemArt extends StatelessWidget {
  final double size;
  const GemArt({super.key, this.size = 56});
  @override
  Widget build(BuildContext context) => _art((c) {
        _shade(c, _poly([22, 30, 78, 30, 94, 48, 50, 92, 6, 48]), const Color(0xFF4DD0E1));
        c.drawPath(_poly([22, 30, 38, 48, 62, 48, 78, 30]), Paint()..color = Colors.white.withAlpha(90));
        c.drawLine(const Offset(6, 48), const Offset(94, 48), Paint()..color = Colors.white.withAlpha(150)..strokeWidth = 1.6);
        c.drawLine(const Offset(38, 48), const Offset(50, 92), Paint()..color = Colors.white.withAlpha(120)..strokeWidth = 1.4);
        c.drawLine(const Offset(62, 48), const Offset(50, 92), Paint()..color = Colors.white.withAlpha(120)..strokeWidth = 1.4);
        _shine(c, const Rect.fromLTWH(18, 28, 40, 30));
      }, 'gem', size);
}

/// The unexplored square of the treasure map: a purple cloud with a sparkle.
class MysteryArt extends StatelessWidget {
  final double size;
  const MysteryArt({super.key, this.size = 40});
  @override
  Widget build(BuildContext context) => _art((c) {
        _shade(c, Path()..addOval(Rect.fromCenter(center: const Offset(36, 56), width: 44, height: 40))..addOval(Rect.fromCenter(center: const Offset(62, 54), width: 48, height: 44))..addOval(Rect.fromCenter(center: const Offset(50, 42), width: 40, height: 40)), const Color(0xFFC9B6FF), line: 1.8);
        final p = Paint()..color = Colors.white;
        c.drawPath(Path()..moveTo(50, 28)..lineTo(54, 42)..lineTo(68, 46)..lineTo(54, 50)..lineTo(50, 64)..lineTo(46, 50)..lineTo(32, 46)..lineTo(46, 42)..close(), p);
      }, 'mystery', size);
}

/// A finish flag for the end of a board.
class FinishFlagArt extends StatelessWidget {
  final double size;
  const FinishFlagArt({super.key, this.size = 24});
  @override
  Widget build(BuildContext context) => _art((c) => _drawLandmark(c, 'flag'), 'finish', size);
}

class MouseArt extends StatelessWidget {
  final double size;
  const MouseArt({super.key, this.size = 40});
  @override
  Widget build(BuildContext context) => _art((c) {
        c.drawPath(Path()..moveTo(18, 66)..quadraticBezierTo(2, 70, 6, 90), Paint()..style = PaintingStyle.stroke..strokeWidth = 4..strokeCap = StrokeCap.round..color = const Color(0xFFE5A0B5));
        _shade(c, _oval(30, 26, 14, 14), const Color(0xFFB8B3C9));
        _shade(c, _oval(70, 26, 14, 14), const Color(0xFFB8B3C9));
        c.drawCircle(const Offset(30, 26), 8, Paint()..color = const Color(0xFFFFB6C8));
        c.drawCircle(const Offset(70, 26), 8, Paint()..color = const Color(0xFFFFB6C8));
        _shade(c, Path()..moveTo(50, 20)..quadraticBezierTo(90, 28, 86, 64)..quadraticBezierTo(80, 92, 50, 92)..quadraticBezierTo(20, 92, 14, 64)..quadraticBezierTo(10, 28, 50, 20), const Color(0xFFC9C4DA));
        _eye(c, 38, 52, 4);
        _eye(c, 62, 52, 4);
        c.drawCircle(const Offset(50, 66), 5, Paint()..color = const Color(0xFFFF7BA5));
        _smile(c, 50, 74, 14);
        _shine(c, const Rect.fromLTWH(22, 26, 40, 36));
      }, 'mouse', size);
}

class CheeseArt extends StatelessWidget {
  final double size;
  const CheeseArt({super.key, this.size = 40});
  @override
  Widget build(BuildContext context) => _art((c) {
        _shade(c, _poly([8, 66, 56, 22, 94, 40, 94, 80, 8, 80]), const Color(0xFFFFC83D));
        c.drawPath(_poly([8, 66, 56, 22, 94, 40, 94, 54, 56, 36, 8, 66]), Paint()..color = Colors.white.withAlpha(60));
        for (final h in const [Offset(30, 68), Offset(60, 64), Offset(78, 72), Offset(54, 50)]) {
          c.drawOval(Rect.fromCenter(center: h, width: 11, height: 9), Paint()..color = const Color(0xFFE29A0F));
        }
        _shine(c, const Rect.fromLTWH(16, 50, 40, 22));
      }, 'cheese', size);
}

/// A dice face with real pips (value 0 = a blank, rolling dice).
class DiceArt extends StatelessWidget {
  final int value;
  final double size;
  const DiceArt(this.value, {super.key, this.size = 80});
  static const _pips = {
    1: [Offset(50, 50)],
    2: [Offset(28, 28), Offset(72, 72)],
    3: [Offset(26, 26), Offset(50, 50), Offset(74, 74)],
    4: [Offset(28, 28), Offset(72, 28), Offset(28, 72), Offset(72, 72)],
  };
  @override
  Widget build(BuildContext context) => Semantics(
        label: value == 0 ? null : '$value',
        child: _art((c) {
          _shade(c, Path()..addRRect(RRect.fromRectAndRadius(const Rect.fromLTWH(6, 6, 88, 88), const Radius.circular(22))), Colors.white, line: 2.6);
          c.drawRRect(RRect.fromRectAndRadius(const Rect.fromLTWH(10, 10, 80, 80), const Radius.circular(18)), Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = const Color(0xFFD9C8FF));
          for (final p in _pips[value] ?? const <Offset>[]) {
            c.drawCircle(p + const Offset(1.5, 2), 9.5, Paint()..color = const Color(0x336A3BFF));
            c.drawCircle(p, 9.5, Paint()..color = const Color(0xFF6A3BFF));
            c.drawCircle(p - const Offset(3, 3.5), 2.8, Paint()..color = Colors.white.withAlpha(170));
          }
          if (value == 0) {
            for (final p in const [Offset(30, 50), Offset(50, 50), Offset(70, 50)]) {
              c.drawCircle(p, 4.5, Paint()..color = const Color(0xFFD9C8FF));
            }
          }
        }, 'dice$value', size),
      );
}

/// The child's piece on the snakes board: a purple badge with a star-faced smile (no gender, no photo).
class ChildTokenArt extends StatelessWidget {
  final double size;
  const ChildTokenArt({super.key, this.size = 32});
  @override
  Widget build(BuildContext context) => _art((c) {
        _shade(c, _oval(50, 50, 44, 44), const Color(0xFF8A5CFF), line: 3);
        _eye(c, 36, 44, 7);
        _eye(c, 64, 44, 7);
        _smile(c, 50, 64, 22);
        _shine(c, const Rect.fromLTWH(14, 12, 60, 50));
      }, 'child', size);
}

// ----------------------------------------------------------------------------
// Habitats
// ----------------------------------------------------------------------------

class HabitatArt extends StatelessWidget {
  final Habitat home;
  final double size;
  const HabitatArt(this.home, {super.key, this.size = 56});
  @override
  Widget build(BuildContext context) => _art((c) {
        switch (home) {
          case Habitat.farm:
            _shade(c, Path()..addRect(const Rect.fromLTWH(14, 44, 72, 46)), const Color(0xFFD64545));
            _shade(c, _poly([8, 48, 50, 10, 92, 48]), const Color(0xFF9B2C2C));
            _shade(c, Path()..addRRect(RRect.fromRectAndRadius(const Rect.fromLTWH(38, 58, 24, 32), const Radius.circular(3))), Colors.white, line: 1.6);
            c.drawLine(const Offset(38, 58), const Offset(62, 90), Paint()..color = const Color(0xFFD64545)..strokeWidth = 2);
            c.drawLine(const Offset(62, 58), const Offset(38, 90), Paint()..color = const Color(0xFFD64545)..strokeWidth = 2);
          case Habitat.sea:
            c.drawRRect(RRect.fromRectAndRadius(const Rect.fromLTWH(6, 14, 88, 78), const Radius.circular(20)), Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF8CD8FF), Color(0xFF2A7FD6)]).createShader(const Rect.fromLTWH(6, 14, 88, 78)));
            for (var i = 0; i < 3; i++) {
              c.drawPath(Path()..moveTo(14, 36.0 + i * 18)..quadraticBezierTo(26, 28.0 + i * 18, 38, 36.0 + i * 18)..quadraticBezierTo(50, 44.0 + i * 18, 62, 36.0 + i * 18)..quadraticBezierTo(74, 28.0 + i * 18, 86, 36.0 + i * 18), Paint()..style = PaintingStyle.stroke..strokeWidth = 3..strokeCap = StrokeCap.round..color = Colors.white.withAlpha(190));
            }
          case Habitat.forest:
            for (final x in [28.0, 56.0, 78.0]) {
              final s = x == 56.0 ? 1.0 : 0.78;
              _shade(c, _poly([x - 4 * s, 94, x - 4 * s, 74, x + 4 * s, 74, x + 4 * s, 94]), const Color(0xFF8D5A2B), line: 1.4);
              _shade(c, _poly([x - 22 * s, 78, x, 44 - (1 - s) * -10, x + 22 * s, 78]), const Color(0xFF2E8B4A), line: 1.8);
              _shade(c, _poly([x - 18 * s, 58, x, 26 + (1 - s) * 14, x + 18 * s, 58]), const Color(0xFF3FA55E), line: 1.8);
            }
          case Habitat.sky:
            c.drawRRect(RRect.fromRectAndRadius(const Rect.fromLTWH(6, 10, 88, 80), const Radius.circular(20)), Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF7CC8FF), Color(0xFFE9F7FF)]).createShader(const Rect.fromLTWH(6, 10, 88, 80)));
            c.drawCircle(const Offset(72, 30), 12, Paint()..color = const Color(0xFFFFC83D));
            _shade(c, Path()..addOval(Rect.fromCenter(center: const Offset(36, 66), width: 40, height: 26))..addOval(Rect.fromCenter(center: const Offset(54, 60), width: 36, height: 30))..addOval(Rect.fromCenter(center: const Offset(66, 68), width: 30, height: 22)), Colors.white, line: 1.8);
          case Habitat.desert:
            c.drawRRect(RRect.fromRectAndRadius(const Rect.fromLTWH(6, 10, 88, 80), const Radius.circular(20)), Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFFFFE2A8), Color(0xFFF2B65B)]).createShader(const Rect.fromLTWH(6, 10, 88, 80)));
            c.drawCircle(const Offset(72, 28), 11, Paint()..color = const Color(0xFFFF9800));
            _shade(c, Path()..moveTo(6, 90)..quadraticBezierTo(30, 50, 56, 72)..quadraticBezierTo(76, 84, 94, 62)..lineTo(94, 90)..close(), const Color(0xFFE6A24A), line: 1.8);
            _shade(c, Path()..addRRect(RRect.fromRectAndRadius(const Rect.fromLTWH(24, 40, 8, 30), const Radius.circular(4))), const Color(0xFF4C9A4C), line: 1.4);
        }
      }, home.name, size);
}
