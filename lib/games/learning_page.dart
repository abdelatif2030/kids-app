import 'dart:async';

import 'package:flutter/material.dart';

import '../design/animated_character.dart';
import '../design/picture_stage.dart';
import '../journey/models.dart';
import '../media/page_voice.dart';
import '../journey/resume.dart';
import '../l10n/strings.dart';
import 'game_catalog.dart';
import 'web_games/learn_reactions.dart';

/// The owner's picture for «الألعاب التعليمية» (2026-11-12): the underwater adventure with the heroes, the owl and the one
/// learning game's card. It is the whole page: nothing else is drawn over it (the old cards, chips and sections were
/// removed on the owner's request; the learning world holds every learning activity as levels).
const String kLearnPagePicture = 'assets/games/learn_page.webp';
const double kLearnPageAspect = 1672 / 941;

/// The id of the one learning game (the learning world; the old id is kept so that progress and stars carry over).
const String kLearningGameId = 'letter_fishing';

/// «الألعاب التعليمية»: the owner's picture with two invisible buttons: the back arrow and the big card (play), and the
/// child's own character standing on the sand: it waves when the page opens, hops when the child taps play, and
/// celebrates (with a trophy) when a game was completed. The character follows the real events of the game
/// ([LearnReactions]), not a decoration.
class LearningGamesScreen extends StatefulWidget {
  final ChildProfile child;
  final VoidCallback? onBack;
  const LearningGamesScreen({super.key, required this.child, this.onBack});

  @override
  State<LearningGamesScreen> createState() => _LearningGamesScreenState();
}

class _LearningGamesScreenState extends State<LearningGamesScreen> {
  final CharacterController _hero = CharacterController();
  StreamSubscription<LearnEvent>? _sub;

  ChildProfile get child => widget.child;
  CharacterKind get _kind => child.gender == 'girl' ? CharacterKind.girl : CharacterKind.boy;

  @override
  void initState() {
    super.initState();
    // the welcome waves once the page is on screen
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (mounted) {
        _hero.welcome();
        PageVoice.say(PageVoice.learnToday); // «هنتعلم سوا النهارده»
      }
    });
    _sub = LearnReactions.stream.listen((e) {
      if (!mounted || !(ModalRoute.of(context)?.isCurrent ?? true)) return; // covered by the game: it celebrates itself
      switch (e) {
        case LearnEvent.correct:
          _hero.correct();
        case LearnEvent.wrong:
          _hero.wrong();
        case LearnEvent.complete:
          _hero.complete();
      }
    });
  }

  @override
  void dispose() {
    _sub?.cancel();
    _hero.dispose();
    PageVoice.stop();
    super.dispose();
  }

  Future<void> _open(BuildContext context) async {
    if (gamesForAge(child.age).isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(tr2('هذه اللعبة لأعمار ٣ إلى ٦ سنوات', 'This game is for ages 3 to 6'))));
      return;
    }
    final g = kEducationalGames.firstWhere((x) => x.id == kLearningGameId);
    _hero.tap(); // a playful hop as the child starts
    await Future<void>.delayed(const Duration(milliseconds: 380));
    if (!context.mounted) return;
    await ResumeStore.mark(child.id, 'game', kLearningGameId);
    if (!context.mounted) return;
    await Navigator.push<void>(context, MaterialPageRoute<void>(builder: (_) => g.build(child.id, child.age, learnLangOf(child))));
    // back from the game: if it was completed, the character celebrates with a trophy
    if (mounted && LearnReactions.takePendingComplete()) _hero.complete();
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
          PictureSpot('learning_back', const Offset(0.075, 0.1), 0.13, 0.2, tr2('رجوع', 'Back'), () => widget.onBack != null ? widget.onBack!() : Navigator.maybePop(context), radius: 60, key: const ValueKey('learning_back')),
          // the big card with the purple play button: the whole card opens the game
          PictureSpot('learning_play', const Offset(0.505, 0.615), 0.56, 0.58, tr2('عالم رحلتي التعليمي', 'Rehlaty Learning World'), () => _open(context), radius: 40, key: const ValueKey('learning_play')),
        ],
        overlays: (w, h) => [
          // the child's character on the sand at the bottom left (not tappable: the picture's buttons stay as they are)
          Positioned(left: 0.012 * w, bottom: 0.01 * h, width: 0.15 * w, height: 0.34 * h, child: IgnorePointer(child: FittedBox(alignment: Alignment.bottomCenter, child: AnimatedCharacter(key: const ValueKey('learning_hero'), kind: _kind, controller: _hero, height: 0.27 * h)))),
        ],
      ),
    );
  }
}
