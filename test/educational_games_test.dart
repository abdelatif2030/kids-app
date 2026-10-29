import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/games/connect_four_game.dart';
import 'package:kids_app/games/game_catalog.dart';
import 'package:kids_app/games/game_common.dart';
import 'package:kids_app/games/letter_fishing_game.dart';
import 'package:kids_app/games/match_pictures_game.dart';
import 'package:kids_app/games/numerals_game.dart';
import 'package:kids_app/games/trace_game.dart';
import 'package:kids_app/games/word_book_game.dart';
import 'package:kids_app/games_screen.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/library/vocab.dart';
import 'package:kids_app/literacy/letters_data.dart';
import 'package:kids_app/media/audio.dart';
import 'package:kids_app/media/audio_manifest.dart';
import 'package:shared_preferences/shared_preferences.dart';

Widget _app(Widget w) => MaterialApp(key: UniqueKey(), home: w);

Future<void> _settle(WidgetTester t, {int ms = 50}) async {
  await t.runAsync(() => Future<void>.delayed(Duration(milliseconds: ms)));
  await t.pump();
}

void _bigScreen(WidgetTester t) {
  t.view.physicalSize = const Size(900, 2000);
  t.view.devicePixelRatio = 1;
  addTearDown(t.view.reset);
}

bool _hasStar(WidgetTester t) => find.byIcon(Icons.star_rounded).evaluate().isNotEmpty;

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('ar');
  });

  group('rewards', () {
    test('the first completion earns the star, repeats never do', () async {
      expect(await GameRewards.isDone('k', 'g'), false);
      expect(await GameRewards.complete('k', 'g'), true);
      expect(await GameRewards.complete('k', 'g'), false);
      expect(await GameRewards.complete('k', 'g'), false);
      expect(await GameRewards.isDone('k', 'g'), true);
      expect(await GameRewards.isDone('other-child', 'g'), false);
      expect(kCompletionStars, 1);
    });
  });

  group('catalog', () {
    test('every game has an age range and the age filter is respected', () {
      expect(kEducationalGames.length, 13);
      expect({for (final g in kEducationalGames) g.id}.length, 13);
      Set<String> ids(int age) => {for (final g in gamesForAge(age)) g.id};
      expect(ids(2), {WordBookGame.gameId});
      expect(ids(3), {MatchPicturesGame.gameId, WordBookGame.gameId, 'odd_one_out', 'compare', 'listen_picture'});
      expect(ids(4).length, 11);
      expect(ids(5).length, 13);
      expect(ids(6).length, 13);
      expect(ids(7), {'listen_word'}); // reading practice goes on to age 8
      expect(gamesForAge(9), isEmpty);
      expect(gamesForAge(1), isEmpty);
      for (final g in kEducationalGames) {
        expect(g.minAge <= g.maxAge, true);
        expect(g.title(), isNotEmpty);
        expect(g.objective(), isNotEmpty);
      }
    });
  });

  group('match pictures logic', () {
    test('pairs by age', () {
      expect([for (var a = 3; a <= 6; a++) MatchBoard.forAge(a).cards.length], [6, 8, 10, 12]);
    });

    test('matching, non-matching, and rapid taps', () {
      final b = MatchBoard(['A', 'B', 'A', 'B']);
      expect(b.pick(0), PickResult.first);
      expect(b.pick(0), PickResult.ignored); // the same card twice
      expect(b.pick(1), PickResult.mismatch);
      // rapid taps while the mismatch is showing change nothing
      expect(b.pick(2), PickResult.ignored);
      expect(b.pick(3), PickResult.ignored);
      expect(b.open, [0, 1]);
      b.closeMismatch();
      expect(b.open, isEmpty);
      expect(b.pick(0), PickResult.first);
      expect(b.pick(2), PickResult.match);
      expect(b.matched, {0, 2});
      expect(b.pick(0), PickResult.ignored); // matched stays matched
      expect(b.complete, false);
      b.pick(1);
      expect(b.pick(3), PickResult.match);
      expect(b.complete, true);
      expect(b.pick(1), PickResult.ignored);
    });

    test('a hint always names two cards of one unmatched pair', () {
      final b = MatchBoard(['A', 'B', 'A', 'B']);
      final h = b.hint()!;
      expect(b.cards[h[0]], b.cards[h[1]]);
      b.pick(0);
      b.pick(2);
      final h2 = b.hint()!;
      expect(h2.every((i) => !b.matched.contains(i)), true);
    });
  });

  group('letter fishing logic', () {
    test('rounds have the target among distinct choices', () {
      for (final lang in ['ar', 'en']) {
        for (final age in [4, 5, 6]) {
          final rounds = makeFishingRounds(lang, age, Random(age));
          expect(rounds.length, kFishingRounds);
          expect({for (final r in rounds) r.target}.length, kFishingRounds);
          for (final r in rounds) {
            expect(r.choices.length, kFishingChoices);
            expect(r.choices.toSet().length, kFishingChoices);
            expect(r.choices, contains(r.target));
          }
        }
      }
    });

    test('Arabic uses the app letters, English uses A-Z; younger children get fewer', () {
      expect(fishingPool('ar', 6).length, 28);
      expect(fishingPool('ar', 4).length, 10);
      expect(fishingPool('ar', 6).every((c) => letterOf(c) != null), true);
      expect(fishingPool('en', 6).first, 'A');
      expect(fishingPool('en', 6).last, 'Z');
      expect(fishingPool('en', 4).length, 10);
    });

    test('the audio id points to the letter NAME item of the manifest', () {
      final m = AudioManifest.builtIn();
      for (final c in fishingPool('ar', 6)) {
        expect(m.byId(fishingAudioId('ar', c)!), isNotNull);
      }
      for (final c in fishingPool('en', 6)) {
        expect(m.byId(fishingAudioId('en', c)!)!.kind, AudioKind.letterName);
      }
    });
  });

  group('connect four logic', () {
    ConnectFourBoard play(List<int> cols) {
      final b = ConnectFourBoard();
      for (final c in cols) {
        b.drop(c);
      }
      return b;
    }

    test('players alternate', () {
      final b = ConnectFourBoard();
      expect(b.current, 1);
      expect(b.drop(0), DropResult.placed);
      expect(b.current, 2);
      b.drop(1);
      expect(b.current, 1);
    });

    test('vertical win', () {
      final b = play([0, 1, 0, 1, 0, 1, 0]);
      expect(b.winner, 1);
      expect(b.finished, true);
      expect(b.winLine.length, greaterThanOrEqualTo(4));
    });

    test('horizontal win', () {
      final b = play([0, 0, 1, 1, 2, 2, 3]);
      expect(b.winner, 1);
    });

    test('diagonal wins in both directions', () {
      // rising to the right: player 1 on (4,0),(3,1),(2,2),(1,3)
      final up = play([0, 1, 1, 2, 3, 2, 2, 3, 3, 4, 3]);
      expect(up.winner, 1);
      // rising to the left, the mirror image
      final left = play([4, 3, 3, 2, 1, 2, 2, 1, 1, 0, 1]);
      expect(left.winner, 1);
    });

    test('invalid moves and a full column', () {
      final b = ConnectFourBoard();
      expect(b.drop(-1), DropResult.invalid);
      expect(b.drop(5), DropResult.invalid);
      for (var i = 0; i < ConnectFourBoard.rows; i++) {
        b.drop(0); // alternate players fill column 0; nobody connects four vertically
        if (b.finished) break;
      }
      if (!b.finished) {
        final before = b.current;
        expect(b.drop(0), DropResult.invalid);
        expect(b.current, before); // an invalid move does not change the turn
      }
    });

    test('a draw is detected and no more moves are accepted', () {
      final b = ConnectFourBoard();
      for (var r = 0; r < ConnectFourBoard.rows; r++) {
        for (var c = 0; c < ConnectFourBoard.cols; c++) {
          b.grid[r][c] = ((c ~/ 2) + r) % 2 + 1;
        }
      }
      b.grid[0][0] = 0;
      b.current = 1;
      expect(b.finished, false);
      expect(b.drop(0), DropResult.draw);
      expect(b.draw, true);
      expect(b.winner, isNull);
      expect(b.drop(1), DropResult.invalid);
    });

    test('no moves after a win', () {
      final b = play([0, 1, 0, 1, 0, 1, 0]);
      expect(b.drop(2), DropResult.invalid);
    });
  });

  group('numerals logic', () {
    test('all ten mappings are right', () {
      const west = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      const east = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
      for (var i = 0; i < 10; i++) {
        expect(westernOf(i), west[i]);
        expect(easternOf(i), east[i]);
        expect(east[i].codeUnitAt(0) - 0x0660, i); // the Unicode block of Arabic-Indic digits
      }
      expect(kEasternDigits.toSet().length, 10);
    });

    test('rounds contain the answer, alternate direction and respect the age', () {
      for (final age in [4, 5, 6]) {
        final rounds = makeNumeralRounds(age, Random(age));
        expect(rounds.length, kNumeralRounds);
        expect(rounds[0].toEastern, true);
        expect(rounds[1].toEastern, false);
        for (final r in rounds) {
          expect(r.choices, contains(r.digit));
          expect(r.choices.toSet().length, 3);
          expect(r.choices.every((d) => d <= maxDigitForAge(age)), true);
          expect(r.render(r.digit), r.toEastern ? easternOf(r.digit) : westernOf(r.digit));
          expect(r.shown, r.toEastern ? westernOf(r.digit) : easternOf(r.digit));
        }
      }
      expect(maxDigitForAge(4), 5);
      expect(maxDigitForAge(6), 9);
    });
  });

  group('word picture book data', () {
    test('exactly 50 distinct entries, all real vocabulary with both languages and an illustration', () {
      expect(kPictureBookIds.length, 50);
      expect(kPictureBookIds.toSet().length, 50);
      final words = pictureBookWords();
      expect(words.length, 50); // every id exists in the vocabulary
      expect({for (final w in words) w.ar}.length, 50);
      expect({for (final w in words) w.en}.length, 50);
      for (final w in words) {
        expect(w.ar.trim(), isNotEmpty);
        expect(w.en, isNotNull);
        expect(w.emoji, isNotEmpty);
        expect(w.minAge <= 2 && w.maxAge >= 6, true, reason: '${w.id} must suit ages 2-6');
        expect(kVocabCategories.any((c) => c.id == w.category), true);
      }
    });
  });

  group('screens', () {
    testWidgets('match pictures: a pair stays matched, finishing earns the star once', (tester) async {
      _bigScreen(tester);
      final seq = Random(1);
      final layout = MatchBoard.forAge(3, random: seq).cards;
      final layout2 = MatchBoard.forAge(3, random: seq).cards; // the board after "play again"
      Future<void> playAll(List<String> layout) async {
        final pairs = <String, List<int>>{};
        for (var i = 0; i < layout.length; i++) {
          pairs.putIfAbsent(layout[i], () => []).add(i);
        }
        for (final p in pairs.values) {
          await tester.tap(find.byKey(ValueKey('card${p[0]}')));
          await tester.pump();
          await tester.tap(find.byKey(ValueKey('card${p[1]}')));
          await tester.pump();
        }
      }

      await tester.pumpWidget(_app(MatchPicturesGame(childId: 'c1', age: 3, random: Random(1))));
      // A wrong pair first: nothing bad happens and the cards turn back.
      final a = layout.indexOf(layout.first);
      final other = layout.indexWhere((c) => c != layout.first);
      await tester.tap(find.byKey(ValueKey('card$a')));
      await tester.pump();
      await tester.tap(find.byKey(ValueKey('card$other')));
      await tester.pump();
      await tester.pump(const Duration(milliseconds: 1000));
      expect(find.text('أحسنت!'), findsNothing);
      await playAll(layout);
      await _settle(tester);
      expect(find.text('أحسنت!'), findsOneWidget);
      expect(_hasStar(tester), true); // first completion
      expect(await tester.runAsync(() => GameRewards.isDone('c1', MatchPicturesGame.gameId)), true);

      // Play again and finish again: kind words, no second star.
      await tester.tap(find.text('العب تاني'));
      await tester.pump();
      await playAll(layout2);
      await _settle(tester);
      expect(find.text('أحسنت!'), findsOneWidget);
      expect(_hasStar(tester), false);
      expect(find.textContaining('أكملتها من قبل'), findsOneWidget);
    });

    testWidgets('letter fishing: wrong fish only fade, the set finishes with one star', (tester) async {
      _bigScreen(tester);
      final rounds = makeFishingRounds('ar', 4, Random(2));
      await tester.pumpWidget(_app(LetterFishingGame(childId: 'c2', age: 4, random: Random(2))));
      for (var i = 0; i < kFishingRounds; i++) {
        expect(find.byKey(const ValueKey('target')), findsOneWidget);
        expect(tester.widget<Text>(find.byKey(const ValueKey('target'))).data, rounds[i].target);
        final wrong = rounds[i].choices.firstWhere((c) => c != rounds[i].target);
        await tester.tap(find.byKey(ValueKey('fish$wrong')));
        await tester.pump();
        expect(find.byKey(const ValueKey('target')), findsOneWidget); // still the same round
        await tester.tap(find.byKey(ValueKey('fish${rounds[i].target}')));
        await tester.pump();
        await tester.pump(const Duration(milliseconds: 800));
        if (i < kFishingRounds - 1) expect(_hasStar(tester), false);
      }
      await _settle(tester);
      expect(find.text('أحسنت!'), findsOneWidget);
      expect(_hasStar(tester), true);
    });

    testWidgets('connect four: two players, a win ends the round and earns the star once', (tester) async {
      _bigScreen(tester);
      await tester.pumpWidget(_app(const ConnectFourGame(childId: 'c3')));
      expect(find.textContaining('لاعبين'), findsOneWidget);
      for (final c in [0, 1, 0, 1, 0, 1, 0]) {
        await tester.tap(find.byKey(ValueKey('col$c')));
        await tester.pump();
      }
      await _settle(tester);
      expect(find.text('أحسنت!'), findsOneWidget);
      expect(find.textContaining('جمع أربعة'), findsOneWidget);
      expect(_hasStar(tester), true);
    });

    testWidgets('numerals: wrong choices fade and the set earns the star', (tester) async {
      _bigScreen(tester);
      final rounds = makeNumeralRounds(5, Random(3));
      await tester.pumpWidget(_app(NumeralsGame(childId: 'c4', age: 5, random: Random(3))));
      for (var i = 0; i < kNumeralRounds; i++) {
        expect(tester.widget<Text>(find.byKey(const ValueKey('shown'))).data, rounds[i].shown);
        final wrong = rounds[i].choices.firstWhere((d) => d != rounds[i].digit);
        await tester.tap(find.byKey(ValueKey('num$wrong')));
        await tester.pump();
        expect(find.byKey(const ValueKey('shown')), findsOneWidget);
        await tester.tap(find.byKey(ValueKey('num${rounds[i].digit}')));
        await tester.pump();
        await tester.pump(const Duration(milliseconds: 800));
      }
      await _settle(tester);
      expect(find.text('أحسنت!'), findsOneWidget);
      expect(_hasStar(tester), true);
    });

    testWidgets('tracing: no completion without drawing, the direction cue is visible, clear and retry work', (tester) async {
      _bigScreen(tester);
      await tester.pumpWidget(_app(TraceGame(childId: 'c5', random: Random(4))));
      expect(find.byKey(const ValueKey('direction-cue')), findsOneWidget);
      FilledButton done() => tester.widget<FilledButton>(find.widgetWithText(FilledButton, 'تم'));
      expect(done().onPressed, isNull); // nothing drawn yet: cannot finish
      final canvas = find.descendant(of: find.byType(TraceGame), matching: find.byType(GestureDetector)).first;
      Future<void> draw() async {
        final g = await tester.startGesture(tester.getCenter(canvas) - const Offset(100, 100));
        for (var i = 0; i < 30; i++) {
          await g.moveBy(const Offset(12, 12));
          await tester.pump();
        }
        await g.up();
        await tester.pump();
      }

      await draw();
      expect(done().onPressed, isNotNull);
      await tester.tap(find.text('امسح وأعد')); // clear and retry
      await tester.pump();
      expect(done().onPressed, isNull);
      for (var i = 0; i < kTraceLetters; i++) {
        await draw();
        await tester.tap(find.widgetWithText(FilledButton, 'تم'));
        await tester.pump();
      }
      await _settle(tester);
      expect(find.text('أحسنت!'), findsOneWidget);
      expect(_hasStar(tester), true);
    });

    testWidgets('word book: opening the last unseen word completes the book; the audio status is honest', (tester) async {
      _bigScreen(tester);
      await AudioPrefs.instance.update(voiceOn: true, allowDeviceVoice: true);
      final ids = kPictureBookIds.toList();
      final last = ids.removeLast();
      await tester.runAsync(() => WordBookProgress.save('c6', ids.toSet()));
      await tester.pumpWidget(_app(const WordBookGame(childId: 'c6')));
      await _settle(tester);
      expect(find.text('أحسنت!'), findsNothing); // 49 of 50: no reward for viewing
      await tester.ensureVisible(find.byKey(ValueKey('word_$last')));
      await tester.tap(find.byKey(ValueKey('word_$last')));
      await tester.pumpAndSettle();
      // The card says where the sound would come from: the device voice, not a recording.
      expect(find.textContaining('صوت الجهاز'), findsWidgets);
      expect(find.textContaining('تسجيل بشري'), findsNothing);
      await tester.pageBack();
      await tester.pumpAndSettle();
      await _settle(tester);
      expect(find.text('أحسنت!'), findsOneWidget);
      expect(_hasStar(tester), true);
      await AudioPrefs.instance.update(allowDeviceVoice: true);
    });

    testWidgets('word book card with the device voice off says there is no audio', (tester) async {
      _bigScreen(tester);
      await AudioPrefs.instance.update(voiceOn: true, allowDeviceVoice: false);
      addTearDown(() => AudioPrefs.instance.update(allowDeviceVoice: true));
      await tester.runAsync(() => WordBookProgress.save('c7', {}));
      await tester.pumpWidget(_app(const WordBookGame(childId: 'c7')));
      await _settle(tester);
      await tester.tap(find.byKey(const ValueKey('word_cat')));
      await tester.pumpAndSettle();
      expect(find.textContaining('لا يوجد صوت'), findsWidgets);
      expect(find.textContaining('صوت الجهاز الآلي'), findsNothing);
    });

    for (final lang in ['ar', 'en']) {
      testWidgets('every game fits a small phone with large text ($lang)', (tester) async {
        await AppLocale.instance.set(lang);
        addTearDown(() => AppLocale.instance.set('ar'));
        tester.view.physicalSize = const Size(320, 640);
        tester.view.devicePixelRatio = 1;
        addTearDown(tester.view.reset);
        for (final g in kEducationalGames) {
          await tester.pumpWidget(MaterialApp(
            key: UniqueKey(),
            builder: (c, child) => MediaQuery(data: MediaQuery.of(c).copyWith(textScaler: const TextScaler.linear(1.6)), child: child!),
            home: g.build('a11y', 5, lang),
          ));
          await _settle(tester);
          expect(tester.takeException(), isNull, reason: '${g.id} overflowed');
        }
      });
    }

    testWidgets('the games grid lists each game for the age once, and none outside it', (tester) async {
      _bigScreen(tester);
      await tester.pumpWidget(_app(const Scaffold(body: SingleChildScrollView(child: GamesGrid(age: 5)))));
      await _settle(tester);
      for (final g in gamesForAge(5)) {
        expect(find.text(g.title()), findsOneWidget);
      }
      expect(find.text(kEducationalGames.first.title()), findsOneWidget);
      await tester.pumpWidget(_app(const Scaffold(body: SingleChildScrollView(child: GamesGrid(age: 2)))));
      await _settle(tester);
      expect(find.text(kEducationalGames[2].title()), findsNothing); // connect four is 5-6
      expect(find.text(kEducationalGames[5].title()), findsOneWidget); // the word book is 2-6
    });
  });
}
