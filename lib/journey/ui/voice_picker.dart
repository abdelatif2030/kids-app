import 'package:flutter/material.dart';

import '../../l10n/strings.dart';
import '../../media/audio.dart';
import '../../media/voice_choice.dart';

/// Parent setting: which of the phone's voices reads the lessons, per language. "Automatic" picks the best installed one
/// (works offline first, higher-quality names first). Previews use the same speech path as the lessons.
class VoicePickerTile extends StatelessWidget {
  final String lang; // 'ar' or 'en'
  const VoicePickerTile({super.key, required this.lang});

  String get _sample => lang == 'ar' ? 'مرحباً! هيا نتعلم حرفاً جديداً.' : 'Hello! Let us learn a new letter.';

  @override
  Widget build(BuildContext context) {
    final p = AudioPrefs.instance;
    final chosen = lang == 'ar' ? p.voiceNameAr : p.voiceNameEn;
    return ListTile(
      key: ValueKey('voice_picker_$lang'),
      leading: const Icon(Icons.record_voice_over_rounded),
      title: Text(lang == 'ar' ? tr2('صوت القراءة العربي', 'Arabic reading voice') : tr2('صوت القراءة الإنجليزي', 'English reading voice')),
      subtitle: Text(chosen ?? tr2('تلقائي: أفضل صوت مثبّت على الجهاز', 'Automatic: the best voice installed on this phone')),
      onTap: () => showModalBottomSheet<void>(context: context, isScrollControlled: true, builder: (_) => _VoiceSheet(lang: lang, sample: _sample)),
    );
  }
}

class _VoiceSheet extends StatefulWidget {
  final String lang;
  final String sample;
  const _VoiceSheet({required this.lang, required this.sample});

  @override
  State<_VoiceSheet> createState() => _VoiceSheetState();
}

class _VoiceSheetState extends State<_VoiceSheet> {
  late final Future<List<VoiceInfo>> _voices = AppAudio.speech.voices(widget.lang);

  String? get _current => widget.lang == 'ar' ? AudioPrefs.instance.voiceNameAr : AudioPrefs.instance.voiceNameEn;

  Future<void> _preview(String? name) async {
    await AppAudio.speech.preferVoice(widget.lang, name);
    await AppAudio.say(widget.sample, lang: widget.lang);
  }

  Future<void> _choose(String? name) async {
    await AudioPrefs.instance.setVoiceName(widget.lang, name);
    if (mounted) setState(() {});
  }

  @override
  void dispose() {
    // A preview must not change the saved choice.
    AppAudio.speech.preferVoice(widget.lang, _current);
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: FutureBuilder<List<VoiceInfo>>(
        future: _voices,
        builder: (context, snap) {
          if (snap.connectionState != ConnectionState.done) {
            return const Padding(padding: EdgeInsets.all(32), child: Center(child: CircularProgressIndicator()));
          }
          final voices = snap.data ?? const <VoiceInfo>[];
          return ListView(
            shrinkWrap: true,
            padding: const EdgeInsets.all(16),
            children: [
              Text(tr2('اختر الصوت', 'Choose the voice'), style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w800)),
              const SizedBox(height: 4),
              Text(tr2('اضغط ▶ للاستماع. الأصوات من مشغّل الصوت في هاتفك، وتعمل دون إنترنت إلا إذا كُتب غير ذلك.', 'Press ▶ to listen. These voices come from your phone\'s speech engine and work offline unless it says otherwise.'),
                  style: const TextStyle(fontSize: 13)),
              const SizedBox(height: 8),
              if (voices.isEmpty)
                Text(tr2('لا يوجد صوت لهذه اللغة على هذا الجهاز. ثبّت صوتاً من إعدادات النظام: تحويل النص إلى كلام.', 'This phone has no voice for this language. Install one in system settings: Text-to-speech.'),
                    key: const ValueKey('no_voices'))
              else ...[
                RadioListTile<String?>(
                  key: const ValueKey('voice_auto'),
                  value: null,
                  groupValue: _current,
                  title: Text(tr2('تلقائي (موصى به)', 'Automatic (recommended)')),
                  subtitle: Text(voices.first.name),
                  secondary: IconButton(icon: const Icon(Icons.play_arrow_rounded), tooltip: tr2('استمع', 'Listen'), onPressed: () => _preview(null)),
                  onChanged: (_) => _choose(null),
                ),
                for (final v in voices)
                  RadioListTile<String?>(
                    key: ValueKey('voice_${v.name}'),
                    value: v.name,
                    groupValue: _current,
                    title: Text(v.name),
                    subtitle: Text('${v.locale}${v.needsNetwork ? ' · ${tr2('يحتاج إنترنت', 'needs internet')}' : ''}${v.quality.isEmpty ? '' : ' · ${v.quality}'}'),
                    secondary: IconButton(icon: const Icon(Icons.play_arrow_rounded), tooltip: tr2('استمع', 'Listen'), onPressed: () => _preview(v.name)),
                    onChanged: (_) => _choose(v.name),
                  ),
              ],
            ],
          );
        },
      ),
    );
  }
}
