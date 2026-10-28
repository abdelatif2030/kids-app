import '../games/game_catalog.dart';
import '../games/game_common.dart';
import '../games/word_book_game.dart';
import '../l10n/strings.dart';
import '../library/learning_records.dart';
import '../library/vocab.dart';
import '../stories/story_data.dart';
import '../stories/story_models.dart';
import '../stories/story_store.dart';
import 'repository.dart';

/// «يومي»: a gentle daily rhythm made only from content the app already has. Nothing here is
/// required: a child may do one station, all four, or none, and a missed day costs nothing.

enum DayPart { morning, afternoon, evening, night }

DayPart dayPartOf(DateTime now) {
  final h = now.hour;
  if (h >= 5 && h < 12) return DayPart.morning;
  if (h >= 12 && h < 17) return DayPart.afternoon;
  if (h >= 17 && h < 21) return DayPart.evening;
  return DayPart.night;
}

String greetingFor(DayPart p) => switch (p) {
      DayPart.morning => tr2('صباح الخير يا بطل!', 'Good morning, champion!'),
      DayPart.afternoon => tr2('أهلاً يا بطل!', 'Hello, champion!'),
      DayPart.evening => tr2('مساء الخير يا بطل!', 'Good evening, champion!'),
      DayPart.night => tr2('مساء هادئ يا بطل!', 'A calm evening, champion!'),
    };

/// A short line that fits the time of day. At night it is calm and points to a story.
String hintFor(DayPart p) => switch (p) {
      DayPart.morning => tr2('اختر ما تحب أن تبدأ به اليوم.', 'Choose what you would like to start with today.'),
      DayPart.afternoon => tr2('وقت جميل للّعب والتعلّم.', 'A lovely time to play and learn.'),
      DayPart.evening => tr2('يمكنك أن تُنهي يومك بقصة.', 'You can end your day with a story.'),
      DayPart.night => tr2('اقترب وقت الراحة. قصة هادئة؟', 'Rest time is near. A calm story?'),
    };

enum Station { learn, play, discover, tell }

String stationTitle(Station s) => switch (s) {
      Station.learn => tr2('أتعلّم', 'I learn'),
      Station.play => tr2('ألعب', 'I play'),
      Station.discover => tr2('أكتشف', 'I discover'),
      Station.tell => tr2('أحكي', 'I tell'),
    };

String stationSubtitle(Station s) => switch (s) {
      Station.learn => tr2('درس قصير', 'A short lesson'),
      Station.play => tr2('لعبة تعليمية', 'A learning game'),
      Station.discover => tr2('كلمة اليوم', 'Word of the day'),
      Station.tell => tr2('قصة قصيرة', 'A short story'),
    };

int dayOfYear(DateTime d) => d.difference(DateTime(d.year)).inDays;

/// The same word all day, a new one tomorrow, from the picture-book words of the child's age.
Vocab? wordOfDay(DateTime now, int age) {
  final all = [for (final w in pictureBookWords()) if (age >= w.minAge && age <= w.maxAge) w];
  return all.isEmpty ? null : all[dayOfYear(now) % all.length];
}

/// A story that suits the age; it rotates by day and prefers one the child has not heard yet.
Story? storyOfDay(DateTime now, int age, {Set<String> heard = const {}}) {
  final fit = [for (final s in publishedStories()) if (s.fitsAge(age)) s];
  if (fit.isEmpty) return null;
  final fresh = [for (final s in fit) if (!heard.contains(s.id)) s];
  final pool = fresh.isEmpty ? fit : fresh;
  return pool[dayOfYear(now) % pool.length];
}

GameInfo? gameOfDay(DateTime now, int age) {
  final g = gamesForAge(age);
  return g.isEmpty ? null : g[dayOfYear(now) % g.length];
}

/// What the child really did today. Everything comes from stored activity, never invented.
class DayFacts {
  final Set<String> activityIds;
  final Set<String> gameIds;
  final Set<String> wordIds;
  final Set<String> storyIds;
  final Set<String> letters;
  const DayFacts({this.activityIds = const {}, this.gameIds = const {}, this.wordIds = const {}, this.storyIds = const {}, this.letters = const {}});

  bool get isEmpty => activityIds.isEmpty && gameIds.isEmpty && wordIds.isEmpty && storyIds.isEmpty && letters.isEmpty;

  bool done(Station s) => switch (s) {
        Station.learn => activityIds.isNotEmpty || letters.isNotEmpty,
        Station.play => gameIds.isNotEmpty,
        Station.discover => wordIds.isNotEmpty,
        Station.tell => storyIds.isNotEmpty,
      };
}

