import 'dart:async';

import 'package:flutter/material.dart';
import '../media/hub_music.dart';
import '../media/section_voice.dart';

import '../design/picture_stage.dart';
import '../journey/models.dart';
import '../journey/resume.dart';
import '../media/audio.dart';
import '../media/page_voice.dart';
import '../l10n/strings.dart';
import 'game_catalog.dart';
import 'web_games/web_game_screen.dart';
import 'web_games/learn_reactions.dart';

/// The owner's picture for «الألعاب التعليمية» (2026-11-13): the whole look of the game from outside. A sign board with the seven
/// subjects on the left, the big card with the green play button in the middle, the heroes and the owl, a home button and a sound
/// button. It is the whole page: nothing else is drawn over it. Each sign opens the learning world at that subject's level; the
/// card and the green button open it at the level list.
const String kLearnPagePicture = 'assets/games/learn_page.webp';
const double kLearnPageAspect = 1536 / 1024;

/// The id of the one learning game (the learning world; the old id is kept so that progress and stars carry over).
const String kLearningGameId = 'letter_fishing';

/// The signs of the picture, top to bottom: the level each one opens in the learning world (see game_src/learn_games levels.js).
const List<(String, String, double)> kLearnSigns = [
  ('letters', 'الحروف', 0.275),
  ('numbers', 'الأرقام', 0.352),
  ('shapes', 'الأشكال والألوان', 0.432),
  ('animals', 'الحيوانات', 0.51),
  ('fruits', 'الفواكه والخضار', 0.585),
  ('vehicles', 'المواصلات', 0.655),
  ('habits', 'العادات', 0.728),
];

/// «الألعاب التعليمية»: the owner's picture with invisible buttons on it: home, sound, the seven subject signs, and the big
/// card with the play button.
class LearningGamesScreen extends StatefulWidget {
  final ChildProfile child;
  final VoidCallback? onBack;
  const LearningGamesScreen({super.key, required this.child, this.onBack});

  @override
  State<LearningGamesScreen> createState() => _LearningGamesScreenState();
}

class _LearningGamesScreenState extends State<LearningGamesScreen> {
  ChildProfile get child => widget.child;

  @override
  void initState() {
    super.initState();
    // The old «هنتعلم سوا النهارده» greeting was removed (owner, 2026-11-25): the page says only the new section greeting (SectionVoiceOnEnter 'learning').
  }

  @override
  void dispose() {
    PageVoice.stop();
    super.dispose();
  }

  /// Opens the learning world: [level] starts straight in that level (a sign of the picture), null shows the level list.
  Future<void> _open(BuildContext context, {String? level}) async {
    if (gamesForAge(child.age).isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(tr2('هذه اللعبة لأعمار ٣ إلى ٦ سنوات', 'This game is for ages 3 to 6'))));
      return;
    }
    await ResumeStore.mark(child.id, 'game', kLearningGameId);
    if (!context.mounted) return;
    await Navigator.push<void>(context, MaterialPageRoute<void>(builder: (_) => learnWebGameScreen(kLearnLetters, child.id, child.age, level: level)));
    LearnReactions.takePendingComplete();
  }

  void _toggleSound() {
    final on = !AudioPrefs.instance.voiceOn;
    AudioPrefs.instance.voiceOn = on;
    if (!on) {
      PageVoice.stop();
      AppAudio.stopSaying();
    }
    ScaffoldMessenger.of(context)
      ..hideCurrentSnackBar()
      ..showSnackBar(SnackBar(duration: const Duration(seconds: 1), content: Text(on ? tr2('الصوت شغّال', 'Sound on') : tr2('الصوت مقفول', 'Sound off'))));
  }

  @override
  Widget build(BuildContext context) => SectionVoiceOnEnter('learning', child: HubMusicScope(track: 'learn', child: _buildScreen(context)));

  Widget _buildScreen(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF3AA8F0),
      body: PictureStage(
        key: const ValueKey('learning_page'),
        asset: kLearnPagePicture,
        aspect: kLearnPageAspect,
        spots: [
          // the round home button at the top left
          PictureSpot('learning_back', const Offset(0.068, 0.092), 0.1, 0.15, tr2('رجوع', 'Back'), () => widget.onBack != null ? widget.onBack!() : Navigator.maybePop(context), radius: 60, key: const ValueKey('learning_back')),
          // the round sound button at the top right
          PictureSpot('learning_sound', const Offset(0.932, 0.092), 0.1, 0.15, tr2('الصوت', 'Sound'), _toggleSound, radius: 60, key: const ValueKey('learning_sound')),
          // the seven signs on the left: each opens its own level
          for (final (level, label, cy) in kLearnSigns)
            PictureSpot('learning_sign_$level', Offset(0.098, cy), 0.185, 0.07, tr2(label, label), () => _open(context, level: level), radius: 24, key: ValueKey('learning_sign_$level')),
          // the big card with the green play button: the whole card opens the game (the level list)
          PictureSpot('learning_play', const Offset(0.545, 0.6), 0.46, 0.6, tr2('عالم رحلتي التعليمي', 'Rehlaty Learning World'), () => _open(context), radius: 40, key: const ValueKey('learning_play')),
        ],
      ),
    );
  }
}


