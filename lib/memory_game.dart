import 'dart:math';

import 'package:flutter/material.dart';

import 'ui.dart';
import 'l10n/strings.dart';

/// لعبة الذاكرة: اقلب كرتين وافتكر الأزواج المتشابهة. مفيش غلط ومفيش خسارة.
class MemoryGame extends StatefulWidget {
  const MemoryGame({super.key});

  @override
  State<MemoryGame> createState() => _MemoryGameState();
}

class _MemoryGameState extends State<MemoryGame> {
  // 6 أزواج: كل إيموجي موجود مرتين.
  static const _symbols = ['🐶', '🐱', '🐸', '🐵', '🐰', '🦁'];

  late List<String> _cards;
  late List<bool> _revealed;
  late List<bool> _matched;
  final List<int> _open = [];
  bool _busy = false;

  @override
  void initState() {
    super.initState();
    _newGame();
  }

  void _newGame() {
    _cards = [..._symbols, ..._symbols]..shuffle(Random());
    _revealed = List.filled(_cards.length, false);
    _matched = List.filled(_cards.length, false);
    _open.clear();
    _busy = false;
  }

  Future<void> _tap(int i) async {
    if (_busy || _revealed[i] || _matched[i]) return;
    setState(() {
      _revealed[i] = true;
      _open.add(i);
    });
    if (_open.length < 2) return;

    _busy = true;
    final a = _open[0];
    final b = _open[1];
    if (_cards[a] == _cards[b]) {
      setState(() {
        _matched[a] = true;
        _matched[b] = true;
      });
      _open.clear();
      _busy = false;
    } else {
      // Show both cards briefly, then flip them back. No failure message.
      await Future.delayed(const Duration(milliseconds: 900));
      if (!mounted) return;
      setState(() {
        _revealed[a] = false;
        _revealed[b] = false;
      });
      _open.clear();
      _busy = false;
    }
  }

  @override
  Widget build(BuildContext context) {
    final done = _matched.every((m) => m);
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        title: Text(loc('لعبة الذاكرة'), style: TextStyle(fontSize: 26)),
      ),
      body: Center(
        child: done
            ? Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Icon(Icons.star_rounded, size: 120, color: Colors.amber),
                  const SizedBox(height: 16),
                  Text(loc('أحسنت!'),
                      style: TextStyle(fontSize: 36, fontWeight: FontWeight.bold)),
                  const SizedBox(height: 24),
                  FilledButton(
                    onPressed: () => setState(_newGame),
                    child: Text(loc('العب تاني'), style: TextStyle(fontSize: 24)),
                  ),
                ],
              )
            : Padding(
                padding: const EdgeInsets.all(16),
                child: GridView.count(
                  shrinkWrap: true,
                  crossAxisCount: 4,
                  mainAxisSpacing: 12,
                  crossAxisSpacing: 12,
                  children: [
                    for (var i = 0; i < _cards.length; i++)
                      GestureDetector(
                        onTap: () => _tap(i),
                        child: Container(
                          decoration: BoxDecoration(
                            color: _matched[i] || _revealed[i]
                                ? kBright[i % kBright.length]
                                : Colors.white,
                            borderRadius: BorderRadius.circular(20),
                            border: Border.all(color: Colors.brown.shade200, width: 2),
                          ),
                          alignment: Alignment.center,
                          child: Text(
                            _revealed[i] || _matched[i] ? _cards[i] : '?',
                            style: const TextStyle(fontSize: 40),
                          ),
                        ),
                      ),
                  ],
                ),
              ),
      ),
    );
  }
}