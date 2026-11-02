import 'dart:math' as math;

import 'package:flutter/material.dart';

import '../adventures/adventure_screen.dart';
import '../design/focusable_tap.dart';
import '../design/hub_art.dart';
import '../drawing_screen.dart';
import '../games_screen.dart';
import '../journey/lands.dart';
import '../journey/models.dart';
import '../journey/my_day.dart';
import '../journey/ui/land_map_screen.dart';
import '../l10n/strings.dart';
import '../stories/story_screens.dart';
import 'game_catalog.dart';
import 'fun_games.dart';

/// One island of the games hub: where it leads — a list of games, or one existing screen.
class GameCategory {
  final String id;
  final String Function() title;

  /// Where the island sits on the owner's picture: centre as a fraction of the picture's width and height.
  final Offset spot;

  /// Where the name pill sits on the picture (centre, as fractions): a real label is drawn there.
  final Offset label;

  /// The games inside (ids as in the games map). Empty when the island opens a screen of its own.
  final Set<String> games;

  /// A screen of its own (feelings, drawing, stories, adventures) instead of a list of games.
  final Widget Function(ChildProfile child)? screen;
  const GameCategory(this.id, this.title, this.spot, this.label, {this.games = const {}, this.screen});
}

/// The ten islands, in the order of the owner's design (left to right, top row then bottom row).
final List<GameCategory> kGameCategories = [
  GameCategory('brain', () => tr2('ألعاب الذكاء والتفكير', 'Thinking games'), const Offset(0.119, 0.475), const Offset(0.119, 0.534),
      games: {'maze', 'sort_groups', 'treasure_hunt', 'next_in_day', 'snakes_ladders', 'connect_four', 'where_ball', 'pattern', 'fun_xo', 'fun_snake'}),
  GameCategory('letters', () => tr2('الحروف والكلمات', 'Letters and words'), const Offset(0.323, 0.475), const Offset(0.323, 0.534),
      games: {'letters', 'letter_fishing', 'trace_letters', 'word_book', 'listen_letter', 'listen_word', 'review_words'}),
  GameCategory('numbers', () => tr2('الأرقام والحساب', 'Numbers and maths'), const Offset(0.505, 0.475), const Offset(0.505, 0.534),
      games: {'math', 'numerals', 'compare', 'connect_dots', 'big_small'}),
  GameCategory('shapes', () => tr2('الألوان والأشكال', 'Colours and shapes'), const Offset(0.697, 0.475), const Offset(0.697, 0.534), games: {'colors', 'shape_finder', 'jigsaw'}),
  GameCategory('animals', () => tr2('الحيوانات والطبيعة', 'Animals and nature'), const Offset(0.892, 0.475), const Offset(0.892, 0.534),
      games: {'animal', 'animal_habitats', 'feed_animal', 'listen_picture', 'balloons'}),
  GameCategory('observe', () => tr2('الذاكرة والملاحظة', 'Memory and observation'), const Offset(0.122, 0.78), const Offset(0.122, 0.83),
      games: {'memory', 'match_pictures', 'odd_one_out', 'fun_whack', 'fun_stars'}),
  GameCategory('feelings', () => tr2('المشاعر والاجتماعيات', 'Feelings and friends'), const Offset(0.319, 0.78), const Offset(0.319, 0.83),
      screen: (c) => LandMapScreen(land: landById('feelings'), child: c)),
  GameCategory('art', () => tr2('الإبداع والرسم', 'Creating and drawing'), const Offset(0.507, 0.78), const Offset(0.507, 0.83), screen: (c) => DrawingScreen(child: c)),
  GameCategory('stories', () => tr2('القصص والكرتون', 'Stories and cartoons'), const Offset(0.702, 0.78), const Offset(0.702, 0.83), screen: (c) => StoriesHomeScreen(child: c)),
  GameCategory('adventures', () => tr2('مغامرات رحلتي', 'Rehlaty adventures'), const Offset(0.894, 0.78), const Offset(0.894, 0.83), screen: (c) => AdventureScreen(child: c)),
];

/// Every game id the hub knows about, to check that no game is lost and none is listed twice.
Set<String> allHubGameIds() => {for (final c in kGameCategories) ...c.games};

