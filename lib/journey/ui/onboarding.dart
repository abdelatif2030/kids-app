import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../../design/components.dart';
import '../../design/tokens.dart';
import '../../l10n/strings.dart';
import '../../parent_screens.dart' show PinSetupScreen;
import '../../parent_settings.dart';
import '../../safe_json.dart';
import '../../ui.dart' show Mascot;
import '../content.dart';
import '../lands.dart';
import '../models.dart';
import '../plans.dart';
import '../recommender.dart';
import '../repository.dart';
import 'kit.dart' show PastelBackground, RC, RCard;
import 'profile_forms.dart';
import 'quiz_view.dart';

const _kDraftKey = 'onboarding_draft';

/// Parent-guided setup of a child profile, five steps:
/// 1. nickname and age, 2. goals (cards), 3. an optional quick skill check,
/// 4. a plan to choose and adjust, 5. a completion screen.
/// Progress is saved on the device after every change so an interrupted
/// session resumes, and Back never loses answers. Pops the saved [ChildProfile].
class OnboardingFlow extends StatefulWidget {
  /// When no parent PIN exists yet, finishing asks the parent to create one,
  /// so a child can never open the parent area on a device without a gate.
  final bool askForPin;
  const OnboardingFlow({super.key, this.askForPin = true});

  @override
  State<OnboardingFlow> createState() => _OnboardingFlowState();
}

class _OnboardingFlowState extends State<OnboardingFlow> {
  static const _steps = 5;
  final ProfileDraft _draft = ProfileDraft();
  final _name = TextEditingController();
  int _step = 0;
  String? _error;
  List<(String, Question)>? _check;
  bool _checkStarted = false;
  bool _checkDone = false;
  bool _saving = false;
  bool _resumed = false;
  bool _customize = false;

  @override
  void initState() {
    super.initState();
    _restore();
  }

  @override
  void dispose() {
    _name.dispose();
    super.dispose();
  }

  Future<void> _restore() async {
    final m = decodeMap(await SharedPreferences.getInstance(), _kDraftKey);
    if (m.isEmpty || !mounted) return;
    final nick = m['n'];
    if (nick is! String || (nick.isEmpty && (m['s'] ?? 0) == 0)) return;
    setState(() {
      _draft.nickname = nick;
      _name.text = nick;
      _draft.age = ((m['a'] as num?)?.toInt() ?? 5).clamp(1, 12);
      _draft.goals
        ..clear()
        ..addAll([for (final g in (m['g'] as List? ?? [])) g.toString()]);
      _draft.interests
        ..clear()
        ..addAll([for (final g in (m['i'] as List? ?? [])) g.toString()]);
      final plan = [for (final g in (m['p'] as List? ?? [])) g.toString()];
      if (plan.isNotEmpty) _draft.plan = plan;
      _draft.dailyCount = ((m['d'] as num?)?.toInt() ?? 3).clamp(2, 5);
      _draft.bias = ((m['b'] as num?)?.toInt() ?? 0).clamp(-1, 1);
      _draft.learnLang = const ['ar', 'en', 'both'].contains(m['l']) ? m['l'] as String : 'both';
      _draft.assessment = {
        for (final e in ((m['as'] as Map?) ?? {}).entries)
          e.key.toString(): (e.value as num).toDouble(),
      };
      _checkDone = m['cd'] == true;
      _step = ((m['s'] as num?)?.toInt() ?? 0).clamp(0, _steps - 1);
      if (_step == 2 && !_checkDone) _check = assessmentQuestions(_draft.age);
      _resumed = _step > 0;
    });
  }

  Future<void> _persist() async {
    final p = await SharedPreferences.getInstance();
    await p.setString(
      _kDraftKey,
      jsonEncode({
        's': _step,
        'n': _draft.nickname,
        'a': _draft.age,
        'g': _draft.goals.toList(),
        'i': _draft.interests.toList(),
        'p': _draft.plan,
        'd': _draft.dailyCount,
        'b': _draft.bias,
        'l': _draft.learnLang,
        'as': _draft.assessment,
        'cd': _checkDone,
      }),
    );
  }

  Future<void> _clearDraft() async =>
      (await SharedPreferences.getInstance()).remove(_kDraftKey);

  void _go(int step) {
    setState(() {
      _error = null;
      _resumed = false;
      _step = step;
      if (_step == 3) _applyPlan();
    });
    _persist();
  }

  void _next() {
    if (_step == 0 && _draft.nickname.trim().isEmpty) {
      setState(() => _error = context.tr('ob.child.nameError'));
      return;
    }
    _go(_step + 1);
  }

