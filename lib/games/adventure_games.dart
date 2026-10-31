import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../design/focusable_tap.dart';
import '../design/motion_system.dart';
import '../design/tokens.dart';
import '../design/worlds.dart';
import '../journey/ui/kit.dart';
import '../l10n/strings.dart';
import 'adventure_logic.dart';
import '../design/brand.dart';
import 'game_art.dart';
import 'game_common.dart';

// Six playable games. Rules for all of them: wrong tries only fade or bounce back (never a loss screen), the star comes
// once, from GameFinishPanel (first completion), and every sound goes through GameCue so the shared audio engine can
// play it. Pure rules are in adventure_logic.dart and tested there.

Widget _msg(String text, {Key? key}) => AnimatedSwitcher(
      duration: Motion.button,
      child: Text(text, key: key ?? ValueKey(text), textAlign: TextAlign.center, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w800, color: RC.ink)),
    );

Widget _roundDots(int done, int total) => Row(mainAxisSize: MainAxisSize.min, children: [
      for (var i = 0; i < total; i++)
        Container(
          margin: const EdgeInsets.symmetric(horizontal: 3),
          width: 12,
          height: 12,
          decoration: BoxDecoration(shape: BoxShape.circle, color: i < done ? DS.primary : DS.border),
        ),
    ]);

// ============================================================================
// 1. Snakes and ladders: «السلالم والزلاجات»
// ============================================================================

class SnakesLaddersGame extends StatefulWidget {
  final String childId;
  final int age;
  final Random? random;
  const SnakesLaddersGame({super.key, required this.childId, required this.age, this.random});
  static const gameId = 'snakes_ladders';

  @override
  State<SnakesLaddersGame> createState() => _SnakesLaddersState();
}

class _SnakesLaddersState extends State<SnakesLaddersGame> {
  late final Random _r = widget.random ?? Random();
  late SnakesGame _g = SnakesGame(SnakesBoard.forAge(widget.age), _r);
  int _dice = 0;
  String _text = '';
  bool _busy = false;

  String _describe(SnakesMove m, String who) {
    if (m.ladder) return tr2('$who صعد السلم!', '$who climbed the ladder!');
    if (m.slide) return tr2('$who انزلق قليلاً. لا بأس!', '$who slid down a little. No problem!');
    return '';
  }

  Future<void> _roll() async {
    if (_busy || _g.childFinished) return;
    setState(() => _busy = true);
    GameCue.play('roll');
    final d = _g.roll();
    setState(() => _dice = d);
    await Future<void>.delayed(const Duration(milliseconds: 350));
    if (!mounted) return;
    final m = _g.move(0, d);
    if (m.ladder) GameCue.play('ladder');
    if (m.slide) GameCue.play('slide');
    setState(() => _text = _describe(m, tr2('أنت', 'You')));
    if (_g.childFinished) {
      setState(() => _busy = false);
      return;
    }
    await Future<void>.delayed(const Duration(milliseconds: 700));
    if (!mounted) return;
    final f = _g.friendTurn();
    if (f != null) setState(() => _text = '${_text.isEmpty ? '' : '$_text  '}${tr2('نور رمت', 'Nour rolled')} ${f.landed - f.from}. ${_describe(f, tr2('نور', 'Nour'))}');
    setState(() => _busy = false);
  }

  ({int c, int r}) _xy(int cell) {
    final n = _g.board.size;
    final row = (cell - 1) ~/ n;
    var col = (cell - 1) % n;
    if (row.isOdd) col = n - 1 - col;
    return (c: col, r: n - 1 - row);
  }

