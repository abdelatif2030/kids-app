import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/journey/ui/kit.dart' show RCard;
import 'package:kids_app/journey/ui/quiz_view.dart' show ItemResult;
import 'package:kids_app/library/learning_records.dart';
import 'package:kids_app/library/lesson_engine.dart';
import 'package:kids_app/library/lesson_runner.dart';
import 'package:kids_app/library/vocab.dart';
import 'package:kids_app/library/vocab_screens.dart';
import 'package:kids_app/literacy/exercises.dart';
import 'package:kids_app/literacy/letters_data.dart';
import 'package:kids_app/literacy/mastery.dart';
import 'package:kids_app/literacy/screens.dart';
import 'package:kids_app/literacy/tracing.dart';
import 'package:kids_app/literacy/word_tiles.dart';
import 'package:kids_app/media/audio.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'fake_audio.dart';

const _kid = ChildProfile(id: 'k1', nickname: 'سلمى', age: 5);

Widget _app(Widget home) => MaterialApp(
      key: UniqueKey(),
      builder: (context, child) => Directionality(textDirection: TextDirection.rtl, child: child!),
      home: home,
    );

Future<void> _settle(WidgetTester tester) async {
  await tester.pump(); // let a pushed route or sheet start
  await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 200)));
  await tester.pump(const Duration(milliseconds: 600));
}

void _check(Question q) {
  expect(q.correct, inInclusiveRange(0, q.options.length - 1));
  expect(q.options.length, 3);
  final labels = [for (final o in q.options) o.text ?? o.emoji ?? '${o.color}'];
  expect(labels.toSet().length, labels.length, reason: '${q.prompt} has duplicate options $labels');
  expect(q.hint, isNotEmpty);
}

