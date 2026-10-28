import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/journey/ui/start_screen.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/l10n/language_screen.dart';
import 'package:kids_app/l10n/strings.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:shared_preferences/shared_preferences.dart';

Widget _app() => ListenableBuilder(
      listenable: AppLocale.instance,
      builder: (_, _) => MaterialApp(
        key: UniqueKey(),
        builder: (c, child) => Directionality(textDirection: AppLocale.instance.direction, child: child!),
        home: const StartScreen(),
      ),
    );

void main() {
  test('every English key exists in Arabic and vice versa', () {
    expect(kStrings['en']!.keys.toSet(), kStrings['ar']!.keys.toSet());
    for (final l in kStrings.values) {
      expect(l.values.any((v) => v.trim().isEmpty), isFalse);
    }
  });

  test('a missing key falls back to Arabic, then to the key', () {
    expect(trKey('nope.key', 'en'), 'nope.key');
    expect(trKey('app.name', 'en'), 'Rehlaty');
    expect(trKey('app.name', 'fr'), 'رحلتي');
  });

  test('the choice is saved and read back; no saved choice means ask', () async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.load();
    expect(AppLocale.instance.needsChoice, isTrue);
    await AppLocale.instance.set('en');
    expect(AppLocale.instance.direction, TextDirection.ltr);
    AppLocale.instance.code = 'ar';
    await AppLocale.instance.load();
    expect(AppLocale.instance.code, 'en');
    expect(AppLocale.instance.needsChoice, isFalse);
    await AppLocale.instance.set('ar');
  });

  testWidgets('first launch asks for the language, English flips to left-to-right', (tester) async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.load();
    JourneyStore.instance;
    await tester.pumpWidget(_app());
    await tester.pump();
    expect(find.byType(LanguageScreen), findsOneWidget);
    await tester.tap(find.text('English'));
    await tester.pump();
    await tester.pump();
    expect(find.byType(LanguageScreen), findsNothing);
    expect(AppLocale.instance.code, 'en');
    expect(Directionality.of(tester.element(find.byType(StartScreen))), TextDirection.ltr);
    await AppLocale.instance.set('ar');
  });
}
