import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import '../design/picture_stage.dart';
import 'package:flutter/services.dart';

import '../design/layout.dart';
import '../l10n/strings.dart';

/// «ألعاب ترفيهية»: simple original games in the style of the casual games on a phone. They are only for fun: no
/// stars, no scores kept, no streaks, no timers that push the child, no ads and no links. A round is short and
/// "play again" is always one tap. The session timer set by the parent still counts the time like everywhere else.
class FunGame {
  final String id;
  final String Function() title;
  final String emoji;
  final int minAge;
  final Widget Function() build;
  const FunGame(this.id, this.title, this.emoji, this.minAge, this.build);
}

final List<FunGame> kFunGames = [
  FunGame('whack', () => tr2('اضرب الخلد', 'Whack the mole'), '🐹', 2, () => const WhackMoleGame()),
  FunGame('stars', () => tr2('امسك النجوم', 'Catch the stars'), '⭐', 2, () => const CatchStarsGame()),
  FunGame('xo', () => tr2('إكس أو', 'Tic-tac-toe'), '❌', 4, () => const TicTacToeGame()),
  FunGame('snake', () => tr2('الثعبان', 'Snake'), '🐍', 5, () => const SnakeGame()),
];

List<FunGame> funGamesForAge(int age) => [for (final g in kFunGames) if (age >= g.minAge) g];

class _FunScaffold extends StatelessWidget {
  final String title;
  final Widget child;
  const _FunScaffold({required this.title, required this.child});

  @override
  Widget build(BuildContext context) {
    return GameBackdrop(
      child: Scaffold(
        backgroundColor: Colors.transparent,
        appBar: AppBar(backgroundColor: Colors.transparent, title: Text(title, style: const TextStyle(fontSize: 24, fontWeight: FontWeight.w900))),
        body: SafeArea(child: FitHeight(child: child)),
      ),
    );
  }
}

Widget _againButton(VoidCallback onTap) => FilledButton.icon(
      key: const ValueKey('fun_again'),
      style: FilledButton.styleFrom(minimumSize: const Size(200, 56)),
      onPressed: onTap,
      icon: const Icon(Icons.replay_rounded),
      label: Text(tr2('العب تاني', 'Play again'), style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w900)),
    );

// --- Whack the mole ---------------------------------------------------------------------------------------------

class WhackMoleGame extends StatefulWidget {
  const WhackMoleGame({super.key});

  @override
  State<WhackMoleGame> createState() => _WhackMoleState();
}

class _WhackMoleState extends State<WhackMoleGame> {
  // No countdown and no moving target: the mole waits until it is tapped, and the round ends after a few finds.
  static const _goal = 8;
  final _rnd = math.Random();
  int _found = 0;
  int? _mole;
  bool _running = false;

  @override
  void initState() {
    super.initState();
    _start();
  }

  void _start() {
    setState(() {
      _found = 0;
      _mole = _rnd.nextInt(9);
      _running = true;
    });
  }

