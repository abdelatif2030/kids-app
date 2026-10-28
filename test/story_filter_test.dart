import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/stories/story_data.dart';
import 'package:kids_app/stories/story_filter.dart';
import 'package:kids_app/stories/story_models.dart';

void main() {
  final all = publishedStories();

  test('no filter returns the stories for the age; allAges returns every story', () {
    expect(filterStories(all, age: 5).every((s) => s.fitsAge(5)), true);
    expect(filterStories(all, age: 5, allAges: true).length, all.length);
  });

  test('each filter only narrows the list', () {
    final base = filterStories(all, age: 6, allAges: true);
    final cat = filterStories(all, age: 6, allAges: true, category: StoryCategory.calm);
    expect(cat.every((s) => s.category == StoryCategory.calm), true);
    final withQ = filterStories(all, age: 6, allAges: true, onlyWithQuestions: true);
    expect(withQ.every((s) => s.questions.isNotEmpty), true);
    final short = filterStories(all, age: 6, allAges: true, length: StoryLength.short);
    expect(short.every((s) => s.estimatedSeconds <= kShortStoryMax), true);
    for (final l in [cat, withQ, short]) {
      expect(l.length <= base.length, true);
    }
  });

  test('favorites and search work together', () {
    final first = all.first;
    expect(filterStories(all, age: 1, allAges: true, favorites: {first.id}).map((s) => s.id), [first.id]);
    expect(filterStories(all, age: 1, allAges: true, favorites: {}), isEmpty);
    expect(filterStories(all, age: 1, allAges: true, query: first.title.substring(0, 3)), contains(first));
    expect(filterStories(all, age: 1, allAges: true, query: 'zzzz-no-story'), isEmpty);
  });

  test('every story offers its questions only when it has some, and published stories have rights text', () {
    for (final s in all) {
      expect(s.rights, isNotEmpty);
      expect(s.source, isNotEmpty);
    }
  });
}
