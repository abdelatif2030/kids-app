import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/age_scope.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/ui/profile_forms.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('en');
  });

  test('pickers offer ages 1-6 only, plus an older legacy value so it is never rewritten', () {
    expect(ageChoices(), [1, 2, 3, 4, 5, 6]);
    expect(ageChoices(current: 4), [1, 2, 3, 4, 5, 6]);
    expect(ageChoices(current: 9), [1, 2, 3, 4, 5, 6, 9]);
    expect(ageChoices(current: null), [1, 2, 3, 4, 5, 6]);
  });

  test('a legacy profile with age 10 still loads (stored ages up to 12 are kept)', () {
    final p = ChildProfile.fromJson({'id': 'x', 'n': 'L', 'a': 10});
    expect(p.age, 10);
  });

  test('no product-facing text still claims ages 1-12', () {
    // pubspec, README and CLAUDE.md first line are the public description of the product.
    // (Read from disk so the check cannot drift from the files.)
    for (final f in ['pubspec.yaml', 'README.md']) {
      final text = _read(f);
      expect(text.contains('1-12') || text.contains('1–12'), isFalse, reason: f);
    }
    expect(_read('CLAUDE.md').split('\n').first.contains('ages 1-12'), isFalse);
  });

  testWidgets('the profile form offers ages 1-6, and an old age stays selectable when editing', (t) async {
    t.view.physicalSize = const Size(900, 2200);
    t.view.devicePixelRatio = 1;
    addTearDown(t.view.reset);
    for (final age in [4, 9]) {
      await t.pumpWidget(MaterialApp(key: UniqueKey(), home: Scaffold(body: SingleChildScrollView(child: BasicsForm(draft: ProfileDraft()..age = age, onChanged: () {})))));
      await t.pump();
      for (var a = 1; a <= 6; a++) {
        expect(find.widgetWithText(ChoiceChip, '$a'), findsWidgets, reason: 'age $a');
      }
      expect(find.widgetWithText(ChoiceChip, '7'), findsNothing);
      expect(find.widgetWithText(ChoiceChip, '12'), findsNothing);
      if (age == 9) expect(t.widget<ChoiceChip>(find.widgetWithText(ChoiceChip, '9')).selected, isTrue);
    }
  });
}

String _read(String path) => File(path).readAsStringSync();
