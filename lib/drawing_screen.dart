import 'package:flutter/material.dart';

import 'journey/models.dart' show ChildProfile;
import 'main.dart' show VideoListScreen;
import 'rest_screen.dart';
import 'session_manager.dart';
import 'studio/autosave.dart';
import 'studio/creations.dart';
import 'ui.dart';

class _Stroke {
  final Color color;
  final double width;
  final List<Offset> points;
  _Stroke(this.color, this.width, Offset start) : points = [start];
}

/// رسم حر: ألوان، 3 أحجام، ممحاة، تراجع. الرسمة مش بتتحفظ ولا بتتبعت لأي مكان.
/// النجمة بتظهر لما الطفل يدوس "خلصت" بعد ما يرسم حاجة.
class DrawingScreen extends StatefulWidget {
  /// When a child is given, the drawing is saved automatically to the private
  /// family gallery on this device (and can be reopened from there).
  final ChildProfile? child;
  final Creation? initial;
  const DrawingScreen({super.key, this.child, this.initial});

  @override
  State<DrawingScreen> createState() => _DrawingScreenState();
}

class _DrawingScreenState extends State<DrawingScreen> {
  static const _palette = [
    Color(0xFFE53935),
    Color(0xFFFB8C00),
    Color(0xFFFDD835),
    Color(0xFF43A047),
    Color(0xFF1E88E5),
    Color(0xFF8E24AA),
    Color(0xFF6D4C41),
    Color(0xFF212121),
  ];
  static const _sizes = [6.0, 14.0, 28.0];

  final List<_Stroke> _strokes = [];
  Size _canvas = Size.zero;
  List<DrawStroke>? _pending; // saved strokes waiting for the canvas size
  CreationAutosaver? _autosave;
  Color _color = _palette[0];
  double _size = _sizes[1];
  bool _eraser = false;
  bool _finished = false;

  Color get _pen => _eraser ? Colors.white : _color;

  @override
  void initState() {
    super.initState();
    final child = widget.child;
    if (child != null) {
      _autosave = CreationAutosaver(child, CreationKind.drawing, initial: widget.initial)
        ..onChanged = () {
          if (mounted) setState(() {});
        };
      if (widget.initial != null) _pending = strokesOf(widget.initial!.data);
    }
  }

  @override
  void dispose() {
    _autosave?.dispose();
    super.dispose();
  }

  Map<String, dynamic> _snapshot() {
    final w = _canvas.width == 0 ? 1.0 : _canvas.width;
    final h = _canvas.height == 0 ? 1.0 : _canvas.height;
    return drawingData([
      for (final st in _strokes)
        DrawStroke(
          // ignore: deprecated_member_use
          st.color.value,
          st.width / w * 1000,
          [for (final p in st.points) Offset(p.dx / w * 1000, p.dy / h * 1000)],
        ),
    ]);
  }

  void _changed() => _autosave?.changed(_snapshot);

  void _down(DragDownDetails d) =>
      setState(() => _strokes.add(_Stroke(_pen, _size, d.localPosition)));

  void _update(DragUpdateDetails d) {
    if (_strokes.isEmpty) return;
    setState(() => _strokes.last.points.add(d.localPosition));
  }

  Future<void> _again() async {
    if (await restIfTimeUp(context)) return;
    if (!mounted) return;
    setState(() {
      _strokes.clear();
      _finished = false;
    });
  }

  Widget _swatch(Color c) {
    final selected = !_eraser && _color == c;
    return GestureDetector(
      onTap: () => setState(() {
        _color = c;
        _eraser = false;
      }),
      child: Container(
        width: 44,
        height: 44,
        decoration: BoxDecoration(
          color: c,
          shape: BoxShape.circle,
          border: Border.all(
            color: selected ? Colors.black : Colors.brown.shade200,
            width: selected ? 4 : 2,
          ),
        ),
      ),
    );
  }

