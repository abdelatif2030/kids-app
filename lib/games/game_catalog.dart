import 'package:flutter/material.dart';

import '../journey/models.dart';
import '../l10n/strings.dart';
import 'adventure_games.dart';
import 'choice_games.dart';
import 'letter_fishing_game.dart';
import 'life_games.dart';
import 'shape_games.dart';
import 'web_games/web_game_screen.dart';

/// One of the new educational games: what it is called, who it is for and what it teaches.
class GameInfo {
  final String id;
  final String Function() title;
  final String Function() objective;
  final IconData icon;
  final int minAge;
  final int maxAge;
  final Widget Function(String childId, int age, String learnLang) build;
  const GameInfo(
    this.id,
    this.title,
    this.objective,
    this.icon,
    this.minAge,
    this.maxAge,
    this.build,
  );

  bool fitsAge(int age) => age >= minAge && age <= maxAge;
  String get ages => '$minAge–$maxAge';
}

/// The picture on each game's island: one clear logo per game (classic games first, then the learning games).
const Map<String, String> kGameEmoji = {
  'animal': '🐾',
  'colors': '🎨',
  'letters': '🔤',
  'memory': '🧠',
  'math': '➕',
  'snakes_ladders': '🎲',
  'jigsaw': '🧩',
  'maze': '🐭',
  'treasure_hunt': '💎',
  'connect_dots': '✏️',
  'animal_habitats': '🦁',
  'odd_one_out': '🔍',
  'pattern': '🔷',
  'compare': '⚖️',
  'sort_groups': '🗂️',
  'listen_picture': '👂',
  'listen_word': '🔊',
  'listen_letter': '🔔',
  'letter_fishing': '🎣',
  'match_pictures': '🃏',
  'numerals': '🔢',
  'review_words': '⭐',
  'trace_letters': '✍️',
  'word_book': '📖',
  'drawing': '🎨',
  'shape_finder': '🔷',
  'where_ball': '⚽',
  'feed_animal': '🍌',
  'big_small': '🐘',
  'next_in_day': '🌅',
  'fun_whack': '🐹',
  'fun_stars': '⭐',
  'fun_xo': '❌',
  'fun_snake': '🐍',
};

final List<GameInfo> kEducationalGames = [
  GameInfo(
    SnakesLaddersGame.gameId,
    () => tr2('السلالم والزلاجات', 'Ladders and slides'),
    () => tr2(
      'العدّ والتقدم على لوحة، وانتظار الدور',
      'Counting along a board, taking turns',
    ),
    Icons.stairs_rounded,
    4,
    6,
    (id, age, _) => learnWebGameScreen(kLearnLadders, id, age), // rebuilt: 3D playground board with real slides
  ),
  GameInfo(
    TreasureHuntGame.gameId,
    () => tr2('كنز الجزيرة', 'Island treasure'),
    () => tr2(
      'المواقع والاتجاهات والتفكير المنطقي',
      'Positions, directions and logical thinking',
    ),
    Icons.diamond_rounded,
    4,
    6,
    (id, age, _) => learnWebGameScreen(kLearnTreasure, id, age), // rebuilt as a 3D island (the old game stays)
  ),
  GameInfo(
    LetterFishingGame.gameId,
    () => tr2('عالم رحلتي التعليمي', 'Rehlaty Learning World'),
    () => tr2('حروف وأرقام وأشكال وحيوانات وعادات حلوة، بالصور والصوت', 'Letters, numbers, shapes, animals and good habits, with pictures and sound'),
    Icons.phishing_rounded,
    3,
    6,
    (id, age, _) => learnWebGameScreen(kLearnLetters, id, age), // rebuilt: things that start with each letter float on rafts
  ),
  GameInfo(
    PatternGame.gameId,
    () => tr2('أكمل النمط', 'Complete the pattern'),
    () => tr2('اكتشاف التسلسل', 'Spotting a sequence'),
    Icons.linear_scale_rounded,
    4,
    6,
    (id, age, _) => learnWebGameScreen(kLearnPattern, id, age), // rebuilt: glossy beads, the voice names colour and shape
  ),
  GameInfo(
    SortGame.gameId,
    () => tr2('رتّب في مجموعات', 'Sort into groups'),
    () => tr2('تصنيف الأشياء', 'Sorting things'),
    Icons.category_rounded,
    4,
    6,
    (id, age, _) => learnWebGameScreen(kLearnSort, id, age), // rebuilt as a 3D toy shop (the old SortGame stays)
  ),
  GameInfo(
    FeedAnimalGame.gameId,
    () => tr2('أطعم الحيوان', 'Feed the animal'),
    () => tr2('ماذا يأكل كل حيوان؟', 'What each animal eats'),
    Icons.pets_rounded,
    2,
    6,
    (id, age, _) => learnWebGameScreen(kLearnAnimals, id, age), // rebuilt: a meadow and a picnic table of foods
  ),
  GameInfo(
    NextInDayGame.gameId,
    () => tr2('رتّب يومي', 'Arrange my day'),
    () => tr2('ترتيب أحداث اليوم', 'The order of daily routines'),
    Icons.wb_sunny_rounded,
    3,
    6,
    (id, age, _) => learnWebGameScreen(kLearnDay, id, age), // rebuilt: clothesline and a sky that follows the day
  ),
  GameInfo(
    ShapeFinderGame.gameId,
    () => tr2('أين الشكل؟', 'Find the shape'),
    () => tr2('أسماء الأشكال وألوانها', 'Shape names and colours'),
    Icons.change_history_rounded,
    2,
    6,
    (id, age, _) => learnWebGameScreen(kLearnShapes, id, age), // rebuilt: a shape-sorter board
  ),
  GameInfo(
    WhereIsBallGame.gameId,
    () => tr2('أين الكرة؟', 'Where is the ball?'),
    () => tr2('فوق وتحت وداخل وبجانب', 'On top, under, inside and next to'),
    Icons.sports_soccer_rounded,
    3,
    6,
    (id, age, _) => learnWebGameScreen(kLearnBall, id, age), // rebuilt: 3D playroom and a puppy
  ),
  GameInfo(
    'math',
    () => tr2('الحساب والعدّ', 'Counting and sums'),
    () => tr2('العدّ والجمع والطرح بالصور', 'Counting, adding and taking away with pictures'),
    Icons.calculate_rounded,
    4,
    6,
    (id, age, _) => learnWebGameScreen(kLearnCounting, id, age), // rebuilt: a fruit market, counted aloud
  ),
];

/// The learning games shown to a child of [age]. The owner decided (2026-11-12) on ONE strong game, «عالم رحلتي
/// التعليمي»: every other learning game became a level of it. The older entries of [kEducationalGames] stay only so
/// that old ids (curriculum units, adventures, saved progress) still resolve; they are no longer offered.
List<GameInfo> gamesForAge(int age) => [
  for (final g in kEducationalGames)
    if (g.id == LetterFishingGame.gameId && g.fitsAge(age)) g,
];

String learnLangOf(ChildProfile? c) => c?.learnLang ?? 'both';
