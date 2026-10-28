import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/dashboard_screen.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/watch_history.dart';
import 'package:shared_preferences/shared_preferences.dart';

Widget _app(Widget home) => MaterialApp(
      key: UniqueKey(),
      builder: (context, child) =>
          Directionality(textDirection: TextDirection.rtl, child: child!),
      home: home,
    );

Future<void> _load(WidgetTester tester) async {
  for (var i = 0; i < 50; i++) {
    await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 100)));
    await tester.pump(const Duration(milliseconds: 100));
    if (find.byType(CircularProgressIndicator).evaluate().isEmpty) break;
  }
  await tester.pump(const Duration(milliseconds: 100));
}

String _ev(String day, String skill, bool ok, {String? detail, String? child}) =>
    '{"d":"$day","k":"$skill","o":${ok ? 1 : 0}${detail == null ? '' : ',"x":"$detail"'}${child == null ? '' : ',"c":"$child"'}}';

String _at(String child, String act, String day, int right) =>
    '{"c":"$child","a":"$act","d":"$day","t":5,"f":$right,"s":40,"r":${starsFor(5, right)}}';

Future<void> _seed() async {
  final day = WatchHistory.dayKey(DateTime.now());
  SharedPreferences.setMockInitialValues({
    'rj_profiles':
        '[{"id":"k1","n":"سلمى","a":5,"p":[],"d":3,"b":0},{"id":"k2","n":"عمر","a":7,"p":[],"d":3,"b":0}]',
    'rj_active': 'k1',
    'rj_attempts': '[${[
      _at('k1', 'letters_1', day, 5),
      _at('k1', 'letters_2', day, 5),
      _at('k1', 'letters_3', day, 4),
      _at('k2', 'colors_1', day, 2),
    ].join(',')}]',
    'skill_events': '[${[
      for (var i = 0; i < 9; i++) _ev(day, 'letters_ar', true, detail: 'ب', child: 'k1'),
      _ev(day, 'letters_ar', false, detail: 'ع', child: 'k1'),
      for (var i = 0; i < 2; i++) _ev(day, 'colors', true, detail: 'أحمر', child: 'k2'),
      for (var i = 0; i < 4; i++) _ev(day, 'colors', false, detail: 'أحمر', child: 'k2'),
      // From before profiles existed: belongs to nobody, so it is not shown.
      for (var i = 0; i < 6; i++) _ev(day, 'shapes', false, detail: 'مثلث'),
    ].join(',')}]',
    'used_$day': 1200,
  });
  final store = JourneyStore(LocalJourneyRepository());
  await store.load();
  JourneyStore.instance = store;
}

void main() {
  // A string cached by an earlier test would complete in that test's dead zone.
  setUp(() => (rootBundle as CachingAssetBundle).clear());

  void tall(WidgetTester tester) {
    tester.view.physicalSize = const Size(800, 4200);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.reset);
  }

  testWidgets('switching children switches skills, journey and the report', (tester) async {
    tall(tester);
    await tester.runAsync(_seed);
    String? copied;
    tester.binding.defaultBinaryMessenger.setMockMethodCallHandler(SystemChannels.platform, (call) async {
      if (call.method == 'Clipboard.setData') copied = (call.arguments as Map)['text'] as String;
      return null;
    });
    addTearDown(() => tester.binding.defaultBinaryMessenger.setMockMethodCallHandler(SystemChannels.platform, null));

    await tester.pumpWidget(_app(const DashboardScreen()));
    await _load(tester);

    expect(find.text('رحلة التعلّم · سلمى'), findsOneWidget);
    expect(find.text('أتقنها'), findsOneWidget);
    expect(find.text('الحروف العربية (يخطئ في: ع)'), findsOneWidget);
    expect(find.text('تحتاج إلى تدريب'), findsNothing);
    expect(find.textContaining('مثلث'), findsNothing); // the old event with no child is hidden
    expect(find.text('3/5'), findsOneWidget); // letters: three of five levels
    expect(find.text('✅ 3 نشاطاً'), findsOneWidget);

    await tester.tap(find.text('عمر'));
    await tester.pump();
    expect(find.text('رحلة التعلّم · عمر'), findsOneWidget);
    expect(find.text('تحتاج إلى تدريب'), findsOneWidget);
    expect(find.text('الألوان (يخطئ في: أحمر)'), findsOneWidget);
    expect(find.text('أتقنها'), findsNothing);
    expect(find.text('1/5'), findsOneWidget); // colors: one level
    expect(find.text('✅ 1 نشاطاً'), findsOneWidget);
    expect(find.textContaining('يحتاج إلى تدريب في الألوان'), findsOneWidget);

    await tester.tap(find.text('نسخ التقرير'));
    await tester.pump();
    expect(copied, contains('تقرير عمر'));
    expect(copied, contains('رحلة التعلّم: 1 نشاطاً هذا الأسبوع'));
    expect(copied, contains('جزيرة الألوان: 1/5 مستويات'));
    expect(copied, isNot(contains('سلمى')));
  });

  testWidgets('the parent can set difficulty and activities per day from here', (tester) async {
    tall(tester);
    await tester.runAsync(_seed);
    await tester.pumpWidget(_app(const DashboardScreen()));
    await _load(tester);

    await tester.tap(find.text('أصعب'));
    await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 200)));
    await tester.pump();
    expect(JourneyStore.instance.profileById('k1')!.bias, 1);
    expect(JourneyStore.instance.profileById('k2')!.bias, 0); // only this child

    // The second segmented control is the number of activities per day.
    await tester.tap(find.descendant(of: find.byType(SegmentedButton<int>).last, matching: find.text('5')));
    await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 200)));
    await tester.pump();
    expect(JourneyStore.instance.profileById('k1')!.dailyCount, 5);
  });

  testWidgets('suggested activities come with their reasons', (tester) async {
    tall(tester);
    await tester.runAsync(_seed);
    await tester.pumpWidget(_app(const DashboardScreen()));
    await _load(tester);
    expect(find.text('الأنشطة المقترحة لهذا اليوم'), findsOneWidget);
    expect(find.textContaining('بداية جديدة'), findsWidgets); // lands she has not started
  });

  testWidgets('with no children it still works from the old data', (tester) async {
    tall(tester);
    final day = WatchHistory.dayKey(DateTime.now());
    SharedPreferences.setMockInitialValues({
      'skill_events': '[${[for (var i = 0; i < 6; i++) _ev(day, 'shapes', false, detail: 'مثلث')].join(',')}]',
    });
    final store = JourneyStore(LocalJourneyRepository());
    await tester.runAsync(store.load);
    JourneyStore.instance = store;
    await tester.pumpWidget(_app(const DashboardScreen()));
    await _load(tester);
    expect(find.text('تحتاج إلى تدريب'), findsOneWidget);
    expect(find.textContaining('رحلة التعلّم'), findsNothing);
  });
}
