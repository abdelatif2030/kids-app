import 'dart:io';

import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/l10n/en_dictionary.dart';

/// Every static Arabic text passed to `loc(...)` in the app has an English
/// translation, and no translation is empty.
String _unescape(String raw) => raw.replaceAllMapped(RegExp(r'\\(.)'), (m) {
      final c = m[1]!;
      return switch (c) { 'n' => '\n', 't' => '\t', _ => c };
    });

void main() {
  test('every loc("...") text has an English entry', () {
    final call = RegExp(r"loc\(\s*((?:'(?:[^'\\]|\\.)*'\s*)+)\)");
    final lit = RegExp(r"'((?:[^'\\]|\\.)*)'");
    final arabic = RegExp(r'[؀-ۿ]');
    final missing = <String>{};
    for (final f in Directory('lib').listSync(recursive: true).whereType<File>()) {
      if (!f.path.endsWith('.dart') || f.path.contains('l10n/')) continue;
      final src = f.readAsStringSync();
      for (final m in call.allMatches(src)) {
        final text = [for (final l in lit.allMatches(m[1]!)) _unescape(l[1]!)].join();
        if (!arabic.hasMatch(text) || text.contains(r'$')) continue;
        if (!kEnglish.containsKey(text)) missing.add('${f.path}: $text');
      }
    }
    // Words that are learning content (Arabic vocabulary) on purpose.
    final allowed = {'تفاحة', 'قطة', 'كلب', 'شمس', 'سمكة', 'كتاب', 'سيارة', 'كرة', 'شجرة', 'بيت', 'حليب', 'عصفور', 'قمر', 'بيضة', 'موز', 'فيل', 'جمل'};
    missing.removeWhere((s) => allowed.any((a) => s.endsWith(': $a')));
    expect(missing, isEmpty, reason: missing.join('\n'));
  });

  test('no empty or identical-to-Arabic translations', () {
    for (final e in kEnglish.entries) {
      expect(e.value.trim(), isNotEmpty, reason: e.key);
      expect(RegExp(r'[؀-ۿ]').hasMatch(e.value), isFalse, reason: 'Arabic left in the English text of ${e.key}');
    }
  });
}
