import '../companion/companion_logic.dart' show Ability;
import '../games/game_catalog.dart';
import '../l10n/strings.dart';
import '../library/learning_records.dart' show dayOf;
import '../stories/story_models.dart';

/// A weekly theme: a short path through games the child can really play. Nothing is timed, nothing is lost when a
/// week is missed, and a finished adventure is only a record.
class AdventureTheme {
  final String id;
  final String Function() title;
  final String Function() blurb;
  final List<String> games; // preferred game ids, in order
  const AdventureTheme(this.id, this.title, this.blurb, this.games);
}

final List<AdventureTheme> kAdventureThemes = [
  AdventureTheme('letters', () => tr2('مغامرة الحروف والكلمات', 'Letters and words adventure'), () => tr2('نصطاد الحروف ونكتشف كلمات', 'We catch letters and find words'),
      ['letter_fishing', 'trace_letters', 'word_book', 'listen_letter', 'match_pictures']),
  AdventureTheme('numbers', () => tr2('مغامرة الأرقام', 'Numbers adventure'), () => tr2('نعدّ ونقارن ونلعب بالأرقام', 'We count, compare and play with numbers'),
      ['numerals', 'compare', 'connect_four', 'snakes_ladders', 'pattern']),
  AdventureTheme('animals', () => tr2('مغامرة الحيوانات', 'Animals adventure'), () => tr2('نعرف بيوت الحيوانات ونرتبها', 'We learn where animals live and sort them'),
      ['animal_habitats', 'odd_one_out', 'sort_groups', 'listen_picture', 'jigsaw']),
  AdventureTheme('thinking', () => tr2('مغامرة التفكير', 'Thinking adventure'), () => tr2('ألغاز بسيطة وكنوز مخبأة', 'Simple puzzles and hidden treasure'),
      ['maze', 'treasure_hunt', 'pattern', 'jigsaw', 'connect_dots']),
  AdventureTheme('listening', () => tr2('مغامرة الاستماع', 'Listening adventure'), () => tr2('نسمع ونختار الصح', 'We listen and choose'),
      ['listen_picture', 'listen_word', 'listen_letter', 'word_book', 'match_pictures']),
  AdventureTheme('shapes', () => tr2('مغامرة الأشكال والألوان', 'Shapes and colours adventure'), () => tr2('نوصّل النقاط ونركّب الصور', 'We join dots and build pictures'),
      ['connect_dots', 'jigsaw', 'sort_groups', 'match_pictures', 'odd_one_out']),
];

/// The Monday of [d]'s week at midnight; weeks always run Monday to Sunday.
DateTime weekStartOf(DateTime d) {
  final day = DateTime(d.year, d.month, d.day);
  return day.subtract(Duration(days: day.weekday - DateTime.monday));
}

String weekIdOf(DateTime d) => dayOf(weekStartOf(d));
String weekEndIdOf(DateTime d) => dayOf(weekStartOf(d).add(const Duration(days: 6)));

/// The theme of the week: the same for every child and device, changing each Monday.
AdventureTheme themeOfWeek(DateTime d) {
  final weeks = DateTime.utc(weekStartOf(d).year, weekStartOf(d).month, weekStartOf(d).day).difference(DateTime.utc(2024, 1, 1)).inDays ~/ 7;
  return kAdventureThemes[weeks % kAdventureThemes.length];
}

class AdventureStep {
  final String kind; // 'game' or 'story'
  final String id;
  const AdventureStep(this.kind, this.id);
}

class AdventurePlan {
  final String weekId;
  final AdventureTheme theme;
  final List<AdventureStep> steps;
  const AdventurePlan(this.weekId, this.theme, this.steps);
}

/// How many game steps a child gets: age sets it, a demonstrated ability moves it by one, never below 1.
int gameStepsFor(int age, Ability ability) {
  final base = age <= 2 ? 2 : (age <= 4 ? 3 : 4);
  final shift = switch (ability) { Ability.confident => age >= 5 ? 1 : 0, Ability.needsSupport => -1, _ => 0 };
  return (base + shift).clamp(1, 5);
}

/// The week's path for a child: games that fit the age (the theme's favourites first, then others to fill), plus one
/// listening story that fits the age. Pure: [stories] are passed in.
AdventurePlan planFor(DateTime now, int age, Ability ability, List<Story> stories) {
  final theme = themeOfWeek(now);
  final fit = [for (final g in kEducationalGames) if (g.fitsAge(age)) g.id];
  final chosen = <String>[
    for (final id in theme.games) if (fit.contains(id)) id,
    for (final id in fit) if (!theme.games.contains(id)) id,
  ];
  final n = gameStepsFor(age, ability);
  final steps = <AdventureStep>[for (final id in chosen.take(n)) AdventureStep('game', id)];
  final ok = [for (final s in stories) if (s.fitsAge(age)) s];
  if (ok.isNotEmpty) {
    final weeks = DateTime.utc(weekStartOf(now).year, weekStartOf(now).month, weekStartOf(now).day).difference(DateTime.utc(2024, 1, 1)).inDays ~/ 7;
    steps.add(AdventureStep('story', ok[weeks % ok.length].id));
  }
  return AdventurePlan(weekIdOf(now), theme, steps);
}

/// Steps done: [doneGames] (finished inside the week) and [doneStories] (completed inside the week).
List<bool> stepsDone(AdventurePlan p, Set<String> doneGames, Set<String> doneStories) => [
      for (final s in p.steps) s.kind == 'game' ? doneGames.contains(s.id) : doneStories.contains(s.id),
    ];

bool adventureComplete(AdventurePlan p, Set<String> doneGames, Set<String> doneStories) =>
    p.steps.isNotEmpty && stepsDone(p, doneGames, doneStories).every((d) => d);
