import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../design/layout.dart';
import '../design/motion.dart';
import '../journey/models.dart';
import '../l10n/app_locale.dart';
import '../journey/repository.dart';
import '../journey/ui/kit.dart';
import '../l10n/strings.dart';
import '../main.dart' show Video, loadVideos;
import '../ui.dart' show Mascot;
import 'ai_advisor.dart';
import 'dictation.dart';
import 'planner.dart';

/// «مساعد رحلتي»: the parent knows the child best. A few taps and a short note (typed, or dictated with the phone
/// keyboard's own microphone button) become THREE complete plans to choose from, each with its reasons, weekly goals and
/// whitelisted video picks. Nothing leaves the device. It is a rule-based helper, not an AI model, and says so.
class PlanAssistantScreen extends StatefulWidget {
  final ChildProfile child;

  /// Tests inject the video list; the app reads the whitelist.
  final Future<List<Video>> Function()? loadVideosFn;

  /// Tests inject a transport; the app uses the owner's configured server (none until it is set up).
  final AiTransport? aiTransport;
  const PlanAssistantScreen({super.key, required this.child, this.loadVideosFn, this.aiTransport});

  @override
  State<PlanAssistantScreen> createState() => _PlanAssistantScreenState();
}

class _PlanAssistantScreenState extends State<PlanAssistantScreen> {
  final Set<String> _loves = {};
  final Set<String> _needs = {};
  final Set<String> _traits = {};
  int _minutes = 20;
  final _note = TextEditingController();
  List<LearningPlan>? _plans;
  String? _applied;
  bool _busy = false;

  // Optional AI suggestions (off by default; see ai_advisor.dart).
  late final AiTransport _transport = widget.aiTransport ?? HttpAiTransport();
  bool _aiOn = false;
  String? _aiMessage;

  @override
  void initState() {
    super.initState();
    AiConsent.isOn().then((v) {
      if (mounted) setState(() => _aiOn = v);
    });
  }