Future<DayFacts> loadDayFacts(String childId, {DateTime? now}) async {
  final t = now ?? DateTime.now();
  final day = dayOf(t);
  final records = await LearningRecords.forChild(childId, days: 1, now: t);
  final attempts = JourneyStore.instance.attemptsOf(childId).where((a) => a.day == day);
  final history = await StoryStore.history(childId);
  return DayFacts(
    activityIds: {for (final a in attempts) a.activityId},
    gameIds: await GameRewards.doneOn(childId, day),
    wordIds: {for (final r in records) if (r.type == RecordType.word && r.day == day) r.ref},
    storyIds: {for (final h in history) if (h.day == day) h.storyId},
    letters: {
      for (final r in records)
        if (r.type == RecordType.letter && r.day == day && r.evidence != Evidence.exposure) r.ref,
    },
  );
}

/// «اتعلمت 3 كلمات ولعبت لعبة»: built only from [f]; null when nothing was done.
String? achievementText(DayFacts f) {
  final parts = <String>[];
  if (f.activityIds.isNotEmpty) {
    final n = f.activityIds.length;
    parts.add(tr2('أنهيت $n ${n == 1 ? 'نشاطاً' : 'أنشطة'}', 'finished $n ${n == 1 ? 'activity' : 'activities'}'));
  }
  if (f.wordIds.isNotEmpty) {
    final n = f.wordIds.length;
    parts.add(tr2('تعرّفت على $n ${n == 1 ? 'كلمة' : 'كلمات'}', 'met $n ${n == 1 ? 'word' : 'words'}'));
  }
  if (f.letters.isNotEmpty) {
    final n = f.letters.length;
    parts.add(tr2('تدرّبت على $n ${n == 1 ? 'حرف' : 'حروف'}', 'practised $n ${n == 1 ? 'letter' : 'letters'}'));
  }
  if (f.gameIds.isNotEmpty) {
    final n = f.gameIds.length;
    parts.add(tr2('لعبت $n ${n == 1 ? 'لعبة' : 'ألعاب'}', 'played $n ${n == 1 ? 'game' : 'games'}'));
  }
  if (f.storyIds.isNotEmpty) {
    final n = f.storyIds.length;
    parts.add(tr2('سمعت $n ${n == 1 ? 'قصة' : 'قصص'}', 'heard $n ${n == 1 ? 'story' : 'stories'}'));
  }
  if (parts.isEmpty) return null;
  return parts.join(tr2(' و', ', '));
}

/// The achievements garden. It only grows: it counts things finished so far (activities, games,
/// stories) and nothing takes a flower away, whatever days were missed.
enum GardenStage { seed, sprout, plant, flowering, blooming, tree }

class Garden {
  final int flowers;
  final GardenStage stage;
  const Garden(this.flowers, this.stage);
}

Garden gardenOf({required int activities, required int games, required int stories}) {
  final n = activities + games + stories;
  final stage = n == 0
      ? GardenStage.seed
      : n < 4
          ? GardenStage.sprout
          : n < 10
              ? GardenStage.plant
              : n < 20
                  ? GardenStage.flowering
                  : n < 40
                      ? GardenStage.blooming
                      : GardenStage.tree;
  return Garden(n, stage);
}

String gardenStageLabel(GardenStage s) => switch (s) {
      GardenStage.seed => tr2('بذرة صغيرة', 'A small seed'),
      GardenStage.sprout => tr2('نبتة تنمو', 'A growing sprout'),
      GardenStage.plant => tr2('نبتة جميلة', 'A lovely plant'),
      GardenStage.flowering => tr2('بدأت الأزهار', 'Flowers are starting'),
      GardenStage.blooming => tr2('حديقة مزهرة', 'A blooming garden'),
      GardenStage.tree => tr2('شجرة كبيرة', 'A big tree'),
    };

/// Real counts for the garden: distinct finished activities, finished games and completed stories.
Future<Garden> loadGarden(String childId) async {
  final activities = JourneyStore.instance.progressOf(childId).completedTotal;
  final games = (await GameRewards.doneIds(childId)).length;
  final stories = {for (final h in await StoryStore.history(childId)) if (h.completed) h.storyId}.length;
  return gardenOf(activities: activities, games: games, stories: stories);
}

/// The daily surprise: a learning game other than the game of the day, or, when there is none for the
/// age, an activity to do with a parent. [reroll] lets the child ask for a different one.
class Surprise {
  final GameInfo? game; // null: a family activity
  const Surprise(this.game);
}

Surprise surpriseOfDay(DateTime now, int age, {int reroll = 0}) {
  final today = gameOfDay(now, age);
  final others = [for (final g in gamesForAge(age)) if (g.id != today?.id) g];
  if (others.isEmpty) return const Surprise(null);
  return Surprise(others[(dayOfYear(now) + reroll) % others.length]);
}
