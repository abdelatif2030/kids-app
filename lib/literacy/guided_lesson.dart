import 'dart:math';

import 'package:flutter/material.dart';

import '../design/components.dart';
import '../design/tokens.dart';
import '../journey/models.dart';
import '../journey/ui/kit.dart';
import '../journey/ui/quiz_view.dart' show ItemResult;
import '../l10n/strings.dart';
import '../library/learning_records.dart';
import '../media/audio.dart';
import '../media/audio_button.dart';
import '../media/audio_manifest.dart';
import '../media/audio_service.dart';
import 'letters_data.dart';
import 'screens.dart' show recordLetterResults;

/// A short guided lesson for one Arabic letter:
/// see the letter and hear its NAME -> hear its SOUND -> an illustrated word
/// with the letter highlighted -> find the letter in the word -> pick the
/// picture that has it -> pick the letter for a word. (Tracing and blending
/// stay as separate activities on the letter screen.)
///
/// What is recorded, separately: lesson opened and audio played are exposure
/// only; the three questions give practice, and "demonstrated" only when all
/// three were right on the first try. The audio is the device voice (demo),
/// not a recorded narration, see docs/MEDIA_AND_PRIVACY.md.
class GuidedLetterLesson extends StatefulWidget {
  final ChildProfile child;
  final ArabicLetter letter;
  const GuidedLetterLesson({super.key, required this.child, required this.letter});

  @override
  State<GuidedLetterLesson> createState() => _GuidedLetterLessonState();
}

class _GuidedLetterLessonState extends State<GuidedLetterLesson> {
  static const _total = 6;
  late final LetterWord _word;
  late final List<LetterWord> _pictures; // 3 options, exactly one has the letter
  late final int _pictureAnswer;
  late final List<ArabicLetter> _letterOptions; // 3 options, exactly one is the letter
  int _step = 0;
  bool _audioPlayed = false;
  bool? _lastWasRight; // feedback after an answer
  final Set<String> _wrongTries = {}; // question ids with a wrong first tap
  final List<ItemResult> _results = [];
  final Set<int> _answered = {};
  bool _saved = false;

  @override
  void initState() {
    super.initState();
    final r = Random(widget.letter.letter.codeUnitAt(0));
    final l = widget.letter;
    final placed = l.placedWords;
    // A word with the letter exactly once; prefer one that starts with it.
    final pool = placed.isEmpty ? l.words : [for (final p in placed) p.$1];
    _word = pool.firstWhere((w) => l.positionIn(w.word) == LetterPosition.beginning, orElse: () => pool.first);

    final others = <LetterWord>[
      for (final o in kArabicLetters)
        if (o.letter != l.letter)
          for (final w in o.words)
            if (!w.word.contains(l.letter) && w.word != _word.word) w,
    ]..shuffle(r);
    final seen = <String>{};
    final distractors = [for (final w in others) if (seen.add(w.word)) w].take(2).toList();
    _pictures = [_word, ...distractors]..shuffle(r);
    _pictureAnswer = _pictures.indexOf(_word);

    final wordLetters = _word.word.split('').toSet();
    final letters = [
      for (final o in kArabicLetters)
        if (o.letter != l.letter && !wordLetters.contains(o.letter)) o,
    ]..shuffle(r);
    _letterOptions = [l, ...letters.take(2)]..shuffle(r);

    LearningRecords.add(widget.child.id, RecordType.letter, l.letter, Evidence.exposure);
    AppAudio.service.state.addListener(_onAudio);
  }

  /// Hearing is exposure only (a separate record from "opened"), never mastery,
  /// and counts only when sound really played.
  void _onAudio() {
    final s = AppAudio.service.state.value;
    if (!_audioPlayed && s.status == AudioStatus.playing) {
      _audioPlayed = true;
      LearningRecords.add(widget.child.id, RecordType.letter, 'audio:${widget.letter.letter}', Evidence.exposure);
    }
  }

  @override
  void dispose() {
    AppAudio.service.state.removeListener(_onAudio);
    AppAudio.stopSaying();
    super.dispose();
  }

  void _answer(int stepIndex, bool right, String id) {
    if (_answered.contains(stepIndex)) return;
    if (right) {
      _answered.add(stepIndex);
      _results.add(ItemResult('letters', !_wrongTries.contains(id), widget.letter.letter, 'letter:${widget.letter.letter}'));
      setState(() => _lastWasRight = true);
    } else {
      _wrongTries.add(id);
      setState(() => _lastWasRight = false);
    }
  }

  bool get _canContinue => switch (_step) {
        3 || 4 || 5 => _answered.contains(_step),
        _ => true,
      };