  /// Orders the lands from goals and the check, unless the parent already
  /// customized the plan (re-running this on Back would overwrite their edits).
  void _applyPlan() {
    if (_customize) return;
    _draft.plan = planFromAssessment(
      _draft.assessment,
      _draft.goals.toList(),
      _draft.interests.toList(),
      learnLang: _draft.learnLang,
    );
  }

  void _startCheck() {
    setState(() {
      _checkStarted = true;
      _check = assessmentQuestions(_draft.age);
    });
  }

  void _skipCheck() {
    _draft.assessment = {};
    _go(3);
  }

  void _checkFinished(List<ItemResult> results) {
    final check = _check!;
    _draft.assessment = {
      for (var i = 0; i < check.length && i < results.length; i++)
        check[i].$1: results[i].ok ? 1.0 : 0.0,
    };
    setState(() => _checkDone = true);
    _persist();
  }

  Future<void> _finish() async {
    if (_saving) return;
    setState(() => _saving = true);
    final store = JourneyStore.instance;
    final profile = await store.addProfile(_draft.toProfile(store.newId()));
    await store.setActive(profile.id);
    await _clearDraft();
    final needPin = widget.askForPin && !await ParentSettings.instance.hasPin();
    if (needPin && mounted) {
      await Navigator.push(
        context,
        MaterialPageRoute(
          builder: (_) => const PinSetupScreen(popWhenDone: true),
        ),
      );
    }
    if (mounted) Navigator.pop(context, profile);
  }

  String _title() => switch (_step) {
    0 => context.tr('ob.child.title'),
    1 => context.tr('ob.goals.bar'),
    2 => context.tr('ob.check.title'),
    3 => context.tr('ob.plan.title'),
    _ => context.tr('ob.done.title'),
  };

