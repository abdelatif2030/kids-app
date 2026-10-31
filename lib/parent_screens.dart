import 'online_gate.dart';
import 'app_info.dart';
import 'design/tokens.dart';
import 'journey/avatars.dart';
import 'journey/models.dart';
import 'media/engine_settings_screen.dart';
import 'parent/parent_widgets.dart';
import 'video_controls.dart';
import 'design/components.dart' show showToast;
import 'assistant/assistant_screen.dart';
import 'journey/repository.dart' show JourneyStore;
import 'offline/offline_ui.dart';
import 'design/layout.dart';

import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'dashboard_screen.dart';
import 'display_prefs.dart';
import 'l10n/app_locale.dart';
import 'l10n/strings.dart';
import 'journey/ui/audio_settings_screen.dart';
import 'journey/ui/home_tasks_screen.dart';
import 'journey/ui/report_screen.dart';
import 'studio/studio_screens.dart';
import 'journey/ui/admin_screen.dart';
import 'journey/ui/privacy_screen.dart';
import 'journey/ui/profile_forms.dart';
import 'notes_screen.dart';
import 'parent_settings.dart';
import 'permissions_screen.dart';
import 'plan_screen.dart';
import 'journey/ui/day_settings_screen.dart';
import 'print/printables_screen.dart';
import 'summary_screen.dart';
import 'teachers_screens.dart';
import 'family/family_entry.dart';
import 'firebase_config.dart';

/// Entry point from the child-facing screens: creates a PIN the first time,
/// otherwise asks for it, then opens the settings.
Future<void> openParentArea(BuildContext context) async {
  final settings = ParentSettings.instance;
  final hasPin = await settings.hasPin();
  if (!context.mounted) return;
  // With no PIN yet, a young child could create one and lock the parent out. A small grown-up question
  // first is only a speed bump for small children, not security: the PIN is the real protection.
  if (!hasPin && !await askParentQuestion(context)) return;
  if (!context.mounted) return;
  Navigator.push(
    context,
    MaterialPageRoute(
      builder: (_) => hasPin ? const PinEntryScreen() : const PinSetupScreen(),
    ),
  );
}

/// A multiplication question that small children cannot answer. True when answered correctly.
Future<bool> askParentQuestion(BuildContext context, {int? a, int? b}) async {
  final x = a ?? 6 + DateTime.now().second % 4; // 6..9
  final y = b ?? 7 + DateTime.now().millisecond % 3; // 7..9
  final ok = await showDialog<bool>(
    context: context,
    builder: (_) => _ParentQuestionDialog(a: x, b: y),
  );
  return ok == true;
}

class _ParentQuestionDialog extends StatefulWidget {
  final int a, b;
  const _ParentQuestionDialog({required this.a, required this.b});

  @override
  State<_ParentQuestionDialog> createState() => _ParentQuestionDialogState();
}

class _ParentQuestionDialogState extends State<_ParentQuestionDialog> {
  final _c = TextEditingController();
  bool _wrong = false;

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  void _check() {
    if (int.tryParse(_c.text.trim()) == widget.a * widget.b) {
      Navigator.pop(context, true);
    } else {
      setState(() => _wrong = true);
    }
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      scrollable: true,
      title: Text(tr2('سؤال للكبار', 'A question for grown-ups')),
      content: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Text(
            tr2(
              'لفتح إعدادات الوالدين: كم ناتج ${widget.a} × ${widget.b}؟',
              'To open the parent settings: what is ${widget.a} × ${widget.b}?',
            ),
          ),
          const SizedBox(height: 12),
          TextField(
            key: const ValueKey('parent_answer'),
            controller: _c,
            autofocus: true,
            keyboardType: TextInputType.number,
            inputFormatters: [FilteringTextInputFormatter.digitsOnly],
            decoration: InputDecoration(
              errorText: _wrong
                  ? tr2('إجابة غير صحيحة', 'That is not right')
                  : null,
            ),
            onSubmitted: (_) => _check(),
          ),
        ],
      ),
      actions: [
        TextButton(
          onPressed: () => Navigator.pop(context, false),
          child: Text(tr2('إلغاء', 'Cancel')),
        ),
        FilledButton(onPressed: _check, child: Text(tr2('متابعة', 'Continue'))),
      ],
    );
  }
}

