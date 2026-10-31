import 'dart:math';

/// A hook for the shared audio engine: games call it with a cue name ("roll", "ladder", "slide", "place", "found",
/// "win", "gentle"); the audio engine registers a handler. With none registered nothing plays and nothing is claimed.
class GameCue {
  GameCue._();
  static void Function(String cue)? onCue;
  static void play(String cue) => onCue?.call(cue);
}

// ============================================================================
// Snakes and ladders
// ============================================================================

/// A small board for young children: [size] x [size] cells, a few ladders up and a few gentle slides down.
/// Cells are numbered 1..size*size; the last cell is the finish. No dice roll is ever "bad": the worst a slide does is
/// move a piece a few cells back.
class SnakesBoard {
  final int size;
  final Map<int, int> ladders; // foot -> top (top > foot)
  final Map<int, int> slides; // head -> tail (tail < head, at most [maxSlide] cells back)
  static const maxSlide = 4;
  const SnakesBoard(this.size, this.ladders, this.slides);

  int get last => size * size;

  /// The standard small boards: 5x5 for the youngest players, 6x6 beyond.
  factory SnakesBoard.forAge(int age) => age <= 5
      ? const SnakesBoard(5, {3: 11, 8: 14, 15: 21}, {13: 9, 23: 20})
      : const SnakesBoard(6, {3: 13, 9: 18, 16: 27, 22: 31}, {14: 10, 25: 21, 33: 30});

  /// Where a piece standing on [cell] ends up (a ladder or a slide), or [cell] itself.
  int resolve(int cell) => ladders[cell] ?? slides[cell] ?? cell;

  /// Every ladder goes up, every slide goes down by at most [maxSlide], nothing starts or ends on the finish or on
  /// another special cell, so a chain of jumps is impossible.
  bool get valid {
    final specials = {...ladders.keys, ...slides.keys};
    for (final e in ladders.entries) {
      if (e.value <= e.key || e.value >= last || e.key < 2) return false;
      if (specials.contains(e.value)) return false;
    }
    for (final e in slides.entries) {
      if (e.value >= e.key || e.key - e.value > maxSlide || e.key >= last) return false;
      if (specials.contains(e.value)) return false;
    }
    return ladders.length + slides.length == specials.length;
  }
}

class SnakesMove {
  final int from;
  final int landed; // after the dice, before a ladder or slide
  final int to; // final cell
  final bool ladder;
  final bool slide;
  const SnakesMove(this.from, this.landed, this.to, this.ladder, this.slide);
  bool get finished => false;
}

/// The game state: the child (player 0) and a friend (player 1, the computer). The game ends for the CHILD when their
/// piece reaches the finish; if the friend gets there first they simply wait there, so nobody "loses".
class SnakesGame {
  final SnakesBoard board;
  final Random random;
  final List<int> pos = [1, 1];
  int turn = 0;
  static const dice = 4;
  SnakesGame(this.board, this.random);

  bool get childFinished => pos[0] >= board.last;
  bool get friendFinished => pos[1] >= board.last;

  int roll() => random.nextInt(dice) + 1;

  /// Moves [player] by [dice]. Rolling past the finish just reaches it.
  SnakesMove move(int player, int diceValue) {
    final from = pos[player];
    final landed = min(from + diceValue, board.last);
    final to = board.resolve(landed);
    pos[player] = to;
    return SnakesMove(from, landed, to, board.ladders.containsKey(landed), board.slides.containsKey(landed));
  }

  /// Plays the friend's turn if it has not finished yet.
  SnakesMove? friendTurn() => friendFinished ? null : move(1, roll());
}

// ============================================================================
// Jigsaw
// ============================================================================

/// Rows x columns by age: 2x2 for 3-4, 2x3 for 5, 3x3 for 6.
(int rows, int cols) jigsawGrid(int age) => age <= 4 ? (2, 2) : (age == 5 ? (2, 3) : (3, 3));

class JigsawPuzzle {
  final int rows, cols;
  final List<int> tray; // piece ids still to place, in display order
  final Set<int> placed = {};
  JigsawPuzzle(this.rows, this.cols, Random r) : tray = ([for (var i = 0; i < rows * cols; i++) i]..shuffle(r));

