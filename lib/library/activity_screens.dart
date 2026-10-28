import 'package:flutter/material.dart';

import '../journey/home_tasks.dart';
import '../journey/models.dart';
import '../journey/ui/kit.dart';
import 'activities.dart';
import 'learning_records.dart';

/// Offline activities to do together. Completion is a parent's confirmation:
/// one tap, no photo, no recording, no typing.
class ActivityLibraryScreen extends StatefulWidget {
  final ChildProfile child;
  const ActivityLibraryScreen({super.key, required this.child});

  @override
  State<ActivityLibraryScreen> createState() => _ActivityLibraryScreenState();
}

class _ActivityLibraryScreenState extends State<ActivityLibraryScreen> {
  String? _skill;
  bool _allAges = false;
  Set<String> _done = {};

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final week = await HomeTasks.all();
    final cutoff = dayOf(DateTime.now().subtract(const Duration(days: 7)));
    if (!mounted) return;
    setState(() => _done = {
          for (final t in week)
            if (t.childId == widget.child.id && t.topic == 'activity' && t.done && t.day.compareTo(cutoff) >= 0) t.text,
        });
  }

  Future<void> _mark(RealActivity a) async {
    await HomeTasks.addDone(widget.child.id, 'activity', a.title);
    // A parent confirming it was done is practice, not mastery.
    await LearningRecords.add(widget.child.id, RecordType.activity, a.id, Evidence.practice);
    await _load();
  }

  @override
  Widget build(BuildContext context) {
    final list = activitiesFor(age: _allAges ? null : widget.child.age, skill: _skill);
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: RC.ink,
        title: const Text('أنشطة مع الأهل',
            style: TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: RC.ink)),
      ),
      body: PastelBackground(
        child: SafeArea(
          child: ListView(
            padding: const EdgeInsets.all(16),
            children: [
              const RCard(
                color: Color(0xFFFFF3C4),
                child: Text(
                  'أنشطة حقيقية بعيدة عن الشاشة، يقوم بها الطفل مع أحد الكبار. بعد النشاط يضغط الكبير «تمّ». لا حاجة لصور أو تسجيلات.',
                  style: TextStyle(fontSize: 15, color: RC.ink),
                ),
              ),
              const SizedBox(height: 10),
              Wrap(
                spacing: 8,
                runSpacing: 4,
                children: [
                  ChoiceChip(label: const Text('الكل'), selected: _skill == null, onSelected: (_) => setState(() => _skill = null)),
                  for (final s in kSkillFilters)
                    ChoiceChip(label: Text(s), selected: _skill == s, onSelected: (v) => setState(() => _skill = v ? s : null)),
                ],
              ),
              Material(
                type: MaterialType.transparency,
                child: CheckboxListTile(
                  dense: true,
                  value: _allAges,
                  onChanged: (v) => setState(() => _allAges = v ?? false),
                  title: const Text('إظهار أنشطة كل الأعمار'),
                ),
              ),
              if (list.isEmpty)
                const Padding(
                  padding: EdgeInsets.all(24),
                  child: Text('لا توجد أنشطة لهذا الاختيار.', textAlign: TextAlign.center),
                ),
              for (final a in list)
                Padding(
                  padding: const EdgeInsets.only(bottom: 10),
                  child: RCard(
                    padding: EdgeInsets.zero,
                    child: Theme(
                      data: Theme.of(context).copyWith(dividerColor: Colors.transparent),
                      child: ExpansionTile(
                        title: Text(a.title, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: RC.ink)),
                        subtitle: Text('${a.skill} · ${a.minutes} د · ${a.minAge}–${a.maxAge} سنة'),
                        trailing: _done.contains(a.title)
                            ? const Icon(Icons.check_circle_rounded, color: RC.good, size: 30)
                            : const Icon(Icons.expand_more_rounded),
                        childrenPadding: const EdgeInsets.fromLTRB(16, 0, 16, 14),
                        expandedCrossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text('للطفل', style: TextStyle(fontWeight: FontWeight.w900, color: RC.pinkDeep)),
                          Text(a.forChild, style: const TextStyle(fontSize: 16, color: RC.ink)),
                          const SizedBox(height: 8),
                          const Text('للوالد', style: TextStyle(fontWeight: FontWeight.w900, color: RC.pinkDeep)),
                          Text(a.forParent, style: const TextStyle(fontSize: 15, color: RC.ink)),
                          const SizedBox(height: 8),
                          Text('المواد: ${a.materials.isEmpty ? 'لا شيء' : a.materials.join('، ')}',
                              style: const TextStyle(fontSize: 14, color: RC.ink)),
                          if (a.safety != null)
                            Padding(
                              padding: const EdgeInsets.only(top: 8),
                              child: Row(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  const Text('⚠️ '),
                                  Expanded(
                                    child: Text(a.safety!,
                                        style: const TextStyle(fontSize: 14, color: Color(0xFF9A3B00))),
                                  ),
                                ],
                              ),
                            ),
                          const SizedBox(height: 10),
                          Align(
                            alignment: AlignmentDirectional.centerStart,
                            child: _done.contains(a.title)
                                ? const Text('تمّ هذا الأسبوع ✓', style: TextStyle(color: RC.good, fontWeight: FontWeight.bold))
                                : FilledButton.icon(
                                    onPressed: () => _mark(a),
                                    icon: const Icon(Icons.check_rounded),
                                    label: const Text('تمّ (يؤكدها الكبير)'),
                                  ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
            ],
          ),
        ),
      ),
    );
  }
}
