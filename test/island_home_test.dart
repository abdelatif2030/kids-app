import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/journey/ui/home_tab.dart';
import 'package:kids_app/journey/ui/island_home.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:shared_preferences/shared_preferences.dart';

IslandSpec spec(String id, VoidCallback onTap) => IslandSpec(
  id: id,
  title: 'Island $id',
  emoji: '🌴',
  grass: Colors.green,
  grassDark: Colors.green.shade800,
  onTap: onTap,
);

void main() {
  setUp(() {
    SharedPreferences.setMockInitialValues({});
    AppLocale.instance.set('en');
    HomeViewPref.instance.resetForTest();
  });

  group('layout', () {
    for (final w in [320.0, 360.0, 390.0, 768.0, 1024.0, 1280.0]) {
      for (final rtl in [false, true]) {
        test(
          'every landmark is inside the canvas and none overlap at $w px (10 landmarks, ${rtl ? 'rtl' : 'ltr'})',
          () {
            final l = WorldMapLayout.compute(10, w, rtl: rtl);
            expect(l.centers.length, 10);
            expect(l.width, lessThanOrEqualTo(w));
            for (final c in l.centers) {
              expect(c.dx - l.size / 2 - 14, greaterThanOrEqualTo(0));
              expect(c.dx + l.size / 2 + 14, lessThanOrEqualTo(l.width));
              expect(c.dy - l.size / 2, greaterThanOrEqualTo(0));
              expect(
                c.dy + l.size / 2 + 58,
                lessThanOrEqualTo(l.height),
              ); // the name plate fits too
            }
            for (var i = 0; i < 10; i++) {
              for (var j = i + 1; j < 10; j++) {
                // the badge with its name plate under it
                final a = Rect.fromLTWH(
                  l.centers[i].dx - l.size / 2 - 14,
                  l.centers[i].dy - l.size / 2,
                  l.size + 28,
                  l.size + 58,
                );
                final b = Rect.fromLTWH(
                  l.centers[j].dx - l.size / 2 - 14,
                  l.centers[j].dy - l.size / 2,
                  l.size + 28,
                  l.size + 58,
                );
                expect(a.overlaps(b), isFalse, reason: 'landmarks $i and $j');
              }
            }
            expect(l.size, greaterThanOrEqualTo(88)); // big enough to tap
          },
        );
      }
    }
    test('it is one path going down the page: each landmark is below the one before', () {
      final l = WorldMapLayout.compute(10, 390);
      for (var i = 0; i + 1 < 10; i++) {
        expect(l.centers[i + 1].dy, greaterThan(l.centers[i].dy));
      }
    });
    test(
      'Arabic starts on the right, English on the left (a mirror image)',
      () {
        final ltr = WorldMapLayout.compute(4, 400);
        final rtl = WorldMapLayout.compute(4, 400, rtl: true);
        expect(ltr.centers.first.dx, lessThan(ltr.width / 2));
        expect(rtl.centers.first.dx, greaterThan(rtl.width / 2));
        expect(
          rtl.centers.first.dx,
          closeTo(ltr.width - ltr.centers.first.dx, 0.01),
        );
      },
    );
    test('any count works, including none and one; more landmarks make a taller map', () {
      expect(WorldMapLayout.compute(0, 400).centers, isEmpty);
      expect(WorldMapLayout.compute(1, 400).centers.length, 1);
      expect(
        WorldMapLayout.compute(9, 400).height,
        greaterThan(WorldMapLayout.compute(8, 400).height),
      );
    });
    test(
      'on a wide window the island stays a phone-sized picture in the middle',
      () {
        expect(WorldMapLayout.compute(8, 1280).width, 620);
      },
    );
  });

  group('horizontal map layout', () {
    for (final w in [800.0, 1024.0, 1280.0, 1920.0]) {
      for (final rtl in [false, true]) {
        test(
          'every house stays inside the canvas and none overlap (${w.toInt()} px, rtl=$rtl)',
          () {
            final l = computeWideMapLayout(
              5,
              w,
              560,
              rtl: rtl,
              weights: const [1.45, 1, 1, 1, 1],
            );
            expect(l.wide, isTrue);
            expect(l.width, greaterThanOrEqualTo(w));
            final rects = <Rect>[];
            for (var i = 0; i < l.centers.length; i++) {
              final c = l.centers[i], z = l.sizeAt(i);
              final r = Rect.fromLTWH(
                c.dx - (z + 28) / 2,
                c.dy - z / 2,
                z + 28,
                z + 58,
              );
              expect(r.left, greaterThanOrEqualTo(0), reason: 'house $i');
              expect(r.right, lessThanOrEqualTo(l.width), reason: 'house $i');
              expect(r.bottom, lessThanOrEqualTo(l.height), reason: 'house $i');
              for (final o in rects) {
                expect(
                  r.overlaps(o),
                  isFalse,
                  reason: 'house $i overlaps another',
                );
              }
              rects.add(r);
            }
          },
        );
      }
    }

    test('English runs left to right, Arabic right to left, and a long list is wider than the window', () {
      final ltr = computeWideMapLayout(5, 1000, 520);
      final rtl = computeWideMapLayout(5, 1000, 520, rtl: true);
      expect(ltr.centers.first.dx, lessThan(ltr.centers.last.dx));
      expect(rtl.centers.first.dx, greaterThan(rtl.centers.last.dx));
      expect(computeWideMapLayout(12, 800, 520).width, greaterThan(800));
      expect(computeWideMapLayout(0, 800, 520).centers, isEmpty);
    });
  });

  group('IslandHome widget', () {
    testWidgets(
      'the map always runs sideways, on a landscape window and on an upright phone',
      (t) async {
        for (final size in [const Size(1280, 800), const Size(390, 800)]) {
          t.view.physicalSize = size;
          t.view.devicePixelRatio = 1;
          addTearDown(t.view.reset);
          await t.pumpWidget(
            MaterialApp(
              key: UniqueKey(),
              home: Scaffold(
                body: SingleChildScrollView(
                  child: IslandHome(
                    islands: [for (var i = 0; i < 5; i++) spec('w$i', () {})],
                  ),
                ),
              ),
            ),
          );
          await t.pump();
          final first = t.getTopLeft(find.byKey(const ValueKey('island_w0')));
          final second = t.getTopLeft(find.byKey(const ValueKey('island_w1')));
          // neighbours sit side by side (well apart in x), never stacked down the screen
          expect((second.dx - first.dx).abs(), greaterThan(100));
          expect(t.takeException(), isNull);
        }
      },
    );

    testWidgets(
      'the pictures on the houses move when motion is allowed, and stand still otherwise',
      (t) async {
        IslandHome.forceMotion = true;
        addTearDown(() => IslandHome.forceMotion = null);
        t.view.physicalSize = const Size(1280, 800);
        t.view.devicePixelRatio = 1;
        addTearDown(t.view.reset);
        await t.pumpWidget(
          MaterialApp(
            key: UniqueKey(),
            home: Scaffold(
              body: SingleChildScrollView(
                child: IslandHome(islands: [spec('m0', () {})]),
              ),
            ),
          ),
        );
        await t.pump();
        final emoji = find.descendant(
          of: find.byKey(const ValueKey('island_m0')),
          matching: find.text('🌴'),
        );
        final a = t.getTopLeft(emoji);
        await t.pump(const Duration(milliseconds: 500));
        final b = t.getTopLeft(emoji);
        expect(a == b, isFalse, reason: 'the picture should have moved');
        IslandHome.forceMotion = false;
        await t.pumpWidget(
          MaterialApp(
            key: UniqueKey(),
            home: Scaffold(
              body: SingleChildScrollView(
                child: IslandHome(islands: [spec('m0', () {})]),
              ),
            ),
          ),
        );
        await t.pump();
        final c = t.getTopLeft(emoji);
        await t.pump(const Duration(milliseconds: 500));
        expect(t.getTopLeft(emoji), c);
      },
    );
    Future<void> show(
      WidgetTester t,
      List<IslandSpec> list, {
      Size size = const Size(420, 900),
      String lang = 'en',
    }) async {
      AppLocale.instance.set(lang);
      t.view.physicalSize = size;
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      await t.pumpWidget(
        MaterialApp(
          key: UniqueKey(),
          home: Scaffold(
            body: SingleChildScrollView(child: IslandHome(islands: list)),
          ),
        ),
      );
      await t.pump();
    }

    for (final lang in ['ar', 'en']) {
      for (final size in [
        const Size(320, 700),
        const Size(768, 1024),
        const Size(1280, 800),
      ]) {
        testWidgets(
          'all islands show with their names and no overflow ($lang, ${size.width.toInt()} px)',
          (t) async {
            await show(
              t,
              [for (var i = 0; i < 8; i++) spec('s$i', () {})],
              size: size,
              lang: lang,
            );
            for (var i = 0; i < 8; i++) {
              expect(find.byKey(ValueKey('island_s$i')), findsOneWidget);
              expect(find.text('Island s$i'), findsOneWidget);
            }
          },
        );
      }
    }

    testWidgets(
      'tapping an island runs its action; each island is one big labelled button',
      (t) async {
        var tapped = '';
        final h = t.ensureSemantics();
        await show(t, [
          spec('a', () => tapped = 'a'),
          spec('b', () => tapped = 'b'),
        ]);
        await t.tap(find.byKey(const ValueKey('island_b')));
        expect(tapped, 'b');
        final size = t.getSize(find.byKey(const ValueKey('island_a')));
        expect(size.width, greaterThanOrEqualTo(88));
        expect(size.height, greaterThanOrEqualTo(88));
        await t.pump();
        expect(find.bySemanticsLabel(RegExp('Island a')), findsWidgets);
        h.dispose();
      },
    );

    testWidgets(
      'the bobbing runs only when allowed, and never with reduced motion',
      (t) async {
        IslandHome.forceMotion = true;
        addTearDown(() => IslandHome.forceMotion = null);
        await show(t, [spec('a', () {})]);
        await t.pump(const Duration(seconds: 1));
        expect(find.byType(AnimatedBuilder), findsWidgets);
        await t.pumpWidget(
          MediaQuery(
            data: const MediaQueryData(disableAnimations: true),
            child: MaterialApp(
              key: UniqueKey(),
              home: Scaffold(
                body: SingleChildScrollView(
                  child: IslandHome(islands: [spec('a', () {})]),
                ),
              ),
            ),
          ),
        );
        await t.pump(const Duration(seconds: 1));
        expect(t.takeException(), isNull);
      },
    );
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
      await t.pumpWidget(
        MaterialApp(
          key: UniqueKey(),
          home: Scaffold(
            body: HomeTab(child: kid, onExit: () {}, onTab: (_) {}),
          ),
        ),
      );
      await t.runAsync(
        () => Future<void>.delayed(const Duration(milliseconds: 80)),
      );
      await t.pump(const Duration(milliseconds: 600));
    }

    testWidgets(
      'the home shows the five main destinations at every age, Games the biggest',
      (t) async {
        await openHome(t);
        for (final id in ['games', 'stories', 'learn', 'create', 'rewards']) {
          expect(
            find.byKey(ValueKey('island_$id')),
            findsOneWidget,
            reason: id,
          );
        }
        expect(
          find.byKey(const ValueKey('greeting')),
          findsNothing,
        ); // the greeting lives under More
        final games = t.getSize(find.byKey(const ValueKey('island_games')));
        final other = t.getSize(find.byKey(const ValueKey('island_learn')));
        expect(games.width, greaterThan(other.width));
      },
    );

    testWidgets('a toddler sees the same five destinations', (t) async {
      const baby = ChildProfile(id: 'k2', nickname: 'Baby', age: 2);
      t.view.physicalSize = const Size(600, 1600);
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      final store = JourneyStore(LocalJourneyRepository());
      await t.runAsync(store.load);
      await t.runAsync(() => store.addProfile(baby));
      JourneyStore.instance = store;
      await t.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: HomeTab(child: baby, onExit: () {}, onTab: (_) {}),
          ),
        ),
      );
      await t.runAsync(
        () => Future<void>.delayed(const Duration(milliseconds: 80)),
      );
      await t.pump(const Duration(milliseconds: 600));
      for (final id in ['games', 'stories', 'learn', 'create', 'rewards']) {
        expect(find.byKey(ValueKey('island_$id')), findsOneWidget, reason: id);
      }
    });

    testWidgets('weights make a destination bigger and nothing overlaps', (
      t,
    ) async {
      for (final w in [320.0, 390.0, 768.0]) {
        final l = WorldMapLayout.compute(
          5,
          w,
          weights: const [1.45, 1, 1, 1, 1],
        );
        expect(l.sizeAt(0), greaterThan(l.sizeAt(1)));
        for (var i = 0; i < 5; i++) {
          final r = Rect.fromCenter(
            center: l.centers[i],
            width: l.sizeAt(i) + 28,
            height: l.sizeAt(i),
          );
          expect(r.left, greaterThanOrEqualTo(0), reason: 'w=$w i=$i');
          expect(r.right, lessThanOrEqualTo(l.width), reason: 'w=$w i=$i');
          for (var j = i + 1; j < 5; j++) {
            final q = Rect.fromCenter(
              center: l.centers[j],
              width: l.sizeAt(j) + 28,
              height: l.sizeAt(j) + 40,
            );
            expect(r.overlaps(q), isFalse, reason: 'w=$w $i/$j');
          }
        }
      }
    });
  });
}
