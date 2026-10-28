import 'package:flutter/material.dart';

import '../lands.dart';
import '../models.dart';
import '../repository.dart';
import 'profile_forms.dart';
import '../../l10n/strings.dart';

/// Lands that can take custom multiple-choice questions.
const kCustomLands = ['letters', 'numbers', 'colors', 'english'];

/// A development-grade content manager. Everything it changes is kept on this
/// device, and there is no real login: it sits behind the parent PIN only. It
/// is NOT a secure production admin (see docs/PRODUCTION.md).
class AdminScreen extends StatelessWidget {
  const AdminScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 4,
      child: Scaffold(
        appBar: AppBar(
          title: Text(loc('إدارة المحتوى (تجريبي)')),
          bottom: TabBar(
            isScrollable: true,
            tabs: [Tab(text: loc('الأقسام')), Tab(text: loc('الأسئلة')), Tab(text: loc('المكافآت')), Tab(text: loc('الخطط'))],
          ),
        ),
        body: Column(
          children: [
            Container(
              width: double.infinity,
              color: Colors.amber.shade100,
              padding: const EdgeInsets.all(10),
              child: Text(
                loc('واجهة تجريبية للتطوير: تعمل على هذا الجهاز فقط ولا تحمي نفسها بحساب مستقل، '
                'وليست مناسبة للإنتاج.'),
                style: TextStyle(fontSize: 13),
              ),
            ),
            const Expanded(
              child: TabBarView(children: [_LandsTab(), _QuestionsTab(), _RewardsTab(), _PlansTab()]),
            ),
          ],
        ),
      ),
    );
  }
}

class _LandsTab extends StatelessWidget {
  const _LandsTab();

  @override
  Widget build(BuildContext context) {
    return ListenableBuilder(
      listenable: JourneyStore.instance,
      builder: (context, _) {
        final store = JourneyStore.instance;
        final s = store.settings;
        return ListView(
          padding: const EdgeInsets.all(12),
          children: [
            Padding(
              padding: EdgeInsets.all(4),
              child: Text(
                loc('منشور: يراه الأطفال. مسودة: مخفي عنهم. الأعمار: الأراضي التي لا تناسب عمر الطفل لا تُقترح في مغامرة اليوم.'),
                style: TextStyle(fontSize: 13),
              ),
            ),
            for (final land in kLands)
              Builder(builder: (context) {
                final draft = s.draftLands.contains(land.id);
                final ages = s.landAges[land.id] ?? const [1, 12];
                return Card(
                  child: Padding(
                    padding: const EdgeInsets.all(12),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          children: [
                            Icon(land.icon, color: land.color),
                            const SizedBox(width: 8),
                            Expanded(
                              child: Text(land.title,
                                  style: const TextStyle(fontSize: 17, fontWeight: FontWeight.bold)),
                            ),
                            Text(draft ? loc('مسودة') : loc('منشور')),
                            Switch(
                              value: !draft,
                              onChanged: (publish) => store.saveSettings(s.copyWith(
                                draftLands: publish
                                    ? ({...s.draftLands}..remove(land.id))
                                    : {...s.draftLands, land.id},
                              )),
                            ),
                          ],
                        ),
                        Text('الأعمار المناسبة: ${ages[0]} إلى ${ages[1]}'),
                        RangeSlider(
                          values: RangeValues(ages[0].toDouble(), ages[1].toDouble()),
                          min: 1,
                          max: 12,
                          divisions: 11,
                          labels: RangeLabels('${ages[0]}', '${ages[1]}'),
                          onChanged: (_) {},
                          onChangeEnd: (v) {
                            final next = {...s.landAges};
                            if (v.start.round() == 1 && v.end.round() == 12) {
                              next.remove(land.id);
                            } else {
                              next[land.id] = [v.start.round(), v.end.round()];
                            }
                            store.saveSettings(s.copyWith(landAges: next));
                          },
                        ),
                        Text(
                          '$kLevelsPerLand مستويات · أسئلة مخصصة: '
                          '${store.custom.where((q) => q.landId == land.id).length}',
                          style: const TextStyle(fontSize: 13),
                        ),
                      ],
                    ),
                  ),
                );
              }),
          ],
        );
      },
    );
  }
}

