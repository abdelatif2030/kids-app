import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/journey/ui/onboarding.dart';
import 'package:kids_app/parent_settings.dart';
import 'package:shared_preferences/shared_preferences.dart';

Widget _app(Widget home) => MaterialApp(
      key: UniqueKey(),
      builder: (context, child) => Directionality(textDirection: TextDirection.rtl, child: child!),
      home: home,
    );

Future<void> _runOnboarding(WidgetTester tester) async {
  await tester.enterText(find.widgetWithText(TextField, 'اسم الطفل أو لقبه'), 'سلمى');
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
  await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 300)));
  await tester.pump(const Duration(milliseconds: 800));
}

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    FlutterSecureStorage.setMockInitialValues({});
    (rootBundle as CachingAssetBundle).clear();
    final store = JourneyStore(LocalJourneyRepository());
    await store.load();
    JourneyStore.instance = store;
  });

  testWidgets('a device with no PIN asks the parent to create one when the first child is added', (tester) async {
    tester.view.physicalSize = const Size(800, 1600);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.reset);
    await tester.pumpWidget(_app(const OnboardingFlow()));
    await _runOnboarding(tester);
    expect(find.text('إنشاء رمز سري للوالدين'), findsOneWidget);
    expect(find.textContaining('قبل أن يبدأ طفلك'), findsOneWidget);
    expect(find.byType(BackButton), findsNothing); // cannot be skipped with a back arrow
    // A mismatch is refused.
    await tester.enterText(find.widgetWithText(TextField, 'الرمز الجديد'), '1234');
    await tester.enterText(find.widgetWithText(TextField, 'أعد إدخال الرمز'), '9999');
    await tester.tap(find.text('حفظ الرمز'));
    await tester.pump();
    expect(find.text('الرمزان غير متطابقين'), findsOneWidget);
    expect(await tester.runAsync(ParentSettings.instance.hasPin), isFalse);
    await tester.enterText(find.widgetWithText(TextField, 'أعد إدخال الرمز'), '1234');
    await tester.tap(find.text('حفظ الرمز'));
    await tester.pump();
    await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 300)));
    await tester.pump();
    await tester.pump(const Duration(seconds: 1));
    await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 300)));
    await tester.pump(const Duration(seconds: 1));
    expect(await tester.runAsync(ParentSettings.instance.hasPin), isTrue);
    expect(find.text('إنشاء رمز سري للوالدين'), findsNothing);
    expect(JourneyStore.instance.profiles.length, 1);
  });

  testWidgets('when a PIN already exists the parent is not asked again', (tester) async {
    tester.view.physicalSize = const Size(800, 1600);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.reset);
    await tester.runAsync(() => ParentSettings.instance.setPin('4321'));
    await tester.pumpWidget(_app(const OnboardingFlow()));
    await _runOnboarding(tester);
    expect(find.text('إنشاء رمز سري للوالدين'), findsNothing);
    expect(JourneyStore.instance.profiles.length, 1);
  });
}
