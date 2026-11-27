import 'dart:async';

import 'package:flutter/material.dart';
import '../media/hub_music.dart';
import '../media/section_voice.dart';

import '../design/app_logo.dart';
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
  LearnLanguage('fr', 'Français', 'Écouter, trouver, dire', 'É', Color(0xFFE0457B)),
  LearnLanguage('it', 'Italiano', 'Ascoltare, trovare, dire', 'I', Color(0xFFE8892B)),
];

/// The voices of the two choice screens (the owner records them: docs/LEARN_PICK_VOICE_LINES.csv). A missing file is silent.
class LearnPickVoice {
  LearnPickVoice._();
  static const gate = 'assets/audio/voices/learn_pick/gate.mp3';
  static String mode(String lang) => 'assets/audio/voices/learn_pick/mode_$lang.mp3';

  static void say(String asset) {
    if (isTestBinding()) return; // no audio plugin in widget tests
    PageVoice.say(asset);
  }

  static void stop() {
    if (isTestBinding()) return;
    PageVoice.stop();
  }
}

/// A round speaker button that says the question again.
Widget _speakerButton(VoidCallback onTap, {Key? key}) => Semantics(
  button: true,
  label: tr2('اسمع تاني', 'Listen again'),
  child: Material(
    key: key,
    color: const Color(0xFFFFB02E),
    shape: const CircleBorder(side: BorderSide(color: Colors.white, width: 3)),
    elevation: 4,
    child: InkWell(customBorder: const CircleBorder(), onTap: onTap, child: const Padding(padding: EdgeInsets.all(12), child: Icon(Icons.volume_up_rounded, color: Colors.white, size: 30))),
  ),
);

/// The title ribbon of a choice screen: big line + small line.
Widget _titleRibbon(String big, String small, {double bigSize = 34}) => Container(
  padding: const EdgeInsets.symmetric(horizontal: 26, vertical: 10),
  decoration: BoxDecoration(
    gradient: const LinearGradient(colors: [Color(0xFF7C4DDB), Color(0xFF5B2FC0)]),
    borderRadius: BorderRadius.circular(30),
    border: Border.all(color: Colors.white, width: 4),
    boxShadow: const [BoxShadow(color: Color(0x55000000), blurRadius: 10, offset: Offset(0, 5))],
  ),
  child: Column(mainAxisSize: MainAxisSize.min, children: [
    Text(big, textAlign: TextAlign.center, style: TextStyle(fontSize: bigSize, fontWeight: FontWeight.w900, color: Colors.white, height: 1.15)),
    if (small.isNotEmpty) Text(small, textAlign: TextAlign.center, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: Color(0xFFEADFFF))),
  ]),
);

/// «تحب تتعلم إيه النهارده؟»: the four languages side by side, all the same size, with the app's logo on top and a voice that asks
/// the question (owner request 2026-11-26).
class LearnLanguageGate extends StatefulWidget {
  final ChildProfile child;
  final VoidCallback? onBack;
  const LearnLanguageGate({super.key, required this.child, this.onBack});

  @override
  State<LearnLanguageGate> createState() => _LearnLanguageGateState();
}

class _LearnLanguageGateState extends State<LearnLanguageGate> {
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) => LearnPickVoice.say(LearnPickVoice.gate));
  }

  @override
  void dispose() {
    LearnPickVoice.stop();
    super.dispose();
  }

  void _pick(String id) {
    LearnPickVoice.stop();
    // after the language: two options, the levels (as before) or «اتعلّم» (the basics one item at a time)
    Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => LearnModeScreen(child: widget.child, lang: id)));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: const ValueKey('learn_language_gate'),
      body: PictureBackdrop(
        fallback: (c) => Container(decoration: const BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF9BDCFF), Color(0xFFFFF1C9)])), child: c),
        child: SafeArea(
          child: LayoutBuilder(builder: (context, box) {
            final wide = box.maxWidth >= 640;
            final short = box.maxHeight < 460; // a phone held sideways: everything must fit without scrolling
            final gap = wide ? 18.0 : 12.0;
            final usable = (box.maxWidth - 32).clamp(280.0, 1000.0);
            final cols = wide ? kLearnLanguages.length : 2;
            final bigSize = short ? 22.0 : wide ? 34.0 : 24.0;
            final ribbonH = short ? 52.0 : 100.0;
            final bottomRoom = short ? 34.0 : 20.0; // the phone's home bar / browser bar covers the bottom edge: leave room
            final gapsH = (short ? 40.0 : 68.0) + bottomRoom;
            final minLogoH = short ? 54.0 : 110.0;
            final cardMaxH = box.maxHeight - ribbonH - gapsH - minLogoH;
            var w = ((usable - gap * (cols - 1)) / cols).clamp(110.0, 230.0);
            if (wide) w = w.clamp(80.0, (cardMaxH / 1.17).clamp(100.0, 230.0));
            final rows = (kLearnLanguages.length / cols).ceil();
            final cardsH = w * 1.17 * rows + gap * (rows - 1);
            // the logo takes ALL the free space above the title (owner 2026-11-26: it was small in a big empty area)
            final logoH = (box.maxHeight - ribbonH - gapsH - cardsH).clamp(minLogoH, 380.0);
            final logoW = (logoH / 0.78) < box.maxWidth * 0.62 ? logoH / 0.78 : box.maxWidth * 0.62;
            final cards = [for (final l in kLearnLanguages) _LanguageCard(lang: l, width: w, onTap: () => _pick(l.id))];
            return Stack(children: [
              Center(
                child: SingleChildScrollView(
                  padding: EdgeInsets.fromLTRB(16, 8, 16, bottomRoom),
                  child: Column(mainAxisSize: MainAxisSize.min, children: [
                    AppLogo(width: logoW),
                    const SizedBox(height: 4),
                    _titleRibbon('تحب تتعلم إيه النهارده؟', short ? '' : 'What do you want to learn today?', bigSize: bigSize),
                    SizedBox(height: short ? 10 : wide ? 22 : 14),
                    Wrap(alignment: WrapAlignment.center, spacing: gap, runSpacing: gap, children: cards),
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
              PositionedDirectional(end: 8, top: 8, child: _speakerButton(() => LearnPickVoice.say(LearnPickVoice.gate), key: const ValueKey('learn_language_speak'))),
            ]);
          }),
        ),
      ),
    );
  }
}

