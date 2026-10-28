import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/design/components.dart';
import 'package:kids_app/design/tokens.dart';
import 'package:kids_app/journey/plans.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/l10n/strings.dart';

Widget _wrap(Widget child, {double width = 360, TextDirection dir = TextDirection.rtl}) => MaterialApp(
      home: Directionality(
        textDirection: dir,
        child: Scaffold(body: SizedBox(width: width, child: SingleChildScrollView(child: child))),
      ),
    );

void main() {
  test('plan presets are real settings and are recognised back', () {
    expect(presetFor(2, -1)!.id, 'gentle');
    expect(presetFor(3, 0)!.id, 'balanced');
    expect(presetFor(5, 1)!.id, 'focused');
    expect(presetFor(4, 0), isNull);
    expect(kPlanPresets.first.minutesPerDay(3), 6); // 2 activities x 3 minutes
    expect(kPlanPresets.last.minutesPerDay(8), 25); // 5 x 5
  });

  test('breakpoints', () {
    expect(screenSizeOf(360), ScreenSize.phone);
    expect(screenSizeOf(800), ScreenSize.tablet);
    expect(screenSizeOf(1280), ScreenSize.desktop);
  });

  test('onboarding texts exist in both languages with the same placeholders', () {
    final ar = kAllStrings.expand((m) => m['ar']!.entries).toList();
    for (final e in ar) {
      final en = trKey(e.key, 'en');
      final ph = RegExp(r'\{(\w+)\}');
      expect(ph.allMatches(en).map((m) => m[1]).toSet(), ph.allMatches(e.value).map((m) => m[1]).toSet(), reason: e.key);
    }
    for (final src in kAllStrings) {
      expect(src['en']!.keys.toSet(), src['ar']!.keys.toSet());
    }
  });

  testWidgets('OptionCard shows selection with an icon and exposes it to screen readers', (tester) async {
    var taps = 0;
    await tester.pumpWidget(_wrap(Column(children: [
      OptionCard(title: 'A', subtitle: 'sub', icon: Icons.star, selected: false, onTap: () => taps++),
      OptionCard(title: 'B', icon: Icons.star, selected: true, onTap: () {}),
    ])));
    expect(find.byIcon(Icons.radio_button_unchecked_rounded), findsOneWidget);
    expect(find.byIcon(Icons.check_circle_rounded), findsOneWidget);
    await tester.tap(find.text('A'));
    expect(taps, 1);
    final sem = tester.getSemantics(find.text('B'));
    expect(sem.flagsCollection.isSelected, isNot(0));
  });

  testWidgets('AppButton: loading disables it, minimum height is 56', (tester) async {
    var n = 0;
    await tester.pumpWidget(_wrap(Column(children: [
      AppButton(label: 'Go', onPressed: () => n++),
      AppButton(label: 'Busy', loading: true, onPressed: () => n += 10),
    ])));
    expect(tester.getSize(find.widgetWithText(FilledButton, 'Go')).height, greaterThanOrEqualTo(56));
    await tester.tap(find.text('Go'));
    await tester.tap(find.byType(CircularProgressIndicator));
    expect(n, 1);
  });

  testWidgets('empty, error, skeleton and confirm dialog work in English and Arabic', (tester) async {
    for (final lang in ['en', 'ar']) {
      AppLocale.instance.code = lang;
      var retried = false;
      await tester.pumpWidget(_wrap(
        Column(children: [
          const EmptyState(icon: Icons.inbox, title: 'Nothing', message: 'msg'),
          SizedBox(height: 420, child: ErrorState(onRetry: () => retried = true)),
          const SkeletonBox(width: 80),
        ]),
        dir: lang == 'en' ? TextDirection.ltr : TextDirection.rtl,
      ));
      expect(find.text(trKey('error.title')), findsOneWidget);
      await tester.ensureVisible(find.text(trKey('action.retry')));
      await tester.tap(find.text(trKey('action.retry')));
      expect(retried, isTrue);
    }
    AppLocale.instance.code = 'ar';
    late bool result;
    await tester.pumpWidget(MaterialApp(
      home: Builder(
        builder: (ctx) => TextButton(
          onPressed: () async => result = await confirmDialog(ctx, title: 'T', message: 'M', confirmLabel: 'Yes'),
          child: const Text('open'),
        ),
      ),
    ));
    await tester.tap(find.text('open'));
    await tester.pumpAndSettle();
    await tester.tap(find.text('Yes'));
    await tester.pumpAndSettle();
    expect(result, isTrue);
  });

  testWidgets('components fit a 320dp screen at 1.6x text without overflow', (tester) async {
    tester.view.physicalSize = const Size(320, 640);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.reset);
    await tester.pumpWidget(MaterialApp(
      builder: (c, child) => MediaQuery(
        data: MediaQuery.of(c).copyWith(textScaler: const TextScaler.linear(1.6)),
        child: Directionality(textDirection: TextDirection.rtl, child: child!),
      ),
      home: Scaffold(
        body: SingleChildScrollView(
          child: Column(children: [
            const StepHeader(step: 2, total: 5),
            OptionCard(title: 'القراءة والحروف العربية', subtitle: 'الحروف وأصواتها والقصص', icon: Icons.star, selected: true, onTap: () {}),
            const AppButton(label: 'ابدأ رحلة طفلك', onPressed: null, expand: true),
          ]),
        ),
      ),
    ));
    expect(tester.takeException(), isNull);
  });
}
