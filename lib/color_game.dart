import 'dart:math';

import 'package:flutter/material.dart';

import 'rest_screen.dart';

class _GameColor {
  final String name;
  final Color color;
  const _GameColor(this.name, this.color);
}

/// Six clearly different colors (no pink next to red, no two oranges).
const _colors = [
  _GameColor('أحمر', Color(0xFFE53935)),
  _GameColor('أزرق', Color(0xFF1E88E5)),
  _GameColor('أصفر', Color(0xFFFDD835)),
  _GameColor('أخضر', Color(0xFF43A047)),
  _GameColor('برتقالي', Color(0xFFFB8C00)),
  _GameColor('بنفسجي', Color(0xFF8E24AA)),
];

/// لعبة الألوان (2-3 سنين): اللون الكبير فوق، والطفل يلمس نفس اللون.
/// اللمسة الغلط بس بتخفّي اللون ده، مفيش صوت ومفيش خسارة.
/// النجمة بتظهر لما يخلّص كل الجولات، مش على كل لمسة.
class ColorGame extends StatefulWidget {
  const ColorGame({super.key});

  @override
  State<ColorGame> createState() => _ColorGameState();
}

class _ColorGameState extends State<ColorGame> {
  static const _rounds = 5;
  static const _options = 3;

  final _random = Random();
  late List<_GameColor> _targets;
  late List<_GameColor> _choices;
  final Set<int> _faded = {};
  int _round = 0;
  bool _matched = false;

  bool get _done => _round >= _rounds;

  @override
  void initState() {
    super.initState();
    _newGame();
  }

  void _newGame() {
    // A different target every round.
    _targets = ([..._colors]..shuffle(_random)).take(_rounds).toList();
    _round = 0;
    _newRound();
  }

  void _newRound() {
    final target = _targets[_round];
    final others = [..._colors]
      ..remove(target)
      ..shuffle(_random);
    _choices = [target, ...others.take(_options - 1)]..shuffle(_random);
    _faded.clear();
    _matched = false;
  }

  Future<void> _tap(int i) async {
    if (_matched || _faded.contains(i)) return;
    if (_choices[i] != _targets[_round]) {
      // Just fade the wrong color; no failure message.
      setState(() => _faded.add(i));
      return;
    }
    setState(() => _matched = true);
    await Future.delayed(const Duration(milliseconds: 900));
    if (!mounted) return;
    setState(() {
      _round++;
      if (!_done) _newRound();
    });
  }

  /// A finished set of rounds is the natural moment to honour the session
  /// timer: if time is up, go to the rest screen instead of starting again.
  Future<void> _again() async {
    if (await restIfTimeUp(context)) return;
    if (mounted) setState(_newGame);
  }

  Widget _circle(_GameColor c, double size, {Widget? child}) {
    return Container(
      width: size,
      height: size,
      alignment: Alignment.center,
      decoration: BoxDecoration(
        color: c.color,
        shape: BoxShape.circle,
        border: Border.all(color: Colors.brown.shade300, width: 3),
      ),
      child: child,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        title: const Text('لعبة الألوان', style: TextStyle(fontSize: 26)),
      ),
      body: Center(
        child: _done
            ? Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Icon(Icons.star_rounded, size: 120, color: Colors.amber),
                  const SizedBox(height: 16),
                  const Text('أحسنت!',
                      style: TextStyle(fontSize: 36, fontWeight: FontWeight.bold)),
                  const SizedBox(height: 24),
                  FilledButton(
                    onPressed: _again,
                    child: const Text('العب تاني', style: TextStyle(fontSize: 24)),
                  ),
                ],
              )
            : SingleChildScrollView(
                padding: const EdgeInsets.all(16),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    // Progress dots (not stars: the star is only for finishing).
                    Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        for (var i = 0; i < _rounds; i++)
                          Container(
                            width: 14,
                            height: 14,
                            margin: const EdgeInsets.symmetric(horizontal: 4),
                            decoration: BoxDecoration(
                              shape: BoxShape.circle,
                              color: i < _round ? Colors.green : Colors.brown.shade100,
                            ),
                          ),
                      ],
                    ),
                    const SizedBox(height: 16),
                    Text(
                      _matched ? 'أحسنت!' : 'اختار نفس اللون',
                      textAlign: TextAlign.center,
                      style: const TextStyle(fontSize: 32, fontWeight: FontWeight.bold),
                    ),
                    const SizedBox(height: 16),
                    _circle(
                      _targets[_round],
                      160,
                      child: _matched
                          ? const Icon(Icons.check_rounded, size: 96, color: Colors.white)
                          : null,
                    ),
                    const SizedBox(height: 8),
                    Text(_targets[_round].name, style: const TextStyle(fontSize: 28)),
                    const SizedBox(height: 32),
                    Wrap(
                      spacing: 20,
                      runSpacing: 20,
                      alignment: WrapAlignment.center,
                      children: [
                        for (var i = 0; i < _choices.length; i++)
                          AnimatedOpacity(
                            duration: const Duration(milliseconds: 300),
                            opacity: _faded.contains(i) ? 0.15 : 1,
                            child: GestureDetector(
                              onTap: () => _tap(i),
                              child: _circle(_choices[i], 104),
                            ),
                          ),
                      ],
                    ),
                  ],
                ),
              ),
      ),
    );
  }
}