/// One language card: the same size for all of them, a picture (or a painted one for French) with the name on its ribbon.
class _LanguageCard extends StatelessWidget {
  final LearnLanguage lang;
  final double width;
  final VoidCallback onTap;
  const _LanguageCard({required this.lang, required this.width, required this.onTap});

  static const _ribbon = {'ar': Color(0xFFD83A3A), 'en': Color(0xFF2F7BE0), 'de': Color(0xFF2FA85A), 'fr': Color(0xFFE0457B), 'it': Color(0xFFE8892B)};

  Widget _art() {
    if (lang.id == 'it') {
      // painted like the others until the owner's picture arrives: warm sky, a pizza and a bell tower in emoji
      return DecoratedBox(
        decoration: const BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFFFFE2B8), Color(0xFFFFF6D8)])),
        child: Center(child: Padding(padding: EdgeInsets.only(bottom: width * 0.18), child: Text('🍕🏛️', style: TextStyle(fontSize: width * 0.34)))),
      );
    }
    if (lang.id == 'fr') {
      // painted like the others (no picture yet): sunrise sky, a bakery and a tower in emoji
      return DecoratedBox(
        decoration: const BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFFFFD6E8), Color(0xFFFFF1C9)])),
        child: Center(child: Padding(padding: EdgeInsets.only(bottom: width * 0.18), child: Text('🥐🗼', style: TextStyle(fontSize: width * 0.34)))),
      );
    }
    return Image.asset(
      'assets/games/learn_lang/${lang.id}.webp',
      fit: BoxFit.cover,
      errorBuilder: (_, _, _) => Center(child: Text(lang.big, style: TextStyle(fontSize: width * 0.4, fontWeight: FontWeight.w900, color: lang.color))),
    );
  }

  @override
  Widget build(BuildContext context) {
    final h = width * 1.17;
    return Semantics(
      button: true,
      label: lang.label,
      child: InkWell(
        key: ValueKey('learn_lang_${lang.id}'),
        borderRadius: BorderRadius.circular(26),
        onTap: onTap,
        child: Container(
          width: width,
          height: h,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(26),
            border: Border.all(color: Colors.white, width: 5),
            boxShadow: const [BoxShadow(color: Color(0x66000000), blurRadius: 12, offset: Offset(0, 7))],
            color: Colors.white,
          ),
          clipBehavior: Clip.antiAlias,
          child: Stack(fit: StackFit.expand, children: [
            _art(),
            Positioned(
              left: 0,
              right: 0,
              bottom: 0,
              child: Container(
                padding: EdgeInsets.symmetric(vertical: width * 0.045),
                color: _ribbon[lang.id],
                child: FittedBox(
                  fit: BoxFit.scaleDown,
                  child: Text(lang.label, style: TextStyle(fontSize: width * 0.16, fontWeight: FontWeight.w900, color: Colors.white, shadows: const [Shadow(color: Color(0x88000000), blurRadius: 3, offset: Offset(0, 2))])),
                ),
              ),
            ),
          ]),
        ),
      ),
    );
  }
}

