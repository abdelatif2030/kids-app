import 'package:flutter/material.dart';

import '../journey/models.dart';
import '../l10n/strings.dart';
import 'choice_games.dart';
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
  GameInfo(
    ListenPictureGame.gameId,
    () => tr2('اسمع واختر الصورة', 'Listen and pick the picture'),
    () => tr2('الاستماع وربط الكلمة بالصورة', 'Listening and linking a word to its picture'),
    Icons.hearing_rounded,
    3,
    6,
    (id, age, _) => ListenPictureGame(childId: id, age: age),
  ),
  GameInfo(
    ListenWordGame.gameId,
    () => tr2('اسمع واختر الكلمة', 'Listen and pick the word'),
    () => tr2('ربط الصوت بالكلمة المكتوبة', 'Linking a sound to the written word'),
    Icons.record_voice_over_rounded,
    5,
    8,
    (id, age, _) => ListenWordGame(childId: id, age: age),
  ),
  GameInfo(
    ListenLetterGame.gameId,
    () => tr2('اسمع واختر الحرف', 'Listen and pick the letter'),
    () => tr2('ربط اسم الحرف بشكله', 'Linking a letter’s name to its shape'),
    Icons.spatial_audio_off_rounded,
    4,
    6,
    (id, age, _) => ListenLetterGame(childId: id, age: age),
  ),
  GameInfo(
    OddOneOutGame.gameId,
    () => tr2('ما المختلف؟', 'Which is different?'),
    () => tr2('التصنيف والملاحظة', 'Grouping and noticing'),
    Icons.search_rounded,
    3,
    6,
    (id, age, _) => OddOneOutGame(childId: id, age: age),
  ),
  GameInfo(
    PatternGame.gameId,
    () => tr2('أكمل النمط', 'Complete the pattern'),
    () => tr2('اكتشاف التسلسل', 'Spotting a sequence'),
    Icons.linear_scale_rounded,
    4,
    6,
    (id, age, _) => PatternGame(childId: id, age: age),
  ),
  GameInfo(
    CompareGame.gameId,
    () => tr2('أكثر وأقل', 'More and fewer'),
    () => tr2('مقارنة الأعداد', 'Comparing quantities'),
    Icons.compare_arrows_rounded,
    3,
    6,
    (id, age, _) => CompareGame(childId: id, age: age),
  ),
  GameInfo(
    SortGame.gameId,
    () => tr2('رتّب في مجموعات', 'Sort into groups'),
    () => tr2('تصنيف الأشياء', 'Sorting things'),
    Icons.category_rounded,
    4,
    6,
    (id, age, _) => SortGame(childId: id, age: age),
  ),
];

/// The new games that suit [age], in catalog order. No age, no guessing: callers pass the child's age.
List<GameInfo> gamesForAge(int age) => [
  for (final g in kEducationalGames)
    if (g.fitsAge(age)) g,
];

String learnLangOf(ChildProfile? c) => c?.learnLang ?? 'both';
