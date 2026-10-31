import '../adventures/adventure_store.dart';
import '../everyday/everyday_store.dart';
import '../family_time/family_time.dart';
import '../games/game_catalog.dart';
import '../games/game_common.dart' show GameRewards;
import '../l10n/strings.dart';
import '../stories/story_store.dart';

/// What a collectible looks like in the scene (drawn in code by `world_art.dart`).
enum DecorKind { tree, flowers, bench, lamp, balloon, kite, boat, butterfly, fountain, signpost, banner, books, trophy, windmill, bird, mushroom }

/// What real thing earns a collectible. Nothing is bought, drawn at random or earned by time.
enum CollectSource { game, stories, adventures, everyday, familyTime }

class Collectible {
  final String id;
  final CollectSource source;
  final String key; // game id, or the number of things needed (for counted sources)
  final DecorKind kind;
  final String place; // the island it stands on once that place is open
  final int hue; // 0-3 colour variant, so repeated shapes are not identical
  final String Function() name;
  final String Function() hint;
  const Collectible(this.id, this.source, this.key, this.kind, this.place, this.hue, this.name, this.hint);
}


/// One collectible for each learning game (earned by finishing that game once) plus a few for stories, adventures,
/// everyday learning and family time. Derived from existing records; there is no separate currency or counter.
final List<Collectible> kCollectibles = [
  for (final (i, g) in kEducationalGames.indexed)
    Collectible(
      'game_${g.id}',
      CollectSource.game,
      g.id,
      DecorKind.values[i % DecorKind.values.length],
      kWorldPlaceIds[i % kWorldPlaceIds.length],
      i % 4,
      () => g.title(),
      () => tr2('أنهِ لعبة «${g.title()}»', 'Finish the game “${g.title()}”'),
    ),
  Collectible('story_3', CollectSource.stories, '3', DecorKind.books, 'kingdom', 0, () => tr2('كومة كتب', 'A stack of books'), () => tr2('اسمع 3 حكايات حتى النهاية', 'Hear 3 stories to the end')),
  Collectible('story_8', CollectSource.stories, '8', DecorKind.lamp, 'kingdom', 1, () => tr2('مصباح الحكايات', 'Story lamp'), () => tr2('اسمع 8 حكايات حتى النهاية', 'Hear 8 stories to the end')),
  Collectible('adventure_1', CollectSource.adventures, '1', DecorKind.banner, 'village', 2, () => tr2('راية المغامرة', 'Adventure banner'), () => tr2('أنهِ مغامرة أسبوعية', 'Finish a weekly adventure')),
  Collectible('adventure_4', CollectSource.adventures, '4', DecorKind.windmill, 'garden', 1, () => tr2('طاحونة الهواء', 'Windmill'), () => tr2('أنهِ 4 مغامرات أسبوعية', 'Finish 4 weekly adventures')),
  Collectible('everyday_5', CollectSource.everyday, '5', DecorKind.flowers, 'garden', 3, () => tr2('حوض زهور البيت', 'Home flower bed'), () => tr2('سجّل 5 مرات من تعلّم من حياتنا', 'Record 5 times of learning from our day')),
  Collectible('family_3', CollectSource.familyTime, '3', DecorKind.bench, 'island', 2, () => tr2('مقعد العائلة', 'Family bench'), () => tr2('سجّل 3 مرات وقت عائلة', 'Record 3 family times')),
];

const kWorldPlaceIds = ['island', 'garden', 'village', 'kingdom', 'creative', 'explore'];

/// The real counts a child has reached, used to decide which collectibles are owned.
class CollectProgress {
  final Set<String> games;
  final int stories, adventures, everyday, familyTimes;
  const CollectProgress({this.games = const {}, this.stories = 0, this.adventures = 0, this.everyday = 0, this.familyTimes = 0});
}

Future<CollectProgress> loadCollectProgress(String childId) async {
  final hist = await StoryStore.history(childId);
  final everyday = await EverydayStore.done(childId);
  return CollectProgress(
    games: await GameRewards.doneIds(childId),
    stories: {for (final e in hist) if (e.completed) e.storyId}.length,
    adventures: (await AdventureStore.finished(childId)).length,
    everyday: everyday.values.fold(0, (a, b) => a + b.length),
    familyTimes: (await FamilyTimeStore.sessions(childId)).length,
  );
}

bool owns(Collectible c, CollectProgress p) => switch (c.source) {
      CollectSource.game => p.games.contains(c.key),
      CollectSource.stories => p.stories >= int.parse(c.key),
      CollectSource.adventures => p.adventures >= int.parse(c.key),
      CollectSource.everyday => p.everyday >= int.parse(c.key),
      CollectSource.familyTime => p.familyTimes >= int.parse(c.key),
    };

List<Collectible> ownedCollectibles(CollectProgress p) => [for (final c in kCollectibles) if (owns(c, p)) c];
