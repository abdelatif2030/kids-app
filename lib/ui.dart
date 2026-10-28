import 'package:flutter/material.dart';

const kBackground = Color(0xFFFFF8E1);

/// Bright, friendly colors used for big child-facing buttons.
const kBright = [
  Color(0xFFEF5350),
  Color(0xFFFFA726),
  Color(0xFF66BB6A),
  Color(0xFF29B6F6),
  Color(0xFFAB47BC),
  Color(0xFFEC407A),
];

const _categoryLabels = {
  'Learning': 'تعلّم',
  'Story': 'قصة',
  'Fun': 'مرح',
  'Calm': 'هدوء',
};

String categoryLabel(String category) => _categoryLabels[category] ?? category;

Color categoryColor(String category) => switch (category) {
      'Learning' => const Color(0xFF29B6F6),
      'Story' => const Color(0xFFAB47BC),
      'Fun' => const Color(0xFFFFA726),
      'Calm' => const Color(0xFF66BB6A),
      _ => const Color(0xFF90A4AE),
    };

/// The one big, friendly tile used for every child choice (sections, subjects,
/// games): gradient, soft shadow, large icon, and an optional small badge.
class BigTile extends StatelessWidget {
  final String label;
  final IconData icon;
  final Color color;
  final VoidCallback onTap;
  final String? badge;
  final bool dim;
  const BigTile({
    super.key,
    required this.label,
    required this.icon,
    required this.color,
    required this.onTap,
    this.badge,
    this.dim = false,
  });

  @override
  Widget build(BuildContext context) {
    final hsl = HSLColor.fromColor(color);
    final dark = hsl.withLightness((hsl.lightness - 0.12).clamp(0.0, 1.0)).toColor();
    return Opacity(
      opacity: dim ? 0.55 : 1,
      child: SizedBox(
        width: 156,
        height: 168,
        child: DecoratedBox(
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: [color, dark],
            ),
            borderRadius: BorderRadius.circular(28),
            boxShadow: [
              BoxShadow(color: color.withAlpha(90), blurRadius: 12, offset: const Offset(0, 6)),
            ],
          ),
          child: Material(
            color: Colors.transparent,
            child: InkWell(
              borderRadius: BorderRadius.circular(28),
              onTap: onTap,
              child: Padding(
                padding: const EdgeInsets.all(8),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Container(
                      width: 76,
                      height: 76,
                      decoration: const BoxDecoration(
                        shape: BoxShape.circle,
                        color: Color(0x33FFFFFF),
                      ),
                      child: Icon(icon, size: 48, color: Colors.white),
                    ),
                    const SizedBox(height: 8),
                    FittedBox(
                      fit: BoxFit.scaleDown,
                      child: Text(
                        label,
                        style: const TextStyle(
                          fontSize: 24,
                          fontWeight: FontWeight.bold,
                          color: Colors.white,
                        ),
                      ),
                    ),
                    if (badge != null)
                      Text(badge!, style: const TextStyle(fontSize: 14, color: Colors.white70)),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}

/// The finish screen of a game: a star (only for finishing) and "play again".
class StarDone extends StatelessWidget {
  final VoidCallback onAgain;
  const StarDone({super.key, required this.onAgain});

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        const Icon(Icons.star_rounded, size: 120, color: Colors.amber),
        const SizedBox(height: 16),
        const Text('أحسنت!', style: TextStyle(fontSize: 36, fontWeight: FontWeight.bold)),
        const SizedBox(height: 24),
        FilledButton(
          onPressed: onAgain,
          child: const Text('العب تاني', style: TextStyle(fontSize: 24)),
        ),
      ],
    );
  }
}

/// A simple original mascot (a round, smiling creature with pointy ears),
/// drawn entirely in code.
class Mascot extends StatelessWidget {
  final double size;
  const Mascot({super.key, this.size = 140});

  @override
  Widget build(BuildContext context) {
    return CustomPaint(size: Size(size, size), painter: _MascotPainter());
  }
}

class _MascotPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size s) {
    final w = s.width;
    final fill = Paint()..style = PaintingStyle.fill;

    Path ear(double cx, double dir) => Path()
      ..moveTo(w * (cx - 0.13 * dir), w * 0.38)
      ..lineTo(w * (cx + 0.02 * dir), w * 0.04)
      ..lineTo(w * (cx + 0.17 * dir), w * 0.33)
      ..close();

    canvas.drawPath(ear(0.27, 1), fill..color = const Color(0xFFFF8F00));
    canvas.drawPath(ear(0.73, -1), fill..color = const Color(0xFFFF8F00));
    final innerL = Path()
      ..moveTo(w * 0.25, w * 0.34)
      ..lineTo(w * 0.29, w * 0.15)
      ..lineTo(w * 0.38, w * 0.31)
      ..close();
    final innerR = Path()
      ..moveTo(w * 0.75, w * 0.34)
      ..lineTo(w * 0.71, w * 0.15)
      ..lineTo(w * 0.62, w * 0.31)
      ..close();
    canvas.drawPath(innerL, fill..color = const Color(0xFFF8BBD0));
    canvas.drawPath(innerR, fill..color = const Color(0xFFF8BBD0));

    // Body.
    canvas.drawCircle(
        Offset(w / 2, w * 0.58), w * 0.38, fill..color = const Color(0xFFFFB300));
    // Tummy.
    canvas.drawOval(
        Rect.fromCenter(center: Offset(w / 2, w * 0.7), width: w * 0.4, height: w * 0.26),
        fill..color = const Color(0xFFFFE082));
    // Eyes.
    for (final x in [0.38, 0.62]) {
      canvas.drawCircle(Offset(w * x, w * 0.5), w * 0.07, fill..color = Colors.white);
      canvas.drawCircle(
          Offset(w * x, w * 0.51), w * 0.035, fill..color = const Color(0xFF3E2723));
    }
    // Cheeks.
    for (final x in [0.27, 0.73]) {
      canvas.drawCircle(Offset(w * x, w * 0.62), w * 0.05,
          fill..color = const Color(0x66EF5350));
    }
    // Nose and smile.
    canvas.drawCircle(
        Offset(w / 2, w * 0.58), w * 0.025, fill..color = const Color(0xFF3E2723));
    final smile = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = w * 0.025
      ..strokeCap = StrokeCap.round
      ..color = const Color(0xFF3E2723);
    canvas.drawArc(
        Rect.fromCenter(center: Offset(w / 2, w * 0.62), width: w * 0.2, height: w * 0.14),
        0.2,
        2.7,
        false,
        smile);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
