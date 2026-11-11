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

/// The shelves (categories) of the learning page, as chips above the cards.
class LearnShelf {
  final String id;
  final String emoji;
  final String Function() title;
  final Set<String> ids; // empty = every game
  const LearnShelf(this.id, this.emoji, this.title, this.ids);
}

final List<LearnShelf> kLearnShelves = [
  LearnShelf('all', '✨', () => tr2('الكل', 'All'), const {}),
  LearnShelf('brain', '🧠', () => tr2('تفكير', 'Thinking'), const {'maze', 'sort_groups', 'treasure_hunt', 'next_in_day', 'snakes_ladders', 'connect_four', 'where_ball', 'pattern'}),
  LearnShelf('letters', '🔤', () => tr2('حروف', 'Letters'), const {'letters', 'letter_fishing', 'trace_letters', 'word_book', 'listen_letter', 'listen_word'}),
  LearnShelf('numbers', '🔢', () => tr2('أرقام', 'Numbers'), const {'math', 'numerals', 'compare', 'connect_dots', 'big_small'}),
  LearnShelf('shapes', '🎨', () => tr2('ألوان وأشكال', 'Colours & shapes'), const {'colors', 'shape_finder', 'jigsaw'}),
  LearnShelf('animals', '🦁', () => tr2('حيوانات', 'Animals'), const {'animal', 'animal_habitats', 'feed_animal', 'listen_picture', 'balloons'}),
  LearnShelf('observe', '🧩', () => tr2('ذاكرة', 'Memory'), const {'memory', 'match_pictures', 'odd_one_out'}),
  LearnShelf('create', '🖍️', () => tr2('رسم وقصص', 'Draw & stories'), const {'drawing', 'stories', 'adventures', 'feelings'}),
];

/// How the cards of one page are laid out: the biggest cards that fit, in 1-3 rows.
({int rows, int cols, double cardW}) learnGrid(double gridW, double gridH, int count, double gap) {
  var best = (rows: 1, cols: 2, cardW: 0.0);
  var bestScore = -1.0;
  for (var rows = 1; rows <= 3; rows++) {
    var cw = ((gridH - gap * (rows - 1)) / rows) * kLearnCardAspect;
    if (cw > 320) cw = 320;
    var cols = ((gridW + gap) / (cw + gap)).floor();
    if (cols < 2) {
      cols = 2;
      cw = (gridW - gap) / 2;
      final maxH = (gridH - gap * (rows - 1)) / rows;
      if (cw / kLearnCardAspect > maxH) cw = maxH * kLearnCardAspect;
    }
    final shown = (rows * cols).clamp(1, count);
    // big cards matter most; more cards per page is a bonus
    final score = cw * cw * shown;
    if (cw >= 110 && score > bestScore) {
      bestScore = score;
      best = (rows: rows, cols: cols, cardW: cw);
    }
  }
  if (bestScore < 0) best = (rows: 1, cols: 2, cardW: (gridW - gap) / 2);
  return best;
}

/// «الألعاب التعليمية»: every learning game for the child's age, each with its own card (like the fun-games page),
/// shown in pages that fit the screen (owner request: no long scroll): category chips on top, swipe or the big arrows
/// to turn pages, dots below. A tick shows on a finished learning game; a heart keeps it in «مكتبتي».
class LearningGamesScreen extends StatefulWidget {
  final ChildProfile child;
  final VoidCallback? onBack;
  const LearningGamesScreen({super.key, required this.child, this.onBack});

  @override
  State<LearningGamesScreen> createState() => _LearningGamesScreenState();
}

class _LearningGamesScreenState extends State<LearningGamesScreen> {
  late Future<Set<String>> _done = GameRewards.doneIds(widget.child.id);
  String _shelf = 'all';
  int _page = 0;
  final PageController _pages = PageController();

  @override
  void dispose() {
    _pages.dispose();
    super.dispose();
  }

  void _pick(String shelf) {
    if (shelf == _shelf) return;
    setState(() {
      _shelf = shelf;
      _page = 0;
    });
    if (_pages.hasClients) _pages.jumpToPage(0);
  }

  void _turn(int by, int count) {
    final to = (_page + by).clamp(0, count - 1);
    if (to != _page && _pages.hasClients) _pages.animateToPage(to, duration: const Duration(milliseconds: 380), curve: Curves.easeOutCubic);
  }

