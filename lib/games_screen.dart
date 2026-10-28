import 'package:flutter/material.dart';

import 'color_game.dart';
import 'games/game_catalog.dart';
import 'games/game_common.dart';
import 'journey/models.dart';
import 'journey/resume.dart';
import 'journey/ui/heart_button.dart';
import 'journey/ui/kit.dart';
import 'letters_game.dart';
import 'math_game.dart';
import 'memory_game.dart';
import 'ui.dart';
import 'where_animal_game.dart';
import 'l10n/strings.dart';

/// The games that suit [age], as big tiles.
class GamesGrid extends StatelessWidget {
  final int age;

  /// The child playing, so finished games and the learning language are remembered. Without one the
  /// educational games still open but remember nothing.
  final ChildProfile? child;
  const GamesGrid({super.key, required this.age, this.child});

  @override
  Widget build(BuildContext context) {
    // (label, icon, min age, max age, screen). Order = order on screen.
    final games = <(String, IconData, int, int, Widget Function())>[
      (loc('افرقع البالونات'), Icons.celebration_rounded, 1, 2, () => const BalloonGame()),
      (loc('فين الحيوان؟'), Icons.pets_rounded, 1, 2, () => const WhereAnimalGame()),
      (loc('لعبة الألوان'), Icons.palette_rounded, 2, 3, () => const ColorGame()),
      (loc('حروف وكلمات'), Icons.sort_by_alpha_rounded, 3, 8, () => const LettersGame()),
      (loc('لعبة الذاكرة'), Icons.grid_view_rounded, 3, 6, () => const MemoryGame()),
      (loc('رياضيات'), Icons.calculate_rounded, 4, 12, () => MathGame(age: age)),
    ];
    final available = [
      for (var i = 0; i < games.length; i++)
        if (age >= games[i].$3 && age <= games[i].$4) i,
    ];
    final childId = child?.id ?? 'guest';
    final learn = gamesForAge(age);
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        _oldGames(context, games, available),
        if (learn.isNotEmpty) ...[
          const SizedBox(height: 24),
          Text(tr2('ألعاب تعليمية', 'Learning games'), style: const TextStyle(fontSize: 24, fontWeight: FontWeight.w900, color: RC.ink)),
          const SizedBox(height: 12),
          LearningGamesList(age: age, childId: childId, learnLang: learnLangOf(child)),
        ],
      ],
    );
  }

  Widget _oldGames(BuildContext context, List<(String, IconData, int, int, Widget Function())> games, List<int> available) {
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
      title: loc('ألعاب'),
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
        title: Text(loc('افرقع البالونات'), style: TextStyle(fontSize: 26)),
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
                    onPressed: _restart,
                    child: Text(loc('العب تاني'), style: TextStyle(fontSize: 24)),
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
/// The new educational games as cards (title, ages, objective, a check once finished).
class LearningGamesList extends StatefulWidget {
  final int age;
  final String childId;
  final String learnLang;
  const LearningGamesList({super.key, required this.age, required this.childId, required this.learnLang});

  @override
  State<LearningGamesList> createState() => _LearningGamesListState();
}

class _LearningGamesListState extends State<LearningGamesList> {
  late Future<Set<String>> _done = GameRewards.doneIds(widget.childId);

  @override
  Widget build(BuildContext context) {
    final learn = gamesForAge(widget.age);
    return FutureBuilder<Set<String>>(
      future: _done,
      builder: (context, snap) {
        final done = snap.data ?? const <String>{};
        return Column(
          children: [
            for (final g in learn)
              Padding(
                padding: const EdgeInsets.only(bottom: 12),
                child: RCard(
                  onTap: () async {
                    await ResumeStore.mark(widget.childId, 'game', g.id);
                    if (!context.mounted) return;
                    await Navigator.push(
                      context,
                      MaterialPageRoute(builder: (_) => g.build(widget.childId, widget.age, widget.learnLang)),
                    );
                    if (mounted) setState(() => _done = GameRewards.doneIds(widget.childId));
                  },
                  semanticLabel: '${g.title()}. ${tr2('الأعمار', 'Ages')} ${g.ages}. ${g.objective()}',
                  child: Row(
                    children: [
                      Icon(g.icon, size: 44, color: RC.pinkDeep),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(g.title(), style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w900, color: RC.ink)),
                            Text(g.objective(), style: const TextStyle(fontSize: 14, color: RC.ink)),
                            Text('${tr2('الأعمار', 'Ages')} ${g.ages}', style: const TextStyle(fontSize: 12, color: RC.ink)),
                          ],
                        ),
                      ),
                      HeartButton(childId: widget.childId, kind: 'game', refId: g.id, size: 26),
                      if (done.contains(g.id)) const Icon(Icons.check_circle_rounded, color: Colors.green),
                    ],
                  ),
                ),
              ),
          ],
        );
      },
    );
  }
}