  Widget _sizeDot(double s) {
    final selected = _size == s;
    return GestureDetector(
      onTap: () => setState(() => _size = s),
      child: Container(
        width: 48,
        height: 48,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          color: selected ? Colors.brown.shade100 : Colors.transparent,
        ),
        child: Container(
          width: s + 6,
          height: s + 6,
          decoration: const BoxDecoration(shape: BoxShape.circle, color: Colors.black87),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        title: const Text('رسم', style: TextStyle(fontSize: 26)),
        actions: [
          if (_autosave != null)
            Center(
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 8),
                child: Text(_autosave!.tooLarge ? 'الرسمة كبيرة جداً للحفظ' : (_autosave!.saved ? 'تم الحفظ ✓' : '')),
              ),
            ),
          IconButton(
            iconSize: 32,
            tooltip: 'تعلّم الرسم',
            icon: const Icon(Icons.ondemand_video_rounded),
            onPressed: () => Navigator.push(
              context,
              MaterialPageRoute(
                builder: (_) => VideoListScreen(
                  age: SessionManager.instance.currentAge ?? 6,
                  subject: 'drawing',
                ),
              ),
            ),
          ),
        ],
      ),
      body: _finished
          ? Center(child: StarDone(onAgain: _again))
          : Column(
              children: [
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.fromLTRB(16, 0, 16, 8),
                    child: Container(
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(24),
                        border: Border.all(color: Colors.brown.shade200, width: 3),
                      ),
                      clipBehavior: Clip.antiAlias,
                      child: GestureDetector(
                        behavior: HitTestBehavior.opaque,
                        onPanDown: _down,
                        onPanUpdate: _update,
                        onPanEnd: (_) => _changed(),
                        onPanCancel: _changed,
                        child: LayoutBuilder(
                          builder: (context, box) {
                            _canvas = Size(box.maxWidth, box.maxHeight);
                            final pending = _pending;
                            if (pending != null) {
                              _pending = null;
                              for (final st in pending) {
                                _strokes.add(_Stroke(Color(st.color), st.width / 1000 * _canvas.width, Offset.zero)
                                  ..points.clear()
                                  ..points.addAll([
                                    for (final p in st.points)
                                      Offset(p.dx / 1000 * _canvas.width, p.dy / 1000 * _canvas.height),
                                  ]));
                              }
                            }
                            return CustomPaint(
                              painter: _DrawingPainter(_strokes),
                              child: const SizedBox.expand(),
                            );
                          },
                        ),
                      ),
                    ),
                  ),
                ),
                SafeArea(
                  top: false,
                  child: Padding(
                    padding: const EdgeInsets.fromLTRB(16, 0, 16, 12),
                    child: Wrap(
                      spacing: 10,
                      runSpacing: 8,
                      alignment: WrapAlignment.center,
                      crossAxisAlignment: WrapCrossAlignment.center,
                      children: [
                        for (final c in _palette) _swatch(c),
                        for (final s in _sizes) _sizeDot(s),
                        IconButton.filledTonal(
                          iconSize: 32,
                          tooltip: 'ممحاة',
                          style: IconButton.styleFrom(
                            backgroundColor: _eraser ? Colors.amber : null,
                          ),
                          onPressed: () => setState(() => _eraser = !_eraser),
                          icon: const Icon(Icons.cleaning_services_rounded),
                        ),
                        IconButton.filledTonal(
                          iconSize: 32,
                          tooltip: 'تراجع',
                          onPressed: _strokes.isEmpty
                              ? null
                              : () {
                                  setState(_strokes.removeLast);
                                  _changed();
                                },
                          icon: const Icon(Icons.undo_rounded),
                        ),
                        IconButton.filledTonal(
                          iconSize: 32,
                          tooltip: 'مسح الكل',
                          onPressed: _strokes.isEmpty
                              ? null
                              : () {
                                  setState(_strokes.clear);
                                  _changed();
                                },
                          icon: const Icon(Icons.delete_outline_rounded),
                        ),
                        FilledButton.icon(
                          style: FilledButton.styleFrom(backgroundColor: kBright[2]),
                          onPressed: _strokes.isEmpty
                              ? null
                              : () => setState(() => _finished = true),
                          icon: const Icon(Icons.check_rounded),
                          label: const Text('خلصت', style: TextStyle(fontSize: 22)),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
    );
  }
}

class _DrawingPainter extends CustomPainter {
  final List<_Stroke> strokes;
  _DrawingPainter(this.strokes);

  @override
  void paint(Canvas canvas, Size size) {
    for (final s in strokes) {
      final paint = Paint()
        ..color = s.color
        ..strokeWidth = s.width
        ..strokeCap = StrokeCap.round
        ..strokeJoin = StrokeJoin.round;
      if (s.points.length == 1) {
        // A single tap makes a dot.
        canvas.drawCircle(s.points.first, s.width / 2, paint..style = PaintingStyle.fill);
      } else {
        final path = Path()..moveTo(s.points.first.dx, s.points.first.dy);
        for (final p in s.points.skip(1)) {
          path.lineTo(p.dx, p.dy);
        }
        canvas.drawPath(path, paint..style = PaintingStyle.stroke);
      }
    }
  }

  @override
  bool shouldRepaint(covariant _DrawingPainter oldDelegate) => true;
}
