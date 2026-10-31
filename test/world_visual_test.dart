import 'dart:io';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/adventures/adventure_store.dart';
import 'package:kids_app/data_reset.dart';
import 'package:kids_app/everyday/everyday_store.dart';
import 'package:kids_app/family_time/family_time.dart';
import 'package:kids_app/games/game_catalog.dart';
import 'package:kids_app/games/game_common.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/stories/story_data.dart';
import 'package:kids_app/stories/story_store.dart';
import 'package:kids_app/world/world_art.dart';
import 'package:kids_app/world/world_collectibles.dart';
import 'package:kids_app/world/world_look.dart';
import 'package:kids_app/world/world_progress.dart';
import 'package:kids_app/world/world_screen.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('ar');
  });

  group('collectibles', () {
    test('ids are unique, each game has one, every place id exists, counted sources parse', () {
      expect({for (final c in kCollectibles) c.id}.length, kCollectibles.length);
      for (final g in kEducationalGames) {
        expect(kCollectibles.where((c) => c.source == CollectSource.game && c.key == g.id), hasLength(1), reason: g.id);
      }
      for (final c in kCollectibles) {
        expect(kWorldPlaceIds, contains(c.place));
        expect(kWorldLocations.map((l) => l.id), contains(c.place));
        if (c.source != CollectSource.game) expect(int.tryParse(c.key), isNotNull);
        expect(c.name().trim(), isNotEmpty);
        expect(c.hint().trim(), isNotEmpty);
      }
    });

    test('nothing is owned at first; owning follows real records only', () {
      expect(ownedCollectibles(const CollectProgress()), isEmpty);
      final p = CollectProgress(games: {kEducationalGames.first.id}, stories: 3, adventures: 1, everyday: 4, familyTimes: 2);
      expect(ownedCollectibles(p).map((c) => c.id), containsAll(['game_${kEducationalGames.first.id}', 'story_3', 'adventure_1']));
      expect(ownedCollectibles(p).map((c) => c.id), isNot(contains('everyday_5')));
      expect(ownedCollectibles(p).map((c) => c.id), isNot(contains('family_3')));
      expect(ownedCollectibles(p).length, 3);
    });

    test('progress is loaded from the real stores, per child', () async {
      await GameRewards.complete('a', kEducationalGames[2].id);
      await StoryStore.addListening('a', kStories.first.id, 30, completed: true);
      await AdventureStore.record('a', '2026-10-26', 'letters');
      await EverydayStore.confirm('a', 'wash_hands');
      await FamilyTimeStore.confirm('a', 'x');
      final a = await loadCollectProgress('a');
      expect(a.games, {kEducationalGames[2].id});
      expect([a.stories, a.adventures, a.everyday, a.familyTimes], [1, 1, 1, 1]);
      final b = await loadCollectProgress('b');
      expect(b.games, isEmpty);
      expect([b.stories, b.adventures, b.everyday, b.familyTimes], [0, 0, 0, 0]);
    });
  });

  group('personalisation', () {
    test('only approved choices are kept; unknown values fall back; per child; removed with the child', () async {
      await WorldLookStore.save('a', const WorldLook(theme: 'teal', name: 'rainbow', time: WorldTime.night));
      final a = await WorldLookStore.of('a');
      expect([a.theme, a.name, a.time], ['teal', 'rainbow', WorldTime.night]);
      expect((await WorldLookStore.of('b')).theme, 'purple');
      SharedPreferences.setMockInitialValues({'world_look': '{"a":{"th":"hack","n":"<script>","tm":"x"}}'});
      final bad = await WorldLookStore.of('a');
      expect([bad.theme, bad.name, bad.time], ['purple', 'star', WorldTime.day]);
      SharedPreferences.setMockInitialValues({'world_look': '[[['});
      expect((await WorldLookStore.of('a')).theme, 'purple');
      await WorldLookStore.save('a', const WorldLook(theme: 'pink'));
      await WorldLookStore.save('b', const WorldLook(theme: 'gold'));
      await deleteOneChild('a');
      expect((await WorldLookStore.of('a')).theme, 'purple');
      expect((await WorldLookStore.of('b')).theme, 'gold');
    });

    test('island names are a fixed list with no free text', () {
      expect(kIslandNames.map((n) => n.$1).toSet().length, kIslandNames.length);
      expect(kIslandNames.length, lessThanOrEqualTo(6));
    });
  });

  group('art', () {
    testWidgets('every place paints in every theme and time, open and locked, with all collectibles, without errors', (t) async {
      for (final theme in kWorldThemes) {
        for (final time in WorldTime.values) {
          await t.pumpWidget(MaterialApp(
            home: Scaffold(
              body: SingleChildScrollView(
                child: Wrap(children: [
                  for (final id in kWorldPlaceIds) ...[
                    IslandScene(id, look: WorldLook(theme: theme.id, time: time), decor: kCollectibles, width: 200),
                    IslandScene(id, look: WorldLook(theme: theme.id, time: time), locked: true, width: 100),
                    IslandArt(id, size: 60),
                  ],
                  for (final c in kCollectibles) CollectibleArt(c),
                ]),
              ),
            ),
          ));
          expect(t.takeException(), isNull, reason: '${theme.id} ${time.name}');
        }
      }
    });

    testWidgets('contact sheet (evidence image for review)', (t) async {
      t.view.physicalSize = const Size(1500, 1250);
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      final key = GlobalKey();
      await t.pumpWidget(MaterialApp(
        home: RepaintBoundary(
          key: key,
          child: Container(
            color: const Color(0xFFF1EBFF),
            padding: const EdgeInsets.all(10),
            child: Wrap(spacing: 8, runSpacing: 8, children: [
              for (final id in kWorldPlaceIds) IslandScene(id, decor: kCollectibles, width: 230),
              for (final id in kWorldPlaceIds) IslandScene(id, look: WorldLook(theme: kWorldThemes[kWorldPlaceIds.indexOf(id) % 4].id, time: WorldTime.values[kWorldPlaceIds.indexOf(id) % 3]), decor: kCollectibles, width: 230),
              for (final id in kWorldPlaceIds) IslandScene(id, locked: true, width: 230),
              Wrap(spacing: 6, runSpacing: 6, children: [for (final c in kCollectibles) CollectibleArt(c, size: 40)]),
            ]),
          ),
        ),
      ));
      await t.runAsync(() async {
        final boundary = key.currentContext!.findRenderObject() as RenderRepaintBoundary;
        final image = await boundary.toImage();
        final bytes = await image.toByteData(format: ui.ImageByteFormat.png);
        File('docs/screens/world_scenes_sheet.png').writeAsBytesSync(bytes!.buffer.asUint8List());
      });
    });
  });

  group('screen', () {
    const kid = ChildProfile(id: 'k1', nickname: 'L', age: 5);
    Future<void> open(WidgetTester t, {String lang = 'ar', Size size = const Size(360, 640), double text = 1}) async {
      t.view.physicalSize = size;
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      await AppLocale.instance.set(lang);
      await t.pumpWidget(MaterialApp(
        key: UniqueKey(),
        builder: (c, w) => MediaQuery(data: MediaQuery.of(c).copyWith(textScaler: TextScaler.linear(text)), child: w!),
        home: const WorldScreen(child: kid),
      ));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 250)));
      await t.pump();
    }

    testWidgets('gifts follow real records: a finished game shows its gift once as new, locked gifts show a hint', (t) async {
      await t.runAsync(() => GameRewards.complete('k1', kEducationalGames.first.id));
      await open(t);
      expect(find.byKey(ValueKey('gift_game_${kEducationalGames.first.id}')), findsOneWidget);
      expect(find.byKey(ValueKey('locked_gift_game_${kEducationalGames[1].id}')), findsOneWidget);
      expect(find.byKey(const ValueKey('world_new')), findsOneWidget);
      await open(t);
      expect(find.byKey(const ValueKey('world_new')), findsNothing); // celebrated once
      expect(find.byKey(ValueKey('gift_game_${kEducationalGames.first.id}')), findsOneWidget);
    });

    testWidgets('another child sees none of these gifts', (t) async {
      await t.runAsync(() => GameRewards.complete('other', kEducationalGames.first.id));
      await open(t);
      expect(find.byKey(ValueKey('gift_game_${kEducationalGames.first.id}')), findsNothing);
    });

    testWidgets('personalising saves the approved choices for this child', (t) async {
      await open(t);
      await t.tap(find.byKey(const ValueKey('world_personalise')));
      await t.pumpAndSettle();
      await t.tap(find.byKey(const ValueKey('look_theme_gold')));
      await t.tap(find.byKey(const ValueKey('look_time_night')));
      await t.tap(find.byKey(const ValueKey('look_name_dream')));
      await t.tap(find.byKey(const ValueKey('look_save')));
      await t.pumpAndSettle();
      final look = (await t.runAsync(() => WorldLookStore.of('k1')))!;
      expect([look.theme, look.time, look.name], ['gold', WorldTime.night, 'dream']);
      expect(find.textContaining('جزيرة الأحلام'), findsWidgets);
    });

    testWidgets('selecting a locked place shows it as locked; small phone, large text, landscape, tablet, both languages fit', (t) async {
      for (final lang in ['ar', 'en']) {
        for (final size in [const Size(320, 568), const Size(844, 390), const Size(1024, 768)]) {
          await open(t, lang: lang, size: size, text: 1.6);
          expect(find.byKey(const ValueKey('world_scene')), findsOneWidget);
          await t.ensureVisible(find.byKey(const ValueKey('world_locked_explore')));
          await t.tap(find.byKey(const ValueKey('world_locked_explore')));
          await t.pump();
          expect(find.textContaining(lang == 'ar' ? 'بعد 40' : 'After 40'), findsWidgets);
          expect(t.takeException(), isNull, reason: '$lang $size');
        }
      }
    });
  });
}
