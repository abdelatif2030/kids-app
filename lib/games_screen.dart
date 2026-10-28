import 'package:flutter/material.dart';

import 'color_game.dart';
import 'letters_game.dart';
import 'math_game.dart';
import 'memory_game.dart';
import 'ui.dart';
import 'where_animal_game.dart';

/// The games that suit [age], as big tiles.
class GamesGrid extends StatelessWidget {
  final int age;
  const GamesGrid({super.key, required this.age});

  @override
  Widget build(BuildContext context) {
    // (label, icon, min age, max age, screen). Order = order on screen.
    final games = <(String, IconData, int, int, Widget Function())>[
      ('افرقع البالونات', Icons.celebration_rounded, 1, 2, () => const BalloonGame()),
      ('فين الحيوان؟', Icons.pets_rounded, 1, 2, () => const WhereAnimalGame()),
      ('لعبة الألوان', Icons.palette_rounded, 2, 3, () => const ColorGame()),
      ('حروف وكلمات', Icons.sort_by_alpha_rounded, 3, 8, () => const LettersGame()),
      ('لعبة الذاكرة', Icons.grid_view_rounded, 3, 6, () => const MemoryGame()),
      ('رياضيات', Icons.calculate_rounded, 4, 12, () => MathGame(age: age)),
    ];
    final available = [
      for (var i = 0; i < games.length; i++)
        if (age >= games[i].$3 && age <= games[i].$4) i,
    ];
    return Wrap(
      spacing: 20,
      runSpacing: 20,
      alignment: WrapAlignment.center,
      children: [
        for (final i in available)
          BigTile(
            label: games[i].$1,
            icon: games[i].$2,
            color: kBright[i % kBright.length],
            onTap: () => Navigator.push(
              context,
              MaterialPageRoute(builder: (_) => games[i].$5()),
            ),
          ),
      ],
    );
  }
}

/// قايمة الألعاب. كل لعبة بتظهر للعمر المناسب بس.
class GamesScreen extends StatelessWidget {
  final int age;
  const GamesScreen({super.key, required this.age});

  @override
  Widget build(BuildContext context) {
    return SceneScaffold(
      title: 'ألعاب',
      body: Center(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24),
          child: GamesGrid(age: age),
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