/// «يلا نلعب» (the levels, as before) or «اتعلّم» (the basics, one item at a time): two big options at the top of a language,
/// written in the language chosen and explained by a voice.
class LearnModeScreen extends StatefulWidget {
  final ChildProfile child;
  final String lang; // ar, en, de, fr, it
  const LearnModeScreen({super.key, required this.child, required this.lang});

  @override
  State<LearnModeScreen> createState() => _LearnModeScreenState();
}

class _LearnModeScreenState extends State<LearnModeScreen> {
  ChildProfile get child => widget.child;
  String get lang => widget.lang;

  // Arabic is the main text on every language (the child must know what he enters); the language's own words are the small line
  static const _ar = ('يلا نلعب', 'مستويات رحلتي في التعلّم', 'اتعلّم', 'اختار اللي إنت عايزه: حروف، أرقام، حيوانات وأكتر', 'حابب تلعب المستويات ولا تتعلم وتختار؟');
  static const _own = {
    'ar': ('عربي', '', ''),
    'en': ('English', "Let's play", 'Learn'),
    'de': ('Deutsch', "Los geht's", 'Lernen'),
    'fr': ('Français', 'On joue', 'Apprendre'),
    'it': ('Italiano', 'Giochiamo', 'Imparare'),
  };

  WebGame get _levels => switch (lang) { 'en' => kLearnEnglish, 'de' => kLearnGerman, 'fr' => kLearnFrench, 'it' => kLearnItalian, _ => kLearnLetters };
  WebGame get _basics => switch (lang) { 'en' => kLearnBasicsEn, 'de' => kLearnBasicsDe, 'fr' => kLearnBasicsFr, 'it' => kLearnBasicsIt, _ => kLearnBasicsAr };

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) => LearnPickVoice.say(LearnPickVoice.mode(lang)));
  }

  @override
  void dispose() {
    LearnPickVoice.stop();
    super.dispose();
  }

  void _openLevels() {
    LearnPickVoice.stop();
    if (lang == 'ar') {
      Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => LearningGamesScreen(key: const ValueKey('games_hub'), child: child)));
    } else {
      Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => learnWebGameScreen(_levels, child.id, child.age)));
    }
  }

  void _openLearn() {
    LearnPickVoice.stop();
    Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => learnWebGameScreen(_basics, child.id, child.age)));
  }

  @override
  Widget build(BuildContext context) {
    final own = _own[lang]!;
    return Scaffold(
      key: const ValueKey('learn_mode_screen'),
      body: PictureBackdrop(
        fallback: (c) => Container(decoration: const BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF9BDCFF), Color(0xFFFFF1C9)])), child: c),
        child: SafeArea(
          child: LayoutBuilder(builder: (context, box) {
            final wide = box.maxWidth >= 640;
            final short = box.maxHeight < 460;
            final gapW = wide ? 22.0 : 12.0;
            final w = ((box.maxWidth - 56 - gapW) / 2).clamp(110.0, 300.0);
            final ribbonH = short ? 44.0 : 96.0;
            final bottomRoom = short ? 34.0 : 20.0;
            final gapsH = (short ? 28.0 : 64.0) + bottomRoom;
            final optionsH = short ? 200.0 : 360.0;
            final logoH = (box.maxHeight - ribbonH - gapsH - optionsH).clamp(short ? 54.0 : 100.0, 380.0);
            final logoW = (logoH / 0.78) < box.maxWidth * 0.62 ? logoH / 0.78 : box.maxWidth * 0.62;
            return Stack(children: [
              Center(
                child: SingleChildScrollView(
                  padding: EdgeInsets.fromLTRB(16, 8, 16, bottomRoom),
                  child: Directionality(
                    textDirection: TextDirection.rtl,
                    child: Column(mainAxisSize: MainAxisSize.min, children: [
                      AppLogo(width: logoW),
                      const SizedBox(height: 4),
                      _titleRibbon(_ar.$5, short || lang == 'ar' ? '' : own.$1, bigSize: short ? 20 : wide ? 32 : 22),
                      SizedBox(height: short ? 10 : wide ? 22 : 14),
                      Row(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
                        _option(key: const ValueKey('learn_mode_levels'), width: w, short: short, art: _levelsArt(short ? 56 : 92), emoji: '🎮', title: _ar.$1, title2: own.$2, sub: _ar.$2, color: const Color(0xFF3D8BFF), onTap: _openLevels),
                        SizedBox(width: gapW),
                        _option(key: const ValueKey('learn_mode_learn'), width: w, short: short, art: _learnArt(short ? 56 : 92), emoji: '📚', title: _ar.$3, title2: own.$3, sub: _ar.$4, color: const Color(0xFF2FA85A), onTap: _openLearn),
                      ]),
                    ]),
                  ),
                ),
              ),
              PositionedDirectional(
                start: 8,
                top: 8,
                child: IconButton.filled(key: const ValueKey('learn_mode_back'), tooltip: tr2('رجوع', 'Back'), onPressed: () => Navigator.of(context).maybePop(), icon: const Icon(Icons.arrow_back_rounded)),
              ),
              PositionedDirectional(end: 8, top: 8, child: _speakerButton(() => LearnPickVoice.say(LearnPickVoice.mode(lang)), key: const ValueKey('learn_mode_speak'))),
            ]);
          }),
        ),
      ),
    );
  }

  /// The picture of «مستويات»: three steps going up to a star (the owner's picture assets/games/learn_lang/mode_levels.webp replaces it when it is there).
  Widget _levelsArt(double h) => SizedBox(
    height: h,
    child: Image.asset('assets/games/learn_lang/mode_levels.webp', height: h, fit: BoxFit.contain, errorBuilder: (_, _, _) {
      Widget step(String n, double f, Color c) => Container(
        width: h * 0.46,
        height: h * f,
        alignment: Alignment.topCenter,
        padding: EdgeInsets.only(top: h * 0.04),
        decoration: BoxDecoration(color: c, borderRadius: BorderRadius.circular(h * 0.12), border: Border.all(color: Colors.white, width: 3), boxShadow: const [BoxShadow(color: Color(0x44000000), blurRadius: 4, offset: Offset(0, 3))]),
        child: Text(n, style: TextStyle(fontSize: h * 0.26, fontWeight: FontWeight.w900, color: Colors.white)),
      );
      return Stack(alignment: Alignment.bottomCenter, children: [
        Row(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.end, children: [
          step('1', 0.38, const Color(0xFFFFB02E)),
          SizedBox(width: h * 0.05),
          step('2', 0.58, const Color(0xFFFF7A59)),
          SizedBox(width: h * 0.05),
          step('3', 0.8, const Color(0xFFE0457B)),
        ]),
        Positioned(top: 0, right: h * 0.1, child: Text('⭐', style: TextStyle(fontSize: h * 0.32))),
      ]);
    }),
  );

  /// The picture of «اتعلّم»: an open book with the first things a child learns floating over it.
  Widget _learnArt(double h) => SizedBox(
    height: h,
    child: Image.asset('assets/games/learn_lang/mode_learn.webp', height: h, fit: BoxFit.contain, errorBuilder: (_, _, _) {
      Widget bubble(String e) => Container(
        width: h * 0.34,
        height: h * 0.34,
        alignment: Alignment.center,
        decoration: BoxDecoration(color: Colors.white, shape: BoxShape.circle, boxShadow: const [BoxShadow(color: Color(0x44000000), blurRadius: 4, offset: Offset(0, 3))]),
        child: Text(e, style: TextStyle(fontSize: h * 0.2)),
      );
      return Column(mainAxisSize: MainAxisSize.min, children: [
        Row(mainAxisSize: MainAxisSize.min, children: [bubble('🔤'), SizedBox(width: h * 0.06), bubble('🔢'), SizedBox(width: h * 0.06), bubble('🦁')]),
        Text('📖', style: TextStyle(fontSize: h * 0.5, height: 1.0)),
      ]);
    }),
  );

  Widget _option({required Key key, required double width, required bool short, required Widget art, required String emoji, required String title, String title2 = '', required String sub, required Color color, required VoidCallback onTap}) => Semantics(
    button: true,
    label: title,
    child: InkWell(
      key: key,
      borderRadius: BorderRadius.circular(28),
      onTap: onTap,
      child: Container(
        width: width,
        constraints: BoxConstraints(minHeight: short ? 150 : 230),
        padding: EdgeInsets.symmetric(vertical: short ? 10 : 20, horizontal: 12),
        decoration: BoxDecoration(
          gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color.lerp(color, Colors.white, 0.18)!, color]),
          borderRadius: BorderRadius.circular(28),
          border: Border.all(color: Colors.white, width: 5),
          boxShadow: const [BoxShadow(color: Color(0x66000000), blurRadius: 12, offset: Offset(0, 7))],
        ),
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          FittedBox(fit: BoxFit.scaleDown, child: art),
          const SizedBox(height: 8),
          Text(title, textAlign: TextAlign.center, style: TextStyle(fontSize: short ? 24 : 30, fontWeight: FontWeight.w900, color: Colors.white)),
          const SizedBox(height: 6),
          if (title2.isNotEmpty) Text(title2, textDirection: TextDirection.ltr, textAlign: TextAlign.center, style: TextStyle(fontSize: short ? 13 : 17, fontWeight: FontWeight.w800, color: const Color(0xFFFFF3C4))),
          Text(sub, textAlign: TextAlign.center, style: TextStyle(fontSize: short ? 12.5 : 15, fontWeight: FontWeight.w600, color: Colors.white, height: 1.25)),
        ]),
      ),
    ),
  );
}
