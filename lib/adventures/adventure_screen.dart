import 'package:flutter/material.dart';

import '../companion/companion_ui.dart';
import '../design/focusable_tap.dart';
import '../games/game_catalog.dart';
import '../journey/models.dart';
import '../journey/ui/kit.dart';
import '../l10n/app_locale.dart';
import '../l10n/strings.dart';
import '../media/rehlaty_audio_engine.dart' show EnginePrefs;
import '../stories/story_data.dart';
import '../stories/story_screens.dart' show StoryPlayerScreen;
import 'adventure_logic.dart';
import 'adventure_service.dart';
import 'adventure_store.dart';

/// «مغامرة الأسبوع»: this week's path of real games and one story. Steps open the real activity; the checks come only
/// from what the child really finished this week.
class AdventureScreen extends StatefulWidget {
  final ChildProfile child;
  const AdventureScreen({super.key, required this.child});

  @override
  State<AdventureScreen> createState() => _AdventureScreenState();
}

class _AdventureScreenState extends State<AdventureScreen> {
  AdventureStatus? _s;
  Map<String, String> _past = {};

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final s = await AdventureService.check(widget.child.id, widget.child.age, speak: EnginePrefs.instance.autoNarration);
    final past = await AdventureStore.finished(widget.child.id);
    if (mounted) setState(() { _s = s; _past = past; });
  }

  Future<void> _open(AdventureStep step) async {
    Widget? page;
    if (step.kind == 'game') {
      final g = kEducationalGames.firstWhere((g) => g.id == step.id);
      page = g.build(widget.child.id, widget.child.age, AppLocale.instance.code);
    } else {
      final st = publishedStories().firstWhere((s) => s.id == step.id);
      page = StoryPlayerScreen(story: st, child: widget.child);
    }
    await Navigator.push(context, MaterialPageRoute<void>(builder: (_) => page!));
    if (mounted) _load();
  }

  String _name(AdventureStep s) => s.kind == 'game'
      ? kEducationalGames.firstWhere((g) => g.id == s.id).title()
      : publishedStories().firstWhere((x) => x.id == s.id).title;

  @override
  Widget build(BuildContext context) {
    final s = _s;
    return Scaffold(
      appBar: AppBar(title: Text(tr2('مغامرة الأسبوع', 'Weekly adventure'))),
      body: s == null
          ? const Center(child: CircularProgressIndicator())
          : ListView(
              padding: const EdgeInsets.all(16),
              children: [
                RCard(
                  key: const ValueKey('adventure_theme'),
                  color: RC.lavender.withAlpha(170),
                  child: Column(children: [
                    Text(s.plan.theme.title(), textAlign: TextAlign.center, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: RC.ink)),
                    Text(s.plan.theme.blurb(), textAlign: TextAlign.center, style: const TextStyle(fontSize: 15, color: RC.ink)),
                    const SizedBox(height: 6),
                    Text(
                      s.complete
                          ? tr2('خلصت مغامرة هذا الأسبوع!', "You finished this week's adventure!")
                          : tr2('خلصت ${s.done.where((d) => d).length} من ${s.done.length}. بدون استعجال.', 'Finished ${s.done.where((d) => d).length} of ${s.done.length}. No rush.'),
                      key: const ValueKey('adventure_progress'),
                      style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w800, color: RC.ink),
                    ),
                  ]),
                ),
                if (s.said != null) Padding(padding: const EdgeInsets.only(top: 10), child: CompanionBubble(s.said!)),
                const SizedBox(height: 10),
                if (s.plan.steps.isEmpty)
                  Text(tr2('لا توجد ألعاب مناسبة لهذا العمر هذا الأسبوع. جرّب اكتشف مع ماما وبابا.', 'No games fit this age this week. Try discovering with mum and dad.'), textAlign: TextAlign.center),
                for (var i = 0; i < s.plan.steps.length; i++)
                  Padding(
                    padding: const EdgeInsets.only(bottom: 10),
                    child: FocusableTap(
                      onTap: () => _open(s.plan.steps[i]),
                      semanticLabel: '${_name(s.plan.steps[i])}, ${s.done[i] ? tr2('تم', 'done') : tr2('لم يتم بعد', 'not yet')}',
                      child: RCard(
                        key: ValueKey('adventure_step_$i'),
                        color: s.done[i] ? const Color(0xFFE3F8E0) : Colors.white,
                        child: Row(children: [
                          Icon(s.done[i] ? Icons.check_circle_rounded : Icons.circle_outlined, color: s.done[i] ? Colors.green.shade700 : RC.outline, size: 32),
                          const SizedBox(width: 12),
                          Expanded(child: Text(_name(s.plan.steps[i]), style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: RC.ink))),
                          Icon(s.plan.steps[i].kind == 'story' ? Icons.menu_book_rounded : Icons.sports_esports_rounded, color: RC.ink),
                        ]),
                      ),
                    ),
                  ),
                if (_past.isNotEmpty) ...[
                  const SizedBox(height: 8),
                  Text(tr2('مغامراتي', 'My adventures'), style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: RC.ink)),
                  const SizedBox(height: 6),
                  Wrap(spacing: 8, runSpacing: 8, children: [
                    for (final e in _past.entries.toList().reversed)
                      Chip(
                        key: ValueKey('adventure_past_${e.key}'),
                        avatar: const Icon(Icons.flag_rounded, size: 18),
                        label: Text(kAdventureThemes.firstWhere((t) => t.id == e.value, orElse: () => kAdventureThemes.first).title()),
                      ),
                  ]),
                ],
              ],
            ),
    );
  }
}

/// Card on the Me tab that opens the weekly adventure.
class AdventureCard extends StatelessWidget {
  final ChildProfile child;
  const AdventureCard({super.key, required this.child});

  @override
  Widget build(BuildContext context) => FocusableTap(
        onTap: () => Navigator.push(context, MaterialPageRoute<void>(builder: (_) => AdventureScreen(child: child))),
        semanticLabel: tr2('مغامرة الأسبوع', 'Weekly adventure'),
        child: RCard(
          key: const ValueKey('adventure_card'),
          color: const Color(0xFFFFE9F1),
          child: Row(children: [
            const Icon(Icons.explore_rounded, size: 40, color: RC.pinkDeep),
            const SizedBox(width: 12),
            Expanded(child: Text(tr2('مغامرة الأسبوع', 'Weekly adventure'), style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w900, color: RC.ink))),
            const Icon(Icons.chevron_right, color: RC.ink),
          ]),
        ),
      );
}
