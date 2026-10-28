import 'package:flutter/material.dart';

import '../drawing_screen.dart';
import '../journey/models.dart';
import '../journey/repository.dart';
import '../journey/ui/kit.dart';
import '../library/lesson_engine.dart';
import '../library/lesson_runner.dart';
import 'character_creator.dart';
import 'creations.dart';
import 'scene_builder.dart';
import 'story_pictures.dart';
import '../l10n/strings.dart';

/// «استوديو الإبداع»: optional, calm making activities.
class StudioScreen extends StatelessWidget {
  final ChildProfile child;
  const StudioScreen({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    Widget tile(String emoji, String label, Color color, Widget Function() screen) => SizedBox(
          width: 160,
          child: RCard(
            color: color.withAlpha(170),
            semanticLabel: label,
            onTap: () => Navigator.push(context, MaterialPageRoute(builder: (_) => screen())),
            child: Column(
              children: [
                Text(emoji, style: const TextStyle(fontSize: 42)),
                const SizedBox(height: 4),
                Text(label,
                    textAlign: TextAlign.center,
                    style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w900, color: RC.ink)),
              ],
            ),
          ),
        );
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: RC.ink,
        title: Text(loc('استوديو الإبداع'),
            style: TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: RC.ink)),
      ),
      body: PastelBackground(
        child: SafeArea(
          child: SingleChildScrollView(
            padding: const EdgeInsets.all(16),
            child: Column(
              children: [
                Text(loc('اصنع ما تحب. كل أعمالك تُحفظ تلقائياً في معرض عائلتك الخاص على هذا الجهاز.'),
                    textAlign: TextAlign.center, style: TextStyle(fontSize: 16, color: RC.ink)),
                const SizedBox(height: 14),
                Wrap(
                  spacing: 12,
                  runSpacing: 12,
                  alignment: WrapAlignment.center,
                  children: [
                    tile('🎨', loc('رسم وتلوين'), RC.pink, () => DrawingScreen(child: child)),
                    tile('🏞️', loc('ابنِ مشهداً'), RC.mint, () => SceneBuilderScreen(child: child)),
                    tile('🧑‍🎨', loc('صمّم شخصية'), RC.peach, () => CharacterCreatorScreen(child: child)),
                    tile('📖', loc('قصة بالصور'), RC.yellow, () => PictureStoryScreen(child: child)),
                    tile(
                      '↕️',
                      loc('رتّب الصور'),
                      RC.sky,
                      () => LessonRunnerScreen(child: child, kind: LessonKind.sequence, title: loc('رتّب الخطوات')),
                    ),
                    tile('🖼️', loc('معرض العائلة'), RC.lavender, () => ChildGalleryScreen(child: child)),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

/// A child's own creations. A child can look and keep making; deleting is
/// the parent's job (parent area, behind the PIN).
class ChildGalleryScreen extends StatefulWidget {
  final ChildProfile child;
  const ChildGalleryScreen({super.key, required this.child});

  @override
  State<ChildGalleryScreen> createState() => _ChildGalleryScreenState();
}

class _ChildGalleryScreenState extends State<ChildGalleryScreen> {
  List<Creation>? _items;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final list = await FamilyGallery.forChild(widget.child.id);
    if (mounted) setState(() => _items = list.reversed.toList());
  }

  Widget _editor(Creation c) => switch (c.kind) {
        CreationKind.drawing => DrawingScreen(child: widget.child, initial: c),
        CreationKind.scene => SceneBuilderScreen(child: widget.child, initial: c),
        CreationKind.character => CharacterCreatorScreen(child: widget.child, initial: c),
        CreationKind.story => PictureStoryScreen(child: widget.child, initial: c),
      };

  @override
  Widget build(BuildContext context) {
    final items = _items;
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: RC.ink,
        title: Text(loc('معرض العائلة'),
            style: TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: RC.ink)),
      ),
      body: PastelBackground(
        child: SafeArea(
          child: items == null
              ? const Center(child: CircularProgressIndicator())
              : items.isEmpty
                  ? Center(
                      child: Padding(
                        padding: EdgeInsets.all(24),
                        child: Text(loc('لا توجد أعمال بعد. اصنع رسمة أو مشهداً أو شخصية وستظهر هنا.'),
                            textAlign: TextAlign.center, style: TextStyle(fontSize: 18, color: RC.ink)),
                      ),
                    )
                  : GridView.builder(
                      padding: const EdgeInsets.all(16),
                      gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(
                        maxCrossAxisExtent: 180,
                        mainAxisSpacing: 12,
                        crossAxisSpacing: 12,
                      ),
                      itemCount: items.length,
                      itemBuilder: (context, i) {
                        final c = items[i];
                        return RCard(
                          padding: EdgeInsets.zero,
                          semanticLabel: '${c.kind.label} بتاريخ ${c.day}',
                          onTap: () async {
                            await Navigator.push(context, MaterialPageRoute(builder: (_) => _editor(c)));
                            _load();
                          },
                          child: Stack(
                            children: [
                              Positioned.fill(child: ClipRRect(borderRadius: BorderRadius.circular(20), child: CreationThumb(creation: c))),
                              PositionedDirectional(
                                bottom: 4,
                                start: 6,
                                child: Text('${c.kind.emoji} ${c.day}',
                                    style: const TextStyle(fontSize: 11, color: Colors.black54)),
                              ),
                            ],
                          ),
                        );
                      },
                    ),
        ),
      ),
    );
  }
}

/// Parent area: see everything that was made and delete it (one item, all of
/// one child's, or everything). Nothing here is ever sent anywhere.
class ParentGalleryScreen extends StatefulWidget {
  const ParentGalleryScreen({super.key});

  @override
  State<ParentGalleryScreen> createState() => _ParentGalleryScreenState();
}

class _ParentGalleryScreenState extends State<ParentGalleryScreen> {
  List<Creation>? _items;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final list = await FamilyGallery.all();
    if (mounted) setState(() => _items = list.reversed.toList());
  }

  Future<bool> _confirm(String text) async =>
      await showDialog<bool>(
        context: context,
        builder: (context) => AlertDialog(
          title: Text(loc('تأكيد الحذف')),
          content: Text(text),
          actions: [
            TextButton(onPressed: () => Navigator.pop(context, false), child: Text(loc('إلغاء'))),
            FilledButton(onPressed: () => Navigator.pop(context, true), child: Text(loc('حذف'))),
          ],
        ),
      ) ??
      false;

  @override
  Widget build(BuildContext context) {
    final items = _items;
    String name(String id) => JourneyStore.instance.profileById(id)?.nickname ?? loc('طفل محذوف');
    return Scaffold(
      appBar: AppBar(
        title: Text(loc('معرض العائلة')),
        actions: [
          if (items != null && items.isNotEmpty)
            IconButton(
              tooltip: loc('حذف كل الأعمال'),
              icon: const Icon(Icons.delete_sweep_rounded),
              onPressed: () async {
                if (await _confirm(loc('حذف كل الأعمال لكل الأطفال نهائياً؟'))) {
                  await FamilyGallery.deleteEverything();
                  _load();
                }
              },
            ),
        ],
      ),
      body: items == null
          ? const Center(child: CircularProgressIndicator())
          : items.isEmpty
              ? Center(child: Padding(padding: EdgeInsets.all(24), child: Text(loc('المعرض فارغ.'))))
              : ListView(
                  padding: const EdgeInsets.all(12),
                  children: [
                    Padding(
                      padding: EdgeInsets.all(8),
                      child: Text(
                        loc('أعمال أطفالك محفوظة على هذا الجهاز فقط، ولا تُرسل ولا تُنشر. أنت وحدك من يستطيع حذفها.'),
                        style: TextStyle(fontSize: 14),
                      ),
                    ),
                    for (final c in items)
                      Card(
                        child: ListTile(
                          leading: SizedBox(width: 56, height: 56, child: ClipRRect(borderRadius: BorderRadius.circular(8), child: CreationThumb(creation: c))),
                          title: Text('${c.kind.label} · ${name(c.childId)}'),
                          subtitle: Text(c.day),
                          trailing: IconButton(
                            tooltip: loc('حذف'),
                            icon: const Icon(Icons.delete_outline_rounded),
                            onPressed: () async {
                              if (await _confirm(loc('حذف هذا العمل نهائياً؟'))) {
                                await FamilyGallery.delete(c.id);
                                _load();
                              }
                            },
                          ),
                        ),
                      ),
                  ],
                ),
    );
  }
}
