import 'package:flutter/material.dart';

import '../../games_screen.dart';
import '../../l10n/strings.dart';
import '../../parent_screens.dart';
import '../../parent_settings.dart';
import '../../drawing_screen.dart';
import '../../session_manager.dart';
import '../models.dart';
import '../repository.dart';
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
  void dispose() {
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
    final ok = await Navigator.push<bool>(
      context,
      MaterialPageRoute(builder: (_) => const PinEntryScreen(returnResult: true)),
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
          final child = JourneyStore.instance.profileById(widget.child.id) ?? widget.child;
          final tabs = [
            HomeTab(child: child, onExit: _exit, onTab: (i) => setState(() => _tab = i)),
            _GamesTab(age: child.age),
            _CreateTab(child: child),
            MeTab(child: child),
          ];
          return Scaffold(
            body: PastelBackground(child: SafeArea(child: tabs[_tab])),
            bottomNavigationBar: SafeArea(
              child: Container(
                padding: const EdgeInsets.fromLTRB(12, 8, 12, 8),
                decoration: BoxDecoration(
                  color: RC.sky.withAlpha(200),
                  border: const Border(top: BorderSide(color: RC.outline, width: 2)),
                ),
                child: Row(
                  children: [
                    for (final (i, item) in _items.indexed)
                      Expanded(
                        child: _NavItem(
                          icon: item.$1,
                          label: context.tr(item.$2),
                          selected: _tab == i,
                          onTap: () => setState(() => _tab = i),
                        ),
                      ),
                  ],
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
  ];
}

class _NavItem extends StatelessWidget {
  final IconData icon;
  final String label;
  final bool selected;
  final VoidCallback onTap;
  const _NavItem({required this.icon, required this.label, required this.selected, required this.onTap});

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
              width: 56,
              height: 52,
              decoration: BoxDecoration(
                color: selected ? RC.pink : Colors.white,
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: selected ? RC.pinkDeep : RC.outline, width: 3),
              ),
              child: Icon(icon, size: 30, color: selected ? Colors.white : RC.outline),
            ),
            const SizedBox(height: 2),
            Text(label,
                style: TextStyle(
                    fontSize: 13,
                    fontWeight: selected ? FontWeight.w900 : FontWeight.w600,
                    color: RC.ink)),
          ],
        ),
      ),
    );
  }
}

class _GamesTab extends StatelessWidget {
  final int age;
  const _GamesTab({required this.age});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(loc('ألعاب'),
                style: TextStyle(fontSize: 30, fontWeight: FontWeight.w900, color: RC.ink)),
            const SizedBox(height: 16),
            GamesGrid(age: age),
          ],
        ),
      ),
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
            Text(loc('إبداع'),
                style: TextStyle(fontSize: 30, fontWeight: FontWeight.w900, color: RC.ink)),
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
                    MaterialPageRoute(builder: (_) => StudioScreen(child: child)),
                  ),
                ),
                BigTile(
                  label: loc('رسم حر'),
                  icon: Icons.brush_rounded,
                  color: const Color(0xFFB085E8),
                  onTap: () => Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => DrawingScreen(child: child)),
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