  @override
  Widget build(BuildContext context) {
    final title = tr2('السلالم والزلاجات', 'Ladders and slides');
    if (_g.childFinished) {
      return GameScaffold(
        world: RWorld.story,
        title: title,
        child: GameFinishPanel(
          childId: widget.childId,
          gameId: SnakesLaddersGame.gameId,
          onAgain: () => setState(() {
            _g = SnakesGame(SnakesBoard.forAge(widget.age), _r);
            _dice = 0;
            _text = '';
          }),
        ),
      );
    }
    final n = _g.board.size;
    return GameScaffold(
      world: RWorld.story,
      title: title,
      instruction: tr2('ارمِ النرد وصل إلى النهاية! السلالم تصعد بك.', 'Roll the dice and reach the end! Ladders take you up.'),
      confirmLeave: _g.pos[0] > 1,
      child: LayoutBuilder(builder: (context, box) {
        final wide = box.maxWidth > box.maxHeight * 1.2;
        final side = min(wide ? box.maxHeight : box.maxWidth, wide ? box.maxWidth * 0.6 : box.maxHeight * 0.6) - 8;
        final cs = side / n;
        Widget board = SizedBox(
          key: const ValueKey('snakes_board'),
          width: cs * n,
          height: cs * n,
          child: Stack(children: [
            for (var cell = 1; cell <= _g.board.last; cell++)
              Positioned(
                left: _xy(cell).c * cs,
                top: _xy(cell).r * cs,
                width: cs,
                height: cs,
                child: Container(
                  margin: const EdgeInsets.all(1.5),
                  decoration: BoxDecoration(
                    color: cell == _g.board.last ? DS.highlight : ((_xy(cell).c + _xy(cell).r).isEven ? const Color(0xFFEDE4FF) : const Color(0xFFD9C8FF)),
                    borderRadius: BorderRadius.circular(8),
                  ),
                  alignment: cell == _g.board.last ? Alignment.center : Alignment.topLeft,
                  padding: const EdgeInsets.all(2),
                  child: cell == _g.board.last ? Align(alignment: Alignment.center, child: FinishFlagArt(size: cs * 0.62)) : Text('$cell', style: TextStyle(fontSize: cs * 0.22, color: RC.ink, fontWeight: FontWeight.w700)),
                ),
              ),
            Positioned.fill(child: IgnorePointer(child: CustomPaint(painter: _SnakesPainter(_g.board, (c) => Offset((_xy(c).c + 0.5) * cs, (_xy(c).r + 0.5) * cs))))),
            for (final p in [0, 1])
              AnimatedPositioned(
                key: ValueKey('token_$p'),
                duration: Motion.page,
                curve: Motion.ease,
                left: _xy(_g.pos[p]).c * cs + (p == 0 ? cs * 0.05 : cs * 0.45),
                top: _xy(_g.pos[p]).r * cs + cs * 0.38,
                width: cs * 0.5,
                height: cs * 0.5,
                child: Semantics(
                  label: p == 0 ? tr2('قطعتك', 'Your piece') : tr2('قطعة نور', "Nour's piece"),
                  child: p == 0
                      ? ChildTokenArt(size: cs * 0.5)
                      : Container(
                          decoration: BoxDecoration(shape: BoxShape.circle, color: Colors.white, border: Border.all(color: DS.pink, width: 2.5), boxShadow: DS.softShadow),
                          clipBehavior: Clip.antiAlias,
                          alignment: Alignment.bottomCenter,
                          child: CharacterImage(BrandCharacter.nourHead, height: cs * 0.46),
                        ),
                ),
              ),
          ]),
        );
        Widget controls = Column(mainAxisSize: MainAxisSize.min, children: [
          AnimatedIconWrapper(key: const ValueKey('dice'), effect: _busy ? IconEffect.wiggle : IconEffect.none, child: DiceArt(_dice, size: 84)),
          const SizedBox(height: 10),
          AnimatedActionButton(key: const ValueKey('roll'), label: tr2('ارمِ النرد', 'Roll the dice'), icon: Icons.casino_rounded, onPressed: _busy ? null : _roll),
          const SizedBox(height: 8),
          SizedBox(width: 260, child: _msg(_text.isEmpty ? tr2('دورك!', 'Your turn!') : _text)),
          Text(tr2('أنت: ${_g.pos[0]}   نور: ${_g.pos[1]}', 'You: ${_g.pos[0]}   Nour: ${_g.pos[1]}'), style: const TextStyle(color: RC.ink)),
        ]);
        return wide
            ? Row(mainAxisAlignment: MainAxisAlignment.center, children: [board, const SizedBox(width: 16), controls])
            : SingleChildScrollView(child: Column(children: [board, const SizedBox(height: 8), controls]));
      }),
    );
  }
}

class _SnakesPainter extends CustomPainter {
  final SnakesBoard board;
  final Offset Function(int cell) center;
  const _SnakesPainter(this.board, this.center);

  @override
  void paint(Canvas canvas, Size size) {
    final up = Paint()..color = const Color(0xFF8D5A2B)..strokeWidth = 5..strokeCap = StrokeCap.round;
    for (final e in board.ladders.entries) {
      final a = center(e.key), b = center(e.value);
      final n = (b - a);
      final o = Offset(-n.dy, n.dx) / n.distance * 6;
      canvas.drawLine(a + o, b + o, up);
      canvas.drawLine(a - o, b - o, up);
      for (var t = 0.15; t < 1; t += 0.2) {
        canvas.drawLine(a + n * t + o, a + n * t - o, up..strokeWidth = 3);
      }
      up.strokeWidth = 5;
    }
    final sl = Paint()..color = const Color(0xFF2E9E5B)..strokeWidth = 7..strokeCap = StrokeCap.round..style = PaintingStyle.stroke;
    for (final e in board.slides.entries) {
      final a = center(e.key), b = center(e.value);
      final mid = (a + b) / 2 + Offset((b - a).dy, -(b - a).dx) * 0.25;
      canvas.drawPath(Path()..moveTo(a.dx, a.dy)..quadraticBezierTo(mid.dx, mid.dy, b.dx, b.dy), sl);
      canvas.drawCircle(a, 7, Paint()..color = const Color(0xFF2E9E5B));
    }
  }

  @override
  bool shouldRepaint(covariant _SnakesPainter old) => false;
}

// ============================================================================
// 2. Jigsaw: «تركيب الصورة»
// ============================================================================

/// The picture of the puzzle, drawn in code: sky, sun, hills, a house and a flower.
class _JigsawArt extends CustomPainter {
  final int rows, cols, index; // index -1 = the whole picture
  const _JigsawArt(this.rows, this.cols, this.index);

