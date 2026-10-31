import 'design/focusable_tap.dart';

import 'package:flutter/material.dart';

import 'color_game.dart';
import 'games/game_catalog.dart';
import 'games/game_common.dart';
import 'journey/models.dart';
import 'journey/resume.dart';
import 'journey/ui/heart_button.dart';
import 'journey/ui/island_home.dart';
import 'letters_game.dart';
import 'math_game.dart';
import 'memory_game.dart';
import 'ui.dart';
import 'where_animal_game.dart';
import 'l10n/strings.dart';

/// The games that suit [age], each on its own floating island with its own picture and name, laid out sideways on the
/// sea (the same map the home uses). Learning games show a tick once finished and a heart to keep them.
class GamesGrid extends StatefulWidget {
  final int age;

  /// The child playing, so finished games and the learning language are remembered. Without one the
  /// educational games still open but remember nothing.
  final ChildProfile? child;
  const GamesGrid({super.key, required this.age, this.child});

  @override
  State<GamesGrid> createState() => _GamesGridState();
}

class _GamesGridState extends State<GamesGrid> {
  late Future<Set<String>> _done = GameRewards.doneIds(_childId);

  String get _childId => widget.child?.id ?? 'guest';

  static const _palette = [
    (Color(0xFFFFC45E), Color(0xFFE09A22)),
    (Color(0xFFC9A6F0), Color(0xFF9468CC)),
    (Color(0xFF8BD450), Color(0xFF5FA832)),
    (Color(0xFFFF9DB8), Color(0xFFDB6A8D)),
    (Color(0xFF7FD6F2), Color(0xFF3AA6CC)),
    (Color(0xFFFFE066), Color(0xFFE6B422)),
  ];

  @override
  Widget build(BuildContext context) {
    final age = widget.age;
    // (id, label, min age, max age, screen). Order = order on screen.
    final classic = <(String, String, int, int, Widget Function())>[
      ('balloons', loc('افرقع البالونات'), 1, 2, () => const BalloonGame()),
      ('animal', loc('فين الحيوان؟'), 1, 2, () => const WhereAnimalGame()),
      ('colors', loc('لعبة الألوان'), 2, 3, () => const ColorGame()),
      ('letters', loc('حروف وكلمات'), 3, 8, () => const LettersGame()),
      ('memory', loc('لعبة الذاكرة'), 3, 6, () => const MemoryGame()),
      ('math', loc('رياضيات'), 4, 12, () => MathGame(age: age)),
    ];
    final learn = gamesForAge(age);
    final learnLang = learnLangOf(widget.child);
    return FutureBuilder<Set<String>>(
      future: _done,
      builder: (context, snap) {
        final done = snap.data ?? const <String>{};
        var n = 0;
        IslandSpec spec({
          required String id,
          required String title,
          required VoidCallback onTap,
          Widget? overlay,
        }) {
          final c = _palette[n % _palette.length];
          return IslandSpec(
            id: 'game_$id',
            title: title,
            emoji: kGameEmoji[id] ?? '🎲',
            grass: c.$1,
            grassDark: c.$2,
            houseStyle: n++ % 4,
            onTap: onTap,
            overlay: overlay,
          );
        }

        final islands = <IslandSpec>[
          for (final g in classic)
            if (age >= g.$3 && age <= g.$4)
              spec(
                id: g.$1,
                title: g.$2,
                onTap: () => Navigator.push(
                  context,
                  MaterialPageRoute(builder: (_) => g.$5()),
                ),
              ),
          for (final g in learn)
            spec(
              id: g.id,
              title: g.title(),
              onTap: () async {
                await ResumeStore.mark(_childId, 'game', g.id);
                if (!context.mounted) return;
                await Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (_) => g.build(_childId, age, learnLang),
                  ),
                );
                if (mounted) {
                  setState(() => _done = GameRewards.doneIds(_childId));
                }
              },
              overlay: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  if (done.contains(g.id))
                    const Icon(
                      Icons.check_circle_rounded,
                      color: Colors.green,
                      size: 30,
                    ),
                  HeartButton(
                    childId: _childId,
                    kind: 'game',
                    refId: g.id,
                    size: 26,
                  ),
                ],
              ),
            ),
        ];
        // Inside a bounded area (the games tab) the map takes all of it; elsewhere it has its own height.
        return LayoutBuilder(
          builder: (context, box) => box.maxHeight.isFinite
              ? IslandHome(islands: islands, grid: true)
              : SizedBox(height: 520, child: IslandHome(islands: islands)),
        );
      },
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
                  const Icon(
                    Icons.star_rounded,
                    size: 120,
                    color: Colors.amber,
                  ),
                  const SizedBox(height: 16),
                  Text(
                    loc('أحسنت!'),
                    style: TextStyle(fontSize: 36, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 24),
                  FilledButton(
                    onPressed: _restart,
                    child: Text(
                      loc('العب تاني'),
                      style: TextStyle(fontSize: 24),
                    ),
                  ),
                ],
              )
            : Wrap(
                spacing: 24,
                runSpacing: 24,
                alignment: WrapAlignment.center,
                children: [
                  for (var i = 0; i < _count; i++)
                    FocusableTap(
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
