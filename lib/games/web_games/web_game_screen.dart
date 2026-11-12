import 'learn_reactions.dart';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../../adventures/adventure_service.dart';
import '../../companion/companion_store.dart';
import '../../journey/repository.dart';
import '../../journey/resume.dart';
import '../../l10n/app_locale.dart';
import '../../media/audio.dart';
import '../../progress_store.dart';
import '../game_common.dart';
import '../../l10n/strings.dart';
import 'web_game.dart';
import 'web_game_store.dart';
import 'web_game_view.dart';

export 'web_game.dart';
export 'web_game_store.dart';

/// Opens a rebuilt learning game for a child (boy/girl wording from the child's profile when the parent gave it).
Widget learnWebGameScreen(WebGame game, String childId, int age) {
  String? gender;
  try {
    gender = JourneyStore.instance.profileById(childId)?.gender;
  } catch (_) {
    gender = null; // no store yet (tests): the default wording
  }
  return WebGameScreen(key: ValueKey('web_${game.id}'), game: game, childId: childId, age: age, gender: gender);
}

/// Plays a bundled web game ([WebGame]): «سباق ملاهي الأبطال» (3D race) or «مغامرة الأدغال» (jungle runner). On the
/// web the game runs inside the page; on Android and iOS in a built-in browser view that may only show the bundled page
/// (no internet, no links). Progress is kept per child ([WebGameStore]). These are fun games: no Rehlaty learning stars.
/// The session timer keeps counting like everywhere else.
class WebGameScreen extends StatefulWidget {
  final WebGame game;

  /// The child playing; progress is kept per child. Without one it is kept for "a guest".
  final String? childId;
  final int age;

  /// 'boy' or 'girl' when the parent gave it: the jungle game then starts as Adam or Nour. Never required.
  final String? gender;
  const WebGameScreen({super.key, required this.game, this.childId, required this.age, this.gender});

  @override
  State<WebGameScreen> createState() => _WebGameScreenState();
}

class _WebGameScreenState extends State<WebGameScreen> {
  Map<String, Object?>? _config;
  late final WebGameStore _store = WebGameStore(widget.game);

  @override
  void initState() {
    super.initState();
    SystemChrome.setEnabledSystemUIMode(SystemUiMode.immersiveSticky);
    _start();
  }

  Future<void> _start() async {
    final save = await _store.load(widget.childId);
    final id = widget.childId;
    // a learning game is told whether its star was already earned (it shows "new star!" only the first time)
    final done = widget.game.isLearning && id != null && (await GameRewards.doneIds(id)).contains(widget.game.learnId);
    if (!mounted) return;
    setState(() => _config = {'lang': AppLocale.instance.isArabic ? 'ar' : 'en', 'age': widget.age, 'gender': widget.gender, 'save': save, 'done': done});
  }

  @override
  void dispose() {
    AppAudio.stopSaying();
    SystemChrome.setEnabledSystemUIMode(SystemUiMode.edgeToEdge);
    super.dispose();
  }

  void _onMessage(String raw) {
    Map<String, dynamic> msg;
    try {
      msg = jsonDecode(raw) as Map<String, dynamic>;
    } catch (_) {
      return;
    }
    switch (msg['type']) {
      case 'save':
        final save = msg['save'];
        if (save is Map<String, dynamic>) _store.save(widget.childId, save);
      case 'exit':
        if (mounted) Navigator.maybePop(context);
      case 'speak':
        final text = msg['text'];
        if (text is String && text.isNotEmpty && text.length <= 200) {
          // the games' words are Egyptian Arabic: an Egyptian voice when the device has one (docs/LEARNING_GAMES_REBUILD.md)
          // and the games' brighter, child-like voice (owner request), kept clear
          AppAudio.say(text, lang: msg['lang'] == 'en' ? 'en' : 'ar-EG', slow: msg['slow'] == true, childVoice: true);
        }
      case 'round':
      case 'complete':
        _learn.handle(msg);
    }
  }

  late final LearnBridge _learn = LearnBridge(widget.game, widget.childId);

  @override
  Widget build(BuildContext context) {
    final config = _config;
    final view = config == null
        ? const Center(child: CircularProgressIndicator(color: Colors.white))
        : webGameViewSupported
        ? WebGameView(key: ValueKey('${widget.game.id}_view'), game: widget.game, config: config, onMessage: _onMessage)
        : _Unsupported(onBack: () => Navigator.maybePop(context));
    return Scaffold(
      backgroundColor: const Color(0xFF1D1250),
      body: Stack(
        children: [
          Positioned.fill(child: view),
          // (owner 2026-11-12: no extra «رجوع» button over the games; each game has its own back button at the top)
        ],
      ),
    );
  }
}

class _Unsupported extends StatelessWidget {
  final VoidCallback onBack;
  const _Unsupported({required this.onBack});

  @override
  Widget build(BuildContext context) => Center(
    child: Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        const Text('🏎️', style: TextStyle(fontSize: 64)),
        Padding(
          padding: const EdgeInsets.all(16),
          child: Text(
            tr2('اللعبة دي بتشتغل على الموبايل والتابلت والمتصفح', 'This game runs on phones, tablets and the web'),
            textAlign: TextAlign.center,
            style: const TextStyle(color: Colors.white, fontSize: 22, fontWeight: FontWeight.w900),
          ),
        ),
        FilledButton(onPressed: onBack, child: Text(tr2('رجوع', 'Back'))),
      ],
    ),
  );
}

/// The learning side of a rebuilt learning game's messages: 'round' (one answer, for the parent dashboard, first try
/// right or not) and 'complete' (the set is finished: the learning star the first time, same id as the old game, like
/// GameFinishPanel). Kept on this device only. A fun game (no learnId) records nothing.
class LearnBridge {
  final WebGame game;
  final String? childId;
  LearnBridge(this.game, this.childId);

  bool _completed = false;

  Future<void> handle(Map<String, dynamic> msg) async {
    final id = childId;
    final learnId = game.learnId;
    if (id == null || learnId == null) return;
    switch (msg['type']) {
      case 'round':
        LearnReactions.emit(msg['correct'] == true ? LearnEvent.correct : LearnEvent.wrong);
        final skill = msg['skill'];
        if (skill is! String || skill.isEmpty) return;
        final detail = msg['detail'];
        await ProgressStore.record(skill, msg['correct'] == true, detail: detail is String ? detail : null, childId: id);
      case 'complete':
        if (_completed) return; // once per opening; "play again" inside the game is a replay
        _completed = true;
        LearnReactions.emit(LearnEvent.complete);
        try {
          await GameRewards.complete(id, learnId);
          await ResumeStore.clear(id, 'game', learnId);
          final a = await CompanionStore.age(id);
          if (a != null) await AdventureService.check(id, a, celebrate: false);
        } catch (_) {
          // storage trouble: nothing claimed
        }
    }
  }
}
