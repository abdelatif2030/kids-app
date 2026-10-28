import 'package:flutter/material.dart';
import 'l10n/strings.dart';

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

String categoryLabel(String category) => loc(_categoryLabels[category] ?? category);

Color categoryColor(String category) => switch (category) {
      'Learning' => const Color(0xFF29B6F6),
      'Story' => const Color(0xFFAB47BC),
      'Fun' => const Color(0xFFFFA726),
      'Calm' => const Color(0xFF66BB6A),
      _ => const Color(0xFF90A4AE),
    };

/// The one big, friendly tile used for every child choice (sections, subjects,
/// games): a thick outline, a big colored picture and a label bar, like a
/// sticker. An optional small badge sits under the label.
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

  static const outline = Color(0xFF6F8FD8);

  @override
  Widget build(BuildContext context) {
    final hsl = HSLColor.fromColor(color);
    final dark = hsl.withLightness((hsl.lightness - 0.1).clamp(0.0, 1.0)).toColor();
    final pale = hsl.withLightness(0.93).withSaturation(0.7).toColor();
    return Opacity(
      opacity: dim ? 0.6 : 1,
      child: SizedBox(
        width: 156,
        height: 172,
        child: DecoratedBox(
          decoration: BoxDecoration(
            color: pale,
            borderRadius: BorderRadius.circular(26),
            border: Border.all(color: outline, width: 4),
            boxShadow: const [BoxShadow(color: Color(0x55000000), offset: Offset(0, 6))],
          ),
          child: Material(
            color: Colors.transparent,
            clipBehavior: Clip.antiAlias,
            borderRadius: BorderRadius.circular(22),
            child: InkWell(
              onTap: onTap,
              child: Column(
                children: [
                  Expanded(
                    child: Center(
                      child: Container(
                        width: 84,
                        height: 84,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          color: Colors.white,
                          border: Border.all(color: color, width: 4),
                        ),
                        child: Icon(icon, size: 50, color: dark),
                      ),
                    ),
                  ),
                  Container(
                    width: double.infinity,
                    padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 6),
                    color: color,
                    child: Column(
                      children: [
                        FittedBox(
                          fit: BoxFit.scaleDown,
                          child: Text(
                            label,
                            style: const TextStyle(
                              fontSize: 22,
                              fontWeight: FontWeight.bold,
                              color: Colors.white,
                            ),
                          ),
                        ),
                        if (badge != null)
                          Text(badge!,
                              style: const TextStyle(fontSize: 13, color: Colors.white70)),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

/// Big playful title: yellow letters with a dark outline.
class OutlinedTitle extends StatelessWidget {
  final String text;
  final double size;
  final Color fill;
  const OutlinedTitle(this.text, {super.key, this.size = 52, this.fill = const Color(0xFFFFC107)});

  @override
  Widget build(BuildContext context) {
    final base = TextStyle(fontSize: size, fontWeight: FontWeight.w900, height: 1.1);
    return Stack(
      alignment: Alignment.center,
      children: [
        Text(
          text,
          textAlign: TextAlign.center,
          style: base.copyWith(
            foreground: Paint()
              ..style = PaintingStyle.stroke
              ..strokeWidth = size / 6
              ..strokeJoin = StrokeJoin.round
              ..color = const Color(0xFF6D3B12),
          ),
        ),
        Text(text, textAlign: TextAlign.center, style: base.copyWith(color: fill)),
      ],
    );
  }
}

/// A tap target that also works from a keyboard or switch: it can take focus,
/// Enter/Space activate it, and a focus ring is drawn around it.
class Tappable extends StatefulWidget {
  final VoidCallback onTap;
  final double radius;
  final Widget child;
  const Tappable({super.key, required this.onTap, required this.child, this.radius = 20});

  @override
  State<Tappable> createState() => _TappableState();
}

class _TappableState extends State<Tappable> {
  bool _focused = false;

  @override
  Widget build(BuildContext context) {
    return FocusableActionDetector(
      onShowFocusHighlight: (v) => setState(() => _focused = v),
      actions: {
        ActivateIntent: CallbackAction<ActivateIntent>(onInvoke: (_) {
          widget.onTap();
          return null;
        }),
      },
      child: GestureDetector(
        behavior: HitTestBehavior.opaque,
        onTap: widget.onTap,
        child: DecoratedBox(
          position: DecorationPosition.foreground,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(widget.radius),
            border: _focused ? Border.all(color: const Color(0xFF1B3A8A), width: 3) : null,
          ),
          child: widget.child,
        ),
      ),
    );
  }
}

/// The big green "let's play" button.
class PlayButton extends StatelessWidget {
  final String label;
  final VoidCallback onTap;
  const PlayButton({super.key, required this.label, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return Tappable(
      onTap: onTap,
      radius: 38,
      child: Container(
        width: 300,
        height: 76,
        padding: const EdgeInsets.symmetric(horizontal: 16),
        decoration: BoxDecoration(
          gradient: const LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [Color(0xFF7CD957), Color(0xFF45A83A)],
          ),
          borderRadius: BorderRadius.circular(38),
          border: Border.all(color: BigTile.outline, width: 4),
          boxShadow: const [BoxShadow(color: Color(0x55000000), offset: Offset(0, 6))],
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(label,
                style: const TextStyle(
                    fontSize: 30, fontWeight: FontWeight.w900, color: Colors.white)),
            const SizedBox(width: 12),
            Container(
              width: 46,
              height: 46,
              decoration: BoxDecoration(
                color: const Color(0xFFFFB74D),
                shape: BoxShape.circle,
                border: Border.all(color: BigTile.outline, width: 3),
              ),
              child: const Icon(Icons.play_arrow_rounded, size: 34, color: Colors.white),
            ),
          ],
        ),
      ),
    );
  }
}

/// A scene drawn in code: sky, clouds, hills, trees and flowers.
class SceneBackground extends StatelessWidget {
  final Widget child;
  const SceneBackground({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return Stack(
      fit: StackFit.expand,
      children: [
        const CustomPaint(painter: _ScenePainter()),
        child,
      ],
    );
  }
}

/// A Scaffold whose body sits on the [SceneBackground], under a transparent app bar.
class SceneScaffold extends StatelessWidget {
  final String? title;
  final List<Widget>? actions;
  final Widget body;
  const SceneScaffold({super.key, this.title, this.actions, required this.body});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      extendBodyBehindAppBar: true,
      appBar: AppBar(
        title: title == null ? null : Text(title!, style: const TextStyle(fontSize: 26)),
        actions: actions,
      ),
      body: SceneBackground(
        child: SafeArea(
          child: Padding(padding: const EdgeInsets.only(top: kToolbarHeight), child: body),
        ),
      ),
    );
  }
}

class _ScenePainter extends CustomPainter {
  const _ScenePainter();

  @override
  void paint(Canvas canvas, Size s) {
    final w = s.width;
    final h = s.height;
    final p = Paint();

    // Sky.
    p.shader = const LinearGradient(
      begin: Alignment.topCenter,
      end: Alignment.bottomCenter,
      colors: [Color(0xFF8CC8F6), Color(0xFFD9F1FF)],
    ).createShader(Rect.fromLTWH(0, 0, w, h));
    canvas.drawRect(Rect.fromLTWH(0, 0, w, h), p);
    p.shader = null;

    // Clouds.
    void cloud(double cx, double cy, double r) {
      p.color = Colors.white.withAlpha(235);
      canvas.drawCircle(Offset(cx - r * 1.1, cy + r * 0.2), r * 0.7, p);
      canvas.drawCircle(Offset(cx, cy - r * 0.1), r, p);
      canvas.drawCircle(Offset(cx + r * 1.2, cy + r * 0.25), r * 0.75, p);
      canvas.drawRRect(
        RRect.fromRectAndRadius(
          Rect.fromLTRB(cx - r * 1.7, cy + r * 0.2, cx + r * 1.9, cy + r * 0.95),
          Radius.circular(r * 0.4),
        ),
        p,
      );
    }

    final u = (w < h ? w : h) / 390; // a unit that scales with the screen
    cloud(w * 0.18, h * 0.14, 26 * u);
    cloud(w * 0.78, h * 0.09, 20 * u);
    cloud(w * 0.55, h * 0.30, 16 * u);

    // Back hill, then front hill.
    p.color = const Color(0xFF9ED67B);
    canvas.drawPath(
      Path()
        ..moveTo(0, h * 0.78)
        ..cubicTo(w * 0.2, h * 0.66, w * 0.45, h * 0.70, w * 0.62, h * 0.76)
        ..cubicTo(w * 0.8, h * 0.82, w * 0.92, h * 0.70, w, h * 0.72)
        ..lineTo(w, h)
        ..lineTo(0, h)
        ..close(),
      p,
    );
    p.color = const Color(0xFF6CC24A);
    canvas.drawPath(
      Path()
        ..moveTo(0, h * 0.88)
        ..cubicTo(w * 0.25, h * 0.80, w * 0.55, h * 0.92, w * 0.8, h * 0.85)
        ..cubicTo(w * 0.9, h * 0.82, w * 0.96, h * 0.84, w, h * 0.83)
        ..lineTo(w, h)
        ..lineTo(0, h)
        ..close(),
      p,
    );

    // Trees.
    void tree(double x, double base, double r) {
      p.color = const Color(0xFF8D5B35);
      canvas.drawRRect(
        RRect.fromRectAndRadius(
          Rect.fromLTWH(x - r * 0.18, base - r * 1.2, r * 0.36, r * 1.3),
          Radius.circular(r * 0.1),
        ),
        p,
      );
      p.color = const Color(0xFF3E9D4A);
      canvas.drawCircle(Offset(x, base - r * 1.5), r, p);
      p.color = const Color(0xFF58B85C);
      canvas.drawCircle(Offset(x - r * 0.3, base - r * 1.7), r * 0.45, p);
    }

    tree(w * 0.08, h * 0.80, 26 * u);
    tree(w * 0.93, h * 0.78, 30 * u);
    tree(w * 0.83, h * 0.86, 20 * u);

    // Flowers.
    const flowers = [
      (0.22, 0.93, Color(0xFFFFFFFF)),
      (0.36, 0.96, Color(0xFFFFC1D9)),
      (0.5, 0.91, Color(0xFFFFFFFF)),
      (0.66, 0.95, Color(0xFFFFE082)),
      (0.12, 0.97, Color(0xFFFFE082)),
      (0.9, 0.95, Color(0xFFFFFFFF)),
    ];
    for (final f in flowers) {
      p.color = f.$3;
      canvas.drawCircle(Offset(w * f.$1, h * f.$2), 4 * u, p);
      p.color = const Color(0xFFFFB300);
      canvas.drawCircle(Offset(w * f.$1, h * f.$2), 1.6 * u, p);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

/// A white bunny, drawn in code.
class Bunny extends StatelessWidget {
  final double size;
  const Bunny({super.key, this.size = 100});

  @override
  Widget build(BuildContext context) =>
      CustomPaint(size: Size(size, size), painter: _BunnyPainter());
}

class _BunnyPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size s) {
    final w = s.width;
    final p = Paint();
    // Ears.
    for (final x in [0.34, 0.66]) {
      p.color = Colors.white;
      canvas.drawOval(Rect.fromCenter(center: Offset(w * x, w * 0.22), width: w * 0.2, height: w * 0.46), p);
      p.color = const Color(0xFFF8BBD0);
      canvas.drawOval(Rect.fromCenter(center: Offset(w * x, w * 0.24), width: w * 0.09, height: w * 0.3), p);
    }
    // Body and head.
    p.color = Colors.white;
    canvas.drawOval(Rect.fromCenter(center: Offset(w / 2, w * 0.88), width: w * 0.6, height: w * 0.4), p);
    canvas.drawCircle(Offset(w / 2, w * 0.6), w * 0.3, p);
    p.style = PaintingStyle.stroke;
    p.strokeWidth = w * 0.02;
    p.color = const Color(0xFFB0BEC5);
    canvas.drawCircle(Offset(w / 2, w * 0.6), w * 0.3, p);
    p.style = PaintingStyle.fill;
    // Face.
    p.color = const Color(0xFF3E2723);
    for (final x in [0.4, 0.6]) {
      canvas.drawCircle(Offset(w * x, w * 0.57), w * 0.035, p);
    }
    p.color = const Color(0xFFF48FB1);
    canvas.drawCircle(Offset(w / 2, w * 0.64), w * 0.03, p);
    p.color = const Color(0x66F48FB1);
    for (final x in [0.33, 0.67]) {
      canvas.drawCircle(Offset(w * x, w * 0.66), w * 0.045, p);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

/// A gray kitten, drawn in code.
class Kitten extends StatelessWidget {
  final double size;
  const Kitten({super.key, this.size = 100});

  @override
  Widget build(BuildContext context) =>
      CustomPaint(size: Size(size, size), painter: _KittenPainter());
}

class _KittenPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size s) {
    final w = s.width;
    final p = Paint()..color = const Color(0xFF90A4AE);
    // Ears.
    for (final dir in [-1.0, 1.0]) {
      final cx = w / 2 + dir * w * 0.22;
      canvas.drawPath(
        Path()
          ..moveTo(cx - w * 0.12, w * 0.45)
          ..lineTo(cx + dir * w * 0.02, w * 0.12)
          ..lineTo(cx + w * 0.12, w * 0.45)
          ..close(),
        p,
      );
    }
    canvas.drawOval(Rect.fromCenter(center: Offset(w / 2, w * 0.9), width: w * 0.6, height: w * 0.4), p);
    canvas.drawCircle(Offset(w / 2, w * 0.6), w * 0.3, p);
    // Muzzle.
    p.color = const Color(0xFFECEFF1);
    canvas.drawOval(Rect.fromCenter(center: Offset(w / 2, w * 0.69), width: w * 0.26, height: w * 0.18), p);
    // Face.
    p.color = const Color(0xFF263238);
    for (final x in [0.4, 0.6]) {
      canvas.drawCircle(Offset(w * x, w * 0.57), w * 0.035, p);
    }
    p.color = const Color(0xFFF48FB1);
    canvas.drawCircle(Offset(w / 2, w * 0.65), w * 0.028, p);
    final line = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = w * 0.012
      ..color = const Color(0xFF455A64);
    for (final dir in [-1.0, 1.0]) {
      canvas.drawLine(Offset(w / 2 + dir * w * 0.1, w * 0.67), Offset(w / 2 + dir * w * 0.28, w * 0.64), line);
      canvas.drawLine(Offset(w / 2 + dir * w * 0.1, w * 0.7), Offset(w / 2 + dir * w * 0.28, w * 0.72), line);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

/// The three friends, side by side.
class Friends extends StatelessWidget {
  final double size;
  const Friends({super.key, this.size = 120});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: size,
      width: size * 2.6,
      child: Stack(
        alignment: Alignment.bottomCenter,
        children: [
          Positioned(left: 0, bottom: 0, child: Kitten(size: size * 0.8)),
          Positioned(right: 0, bottom: 0, child: Bunny(size: size * 0.8)),
          Align(alignment: Alignment.bottomCenter, child: Mascot(size: size)),
        ],
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
        Text(loc('أحسنت!'), style: TextStyle(fontSize: 36, fontWeight: FontWeight.bold)),
        const SizedBox(height: 24),
        FilledButton(
          onPressed: onAgain,
          child: Text(loc('العب تاني'), style: TextStyle(fontSize: 24)),
        ),
      ],
    );
  }
}

/// A simple original mascot (a round, smiling creature with pointy ears),
/// drawn entirely in code.
class Mascot extends StatelessWidget {
  final double size;

  /// An accessory id from journey/lands.dart (hat, glasses, bow, crown, cape).
  final String? accessory;
  const Mascot({super.key, this.size = 140, this.accessory});

  @override
  Widget build(BuildContext context) {
    return CustomPaint(size: Size(size, size), painter: _MascotPainter(accessory));
  }
}

class _MascotPainter extends CustomPainter {
  final String? accessory;
  _MascotPainter(this.accessory);

  @override
  void paint(Canvas canvas, Size s) {
    final w = s.width;
    final fill = Paint()..style = PaintingStyle.fill;

    if (accessory == 'cape') {
      canvas.drawPath(
        Path()
          ..moveTo(w * 0.2, w * 0.62)
          ..lineTo(w * 0.8, w * 0.62)
          ..lineTo(w * 0.95, w * 0.98)
          ..lineTo(w * 0.05, w * 0.98)
          ..close(),
        fill..color = const Color(0xFFE53935),
      );
    }

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

    switch (accessory) {
      case 'hat':
        canvas.drawRect(Rect.fromLTWH(w * 0.38, w * 0.0, w * 0.24, w * 0.2), fill..color = const Color(0xFF37474F));
        canvas.drawRRect(
          RRect.fromRectAndRadius(Rect.fromLTWH(w * 0.3, w * 0.18, w * 0.4, w * 0.045), Radius.circular(w * 0.02)),
          fill..color = const Color(0xFF263238),
        );
        canvas.drawRect(Rect.fromLTWH(w * 0.38, w * 0.13, w * 0.24, w * 0.035), fill..color = const Color(0xFFE53935));
      case 'glasses':
        final frame = Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = w * 0.025
          ..color = const Color(0xFF263238);
        for (final x in [0.38, 0.62]) {
          canvas.drawCircle(Offset(w * x, w * 0.5), w * 0.1, frame);
        }
        canvas.drawLine(Offset(w * 0.48, w * 0.5), Offset(w * 0.52, w * 0.5), frame);
      case 'bow':
        final bow = fill..color = const Color(0xFFEC407A);
        canvas.drawPath(
          Path()
            ..moveTo(w * 0.5, w * 0.86)
            ..lineTo(w * 0.34, w * 0.78)
            ..lineTo(w * 0.34, w * 0.94)
            ..close(),
          bow,
        );
        canvas.drawPath(
          Path()
            ..moveTo(w * 0.5, w * 0.86)
            ..lineTo(w * 0.66, w * 0.78)
            ..lineTo(w * 0.66, w * 0.94)
            ..close(),
          bow,
        );
        canvas.drawCircle(Offset(w * 0.5, w * 0.86), w * 0.035, fill..color = const Color(0xFFC2185B));
      case 'crown':
        canvas.drawPath(
          Path()
            ..moveTo(w * 0.36, w * 0.24)
            ..lineTo(w * 0.34, w * 0.08)
            ..lineTo(w * 0.43, w * 0.16)
            ..lineTo(w * 0.5, w * 0.04)
            ..lineTo(w * 0.57, w * 0.16)
            ..lineTo(w * 0.66, w * 0.08)
            ..lineTo(w * 0.64, w * 0.24)
            ..close(),
          fill..color = const Color(0xFFFFC107),
        );
    }
  }

  @override
  bool shouldRepaint(covariant _MascotPainter old) => old.accessory != accessory;
}