  @override
  void paint(Canvas canvas, Size piece) {
    final w = index < 0 ? piece.width : piece.width * cols;
    final h = index < 0 ? piece.height : piece.height * rows;
    if (index >= 0) {
      canvas.clipRect(Offset.zero & piece);
      canvas.translate(-(index % cols) * piece.width, -(index ~/ cols) * piece.height);
    }
    canvas.drawRect(Rect.fromLTWH(0, 0, w, h), Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF9AD8FF), Color(0xFFE9F7FF)]).createShader(Rect.fromLTWH(0, 0, w, h)));
    canvas.drawCircle(Offset(w * 0.8, h * 0.2), h * 0.12, Paint()..color = const Color(0xFFFFC83D));
    canvas.drawPath(Path()..moveTo(0, h)..lineTo(0, h * 0.68)..quadraticBezierTo(w * 0.3, h * 0.5, w * 0.6, h * 0.68)..quadraticBezierTo(w * 0.85, h * 0.78, w, h * 0.62)..lineTo(w, h)..close(), Paint()..color = const Color(0xFF8BD450));
    canvas.drawRect(Rect.fromLTWH(w * 0.2, h * 0.52, w * 0.28, h * 0.22), Paint()..color = const Color(0xFFFFE0B2));
    canvas.drawPath(Path()..moveTo(w * 0.17, h * 0.52)..lineTo(w * 0.34, h * 0.36)..lineTo(w * 0.51, h * 0.52)..close(), Paint()..color = const Color(0xFFD64545));
    canvas.drawRect(Rect.fromLTWH(w * 0.31, h * 0.62, w * 0.06, h * 0.12), Paint()..color = const Color(0xFF8D5A2B));
    canvas.drawLine(Offset(w * 0.68, h * 0.9), Offset(w * 0.68, h * 0.72), Paint()..color = const Color(0xFF2E7D32)..strokeWidth = w * 0.015);
    for (var i = 0; i < 5; i++) {
      final a = i * 2 * pi / 5;
      canvas.drawCircle(Offset(w * 0.68 + cos(a) * w * 0.035, h * 0.7 + sin(a) * w * 0.035), w * 0.025, Paint()..color = const Color(0xFFFF6B9D));
    }
    canvas.drawCircle(Offset(w * 0.68, h * 0.7), w * 0.02, Paint()..color = const Color(0xFFFFC83D));
  }

  @override
  bool shouldRepaint(covariant _JigsawArt old) => false;
}

class JigsawGame extends StatefulWidget {
  final String childId;
  final int age;
  final Random? random;
  const JigsawGame({super.key, required this.childId, required this.age, this.random});
  static const gameId = 'jigsaw';

  @override
  State<JigsawGame> createState() => _JigsawState();
}

class _JigsawState extends State<JigsawGame> {
  late final Random _r = widget.random ?? Random();
  late JigsawPuzzle _p = _make();
  int? _selected;
  String _text = '';

  JigsawPuzzle _make() {
    final (rows, cols) = jigsawGrid(widget.age);
    return JigsawPuzzle(rows, cols, _r);
  }

  void _try(int piece, int slot) {
    final ok = _p.place(piece, slot);
    GameCue.play(ok ? 'place' : 'gentle');
    setState(() {
      _selected = null;
      _text = ok ? tr2('ممتاز! القطعة في مكانها', 'Great! It fits') : tr2('جرّب مكاناً آخر', 'Try another place');
    });
  }

  @override
  Widget build(BuildContext context) {
    final title = tr2('تركيب الصورة', 'Puzzle picture');
    if (_p.complete) {
      return GameScaffold(
        world: RWorld.forest,
        title: title,
        child: GameFinishPanel(childId: widget.childId, gameId: JigsawGame.gameId, onAgain: () => setState(() {
              _p = _make();
              _text = '';
            })),
      );
    }
    return GameScaffold(
      world: RWorld.forest,
      title: title,
      instruction: tr2('اسحب كل قطعة إلى مكانها، أو اضغط القطعة ثم المكان.', 'Drag each piece to its place, or tap a piece and then a place.'),
      confirmLeave: _p.placed.isNotEmpty,
      child: LayoutBuilder(builder: (context, box) {
        final wide = box.maxWidth > box.maxHeight * 1.2;
        // The biggest piece size where the board and the tray both fit on screen without scrolling.
        double pw = 64;
        for (var w = 240.0; w >= 64; w -= 8) {
          final h = w * 0.75;
          final trayWidth = wide ? box.maxWidth - _p.cols * w - 40 : box.maxWidth - 16;
          final perRow = max(1, (trayWidth / (w + 8)).floor());
          final trayRows = (_p.total / perRow).ceil();
          final boardOk = _p.cols * w <= (wide ? box.maxWidth * 0.55 : box.maxWidth - 16);
          final needH = wide ? max(_p.rows * h + 8, trayRows * (h + 8) + 90) : _p.rows * h + trayRows * (h + 8) + 100;
          if (boardOk && needH <= box.maxHeight) {
            pw = w;
            break;
          }
        }
        final ph = pw * 0.75;
        Widget slotView(int s) {
          final done = _p.placed.contains(s);
          return DragTarget<int>(
            onWillAcceptWithDetails: (_) => true,
            onAcceptWithDetails: (d) => _try(d.data, s),
            builder: (context, cand, _) => FocusableTap(
              key: ValueKey('slot_$s'),
              onTap: _selected == null || done ? null : () => _try(_selected!, s),
              radius: 6,
              focusRing: false,
              semanticLabel: tr2('مكان ${s + 1}', 'Place ${s + 1}'),
              child: Container(
                width: pw,
                height: ph,
                decoration: BoxDecoration(border: Border.all(color: cand.isNotEmpty || (_selected != null && !done) ? DS.primary : DS.border, width: 2), color: Colors.white.withAlpha(120)),
                child: done ? CustomPaint(painter: _JigsawArt(_p.rows, _p.cols, s)) : null,
              ),
            ),
          );
        }

        Widget board = Column(mainAxisSize: MainAxisSize.min, key: const ValueKey('jigsaw_board'), children: [
          for (var r = 0; r < _p.rows; r++) Row(mainAxisSize: MainAxisSize.min, children: [for (var c = 0; c < _p.cols; c++) slotView(r * _p.cols + c)]),
        ]);
        Widget piece(int id, {bool lifted = false}) => Container(
              width: pw,
              height: ph,
              decoration: BoxDecoration(border: Border.all(color: _selected == id ? DS.highlight : Colors.white, width: 3), boxShadow: lifted ? DS.glow : DS.softShadow),
              child: CustomPaint(painter: _JigsawArt(_p.rows, _p.cols, id)),
            );
        Widget tray = Wrap(key: const ValueKey('jigsaw_tray'), spacing: 8, runSpacing: 8, alignment: WrapAlignment.center, children: [
          for (final id in _p.tray)
            Draggable<int>(
              data: id,
              dragAnchorStrategy: pointerDragAnchorStrategy,
              feedback: Transform.translate(offset: Offset(-pw / 2, -ph * 0.9), child: Material(color: Colors.transparent, child: piece(id, lifted: true))),
              childWhenDragging: Opacity(opacity: 0.25, child: piece(id)),
              child: FocusableTap(key: ValueKey('piece_$id'), onTap: () => setState(() => _selected = _selected == id ? null : id), radius: 4, semanticLabel: tr2('قطعة', 'Piece'), child: piece(id)),
            ),
        ]);
        final info = Column(mainAxisSize: MainAxisSize.min, children: [_msg(_text.isEmpty ? tr2('ركّب الصورة!', 'Build the picture!') : _text), const SizedBox(height: 4), _roundDots(_p.placed.length, _p.total)]);
        return wide
            ? Row(mainAxisAlignment: MainAxisAlignment.center, children: [board, const SizedBox(width: 20), Flexible(child: SingleChildScrollView(child: Column(mainAxisSize: MainAxisSize.min, children: [tray, const SizedBox(height: 8), info])))])
            : SingleChildScrollView(child: Column(children: [board, const SizedBox(height: 10), tray, const SizedBox(height: 8), info]));
      }),
    );
  }
}