Widget _pinField(
  TextEditingController controller,
  String label, {
  String? error,
}) {
  return TextField(
    controller: controller,
    autofocus: true,
    obscureText: true,
    keyboardType: TextInputType.number,
    maxLength: 4,
    textAlign: TextAlign.center,
    style: const TextStyle(fontSize: 32, letterSpacing: 12),
    inputFormatters: [FilteringTextInputFormatter.digitsOnly],
    decoration: InputDecoration(labelText: label, errorText: error),
  );
}

class PinSetupScreen extends StatefulWidget {
  /// True when shown at the end of onboarding: after saving, go back instead of
  /// opening the settings.
  final bool popWhenDone;
  const PinSetupScreen({super.key, this.popWhenDone = false});

  @override
  State<PinSetupScreen> createState() => _PinSetupScreenState();
}

class _PinSetupScreenState extends State<PinSetupScreen> {
  final _pin = TextEditingController();
  final _confirm = TextEditingController();
  String? _error;

  @override
  void dispose() {
    _pin.dispose();
    _confirm.dispose();
    super.dispose();
  }

  Future<void> _save() async {
    if (_pin.text.length != 4) {
      setState(() => _error = loc('يجب أن يتكون الرمز من 4 أرقام'));
      return;
    }
    if (_pin.text != _confirm.text) {
      setState(() => _error = loc('الرمزان غير متطابقين'));
      return;
    }
    await ParentSettings.instance.setPin(_pin.text);
    if (!mounted) return;
    if (widget.popWhenDone) {
      Navigator.pop(context);
      return;
    }
    Navigator.pushReplacement(
      context,
      MaterialPageRoute(builder: (_) => const SettingsScreen()),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(loc('إنشاء رمز سري للوالدين')),
        automaticallyImplyLeading: !widget.popWhenDone,
      ),
      body: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          children: [
            if (widget.popWhenDone)
              Padding(
                padding: EdgeInsets.only(bottom: 12),
                child: Text(
                  loc(
                    'قبل أن يبدأ طفلك، أنشئ رمزاً سرياً من 4 أرقام. بدونه لا يمكن لأحد الدخول إلى إعدادات الوالدين أو الخروج من وضع الطفل.',
                  ),
                  style: TextStyle(fontSize: 16),
                ),
              ),
            _pinField(_pin, loc('الرمز الجديد')),
            TextField(
              controller: _confirm,
              obscureText: true,
              keyboardType: TextInputType.number,
              maxLength: 4,
              textAlign: TextAlign.center,
              style: const TextStyle(fontSize: 32, letterSpacing: 12),
              inputFormatters: [FilteringTextInputFormatter.digitsOnly],
              decoration: InputDecoration(
                labelText: loc('أعد إدخال الرمز'),
                errorText: _error,
              ),
            ),
            const SizedBox(height: 16),
            FilledButton(onPressed: _save, child: Text(loc('حفظ الرمز'))),
          ],
        ),
      ),
    );
  }
}

class PinEntryScreen extends StatefulWidget {
  /// When true, pops with `true` on a correct PIN instead of opening settings.
  final bool returnResult;
  const PinEntryScreen({super.key, this.returnResult = false});

  @override
  State<PinEntryScreen> createState() => _PinEntryScreenState();
}

class _PinEntryScreenState extends State<PinEntryScreen> {
  final _pin = TextEditingController();
  String? _error;
  Timer? _ticker;

  @override
  void initState() {
    super.initState();
    _refreshLock();
  }

  @override
  void dispose() {
    _ticker?.cancel();
    _pin.dispose();
    super.dispose();
  }

  Future<void> _refreshLock() async {
    final left = await ParentSettings.instance.lockedSecondsLeft();
    if (!mounted) return;
    setState(
      () => _error = left > 0
          ? tr2(
              'محاولات كثيرة. انتظر $left ثانية.',
              'Too many attempts. Wait $left seconds.',
            )
          : null,
    );
    _ticker?.cancel();
    if (left > 0) {
      _ticker = Timer(const Duration(seconds: 1), _refreshLock);
    }
  }

