import 'dart:math' as math;

import 'package:flutter/material.dart';

import '../models.dart';

/// The Rehlaty palette: pastel mint, sky blue, warm yellow, lavender and peach
/// on a light blue background, with a soft indigo outline.
class RC {
  static const bg = Color(0xFFE6F1FF);
  static const ink = Color(0xFF2D3A5C);
  static const outline = Color(0xFF6F8FD8);
  static const card = Colors.white;
  static const pink = Color(0xFFF9B8C8);
  static const pinkDeep = Color(0xFFE58AA5);
  static const mint = Color(0xFFBFEBDD);
  static const yellow = Color(0xFFFFE08A);
  static const lavender = Color(0xFFD9CCF5);
  static const peach = Color(0xFFFFD3C2);
  static const sky = Color(0xFFBFDDFB);
  static const star = Color(0xFFFFC83D);
  static const good = Color(0xFF3BAA6E);
}

/// True when the user asked the system for less motion.
bool reducedMotion(BuildContext context) => MediaQuery.maybeOf(context)?.disableAnimations ?? false;

/// [ms] milliseconds, or zero when reduced motion is on.
Duration motion(BuildContext context, int ms) =>
    reducedMotion(context) ? Duration.zero : Duration(milliseconds: ms);

/// A white card with a soft outline and a small bottom shadow.
class RCard extends StatelessWidget {
  final Widget child;
  final Color color;
  final Color outline;
  final EdgeInsets padding;
  final VoidCallback? onTap;
  final double radius;
  final String? semanticLabel;

  const RCard({
    super.key,
    required this.child,
    this.color = RC.card,
    this.outline = RC.outline,
    this.padding = const EdgeInsets.all(14),
    this.onTap,
    this.radius = 24,
    this.semanticLabel,
  });

  @override
  Widget build(BuildContext context) {
    return Semantics(
      container: true,
      button: onTap != null,
      label: semanticLabel,
      excludeSemantics: semanticLabel != null,
      child: DecoratedBox(
        decoration: BoxDecoration(
          color: color,
          borderRadius: BorderRadius.circular(radius),
          border: Border.all(color: outline, width: 3),
          boxShadow: [BoxShadow(color: outline.withAlpha(70), offset: const Offset(0, 4))],
        ),
        child: Material(
          color: Colors.transparent,
          borderRadius: BorderRadius.circular(radius - 3),
          clipBehavior: Clip.antiAlias,
          child: InkWell(onTap: onTap, child: Padding(padding: padding, child: child)),
        ),
      ),
    );
  }
}

/// Filled and empty stars, 0 to [max].
class StarRow extends StatelessWidget {
  final int stars;
  final int max;
  final double size;
  const StarRow({super.key, required this.stars, this.max = 3, this.size = 22});

  @override
  Widget build(BuildContext context) {
    return Semantics(
      label: '$stars من $max نجوم',
      excludeSemantics: true,
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          for (var i = 0; i < max; i++)
            Icon(
              i < stars ? Icons.star_rounded : Icons.star_outline_rounded,
              size: size,
              color: i < stars ? RC.star : RC.outline.withAlpha(110),
            ),
        ],
      ),
    );
  }
}

/// A rounded progress pill.
class RProgress extends StatelessWidget {
  final double value; // 0..1
  final Color color;
  final double height;
  const RProgress({super.key, required this.value, this.color = RC.star, this.height = 12});

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(height),
      child: Container(
        height: height,
        decoration: BoxDecoration(
          color: Colors.white,
          border: Border.all(color: RC.outline, width: 2),
          borderRadius: BorderRadius.circular(height),
        ),
        child: FractionallySizedBox(
          alignment: AlignmentDirectional.centerStart,
          widthFactor: value.clamp(0.0, 1.0),
          child: DecoratedBox(
            decoration: BoxDecoration(color: color, borderRadius: BorderRadius.circular(height)),
          ),
        ),
      ),
    );
  }
}

/// The light blue backdrop with a few soft shapes.
class PastelBackground extends StatelessWidget {
  final Widget child;
  const PastelBackground({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return ColoredBox(
      color: RC.bg,
      child: Stack(
        fit: StackFit.expand,
        children: [const CustomPaint(painter: _BlobPainter()), child],
      ),
    );
  }
}

class _BlobPainter extends CustomPainter {
  const _BlobPainter();

  @override
  void paint(Canvas canvas, Size s) {
    final p = Paint();
    p.color = RC.peach.withAlpha(120);
    canvas.drawCircle(Offset(s.width * 0.95, s.height * 0.08), s.width * 0.28, p);
    p.color = RC.lavender.withAlpha(120);
    canvas.drawCircle(Offset(s.width * 0.02, s.height * 0.62), s.width * 0.3, p);
    p.color = RC.mint.withAlpha(120);
    canvas.drawCircle(Offset(s.width * 0.9, s.height * 0.95), s.width * 0.26, p);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

/// A shape drawn in code (circle, square, rectangle, triangle, star, heart).
class ShapeView extends StatelessWidget {
  final ShapeSpec spec;
  final double size;
  const ShapeView({super.key, required this.spec, this.size = 80});

  @override
  Widget build(BuildContext context) =>
      CustomPaint(size: Size(size, size), painter: _ShapePainter(spec));
}

class _ShapePainter extends CustomPainter {
  final ShapeSpec spec;
  const _ShapePainter(this.spec);

  @override
  void paint(Canvas canvas, Size s) {
    final w = s.width;
    final fill = Paint()..color = Color(spec.color);
    final line = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = w * 0.045
      ..strokeJoin = StrokeJoin.round
      ..color = Colors.black.withAlpha(50);
    void draw(Path path) {
      canvas.drawPath(path, fill);
      canvas.drawPath(path, line);
    }

    switch (spec.kind) {
      case 'circle':
        draw(Path()..addOval(Rect.fromCircle(center: Offset(w / 2, w / 2), radius: w * 0.42)));
      case 'square':
        draw(Path()..addRRect(RRect.fromRectAndRadius(
            Rect.fromLTWH(w * 0.12, w * 0.12, w * 0.76, w * 0.76), Radius.circular(w * 0.06))));
      case 'rectangle':
        draw(Path()..addRRect(RRect.fromRectAndRadius(
            Rect.fromLTWH(w * 0.04, w * 0.27, w * 0.92, w * 0.46), Radius.circular(w * 0.05))));
      case 'triangle':
        draw(Path()
          ..moveTo(w * 0.5, w * 0.1)
          ..lineTo(w * 0.92, w * 0.84)
          ..lineTo(w * 0.08, w * 0.84)
          ..close());
      case 'star':
        final path = Path();
        for (var i = 0; i < 10; i++) {
          final r = i.isEven ? w * 0.46 : w * 0.2;
          final a = -math.pi / 2 + i * math.pi / 5;
          final pt = Offset(w / 2 + r * math.cos(a), w * 0.54 + r * math.sin(a));
          i == 0 ? path.moveTo(pt.dx, pt.dy) : path.lineTo(pt.dx, pt.dy);
        }
        draw(path..close());
      case 'heart':
        draw(Path()
          ..moveTo(w * 0.5, w * 0.86)
          ..cubicTo(w * 0.02, w * 0.54, w * 0.1, w * 0.1, w * 0.5, w * 0.32)
          ..cubicTo(w * 0.9, w * 0.1, w * 0.98, w * 0.54, w * 0.5, w * 0.86)
          ..close());
    }
  }

  @override
  bool shouldRepaint(covariant _ShapePainter old) => old.spec != spec;
}
