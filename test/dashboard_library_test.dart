import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/dashboard_screen.dart';
import 'package:kids_app/journey/home_tasks.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/journey/ui/audio_settings_screen.dart';
import 'package:kids_app/library/learning_records.dart';
import 'package:kids_app/library/learning_summary.dart';
import 'package:kids_app/literacy/mastery.dart';
import 'package:kids_app/media/audio.dart';
import 'package:kids_app/stories/story_store.dart';
import 'package:kids_app/studio/creations.dart';
import 'package:shared_preferences/shared_preferences.dart';

Widget _app(Widget home) => MaterialApp(
      key: UniqueKey(),
      builder: (context, child) => Directionality(textDirection: TextDirection.rtl, child: child!),
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

LearningRecord _r(RecordType t, String ref, Evidence e, {String day = '2026-10-10', int s = 0}) =>
    LearningRecord('k1', day, t, ref, e, s);

LearningSummary _build(
  List<LearningRecord> records, {
  List<ListenEntry> history = const [],
  Set<String> favorites = const {},
  Map<String, LetterState> letters = const {},
  int offline = 0,
}) =>
    buildLearningSummary(
      records: records,
      allRecords: records,
      history: history,
      weekFrom: '2026-10-04',
      favorites: favorites,
      letterStates: letters,
      offlineActivities: offline,
    );

void main() {
  setUp(() {
    SharedPreferences.setMockInitialValues({});
    (rootBundle as CachingAssetBundle).clear();
  });

  group('learning summary keeps exposure, practice and demonstrated apart', () {
    test('looking at a letter is exposure only; a right answer is demonstrated', () {
      final s = _build([
        _r(RecordType.letter, 'ب', Evidence.exposure),
        _r(RecordType.letter, 'ت', Evidence.exposure),
        _r(RecordType.letter, 'ت', Evidence.practice),
        _r(RecordType.letter, 'ت', Evidence.demonstrated),
      ]);
      expect(s.letters.exposure, {'ب', 'ت'});
      expect(s.letters.practice, {'ت'});
      expect(s.letters.demonstrated, {'ت'});
      expect(s.isEmpty, isFalse);
    });

    test('listening to a story never counts as understanding', () {
      final s = _build(
        [_r(RecordType.story, 'moon_star', Evidence.exposure, s: 300)],
        history: [const ListenEntry('moon_star', '2026-10-10', 300, true)],
      );
      expect(s.stories.single.seconds, 300);
      expect(s.stories.single.completed, isTrue);
      expect(s.stories.single.understoodChecked, isFalse);
      expect(s.lessonsCompleted, 0);
      expect(s.words.demonstrated, isEmpty);
      expect(s.letters.demonstrated, isEmpty);
      expect(s.nextSteps.any((t) => t.contains('الاستماع وحده لا يعني')), isTrue);
    });

    test('answering the story questions right is what marks understanding', () {
      final s = _build(
        [
          _r(RecordType.story, 'moon_star', Evidence.exposure, s: 300),
          _r(RecordType.story, 'moon_star', Evidence.demonstrated),
        ],
        history: [const ListenEntry('moon_star', '2026-10-10', 300, true)],
      );
      expect(s.stories.single.understoodChecked, isTrue);
      expect(s.nextSteps.any((t) => t.contains('الاستماع وحده')), isFalse);
    });

    test('only this week counts for stories, and favourites are listed by title', () {
      final s = _build(
        const [],
        history: [
          const ListenEntry('moon_star', '2026-09-01', 600, true), // before the week
          const ListenEntry('three_apples', '2026-10-06', 120, false),
        ],
        favorites: {'moon_star', 'unknown_id'},
      );
      expect(s.stories.map((e) => e.id), ['three_apples']);
      expect(s.favoriteStories, ['القمر والنجمة النعسانة']);
    });

    test('needs practice: letters back at the start and words never answered right', () {
      final s = _build(
        [
          _r(RecordType.word, 'cat', Evidence.practice),
          _r(RecordType.word, 'dog', Evidence.practice),
          _r(RecordType.word, 'dog', Evidence.demonstrated),
        ],
        letters: {
          'ب': const LetterState(0, '2026-10-10', 2),
          'ت': const LetterState(4, '2026-10-20', 5),
        },
      );
      expect(s.needsPractice, contains('حرف ب (باء)'));
      expect(s.needsPractice, contains('كلمة قطة'));
      expect(s.needsPractice.any((n) => n.contains('كلب')), isFalse);
      expect(s.needsPractice.any((n) => n.contains('ت')), isFalse); // mastered letter
      expect(s.masteredLetters, 1);
      expect(s.nextSteps.any((t) => t.contains('ب')), isTrue);
    });

    test('an empty week suggests a first step and says nothing invented', () {
      final s = _build(const []);
      expect(s.isEmpty, isTrue);
      expect(s.nextSteps.any((t) => t.contains('ابدؤوا بدرس قصير')), isTrue);
      expect(s.lessonsCompleted, 0);
      expect(s.stories, isEmpty);
    });

    test('offline activities and creations are counted separately from learning', () {
      final s = _build([_r(RecordType.creative, 'drawing', Evidence.practice)], offline: 2);
      expect(s.offlineActivities, 2);
      expect(s.creations, 1);
      expect(s.nextSteps.any((t) => t.contains('أنشطة مع الأهل')), isFalse);
    });
  });

  group('dashboard shows real records only', () {
    void tall(WidgetTester tester) {
      tester.view.physicalSize = const Size(800, 5200);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
    }

    Future<void> seedChild() async {
      final store = JourneyStore(LocalJourneyRepository());
      await store.load();
      await store.addProfile(const ChildProfile(id: 'k1', nickname: 'سلمى', age: 5));
      JourneyStore.instance = store;
    }

    testWidgets('a new child: honest empty state, no invented numbers', (tester) async {
      tall(tester);
      await tester.runAsync(seedChild);
      await tester.pumpWidget(_app(const DashboardScreen()));
      await _load(tester);
      expect(find.text('الحروف والكلمات والقصص'), findsOneWidget);
      expect(find.textContaining('ستظهر هنا نتائج حقيقية فقط'), findsOneWidget);
    });

    testWidgets('after real interactions the section shows each kind of evidence', (tester) async {
      tall(tester);
      await tester.runAsync(() async {
        await seedChild();
        await LearningRecords.add('k1', RecordType.letter, 'ب', Evidence.exposure);
        await LearningRecords.add('k1', RecordType.letter, 'ب', Evidence.practice);
        await LearningRecords.add('k1', RecordType.letter, 'ب', Evidence.demonstrated);
        await LearningRecords.add('k1', RecordType.lesson, 'pictureToWord:animals', Evidence.demonstrated);
        await LearningRecords.add('k1', RecordType.story, 'moon_star', Evidence.exposure, seconds: 180);
        await StoryStore.addListening('k1', 'moon_star', 180, completed: true);
        await StoryStore.toggleFavorite('k1', 'moon_star');
        await LiteracyStore.record('k1', 'ب', false);
        await HomeTasks.addDone('k1', 'activity', 'ثلاثة أشياء مستديرة');
      });
      await tester.pumpWidget(_app(const DashboardScreen()));
      await _load(tester);
      expect(find.text('الحروف'), findsOneWidget);
      expect(find.text('اطّلع عليها (تعرّض)'), findsOneWidget);
      expect(find.text('أجاب صحيحاً من أول مرة'), findsNWidgets(2)); // letters and words
      expect(find.text('وقت الاستماع (تعرّض فقط)'), findsOneWidget);
      expect(find.text('3 د'), findsOneWidget);
      expect(find.textContaining('الاستماع لا يعني الإتقان'), findsOneWidget);
      expect(find.textContaining('أكملها'), findsOneWidget);
      expect(find.text('المفضلة: القمر والنجمة النعسانة'), findsOneWidget);
      expect(find.text('حرف ب (باء)'), findsNothing); // listed as "• حرف ب (باء)" under needs practice
      expect(find.textContaining('حرف ب (باء)'), findsWidgets);
      expect(find.textContaining('ليست تشخيصاً'), findsOneWidget);
    });
  });

  group('audio and learning settings', () {
    testWidgets('changes are saved for the next launch', (tester) async {
      tester.view.physicalSize = const Size(800, 2000);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      await tester.pumpWidget(_app(const AudioSettingsScreen()));
      await _load(tester);
      expect(find.textContaining('لا يحتاج هذا الإعداد إلى الميكروفون ولا الكاميرا'), findsOneWidget);
      await tester.tap(find.text('القراءة بالصوت'));
      await tester.pump();
      expect(AudioPrefs.instance.voiceOn, isFalse);
      await tester.tap(find.text('فتح كل الحروف'));
      await _load(tester);
      expect((await tester.runAsync(LiteracyStore.config))!.unlockAll, isTrue);
      AudioPrefs.instance
        ..voiceOn = false
        ..ambient = 'wind';
      await tester.runAsync(() => AudioPrefs.instance.update(ambient: 'rain', speechRate: 0.75, voiceOn: true));
      AudioPrefs.instance
        ..voiceOn = false
        ..ambient = 'none'
        ..speechRate = 1.0;
      await tester.runAsync(AudioPrefs.instance.load);
      expect(AudioPrefs.instance.ambient, 'rain');
      expect(AudioPrefs.instance.speechRate, 0.75);
      expect(AudioPrefs.instance.voiceOn, isTrue);
      await tester.runAsync(() => AudioPrefs.instance.update(ambient: 'none', speechRate: 1.0));
    });

    testWidgets('the data export shows exactly what is stored for one child', (tester) async {
      tester.view.physicalSize = const Size(800, 2400);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      await tester.runAsync(() async {
        final store = JourneyStore(LocalJourneyRepository());
        await store.load();
        await store.addProfile(const ChildProfile(id: 'k1', nickname: 'سلمى', age: 5));
        await store.addProfile(const ChildProfile(id: 'k2', nickname: 'نور', age: 3));
        JourneyStore.instance = store;
        await LearningRecords.add('k1', RecordType.word, 'cat', Evidence.practice);
        await LearningRecords.add('k2', RecordType.word, 'dog', Evidence.practice);
        await FamilyGallery.save(Creation('g', 'k1', CreationKind.story, '2026-10-10', {'pics': ['🐱']}));
      });
      await tester.pumpWidget(_app(const DataExportScreen()));
      await tester.pump();
      await tester.tap(find.text('سلمى'));
      await _load(tester);
      expect(find.textContaining('"learningRecords"'), findsOneWidget);
      final text = tester.widget<SelectableText>(find.byType(SelectableText)).data!;
      expect(text, contains('"r": "cat"'));
      expect(text, isNot(contains('"r": "dog"'))); // the other child is not included
      expect(text, contains('"gallery"'));
      expect(text, contains('على هذا الجهاز فقط'));
    });
  });
}
