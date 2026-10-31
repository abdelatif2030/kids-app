import 'package:flutter/material.dart';

import '../companion/companion_logic.dart';
import '../companion/companion_service.dart';
import '../companion/companion_ui.dart';
import '../design/focusable_tap.dart';
import '../journey/models.dart';
import '../journey/stickers.dart';
import '../journey/ui/kit.dart';
import '../l10n/strings.dart';
import '../media/rehlaty_audio_engine.dart' show EnginePrefs;
import 'world_art.dart';
import 'world_collectibles.dart';
import 'world_look.dart';
import 'world_progress.dart';

/// «عالمي»: the child's islands. Places open with real finished things, collectibles stand on them once earned, and the
/// look (colours, time of day, island name) is chosen from short approved lists. Nothing here can be bought or lost.
class WorldScreen extends StatefulWidget {
  final ChildProfile child;
  const WorldScreen({super.key, required this.child});

  @override
  State<WorldScreen> createState() => _WorldScreenState();
}

class _WorldScreenState extends State<WorldScreen> {
  WorldProgress? _w;
  List<WorldLocation> _fresh = const [];
  List<Collectible> _freshItems = const [];
  List<Collectible> _owned = const [];
  WorldLook _look = const WorldLook();
  String _place = 'island';
  CompanionReaction? _said;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final id = widget.child.id;
    final w = WorldProgress.of(await finishedCount(id));
    final owned = ownedCollectibles(await loadCollectProgress(id));
    final look = await WorldLookStore.of(id);
    final fresh = await WorldStore.fresh(id, w);
    final seen = await WorldStore.seen(id);
    final freshItems = [for (final c in owned) if (!seen.contains('c:${c.id}')) c];
    await WorldStore.markSeen(id, [...fresh.map((l) => l.id), ...freshItems.map((c) => 'c:${c.id}')]);
    CompanionReaction? said;
    if (fresh.isNotEmpty) {
      said = await CompanionService.react(id, CompanionMoment.placeOpened, eventId: 'place:${fresh.first.id}', age: widget.child.age, speak: EnginePrefs.instance.autoNarration);
    }
    if (mounted) setState(() { _w = w; _fresh = fresh; _freshItems = freshItems; _owned = owned; _look = look; _said = said; });
  }

  Future<void> _personalise() async {
    final look = await showModalBottomSheet<WorldLook>(context: context, isScrollControlled: true, builder: (_) => _LookSheet(_look));
    if (look == null) return;
    await WorldLookStore.save(widget.child.id, look);
    if (mounted) setState(() => _look = look);
  }

  @override
  Widget build(BuildContext context) {
    final w = _w;
    return Scaffold(
      appBar: AppBar(
        title: Text(tr2('عالمي', 'My world')),
        actions: [IconButton(key: const ValueKey('world_personalise'), tooltip: tr2('غيّر شكل عالمي', 'Change how my world looks'), onPressed: w == null ? null : _personalise, icon: const Icon(Icons.palette_rounded))],
      ),
      body: w == null
          ? const Center(child: CircularProgressIndicator())
          : LayoutBuilder(builder: (context, box) {
              final wide = box.maxWidth >= 1000;
              final scene = _sceneCard(w, wide ? 460 : (box.maxWidth - 32).clamp(240, 420).toDouble());
              final shelf = _shelf(w);
              return SingleChildScrollView(
                padding: const EdgeInsets.all(16),
                child: Column(children: [
                  if (_fresh.isNotEmpty || _freshItems.isNotEmpty) _celebration(),
                  if (_said != null) Padding(padding: const EdgeInsets.only(bottom: 8), child: CompanionBubble(_said!)),
                  Text(
                    w.next == null ? tr2('كل أماكن عالمك مفتوحة!', 'Every place in your world is open!') : tr2('أنهِ ${w.toNext} أشياء أخرى لتفتح مكانًا جديدًا.', 'Finish ${w.toNext} more things to open a new place.'),
                    key: const ValueKey('world_next'),
                    textAlign: TextAlign.center,
                    style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: RC.ink),
                  ),
                  const SizedBox(height: 10),
                  if (wide) Row(crossAxisAlignment: CrossAxisAlignment.start, children: [scene, const SizedBox(width: 16), Expanded(child: shelf)]) else ...[scene, const SizedBox(height: 12), shelf],
                  const SizedBox(height: 12),
                  Wrap(alignment: WrapAlignment.center, spacing: 10, runSpacing: 10, children: [for (final l in kWorldLocations) _tile(l, w.isOpen(l.id))]),
                ]),
              );
            }),
    );
  }

  Widget _celebration() => RCard(
        key: const ValueKey('world_new'),
        color: const Color(0xFFFFF1D6),
        child: Text(
          [
            if (_fresh.isNotEmpty) tr2('مكان جديد انفتح: ${_fresh.map((l) => l.title()).join('، ')}!', 'A new place opened: ${_fresh.map((l) => l.title()).join(', ')}!'),
            if (_freshItems.isNotEmpty && _freshItems.length <= 3) tr2('هدية جديدة لعالمك: ${_freshItems.map((c) => c.name()).join('، ')}!', 'New in your world: ${_freshItems.map((c) => c.name()).join(', ')}!'),
            if (_freshItems.length > 3) tr2('${_freshItems.length} هدايا جديدة لعالمك!', '${_freshItems.length} new gifts in your world!'),
          ].join('\n'),
          textAlign: TextAlign.center,
          style: const TextStyle(fontSize: 19, fontWeight: FontWeight.w900, color: RC.ink),
        ),
      );

  Widget _sceneCard(WorldProgress w, double width) {
    final open = w.isOpen(_place);
    final loc = kWorldLocations.firstWhere((l) => l.id == _place);
    return Semantics(
      label: open ? '${_look.nameText}: ${loc.title()}' : tr2('مكان مقفل', 'Locked place'),
      child: Column(key: const ValueKey('world_scene'), children: [
        ClipRRect(borderRadius: BorderRadius.circular(24), child: IslandScene(_place, look: _look, decor: _owned, locked: !open, width: width)),
        const SizedBox(height: 6),
        Text(open ? '${_look.nameText} · ${loc.title()}' : tr2('بعد ${loc.needs} أشياء', 'After ${loc.needs} things'), style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: RC.ink)),
        Text(open ? loc.hint() : '?', style: const TextStyle(fontSize: 13, color: RC.ink)),
      ]),
    );
  }

  Widget _shelf(WorldProgress w) {
    return RCard(
      key: const ValueKey('world_shelf'),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text('${tr2('هدايا عالمي', 'My world gifts')}  (${_owned.length}/${kCollectibles.length})', style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: RC.ink)),
        Text(tr2('كل هدية تأتي من شيء أنهيته فعلاً.', 'Every gift comes from something you really finished.'), style: const TextStyle(fontSize: 13, color: RC.ink)),
        const SizedBox(height: 8),
        Wrap(spacing: 8, runSpacing: 8, children: [
          for (final c in kCollectibles)
            Builder(builder: (context) {
              final got = _owned.any((o) => o.id == c.id);
              return Tooltip(
                message: got ? c.name() : c.hint(),
                child: Semantics(
                  label: got ? c.name() : '${tr2('هدية مقفلة', 'Locked gift')}: ${c.hint()}',
                  child: Container(
                    key: ValueKey(got ? 'gift_${c.id}' : 'locked_gift_${c.id}'),
                    width: 44,
                    height: 44,
                    decoration: BoxDecoration(color: got ? Colors.white : Colors.black12, shape: BoxShape.circle, border: Border.all(color: RC.outline, width: 2)),
                    child: got ? Padding(padding: const EdgeInsets.all(5), child: CollectibleArt(c, size: 34)) : const Icon(Icons.help_outline_rounded, size: 20, color: RC.ink),
                  ),
                ),
              );
            }),
        ]),
      ]),
    );
  }

  Widget _tile(WorldLocation l, bool open) {
    final selected = _place == l.id;
    return FocusableTap(
      onTap: () => setState(() => _place = l.id),
      semanticLabel: open ? l.title() : tr2('مكان مقفل', 'Locked place'),
      child: Container(
        key: ValueKey(open ? 'world_${l.id}' : 'world_locked_${l.id}'),
        width: 104,
        padding: const EdgeInsets.all(4),
        decoration: BoxDecoration(borderRadius: BorderRadius.circular(18), border: Border.all(color: selected ? RC.pinkDeep : Colors.transparent, width: 3)),
        child: Column(children: [
          IslandArt(l.id, size: 92, locked: !open),
          Text(open ? l.title() : '?', textAlign: TextAlign.center, maxLines: 2, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w900, color: RC.ink)),
        ]),
      ),
    );
  }
}

