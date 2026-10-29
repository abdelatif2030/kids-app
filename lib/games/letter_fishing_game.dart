import '../design/focusable_tap.dart';
import 'dart:math';

import 'package:flutter/material.dart';

import '../journey/ui/kit.dart';
import '../l10n/strings.dart';
import '../literacy/letters_data.dart';
import '../media/audio_button.dart';
import '../media/audio_manifest.dart';
import 'game_common.dart';

/// One target letter and the letters in the pond (the target among them).
class FishingRound {
  final String target;
  final List<String> choices;
  const FishingRound(this.target, this.choices);
}

const kFishingRounds = 5;
const kFishingChoices = 4;

/// The letters used for a language and age. Arabic follows the app's own letter
/// order; English uses A-Z. Younger children get fewer letters.
List<String> fishingPool(String lang, int age) {
  if (lang == 'en') {
    final all = [for (var c = 65; c <= 90; c++) String.fromCharCode(c)];
    return all.take(age <= 4 ? 10 : (age == 5 ? 16 : 26)).toList();
  }
  final all = [for (final l in kArabicLetters) l.letter];
  return all.take(age <= 4 ? 10 : (age == 5 ? 18 : 28)).toList();
}

List<FishingRound> makeFishingRounds(String lang, int age, Random random) {
  final pool = fishingPool(lang, age);
  final targets = ([...pool]..shuffle(random)).take(kFishingRounds).toList();
  return [
    for (final t in targets)
      FishingRound(
        t,
        ([
          t,
          ...(([
            ...pool,
          ]..remove(t))..shuffle(random)).take(kFishingChoices - 1),
        ]..shuffle(random)),
      ),
  ];
}

/// The manifest id of the letter's NAME audio, so the button tells the truth about its source.
String? fishingAudioId(String lang, String letter) {
  if (lang == 'en') return 'en.letter.$letter.name';
  final l = letterOf(letter);
  return l == null ? null : letterAudioId(l, 'name');
}

/// «صيد الحروف»: catch the fish that carries the target letter. A wrong fish only
/// fades; there is no failure screen. The star comes after the whole set.
class LetterFishingGame extends StatefulWidget {
  final String childId;
  final int age;

  /// 'ar', 'en', or 'both' (the child's learning language). 'both' uses Arabic.
  final String lang;
  final Random? random;
  const LetterFishingGame({
    super.key,
    required this.childId,
    required this.age,
    this.lang = 'ar',
    this.random,
  });

  static const gameId = 'letter_fishing';

  @override
  State<LetterFishingGame> createState() => _LetterFishingGameState();
}

class _LetterFishingGameState extends State<LetterFishingGame> {
  late final Random _r = widget.random ?? Random();
  String get _lang => widget.lang == 'en' ? 'en' : 'ar';
  late List<FishingRound> _rounds = makeFishingRounds(_lang, widget.age, _r);
  int _round = 0;
  final Set<String> _faded = {};
  bool _caught = false;

  bool get _done => _round >= _rounds.length;

  Future<void> _tap(String letter) async {
    if (_caught || _faded.contains(letter)) return;
    if (letter != _rounds[_round].target) {
      setState(() => _faded.add(letter));
      return;
    }
    setState(() => _caught = true);
    await Future<void>.delayed(const Duration(milliseconds: 700));
    if (!mounted) return;
    setState(() {
      _round++;
      _faded.clear();
      _caught = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    final title = tr2('صيد الحروف', 'Letter fishing');
    if (_done) {
      return GameScaffold(
        title: title,
        child: GameFinishPanel(
          childId: widget.childId,
          gameId: LetterFishingGame.gameId,
          onAgain: () => setState(() {
            _rounds = makeFishingRounds(_lang, widget.age, _r);
            _round = 0;
            _faded.clear();
            _caught = false;
          }),
        ),
      );
    }
    final round = _rounds[_round];
    final audioId = fishingAudioId(_lang, round.target);
    return GameScaffold(
      confirmLeave: _round > 0,
      title: title,
      instruction: tr2(
        'اصطد السمكة التي عليها هذا الحرف',
        'Catch the fish with this letter',
      ),
      child: Column(
        children: [
          Text(
            round.target,
            key: const ValueKey('target'),
            style: const TextStyle(
              fontSize: 96,
              fontWeight: FontWeight.w900,
              color: RC.ink,
            ),
          ),
          if (audioId != null) ...[
            AudioButton(assetId: audioId, filled: false),
            const AudioNotice(),
          ],
          Text(
            '${_round + 1} / ${_rounds.length}',
            style: const TextStyle(color: RC.ink),
          ), // progress, not stars
          const SizedBox(height: 8),
          Expanded(
            child: Container(
              margin: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                gradient: const LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: [Color(0xFFBFE6FF), Color(0xFF6FB7F0)],
                ),
                borderRadius: BorderRadius.circular(28),
                border: Border.all(color: RC.outline, width: 4),
              ),
              child: Center(
                child: Wrap(
                  spacing: 16,
                  runSpacing: 16,
                  alignment: WrapAlignment.center,
                  children: [
                    for (final c in round.choices)
                      Opacity(
                        opacity: _faded.contains(c) ? 0.25 : 1,
                        child: Semantics(
                          button: true,
                          label: tr2(
                            'سمكة عليها حرف $c',
                            'Fish with the letter $c',
                          ),
                          child: FocusableTap(
                            key: ValueKey('fish$c'),
                            onTap: () => _tap(c),
                            child: Container(
                              width: 104,
                              height: 80,
                              alignment: Alignment.center,
                              decoration: BoxDecoration(
                                color: c == round.target && _caught
                                    ? RC.mint
                                    : Colors.orange.shade200,
                                borderRadius: BorderRadius.circular(40),
                                border: Border.all(
                                  color: Colors.orange.shade700,
                                  width: 3,
                                ),
                              ),
                              child: Text(
                                c,
                                style: const TextStyle(
                                  fontSize: 44,
                                  fontWeight: FontWeight.w900,
                                  color: RC.ink,
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
        ],
      ),
    );
  }
}
