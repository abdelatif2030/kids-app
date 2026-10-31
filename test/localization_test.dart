import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/journey/ui/start_screen.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/l10n/language_screen.dart';
import 'package:kids_app/l10n/strings.dart';
import 'package:kids_app/parent_screens.dart';
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

  test('the choice is saved and read back; no saved choice means Arabic, without asking', () async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.load();
    expect(AppLocale.instance.needsChoice, isFalse);
    expect(AppLocale.instance.code, 'ar');
    expect(AppLocale.instance.direction, TextDirection.rtl);
    await AppLocale.instance.set('en');
    expect(AppLocale.instance.direction, TextDirection.ltr);
    AppLocale.instance.code = 'ar';
    await AppLocale.instance.load();
    expect(AppLocale.instance.code, 'en');
    expect(AppLocale.instance.needsChoice, isFalse);
    await AppLocale.instance.set('ar');
  });

  testWidgets('first launch shows no language screen and opens in Arabic (right-to-left)', (tester) async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.load();
    JourneyStore.instance;
    await tester.pumpWidget(_app());
    await tester.pump();
    expect(find.byType(LanguageScreen), findsNothing);
    expect(find.byType(StartScreen), findsOneWidget);
    expect(AppLocale.instance.code, 'ar');
    expect(Directionality.of(tester.element(find.byType(StartScreen))), TextDirection.rtl);
  });

  testWidgets('a saved English choice is kept and opens left-to-right', (tester) async {
    SharedPreferences.setMockInitialValues({'ui_lang': 'en'});
    await AppLocale.instance.load();
    await tester.pumpWidget(_app());
    await tester.pump();
    expect(find.byType(LanguageScreen), findsNothing);
    expect(AppLocale.instance.code, 'en');
    expect(Directionality.of(tester.element(find.byType(StartScreen))), TextDirection.ltr);
    await AppLocale.instance.set('ar');
  });

  testWidgets('changing the language in parent settings updates screens already on the stack', (tester) async {
    SharedPreferences.setMockInitialValues({});
    await tester.runAsync(() => AppLocale.instance.set('ar'));
    addTearDown(() => AppLocale.instance.set('ar'));
    await tester.pumpWidget(MaterialApp(
      builder: (c, child) => ListenableBuilder(
        listenable: AppLocale.instance,
        builder: (_, _) => Directionality(textDirection: AppLocale.instance.direction, child: child!),
      ),
      home: const _Probe(),
    ));
    expect(find.text('عربي'), findsOneWidget);
    await tester.tap(find.text('open'));
    await tester.pumpAndSettle();
    await tester.scrollUntilVisible(find.byType(DropdownButton<String>), 300, scrollable: find.byType(Scrollable).first);
    await tester.pumpAndSettle();
    await tester.ensureVisible(find.byType(DropdownButton<String>).first);
    await tester.pumpAndSettle();
    await tester.tap(find.byType(DropdownButton<String>).first);
    await tester.pumpAndSettle();
    await tester.tap(find.text('English').last);
    await tester.pump();
    await tester.pump(const Duration(milliseconds: 300));
    await tester.pump(const Duration(milliseconds: 300));
    expect(AppLocale.instance.code, 'en');
    await tester.pageBack();
    await tester.pumpAndSettle();
    expect(find.text('Arabic'), findsOneWidget); // the page below was rebuilt in English
    expect(find.text('عربي'), findsNothing);
  });
}

class _Probe extends StatelessWidget {
  const _Probe();
  @override
  Widget build(BuildContext context) => Scaffold(
        body: Column(children: [
          Text(loc('عربي')),
          TextButton(
            onPressed: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const SettingsScreen())),
            child: const Text('open'),
          ),
        ]),
      );
}
