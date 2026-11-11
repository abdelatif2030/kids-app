import 'package:flutter/material.dart';

import '../adventures/adventure_screen.dart';
import '../color_game.dart';
import '../design/focusable_tap.dart';
import '../design/picture_stage.dart';
import '../drawing_screen.dart';
import '../games_screen.dart';
import '../journey/lands.dart';
import '../journey/models.dart';
import '../journey/resume.dart';
import '../journey/ui/heart_button.dart';
import '../journey/ui/land_map_screen.dart';
import '../l10n/strings.dart';
import '../letters_game.dart';
import '../math_game.dart';
import '../memory_game.dart';
import '../stories/story_screens.dart';
import '../where_animal_game.dart';
import 'game_catalog.dart';
import 'game_common.dart';

/// The top strip of the page: the owner's castle, palms, back arrow and game pad, with the «الألعاب التعليمية» sign.
const String kLearnTop = 'assets/games/learn_top.webp';
const double kLearnTopAspect = 1536 / 180;

/// The bottom strip: the owner's flowers and sea.
const String kLearnBottom = 'assets/games/learn_bottom.webp';
const double kLearnBottomAspect = 1536 / 170;

/// The card picture of a learning game or section (made in the style of the owner's fun-game cards).
String learnCard(String id) => 'assets/games/learn_cards/$id.webp';
const double kLearnCardAspect = 612 / 530;

/// One card on the page: a learning game or a section (drawing, stories, adventures, feelings).
class LearnEntry {
  final String id;
  final String Function() title;
  final Future<void> Function(BuildContext context) open;

  /// True for games that give a learning star (a tick shows once finished; a heart keeps it).
  final bool learning;
  const LearnEntry(this.id, this.title, this.open, {this.learning = false});
}

/// The learning games ids that have a card (the casual tic-tac-toe, snake, whack-a-mole and catch-the-stars were taken
/// off the learning page on the owner's request: the fun-games page has better games for play).
const Set<String> kLearnCardIds = {
  'balloons', 'animal', 'colors', 'letters', 'memory', 'math', 'snakes_ladders', 'jigsaw', 'maze', 'treasure_hunt',
  'connect_dots', 'animal_habitats', 'match_pictures', 'letter_fishing', 'connect_four', 'numerals', 'trace_letters',
  'word_book', 'listen_picture', 'listen_word', 'listen_letter', 'odd_one_out', 'pattern', 'compare', 'sort_groups',
  'feed_animal', 'big_small', 'next_in_day', 'shape_finder', 'where_ball', 'drawing', 'stories', 'adventures', 'feelings',
};

/// Every learning game that suits the child's age, then the four sections, in the order shown.
List<LearnEntry> learnEntries(ChildProfile child) {
  final age = child.age;
  final id = child.id;
  Future<void> push(BuildContext c, Widget Function() page) => Navigator.push(c, MaterialPageRoute<void>(builder: (_) => page()));
  final classic = <(String, String Function(), int, int, Widget Function())>[
    ('balloons', () => loc('افرقع البالونات'), 1, 2, () => const BalloonGame()),
    ('animal', () => loc('فين الحيوان؟'), 1, 2, () => const WhereAnimalGame()),
    ('colors', () => loc('لعبة الألوان'), 2, 3, () => const ColorGame()),
    ('letters', () => loc('حروف وكلمات'), 3, 8, () => const LettersGame()),
    ('memory', () => loc('لعبة الذاكرة'), 3, 6, () => const MemoryGame()),
    ('math', () => loc('رياضيات'), 4, 12, () => MathGame(age: age)),
  ];
  return [
    for (final g in classic)
      if (age >= g.$3 && age <= g.$4) LearnEntry(g.$1, g.$2, (c) => push(c, () => GameBackdrop(child: g.$5()))),
    for (final g in gamesForAge(age))
      if (kLearnCardIds.contains(g.id))
        LearnEntry(g.id, g.title, (c) async {
          await ResumeStore.mark(id, 'game', g.id);
          if (!c.mounted) return;
          await push(c, () => g.build(id, age, learnLangOf(child)));
        }, learning: true),
    LearnEntry('drawing', () => tr2('الرسم', 'Drawing'), (c) => push(c, () => DrawingScreen(child: child))),
    LearnEntry('stories', () => tr2('القصص والكرتون', 'Stories and cartoons'), (c) => push(c, () => StoriesHomeScreen(child: child))),
    LearnEntry('adventures', () => tr2('مغامرات رحلتي', 'Rehlaty adventures'), (c) => push(c, () => AdventureScreen(child: child))),
    LearnEntry('feelings', () => tr2('المشاعر والأصحاب', 'Feelings and friends'), (c) => push(c, () => LandMapScreen(land: landById('feelings'), child: child))),
  ];
}