/// What the child learns (the first question of the learning games): a language per card. Adding German or French later = one more entry here
/// and its levels in the page; the Arabic world keeps everything that existed before.
class LearnLanguage {
  final String id;
  final String label;
  final String sub;
  final String big;
  final Color color;
  const LearnLanguage(this.id, this.label, this.sub, this.big, this.color);
}

const List<LearnLanguage> kLearnLanguages = [
  LearnLanguage('ar', 'عربي', 'الحروف والأرقام والأشكال والمزيد', 'أ', Color(0xFFFF8A3D)),
  LearnLanguage('en', 'English', 'Hear it, find it, say it', 'A', Color(0xFF3D8BFF)),
  LearnLanguage('de', 'Deutsch', 'Hören, finden, sagen', 'Ä', Color(0xFF2FA85A)),
];

/// «عايز تتعلم إيه؟»: the child picks Arabic (the whole learning world as it was) or English (the English levels).
class LearnLanguageGate extends StatefulWidget {
  final ChildProfile child;
  final VoidCallback? onBack;
  const LearnLanguageGate({super.key, required this.child, this.onBack});

  @override
  State<LearnLanguageGate> createState() => _LearnLanguageGateState();
}

class _LearnLanguageGateState extends State<LearnLanguageGate> {
  bool _arabic = false;

  void _pick(String id) {
    if (id == 'ar') {
      setState(() => _arabic = true);
    } else if (id == 'en') {
      Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => learnWebGameScreen(kLearnEnglish, widget.child.id, widget.child.age)));
    } else if (id == 'de') {
      Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => learnWebGameScreen(kLearnGerman, widget.child.id, widget.child.age)));
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_arabic) return LearningGamesScreen(key: const ValueKey('games_hub'), child: widget.child, onBack: widget.onBack);
    return Scaffold(
      key: const ValueKey('learn_language_gate'),
      body: Container(
        decoration: const BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF9BDCFF), Color(0xFFFFF1C9)])),
        child: SafeArea(
          child: Stack(children: [
            Center(
              child: SingleChildScrollView(
                padding: const EdgeInsets.all(16),
                child: Column(mainAxisSize: MainAxisSize.min, children: [
                  const Text('عايز تتعلم إيه؟', textAlign: TextAlign.center, style: TextStyle(fontSize: 34, fontWeight: FontWeight.w900, color: Color(0xFF3A2A6A))),
                  const Text('What do you want to learn?', textAlign: TextAlign.center, style: TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: Color(0xFF3A2A6A))),
                  const SizedBox(height: 18),
                  Wrap(
                    alignment: WrapAlignment.center,
                    spacing: 20,
                    runSpacing: 16,
                    children: [for (final l in kLearnLanguages) _card(l)],
                  ),
                ]),
              ),
            ),
            PositionedDirectional(
              start: 8,
              top: 8,
              child: IconButton.filled(
                key: const ValueKey('learn_language_back'),
                tooltip: tr2('رجوع', 'Back'),
                onPressed: widget.onBack ?? () => Navigator.of(context).maybePop(),
                icon: const Icon(Icons.arrow_back_rounded),
              ),
            ),
          ]),
        ),
      ),
    );
  }

  Widget _card(LearnLanguage l) => Semantics(
    button: true,
    label: l.label,
    child: InkWell(
      key: ValueKey('learn_lang_${l.id}'),
      borderRadius: BorderRadius.circular(28),
      onTap: () => _pick(l.id),
      child: Container(
        width: 230,
        padding: const EdgeInsets.symmetric(vertical: 18, horizontal: 12),
        decoration: BoxDecoration(
          color: l.color,
          borderRadius: BorderRadius.circular(28),
          border: Border.all(color: Colors.white, width: 5),
          boxShadow: const [BoxShadow(color: Color(0x55000000), blurRadius: 10, offset: Offset(0, 6))],
        ),
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          // the owner's card picture of this language world (assets/games/learn_lang/<id>.webp); the big letter is the fallback
          SizedBox(
            height: 130,
            child: Image.asset(
              'assets/games/learn_lang/${l.id}.webp',
              fit: BoxFit.contain,
              errorBuilder: (_, __, ___) => Center(child: Text(l.big, style: const TextStyle(fontSize: 84, height: 1, fontWeight: FontWeight.w900, color: Colors.white))),
            ),
          ),
          const SizedBox(height: 6),
          Text(l.label, style: const TextStyle(fontSize: 30, fontWeight: FontWeight.w900, color: Colors.white)),
          const SizedBox(height: 2),
          Text(l.sub, textAlign: TextAlign.center, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w600, color: Colors.white)),
        ]),
      ),
    ),
  );
}
