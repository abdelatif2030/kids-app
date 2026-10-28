import 'package:flutter/widgets.dart';

import 'app_locale.dart';
import 'strings_onboarding.dart';

/// Interface texts. Only screens that call `context.tr` are translated; the
/// rest are still Arabic-only (see docs/LOCALIZATION.md for the coverage list).
/// A missing English text falls back to Arabic, then to the key itself.
const Map<String, Map<String, String>> kStrings = {
  'ar': {
    'app.name': 'رحلتي',
    'app.tagline': 'تعلّم · العب · اكتشف',
    'lang.title': 'اختر اللغة',
    'lang.subtitle': 'Choose your language',
    'lang.arabic': 'العربية',
    'lang.english': 'English',
    'lang.note': 'يمكنك تغييرها لاحقًا من إعدادات الوالدين',
    'lang.continue': 'متابعة',
    'lang.setting': 'لغة التطبيق',
    'start.begin': 'ابدأ الرحلة',
    'start.parentFirst': 'يبدأ ولي الأمر بإضافة طفل',
    'start.accounts': 'حساب الأهل والمدرسين',
    'start.privacy': 'الخصوصية',
    'start.parentSettings': 'إعدادات الوالدين',
  },
  'en': {
    'app.name': 'Rehlaty',
    'app.tagline': 'Learn · Play · Discover',
    'lang.title': 'Choose your language',
    'lang.subtitle': 'اختر اللغة',
    'lang.arabic': 'العربية',
    'lang.english': 'English',
    'lang.note': 'You can change this later in Parent settings',
    'lang.continue': 'Continue',
    'lang.setting': 'App language',
    'start.begin': 'Start the journey',
    'start.parentFirst': 'A parent starts by adding a child',
    'start.accounts': 'Parent and teacher accounts',
    'start.privacy': 'Privacy',
    'start.parentSettings': 'Parent settings',
  },
};

String trKey(String key, [String? lang]) {
  final l = lang ?? AppLocale.instance.code;
  for (final source in kAllStrings) {
    final v = source[l]?[key];
    if (v != null) return v;
  }
  for (final source in kAllStrings) {
    final v = source['ar']?[key];
    if (v != null) return v;
  }
  return key;
}

/// Every dictionary the app uses; add new screens' dictionaries here.
const List<Map<String, Map<String, String>>> kAllStrings = [kStrings, kOnboardingStrings];

/// `{name}`-style placeholders filled in.
String trArgs(String key, Map<String, Object> args) {
  var s = trKey(key);
  args.forEach((k, v) => s = s.replaceAll('{$k}', '$v'));
  return s;
}

extension TrContext on BuildContext {
  /// Rebuilds are driven by `MaterialApp` listening to `AppLocale`.
  String tr(String key) => trKey(key);
}
