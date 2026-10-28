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
import 'plan_screen.dart';
import 'summary_screen.dart';
import 'teachers_screens.dart';

/// Entry point from the child-facing screens: creates a PIN the first time,
/// otherwise asks for it, then opens the settings.
Future<void> openParentArea(BuildContext context) async {
  final settings = ParentSettings.instance;
  final hasPin = await settings.hasPin();
  if (!context.mounted) return;
  Navigator.push(
    context,
    MaterialPageRoute(
      builder: (_) => hasPin ? const PinEntryScreen() : const PinSetupScreen(),
    ),
  );
}

Widget _pinField(TextEditingController controller, String label, {String? error}) {
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
      appBar: AppBar(title: Text(loc('إنشاء رمز سري للوالدين')), automaticallyImplyLeading: !widget.popWhenDone),
      body: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          children: [
            if (widget.popWhenDone)
              Padding(
                padding: EdgeInsets.only(bottom: 12),
                child: Text(
                  loc('قبل أن يبدأ طفلك، أنشئ رمزاً سرياً من 4 أرقام. بدونه لا يمكن لأحد الدخول إلى إعدادات الوالدين أو الخروج من وضع الطفل.'),
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
              decoration: InputDecoration(labelText: loc('أعد إدخال الرمز'), errorText: _error),
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
    setState(() => _error = left > 0 ? tr2('محاولات كثيرة. انتظر $left ثانية.', 'Too many attempts. Wait $left seconds.') : null);
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

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(loc('إعدادات الوالدين'))),
      body: !_loaded
          ? const Center(child: CircularProgressIndicator())
          : ListView(
              children: [
                ListTile(
                  leading: const Icon(Icons.child_care_rounded),
                  title: Text(loc('الأطفال')),
                  subtitle: Text(loc('إضافة وتعديل وحذف ملفات الأطفال وخططهم')),
                  onTap: () => Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => const ChildrenScreen()),
                  ),
                ),
                ListTile(
                  leading: const Icon(Icons.insights_rounded),
                  title: Text(loc('لوحة متابعة الطفل')),
                  subtitle: Text(loc('المهارات والوقت وتقرير الأسبوع')),
                  onTap: () => Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => const DashboardScreen()),
                  ),
                ),
                ListTile(
                  leading: const Icon(Icons.flag_rounded),
                  title: Text(loc('الإبلاغ عن مشكلة أو محتوى')),
                  subtitle: Text(loc('رسالة تنسخها وترسلها بنفسك، بدون بيانات الطفل')),
                  onTap: () => Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => const ReportProblemScreen()),
                  ),
                ),
                ListTile(
                  leading: const Icon(Icons.graphic_eq_rounded),
                  title: Text(loc('الصوت والتعلّم')),
                  subtitle: Text(loc('القراءة بالصوت، صوت الطبيعة، ترتيب الحروف، وتصدير بيانات الطفل')),
                  onTap: () => Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => const AudioSettingsScreen()),
                  ),
                ),
                ListTile(
                  leading: const Icon(Icons.photo_library_rounded),
                  title: Text(loc('معرض العائلة')),
                  subtitle: Text(loc('أعمال الأطفال المحفوظة على الجهاز، ويمكنك حذفها')),
                  onTap: () => Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => const ParentGalleryScreen()),
                  ),
                ),
                ListTile(
                  leading: const Icon(Icons.home_rounded),
                  title: Text(loc('أنشطة البيت')),
                  subtitle: Text(loc('مهام حقيقية بعد الأنشطة: أكّد أن الطفل فعلها')),
                  onTap: () => Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => const ParentHomeTasksScreen()),
                  ),
                ),
                const Divider(),
                ListenableBuilder(
                  listenable: Listenable.merge([DisplayPrefs.instance, AppLocale.instance]),
                  builder: (context, _) => Column(
                    children: [
                      ListTile(
                        leading: const Icon(Icons.language_rounded),
                        title: Text(context.tr('lang.setting')),
                        trailing: DropdownButton<String>(
                          value: AppLocale.instance.code,
                          items: [
                            DropdownMenuItem(value: 'ar', child: Text(loc('العربية'))),
                            DropdownMenuItem(value: 'en', child: Text('English')),
                          ],
                          onChanged: (v) {
                            if (v != null) AppLocale.instance.set(v);
                          },
                        ),
                      ),
                      ListTile(
                        leading: const Icon(Icons.text_fields_rounded),
                        title: Text(loc('حجم الخط')),
                        trailing: DropdownButton<double>(
                          value: DisplayPrefs.instance.textScale,
                          items: [
                            for (final e in DisplayPrefs.scales.entries)
                              DropdownMenuItem(value: e.key, child: Text(e.value)),
                          ],
                          onChanged: (v) {
                            if (v != null) DisplayPrefs.instance.setTextScale(v);
                          },
                        ),
                      ),
                      SwitchListTile(
                        secondary: const Icon(Icons.animation_rounded),
                        title: Text(loc('تقليل الحركة')),
                        subtitle: Text(loc('يوقف الحركات والتأثيرات في شاشات الطفل')),
                        value: DisplayPrefs.instance.reduceMotion,
                        onChanged: DisplayPrefs.instance.setReduceMotion,
                      ),
                    ],
                  ),
                ),
                const Divider(),
                ListTile(
                  title: Text(loc('الحد اليومي للوقت')),
                  trailing: DropdownButton<int>(
                    value: _limit,
                    items: [
                      for (final m in _limits)
                        DropdownMenuItem(value: m, child: Text(tr2('$m دقيقة', '$m minutes'))),
                    ],
                    onChanged: (m) async {
                      if (m == null) return;
                      await _settings.setDailyLimitMinutes(m);
                      setState(() => _limit = m);
                    },
                  ),
                ),
                SwitchListTile(
                  title: Text(loc('ساعات الهدوء')),
                  subtitle: Text(loc('لن يبدأ وضع الطفل خلال هذه الساعات')),
                  value: _quietOn,
                  onChanged: (v) async {
                    await _settings.setQuietEnabled(v);
                    setState(() => _quietOn = v);
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
                const Divider(),
                ListTile(
                  leading: const Icon(Icons.school_rounded),
                  title: Text(loc('المدرسون وحسابي')),
                  subtitle: Text(loc('مدرسون معتمدون وحجز حصص أونلاين')),
                  onTap: () => Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => const TeachersEntryScreen()),
                  ),
                ),
                ListTile(
                  leading: const Icon(Icons.dashboard_customize_rounded),
                  title: Text(loc('إدارة المحتوى (تجريبي)')),
                  subtitle: Text(loc('الأقسام والأسئلة والمكافآت والخطط')),
                  onTap: () => Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => const AdminScreen()),
                  ),
                ),
                ListTile(
                  leading: const Icon(Icons.privacy_tip_outlined),
                  title: Text(loc('الخصوصية والبيانات')),
                  subtitle: Text(loc('ما نحفظه، وحذف بيانات الأطفال')),
                  onTap: () => Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => const PrivacyScreen()),
                  ),
                ),
                ListTile(
                  leading: const Icon(Icons.checklist_rounded),
                  title: Text(loc('الخطة الأسبوعية والمتابعة')),
                  onTap: () => Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => const PlanScreen()),
                  ),
                ),
                ListTile(
                  leading: const Icon(Icons.edit_note_rounded),
                  title: Text(loc('ملاحظات')),
                  onTap: () => Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => const NotesScreen()),
                  ),
                ),
                ListTile(
                  leading: const Icon(Icons.bar_chart),
                  title: Text(loc('ملخص المشاهدة')),
                  onTap: () => Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => const WatchSummaryScreen()),
                  ),
                ),
                ListTile(
                  leading: const Icon(Icons.lock_reset),
                  title: Text(loc('تغيير الرمز السري')),
                  onTap: () => Navigator.pushReplacement(
                    context,
                    MaterialPageRoute(builder: (_) => const PinSetupScreen()),
                  ),
                ),
              ],
            ),
    );
  }
}