  Future<void> _submit() async {
    if (_pin.text.length != 4) return;
    final ok = await ParentSettings.instance.verifyPin(_pin.text);
    if (!mounted) return;
    if (ok && widget.returnResult) {
      Navigator.pop(context, true);
    } else if (ok) {
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (_) => const SettingsScreen()),
      );
    } else {
      _pin.clear();
      await _refreshLock();
      if (mounted && _error == null) setState(() => _error = loc('رمز خاطئ'));
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(loc('رمز الوالدين'))),
      body: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          children: [
            _pinField(_pin, loc('أدخل الرمز'), error: _error),
            const SizedBox(height: 16),
            FilledButton(onPressed: _submit, child: Text(loc('فتح'))),
          ],
        ),
      ),
    );
  }
}

class SettingsScreen extends StatefulWidget {
  const SettingsScreen({super.key});

  @override
  State<SettingsScreen> createState() => _SettingsScreenState();
}

class _SettingsScreenState extends State<SettingsScreen> {
  final _settings = ParentSettings.instance;
  bool _loaded = false;
  int _limit = 60;
  bool _quietOn = false;
  TimeOfDay _quietStart = const TimeOfDay(hour: 19, minute: 0);
  TimeOfDay _quietEnd = const TimeOfDay(hour: 7, minute: 0);

