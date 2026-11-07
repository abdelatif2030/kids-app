import 'package:flutter/material.dart';
import '../design/picture_stage.dart';

import '../design/motion.dart';
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
import 'word_builder.dart';
import '../l10n/app_locale.dart';
import '../l10n/strings.dart';

/// «استوديو الإبداع»: the owner's picture with seven islands (2026-11-07). Optional, calm making activities. The picture is
/// shown whole; each island is a large invisible button, so what a child sees is exactly the design.
const String kStudioPicture = 'assets/home/studio_scene.jpg';
const double kStudioAspect = 1672 / 941;

class StudioScreen extends StatelessWidget {
  final ChildProfile child;
  const StudioScreen({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    final ar = AppLocale.instance.isArabic;
    void open(Widget Function() screen) => Navigator.push(context, MaterialPageRoute<void>(builder: (_) => screen()));
    // the seven islands, from the left of the picture to its right: (id, centre x, Arabic name, English name, page)
    final islands = <(String, double, String, String, Widget Function())>[
      ('gallery', 0.102, 'معرض العائلة', 'Family gallery', () => ChildGalleryScreen(child: child)),
      ('word', 0.236, 'ركّب الكلمة', 'Build the word', () => WordBuilderScreen(child: child)),
      ('order', 0.371, 'ركّب الصور', 'Order the pictures', () => LessonRunnerScreen(child: child, kind: LessonKind.sequence, title: loc('رتّب الخطوات'))),
      ('story', 0.502, 'قصة بالصور', 'Picture story', () => PictureStoryScreen(child: child)),
      ('character', 0.634, 'صمّم شخصية', 'Design a character', () => CharacterCreatorScreen(child: child)),
      ('scene', 0.768, 'ابنِ مشهداً', 'Build a scene', () => SceneBuilderScreen(child: child)),
      ('drawing', 0.903, 'رسم وتلوين', 'Draw and colour', () => DrawingScreen(child: child)),
    ];
    return Scaffold(
      body: SafeArea(
        child: PictureStage(
          key: const ValueKey('studio_picture'),
          asset: kStudioPicture,
          aspect: kStudioAspect,
          showLabels: !ar,
          labels: [
            PictureNameLabel(const Offset(0.50, 0.195), 0.21, 0.085, tr2('استوديو الإبداع', 'Creative studio')),
            for (final i in islands) PictureNameLabel(Offset(i.$2, 0.581), 0.125, 0.058, i.$4),
          ],
          spots: [
            PictureSpot('back', const Offset(0.057, 0.085), 0.085, 0.15, tr2('رجوع', 'Back'), () => Navigator.maybePop(context), radius: 44, key: const ValueKey('studio_back')),
            for (final i in islands) PictureSpot(i.$1, Offset(i.$2, 0.55), 0.125, 0.32, tr2(i.$3, i.$4), () => open(i.$5), radius: 34, key: ValueKey('studio_${i.$1}')),
          ],
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
  GalleryTab _tab = GalleryTab.all;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final list = await FamilyGallery.forChild(widget.child.id);
    if (mounted) setState(() => _items = list.reversed.toList());
  }

  Future<void> _rename(Creation c) async {
    final text = await showDialog<String>(context: context, builder: (_) => _RenameDialog(initial: c.name ?? ''));
    if (text == null || !mounted) return;
    final ok = await FamilyGallery.rename(c.id, widget.child.id, text);
    if (!mounted) return;
    if (!ok) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(tr2('تعذّر حفظ الاسم', 'Could not save the name'))));
    }
    _load();
  }

  Widget _editor(Creation c) => switch (c.kind) {
        CreationKind.drawing => DrawingScreen(child: widget.child, initial: c),
        CreationKind.scene => SceneBuilderScreen(child: widget.child, initial: c),
        CreationKind.character => CharacterCreatorScreen(child: widget.child, initial: c),
        CreationKind.story => PictureStoryScreen(child: widget.child, initial: c),
        // A saved word opens the word builder on that same word, so the child can build it again.
        CreationKind.word => WordBuilderScreen(child: widget.child, english: c.data['lang'] == 'en', startVocabId: c.data['v'] as String?),
      };

  @override
  Widget build(BuildContext context) {
    final all = _items;
    final items = all == null ? null : inTab(all, _tab);
    return DefaultTabController(
      length: GalleryTab.values.length,
      child: Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: RC.ink,
        title: Text(loc('معرض العائلة'),
            style: TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: RC.ink)),
        bottom: TabBar(
          key: const ValueKey('gallery_tabs'),
          isScrollable: true,
          tabAlignment: TabAlignment.center,
          labelColor: RC.ink,
          unselectedLabelColor: RC.ink.withAlpha(150),
          labelStyle: const TextStyle(fontSize: 16, fontWeight: FontWeight.w800),
          onTap: (i) => setState(() => _tab = GalleryTab.values[i]),
          tabs: [for (final t in GalleryTab.values) Tab(key: ValueKey('tab_${t.name}'), text: t.label)],
        ),
      ),
      body: PastelBackground(
        child: SafeArea(
          child: items == null
              ? const Center(child: CircularProgressIndicator())
              : items.isEmpty
                  ? Center(
                      child: Padding(
                        padding: const EdgeInsets.all(24),
                        child: Text(
                            all!.isEmpty
                                ? loc('لا توجد أعمال بعد. اصنع رسمة أو مشهداً أو شخصية وستظهر هنا.')
                                : switch (_tab) {
                                    GalleryTab.drawings => tr2('لا توجد رسومات بعد.', 'No drawings yet.'),
                                    GalleryTab.words => tr2('لا توجد كلمات بعد. ركّب كلمة وستظهر هنا.', 'No words yet. Build a word and it will show up here.'),
                                    GalleryTab.stories => tr2('لا توجد قصص بعد.', 'No stories yet.'),
                                    GalleryTab.all => '',
                                  },
                            key: const ValueKey('gallery_empty'),
                            textAlign: TextAlign.center,
                            style: const TextStyle(fontSize: 18, color: RC.ink)),
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
                        return Appear(
                          index: i,
                          child: RCard(
                          padding: EdgeInsets.zero,
                          semanticLabel: tr2('${c.name ?? c.kind.label} بتاريخ ${c.day}', '${c.name ?? c.kind.label} on ${c.day}'),
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
                                child: Text('${c.kind.emoji} ${c.name ?? c.day}',
                                    style: const TextStyle(fontSize: 11, color: Colors.black54)),
                              ),
                              PositionedDirectional(
                                top: 0,
                                end: 0,
                                child: IconButton(
                                  tooltip: tr2('غيّر الاسم', 'Rename'),
                                  iconSize: 20,
                                  onPressed: () => _rename(c),
                                  icon: const Icon(Icons.edit_rounded),
                                ),
                              ),
                            ],
                          ),
                        ),
                        );
                      },
                    ),
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

class _RenameDialog extends StatefulWidget {
  final String initial;
  const _RenameDialog({required this.initial});

  @override
  State<_RenameDialog> createState() => _RenameDialogState();
}

class _RenameDialogState extends State<_RenameDialog> {
  late final TextEditingController _c = TextEditingController(text: widget.initial);

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => AlertDialog(
        title: Text(tr2('اسم العمل', 'Name this work')),
        content: TextField(
          controller: _c,
          autofocus: true,
          maxLength: FamilyGallery.maxNameLength,
          decoration: InputDecoration(hintText: tr2('اكتب اسماً قصيراً', 'A short name')),
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(context), child: Text(tr2('إلغاء', 'Cancel'))),
          FilledButton(onPressed: () => Navigator.pop(context, _c.text), child: Text(tr2('حفظ', 'Save'))),
        ],
      );
}
