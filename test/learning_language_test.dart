import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/recommender.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/journey/ui/onboarding.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:shared_preferences/shared_preferences.dart';

Widget _app(Widget home) => MaterialApp(
      key: UniqueKey(),
      builder: (c, w) => Directionality(textDirection: AppLocale.instance.direction, child: w!),
      home: home,
    );

void main() {
  test('the learning language orders the language lands and is stored on the profile', () {
    final both = planFromAssessment({}, [], []);
    final ar = planFromAssessment({}, [], [], learnLang: 'ar');
    final en = planFromAssessment({}, [], [], learnLang: 'en');
    expect(ar.first, 'letters');
    expect(ar.last, 'english');
    expect(en.first, 'english');
    expect(en.last, 'letters');
    expect(both.toSet(), ar.toSet()); // nothing is removed, only ordered
    const kid = ChildProfile(id: 'a', nickname: 'x', age: 5, learnLang: 'en');
    expect(ChildProfile.fromJson(kid.toJson()).learnLang, 'en');
    expect(ChildProfile.fromJson({'id': 'b', 'n': 'y', 'a': 4}).learnLang, 'both'); // old profiles keep working
    expect(ChildProfile.fromJson({'id': 'b', 'n': 'y', 'a': 4, 'l': 'zz'}).learnLang, 'both');
  });

  testWidgets('English interface with Arabic lessons, and the other way round: the two settings are independent', (tester) async {
    tester.view.physicalSize = const Size(900, 2600);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.reset);
    SharedPreferences.setMockInitialValues({});
    final store = JourneyStore(LocalJourneyRepository());
    await tester.runAsync(store.load);
    JourneyStore.instance = store;
    await tester.runAsync(() => AppLocale.instance.set('en'));
    addTearDown(() => AppLocale.instance.set('ar'));
    await tester.pumpWidget(_app(const OnboardingFlow(askForPin: false)));
    await tester.pump();
    expect(find.text('Learning language'), findsOneWidget);
    await tester.enterText(find.widgetWithText(TextField, "Child's name or nickname"), 'Sam');
    await tester.tap(find.widgetWithText(ChoiceChip, 'Arabic'));
    await tester.pump();
    // The parent switches the app language to Arabic: the child's learning language stays Arabic.
    await tester.runAsync(() => AppLocale.instance.set('ar'));
    await tester.pump();
    expect(tester.widget<ChoiceChip>(find.widgetWithText(ChoiceChip, 'العربية')).selected, isTrue);
    await tester.tap(find.text('التالي'));
    await tester.pump();
    await tester.tap(find.text('التالي'));
    await tester.pump();
    await tester.tap(find.text('تخطي الاختبار'));
    await tester.pump();
    await tester.tap(find.text('التالي'));
    await tester.pump();
    await tester.tap(find.text('ابدأ رحلة طفلك'));
    await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 300)));
    await tester.pump();
    expect(store.profiles.single.learnLang, 'ar');
    expect(store.profiles.single.plan.first, 'letters');
  });

  testWidgets('English as the learning language puts the English land first', (tester) async {
    tester.view.physicalSize = const Size(900, 2600);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.reset);
    SharedPreferences.setMockInitialValues({});
    final store = JourneyStore(LocalJourneyRepository());
    await tester.runAsync(store.load);
    JourneyStore.instance = store;
    await tester.pumpWidget(_app(const OnboardingFlow(askForPin: false)));
    await tester.pump();
    await tester.enterText(find.widgetWithText(TextField, 'اسم الطفل أو لقبه'), 'سلمى');
    await tester.tap(find.widgetWithText(ChoiceChip, 'الإنجليزية'));
    await tester.pump();
    await tester.tap(find.text('التالي'));
    await tester.pump();
    await tester.tap(find.text('التالي'));
    await tester.pump();
    await tester.tap(find.text('تخطي الاختبار'));
    await tester.pump();
    await tester.tap(find.text('التالي'));
    await tester.pump();
    await tester.tap(find.text('ابدأ رحلة طفلك'));
    await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 300)));
    await tester.pump();
    expect(store.profiles.single.learnLang, 'en');
    expect(store.profiles.single.plan.first, 'english');
  });
}
