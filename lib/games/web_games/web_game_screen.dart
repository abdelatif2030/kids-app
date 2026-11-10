import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../../l10n/app_locale.dart';
import '../../l10n/strings.dart';
import 'web_game.dart';
import 'web_game_store.dart';
import 'web_game_view.dart';

export 'web_game.dart';
export 'web_game_store.dart';

/// Plays a bundled web game ([WebGame]): «سباق ملاهي الأبطال» (3D race) or «مغامرة الأدغال» (jungle runner). On the
/// web the game runs inside the page; on Android and iOS in a built-in browser view that may only show the bundled page
/// (no internet, no links). Progress is kept per child ([WebGameStore]). These are fun games: no Rehlaty learning stars.
/// The session timer keeps counting like everywhere else.
class WebGameScreen extends StatefulWidget {
  final WebGame game;

  /// The child playing; progress is kept per child. Without one it is kept for "a guest".
  final String? childId;
  final int age;
  const WebGameScreen({super.key, required this.game, this.childId, required this.age});

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
    _store.load(widget.childId).then((save) {
      if (!mounted) return;
      setState(() => _config = {'lang': AppLocale.instance.isArabic ? 'ar' : 'en', 'age': widget.age, 'save': save});
    });
  }

  @override
  void dispose() {
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
    }
  }

  @override
  Widget build(BuildContext context) {
    final config = _config;
    return Scaffold(
      backgroundColor: const Color(0xFF1D1250),
      body: config == null
          ? const Center(child: CircularProgressIndicator(color: Colors.white))
          : webGameViewSupported
          ? WebGameView(key: ValueKey('${widget.game.id}_view'), game: widget.game, config: config, onMessage: _onMessage)
          : _Unsupported(onBack: () => Navigator.maybePop(context)),
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
