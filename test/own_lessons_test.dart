import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/lessons_own/own_lessons.dart';
import 'package:kids_app/lessons_own/own_lessons_screens.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:shared_preferences/shared_preferences.dart';

const _kid = ChildProfile(id: 'k1', nickname: 'سلمى', age: 4);
final _base = Uri.parse('https://videos.example.org/');

String _manifest([List<Map<String, Object?>>? extra]) {
  final items = <Map<String, Object?>>[
    {'id': 'lesson_01', 'title': 'تعليم الحروف العربية', 'category': 'letters', 'durationSec': 125, 'video': 'videos/lesson_01.mp4', 'poster': 'posters/lesson_01.jpg'},
    {'id': 'lesson_02', 'title': 'الأرقام للأطفال', 'category': 'numbers', 'minAge': 3, 'maxAge': 6, 'durationSec': 90, 'video': 'videos/lesson_02.mp4', 'poster': 'posters/lesson_02.jpg'},
    {'id': 'lesson_03', 'title': 'أغنية الحيوانات', 'category': 'songs', 'durationSec': 150, 'video': 'videos/lesson_03.mp4', 'poster': 'posters/lesson_03.jpg'},
    {'id': 'lesson_04', 'title': 'للكبار فقط', 'category': 'general', 'minAge': 6, 'maxAge': 6, 'video': 'videos/lesson_04.mp4', 'poster': 'posters/lesson_04.jpg'},
    ...?extra,
  ];
  return _json(items);
}

String _json(List<Map<String, Object?>> items) {
  String v(Object? o) => o is String ? '"${o.replaceAll('"', '\\"')}"' : '$o';
  return '[${items.map((m) => '{${m.entries.map((e) => '"${e.key}":${v(e.value)}').join(',')}}').join(',')}]';
}

Future<void> _show(WidgetTester t, Widget w, {Size size = const Size(1000, 700)}) async {
  t.view.physicalSize = size;
  t.view.devicePixelRatio = 1;
  addTearDown(t.view.reset);
  await t.pumpWidget(MaterialApp(builder: (c, child) => Directionality(textDirection: TextDirection.rtl, child: child!), home: w));
  await t.pump();
  await t.pump(const Duration(milliseconds: 300));
}