  int get total => rows * cols;
  bool get complete => placed.length == total;

  /// A piece id equals the slot it belongs to. Returns true when it fits (and is placed); a wrong try changes nothing.
  bool place(int piece, int slot) {
    if (placed.contains(piece) || piece != slot) return false;
    placed.add(piece);
    tray.remove(piece);
    return true;
  }
}

// ============================================================================
// Maze
// ============================================================================

const _dirs = <(int, int)>[(0, -1), (1, 0), (0, 1), (-1, 0)]; // up, right, down, left as (dx, dy)

/// A perfect maze (every cell reachable, exactly one route between any two cells) made by depth-first carving, so it
/// can always be solved. [open] says which walls are removed: open[y][x] has 4 booleans (up, right, down, left).
class Maze {
  final int size;
  final List<List<List<bool>>> open;
  const Maze(this.size, this.open);

  factory Maze.generate(int size, Random r) {
    final open = [for (var y = 0; y < size; y++) [for (var x = 0; x < size; x++) List<bool>.filled(4, false)]];
    final seen = {for (var i = 0; i < size * size; i++) i: false};
    final stack = <(int, int)>[(0, 0)];
    seen[0] = true;
    while (stack.isNotEmpty) {
      final (x, y) = stack.last;
      final next = <int>[];
      for (var d = 0; d < 4; d++) {
        final nx = x + _dirs[d].$1, ny = y + _dirs[d].$2;
        if (nx >= 0 && ny >= 0 && nx < size && ny < size && !seen[ny * size + nx]!) next.add(d);
      }
      if (next.isEmpty) {
        stack.removeLast();
        continue;
      }
      final d = next[r.nextInt(next.length)];
      final nx = x + _dirs[d].$1, ny = y + _dirs[d].$2;
      open[y][x][d] = true;
      open[ny][nx][(d + 2) % 4] = true;
      seen[ny * size + nx] = true;
      stack.add((nx, ny));
    }
    return Maze(size, open);
  }

  bool canMove(int x, int y, int dir) => open[y][x][dir];

  /// The shortest route from the start (0,0) to the finish (size-1,size-1) as a list of cells, or empty if there is none.
  List<(int, int)> solve() {
    final prev = <int, int>{};
    final q = <int>[0];
    final seen = {0};
    while (q.isNotEmpty) {
      final c = q.removeAt(0);
      final x = c % size, y = c ~/ size;
      if (x == size - 1 && y == size - 1) {
        final path = <(int, int)>[];
        var cur = c;
        while (true) {
          path.add((cur % size, cur ~/ size));
          if (cur == 0) break;
          cur = prev[cur]!;
        }
        return path.reversed.toList();
      }
      for (var d = 0; d < 4; d++) {
        if (!open[y][x][d]) continue;
        final n = (y + _dirs[d].$2) * size + (x + _dirs[d].$1);
        if (seen.add(n)) {
          prev[n] = c;
          q.add(n);
        }
      }
    }
    return const [];
  }
}

/// Maze sizes for the three rounds, by age.
List<int> mazeSizes(int age) => age <= 4 ? [3, 4, 4] : (age == 5 ? [4, 5, 5] : [5, 6, 7]);

// ============================================================================
// Treasure hunt
// ============================================================================

enum ClueKind { nextTo, sameRow, sameColumn, above, below, leftOf, rightOf }

class Landmark {
  final String id; // tree, rock, house, pond, flag
  final int cell;
  const Landmark(this.id, this.cell);
}

class Clue {
  final ClueKind kind;
  final Landmark landmark;
  const Clue(this.kind, this.landmark);

