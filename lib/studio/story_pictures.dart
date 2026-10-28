import 'package:flutter/material.dart';

import '../journey/models.dart';
import '../journey/ui/kit.dart';
import '../library/vocab.dart';
import '../media/audio.dart';
import 'autosave.dart';
import 'creations.dart';
import '../l10n/app_locale.dart';
import '../l10n/strings.dart';

const _prompts = [
  ('البداية', 'من هو بطل القصة؟ وأين هو؟'),
  ('ثم ماذا حدث؟', 'ماذا فعل؟ هل قابل أحداً؟'),
  ('النهاية', 'كيف انتهت القصة؟ كيف شعر البطل؟'),
];

/// Tell a story from three pictures. The child chooses three pictures, puts
/// them in order and tells the story out loud to a parent: nothing is typed or
/// recorded. The three pictures are saved to the family gallery.
class PictureStoryScreen extends StatefulWidget {
  final ChildProfile child;
  final Creation? initial;
  const PictureStoryScreen({super.key, required this.child, this.initial});

  @override
  State<PictureStoryScreen> createState() => _PictureStoryScreenState();
}

class _PictureStoryScreenState extends State<PictureStoryScreen> {
  late final CreationAutosaver _save = CreationAutosaver(widget.child, CreationKind.story, initial: widget.initial)
    ..onChanged = () {
      if (mounted) setState(() {});
    };
  late final List<String> _pics = [
    for (final e in (widget.initial?.data['pics'] as List<dynamic>? ?? [])) e as String,
  ];
  String _category = 'animals';
  int _step = 0;

  void _changed() => _save.changed(() => {'pics': List<String>.from(_pics)});

  @override
  void dispose() {
    _save.dispose();
    AppAudio.stopSaying();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final pool = searchVocab(category: _category);
    final ready = _pics.length == 3;
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: RC.ink,
        title: Text(loc('احكِ قصة بالصور'),
            style: TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: RC.ink)),
      ),
      body: PastelBackground(
        child: SafeArea(
          child: ListView(
            padding: const EdgeInsets.all(16),
            children: [
              Text(ready ? loc('احكِ قصتك لماما أو بابا بالترتيب') : tr2('اختر 3 صور لقصتك (${_pics.length} من 3)', 'Pick 3 pictures for your story (${_pics.length} of 3)'),
                  textAlign: TextAlign.center,
                  style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w900, color: RC.ink)),
              const SizedBox(height: 10),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  for (var i = 0; i < 3; i++)
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 6),
                      child: RCard(
                        color: i == _step && ready ? RC.yellow : RC.card,
                        semanticLabel: i < _pics.length ? tr2('الصورة ${i + 1}', 'Picture ${i + 1}') : tr2('مكان فارغ ${i + 1}', 'Empty place ${i + 1}'),
                        onTap: i < _pics.length
                            ? () {
                                setState(() {
                                  if (ready) {
                                    _step = i;
                                  } else {
                                    _pics.removeAt(i);
                                  }
                                });
                                if (!ready) _changed();
                              }
                            : null,
                        child: SizedBox(
                          width: 76,
                          height: 76,
                          child: Center(
                            child: Text(i < _pics.length ? _pics[i] : '${i + 1}',
                                style: TextStyle(fontSize: i < _pics.length ? 46 : 28, color: RC.ink)),
                          ),
                        ),
                      ),
                    ),
                ],
              ),
              if (_pics.isNotEmpty && !ready)
                Padding(
                  padding: EdgeInsets.only(top: 6),
                  child: Text(loc('اضغط على صورة لتزيلها'), textAlign: TextAlign.center, style: TextStyle(color: RC.ink)),
                ),
              if (ready) ...[
                const SizedBox(height: 12),
                RCard(
                  color: RC.yellow.withAlpha(120),
                  child: Column(
                    children: [
                      Text(loc(_prompts[_step].$1),
                          style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: RC.ink)),
                      Text(loc(_prompts[_step].$2), style: const TextStyle(fontSize: 17, color: RC.ink)),
                      TextButton.icon(
                        onPressed: () => AppAudio.say('${loc(_prompts[_step].$1)}. ${loc(_prompts[_step].$2)}', lang: AppLocale.instance.code),
                        icon: const Icon(Icons.volume_up_rounded),
                        label: Text(loc('استمع')),
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          TextButton(
                            onPressed: _step == 0 ? null : () => setState(() => _step--),
                            child: Text(loc('السابق')),
                          ),
                          TextButton(
                            onPressed: _step == 2 ? null : () => setState(() => _step++),
                            child: Text(loc('التالي')),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 8),
                Text(_save.saved ? loc('حُفظت قصتك في معرض العائلة ✓') : '',
                    textAlign: TextAlign.center, style: const TextStyle(color: RC.ink)),
                TextButton(
                  onPressed: () => setState(() {
                    _pics.clear();
                    _step = 0;
                  }),
                  child: Text(loc('قصة جديدة')),
                ),
              ] else ...[
                const SizedBox(height: 10),
                Wrap(
                  spacing: 6,
                  alignment: WrapAlignment.center,
                  children: [
                    for (final c in kVocabCategories.where((c) => c.id != kEnglishCategory))
                      ChoiceChip(
                        label: Text(c.emoji),
                        tooltip: c.title,
                        selected: _category == c.id,
                        onSelected: (_) => setState(() => _category = c.id),
                      ),
                  ],
                ),
                Wrap(
                  alignment: WrapAlignment.center,
                  children: [
                    for (final v in pool)
                      IconButton(
                        tooltip: v.ar,
                        iconSize: 52,
                        onPressed: () {
                          setState(() => _pics.add(v.emoji));
                          _changed();
                        },
                        icon: Text(v.emoji, style: const TextStyle(fontSize: 42)),
                      ),
                  ],
                ),
              ],
            ],
          ),
        ),
      ),
    );
  }
}
