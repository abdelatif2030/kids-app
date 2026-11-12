import 'package:flutter/material.dart';

import '../../lazy_features.dart';
import '../../offline/offline_ui.dart';
import '../../parent_screens.dart';
import '../../parent_settings.dart';
import '../../session_manager.dart';
import '../models.dart';
import '../repository.dart';
import '../../companion/companion_logic.dart';
import '../../companion/companion_service.dart';
import '../../companion/companion_store.dart';
import '../../family_time/family_time.dart';
import '../../media/rehlaty_audio_engine.dart';
import '../../media/welcome_voice.dart';
import '../../notifications/notification_events.dart';
import 'create_choice.dart';
import 'home_tab.dart';
import 'kit.dart';
import 'me_tab.dart';

/// The child's whole world: four big tabs (home, games, create, me). Leaving it
/// needs the parent PIN, and closing it ends the session's time counting.
class ChildShell extends StatefulWidget {
  final ChildProfile child;
  const ChildShell({super.key, required this.child});

  @override
  State<ChildShell> createState() => _ChildShellState();
}

class _ChildShellState extends State<ChildShell> {
  int _tab = 0;

  @override
  void initState() {
    super.initState();
    CompanionStore.currentChildId = widget.child.id;
    // Today's plan and the weekly summary become notifications once, from real data.
    WidgetsBinding.instance.addPostFrameCallback((_) {
      NotificationEvents.refresh(widget.child);
      // The companion greets by voice only when the parent switched automatic narration on (and never twice in a row).
      WelcomeVoice.playOnce(); // «أهلاً بيكم يا أبطال», once per app run
      CompanionStore.noteAge(widget.child.id, widget.child.age);
      FamilyTimeStore.remind(widget.child.id, widget.child.nickname);
      if (EnginePrefs.instance.autoNarration) {
        CompanionService.react(widget.child.id, CompanionMoment.greet, age: widget.child.age).then((r) {
          if (r == null) RehlatyAudioEngine.instance.say('welcome_back'); // Adam's greeting (an approved recording once listed, else the device voice)
        });
      }
    });
  }

  @override
  void dispose() {
    if (CompanionStore.currentChildId == widget.child.id) CompanionStore.currentChildId = null;
    // Deferred so listeners are not notified in the middle of tearing down.
    WidgetsBinding.instance.addPostFrameCallback((_) => SessionManager.instance.stop());
    super.dispose();
  }

  Future<void> _exit() async {
    if (!await ParentSettings.instance.hasPin()) {
      if (mounted) Navigator.pop(context);
      return;
    }
    if (!mounted) return;
    final ok = await Navigator.push<bool>(context, MaterialPageRoute(builder: (_) => const PinEntryScreen(returnResult: true)));
    if (ok == true && mounted) Navigator.pop(context);
  }

  @override
  Widget build(BuildContext context) {
    return PopScope(
      canPop: false,
      onPopInvokedWithResult: (didPop, _) {
        if (!didPop) _exit();
      },
      child: ListenableBuilder(
        listenable: JourneyStore.instance,
        builder: (context, _) {
          final child = JourneyStore.instance.profileById(widget.child.id) ?? widget.child;
          final tabs = [
            HomeTab(child: child, onExit: _exit, onTab: (i) => setState(() => _tab = i)),
            _GamesTab(child: child, onBack: () => setState(() => _tab = 0)),
            CreateChoiceScreen(key: const ValueKey('create_tab'), child: child, onBack: () => setState(() => _tab = 0)),
            MeTab(child: child, onBack: () => setState(() => _tab = 0), onMore: () => setState(() => _tab = 4)),
            HomeTab(key: const ValueKey('more_tab'), more: true, child: child, onExit: _exit, onTab: (i) => setState(() => _tab = i)),
          ];
          // No bottom bar or side rail (owner request 2026-11-12): every place is reached from the pictures — the home's
          // islands (games, cartoons, learning, drawing), the child's picture and «مكافآتي» open «أنا», and «أنا» has
          // «المزيد». Each page has its own back arrow to the home.
          return Scaffold(
            body: Column(
              children: [
                const OfflineBanner(),
                Expanded(
                  child: PastelBackground(
                    child: SafeArea(
                      child: KeyedSubtree(key: const ValueKey('tab_body'), child: tabs[_tab]),
                    ),
                  ),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}

class _GamesTab extends StatefulWidget {
  final ChildProfile child;
  final VoidCallback onBack;
  const _GamesTab({required this.child, required this.onBack});

  @override
  State<_GamesTab> createState() => _GamesTabState();
}

class _GamesTabState extends State<_GamesTab> {
  /// false: the two cards (learning / fun); true: the ten-island learning hub.
  bool _learning = false;

  @override
  Widget build(BuildContext context) {
    if (!_learning) {
      return LazyGamesChoice(
        onBack: widget.onBack,
        onEducational: () => setState(() => _learning = true),
        onFun: () => Navigator.push(context, MaterialPageRoute<void>(builder: (_) => LazyFunGames(child: widget.child))),
      );
    }
    // The learning games hub: ten islands (letters, numbers, shapes...), each opening its own games. It fills the whole area.
    return LazyGamesHub(child: widget.child, onBack: () => setState(() => _learning = false));
  }
}
