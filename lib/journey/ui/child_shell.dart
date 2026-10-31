import 'package:flutter/material.dart';

import '../../design/layout.dart';
import '../../design/motion_system.dart';
import '../../design/tokens.dart';
import '../../games_screen.dart';
import '../../l10n/strings.dart';
import '../../offline/offline_ui.dart';
import '../../parent_screens.dart';
import '../../parent_settings.dart';
import '../../drawing_screen.dart';
import '../../session_manager.dart';
import '../models.dart';
import '../repository.dart';
import '../../companion/companion_logic.dart';
import '../../companion/companion_service.dart';
import '../../companion/companion_store.dart';
import '../../family_time/family_time.dart';
import '../../media/rehlaty_audio_engine.dart';
import '../../notifications/notification_events.dart';
import 'home_tab.dart';
import 'kit.dart';
import 'me_tab.dart';
import '../../studio/studio_screens.dart';
import '../../ui.dart' show BigTile, Tappable;

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
      CompanionStore.noteAge(widget.child.id, widget.child.age);
      FamilyTimeStore.remind(widget.child.id, widget.child.nickname);
      if (EnginePrefs.instance.autoNarration) {
        CompanionService.react(widget.child.id, CompanionMoment.greet, age: widget.child.age).then((r) {
          if (r == null) RehlatyAudioEngine.instance.say('hello');
        });
      }
    });
  }

  @override
  void dispose() {
    if (CompanionStore.currentChildId == widget.child.id) CompanionStore.currentChildId = null;
    // Deferred so listeners are not notified in the middle of tearing down.
    WidgetsBinding.instance.addPostFrameCallback(
      (_) => SessionManager.instance.stop(),
    );
    super.dispose();
  }

  Future<void> _exit() async {
    if (!await ParentSettings.instance.hasPin()) {
      if (mounted) Navigator.pop(context);
      return;
    }
    if (!mounted) return;
    final ok = await Navigator.push<bool>(
      context,
      MaterialPageRoute(
        builder: (_) => const PinEntryScreen(returnResult: true),
      ),
    );
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
          final child =
              JourneyStore.instance.profileById(widget.child.id) ??
              widget.child;
          final tabs = [
            HomeTab(
              child: child,
              onExit: _exit,
              onTab: (i) => setState(() => _tab = i),
            ),
            _GamesTab(child: child),
            _CreateTab(child: child),
            MeTab(child: child),
            HomeTab(
              key: const ValueKey('more_tab'),
              more: true,
              child: child,
              onExit: _exit,
              onTab: (i) => setState(() => _tab = i),
            ),
          ];
          // Upright phone: a bottom bar. A phone held sideways: a slim icon rail at the edge, over a comfortable spot for the
          // thumb, so the picture keeps the whole height. Tablets and desktops: the full rail with names.
          final screen = MediaQuery.sizeOf(context);
          final phone = screen.shortestSide < 600;
          final slim = phone && screen.width > screen.height;
          final wide = !phone && context.windowClass != WindowClass.compact;
          final items = [
            for (final (i, item) in _items.indexed)
              _NavItem(
                icon: item.$1,
                label: context.tr(item.$2),
                selected: _tab == i,
                compact: slim,
                onTap: () => setState(() => _tab = i),
              ),
          ];
          // Navigation fits the window: a bottom bar on phones, a side rail on wider windows.
          final content = Column(
            children: [
              const OfflineBanner(),
              Expanded(
                child: PastelBackground(
                  child: SafeArea(
                    child: KeyedSubtree(
                      key: const ValueKey('tab_body'),
                      child: tabs[_tab],
                    ),
                  ),
                ),
              ),
            ],
          );
          if (slim) {
            return Scaffold(
              body: Row(
                children: [
                  Container(
                    width: 64,
                    decoration: BoxDecoration(
                      color: Colors.white,
                      boxShadow: DS.softShadow,
                      border: const BorderDirectional(end: BorderSide(color: DS.border, width: 1.5)),
                    ),
                    child: SafeArea(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          for (final n in items)
                            Padding(padding: const EdgeInsets.symmetric(vertical: 4), child: n),
                        ],
                      ),
                    ),
                  ),
                  Expanded(child: content),
                ],
              ),
            );
          }
          if (wide) {
            return Scaffold(
              body: Row(
                children: [
                  Container(
                    width: 104,
                    decoration: BoxDecoration(
                      color: Colors.white,
                      boxShadow: DS.softShadow,
                      border: const BorderDirectional(
                        end: BorderSide(color: DS.border, width: 1.5),
                      ),
                    ),
                    child: SafeArea(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          for (final n in items)
                            Padding(
                              padding: const EdgeInsets.symmetric(vertical: 10),
                              child: n,
                            ),
                        ],
                      ),
                    ),
                  ),
                  Expanded(child: content),
                ],
              ),
            );
          }
          return Scaffold(
            body: content,
            bottomNavigationBar: SafeArea(
              child: Container(
                padding: const EdgeInsets.fromLTRB(12, 8, 12, 8),
                decoration: BoxDecoration(
                  color: Colors.white,
                  boxShadow: DS.softShadow,
                  borderRadius: const BorderRadius.vertical(
                    top: Radius.circular(24),
                  ),
                ),
                child: Row(
                  children: [for (final n in items) Expanded(child: n)],
                ),
              ),
            ),
          );
        },
      ),
    );
  }

  static const _items = [
    (Icons.home_rounded, 'tab.home'),
    (Icons.sports_esports_rounded, 'tab.games'),
    (Icons.palette_rounded, 'tab.create'),
    (Icons.face_rounded, 'tab.me'),
    (Icons.apps_rounded, 'tab.more'),
  ];
}

