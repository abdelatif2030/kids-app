import 'dart:math';

import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/games/adventure_logic.dart';

void main() {
  group('snakes and ladders', () {
    test('both boards are valid and tidy', () {
      for (final age in [4, 5, 6]) {
        final b = SnakesBoard.forAge(age);
        expect(b.valid, isTrue, reason: 'age $age');
        expect(b.last, b.size * b.size);
      }
      expect(SnakesBoard.forAge(4).size, 5);
      expect(SnakesBoard.forAge(6).size, 6);
    });

    test('ladders go up, slides go down a little, others stay', () {
      final b = SnakesBoard.forAge(4);
      final g = SnakesGame(b, Random(1));
      final up = g.move(0, 2); // 1 -> 3, a ladder to 11
      expect(up.ladder, isTrue);
      expect(up.to, 11);
      g.pos[0] = 11;
      g.pos[0] = 12;
      final down = g.move(0, 1); // 12 -> 13, a slide to 9
      expect(down.slide, isTrue);
      expect(down.to, 9);
      expect(b.last - 1, lessThan(b.last));
      final plain = g.move(0, 1); // 9 -> 10
      expect(plain.ladder || plain.slide, isFalse);
      expect(g.pos[0], 10);
    });

    test('rolling past the end just reaches it, and the child finishing is what ends the game', () {
      final b = SnakesBoard.forAge(4);
      final g = SnakesGame(b, Random(2));
      g.pos[0] = b.last - 1;
      g.move(0, 4);
      expect(g.pos[0], b.last);
      expect(g.childFinished, isTrue);
    });

    test('the friend winning first does not end the game for the child; it just waits', () {
      final b = SnakesBoard.forAge(4);
      final g = SnakesGame(b, Random(3));
      g.pos[1] = b.last;
      expect(g.friendFinished, isTrue);
      expect(g.childFinished, isFalse);
      expect(g.friendTurn(), isNull); // nothing more to move
      expect(g.pos[1], b.last);
    });

    test('every dice value is 1..4 and any seeded game finishes for the child', () {
      for (var seed = 0; seed < 100; seed++) {
        final b = SnakesBoard.forAge(seed.isEven ? 4 : 6);
        final g = SnakesGame(b, Random(seed));
        var turns = 0;
        while (!g.childFinished && turns < 1000) {
          final r = g.roll();
          expect(r, inInclusiveRange(1, 4));
          g.move(0, r);
          g.friendTurn();
          turns++;
        }
        expect(g.childFinished, isTrue, reason: 'seed $seed');
      }
    });
  });

  group('jigsaw', () {
    test('grid grows with age', () {
      expect(jigsawGrid(3), (2, 2));
      expect(jigsawGrid(5), (2, 3));
      expect(jigsawGrid(6), (3, 3));
    });

    test('a piece fits only its own slot; a wrong try changes nothing; completing needs every piece', () {
      final p = JigsawPuzzle(2, 2, Random(4));
      expect(p.tray.length, 4);
      expect(p.place(0, 1), isFalse);
      expect(p.tray.length, 4);
      for (var i = 0; i < 4; i++) {
        expect(p.complete, isFalse);
        expect(p.place(i, i), isTrue);
        expect(p.place(i, i), isFalse); // not twice
      }
      expect(p.complete, isTrue);
      expect(p.tray, isEmpty);
    });
  });

  group('maze', () {
    test('every generated maze is solvable, connected and has consistent walls', () {
      for (var seed = 0; seed < 150; seed++) {
        for (final size in [3, 4, 5, 6, 7]) {
          final m = Maze.generate(size, Random(seed));
          final path = m.solve();
          expect(path, isNotEmpty, reason: 'seed $seed size $size');
          expect(path.first, (0, 0));
          expect(path.last, (size - 1, size - 1));
          // each step of the path is a real opening
          for (var i = 0; i + 1 < path.length; i++) {
            final (x, y) = path[i];
            final (nx, ny) = path[i + 1];
            final d = [(0, -1), (1, 0), (0, 1), (-1, 0)].indexOf((nx - x, ny - y));
            expect(d, isNonNegative);
            expect(m.canMove(x, y, d), isTrue);
          }
          // walls are symmetric and the border is closed
          var openings = 0;
          for (var y = 0; y < size; y++) {
            for (var x = 0; x < size; x++) {
              for (var d = 0; d < 4; d++) {
                final nx = x + [0, 1, 0, -1][d], ny = y + [-1, 0, 1, 0][d];
                final inside = nx >= 0 && ny >= 0 && nx < size && ny < size;
                if (!inside) {
                  expect(m.open[y][x][d], isFalse);
                } else {
                  expect(m.open[y][x][d], m.open[ny][nx][(d + 2) % 4]);
                  if (m.open[y][x][d]) openings++;
                }
              }
            }
          }
          expect(openings ~/ 2, size * size - 1, reason: 'a perfect maze has n-1 openings'); // a tree
        }
      }
    });

    test('sizes by age grow over three rounds', () {
      expect(mazeSizes(4), [3, 4, 4]);
      expect(mazeSizes(6).last, 7);
    });
  });

  group('treasure hunt', () {
    test('clues are all true for the treasure and leave exactly one possible cell', () {
      for (var seed = 0; seed < 300; seed++) {
        for (final (cols, marks) in [(3, 2), (4, 3), (4, 4)]) {
          final m = TreasureMap.generate(cols, marks, Random(seed));
          expect(m.clues, isNotEmpty);
          for (final c in m.clues) {
            expect(c.holds(m.treasure, m.cols), isTrue, reason: 'seed $seed ${c.kind}');
          }
          expect(m.candidates(), [m.treasure], reason: 'seed $seed cols $cols');
          expect(m.landmarks.any((l) => l.cell == m.treasure), isFalse);
          expect({for (final l in m.landmarks) l.cell}.length, m.landmarks.length);
        }
      }
    });

    test('clue meanings', () {
      const tree = Landmark('tree', 4); // centre of a 3x3
      expect(const Clue(ClueKind.above, tree).holds(1, 3), isTrue);
      expect(const Clue(ClueKind.below, tree).holds(7, 3), isTrue);
      expect(const Clue(ClueKind.leftOf, tree).holds(3, 3), isTrue);
      expect(const Clue(ClueKind.rightOf, tree).holds(5, 3), isTrue);
      expect(const Clue(ClueKind.nextTo, tree).holds(0, 3), isFalse); // diagonal is not next to
      expect(const Clue(ClueKind.sameRow, tree).holds(3, 3), isTrue);
      expect(const Clue(ClueKind.sameRow, tree).holds(4, 3), isFalse); // not on the landmark itself
    });
  });

  group('connect the dots', () {
    test('shapes are usable: enough distinct dots inside the canvas', () {
      for (final s in kDotShapes) {
        expect(s.points.length, inInclusiveRange(5, 12), reason: s.id);
        for (final (x, y) in s.points) {
          expect(x, inInclusiveRange(0, 1));
          expect(y, inInclusiveRange(0, 1));
        }
        for (var i = 0; i + 1 < s.points.length; i++) {
          expect(s.points[i] == s.points[i + 1], isFalse, reason: '${s.id} $i');
        }
      }
    });

    test('dots never overlap: every pair is at least 17% of the board apart (no repeated points)', () {
      for (final s in kDotShapes) {
        for (var i = 0; i < s.points.length; i++) {
          for (var j = i + 1; j < s.points.length; j++) {
            final d = sqrt(pow(s.points[i].$1 - s.points[j].$1, 2) + pow(s.points[i].$2 - s.points[j].$2, 2));
            expect(d, greaterThanOrEqualTo(0.17), reason: '${s.id} dots ${i + 1} and ${j + 1}');
          }
        }
      }
    });

    test('only the next dot advances; a wrong tap changes nothing; completing reveals', () {
      final g = DotsGame(kDotShapes.first);
      expect(g.tap(3), isFalse);
      expect(g.next, 0);
      for (var i = 0; i < kDotShapes.first.points.length; i++) {
        expect(g.complete, isFalse);
        expect(g.tap(i), isTrue);
      }
      expect(g.complete, isTrue);
      expect(g.tap(0), isFalse);
    });

    test('young children get few dots, older children can get more; three shapes', () {
      for (var seed = 0; seed < 30; seed++) {
        final young = dotShapesForAge(3, Random(seed));
        expect(young.length, 3);
        expect(young.every((s) => s.points.length <= 8), isTrue);
        expect(dotShapesForAge(6, Random(seed)).length, 3);
      }
    });
  });

  group('animal habitats', () {
    test('every animal has a home, every home has enough animals, and ids are unique', () {
      expect({for (final a in kAnimals) a.id}.length, kAnimals.length);
      for (final h in Habitat.values) {
        expect(kAnimals.where((a) => a.home == h).length, greaterThanOrEqualTo(2), reason: '$h');
      }
    });

    test('rounds have the right number of homes and animals and each animal belongs to one of the homes', () {
      for (var seed = 0; seed < 100; seed++) {
        final young = makeHabitatRound(3, Random(seed));
        expect(young.homes.length, 2);
        expect(young.animals.length, 4);
        final older = makeHabitatRound(6, Random(seed));
        expect(older.homes.length, 3);
        expect(older.animals.length, 6);
        for (final a in older.animals) {
          expect(older.homes.contains(a.home), isTrue);
        }
      }
    });

    test('a right home places the animal, a wrong home changes nothing, finishing needs every animal', () {
      final r = makeHabitatRound(3, Random(9));
      final a = r.animals.first;
      final wrong = Habitat.values.firstWhere((h) => h != a.home);
      expect(r.place(a, wrong), isFalse);
      expect(r.placed, isEmpty);
      for (final x in r.animals) {
        expect(r.complete, isFalse);
        expect(r.place(x, x.home), isTrue);
      }
      expect(r.complete, isTrue);
    });
  });

  test('the audio hook is optional and delivers cues when set', () {
    GameCue.play('roll'); // nothing registered: fine
    final got = <String>[];
    GameCue.onCue = got.add;
    GameCue.play('win');
    GameCue.onCue = null;
    expect(got, ['win']);
  });
}
