import 'package:flutter/material.dart';

import '../design/brand.dart';
import '../design/focusable_tap.dart';
import '../journey/models.dart';
import '../journey/ui/kit.dart';
import '../l10n/strings.dart';
import '../media/rehlaty_audio_engine.dart';
import 'companion_logic.dart';
import 'companion_service.dart';
import 'companion_store.dart';

BrandCharacter _art(CharacterVoice who) => who == CharacterVoice.nour ? BrandCharacter.nour : BrandCharacter.adam;
String companionName(CharacterVoice who) => who == CharacterVoice.nour ? tr2('نور', 'Nour') : tr2('آدم', 'Adam');

/// A speech bubble next to the companion. The words are always written, so the child (or a parent) can read what was
/// said even when the sound is off or the voice is unavailable.
class CompanionBubble extends StatelessWidget {
  final CompanionReaction reaction;
  final double artHeight;
  const CompanionBubble(this.reaction, {super.key, this.artHeight = 96});

  @override
  Widget build(BuildContext context) {
    final text = reaction.text(RehlatyAudioEngine.instance.lang);
    return Semantics(
      liveRegion: true,
      label: '${companionName(reaction.who)}: $text',
      child: ExcludeSemantics(
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.end,
          mainAxisSize: MainAxisSize.min,
          children: [
            CharacterImage(_art(reaction.who), height: artHeight),
            const SizedBox(width: 8),
            Flexible(
              child: Container(
                key: const ValueKey('companion_bubble'),
                padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(20),
                  border: Border.all(color: RC.outline, width: 2),
                ),
                child: Text(text, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: RC.ink)),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

/// The companion on the Me tab: say hello, tap to talk, pick Adam or Nour. Everything said comes from the approved
/// catalogue; nothing is typed or generated.
class CompanionCard extends StatefulWidget {
  final ChildProfile child;
  const CompanionCard({super.key, required this.child});

  @override
  State<CompanionCard> createState() => _CompanionCardState();
}

class _CompanionCardState extends State<CompanionCard> {
  bool _on = true;
  bool _ready = false;
  CharacterVoice _who = CharacterVoice.adam;
  CompanionReaction? _said;
  int _taps = 0;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    await CompanionStore.noteAge(widget.child.id, widget.child.age);
    final on = await CompanionStore.enabled();
    final who = await CompanionStore.who(widget.child.id);
    final hi = await CompanionService.react(widget.child.id, CompanionMoment.greet, age: widget.child.age, speak: false);
    if (mounted) setState(() { _on = on; _who = who; _said = hi; _ready = true; });
  }

  Future<void> _tap() async {
    // tap -> (offer a challenge when earned) -> greeting, then around again; each is one approved line
    final order = [CompanionMoment.tap, CompanionMoment.challenge, CompanionMoment.greet];
    CompanionReaction? r;
    for (var i = 0; i < order.length && r == null; i++) {
      r = await CompanionService.react(widget.child.id, order[(_taps + i) % order.length], age: widget.child.age, force: true);
      if (r == null) _taps++;
    }
    _taps++;
    if (mounted && r != null) setState(() => _said = r);
  }

  Future<void> _pick(CharacterVoice who) async {
    await CompanionStore.setWho(widget.child.id, who);
    final hi = await CompanionService.react(widget.child.id, CompanionMoment.greet, age: widget.child.age, force: true);
    if (mounted) setState(() { _who = who; _said = hi ?? _said; });
  }

  @override
  Widget build(BuildContext context) {
    if (!_ready || !_on) return const SizedBox.shrink();
    return RCard(
      key: const ValueKey('companion_card'),
      color: RC.lavender.withAlpha(170),
      child: Column(
        children: [
          Text(tr2('رفيقي', 'My friend'), style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w900, color: RC.ink)),
          const SizedBox(height: 8),
          FocusableTap(
            onTap: _tap,
            semanticLabel: tr2('اضغط لتتكلم مع ${companionName(_who)}', 'Tap to talk with ${companionName(_who)}'),
            child: _said != null
                ? CompanionBubble(_said!)
                : Padding(padding: const EdgeInsets.all(8), child: CharacterImage(_art(_who), height: 96)),
          ),
          const SizedBox(height: 10),
          Wrap(
            spacing: 10,
            runSpacing: 8,
            alignment: WrapAlignment.center,
            children: [
              for (final w in [CharacterVoice.adam, CharacterVoice.nour])
                ChoiceChip(
                  key: ValueKey('pick_${w.name}'),
                  label: Text(companionName(w), style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w800)),
                  selected: _who == w,
                  materialTapTargetSize: MaterialTapTargetSize.padded,
                  visualDensity: VisualDensity.comfortable,
                  onSelected: (_) => _pick(w),
                ),
            ],
          ),
        ],
      ),
    );
  }
}

/// Who presents things to the current child: their chosen companion, or Adam when none is known or it is switched off.
Future<CharacterVoice> currentGuide() async {
  final id = CompanionStore.currentChildId;
  if (id == null || !await CompanionStore.enabled()) return CharacterVoice.adam;
  return CompanionStore.who(id);
}

/// The speaker button of a game: the child's guide (Adam or Nour) reads the instruction aloud when tapped.
class GuideSpeakButton extends StatefulWidget {
  final String instruction;
  const GuideSpeakButton(this.instruction, {super.key});

  @override
  State<GuideSpeakButton> createState() => _GuideSpeakButtonState();
}

class _GuideSpeakButtonState extends State<GuideSpeakButton> {
  CharacterVoice _who = CharacterVoice.adam;

  @override
  void initState() {
    super.initState();
    currentGuide().then((w) {
      if (mounted) setState(() => _who = w);
    });
  }

  @override
  Widget build(BuildContext context) {
    return IconButton(
      key: const ValueKey('speak_instruction'),
      tooltip: tr2('اسمع التعليمات من ${companionName(_who)}', 'Listen to the instructions with ${companionName(_who)}'),
      iconSize: 30,
      onPressed: () => RehlatyAudioEngine.instance.sayText(_who, widget.instruction),
      icon: Stack(
        clipBehavior: Clip.none,
        alignment: Alignment.center,
        children: [
          CharacterImage(_who == CharacterVoice.nour ? BrandCharacter.nourHead : BrandCharacter.adamHead, height: 34),
          const PositionedDirectional(end: -6, bottom: -4, child: Icon(Icons.volume_up_rounded, size: 18, color: RC.ink)),
        ],
      ),
    );
  }
}
