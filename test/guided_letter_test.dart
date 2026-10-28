import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/library/learning_records.dart';
import 'package:kids_app/literacy/guided_lesson.dart';
import 'package:kids_app/literacy/letters_data.dart';
import 'package:kids_app/literacy/mastery.dart';
import 'package:kids_app/media/audio.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'fake_audio.dart';

const _kid = ChildProfile(id: 'k1', nickname: 'سلمى', age: 5);

Widget _app(Widget home) => MaterialApp(
      key: UniqueKey(),
      builder: (c, child) => Directionality(textDirection: AppLocale.instance.direction, child: child!),
      home: home,
    );

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

  final ba = kArabicLetters.firstWhere((l) => l.letter == 'ب');

  Future<void> next(WidgetTester t) async {
    await t.tap(find.text('التالي'));
    await t.pump();
  }

  testWidgets('a clean run records demonstrated; opened and audio stay exposure only', (tester) async {
    tester.view.physicalSize = const Size(900, 2200);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.reset);
    await tester.pumpWidget(_app(GuidedLetterLesson(child: _kid, letter: ba)));
    await tester.pump();
    await tester.tap(find.text('اسمع الاسم'));
    await tester.pump();
    var recs = (await tester.runAsync(() => LearningRecords.forChild('k1')))!;
    expect(recs.map((r) => [r.ref, r.evidence]), containsAll([
      ['ب', Evidence.exposure],
      ['audio:ب', Evidence.exposure],
    ]));
    expect(recs.any((r) => r.evidence == Evidence.demonstrated), isFalse); // hearing is not mastery
    await next(tester);
    await next(tester);
    await next(tester);
    await tester.tap(find.widgetWithText(OutlinedButton, 'ب')); // find the letter
    await tester.pump();
    await next(tester);
    final cards = find.byWidgetPredicate((w) => w is OutlinedButton);
    // The right picture is the one whose word contains ب.
    final right = [for (var i = 0; i < 3; i++) i].firstWhere((i) {
      final t = (tester.widget<OutlinedButton>(cards.at(i)).child as Column).children[1] as Text;
      return t.data!.contains('ب');
    });
    await tester.tap(cards.at(right));
    await tester.pump();
    await next(tester);
    await tester.tap(find.widgetWithText(OutlinedButton, 'ب'));
    await tester.pump();
    await tester.tap(find.text('إنهاء الدرس'));
    await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 300)));
    await tester.pump();
    expect(find.text('أنهيت درس حرف باء!'), findsOneWidget);
    expect(find.text('أجبت صح من أول مرة على 3 من 3.'), findsOneWidget);
    recs = (await tester.runAsync(() => LearningRecords.forChild('k1')))!;
    expect(recs.any((r) => r.ref == 'ب' && r.evidence == Evidence.demonstrated), isTrue);
    final state = (await tester.runAsync(() => LiteracyStore.statesOf('k1')))!;
    expect(state['ب']!.box, 1);
  });

  testWidgets('a wrong first tap means practice, not demonstrated; and English shows English instructions', (tester) async {
    tester.view.physicalSize = const Size(900, 2200);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.reset);
    await tester.runAsync(() => AppLocale.instance.set('en'));
    addTearDown(() => AppLocale.instance.set('ar'));
    await tester.pumpWidget(_app(GuidedLetterLesson(child: _kid, letter: ba)));
    await tester.pump();
    expect(find.text('Hear the name'), findsOneWidget);
    expect(Directionality.of(tester.element(find.text('Hear the name'))), TextDirection.ltr);
    await tester.tap(find.text('Next'));
    await tester.pump();
    await tester.tap(find.text('Next'));
    await tester.pump();
    await tester.tap(find.text('Next'));
    await tester.pump();
    await tester.tap(find.widgetWithText(OutlinedButton, 'ط')); // wrong first
    await tester.pump();
    expect(find.text('Try again 🌈'), findsOneWidget);
    await tester.tap(find.widgetWithText(OutlinedButton, 'ب'));
    await tester.pump();
    await tester.tap(find.text('Next'));
    await tester.pump();
    final cards = find.byWidgetPredicate((w) => w is OutlinedButton);
    for (var i = 0; i < 3; i++) {
      await tester.tap(cards.at(i), warnIfMissed: false);
      await tester.pump();
    }
    await tester.tap(find.text('Next'));
    await tester.pump();
    await tester.tap(find.widgetWithText(OutlinedButton, 'ب'));
    await tester.pump();
    await tester.tap(find.text('Finish the lesson'));
    await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 300)));
    await tester.pump();
    final recs = (await tester.runAsync(() => LearningRecords.forChild('k1')))!;
    expect(recs.any((r) => r.ref == 'ب' && r.evidence == Evidence.practice), isTrue);
    expect(recs.any((r) => r.ref == 'ب' && r.evidence == Evidence.demonstrated), isFalse);
    final state = (await tester.runAsync(() => LiteracyStore.statesOf('k1')))!;
    expect(state['ب']!.box, 0); // not promoted
  });

  test('every letter can build a lesson: a word with it, two pictures without it', () {
    for (final l in kArabicLetters) {
      final pool = l.placedWords.isEmpty ? l.words : [for (final p in l.placedWords) p.$1];
      expect(pool, isNotEmpty, reason: l.letter);
      final others = [
        for (final o in kArabicLetters)
          if (o.letter != l.letter)
            for (final w in o.words)
              if (!w.word.contains(l.letter)) w.word,
      ].toSet();
      expect(others.length, greaterThanOrEqualTo(2), reason: l.letter);
    }
  });
}
