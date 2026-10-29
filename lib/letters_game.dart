import 'design/focusable_tap.dart';
import 'dart:async';
import 'dart:math';

import 'package:flutter/material.dart';

import 'journey/repository.dart';
import 'progress_store.dart';
import 'rest_screen.dart';
import 'ui.dart';
import 'l10n/strings.dart';

class _Word {
  final String emoji;
  final String word;
  const _Word(this.emoji, this.word);

  /// The first letter (Latin words start with a capital).
  String get letter => word.substring(0, 1);
}

class _Lang {
  final String id;
  final String label;
  final bool rtl;
  final String alphabet;
  final List<_Word> words;
  const _Lang(this.id, this.label, this.rtl, this.alphabet, this.words);
}

const _latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const _langs = [
  _Lang('ar', 'عربي', true, 'أبتثجحخدذرزسشصضطظعغفقكلمنهوي', [
    _Word('🍎', 'تفاحة'),
    _Word('🍌', 'موز'),
    _Word('🐘', 'فيل'),
    _Word('🌳', 'شجرة'),
    _Word('🐟', 'سمكة'),
    _Word('🏠', 'بيت'),
    _Word('🐪', 'جمل'),
    _Word('🐦', 'عصفور'),
    _Word('🐱', 'قطة'),
  ]),
  _Lang('en', 'English', false, _latin, [
    _Word('🍎', 'Apple'),
    _Word('🐱', 'Cat'),
    _Word('🐶', 'Dog'),
    _Word('🐟', 'Fish'),
    _Word('🌞', 'Sun'),
    _Word('🐘', 'Elephant'),
    _Word('🍌', 'Banana'),
    _Word('🏠', 'House'),
  ]),
  _Lang('de', 'Deutsch', false, _latin, [
    _Word('🍎', 'Apfel'),
    _Word('🐱', 'Katze'),
    _Word('🐶', 'Hund'),
    _Word('🐟', 'Fisch'),
    _Word('🌞', 'Sonne'),
    _Word('🌳', 'Baum'),
    _Word('🏠', 'Haus'),
    _Word('🐘', 'Elefant'),
  ]),
  _Lang('fr', 'Français', false, _latin, [
    _Word('🍎', 'Pomme'),
    _Word('🐱', 'Chat'),
    _Word('🐶', 'Chien'),
    _Word('🐟', 'Poisson'),
    _Word('🌞', 'Soleil'),
    _Word('🌳', 'Arbre'),
    _Word('🏠', 'Maison'),
    _Word('🍌', 'Banane'),
  ]),
];

/// حروف وكلمات: صورة وكلمة، والطفل يختار أول حرف. عربي وإنجليزي وألماني وفرنساوي.
/// اللمسة الغلط بتخفّي الحرف بس. النجمة بعد آخر جولة.
class LettersGame extends StatefulWidget {
  const LettersGame({super.key});

  @override
  State<LettersGame> createState() => _LettersGameState();
}

class _LettersGameState extends State<LettersGame> {
  static const _rounds = 5;

  final _random = Random();
  _Lang _lang = _langs[0];
  late List<_Word> _questions;
  late List<String> _options;
  final Set<int> _faded = {};
  int _round = 0;
  bool _matched = false;
  bool _missed = false; // a wrong tap in this round

  bool get _done => _round >= _rounds;

  @override
  void initState() {
    super.initState();
    _newGame();
  }

  void _newGame() {
    _questions = ([..._lang.words]..shuffle(_random)).take(_rounds).toList();
    _round = 0;
    _newRound();
  }

  void _newRound() {
    final answer = _questions[_round].letter;
    final others = _lang.alphabet.split('')
      ..remove(answer)
      ..shuffle(_random);
    _options = [answer, ...others.take(2)]..shuffle(_random);
    _faded.clear();
    _matched = false;
    _missed = false;
  }

  Future<void> _tap(int i) async {
    if (_matched || _faded.contains(i)) return;
    if (_options[i] != _questions[_round].letter) {
      _missed = true;
      setState(() => _faded.add(i));
      return;
    }
    unawaited(ProgressStore.record('letters_${_lang.id}', !_missed,
        detail: _questions[_round].letter, childId: JourneyStore.instance.activeId));
    setState(() => _matched = true);
    await Future.delayed(const Duration(milliseconds: 900));
    if (!mounted) return;
    setState(() {
      _round++;
      if (!_done) _newRound();
    });
  }

  Future<void> _again() async {
    if (await restIfTimeUp(context)) return;
    if (mounted) setState(_newGame);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        title: Text(loc('حروف وكلمات'), style: const TextStyle(fontSize: 26)),
      ),
      body: Center(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(16),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Wrap(
                spacing: 8,
                alignment: WrapAlignment.center,
                children: [
                  for (final l in _langs)
                    ChoiceChip(
                      label: Text(loc(l.label), style: const TextStyle(fontSize: 20)),
                      selected: identical(l, _lang),
                      onSelected: (_) => setState(() {
                        _lang = l;
                        _newGame();
                      }),
                    ),
                ],
              ),
              const SizedBox(height: 24),
              if (_done)
                StarDone(onAgain: _again)
              else ...[
                Text(
                  _matched ? loc('أحسنت!') : loc('اختار أول حرف'),
                  style: const TextStyle(fontSize: 32, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 16),
                Text(_questions[_round].emoji, style: const TextStyle(fontSize: 96)),
                Text(
                  _questions[_round].word,
                  textDirection: _lang.rtl ? TextDirection.rtl : TextDirection.ltr,
                  style: const TextStyle(fontSize: 40, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 24),
                Wrap(
                  spacing: 16,
                  runSpacing: 16,
                  alignment: WrapAlignment.center,
                  children: [
                    for (var i = 0; i < _options.length; i++)
                      AnimatedOpacity(
                        duration: const Duration(milliseconds: 300),
                        opacity: _faded.contains(i) ? 0.15 : 1,
                        child: FocusableTap(
                          onTap: () => _tap(i),
                          child: Container(
                            width: 96,
                            height: 96,
                            alignment: Alignment.center,
                            decoration: BoxDecoration(
                              color: kBright[(i + 3) % kBright.length],
                              borderRadius: BorderRadius.circular(24),
                            ),
                            child: Text(
                              _options[i],
                              style: const TextStyle(
                                fontSize: 52,
                                fontWeight: FontWeight.bold,
                                color: Colors.white,
                              ),
                            ),
                          ),
                        ),
                      ),
                  ],
                ),
              ],
            ],
          ),
        ),
      ),
    );
  }
}