/// The owner's own picture of the games screen (assets/games/hub_scene.jpg, 1242 x 697): Adam and Nour above a wooden
/// sign and ten floating islands. The picture is shown whole; every island is a large invisible button on top of it,
/// so what a child sees is exactly the design. The bell and profile picture of the design were painted out (they would
/// be fake: the bell showed an unread count).
const String kGamesHubPicture = 'assets/games/hub_scene.jpg';
const double kGamesHubAspect = 1242 / 697;
const Offset kHubBackSpot = Offset(0.055, 0.079);

/// A phone held sideways keeps the picture alone, as large as the area allows. A tablet has room to spare, so the
/// picture keeps its proportions (never stretched) and the spare height carries a strip of games picked for the child.
class GamesHub extends StatelessWidget {
  final ChildProfile child;

  /// The arrow at the top left of the picture: back to the home tab.
  final VoidCallback? onBack;
  const GamesHub({super.key, required this.child, this.onBack});

  void _open(BuildContext context, GameCategory c) {
    final page = c.screen != null ? c.screen!(child) : CategoryGamesScreen(category: c, child: child);
    Navigator.push(context, MaterialPageRoute<void>(builder: (_) => page));
  }

  /// The smallest height kept for the featured strip on a tablet.
  static const stripMin = 150.0;

  @override
  Widget build(BuildContext context) {
    final dir = Directionality.of(context);
    final tablet = MediaQuery.sizeOf(context).shortestSide >= 600;
    return LayoutBuilder(builder: (context, box) {
      final maxW = box.maxWidth;
      final maxH = box.hasBoundedHeight ? box.maxHeight : maxW / kGamesHubAspect;
      final stripH = tablet ? (maxH - maxW / kGamesHubAspect).clamp(stripMin, 300.0).toDouble() : 0.0;
      final availH = maxH - stripH;
      // the whole picture, as large as the area allows, never stretched
      var w = maxW, h = maxW / kGamesHubAspect;
      if (h > availH) {
        h = availH;
        w = availH * kGamesHubAspect;
      }
      // Name pills: readable on a phone (never below 12), larger on a tablet.
      final font = (w * (tablet ? 0.0172 : 0.021)).clamp(12.0, tablet ? 17.0 : 15.0).toDouble();
      Widget at(Offset o, double sw, double sh, Widget c) =>
          Positioned(left: (o.dx - sw / 2) * w, top: (o.dy - sh / 2) * h, width: sw * w, height: sh * h, child: c);
      final picture = SizedBox(
        key: const ValueKey('hub_picture_box'),
        width: w,
        height: h,
        child: Stack(
          children: [
            Positioned.fill(
              child: ExcludeSemantics(
                child: Image.asset(kGamesHubPicture, key: const ValueKey('hub_picture'), fit: BoxFit.fill, filterQuality: FilterQuality.medium, errorBuilder: (_, _, _) => const SizedBox()),
              ),
            ),
            for (final c in kGameCategories) ...[
              // a real name over the one painted in the picture: sized for the screen, and in the interface language
              at(c.label, 0.178, 0.112, IgnorePointer(child: ExcludeSemantics(child: _NamePill(text: c.title(), font: font, dir: dir)))),
              at(
                c.spot,
                kHubHotspotW,
                kHubHotspotH,
                FocusableTap(
                  key: ValueKey('hub_${c.id}'),
                  onTap: () => _open(context, c),
                  radius: 24,
                  semanticLabel: c.title(),
                  child: const SizedBox.expand(),
                ),
              ),
            ],
            if (onBack != null)
              at(
                kHubBackSpot,
                0.075,
                0.13,
                FocusableTap(
                  key: const ValueKey('hub_back'),
                  onTap: onBack!,
                  radius: 40,
                  semanticLabel: tr2('رجوع', 'Back'),
                  child: const SizedBox.expand(),
                ),
              ),
          ],
        ),
      );
      final portrait = MediaQuery.orientationOf(context) == Orientation.portrait;
      // Held upright, a phone gets the picture plus a friendly hint; the app is made for landscape.
      final hint = !tablet && portrait
          ? Padding(
              key: const ValueKey('hub_rotate_hint'),
              padding: const EdgeInsets.only(top: 14, left: 16, right: 16),
              child: Directionality(
                textDirection: dir,
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                  decoration: BoxDecoration(color: const Color(0xFF5B2BB8), borderRadius: BorderRadius.circular(20), border: Border.all(color: Colors.white, width: 1.5)),
                  child: Row(mainAxisSize: MainAxisSize.min, children: [
                    const Icon(Icons.screen_rotation_rounded, color: Colors.white),
                    const SizedBox(width: 8),
                    Flexible(child: Text(tr2('أدِر الجهاز أفقياً للّعب بشكل أفضل', 'Turn your device sideways for a better game'), style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w800, color: Colors.white))),
                  ]),
                ),
              ),
            )
          : null;
      return Container(
        key: const ValueKey('hub_backdrop'),
        decoration: const BoxDecoration(
          gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF7B58D8), Color(0xFFB18CF0), Color(0xFFE9B9F2)]),
        ),
        child: tablet
            ? Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Center(child: picture),
                  // upright, the strip sits right under the picture instead of floating in the middle of empty space
                  SizedBox(height: stripH, child: FeaturedStrip(key: const ValueKey('hub_featured'), child: child, dir: dir)),
                ],
              )
            : Column(mainAxisAlignment: MainAxisAlignment.center, children: [Center(child: picture), ?hint]),
      );
    });
  }
}