  static const _limits = [15, 30, 45, 60, 90, 120];

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final limit = await _settings.dailyLimitMinutes();
    final on = await _settings.quietEnabled();
    final start = await _settings.quietStart();
    final end = await _settings.quietEnd();
    if (!mounted) return;
    setState(() {
      _limit = _limits.contains(limit) ? limit : 60;
      _quietOn = on;
      _quietStart = start;
      _quietEnd = end;
      _loaded = true;
    });
  }

  Future<void> _pickTime(TimeOfDay initial, bool isStart) async {
    final picked = await showTimePicker(context: context, initialTime: initial);
    if (picked == null) return;
    if (isStart) {
      await _settings.setQuietStart(picked);
    } else {
      await _settings.setQuietEnd(picked);
    }
    setState(() => isStart ? _quietStart = picked : _quietEnd = picked);
  }

  /// A child's card opens the actions for THAT child: their progress, and their profile and avatar.
  void _childActions(ChildProfile c) {
    showModalBottomSheet<void>(
      context: context,
      showDragHandle: true,
      builder: (sheet) => SafeArea(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            ListTile(
              leading: ChildAvatar(child: c, size: 48),
              title: Text(c.nickname, style: DS.heading),
              subtitle: Text(tr2('${c.age} سنوات', '${c.age} years old')),
            ),
            ListTile(
              key: const ValueKey('child_sheet_progress'),
              leading: const Icon(Icons.insights_rounded, color: DS.primary),
              title: Text(
                tr2('تقدم ${c.nickname}', "${c.nickname}'s progress"),
              ),
              onTap: () {
                Navigator.pop(sheet);
                _go(DashboardScreen(childId: c.id));
              },
            ),
            ListTile(
              key: const ValueKey('child_sheet_edit'),
              leading: const Icon(Icons.edit_rounded, color: DS.primary),
              title: Text(
                tr2('تعديل الملف والصورة', 'Edit profile and avatar'),
              ),
              onTap: () {
                Navigator.pop(sheet);
                _go(ChildEditScreen(child: c));
              },
            ),
          ],
        ),
      ),
    );
  }

  void _go(Widget screen) =>
      Navigator.push(context, MaterialPageRoute(builder: (_) => screen));

  void _openAssistant() {
    final c =
        JourneyStore.instance.active ??
        (JourneyStore.instance.profiles.isEmpty
            ? null
            : JourneyStore.instance.profiles.first);
    if (c == null) {
      showToast(context, tr2('أضف طفلاً أولاً.', 'Add a child first.'));
      return;
    }
    _go(PlanAssistantScreen(child: c));
  }

  @override
  Widget build(BuildContext context) {
    const purple = DS.primary;
    const teal = Color(0xFF14958F);
    const pink = Color(0xFFD6457A);
    const amber = Color(0xFFD98A0B);
    const blue = Color(0xFF2B6FD6);
    return Scaffold(
      backgroundColor: DS.cream,
      appBar: AppBar(
        title: Text(loc('إعدادات الوالدين')),
        backgroundColor: const Color(0xFF2E1A6B),
        foregroundColor: Colors.white,
        elevation: 0,
      ),
      body: !_loaded
          ? const Center(child: CircularProgressIndicator())
          : CenteredList(
              padding: EdgeInsets.zero,
              children: [
                ParentHeader(onChild: _childActions),
                Padding(
                  padding: const EdgeInsets.fromLTRB(16, 16, 16, 0),
                  child: Row(
                    children: [
                      Expanded(
                        child: ParentQuickTile(
                          keyName: 'progress',
                          icon: Icons.insights_rounded,
                          label: loc('لوحة متابعة الطفل'),
                          colors: const [Color(0xFF8A5CFF), DS.primary],
                          onTap: () => _go(const DashboardScreen()),
                        ),
                      ),
                      const SizedBox(width: 10),
                      Expanded(
                        child: ParentQuickTile(
                          keyName: 'children',
                          icon: Icons.child_care_rounded,
                          label: loc('الأطفال'),
                          colors: const [Color(0xFF2EC4B6), teal],
                          onTap: () => _go(const ChildrenScreen()),
                        ),
                      ),
                      const SizedBox(width: 10),
                      Expanded(
                        child: ParentQuickTile(
                          keyName: 'family',
                          icon: Icons.forum_rounded,
                          label: lastOnlineGate.open ? tr2('عائلتي: المحادثات', 'Family chat') : tr2('المحادثات: إصدار لاحق', 'Chat: later version'),
                          colors: const [Color(0xFFFF8FB6), pink],
                          onTap: () => openFamily(
                            context,
                            asRelative: false,
                            auth: teacherRepository,
                            family: familyRepository,
                          ),
                        ),
                      ),
                      const SizedBox(width: 10),
                      Expanded(
                        child: ParentQuickTile(
                          keyName: 'privacy',
                          icon: Icons.privacy_tip_outlined,
                          label: loc('الخصوصية والبيانات'),
                          colors: const [Color(0xFF5BA8FF), blue],
                          onTap: () => _go(const PrivacyScreen()),
                        ),
                      ),
                    ],
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(16, 0, 16, 28),
                  child: Column(
                    children: [
                      // A. Progress and learning
                      ParentGroup(
                        title: tr2('التقدم والتعلّم', 'Progress and learning'),
                        icon: Icons.insights_rounded,
                        color: purple,
                        children: [
                          ParentRow(
                            icon: Icons.insights_rounded,
                            color: purple,
                            title: loc('لوحة متابعة الطفل'),
                            subtitle: loc('المهارات والوقت وتقرير الأسبوع'),
                            onTap: () => _go(const DashboardScreen()),
                          ),
                          ParentRow(
                            icon: Icons.checklist_rounded,
                            color: purple,
                            title: loc('الخطة الأسبوعية والمتابعة'),
                            onTap: () => _go(const PlanScreen()),
                          ),
                          ParentRow(
                            icon: Icons.bar_chart,
                            color: purple,
                            title: loc('ملخص المشاهدة'),
                            onTap: () => _go(const WatchSummaryScreen()),
                          ),
                          ParentRow(
                            key: const ValueKey('open_assistant'),
                            icon: Icons.auto_awesome_rounded,
                            color: purple,
                            title: tr2(
                              'مساعد رحلتي: خطة كاملة',
                              'Rehlaty assistant: a full plan',
                            ),
                            subtitle: tr2(
                              'احكِ عن طفلك واحصل على ثلاث خطط مع فيديوهات',
                              'Tell us about your child and get three plans with videos',
                            ),
                            onTap: _openAssistant,
                          ),
                          ParentRow(
                            icon: Icons.home_rounded,
                            color: purple,
                            title: loc('أنشطة البيت'),
                            subtitle: loc(
                              'مهام حقيقية بعد الأنشطة: أكّد أن الطفل فعلها',
                            ),
                            onTap: () => _go(const ParentHomeTasksScreen()),
                          ),
                          ParentRow(
                            icon: Icons.edit_note_rounded,
                            color: purple,
                            title: loc('ملاحظات'),
                            onTap: () => _go(const NotesScreen()),
                          ),
                          ParentRow(
                            icon: Icons.print_rounded,
                            color: purple,
                            title: loc('أوراق للطباعة'),
                            subtitle: loc(
                              'أوراق تمرين جاهزة للطباعة: تتبّع الحروف، عدّ، أشكال، قراءة',
                            ),
                            onTap: () => _go(const PrintablesScreen()),
                          ),
                          ParentRow(
                            icon: Icons.photo_library_rounded,
                            color: purple,
                            title: loc('معرض العائلة'),
                            subtitle: loc(
                              'أعمال الأطفال المحفوظة على الجهاز، ويمكنك حذفها',
                            ),
                            onTap: () => _go(const ParentGalleryScreen()),
                          ),
                        ],
                      ),
                      // C. Child management
                      ParentGroup(
                        title: tr2('إدارة الأطفال', 'Children'),
                        icon: Icons.child_care_rounded,
                        color: teal,
                        children: [
                          ParentRow(
                            icon: Icons.child_care_rounded,
                            color: teal,
                            title: loc('الأطفال'),
                            subtitle: loc(
                              'إضافة وتعديل وحذف ملفات الأطفال وخططهم',
                            ),
                            onTap: () => _go(const ChildrenScreen()),
                          ),
                          ParentRow(
                            icon: Icons.today_rounded,
                            color: teal,
                            title: tr2('محطات «يومي»', 'My day stations'),
                            subtitle: tr2(
                              'اختر ما يظهر لطفلك كل يوم',
                              'Choose what your child sees each day',
                            ),
                            onTap: () => _go(const DaySettingsScreen()),
                          ),
                        ],
                      ),
                      // D. Safety and privacy
                      ParentGroup(
                        title: tr2('الأمان والخصوصية', 'Safety and privacy'),
                        icon: Icons.shield_rounded,
                        color: pink,
                        children: [
                          ListTile(
                            minTileHeight: 60,
                            title: Text(
                              loc('الحد اليومي للوقت'),
                              style: const TextStyle(
                                fontWeight: FontWeight.w800,
                              ),
                            ),
                            trailing: DropdownButton<int>(
                              value: _limit,
                              items: [
                                for (final m in _limits)
                                  DropdownMenuItem(
                                    value: m,
                                    child: Text(tr2('$m دقيقة', '$m minutes')),
                                  ),
                              ],
                              onChanged: (m) async {
                                if (m == null) return;
                                await _settings.setDailyLimitMinutes(m);
                                setState(() => _limit = m);
                                if (context.mounted) {
                                  showToast(
                                    context,
                                    tr2(
                                      'تم حفظ الحد اليومي',
                                      'Daily limit saved',
                                    ),
                                  );
                                }
                              },
                            ),
                          ),
                          SwitchListTile(
                            title: Text(
                              loc('ساعات الهدوء'),
                              style: const TextStyle(
                                fontWeight: FontWeight.w800,
                              ),
                            ),
                            subtitle: Text(
                              loc('لن يبدأ وضع الطفل خلال هذه الساعات'),
                            ),
                            value: _quietOn,
                            onChanged: (v) async {
                              await _settings.setQuietEnabled(v);
                              setState(() => _quietOn = v);
                              if (context.mounted) {
                                showToast(
                                  context,
                                  tr2(
                                    'تم حفظ ساعات الهدوء',
                                    'Quiet hours saved',
                                  ),
                                );
                              }
                            },
                          ),
                          ListTile(
                            enabled: _quietOn,
                            title: Text(loc('من')),
                            trailing: Text(_quietStart.format(context)),
                            onTap: () => _pickTime(_quietStart, true),
                          ),
                          ListTile(
                            enabled: _quietOn,
                            title: Text(loc('إلى')),
                            trailing: Text(_quietEnd.format(context)),
                            onTap: () => _pickTime(_quietEnd, false),
                          ),
                          ParentRow(
                            key: const ValueKey('family_chat_tile'),
                            icon: Icons.forum_rounded,
                            color: pink,
                            title: tr2('عائلتي: المحادثات', 'Family chat'),
                            subtitle: lastOnlineGate.open
                                ? tr2(
                                    'أقارب موافَق عليهم يراسلون طفلك، وتقرأ أنت كل شيء',
                                    'Approved relatives message your child; you can read everything',
                                  )
                                : tr2('ليس جزءاً من هذا الإصدار — يأتي لاحقاً', 'Not part of this version — planned for later'),
                            onTap: () => openFamily(
                              context,
                              asRelative: false,
                              auth: teacherRepository,
                              family: familyRepository,
                            ),
                          ),
                          ParentRow(
                            icon: Icons.school_rounded,
                            color: pink,
                            title: loc('المدرسون وحسابي'),
                            subtitle: lastOnlineGate.open
                                ? tr2('مدرسون يسجّلون بأنفسهم (لم يراجعهم التطبيق) وحجز حصص أونلاين', 'Teachers register themselves (the app has not vetted them); book online lessons')
                                : tr2('ليس جزءاً من هذا الإصدار — يأتي لاحقاً', 'Not part of this version — planned for later'),
                            onTap: () => _go(const TeachersEntryScreen()),
                          ),
                          ParentRow(
                            key: const ValueKey('video_review_tile'),
                            icon: Icons.video_library_rounded,
                            color: pink,
                            title: tr2('مكتبة الدروس والفيديوهات', 'Lesson library'),
                            subtitle: tr2('لا يرى طفلك أي فيديو قبل موافقتك عليه', 'Your child sees no video until you approve it'),
                            onTap: () => _go(const VideoReviewScreen()),
                          ),
                          ParentRow(
                            icon: Icons.privacy_tip_outlined,
                            color: pink,
                            title: loc('الخصوصية والبيانات'),
                            subtitle: loc('ما نحفظه، وحذف بيانات الأطفال'),
                            onTap: () => _go(const PrivacyScreen()),
                          ),
                          ParentRow(
                            key: const ValueKey('permissions_tile'),
                            icon: Icons.admin_panel_settings_outlined,
                            color: pink,
                            title: tr2('الأذونات', 'Permissions'),
                            subtitle: tr2(
                              'الميكروفون والكاميرا والملفات: لماذا ومتى',
                              'Microphone, camera and files: why and when',
                            ),
                            onTap: () => _go(const PermissionsScreen()),
                          ),
                          ParentRow(
                            icon: Icons.lock_reset,
                            color: pink,
                            title: loc('تغيير الرمز السري'),
                            onTap: () => Navigator.pushReplacement(
                              context,
                              MaterialPageRoute(
                                builder: (_) => const PinSetupScreen(),
                              ),
                            ),
                          ),
                          ParentRow(
                            icon: Icons.flag_rounded,
                            color: pink,
                            title: loc('الإبلاغ عن مشكلة أو محتوى'),
                            subtitle: loc(
                              'رسالة تنسخها وترسلها بنفسك، بدون بيانات الطفل',
                            ),
                            onTap: () => _go(const ReportProblemScreen()),
                          ),
                        ],
                      ),
                      // E. App settings
                      ParentGroup(
                        title: tr2('إعدادات التطبيق', 'App settings'),
                        icon: Icons.tune_rounded,
                        color: amber,
                        children: [
                          ListenableBuilder(
                            listenable: Listenable.merge([
                              DisplayPrefs.instance,
                              AppLocale.instance,
                            ]),
                            builder: (context, _) => Column(
                              children: [
                                ListTile(
                                  leading: const Icon(
                                    Icons.language_rounded,
                                    color: amber,
                                  ),
                                  title: Text(context.tr('lang.setting')),
                                  trailing: DropdownButton<String>(
                                    value: AppLocale.instance.code,
                                    items: [
                                      DropdownMenuItem(
                                        value: 'ar',
                                        child: Text(loc('العربية')),
                                      ),
                                      const DropdownMenuItem(
                                        value: 'en',
                                        child: Text('English'),
                                      ),
                                    ],
                                    onChanged: (v) async {
                                      if (v == null) return;
                                      await AppLocale.instance.set(v);
                                      if (context.mounted) {
                                        showToast(
                                          context,
                                          tr2('تم حفظ اللغة', 'Language saved'),
                                        );
                                      }
                                    },
                                  ),
                                ),
                                ListTile(
                                  leading: const Icon(
                                    Icons.text_fields_rounded,
                                    color: amber,
                                  ),
                                  title: Text(loc('حجم الخط')),
                                  trailing: DropdownButton<double>(
                                    value: DisplayPrefs.instance.textScale,
                                    items: [
                                      for (final e
                                          in DisplayPrefs.scales.entries)
                                        DropdownMenuItem(
                                          value: e.key,
                                          child: Text(e.value),
                                        ),
                                    ],
                                    onChanged: (v) async {
                                      if (v == null) return;
                                      await DisplayPrefs.instance.setTextScale(
                                        v,
                                      );
                                      if (context.mounted) {
                                        showToast(
                                          context,
                                          tr2(
                                            'تم حفظ حجم الخط',
                                            'Text size saved',
                                          ),
                                        );
                                      }
                                    },
                                  ),
                                ),
                                SwitchListTile(
                                  secondary: const Icon(
                                    Icons.animation_rounded,
                                    color: amber,
                                  ),
                                  title: Text(loc('تقليل الحركة')),
                                  subtitle: Text(
                                    loc(
                                      'يوقف الحركات والتأثيرات في شاشات الطفل',
                                    ),
                                  ),
                                  value: DisplayPrefs.instance.reduceMotion,
                                  onChanged: (v) async {
                                    await DisplayPrefs.instance.setReduceMotion(
                                      v,
                                    );
                                    if (context.mounted) {
                                      showToast(
                                        context,
                                        tr2('تم حفظ الإعداد', 'Setting saved'),
                                      );
                                    }
                                  },
                                ),
                              ],
                            ),
                          ),
                          ParentRow(
                            icon: Icons.graphic_eq_rounded,
                            color: amber,
                            title: loc('الصوت والتعلّم'),
                            subtitle: loc(
                              'القراءة بالصوت، صوت الطبيعة، ترتيب الحروف، وتصدير بيانات الطفل',
                            ),
                            onTap: () => _go(const AudioSettingsScreen()),
                          ),
                          ParentRow(
                            key: const ValueKey('engine_tile'),
                            icon: Icons.record_voice_over_rounded,
                            color: amber,
                            title: tr2('أصوات الشخصيات', 'Character voices'),
                            subtitle: tr2('آدم ونور والرفيق: تشغيل وإيقاف واختيار الصوت', 'Adam, Nour and the companion: on, off and voice choice'),
                            onTap: () => _go(const EngineSettingsScreen()),
                          ),
                          ParentRow(
                            icon: Icons.cloud_off_rounded,
                            color: amber,
                            title: tr2('العمل بلا إنترنت', 'Working offline'),
                            subtitle: tr2(
                              'ما يعمل وما يحتاج اتصالاً',
                              'What works and what needs a connection',
                            ),
                            onTap: () => _go(const OfflineGuideScreen()),
                          ),
                          ParentRow(
                            icon: Icons.dashboard_customize_rounded,
                            color: amber,
                            title: loc('إدارة المحتوى (تجريبي)'),
                            subtitle: loc('الأقسام والأسئلة والمكافآت والخطط'),
                            onTap: () => _go(const AdminScreen()),
                          ),
                          ParentRow(
                            key: const ValueKey('app_version_row'),
                            icon: Icons.info_outline_rounded,
                            color: amber,
                            title: tr2('إصدار التطبيق', 'App version'),
                            subtitle: kAppVersion,
                            onTap: () {},
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ],
            ),
    );
  }
}
