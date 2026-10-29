import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/assistant/assistant_screen.dart';
import 'package:kids_app/assistant/planner.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/main.dart' show Video;
import 'package:shared_preferences/shared_preferences.dart';

Video v(String id, String subject, {String lang = 'ar', int min = 1, int max = 12, String cat = 'Learning'}) =>
    Video(youtubeId: id, title: 'T-$id', category: cat, minAge: min, maxAge: max, language: lang, subject: subject);

final videos = [
  v('a1', 'arabic'), v('a2', 'arabic'), v('m1', 'math'), v('m2', 'math'), v('s1', 'stories'), v('e1', 'english', lang: 'en'),
  v('d1', 'discover'), v('d2', 'discover'), v('old', 'math', min: 9, max: 12),
];

ParentIntake intake({Set<String> loves = const {}, Set<String> needs = const {}, Set<String> traits = const {}, int minutes = 20, int age = 5, String note = '', String lang = 'both'}) =>
    ParentIntake(age: age, nickname: 'ليلى', loves: loves, needsHelp: needs, traits: traits, minutesPerDay: minutes, note: note, learnLang: lang);

void main() {
  setUp(() {
    SharedPreferences.setMockInitialValues({});
    AppLocale.instance.set('ar');
  });

  group('note reading', () {
    test('a topic with a worry word needs help; a topic without one is loved (Arabic and English)', () {
      final r = parseNote('يحب القصص والألوان. الحروف صعبة عليه. Loves stories, math is hard');
      expect(r.loves, containsAll(['stories', 'colors']));
      expect(r.needsHelp, containsAll(['letters', 'numbers']));
      expect(r.loves.contains('letters'), isFalse);
    });
    test('traits are found; unrelated text finds nothing and never throws', () {
      expect(parseNote('طفل نشيط وفضولي ويشرد').traits, containsAll(['energetic', 'curious', 'distracted']));
      final none = parseNote('hello there');
      expect(none.loves.isEmpty && none.needsHelp.isEmpty && none.traits.isEmpty, isTrue);
      expect(parseNote('').loves, isEmpty);
    });
    test('chips the parent chose are never removed by the note', () {
      final i = intake(loves: {'brain'}, needs: {'letters'}, note: 'الحروف ممتعة').withNote();
      expect(i.needsHelp, contains('letters'));
      expect(i.loves, contains('brain'));
    });
  });

  group('plans', () {
    test('three different complete plans, deterministic', () {
      final a = buildPlans(intake(needs: {'letters'}, loves: {'stories'}), videos);
      final b = buildPlans(intake(needs: {'letters'}, loves: {'stories'}), videos);
      expect(a.map((p) => p.id), ['balanced', 'focus', 'fun']);
      expect(a.map((p) => p.lands.join(',')), b.map((p) => p.lands.join(',')));
      expect(a.map((p) => p.lands.join(',')).toSet().length, greaterThan(1));
      for (final p in a) {
        expect(p.reasons, isNotEmpty);
        expect(p.lands, isNotEmpty);
        expect(p.dailyCount, inInclusiveRange(2, 5));
      }
    });
    test('the focus plan starts with what needs help and is one step easier; reasons name it', () {
      final p = buildPlans(intake(needs: {'numbers'}), videos).firstWhere((p) => p.id == 'focus');
      expect(p.lands.first, 'numbers');
      expect(p.bias, -1);
      expect(p.reasons.any((r) => r.contains('الأرقام')), isTrue);
    });
    test('the fun plan starts with what the child loves', () {
      final p = buildPlans(intake(loves: {'brain'}), videos).firstWhere((p) => p.id == 'fun');
      expect(p.lands.first, 'brain');
    });
    test('minutes and attention set the daily number; every land fits the age', () {
      expect(buildPlans(intake(minutes: 10), videos).first.dailyCount, 2);
      expect(buildPlans(intake(minutes: 40), videos).first.dailyCount, 5);
      expect(buildPlans(intake(minutes: 40, traits: {'distracted'}), videos).first.dailyCount, 3);
      for (final age in [2, 5, 9]) {
        final allowed = landsForAge(age, 'both');
        for (final p in buildPlans(intake(age: age), videos)) {
          expect(p.lands.every(allowed.contains), isTrue, reason: 'age $age ${p.id}');
        }
      }
    });
    test('videos only come from the given whitelist, fit the age and are not repeated', () {
      for (final p in buildPlans(intake(age: 5, needs: {'numbers'}, loves: {'letters'}), videos)) {
        expect(p.videos.length, lessThanOrEqualTo(6));
        expect(p.videos.toSet().length, p.videos.length);
        for (final x in p.videos) {
          expect(videos.contains(x), isTrue);
          expect(5 >= x.minAge && 5 <= x.maxAge, isTrue);
        }
      }
    });
    test('with no videos the plans still work', () {
      expect(buildPlans(intake(), const []).every((p) => p.videos.isEmpty && p.lands.isNotEmpty), isTrue);
    });
    test('applying a plan changes the plan fields only and keeps the child\'s identity', () {
      final child = ChildProfile(id: 'c1', nickname: 'ليلى', age: 5, avatar: 'bear', hasPhoto: true);
      final plan = buildPlans(intake(needs: {'numbers'}), videos)[1];
      final next = applyPlanToProfile(child, plan);
      expect(next.id, 'c1');
      expect(next.avatar, 'bear');
      expect(next.hasPhoto, isTrue);
      expect(next.plan, plan.lands);
      expect(next.bias, -1);
    });
  });

  group('screen', () {
    final child = ChildProfile(id: 'c1', nickname: 'ليلى', age: 5);

    Future<void> open(WidgetTester t, {String lang = 'ar', Size size = const Size(420, 900)}) async {
      AppLocale.instance.set(lang);
      t.view.physicalSize = size;
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      final store = JourneyStore(LocalJourneyRepository());
      await t.runAsync(store.load);
      await t.runAsync(() => store.addProfile(child));
      JourneyStore.instance = store;
      await t.pumpWidget(MaterialApp(key: UniqueKey(), home: PlanAssistantScreen(child: child, loadVideosFn: () async => videos)));
      await t.pump(const Duration(milliseconds: 600));
    }

    for (final lang in ['ar', 'en']) {
      for (final size in [const Size(320, 700), const Size(768, 1024), const Size(1280, 800)]) {
        testWidgets('prepare shows three plans with videos ($lang, ${size.width.toInt()} px)', (t) async {
          await open(t, lang: lang, size: size);
          final list = find.byType(Scrollable).first;
          await t.scrollUntilVisible(find.byKey(const ValueKey('note')), 300, scrollable: list);
          await t.enterText(find.byKey(const ValueKey('note')), 'يحب الحيوانات والرسم، والحروف صعبة، ويشرد بسرعة');
          await t.scrollUntilVisible(find.byKey(const ValueKey('prepare')), 300, scrollable: list);
          await t.tap(find.byKey(const ValueKey('prepare')));
          await t.pump();
          await t.pump(const Duration(milliseconds: 800));
          for (final id in ['balanced', 'focus', 'fun']) {
            await t.scrollUntilVisible(find.byKey(ValueKey('plan_$id')), 300, scrollable: list);
            expect(find.byKey(ValueKey('plan_$id')), findsOneWidget);
          }
        });
      }
    }

    testWidgets('using a plan saves it to the child and the weekly goals, and says so', (t) async {
      await open(t);
      final list = find.byType(Scrollable).first;
      await t.scrollUntilVisible(find.byKey(const ValueKey('prepare')), 300, scrollable: list);
      await t.tap(find.byKey(const ValueKey('prepare')));
      await t.pump();
      await t.pump(const Duration(milliseconds: 800));
      await t.scrollUntilVisible(find.byKey(const ValueKey('use_focus')), 300, scrollable: list);
      await t.ensureVisible(find.byKey(const ValueKey('use_focus')));
      await t.pump();
      await t.tap(find.byKey(const ValueKey('use_focus')));
      await t.pump();
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 50)));
      await t.pump();
      expect(find.byKey(const ValueKey('applied')), findsOneWidget);
      final saved = JourneyStore.instance.profileById('c1')!;
      expect(saved.bias, -1);
      expect(saved.plan, isNotEmpty);
      final prefs = await t.runAsync(SharedPreferences.getInstance);
      expect(prefs!.getKeys().any((k) => k.startsWith('plan_target_')), isTrue);
    });
  });
}