  @override
  Widget build(BuildContext context) {
    final all = learnEntries(widget.child);
    final shelves = [for (final sh in kLearnShelves) if (sh.ids.isEmpty || all.any((e) => sh.ids.contains(e.id))) sh];
    final shelf = shelves.firstWhere((x) => x.id == _shelf, orElse: () => shelves.first);
    final entries = shelf.ids.isEmpty ? all : [for (final e in all) if (shelf.ids.contains(e.id)) e];
    final rtl = Directionality.of(context) == TextDirection.rtl;
    return DecoratedBox(
      key: const ValueKey('learning_page'),
      decoration: const BoxDecoration(
        gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF9AD8F5), Color(0xFF7CCDB4), Color(0xFF6EC896)]),
      ),
      child: LayoutBuilder(
        builder: (context, box) {
          final w = box.maxWidth;
          final h = box.maxHeight;
          final topH = w / kLearnTopAspect;
          final chipsH = (h * 0.085).clamp(46.0, 58.0);
          const dotsH = 24.0;
          final side = (w * 0.055).clamp(40.0, 68.0); // room for the arrows
          final gap = (w * 0.014).clamp(6.0, 18.0);
          final gridW = w - side * 2;
          final gridTop = topH + chipsH + 12;
          final gridH = (h - gridTop - dotsH - 12).clamp(80.0, double.infinity);
          final g = learnGrid(gridW, gridH, entries.length, gap);
          final perPage = g.rows * g.cols;
          final count = (entries.length / perPage).ceil().clamp(1, 99);
          final cardW = g.cardW;
          final cardH = cardW / kLearnCardAspect;
          return FutureBuilder<Set<String>>(
            future: _done,
            builder: (context, snap) {
              final done = snap.data ?? const <String>{};
              return Stack(
                children: [
                  Positioned(left: 0, right: 0, bottom: 0, child: IgnorePointer(child: Opacity(opacity: 0.85, child: Image.asset(kLearnBottom, fit: BoxFit.fitWidth, width: w)))),
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
                  // category chips
                  Positioned(
                    left: 0,
                    right: 0,
                    top: topH + 6,
                    height: chipsH,
                    child: Center(
                      child: ListView(
                        key: const ValueKey('learn_shelves'),
                        scrollDirection: Axis.horizontal,
                        shrinkWrap: true,
                        padding: EdgeInsets.symmetric(horizontal: side * 0.5),
                        children: [
                          for (final sh in shelves)
                            Padding(
                              padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 4),
                              child: _ShelfChip(key: ValueKey('shelf_${sh.id}'), shelf: sh, selected: sh.id == shelf.id, onTap: () => _pick(sh.id)),
                            ),
                        ],
                      ),
                    ),
                  ),
                  // the pages of cards
                  Positioned(
                    left: side,
                    right: side,
                    top: gridTop,
                    height: gridH,
                    child: PageView.builder(
                      key: ValueKey('learn_pages_${shelf.id}'),
                      controller: _pages,
                      itemCount: count,
                      onPageChanged: (p) => setState(() => _page = p),
                      itemBuilder: (context, p) {
                        final slice = entries.skip(p * perPage).take(perPage).toList();
                        return Center(
                          child: Wrap(
                            spacing: gap,
                            runSpacing: gap,
                            alignment: WrapAlignment.center,
                            children: [
                              for (final (i, e) in slice.indexed)
                                _LearnCard(
                                  key: ValueKey('card_${e.id}'),
                                  entry: e,
                                  width: cardW,
                                  height: cardH,
                                  delay: i,
                                  done: done.contains(e.id),
                                  childId: widget.child.id,
                                  onOpen: () async {
                                    await e.open(context);
                                    if (mounted) setState(() => _done = GameRewards.doneIds(widget.child.id));
                                  },
                                ),
                            ],
                          ),
                        );
                      },
                    ),
                  ),
                  // big arrows to turn the page (the "next" arrow points the way the child reads)
                  if (count > 1) ...[
                    Positioned(
                      left: 4,
                      top: gridTop + gridH / 2 - side / 2,
                      child: _PageArrow(key: ValueKey(rtl ? 'learn_next' : 'learn_prev'), size: side - 6, left: true, enabled: rtl ? _page < count - 1 : _page > 0, onTap: () => _turn(rtl ? 1 : -1, count)),
                    ),
                    Positioned(
                      right: 4,
                      top: gridTop + gridH / 2 - side / 2,
                      child: _PageArrow(key: ValueKey(rtl ? 'learn_prev' : 'learn_next'), size: side - 6, left: false, enabled: rtl ? _page > 0 : _page < count - 1, onTap: () => _turn(rtl ? -1 : 1, count)),
                    ),
                  ],
                  // page dots
                  Positioned(
                    left: 0,
                    right: 0,
                    bottom: 6,
                    height: dotsH,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        for (var i = 0; i < count; i++)
                          AnimatedContainer(
                            duration: const Duration(milliseconds: 250),
                            margin: const EdgeInsets.symmetric(horizontal: 4),
                            width: i == _page ? 28 : 12,
                            height: 12,
                            decoration: BoxDecoration(
                              color: i == _page ? const Color(0xFF6A3AD0) : Colors.white.withValues(alpha: 0.9),
                              borderRadius: BorderRadius.circular(8),
                              boxShadow: const [BoxShadow(color: Color(0x33000000), blurRadius: 4, offset: Offset(0, 2))],
                            ),
                          ),
                      ],
                    ),
                  ),
                ],
              );
            },
          );
        },
      ),
    );
  }
}

