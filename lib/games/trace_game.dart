import 'dart:math';

import 'package:flutter/material.dart';

import '../l10n/strings.dart';
import '../literacy/letters_data.dart';
import '../literacy/tracing.dart';
import 'game_common.dart';

const kTraceLetters = 3;

/// The letters offered for tracing: the first, simplest ones in the app's own order.
List<ArabicLetter> traceLetters(Random r) =>
    ([...kArabicLetters.take(10)]..shuffle(r)).take(kTraceLetters).toList();

/// «تتبّع الحرف»: trace three letters. The guide only says "start on the right"; the
/// order of strokes inside each letter is NOT taught (it has not been validated).
/// A letter counts when the child really drew along it; it is never graded on accuracy.
class TraceGame extends StatefulWidget {
  final String childId;
  final Random? random;
  const TraceGame({super.key, required this.childId, this.random});

  static const gameId = 'trace_letters';

  @override
  State<TraceGame> createState() => _TraceGameState();
}

class _TraceGameState extends State<TraceGame> {
  late final Random _r = widget.random ?? Random();
  late List<ArabicLetter> _letters = traceLetters(_r);
  int _i = 0;

  @override
  Widget build(BuildContext context) {
    final title = tr2('تتبّع الحرف', 'Trace the letter');
    if (_i >= _letters.length) {
      return GameScaffold(
        title: title,
        child: GameFinishPanel(
          childId: widget.childId,
          gameId: TraceGame.gameId,
          onAgain: () => setState(() {
            _letters = traceLetters(_r);
            _i = 0;
          }),
        ),
      );
    }
    return GameScaffold(
      title: tr2(
        '$title  ${_i + 1} / ${_letters.length}',
        '$title  ${_i + 1} / ${_letters.length}',
      ),
      child: TracingView(
        key: ValueKey('trace$_i'),
        letter: _letters[_i],
        showDirectionCue: true,
        onDone: () => setState(() => _i++),
      ),
    );
  }
}
