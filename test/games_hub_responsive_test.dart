import 'dart:io';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/games/games_hub.dart';
import 'package:kids_app/games/game_catalog.dart';
import 'package:kids_app/journey/my_day.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/journey/ui/child_shell.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// Simulated LOGICAL window sizes. They are layout tests, not physical-device tests.
const kSizes = <(String, Size)>[
  ('compact phone landscape', Size(640, 360)),
  ('standard phone landscape', Size(852, 393)),
  ('large phone landscape', Size(932, 430)),
  ('small tablet landscape', Size(1024, 768)),
  ('large tablet landscape', Size(1366, 1024)),
];

const _kid = ChildProfile(id: 'kid1', nickname: 'سلمى', age: 5);

bool _fontLoaded = false;

/// Tests draw text with a square placeholder font unless the app's own font is loaded; widths would be wrong.
Future<void> _loadAppFont() async {
  if (_fontLoaded) return;
  final l = FontLoader('Tajawal')..addFont(Future.value(ByteData.view(File('assets/fonts/Tajawal-ExtraBold.ttf').readAsBytesSync().buffer)));
  await l.load();
  _fontLoaded = true;
}

Future<void> openGames(WidgetTester t, Size size, {String lang = 'ar'}) async {
  await _loadAppFont();
  SharedPreferences.setMockInitialValues({});
  FlutterSecureStorage.setMockInitialValues({});
  final store = JourneyStore(LocalJourneyRepository());
  await t.runAsync(() async {
    await store.load();
    await store.addProfile(_kid);
  });
  JourneyStore.instance = store;
  await AppLocale.instance.set(lang);
  t.view.physicalSize = size;
  t.view.devicePixelRatio = 1;
  addTearDown(t.view.reset);
  await t.pumpWidget(MaterialApp(
    key: UniqueKey(),
    theme: ThemeData(fontFamily: 'Tajawal'),
    builder: (c, w) => Directionality(textDirection: lang == 'ar' ? TextDirection.rtl : TextDirection.ltr, child: w!),
    home: const ChildShell(child: _kid),
  ));
  await t.pump();
  await t.tap(find.byKey(const ValueKey('nav_tab.games')));
  await t.pump();
  // The Games tab starts with two cards; the ten-island hub is behind «ألعاب تعليمية».
  await t.tap(find.byKey(const ValueKey('choice_educational')));
  await t.pump();
  await t.pump(const Duration(milliseconds: 400));
}

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  tearDown(() async => AppLocale.instance.set('ar'));

  for (final (name, size) in kSizes) {
    final tablet = size.shortestSide >= 600;
    group('$name ${size.width.toInt()}x${size.height.toInt()}', () {
      testWidgets('the whole hub is on screen inside the real shell: no scrolling, no overflow, picture never stretched', (t) async {
        await openGames(t, size);
        expect(find.byKey(const ValueKey('games_hub')), findsOneWidget);
        final pic = t.getRect(find.byKey(const ValueKey('hub_picture_box')));
        expect(pic.width / pic.height, closeTo(kGamesHubAspect, 0.02), reason: 'the design picture keeps its proportions');
        expect(pic.left, greaterThanOrEqualTo(-0.5));
        expect(pic.right, lessThanOrEqualTo(size.width + 0.5));
        expect(pic.bottom, lessThanOrEqualTo(size.height + 0.5));
        expect(find.descendant(of: find.byKey(const ValueKey('games_hub')), matching: find.byType(Scrollable)), findsNothing);
        expect(t.takeException(), isNull);
        // the two form factors are composed differently
        expect(find.byKey(const ValueKey('hub_featured')), tablet ? findsOneWidget : findsNothing);
      });

      testWidgets('every island has its own hitbox: big enough for a small child, none overlap, none leave the picture', (t) async {
        await openGames(t, size);
        final pic = t.getRect(find.byKey(const ValueKey('hub_picture_box')));
        final rects = <String, Rect>{};
        for (final c in kGameCategories) {
          rects[c.id] = t.getRect(find.byKey(ValueKey('hub_${c.id}')));
        }
        for (final e in rects.entries) {
          final r = e.value;
          expect(r.width, greaterThanOrEqualTo(64), reason: '${e.key} is only ${r.width.toStringAsFixed(0)} wide');
          expect(r.height, greaterThanOrEqualTo(64), reason: '${e.key} is only ${r.height.toStringAsFixed(0)} high');
          expect(r.left, greaterThanOrEqualTo(pic.left - 0.5), reason: e.key);
          expect(r.right, lessThanOrEqualTo(pic.right + 0.5), reason: e.key);
          expect(r.top, greaterThanOrEqualTo(pic.top - 0.5), reason: e.key);
          expect(r.bottom, lessThanOrEqualTo(pic.bottom + 0.5), reason: e.key);
        }
        final list = rects.entries.toList();
        for (var i = 0; i < list.length; i++) {
          for (var j = i + 1; j < list.length; j++) {
            final inter = list[i].value.intersect(list[j].value);
            expect(inter.width <= 0.5 || inter.height <= 0.5, isTrue, reason: '${list[i].key} overlaps ${list[j].key}');
          }
        }
      });

      testWidgets('tapping the centre of each island opens exactly that island, and nothing else is opened by accident', (t) async {
        for (final c in kGameCategories.where((c) => c.games.isNotEmpty)) {
          await openGames(t, size);
          await t.tap(find.byKey(ValueKey('hub_${c.id}')));
          await t.pump();
          await t.pump(const Duration(milliseconds: 400));
          final screen = find.byType(CategoryGamesScreen);
          expect(screen, findsOneWidget, reason: c.id);
          expect(t.widget<CategoryGamesScreen>(screen).category.id, c.id);
        }
      });

      testWidgets('the Arabic and English names are whole: not clipped, at a readable size', (t) async {
        for (final lang in ['ar', 'en']) {
          await openGames(t, size, lang: lang);
          for (final c in kGameCategories) {
            final title = c.title();
            final text = find.byKey(ValueKey('hub_name_$title'));
            expect(text, findsOneWidget, reason: '$lang ${c.id}');
            final w = t.widget<Text>(text);
            expect(w.style!.fontSize!, greaterThanOrEqualTo(kHubMinNameFont), reason: '$lang ${c.id}: the name is too small to read');
            if (!tablet) expect(w.style!.fontSize!, greaterThanOrEqualTo(11), reason: '$lang ${c.id} on a phone');
            final r = t.getRect(text);
            final box = t.getRect(find.byKey(ValueKey('hub_${c.id}')));
            expect(box.contains(r.topLeft) && box.contains(r.bottomRight), isTrue, reason: '$lang ${c.id}: the name lies outside its own button');
            // the name is whole: laid out in at most two lines inside its width
            final tp = TextPainter(text: TextSpan(text: title, style: w.style), textDirection: lang == 'ar' ? TextDirection.rtl : TextDirection.ltr, maxLines: 2)..layout(maxWidth: r.width + 0.5);
            expect(tp.didExceedMaxLines, isFalse, reason: '$lang ${c.id}: the name would be cut');
          }
          expect(t.takeException(), isNull, reason: lang);
        }
      });

      testWidgets('the back arrow still returns to the home tab', (t) async {
        await openGames(t, size);
        await t.tap(find.byKey(const ValueKey('hub_back')));
        await t.pump();
        await t.pump(const Duration(milliseconds: 400));
        expect(find.byKey(const ValueKey('games_hub')), findsNothing);
      });

      testWidgets('a category screen fits the window without scrolling, with readable names and one button per game', (t) async {
        await openGames(t, size);
        await t.tap(find.byKey(const ValueKey('hub_letters')));
        await t.pump();
        await t.pump(const Duration(milliseconds: 400));
        expect(t.takeException(), isNull);
        expect(find.byType(CategoryGamesScreen), findsOneWidget);
        final grid = find.byKey(const ValueKey('games_grid'));
        expect(grid, findsOneWidget);
        final g = t.getRect(grid);
        expect(g.right, lessThanOrEqualTo(size.width + 0.5));
        expect(g.bottom, lessThanOrEqualTo(size.height + 0.5));
        final tiles = find.byWidgetPredicate((w) => w.key is ValueKey && (w.key as ValueKey).value.toString().startsWith('island_game_'));
        expect(tiles, findsWidgets);
        final rects = [for (final e in tiles.evaluate()) t.getRect(find.byWidget(e.widget))];
        for (final r in rects) {
          expect(r.width, greaterThanOrEqualTo(60));
          expect(r.height, greaterThanOrEqualTo(60));
          expect(r.left, greaterThanOrEqualTo(-0.5));
          expect(r.right, lessThanOrEqualTo(size.width + 0.5));
          expect(r.bottom, lessThanOrEqualTo(size.height + 0.5));
        }
        for (var i = 0; i < rects.length; i++) {
          for (var j = i + 1; j < rects.length; j++) {
            final inter = rects[i].intersect(rects[j]);
            expect(inter.width <= 0.5 || inter.height <= 0.5, isTrue, reason: 'game buttons $i and $j overlap');
          }
        }
        // a tablet gets larger islands than a phone
        final biggest = rects.map((r) => math.min(r.width, r.height)).reduce(math.max);
        expect(biggest, tablet ? greaterThan(120) : lessThanOrEqualTo(200));
      });
    });
  }

  testWidgets('the tablet strip lists real games that open, and a phone has no strip', (t) async {
    await openGames(t, const Size(1024, 768));
    final strip = find.byKey(const ValueKey('hub_featured'));
    expect(strip, findsOneWidget);
    final tiles = find.byWidgetPredicate((w) => w.key is ValueKey && (w.key as ValueKey).value.toString().startsWith('featured_'));
    expect(tiles, findsWidgets);
    expect(tiles.evaluate().length, lessThanOrEqualTo(8));
    for (final e in tiles.evaluate()) {
      final r = t.getRect(find.byWidget(e.widget));
      expect(r.right, lessThanOrEqualTo(1024.5));
      expect(r.bottom, lessThanOrEqualTo(768.5));
      expect(r.width, greaterThanOrEqualTo(64));
    }
    // the strip never overlaps the picture
    final pic = t.getRect(find.byKey(const ValueKey('hub_picture_box')));
    expect(t.getRect(strip).top, greaterThanOrEqualTo(pic.bottom - 0.5));
    await t.tap(tiles.first);
    await t.pump();
    await t.pump(const Duration(milliseconds: 400));
    expect(find.byKey(const ValueKey('hub_featured')).hitTestable(), findsNothing); // a game opened on top of the hub
  });

  group('featured strip (tablet)', () {
    test('every item suits the age, is a real catalogue game, appears once, and the day\'s game and surprise come first', () {
      final now = DateTime(2026, 11, 3);
      for (var age = 2; age <= 6; age++) {
        final picks = FeaturedStrip.pick(age, now, 8);
        final ids = picks.map((g) => g.id).toList();
        expect(ids.toSet().length, ids.length, reason: 'age $age has a repeat');
        for (final g in picks) {
          expect(g.fitsAge(age), isTrue, reason: '${g.id} does not suit age $age');
          expect(kEducationalGames.any((k) => k.id == g.id), isTrue, reason: g.id);
        }
        expect(ids.first, gameOfDay(now, age)!.id);
        final surprise = surpriseOfDay(now, age).game;
        if (surprise != null) expect(ids, contains(surprise.id));
      }
      expect(FeaturedStrip.pick(1, now, 8), isEmpty); // nothing invented for a one-year-old
    });

    testWidgets('a tile opens its own game, and the strip shows no stars, ticks or progress', (t) async {
      await openGames(t, const Size(1024, 768));
      final strip = find.byKey(const ValueKey('hub_featured'));
      expect(find.descendant(of: strip, matching: find.byIcon(Icons.star_rounded)), findsNothing);
      expect(find.descendant(of: strip, matching: find.byIcon(Icons.check_circle_rounded)), findsNothing);
      final first = FeaturedStrip.pick(_kid.age, DateTime.now(), 8).first;
      await t.tap(find.byKey(ValueKey('featured_${first.id}')));
      await t.pump();
      await t.pump(const Duration(milliseconds: 400));
      expect(find.text(first.title()), findsWidgets); // the game's own screen is showing
      expect(find.byKey(const ValueKey('hub_featured')).hitTestable(), findsNothing);
    });

    testWidgets('a one-year-old on a tablet sees a friendly line, not an empty gap', (t) async {
      SharedPreferences.setMockInitialValues({});
      t.view.physicalSize = const Size(1024, 768);
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      await AppLocale.instance.set('ar');
      await t.pumpWidget(const MaterialApp(home: Scaffold(body: GamesHub(child: ChildProfile(id: 'tiny', nickname: 'ص', age: 1)))));
      await t.pump();
      expect(find.text('اختر جزيرة وابدأ اللعب'), findsOneWidget);
    });
  });

  group('held upright (the app is landscape-first)', () {
    testWidgets('a phone shows the whole picture and a friendly "turn sideways" hint; nothing is cut off', (t) async {
      for (final size in [const Size(390, 844), const Size(360, 740)]) {
        await openGames(t, size);
        final pic = t.getRect(find.byKey(const ValueKey('hub_picture_box')));
        expect(pic.left, greaterThanOrEqualTo(-0.5));
        expect(pic.right, lessThanOrEqualTo(size.width + 0.5));
        expect(find.byKey(const ValueKey('hub_rotate_hint')), findsOneWidget);
        expect(t.getRect(find.byKey(const ValueKey('hub_rotate_hint'))).bottom, lessThanOrEqualTo(size.height));
        expect(find.byKey(const ValueKey('hub_featured')), findsNothing);
        expect(t.takeException(), isNull, reason: '$size');
      }
    });

    testWidgets('a tablet shows the strip right under the picture, with no big empty gap', (t) async {
      await openGames(t, const Size(768, 1024));
      final pic = t.getRect(find.byKey(const ValueKey('hub_picture_box')));
      final strip = t.getRect(find.byKey(const ValueKey('hub_featured')));
      expect(strip.top - pic.bottom, lessThan(4));
      expect(strip.bottom, lessThanOrEqualTo(1024.5));
      expect(find.byKey(const ValueKey('hub_rotate_hint')), findsNothing);
      expect(t.takeException(), isNull);
    });

    testWidgets('a landscape phone has no hint', (t) async {
      await openGames(t, const Size(852, 393));
      expect(find.byKey(const ValueKey('hub_rotate_hint')), findsNothing);
    });
  });
}
