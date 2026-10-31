import 'package:flutter/material.dart';

import '../design/focusable_tap.dart';
import '../journey/models.dart';
import '../journey/ui/kit.dart';
import '../l10n/strings.dart';
import '../parent_screens.dart' show askParentQuestion;
import 'everyday_data.dart';
import 'everyday_store.dart';

IconData _areaIcon(EverydayArea a) => switch (a) {
      EverydayArea.selfCare => Icons.clean_hands_rounded,
      EverydayArea.tidying => Icons.inventory_2_rounded,
      EverydayArea.kitchen => Icons.restaurant_rounded,
      EverydayArea.nature => Icons.eco_rounded,
      EverydayArea.outings => Icons.directions_walk_rounded,
      EverydayArea.safety => Icons.shield_rounded,
    };

/// «تعلّم من حياتنا»: everyday moments done with a grown-up. Each task says how much supervision it needs.
class EverydayScreen extends StatefulWidget {
  final ChildProfile child;
  final DateTime? today;
  const EverydayScreen({super.key, required this.child, this.today});

  @override
  State<EverydayScreen> createState() => _EverydayScreenState();
}

class _EverydayScreenState extends State<EverydayScreen> {
  Map<String, List<String>> _done = {};

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final d = await EverydayStore.done(widget.child.id);
    if (mounted) setState(() => _done = d);
  }

  @override
  Widget build(BuildContext context) {
    final tasks = [for (final t in kEverydayTasks) if (t.fitsAge(widget.child.age)) t];
    final today = taskOfDay(widget.child.age, widget.today ?? DateTime.now());
    return Scaffold(
      appBar: AppBar(title: Text(tr2('تعلّم من حياتنا', 'Learning from our day'))),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          Text(
            tr2('نفعلها مع ماما أو بابا، دائماً.', 'We always do these with mum or dad.'),
            key: const ValueKey('everyday_note'),
            textAlign: TextAlign.center,
            style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w800, color: RC.ink),
          ),
          const SizedBox(height: 10),
          if (today != null) ...[
            Text(tr2('فكرة اليوم', "Today's idea"), style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: RC.ink)),
            const SizedBox(height: 6),
            _tile(today, highlight: true),
            const SizedBox(height: 12),
          ],
          Text(tr2('كل الأفكار', 'All ideas'), style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: RC.ink)),
          const SizedBox(height: 6),
          if (tasks.isEmpty) Text(tr2('لا أفكار لهذا العمر الآن.', 'No ideas for this age yet.')),
          for (final t in tasks) Padding(padding: const EdgeInsets.only(bottom: 8), child: _tile(t)),
        ],
      ),
    );
  }

  Widget _tile(EverydayTask t, {bool highlight = false}) {
    final days = _done[t.id]?.length ?? 0;
    return FocusableTap(
      onTap: () async {
        await Navigator.push(context, MaterialPageRoute<void>(builder: (_) => EverydayDetail(child: widget.child, task: t, today: widget.today)));
        if (mounted) _load();
      },
      semanticLabel: '${t.title()}, ${supervisionLabel(t.supervision)}',
      child: RCard(
        key: ValueKey('${highlight ? 'today' : 'task'}_${t.id}'),
        color: highlight ? const Color(0xFFFFF1D6) : Colors.white,
        child: Row(children: [
          Icon(_areaIcon(t.area), size: 34, color: RC.pinkDeep),
          const SizedBox(width: 12),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(t.title(), style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: RC.ink)),
              Text(supervisionLabel(t.supervision), style: const TextStyle(fontSize: 13, color: RC.ink)),
            ]),
          ),
          if (days > 0) Chip(label: Text('$days')),
        ]),
      ),
    );
  }
}

class EverydayDetail extends StatefulWidget {
  final ChildProfile child;
  final EverydayTask task;
  final DateTime? today;
  const EverydayDetail({super.key, required this.child, required this.task, this.today});

  @override
  State<EverydayDetail> createState() => _EverydayDetailState();
}

class _EverydayDetailState extends State<EverydayDetail> {
  bool _doneToday = false;

  @override
  void initState() {
    super.initState();
    EverydayStore.doneToday(widget.child.id, widget.task.id, now: widget.today).then((v) {
      if (mounted) setState(() => _doneToday = v);
    });
  }

  Future<void> _confirm() async {
    if (!await askParentQuestion(context)) return;
    await EverydayStore.confirm(widget.child.id, widget.task.id, now: widget.today);
    if (mounted) setState(() => _doneToday = true);
  }

  @override
  Widget build(BuildContext context) {
    final t = widget.task;
    return Scaffold(
      appBar: AppBar(title: Text(t.title())),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          RCard(
            key: const ValueKey('supervision'),
            color: const Color(0xFFFFE9F1),
            child: Row(children: [
              const Icon(Icons.family_restroom_rounded, size: 32, color: RC.pinkDeep),
              const SizedBox(width: 10),
              Expanded(child: Text(supervisionLabel(t.supervision), style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w900, color: RC.ink))),
            ]),
          ),
          const SizedBox(height: 10),
          RCard(child: Text(t.forChild(), style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: RC.ink, height: 1.4))),
          if (t.safety != null) ...[
            const SizedBox(height: 10),
            RCard(
              key: const ValueKey('safety_note'),
              color: const Color(0xFFFFF1D6),
              child: Row(children: [
                const Icon(Icons.health_and_safety_rounded, color: RC.ink),
                const SizedBox(width: 10),
                Expanded(child: Text(t.safety!(), style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w800, color: RC.ink))),
              ]),
            ),
          ],
          const SizedBox(height: 10),
          Text(tr2('للكبار', 'For the grown-up'), style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w900, color: RC.ink)),
          Text(t.forParent(), style: const TextStyle(fontSize: 15, color: RC.ink, height: 1.4)),
          const SizedBox(height: 16),
          FilledButton.icon(
            key: const ValueKey('confirm_done'),
            style: FilledButton.styleFrom(minimumSize: const Size(160, 56)),
            onPressed: _doneToday ? null : _confirm,
            icon: Icon(_doneToday ? Icons.check_circle_rounded : Icons.check_rounded),
            label: Text(_doneToday ? tr2('سُجّل اليوم', 'Recorded today') : tr2('فعلناها معاً (للكبار)', 'We did it together (grown-ups)'), style: const TextStyle(fontSize: 18)),
          ),
        ],
      ),
    );
  }
}

/// Card on the Me tab that opens the everyday-learning list.
class EverydayCard extends StatelessWidget {
  final ChildProfile child;
  const EverydayCard({super.key, required this.child});

  @override
  Widget build(BuildContext context) => FocusableTap(
        onTap: () => Navigator.push(context, MaterialPageRoute<void>(builder: (_) => EverydayScreen(child: child))),
        semanticLabel: tr2('تعلّم من حياتنا', 'Learning from our day'),
        child: RCard(
          key: const ValueKey('everyday_card'),
          color: const Color(0xFFE3F8E0),
          child: Row(children: [
            const Icon(Icons.home_rounded, size: 40, color: RC.pinkDeep),
            const SizedBox(width: 12),
            Expanded(child: Text(tr2('تعلّم من حياتنا', 'Learning from our day'), style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w900, color: RC.ink))),
            const Icon(Icons.chevron_right, color: RC.ink),
          ]),
        ),
      );
}
