import 'package:flutter/material.dart';

import '../journey/models.dart';
import '../journey/ui/kit.dart';
import '../media/audio.dart';
import 'learning_records.dart';
import 'lesson_engine.dart';
import 'lesson_runner.dart';
import 'vocab.dart';
import '../l10n/strings.dart';

/// «مكتبة الكلمات»: a searchable, age-filtered library of the approved words.
class VocabLibraryScreen extends StatefulWidget {
  final ChildProfile child;
  const VocabLibraryScreen({super.key, required this.child});

  @override
  State<VocabLibraryScreen> createState() => _VocabLibraryScreenState();
}

class _VocabLibraryScreenState extends State<VocabLibraryScreen> {
  String _query = '';
  String? _category;
  bool _allAges = false;

  @override
  Widget build(BuildContext context) {
    final items = searchVocab(query: _query, category: _category, age: _allAges ? null : widget.child.age);
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: RC.ink,
        title: Text(loc('مكتبة الكلمات'),
            style: TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: RC.ink)),
      ),
      body: PastelBackground(
        child: SafeArea(
          child: ListView(
            children: [
              Padding(
                padding: const EdgeInsets.fromLTRB(16, 4, 16, 8),
                child: TextField(
                  decoration: InputDecoration(
                    hintText: loc('ابحث بالعربية أو الإنجليزية'),
                    prefixIcon: const Icon(Icons.search_rounded),
                    filled: true,
                    fillColor: Colors.white,
                    border: OutlineInputBorder(borderRadius: BorderRadius.circular(20)),
                  ),
                  onChanged: (v) => setState(() => _query = v),
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 12),
                child: Wrap(
                  spacing: 8,
                  runSpacing: 4,
                  children: [
                    ChoiceChip(
                      label: Text(loc('الكل')),
                      selected: _category == null,
                      onSelected: (_) => setState(() => _category = null),
                    ),
                    for (final c in kVocabCategories)
                      ChoiceChip(
                        label: Text('${c.emoji} ${c.title}'),
                        selected: _category == c.id,
                        onSelected: (_) => setState(() => _category = c.id),
                      ),
                  ],
                ),
              ),
              Material(
                type: MaterialType.transparency,
                child: CheckboxListTile(
                  dense: true,
                  value: _allAges,
                  onChanged: (v) => setState(() => _allAges = v ?? false),
                  title: Text(loc('إظهار كلمات كل الأعمار')),
                ),
              ),
              if (_category != null)
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 16),
                  child: Wrap(
                    spacing: 8,
                    children: [
                      for (final k in [LessonKind.pictureToWord, LessonKind.audioToPicture, LessonKind.wordToPicture])
                        ActionChip(
                          avatar: Text(k.emoji),
                          label: Text(k.title),
                          onPressed: () => Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (_) => LessonRunnerScreen(child: widget.child, kind: k, category: _category),
                            ),
                          ),
                        ),
                    ],
                  ),
                ),
              items.isEmpty
                    ? Center(
                        child: Padding(
                          padding: EdgeInsets.all(24),
                          child: Text(loc('لا توجد كلمات مطابقة. جرّب كلمة أخرى أو اختر «كل الأعمار».'),
                              textAlign: TextAlign.center, style: TextStyle(fontSize: 18, color: RC.ink)),
                        ),
                      )
                    : GridView.builder(
                        shrinkWrap: true,
                        physics: const NeverScrollableScrollPhysics(),
                        padding: const EdgeInsets.all(16),
                        gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(
                          maxCrossAxisExtent: 150,
                          mainAxisSpacing: 12,
                          crossAxisSpacing: 12,
                          mainAxisExtent: 172 * MediaQuery.textScalerOf(context).scale(1).clamp(1.0, 2.0),
                        ),
                        itemCount: items.length,
                        itemBuilder: (context, i) {
                          final v = items[i];
                          return RCard(
                            semanticLabel: v.en == null ? v.ar : '${v.ar}، ${v.en}',
                            onTap: () => showVocabDetail(context, widget.child, v),
                            padding: const EdgeInsets.all(8),
                            child: FittedBox(
                              fit: BoxFit.scaleDown,
                              child: Column(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: [
                                  Text(v.emoji, style: const TextStyle(fontSize: 46)),
                                  const SizedBox(height: 4),
                                  Text(v.ar,
                                      style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w800, color: RC.ink)),
                                  if (v.en != null)
                                    Text(v.en!, style: const TextStyle(fontSize: 13, color: RC.ink)),
                                ],
                              ),
                            ),
                          );
                        },
                      ),
            ],
          ),
        ),
      ),
    );
  }
}

/// A word's card: picture, Arabic and English names, listen buttons and
/// exercises about this very word. Opening it counts as exposure only.
Future<void> showVocabDetail(BuildContext context, ChildProfile child, Vocab v) {
  LearningRecords.add(child.id, RecordType.word, v.id, Evidence.exposure);
  return showModalBottomSheet<void>(
    context: context,
    builder: (context) => SafeArea(
      child: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(v.emoji, style: const TextStyle(fontSize: 96)),
            Text(v.ar, style: const TextStyle(fontSize: 36, fontWeight: FontWeight.w900)),
            if (v.en != null)
              Directionality(
                textDirection: TextDirection.ltr,
                child: Text(v.en!, style: const TextStyle(fontSize: 22)),
              ),
            const SizedBox(height: 12),
            Wrap(
              spacing: 10,
              alignment: WrapAlignment.center,
              children: [
                FilledButton.icon(
                  onPressed: () => AppAudio.say(v.ar),
                  icon: const Icon(Icons.volume_up_rounded),
                  label: Text(loc('استمع بالعربية')),
                ),
                if (v.en != null)
                  OutlinedButton.icon(
                    onPressed: () => AppAudio.say(v.en!, lang: 'en'),
                    icon: const Icon(Icons.volume_up_rounded),
                    label: const Text('Listen'),
                  ),
              ],
            ),
            const SizedBox(height: 8),
            TextButton.icon(
              onPressed: () {
                Navigator.pop(context);
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (_) => LessonRunnerScreen(
                      child: child,
                      kind: LessonKind.pictureToWord,
                      category: v.category,
                    ),
                  ),
                );
              },
              icon: const Icon(Icons.quiz_rounded),
              label: Text(loc('تدرّب على هذه المجموعة')),
            ),
          ],
        ),
      ),
    ),
  );
}