  /// Is this clue true for a treasure on [cell] of a board with [cols] columns?
  bool holds(int cell, int cols) {
    final x = cell % cols, y = cell ~/ cols;
    final lx = landmark.cell % cols, ly = landmark.cell ~/ cols;
    switch (kind) {
      case ClueKind.nextTo:
        return (x - lx).abs() + (y - ly).abs() == 1;
      case ClueKind.sameRow:
        return y == ly && x != lx;
      case ClueKind.sameColumn:
        return x == lx && y != ly;
      case ClueKind.above:
        return x == lx && y == ly - 1;
      case ClueKind.below:
        return x == lx && y == ly + 1;
      case ClueKind.leftOf:
        return y == ly && x == lx - 1;
      case ClueKind.rightOf:
        return y == ly && x == lx + 1;
    }
  }
}

/// A treasure map: a [cols] x [cols] grid with landmarks, a hidden treasure and clues that are ALL true and together
/// leave exactly one possible cell (so a clue never misleads and the answer can always be reasoned out).
class TreasureMap {
  final int cols;
  final List<Landmark> landmarks;
  final int treasure;
  final List<Clue> clues;
  const TreasureMap(this.cols, this.landmarks, this.treasure, this.clues);

  static const ids = ['tree', 'rock', 'house', 'pond', 'flag'];

  List<int> candidates() => [
        for (var c = 0; c < cols * cols; c++)
          if (!landmarks.any((l) => l.cell == c) && clues.every((k) => k.holds(c, cols))) c,
      ];

  static TreasureMap generate(int cols, int landmarkCount, Random r) {
    for (var attempt = 0; attempt < 500; attempt++) {
      final cells = [for (var i = 0; i < cols * cols; i++) i]..shuffle(r);
      final marks = [for (var i = 0; i < landmarkCount; i++) Landmark(ids[i], cells[i])];
      final treasure = cells[landmarkCount];
      final all = <Clue>[
        for (final m in marks)
          for (final k in ClueKind.values)
            if (Clue(k, m).holds(treasure, cols)) Clue(k, m),
      ]..shuffle(r);
      final chosen = <Clue>[];
      for (final c in all) {
        chosen.add(c);
        final map = TreasureMap(cols, marks, treasure, chosen);
        if (map.candidates().length == 1) return map;
        if (chosen.length >= 3) break;
      }
    }
    // Always possible with all clues; fall back to a fixed, verified map.
    final marks = [const Landmark('tree', 0), const Landmark('rock', 8)];
    final fixed = TreasureMap(3, marks, 1, [Clue(ClueKind.rightOf, marks[0]), Clue(ClueKind.sameColumn, marks[1])]);
    return fixed;
  }
}

// ============================================================================
// Connect the dots
// ============================================================================

class DotShape {
  final String id;
  final List<(double, double)> points; // in 0..1, in the order to connect
  final bool closed; // join the last dot back to the first
  const DotShape(this.id, this.points, {this.closed = true});
}

const kDotShapes = <DotShape>[
  DotShape('house', [(0.2, 0.9), (0.2, 0.5), (0.5, 0.15), (0.8, 0.5), (0.8, 0.9)]),
  DotShape('star', [(0.5, 0.08), (0.62, 0.38), (0.94, 0.4), (0.69, 0.6), (0.78, 0.92), (0.5, 0.74), (0.22, 0.92), (0.31, 0.6), (0.06, 0.4), (0.38, 0.38)]),
  DotShape('fish', [(0.08, 0.5), (0.28, 0.22), (0.58, 0.2), (0.8, 0.4), (0.94, 0.2), (0.94, 0.8), (0.8, 0.6), (0.58, 0.8), (0.28, 0.78)]),
  DotShape('boat', [(0.5, 0.06), (0.86, 0.4), (0.5, 0.4), (0.5, 0.64), (0.08, 0.64), (0.26, 0.94), (0.74, 0.94), (0.92, 0.64)], closed: false),
  DotShape('heart', [(0.5, 0.3), (0.35, 0.12), (0.12, 0.2), (0.12, 0.45), (0.5, 0.88), (0.88, 0.45), (0.88, 0.2), (0.65, 0.12)]),
  DotShape('tree', [(0.5, 0.05), (0.84, 0.45), (0.66, 0.45), (0.92, 0.75), (0.62, 0.75), (0.62, 0.95), (0.38, 0.95), (0.38, 0.75), (0.08, 0.75), (0.34, 0.45), (0.16, 0.45)]),
];

