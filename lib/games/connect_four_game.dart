import '../design/focusable_tap.dart';

import 'package:flutter/material.dart';

import '../journey/ui/kit.dart';
import '../l10n/strings.dart';
import 'game_common.dart';

enum DropResult { invalid, placed, win, draw }

/// A small Connect Four for two players on ONE device. The board is 5 x 5 and the goal is
/// four in a row (horizontal, vertical or diagonal). No computer opponent, no network.
class ConnectFourBoard {
  static const rows = 5;
  static const cols = 5;
  static const goal = 4;

  /// 0 = empty, 1 / 2 = player.
  final List<List<int>> grid = [
    for (var r = 0; r < rows; r++) List.filled(cols, 0),
  ];
  int current = 1;
  int? winner;
  List<(int, int)> winLine = const [];
  bool get isFull => grid[0].every((c) => c != 0);
  bool get finished => winner != null || isFull;
  bool get draw => winner == null && isFull;

  bool columnFull(int c) => grid[0][c] != 0;

  DropResult drop(int c) {
    if (finished || c < 0 || c >= cols || columnFull(c)) {
      return DropResult.invalid;
    }
    var r = rows - 1;
    while (grid[r][c] != 0) {
      r--;
    }
    grid[r][c] = current;
    final line = _lineThrough(r, c);
    if (line != null) {
      winner = current;
      winLine = line;
      return DropResult.win;
    }
    if (isFull) return DropResult.draw;
    current = current == 1 ? 2 : 1;
    return DropResult.placed;
  }

  List<(int, int)>? _lineThrough(int r, int c) {
    final p = grid[r][c];
    for (final (dr, dc) in const [(0, 1), (1, 0), (1, 1), (1, -1)]) {
      final cells = <(int, int)>[(r, c)];
      for (final s in const [1, -1]) {
        var rr = r + dr * s, cc = c + dc * s;
        while (rr >= 0 &&
            rr < rows &&
            cc >= 0 &&
            cc < cols &&
            grid[rr][cc] == p) {
          cells.add((rr, cc));
          rr += dr * s;
          cc += dc * s;
        }
      }
      if (cells.length >= goal) return cells;
    }
    return null;
  }
}

class ConnectFourGame extends StatefulWidget {
  final String childId;
  const ConnectFourGame({super.key, required this.childId});

  static const gameId = 'connect_four';

  @override
  State<ConnectFourGame> createState() => _ConnectFourGameState();
}

class _ConnectFourGameState extends State<ConnectFourGame> {
  var _board = ConnectFourBoard();

  static const _colors = {1: Color(0xFFE5575B), 2: Color(0xFF4A86E8)};

  String _name(int p) => p == 1
      ? tr2('اللاعب الأحمر ❤', 'Red player ❤')
      : tr2('اللاعب الأزرق ▲', 'Blue player ▲');

  Widget _disc(int p, {bool highlight = false}) => Container(
    decoration: BoxDecoration(
      shape: BoxShape.circle,
      color: p == 0 ? Colors.white : _colors[p],
      border: Border.all(
        color: highlight ? Colors.amber : RC.outline,
        width: highlight ? 5 : 2,
      ),
    ),
    // A shape inside, so the two players are not told apart by color alone.
    child: p == 0
        ? null
        : Icon(
            p == 1 ? Icons.favorite_rounded : Icons.change_history_rounded,
            color: Colors.white,
            size: 26,
          ),
  );

  @override
  Widget build(BuildContext context) {
    final title = tr2('أربعة في صف', 'Four in a row');
    if (_board.finished) {
      return GameScaffold(
        title: title,
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.all(12),
              child: Text(
                _board.draw
                    ? tr2(
                        'تعادل! لعبتما معاً بشكل رائع.',
                        'A draw! You both played really well.',
                      )
                    : tr2(
                        '${_name(_board.winner!)} جمع أربعة! أحسنتما.',
                        '${_name(_board.winner!)} connected four! Well done both.',
                      ),
                textAlign: TextAlign.center,
                style: const TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.w800,
                  color: RC.ink,
                ),
              ),
            ),
            SizedBox(height: 220, child: _boardView(small: true)),
            Expanded(
              child: GameFinishPanel(
                childId: widget.childId,
                gameId: ConnectFourGame.gameId,
                onAgain: () => setState(() => _board = ConnectFourBoard()),
              ),
            ),
          ],
        ),
      );
    }
    return GameScaffold(
      confirmLeave: _board.grid.any((row) => row.any((c) => c != 0)),
      title: title,
      instruction: tr2(
        'لعبة لاعبين اثنين على نفس الجهاز: اضغط عموداً لإسقاط قطعتك. اجمع أربعاً متصلة.',
        'Two players on one device: tap a column to drop your piece. Connect four.',
      ),
      child: SingleChildScrollView(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.all(8),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  SizedBox(width: 36, height: 36, child: _disc(_board.current)),
                  const SizedBox(width: 10),
                  Flexible(
                    child: Text(
                      tr2(
                        'دور ${_name(_board.current)}',
                        '${_name(_board.current)}\'s turn',
                      ),
                      key: const ValueKey('turn'),
                      style: const TextStyle(
                        fontSize: 20,
                        fontWeight: FontWeight.w800,
                        color: RC.ink,
                      ),
                    ),
                  ),
                ],
              ),
            ),
            // The board is as wide as the window allows (up to 440), so on a small phone the page scrolls.
            ConstrainedBox(
              constraints: const BoxConstraints(maxWidth: 440),
              child: _boardView(),
            ),
          ],
        ),
      ),
    );
  }

  Widget _boardView({bool small = false}) {
    final winCells = _board.winLine.toSet();
    return Center(
      child: AspectRatio(
        aspectRatio: 1,
        child: Container(
          margin: const EdgeInsets.all(12),
          padding: const EdgeInsets.all(8),
          decoration: BoxDecoration(
            color: const Color(0xFF8AB6F9),
            borderRadius: BorderRadius.circular(20),
            border: Border.all(color: RC.outline, width: 3),
          ),
          child: Row(
            textDirection: TextDirection
                .ltr, // columns always run left to right on the board
            children: [
              for (var c = 0; c < ConnectFourBoard.cols; c++)
                Expanded(
                  child: Semantics(
                    button: !small,
                    label: tr2('العمود ${c + 1}', 'Column ${c + 1}'),
                    child: FocusableTap(
                      key: ValueKey('col$c'),
                      onTap: small
                          ? null
                          : () {
                              final r = _board.drop(c);
                              if (r != DropResult.invalid) setState(() {});
                            },
                      child: Column(
                        children: [
                          for (var r = 0; r < ConnectFourBoard.rows; r++)
                            Expanded(
                              child: Padding(
                                padding: const EdgeInsets.all(3),
                                child: _disc(
                                  _board.grid[r][c],
                                  highlight: winCells.contains((r, c)),
                                ),
                              ),
                            ),
                        ],
                      ),
                    ),
                  ),
                ),
            ],
          ),
        ),
      ),
    );
  }
}
