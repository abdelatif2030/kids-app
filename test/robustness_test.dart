import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/journey/home_tasks.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/journey/ui/report_screen.dart';
import 'package:kids_app/library/learning_records.dart';
import 'package:kids_app/literacy/mastery.dart';
import 'package:kids_app/progress_store.dart';
import 'package:kids_app/stories/story_store.dart';
import 'package:kids_app/studio/creations.dart';
import 'package:kids_app/watch_history.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  group('damaged storage never crashes the app', () {
    const garbage = '{"this is": not json';
    const keys = [
      'rj_profiles', 'rj_attempts', 'rj_custom', 'rj_settings', 'skill_events', 'watch_history',
      'learning_records', 'home_tasks', 'family_gallery', 'story_state', 'literacy_state', 'literacy_config',
    ];

    test('every store loads empty from garbage and keeps a copy of the damaged text', () async {
      SharedPreferences.setMockInitialValues({for (final k in keys) k: garbage});
      final store = JourneyStore(LocalJourneyRepository());
      await store.load();
      expect(store.profiles, isEmpty);
      expect(store.settings.draftLands, isEmpty);
      expect(await ProgressStore.load(), isEmpty);
      expect(await WatchHistory.load(), isEmpty);
      expect(await LearningRecords.all(), isEmpty);
      expect(await HomeTasks.all(), isEmpty);
      expect(await FamilyGallery.all(), isEmpty);
      expect(await StoryStore.favorites('k1'), isEmpty);
      expect(await StoryStore.history('k1'), isEmpty);
      expect(await LiteracyStore.statesOf('k1'), isEmpty);
      expect((await LiteracyStore.config()).order, 'alphabet');
      final p = await SharedPreferences.getInstance();
      for (final k in keys) {
        expect(p.getString('${k}__damaged'), garbage, reason: k);
      }
    });

    test('after damage the app keeps working: new data can be saved and read', () async {
      SharedPreferences.setMockInitialValues({'learning_records': garbage, 'family_gallery': garbage});
      await LearningRecords.add('k1', RecordType.word, 'cat', Evidence.practice);
      expect((await LearningRecords.all()).single.ref, 'cat');
      expect(await FamilyGallery.save(Creation('a', 'k1', CreationKind.story, '2026-10-01', {'pics': ['🐱']})), isTrue);
      expect((await FamilyGallery.all()).length, 1);
    });

    test('one unreadable entry is skipped, the good ones survive', () async {
      SharedPreferences.setMockInitialValues({
        'learning_records':
            '[{"c":"k1","d":"2099-01-01","t":"word","r":"cat","e":"practice","s":0},'
                '{"c":"k1","d":"2099-01-01","t":"NOT_A_TYPE","r":"x","e":"practice"},'
                '{"broken":true},'
                '{"c":"k1","d":"2099-01-01","t":"letter","r":"ب","e":"demonstrated","s":0}]',
      });
      final all = await LearningRecords.all();
      expect(all.map((r) => r.ref), ['cat', 'ب']);
    });

    test('a damaged profile list does not stop other lists from loading', () async {
      SharedPreferences.setMockInitialValues({
        'rj_profiles': garbage,
        'rj_attempts': '[{"c":"k1","a":"letters_1","d":"2026-10-01","t":5,"f":5,"s":30,"r":3}]',
      });
      final store = JourneyStore(LocalJourneyRepository());
      await store.load();
      expect(store.profiles, isEmpty);
      expect(store.attemptsOf('k1').length, 1);
    });
  });

  group('report a problem', () {
    test('the message contains the type, place and note, and nothing about a child', () {
      final t = buildReportText(type: 'معلومة أو نطق خاطئ', area: 'حرف أو كلمة', note: ' حرف الظاء ', version: '1.0.0');
      expect(t, contains('معلومة أو نطق خاطئ'));
      expect(t, contains('حرف الظاء'));
      expect(t, contains('1.0.0'));
      expect(t, isNot(contains('سلمى')));
      expect(buildReportText(type: 'a', area: 'b', note: '   ', version: 'v'), contains('التفاصيل: —'));
    });

    testWidgets('the parent screen builds the message live and says nothing is sent automatically', (tester) async {
      tester.view.physicalSize = const Size(800, 1600);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      await tester.pumpWidget(MaterialApp(
        builder: (c, ch) => Directionality(textDirection: TextDirection.rtl, child: ch!),
        home: const ReportProblemScreen(),
      ));
      expect(find.textContaining('لا يرسل التطبيق شيئاً من تلقاء نفسه'), findsOneWidget);
      await tester.tap(find.text('مشكلة في الصوت'));
      await tester.enterText(find.byType(TextField), 'القصة الأولى لا تُقرأ');
      await tester.pump();
      expect(find.textContaining('النوع: مشكلة في الصوت'), findsOneWidget);
      expect(find.textContaining('القصة الأولى لا تُقرأ'), findsWidgets);
    });
  });
}
