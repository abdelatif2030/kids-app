import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/journey/ui/home_tab.dart';
import 'package:kids_app/journey/ui/island_home.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:shared_preferences/shared_preferences.dart';

IslandSpec spec(String id, VoidCallback onTap) => IslandSpec(id: id, title: 'Island $id', emoji: '🌴', grass: Colors.green, grassDark: Colors.green.shade800, onTap: onTap);

void main() {
  setUp(() {
    SharedPreferences.setMockInitialValues({});
    AppLocale.instance.set('en');
    HomeViewPref.instance.resetForTest();
  });

  group('layout', () {
    test('2 columns on a phone, 3 on a tablet, 4 on a desktop', () {
      expect(IslandLayout.compute(8, 360).columns, 2);
      expect(IslandLayout.compute(8, 768).columns, 3);
      expect(IslandLayout.compute(8, 1280).columns, 4);
    });
    for (final w in [320.0, 360.0, 390.0, 768.0, 1024.0, 1280.0]) {
      test('every island is inside the canvas and none overlap at $w px (8 islands)', () {
        final l = IslandLayout.compute(8, w);
        expect(l.centers.length, 8);
        for (final c in l.centers) {
          expect(c.dx - l.islandSize / 2, greaterThanOrEqualTo(0));
          expect(c.dx + l.islandSize / 2, lessThanOrEqualTo(w));
          expect(c.dy - l.islandSize / 2, greaterThanOrEqualTo(0));
          expect(c.dy + l.islandSize / 2, lessThanOrEqualTo(l.height));
        }
        for (var i = 0; i < 8; i++) {
          for (var j = i + 1; j < 8; j++) {
            final a = Rect.fromCenter(center: l.centers[i], width: l.islandSize, height: l.islandSize);
            final b = Rect.fromCenter(center: l.centers[j], width: l.islandSize, height: l.islandSize);
            expect(a.overlaps(b), isFalse, reason: 'islands $i and $j');
          }
        }
        expect(l.islandSize, greaterThanOrEqualTo(88)); // big enough to tap
      });
    }
    test('the path is a snake: neighbours in order are always next to each other', () {
      final l = IslandLayout.compute(8, 1280);
      for (var i = 0; i + 1 < 8; i++) {
        expect((l.centers[i] - l.centers[i + 1]).distance, lessThan(l.islandSize * 2.2));
      }
    });
    test('any count works, including none and one', () {
      expect(IslandLayout.compute(0, 400).centers, isEmpty);
      expect(IslandLayout.compute(1, 400).centers.length, 1);
      expect(IslandLayout.compute(9, 400).height, greaterThan(IslandLayout.compute(8, 400).height));
    });
  });

  group('IslandHome widget', () {
    Future<void> show(WidgetTester t, List<IslandSpec> list, {Size size = const Size(420, 900), String lang = 'en'}) async {
      AppLocale.instance.set(lang);
      t.view.physicalSize = size;
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      await t.pumpWidget(MaterialApp(key: UniqueKey(), home: Scaffold(body: SingleChildScrollView(child: IslandHome(islands: list)))));
      await t.pump();
    }

    for (final lang in ['ar', 'en']) {
      for (final size in [const Size(320, 700), const Size(768, 1024), const Size(1280, 800)]) {
        testWidgets('all islands show with their names and no overflow ($lang, ${size.width.toInt()} px)', (t) async {
          await show(t, [for (var i = 0; i < 8; i++) spec('s$i', () {})], size: size, lang: lang);
          for (var i = 0; i < 8; i++) {
            expect(find.byKey(ValueKey('island_s$i')), findsOneWidget);
            expect(find.text('Island s$i'), findsOneWidget);
          }
        });
      }
    }

    testWidgets('tapping an island runs its action; each island is one big labelled button', (t) async {
      var tapped = '';
      final h = t.ensureSemantics();
      await show(t, [spec('a', () => tapped = 'a'), spec('b', () => tapped = 'b')]);
      await t.tap(find.byKey(const ValueKey('island_b')));
      expect(tapped, 'b');
      final size = t.getSize(find.byKey(const ValueKey('island_a')));
      expect(size.width, greaterThanOrEqualTo(88));
      expect(size.height, greaterThanOrEqualTo(88));
      await t.pump();
      expect(find.bySemanticsLabel(RegExp('Island a')), findsWidgets);
      h.dispose();
    });

    testWidgets('the bobbing runs only when allowed, and never with reduced motion', (t) async {
      IslandHome.forceMotion = true;
      addTearDown(() => IslandHome.forceMotion = null);
      await show(t, [spec('a', () {})]);
      await t.pump(const Duration(seconds: 1));
      expect(find.byType(AnimatedBuilder), findsWidgets);
      await t.pumpWidget(MediaQuery(data: const MediaQueryData(disableAnimations: true), child: MaterialApp(key: UniqueKey(), home: Scaffold(body: SingleChildScrollView(child: IslandHome(islands: [spec('a', () {})]))))));
      await t.pump(const Duration(seconds: 1));
      expect(t.takeException(), isNull);
    });
  });

  group('home switch', () {
    const kid = ChildProfile(id: 'k1', nickname: 'Lina', age: 5);

    Future<void> openHome(WidgetTester t) async {
      t.view.physicalSize = const Size(600, 1600);
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      final store = JourneyStore(LocalJourneyRepository());
      await t.runAsync(store.load);
      await t.runAsync(() => store.addProfile(kid));
      JourneyStore.instance = store;
      await t.pumpWidget(MaterialApp(key: UniqueKey(), home: Scaffold(body: HomeTab(child: kid, onExit: () {}, onTab: (_) {}))));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 80)));
      await t.pump(const Duration(milliseconds: 600));
    }

    testWidgets('the list is the default; the switch shows the island map and back; the choice is remembered', (t) async {
      await openHome(t);
      expect(find.byKey(const ValueKey('greeting')), findsOneWidget);
      expect(find.byKey(const ValueKey('island_stories')), findsNothing);
      await t.tap(find.byKey(const ValueKey('home_view_toggle')));
      await t.pump(const Duration(milliseconds: 600));
      expect(find.byKey(const ValueKey('island_stories')), findsOneWidget);
      expect(find.byKey(const ValueKey('island_games')), findsOneWidget);
      expect(find.byKey(const ValueKey('greeting')), findsNothing);
      final prefs = await t.runAsync(SharedPreferences.getInstance);
      expect(prefs!.getString('home_view'), 'map');
      await t.tap(find.byKey(const ValueKey('home_view_toggle')));
      await t.pump(const Duration(milliseconds: 600));
      expect(find.byKey(const ValueKey('greeting')), findsOneWidget);
      expect(prefs.getString('home_view'), 'list');
    });

    testWidgets('a saved map choice opens the map next time', (t) async {
      SharedPreferences.setMockInitialValues({'home_view': 'map'});
      await openHome(t);
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 50)));
      await t.pump(const Duration(milliseconds: 600));
      expect(find.byKey(const ValueKey('island_stories')), findsOneWidget);
    });

    testWidgets('the islands follow the child\'s age: no numbers island for a toddler', (t) async {
      HomeViewPref.instance.resetForTest();
      await HomeViewPref.instance.set(true);
      const baby = ChildProfile(id: 'k2', nickname: 'Baby', age: 2);
      t.view.physicalSize = const Size(600, 1600);
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      final store = JourneyStore(LocalJourneyRepository());
      await t.runAsync(store.load);
      await t.runAsync(() => store.addProfile(baby));
      JourneyStore.instance = store;
      await t.pumpWidget(MaterialApp(home: Scaffold(body: HomeTab(child: baby, onExit: () {}, onTab: (_) {}))));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 80)));
      await t.pump(const Duration(milliseconds: 600));
      expect(find.byKey(const ValueKey('island_numbers')), findsNothing);
      expect(find.byKey(const ValueKey('island_stories')), findsOneWidget);
    });
  });
}