class _QuestionsTab extends StatefulWidget {
  const _QuestionsTab();

  @override
  State<_QuestionsTab> createState() => _QuestionsTabState();
}

class _QuestionsTabState extends State<_QuestionsTab> {
  Future<void> _edit(CustomQuestion? existing) async {
    final result = await Navigator.push<CustomQuestion>(
      context,
      MaterialPageRoute(builder: (_) => QuestionEditor(existing: existing)),
    );
    if (result == null) return;
    final store = JourneyStore.instance;
    final list = [...store.custom];
    final i = list.indexWhere((q) => q.id == result.id);
    i >= 0 ? list[i] = result : list.add(result);
    await store.saveCustom(list);
  }

  Future<void> _delete(CustomQuestion q) async {
    final ok = await showDialog<bool>(
      context: context,
      builder: (_) => AlertDialog(
        title: Text(loc('حذف السؤال؟')),
        content: Text(q.prompt),
        actions: [
          TextButton(onPressed: () => Navigator.pop(context, false), child: Text(loc('إلغاء'))),
          FilledButton(onPressed: () => Navigator.pop(context, true), child: Text(loc('حذف'))),
        ],
      ),
    );
    if (ok != true) return;
    final store = JourneyStore.instance;
    await store.saveCustom([for (final x in store.custom) if (x.id != q.id) x]);
  }

  @override
  Widget build(BuildContext context) {
    return ListenableBuilder(
      listenable: JourneyStore.instance,
      builder: (context, _) {
        final store = JourneyStore.instance;
        return Scaffold(
          backgroundColor: Colors.transparent,
          floatingActionButton: FloatingActionButton.extended(
            onPressed: () => _edit(null),
            icon: const Icon(Icons.add),
            label: Text(loc('سؤال جديد'), style: TextStyle(fontSize: 17)),
          ),
          body: store.custom.isEmpty
              ? Center(
                  child: Padding(
                    padding: EdgeInsets.all(24),
                    child: Text(
                      loc('لا توجد أسئلة مخصصة بعد.\nأضف سؤالاً ليظهر ضمن مستوى وعمر تحددهما.'),
                      textAlign: TextAlign.center,
                      style: TextStyle(fontSize: 17),
                    ),
                  ),
                )
              : ListView(
                  padding: const EdgeInsets.fromLTRB(12, 12, 12, 96),
                  children: [
                    for (final q in store.custom)
                      Card(
                        child: ListTile(
                          title: Text(q.prompt, style: const TextStyle(fontWeight: FontWeight.bold)),
                          subtitle: Text(
                            '${landById(q.landId).title} · المستوى ${q.difficulty} · '
                            'الأعمار ${q.minAge}–${q.maxAge}\n'
                            '${[for (var i = 0; i < q.options.length; i++) i == q.correct ? '✓ ${q.options[i]}' : q.options[i]].join(' | ')}',
                          ),
                          isThreeLine: true,
                          leading: Switch(
                            value: q.published,
                            onChanged: (v) => store.saveCustom(
                                [for (final x in store.custom) x.id == q.id ? x.copyWith(published: v) : x]),
                          ),
                          trailing: Wrap(
                            children: [
                              IconButton(
                                tooltip: loc('تعديل'),
                                icon: const Icon(Icons.edit_rounded),
                                onPressed: () => _edit(q),
                              ),
                              IconButton(
                                tooltip: loc('حذف'),
                                icon: const Icon(Icons.delete_outline_rounded),
                                onPressed: () => _delete(q),
                              ),
                            ],
                          ),
                        ),
                      ),
                  ],
                ),
        );
      },
    );
  }
}

/// Add or edit one multiple-choice question.
class QuestionEditor extends StatefulWidget {
  final CustomQuestion? existing;
  const QuestionEditor({super.key, this.existing});

  @override
  State<QuestionEditor> createState() => _QuestionEditorState();
}

