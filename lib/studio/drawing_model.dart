import 'dart:math';
import 'package:flutter/widgets.dart';

import 'creations.dart';

/// The state of one drawing, with no widgets: strokes in a 0..1000 square space that is stretched to
/// whatever size the canvas has, so a drawing survives a resize, a rotation and saving unchanged.
///
/// History is bounded: at most [maxHistory] undo steps are kept (each step shares the finished,
/// immutable strokes, so a step costs only a list of references), and a drawing holds at most
/// [maxStrokes] strokes. Past either limit the oldest is dropped, never the child's newest work.
class DrawingModel {
  static const maxHistory = 50;
  static const maxStrokes = 400;
  static const space = 1000.0;

  List<DrawStroke> _strokes;
  final List<List<DrawStroke>> _undo = [];
  final List<List<DrawStroke>> _redo = [];
  List<Offset>? _live;
  int _liveColor = 0;
  double _liveWidth = 0;

  /// The id of a coloring template drawn behind the strokes, if any (see [kTemplates]).
  String? template;

  DrawingModel({List<DrawStroke>? strokes, this.template}) : _strokes = List.of(strokes ?? const []);

  List<DrawStroke> get strokes => List.unmodifiable(_strokes);

  /// The stroke being drawn right now, for painting.
  DrawStroke? get live => _live == null ? null : DrawStroke(_liveColor, _liveWidth, List.of(_live!));

  bool get isEmpty => _strokes.isEmpty && _live == null;
  bool get canUndo => _undo.isNotEmpty;
  bool get canRedo => _redo.isNotEmpty;
  int get undoDepth => _undo.length;

  void _remember() {
    _undo.add(List.of(_strokes));
    if (_undo.length > maxHistory) _undo.removeAt(0);
    _redo.clear();
  }

  /// Canvas pixels -> drawing space (clamped to the canvas).
  static Offset toSpace(Offset p, Size canvas) {
    if (canvas.width <= 0 || canvas.height <= 0) return Offset.zero;
    return Offset((p.dx / canvas.width * space).clamp(0, space), (p.dy / canvas.height * space).clamp(0, space));
  }

  /// Drawing space -> canvas pixels.
  static Offset toCanvas(Offset p, Size canvas) => Offset(p.dx / space * canvas.width, p.dy / space * canvas.height);

  /// A pen width in canvas pixels -> drawing space (relative to the canvas width).
  static double widthToSpace(double px, Size canvas) => canvas.width <= 0 ? px : px / canvas.width * space;

  void begin(Offset canvasPoint, Size canvas, int color, double widthPx) {
    _live = [toSpace(canvasPoint, canvas)];
    _liveColor = color;
    _liveWidth = widthToSpace(widthPx, canvas);
  }

  void extend(Offset canvasPoint, Size canvas) => _live?.add(toSpace(canvasPoint, canvas));

  /// Finishes the stroke being drawn. Returns false when nothing was being drawn.
  bool end() {
    final pts = _live;
    if (pts == null) return false;
    _live = null;
    _remember();
    _strokes.add(DrawStroke(_liveColor, _liveWidth, pts));
    if (_strokes.length > maxStrokes) _strokes.removeAt(0);
    return true;
  }

  bool undo() {
    if (_undo.isEmpty) return false;
    _redo.add(List.of(_strokes));
    _strokes = _undo.removeLast();
    return true;
  }

  bool redo() {
    if (_redo.isEmpty) return false;
    _undo.add(List.of(_strokes));
    _strokes = _redo.removeLast();
    return true;
  }

  /// Clears the drawing. This can be undone once, like any other step.
  void clear() {
    if (_strokes.isEmpty) return;
    _remember();
    _strokes = [];
  }

  void setTemplate(String? id) {
    template = id;
  }

  Map<String, dynamic> toData() => {...drawingData(_strokes), if (template != null) 't': template};

  /// Loads saved data. Damaged parts are skipped; the rest still opens.
  factory DrawingModel.fromData(Map<String, dynamic> data) {
    List<DrawStroke> strokes;
    try {
      strokes = strokesOf(data).where((s) => s.points.isNotEmpty).toList();
    } catch (_) {
      strokes = [];
    }
    final t = data['t'];
    return DrawingModel(strokes: strokes, template: t is String && kTemplates.containsKey(t) ? t : null);
  }
}

/// Simple outlines to color in. Each is drawn in the 0..1000 space by [templatePath].
const kTemplates = <String, String>{
  'circle': '⚪',
  'square': '⬜',
  'triangle': '🔺',
  'star': '⭐',
  'house': '🏠',
  'flower': '🌼',
};

Path templatePath(String id) {
  final p = Path();
  switch (id) {
    case 'circle':
      p.addOval(const Rect.fromLTWH(200, 200, 600, 600));
    case 'square':
      p.addRect(const Rect.fromLTWH(220, 220, 560, 560));
    case 'triangle':
      p
        ..moveTo(500, 170)
        ..lineTo(830, 800)
        ..lineTo(170, 800)
        ..close();
    case 'star':
      for (var i = 0; i < 10; i++) {
        final r = i.isEven ? 330.0 : 140.0;
        final a = -pi / 2 + i * pi / 5;
        final pt = Offset(500 + r * cos(a), 520 + r * sin(a));
        i == 0 ? p.moveTo(pt.dx, pt.dy) : p.lineTo(pt.dx, pt.dy);
      }
      p.close();
    case 'house':
      p
        ..addRect(const Rect.fromLTWH(250, 480, 500, 320))
        ..moveTo(210, 480)
        ..lineTo(500, 220)
        ..lineTo(790, 480)
        ..close()
        ..addRect(const Rect.fromLTWH(440, 600, 120, 200));
    case 'flower':
      for (var i = 0; i < 6; i++) {
        final a = i * pi / 3;
        p.addOval(Rect.fromCenter(center: Offset(500 + 190 * cos(a), 480 + 190 * sin(a)), width: 200, height: 200));
      }
      p
        ..addOval(Rect.fromCenter(center: const Offset(500, 480), width: 160, height: 160))
        ..moveTo(500, 680)
        ..lineTo(500, 900);
  }
  return p;
}

/// Paints the template outline (light grey) in the same stretched space as the strokes.
class TemplatePainter extends CustomPainter {
  final String id;
  TemplatePainter(this.id);

  @override
  void paint(Canvas canvas, Size size) {
    final m = Matrix4.diagonal3Values(size.width / DrawingModel.space, size.height / DrawingModel.space, 1);
    canvas.drawPath(
      templatePath(id).transform(m.storage),
      Paint()
        ..color = const Color(0xFF9E9E9E)
        ..style = PaintingStyle.stroke
        ..strokeWidth = 5
        ..strokeJoin = StrokeJoin.round,
    );
  }

  @override
  bool shouldRepaint(TemplatePainter old) => old.id != id;
}
