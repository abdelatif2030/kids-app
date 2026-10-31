import '../companion/companion_store.dart';
import 'package:flutter/material.dart';

import '../design/components.dart';
import '../design/layout.dart';
import '../design/tokens.dart';
import '../l10n/strings.dart';
import 'audio.dart';
import 'voice_choice.dart';
import 'rehlaty_audio_engine.dart';

String characterName(CharacterVoice c) => switch (c) {
      CharacterVoice.adam => tr2('آدم', 'Adam'),
      CharacterVoice.nour => tr2('نور', 'Nour'),
      CharacterVoice.companion => tr2('الرفيق', 'The companion'),
    };

/// Parent settings for the characters' voices: on or off, speaking the instructions by themselves, and which
/// installed voice each character uses. It also says plainly what is and is not real yet.
class EngineSettingsScreen extends StatefulWidget {
  const EngineSettingsScreen({super.key});

  @override
  State<EngineSettingsScreen> createState() => _EngineSettingsState();
}

class _EngineSettingsState extends State<EngineSettingsScreen> {
  final _prefs = EnginePrefs.instance;
  final Map<String, List<VoiceInfo>> _voices = {};
  bool _loading = true;
  bool _companionOn = true;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    await _prefs.load();
    _companionOn = await CompanionStore.enabled();
    for (final lang in ['ar', 'en']) {
      try {
        _voices[lang] = await AppAudio.speech.voices(lang);
      } catch (_) {
        _voices[lang] = const [];
      }
    }
    if (mounted) setState(() => _loading = false);
  }

  Future<void> _hear(CharacterVoice c) async {
    final lang = AudioLangOf.code;
    final line = kDialogue.firstWhere((l) => l.voice == c);
    final problem = await RehlatyAudioEngine.instance.sayText(c, line.text(lang));
    if (!mounted || problem == EngineProblem.none) return;
    showToast(
      context,
      switch (problem) {
        EngineProblem.noVoice => tr2('لا يوجد صوت لهذه اللغة على هذا الجهاز.', 'There is no voice for this language on this device.'),
        EngineProblem.charactersOff => tr2('أصوات الشخصيات مغلقة.', 'Character voices are off.'),
        _ => tr2('لم يُسمع الصوت.', 'The voice could not be played.'),
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(tr2('أصوات الشخصيات', 'Character voices'))),
      body: _loading
          ? const Center(child: CircularProgressIndicator())
          : ListenableBuilder(
              listenable: _prefs,
              builder: (context, _) => CenteredList(padding: const EdgeInsets.all(16), children: [
                Container(
                  key: const ValueKey('engine_honesty'),
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(color: DS.highlightSoft, borderRadius: BorderRadius.circular(16)),
                  child: Text(
                    tr2(
                      'لا توجد تسجيلات بشرية لآدم ونور بعد. الصوت الحالي هو صوت الجهاز الآلي، ويمكنك اختيار صوت مختلف لكل شخصية إن كان مثبتاً. النص يظهر دائماً على الشاشة. لا توجد مؤثرات صوتية مرفقة بعد.',
                      'There are no human recordings of Adam and Nour yet. The voice is the phone\'s own text-to-speech, and you can pick a different installed voice for each character. The text is always on screen. No sound effects are bundled yet.',
                    ),
                    style: DS.caption,
                  ),
                ),
                SwitchListTile(
                  key: const ValueKey('engine_master'),
                  title: Text(tr2('الصوت في التطبيق', 'Sound in the app')),
                  subtitle: Text(tr2('مفتاح عام: عند إغلاقه لا تتحدث الشخصيات ولا تُشغَّل مؤثرات', 'Master switch: when off, characters stay silent and no effects play')),
                  value: _prefs.masterOn,
                  onChanged: _prefs.setMasterOn,
                ),
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Text(tr2('لغة الشخصيات', 'Characters\' language'), style: DS.caption),
                    const SizedBox(height: 4),
                    SegmentedButton<String>(
                      key: const ValueKey('engine_lang'),
                      segments: [
                        ButtonSegment(value: 'auto', label: Text(tr2('لغة التطبيق', 'App language'))),
                        const ButtonSegment(value: 'ar', label: Text('العربية')),
                        const ButtonSegment(value: 'en', label: Text('English')),
                      ],
                      selected: {_prefs.languagePref},
                      onSelectionChanged: (s) => _prefs.setLanguagePref(s.first),
                    ),
                  ]),
                ),
                _slider('vol_narration', tr2('صوت الشخصيات', 'Voices volume'), _prefs.narrationVolume, _prefs.setNarrationVolume),
                _slider('vol_music', tr2('صوت الموسيقى', 'Music volume'), _prefs.musicVolume, _prefs.setMusicVolume),
                _slider('vol_effects', tr2('صوت المؤثرات', 'Sound effects volume'), _prefs.effectsVolume, _prefs.setEffectsVolume),
                SwitchListTile(
                  key: const ValueKey('engine_characters'),
                  title: Text(tr2('أصوات الشخصيات', 'Character voices')),
                  subtitle: Text(tr2('تتحدث الشخصيات بعبارات جاهزة ومعتمدة فقط', 'Characters say only ready, approved lines')),
                  value: _prefs.charactersOn,
                  onChanged: _prefs.setCharactersOn,
                ),
                SwitchListTile(
                  key: const ValueKey('engine_auto'),
                  title: Text(tr2('قراءة التعليمات تلقائياً', 'Read instructions automatically')),
                  subtitle: Text(tr2('مغلقة افتراضياً: يضغط الطفل زر السماعة ليسمع', 'Off by default: the child taps the speaker button')),
                  value: _prefs.autoNarration,
                  onChanged: _prefs.charactersOn ? _prefs.setAutoNarration : null,
                ),
                SwitchListTile(
                  key: const ValueKey('companion_switch'),
                  title: Text(tr2('الرفيق (آدم ونور)', 'Companion (Adam and Nour)')),
                  subtitle: Text(tr2('يعلّق على ما أنهاه الطفل فعلاً، بعبارات معتمدة فقط', 'Reacts to what the child really finished, with approved lines only')),
                  value: _companionOn,
                  onChanged: (v) async {
                    await CompanionStore.setEnabled(v);
                    if (mounted) setState(() => _companionOn = v);
                  },
                ),
                for (final c in CharacterVoice.values) _voiceCard(c),
              ]),
            ),
    );
  }

  Widget _slider(String key, String label, double value, Future<void> Function(double) onSave) => Padding(
        padding: const EdgeInsets.symmetric(horizontal: 16),
        child: Row(children: [
          SizedBox(width: 120, child: Text(label)),
          Expanded(child: Slider(key: ValueKey(key), value: value, divisions: 10, label: '${(value * 100).round()}%', onChanged: _prefs.masterOn ? onSave : null)),
        ]),
      );

  Widget _voiceCard(CharacterVoice c) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(12),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Row(children: [
            Expanded(child: Text(characterName(c), style: DS.heading)),
            if (c != CharacterVoice.companion)
              Switch(key: ValueKey('char_${c.name}'), value: c == CharacterVoice.adam ? _prefs.adamOn : _prefs.nourOn, onChanged: (v) => _prefs.setCharacter(c, v)),
            IconButton(key: ValueKey('hear_${c.name}'), tooltip: tr2('اسمع', 'Listen'), icon: const Icon(Icons.volume_up_rounded), onPressed: () => _hear(c)),
          ]),
          for (final lang in ['ar', 'en'])
            DropdownButton<String?>(
              key: ValueKey('voice_${c.name}_$lang'),
              isExpanded: true,
              value: (_voices[lang] ?? const <VoiceInfo>[]).any((v) => v.name == _prefs.voiceFor(c, lang)) ? _prefs.voiceFor(c, lang) : null,
              hint: Text(lang == 'ar' ? tr2('العربية: تلقائي', 'Arabic: automatic') : tr2('الإنجليزية: تلقائي', 'English: automatic')),
              items: [
                DropdownMenuItem<String?>(value: null, child: Text(lang == 'ar' ? tr2('العربية: تلقائي', 'Arabic: automatic') : tr2('الإنجليزية: تلقائي', 'English: automatic'))),
                for (final v in _voices[lang] ?? const <VoiceInfo>[]) DropdownMenuItem<String?>(value: v.name, child: Text('${v.name} (${v.locale})', overflow: TextOverflow.ellipsis)),
              ],
              onChanged: (v) => _prefs.setVoice(c, lang, v),
            ),
        ]),
      ),
    );
  }
}

/// The interface language code, without importing the locale class everywhere.
class AudioLangOf {
  static String get code => RehlatyAudioEngine.instance.lang;
}
