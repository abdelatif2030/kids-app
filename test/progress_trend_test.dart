import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/progress_store.dart';
import 'package:kids_app/progress_trend.dart';
import 'package:kids_app/watch_history.dart';
import 'package:shared_preferences/shared_preferences.dart';

final end = DateTime(2026, 10, 30); // a Friday; the shown week is 24-30 Oct
String key(DateTime d) => WatchHistory.dayKey(d);
DateTime ago(int days) => end.subtract(Duration(days: days));

SkillEvent ev(int daysAgo, {bool ok = true}) => SkillEvent(day: key(ago(daysAgo)), skill: 'counting', ok: ok);
WatchEntry watched(int daysAgo, String id, {bool done = true}) =>
    WatchEntry(day: key(ago(daysAgo)), videoId: id, title: id, seconds: 120, completed: done);

void main() {
  setUp(() {
    SharedPreferences.setMockInitialValues({});
    AppLocale.instance.set('en');
  });

  group('buildTrend', () {
    test('gives four 7-day weeks ending on the shown day, oldest first', () {
      final t = buildTrend(end: end, events: const [], watch: const [], usedSeconds: const {});
      expect(t.length, kTrendWeeks);
      expect(t.last.end, end);
      expect(t.last.start, ago(6));
      expect(t.first.end, ago(21));
      for (var i = 1; i < t.length; i++) {
        expect(t[i].start.difference(t[i - 1].end).inDays, 1); // no gap, no overlap
      }
    });

    test('counts only what was recorded, each in its own week', () {
      final t = buildTrend(
        end: end,
        events: [ev(0), ev(3), ev(8), ev(8, ok: false), ev(20)],
        watch: [watched(1, 'a'), watched(2, 'a'), watched(2, 'b'), watched(9, 'c'), watched(9, 'd', done: false)],
        usedSeconds: {key(ago(0)): 600, key(ago(1)): 300, key(ago(10)): 1200},
      );
      expect(t[3].rounds, 2);
      expect(t[3].lessons, 2); // a (counted once) and b
      expect(t[3].seconds, 900);
      expect(t[3].valueOf(TrendMetric.time), 15); // minutes
      expect(t[2].rounds, 2);
      expect(t[2].lessons, 1); // c finished; d was not finished
      expect(t[2].seconds, 1200);
      expect(t[1].rounds, 1); // 20 days ago
      expect(t[0].rounds, 0);
    });

    test('a day outside the four weeks is ignored', () {
      final t = buildTrend(end: end, events: [ev(40)], watch: [watched(40, 'x')], usedSeconds: {key(ago(40)): 999});
      expect(t.every((w) => !w.hasData), isTrue);
    });
  });

  group('enoughForTrend', () {
    test('needs at least two weeks with something recorded', () {
      final none = buildTrend(end: end, events: const [], watch: const [], usedSeconds: const {});
      expect(enoughForTrend(none), isFalse);
      final one = buildTrend(end: end, events: [ev(1)], watch: const [], usedSeconds: const {});
      expect(enoughForTrend(one), isFalse);
      final two = buildTrend(end: end, events: [ev(1), ev(9)], watch: const [], usedSeconds: const {});
      expect(enoughForTrend(two), isTrue);
    });
  });

  group('card', () {
    Widget app(List<WeekCounts> weeks, {double scale = 1.0}) => MaterialApp(
          key: UniqueKey(),
          home: MediaQuery(
            data: MediaQueryData(textScaler: TextScaler.linear(scale)),
            child: Scaffold(body: SingleChildScrollView(child: WeeksTrendCard(weeks: weeks))),
          ),
        );

    final withData = buildTrend(
      end: end,
      events: [ev(0), ev(1), ev(8), ev(15)],
      watch: [watched(0, 'a'), watched(9, 'b')],
      usedSeconds: {key(ago(0)): 1800, key(ago(8)): 600},
    );
    final empty = buildTrend(end: end, events: const [], watch: const [], usedSeconds: const {});

    testWidgets('shows a plain empty message when there is not enough data (no chart, no numbers)', (t) async {
      await t.pumpWidget(app(empty));
      expect(find.byKey(const ValueKey('trend_empty')), findsOneWidget);
      expect(find.textContaining('Not enough data'), findsOneWidget);
      expect(find.byKey(const ValueKey('trend_bar_0')), findsNothing);
      expect(find.byKey(const ValueKey('trend_time')), findsNothing);
    });

    testWidgets('shows four weeks side by side with the real counts, and switches what is counted', (t) async {
      await t.pumpWidget(app(withData));
      for (var i = 0; i < 4; i++) {
        expect(find.byKey(ValueKey('trend_bar_$i')), findsOneWidget);
      }
      // time in minutes: week 4 = 30, week 3 = 10
      expect(t.widget<Text>(find.byKey(const ValueKey('trend_value_3'))).data, '30');
      expect(t.widget<Text>(find.byKey(const ValueKey('trend_value_2'))).data, '10');
      await t.tap(find.byKey(const ValueKey('trend_rounds')));
      await t.pump();
      expect(t.widget<Text>(find.byKey(const ValueKey('trend_value_3'))).data, '2');
      expect(t.widget<Text>(find.byKey(const ValueKey('trend_value_1'))).data, '1');
      await t.tap(find.byKey(const ValueKey('trend_lessons')));
      await t.pump();
      expect(t.widget<Text>(find.byKey(const ValueKey('trend_value_3'))).data, '1');
      expect(t.widget<Text>(find.byKey(const ValueKey('trend_value_2'))).data, '1');
    });

    testWidgets('no percentages, scores or verdicts are shown', (t) async {
      await t.pumpWidget(app(withData));
      expect(find.textContaining('%'), findsNothing);
      for (final bad in ['improv', 'decline', 'behind', 'struggl', 'weak', 'better', 'worse']) {
        expect(find.textContaining(bad, findRichText: true), findsNothing, reason: bad);
      }
    });

    testWidgets('each bar has a spoken label with its dates, number and unit', (t) async {
      final h = t.ensureSemantics();
      await t.pumpWidget(app(withData));
      expect(find.bySemanticsLabel(RegExp(r'Week 24/10 – 30/10: 30 minutes')), findsOneWidget);
      h.dispose();
    });

    for (final lang in ['ar', 'en']) {
      for (final w in [320.0, 390.0, 1024.0]) {
        testWidgets('fits at width $w in $lang with large text', (t) async {
          await t.runAsync(() => AppLocale.instance.set(lang));
          t.view.physicalSize = Size(w, 900);
          t.view.devicePixelRatio = 1;
          addTearDown(t.view.reset);
          await t.pumpWidget(app(withData, scale: 1.6));
          expect(t.takeException(), isNull);
          await t.pumpWidget(app(empty, scale: 1.6));
          expect(t.takeException(), isNull);
        });
      }
    }
  });
}
