import 'package:flutter/material.dart';

import '../journey/models.dart';
import '../l10n/strings.dart';
import 'connect_four_game.dart';
import 'letter_fishing_game.dart';
import 'match_pictures_game.dart';
import 'numerals_game.dart';
import 'trace_game.dart';
import 'word_book_game.dart';

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

final List<GameInfo> kEducationalGames = [
  GameInfo(
    MatchPicturesGame.gameId,
    () => tr2('طابق الصور المتشابهة', 'Match identical pictures'),
    () => tr2('الانتباه للتفاصيل والذاكرة', 'Attention to detail and memory'),
    Icons.style_rounded,
    3,
    6,
    (id, age, _) => MatchPicturesGame(childId: id, age: age),
  ),
  GameInfo(
    LetterFishingGame.gameId,
    () => tr2('صيد الحروف', 'Letter fishing'),
    () => tr2('التعرّف على شكل الحرف', 'Recognising letter shapes'),
    Icons.phishing_rounded,
    4,
    6,
    (id, age, lang) => LetterFishingGame(childId: id, age: age, lang: lang),
  ),
  GameInfo(
    ConnectFourGame.gameId,
    () => tr2('أربعة في صف', 'Four in a row'),
    () => tr2(
      'التفكير والتناوب مع صديق (لاعبان على جهاز واحد)',
      'Thinking and taking turns with a friend (two players, one device)',
    ),
    Icons.grid_on_rounded,
    5,
    6,
    (id, _, _) => ConnectFourGame(childId: id),
  ),
  GameInfo(
    NumeralsGame.gameId,
    () => tr2('أرقام عربية وهندية', 'Western and Arabic-Indic numerals'),
    () => tr2('ربط ٣ بـ 3', 'Linking Western digits with Arabic-Indic digits'),
    Icons.pin_rounded,
    4,
    6,
    (id, age, _) => NumeralsGame(childId: id, age: age),
  ),
  GameInfo(
    TraceGame.gameId,
    () => tr2('تتبّع الحرف', 'Trace the letter'),
    () =>
        tr2('التحكم باليد في كتابة الحروف', 'Hand control for writing letters'),
    Icons.gesture_rounded,
    4,
    6,
    (id, _, _) => TraceGame(childId: id),
  ),
  GameInfo(
    WordBookGame.gameId,
    () => tr2('كتاب الكلمات', 'Word picture book'),
    () => tr2('٥٠ كلمة شائعة بالصور', '50 common words with pictures'),
    Icons.menu_book_rounded,
    2,
    6,
    (id, _, _) => WordBookGame(childId: id),
  ),
];

/// The new games that suit [age], in catalog order. No age, no guessing: callers pass the child's age.
List<GameInfo> gamesForAge(int age) => [
  for (final g in kEducationalGames)
    if (g.fitsAge(age)) g,
];

String learnLangOf(ChildProfile? c) => c?.learnLang ?? 'both';
