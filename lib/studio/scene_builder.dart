import 'package:flutter/material.dart';

import '../journey/models.dart';
import '../journey/ui/kit.dart';
import '../library/vocab.dart';
import 'autosave.dart';
import 'creations.dart';

/// Build a simple scene: pick a background, add pictures from the vocabulary,
/// drag them, make them bigger or smaller. Saved automatically.
class SceneBuilderScreen extends StatefulWidget {
  final ChildProfile child;
  final Creation? initial;
  const SceneBuilderScreen({super.key, required this.child, this.initial});

  @override
  State<SceneBuilderScreen> createState() => _SceneBuilderScreenState();
}

class _SceneBuilderScreenState extends State<SceneBuilderScreen> {
  late final CreationAutosaver _save = CreationAutosaver(widget.child, CreationKind.scene, initial: widget.initial)
    ..onChanged = () {
      if (mounted) setState(() {});
    };
  late String _bg = widget.initial?.data['bg'] as String? ?? 'meadow';
  late final List<SceneItem> _items = widget.initial == null ? [] : sceneItemsOf(widget.initial!.data);
  int? _selected;
  String _category = 'animals';

  void _changed() => _save.changed(() => sceneData(_bg, _items));

  @override
  void dispose() {
    _save.dispose();
    super.dispose();
  }

  void _add(String emoji) {
    setState(() {
      _items.add(SceneItem(emoji, 0.5, 0.5, 1.4));
      _selected = _items.length - 1;
    });
    _changed();
  }

  void _scale(double f) {
    final i = _selected;
    if (i == null) return;
    setState(() => _items[i] = _items[i].copyWith(scale: (_items[i].scale * f).clamp(0.6, 3.5)));
    _changed();
  }

  @override
  Widget build(BuildContext context) {
    final pool = searchVocab(category: _category, age: null);
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: RC.ink,
        title: const Text('ابنِ مشهدك',
            style: TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: RC.ink)),
        actions: [
          Center(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 12),
              child: Text(_save.tooLarge ? 'المشهد كبير جداً للحفظ' : (_save.saved ? 'تم الحفظ ✓' : ''),
                  style: const TextStyle(color: RC.ink)),
            ),
          ),
        ],
      ),
      body: PastelBackground(
        child: SafeArea(
          child: Column(
            children: [
              Expanded(
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(16, 0, 16, 8),
                  child: Container(
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(24),
                      border: Border.all(color: RC.outline, width: 3),
                    ),
                    clipBehavior: Clip.antiAlias,
                    child: LayoutBuilder(
                      builder: (context, box) => Stack(
                        children: [
                          Positioned.fill(child: SceneView(bg: _bg, items: const [])),
                          for (var i = 0; i < _items.length; i++)
                            Positioned(
                              left: _items[i].x * box.maxWidth - 22 * _items[i].scale - 6,
                              top: _items[i].y * box.maxHeight - 22 * _items[i].scale - 6,
                              child: GestureDetector(
                                onTap: () => setState(() => _selected = i),
                                onPanStart: (_) => setState(() => _selected = i),
                                onPanUpdate: (d) {
                                  setState(() {
                                    _items[i] = _items[i].copyWith(
                                      x: (_items[i].x + d.delta.dx / box.maxWidth).clamp(0.02, 0.98),
                                      y: (_items[i].y + d.delta.dy / box.maxHeight).clamp(0.02, 0.98),
                                    );
                                  });
                                },
                                onPanEnd: (_) => _changed(),
                                child: Semantics(
                                  label: 'عنصر في المشهد',
                                  child: Container(
                                    padding: const EdgeInsets.all(6),
                                    decoration: BoxDecoration(
                                      border: _selected == i ? Border.all(color: RC.pinkDeep, width: 2) : null,
                                      borderRadius: BorderRadius.circular(12),
                                    ),
                                    child: Text(_items[i].emoji,
                                        style: TextStyle(fontSize: 44 * _items[i].scale, height: 1)),
                                  ),
                                ),
                              ),
                            ),
                          if (_items.isEmpty)
                            const Center(
                              child: Text('اختر صورة من الأسفل لتضعها في مشهدك',
                                  style: TextStyle(fontSize: 18, color: Colors.black54)),
                            ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
              Wrap(
                spacing: 6,
                alignment: WrapAlignment.center,
                children: [
                  for (final e in kSceneBackgrounds.entries)
                    ChoiceChip(
                      label: Text(e.value.$1),
                      selected: _bg == e.key,
                      onSelected: (_) {
                        setState(() => _bg = e.key);
                        _changed();
                      },
                    ),
                  IconButton(
                    tooltip: 'تكبير',
                    onPressed: _selected == null ? null : () => _scale(1.25),
                    icon: const Icon(Icons.zoom_in_rounded),
                  ),
                  IconButton(
                    tooltip: 'تصغير',
                    onPressed: _selected == null ? null : () => _scale(0.8),
                    icon: const Icon(Icons.zoom_out_rounded),
                  ),
                  IconButton(
                    tooltip: 'حذف العنصر المحدد',
                    onPressed: _selected == null
                        ? null
                        : () {
                            setState(() {
                              _items.removeAt(_selected!);
                              _selected = null;
                            });
                            _changed();
                          },
                    icon: const Icon(Icons.delete_outline_rounded),
                  ),
                ],
              ),
              SizedBox(
                height: 48,
                child: ListView(
                  scrollDirection: Axis.horizontal,
                  padding: const EdgeInsets.symmetric(horizontal: 8),
                  children: [
                    for (final c in kVocabCategories.where((c) => c.id != kEnglishCategory))
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 3),
                        child: ChoiceChip(
                          label: Text(c.emoji),
                          tooltip: c.title,
                          selected: _category == c.id,
                          onSelected: (_) => setState(() => _category = c.id),
                        ),
                      ),
                  ],
                ),
              ),
              SizedBox(
                height: 70,
                child: ListView(
                  scrollDirection: Axis.horizontal,
                  padding: const EdgeInsets.symmetric(horizontal: 8),
                  children: [
                    for (final v in pool)
                      IconButton(
                        tooltip: v.ar,
                        iconSize: 44,
                        onPressed: () => _add(v.emoji),
                        icon: Text(v.emoji, style: const TextStyle(fontSize: 38)),
                      ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