  Widget _childStep() => Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      Text(context.tr('ob.child.intro'), style: DS.body),
      const SizedBox(height: DS.s16),
      TextField(
        controller: _name,
        maxLength: 20,
        textInputAction: TextInputAction.done,
        decoration: InputDecoration(
          labelText: context.tr('ob.child.name'),
          helperText: context.tr('ob.child.nameHelp'),
              helperMaxLines: 2,
          filled: true,
          fillColor: DS.surface,
          errorText: _error,
        ),
        onChanged: (v) {
          _draft.nickname = v;
          if (_error != null) setState(() => _error = null);
          _persist();
        },
      ),
      const SizedBox(height: DS.s16),
      Text(context.tr('ob.child.learnLang'), style: DS.heading),
      const SizedBox(height: DS.s4),
      Text(context.tr('ob.child.learnLangHelp'), style: DS.caption),
      const SizedBox(height: DS.s8),
      Wrap(
        spacing: DS.s8,
        runSpacing: DS.s8,
        children: [
          for (final l in ['ar', 'en', 'both'])
            ChoiceChip(
              label: Text(context.tr('ob.learn.$l'), style: const TextStyle(fontSize: 18)),
              selected: _draft.learnLang == l,
              onSelected: (_) {
                setState(() => _draft.learnLang = l);
                _persist();
              },
            ),
        ],
      ),
      const SizedBox(height: DS.s16),
      Text(context.tr('ob.child.age'), style: DS.heading),
      const SizedBox(height: DS.s8),
      Wrap(
        spacing: DS.s8,
        runSpacing: DS.s8,
        children: [
          for (var a = 1; a <= 12; a++)
            ChoiceChip(
              label: Text('$a', style: const TextStyle(fontSize: 18)),
              selected: _draft.age == a,
              onSelected: (_) {
                setState(() => _draft.age = a);
                _persist();
              },
            ),
        ],
      ),
    ],
  );

  static const _goalIcons = {
    'foundation': Icons.extension_rounded,
    'arabic': Icons.sort_by_alpha_rounded,
    'math': Icons.pin_rounded,
    'english': Icons.translate_rounded,
    'cognitive': Icons.psychology_rounded,
  };

  Widget _goalsStep() => Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      Text(context.tr('ob.goals.title'), style: DS.heading),
      const SizedBox(height: DS.s4),
      Text(context.tr('ob.goals.intro'), style: DS.body),
      const SizedBox(height: DS.s12),
      for (final g in kGoals) ...[
        OptionCard(
          title: context.tr('goal.${g.id}'),
          subtitle: context.tr('goal.${g.id}.d'),
          icon: _goalIcons[g.id] ?? Icons.star_rounded,
          selected: _draft.goals.contains(g.id),
          onTap: () {
            setState(
              () => _draft.goals.contains(g.id)
                  ? _draft.goals.remove(g.id)
                  : _draft.goals.add(g.id),
            );
            _persist();
          },
        ),
        const SizedBox(height: DS.s8),
      ],
    ],
  );

  Widget _checkStep() {
    if (_checkDone) {
      return _CheckResult(draft: _draft, onContinue: () => _go(3));
    }
    if (!_checkStarted) {
      return Column(
        children: [
          const Mascot(size: 110),
          const SizedBox(height: DS.s12),
          Text(
            context.tr('ob.check.intro'),
            textAlign: TextAlign.center,
            style: DS.body,
          ),
          const SizedBox(height: DS.s16),
          AppButton(
            label: context.tr('ob.check.start'),
            icon: Icons.play_arrow_rounded,
            expand: true,
            onPressed: _startCheck,
          ),
          const SizedBox(height: DS.s8),
          TextButton(
            onPressed: _skipCheck,
            child: Text(
              context.tr('ob.check.skip'),
              style: const TextStyle(fontSize: 16),
            ),
          ),
        ],
      );
    }
    return SizedBox(
      height: 640,
      child: QuizView(
        questions: [for (final e in _check!) e.$2],
        onFinished: _checkFinished,
      ),
    );
  }

  String _goalsText() => [
    for (final g in kGoals)
      if (_draft.goals.contains(g.id)) context.tr('goal.${g.id}'),
  ].join(context.tr('list.sep'));

  Widget _planStep() {
    final current = presetFor(_draft.dailyCount, _draft.bias);
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(context.tr('ob.plan.intro'), style: DS.body),
        const SizedBox(height: DS.s12),
        for (final p in kPlanPresets) ...[
          _PlanCard(
            preset: p,
            age: _draft.age,
            selected: current?.id == p.id,
            onTap: () {
              setState(() {
                _draft.dailyCount = p.dailyCount;
                _draft.bias = p.bias;
              });
              _persist();
            },
          ),
          const SizedBox(height: DS.s8),
        ],
        if (current == null)
          Padding(
            padding: const EdgeInsets.only(bottom: DS.s8),
            child: Text(
              '${context.tr('ob.plan.custom')}: ${trArgs('ob.plan.perDay', {'n': _draft.dailyCount})} · ${context.tr('ob.plan.level.${_draft.bias}')}',
              style: DS.heading.copyWith(fontSize: 16),
            ),
          ),
        Container(
          width: double.infinity,
          padding: const EdgeInsets.all(DS.s12),
          decoration: BoxDecoration(
            color: DS.highlightSoft,
            borderRadius: BorderRadius.circular(DS.rMedium),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                trArgs('ob.plan.why', {
                  'why': _draft.goals.isEmpty
                      ? context.tr('ob.plan.whyNoGoals')
                      : trArgs('ob.plan.whyGoals', {'goals': _goalsText()}),
                }),
                style: DS.body,
              ),
              const SizedBox(height: DS.s8),
              Text(
                [for (final id in _draft.plan.take(4)) context.tr('land.$id')]
                    .join(context.tr('list.sep')),
                style: DS.caption.copyWith(fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: DS.s8),
              Text(context.tr('ob.plan.review'), style: DS.caption),
              Text(context.tr('ob.plan.free'), style: DS.caption),
            ],
          ),
        ),
        const SizedBox(height: DS.s8),
        Material(
          color: Colors.transparent,
          child: ExpansionTile(
            title: Text(
              context.tr('ob.plan.customize'),
              style: DS.heading.copyWith(fontSize: 17),
            ),
            onExpansionChanged: (open) {
              if (open) _customize = true;
            },
            children: [
              PlanEditor(
                draft: _draft,
                onChanged: () {
                  setState(() {});
                  _persist();
                },
              ),
            ],
          ),
        ),
      ],
    );
  }

  Widget _doneStep() => Column(
    children: [
      const Mascot(size: 150),
      const SizedBox(height: DS.s12),
      Text(
        trArgs('ob.done.body', {'name': _draft.nickname.trim()}),
        textAlign: TextAlign.center,
        style: DS.body,
      ),
      const SizedBox(height: DS.s24),
      AppButton(
        label: context.tr('ob.done.start'),
        icon: Icons.rocket_launch_rounded,
        expand: true,
        loading: _saving,
        onPressed: _finish,
      ),
    ],
  );

  Widget _body() => switch (_step) {
    0 => _childStep(),
    1 => _goalsStep(),
    2 => _checkStep(),
    3 => _planStep(),
    _ => _doneStep(),
  };

  @override
  Widget build(BuildContext context) {
    final inQuiz = _step == 2 && _checkStarted && !_checkDone;
    final showNav =
        !inQuiz && _step != 4 && !(_step == 2 && !_checkStarted && !_checkDone);
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: DS.ink,
        title: Text(_title(), style: DS.heading),
        leading: _step > 0 && !inQuiz
            ? IconButton(
                tooltip: context.tr('action.back'),
                icon: const BackButtonIcon(),
                onPressed: () => _go(_step - 1),
              )
            : null,
      ),
      body: PastelBackground(
        child: SafeArea(
          child: SingleChildScrollView(
            padding: const EdgeInsets.fromLTRB(DS.s16, 4, DS.s16, DS.s24),
            child: Center(
              child: ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: DS.maxContent),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    StepHeader(step: _step, total: _steps),
                    if (_resumed)
                      Padding(
                        padding: const EdgeInsets.only(top: DS.s8),
                        child: Text(
                          context.tr('ob.resumed'),
                          style: DS.caption,
                        ),
                      ),
                    const SizedBox(height: DS.s16),
                    _body(),
                    const SizedBox(height: DS.s16),
                    if (showNav)
                      Row(
                        children: [
                          if (_step > 0)
                            TextButton(
                              onPressed: () => _go(_step - 1),
                              child: Text(
                                context.tr('action.back'),
                                style: const TextStyle(fontSize: 18),
                              ),
                            ),
                          const Spacer(),
                          AppButton(
                            label: context.tr('action.next'),
                            onPressed: _next,
                          ),
                        ],
                      ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class _PlanCard extends StatelessWidget {
  final PlanPreset preset;
  final int age;
  final bool selected;
  final VoidCallback onTap;
  const _PlanCard({
    required this.preset,
    required this.age,
    required this.selected,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final id = preset.id;
    return OptionCard(
      title: context.tr('ob.plan.$id'),
      subtitle:
          '${context.tr('ob.plan.${id}Desc')}\n${trArgs('ob.plan.perDay', {'n': preset.dailyCount})} · ${trArgs('ob.plan.minutes', {'m': preset.minutesPerDay(age)})} · ${context.tr('ob.plan.level.${preset.bias}')}',
      icon: switch (id) {
        'gentle' => Icons.spa_rounded,
        'focused' => Icons.center_focus_strong_rounded,
        _ => Icons.balance_rounded,
      },
      selected: selected,
      onTap: onTap,
    );
  }
}

class _CheckResult extends StatelessWidget {
  final ProfileDraft draft;
  final VoidCallback onContinue;
  const _CheckResult({required this.draft, required this.onContinue});

  @override
  Widget build(BuildContext context) {
    final strong = [
      for (final l in kLands)
        if ((draft.assessment[l.id] ?? 0) >= 1) l,
    ];
    final start = [
      for (final l in kLands)
        if ((draft.assessment[l.id] ?? 0) < 1) l,
    ];
    return Column(
      children: [
        const Mascot(size: 110),
        Text(
          trArgs('ob.check.done', {'name': draft.nickname.trim()}),
          style: const TextStyle(
            fontSize: 26,
            fontWeight: FontWeight.w900,
            color: RC.ink,
          ),
        ),
        const SizedBox(height: 12),
        if (strong.isNotEmpty)
          RCard(
            color: RC.mint,
            outline: RC.good,
            child: Align(
              alignment: AlignmentDirectional.centerStart,
              child: Text(
                trArgs('ob.check.strong', {
                  'list': strong
                      .map((l) => context.tr('land.${l.id}'))
                      .join(context.tr('list.sep')),
                }),
                style: const TextStyle(fontSize: 17, color: RC.ink),
              ),
            ),
          ),
        const SizedBox(height: 8),
        if (start.isNotEmpty)
          RCard(
            color: RC.yellow.withAlpha(120),
            outline: RC.star,
            child: Align(
              alignment: AlignmentDirectional.centerStart,
              child: Text(
                trArgs('ob.check.begin', {
                  'list': start
                      .map((l) => context.tr('land.${l.id}'))
                      .join(context.tr('list.sep')),
                }),
                style: const TextStyle(fontSize: 17, color: RC.ink),
              ),
            ),
          ),
        const SizedBox(height: 14),
        AppButton(
          label: context.tr('ob.check.showPlan'),
          onPressed: onContinue,
        ),
      ],
    );
  }
}