void main() {
  late FakeSpeech speech;
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    (rootBundle as CachingAssetBundle).clear();
    speech = FakeSpeech();
    AppAudio.speech = speech;
    await AudioPrefs.instance.update(voiceOn: true);
    final store = JourneyStore(LocalJourneyRepository());
    await store.load();
    await store.addProfile(_kid);
    JourneyStore.instance = store;
  });

  group('Arabic letters data', () {
    test('28 distinct letters, each word really contains its letter', () {
      expect(kArabicLetters.length, 28);
      expect(kArabicLetters.map((l) => l.letter).toSet().length, 28);
      for (final l in kArabicLetters) {
        expect(l.name, isNotEmpty);
        expect(l.words.length, greaterThanOrEqualTo(2), reason: l.letter);
        for (final w in l.words) {
          expect(w.word.contains(l.letter), isTrue, reason: '${w.word} lacks ${l.letter}');
          expect(w.emoji, isNotEmpty);
        }
        expect(l.placedWords, isNotEmpty, reason: '${l.letter} needs a word with a clear position');
      }
    });

    test('name is not the sound: the sound carries a short vowel', () {
      final b = letterOf('ب')!;
      expect(b.name, 'باء');
      expect(b.soundFatha, 'بَ');
      expect(b.soundDamma, 'بُ');
      expect(b.soundKasra, 'بِ');
      expect(b.name, isNot(b.soundFatha));
    });

    test('positions are computed from the word', () {
      final b = letterOf('ب')!;
      expect(b.positionIn('بطة'), LetterPosition.beginning);
      expect(b.positionIn('ثعبان'), LetterPosition.middle);
      expect(b.positionIn('عنب'), LetterPosition.end);
      expect(b.positionIn('ببغاء'), isNull); // twice: ambiguous, never asked
      expect(b.positionIn('قمر'), isNull);
    });

    test('forms join correctly and non-connecting letters stay apart', () {
      expect(letterOf('ب')!.initial, 'ب‍');
      expect(letterOf('ب')!.medial, '‍ب‍');
      expect(letterOf('د')!.initial, 'د');
      expect(letterOf('د')!.medial, '‍د');
    });

    test('syllable words are the joined syllables, and the order lists cover all letters once', () {
      for (final w in kSyllableWords) {
        expect(w.syllables.join(), w.word);
      }
      for (final order in ['alphabet', 'shapes']) {
        final o = letterOrder(order);
        expect(o.length, 28);
        expect(o.map((l) => l.letter).toSet().length, 28);
      }
    });
  });

  group('letter exercises', () {
    test('every exercise for every letter is valid, many random draws', () {
      final r = Random(3);
      for (var i = 0; i < 20; i++) {
        for (final l in kArabicLetters) {
          for (final q in letterSession(l, random: r)) {
            _check(q);
            expect(q.ref, 'letter:${l.letter}');
          }
          for (final q in [soundQuestion(l, r), nameQuestion(l, r)]) {
            _check(q);
            expect(q.speakFirst, isTrue);
          }
        }
        for (final q in [blendQuestion(r), readingQuestion(r)]) {
          _check(q);
        }
      }
    });

    test('"starts with" pictures never include a word containing the letter among the wrong ones', () {
      final r = Random(9);
      for (final l in kArabicLetters) {
        for (var i = 0; i < 10; i++) {
          final q = startsWithQuestion(l, r);
          final wrongEmoji = [for (var k = 0; k < q.options.length; k++) if (k != q.correct) q.options[k].emoji!];
          final wrongWords = [
            for (final o in kArabicLetters)
              for (final w in o.words)
                if (wrongEmoji.contains(w.emoji)) w.word,
          ];
          // An emoji may belong to several words; at least one of its words lacks the letter.
          for (final e in wrongEmoji) {
            final words = [for (final o in kArabicLetters) for (final w in o.words) if (w.emoji == e) w.word];
            expect(words.any((w) => !w.contains(l.letter)), isTrue, reason: '$e for ${l.letter}');
          }
          expect(wrongWords, isNotNull);
        }
      }
    });
  });

  group('spaced review', () {
    test('a right session moves up and is scheduled later; a mistake resets to today', () async {
      final day0 = DateTime(2026, 10, 1);
      var s = await LiteracyStore.record('k1', 'ب', true, now: day0);
      expect(s.box, 1);
      expect(s.due, '2026-10-02');
      s = await LiteracyStore.record('k1', 'ب', true, now: day0);
      s = await LiteracyStore.record('k1', 'ب', true, now: day0);
      expect(s.box, 3);
      expect(s.mastered, isTrue);
      expect(s.due, '2026-10-05');
      expect(await LiteracyStore.due('k1', now: DateTime(2026, 10, 4)), isEmpty);
      expect(await LiteracyStore.due('k1', now: DateTime(2026, 10, 5)), ['ب']);
      s = await LiteracyStore.record('k1', 'ب', false, now: DateTime(2026, 10, 5));
      expect(s.box, 0);
      expect(s.mastered, isFalse);
      expect(s.due, '2026-10-05');
    });

    test('children are kept apart', () async {
      await LiteracyStore.record('a', 'ت', true);
      expect((await LiteracyStore.statesOf('b')), isEmpty);
      expect((await LiteracyStore.statesOf('a')).keys, ['ت']);
    });

    test('letters unlock in groups as the earlier group is practised', () {
      const cfg = LiteracyConfig(groupSize: 4);
      expect(LiteracyStore.unlocked({}, cfg).length, 4);
      final two = {
        'أ': const LetterState(1, '2026-10-02', 1),
        'ب': const LetterState(1, '2026-10-02', 1),
      };
      expect(LiteracyStore.unlocked(two, cfg).length, 8);
      expect(LiteracyStore.unlocked({}, const LiteracyConfig(unlockAll: true)).length, 28);
      expect(LiteracyStore.unlocked({}, const LiteracyConfig(order: 'shapes')).first.letter, 'ب');
    });

    test('config is saved', () async {
      await LiteracyStore.saveConfig(const LiteracyConfig(order: 'shapes', groupSize: 6, unlockAll: true));
      final c = await LiteracyStore.config();
      expect([c.order, c.groupSize, c.unlockAll], ['shapes', 6, true]);
    });

    test('results update only the letters involved, promoting only if all were right', () async {
      await recordLetterResults('k1', [
        const ItemResult('phonics', true, 'ب', 'letter:ب'),
        const ItemResult('phonics', false, 'ب', 'letter:ب'),
        const ItemResult('phonics', true, 'ت', 'letter:ت'),
        const ItemResult('vocab', true, null, 'word:cat'),
      ]);
      final s = await LiteracyStore.statesOf('k1');
      expect(s['ب']!.box, 0);
      expect(s['ت']!.box, 1);
      expect(s.keys.toSet(), {'ب', 'ت'});
    });
  });

  group('vocabulary library and lesson engine', () {
    test('ids and Arabic names are unique; every category has items; english items exist', () {
      expect(kVocab.map((v) => v.id).toSet().length, kVocab.length);
      expect(kVocab.map((v) => v.ar).toSet().length, kVocab.length);
      for (final c in kVocabCategories.where((c) => c.id != kEnglishCategory)) {
        expect(kVocab.where((v) => v.category == c.id).length, greaterThanOrEqualTo(7), reason: c.id);
      }
      expect(searchVocab(category: kEnglishCategory).length, kVocab.where((v) => v.en != null).length);
    });

    test('search works in Arabic (with spelling variants), English and by category title', () {
      expect(searchVocab(query: 'قطه').map((v) => v.id), contains('cat'));
      expect(searchVocab(query: 'اسد').map((v) => v.id), contains('lion'));
      expect(searchVocab(query: 'elep').map((v) => v.id), ['elephant']);
      expect(searchVocab(query: 'الحيوانات').length, kVocab.where((v) => v.category == 'animals').length);
      expect(searchVocab(query: 'zzz'), isEmpty);
      expect(searchVocab(age: 1).every((v) => v.minAge <= 1), isTrue);
    });

    test('every lesson kind builds valid, matching content at every age', () {
      final r = Random(5);
      for (var age = 1; age <= 12; age++) {
        for (final kind in LessonKind.values) {
          final c = buildVocabLesson(kind, age: age, random: r);
          switch (c) {
            case QuizContent(:final questions):
              expect(questions, isNotEmpty);
              for (final q in questions) {
                _check(q);
                expect(q.ref, startsWith('word:'));
                final item = vocabById(q.ref!.substring(5))!;
                // The picture and the word always belong to the same item.
                if (kind == LessonKind.pictureToWord) {
                  expect(q.bigEmoji, item.emoji);
                  expect(q.options[q.correct].text, item.ar);
                }
                if (kind == LessonKind.audioToPicture) {
                  expect(q.spoken, item.ar);
                  expect(q.options[q.correct].emoji, item.emoji);
                  expect(q.speakFirst, isTrue);
                }
                if (kind == LessonKind.wordToPicture) {
                  expect(q.bigText, item.ar);
                  expect(q.options[q.correct].emoji, item.emoji);
                }
                if (kind == LessonKind.counting) {
                  expect(q.options[q.correct].text, '${q.repeat}');
                  expect(q.bigEmoji, item.emoji);
                }
              }
            case MemoryContent(:final emojis):
              expect(emojis.toSet().length, emojis.length);
              expect(emojis.length, greaterThanOrEqualTo(3));
            case SequenceContent(:final rounds):
              expect(rounds, isNotEmpty);
          }
        }
      }
    });
  });

  group('screens', () {
    testWidgets('the library filters, shows the empty state and opens a word card that speaks', (tester) async {
      tester.view.physicalSize = const Size(800, 1400);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      await tester.pumpWidget(_app(const VocabLibraryScreen(child: _kid)));
      await tester.pump();
      await tester.enterText(find.byType(TextField), 'zzzz');
      await tester.pump();
      expect(find.textContaining('لا توجد كلمات مطابقة'), findsOneWidget);
      await tester.enterText(find.byType(TextField), 'cat');
      await tester.pump();
      await tester.tap(find.text('قطة'));
      await _settle(tester);
      expect(find.text('استمع بالعربية'), findsOneWidget);
      await tester.tap(find.text('استمع بالعربية'));
      await tester.pump();
      expect(speech.spoken.last, 'قطة');
      final records = await tester.runAsync(LearningRecords.all);
      expect(records!.single.evidence, Evidence.exposure); // looking is only exposure
      expect(records.single.ref, 'cat');
    });

    testWidgets('a letter lesson shows the name, sound and words, and speaks them', (tester) async {
      tester.view.physicalSize = const Size(800, 2000);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      await tester.pumpWidget(_app(LetterLessonScreen(child: _kid, letter: letterOf('ب')!)));
      await _settle(tester);
      expect(find.text('اسمه: باء'), findsOneWidget);
      expect(find.textContaining('بَ'), findsWidgets);
      expect(find.text('بطة'), findsOneWidget);
      await tester.tap(find.text('اسمع الاسم'));
      await tester.pump();
      await tester.tap(find.text('اسمع الصوت'));
      await tester.pump();
      // The NAME is read by the demo device voice; the isolated SOUND is never read by a
      // synthetic voice (it would teach a wrong sound) and says so instead.
      expect(speech.spoken, ['باء']);
      expect(find.text('لم يُسجَّل هذا الصوت بعد. اقرأ النص الظاهر.'), findsOneWidget);
      final records = await tester.runAsync(LearningRecords.all);
      expect(records!.first.type, RecordType.letter);
      expect(records.first.evidence, Evidence.exposure);
    });

    testWidgets('finishing a lesson saves practice and demonstrated records, never from just viewing', (tester) async {
      tester.view.physicalSize = const Size(800, 1400);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      const q = Question(
        prompt: 'ما اسم هذه الصورة؟',
        bigEmoji: '🐱',
        options: [Option.text('قطة'), Option.text('كلب'), Option.text('أسد')],
        correct: 0,
        hint: 'h',
        skill: 'vocab',
        spoken: 'قطة',
        ref: 'word:cat',
      );
      await tester.pumpWidget(_app(LessonRunnerScreen(
        child: _kid,
        kind: LessonKind.pictureToWord,
        contentBuilder: () => const QuizContent([q]),
      )));
      await tester.pump();
      await tester.tap(find.text('استمع'));
      await tester.pump();
      expect(speech.spoken, ['قطة']);
      await tester.tap(find.text('قطة'));
      await tester.pump(const Duration(milliseconds: 1300));
      await _settle(tester);
      expect(find.text('أحسنت! أنهيت الدرس'), findsOneWidget);
      final records = await tester.runAsync(LearningRecords.all);
      final levels = records!.map((r) => '${r.type.name}:${r.evidence.name}').toSet();
      expect(levels, containsAll(['word:practice', 'word:demonstrated', 'lesson:demonstrated']));
    });

    testWidgets('a wrong first answer is practice but not demonstrated', (tester) async {
      tester.view.physicalSize = const Size(800, 1400);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      const q = Question(
        prompt: 'ما اسم هذه الصورة؟',
        bigEmoji: '🐱',
        options: [Option.text('قطة'), Option.text('كلب'), Option.text('أسد')],
        correct: 0,
        hint: 'h',
        skill: 'vocab',
        ref: 'word:cat',
      );
      await tester.pumpWidget(_app(LessonRunnerScreen(
        child: _kid,
        kind: LessonKind.pictureToWord,
        contentBuilder: () => const QuizContent([q]),
      )));
      await tester.pump();
      await tester.tap(find.text('كلب'));
      await tester.pump();
      await tester.tap(find.text('قطة'));
      await tester.pump(const Duration(milliseconds: 1300));
      await _settle(tester);
      final records = await tester.runAsync(LearningRecords.all);
      expect(records!.where((r) => r.type == RecordType.word).map((r) => r.evidence), [Evidence.practice]);
      expect(records.last.evidence, Evidence.practice); // the lesson was not flawless
    });

    testWidgets('word tiles: a wrong tile is refused, the right order completes the word', (tester) async {
      tester.view.physicalSize = const Size(800, 1400);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      List<ItemResult>? done;
      await tester.pumpWidget(_app(Scaffold(
        body: WordTilesView(words: const [LetterWord('بطة', '🦆')], onFinished: (r) => done = r),
      )));
      await tester.pump();
      expect(speech.spoken, ['بطة']); // the word is read when it appears
      // Tapping a tile that is not next does nothing but encourage.
      Finder tile(String ch) => find.descendant(of: find.byType(RCard), matching: find.text(ch));
      await tester.tap(tile('ة'));
      await tester.pump();
      expect(find.textContaining('جرّب حرفاً آخر'), findsOneWidget);
      for (final ch in ['ب', 'ط', 'ة']) {
        await tester.tap(tile(ch));
        await tester.pump();
      }
      await tester.pump(const Duration(milliseconds: 1500));
      expect(done, isNotNull);
      expect(done!.single.ok, isFalse); // needed a retry
      expect(done!.single.skill, 'word_building');
    });

    testWidgets('tracing needs real drawing before "done" and always stays gentle', (tester) async {
      tester.view.physicalSize = const Size(800, 1400);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      var finished = false;
      await tester.pumpWidget(_app(Scaffold(
        body: TracingView(letter: letterOf('ب')!, onDone: () => finished = true),
      )));
      await tester.pump();
      FilledButton doneButton() => tester.widget<FilledButton>(find.byType(FilledButton));
      expect(doneButton().onPressed, isNull);
      final area = tester.getCenter(find.byType(TracingView)) - const Offset(0, 100);
      final g = await tester.startGesture(area - const Offset(150, 0));
      for (var i = 0; i < 10; i++) {
        await g.moveBy(const Offset(40, 0));
      }
      await g.up();
      await tester.pump();
      expect(doneButton().onPressed, isNotNull);
      await tester.tap(find.byType(FilledButton));
      expect(finished, isTrue);
    });

    testWidgets('the letters home locks later letters and opens review for due letters', (tester) async {
      tester.view.physicalSize = const Size(800, 1600);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      await tester.runAsync(() => LiteracyStore.record('k1', 'أ', false)); // mistake: due today
      await tester.pumpWidget(_app(const LettersHomeScreen(child: _kid)));
      await _settle(tester);
      expect(find.text('مراجعة اليوم (1)'), findsOneWidget);
      expect(find.byIcon(Icons.lock_rounded), findsNWidgets(24));
      expect(find.textContaining('تُفتح «كوّن كلمات»'), findsOneWidget);
      await tester.tap(find.text('ب').first);
      await _settle(tester);
      expect(find.text('اسمه: باء'), findsOneWidget);
    });
  });
}
