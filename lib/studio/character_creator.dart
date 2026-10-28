import 'package:flutter/material.dart';

import '../journey/models.dart';
import '../journey/ui/kit.dart';
import 'autosave.dart';
import 'creations.dart';
import '../l10n/strings.dart';

/// Design a friendly character: face, hair, hat and clothes. A made-up
/// character, not a picture of the child. Saved automatically.
class CharacterCreatorScreen extends StatefulWidget {
  final ChildProfile child;
  final Creation? initial;
  const CharacterCreatorScreen({super.key, required this.child, this.initial});

  @override
  State<CharacterCreatorScreen> createState() => _CharacterCreatorScreenState();
}

class _CharacterCreatorScreenState extends State<CharacterCreatorScreen> {
  late final CreationAutosaver _save = CreationAutosaver(widget.child, CreationKind.character, initial: widget.initial)
    ..onChanged = () {
      if (mounted) setState(() {});
    };
  late CharacterSpec _spec = widget.initial == null
      ? const CharacterSpec()
      : CharacterSpec.fromJson((widget.initial!.data['spec'] as Map).cast<String, dynamic>());

  void _set(CharacterSpec s) {
    setState(() => _spec = s);
    _save.changed(() => {'spec': _spec.toJson()});
  }

  @override
  void dispose() {
    _save.dispose();
    super.dispose();
  }

  Widget _row(String title, Widget children) => Padding(
        padding: const EdgeInsets.only(top: 8),
        child: Row(
          children: [
            SizedBox(width: 84, child: Text(title, style: const TextStyle(fontWeight: FontWeight.w900, color: RC.ink))),
            Expanded(child: Wrap(spacing: 6, runSpacing: 4, children: [children])),
          ],
        ),
      );

  Widget _colors(List<int> colors, int selected, void Function(int) pick, String what) => Wrap(
        spacing: 6,
        children: [
          for (var i = 0; i < colors.length; i++)
            Semantics(
              button: true,
              selected: i == selected,
              label: '$what ${i + 1}',
              child: GestureDetector(
                onTap: () => pick(i),
                child: Container(
                  width: 38,
                  height: 38,
                  decoration: BoxDecoration(
                    color: Color(colors[i]),
                    shape: BoxShape.circle,
                    border: Border.all(color: i == selected ? RC.ink : Colors.black26, width: i == selected ? 4 : 2),
                  ),
                ),
              ),
            ),
        ],
      );

  Widget _choices(List<String> labels, int selected, void Function(int) pick) => Wrap(
        spacing: 6,
        children: [
          for (var i = 0; i < labels.length; i++)
            ChoiceChip(label: Text(labels[i].isEmpty ? loc('بدون') : loc(labels[i])), selected: i == selected, onSelected: (_) => pick(i)),
        ],
      );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: RC.ink,
        title: Text(loc('صمّم شخصية'),
            style: TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: RC.ink)),
        actions: [
          Center(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 12),
              child: Text(_save.saved ? loc('تم الحفظ ✓') : '', style: const TextStyle(color: RC.ink)),
            ),
          ),
        ],
      ),
      body: PastelBackground(
        child: SafeArea(
          child: ListView(
            padding: const EdgeInsets.all(16),
            children: [
              Center(
                child: Semantics(
                  label: loc('شخصيتك'),
                  child: Container(
                    width: 220,
                    height: 260,
                    decoration: BoxDecoration(
                      color: const Color(0xFFEAF4FF),
                      borderRadius: BorderRadius.circular(28),
                      border: Border.all(color: RC.outline, width: 3),
                    ),
                    child: CustomPaint(painter: CharacterPainter(_spec)),
                  ),
                ),
              ),
              _row(loc('البشرة'), _colors(kSkinTones, _spec.skin, (i) => _set(_spec.copyWith(skin: i)), loc('لون بشرة'))),
              _row(loc('الشعر'), _choices(kHairStyles, _spec.hairStyle, (i) => _set(_spec.copyWith(hairStyle: i)))),
              _row(loc('لون الشعر'), _colors(kHairColors, _spec.hairColor, (i) => _set(_spec.copyWith(hairColor: i)), loc('لون شعر'))),
              _row(loc('العيون'), _choices(kEyeStyles, _spec.eyes, (i) => _set(_spec.copyWith(eyes: i)))),
              _row(loc('الفم'), _choices(kMouthStyles, _spec.mouth, (i) => _set(_spec.copyWith(mouth: i)))),
              _row(loc('القميص'), _colors(kShirtColors, _spec.shirt, (i) => _set(_spec.copyWith(shirt: i)), loc('لون قميص'))),
              _row(
                loc('القبعة'),
                Wrap(
                  spacing: 6,
                  children: [
                    for (var i = 0; i < kHats.length; i++)
                      ChoiceChip(
                        label: Text(kHats[i].isEmpty ? loc('بدون') : kHats[i], style: const TextStyle(fontSize: 22)),
                        selected: _spec.hat == i,
                        onSelected: (_) => _set(_spec.copyWith(hat: i)),
                      ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