  Future<void> _toggleAi(bool v) async {
    if (!v) {
      await AiConsent.set(false);
      if (mounted) setState(() => _aiOn = false);
      return;
    }
    final ok = await showDialog<bool>(
      context: context,
      builder: (c) => AlertDialog(
        key: const ValueKey('ai_consent'),
        title: Text(tr2('اقتراحات الذكاء الاصطناعي', 'AI suggestions')),
        content: SingleChildScrollView(
          child: Text(tr2(
            'عند التفعيل يُرسل إلى خدمة الذكاء الاصطناعي فقط: الفئة العمرية (مثل 5-6)، المجالات التي اخترتَها، الدقائق اليومية، وملاحظتك بعد حذف البريد الإلكتروني والروابط والأرقام الطويلة واسم الطفل.\n\nلا يُرسل أبداً: اسم الطفل أو لقبه، الصور، الصوت، التقدّم، أو أي بيانات عن العائلة أو الحساب.\n\nلن يظهر أي اقتراح قبل مراجعته مقابل محتوى التطبيق الحقيقي، ويمكنك الإيقاف في أي وقت.',
            'When on, only this goes to the AI service: the age group (like 5-6), the areas you chose, the daily minutes, and your note after e-mails, links, long numbers and the child\'s name are removed.\n\nNever sent: the child\'s name or nickname, photos, voice, progress, or any family or account data.\n\nNo suggestion is shown before it is checked against the app\'s real content, and you can turn this off at any time.',
          )),
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(c, false), child: Text(tr2('لا', 'No'))),
          FilledButton(key: const ValueKey('ai_agree'), onPressed: () => Navigator.pop(c, true), child: Text(tr2('أوافق وأفعّل', 'I agree, turn on'))),
        ],
      ),
    );
    if (ok != true) return;
    await AiConsent.set(true);
    if (mounted) setState(() => _aiOn = true);
  }

  // Dictation (on the device only). `_base` is the note as it was when listening started; the words heard are added after it.
  final Dictation _dictation = newDictation();
  bool _listening = false;
  String? _dictationMessage;
  String _base = '';

  @override
  void dispose() {
    _dictation.stop();
    _note.dispose();
    super.dispose();
  }

  Future<void> _toggleDictation() async {
    if (_listening) {
      await _dictation.stop();
      if (mounted) setState(() => _listening = false);
      return;
    }
    _base = _note.text;
    setState(() {
      _listening = true;
      _dictationMessage = null;
    });
    await _dictation.start(
      lang: AppLocale.instance.code == 'ar' ? 'ar' : 'en',
      onText: (text, done) {
        if (!mounted) return;
        final joined = _base.isEmpty ? text : '${_base.trimRight()} $text';
        _note.value = TextEditingValue(text: joined, selection: TextSelection.collapsed(offset: joined.length));
        _plans = null;
        if (done) _base = joined;
      },
      onProblem: (m) {
        if (mounted) setState(() => _dictationMessage = m);
      },
      onStopped: () {
        if (mounted) setState(() => _listening = false);
      },
    );
  }

  ParentIntake get _intake => ParentIntake(
        age: widget.child.age,
        nickname: widget.child.nickname,
        loves: _loves,
        needsHelp: _needs,
        traits: _traits,
        minutesPerDay: _minutes,
        learnLang: widget.child.learnLang,
        note: _note.text,
      );

  Future<void> _prepare() async {
    setState(() => _busy = true);
    List<Video> videos;
    try {
      videos = await (widget.loadVideosFn ?? loadVideos)();
    } catch (_) {
      videos = const []; // plans still work without the video picks
    }
    if (!mounted) return;
    var plans = buildPlans(_intake, videos);
    String? message;
    if (_aiOn) {
      try {
        plans = [...await suggestWithAi(_intake, videos, transport: _transport, enabled: true), ...plans];
      } on AiException catch (e) {
        message = aiProblemText(e.problem);
      }
      if (!mounted) return;
    }
    setState(() {
      _plans = plans;
      _aiMessage = message;
      _busy = false;
      _applied = null;
    });
  }

  Future<void> _apply(LearningPlan plan) async {
    final store = JourneyStore.instance;
    final current = store.profileById(widget.child.id) ?? widget.child;
    await store.updateProfile(applyPlanToProfile(current, plan));
    final prefs = await SharedPreferences.getInstance();
    for (final e in plan.weeklyTargets.entries) {
      await prefs.setInt('plan_target_${e.key}', e.value);
    }
    if (mounted) setState(() => _applied = plan.id);
  }

  Widget _chips(String title, Set<String> chosen, List<String> ids, {Set<String> exclude = const {}, String Function(String)? label}) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(padding: const EdgeInsets.only(top: 12, bottom: 6), child: Text(title, style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 16))),
        Wrap(
          spacing: 8,
          runSpacing: 8,
          children: [
            for (final id in ids)
              FilterChip(
                key: ValueKey('${title.hashCode}_$id'),
                label: Text((label ?? landTitle)(id)),
                selected: chosen.contains(id),
                onSelected: exclude.contains(id)
                    ? null
                    : (v) => setState(() {
                          v ? chosen.add(id) : chosen.remove(id);
                          _plans = null;
                        }),
              ),
          ],
        ),
      ],
    );
  }

  String _traitLabel(String t) => switch (t) {
        'energetic' => tr2('نشيط', 'Energetic'),
        'shy' => tr2('خجول', 'Shy'),
        'distracted' => tr2('يشرد بسرعة', 'Loses focus quickly'),
        'curious' => tr2('فضولي', 'Curious'),
        _ => t,
      };

  @override
  Widget build(BuildContext context) {
    final pool = landsForAge(widget.child.age, widget.child.learnLang);
    final name = widget.child.nickname;
    return Scaffold(
      appBar: AppBar(title: Text(tr2('مساعد رحلتي', 'Rehlaty assistant'))),
      body: CenteredList(
        padding: const EdgeInsets.all(16),
        children: [
          Appear(
            child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
              const ExcludeSemantics(child: Mascot(size: 72)),
              const SizedBox(width: 12),
              Expanded(
                child: RCard(
                  child: Text(
                    tr2('أهلاً! أنت أعرف الناس بـ$name. احكِ لي عنه بضع كلمات وسأجهّز لك ثلاث خطط كاملة، وأنت تختار الأنسب.', 'Hello! You know $name best. Tell me a little and I will prepare three complete plans for you to choose from.'),
                    style: const TextStyle(fontSize: 16),
                  ),
                ),
              ),
            ]),
          ),
          _chips(tr2('ماذا يحب $name؟', 'What does $name love?'), _loves, pool, exclude: _needs),
          _chips(tr2('أين يحتاج مساعدة؟', 'Where does $name need help?'), _needs, pool, exclude: _loves),
          _chips(tr2('كيف طبعه؟', 'What is $name like?'), _traits, const ['energetic', 'shy', 'distracted', 'curious'], label: _traitLabel),
          Padding(padding: const EdgeInsets.only(top: 12, bottom: 6), child: Text(tr2('كم دقيقة في اليوم؟', 'How many minutes a day?'), style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 16))),
          SegmentedButton<int>(
            key: const ValueKey('minutes'),
            segments: [for (final m in const [10, 20, 30, 40]) ButtonSegment(value: m, label: Text('$m'))],
            selected: {_minutes},
            onSelectionChanged: (s) => setState(() {
              _minutes = s.first;
              _plans = null;
            }),
          ),
          Padding(padding: const EdgeInsets.only(top: 16, bottom: 6), child: Text(tr2('أضف ملاحظة بكلماتك', 'Add a note in your own words'), style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 16))),
          TextField(
            key: const ValueKey('note'),
            controller: _note,
            minLines: 3,
            maxLines: 6,
            maxLength: 600,
            onChanged: (_) => _plans = null,
            decoration: InputDecoration(
              hintText: tr2('مثلاً: يحب الحيوانات والرسم، ويجد الحروف صعبة، ويشرد بسرعة.', 'For example: loves animals and drawing, finds letters hard, loses focus quickly.'),
              helperText: tr2('يمكنك الكتابة، أو استخدام زر الميكروفون في لوحة مفاتيح هاتفك للإملاء. الإملاء يتولاه هاتفك لا التطبيق.', 'Type, or use the microphone button on your phone\'s keyboard to dictate. Dictation is handled by your phone, not this app.'),
              helperMaxLines: 3,
              border: const OutlineInputBorder(),
            ),
          ),
          Row(children: [
            IconButton.filled(
              key: const ValueKey('dictate'),
              tooltip: _listening ? tr2('إيقاف الإملاء', 'Stop dictating') : tr2('قل ملاحظتك', 'Say your note'),
              style: IconButton.styleFrom(backgroundColor: _listening ? const Color(0xFFE5484D) : null, minimumSize: const Size(52, 52)),
              onPressed: _toggleDictation,
              icon: Icon(_listening ? Icons.stop_rounded : Icons.mic_rounded),
            ),
            const SizedBox(width: 10),
            Expanded(
              child: Text(
                _dictationMessage ??
                    (_listening
                        ? tr2('أستمع الآن… التعرّف على الكلام يتم على هاتفك فقط ولا يُحفظ صوت.', 'Listening… recognition happens on your phone only and no audio is kept.')
                        : tr2('أو اضغط الميكروفون وتكلّم. يعمل على الهاتف فقط ودون إنترنت.', 'Or press the microphone and speak. Phone only, and works without internet.')),
                key: const ValueKey('dictation_status'),
                style: const TextStyle(fontSize: 13),
              ),
            ),
          ]),
          const SizedBox(height: 12),
          FilledButton.icon(
            key: const ValueKey('prepare'),
            onPressed: _busy ? null : _prepare,
            icon: _busy ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2)) : const Icon(Icons.auto_awesome_rounded),
            label: Text(tr2('جهّز لي الخطط', 'Prepare the plans')),
          ),
          SwitchListTile(
            key: const ValueKey('ai_switch'),
            contentPadding: EdgeInsets.zero,
            secondary: const Icon(Icons.psychology_alt_rounded),
            title: Text(tr2('اقتراحات الذكاء الاصطناعي (اختياري)', 'AI suggestions (optional)')),
            subtitle: Text(_transport.configured
                ? tr2('مغلقة افتراضياً. عند التفعيل تُرسل ملخصاً بلا أسماء، بعد موافقتك.', 'Off by default. When on, it sends a summary without names, after your agreement.')
                : tr2('غير مجهّزة بعد: تحتاج خدمة يجهّزها مالك التطبيق.', 'Not set up yet: it needs a service the app owner sets up.')),
            value: _aiOn,
            onChanged: _transport.configured ? _toggleAi : null,
          ),
          if (_aiMessage != null) Text(_aiMessage!, key: const ValueKey('ai_message'), style: const TextStyle(fontSize: 13)),
          const SizedBox(height: 6),
          Text(
            tr2('ما تكتبه يبقى على هذا الجهاز ما لم تفعّل اقتراحات الذكاء الاصطناعي. الخطط الأساسية بقواعد بسيطة وليست نموذج ذكاء اصطناعي، فراجع أي خطة قبل اعتمادها.', 'What you write stays on this device unless you turn on AI suggestions. The basic plans use simple rules, not an AI model, so review any plan before you use it.'),
            style: const TextStyle(fontSize: 13),
          ),
          if (_plans != null) ...[
            const SizedBox(height: 16),
            Semantics(header: true, child: Text(tr2('الخطط المقترحة', 'Suggested plans'), style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w900))),
            for (final (i, p) in _plans!.indexed)
              Appear(index: i, child: _PlanCard(plan: p, applied: _applied == p.id, onApply: () => _apply(p))),
          ],
        ],
      ),
    );
  }
}

