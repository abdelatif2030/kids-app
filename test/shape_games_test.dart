import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/games/choice_games.dart';
import 'package:kids_app/games/game_catalog.dart';
import 'package:kids_app/games/shape_games.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/progress_store.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('ar');
  });

  group('shape finder rounds', () {
    test('every round has one right answer among distinct options, one picture per option, for every age', () {
      for (final age in [2, 3, 4, 5, 6]) {
        for (var seed = 0; seed < 40; seed++) {
          final rounds = makeShapeFinder(age, Random(seed));
          expect(rounds.length, kChoiceRounds);
          for (final r in rounds) {
            expect(r.visuals, isNotNull, reason: 'shapes are drawn, never emoji');
            expect(r.visuals!.length, r.options.length);
            expect(r.options.toSet().length, r.options.length, reason: 'age $age seed $seed ${r.options}');
            expect(r.correct, inInclusiveRange(0, r.options.length - 1));
            expect(r.prompt, isNotEmpty);
          }
        }
      }
    });

    test('young children only meet circle, square and triangle; rectangle comes at 4; the rest at 5', () {
      expect(shapesForAge(2), [ShapeKind.circle, ShapeKind.square, ShapeKind.triangle]);
      expect(shapesForAge(4), contains(ShapeKind.rectangle));
      expect(shapesForAge(4), isNot(contains(ShapeKind.star)));
      expect(shapesForAge(5), ShapeKind.values);
    });

    test('ages 2-3 name the shape in Arabic and the answer is that shape', () {
      for (var seed = 0; seed < 20; seed++) {
        for (final r in makeShapeFinder(3, Random(seed))) {
          expect(r.say, r.options[r.correct]);
          expect(r.prompt, contains(r.say!));
        }
      }
    });

    test('the Arabic colour word agrees with the shape (دائرة حمراء, مثلث أحمر)', () {
      const red = ShapeColor('red', Colors.red, 'أحمر', 'حمراء', 'red');
      expect(shapeLabelAr(ShapeKind.circle, red), 'دائرة حمراء');
      expect(shapeLabelAr(ShapeKind.triangle, red), 'مثلث أحمر');
      expect(shapeLabelAr(ShapeKind.star, red), 'نجمة حمراء');
      expect(shapeLabelAr(ShapeKind.heart, red), 'قلب أحمر');
    });

    test('ages 5-6 need both words: the wrong options differ in shape or in colour', () {
      var both = 0;
      for (var seed = 0; seed < 60; seed++) {
        for (final r in makeShapeFinder(6, Random(seed))) {
          if (r.say != null && r.options[r.correct].contains(' ')) both++;
        }
      }
      expect(both, greaterThan(20));
    });
  });

  group('positions', () {
    test('no ball is ever shown under a box or inside a table', () {
      expect(placesFor(Holder.table), isNot(contains(Place.inside)));
      expect(placesFor(Holder.box), isNot(contains(Place.below)));
    });

    test('the sentence matches the right picture and options are distinct; age 3 has two choices', () {
      for (final age in [3, 4, 5, 6]) {
        for (var seed = 0; seed < 40; seed++) {
          for (final r in makeWhereIsTheBall(age, Random(seed))) {
            expect(r.options.toSet().length, r.options.length);
            expect(r.say, contains(r.options[r.correct]));
            expect(r.visuals!.length, r.options.length);
            expect(r.options.length, age <= 3 ? 2 : 3);
          }
        }
      }
    });

    test('only ages 5-6 meet the box', () {
      bool hasBox(int age) => [for (var s = 0; s < 20; s++) ...makeWhereIsTheBall(age, Random(s))].any((r) => r.say!.contains('الصندوق'));
      expect(hasBox(4), isFalse);
      expect(hasBox(5), isTrue);
    });
  });

  test('catalogue entries: ages, emoji, skill', () {
    final s = kEducationalGames.firstWhere((g) => g.id == 'shape_finder');
    final w = kEducationalGames.firstWhere((g) => g.id == 'where_ball');
    expect([s.minAge, s.maxAge, w.minAge, w.maxAge], [2, 6, 3, 6]);
    expect(kChoiceGameSkills['shape_finder'], 'shapes');
    expect(kChoiceGameSkills['where_ball'], 'spatial');
  });

  testWidgets('shape finder plays through with painted shapes, a wrong tap only fades, and records first-try events', (t) async {
    t.view.physicalSize = const Size(900, 1400);
    t.view.devicePixelRatio = 1;
    addTearDown(t.view.reset);
    final rounds = makeShapeFinder(3, Random(1));
    await t.pumpWidget(MaterialApp(
        key: UniqueKey(),
        home: ChoiceGame(childId: 'k', gameId: ShapeFinderGame.gameId, title: 't', instruction: 'i', make: (_) => rounds)));
    await t.pump();
    expect(find.byType(ShapePicture), findsWidgets);
    for (var i = 0; i < rounds.length; i++) {
      final r = rounds[i];
      if (i == 0) {
        final wrong = [for (var o = 0; o < r.options.length; o++) if (o != r.correct) o].first;
        await t.tap(find.byKey(ValueKey('opt$wrong')));
        await t.pump();
      }
      await t.tap(find.byKey(ValueKey('opt${r.correct}')));
      await t.pump();
      await t.pump(const Duration(milliseconds: 700));
    }
    await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 80)));
    await t.pump();
    expect(find.byIcon(Icons.star_rounded), findsWidgets);
    final ev = (await t.runAsync(ProgressStore.load))!.where((e) => e.skill == 'shapes' && e.childId == 'k').toList();
    expect(ev.map((e) => e.ok).toList(), [false, true, true, true, true]);
    expect(t.takeException(), isNull);
  });

  testWidgets('every painted shape and scene draws without error at small and large sizes', (t) async {
    await t.pumpWidget(MaterialApp(
      home: Scaffold(
        body: Wrap(children: [
          for (final k in ShapeKind.values) ...[ShapePicture(k, Colors.red, size: 24), ShapePicture(k, Colors.blue, size: 160)],
          for (final h in Holder.values)
            for (final p in placesFor(h)) PositionScene(h, p),
        ]),
      ),
    ));
    expect(t.takeException(), isNull);
  });
}
