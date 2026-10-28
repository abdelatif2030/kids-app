import 'dart:async';
import 'dart:math';

import 'package:flutter/material.dart';

import 'progress_store.dart';
import 'rest_screen.dart';
import 'ui.dart';

class _Question {
  /// Objects to count (ages 4-5), or null for a written sum.
  final int? objects;
  final String prompt;
  final int answer;

  /// The skill id in skills.dart.
  final String skill;
  const _Question(this.prompt, this.answer, this.skill, {this.objects});
}

/// رياضيات حسب العمر: عدّ (4-5)، جمع (6-7)، جمع وطرح (8-9)، ضرب (10-12).
/// اللمسة الغلط بتخفّي الرقم بس. النجمة بعد آخر سؤال.
class MathGame extends StatefulWidget {
  final int age;
  const MathGame({super.key, required this.age});

  @override
  State<MathGame> createState() => _MathGameState();
}

class _MathGameState extends State<MathGame> {
  static const _rounds = 5;

  final _random = Random();
  late List<_Question> _questions;
  late List<int> _options;
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

  _Question _make() {
    final age = widget.age;
    if (age <= 5) {
      final n = 1 + _random.nextInt(age <= 4 ? 5 : 10);
      return _Question('كام؟', n, 'counting', objects: n);
    }
    if (age <= 7) {
      final max = age == 6 ? 10 : 20;
      final a = 1 + _random.nextInt(max - 1);
      final b = 1 + _random.nextInt(max - a);
      return _Question('$a + $b = ?', a + b, 'addition');
    }
    if (age <= 9) {
      final a = 10 + _random.nextInt(41);
      if (_random.nextBool()) {
        final b = 1 + _random.nextInt(50);
        return _Question('$a + $b = ?', a + b, 'addition');
      }
      final b = 1 + _random.nextInt(a - 1);
      return _Question('$a - $b = ?', a - b, 'subtraction');
    }
    final a = 2 + _random.nextInt(8);
    final b = 2 + _random.nextInt(11);
    return _Question('$a × $b = ?', a * b, 'multiplication');
  }

  void _newGame() {
    _questions = [for (var i = 0; i < _rounds; i++) _make()];
    _round = 0;
    _newRound();
  }

  void _newRound() {
    final answer = _questions[_round].answer;
    final wrong = [
      for (var d = -3; d <= 3; d++)
        if (d != 0 && answer + d >= 1) answer + d,
    ]..shuffle(_random);
    _options = [answer, ...wrong.take(2)]..shuffle(_random);
    _faded.clear();
    _matched = false;
    _missed = false;
  }

  Future<void> _tap(int i) async {
    if (_matched || _faded.contains(i)) return;
    if (_options[i] != _questions[_round].answer) {
      _missed = true;
      setState(() => _faded.add(i));
      return;
    }
    unawaited(ProgressStore.record(_questions[_round].skill, !_missed));
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
        title: const Text('رياضيات', style: TextStyle(fontSize: 26)),
      ),
      body: Center(
        child: _done
            ? StarDone(onAgain: _again)
            : SingleChildScrollView(
                padding: const EdgeInsets.all(16),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text(
                      _matched ? 'أحسنت!' : 'اختار الإجابة',
                      style: const TextStyle(fontSize: 32, fontWeight: FontWeight.bold),
                    ),
                    const SizedBox(height: 24),
                    if (_questions[_round].objects case final n?)
                      Wrap(
                        alignment: WrapAlignment.center,
                        spacing: 8,
                        children: [
                          for (var i = 0; i < n; i++)
                            const Text('🍎', style: TextStyle(fontSize: 44)),
                        ],
                      ),
                    if (_questions[_round].objects != null) const SizedBox(height: 8),
                    Text(
                      _questions[_round].prompt,
                      textDirection: TextDirection.ltr,
                      style: const TextStyle(fontSize: 56, fontWeight: FontWeight.bold),
                    ),
                    const SizedBox(height: 32),
                    Wrap(
                      spacing: 16,
                      runSpacing: 16,
                      alignment: WrapAlignment.center,
                      children: [
                        for (var i = 0; i < _options.length; i++)
                          AnimatedOpacity(
                            duration: const Duration(milliseconds: 300),
                            opacity: _faded.contains(i) ? 0.15 : 1,
                            child: GestureDetector(
                              onTap: () => _tap(i),
                              child: Container(
                                width: 104,
                                height: 104,
                                alignment: Alignment.center,
                                decoration: BoxDecoration(
                                  color: kBright[(i + 2) % kBright.length],
                                  borderRadius: BorderRadius.circular(24),
                                ),
                                child: Text(
                                  '${_options[i]}',
                                  style: const TextStyle(
                                    fontSize: 48,
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
                ),
              ),
      ),
    );
  }
}
