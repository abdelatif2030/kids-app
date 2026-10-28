import 'package:flutter/material.dart';

import '../journey/ui/kit.dart';
import 'letters_data.dart';
import '../l10n/strings.dart';

/// Trace a letter with a finger or the mouse. The big faint letter is the
/// guide; the screen only checks that the child really drew along it for a
/// while (it does not grade the shape), and always encourages.
class TracingView extends StatefulWidget {
  final ArabicLetter letter;
  final VoidCallback onDone;
  const TracingView({super.key, required this.letter, required this.onDone});

  /// Total drawn length (in logical pixels) before "done" is offered.
  static const minLength = 350.0;

  @override
  State<TracingView> createState() => _TracingViewState();
}

class _TracingViewState extends State<TracingView> {
  final List<List<Offset>> _strokes = [];
  double _length = 0;

  void _start(Offset p) => setState(() => _strokes.add([p]));

  void _move(Offset p) {
    final s = _strokes.last;
    setState(() {
      _length += (p - s.last).distance;
      s.add(p);
    });
  }

  @override
  Widget build(BuildContext context) {
    final enough = _length >= TracingView.minLength;
    return Column(
      children: [
        Padding(
          padding: const EdgeInsets.all(12),
          child: Text(
            enough ? loc('جميل! تتبّعتَ الحرف بإتقان 🌟') : loc('تتبّع الحرف بإصبعك فوق الشكل الباهت'),
            textAlign: TextAlign.center,
            style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w800, color: RC.ink),
          ),
        ),
        Expanded(
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: Semantics(
              label: tr2('مساحة تتبّع حرف ${widget.letter.name}', 'Tracing area for the letter ${widget.letter.name}'),
              child: Container(
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(24),
                  border: Border.all(color: RC.outline, width: 3),
                ),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(21),
                  child: GestureDetector(
                    onPanStart: (d) => _start(d.localPosition),
                    onPanUpdate: (d) => _move(d.localPosition),
                    child: Stack(
                      fit: StackFit.expand,
                      children: [
                        Center(
                          child: FittedBox(
                            child: Padding(
                              padding: const EdgeInsets.all(12),
                              child: Text(widget.letter.letter,
                                  style: TextStyle(fontSize: 300, color: RC.outline.withAlpha(50))),
                            ),
                          ),
                        ),
                        CustomPaint(painter: _StrokePainter(_strokes)),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
        Padding(
          padding: const EdgeInsets.all(12),
          child: Row(
            children: [
              Expanded(
                child: OutlinedButton.icon(
                  onPressed: () => setState(() {
                    _strokes.clear();
                    _length = 0;
                  }),
                  icon: const Icon(Icons.refresh_rounded),
                  label: Text(loc('امسح وأعد'), style: TextStyle(fontSize: 18)),
                ),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: FilledButton.icon(
                  onPressed: enough ? widget.onDone : null,
                  icon: const Icon(Icons.check_rounded),
                  label: Text(loc('تم'), style: TextStyle(fontSize: 18)),
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}

class _StrokePainter extends CustomPainter {
  final List<List<Offset>> strokes;
  _StrokePainter(this.strokes);

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = RC.pinkDeep
      ..strokeWidth = 14
      ..strokeCap = StrokeCap.round
      ..strokeJoin = StrokeJoin.round
      ..style = PaintingStyle.stroke;
    for (final s in strokes) {
      if (s.length == 1) {
        canvas.drawCircle(s.first, 7, Paint()..color = RC.pinkDeep);
        continue;
      }
      final path = Path()..moveTo(s.first.dx, s.first.dy);
      for (final p in s.skip(1)) {
        path.lineTo(p.dx, p.dy);
      }
      canvas.drawPath(path, paint);
    }
  }

  @override
  bool shouldRepaint(_StrokePainter old) => true;
}
