import 'package:flutter/material.dart';

import '../companion/companion_logic.dart';
import '../companion/companion_service.dart';
import '../companion/companion_ui.dart';
import '../design/focusable_tap.dart';
import '../journey/models.dart';
import '../journey/ui/kit.dart';
import '../l10n/strings.dart';
import '../media/rehlaty_audio_engine.dart';
import 'branching.dart';
import 'story_store.dart';

/// A choose-your-path story. No choice is wrong; every path ends kindly. Reaching an ending counts as hearing the story
/// to the end (recorded once per day, celebrated once by the companion).
class BranchingStoryScreen extends StatefulWidget {
  final BranchStory story;
  final ChildProfile child;
  const BranchingStoryScreen({super.key, required this.story, required this.child});

  @override
  State<BranchingStoryScreen> createState() => _BranchingStoryScreenState();
}

class _BranchingStoryScreenState extends State<BranchingStoryScreen> {
  late String _at = widget.story.start;
  final List<String> _trail = [];
  CompanionReaction? _said;

  BranchNode get _node => widget.story.nodes[_at]!;
  String get _lang => RehlatyAudioEngine.instance.lang;

  Future<void> _go(String to) async {
    _trail.add(_at);
    setState(() => _at = to);
    if (widget.story.nodes[to]!.isEnding) {
      await StoryStore.addListening(widget.child.id, 'branch_${widget.story.id}', 0, completed: true);
      final r = await CompanionService.react(widget.child.id, CompanionMoment.storyDone,
          eventId: 'story:branch_${widget.story.id}', age: widget.child.age, speak: EnginePrefs.instance.autoNarration);
      if (mounted) setState(() => _said = r);
    }
  }

  void _back() {
    if (_trail.isEmpty) return;
    setState(() { _at = _trail.removeLast(); _said = null; });
  }

  void _again() => setState(() { _at = widget.story.start; _trail.clear(); _said = null; });

  Future<void> _read() async => RehlatyAudioEngine.instance.sayText(await currentGuide(), _node.text(_lang));

  @override
  void dispose() {
    RehlatyAudioEngine.instance.stop();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final n = _node;
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.story.title()),
        actions: [
          IconButton(key: const ValueKey('branch_read'), tooltip: tr2('اسمع هذه الصفحة', 'Listen to this page'), onPressed: _read, icon: const Icon(Icons.volume_up_rounded)),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
          RCard(
            key: const ValueKey('branch_text'),
            child: Text(n.text(_lang), style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: RC.ink, height: 1.5)),
          ),
          const SizedBox(height: 12),
          if (n.isEnding) ...[
            if (_said != null) CompanionBubble(_said!),
            const SizedBox(height: 12),
            FilledButton.icon(
              key: const ValueKey('branch_again'),
              style: FilledButton.styleFrom(minimumSize: const Size(160, 56)),
              onPressed: _again,
              icon: const Icon(Icons.replay_rounded),
              label: Text(tr2('نحكيها بطريقة ثانية', 'Tell it another way'), style: const TextStyle(fontSize: 18)),
            ),
          ] else
            for (var i = 0; i < n.choices.length; i++)
              Padding(
                padding: const EdgeInsets.only(bottom: 10),
                child: FocusableTap(
                  onTap: () => _go(n.choices[i].to),
                  semanticLabel: n.choices[i].text(_lang),
                  child: RCard(
                    key: ValueKey('branch_choice_$i'),
                    color: const Color(0xFFE8E0FF),
                    child: Text(n.choices[i].text(_lang), textAlign: TextAlign.center, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w900, color: RC.ink)),
                  ),
                ),
              ),
          if (_trail.isNotEmpty && !n.isEnding)
            TextButton.icon(key: const ValueKey('branch_back'), onPressed: _back, icon: const Icon(Icons.undo_rounded), label: Text(tr2('ارجع خطوة', 'Go back a step'))),
          ],
        ),
      ),
    );
  }
}

/// Entry card at the top of the stories library.
class BranchingStoriesCard extends StatelessWidget {
  final ChildProfile child;
  const BranchingStoriesCard({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    final list = [for (final s in kBranchingStories) if (s.fitsAge(child.age)) s];
    if (list.isEmpty) return const SizedBox.shrink();
    return RCard(
      key: const ValueKey('branching_card'),
      color: const Color(0xFFE8E0FF),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text(tr2('اختر الطريق بنفسك', 'Choose your path'), style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: RC.ink)),
        const SizedBox(height: 6),
        for (final s in list)
          FocusableTap(
            onTap: () => Navigator.push(context, MaterialPageRoute<void>(builder: (_) => BranchingStoryScreen(story: s, child: child))),
            semanticLabel: s.title(),
            child: Padding(
              key: ValueKey('branch_${s.id}'),
              padding: const EdgeInsets.symmetric(vertical: 8),
              child: Row(children: [
                const Icon(Icons.call_split_rounded, color: RC.pinkDeep),
                const SizedBox(width: 10),
                Expanded(child: Text(s.title(), style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: RC.ink))),
              ]),
            ),
          ),
      ]),
    );
  }
}
