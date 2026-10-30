import 'package:flutter/material.dart';

import 'journey/models.dart' show ChildProfile;
import 'main.dart' show VideoListScreen;
import 'rest_screen.dart';
import 'session_manager.dart';
import 'studio/autosave.dart';
import 'studio/creations.dart';
import 'studio/drawing_model.dart';
import 'ui.dart';
import 'l10n/strings.dart';

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

  late final DrawingModel _model;
  Size _canvas = Size.zero;
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
    }
    _model = widget.initial != null ? DrawingModel.fromData(widget.initial!.data) : DrawingModel();
  }

  @override
  void dispose() {
    _autosave?.dispose();
    super.dispose();
  }

  Map<String, dynamic> _snapshot() => _model.toData();

  void _changed() => _autosave?.changed(_snapshot);

  void _down(DragDownDetails d) => setState(() =>
      _model.begin(d.localPosition, _canvas, _pen.toARGB32(), _eraser ? _size * 1.6 : _size));

  void _update(DragUpdateDetails d) => setState(() => _model.extend(d.localPosition, _canvas));

  void _up() {
    if (_model.end()) {
      setState(() {});
      _changed();
    }
  }

  Future<void> _confirmClear() async {
    final ok = await showDialog<bool>(
      context: context,
      builder: (c) => AlertDialog(
        title: Text(tr2('مسح الرسمة كلها؟', 'Clear the whole drawing?')),
        content: Text(tr2('يمكنك التراجع بعدها مرة واحدة.', 'You can undo this once.')),
        actions: [
          TextButton(onPressed: () => Navigator.pop(c, false), child: Text(tr2('لا', 'No'))),
          FilledButton(onPressed: () => Navigator.pop(c, true), child: Text(tr2('نعم، امسح', 'Yes, clear'))),
        ],
      ),
    );
    if (ok != true || !mounted) return;
    setState(_model.clear);
    _changed();
  }

  void _pickTemplate() async {
    final id = await showModalBottomSheet<String>(
      context: context,
      builder: (c) => SafeArea(
        child: Wrap(
          alignment: WrapAlignment.center,
          spacing: 12,
          runSpacing: 12,
          children: [
            for (final e in [('', '🚫'), ...kTemplates.entries.map((e) => (e.key, e.value))])
              Semantics(
                button: true,
                label: e.$1.isEmpty ? tr2('بدون شكل', 'No outline') : e.$1,
                child: InkWell(
                  onTap: () => Navigator.pop(c, e.$1),
                  child: SizedBox(width: 72, height: 72, child: Center(child: Text(e.$2, style: const TextStyle(fontSize: 40)))),
                ),
              ),
          ],
        ),
      ),
    );
    if (id == null || !mounted) return;
    setState(() => _model.setTemplate(id.isEmpty ? null : id));
    _changed();
  }

  Future<void> _again() async {
    if (await restIfTimeUp(context)) return;
    if (!mounted) return;
    setState(() {
      _model.clear();
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
        title: Text(loc('رسم'), style: TextStyle(fontSize: 26)),
        actions: [
          if (_autosave != null)
            Center(
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 8),
                child: Text(_autosave!.tooLarge ? loc('الرسمة كبيرة جداً للحفظ') : (_autosave!.saved ? loc('تم الحفظ ✓') : '')),
              ),
            ),
          IconButton(
            iconSize: 32,
            tooltip: loc('تعلّم الرسم'),
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
                        onPanEnd: (_) => _up(),
                        onPanCancel: _up,
                        child: LayoutBuilder(
                          builder: (context, box) {
                            _canvas = Size(box.maxWidth, box.maxHeight);
                            return Semantics(
                              label: tr2('لوحة الرسم', 'Drawing canvas'),
                              image: true,
                              child: CustomPaint(
                                painter: _CanvasPainter(_model),
                                child: const SizedBox.expand(),
                              ),
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
                          tooltip: loc('ممحاة'),
                          style: IconButton.styleFrom(
                            backgroundColor: _eraser ? Colors.amber : null,
                          ),
                          onPressed: () => setState(() => _eraser = !_eraser),
                          icon: const Icon(Icons.cleaning_services_rounded),
                        ),
                        IconButton.filledTonal(
                          iconSize: 32,
                          tooltip: tr2('تراجع', 'Undo'),
                          onPressed: _model.canUndo
                              ? () {
                                  setState(_model.undo);
                                  _changed();
                                }
                              : null,
                          icon: const Icon(Icons.undo_rounded),
                        ),
                        IconButton.filledTonal(
                          iconSize: 32,
                          tooltip: tr2('إعادة', 'Redo'),
                          onPressed: _model.canRedo
                              ? () {
                                  setState(_model.redo);
                                  _changed();
                                }
                              : null,
                          icon: const Icon(Icons.redo_rounded),
                        ),
                        IconButton.filledTonal(
                          iconSize: 32,
                          tooltip: tr2('أشكال للتلوين', 'Shapes to color'),
                          onPressed: _pickTemplate,
                          icon: const Icon(Icons.category_rounded),
                        ),
                        IconButton.filledTonal(
                          iconSize: 32,
                          tooltip: loc('مسح الكل'),
                          onPressed: _model.isEmpty ? null : _confirmClear,
                          icon: const Icon(Icons.delete_outline_rounded),
                        ),
                        FilledButton.icon(
                          style: FilledButton.styleFrom(backgroundColor: kBright[2]),
                          onPressed: _model.isEmpty
                              ? null
                              : () => setState(() => _finished = true),
                          icon: const Icon(Icons.check_rounded),
                          label: Text(loc('خلصت'), style: TextStyle(fontSize: 22)),
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

class _CanvasPainter extends CustomPainter {
  final DrawingModel model;
  _CanvasPainter(this.model);

  @override
  void paint(Canvas canvas, Size size) {
    final t = model.template;
    if (t != null) TemplatePainter(t).paint(canvas, size);
    final live = model.live;
    NormalizedDrawingPainter([...model.strokes, ?live]).paint(canvas, size);
  }

  @override
  bool shouldRepaint(covariant _CanvasPainter oldDelegate) => true;
}
