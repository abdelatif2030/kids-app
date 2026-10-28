import 'dart:math';

import 'package:flutter/material.dart';

import 'ui.dart';

/// فين الحيوان؟ الطفل يلمس صندوق، ويطلع الحيوان اللي جواه. مفيش غلط ومفيش خسارة.
class WhereAnimalGame extends StatefulWidget {
  const WhereAnimalGame({super.key});

  @override
  State<WhereAnimalGame> createState() => _WhereAnimalGameState();
}

class _WhereAnimalGameState extends State<WhereAnimalGame> {
  static const _animals = ['🐶', '🐱', '🐸', '🐰', '🦁', '🐵'];
  static const _boxes = 3;

  final _random = Random();
  late List<String> _hidden;
  int? _opened;
  int _round = 0;

  @override
  void initState() {
    super.initState();
    _newRound();
  }

  void _newRound() {
    final pool = [..._animals]..shuffle(_random);
    _hidden = pool.take(_boxes).toList();
    _opened = null;
    _round++;
  }

  void _tapBox(int i) {
    if (_opened != null) return;
    setState(() => _opened = i);
  }

  void _next() => setState(_newRound);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        title: const Text('فين الحيوان؟', style: TextStyle(fontSize: 26)),
      ),
      body: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              _opened == null ? 'اختار صندوق' : 'أحسنت!',
              style: const TextStyle(fontSize: 32, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 24),
            Wrap(
              spacing: 20,
              runSpacing: 20,
              alignment: WrapAlignment.center,
              children: [
                for (var i = 0; i < _boxes; i++)
                  GestureDetector(
                    onTap: () => _tapBox(i),
                    child: Container(
                      width: 110,
                      height: 110,
                      alignment: Alignment.center,
                      decoration: BoxDecoration(
                        color: _opened == i ? kBright[i] : Colors.white,
                        borderRadius: BorderRadius.circular(24),
                        border: Border.all(color: Colors.brown.shade300, width: 3),
                      ),
                      child: Text(
                        _opened == i ? _hidden[i] : '📦',
                        style: const TextStyle(fontSize: 56),
                      ),
                    ),
                  ),
              ],
            ),
            const SizedBox(height: 32),
            if (_opened != null)
              FilledButton(
                onPressed: _next,
                child: const Text('تاني', style: TextStyle(fontSize: 24)),
              ),
          ],
        ),
      ),
    );
  }
}