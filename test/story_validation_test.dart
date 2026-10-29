import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/media/audio.dart';
import 'package:kids_app/stories/story_data.dart';
import 'package:kids_app/stories/story_filter.dart';
import 'package:kids_app/stories/story_models.dart';
import 'package:kids_app/stories/story_validation.dart';

Story story(List<StoryChapter> chapters) => Story(
      id: 't',
      title: 't',
      description: 'd',
      category: StoryCategory.interactive,
      minAge: 4,
      maxAge: 8,
      narrator: 'n',
      media: const DeviceVoice.transcript(),
      cover: 'x',
      coverColor: 0,
      themes: const [],
      objectives: 'o',
      source: 's',
      rights: 'r',
      chapters: chapters,
    );

StoryChapter ch(String t, {List<StoryChoice> c = const [], bool end = false}) => StoryChapter('c', t, choices: c, ending: end);
List<StoryChoice> two(int a, int b) => [StoryChoice('x', a), StoryChoice('y', b)];

Set<StoryIssueKind> kinds(Story s) => {for (final i in validateStory(s)) i.kind};

void main() {
  test('every story shipped in the app is structurally sound', () {
    for (final s in kStories) {
      expect(validateStory(s), isEmpty, reason: s.id);
    }
  });

  test('there are several interactive stories now, each with at least two different endings', () {
    final b = kStories.where((s) => s.branching).toList();
    expect(b.length, greaterThanOrEqualTo(3));
    for (final s in b) {
      expect(s.chapters.where((c) => c.ending).length, greaterThanOrEqualTo(2), reason: s.id);
    }
  });

  group('validation catches', () {
    final good = [
      ch('a', c: two(1, 2)),
      ch('b', end: true),
      ch('c', end: true),
    ];
    test('a good graph', () => expect(validateStory(story(good)), isEmpty));
    test('a broken link', () {
      expect(kinds(story([ch('a', c: two(1, 9)), ch('b', end: true), ch('c', end: true)])), contains(StoryIssueKind.brokenLink));
      expect(kinds(story([ch('a', c: two(1, -1)), ch('b', end: true), ch('c', end: true)])), contains(StoryIssueKind.brokenLink));
    });
    test('a chapter that links to itself', () {
      expect(kinds(story([ch('a', c: two(0, 1)), ch('b', end: true), ch('c', end: true)])), contains(StoryIssueKind.selfLink));
    });
    test('an unreachable chapter', () {
      expect(kinds(story([...good, ch('d', end: true)])), contains(StoryIssueKind.unreachable));
    });
    test('a chapter with no choices that is not marked as an ending (the player would just stop)', () {
      expect(kinds(story([ch('a', c: two(1, 2)), ch('b'), ch('c', end: true)])), contains(StoryIssueKind.deadEnd));
    });
    test('a trap loop with no way to an ending', () {
      final s = story([
        ch('a', c: two(1, 3)),
        ch('b', c: two(2, 1)),
        ch('c', c: two(1, 2)),
        ch('d', end: true),
        ch('e', end: true),
      ]);
      final k = kinds(s);
      expect(k, contains(StoryIssueKind.cannotEnd));
    });
    test('only one reachable ending (no alternative path)', () {
      expect(kinds(story([ch('a', c: two(1, 1)), ch('b', end: true)])), containsAll([StoryIssueKind.tooFewChoices, StoryIssueKind.singleEnding]));
    });
    test('no ending at all, empty text and empty choice labels', () {
      expect(kinds(story([ch('a', c: two(1, 0 + 1)), ch('b', c: two(0, 0))])), contains(StoryIssueKind.noEnding));
      expect(kinds(story([ch('  ', c: two(1, 2)), ch('b', end: true), ch('c', end: true)])), contains(StoryIssueKind.emptyText));
      expect(kinds(story([ch('a', c: [StoryChoice(' ', 1), StoryChoice('y', 2)]), ch('b', end: true), ch('c', end: true)])), contains(StoryIssueKind.emptyChoiceLabel));
    });
    test('a story with no chapters', () => expect(kinds(story([])), contains(StoryIssueKind.noChapters)));
  });

  test('a malformed story is left out of the library list instead of crashing it', () {
    final bad = story([ch('a', c: two(1, 9)), ch('b', end: true)]);
    final shown = filterStories([...kStories, bad], age: 5, allAges: true);
    expect(shown.contains(bad), isFalse);
    expect(shown.length, kStories.where((s) => storyIsSound(s)).length);
  });

  test('every branching ending can be reached by following choices from the start (walk-through)', () {
    for (final s in kStories.where((s) => s.branching)) {
      final reached = <int>{};
      void walk(int i, Set<int> path) {
        final c = s.chapters[i];
        if (c.choices.isEmpty) {
          reached.add(i);
          return;
        }
        for (final x in c.choices) {
          if (path.add(x.goTo)) walk(x.goTo, path);
        }
      }
      walk(0, {0});
      final endings = {for (var i = 0; i < s.chapters.length; i++) if (s.chapters[i].ending) i};
      expect(reached, endings, reason: s.id);
    }
  });
}