class _QuestionEditorState extends State<QuestionEditor> {
  late String _land = widget.existing?.landId ?? kCustomLands.first;
  late final _prompt = TextEditingController(text: widget.existing?.prompt ?? '');
  late final List<TextEditingController> _options = [
    for (var i = 0; i < 4; i++)
      TextEditingController(
        text: (widget.existing != null && i < widget.existing!.options.length) ? widget.existing!.options[i] : '',
      ),
  ];
  late int _correct = widget.existing?.correct ?? 0;
  late int _level = widget.existing?.difficulty ?? 1;
  late RangeValues _ages = RangeValues(
    (widget.existing?.minAge ?? 3).toDouble(),
    (widget.existing?.maxAge ?? 9).toDouble(),
  );
  late bool _published = widget.existing?.published ?? true;
  String? _error;

  @override
  void dispose() {
    _prompt.dispose();
    for (final c in _options) {
      c.dispose();
    }
    super.dispose();
  }

  void _save() {
    final prompt = _prompt.text.trim();
    final filled = [
      for (var i = 0; i < _options.length; i++)
        if (_options[i].text.trim().isNotEmpty) (i, _options[i].text.trim()),
    ];
    if (prompt.isEmpty) return setState(() => _error = loc('اكتب نص السؤال'));
    if (filled.length < 2) return setState(() => _error = loc('اكتب خيارين على الأقل'));
    if (filled.map((e) => e.$2).toSet().length != filled.length) {
      return setState(() => _error = loc('الخيارات يجب أن تكون مختلفة'));
    }
    final correctPos = filled.indexWhere((e) => e.$1 == _correct);
    if (correctPos < 0) return setState(() => _error = loc('اختر الإجابة الصحيحة من الخيارات المكتوبة'));
    Navigator.pop(
      context,
      CustomQuestion(
        id: widget.existing?.id ?? JourneyStore.instance.newId(),
        landId: _land,
        prompt: prompt,
        options: [for (final e in filled) e.$2],
        correct: correctPos,
        minAge: _ages.start.round(),
        maxAge: _ages.end.round(),
        difficulty: _level,
        published: _published,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(widget.existing == null ? loc('سؤال جديد') : loc('تعديل السؤال'))),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          DropdownButton<String>(
            isExpanded: true,
            value: _land,
            items: [
              for (final id in kCustomLands) DropdownMenuItem(value: id, child: Text(landById(id).title)),
            ],
            onChanged: (v) => setState(() => _land = v ?? _land),
          ),
          TextField(
            controller: _prompt,
            maxLines: 2,
            decoration: InputDecoration(labelText: loc('نص السؤال')),
          ),
          const SizedBox(height: 12),
          Text(loc('الخيارات (اختر الصحيح)'), style: TextStyle(fontWeight: FontWeight.bold)),
          RadioGroup<int>(
            groupValue: _correct,
            onChanged: (v) => setState(() => _correct = v ?? 0),
            child: Column(
              children: [
                for (var i = 0; i < _options.length; i++)
                  Row(
                    children: [
                      Radio<int>(value: i),
                      Expanded(
                        child: TextField(
                          controller: _options[i],
                          decoration: InputDecoration(labelText: 'الخيار ${i + 1}'),
                        ),
                      ),
                    ],
                  ),
              ],
            ),
          ),
          const SizedBox(height: 12),
          Text('المستوى الذي يظهر فيه: $_level'),
          Slider(
            value: _level.toDouble(),
            min: 1,
            max: kLevelsPerLand.toDouble(),
            divisions: kLevelsPerLand - 1,
            label: '$_level',
            onChanged: (v) => setState(() => _level = v.round()),
          ),
          Text('الأعمار: ${_ages.start.round()} إلى ${_ages.end.round()}'),
          RangeSlider(
            values: _ages,
            min: 1,
            max: 12,
            divisions: 11,
            labels: RangeLabels('${_ages.start.round()}', '${_ages.end.round()}'),
            onChanged: (v) => setState(() => _ages = v),
          ),
          SwitchListTile(
            title: Text(loc('منشور')),
            subtitle: Text(loc('المسودة لا تظهر للأطفال')),
            value: _published,
            onChanged: (v) => setState(() => _published = v),
          ),
          if (_error != null)
            Padding(
              padding: const EdgeInsets.only(top: 8),
              child: Text(_error!, style: const TextStyle(color: Colors.red, fontSize: 16)),
            ),
          const SizedBox(height: 12),
          FilledButton(onPressed: _save, child: Text(loc('حفظ السؤال'))),
        ],
      ),
    );
  }
}