/// «الألعاب التعليمية»: every learning game on one page, each with its own card (like the fun-games page), for the
/// child's age. A tick shows on a finished learning game; a heart keeps it in «مكتبتي».
class LearningGamesScreen extends StatefulWidget {
  final ChildProfile child;
  final VoidCallback? onBack;
  const LearningGamesScreen({super.key, required this.child, this.onBack});

  @override
  State<LearningGamesScreen> createState() => _LearningGamesScreenState();
}

class _LearningGamesScreenState extends State<LearningGamesScreen> {
  late Future<Set<String>> _done = GameRewards.doneIds(widget.child.id);

  @override
  Widget build(BuildContext context) {
    final entries = learnEntries(widget.child);
    return DecoratedBox(
      key: const ValueKey('learning_page'),
      decoration: const BoxDecoration(
        gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF9AD8F5), Color(0xFF7CCDB4), Color(0xFF6EC896)]),
      ),
      child: LayoutBuilder(
        builder: (context, box) {
          final w = box.maxWidth;
          final cols = (w / 230).floor().clamp(2, 6);
          final topH = w / kLearnTopAspect;
          return Stack(
            children: [
              Positioned(left: 0, right: 0, bottom: 0, child: IgnorePointer(child: Image.asset(kLearnBottom, fit: BoxFit.fitWidth, width: w))),
              Positioned.fill(
                top: topH,
                child: FutureBuilder<Set<String>>(
                  future: _done,
                  builder: (context, snap) {
                    final done = snap.data ?? const <String>{};
                    return GridView.builder(
                      padding: EdgeInsets.fromLTRB(w * 0.025, 8, w * 0.025, w / kLearnBottomAspect * 0.6),
                      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: cols, childAspectRatio: kLearnCardAspect, mainAxisSpacing: w * 0.012, crossAxisSpacing: w * 0.012),
                      itemCount: entries.length,
                      itemBuilder: (context, i) {
                        final e = entries[i];
                        return Stack(
                          children: [
                            Positioned.fill(
                              child: FocusableTap(
                                key: ValueKey('learn_${e.id}'),
                                radius: 28,
                                semanticLabel: e.title(),
                                onTap: () async {
                                  await e.open(context);
                                  if (mounted) setState(() => _done = GameRewards.doneIds(widget.child.id));
                                },
                                child: Image.asset(learnCard(e.id), fit: BoxFit.contain),
                              ),
                            ),
                            if (e.learning)
                              Positioned(
                                left: 4,
                                top: 4,
                                child: Column(
                                  mainAxisSize: MainAxisSize.min,
                                  children: [
                                    if (done.contains(e.id)) const Icon(Icons.check_circle_rounded, color: Colors.green, size: 28),
                                    HeartButton(childId: widget.child.id, kind: 'game', refId: e.id, size: 24),
                                  ],
                                ),
                              ),
                          ],
                        );
                      },
                    );
                  },
                ),
              ),
              Positioned(left: 0, right: 0, top: 0, child: Image.asset(kLearnTop, fit: BoxFit.fitWidth, width: w)),
              // the owner's round back arrow in the top strip
              Positioned(
                left: 0,
                top: 0,
                width: w * 0.13,
                height: topH,
                child: FocusableTap(
                  key: const ValueKey('learning_back'),
                  radius: 60,
                  semanticLabel: tr2('رجوع', 'Back'),
                  onTap: () => widget.onBack != null ? widget.onBack!() : Navigator.maybePop(context),
                  child: const SizedBox.expand(),
                ),
              ),
            ],
          );
        },
      ),
    );
  }
}
