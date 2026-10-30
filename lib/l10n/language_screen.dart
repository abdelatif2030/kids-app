import '../design/app_logo.dart';
import 'package:flutter/material.dart';

import '../journey/ui/kit.dart';
import 'app_locale.dart';
import 'strings.dart';

/// The very first screen: Arabic (right-to-left) or English (left-to-right).
/// Tapping a language applies it at once and remembers it.
class LanguageScreen extends StatelessWidget {
  const LanguageScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: PastelBackground(
        child: SafeArea(
          child: Center(
            child: SingleChildScrollView(
              padding: const EdgeInsets.all(24),
              child: ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: 420),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    const AppLogo(width: 240),
                    const SizedBox(height: 12),
                    Semantics(
                      header: true,
                      child: const Text('رحلتي · Rehlaty',
                          style: TextStyle(fontSize: 36, fontWeight: FontWeight.w900, color: RC.ink)),
                    ),
                    const SizedBox(height: 20),
                    Text(context.tr('lang.title'),
                        style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold, color: RC.ink)),
                    Text(context.tr('lang.subtitle'), style: const TextStyle(fontSize: 18, color: RC.ink)),
                    const SizedBox(height: 20),
                    _LangButton(code: 'ar', label: 'العربية', sample: 'ابدأ بالعربية'),
                    const SizedBox(height: 12),
                    _LangButton(code: 'en', label: 'English', sample: 'Continue in English'),
                    const SizedBox(height: 16),
                    Text(context.tr('lang.note'),
                        textAlign: TextAlign.center, style: const TextStyle(fontSize: 14, color: RC.ink)),
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

class _LangButton extends StatelessWidget {
  final String code, label, sample;
  const _LangButton({required this.code, required this.label, required this.sample});

  @override
  Widget build(BuildContext context) {
    return Directionality(
      textDirection: code == 'ar' ? TextDirection.rtl : TextDirection.ltr,
      child: FilledButton(
        style: FilledButton.styleFrom(minimumSize: const Size.fromHeight(72)),
        onPressed: () => AppLocale.instance.set(code),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(label, style: const TextStyle(fontSize: 26, fontWeight: FontWeight.w900)),
            Text(sample, style: const TextStyle(fontSize: 14)),
          ],
        ),
      ),
    );
  }
}
