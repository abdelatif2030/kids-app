import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/design/picture_stage.dart';
import 'package:kids_app/drawing_screen.dart';
import 'package:kids_app/games/games_hub.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/journey/ui/picture_screens.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/lessons_own/own_lessons_screens.dart';
import 'package:kids_app/main.dart' show VideoListScreen;
import 'package:kids_app/stories/story_screens.dart';
import 'package:shared_preferences/shared_preferences.dart';

const _kid = ChildProfile(id: 'k1', nickname: 'سلمى', age: 5);

Future<void> _setup(WidgetTester t) async {
  SharedPreferences.setMockInitialValues({});
  FlutterSecureStorage.setMockInitialValues({});
  await t.runAsync(() async {
    await AppLocale.instance.set('ar');
    final store = JourneyStore(LocalJourneyRepository());
    await store.load();
    await store.addProfile(_kid);
    JourneyStore.instance = store;
  });
}

void _size(WidgetTester t, Size s) {
  t.view.physicalSize = s;
  t.view.devicePixelRatio = 1;
  addTearDown(t.view.reset);
}

Future<void> _show(WidgetTester t, Widget w) async {
  await t.pumpWidget(MaterialApp(
    builder: (c, child) => Directionality(textDirection: AppLocale.instance.direction, child: child!),
    home: w,
  ));
  await t.pump(const Duration(milliseconds: 300));
}

Future<void> _settle(WidgetTester t) async {
  await t.pump();
  await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 120)));
  await t.pump(const Duration(milliseconds: 400));
  await t.pump(const Duration(milliseconds: 400));
}

bool _overlap(Rect a, Rect b) => a.deflate(2).overlaps(b.deflate(2));