// ============================================================================
// 3. Maze: «الفأر والجبن»
// ============================================================================

class MazeGame extends StatefulWidget {
  final String childId;
  final int age;
  final Random? random;
  const MazeGame({super.key, required this.childId, required this.age, this.random});
  static const gameId = 'maze';

  @override
  State<MazeGame> createState() => _MazeState();
}

class _MazeState extends State<MazeGame> {
  late final Random _r = widget.random ?? Random();
  late List<int> _sizes = mazeSizes(widget.age);
  int _round = 0;
  late Maze _maze = Maze.generate(_sizes[0], _r);
  int _x = 0, _y = 0;
  bool _hint = false;
  bool _won = false;
  final _focus = FocusNode();

  @override
  void dispose() {
    _focus.dispose();
    super.dispose();
  }

  Future<void> _go(int d) async {
    if (_won) return;
    if (!_maze.canMove(_x, _y, d)) {
      GameCue.play('gentle');
      return;
    }
    setState(() {
      _x += const [0, 1, 0, -1][d];
      _y += const [-1, 0, 1, 0][d];
      _hint = false;
    });
    if (_x == _maze.size - 1 && _y == _maze.size - 1) {
      GameCue.play('found');
      setState(() => _won = true);
      await Future<void>.delayed(const Duration(milliseconds: 900));
      if (!mounted) return;
      setState(() {
        _round++;
        _won = false;
        _x = 0;
        _y = 0;
        if (_round < _sizes.length) _maze = Maze.generate(_sizes[_round], _r);
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final title = tr2('الفأر والجبن', 'Mouse and cheese');
    if (_round >= _sizes.length) {
      return GameScaffold(
        world: RWorld.forest,
        title: title,
        child: GameFinishPanel(childId: widget.childId, gameId: MazeGame.gameId, onAgain: () => setState(() {
              _round = 0;
              _sizes = mazeSizes(widget.age);
              _maze = Maze.generate(_sizes[0], _r);
            })),
      );
    }
    final path = _maze.solve();
    final cur = path.indexOf((_x, _y));
    final from = (_x, _y);
    final solveFromHere = _hint ? _pathFrom(from) : const <(int, int)>[];
    return GameScaffold(
      world: RWorld.forest,
      title: title,
      instruction: tr2('ساعد الفأر ليصل إلى الجبنة', 'Help the mouse reach the cheese'),
      confirmLeave: _round > 0 || _x + _y > 0,
      child: Focus(
        focusNode: _focus,
        autofocus: true,
        onKeyEvent: (_, e) {
          if (e is! KeyDownEvent) return KeyEventResult.ignored;
          final d = {LogicalKeyboardKey.arrowUp: 0, LogicalKeyboardKey.arrowRight: 1, LogicalKeyboardKey.arrowDown: 2, LogicalKeyboardKey.arrowLeft: 3}[e.logicalKey];
          if (d == null) return KeyEventResult.ignored;
          _go(d);
          return KeyEventResult.handled;
        },
        child: LayoutBuilder(builder: (context, box) {
          final wide = box.maxWidth > box.maxHeight * 1.2;
          final side = min(wide ? box.maxHeight : box.maxWidth, wide ? box.maxWidth * 0.55 : box.maxHeight * 0.52) - 12;
          final mcs = side / _maze.size;
          Widget board = SizedBox(
            key: const ValueKey('maze_board'),
            width: side,
            height: side,
            child: Stack(children: [
              Positioned.fill(child: CustomPaint(painter: _MazePainter(_maze, solveFromHere))),
              Positioned(left: (_maze.size - 1) * mcs + mcs * 0.12, top: (_maze.size - 1) * mcs + mcs * 0.12, child: CheeseArt(size: mcs * 0.76)),
              AnimatedPositioned(key: const ValueKey('mouse'), duration: Motion.button, curve: Motion.ease, left: _x * mcs + mcs * 0.1, top: _y * mcs + mcs * 0.1, child: MouseArt(size: mcs * 0.8)),
            ]),
          );
          Widget pad = _DPad(onMove: _go, onHint: () => setState(() => _hint = !_hint), steps: path.length - 1 - (cur < 0 ? 0 : cur));
          final info = Column(mainAxisSize: MainAxisSize.min, children: [_won ? _msg(tr2('وصلت! أحسنت!', 'You made it! Well done!')) : _msg(tr2('اتّجه نحو الجبنة', 'Head for the cheese')), _roundDots(_round, _sizes.length)]);
          return wide
              ? Row(mainAxisAlignment: MainAxisAlignment.center, children: [board, const SizedBox(width: 20), Flexible(child: SingleChildScrollView(child: Column(mainAxisSize: MainAxisSize.min, children: [info, const SizedBox(height: 8), pad])))])
              : SingleChildScrollView(child: Column(children: [board, info, pad]));
        }),
      ),
    );
  }

  List<(int, int)> _pathFrom((int, int) start) {
    // shortest way from the current cell to the finish
    final all = _maze.solve();
    final i = all.indexOf(start);
    if (i >= 0) return all.sublist(i);
    return const [];
  }
}

class _DPad extends StatelessWidget {
  final void Function(int dir) onMove;
  final VoidCallback onHint;
  final int steps;
  const _DPad({required this.onMove, required this.onHint, required this.steps});

  @override
  Widget build(BuildContext context) {
    Widget b(String k, IconData i, int d, String label) => Padding(
          padding: const EdgeInsets.all(3),
          child: PressFeedback(
            child: Material(
              color: DS.primary,
              borderRadius: BorderRadius.circular(18),
              child: InkWell(
                key: ValueKey(k),
                borderRadius: BorderRadius.circular(18),
                onTap: () => onMove(d),
                child: Semantics(label: label, button: true, excludeSemantics: true, child: SizedBox(width: 64, height: 64, child: Icon(i, color: Colors.white, size: 38))),
              ),
            ),
          ),
        );
    return Column(mainAxisSize: MainAxisSize.min, children: [
      b('maze_up', Icons.keyboard_arrow_up_rounded, 0, tr2('أعلى', 'Up')),
      Row(mainAxisSize: MainAxisSize.min, children: [
        b('maze_left', Icons.keyboard_arrow_left_rounded, 3, tr2('يسار', 'Left')),
        b('maze_down', Icons.keyboard_arrow_down_rounded, 2, tr2('أسفل', 'Down')),
        b('maze_right', Icons.keyboard_arrow_right_rounded, 1, tr2('يمين', 'Right')),
      ]),
      Padding(padding: const EdgeInsets.only(top: 6), child: FilledButton.tonalIcon(key: const ValueKey('maze_hint'), onPressed: onHint, icon: const Icon(Icons.lightbulb_rounded), label: Text(tr2('ساعدني', 'Show me the way')))),
    ]);
  }
}

class _MazePainter extends CustomPainter {
  final Maze maze;
  final List<(int, int)> hint;
  const _MazePainter(this.maze, this.hint);

  @override
  void paint(Canvas canvas, Size s) {
    final n = maze.size;
    final cs = s.width / n;
    canvas.drawRRect(RRect.fromRectAndRadius(Offset.zero & s, const Radius.circular(14)), Paint()..shader = const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFFF7F1FF), Color(0xFFE6D9FF)]).createShader(Offset.zero & s));
    final wall = Paint()..color = DS.primary..strokeWidth = max(3, cs * 0.08)..strokeCap = StrokeCap.round;
    for (var y = 0; y < n; y++) {
      for (var x = 0; x < n; x++) {
        final o = maze.open[y][x];
        final l = x * cs, t = y * cs;
        if (!o[0]) canvas.drawLine(Offset(l, t), Offset(l + cs, t), wall);
        if (!o[3]) canvas.drawLine(Offset(l, t), Offset(l, t + cs), wall);
        if (y == n - 1 && !o[2]) canvas.drawLine(Offset(l, t + cs), Offset(l + cs, t + cs), wall);
        if (x == n - 1 && !o[1]) canvas.drawLine(Offset(l + cs, t), Offset(l + cs, t + cs), wall);
      }
    }
    for (final (x, y) in hint) {
      canvas.drawCircle(Offset((x + 0.5) * cs, (y + 0.5) * cs), cs * 0.12, Paint()..color = DS.highlight);
    }
  }

