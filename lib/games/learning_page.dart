import 'package:flutter/material.dart';

import '../design/picture_stage.dart';
import '../journey/models.dart';
import '../journey/resume.dart';
import '../l10n/strings.dart';
import 'game_catalog.dart';

/// The owner's picture for «الألعاب التعليمية» (2026-11-12): the underwater adventure with the heroes, the owl and the one
/// learning game's card. It is the whole page: nothing else is drawn over it (the old cards, chips and sections were
/// removed on the owner's request; the learning world holds every learning activity as levels).
const String kLearnPagePicture = 'assets/games/learn_page.webp';
const double kLearnPageAspect = 1672 / 941;

/// The id of the one learning game (the learning world; the old id is kept so that progress and stars carry over).
const String kLearningGameId = 'letter_fishing';

/// «الألعاب التعليمية»: the owner's picture with two invisible buttons: the back arrow and the big card (play).
class LearningGamesScreen extends StatelessWidget {
  final ChildProfile child;
  final VoidCallback? onBack;
  const LearningGamesScreen({super.key, required this.child, this.onBack});

  Future<void> _open(BuildContext context) async {
    if (gamesForAge(child.age).isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(tr2('هذه اللعبة لأعمار ٣ إلى ٦ سنوات', 'This game is for ages 3 to 6'))));
      return;
    }
    final g = kEducationalGames.firstWhere((x) => x.id == kLearningGameId);
    await ResumeStore.mark(child.id, 'game', kLearningGameId);
    if (!context.mounted) return;
    await Navigator.push<void>(context, MaterialPageRoute<void>(builder: (_) => g.build(child.id, child.age, learnLangOf(child))));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF3AA8F0),
      body: PictureStage(
        key: const ValueKey('learning_page'),
        asset: kLearnPagePicture,
        aspect: kLearnPageAspect,
        spots: [
          // the round back arrow at the top left
          PictureSpot('learning_back', const Offset(0.075, 0.1), 0.13, 0.2, tr2('رجوع', 'Back'), () => onBack != null ? onBack!() : Navigator.maybePop(context), radius: 60, key: const ValueKey('learning_back')),
          // the big card with the purple play button: the whole card opens the game
          PictureSpot('learning_play', const Offset(0.505, 0.615), 0.56, 0.58, tr2('عالم رحلتي التعليمي', 'Rehlaty Learning World'), () => _open(context), radius: 40, key: const ValueKey('learning_play')),
        ],
      ),
    );
  }
}
