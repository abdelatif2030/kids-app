import 'dart:math';

import 'package:flutter/material.dart';

import '../journey/ui/kit.dart';
import '../l10n/strings.dart';
import 'game_common.dart';

/// The ten Eastern Arabic (Hindi) digits, index = the Western digit.
const kEasternDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

String westernOf(int n) => '$n';
String easternOf(int n) => kEasternDigits[n];

/// One question: [shown] is the numeral on top, the child picks its twin among [choices].
/// [toEastern] true: Western shown, pick the Eastern one; false: the other way round.
class NumeralRound {
  final int digit;
  final bool toEastern;
  final List<int> choices; // digits; each is rendered in the target script
  const NumeralRound(this.digit, this.toEastern, this.choices);
  String get shown => toEastern ? westernOf(digit) : easternOf(digit);
  String render(int d) => toEastern ? easternOf(d) : westernOf(d);
}

const kNumeralRounds = 5;

/// Younger children use 0-5; ages 5 and 6 the whole 0-9.
int maxDigitForAge(int age) => age <= 4 ? 5 : 9;

List<NumeralRound> makeNumeralRounds(int age, Random r) {
  final pool = [for (var d = 0; d <= maxDigitForAge(age); d++) d];
  final digits = ([...pool]..shuffle(r)).take(kNumeralRounds).toList();
  return [
    for (var i = 0; i < digits.length; i++)
      NumeralRound(
        digits[i],
        i.isEven,
        ([
          digits[i],
          ...(([...pool]..remove(digits[i]))..shuffle(r)).take(2),
        ]..shuffle(r)),
      ),
  ];
}

/// «أرقام عربية وهندية»: ٣ = 3. Wrong choices fade; retry freely; the star is after the set.
class NumeralsGame extends StatefulWidget {
  final String childId;
  final int age;
  final Random? random;
  const NumeralsGame({
    super.key,
    required this.childId,
    required this.age,
    this.random,
  });

  static const gameId = 'numerals';

  @override
  State<NumeralsGame> createState() => _NumeralsGameState();
}

class _NumeralsGameState extends State<NumeralsGame> {
  late final Random _r = widget.random ?? Random();
  late List<NumeralRound> _rounds = makeNumeralRounds(widget.age, _r);
  int _round = 0;
  final Set<int> _faded = {};
  bool _matched = false;

  Future<void> _tap(int d) async {
    if (_matched || _faded.contains(d)) return;
    final round = _rounds[_round];
    if (d != round.digit) {
      setState(() => _faded.add(d));
      return;
    }
    setState(() => _matched = true);
    await Future<void>.delayed(const Duration(milliseconds: 700));
    if (!mounted) return;
    setState(() {
      _round++;
      _faded.clear();
      _matched = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    final title = tr2(
      'أرقام عربية وهندية',
      'Western and Arabic-Indic numerals',
    );
    if (_round >= _rounds.length) {
      return GameScaffold(
        title: title,
        child: GameFinishPanel(
          childId: widget.childId,
          gameId: NumeralsGame.gameId,
          onAgain: () => setState(() {
            _rounds = makeNumeralRounds(widget.age, _r);
            _round = 0;
            _faded.clear();
            _matched = false;
          }),
        ),
      );
    }
    final round = _rounds[_round];
    final ex = (round.digit + 1) % 10;
    return GameScaffold(
      title: title,
      instruction: tr2(
        'جد الرقم الذي يعني نفس الشيء',
        'Find the numeral that means the same',
      ),
      child: SingleChildScrollView(
        child: Column(
          children: [
            // A worked example, always shown, from a different digit than the question.
            Padding(
              padding: const EdgeInsets.all(8),
              child: Directionality(
                textDirection: TextDirection.ltr,
                child: Text(
                  tr2(
                    'مثال:  ${westernOf(ex)}  =  ${easternOf(ex)}',
                    'Example:  ${westernOf(ex)}  =  ${easternOf(ex)}',
                  ),
                  key: const ValueKey('example'),
                  style: const TextStyle(fontSize: 20, color: RC.ink),
                ),
              ),
            ),
            Directionality(
              textDirection: TextDirection.ltr,
              child: Text(
                round.shown,
                key: const ValueKey('shown'),
                style: const TextStyle(
                  fontSize: 120,
                  fontWeight: FontWeight.w900,
                  color: RC.ink,
                ),
              ),
            ),
            Text(
              '${_round + 1} / ${_rounds.length}',
              style: const TextStyle(color: RC.ink),
            ),
            const SizedBox(height: 12),
            Wrap(
              spacing: 16,
              runSpacing: 16,
              alignment: WrapAlignment.center,
              children: [
                for (final d in round.choices)
                  Opacity(
                    opacity: _faded.contains(d) ? 0.25 : 1,
                    child: Semantics(
                      button: true,
                      label: round.render(d),
                      child: GestureDetector(
                        key: ValueKey('num$d'),
                        onTap: () => _tap(d),
                        child: Container(
                          width: 96,
                          height: 96,
                          alignment: Alignment.center,
                          decoration: BoxDecoration(
                            color: d == round.digit && _matched
                                ? RC.mint
                                : Colors.white,
                            borderRadius: BorderRadius.circular(24),
                            border: Border.all(color: RC.outline, width: 4),
                          ),
                          child: Directionality(
                            textDirection: TextDirection.ltr,
                            child: Text(
                              round.render(d),
                              style: const TextStyle(
                                fontSize: 56,
                                fontWeight: FontWeight.w900,
                                color: RC.ink,
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