  Future<void> _next() async {
    if (_step < _total - 1) {
      setState(() {
        _step++;
        _lastWasRight = null;
      });
      return;
    }
    if (!_saved) {
      _saved = true;
      await recordLetterResults(widget.child.id, _results);
      final all = _results.isNotEmpty && _results.every((r) => r.ok);
      await LearningRecords.add(
        widget.child.id,
        RecordType.letter,
        widget.letter.letter,
        all ? Evidence.demonstrated : Evidence.practice,
      );
    }
    if (mounted) setState(() => _step = _total); // the summary page
  }

  Widget _speaker(String label, String assetId, {bool primary = true, bool withSlow = false}) => Column(
        children: [
          Wrap(
            spacing: DS.s8,
            runSpacing: DS.s8,
            alignment: WrapAlignment.center,
            children: [
              AudioButton(assetId: assetId, label: label, filled: primary),
              if (withSlow) AudioButton(assetId: assetId, slow: true, filled: false),
            ],
          ),
          const AudioNotice(),
        ],
      );

  /// The word with every occurrence of the lesson's letter in a strong color.
  Widget _highlighted(String word, {double size = 44}) => Text.rich(
        TextSpan(children: [
          for (final ch in word.split(''))
            TextSpan(
              text: ch,
              style: TextStyle(
                color: ch == widget.letter.letter ? DS.error : RC.ink,
                fontWeight: FontWeight.w900,
                backgroundColor: ch == widget.letter.letter ? DS.highlightSoft : null,
              ),
            ),
        ]),
        style: TextStyle(fontSize: size, height: 1.4),
        textAlign: TextAlign.center,
      );

