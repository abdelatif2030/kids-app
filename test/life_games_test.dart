import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/adventures/adventure_logic.dart';
import 'package:kids_app/games/choice_games.dart';
import 'package:kids_app/games/game_catalog.dart';
import 'package:kids_app/games/life_games.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('ar');
  });

  group('generators', () {
    test('feed the animal: the right food is one the animal really eats, wrong ones never are', () {
      final byAnimal = {for (final a in kAnimalFoods) a.animal: a};
      for (final age in [2, 3, 4, 6]) {
        for (var seed = 0; seed < 30; seed++) {
          final rounds = makeFeedAnimal(age, Random(seed));
          expect(rounds.length, kChoiceRounds);
          expect(rounds.map((r) => r.display).toSet().length, kChoiceRounds, reason: 'no animal twice in one set');
          for (final r in rounds) {
            final eats = byAnimal[r.display]!.eats;
            expect(r.options.length, 3);
            expect(r.options.toSet().length, 3);
            expect(eats, contains(r.options[r.correct]));
            for (var i = 0; i < 3; i++) {
              if (i != r.correct) expect(eats, isNot(contains(r.options[i])), reason: '${r.display} ${r.options}');
            }
          }
        }
      }
    });

    test('two-year-olds only meet the most familiar animals', () {
      final ids = animalsForAge(2).map((a) => a.id);
      expect(ids, containsAll(['rabbit', 'cat', 'dog']));
      expect(ids.length, lessThan(kAnimalFoods.length));
    });

    test('big or small: the answer is the bigger (or smaller) of the pair; age 2 only asks for the big one', () {
      final big = {for (final p in kSizePairs) p.big};
      for (var seed = 0; seed < 20; seed++) {
        for (final r in makeBigSmall(2, Random(seed))) {
          expect(big, contains(r.options[r.correct]));
        }
        final mixed = makeBigSmall(5, Random(seed));
        expect(mixed.map((r) => big.contains(r.options[r.correct])).toSet(), {true, false});
      }
    });

    test('next in day: the answer follows the shown step in its routine', () {
      for (var seed = 0; seed < 30; seed++) {
        for (final r in makeNextInDay(4, Random(seed))) {
          final routine = kRoutines.firstWhere((s) => s.any((x) => x.emoji == r.display));
          final at = routine.indexWhere((x) => x.emoji == r.display);
          expect(routine[at + 1].emoji, r.options[r.correct]);
          expect(r.options.toSet().length, 3);
          expect(r.options, isNot(contains(r.display)));
        }
      }
    });
  });

  test('catalogue: ages, emoji and skill mapping exist for the new games; adventures reference them', () {
    for (final id in ['feed_animal', 'next_in_day']) {
      final g = kEducationalGames.firstWhere((x) => x.id == id);
      expect(g.minAge, inInclusiveRange(2, 3));
      expect(g.maxAge, 6);
      expect(kGameEmoji, contains(id));
      expect(kChoiceGameSkills, contains(id));
    }
    final used = {for (final t in kAdventureThemes) ...t.games};
    expect(used, containsAll(['feed_animal', 'next_in_day']));
  });

  testWidgets('feed the animal plays through: a wrong tap only fades, a star comes after the last round, once', (t) async {
    t.view.physicalSize = const Size(900, 2200);
    t.view.devicePixelRatio = 1;
    addTearDown(t.view.reset);
    final rounds = makeFeedAnimal(3, Random(1));
    await t.pumpWidget(MaterialApp(
        key: UniqueKey(),
        home: ChoiceGame(childId: 'k', gameId: FeedAnimalGame.gameId, title: 't', instruction: 'i', make: (_) => rounds)));
    await t.pump();
    for (final r in rounds) {
      final wrong = [for (var o = 0; o < 3; o++) if (o != r.correct) o].first;
      await t.tap(find.byKey(ValueKey('opt$wrong')));
      await t.pump();
      expect(find.byKey(ValueKey('opt${r.correct}')), findsOneWidget);
      await t.tap(find.byKey(ValueKey('opt${r.correct}')));
      await t.pump();
      await t.pump(const Duration(milliseconds: 700));
    }
    await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 80)));
    await t.pump();
    expect(find.byIcon(Icons.star_rounded), findsWidgets);
    expect(t.takeException(), isNull);
  });
}