class _RewardsTab extends StatelessWidget {
  const _RewardsTab();

  @override
  Widget build(BuildContext context) {
    return ListenableBuilder(
      listenable: JourneyStore.instance,
      builder: (context, _) {
        final store = JourneyStore.instance;
        final thr = store.settings.badgeThresholds;
        return ListView(
          padding: const EdgeInsets.all(12),
          children: [
            Padding(
              padding: EdgeInsets.all(4),
              child: Text(
                loc('الشارات تُمنح عند إنهاء أنشطة، لا عن الوقت. غيّر العدد المطلوب أو أوقف الشارة. '
                'هدف الأسبوع في شاشة الطفل = عدد «بطل الأسبوع».'),
                style: TextStyle(fontSize: 13),
              ),
            ),
            for (final b in kBadges)
              Builder(builder: (context) {
                final value = thr[b.id] ?? b.threshold;
                final on = value > 0;
                void set(int v) {
                  final next = {...thr};
                  v == b.threshold ? next.remove(b.id) : next[b.id] = v;
                  store.saveSettings(store.settings.copyWith(badgeThresholds: next));
                }

                return Card(
                  child: ListTile(
                    leading: Text(b.emoji, style: const TextStyle(fontSize: 30)),
                    title: Text(b.title, style: const TextStyle(fontWeight: FontWeight.bold)),
                    subtitle: Text(on ? '${b.description}\nالعدد المطلوب: $value' : loc('الشارة متوقفة')),
                    isThreeLine: on,
                    trailing: Wrap(
                      crossAxisAlignment: WrapCrossAlignment.center,
                      children: [
                        IconButton(
                          tooltip: loc('أقل'),
                          onPressed: on && value > 1 ? () => set(value - 1) : null,
                          icon: const Icon(Icons.remove_circle_outline),
                        ),
                        IconButton(
                          tooltip: loc('أكثر'),
                          onPressed: on && value < 50 ? () => set(value + 1) : null,
                          icon: const Icon(Icons.add_circle_outline),
                        ),
                        Switch(
                          value: on,
                          onChanged: (v) => set(v ? b.threshold : 0),
                        ),
                      ],
                    ),
                  ),
                );
              }),
            const Divider(),
            Padding(
              padding: EdgeInsets.all(8),
              child: Text(loc('إكسسوارات الشخصية (تُفتح بعدد النجوم)'), style: TextStyle(fontWeight: FontWeight.bold)),
            ),
            for (final a in kAccessories)
              ListTile(
                leading: Text(a.emoji, style: const TextStyle(fontSize: 26)),
                title: Text(a.name),
                trailing: Text('${a.starsNeeded} ⭐'),
              ),
          ],
        );
      },
    );
  }
}

class _PlansTab extends StatelessWidget {
  const _PlansTab();

  @override
  Widget build(BuildContext context) {
    return ListenableBuilder(
      listenable: JourneyStore.instance,
      builder: (context, _) {
        final store = JourneyStore.instance;
        if (store.profiles.isEmpty) {
          return Center(child: Text(loc('أضف طفلاً أولاً لتظهر خطته هنا.'), style: TextStyle(fontSize: 17)));
        }
        return ListView(
          padding: const EdgeInsets.all(12),
          children: [
            for (final c in store.profiles)
              Card(
                child: ListTile(
                  title: Text('${c.nickname} · عمر ${c.age}', style: const TextStyle(fontWeight: FontWeight.bold)),
                  subtitle: Text(
                    'الترتيب: ${(c.plan.isEmpty ? [for (final l in kLands) l.id] : c.plan).map((id) => landById(id).title).join(' ← ')}\n'
                    '${c.dailyCount} أنشطة يومياً · ${["أسهل", "عادي", "أصعب"][c.bias + 1]} · نحو ${minutesFor(c.age)} دقائق للنشاط',
                  ),
                  isThreeLine: true,
                  trailing: const Icon(Icons.edit_rounded),
                  onTap: () => Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => ChildEditScreen(child: c)),
                  ),
                ),
              ),
          ],
        );
      },
    );
  }
}