  Widget _feedback() {
    if (_lastWasRight == null) return const SizedBox(height: 28);
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Icon(_lastWasRight! ? Icons.check_circle_rounded : Icons.refresh_rounded,
            color: _lastWasRight! ? DS.success : DS.warning),
        const SizedBox(width: 6),
        Text(context.tr(_lastWasRight! ? 'let.good' : 'let.tryAgain'), style: DS.heading),
      ],
    );
  }

  Widget _stepBody() {
    final l = widget.letter;
    switch (_step) {
      case 0:
        return Column(children: [
          Text(trArgs('let.see', {'name': l.name}), style: DS.title, textAlign: TextAlign.center),
          Semantics(
            label: l.name,
            child: Text(l.letter, style: const TextStyle(fontSize: 160, fontWeight: FontWeight.w900, color: RC.ink, height: 1.2)),
          ),
          Text(context.tr('let.seeHint'), style: DS.body, textAlign: TextAlign.center),
          const SizedBox(height: DS.s12),
          _speaker(context.tr('let.hearName'), letterAudioId(l, 'name')),
        ]);
      case 1:
        return Column(children: [
          Text(context.tr('let.soundTitle'), style: DS.title),
          const SizedBox(height: DS.s8),
          Text(context.tr('let.nameVsSound'), style: DS.body, textAlign: TextAlign.center),
          const SizedBox(height: DS.s12),
          Wrap(spacing: DS.s16, children: [
            for (final (part, s) in [('sound', l.soundFatha), ('sound_u', l.soundDamma), ('sound_i', l.soundKasra)])
              InkWell(
                borderRadius: BorderRadius.circular(DS.rMedium),
                onTap: () => AppAudio.service.play(letterAudioId(l, part)),
                child: Padding(
                  padding: const EdgeInsets.all(DS.s8),
                  child: Text(s, style: const TextStyle(fontSize: 64, fontWeight: FontWeight.w900, color: RC.ink)),
                ),
              ),
          ]),
          Text(context.tr('let.soundHint'), style: DS.caption, textAlign: TextAlign.center),
          const SizedBox(height: DS.s12),
          _speaker(context.tr('let.hearSound'), letterAudioId(l, 'sound'), withSlow: true),
        ]);
      case 2:
        return Column(children: [
          Text(context.tr('let.wordTitle'), style: DS.title),
          Text(_word.emoji, style: const TextStyle(fontSize: 96)),
          _highlighted(_word.word, size: 56),
          Text(context.tr('let.wordHint'), style: DS.body, textAlign: TextAlign.center),
          const SizedBox(height: DS.s12),
          _speaker(context.tr('let.hearWord'), wordAudioId(_word.word), withSlow: true),
        ]);
      case 3:
        return Column(children: [
          Text(context.tr('let.findTitle'), style: DS.title),
          Text(_word.emoji, style: const TextStyle(fontSize: 72)),
          Text(trArgs('let.findHint', {'letter': l.letter}), style: DS.body, textAlign: TextAlign.center),
          const SizedBox(height: DS.s12),
          Directionality(
            textDirection: TextDirection.rtl,
            child: Wrap(
              spacing: DS.s8,
              children: [
                for (var i = 0; i < _word.word.length; i++)
                  SizedBox(
                    width: 64,
                    height: 72,
                    child: OutlinedButton(
                      style: OutlinedButton.styleFrom(padding: EdgeInsets.zero),
                      onPressed: () => _answer(3, _word.word[i] == l.letter, 'find'),
                      child: Text(_word.word[i], style: const TextStyle(fontSize: 34, fontWeight: FontWeight.w900)),
                    ),
                  ),
              ],
            ),
          ),
          _feedback(),
        ]);
      case 4:
        return Column(children: [
          Text(context.tr('let.pictureTitle'), style: DS.title),
          Text(trArgs('let.pictureHint', {'letter': l.letter}), style: DS.body, textAlign: TextAlign.center),
          const SizedBox(height: DS.s12),
          Wrap(
            spacing: DS.s12,
            runSpacing: DS.s12,
            alignment: WrapAlignment.center,
            children: [
              for (var i = 0; i < _pictures.length; i++)
                SizedBox(
                  width: 104,
                  height: 120,
                  child: OutlinedButton(
                    style: OutlinedButton.styleFrom(padding: EdgeInsets.zero),
                    onPressed: () {
                      AppAudio.service.play(wordAudioId(_pictures[i].word));
                      _answer(4, i == _pictureAnswer, 'pic');
                    },
                    child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
                      Text(_pictures[i].emoji, style: const TextStyle(fontSize: 48)),
                      Text(_pictures[i].word, style: const TextStyle(fontSize: 18)),
                    ]),
                  ),
                ),
            ],
          ),
          _feedback(),
        ]);
      default:
        return Column(children: [
          Text(context.tr('let.letterTitle'), style: DS.title),
          Text(_word.emoji, style: const TextStyle(fontSize: 72)),
          Text(trArgs('let.letterHint', {'word': _word.word}), style: DS.body, textAlign: TextAlign.center),
          const SizedBox(height: DS.s8),
          _speaker(context.tr('let.hearWord'), wordAudioId(_word.word), primary: false),
          const SizedBox(height: DS.s12),
          Wrap(
            spacing: DS.s12,
            children: [
              for (final o in _letterOptions)
                SizedBox(
                  width: 88,
                  height: 96,
                  child: OutlinedButton(
                    style: OutlinedButton.styleFrom(padding: EdgeInsets.zero),
                    onPressed: () => _answer(5, o.letter == widget.letter.letter, 'letter'),
                    child: Text(o.letter, style: const TextStyle(fontSize: 48, fontWeight: FontWeight.w900)),
                  ),
                ),
            ],
          ),
          _feedback(),
        ]);
    }
  }

  Widget _summary() {
    final ok = _results.where((r) => r.ok).length;
    return Column(children: [
      const Icon(Icons.emoji_events_rounded, size: 88, color: DS.highlight),
      Text(trArgs('let.doneTitle', {'name': widget.letter.name}), style: DS.title, textAlign: TextAlign.center),
      const SizedBox(height: DS.s8),
      Text(trArgs('let.doneRight', {'ok': ok, 'total': _results.length}), style: DS.body),
      Text(context.tr('let.doneNote'), style: DS.caption, textAlign: TextAlign.center),
      const SizedBox(height: DS.s24),
      AppButton(label: context.tr('action.back'), icon: Icons.arrow_back_rounded, onPressed: () => Navigator.pop(context, true)),
    ]);
  }

  @override
  Widget build(BuildContext context) {
    final done = _step >= _total;
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: RC.ink,
        title: Text(widget.letter.letter, style: const TextStyle(fontSize: 28, fontWeight: FontWeight.w900)),
      ),
      body: PastelBackground(
        child: SafeArea(
          child: SingleChildScrollView(
            padding: const EdgeInsets.all(DS.s16),
            child: Center(
              child: ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: DS.maxContent),
                child: Column(children: [
                  if (!done)
                    Semantics(
                      label: trArgs('let.step', {'n': _step + 1, 'total': _total}),
                      child: LinearProgressIndicator(value: (_step + 1) / _total, minHeight: 10, color: DS.primary, backgroundColor: DS.primarySoft),
                    ),
                  const SizedBox(height: DS.s16),
                  if (!AudioPrefs.instance.voiceOn && !done)
                    Padding(
                      padding: const EdgeInsets.only(bottom: DS.s8),
                      child: Text(context.tr('let.voiceOff'), style: DS.caption, textAlign: TextAlign.center),
                    ),
                  done ? _summary() : _stepBody(),
                  const SizedBox(height: DS.s24),
                  if (!done)
                    Row(children: [
                      if (_step > 0)
                        TextButton(
                          onPressed: () => setState(() {
                            _step--;
                            _lastWasRight = null;
                          }),
                          child: Text(context.tr('action.back'), style: const TextStyle(fontSize: 18)),
                        ),
                      const Spacer(),
                      AppButton(
                        label: context.tr(_step == _total - 1 ? 'let.finish' : 'let.next'),
                        onPressed: _canContinue ? _next : null,
                      ),
                    ]),
                ]),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