  @override
  bool shouldRepaint(covariant _MazePainter old) => old.hint.length != hint.length || old.maze != maze;
}

// ============================================================================
// 4. Treasure hunt: «كنز الجزيرة»
// ============================================================================

String _markName(String id) => switch (id) {
      'tree' => tr2('الشجرة', 'the tree'),
      'rock' => tr2('الصخرة', 'the rock'),
      'house' => tr2('البيت', 'the house'),
      'pond' => tr2('البركة', 'the pond'),
      _ => tr2('العلم', 'the flag'),
    };

String clueText(Clue c) {
  final m = _markName(c.landmark.id);
  return switch (c.kind) {
    ClueKind.nextTo => tr2('الكنز بجانب $m', 'The treasure is next to $m'),
    ClueKind.sameRow => tr2('الكنز على نفس الصف مع $m', 'The treasure is in the same row as $m'),
    ClueKind.sameColumn => tr2('الكنز في نفس العمود مع $m', 'The treasure is in the same column as $m'),
    ClueKind.above => tr2('الكنز فوق $m مباشرة', 'The treasure is right above $m'),
    ClueKind.below => tr2('الكنز تحت $m مباشرة', 'The treasure is right below $m'),
    ClueKind.leftOf => tr2('الكنز على يسار $m مباشرة', 'The treasure is right to the left of $m'),
    ClueKind.rightOf => tr2('الكنز على يمين $m مباشرة', 'The treasure is right to the right of $m'),
  };
}

class TreasureHuntGame extends StatefulWidget {
  final String childId;
  final int age;
  final Random? random;
  const TreasureHuntGame({super.key, required this.childId, required this.age, this.random});
  static const gameId = 'treasure_hunt';

  @override
  State<TreasureHuntGame> createState() => _TreasureState();
}

