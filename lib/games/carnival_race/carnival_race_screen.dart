import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../../l10n/app_locale.dart';
import '../../l10n/strings.dart';
import 'carnival_race_store.dart';
import 'race_view.dart';

export 'carnival_race_store.dart';

/// «سباق الملاهي»: the 3D carnival bumper-car race (owner request, 2026-11-10). The game itself is the three.js bundle in
/// assets/games/carnival_race/ (source in game_src/carnival_race/). On the web it runs inside the page; on Android and
/// iOS it runs in a built-in browser view that may only show the bundled page (no internet, no links).
///
/// Owner decisions: a full garage like the reference video (tickets won by driving buy upgrades and new racers; nothing
/// is bought with money and nothing earned is ever lost), ages 3-6, age 3 plays in easy mode (the car drives itself).
/// It is a fun game: no Rehlaty learning stars. The session timer keeps counting like everywhere else.
class CarnivalRaceScreen extends StatefulWidget {
  /// The child playing; tickets and garage are kept per child. Without one they are kept for "a guest".
  final String? childId;
  final int age;
  const CarnivalRaceScreen({super.key, this.childId, required this.age});

  @override
  State<CarnivalRaceScreen> createState() => _CarnivalRaceScreenState();
}

class _CarnivalRaceScreenState extends State<CarnivalRaceScreen> {
  Map<String, Object?>? _config;

  @override
  void initState() {
    super.initState();
    SystemChrome.setEnabledSystemUIMode(SystemUiMode.immersiveSticky);
    CarnivalRaceStore.load(widget.childId).then((save) {
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
        if (save is Map<String, dynamic>) CarnivalRaceStore.save(widget.childId, save);
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
          : raceViewSupported
          ? RaceView(key: const ValueKey('carnival_race_view'), config: config, onMessage: _onMessage)
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

@visibleForTesting
bool get carnivalRaceSupportedHere => raceViewSupported;
