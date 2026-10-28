import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/data_reset.dart';
import 'package:kids_app/games/choice_games.dart';
import 'package:kids_app/games/review_game.dart';
import 'package:kids_app/games/word_book_game.dart';
import 'package:kids_app/journey/favorites.dart';
import 'package:kids_app/journey/feelings.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/ui/heart_button.dart';
import 'package:kids_app/journey/ui/library_screen.dart';
import 'package:kids_app/journey/ui/my_day_cards.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/library/learning_records.dart';
import 'package:kids_app/library/vocab.dart';
import 'package:kids_app/stories/story_store.dart';
import 'package:shared_preferences/shared_preferences.dart';

const _kid = ChildProfile(id: 'k1', nickname: 'Lina', age: 5);

Future<void> _show(WidgetTester t, Widget w) async {
  t.view.physicalSize = const Size(900, 2400);
  t.view.devicePixelRatio = 1;
  addTearDown(t.view.reset);
  await t.pumpWidget(MaterialApp(key: UniqueKey(), home: Scaffold(body: SingleChildScrollView(child: w))));
  await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 80)));
  await t.pump();
}

Future<void> _meet(WidgetTester t, List<String> ids, {String child = 'k1'}) async {
  await t.runAsync(() async {
    for (final id in ids) {
      await LearningRecords.add(child, RecordType.word, id, Evidence.exposure);
    }
  });
}

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('ar');
  });

  group('feelings', () {
    test('one optional choice per day, replaceable, private to the child, kept 30 days', () async {
      final t = DateTime(2026, 11, 10, 9);
      expect(await FeelingStore.today('k1', now: t), isNull);
      await FeelingStore.set('k1', 'tired', now: t);
      expect((await FeelingStore.today('k1', now: t))!.id, 'tired');
      await FeelingStore.set('k1', 'happy', now: t);
      expect((await FeelingStore.today('k1', now: t))!.id, 'happy');
      expect(await FeelingStore.today('k2', now: t), isNull);
      expect(await FeelingStore.today('k1', now: t.add(const Duration(days: 1))), isNull); // a new day starts blank
      await FeelingStore.set('k1', 'calm', now: t.add(const Duration(days: 40)));
      final prefs = await SharedPreferences.getInstance();
      expect(prefs.getString('feeling_log'), isNot(contains('2026-11-10'))); // old days are dropped
    });

    test('every feeling has a kind reply, and the sad and angry ones point to a parent, with no diagnosis words', () {
      expect(kFeelings.length, 6);
      for (final f in kFeelings) {
        expect(f.reply(), isNotEmpty);
        expect(f.reply(), isNot(contains('مشكلة')));
      }
      expect(feelingById('sad')!.reply(), contains('ماما أو بابا'));
      expect(feelingById('angry')!.reply(), contains('ماما أو بابا'));
      expect(feelingById('nope'), isNull);
    });

    testWidgets('picking a face shows the reply and saves it; doing nothing is fine', (tester) async {
      await _show(tester, const FeelingCard(child: _kid));
      expect(find.byKey(const ValueKey('feeling_reply')), findsNothing);
      await tester.tap(find.byKey(const ValueKey('feeling_tired')));
      await tester.pump();
      expect(find.byKey(const ValueKey('feeling_reply')), findsOneWidget);
      expect((await tester.runAsync(() => FeelingStore.today('k1')))!.id, 'tired');
      await tester.tap(find.byKey(const ValueKey('feeling_happy')));
      await tester.pump();
      expect((await tester.runAsync(() => FeelingStore.today('k1')))!.id, 'happy');
    });
  });

  group('favourites and the library', () {
    test('toggle, per kind and per child', () async {
      expect(await FavoritesStore.toggle('k1', 'word', 'cat'), true);
      expect(await FavoritesStore.of('k1', 'word'), {'cat'});
      expect(await FavoritesStore.of('k1', 'game'), isEmpty);
      expect(await FavoritesStore.of('k2', 'word'), isEmpty);
      expect(await FavoritesStore.toggle('k1', 'word', 'cat'), false);
      expect(await FavoritesStore.of('k1', 'word'), isEmpty);
    });

    test('damaged favourites never crash, and deleting a child removes them with feelings', () async {
      SharedPreferences.setMockInitialValues({'favorites': '[[[', 'feeling_log': 'x'});
      expect(await FavoritesStore.of('k1', 'word'), isEmpty);
      await FavoritesStore.toggle('k1', 'word', 'cat');
      await FeelingStore.set('k1', 'happy');
      await FavoritesStore.toggle('k2', 'word', 'dog');
      await FavoritesStore.forget('k1');
      await FeelingStore.forget('k1');
      expect(await FavoritesStore.of('k1', 'word'), isEmpty);
      expect(await FavoritesStore.of('k2', 'word'), {'dog'});
      await deleteChildData();
      expect(await FavoritesStore.of('k2', 'word'), isEmpty);
    });

    testWidgets('the heart shows the saved state and toggles it', (tester) async {
      await tester.runAsync(() => FavoritesStore.toggle('k1', 'word', 'cat'));
      await _show(tester, const HeartButton(childId: 'k1', kind: 'word', refId: 'cat'));
      expect(find.byIcon(Icons.favorite_rounded), findsOneWidget);
      await tester.tap(find.byType(IconButton));
      await tester.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 50)));
      await tester.pump();
      expect(find.byIcon(Icons.favorite_border_rounded), findsOneWidget);
      expect(await tester.runAsync(() => FavoritesStore.of('k1', 'word')), isEmpty);
    });

    testWidgets('a word card with a child has a heart; the library lists hearts from words and stories', (tester) async {
      await tester.runAsync(() async {
        await FavoritesStore.toggle('k1', 'word', 'cat');
        await StoryStore.toggleFavorite('k1', 'moon_star');
      });
      await tester.pumpWidget(MaterialApp(key: UniqueKey(), home: MyLibraryScreen(child: _kid)));
      await tester.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 100)));
      await tester.pump();
      expect(find.text('كلماتي'), findsOneWidget);
      expect(find.text('قطة'), findsOneWidget);
      expect(find.text('قصصي'), findsOneWidget);
      expect(find.text('ألعابي'), findsNothing);
    });

    testWidgets('an empty library explains how to add things, without any pressure', (tester) async {
      await tester.pumpWidget(MaterialApp(key: UniqueKey(), home: MyLibraryScreen(child: _kid)));
      await tester.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 100)));
      await tester.pump();
      expect(find.textContaining('اضغط على القلب'), findsOneWidget);
      expect(find.text('تعرّف على 3 كلمات أولاً.'), findsOneWidget);
    });

    testWidgets('opening a word card for a child shows its heart', (tester) async {
      final cat = vocabById('cat')!;
      await tester.pumpWidget(MaterialApp(key: UniqueKey(), home: WordCardScreen(word: cat, childId: 'k1')));
      await tester.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 50)));
      await tester.pump();
      expect(find.byType(HeartButton), findsOneWidget);
      await tester.pumpWidget(MaterialApp(key: UniqueKey(), home: WordCardScreen(word: cat)));
      await tester.pump();
      expect(find.byType(HeartButton), findsNothing);
    });
  });

  group('review', () {
    test('uses only words the child met, needs 3, and every answer is among the options', () async {
      final met = [for (final id in ['cat', 'dog', 'cow', 'sheep', 'duck', 'rabbit']) vocabById(id)!];
      final rounds = makeReview(met, Random(1));
      expect(rounds.length, kChoiceRounds);
      for (final r in rounds) {
        expect(r.options.length, 3);
        expect(r.options.toSet().length, 3);
        final word = met.firstWhere((m) => m.id == r.ref);
        expect(r.options[r.correct], word.ar);
        expect(r.display, word.emoji);
        for (final o in r.options) {
          expect(met.any((m) => m.ar == o), true); // never a word the child has not met
        }
      }
      expect(makeReview(met.take(2).toList(), Random(1)), isEmpty);
    });

    test('words met are read from this child\'s own records, newest first, without repeats', () async {
      await LearningRecords.add('k1', RecordType.word, 'cat', Evidence.exposure);
      await LearningRecords.add('k1', RecordType.word, 'dog', Evidence.exposure);
      await LearningRecords.add('k1', RecordType.word, 'cat', Evidence.practice);
      await LearningRecords.add('k2', RecordType.word, 'cow', Evidence.exposure);
      await LearningRecords.add('k1', RecordType.letter, 'ب', Evidence.exposure);
      final met = await wordsMetRecently('k1');
      expect([for (final w in met) w.id], ['cat', 'dog']);
    });

    testWidgets('with fewer than 3 words it asks the child to meet some first', (tester) async {
      await _meet(tester, ['cat']);
      await tester.pumpWidget(MaterialApp(key: UniqueKey(), home: ReviewGame(childId: 'k1')));
      await tester.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 80)));
      await tester.pump();
      expect(find.textContaining('تعرّف على ثلاث كلمات'), findsOneWidget);
    });

    testWidgets('a review is practice only: right answers are recorded as practice, and the star comes at the end once', (tester) async {
      tester.view.physicalSize = const Size(900, 2200);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      await _meet(tester, ['cat', 'dog', 'cow', 'sheep']);
      await tester.pumpWidget(MaterialApp(key: UniqueKey(), home: ReviewGame(childId: 'k1', random: Random(7))));
      await tester.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 80)));
      await tester.pump();
      final met = await tester.runAsync(() => wordsMetRecently('k1'));
      final rounds = makeReview(met!, Random(7));
      expect(rounds.length, 4);
      for (final r in rounds) {
        await tester.tap(find.byKey(ValueKey('opt${r.correct}')));
        await tester.pump();
        await tester.pump(const Duration(milliseconds: 700));
      }
      await tester.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 80)));
      await tester.pump();
      expect(find.text('أحسنت!'), findsOneWidget);
      expect(find.byIcon(Icons.star_rounded), findsWidgets);
      final records = await tester.runAsync(() => LearningRecords.forChild('k1', days: 1));
      expect(records!.where((r) => r.type == RecordType.word && r.evidence == Evidence.practice).length, 4);
      expect(records.where((r) => r.evidence == Evidence.demonstrated), isEmpty); // review never claims understanding
    });
  });
}