class _LookSheet extends StatefulWidget {
  final WorldLook look;
  const _LookSheet(this.look);

  @override
  State<_LookSheet> createState() => _LookSheetState();
}

class _LookSheetState extends State<_LookSheet> {
  late WorldLook _look = widget.look;

  @override
  Widget build(BuildContext context) {
    String timeName(WorldTime t) => switch (t) { WorldTime.day => tr2('نهار', 'Day'), WorldTime.sunset => tr2('غروب', 'Sunset'), WorldTime.night => tr2('ليل', 'Night') };
    return SafeArea(
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(tr2('شكل عالمي', 'How my world looks'), style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w900)),
          const SizedBox(height: 8),
          Wrap(spacing: 8, runSpacing: 8, children: [
            for (final t in kWorldThemes) ChoiceChip(key: ValueKey('look_theme_${t.id}'), label: Text(t.name()), selected: _look.theme == t.id, onSelected: (_) => setState(() => _look = _look.copy(theme: t.id))),
          ]),
          const SizedBox(height: 8),
          Wrap(spacing: 8, runSpacing: 8, children: [
            for (final t in WorldTime.values) ChoiceChip(key: ValueKey('look_time_${t.name}'), label: Text(timeName(t)), selected: _look.time == t, onSelected: (_) => setState(() => _look = _look.copy(time: t))),
          ]),
          const SizedBox(height: 8),
          Wrap(spacing: 8, runSpacing: 8, children: [
            for (final n in kIslandNames) ChoiceChip(key: ValueKey('look_name_${n.$1}'), label: Text(n.$2()), selected: _look.name == n.$1, onSelected: (_) => setState(() => _look = _look.copy(name: n.$1))),
          ]),
          const SizedBox(height: 12),
          FilledButton(key: const ValueKey('look_save'), style: FilledButton.styleFrom(minimumSize: const Size.fromHeight(52)), onPressed: () => Navigator.pop(context, _look), child: Text(tr2('احفظ', 'Save'))),
        ]),
      ),
    );
  }
}

/// Card on the Me tab that opens [WorldScreen].
class WorldCard extends StatelessWidget {
  final ChildProfile child;
  const WorldCard({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return FocusableTap(
      onTap: () => Navigator.push(context, MaterialPageRoute<void>(builder: (_) => WorldScreen(child: child))),
      semanticLabel: tr2('عالمي', 'My world'),
      child: RCard(
        key: const ValueKey('world_card'),
        color: const Color(0xFFDDF3FF),
        child: Row(children: [
          const IslandArt('garden', size: 64),
          const SizedBox(width: 12),
          Expanded(child: Text(tr2('عالمي', 'My world'), style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w900, color: RC.ink))),
          const Icon(Icons.chevron_right, color: RC.ink),
        ]),
      ),
    );
  }
}