class _NavItem extends StatelessWidget {
  final IconData icon;
  final String label;
  final bool selected;
  final VoidCallback onTap;

  /// Icon only (a phone held sideways): the name stays in the accessibility label and a tooltip.
  final bool compact;
  const _NavItem({
    required this.icon,
    required this.label,
    required this.selected,
    required this.onTap,
    this.compact = false,
  });

  @override
  Widget build(BuildContext context) {
    return Semantics(
      button: true,
      selected: selected,
      label: label,
      excludeSemantics: true,
      child: Tappable(
        onTap: onTap,
        radius: 18,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            AnimatedContainer(
              duration: motion(context, 200),
              width: compact ? 44 : 52,
              height: compact ? 44 : 52,
              decoration: BoxDecoration(
                gradient: selected ? DS.primaryGradient : null,
                color: selected ? null : DS.primarySoft,
                borderRadius: BorderRadius.circular(18),
              ),
              child: AnimatedNavigationItem(
                selected: selected,
                child: Icon(
                  icon,
                  size: compact ? 26 : 30,
                  color: selected ? Colors.white : DS.primary,
                ),
              ),
            ),
            if (!compact) const SizedBox(height: 2),
            if (!compact)
            FittedBox(
              fit: BoxFit.scaleDown,
              child: Text(
                label,
                maxLines: 1,
                style: TextStyle(
                  fontSize: 13,
                  fontWeight: selected ? FontWeight.w900 : FontWeight.w600,
                  color: selected ? DS.primary : RC.ink,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _GamesTab extends StatelessWidget {
  final ChildProfile child;
  const _GamesTab({required this.child});

  @override
  Widget build(BuildContext context) {
    // The games map takes everything under a small title (no outer scrolling: the map slides sideways by itself).
    return Column(
      children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(16, 8, 16, 4),
          child: Text(
            loc('ألعاب'),
            style: const TextStyle(fontSize: 26, fontWeight: FontWeight.w900, color: RC.ink),
          ),
        ),
        Expanded(child: GamesGrid(age: child.age, child: child)),
      ],
    );
  }
}

class _CreateTab extends StatelessWidget {
  final ChildProfile child;
  const _CreateTab({required this.child});

  int get age => child.age;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              loc('إبداع'),
              style: TextStyle(
                fontSize: 30,
                fontWeight: FontWeight.w900,
                color: RC.ink,
              ),
            ),
            const SizedBox(height: 16),
            Wrap(
              spacing: 16,
              runSpacing: 16,
              alignment: WrapAlignment.center,
              children: [
                BigTile(
                  label: loc('استوديو الإبداع'),
                  icon: Icons.auto_awesome_rounded,
                  color: const Color(0xFF8E73D0),
                  onTap: () => Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (_) => StudioScreen(child: child),
                    ),
                  ),
                ),
                BigTile(
                  label: loc('رسم حر'),
                  icon: Icons.brush_rounded,
                  color: const Color(0xFFB085E8),
                  onTap: () => Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (_) => DrawingScreen(child: child),
                    ),
                  ),
                ),
                BigTile(
                  label: loc('دروس الرسم'),
                  icon: Icons.draw_rounded,
                  color: const Color(0xFFE56B9A),
                  onTap: () => openVideos(context, age, 'drawing'),
                ),
                BigTile(
                  label: loc('أناشيد'),
                  icon: Icons.music_note_rounded,
                  color: const Color(0xFFF2A33A),
                  onTap: () => openVideos(context, age, 'fun'),
                ),
                BigTile(
                  label: loc('قصص'),
                  icon: Icons.local_library_rounded,
                  color: const Color(0xFF4A90E2),
                  onTap: () => openVideos(context, age, 'stories'),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