class _TreasureState extends State<TreasureHuntGame> {
  static const rounds = 3;
  late final Random _r = widget.random ?? Random();
  int _round = 0;
  late TreasureMap _map = _newMap();
  final Set<int> _faded = {};
  bool _found = false;
  String _text = '';

  TreasureMap _newMap() => TreasureMap.generate(widget.age <= 4 ? 3 : 4, widget.age <= 4 ? 2 : 3, _r);

  Future<void> _tap(int cell) async {
    if (_found || _faded.contains(cell)) return;
    if (_map.landmarks.any((l) => l.cell == cell)) {
      GameCue.play('gentle');
      setState(() => _text = tr2('هذا مكان معروف، الكنز ليس تحته. ابحث في مكان آخر', 'That is a landmark, the treasure is not there. Look somewhere else'));
      return;
    }
    if (cell != _map.treasure) {
      GameCue.play('gentle');
      setState(() {
        _faded.add(cell);
        _text = tr2('ليس هنا. اقرأ الدليل مرة أخرى!', 'Not here. Read the clue again!');
      });
      return;
    }
    GameCue.play('found');
    setState(() {
      _found = true;
      _text = tr2('وجدت الكنز!', 'You found the treasure!');
    });
    await Future<void>.delayed(const Duration(milliseconds: 1000));
    if (!mounted) return;
    setState(() {
      _round++;
      _found = false;
      _faded.clear();
      _text = '';
      if (_round < rounds) _map = _newMap();
    });
  }

  @override
  Widget build(BuildContext context) {
    final title = tr2('كنز الجزيرة', 'Island treasure');
    if (_round >= rounds) {
      return GameScaffold(
        world: RWorld.ocean,
        title: title,
        child: GameFinishPanel(childId: widget.childId, gameId: TreasureHuntGame.gameId, onAgain: () => setState(() {
              _round = 0;
              _map = _newMap();
              _faded.clear();
              _found = false;
              _text = '';
            })),
      );
    }
    final n = _map.cols;
    return GameScaffold(
      world: RWorld.ocean,
      title: title,
      instruction: tr2('اقرأ الأدلة وابحث عن الكنز على الخريطة', 'Read the clues and find the treasure on the map'),
      confirmLeave: _round > 0,
      child: LayoutBuilder(builder: (context, box) {
        final wide = box.maxWidth > box.maxHeight * 1.2;
        final side = min(wide ? box.maxHeight : box.maxWidth - 32, wide ? box.maxWidth * 0.5 : box.maxHeight * 0.55) - 8;
        final cs = side / n;
        Widget board = SizedBox(
          key: const ValueKey('treasure_board'),
          width: cs * n,
          height: cs * n,
          child: Column(children: [
            for (var r = 0; r < n; r++)
              Row(children: [
                for (var c = 0; c < n; c++)
                  () {
                    final cell = r * n + c;
                    final lm = _map.landmarks.where((l) => l.cell == cell).firstOrNull;
                    final fade = _faded.contains(cell);
                    return FocusableTap(
                      key: ValueKey('tcell_$cell'),
                      onTap: () => _tap(cell),
                      radius: 12,
                      semanticLabel: lm != null ? _markName(lm.id) : tr2('خانة ${cell + 1}', 'Square ${cell + 1}'),
                      child: AnimatedContainer(
                        duration: Motion.button,
                        width: cs - 4,
                        height: cs - 4,
                        margin: const EdgeInsets.all(2),
                        alignment: Alignment.center,
                        decoration: BoxDecoration(color: (r + c).isEven ? const Color(0xFFF6E3B4) : const Color(0xFFEBD49A), borderRadius: BorderRadius.circular(12)),
                        child: Opacity(
                          opacity: fade ? 0.25 : 1,
                          child: lm != null ? LandmarkArt(lm.id, size: cs * 0.72) : (_found && cell == _map.treasure ? GemArt(size: cs * 0.7) : (fade ? Container(width: cs * 0.12, height: cs * 0.12, decoration: const BoxDecoration(color: Color(0xFFB59A5B), shape: BoxShape.circle)) : MysteryArt(size: cs * 0.68))),
                        ),
                      ),
                    );
                  }(),
              ]),
          ]),
        );
        final clues = Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          for (final (i, c) in _map.clues.indexed)
            Container(
              key: ValueKey('clue_$i'),
              margin: const EdgeInsets.symmetric(vertical: 4),
              padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), boxShadow: DS.softShadow),
              child: Row(children: [LandmarkArt(c.landmark.id, size: 38), const SizedBox(width: 8), Expanded(child: Text(clueText(c), style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: RC.ink)))]),
            ),
          const SizedBox(height: 6),
          _msg(_text.isEmpty ? tr2('أين الكنز؟', 'Where is the treasure?') : _text),
          _roundDots(_round, rounds),
        ]);
        return wide
            ? Row(mainAxisAlignment: MainAxisAlignment.center, children: [board, const SizedBox(width: 20), SizedBox(width: 320, child: SingleChildScrollView(child: clues))])
            : SingleChildScrollView(padding: const EdgeInsets.symmetric(horizontal: 16), child: Column(children: [board, clues]));
      }),
    );
  }
}

// ============================================================================
// 5. Connect the dots: «وصّل النقاط»
// ============================================================================

String _shapeName(String id) => switch (id) {
      'house' => tr2('بيت', 'a house'),
      'star' => tr2('نجمة', 'a star'),
      'fish' => tr2('سمكة', 'a fish'),
      'boat' => tr2('مركب', 'a boat'),
      'heart' => tr2('قلب', 'a heart'),
      _ => tr2('شجرة', 'a tree'),
    };

class ConnectDotsGame extends StatefulWidget {
  final String childId;
  final int age;
  final Random? random;
  const ConnectDotsGame({super.key, required this.childId, required this.age, this.random});
  static const gameId = 'connect_dots';

