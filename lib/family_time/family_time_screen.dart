import 'package:flutter/material.dart';

import '../design/focusable_tap.dart';
import '../journey/models.dart';
import '../journey/ui/kit.dart';
import '../l10n/strings.dart';
import '../parent_screens.dart' show askParentQuestion;
import 'family_time.dart';

String weekdayName(int d) => [
      tr2('الاثنين', 'Monday'),
      tr2('الثلاثاء', 'Tuesday'),
      tr2('الأربعاء', 'Wednesday'),
      tr2('الخميس', 'Thursday'),
      tr2('الجمعة', 'Friday'),
      tr2('السبت', 'Saturday'),
      tr2('الأحد', 'Sunday'),
    ][d - 1];

/// «وقت العائلة»: one idea to do together, an optional planned day, and a record the grown-up confirms.
/// No chat or call lives here; family contact stays in the family button, which the parent controls.
class FamilyTimeScreen extends StatefulWidget {
  final ChildProfile child;
  final DateTime? today;
  const FamilyTimeScreen({super.key, required this.child, this.today});

  @override
  State<FamilyTimeScreen> createState() => _FamilyTimeScreenState();
}

class _FamilyTimeScreenState extends State<FamilyTimeScreen> {
  int? _wd;
  int _min = 30;
  int _week = 0;
  bool _doneToday = false;

  DateTime get _now => widget.today ?? DateTime.now();

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final id = widget.child.id;
    final wd = await FamilyTimeStore.weekday(id);
    final min = await FamilyTimeStore.minutes(id);
    final week = await FamilyTimeStore.thisWeek(id, now: _now);
    final done = (await FamilyTimeStore.sessions(id)).containsKey(_dayKey());
    if (mounted) setState(() { _wd = wd; _min = min; _week = week; _doneToday = done; });
  }

  String _dayKey() => '${_now.year}-${_now.month.toString().padLeft(2, '0')}-${_now.day.toString().padLeft(2, '0')}';

  Future<void> _plan({int? weekday, bool clear = false, int? minutes}) async {
    if (!await askParentQuestion(context)) return;
    await FamilyTimeStore.plan(widget.child.id, weekday: clear ? null : (weekday ?? _wd), minutes: minutes);
    _load();
  }

  Future<void> _confirm(FamilyIdea idea) async {
    if (!await askParentQuestion(context)) return;
    await FamilyTimeStore.confirm(widget.child.id, idea.id, now: _now);
    _load();
  }

  @override
  Widget build(BuildContext context) {
    final idea = ideaOfDay(widget.child.age, _now);
    return Scaffold(
      appBar: AppBar(title: Text(tr2('وقت العائلة', 'Family time'))),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          RCard(
            key: const ValueKey('ft_idea'),
            color: const Color(0xFFFFF1D6),
            child: idea == null
                ? Text(tr2('لا توجد فكرة لهذا العمر الآن.', 'No idea for this age yet.'))
                : Column(children: [
                    Text(tr2('فكرة لنا معاً', 'An idea for us together'), style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w800, color: RC.ink)),
                    const SizedBox(height: 6),
                    Text(idea.title, textAlign: TextAlign.center, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: RC.ink)),
                    if (idea.minutes != null) Text(tr2('${idea.minutes} دقيقة تقريباً', 'About ${idea.minutes} minutes'), style: const TextStyle(fontSize: 14, color: RC.ink)),
                    const SizedBox(height: 10),
                    FilledButton.icon(
                      key: const ValueKey('ft_confirm'),
                      style: FilledButton.styleFrom(minimumSize: const Size(160, 52)),
                      onPressed: _doneToday ? null : () => _confirm(idea),
                      icon: Icon(_doneToday ? Icons.check_circle_rounded : Icons.family_restroom_rounded),
                      label: Text(_doneToday ? tr2('سُجّل اليوم', 'Recorded today') : tr2('فعلناها معاً (للكبار)', 'We did it together (grown-ups)')),
                    ),
                  ]),
          ),
          const SizedBox(height: 12),
          RCard(
            key: const ValueKey('ft_week'),
            child: Text(
              tr2('وقت العائلة هذا الأسبوع: $_week', 'Family times this week: $_week'),
              textAlign: TextAlign.center,
              style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: RC.ink),
            ),
          ),
          const SizedBox(height: 12),
          Text(tr2('خطّتنا (للكبار)', 'Our plan (grown-ups)'), style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: RC.ink)),
          const SizedBox(height: 6),
          Wrap(spacing: 8, runSpacing: 8, children: [
            for (var d = 1; d <= 7; d++)
              ChoiceChip(
                key: ValueKey('ft_day_$d'),
                label: Text(weekdayName(d)),
                selected: _wd == d,
                materialTapTargetSize: MaterialTapTargetSize.padded,
                onSelected: (_) => _plan(weekday: d),
              ),
            if (_wd != null)
              ActionChip(key: const ValueKey('ft_clear'), label: Text(tr2('بدون يوم محدد', 'No set day')), onPressed: () => _plan(clear: true)),
          ]),
          const SizedBox(height: 8),
          Wrap(spacing: 8, children: [
            for (final m in FamilyTimeStore.lengths)
              ChoiceChip(
                key: ValueKey('ft_min_$m'),
                label: Text(tr2('$m دقيقة', '$m min')),
                selected: _min == m,
                materialTapTargetSize: MaterialTapTargetSize.padded,
                onSelected: (_) => _plan(minutes: m),
              ),
          ]),
          const SizedBox(height: 12),
          Text(
            tr2('المكالمات والرسائل مع الأقارب المعتمدين من الأهل تبقى في زر العائلة.', 'Calls and messages with relatives your family approved stay in the family button.'),
            key: const ValueKey('ft_note'),
            textAlign: TextAlign.center,
            style: const TextStyle(fontSize: 14, color: RC.ink),
          ),
        ],
      ),
    );
  }
}

class FamilyTimeCard extends StatelessWidget {
  final ChildProfile child;
  const FamilyTimeCard({super.key, required this.child});

  @override
  Widget build(BuildContext context) => FocusableTap(
        onTap: () => Navigator.push(context, MaterialPageRoute<void>(builder: (_) => FamilyTimeScreen(child: child))),
        semanticLabel: tr2('وقت العائلة', 'Family time'),
        child: RCard(
          key: const ValueKey('family_time_card'),
          color: const Color(0xFFFFE3D6),
          child: Row(children: [
            const Icon(Icons.diversity_3_rounded, size: 40, color: RC.pinkDeep),
            const SizedBox(width: 12),
            Expanded(child: Text(tr2('وقت العائلة', 'Family time'), style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w900, color: RC.ink))),
            const Icon(Icons.chevron_right, color: RC.ink),
          ]),
        ),
      );
}
