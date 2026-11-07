
import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'l10n/strings.dart';
import 'parent_settings.dart';
import 'lazy_features.dart';

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
Future<bool> askParentQuestion(BuildContext context, {int? a, int? b, String? purposeAr, String? purposeEn}) async {
  final x = a ?? 6 + DateTime.now().second % 4; // 6..9
  final y = b ?? 7 + DateTime.now().millisecond % 3; // 7..9
  final ok = await showDialog<bool>(
    context: context,
    builder: (_) => _ParentQuestionDialog(a: x, b: y, purposeAr: purposeAr, purposeEn: purposeEn),
  );
  return ok == true;
}

class _ParentQuestionDialog extends StatefulWidget {
  final int a, b;
  final String? purposeAr, purposeEn;
  const _ParentQuestionDialog({required this.a, required this.b, this.purposeAr, this.purposeEn});

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
              '${widget.purposeAr ?? 'لفتح إعدادات الوالدين'}: كم ناتج ${widget.a} × ${widget.b}؟',
              '${widget.purposeEn ?? 'To open the parent settings'}: what is ${widget.a} × ${widget.b}?',
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
      MaterialPageRoute(builder: (_) => const LazySettings()),
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
        MaterialPageRoute(builder: (_) => const LazySettings()),
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

