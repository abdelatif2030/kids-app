import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/games/fun_games.dart';
import 'package:kids_app/games/game_catalog.dart';
import 'package:kids_app/games/games_hub.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:shared_preferences/shared_preferences.dart';

ChildProfile _kid(int age) => ChildProfile(id: 'k$age', nickname: 'س', age: age);

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    final store = JourneyStore(LocalJourneyRepository());
    await store.load();
    JourneyStore.instance = store;
    await AppLocale.instance.set('ar');
  });

  group('categories', () {
    test('there are ten islands, each with its own symbol and name', () {
      expect(kGameCategories.length, 10);
      expect({for (final c in kGameCategories) c.spot}.length, 10, reason: 'each island has its own place on the picture');
      expect({for (final c in kGameCategories) c.id}.length, 10);
      for (final c in kGameCategories) {
        expect(c.title(), isNotEmpty);
        expect(c.games.isNotEmpty || c.screen != null, isTrue, reason: c.id);
        expect(c.games.isNotEmpty && c.screen != null, isFalse, reason: '${c.id} cannot be both');
      }
    });

    test('every game is on exactly one island: none is lost and none is listed twice', () {
      final every = {
        'balloons', 'animal', 'colors', 'letters', 'memory', 'math',
        ...kEducationalGames.map((g) => g.id),
        ...kFunGames.map((g) => 'fun_${g.id}'),
        'review_words',
      };
      final seen = <String>[];
      for (final c in kGameCategories) {
        seen.addAll(c.games);
      }
      seen.addAll(kFunCategory.games);
      expect(seen.toSet().length, seen.length, reason: 'a game appears on two islands');
      for (final id in every.where((id) => id != 'review_words')) {
        expect(seen, contains(id), reason: '$id is on no island');
      }
      for (final id in seen) {
        expect(every, contains(id), reason: '$id does not exist');
      }
    });

    test('every age from 1 to 6 reaches at least one game island', () {
      for (var age = 1; age <= 6; age++) {
        expect(gamesInHubForAge(age).intersection(allHubGameIds()), isNotEmpty, reason: 'age $age');
      }
    });
  });

  testWidgets('the hub shows the picture whole with ten buttons on it, inside the window, with no scrolling, on three window shapes', (t) async {
    for (final size in [const Size(1100, 560), const Size(820, 380), const Size(390, 760)]) {
      t.view.physicalSize = size;
      t.view.devicePixelRatio = 1;
      await t.pumpWidget(MaterialApp(key: UniqueKey(), home: Scaffold(body: GamesHub(child: _kid(5)))));
      await t.pump();
      expect(find.byKey(const ValueKey('hub_picture')), findsOneWidget);
      for (final c in kGameCategories) {
        final f = find.byKey(ValueKey('hub_${c.id}'));
        expect(f, findsOneWidget, reason: '${c.id} at $size');
        final r = t.getRect(f);
        expect(r.left, greaterThanOrEqualTo(-1), reason: '${c.id} at $size');
        expect(r.right, lessThanOrEqualTo(size.width + 1), reason: '${c.id} at $size');
        expect(r.bottom, lessThanOrEqualTo(size.height + 1), reason: '${c.id} at $size');
      }
      expect(find.byType(Scrollable), findsNothing);
      expect(t.takeException(), isNull, reason: '$size');
    }
    addTearDown(t.view.reset);
  });

  testWidgets('tapping an island with games opens its games, each on its own island; the back button returns', (t) async {
    t.view.physicalSize = const Size(1100, 700);
    t.view.devicePixelRatio = 1;
    addTearDown(t.view.reset);
    await t.pumpWidget(MaterialApp(home: Scaffold(body: GamesHub(child: _kid(5)))));
    await t.pump();
    await t.tap(find.byKey(const ValueKey('hub_numbers')));
    await t.pumpAndSettle(const Duration(milliseconds: 100));
    expect(find.byType(CategoryGamesScreen), findsOneWidget);
    for (final id in ['math', 'numerals', 'compare', 'connect_dots', 'big_small']) {
      expect(find.byKey(ValueKey('island_game_$id')), findsOneWidget, reason: id);
    }
    expect(find.byKey(const ValueKey('island_game_memory')), findsNothing); // another island's game
  });

  testWidgets('each island is a labelled button in the interface language, and the arrow goes back', (t) async {
    t.view.physicalSize = const Size(1100, 560);
    t.view.devicePixelRatio = 1;
    addTearDown(() async {
      t.view.reset();
      await AppLocale.instance.set('ar');
    });
    var back = 0;
    await AppLocale.instance.set('en');
    await t.pumpWidget(MaterialApp(home: Scaffold(body: GamesHub(child: _kid(5), onBack: () => back++))));
    await t.pump();
    final sem = t.getSemantics(find.byKey(const ValueKey('hub_letters')));
    expect(sem.label, 'Letters and words');
    await t.tap(find.byKey(const ValueKey('hub_back')));
    expect(back, 1);
    // the hotspots sit on the right places: the first island is left of the second, the second row below the first
    final r0 = t.getCenter(find.byKey(const ValueKey('hub_brain')));
    final r1 = t.getCenter(find.byKey(const ValueKey('hub_letters')));
    final r5 = t.getCenter(find.byKey(const ValueKey('hub_observe')));
    expect(r0.dx, lessThan(r1.dx));
    expect(r5.dy, greaterThan(r0.dy));
    expect((r5.dx - r0.dx).abs(), lessThan(8));
  });
}
