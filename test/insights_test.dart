import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/adaptive/insights.dart';
import 'package:kids_app/adaptive/insights_ui.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/library/activity_screens.dart';
import 'package:kids_app/library/learning_records.dart';
import 'package:kids_app/progress_store.dart';
import 'package:shared_preferences/shared_preferences.dart';

final now = DateTime(2026, 10, 29);

List<SkillEvent> rounds(String skill, String day, int ok, int bad, {String child = 'c1'}) => [
      for (var i = 0; i < ok; i++) SkillEvent(day: day, skill: skill, ok: true, childId: child),
      for (var i = 0; i < bad; i++) SkillEvent(day: day, skill: skill, ok: false, childId: child),
    ];

InsightsReport report(List<SkillEvent> e, {List<LearningRecord> r = const [], String child = 'c1'}) => buildInsights(childId: child, events: e, records: r, now: now);

DomainInsight dom(InsightsReport r, Domain d) => r.domains.firstWhere((x) => x.domain == d);

void main() {
  setUp(() {
    SharedPreferences.setMockInitialValues({});
    AppLocale.instance.set('ar');
  });

  group('buildInsights', () {
    test('empty history: empty report, every area noData, no invented numbers', () {
      final r = report([]);
      expect(r.empty, isTrue);
      expect(r.roundsThisWeek, 0);
      expect(r.withData, isEmpty);
      expect(r.domains.every((d) => d.status == DomainStatus.noData), isTrue);
    });
    test('a few rounds are "too few", never a weakness', () {
      final r = report(rounds('counting', '2026-10-29', 0, 3));
      expect(dom(r, Domain.numbers).status, DomainStatus.tooFew);
      expect(dom(r, Domain.numbers).needPractice, isEmpty);
    });
    test('enough rounds with mostly wrong first tries: more practice may help, and the observed numbers are exact', () {
      final r = report(rounds('counting', '2026-10-29', 2, 8));
      final d = dom(r, Domain.numbers);
      expect(d.status, DomainStatus.morePracticeMayHelp);
      expect(d.rounds, 10);
      expect(d.firstTry, 2);
      expect(d.needPractice, ['counting']);
    });
    test('mastery needs several days: one day of perfect rounds is only progress', () {
      expect(dom(report(rounds('counting', '2026-10-29', 10, 0)), Domain.numbers).status, DomainStatus.makingProgress);
      final two = [...rounds('counting', '2026-10-27', 5, 0), ...rounds('counting', '2026-10-29', 5, 0)];
      expect(dom(report(two), Domain.numbers).status, DomainStatus.showedMastery);
    });
    test('areas group several skills and count their rounds together', () {
      final r = report([...rounds('letters_ar', '2026-10-29', 3, 0), ...rounds('reading', '2026-10-28', 2, 1)]);
      final d = dom(r, Domain.letters);
      expect(d.rounds, 6);
      expect(d.days, 2);
      expect(d.practicedRecently, isTrue);
    });
    test('week trend compares the last 7 days with the 7 before; future records are ignored', () {
      final e = [...rounds('counting', '2026-10-29', 4, 0), ...rounds('counting', '2026-10-20', 2, 0), ...rounds('counting', '2026-11-05', 9, 0)];
      final r = report(e);
      expect(r.roundsThisWeek, 4);
      expect(r.roundsLastWeek, 2);
    });
    test('children are isolated', () {
      final e = [...rounds('counting', '2026-10-29', 5, 0, child: 'c2')];
      expect(report(e, child: 'c1').empty, isTrue);
      expect(report(e, child: 'c2').withData.length, 1);
    });
    test('records separate listening from practice from showed-understanding; creations count in creativity only', () {
      final recs = [
        LearningRecord('c1', '2026-10-29', RecordType.story, 's1', Evidence.exposure),
        LearningRecord('c1', '2026-10-29', RecordType.word, 'cat', Evidence.practice),
        LearningRecord('c1', '2026-10-28', RecordType.letter, 'ب', Evidence.demonstrated),
        LearningRecord('c1', '2026-10-28', RecordType.creative, 'drawing', Evidence.practice),
        LearningRecord('c2', '2026-10-28', RecordType.creative, 'drawing', Evidence.practice),
      ];
      final r = report([], r: recs);
      expect(r.activity.exposure, 1);
      expect(r.activity.practice, 2);
      expect(r.activity.demonstrated, 1);
      expect(dom(r, Domain.creativity).creations, 1);
      expect(dom(r, Domain.creativity).status, DomainStatus.makingProgress);
      expect(dom(r, Domain.story).status, DomainStatus.noData); // listening is not a recorded round
    });
  });

  group('family suggestions', () {
    test('an area needing practice gets an age-fit library activity with the recorded reason', () {
      final r = report(rounds('counting', '2026-10-29', 2, 8));
      final s = suggestFamilyActivities(r, age: 5, now: now);
      expect(s, isNotEmpty);
      expect(s.first.basedOnRecords, isTrue);
      expect(s.first.domain, Domain.numbers);
      expect(s.first.activity.minAge <= 5 && s.first.activity.maxAge >= 5, isTrue);
      expect(s.first.why, contains('2'));
    });
    test('with no data they are labelled as general ideas, and stable within a day', () {
      final r = report([]);
      final a = suggestFamilyActivities(r, age: 4, now: now);
      final b = suggestFamilyActivities(r, age: 4, now: DateTime(2026, 10, 29, 22));
      expect(a, isNotEmpty);
      expect(a.every((s) => !s.basedOnRecords), isTrue);
      expect(a.map((s) => s.activity.id), b.map((s) => s.activity.id));
    });
    test('only activities for the age are offered', () {
      for (final age in [1, 6, 10, 12]) {
        for (final s in suggestFamilyActivities(report([]), age: age, now: now, max: 10)) {
          expect(age >= s.activity.minAge && age <= s.activity.maxAge, isTrue);
        }
      }
    });
  });

  group('section widget', () {
    final child = ChildProfile(id: 'c1', nickname: 'ليلى', age: 5);
    Future<void> show(WidgetTester t, Future<(List<SkillEvent>, List<LearningRecord>)> Function() loader,
        {Size size = const Size(420, 900), String lang = 'ar'}) async {
      AppLocale.instance.set(lang);
      t.view.physicalSize = size;
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      await t.pumpWidget(MaterialApp(
        key: UniqueKey(),
        home: Scaffold(body: SingleChildScrollView(child: ParentInsightsSection(child: child, now: now, loader: loader))),
      ));
      await t.pump();
      await t.pump();
    }

    for (final lang in ['ar', 'en']) {
      for (final size in [const Size(320, 700), const Size(768, 1024), const Size(1280, 800)]) {
        testWidgets('empty history says so and still offers general ideas ($lang, ${size.width.toInt()})', (t) async {
          await show(t, () async => (<SkillEvent>[], <LearningRecord>[]), size: size, lang: lang);
          expect(find.byKey(const Key('insights-empty')), findsOneWidget);
          expect(find.byType(LinearProgressIndicator), findsNothing);
          expect(find.byIcon(Icons.family_restroom_rounded), findsWidgets);
        });
      }
    }

    testWidgets('with data: observed numbers and the estimate wording are shown, and a family activity opens the library', (t) async {
      await show(t, () async => (rounds('counting', '2026-10-29', 2, 8), <LearningRecord>[]), lang: 'en');
      expect(find.textContaining('Observed: 2 of 10 right on the first try'), findsOneWidget);
      expect(find.textContaining('More practice may help'), findsWidgets);
      expect(find.byType(LinearProgressIndicator), findsOneWidget);
      final tile = find.byWidgetPredicate((w) => w is ListTile && w.key.toString().contains('family-')).first;
      await t.tap(tile);
      await t.pumpAndSettle();
      expect(find.byType(ActivityLibraryScreen), findsOneWidget);
    });

    testWidgets('a failing read shows a retry instead of crashing', (t) async {
      var fail = true;
      await show(t, () async {
        if (fail) throw Exception('broken storage');
        return (<SkillEvent>[], <LearningRecord>[]);
      }, lang: 'en');
      expect(find.text('Try again'), findsOneWidget);
      fail = false;
      await t.tap(find.text('Try again'));
      await t.pump();
      await t.pump();
      expect(find.byKey(const Key('insights-empty')), findsOneWidget);
    });

    testWidgets('each area has one spoken label with observed and estimate', (t) async {
      await show(t, () async => (rounds('counting', '2026-10-29', 2, 8), <LearningRecord>[]), lang: 'en');
      final h = t.ensureSemantics();
      expect(find.bySemanticsLabel(RegExp(r'Numbers and counting\. Observed: 2 of 10.*Estimate: More practice may help')), findsOneWidget);
      h.dispose();
    });
  });
}