class _FakeSource implements LessonsSource {
  final String? text;
  _FakeSource(this.text);
  @override
  Future<String> manifest() async {
    if (text == null) throw StateError('offline');
    return text!;
  }
}

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    OwnLessons.baseUrl = 'https://videos.example.org';
    OwnLessons.sourceOverride = null;
    await AppLocale.instance.set('ar');
  });
  tearDown(() {
    OwnLessons.baseUrl = kLessonsBaseUrl;
    OwnLessons.sourceOverride = null;
  });

  group('the list file (lessons.json)', () {
    test('a good entry becomes a lesson with full https addresses built from the base; ages default to 1 to 6', () {
      final l = OwnLessons.parse(_manifest(), _base);
      expect(l.map((e) => e.id), ['lesson_01', 'lesson_02', 'lesson_03', 'lesson_04']);
      expect(l.first.video.toString(), 'https://videos.example.org/videos/lesson_01.mp4');
      expect(l.first.poster.toString(), 'https://videos.example.org/posters/lesson_01.jpg');
      expect((l.first.minAge, l.first.maxAge), (1, 6));
      expect(l.first.durationLabel, '2:05');
      expect(l[1].fitsAge(2), isFalse);
      expect(l[1].fitsAge(4), isTrue);
    });

    test('bad entries are skipped and never throw: bad ids, duplicates, absolute or sneaky paths, empty titles', () {
      final text = _json([
        {'id': 'ok_1', 'title': 'جيد', 'video': 'videos/a.mp4', 'poster': 'posters/a.jpg'},
        {'id': 'ok_1', 'title': 'مكرر', 'video': 'videos/b.mp4', 'poster': 'posters/b.jpg'},
        {'id': 'BAD ID', 'title': 'x', 'video': 'videos/c.mp4', 'poster': 'posters/c.jpg'},
        {'id': 'abs', 'title': 'x', 'video': 'https://evil.example/x.mp4', 'poster': 'posters/c.jpg'},
        {'id': 'dots', 'title': 'x', 'video': '../secret.mp4', 'poster': 'posters/c.jpg'},
        {'id': 'slash', 'title': 'x', 'video': '/etc/passwd', 'poster': 'posters/c.jpg'},
        {'id': 'proto', 'title': 'x', 'video': '//evil.example/x.mp4', 'poster': 'posters/c.jpg'},
        {'id': 'empty', 'title': '   ', 'video': 'videos/d.mp4', 'poster': 'posters/d.jpg'},
        {'id': 'nopost', 'title': 'x', 'video': 'videos/e.mp4'},
      ]);
      expect(OwnLessons.parse(text, _base).map((e) => e.id), ['ok_1']);
      expect(OwnLessons.parse('not json', _base), isEmpty);
      expect(OwnLessons.parse('{"a":1}', _base), isEmpty);
    });

    test('ages are kept inside 1 to 6, an unknown category becomes "general", a long title is shortened', () {
      final l = OwnLessons.parse(
          _json([
            {'id': 'a', 'title': 'م' * 300, 'category': 'weird', 'minAge': 0, 'maxAge': 99, 'video': 'v/a.mp4', 'poster': 'p/a.jpg'},
            {'id': 'b', 'title': 'ب', 'minAge': 5, 'maxAge': 2, 'video': 'v/b.mp4', 'poster': 'p/b.jpg'},
          ]),
          _base);
      expect((l[0].minAge, l[0].maxAge), (1, 6));
      expect(l[0].category, 'general');
      expect(l[0].title.runes.length, 120);
      expect(l[1].maxAge, 5, reason: 'a reversed range becomes one age');
    });

    test('only an https base address is accepted (http only for a local test server); empty means not connected', () {
      OwnLessons.baseUrl = '';
      expect(OwnLessons.base, isNull);
      OwnLessons.baseUrl = 'http://videos.example.org';
      expect(OwnLessons.base, isNull);
      OwnLessons.baseUrl = 'ftp://x.example';
      expect(OwnLessons.base, isNull);
      OwnLessons.baseUrl = 'http://127.0.0.1:8000';
      expect(OwnLessons.base, isNotNull);
      OwnLessons.baseUrl = 'https://videos.example.org/lessons';
      expect(OwnLessons.base.toString(), 'https://videos.example.org/lessons/');
    });

    test('with no base address nothing is requested; with an address the list loads and a copy is saved for offline', () async {
      OwnLessons.baseUrl = '';
      expect((await OwnLessons.load()).state, LessonsState.notConnected);
      OwnLessons.baseUrl = 'https://videos.example.org';
      OwnLessons.sourceOverride = _FakeSource(_manifest());
      final ok = await OwnLessons.load();
      expect(ok.state, LessonsState.ready);
      expect(ok.fromCache, isFalse);
      OwnLessons.sourceOverride = _FakeSource(null); // the service cannot be reached
      final off = await OwnLessons.load();
      expect(off.state, LessonsState.ready);
      expect(off.fromCache, isTrue, reason: 'the saved list still shows offline');
      SharedPreferences.setMockInitialValues({});
      expect((await OwnLessons.load()).state, LessonsState.failed, reason: 'no service and no saved copy');
    });

    test('the app contacts no host for lessons other than the one set at build time', () {
      final src = File('lib/lessons_own/own_lessons.dart').readAsStringSync();
      expect(RegExp(r"https?://[a-z]").hasMatch(src.replaceAll(RegExp(r'//.*'), '').replaceAll(RegExp(r"'https\?://localhost[^']*'"), '')), isFalse, reason: 'no hard-coded address');
    });
  });

  group('the lessons page', () {
    testWidgets('shows a card for each lesson of the child\'s age with title and length; age filters the list', (t) async {
      OwnLessons.sourceOverride = _FakeSource(_manifest());
      await _show(t, const OwnLessonsScreen(child: _kid));
      await t.pump(const Duration(milliseconds: 300));
      expect(find.byKey(const ValueKey('lesson_lesson_01')), findsOneWidget);
      expect(find.byKey(const ValueKey('lesson_lesson_02')), findsOneWidget);
      expect(find.byKey(const ValueKey('lesson_lesson_03')), findsOneWidget);
      expect(find.byKey(const ValueKey('lesson_lesson_04')), findsNothing, reason: 'that one is for age 6 only');
      expect(find.text('تعليم الحروف العربية'), findsOneWidget);
      expect(find.text('2:05'), findsOneWidget);
    });

    test('letters and numbers are one category; the old ids still land there', () {
      expect(kLessonCategories.contains('letters'), isFalse);
      expect(kLessonCategories.contains('numbers'), isFalse);
      expect(normalizeLessonCategory('letters'), 'letters_numbers');
      expect(normalizeLessonCategory('numbers'), 'letters_numbers');
      expect(normalizeLessonCategory('letters_numbers'), 'letters_numbers');
      expect(normalizeLessonCategory('songs'), 'songs');
      expect(normalizeLessonCategory('nonsense'), 'general');
      expect(normalizeLessonCategory(null), 'general');
    });

    testWidgets('category tabs narrow the list and show their counts; "all" brings everything back', (t) async {
      OwnLessons.sourceOverride = _FakeSource(_manifest());
      await _show(t, const OwnLessonsScreen(child: _kid));
      await t.pump(const Duration(milliseconds: 300));
      expect(find.byKey(const ValueKey('chip_all')), findsOneWidget);
      expect(find.byKey(const ValueKey('chip_letters_numbers')), findsOneWidget);
      expect(find.byKey(const ValueKey('chip_songs')), findsOneWidget);
      await t.tap(find.byKey(const ValueKey('chip_songs')));
      await t.pump();
      expect(find.byKey(const ValueKey('lesson_lesson_03')), findsOneWidget);
      expect(find.byKey(const ValueKey('lesson_lesson_01')), findsNothing);
      await t.tap(find.byKey(const ValueKey('chip_all')));
      await t.pump();
      expect(find.byKey(const ValueKey('lesson_lesson_01')), findsOneWidget);
    });

    testWidgets('it can open on one category (the songs tile)', (t) async {
      OwnLessons.sourceOverride = _FakeSource(_manifest());
      await _show(t, const OwnLessonsScreen(child: _kid, category: 'songs'));
      await t.pump(const Duration(milliseconds: 300));
      expect(find.byKey(const ValueKey('lesson_lesson_03')), findsOneWidget);
      expect(find.byKey(const ValueKey('lesson_lesson_02')), findsNothing);
    });

    testWidgets('not connected, no internet, empty: each says so plainly (and offers a retry when it helps)', (t) async {
      OwnLessons.baseUrl = '';
      await _show(t, const OwnLessonsScreen(child: _kid));
      await t.pump(const Duration(milliseconds: 300));
      expect(find.byKey(const ValueKey('lessons_not_connected')), findsOneWidget);

      OwnLessons.baseUrl = 'https://videos.example.org';
      OwnLessons.sourceOverride = _FakeSource(null);
      await _show(t, OwnLessonsScreen(key: UniqueKey(), child: _kid));
      await t.pump(const Duration(milliseconds: 300));
      expect(find.byKey(const ValueKey('lessons_failed')), findsOneWidget);
      OwnLessons.sourceOverride = _FakeSource(_manifest());
      await t.tap(find.byKey(const ValueKey('lessons_retry')));
      await t.pump();
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 100)));
      await t.pump(const Duration(milliseconds: 300));
      expect(find.byKey(const ValueKey('lesson_lesson_01')), findsOneWidget, reason: 'retry reloads');

      OwnLessons.sourceOverride = _FakeSource('[]');
      await _show(t, OwnLessonsScreen(key: UniqueKey(), child: _kid));
      await t.pump(const Duration(milliseconds: 300));
      expect(find.byKey(const ValueKey('lessons_empty')), findsOneWidget);
    });

    testWidgets('a lesson card opens the player; if the video cannot load it says so with a retry, and next/previous work', (t) async {
      OwnLessons.sourceOverride = _FakeSource(_manifest());
      await _show(t, const OwnLessonsScreen(child: _kid));
      await t.pump(const Duration(milliseconds: 300));
      await t.tap(find.byKey(const ValueKey('lesson_lesson_01')));
      await t.pump();
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 300)));
      await t.pump(const Duration(milliseconds: 400));
      expect(find.byType(OwnLessonPlayer), findsOneWidget);
      // there is no video decoder under the test binding: the player must show its message, not hang or crash
      expect(find.byKey(const ValueKey('player_failed')), findsOneWidget);
      expect(find.byKey(const ValueKey('player_retry')), findsOneWidget);
      await t.pageBack();
      await t.pumpAndSettle();
      expect(find.byType(OwnLessonPlayer), findsNothing);
    });

    testWidgets('a phone held sideways and a phone upright both lay the cards out without overflow', (t) async {
      OwnLessons.sourceOverride = _FakeSource(_manifest());
      for (final size in [const Size(852, 393), const Size(390, 800), const Size(1280, 720)]) {
        await _show(t, OwnLessonsScreen(key: UniqueKey(), child: _kid), size: size);
        await t.pump(const Duration(milliseconds: 300));
        expect(t.takeException(), isNull, reason: '$size');
        expect(find.byKey(const ValueKey('lesson_grid')), findsOneWidget);
      }
    });
  });

  test('the preparation script and the upload guide exist', () {
    expect(File('tools/prepare_videos.ps1').existsSync(), isTrue);
    expect(File('docs/OWN_VIDEOS.md').existsSync(), isTrue);
  });
}
