import '../adventures/adventure_logic.dart';
import '../everyday/everyday_data.dart';
import '../l10n/strings.dart';
import '../library/activities.dart';
import '../stories/branching.dart';
import '../stories/story_data.dart';
import 'units.dart';

/// A learning adventure joins things that already exist into one path:
///   Discover (a story or a look-around activity) → Learn (the curriculum units) → Play (the games of the week's
///   theme) → Apply (a real-life task with a grown-up) → Celebrate (the weekly adventure record that already exists).
/// It adds NO reward, star or progress of its own: playing and the record are the existing weekly adventure, and a
/// discover or apply item never counts as done in the app (a parent confirms those elsewhere).
enum PhaseKind { discover, learn, play, apply, celebrate }

enum RefKind { story, branching, realActivity, everyday }

class PhaseRef {
  final RefKind kind;
  final String id;
  const PhaseRef(this.kind, this.id);
}

class LearningAdventure {
  /// The id of the weekly theme (adventure_logic.dart) this path belongs to.
  final String themeId;
  final List<String> units;

  /// Discover options in order of preference; the first one that fits the child's age is shown.
  final List<PhaseRef> discover;
  final List<String> play;
  final List<PhaseRef> apply;
  const LearningAdventure(this.themeId, this.units, this.discover, this.play, this.apply);
}

const kLearningAdventures = <LearningAdventure>[
  LearningAdventure('letters', ['ar_letters_see', 'ar_letters_name', 'ar_letters_write'],
      [PhaseRef(RefKind.realActivity, 'picture_book')],
      ['letter_fishing', 'trace_letters', 'listen_letter'],
      [PhaseRef(RefKind.realActivity, 'letter_tray'), PhaseRef(RefKind.realActivity, 'play_dough')]),
  LearningAdventure('numbers', ['math_count_10', 'math_compare', 'math_dots_order'],
      [PhaseRef(RefKind.story, 'three_apples'), PhaseRef(RefKind.realActivity, 'count_toys')],
      ['numerals', 'compare', 'connect_four'],
      [PhaseRef(RefKind.everyday, 'count_steps'), PhaseRef(RefKind.realActivity, 'count_toys')]),
  LearningAdventure('animals', ['sci_animals_home', 'sci_animals_food', 'ar_words_first'],
      [PhaseRef(RefKind.story, 'bunny_garden'), PhaseRef(RefKind.story, 'bee_flower'), PhaseRef(RefKind.everyday, 'look_sky')],
      ['animal_habitats', 'feed_animal', 'listen_picture'],
      [PhaseRef(RefKind.everyday, 'feed_pet'), PhaseRef(RefKind.everyday, 'water_plant')]),
  LearningAdventure('thinking', ['logic_planning', 'life_routine', 'pos_words'],
      [PhaseRef(RefKind.branching, 'boat'), PhaseRef(RefKind.realActivity, 'day_routine')],
      ['maze', 'treasure_hunt', 'next_in_day'],
      [PhaseRef(RefKind.realActivity, 'day_routine'), PhaseRef(RefKind.everyday, 'toys_basket')]),
  LearningAdventure('listening', ['ar_words_first', 'ar_words_listen', 'ar_letters_name'],
      [PhaseRef(RefKind.realActivity, 'sound_box')],
      ['listen_picture', 'listen_word', 'listen_letter'],
      [PhaseRef(RefKind.realActivity, 'picture_book')]),
  LearningAdventure('shapes', ['shape_names', 'col_more', 'shape_size'],
      [PhaseRef(RefKind.realActivity, 'round3')],
      ['shape_finder', 'connect_dots', 'jigsaw', 'big_small'],
      [PhaseRef(RefKind.everyday, 'shop_colours'), PhaseRef(RefKind.realActivity, 'sort_color')]),
];

LearningAdventure? learningAdventureFor(String themeId) {
  for (final a in kLearningAdventures) {
    if (a.themeId == themeId) return a;
  }
  return null;
}

/// What a reference is called and whether it fits [age]; null when the reference no longer exists.
({String title, bool fits})? resolveRef(PhaseRef r, int age) {
  switch (r.kind) {
    case RefKind.story:
      for (final s in kStories) {
        if (s.id == r.id) return (title: s.title, fits: s.fitsAge(age));
      }
    case RefKind.branching:
      for (final s in kBranchingStories) {
        if (s.id == r.id) return (title: s.title(), fits: age >= s.minAge && age <= s.maxAge);
      }
    case RefKind.realActivity:
      for (final a in kRealActivities) {
        if (a.id == r.id) return (title: a.title, fits: age >= a.minAge && age <= a.maxAge);
      }
    case RefKind.everyday:
      for (final t in kEverydayTasks) {
        if (t.id == r.id) return (title: t.title(), fits: t.fitsAge(age));
      }
  }
  return null;
}

/// The first reference of [options] that exists and fits [age] (or the first that exists, so a toddler still sees
/// something gentle to do with a grown-up).
({String title, bool fits})? pickRef(List<PhaseRef> options, int age) {
  ({String title, bool fits})? firstExisting;
  for (final o in options) {
    final r = resolveRef(o, age);
    if (r == null) continue;
    firstExisting ??= r;
    if (r.fits) return r;
  }
  return firstExisting;
}

/// The unit that leads the "Learn" step for [age]: the first of the adventure's units that fits the age.
CurriculumUnit? learnUnitFor(LearningAdventure a, int age) {
  for (final id in a.units) {
    final u = kCurriculumUnits.where((u) => u.id == id).firstOrNull;
    if (u != null && u.fitsAge(age)) return u;
  }
  return null;
}

/// The five phases as short Arabic/English captions, for the card on the adventure screen.
String phaseName(PhaseKind k) => switch (k) {
      PhaseKind.discover => tr2('اكتشف', 'Discover'),
      PhaseKind.learn => tr2('تعلّم', 'Learn'),
      PhaseKind.play => tr2('العب', 'Play'),
      PhaseKind.apply => tr2('طبّق', 'Apply'),
      PhaseKind.celebrate => tr2('احتفل', 'Celebrate'),
    };

/// This week's learning path for [age]. Pure.
class LearningPath {
  final LearningAdventure adventure;
  final String? discover;
  final CurriculumUnit? learn;
  final List<String> play;
  final String? apply;
  const LearningPath(this.adventure, this.discover, this.learn, this.play, this.apply);
}

LearningPath? learningPathFor(AdventureTheme theme, int age, {required Set<String> gamesFittingAge}) {
  final a = learningAdventureFor(theme.id);
  if (a == null) return null;
  return LearningPath(
    a,
    pickRef(a.discover, age)?.title,
    learnUnitFor(a, age),
    [for (final g in a.play) if (gamesFittingAge.contains(g)) g],
    pickRef(a.apply, age)?.title,
  );
}
