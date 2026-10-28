import 'package:flutter/material.dart';

import '../lands.dart';
import '../models.dart';
import '../repository.dart';
import 'kit.dart';
import 'onboarding.dart';

/// A child profile being edited (before it is saved).
class ProfileDraft {
  String nickname = '';
  int age = 5;
  final Set<String> goals = {};
  final Set<String> interests = {};
  List<String> plan = [for (final l in kLands) l.id];
  int dailyCount = 3;
  int bias = 0;
  Map<String, double> assessment = {};

  ProfileDraft();

  factory ProfileDraft.from(ChildProfile p) => ProfileDraft()
    ..nickname = p.nickname
    ..age = p.age
    ..goals.addAll(p.goals)
    ..interests.addAll(p.interests)
    // An empty plan means "every land" everywhere else, so show it that way.
    ..plan = p.plan.isEmpty ? [for (final l in kLands) l.id] : [...p.plan]
    ..dailyCount = p.dailyCount
    ..bias = p.bias
    ..assessment = {...p.assessment};

  ChildProfile toProfile(String id, {String? accessory}) => ChildProfile(
        id: id,
        nickname: nickname.trim(),
        age: age,
        interests: interests.toList(),
        goals: goals.toList(),
        plan: plan,
        dailyCount: dailyCount,
        bias: bias,
        accessory: accessory,
        assessment: assessment,
      );
}

/// Nickname, age, goals and interests. Only a nickname is asked for: no real
/// name, photo, or any other personal detail.
class BasicsForm extends StatefulWidget {
  final ProfileDraft draft;
  final VoidCallback onChanged;

  /// 0 = nickname and age, 1 = goals and interests, null = everything.
  final int? section;
  const BasicsForm({super.key, required this.draft, required this.onChanged, this.section});

  @override
  State<BasicsForm> createState() => _BasicsFormState();
}

class _BasicsFormState extends State<BasicsForm> {
  late final _name = TextEditingController(text: widget.draft.nickname);

  @override
  void dispose() {
    _name.dispose();
    super.dispose();
  }

  void _changed(VoidCallback f) {
    setState(f);
    widget.onChanged();
  }

  @override
  Widget build(BuildContext context) {
    final d = widget.draft;
    final first = widget.section == null || widget.section == 0;
    final second = widget.section == null || widget.section == 1;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (first) ...[
        TextField(
          controller: _name,
          maxLength: 20,
          textInputAction: TextInputAction.done,
          decoration: const InputDecoration(
            labelText: 'اسم الطفل أو لقبه',
            helperText: 'يكفي لقب لطيف، لا تكتب الاسم الكامل',
            filled: true,
            fillColor: Colors.white,
          ),
          onChanged: (v) {
            d.nickname = v;
            widget.onChanged();
          },
        ),
        const SizedBox(height: 12),
        const Text('العمر', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: RC.ink)),
        const SizedBox(height: 6),
        Wrap(
          spacing: 8,
          runSpacing: 8,
          children: [
            for (var a = 1; a <= 12; a++)
              ChoiceChip(
                label: Text('$a', style: const TextStyle(fontSize: 18)),
                selected: d.age == a,
                onSelected: (_) => _changed(() => d.age = a),
              ),
          ],
        ),
        ],
        if (first && second) const SizedBox(height: 16),
        if (second) ...[
        const Text('ماذا تريد أن يتعلم طفلك؟',
            style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: RC.ink)),
        const SizedBox(height: 6),
        Wrap(
          spacing: 8,
          runSpacing: 8,
          children: [
            for (final g in kGoals)
              FilterChip(
                label: Text(g.title, style: const TextStyle(fontSize: 16)),
                selected: d.goals.contains(g.id),
                onSelected: (on) => _changed(() => on ? d.goals.add(g.id) : d.goals.remove(g.id)),
              ),
          ],
        ),
        const SizedBox(height: 16),
        const Text('ما الذي يحبه؟',
            style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: RC.ink)),
        const SizedBox(height: 6),
        Wrap(
          spacing: 8,
          runSpacing: 8,
          children: [
            for (final l in kLands)
              FilterChip(
                avatar: Icon(l.icon, size: 18, color: l.color),
                label: Text(l.title, style: const TextStyle(fontSize: 16)),
                selected: d.interests.contains(l.id),
                onSelected: (on) => _changed(() => on ? d.interests.add(l.id) : d.interests.remove(l.id)),
              ),
          ],
        ),
        ],
      ],
    );
  }
}

