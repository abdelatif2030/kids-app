import 'dart:math' as math;

import 'package:flutter/material.dart';

// Original art for the games map inside a category, drawn in code: a violet cloud sky and floating islands with a grass
// top and a rock underneath, with a symbol standing on each island. Static (nothing animates), so reduced motion needs no
// special case. The look follows the owner's own design of the screen; every shape here is drawn from scratch.

/// The sky behind the hub: violet at the top, pink-white clouds at the bottom, a few gold stars.
class HubSkyPainter extends CustomPainter {
  const HubSkyPainter();

  @override
  void paint(Canvas canvas, Size s) {
    final rect = Offset.zero & s;
    canvas.drawRect(
        rect,
        Paint()
          ..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF7B4FD6), Color(0xFFB98AF0), Color(0xFFF1C7F2)])
              .createShader(rect));
    final r = math.Random(11);
    void cloud(double cx, double cy, double w, Color c) {
      final p = Paint()..color = c;
      for (final (dx, dy, k) in [(-.3, .05, .55), (-.1, -.12, .7), (.12, -.05, .65), (.3, .05, .5), (0.0, .08, .8)]) {
        canvas.drawOval(Rect.fromCenter(center: Offset(cx + w * dx, cy + w * dy * .5), width: w * k, height: w * k * .6), p);
      }
    }
    for (var i = 0; i < 7; i++) {
      cloud(s.width * (i / 6), s.height * (.62 + .3 * r.nextDouble()), s.width * (.22 + .1 * r.nextDouble()), Color(0x55FFFFFF));
    }
    for (var i = 0; i < 5; i++) {
      cloud(s.width * (.1 + .8 * r.nextDouble()), s.height * (.2 + .3 * r.nextDouble()), s.width * .14, const Color(0x22FFFFFF));
    }
    final gold = Paint()..color = const Color(0xFFFFD43B);
    for (var i = 0; i < 9; i++) {
      final c = Offset(s.width * r.nextDouble(), s.height * (.05 + .6 * r.nextDouble()));
      final rad = 3 + 3 * r.nextDouble();
      final p = Path();
      for (var k = 0; k < 8; k++) {
        final a = -math.pi / 2 + k * math.pi / 4;
        final rr = k.isEven ? rad : rad * .4;
        final pt = c + Offset(math.cos(a), math.sin(a)) * rr;
        k == 0 ? p.moveTo(pt.dx, pt.dy) : p.lineTo(pt.dx, pt.dy);
      }
      canvas.drawPath(p..close(), gold);
    }
  }

  @override
  bool shouldRepaint(HubSkyPainter old) => false;
}

/// A floating island: grass on top, pink-brown rock below. The symbol stands on the grass, so the painter leaves the
/// top 45 % of its box free (draw the symbol there).
class GrassIslandPainter extends CustomPainter {
  const GrassIslandPainter();

  @override
  void paint(Canvas canvas, Size s) {
    final w = s.width, h = s.height;
    final rock = Path()
      ..moveTo(w * .02, h * .62)
      ..lineTo(w * .98, h * .62)
      ..lineTo(w * .88, h * .80)
      ..lineTo(w * .76, h * .88)
      ..lineTo(w * .62, h * .99)
      ..lineTo(w * .50, h * .90)
      ..lineTo(w * .36, h * .96)
      ..lineTo(w * .24, h * .84)
      ..lineTo(w * .10, h * .78)
      ..close();
    canvas.drawPath(
        rock,
        Paint()
          ..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFFC77B6A), Color(0xFF7A4054)])
              .createShader(Rect.fromLTWH(0, h * .6, w, h * .4)));
    final crack = Paint()
      ..color = const Color(0x44FFFFFF)
      ..style = PaintingStyle.stroke
      ..strokeWidth = w * .012
      ..strokeCap = StrokeCap.round;
    canvas.drawLine(Offset(w * .3, h * .68), Offset(w * .38, h * .88), crack);
    canvas.drawLine(Offset(w * .7, h * .68), Offset(w * .62, h * .92), crack);
    final grass = Rect.fromLTWH(0, h * .46, w, h * .30);
    canvas.drawOval(grass.shift(Offset(0, h * .03)), Paint()..color = const Color(0xFF2E8B3E));
    canvas.drawOval(
        grass,
        Paint()
          ..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF9BE564), Color(0xFF4DB84A)]).createShader(grass));
    final dots = [(.18, .6, Color(0xFFFFE066)), (.82, .62, Color(0xFFFF8FC0)), (.3, .69, Color(0xFFFFFFFF)), (.7, .7, Color(0xFFFFE066)), (.9, .56, Color(0xFFFFFFFF))];
    for (final (x, y, c) in dots) {
      canvas.drawCircle(Offset(w * x, h * y), w * .018, Paint()..color = c);
    }
    // leaf tufts at both ends
    for (final x in [.04, .96]) {
      for (var k = 0; k < 3; k++) {
        final dir = x < .5 ? 1 : -1;
        canvas.drawLine(Offset(w * x, h * .6), Offset(w * (x + dir * (.04 + .035 * k)), h * (.5 - .03 * k)),
            Paint()..color = const Color(0xFF2E8B3E)..strokeWidth = w * .02..strokeCap = StrokeCap.round);
      }
    }
  }

  @override
  bool shouldRepaint(GrassIslandPainter old) => false;
}

class GrassIsland extends StatelessWidget {
  final double width;
  final Widget? symbol;
  const GrassIsland({super.key, required this.width, this.symbol});

  /// The box is taller than the island itself: the symbol stands on the grass and needs headroom.
  static const heightFactor = 0.95;

  @override
  Widget build(BuildContext context) => SizedBox(
        width: width,
        height: width * heightFactor,
        child: Stack(
          clipBehavior: Clip.none,
          alignment: Alignment.bottomCenter,
          children: [
            Positioned(left: 0, right: 0, bottom: 0, height: width * .8, child: const CustomPaint(painter: GrassIslandPainter())),
            if (symbol != null) Positioned(left: 0, right: 0, bottom: width * .8 * .42, child: Center(child: symbol)),
          ],
        ),
      );
}
