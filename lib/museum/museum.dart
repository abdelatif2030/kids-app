import '../adventures/adventure_logic.dart' show kAdventureThemes;
import '../adventures/adventure_store.dart';
import '../everyday/everyday_data.dart';
import '../everyday/everyday_store.dart';
import '../family_time/family_time.dart';
import '../games/game_catalog.dart';
import '../games/game_common.dart' show GameRewards;
import '../journey/stickers.dart';
import '../l10n/strings.dart';
import '../stories/branching.dart';
import '../stories/story_data.dart';
import '../stories/story_store.dart';
import '../world/world_progress.dart';

/// One thing in the museum. Every exhibit comes from something the child really did on this device.
class Exhibit {
  final String id;
  final String title;
  final String? note; // a date or a count, never a score
  const Exhibit(this.id, this.title, [this.note]);
}

class MuseumRoom {
  final String id;
  final String title;
  final List<Exhibit> exhibits;
  const MuseumRoom(this.id, this.title, this.exhibits);
}

/// The raw facts for one child, loaded from the stores. Nothing here is invented.
class MuseumData {
  final Map<String, ({String day, int times})> games; // gameId -> last day and how many times finished
  final int finished; // the same count as the garden, stickers and world
  final Map<String, String> adventures; // weekId -> themeId
  final Map<String, String> stories; // storyId -> last day completed
  final Map<String, List<String>> everyday; // taskId -> days
  final Map<String, String> familyTimes; // day -> idea id
  const MuseumData({this.games = const {}, this.finished = 0, this.adventures = const {}, this.stories = const {}, this.everyday = const {}, this.familyTimes = const {}});
}

Future<MuseumData> loadMuseumData(String childId) async {
  final done = await GameRewards.doneIds(childId);
  final games = <String, ({String day, int times})>{};
  for (final id in done) {
    final r = await GameRewards.detail(childId, id);
    if (r != null) games[id] = r;
  }
  final stories = <String, String>{};
  for (final e in await StoryStore.history(childId)) {
    if (e.completed && (stories[e.storyId] ?? '').compareTo(e.day) < 0) stories[e.storyId] = e.day;
  }
  return MuseumData(
    games: games,
    finished: await finishedCount(childId),
    adventures: await AdventureStore.finished(childId),
    stories: stories,
    everyday: await EverydayStore.done(childId),
    familyTimes: await FamilyTimeStore.sessions(childId),
  );
}

/// Pure: turns facts into rooms. A room with nothing in it is still shown, so the museum never looks like a score.
List<MuseumRoom> buildMuseum(MuseumData d) {
  final catalog = {for (final g in kEducationalGames) g.id: g};
  final games = [
    for (final e in d.games.entries)
      if (catalog[e.key] != null) Exhibit('game_${e.key}', catalog[e.key]!.title(), tr2('آخر مرة \u2066${e.value.day}\u2069', 'Last time ${e.value.day}')),
  ];
  final storyExhibits = [
    for (final e in d.stories.entries) ...[
      for (final s in kStories)
        if (s.id == e.key) Exhibit('story_${s.id}', s.title, '\u2066${e.value}\u2069'),
      for (final b in kBranchingStories)
        if ('branch_${b.id}' == e.key) Exhibit('story_branch_${b.id}', b.title(), '\u2066${e.value}\u2069'),
    ],
  ];
  final places = WorldProgress.of(d.finished).unlocked;
  final stickers = stickersUnlocked(d.finished);
  final themes = {for (final t in kAdventureThemes) t.id: t};
  final adventures = [
    for (final e in d.adventures.entries)
      Exhibit('adv_${e.key}', (themes[e.value] ?? kAdventureThemes.first).title(), tr2('أسبوع \u2066${e.key}\u2069', 'Week of ${e.key}')),
  ];
  final tasks = {for (final t in kEverydayTasks) t.id: t};
  final everyday = [
    for (final e in d.everyday.entries)
      if (tasks[e.key] != null && e.value.isNotEmpty) Exhibit('day_${e.key}', tasks[e.key]!.title(), tr2('${e.value.length} مرات', '${e.value.length} times')),
  ];
  return [
    MuseumRoom('places', tr2('أماكن عالمي', 'Places in my world'), [for (final p in places) Exhibit('place_${p.id}', p.title())]),
    MuseumRoom('stickers', tr2('ملصقاتي', 'My stickers'), [for (var i = 0; i < stickers; i++) Exhibit('sticker_$i', kStickers[i].name(), kStickers[i].emoji)]),
    MuseumRoom('games', tr2('ألعاب أنهيتها', 'Games I finished'), games),
    MuseumRoom('stories', tr2('حكايات سمعتها حتى النهاية', 'Stories I heard to the end'), storyExhibits),
    MuseumRoom('adventures', tr2('مغامرات الأسبوع', 'Weekly adventures'), adventures),
    MuseumRoom('together', tr2('معاً مع العائلة', 'Together with my family'), [
      ...everyday,
      if (d.familyTimes.isNotEmpty) Exhibit('family_times', tr2('وقت العائلة', 'Family time'), tr2('${d.familyTimes.length} مرات', '${d.familyTimes.length} times')),
    ]),
  ];
}