/// Review and edit the learning plan: which lands, in what order, how many
/// activities a day, and how hard. The parent always has the last word.
class PlanEditor extends StatefulWidget {
  final ProfileDraft draft;
  final VoidCallback onChanged;
  const PlanEditor({super.key, required this.draft, required this.onChanged});

  @override
  State<PlanEditor> createState() => _PlanEditorState();
}

class _PlanEditorState extends State<PlanEditor> {
  /// Included lands first (in plan order), then the ones left out.
  late final List<String> _order = [
    ...widget.draft.plan,
    for (final l in kLands)
      if (!widget.draft.plan.contains(l.id)) l.id,
  ];

  void _commit() {
    final included = widget.draft.plan.toSet();
    widget.draft.plan = [for (final id in _order) if (included.contains(id)) id];
    widget.onChanged();
    setState(() {});
  }

  void _toggle(String id, bool on) {
    final included = widget.draft.plan.toSet();
    on ? included.add(id) : included.remove(id);
    widget.draft.plan = [for (final x in _order) if (included.contains(x)) x];
    widget.onChanged();
    setState(() {});
  }

  void _move(int index, int delta) {
    final to = index + delta;
    if (to < 0 || to >= _order.length) return;
    final id = _order.removeAt(index);
    _order.insert(to, id);
    _commit();
  }

  @override
  Widget build(BuildContext context) {
    final d = widget.draft;
    final included = d.plan.toSet();
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text('الأراضي والترتيب',
            style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: RC.ink)),
        const Text('الأعلى يأتي أولاً. أزل العلامة عن الأرض لإخفائها من خطة اليوم.',
            style: TextStyle(fontSize: 14, color: RC.ink)),
        const SizedBox(height: 8),
        for (var i = 0; i < _order.length; i++)
          Builder(builder: (context) {
            final land = landById(_order[i]);
            final on = included.contains(land.id);
            return RCard(
              key: ValueKey(land.id),
              color: on ? Colors.white : Colors.white.withAlpha(150),
              padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
              child: Row(
                children: [
                  Checkbox(
                    value: on,
                    onChanged: (v) => _toggle(land.id, v ?? false),
                  ),
                  Icon(land.icon, color: land.color),
                  const SizedBox(width: 8),
                  Expanded(
                    child: Text(land.title,
                        style: TextStyle(
                          fontSize: 17,
                          fontWeight: FontWeight.bold,
                          color: on ? RC.ink : RC.ink.withAlpha(120),
                        )),
                  ),
                  IconButton(
                    tooltip: 'أعلى',
                    onPressed: i == 0 ? null : () => _move(i, -1),
                    icon: const Icon(Icons.keyboard_arrow_up_rounded),
                  ),
                  IconButton(
                    tooltip: 'أسفل',
                    onPressed: i == _order.length - 1 ? null : () => _move(i, 1),
                    icon: const Icon(Icons.keyboard_arrow_down_rounded),
                  ),
                ],
              ),
            );
          }),
        const SizedBox(height: 16),
        const Text('أنشطة مغامرة اليوم',
            style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: RC.ink)),
        const SizedBox(height: 6),
        SegmentedButton<int>(
          segments: [for (var n = 2; n <= 5; n++) ButtonSegment(value: n, label: Text('$n'))],
          selected: {d.dailyCount},
          onSelectionChanged: (s) {
            d.dailyCount = s.first;
            widget.onChanged();
            setState(() {});
          },
        ),
        Text('كل نشاط يستغرق نحو ${minutesFor(d.age)} دقائق لهذا العمر.',
            style: const TextStyle(fontSize: 14, color: RC.ink)),
        const SizedBox(height: 16),
        const Text('مستوى الصعوبة',
            style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: RC.ink)),
        const SizedBox(height: 6),
        SegmentedButton<int>(
          segments: const [
            ButtonSegment(value: -1, label: Text('أسهل')),
            ButtonSegment(value: 0, label: Text('عادي')),
            ButtonSegment(value: 1, label: Text('أصعب')),
          ],
          selected: {d.bias},
          onSelectionChanged: (s) {
            d.bias = s.first;
            widget.onChanged();
            setState(() {});
          },
        ),
      ],
    );
  }
}

