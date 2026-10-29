import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/stories/story_data.dart';

void main() {
  test('every story has unique ids and non-empty chapters', () {
    final ids = kStories.map((s) => s.id).toList();
    expect(ids.toSet().length, ids.length);
    for (final s in kStories) {
      expect(s.chapters, isNotEmpty, reason: s.id);
      for (final c in s.chapters) {
        expect(c.text.trim(), isNotEmpty, reason: s.id);
      }
    }
  });

  test('branching stories: every choice leads to a real chapter, every chapter is reachable and every path can end', () {
    for (final s in kStories.where((s) => s.branching)) {
      final n = s.chapters.length;
      final next = <int, List<int>>{};
      for (var i = 0; i < n; i++) {
        final c = s.chapters[i];
        for (final ch in c.choices) {
          expect(ch.goTo, inInclusiveRange(0, n - 1), reason: '${s.id} chapter $i');
          expect(ch.goTo, isNot(i), reason: '${s.id} chapter $i loops to itself');
        }
        next[i] = c.choices.isNotEmpty
            ? [for (final ch in c.choices) ch.goTo]
            : (c.ending || i == n - 1 ? [] : [i + 1]);
      }
      // Reachable from the start.
      final seen = <int>{0};
      final stack = [0];
      while (stack.isNotEmpty) {
        for (final j in next[stack.removeLast()]!) {
          if (seen.add(j)) stack.add(j);
        }
      }
      expect(seen.length, n, reason: '${s.id} has unreachable chapters');
      // Every chapter can reach an ending (no dead loops).
      bool canEnd(int from, Set<int> path) {
        final out = next[from]!;
        if (out.isEmpty) return true;
        return out.any((j) => !path.contains(j) && canEnd(j, {...path, from}));
      }
      for (var i = 0; i < n; i++) {
        expect(canEnd(i, {}), isTrue, reason: '${s.id} chapter $i cannot reach an ending');
      }
    }
  });
}
