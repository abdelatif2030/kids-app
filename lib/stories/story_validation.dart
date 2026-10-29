import 'story_models.dart';

enum StoryIssueKind {
  noChapters,
  emptyText,
  tooFewChoices,
  emptyChoiceLabel,
  brokenLink,
  selfLink,
  unreachable,
  deadEnd,
  noEnding,
  cannotEnd,
  singleEnding,
}

class StoryIssue {
  final StoryIssueKind kind;

  /// The chapter the problem is in (null for the whole story).
  final int? chapter;
  const StoryIssue(this.kind, [this.chapter]);

  @override
  String toString() => '${kind.name}${chapter == null ? '' : '@$chapter'}';
}

/// Checks the structure of a story. A linear story only needs chapters with text. A branching story is a graph:
/// chapter 0 is the start, every chapter either offers at least two choices that lead to real, different chapters,
/// or is an ending; every chapter is reachable from the start; every chapter can reach an ending (no trap loops);
/// and there are at least two different endings, so a replay can end differently.
/// (Rewards are never tied to a particular ending, so no ending can take anything away.)
///
/// The player ends a branching story at any chapter without choices, so such a chapter must be marked `ending`.
List<StoryIssue> validateStory(Story s) {
  final issues = <StoryIssue>[];
  final n = s.chapters.length;
  if (n == 0 && s.isDeviceVoice) {
    // A device-voice story with no transcript has nothing to read.
    return [const StoryIssue(StoryIssueKind.noChapters)];
  }
  for (var i = 0; i < n; i++) {
    if (s.chapters[i].text.trim().isEmpty) issues.add(StoryIssue(StoryIssueKind.emptyText, i));
  }
  if (!s.branching) return issues;

  final next = <int, List<int>>{};
  for (var i = 0; i < n; i++) {
    final c = s.chapters[i];
    if (c.choices.isEmpty) {
      if (!c.ending) issues.add(StoryIssue(StoryIssueKind.deadEnd, i));
      next[i] = const [];
      continue;
    }
    if (c.ending) issues.add(StoryIssue(StoryIssueKind.deadEnd, i)); // an ending that still offers choices
    if (c.choices.length < 2 || c.choices.map((x) => x.goTo).toSet().length < 2) {
      issues.add(StoryIssue(StoryIssueKind.tooFewChoices, i));
    }
    final targets = <int>[];
    for (final ch in c.choices) {
      if (ch.label.trim().isEmpty) issues.add(StoryIssue(StoryIssueKind.emptyChoiceLabel, i));
      if (ch.goTo < 0 || ch.goTo >= n) {
        issues.add(StoryIssue(StoryIssueKind.brokenLink, i));
      } else if (ch.goTo == i) {
        issues.add(StoryIssue(StoryIssueKind.selfLink, i));
      } else {
        targets.add(ch.goTo);
      }
    }
    next[i] = targets;
  }

  final seen = <int>{0};
  final stack = [0];
  while (stack.isNotEmpty) {
    for (final j in next[stack.removeLast()] ?? const <int>[]) {
      if (seen.add(j)) stack.add(j);
    }
  }
  for (var i = 0; i < n; i++) {
    if (!seen.contains(i)) issues.add(StoryIssue(StoryIssueKind.unreachable, i));
  }

  final endings = [for (var i = 0; i < n; i++) if (s.chapters[i].choices.isEmpty && s.chapters[i].ending) i];
  if (endings.isEmpty) {
    issues.add(const StoryIssue(StoryIssueKind.noEnding));
  } else {
    // Which chapters can reach an ending: walk backwards from the endings.
    final back = <int, List<int>>{};
    next.forEach((from, tos) {
      for (final t in tos) {
        back.putIfAbsent(t, () => []).add(from);
      }
    });
    final canEnd = {...endings};
    final q = [...endings];
    while (q.isNotEmpty) {
      for (final p in back[q.removeLast()] ?? const <int>[]) {
        if (canEnd.add(p)) q.add(p);
      }
    }
    for (var i = 0; i < n; i++) {
      if (seen.contains(i) && !canEnd.contains(i)) issues.add(StoryIssue(StoryIssueKind.cannotEnd, i));
    }
    final reachableEndings = endings.where(seen.contains).length;
    if (reachableEndings < 2) issues.add(const StoryIssue(StoryIssueKind.singleEnding));
  }
  return issues;
}

/// True when the story can be shown and played safely. A malformed story is simply left out of the library.
bool storyIsSound(Story s) => validateStory(s).isEmpty;