/// The hotspot of one island (fractions of the picture): the island and its name. Neighbours never touch.
const double kHubHotspotW = 0.178;
const double kHubHotspotH = 0.29;

class _NamePill extends StatelessWidget {
  final String text;
  final double font; // the size to aim for; the name shrinks (never below [kHubMinNameFont]) only when it must
  final TextDirection dir;
  const _NamePill({required this.text, required this.font, required this.dir});

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, box) {
      final pad = font * 0.4;
      final showPlay = font >= 15; // a phone has no room for the little play button: the name is what matters
      final circle = showPlay ? font * 1.2 : 0.0;
      final textW = math.max(1.0, box.maxWidth - pad * 2 - circle - (showPlay ? font * 0.3 : 0) - 4);
      final size = fitNameFont(text, textW, box.maxHeight - font * 0.2, font, dir);
      return Container(
        alignment: Alignment.center,
        padding: EdgeInsets.symmetric(horizontal: pad, vertical: font * 0.1),
        decoration: BoxDecoration(
          gradient: const LinearGradient(colors: [Color(0xFF8A52E8), Color(0xFF5B2BB8)]),
          borderRadius: BorderRadius.circular(font * 1.4),
          border: Border.all(color: Colors.white, width: 1.5),
          boxShadow: const [BoxShadow(color: Color(0x55000000), blurRadius: 3, offset: Offset(0, 2))],
        ),
        child: Directionality(
          textDirection: dir,
          child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
            if (showPlay) ...[
              Container(
                width: circle,
                height: circle,
                decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle),
                child: Icon(Icons.play_arrow_rounded, size: circle * 0.85, color: const Color(0xFF5B2BB8)),
              ),
              SizedBox(width: font * 0.3),
            ],
            SizedBox(
              width: textW,
              child: Text(text, key: ValueKey('hub_name_$text'), maxLines: 2, textAlign: TextAlign.center, style: TextStyle(fontFamily: 'Tajawal', fontSize: size, fontWeight: FontWeight.w900, color: Colors.white, height: 1.05)),
            ),
          ]),
        ),
      );
    });
  }
}

/// The smallest size a name is ever shown at.
const double kHubMinNameFont = 10.0;

/// The largest font up to [target] at which [text] fits [maxW] x [maxH] in at most two lines.
double fitNameFont(String text, double maxW, double maxH, double target, TextDirection dir) {
  var size = target;
  while (size > kHubMinNameFont) {
    final tp = TextPainter(
      text: TextSpan(text: text, style: TextStyle(fontFamily: 'Tajawal', fontSize: size, fontWeight: FontWeight.w900, height: 1.05)),
      textDirection: dir,
      maxLines: 2,
      textAlign: TextAlign.center,
    )..layout(maxWidth: maxW);
    if (!tp.didExceedMaxLines && tp.height <= maxH) return size;
    size -= 0.5;
  }
  return kHubMinNameFont;
}

/// Tablet only: games picked for this child, each on its own island and one tap from playing. They are the game of the
/// day, the day's surprise and then the first games that suit the age. Nothing here counts or scores.
class FeaturedStrip extends StatelessWidget {
  final ChildProfile child;
  final TextDirection dir;
  const FeaturedStrip({super.key, required this.child, required this.dir});

