import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/stories/story_data.dart';
import 'package:kids_app/stories/story_extras.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  setUp(() {
    SharedPreferences.setMockInitialValues({});
    AppLocale.instance.set('en');
  });

  group('content', () {
    test('every story that has chapters has exactly one scene per chapter', () {
      for (final s in kStories) {
        if (s.chapters.isEmpty) continue;
        expect(kStoryScenes[s.id], isNotNull, reason: s.id);
        expect(kStoryScenes[s.id]!.length, s.chapters.length, reason: s.id);
        for (final sc in kStoryScenes[s.id]!) {
          expect(sc.pieces, isNotEmpty);
          for (final p in sc.pieces) {
            expect(p.x, inInclusiveRange(0, 1));
            expect(p.y, inInclusiveRange(0, 1));
            expect(p.size, inInclusiveRange(0.05, 0.6));
            expect(p.emoji.trim(), isNotEmpty);
          }
        }
      }
    });

    test('scenes and activities only exist for real stories, and every activity points at a real chapter', () {
      final ids = {for (final s in kStories) s.id: s};
      for (final id in kStoryScenes.keys) {
        expect(ids.containsKey(id), isTrue, reason: id);
      }
      for (final e in kStoryActivities.entries) {
        final s = ids[e.key];
        expect(s, isNotNull, reason: e.key);
        expect(e.value.chapter, inInclusiveRange(0, s!.chapters.length - 1), reason: e.key);
      }
      expect(kStoryActivities.length, greaterThanOrEqualTo(8));
    });

    test('every activity has one right answer among its choices', () {
      for (final a in kStoryActivities.values) {
        switch (a) {
          case FindActivity():
            expect(a.correct, inInclusiveRange(0, a.items.length - 1));
            expect(a.items.toSet().length, a.items.length);
          case CountActivity():
            expect(a.options.where((o) => o == a.count).length, 1);
            expect(a.count, inInclusiveRange(1, 5));
        }
      }
    });

    test('every NEW line is marked as needing native review, in Arabic and English, and none is empty', () {
      final lines = allNewStoryLines();
      expect(lines.length, greaterThanOrEqualTo(10));
      for (final l in lines) {
        expect(l.needsNativeReview, isTrue);
        expect(l.ar.trim(), isNotEmpty);
        expect(l.en.trim(), isNotEmpty);
        expect(RegExp(r'[؀-ۿ]').hasMatch(l.ar), isTrue, reason: l.ar);
        expect(RegExp(r'https?:|www\.|@').hasMatch('${l.ar} ${l.en}'), isFalse);
      }
    });

    test('the story text itself was not changed: still 3 chapters for the simple stories, 7 for the branching ones', () {
      final byId = {for (final s in kStories) s.id: s};
      expect(byId['three_apples']!.chapters.first.text, startsWith('كانت ليلى تملك ثلاث تفاحات'));
      expect(byId['moon_star']!.chapters.length, 3);
      expect(byId['choice_island']!.chapters.length, 7);
      expect(byId['bunny_garden']!.chapters.length, 7);
    });
  });

  group('widgets', () {
    Widget app(Widget child, {double scale = 1}) => MaterialApp(key: UniqueKey(), home: MediaQuery(data: MediaQueryData(textScaler: TextScaler.linear(scale)), child: Scaffold(body: SingleChildScrollView(padding: const EdgeInsets.all(16), child: child))));

    testWidgets('a scene draws every piece, is not read aloud and takes no taps', (t) async {
      final h = t.ensureSemantics();
      await t.pumpWidget(app(StoryScenePanel(scene: kStoryScenes['moon_star']!.first)));
      for (final p in kStoryScenes['moon_star']!.first.pieces) {
        expect(find.text(p.emoji), findsOneWidget);
      }
      expect(find.bySemanticsLabel('🌙'), findsNothing);
      h.dispose();
    });

    testWidgets('find: a wrong tap only fades that choice, the right tap says well done (no stars)', (t) async {
      await t.pumpWidget(app(StoryActivityCard(activity: kStoryActivities['moon_star']!)));
      expect(find.text('Tap the moon'), findsOneWidget);
      await t.tap(find.byKey(const ValueKey('story_act_opt_0'))); // the star: wrong
      await t.pump();
      expect(find.byKey(const ValueKey('story_activity_done')), findsNothing);
      expect(find.byKey(const ValueKey('story_act_opt_1')), findsOneWidget); // still there
      await t.tap(find.byKey(const ValueKey('story_act_opt_1')));
      await t.pump();
      expect(find.byKey(const ValueKey('story_activity_done')), findsOneWidget);
      expect(find.textContaining('⭐ '), findsNothing); // nothing like a reward counter
    });

    testWidgets('count: shows the pictures to count and accepts the right number', (t) async {
      await t.pumpWidget(app(StoryActivityCard(activity: kStoryActivities['three_apples']!)));
      expect(find.text('🍎 🍎 🍎'), findsOneWidget);
      await t.tap(find.text('2'));
      await t.pump();
      expect(find.byKey(const ValueKey('story_activity_done')), findsNothing);
      await t.tap(find.text('3'));
      await t.pump();
      expect(find.byKey(const ValueKey('story_activity_done')), findsOneWidget);
    });

    for (final lang in ['ar', 'en']) {
      for (final w in [320.0, 390.0, 1024.0]) {
        testWidgets('scenes and activities fit at $w px in $lang at large text', (t) async {
          await t.runAsync(() => AppLocale.instance.set(lang));
          t.view.physicalSize = Size(w, 900);
          t.view.devicePixelRatio = 1;
          addTearDown(t.view.reset);
          for (final id in kStoryActivities.keys) {
            await t.pumpWidget(app(Column(children: [
              if (kStoryScenes[id] != null) StoryScenePanel(scene: kStoryScenes[id]!.first),
              const SizedBox(height: 8),
              StoryActivityCard(activity: kStoryActivities[id]!),
            ]), scale: 1.6));
            expect(t.takeException(), isNull, reason: id);
          }
        });
      }
    }
  });
}
