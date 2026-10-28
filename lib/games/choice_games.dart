import 'dart:math';

import 'package:flutter/material.dart';

import '../journey/ui/kit.dart';
import '../l10n/strings.dart';
import '../library/vocab.dart';
import 'game_common.dart';

/// One question of a pick-the-right-one game: something to look at, and the choices.
class ChoiceRound {
  final String display; // emojis shown big (may be several, shown in order)
  final List<String> options;
  final int correct;
  final String? prompt; // overrides the game's instruction for this round
  final String? ref; // what the round is about (a vocabulary id), for records
  const ChoiceRound(this.display, this.options, this.correct, {this.prompt, this.ref});
}

const kChoiceRounds = 5;

// --- generators (pure, seeded by the caller's Random) --------------------------

/// Vocabulary emojis by category that suit [age].
Map<String, List<String>> _emojiByCategory(int age) {
  final out = <String, List<String>>{};
  for (final v in kVocab) {
    if (age < v.minAge || age > v.maxAge) continue;
    out.putIfAbsent(v.category, () => []).add(v.emoji);
  }
  for (final k in out.keys.toList()) {
    out[k] = out[k]!.toSet().toList(); // no repeated picture
  }
  return out;
}

const kOddCategories = ['animals', 'food', 'transport', 'nature', 'home'];

/// «ما المختلف؟»: three pictures of one kind and one of another.
List<ChoiceRound> makeOddOneOut(int age, Random r) {
  final by = _emojiByCategory(age);
  final cats = [for (final c in kOddCategories) if ((by[c]?.length ?? 0) >= 4) c];
  final rounds = <ChoiceRound>[];
  while (rounds.length < kChoiceRounds) {
    final pair = ([...cats]..shuffle(r)).take(2).toList();
    final same = ([...by[pair[0]]!]..shuffle(r)).take(3).toList();
    final odd = by[pair[1]]![r.nextInt(by[pair[1]]!.length)];
    final all = [...same, odd]..shuffle(r);
    rounds.add(ChoiceRound('', all, all.indexOf(odd)));
  }
  return rounds;
}

const kPatternSymbols = ['🔴', '🔵', '🟡', '🟢', '⭐', '🔺', '🟣', '🟠'];

/// «أكمل النمط»: a repeating pattern with its last picture missing. Age 4: AB, age 5: AAB or ABB, age 6: ABC.
List<ChoiceRound> makePatterns(int age, Random r) {
  final rounds = <ChoiceRound>[];
  for (var i = 0; i < kChoiceRounds; i++) {
    final syms = ([...kPatternSymbols]..shuffle(r)).take(4).toList();
    final unit = switch (age) {
      <= 4 => [0, 1],
      5 => r.nextBool() ? [0, 0, 1] : [0, 1, 1],
      _ => [0, 1, 2],
    };
    final len = unit.length * 2 + (unit.length - 1); // two full units, then all but the last of the third
    final seq = [for (var k = 0; k < len + 1; k++) syms[unit[k % unit.length]]];
    final answer = seq.last;
    final shown = seq.sublist(0, seq.length - 1);
    final wrong = [for (final s in syms) if (s != answer) s]..shuffle(r);
    final opts = [answer, ...wrong.take(2)]..shuffle(r);
    rounds.add(ChoiceRound(shown.join(' '), opts, opts.indexOf(answer)));
  }
  return rounds;
}

int maxCountForAge(int age) => age <= 3 ? 5 : (age == 4 ? 7 : 9);

/// «أكثر وأقل»: two groups of the same picture, pick the group with more (or fewer).
/// Options are the two groups; the display is the question.
List<ChoiceRound> makeCompare(int age, Random r) {
  final rounds = <ChoiceRound>[];
  final pics = ['🍎', '⭐', '🐟', '🎈', '🍪', '🚗'];
  for (var i = 0; i < kChoiceRounds; i++) {
    final a = 1 + r.nextInt(maxCountForAge(age));
    var b = 1 + r.nextInt(maxCountForAge(age));
    while (b == a) {
      b = 1 + r.nextInt(maxCountForAge(age));
    }
    final pic = pics[r.nextInt(pics.length)];
    final more = i.isEven;
    final opts = [pic * a, pic * b];
    final correct = more ? (a > b ? 0 : 1) : (a < b ? 0 : 1);
    rounds.add(ChoiceRound('', opts, correct, prompt: more ? 'more' : 'fewer'));
  }
  return rounds;
}

