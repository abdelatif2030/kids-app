import 'package:flutter/material.dart';

import '../home_tasks.dart';
import '../models.dart';
import '../repository.dart';
import 'kit.dart';
import '../../l10n/strings.dart';

/// Parent area: the real-world tasks the app suggested, waiting for a "done".
class ParentHomeTasksScreen extends StatefulWidget {
  const ParentHomeTasksScreen({super.key});

  @override
  State<ParentHomeTasksScreen> createState() => _ParentHomeTasksScreenState();
}

class _ParentHomeTasksScreenState extends State<ParentHomeTasksScreen> {
  List<HomeTask>? _tasks;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final all = await HomeTasks.all();
    if (mounted) setState(() => _tasks = all.reversed.toList());
  }

  String _name(String id) => JourneyStore.instance.profileById(id)?.nickname ?? loc('طفل');

  @override
  Widget build(BuildContext context) {
    final tasks = _tasks;
    final waiting = [for (final t in tasks ?? <HomeTask>[]) if (!t.done) t];
    final done = [for (final t in tasks ?? <HomeTask>[]) if (t.done) t];
    return Scaffold(
      appBar: AppBar(title: Text(loc('أنشطة البيت'))),
      body: tasks == null
          ? const Center(child: CircularProgressIndicator())
          : ListView(
              padding: const EdgeInsets.all(16),
              children: [
                Text(
                  loc('بعد كل نشاط يقترح التطبيق مهمة حقيقية بعيدًا عن الشاشة. اضغط «تم» بعد أن يفعلها الطفل معك. '
                  'لا نجوم على هذه المهام ولا تصوير، وكل شيء يبقى على هذا الجهاز.'),
                  style: TextStyle(fontSize: 15),
                ),
                const SizedBox(height: 12),
                Text('بانتظار التأكيد (${waiting.length})',
                    style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                if (waiting.isEmpty) Padding(padding: EdgeInsets.all(8), child: Text(loc('لا مهام الآن.'))),
                for (final t in waiting)
                  Card(
                    child: ListTile(
                      title: Text(t.text),
                      subtitle: Text('${_name(t.childId)} · ${t.day}'),
                      trailing: FilledButton(
                        onPressed: () async {
                          await HomeTasks.confirm(t);
                          await _load();
                        },
                        child: Text(loc('تم')),
                      ),
                      onLongPress: () async {
                        await HomeTasks.remove(t);
                        await _load();
                      },
                    ),
                  ),
                const SizedBox(height: 16),
                Text('تمت (${done.length})', style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                for (final t in done)
                  ListTile(
                    leading: const Icon(Icons.check_circle_rounded, color: Colors.green),
                    title: Text(t.text),
                    subtitle: Text('${_name(t.childId)} · ${t.day}'),
                  ),
              ],
            ),
    );
  }
}

/// «اكتشف مع ماما وبابا»: screen-free play ideas for the youngest. The parent
/// reads and leads; "we did it" only records that it happened.
class ExploreScreen extends StatefulWidget {
  final ChildProfile child;
  const ExploreScreen({super.key, required this.child});

  @override
  State<ExploreScreen> createState() => _ExploreScreenState();
}

class _ExploreScreenState extends State<ExploreScreen> {
  Set<String> _doneToday = {};

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final now = DateTime.now();
    final day = '${now.year.toString().padLeft(4, '0')}-${now.month.toString().padLeft(2, '0')}-${now.day.toString().padLeft(2, '0')}';
    final all = await HomeTasks.all();
    if (!mounted) return;
    setState(() => _doneToday = {
          for (final t in all)
            if (t.childId == widget.child.id && t.day == day && t.done) t.text,
        });
  }

  @override
  Widget build(BuildContext context) {
    final age = widget.child.age;
    final items = [for (final e in kExploreWithParents) if (age >= e.$3 && age <= e.$4) e];
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: RC.ink,
        title: Text(loc('اكتشف مع ماما وبابا'),
            style: TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: RC.ink)),
      ),
      body: PastelBackground(
        child: SafeArea(
          child: ListView(
            padding: const EdgeInsets.all(16),
            children: [
              RCard(
                color: Color(0xFFFFF3C4),
                child: Text(
                  loc('في هذا العمر اللعب مع الأهل أهم من أي شاشة. اختاروا نشاطًا واحدًا أو اثنين اليوم.'),
                  style: TextStyle(fontSize: 17, color: RC.ink),
                ),
              ),
              const SizedBox(height: 12),
              for (final e in items)
                Padding(
                  padding: const EdgeInsets.only(bottom: 10),
                  child: RCard(
                    semanticLabel: '${e.$1}. ${e.$2}',
                    child: Row(
                      children: [
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(e.$1,
                                  style: const TextStyle(fontSize: 19, fontWeight: FontWeight.w900, color: RC.ink)),
                              const SizedBox(height: 4),
                              Text(e.$2, style: const TextStyle(fontSize: 16, color: RC.ink)),
                            ],
                          ),
                        ),
                        const SizedBox(width: 8),
                        _doneToday.contains(e.$1)
                            ? const Icon(Icons.check_circle_rounded, color: RC.good, size: 36)
                            : FilledButton(
                                onPressed: () async {
                                  await HomeTasks.addDone(widget.child.id, 'explore', e.$1);
                                  await _load();
                                },
                                child: Text(loc('جرّبناه')),
                              ),
                      ],
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