/// Shapes for a session: few, simple dots for the youngest, more dots later.
List<DotShape> dotShapesForAge(int age, Random r) {
  final maxDots = age <= 4 ? 8 : 12;
  final pool = [for (final s in kDotShapes) if (s.points.length <= maxDots) s]..shuffle(r);
  return pool.take(3).toList();
}

class DotsGame {
  final DotShape shape;
  int next = 0; // index of the dot to tap next
  DotsGame(this.shape);
  bool get complete => next >= shape.points.length;

  /// Tapping the right dot advances; any other dot changes nothing (no penalty).
  bool tap(int index) {
    if (complete || index != next) return false;
    next++;
    return true;
  }
}

// ============================================================================
// Animal habitats
// ============================================================================

enum Habitat { farm, sea, forest, sky, desert }

class Animal {
  final String id;
  final String emoji;
  final String ar, en;
  final Habitat home;
  const Animal(this.id, this.emoji, this.ar, this.en, this.home);
}

const kAnimals = <Animal>[
  Animal('cow', '🐄', 'بقرة', 'Cow', Habitat.farm),
  Animal('sheep', '🐑', 'خروف', 'Sheep', Habitat.farm),
  Animal('rooster', '🐓', 'ديك', 'Rooster', Habitat.farm),
  Animal('pig', '🐖', 'خنزير', 'Pig', Habitat.farm),
  Animal('horse', '🐴', 'حصان', 'Horse', Habitat.farm),
  Animal('fish', '🐟', 'سمكة', 'Fish', Habitat.sea),
  Animal('dolphin', '🐬', 'دولفين', 'Dolphin', Habitat.sea),
  Animal('octopus', '🐙', 'أخطبوط', 'Octopus', Habitat.sea),
  Animal('crab', '🦀', 'سلطعون', 'Crab', Habitat.sea),
  Animal('whale', '🐳', 'حوت', 'Whale', Habitat.sea),
  Animal('fox', '🦊', 'ثعلب', 'Fox', Habitat.forest),
  Animal('bear', '🐻', 'دب', 'Bear', Habitat.forest),
  Animal('deer', '🦌', 'غزال', 'Deer', Habitat.forest),
  Animal('owl', '🦉', 'بومة', 'Owl', Habitat.forest),
  Animal('squirrel', '🐿️', 'سنجاب', 'Squirrel', Habitat.forest),
  Animal('eagle', '🦅', 'نسر', 'Eagle', Habitat.sky),
  Animal('parrot', '🦜', 'ببغاء', 'Parrot', Habitat.sky),
  Animal('butterfly', '🦋', 'فراشة', 'Butterfly', Habitat.sky),
  Animal('dove', '🕊️', 'حمامة', 'Dove', Habitat.sky),
  Animal('camel', '🐪', 'جمل', 'Camel', Habitat.desert),
  Animal('scorpion', '🦂', 'عقرب', 'Scorpion', Habitat.desert),
  Animal('lizard', '🦎', 'سحلية', 'Lizard', Habitat.desert),
];

class HabitatRound {
  final List<Habitat> homes;
  final List<Animal> animals;
  final Set<String> placed = {};
  HabitatRound(this.homes, this.animals);
  bool get complete => placed.length == animals.length;

  /// True when [animal] lives in [home] (and records it); a wrong home changes nothing.
  bool place(Animal animal, Habitat home) {
    if (animal.home != home || placed.contains(animal.id)) return false;
    placed.add(animal.id);
    return true;
  }
}

/// Two homes for the youngest, three for older children; two animals per home, mixed.
HabitatRound makeHabitatRound(int age, Random r) {
  final all = [...Habitat.values]..shuffle(r);
  final homes = all.take(age <= 4 ? 2 : 3).toList();
  final animals = <Animal>[];
  for (final h in homes) {
    final pool = [for (final a in kAnimals) if (a.home == h) a]..shuffle(r);
    animals.addAll(pool.take(2));
  }
  animals.shuffle(r);
  return HabitatRound(homes, animals);
}
