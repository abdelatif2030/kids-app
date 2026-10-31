import 'package:flutter/material.dart';

import 'tokens.dart';

/// Path of a rounded heart that fits [r]. Shared by the glossy heart below and the family bubble.
Path heartPath(Rect r) {
  final w = r.width, h = r.height, x = r.left, y = r.top;
  return Path()
    ..moveTo(x + w * .5, y + h * .92)
    ..cubicTo(
      x + w * -.10,
      y + h * .55,
      x + w * .02,
      y + h * .02,
      x + w * .27,
      y + h * .06,
    )
    ..cubicTo(
      x + w * .40,
      y + h * .08,
      x + w * .48,
      y + h * .18,
      x + w * .5,
      y + h * .28,
    )
    ..cubicTo(
      x + w * .52,
      y + h * .18,
      x + w * .60,
      y + h * .08,
      x + w * .73,
      y + h * .06,
    )
    ..cubicTo(
      x + w * .98,
      y + h * .02,
      x + w * 1.10,
      y + h * .55,
      x + w * .5,
      y + h * .92,
    )
    ..close();
}

/// Rehlaty's own heart: a glossy 3D cartoon heart in the brand's pink-to-purple, with a darker rim, a shine and a
/// sparkle, drawn in code (no image file). [filled] false draws a calm outline for "not chosen yet".
class RehlatyHeart extends StatelessWidget {
  final double size;
  final bool filled;
  const RehlatyHeart({super.key, this.size = 28, this.filled = true});

  @override
  Widget build(BuildContext context) => SizedBox(
    width: size,
    height: size,
    child: CustomPaint(painter: _HeartPainter(filled)),
  );
}

class _HeartPainter extends CustomPainter {
  final bool filled;
  const _HeartPainter(this.filled);

  @override
  void paint(Canvas canvas, Size size) {
    final box = Rect.fromLTWH(
      size.width * .04,
      size.height * .06,
      size.width * .92,
      size.height * .88,
    );
    final path = heartPath(box);
    if (!filled) {
      canvas.drawPath(
        path,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = size.width * .09
          ..strokeJoin = StrokeJoin.round
          ..color = DS.secondary,
      );
      return;
    }
    // soft ground shadow
    canvas.drawPath(
      path.shift(Offset(0, size.height * .05)),
      Paint()
        ..color = const Color(0x446A3BFF)
        ..maskFilter = MaskFilter.blur(BlurStyle.normal, size.width * .06),
    );
    // body: light pink top to deep purple bottom
    canvas.drawPath(
      path,
      Paint()
        ..shader = const LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFFFF9CC4), DS.pink, DS.secondary, DS.primary],
        ).createShader(box),
    );
    // rim for the 3D edge
    canvas.drawPath(
      path,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = size.width * .05
        ..strokeJoin = StrokeJoin.round
        ..color = const Color(0xFF5A2BD6),
    );
    // shine on the upper left lobe
    final shine = Path()
      ..moveTo(box.left + box.width * .16, box.top + box.height * .30)
      ..quadraticBezierTo(
        box.left + box.width * .16,
        box.top + box.height * .13,
        box.left + box.width * .30,
        box.top + box.height * .13,
      );
    canvas.drawPath(
      shine,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeCap = StrokeCap.round
        ..strokeWidth = size.width * .09
        ..color = Colors.white.withAlpha(220),
    );
    canvas.drawCircle(
      Offset(box.left + box.width * .27, box.top + box.height * .42),
      size.width * .035,
      Paint()..color = Colors.white.withAlpha(200),
    );
    // little sparkle
    final c = Offset(size.width * .86, size.height * .12), s = size.width * .09;
    canvas.drawPath(
      Path()
        ..moveTo(c.dx, c.dy - s)
        ..lineTo(c.dx + s * .3, c.dy - s * .3)
        ..lineTo(c.dx + s, c.dy)
        ..lineTo(c.dx + s * .3, c.dy + s * .3)
        ..lineTo(c.dx, c.dy + s)
        ..lineTo(c.dx - s * .3, c.dy + s * .3)
        ..lineTo(c.dx - s, c.dy)
        ..lineTo(c.dx - s * .3, c.dy - s * .3)
        ..close(),
      Paint()..color = DS.highlight,
    );
  }

  @override
  bool shouldRepaint(covariant _HeartPainter old) => old.filled != filled;
}
