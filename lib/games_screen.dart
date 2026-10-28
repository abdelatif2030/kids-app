import 'package:flutter/material.dart';

import 'color_game.dart';
import 'memory_game.dart';
import 'ui.dart';
import 'where_animal_game.dart';

/// قايمة الألعاب. كل لعبة بتظهر للعمر المناسب بس.
class GamesScreen extends StatelessWidget {
  final int age;
  const GamesScreen({super.key, required this.age});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        title: const Text('ألعاب', style: TextStyle(fontSize: 26)),
      ),
      // Scrolls so three buttons (age 2) still fit on a short screen.
      body: Center(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              if (age <= 2)
                _GameButton(
                  label: 'افرقع البالونات',
                  color: kBright[0],
                  onTap: () => Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => const BalloonGame()),
                  ),
                ),
              if (age <= 2)
                _GameButton(
                  label: 'فين الحيوان؟',
                  color: kBright[3],
                  onTap: () => Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => const WhereAnimalGame()),
                  ),
                ),
              if (age >= 2 && age <= 3)
                _GameButton(
                  label: 'لعبة الألوان',
                  color: kBright[4],
                  onTap: () => Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => const ColorGame()),
                  ),
                ),
              if (age >= 3 && age <= 4)
                _GameButton(
                  label: 'لعبة الذاكرة',
                  color: kBright[1],
                  onTap: () => Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => const MemoryGame()),
                  ),
                ),
              if (age >= 5)
                const Text('ألعاب لعمرك قريباً', style: TextStyle(fontSize: 26)),
            ],
          ),
        ),
      ),
    );
  }
}

class _GameButton extends StatelessWidget {
  final String label;
  final Color color;
  final VoidCallback onTap;
  const _GameButton({required this.label, required this.color, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 10),
      child: SizedBox(
        width: 280,
        height: 120,
        child: FilledButton(
          style: FilledButton.styleFrom(
            backgroundColor: color,
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(28)),
          ),
          onPressed: onTap,
          child: Text(label, style: const TextStyle(fontSize: 28, fontWeight: FontWeight.bold)),
        ),
      ),
    );
  }
}

/// افرقع 6 بالونات. مفيش غلط ومفيش خسارة. النجمة بتظهر لما يخلّص.
class BalloonGame extends StatefulWidget {
  const BalloonGame({super.key});

  @override
  State<BalloonGame> createState() => _BalloonGameState();
}

class _BalloonGameState extends State<BalloonGame> {
  static const _count = 6;
  late List<bool> _popped;

  @override
  void initState() {
    super.initState();
    _popped = List.filled(_count, false);
  }

  void _pop(int i) {
    if (_popped[i]) return;
    setState(() => _popped[i] = true);
  }

  void _restart() => setState(() => _popped = List.filled(_count, false));

  @override
  Widget build(BuildContext context) {
    final done = _popped.every((p) => p);
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        title: const Text('افرقع البالونات', style: TextStyle(fontSize: 26)),
      ),
      body: Center(
        child: done
            ? Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Icon(Icons.star_rounded, size: 120, color: Colors.amber),
                  const SizedBox(height: 16),
                  const Text('أحسنت!',
                      style: TextStyle(fontSize: 36, fontWeight: FontWeight.bold)),
                  const SizedBox(height: 24),
                  FilledButton(
                    onPressed: _restart,
                    child: const Text('العب تاني', style: TextStyle(fontSize: 24)),
                  ),
                ],
              )
            : Wrap(
                spacing: 24,
                runSpacing: 24,
                alignment: WrapAlignment.center,
                children: [
                  for (var i = 0; i < _count; i++)
                    GestureDetector(
                      onTap: () => _pop(i),
                      child: AnimatedOpacity(
                        duration: const Duration(milliseconds: 300),
                        opacity: _popped[i] ? 0 : 1,
                        child: Container(
                          width: 110,
                          height: 130,
                          decoration: BoxDecoration(
                            color: kBright[i % kBright.length],
                            borderRadius: BorderRadius.circular(55),
                          ),
                        ),
                      ),
                    ),
                ],
              ),
      ),
    );
  }
}