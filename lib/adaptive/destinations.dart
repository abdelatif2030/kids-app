import 'package:flutter/material.dart';

import '../games/game_catalog.dart';
import '../journey/lands.dart';
import '../journey/models.dart';
import '../journey/ui/land_map_screen.dart';
import '../l10n/strings.dart';
import '../library/vocab_screens.dart';
import '../literacy/screens.dart';
import '../stories/story_screens.dart';

/// How a destination teaches: used to offer practice in a DIFFERENT format when a child struggles.
enum DestFormat { lesson, game, listen, story }

/// A real screen a recommendation can open. Every destination here exists today; nothing is a placeholder.
class Destination {
  final String id;
  final String Function() title;
  final DestFormat format;
  final Set<String> skills;
  final int minAge;
  final int maxAge;
  final Widget Function(ChildProfile child) build;
  const Destination(this.id, this.title, this.format, this.skills, this.minAge, this.maxAge, this.build);

  bool fitsAge(int age) => age >= minAge && age <= maxAge;
}

Destination _game(String id, Set<String> skills, DestFormat format) {
  final g = kEducationalGames.firstWhere((g) => g.id == id);
  return Destination('game:$id', g.title, format, skills, g.minAge, g.maxAge, (c) => g.build(c.id, c.age, c.learnLang));
}

Destination _land(String landId, Set<String> skills, DestFormat format) {
  final l = landById(landId);
  return Destination('land:$landId', () => l.title, format, skills, 3, 12, (c) => LandMapScreen(land: l, child: c));
}

/// Every place the recommender may send a child, with the skills it practises.
/// GAPS (documented in docs/NEXT_GENERATION_LEARNING_AUDIT.md): no dedicated activity for `letters_de`/`letters_fr`.
List<Destination> buildDestinations() => [
      Destination('letters', () => tr2('تعلّم الحروف', 'Learn the letters'), DestFormat.lesson,
          {'letters_ar', 'phonics', 'letter_position', 'syllables', 'word_building', 'reading'}, 3, 12, (c) => LettersHomeScreen(child: c)),
      _game('letter_fishing', {'letters_ar', 'letters_en'}, DestFormat.game),
      Destination('vocab_library', () => tr2('مكتبة الكلمات', 'Word library'), DestFormat.lesson, {'vocab', 'listening', 'english_vocab'}, 2, 12, (c) => VocabLibraryScreen(child: c)),
      _game('feed_animal', {'nature', 'vocab'}, DestFormat.game),
      _game('treasure_hunt', {'spatial'}, DestFormat.game),
      _game('shape_finder', {'shapes', 'colors'}, DestFormat.game),
      _game('where_ball', {'spatial'}, DestFormat.game),
      _game('next_in_day', {'sequence'}, DestFormat.game),
      _land('numbers', {'counting', 'addition', 'subtraction', 'multiplication'}, DestFormat.lesson),
      _game('pattern', {'sequence', 'shapes'}, DestFormat.game),
      _game('snakes_ladders', {'counting'}, DestFormat.game),
      _game('sort_groups', {'vocab', 'shapes'}, DestFormat.game),
      _game('math', {'counting'}, DestFormat.game),
      _land('colors', {'colors', 'shapes'}, DestFormat.lesson),
      _land('english', {'english_vocab', 'letters_en'}, DestFormat.lesson),
      _land('brain', {'memory', 'sequence'}, DestFormat.lesson),
      _land('feelings', {'feelings'}, DestFormat.lesson),
      Destination('stories', () => tr2('قصص «ليلة حلوة»', 'Bedtime stories'), DestFormat.story, {'story', 'listening'}, 1, 12, (c) => StoriesHomeScreen(child: c)),
    ];