class _ShelfChip extends StatelessWidget {
  final LearnShelf shelf;
  final bool selected;
  final VoidCallback onTap;
  const _ShelfChip({super.key, required this.shelf, required this.selected, required this.onTap});

  @override
  Widget build(BuildContext context) => FocusableTap(
    radius: 30,
    semanticLabel: shelf.title(),
    onTap: onTap,
    child: AnimatedContainer(
      duration: const Duration(milliseconds: 220),
      padding: const EdgeInsets.symmetric(horizontal: 16),
      alignment: Alignment.center,
      decoration: BoxDecoration(
        gradient: selected ? const LinearGradient(colors: [Color(0xFF9A6AF0), Color(0xFF6A3AD0)]) : null,
        color: selected ? null : Colors.white.withValues(alpha: 0.92),
        borderRadius: BorderRadius.circular(30),
        border: Border.all(color: Colors.white, width: 3),
        boxShadow: const [BoxShadow(color: Color(0x33000000), blurRadius: 6, offset: Offset(0, 3))],
      ),
      child: Text(
        '${shelf.emoji}  ${shelf.title()}',
        style: TextStyle(fontWeight: FontWeight.w900, fontSize: 17, color: selected ? Colors.white : const Color(0xFF3A2A6A)),
      ),
    ),
  );
}

class _PageArrow extends StatelessWidget {
  final double size;
  final bool left;
  final bool enabled;
  final VoidCallback onTap;
  const _PageArrow({super.key, required this.size, required this.left, required this.enabled, required this.onTap});

  @override
  Widget build(BuildContext context) => AnimatedOpacity(
    duration: const Duration(milliseconds: 200),
    opacity: enabled ? 1 : 0.3,
    child: FocusableTap(
      radius: size,
      semanticLabel: tr2('صفحة تانية', 'Turn the page'),
      onTap: enabled ? onTap : () {},
      child: Container(
        width: size,
        height: size,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          gradient: const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFFFFD45A), Color(0xFFF5A01A)]),
          border: Border.all(color: Colors.white, width: 3),
          boxShadow: const [BoxShadow(color: Color(0x44000000), blurRadius: 8, offset: Offset(0, 4))],
        ),
        child: Icon(left ? Icons.chevron_left_rounded : Icons.chevron_right_rounded, color: Colors.white, size: size * 0.8, textDirection: TextDirection.ltr),
      ),
    ),
  );
}

/// One card: the game's picture, popping in one after another when a page appears; a tick and a heart for learning games.
class _LearnCard extends StatelessWidget {
  final LearnEntry entry;
  final double width;
  final double height;
  final int delay;
  final bool done;
  final String childId;
  final VoidCallback onOpen;
  const _LearnCard({super.key, required this.entry, required this.width, required this.height, required this.delay, required this.done, required this.childId, required this.onOpen});

  @override
  Widget build(BuildContext context) => TweenAnimationBuilder<double>(
    tween: Tween(begin: 0, end: 1),
    duration: Duration(milliseconds: 300 + delay * 60),
    curve: Curves.easeOutBack,
    builder: (context, k, child) => Transform.scale(scale: 0.7 + 0.3 * k, child: Opacity(opacity: k.clamp(0.0, 1.0), child: child)),
    child: SizedBox(
      width: width,
      height: height,
      child: Stack(
        children: [
          Positioned.fill(
            child: FocusableTap(
              key: ValueKey('learn_${entry.id}'),
              radius: 28,
              semanticLabel: entry.title(),
              onTap: onOpen,
              child: Image.asset(learnCard(entry.id), fit: BoxFit.contain),
            ),
          ),
          if (entry.learning)
            Positioned(
              left: 4,
              top: 4,
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  if (done) const Icon(Icons.check_circle_rounded, color: Colors.green, size: 28),
                  HeartButton(childId: childId, kind: 'game', refId: entry.id, size: 24),
                ],
              ),
            ),
        ],
      ),
    ),
  );
}
