import 'story_models.dart';
import 'story_validation.dart';

/// How long a story takes at a normal pace.
enum StoryLength { short, medium, long }

const kShortStoryMax = 150; // seconds
const kMediumStoryMax = 360;

StoryLength lengthOf(Story s) {
  final t = s.estimatedSeconds;
  return t <= kShortStoryMax ? StoryLength.short : (t <= kMediumStoryMax ? StoryLength.medium : StoryLength.long);
}

/// The library's filters, all optional. Kept apart from the screen so the
/// rules are easy to test.
List<Story> filterStories(
  List<Story> all, {
  required int age,
  bool allAges = false,
  StoryCategory? category,
  Set<String>? favorites,
  StoryLength? length,
  bool onlyWithQuestions = false,
  bool onlyInteractive = false,
  String query = '',
}) {
  final q = query.trim();
  return [
    for (final s in all)
      // A story whose structure is broken (a missing chapter, a trap loop) is never offered.
      if (storyIsSound(s) &&
          (allAges || s.fitsAge(age)) &&
          (category == null || s.category == category) &&
          (favorites == null || favorites.contains(s.id)) &&
          (length == null || lengthOf(s) == length) &&
          (!onlyWithQuestions || s.questions.isNotEmpty) &&
          (!onlyInteractive || s.branching) &&
          (q.isEmpty || s.title.contains(q) || s.description.contains(q) || s.themes.any((t) => t.contains(q))))
        s,
  ];
}