  @override
  State<ConnectDotsGame> createState() => _DotsState();
}

class _DotsState extends State<ConnectDotsGame> {
  late final Random _r = widget.random ?? Random();
  late List<DotShape> _shapes = dotShapesForAge(widget.age, _r);
  int _i = 0;
  late DotsGame _g = DotsGame(_shapes[0]);
  String _text = '';

  Future<void> _tap(int index) async {
    final ok = _g.tap(index);
    if (!ok) {
      GameCue.play('gentle');
      setState(() => _text = tr2('جرّب الرقم ${_g.next + 1}', 'Try number ${_g.next + 1}'));
      return;
    }
    GameCue.play('place');
    setState(() => _text = '');
    if (_g.complete) {
      GameCue.play('found');
      setState(() => _text = tr2('رسمت ${_shapeName(_g.shape.id)}!', 'You drew ${_shapeName(_g.shape.id)}!'));
      await Future<void>.delayed(const Duration(milliseconds: 1200));
      if (!mounted) return;
      setState(() {
        _i++;
        _text = '';
        if (_i < _shapes.length) _g = DotsGame(_shapes[_i]);
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final title = tr2('وصّل النقاط', 'Connect the dots');
    if (_i >= _shapes.length) {
      return GameScaffold(
        world: RWorld.space,
        title: title,
        child: GameFinishPanel(childId: widget.childId, gameId: ConnectDotsGame.gameId, onAgain: () => setState(() {
              _shapes = dotShapesForAge(widget.age, _r);
              _i = 0;
              _g = DotsGame(_shapes[0]);
            })),
      );
    }
    return GameScaffold(
      world: RWorld.space,
      title: title,
      instruction: tr2('اضغط النقاط بالترتيب: 1 ثم 2 ثم 3...', 'Tap the dots in order: 1, then 2, then 3...'),
      confirmLeave: _i > 0 || _g.next > 0,
      child: LayoutBuilder(builder: (context, box) {
        final wide = box.maxWidth > box.maxHeight * 1.3;
        // room for the message under the board grows with the text size (two lines at large text)
        final reserve = 28 + 2 * MediaQuery.textScalerOf(context).scale(22);
        final side = max(120.0, (wide ? box.maxHeight : min(box.maxWidth, box.maxHeight - reserve)) - 8);
        final shape = _g.shape;
        // Dots never overlap: the shapes keep every pair at least 17% of the board apart and a dot is 15% wide.
        final dot = max(40.0, min(54.0, side * 0.15));
        final m = dot / 2 + 3; // inner margin: a dot at the edge of the shape stays fully inside the board
        final inner = side - 2 * m;
        final board = SizedBox(
          key: const ValueKey('dots_board'),
          width: side,
          height: side,
          child: Stack(children: [
            Positioned.fill(child: CustomPaint(painter: _DotsPainter(shape, _g.next, _g.complete, m))),
            for (final (k, (x, y)) in shape.points.indexed)
              Positioned(
                left: m + x * inner - dot / 2,
                top: m + y * inner - dot / 2,
                width: dot,
                height: dot,
                child: FocusableTap(
                  key: ValueKey('dot_$k'),
                  onTap: () => _tap(k),
                  radius: dot / 2,
                  semanticLabel: tr2('نقطة ${k + 1}', 'Dot ${k + 1}'),
                  child: Container(
                    alignment: Alignment.center,
                    decoration: BoxDecoration(shape: BoxShape.circle, color: k < _g.next ? DS.primary : (k == _g.next ? DS.highlight : Colors.white), border: Border.all(color: DS.primary, width: 2), boxShadow: DS.softShadow),
                    child: Directionality(textDirection: TextDirection.ltr, child: Text('${k + 1}', style: TextStyle(fontWeight: FontWeight.w900, fontSize: dot * 0.42, color: k < _g.next ? Colors.white : RC.ink))),
                  ),
                ),
              ),
          ]),
        );
        final info = _msg(_text.isEmpty ? tr2('الشكل ${_i + 1} من ${_shapes.length}', 'Shape ${_i + 1} of ${_shapes.length}') : _text);
        return wide
            ? Row(mainAxisAlignment: MainAxisAlignment.center, children: [board, const SizedBox(width: 20), SizedBox(width: 240, child: info)])
            : Column(mainAxisAlignment: MainAxisAlignment.center, children: [board, info]);
      }),
    );
  }
}

class _DotsPainter extends CustomPainter {
  final DotShape shape;
  final int next;
  final bool complete;
  final double margin;
  const _DotsPainter(this.shape, this.next, this.complete, this.margin);

  @override
  void paint(Canvas canvas, Size s) {
    Offset p(int i) => Offset(margin + shape.points[i].$1 * (s.width - 2 * margin), margin + shape.points[i].$2 * (s.height - 2 * margin));
    final pts = [for (var i = 0; i < shape.points.length; i++) p(i)];
    if (complete) {
      final path = Path()..addPolygon(pts, true);
      canvas.drawPath(path, Paint()..color = DS.secondary.withAlpha(110));
    }
    final line = Paint()..color = DS.primary..strokeWidth = 6..strokeCap = StrokeCap.round;
    for (var i = 0; i + 1 < next; i++) {
      canvas.drawLine(pts[i], pts[i + 1], line);
    }
    if (complete && shape.closed) canvas.drawLine(pts.last, pts.first, line);
  }

  @override
  bool shouldRepaint(covariant _DotsPainter old) => old.next != next || old.complete != complete || old.shape != shape || old.margin != margin;
}

// ============================================================================
// 6. Animal habitats: «أين يعيش؟»
// ============================================================================

String _homeName(Habitat h) => switch (h) {
      Habitat.farm => tr2('المزرعة', 'The farm'),
      Habitat.sea => tr2('البحر', 'The sea'),
      Habitat.forest => tr2('الغابة', 'The forest'),
      Habitat.sky => tr2('السماء', 'The sky'),
      Habitat.desert => tr2('الصحراء', 'The desert'),
    };

class AnimalHabitatsGame extends StatefulWidget {
  final String childId;
  final int age;
  final Random? random;
  const AnimalHabitatsGame({super.key, required this.childId, required this.age, this.random});
  static const gameId = 'animal_habitats';

  @override
  State<AnimalHabitatsGame> createState() => _HabitatsState();
}

class _HabitatsState extends State<AnimalHabitatsGame> {
  static const rounds = 2;
  late final Random _r = widget.random ?? Random();
  int _round = 0;
  late HabitatRound _h = makeHabitatRound(widget.age, _r);
  Animal? _selected;
  String _text = '';

  void _place(Animal a, Habitat home) {
    final ok = _h.place(a, home);
    GameCue.play(ok ? 'place' : 'gentle');
    setState(() {
      _selected = null;
      _text = ok ? tr2('صحيح! ${a.ar} يعيش في ${_homeName(home)}', 'Right! The ${a.en.toLowerCase()} lives in ${_homeName(home).toLowerCase()}') : tr2('جرّب بيتاً آخر', 'Try another home');
    });
    if (_h.complete) {
      Future<void>.delayed(const Duration(milliseconds: 900), () {
        if (!mounted) return;
        setState(() {
          _round++;
          _text = '';
          if (_round < rounds) _h = makeHabitatRound(widget.age, _r);
        });
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final title = tr2('أين يعيش؟', 'Where does it live?');
    if (_round >= rounds) {
      return GameScaffold(
        world: RWorld.forest,
        title: title,
        child: GameFinishPanel(childId: widget.childId, gameId: AnimalHabitatsGame.gameId, onAgain: () => setState(() {
              _round = 0;
              _h = makeHabitatRound(widget.age, _r);
              _text = '';
            })),
      );
    }
    final remaining = [for (final a in _h.animals) if (!_h.placed.contains(a.id)) a];
    final homeW = ((min(MediaQuery.sizeOf(context).width, 760) - 24 - 12 * (_h.homes.length - 1)) / _h.homes.length).clamp(92.0, 170.0);
    return GameScaffold(
      world: RWorld.forest,
      title: title,
      instruction: tr2('اسحب الحيوان إلى بيته، أو اضغطه ثم اضغط بيته', 'Drag the animal to its home, or tap it and then tap its home'),
      confirmLeave: _round > 0 || _h.placed.isNotEmpty,
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(12),
        child: Column(children: [
          Wrap(key: const ValueKey('animals'), spacing: 10, runSpacing: 10, alignment: WrapAlignment.center, children: [
            for (final a in remaining)
              Draggable<Animal>(
                data: a,
                feedback: Material(color: Colors.transparent, child: AnimalArt(a.id, size: 72)),
                dragAnchorStrategy: pointerDragAnchorStrategy,
                childWhenDragging: Opacity(opacity: 0.3, child: _animalChip(a, false)),
                child: FocusableTap(key: ValueKey('animal_${a.id}'), onTap: () => setState(() => _selected = _selected?.id == a.id ? null : a), radius: 20, semanticLabel: tr2(a.ar, a.en), child: _animalChip(a, _selected?.id == a.id)),
              ),
          ]),
          const SizedBox(height: 14),
          Wrap(spacing: 12, runSpacing: 12, alignment: WrapAlignment.center, children: [
            for (final home in _h.homes)
              DragTarget<Animal>(
                onWillAcceptWithDetails: (_) => true,
                onAcceptWithDetails: (d) => _place(d.data, home),
                builder: (context, cand, _) => FocusableTap(
                  key: ValueKey('home_${home.name}'),
                  onTap: _selected == null ? null : () => _place(_selected!, home),
                  radius: 24,
                  semanticLabel: _homeName(home),
                  child: Container(
                    width: homeW,
                    padding: const EdgeInsets.all(10),
                    decoration: BoxDecoration(
                      gradient: LinearGradient(colors: [DS.primarySoft, cand.isNotEmpty || _selected != null ? DS.secondary.withAlpha(120) : DS.primarySoft]),
                      borderRadius: BorderRadius.circular(24),
                      border: Border.all(color: cand.isNotEmpty ? DS.highlight : DS.border, width: 3),
                      boxShadow: DS.softShadow,
                    ),
                    child: Column(children: [
                      HabitatArt(home, size: 46),
                      Text(_homeName(home), style: const TextStyle(fontWeight: FontWeight.w900, color: RC.ink)),
                      const SizedBox(height: 4),
                      Wrap(alignment: WrapAlignment.center, children: [for (final a in _h.animals) if (_h.placed.contains(a.id) && a.home == home) AnimalArt(a.id, size: 30)]),
                    ]),
                  ),
                ),
              ),
          ]),
          const SizedBox(height: 12),
          _msg(_text.isEmpty ? tr2('أين يعيش كل حيوان؟', 'Where does each animal live?') : _text),
          _roundDots(_round, rounds),
        ]),
      ),
    );
  }

  Widget _animalChip(Animal a, bool on) => Container(
        width: 88,
        padding: const EdgeInsets.all(6),
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(20), border: Border.all(color: on ? DS.highlight : DS.border, width: on ? 4 : 1), boxShadow: DS.softShadow),
        child: Column(children: [AnimalArt(a.id, size: 48), Text(tr2(a.ar, a.en), maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontWeight: FontWeight.w800, color: RC.ink))]),
      );
}
