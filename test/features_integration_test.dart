import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/adventures/adventure_logic.dart';
import 'package:kids_app/adventures/adventure_service.dart';
import 'package:kids_app/companion/companion_logic.dart';
import 'package:kids_app/companion/companion_service.dart';
import 'package:kids_app/games/game_catalog.dart';
import 'package:kids_app/games/game_common.dart';
import 'package:kids_app/journey/stickers.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/museum/museum.dart';
import 'package:kids_app/stories/branching.dart';
import 'package:kids_app/stories/story_data.dart';
import 'package:kids_app/stories/story_store.dart';
import 'package:kids_app/world/world_collectibles.dart';
import 'package:kids_app/world/world_progress.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('en');
  });

  test('one finished game moves every system by exactly one, and a replay moves none of them', () async {
    const c = 'a';
    final g = kEducationalGames.first.id;
    Future<List<int>> snapshot() async {
      final n = await finishedCount(c);
      final cp = await loadCollectProgress(c);
      final m = buildMuseum(await loadMuseumData(c));
      return [
        n, // the shared count behind the garden, stickers and world places
        stickersUnlocked(n),
        WorldProgress.of(n).unlocked.length,
        ownedCollectibles(cp).length,
        m.firstWhere((r) => r.id == 'games').exhibits.length,
        m.firstWhere((r) => r.id == 'stickers').exhibits.length,
      ];
    }

    final before = await snapshot();
    expect(before, [0, 0, 1, 0, 0, 0]);
    expect(await GameRewards.complete(c, g), isTrue); // the star
    final after = await snapshot();
    expect(after, [1, 1, 1, 1, 1, 1]);
    expect(await GameRewards.complete(c, g), isFalse); // a replay: no second star
    expect(await snapshot(), after); // and no system moved
  });

  test('a completed story (linear or branching) counts once in the garden count, collectibles and museum', () async {
    const c = 'a';
    await StoryStore.addListening(c, kStories.first.id, 30, completed: true);
    await StoryStore.addListening(c, kStories.first.id, 30, completed: true); // same story again, other day or not
    await StoryStore.addListening(c, 'branch_${kBranchingStories.first.id}', 0, completed: true);
    expect(await finishedCount(c), 2);
    final m = buildMuseum(await loadMuseumData(c));
    expect(m.firstWhere((r) => r.id == 'stories').exhibits.length, 2);
    expect((await loadCollectProgress(c)).stories, 2);
  });

  test('weekly adventure completion and companion celebration are claimed once and do not touch the star count', () async {
    const c = 'a';
    final now = DateTime(2026, 10, 28);
    final p = planFor(now, 6, Ability.unknown, publishedStories());
    for (final s in p.steps.where((s) => s.kind == 'game')) {
      await GameRewards.complete(c, s.id, now: now);
    }
    await StoryStore.addListening(c, p.steps.firstWhere((s) => s.kind == 'story').id, 30, completed: true, now: now);
    final stars = (await GameRewards.doneIds(c)).length;
    final first = await AdventureService.check(c, 6, now: now);
    final second = await AdventureService.check(c, 6, now: now);
    expect([first.justCompleted, second.justCompleted], [true, false]);
    expect((await GameRewards.doneIds(c)).length, stars); // completing an adventure gives no extra star
    expect((await loadCollectProgress(c)).adventures, 1);
    // the same companion event cannot be claimed again by another path
    expect(await CompanionService.react(c, CompanionMoment.activityDone, eventId: 'adv:${p.weekId}', age: 6, speak: false), isNull);
  });
}