  void _hit(int i) {
    if (!_running || _mole != i) return;
    setState(() {
      _found++;
      if (_found >= _goal) {
        _running = false;
        _mole = null;
      } else {
        var next = _rnd.nextInt(9);
        while (next == i) {
          next = _rnd.nextInt(9);
        }
        _mole = next;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return _FunScaffold(
      title: tr2('اضرب الخلد', 'Whack the mole'),
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 420, maxHeight: 640),
          child: Padding(
            padding: const EdgeInsets.all(12),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  _running ? '🐹 $_found / $_goal' : tr2('أحسنت! وجدت كل الخلدان', 'Well done! You found them all'),
                  key: const ValueKey('fun_status'),
                  style: const TextStyle(fontSize: 24, fontWeight: FontWeight.w900),
                ),
                const SizedBox(height: 10),
                Flexible(
                  child: AspectRatio(
                    aspectRatio: 1,
                    child: GridView.count(
                      crossAxisCount: 3,
                      mainAxisSpacing: 10,
                      crossAxisSpacing: 10,
                      physics: const NeverScrollableScrollPhysics(),
                      children: [
                        for (var i = 0; i < 9; i++)
                          InkWell(
                            key: ValueKey('hole_$i'),
                            borderRadius: BorderRadius.circular(40),
                            onTap: () => _hit(i),
                            child: Container(
                              decoration: BoxDecoration(
                                color: const Color(0xFF7A4B2A),
                                borderRadius: BorderRadius.circular(40),
                                border: Border.all(color: const Color(0xFF4A2D18), width: 4),
                              ),
                              alignment: Alignment.center,
                              child: _mole == i ? const FittedBox(child: Text('🐹', style: TextStyle(fontSize: 64))) : null,
                            ),
                          ),
                      ],
                    ),
                  ),
                ),
                const SizedBox(height: 10),
                if (!_running) _againButton(_start),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

// --- Catch the stars --------------------------------------------------------------------------------------------

class CatchStarsGame extends StatefulWidget {
  const CatchStarsGame({super.key});

  @override
  State<CatchStarsGame> createState() => _CatchStarsState();
}

class _Star {
  double x; // 0..1
  double y; // 0..1
  final double speed;
  _Star(this.x, this.y, this.speed);
}

class _CatchStarsState extends State<CatchStarsGame> {
  static const _seconds = 30;
  final _rnd = math.Random();
  Timer? _timer;
  final _stars = <_Star>[];
  double _basket = 0.5;
  int _caught = 0;
  int _ms = 0;
  bool _running = false;

  @override
  void initState() {
    super.initState();
    _start();
  }

  void _start() {
    _timer?.cancel();
    setState(() {
      _stars.clear();
      _caught = 0;
      _ms = 0;
      _running = true;
    });
    _timer = Timer.periodic(const Duration(milliseconds: 33), (t) {
      if (!mounted) return;
      setState(() {
        _ms += 33;
        if (_ms % 825 < 33) _stars.add(_Star(0.08 + 0.84 * _rnd.nextDouble(), -0.05, 0.004 + 0.003 * _rnd.nextDouble()));
        for (final s in _stars) {
          s.y += s.speed;
        }
        // a star at the basket height and within its width is caught; one below the screen just disappears
        _stars.removeWhere((s) {
          if (s.y >= 0.84 && s.y <= 0.95 && (s.x - _basket).abs() < 0.12) {
            _caught++;
            return true;
          }
          return s.y > 1.05;
        });
        if (_ms >= _seconds * 1000) {
          _running = false;
          t.cancel();
        }
      });
    });
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final left = math.max(0, _seconds - _ms ~/ 1000);
    return _FunScaffold(
      title: tr2('امسك النجوم', 'Catch the stars'),
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(8),
            child: Text(
              _running ? '⭐ $_caught   ⏱ $left' : tr2('انتهت اللعبة! مسكت $_caught', 'Done! You caught $_caught'),
              key: const ValueKey('fun_status'),
              style: const TextStyle(fontSize: 24, fontWeight: FontWeight.w900),
            ),
          ),
          Expanded(
            child: LayoutBuilder(
              builder: (context, box) => GestureDetector(
                behavior: HitTestBehavior.opaque,
                onHorizontalDragUpdate: (d) => setState(() => _basket = (_basket + d.delta.dx / box.maxWidth).clamp(0.1, 0.9).toDouble()),
                onTapDown: (d) => setState(() => _basket = (d.localPosition.dx / box.maxWidth).clamp(0.1, 0.9).toDouble()),
                child: Stack(
                  clipBehavior: Clip.hardEdge,
                  children: [
                    for (final s in _stars)
                      Positioned(
                        left: s.x * box.maxWidth - 20,
                        top: s.y * box.maxHeight,
                        child: const Text('⭐', style: TextStyle(fontSize: 36)),
                      ),
                    Positioned(
                      left: _basket * box.maxWidth - 40,
                      top: 0.86 * box.maxHeight,
                      child: const Text('🧺', key: ValueKey('basket'), style: TextStyle(fontSize: 64)),
                    ),
                    if (!_running) Center(child: _againButton(_start)),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

// --- Tic-tac-toe -------------------------------------------------------------------------------------------------

class TicTacToeGame extends StatefulWidget {
  const TicTacToeGame({super.key});

  @override
  State<TicTacToeGame> createState() => _TicTacToeState();
}

class _TicTacToeState extends State<TicTacToeGame> {
  static const _lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],
  ];
  final _rnd = math.Random();
  var _b = List<String>.filled(9, '');
  String? _result; // 'x', 'o' or 'draw'

  /// Whose turn it is: two friends take turns on the same screen (first ❌, then ⭕).
  String _turn = 'x';

  /// Playing alone against the computer instead of with a friend. The computer waits a moment, so the child sees their own
  /// mark first and then the answer.
  bool _vsComputer = false;
  bool _thinking = false;
  Timer? _timer;

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  String? _winner(List<String> b) {
    for (final l in _lines) {
      if (b[l[0]].isNotEmpty && b[l[0]] == b[l[1]] && b[l[1]] == b[l[2]]) return b[l[0]];
    }
    return b.every((c) => c.isNotEmpty) ? 'draw' : null;
  }

  /// The computer is kind: it blocks or wins only some of the time, otherwise it plays a random free square.
  int _computerMove() {
    final free = [for (var i = 0; i < 9; i++) if (_b[i].isEmpty) i];
    if (_rnd.nextInt(10) < 4) {
      for (final who in ['o', 'x']) {
        for (final i in free) {
          final t = [..._b]..[i] = who;
          if (_winner(t) == who) return i;
        }
      }
    }
    return free[_rnd.nextInt(free.length)];
  }

  /// How long the computer waits before answering.
  static const computerDelay = Duration(milliseconds: 800);

  void _tap(int i) {
    if (_result != null || _thinking || _b[i].isNotEmpty) return;
    setState(() {
      _b[i] = _turn;
      _result = _winner(_b);
      if (_result != null) return;
      _turn = _turn == 'x' ? 'o' : 'x';
      if (_vsComputer && _turn == 'o') {
        _thinking = true;
        _timer = Timer(computerDelay, () {
          if (!mounted) return;
          setState(() {
            _thinking = false;
            _b[_computerMove()] = 'o';
            _result = _winner(_b);
            if (_result == null) _turn = 'x';
          });
        });
      }
    });
  }

  void _again() {
    _timer?.cancel();
    setState(() {
      _b = List<String>.filled(9, '');
      _result = null;
      _turn = 'x';
      _thinking = false;
    });
  }

  void _mode(bool computer) {
    if (_vsComputer == computer) return;
    _vsComputer = computer;
    _again();
  }

  @override
  Widget build(BuildContext context) {
    final msg = switch (_result) {
      'x' => _vsComputer ? tr2('فزت! برافو 🎉', 'You won! 🎉') : tr2('فاز ❌ برافو! 🎉', '❌ won! Well done! 🎉'),
      'o' => _vsComputer ? tr2('فاز الكمبيوتر، جرّب تاني!', 'The computer won, try again!') : tr2('فاز ⭕ برافو! 🎉', '⭕ won! Well done! 🎉'),
      'draw' => tr2('تعادل!', "It's a draw!"),
      _ => _thinking
          ? tr2('الكمبيوتر يفكّر… ⭕', 'The computer is thinking… ⭕')
          : (_turn == 'x' ? tr2('دور ❌', "❌'s turn") : tr2('دور ⭕', "⭕'s turn")),
    };
    Widget chip(String key, String label, bool on, VoidCallback onTap) => Padding(
          padding: const EdgeInsets.symmetric(horizontal: 4),
          child: ChoiceChip(key: ValueKey(key), label: Text(label, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w800)), selected: on, onSelected: (_) => onTap()),
        );
    return _FunScaffold(
      title: tr2('إكس أو', 'Tic-tac-toe'),
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 380, maxHeight: 600),
          child: Padding(
            padding: const EdgeInsets.all(12),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Wrap(alignment: WrapAlignment.center, runSpacing: 4, children: [
                  chip('xo_mode_friend', tr2('مع صديق 👫', 'With a friend 👫'), !_vsComputer, () => _mode(false)),
                  chip('xo_mode_computer', tr2('ضد الكمبيوتر 🤖', 'Vs the computer 🤖'), _vsComputer, () => _mode(true)),
                ]),
                const SizedBox(height: 8),
                Text(msg, key: const ValueKey('fun_status'), style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w900)),
                const SizedBox(height: 10),
                Flexible(
                  child: AspectRatio(
                    aspectRatio: 1,
                    child: GridView.count(
                      crossAxisCount: 3,
                      mainAxisSpacing: 8,
                      crossAxisSpacing: 8,
                      physics: const NeverScrollableScrollPhysics(),
                      children: [
                        for (var i = 0; i < 9; i++)
                          InkWell(
                            key: ValueKey('cell_$i'),
                            borderRadius: BorderRadius.circular(18),
                            onTap: () => _tap(i),
                            child: Container(
                              decoration: BoxDecoration(color: Colors.white.withAlpha(230), borderRadius: BorderRadius.circular(18), border: Border.all(color: const Color(0xFF6B45D6), width: 3)),
                              alignment: Alignment.center,
                              child: FittedBox(child: Text(_b[i] == 'x' ? '❌' : (_b[i] == 'o' ? '⭕' : ''), style: const TextStyle(fontSize: 56))),
                            ),
                          ),
                      ],
                    ),
                  ),
                ),
                const SizedBox(height: 10),
                if (_result != null) _againButton(_again),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

// --- Snake -------------------------------------------------------------------------------------------------------

class SnakeGame extends StatefulWidget {
  const SnakeGame({super.key});

  @override
  State<SnakeGame> createState() => _SnakeState();
}

class _SnakeState extends State<SnakeGame> {
  static const _cols = 14, _rows = 14;
  final _rnd = math.Random();
  Timer? _timer;
  late List<math.Point<int>> _snake;
  late math.Point<int> _apple;
  math.Point<int> _dir = const math.Point(1, 0);
  math.Point<int> _next = const math.Point(1, 0);
  int _eaten = 0;
  bool _over = false;
  final _focus = FocusNode();

  @override
  void initState() {
    super.initState();
    _start();
  }

  void _start() {
    _timer?.cancel();
    setState(() {
      _snake = [const math.Point(5, 7), const math.Point(4, 7), const math.Point(3, 7)];
      _dir = const math.Point(1, 0);
      _next = const math.Point(1, 0);
      _eaten = 0;
      _over = false;
      _placeApple();
    });
    _timer = Timer.periodic(const Duration(milliseconds: 260), (_) => _step());
  }

  void _placeApple() {
    final free = [for (var x = 0; x < _cols; x++) for (var y = 0; y < _rows; y++) if (!_snake.contains(math.Point(x, y))) math.Point(x, y)];
    _apple = free[_rnd.nextInt(free.length)];
  }

  void _step() {
    if (!mounted || _over) return;
    setState(() {
      _dir = _next;
      final head = math.Point(_snake.first.x + _dir.x, _snake.first.y + _dir.y);
      // The walls wrap around (no crash into the wall); only biting itself ends the round.
      final h = math.Point((head.x + _cols) % _cols, (head.y + _rows) % _rows);
      if (_snake.contains(h)) {
        _over = true;
        _timer?.cancel();
        return;
      }
      _snake.insert(0, h);
      if (h == _apple) {
        _eaten++;
        _placeApple();
      } else {
        _snake.removeLast();
      }
    });
  }

  void _turn(math.Point<int> d) {
    if (d.x == -_dir.x && d.y == -_dir.y) return; // no U-turn
    _next = d;
  }

  @override
  void dispose() {
    _timer?.cancel();
    _focus.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return _FunScaffold(
      title: tr2('الثعبان', 'Snake'),
      child: KeyboardListener(
        focusNode: _focus,
        autofocus: true,
        onKeyEvent: (e) {
          if (e is! KeyDownEvent) return;
          final k = e.logicalKey;
          if (k == LogicalKeyboardKey.arrowUp) _turn(const math.Point(0, -1));
          if (k == LogicalKeyboardKey.arrowDown) _turn(const math.Point(0, 1));
          if (k == LogicalKeyboardKey.arrowLeft) _turn(const math.Point(-1, 0));
          if (k == LogicalKeyboardKey.arrowRight) _turn(const math.Point(1, 0));
        },
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.all(6),
              child: Text(
                _over ? tr2('انتهت اللعبة! أكلت $_eaten 🍎', 'Done! You ate $_eaten 🍎') : '🍎 $_eaten',
                key: const ValueKey('fun_status'),
                style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w900),
              ),
            ),
            Expanded(
              child: Center(
                child: AspectRatio(
                  aspectRatio: 1,
                  child: GestureDetector(
                    onPanUpdate: (d) {
                      if (d.delta.dx.abs() > d.delta.dy.abs()) {
                        _turn(math.Point(d.delta.dx > 0 ? 1 : -1, 0));
                      } else {
                        _turn(math.Point(0, d.delta.dy > 0 ? 1 : -1));
                      }
                    },
                    child: LayoutBuilder(
                      builder: (context, box) {
                        final cw = box.maxWidth / _cols, ch = box.maxHeight / _rows;
                        return Container(
                          decoration: BoxDecoration(color: const Color(0xFFE9F7D6), borderRadius: BorderRadius.circular(16), border: Border.all(color: const Color(0xFF6B45D6), width: 3)),
                          child: Stack(
                            children: [
                              Positioned(left: _apple.x * cw, top: _apple.y * ch, width: cw, height: ch, child: FittedBox(child: const Text('🍎'))),
                              for (final (i, p) in _snake.indexed)
                                Positioned(
                                  left: p.x * cw + 1,
                                  top: p.y * ch + 1,
                                  width: cw - 2,
                                  height: ch - 2,
                                  child: DecoratedBox(decoration: BoxDecoration(color: i == 0 ? const Color(0xFF2E9E49) : const Color(0xFF59C46B), borderRadius: BorderRadius.circular(8))),
                                ),
                              if (_over) Center(child: _againButton(_start)),
                            ],
                          ),
                        );
                      },
                    ),
                  ),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(6),
              child: Text(tr2('اسحب بإصبعك لتغيّر الاتجاه', 'Swipe to turn'), style: const TextStyle(fontSize: 14)),
            ),
          ],
        ),
      ),
    );
  }
}