/// A sorting item: its picture and which of two groups it belongs to.
class SortSet {
  final List<String> groupTitles; // two titles, e.g. animals / food
  final List<String> groupEmojis; // one emoji per group
  final List<ChoiceRound> rounds; // one per item
  const SortSet(this.groupTitles, this.groupEmojis, this.rounds);
}

String _catTitle(String id) => switch (id) {
      'animals' => tr2('حيوانات', 'Animals'),
      'food' => tr2('طعام', 'Food'),
      'transport' => tr2('مواصلات', 'Transport'),
      'nature' => tr2('طبيعة', 'Nature'),
      _ => tr2('أشياء في البيت', 'Things at home'),
    };

const _catEmoji = {'animals': '🐾', 'food': '🍎', 'transport': '🚌', 'nature': '🌳', 'home': '🏠'};

/// «رتّب في مجموعات»: six pictures, each goes to one of two groups.
SortSet makeSort(int age, Random r) {
  final by = _emojiByCategory(age);
  final cats = [for (final c in kOddCategories) if ((by[c]?.length ?? 0) >= 3) c];
  final pair = ([...cats]..shuffle(r)).take(2).toList();
  final items = <(String, int)>[];
  for (var g = 0; g < 2; g++) {
    for (final e in ([...by[pair[g]]!]..shuffle(r)).take(3)) {
      items.add((e, g));
    }
  }
  items.shuffle(r);
  final titles = [for (final c in pair) _catTitle(c)];
  return SortSet(titles, [for (final c in pair) _catEmoji[c]!], [
    for (final it in items) ChoiceRound(it.$1, [for (final c in pair) c], it.$2),
  ]);
}

// --- the game widget -------------------------------------------------------------

typedef RoundMaker = List<ChoiceRound> Function(Random r);

/// Shows one round at a time. A wrong choice only fades; the right one moves on; the star comes after
/// the last round (and only the first time). No failure screen, no score.
class ChoiceGame extends StatefulWidget {
  final String childId;
  final String gameId;
  final String title;
  final String instruction;
  final RoundMaker make;
  final Random? random;

  /// How to draw the choices: emojis ('pictures'), or labelled group buttons ('groups').
  final List<String>? groupTitles;
  final List<String>? groupEmojis;

  /// Called when a round is answered: the round and whether it was right on the first try.
  final void Function(ChoiceRound round, bool firstTry)? onRoundDone;
  const ChoiceGame({
    super.key,
    required this.childId,
    required this.gameId,
    required this.title,
    required this.instruction,
    required this.make,
    this.random,
    this.groupTitles,
    this.groupEmojis,
    this.onRoundDone,
  });

  @override
  State<ChoiceGame> createState() => _ChoiceGameState();
}

class _ChoiceGameState extends State<ChoiceGame> {
  late final Random _r = widget.random ?? Random();
  late List<ChoiceRound> _rounds = widget.make(_r);
  int _i = 0;
  final Set<int> _faded = {};
  bool _right = false;
  bool _missedThisRound = false;

  Future<void> _tap(int o) async {
    if (_right || _faded.contains(o)) return;
    if (o != _rounds[_i].correct) {
      _missedThisRound = true;
      setState(() => _faded.add(o));
      return;
    }
    widget.onRoundDone?.call(_rounds[_i], !_missedThisRound);
    _missedThisRound = false;
    setState(() => _right = true);
    await Future<void>.delayed(const Duration(milliseconds: 650));
    if (!mounted) return;
    setState(() {
      _i++;
      _faded.clear();
      _right = false;
    });
  }

  String _promptFor(ChoiceRound r) => switch (r.prompt) {
        'more' => tr2('أي مجموعة فيها أكثر؟', 'Which group has more?'),
        'fewer' => tr2('أي مجموعة فيها أقل؟', 'Which group has fewer?'),
        null => widget.instruction,
        final other => other,
      };

