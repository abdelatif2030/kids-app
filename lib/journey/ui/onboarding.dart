import 'package:flutter/material.dart';

import '../../parent_screens.dart' show PinSetupScreen;
import '../../parent_settings.dart';

import '../content.dart';
import '../lands.dart';
import '../models.dart';
import '../recommender.dart';
import '../repository.dart';
import '../../ui.dart' show Mascot;
import 'kit.dart';
import 'profile_forms.dart';
import 'quiz_view.dart';

/// Parent-guided setup of a child profile in four steps:
/// 1. nickname and age, 2. goals and interests, 3. a quick skill check the
/// child answers, 4. a suggested learning plan the parent can edit.
/// Returns the new [ChildProfile] (already saved) when it pops.
class OnboardingFlow extends StatefulWidget {
  /// When no parent PIN exists yet, finishing asks the parent to create one,
  /// so a child can never open the parent area on a device without a gate.
  final bool askForPin;
  const OnboardingFlow({super.key, this.askForPin = true});

  @override
  State<OnboardingFlow> createState() => _OnboardingFlowState();
}

class _OnboardingFlowState extends State<OnboardingFlow> {
  final ProfileDraft _draft = ProfileDraft();
  int _step = 0;
  String? _error;
  List<(String, Question)>? _check;
  bool _checkDone = false;
  bool _saving = false;

  static const _titles = ['عن طفلك', 'الأهداف والاهتمامات', 'اختبار مهارات سريع', 'خطة التعلّم'];

  void _next() {
    if (_step == 0 && _draft.nickname.trim().isEmpty) {
      setState(() => _error = 'اكتب اسماً أو لقباً للطفل');
      return;
    }
    setState(() {
      _error = null;
      _step++;
      if (_step == 2) _check = assessmentQuestions(_draft.age);
      if (_step == 3) _applyPlan();
    });
  }

  void _applyPlan() {
    _draft.plan = planFromAssessment(_draft.assessment, _draft.goals.toList(), _draft.interests.toList());
  }

  void _skipCheck() {
    _draft.assessment = {};
    setState(() {
      _step = 3;
      _applyPlan();
    });
  }

  void _checkFinished(List<ItemResult> results) {
    final check = _check!;
    _draft.assessment = {
      for (var i = 0; i < check.length && i < results.length; i++) check[i].$1: results[i].ok ? 1.0 : 0.0,
    };
    setState(() {
      _checkDone = true;
      _applyPlan();
    });
  }

  Future<void> _finish() async {
    if (_saving) return;
    setState(() => _saving = true);
    final store = JourneyStore.instance;
    final profile = await store.addProfile(_draft.toProfile(store.newId()));
    await store.setActive(profile.id);
    final needPin = widget.askForPin && !await ParentSettings.instance.hasPin();
    if (needPin && mounted) {
      await Navigator.push(
        context,
        MaterialPageRoute(builder: (_) => const PinSetupScreen(popWhenDone: true)),
      );
    }
    if (mounted) Navigator.pop(context, profile);
  }

  Widget _body() {
    switch (_step) {
      case 0:
        return BasicsForm(draft: _draft, onChanged: () {}, section: 0);
      case 1:
        return BasicsForm(draft: _draft, onChanged: () {}, section: 1);
      case 2:
        if (_checkDone) return _CheckResult(draft: _draft, onContinue: _next);
        return Column(
          children: [
            const Text('ثلاثة دقائق لمعرفة مستوى طفلك. لا توجد إجابات خاطئة، نريد فقط أن نبدأ من المكان المناسب.',
                textAlign: TextAlign.center, style: TextStyle(fontSize: 16, color: RC.ink)),
            const SizedBox(height: 8),
            SizedBox(
              height: 640,
              child: QuizView(questions: [for (final e in _check!) e.$2], onFinished: _checkFinished),
            ),
          ],
        );
      default:
        return PlanEditor(draft: _draft, onChanged: () => setState(() {}));
    }
  }

  @override
  Widget build(BuildContext context) {
    final lastStep = _step == 3;
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: RC.ink,
        title: Text(_titles[_step],
            style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: RC.ink)),
      ),
      body: PastelBackground(
        child: SafeArea(
          child: SingleChildScrollView(
            padding: const EdgeInsets.fromLTRB(16, 4, 16, 24),
            child: Center(
              child: ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: 560),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        Flexible(flex: 2, child: Text('الخطوة ${_step + 1} من 4',
                            style: const TextStyle(fontWeight: FontWeight.bold, color: RC.ink))),
                        const SizedBox(width: 12),
                        Expanded(flex: 3, child: RProgress(value: (_step + 1) / 4, color: RC.pinkDeep)),
                      ],
                    ),
                    const SizedBox(height: 16),
                    _body(),
                    if (_error != null)
                      Padding(
                        padding: const EdgeInsets.only(top: 12),
                        child: Text(_error!, style: const TextStyle(color: Colors.red, fontSize: 16)),
                      ),
                    const SizedBox(height: 20),
                    if (_step != 2)
                      Row(
                        children: [
                          if (_step > 0)
                            TextButton(
                              onPressed: () => setState(() => _step--),
                              child: const Text('رجوع', style: TextStyle(fontSize: 18)),
                            ),
                          const Spacer(),
                          FilledButton(
                            onPressed: lastStep ? _finish : _next,
                            child: Text(lastStep ? 'ابدأ الرحلة' : 'التالي',
                                style: const TextStyle(fontSize: 20)),
                          ),
                        ],
                      )
                    else if (!_checkDone)
                      Center(
                        child: TextButton(
                          onPressed: _skipCheck,
                          child: const Text('تخطي الاختبار', style: TextStyle(fontSize: 16)),
                        ),
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

class _CheckResult extends StatelessWidget {
  final ProfileDraft draft;
  final VoidCallback onContinue;
  const _CheckResult({required this.draft, required this.onContinue});

  @override
  Widget build(BuildContext context) {
    final strong = [for (final l in kLands) if ((draft.assessment[l.id] ?? 0) >= 1) l];
    final start = [for (final l in kLands) if ((draft.assessment[l.id] ?? 0) < 1) l];
    return Column(
      children: [
        const Mascot(size: 110),
        Text('أحسنت يا ${draft.nickname.trim()}!',
            style: const TextStyle(fontSize: 26, fontWeight: FontWeight.w900, color: RC.ink)),
        const SizedBox(height: 12),
        if (strong.isNotEmpty)
          RCard(
            color: RC.mint,
            outline: RC.good,
            child: Align(
              alignment: AlignmentDirectional.centerStart,
              child: Text('يتقن: ${strong.map((l) => l.title).join('، ')}',
                  style: const TextStyle(fontSize: 17, color: RC.ink)),
            ),
          ),
        const SizedBox(height: 8),
        if (start.isNotEmpty)
          RCard(
            color: RC.yellow.withAlpha(120),
            outline: RC.star,
            child: Align(
              alignment: AlignmentDirectional.centerStart,
              child: Text('سنبدأ بـ: ${start.map((l) => l.title).join('، ')}',
                  style: const TextStyle(fontSize: 17, color: RC.ink)),
            ),
          ),
        const SizedBox(height: 14),
        FilledButton(onPressed: onContinue, child: const Text('عرض الخطة المقترحة', style: TextStyle(fontSize: 20))),
      ],
    );
  }
}
