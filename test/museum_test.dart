import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/adventures/adventure_store.dart';
import 'package:kids_app/everyday/everyday_store.dart';
import 'package:kids_app/family_time/family_time.dart';
import 'package:kids_app/games/game_common.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/museum/museum.dart';
import 'package:kids_app/museum/museum_screen.dart';
import 'package:kids_app/stories/story_data.dart';
import 'package:kids_app/stories/story_store.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('ar');
  });

  MuseumRoom room(List<MuseumRoom> rs, String id) => rs.firstWhere((r) => r.id == id);

  test('a new child has an almost empty museum: only the first island, no invented exhibits', () async {
    final rooms = buildMuseum(await loadMuseumData('new'));
    expect(room(rooms, 'places').exhibits.map((e) => e.id), ['place_island']);
    for (final id in ['stickers', 'games', 'stories', 'adventures', 'together']) {
      expect(room(rooms, id).exhibits, isEmpty, reason: id);
    }
  });

  test('exhibits come only from real records and are isolated per child', () async {
    await GameRewards.complete('a', 'jigsaw', now: DateTime(2026, 10, 30));
    await GameRewards.complete('a', 'maze', now: DateTime(2026, 10, 30));
    await GameRewards.complete('a', 'jigsaw', now: DateTime(2026, 10, 31));
    await StoryStore.addListening('a', kStories.first.id, 60, completed: true, now: DateTime(2026, 10, 30));
    await StoryStore.addListening('a', kStories.last.id, 60, now: DateTime(2026, 10, 30)); // not completed
    await AdventureStore.record('a', '2026-10-26', 'letters');
    await EverydayStore.confirm('a', 'wash_hands', now: DateTime(2026, 10, 30));
    await FamilyTimeStore.confirm('a', 'x', now: DateTime(2026, 10, 30));
    await GameRewards.complete('b', 'jigsaw', now: DateTime(2026, 10, 30));

    final a = buildMuseum(await loadMuseumData('a'));
    expect(room(a, 'games').exhibits.map((e) => e.id).toSet(), {'game_jigsaw', 'game_maze'});
    expect(room(a, 'games').exhibits.firstWhere((e) => e.id == 'game_jigsaw').note, contains('2026-10-31')); // last time
    expect(room(a, 'stories').exhibits.map((e) => e.id), ['story_${kStories.first.id}']);
    expect(room(a, 'adventures').exhibits, hasLength(1));
    expect(room(a, 'together').exhibits.map((e) => e.id), containsAll(['day_wash_hands', 'family_times']));
    expect(room(a, 'stickers').exhibits, hasLength(3)); // 2 finished games + 1 completed story (the garden count)

    final b = buildMuseum(await loadMuseumData('b'));
    expect(room(b, 'games').exhibits.map((e) => e.id), ['game_jigsaw']);
    expect(room(b, 'stories').exhibits, isEmpty);
    expect(room(b, 'adventures').exhibits, isEmpty);
    expect(room(b, 'together').exhibits, isEmpty);
  });

  test('world places follow the real finished count', () {
    final rooms = buildMuseum(const MuseumData(finished: 8));
    expect(room(rooms, 'places').exhibits.map((e) => e.id), ['place_island', 'place_garden', 'place_village']);
    expect(room(rooms, 'stickers').exhibits, hasLength(8));
  });

  testWidgets('the screen shows rooms, friendly empty text, and fits small screens in both languages', (t) async {
    const kid = ChildProfile(id: 'k1', nickname: 'L', age: 4);
    for (final lang in ['ar', 'en']) {
      for (final size in [const Size(320, 568), const Size(844, 390)]) {
        t.view.physicalSize = size;
        t.view.devicePixelRatio = 1;
        await AppLocale.instance.set(lang);
        await t.pumpWidget(MaterialApp(
          key: UniqueKey(),
          builder: (c, w) => MediaQuery(data: MediaQuery.of(c).copyWith(textScaler: const TextScaler.linear(1.6)), child: w!),
          home: const MuseumScreen(child: kid),
        ));
        await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 200)));
        await t.pump();
        expect(find.byKey(const ValueKey('room_places')), findsOneWidget);
        expect(find.byKey(const ValueKey('place_island')), findsOneWidget);
        expect(t.takeException(), isNull);
      }
    }
    await t.scrollUntilVisible(find.byKey(const ValueKey('empty_games')), 100, scrollable: find.byType(Scrollable).first);
    expect(find.text('Nothing here yet.'), findsWidgets);
    t.view.reset();
  });
}
