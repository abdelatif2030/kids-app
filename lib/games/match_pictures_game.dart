import '../design/focusable_tap.dart';
import 'dart:async';
import 'dart:math';

import 'package:flutter/material.dart';

import '../journey/ui/kit.dart';
import '../l10n/strings.dart';
import 'game_common.dart';

/// What happened when a card was chosen.
enum PickResult { ignored, first, match, mismatch }

/// The rules of "match identical pictures", without any widget: easy to test.
/// Two cards are chosen at a time. A mismatch leaves both open until
/// [closeMismatch] is called, and every other tap is ignored meanwhile, so a
/// burst of taps cannot break the state.
class MatchBoard {
  final List<String> cards;
  final Set<int> matched = {};
  final List<int> open = [];
  int mismatches = 0;
  MatchBoard(this.cards);

  /// Pairs by age: 3 -> 3 pairs ... 6 -> 6 pairs.
  static int pairsForAge(int age) => (age.clamp(3, 6)).toInt();

  static const symbols = ['🐶', '🐱', '🐸', '🐰', '🦁', '🐟', '🍎', '🚗'];

  factory MatchBoard.forAge(int age, {Random? random}) {
    final r = random ?? Random();
    final pool = [...symbols]..shuffle(r);
    final picked = pool.take(pairsForAge(age)).toList();
    return MatchBoard([...picked, ...picked]..shuffle(r));
  }

  bool get complete => matched.length == cards.length;
  bool get waitingToClose =>
      open.length == 2 && cards[open[0]] != cards[open[1]];
  bool isOpen(int i) => open.contains(i) || matched.contains(i);

  PickResult pick(int i) {
    if (i < 0 || i >= cards.length) return PickResult.ignored;
    if (waitingToClose || matched.contains(i) || open.contains(i) || complete) {
      return PickResult.ignored;
    }
    open.add(i);
    if (open.length == 1) return PickResult.first;
    if (cards[open[0]] == cards[open[1]]) {
      matched
        ..add(open[0])
        ..add(open[1]);
      open.clear();
      return PickResult.match;
    }
    mismatches++;
    return PickResult.mismatch;
  }

  void closeMismatch() {
    if (waitingToClose) open.clear();
  }

  /// Two cards of one unmatched pair, for a gentle hint.
  List<int>? hint() {
    for (var i = 0; i < cards.length; i++) {
      if (matched.contains(i)) continue;
      for (var j = i + 1; j < cards.length; j++) {
        if (!matched.contains(j) && cards[i] == cards[j]) return [i, j];
      }
    }
    return null;
  }
}

class MatchPicturesGame extends StatefulWidget {
  final String childId;
  final int age;
  final Random? random;
  const MatchPicturesGame({
    super.key,
    required this.childId,
    required this.age,
    this.random,
  });

  static const gameId = 'match_pictures';

  @override
  State<MatchPicturesGame> createState() => _MatchPicturesGameState();
}

class _MatchPicturesGameState extends State<MatchPicturesGame> {
  late MatchBoard _board = MatchBoard.forAge(widget.age, random: widget.random);
  Timer? _closeTimer;
  List<int> _hint = const [];

  @override
  void dispose() {
    _closeTimer?.cancel();
    super.dispose();
  }

  void _tap(int i) {
    final r = _board.pick(i);
    if (r == PickResult.ignored) return;
    setState(() => _hint = const []);
    if (r == PickResult.mismatch) {
      // Both cards stay visible for a moment, then turn back. No message, no penalty.
      _closeTimer?.cancel();
      _closeTimer = Timer(const Duration(milliseconds: 900), () {
        if (!mounted) return;
        setState(_board.closeMismatch);
      });
    }
    setState(() {});
  }

  void _showHint() {
    final h = _board.hint();
    if (h == null) return;
    setState(() => _hint = h);
    Timer(const Duration(milliseconds: 1500), () {
      if (mounted) setState(() => _hint = const []);
    });
  }

  @override
  Widget build(BuildContext context) {
    final title = tr2('طابق الصور المتشابهة', 'Match identical pictures');
    if (_board.complete) {
      return GameScaffold(
        title: title,
        child: GameFinishPanel(
          childId: widget.childId,
          gameId: MatchPicturesGame.gameId,
          onAgain: () => setState(
            () => _board = MatchBoard.forAge(widget.age, random: widget.random),
          ),
        ),
      );
    }
    final cols = _board.cards.length <= 6
        ? 3
        : (_board.cards.length <= 8 ? 4 : (_board.cards.length <= 10 ? 5 : 4));
    return GameScaffold(
      title: title,
      instruction: tr2(
        'اقلب بطاقتين وابحث عن الصورتين المتشابهتين',
        'Turn two cards and find the two that look the same',
      ),
      child: Column(
        children: [
          Expanded(
            child: Center(
              child: Padding(
                padding: const EdgeInsets.all(16),
                child: GridView.count(
                  shrinkWrap: true,
                  crossAxisCount: cols,
                  mainAxisSpacing: 10,
                  crossAxisSpacing: 10,
                  children: [
                    for (var i = 0; i < _board.cards.length; i++)
                      Semantics(
                        button: true,
                        label: _board.isOpen(i)
                            ? _board.cards[i]
                            : tr2('بطاقة مغلقة', 'Closed card'),
                        child: FocusableTap(
                          key: ValueKey('card$i'),
                          onTap: () => _tap(i),
                          child: AnimatedContainer(
                            duration: const Duration(milliseconds: 150),
                            decoration: BoxDecoration(
                              color: _board.matched.contains(i)
                                  ? RC.mint
                                  : (_board.isOpen(i)
                                        ? Colors.white
                                        : RC.lavender),
                              borderRadius: BorderRadius.circular(20),
                              border: Border.all(
                                color: _hint.contains(i)
                                    ? Colors.amber
                                    : RC.outline,
                                width: _hint.contains(i) ? 6 : 3,
                              ),
                            ),
                            alignment: Alignment.center,
                            child: FittedBox(
                              child: Padding(
                                padding: const EdgeInsets.all(8),
                                child: Text(
                                  _board.isOpen(i) ? _board.cards[i] : '❔',
                                  style: const TextStyle(fontSize: 48),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                  ],
                ),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(bottom: 12),
            child: TextButton.icon(
              onPressed: _showHint,
              icon: const Icon(Icons.lightbulb_outline_rounded),
              label: Text(
                tr2('تلميح', 'Hint'),
                style: const TextStyle(fontSize: 18),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