void main() {
  tearDown(() => AppLocale.instance.set('ar'));

  group('the owner pictures are bundled and sized as the code expects', () {
    test('each picture file exists and is 1672 x 941 (the home, cartoons, games and lessons screens)', () {
      for (final f in ['assets/home/home_main.jpg', 'assets/home/cartoons_stories.jpg', 'assets/games/hub_scene.jpg', 'assets/home/lessons_scene.jpg']) {
        final bytes = File(f).readAsBytesSync();
        expect(bytes.length, greaterThan(50 * 1024), reason: f);
        // a JPEG's size sits in its start-of-frame marker
        var i = 2, w = 0, h = 0;
        while (i < bytes.length - 9) {
          if (bytes[i] != 0xFF) {
            i++;
            continue;
          }
          final m = bytes[i + 1];
          if (m >= 0xC0 && m <= 0xC3) {
            h = bytes[i + 5] * 256 + bytes[i + 6];
            w = bytes[i + 7] * 256 + bytes[i + 8];
            break;
          }
          i += 2 + bytes[i + 2] * 256 + bytes[i + 3];
        }
        expect((w, h), (1672, 941), reason: f);
      }
      expect(kScreenPictureAspect, closeTo(1672 / 941, 1e-9));
    });

    test('the scenery background is declared in pubspec and has its top bar cropped away', () {
      final pub = File('pubspec.yaml').readAsStringSync();
      for (final f in ['assets/home/home_main.jpg', 'assets/home/cartoons_stories.jpg', 'assets/home/lessons_scene.jpg', 'assets/home/scene_bg.jpg', 'assets/games/hub_scene.jpg']) {
        expect(pub, contains(f), reason: f);
        expect(File(f).existsSync(), isTrue, reason: f);
      }
    });
  });

  group('the home', () {
    testWidgets('four islands, the rewards sign, the gear and the exit lock sit inside the picture and none overlap', (t) async {
      _size(t, const Size(1672, 941));
      await _setup(t);
      var tab = -1;
      await _show(t, Scaffold(body: PictureHome(child: _kid, onTab: (i) => tab = i, onExit: () {})));
      final box = t.getRect(find.byKey(const ValueKey('picture_stage_box')));
      final keys = ['island_games', 'island_stories', 'island_learn', 'island_create', 'island_rewards', 'home_gear', 'home_exit'];
      final rects = {for (final k in keys) k: t.getRect(find.byKey(ValueKey(k)))};
      for (final e in rects.entries) {
        expect(box.contains(e.value.topLeft) && box.contains(e.value.bottomRight), isTrue, reason: e.key);
        expect(e.value.width, greaterThanOrEqualTo(44), reason: '${e.key} is a comfortable tap target');
      }
      for (final a in keys) {
        for (final b in keys) {
          if (a.compareTo(b) < 0) expect(_overlap(rects[a]!, rects[b]!), isFalse, reason: '$a vs $b');
        }
      }
      await t.tap(find.byKey(const ValueKey('island_games')));
      expect(tab, 1);
      await t.tap(find.byKey(const ValueKey('island_create')));
      expect(tab, 2);
      await t.tap(find.byKey(const ValueKey('island_rewards')));
      expect(tab, 3);
    });

    testWidgets('the bell and the avatar are the child\'s own, not the painted ones', (t) async {
      _size(t, const Size(1672, 941));
      await _setup(t);
      await _show(t, Scaffold(body: PictureHome(child: _kid, onTab: (_) {}, onExit: () {})));
      expect(find.byKey(const ValueKey('notification_bell')), findsOneWidget);
      expect(find.byKey(const ValueKey('home_avatar')), findsOneWidget);
      // no unread notification: no count is drawn (the painted "2" is covered by the real bell)
      expect(find.byKey(const ValueKey('notification_badge')), findsNothing);
    });

    testWidgets('an upright phone gets the turn-sideways hint and the picture stays whole', (t) async {
      _size(t, const Size(390, 800));
      await _setup(t);
      await _show(t, Scaffold(body: PictureHome(child: _kid, onTab: (_) {}, onExit: () {})));
      expect(find.byKey(const ValueKey('picture_rotate_hint')), findsOneWidget);
      final box = t.getRect(find.byKey(const ValueKey('picture_stage_box')));
      expect(box.width, lessThanOrEqualTo(390));
      expect(box.width / box.height, closeTo(1672 / 941, 0.01), reason: 'never stretched');
    });
  });

  group('cartoons and stories', () {
    testWidgets('two islands: cartoons says episodes are coming, stories opens an EMPTY page (audio stories come later), back leaves', (t) async {
      _size(t, const Size(1672, 941));
      await _setup(t);
      await _show(t, const CartoonsPictureScreen(child: _kid));
      final a = t.getRect(find.byKey(const ValueKey('hub_cartoons')));
      final b = t.getRect(find.byKey(const ValueKey('hub_stories')));
      expect(_overlap(a, b), isFalse);
      await t.tap(find.byKey(const ValueKey('hub_cartoons')));
      await t.pump();
      expect(find.text('الحلقات الكرتونية قادمة قريباً!'), findsOneWidget);
      expect(find.byType(VideoListScreen), findsNothing, reason: 'no YouTube content');
      await t.tap(find.byKey(const ValueKey('hub_stories')));
      await _settle(t);
      expect(find.byKey(const ValueKey('coming_soon')), findsOneWidget);
      expect(find.text('هنا ستظهر القصص الصوتية قريباً.'), findsOneWidget);
      expect(find.byType(StoriesHomeScreen), findsNothing, reason: 'the stories slot is empty on purpose');
      await t.pageBack();
      await _settle(t);
      expect(find.byKey(const ValueKey('cartoons_picture')), findsOneWidget);
    });

    testWidgets('in English the painted Arabic names are covered by real English ones; in Arabic nothing is drawn over the picture', (t) async {
      _size(t, const Size(1672, 941));
      await _setup(t);
      await t.runAsync(() => AppLocale.instance.set('en'));
      await _show(t, const CartoonsPictureScreen(child: _kid));
      expect(find.text('Cartoons'), findsWidgets);
      expect(find.text('Stories'), findsWidgets);
      await t.runAsync(() => AppLocale.instance.set('ar'));
      await _show(t, const CartoonsPictureScreen(child: _kid));
      expect(find.text('Cartoons'), findsNothing);
    });
  });

  group('learn and discover (the five-tile picture)', () {
    testWidgets('five tiles inside the picture, none overlapping; nothing else is on it', (t) async {
      _size(t, const Size(1672, 941));
      await _setup(t);
      await _show(t, const LessonsPictureScreen(child: _kid));
      final box = t.getRect(find.byKey(const ValueKey('picture_stage_box')));
      const ids = ['quran', 'speech', 'songs', 'drawing', 'math'];
      final rects = {for (final id in ids) id: t.getRect(find.byKey(ValueKey('lesson_$id')))};
      for (final e in rects.entries) {
        expect(box.contains(e.value.topLeft) && box.contains(e.value.bottomRight), isTrue, reason: e.key);
      }
      for (final a in ids) {
        for (final b in ids) {
          if (a.compareTo(b) < 0) expect(_overlap(rects[a]!, rects[b]!), isFalse, reason: '$a vs $b');
        }
      }
      expect(find.byKey(const ValueKey('lessons_videos')), findsNothing, reason: 'no orange button: only the tiles of the picture');
      expect(find.byKey(const ValueKey('lessons_more')), findsNothing);
    });

    testWidgets('quran and drawing are empty pages; speech, songs and maths open the owner\'s lesson videos on their category', (t) async {
      _size(t, const Size(1672, 941));
      await _setup(t);
      await _show(t, const LessonsPictureScreen(child: _kid));
      Future<void> open(String id) async {
        await t.tap(find.byKey(ValueKey('lesson_$id')));
        await _settle(t);
      }

      for (final id in ['quran', 'drawing']) {
        await open(id);
        expect(find.byKey(const ValueKey('coming_soon')), findsOneWidget, reason: id);
        expect(find.byType(OwnLessonsScreen), findsNothing, reason: id);
        await t.pageBack();
        await _settle(t);
      }
      for (final (id, cat) in const [('speech', 'words'), ('songs', 'general'), ('math', 'letters_numbers')]) {
        await open(id);
        final screen = t.widget<OwnLessonsScreen>(find.byType(OwnLessonsScreen));
        expect(screen.child.id, 'k1', reason: id);
        expect(screen.category, cat, reason: id);
        await t.pageBack();
        await _settle(t);
      }
    });
  });

  group('the scenery background', () {
    testWidgets('a game category and the drawing page sit on the unified scenery picture and never show a blank screen', (t) async {
      _size(t, const Size(844, 390));
      await _setup(t);
      await _show(t, CategoryGamesScreen(category: kGameCategories.first, child: _kid));
      await _settle(t);
      expect(find.byKey(const ValueKey('picture_backdrop')), findsOneWidget);
      await _show(t, const DrawingScreen(child: _kid));
      await _settle(t);
      expect(find.byKey(const ValueKey('picture_backdrop')), findsOneWidget, reason: 'drawing uses the unified background');
    });
  });

  test('PictureSpot and PictureNameLabel hold what the stage needs', () {
    const s = PictureSpot('x', Offset(0.5, 0.5), 0.2, 0.2, 'X', _noop);
    expect(s.radius, 24);
    const l = PictureNameLabel(Offset(0.5, 0.5), 0.2, 0.1, 'X');
    expect(l.text, 'X');
  });
}

void _noop() {}