  @override
  Widget build(BuildContext context) {
    if (_i >= _rounds.length) {
      return GameScaffold(
        title: widget.title,
        child: GameFinishPanel(
          childId: widget.childId,
          gameId: widget.gameId,
          onAgain: () => setState(() {
            _rounds = widget.make(_r);
            _i = 0;
            _faded.clear();
            _right = false;
          }),
        ),
      );
    }
    final round = _rounds[_i];
    final groups = widget.groupTitles != null;
    return GameScaffold(
      title: widget.title,
      instruction: _promptFor(round),
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            if (round.display.isNotEmpty)
              Directionality(
                textDirection: TextDirection.ltr,
                child: Text(round.display, key: const ValueKey('display'), textAlign: TextAlign.center, style: TextStyle(fontSize: groups ? 96 : 52)),
              ),
            Text('${_i + 1} / ${_rounds.length}', style: const TextStyle(color: RC.ink)),
            const SizedBox(height: 16),
            Wrap(
              spacing: 14,
              runSpacing: 14,
              alignment: WrapAlignment.center,
              children: [
                for (var o = 0; o < round.options.length; o++)
                  Opacity(
                    opacity: _faded.contains(o) ? 0.25 : 1,
                    child: Semantics(
                      button: true,
                      label: groups ? widget.groupTitles![o] : round.options[o],
                      child: GestureDetector(
                        key: ValueKey('opt$o'),
                        onTap: () => _tap(o),
                        child: Container(
                          constraints: BoxConstraints(minWidth: 96, minHeight: 96, maxWidth: groups ? 180 : 300),
                          padding: const EdgeInsets.all(10),
                          alignment: Alignment.center,
                          decoration: BoxDecoration(
                            color: _right && o == round.correct ? RC.mint : Colors.white,
                            borderRadius: BorderRadius.circular(24),
                            border: Border.all(color: RC.outline, width: 4),
                          ),
                          child: groups
                              ? Column(mainAxisSize: MainAxisSize.min, children: [
                                  Text(widget.groupEmojis![o], style: const TextStyle(fontSize: 44)),
                                  Text(widget.groupTitles![o], style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w900, color: RC.ink)),
                                ])
                              : Directionality(
                                  textDirection: TextDirection.ltr,
                                  child: Text(round.options[o], textAlign: TextAlign.center, style: TextStyle(fontSize: round.options[o].runes.length > 3 ? 30 : 56)),
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

// --- the four games ------------------------------------------------------------------

class OddOneOutGame extends StatelessWidget {
  final String childId;
  final int age;
  final Random? random;
  const OddOneOutGame({super.key, required this.childId, required this.age, this.random});
  static const gameId = 'odd_one_out';

  @override
  Widget build(BuildContext context) => ChoiceGame(
        childId: childId,
        gameId: gameId,
        title: tr2('ما المختلف؟', 'Which is different?'),
        instruction: tr2('ثلاث صور متشابهة وواحدة مختلفة. اختر المختلفة.', 'Three pictures belong together and one does not. Pick the different one.'),
        make: (r) => makeOddOneOut(age, r),
        random: random,
      );
}

class PatternGame extends StatelessWidget {
  final String childId;
  final int age;
  final Random? random;
  const PatternGame({super.key, required this.childId, required this.age, this.random});
  static const gameId = 'pattern';

  @override
  Widget build(BuildContext context) => ChoiceGame(
        childId: childId,
        gameId: gameId,
        title: tr2('أكمل النمط', 'Complete the pattern'),
        instruction: tr2('ما الشكل الذي يأتي بعد ذلك؟', 'Which one comes next?'),
        make: (r) => makePatterns(age, r),
        random: random,
      );
}

class CompareGame extends StatelessWidget {
  final String childId;
  final int age;
  final Random? random;
  const CompareGame({super.key, required this.childId, required this.age, this.random});
  static const gameId = 'compare';

  @override
  Widget build(BuildContext context) => ChoiceGame(
        childId: childId,
        gameId: gameId,
        title: tr2('أكثر وأقل', 'More and fewer'),
        instruction: tr2('قارن بين المجموعتين.', 'Compare the two groups.'),
        make: (r) => makeCompare(age, r),
        random: random,
      );
}

class SortGame extends StatefulWidget {
  final String childId;
  final int age;
  final Random? random;
  const SortGame({super.key, required this.childId, required this.age, this.random});
  static const gameId = 'sort_groups';

  @override
  State<SortGame> createState() => _SortGameState();
}

class _SortGameState extends State<SortGame> {
  late final Random _r = widget.random ?? Random();
  late final SortSet _set = makeSort(widget.age, _r);

  @override
  Widget build(BuildContext context) => ChoiceGame(
        key: ValueKey(_set),
        childId: widget.childId,
        gameId: SortGame.gameId,
        title: tr2('رتّب في مجموعات', 'Sort into groups'),
        instruction: tr2('إلى أي مجموعة تنتمي هذه الصورة؟', 'Which group does this picture belong to?'),
        make: (r) => [..._set.rounds]..shuffle(r),
        groupTitles: _set.groupTitles,
        groupEmojis: _set.groupEmojis,
        random: _r,
      );
}