/// Parent area: the children on this device, with edit, plan and delete.
class ChildrenScreen extends StatelessWidget {
  const ChildrenScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return ListenableBuilder(
      listenable: JourneyStore.instance,
      builder: (context, _) {
        final store = JourneyStore.instance;
        return Scaffold(
          appBar: AppBar(title: const Text('الأطفال')),
          floatingActionButton: FloatingActionButton.extended(
            onPressed: () => Navigator.push(
              context,
              MaterialPageRoute(builder: (_) => const OnboardingFlow()),
            ),
            icon: const Icon(Icons.person_add_alt_1_rounded),
            label: const Text('إضافة طفل', style: TextStyle(fontSize: 18)),
          ),
          body: store.profiles.isEmpty
              ? const Center(child: Text('لا يوجد أطفال بعد', style: TextStyle(fontSize: 20)))
              : ListView(
                  padding: const EdgeInsets.fromLTRB(16, 8, 16, 96),
                  children: [
                    for (final c in store.profiles)
                      Card(
                        child: ListTile(
                          leading: const CircleAvatar(child: Icon(Icons.child_care_rounded)),
                          title: Text(c.nickname,
                              style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                          subtitle: Text('العمر ${c.age} · ${store.progressOf(c.id).totalStars} نجمة'),
                          trailing: const Icon(Icons.edit_rounded),
                          onTap: () => Navigator.push(
                            context,
                            MaterialPageRoute(builder: (_) => ChildEditScreen(child: c)),
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

/// Edit one child's details and plan, or delete the profile with its progress.
class ChildEditScreen extends StatefulWidget {
  final ChildProfile child;
  const ChildEditScreen({super.key, required this.child});

  @override
  State<ChildEditScreen> createState() => _ChildEditScreenState();
}

class _ChildEditScreenState extends State<ChildEditScreen> {
  late final ProfileDraft _draft = ProfileDraft.from(widget.child);
  String? _error;

  Future<void> _save() async {
    if (_draft.nickname.trim().isEmpty) {
      setState(() => _error = 'اكتب اسماً أو لقباً للطفل');
      return;
    }
    await JourneyStore.instance
        .updateProfile(_draft.toProfile(widget.child.id, accessory: widget.child.accessory));
    if (mounted) Navigator.pop(context);
  }

  Future<void> _delete() async {
    final ok = await showDialog<bool>(
      context: context,
      builder: (_) => AlertDialog(
        title: const Text('حذف الطفل؟'),
        content: Text('سيُحذف ملف «${widget.child.nickname}» وكل تقدمه من هذا الجهاز نهائياً.'),
        actions: [
          TextButton(onPressed: () => Navigator.pop(context, false), child: const Text('إلغاء')),
          FilledButton(onPressed: () => Navigator.pop(context, true), child: const Text('حذف')),
        ],
      ),
    );
    if (ok != true) return;
    await JourneyStore.instance.deleteProfile(widget.child.id);
    if (mounted) Navigator.pop(context);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(widget.child.nickname)),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          BasicsForm(draft: _draft, onChanged: () {}),
          const Divider(height: 32),
          PlanEditor(draft: _draft, onChanged: () {}),
          if (_error != null)
            Padding(
              padding: const EdgeInsets.only(top: 12),
              child: Text(_error!, style: const TextStyle(color: Colors.red, fontSize: 16)),
            ),
          const SizedBox(height: 16),
          FilledButton(onPressed: _save, child: const Text('حفظ')),
          const SizedBox(height: 8),
          TextButton.icon(
            onPressed: _delete,
            icon: const Icon(Icons.delete_outline_rounded),
            label: const Text('حذف هذا الطفل وتقدمه'),
          ),
        ],
      ),
    );
  }
}
