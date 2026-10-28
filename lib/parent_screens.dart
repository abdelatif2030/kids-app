import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'notes_screen.dart';
import 'parent_settings.dart';
import 'plan_screen.dart';
import 'summary_screen.dart';

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
  const PinSetupScreen({super.key});

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
      setState(() => _error = 'يجب أن يتكون الرمز من 4 أرقام');
      return;
    }
    if (_pin.text != _confirm.text) {
      setState(() => _error = 'الرمزان غير متطابقين');
      return;
    }
    await ParentSettings.instance.setPin(_pin.text);
    if (!mounted) return;
    Navigator.pushReplacement(
      context,
      MaterialPageRoute(builder: (_) => const SettingsScreen()),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('إنشاء رمز سري للوالدين')),
      body: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          children: [
            _pinField(_pin, 'الرمز الجديد'),
            TextField(
              controller: _confirm,
              obscureText: true,
              keyboardType: TextInputType.number,
              maxLength: 4,
              textAlign: TextAlign.center,
              style: const TextStyle(fontSize: 32, letterSpacing: 12),
              inputFormatters: [FilteringTextInputFormatter.digitsOnly],
              decoration: InputDecoration(labelText: 'أعد إدخال الرمز', errorText: _error),
            ),
            const SizedBox(height: 16),
            FilledButton(onPressed: _save, child: const Text('حفظ الرمز')),
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
    setState(() => _error = left > 0 ? 'محاولات كثيرة. انتظر $left ثانية.' : null);
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
      if (mounted && _error == null) setState(() => _error = 'رمز خاطئ');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('رمز الوالدين')),
      body: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          children: [
            _pinField(_pin, 'أدخل الرمز', error: _error),
            const SizedBox(height: 16),
            FilledButton(onPressed: _submit, child: const Text('فتح')),
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
      appBar: AppBar(title: const Text('إعدادات الوالدين')),
      body: !_loaded
          ? const Center(child: CircularProgressIndicator())
          : ListView(
              children: [
                ListTile(
                  title: const Text('الحد اليومي للوقت'),
                  trailing: DropdownButton<int>(
                    value: _limit,
                    items: [
                      for (final m in _limits)
                        DropdownMenuItem(value: m, child: Text('$m دقيقة')),
                    ],
                    onChanged: (m) async {
                      if (m == null) return;
                      await _settings.setDailyLimitMinutes(m);
                      setState(() => _limit = m);
                    },
                  ),
                ),
                SwitchListTile(
                  title: const Text('ساعات الهدوء'),
                  subtitle: const Text('لن يبدأ وضع الطفل خلال هذه الساعات'),
                  value: _quietOn,
                  onChanged: (v) async {
                    await _settings.setQuietEnabled(v);
                    setState(() => _quietOn = v);
                  },
                ),
                ListTile(
                  enabled: _quietOn,
                  title: const Text('من'),
                  trailing: Text(_quietStart.format(context)),
                  onTap: () => _pickTime(_quietStart, true),
                ),
                ListTile(
                  enabled: _quietOn,
                  title: const Text('إلى'),
                  trailing: Text(_quietEnd.format(context)),
                  onTap: () => _pickTime(_quietEnd, false),
                ),
                const Divider(),
                ListTile(
                  leading: const Icon(Icons.checklist_rounded),
                  title: const Text('الخطة الأسبوعية والمتابعة'),
                  onTap: () => Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => const PlanScreen()),
                  ),
                ),
                ListTile(
                  leading: const Icon(Icons.edit_note_rounded),
                  title: const Text('ملاحظات'),
                  onTap: () => Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => const NotesScreen()),
                  ),
                ),
                ListTile(
                  leading: const Icon(Icons.bar_chart),
                  title: const Text('ملخص المشاهدة'),
                  onTap: () => Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => const WatchSummaryScreen()),
                  ),
                ),
                ListTile(
                  leading: const Icon(Icons.lock_reset),
                  title: const Text('تغيير الرمز السري'),
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