  /// The games shown for [age], at most [count], without repeats.
  static List<GameInfo> pick(int age, DateTime now, int count) {
    final out = <GameInfo>[];
    void add(GameInfo? g) {
      if (g != null && !out.any((x) => x.id == g.id)) out.add(g);
    }

    add(gameOfDay(now, age));
    add(surpriseOfDay(now, age).game);
    for (final g in gamesForAge(age)) {
      add(g);
    }
    return out.take(count).toList();
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, box) {
      final titleH = 38.0;
      // aim for six to eight islands in a row: a tablet shows more, but each one stays easy to hit
      final islandW = math.min(160.0, math.max(70.0, math.min((box.maxHeight - titleH - 52) / GrassIsland.heightFactor, (box.maxWidth - 56) / 6 - 20))).toDouble();
      final slot = islandW + 20;
      final count = math.max(1, math.min(8, ((box.maxWidth - 56) / slot).floor()));
      final games = pick(child.age, DateTime.now(), count);
      Widget heading(String text) => Container(
            margin: EdgeInsets.only(bottom: 6),
            padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 4),
            decoration: BoxDecoration(color: const Color(0xFF5B2BB8), borderRadius: BorderRadius.circular(20), border: Border.all(color: Colors.white, width: 1.5)),
            child: Text(text, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: Colors.white)),
          );
      if (games.isEmpty) {
        // the youngest children have no learning games yet: point them to the islands instead of leaving a gap
        return Center(child: Directionality(textDirection: dir, child: heading(tr2('اختر جزيرة وابدأ اللعب', 'Pick an island and play'))));
      }
      return Directionality(
        textDirection: dir,
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 28),
          // never overflows: in the rare tight case the whole strip shrinks a little instead
          child: FittedBox(
            fit: BoxFit.scaleDown,
            child: SizedBox(
              width: box.maxWidth - 56,
              child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            mainAxisSize: MainAxisSize.min,
            children: [
              heading(tr2('ألعاب مختارة لك', 'Picked for you')),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  for (final g in games)
                    FocusableTap(
                      key: ValueKey('featured_${g.id}'),
                      onTap: () => Navigator.push(context, MaterialPageRoute<void>(builder: (_) => g.build(child.id, child.age, learnLangOf(child)))),
                      radius: 20,
                      semanticLabel: g.title(),
                      child: SizedBox(
                        width: islandW,
                        child: Column(mainAxisSize: MainAxisSize.min, children: [
                          GrassIsland(width: islandW, symbol: Text(kGameEmoji[g.id] ?? '🎲', style: TextStyle(fontSize: islandW * 0.4))),
                          const SizedBox(height: 4),
                          Container(
                            constraints: BoxConstraints(maxWidth: islandW + 16),
                            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                            decoration: BoxDecoration(color: const Color(0xFFFFF3D6), borderRadius: BorderRadius.circular(10), border: Border.all(color: const Color(0xFF6B45D6), width: 2)),
                            child: Text(g.title(), maxLines: 2, textAlign: TextAlign.center, style: const TextStyle(fontSize: 14, height: 1.1, fontWeight: FontWeight.w900, color: Color(0xFF4A3320))),
                          ),
                        ]),
                      ),
                    ),
                ],
              ),
            ],
          ),
            ),
          ),
        ),
      );
    });
  }
}

/// The games of one island, each on its own island.
class CategoryGamesScreen extends StatelessWidget {
  final GameCategory category;
  final ChildProfile child;
  const CategoryGamesScreen({super.key, required this.category, required this.child});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(category.title(), style: const TextStyle(fontWeight: FontWeight.w900, color: Colors.white)),
        centerTitle: true,
        backgroundColor: const Color(0xFF6B3FCB),
        iconTheme: const IconThemeData(color: Colors.white),
      ),
      body: SafeArea(child: GamesGrid(key: ValueKey('category_${category.id}'), age: child.age, child: child, only: category.games)),
    );
  }
}

/// Ids of every game the hub should list for [age], to test that nothing is missing.
Set<String> gamesInHubForAge(int age) => {
      for (final (id, a, b) in const [('balloons', 1, 2), ('animal', 1, 2), ('colors', 2, 3), ('letters', 3, 8), ('memory', 3, 6), ('math', 4, 12)])
        if (age >= a && age <= b) id,
      ...[for (final g in kEducationalGames) if (g.fitsAge(age)) g.id],
      ...[for (final g in funGamesForAge(age)) 'fun_${g.id}'],
    };