class _PlanCard extends StatelessWidget {
  final LearningPlan plan;
  final bool applied;
  final VoidCallback onApply;
  const _PlanCard({required this.plan, required this.applied, required this.onApply});

  @override
  Widget build(BuildContext context) {
    return Card(
      key: ValueKey('plan_${plan.id}'),
      margin: const EdgeInsets.only(top: 12),
      child: Padding(
        padding: const EdgeInsets.all(14),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            if (plan.fromAi) Text(tr2('اقتراح من الذكاء الاصطناعي، تمت مراجعته مقابل محتوى التطبيق', 'AI suggestion, checked against the app\'s content'), style: const TextStyle(fontSize: 12)),
            Text(plan.title, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w900)),
            const SizedBox(height: 4),
            Text(plan.summary),
            const SizedBox(height: 8),
            for (final r in plan.reasons) Padding(padding: const EdgeInsets.only(bottom: 4), child: Text('• $r', style: const TextStyle(fontSize: 14))),
            const SizedBox(height: 4),
            Text('${tr2('الترتيب', 'Order')}: ${plan.lands.take(5).map(landTitle).join(' ← ')}', style: const TextStyle(fontWeight: FontWeight.w700)),
            Text(tr2('${plan.dailyCount} أنشطة يومياً · ${plan.minutesPerDay} دقيقة تقريباً', '${plan.dailyCount} activities a day · about ${plan.minutesPerDay} minutes')),
            if (plan.videos.isNotEmpty) ...[
              const SizedBox(height: 8),
              Text(tr2('فيديوهات مقترحة (من القائمة المراجَعة)', 'Suggested videos (from the reviewed list)'), style: const TextStyle(fontWeight: FontWeight.w700)),
              for (final v in plan.videos) Text('▶ ${v.title}', maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 14)),
            ],
            const SizedBox(height: 10),
            applied
                ? Row(children: [
                    const Icon(Icons.check_circle_rounded, color: Color(0xFF2E9E5B)),
                    const SizedBox(width: 8),
                    Expanded(child: Text(tr2('تم تطبيق هذه الخطة. يمكنك تغييرها لاحقاً من الإعدادات.', 'This plan is now in use. You can change it later in the settings.'), key: const ValueKey('applied'))),
                  ])
                : FilledButton(key: ValueKey('use_${plan.id}'), onPressed: onApply, child: Text(tr2('استخدم هذه الخطة', 'Use this plan'))),
          ],
        ),
      ),
    );
  }
}
