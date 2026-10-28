import 'package:flutter/material.dart';

import '../design/tokens.dart';
import '../l10n/strings.dart';
import 'audio.dart';
import 'audio_manifest.dart';
import 'audio_service.dart';

/// The message for a problem, in the interface language.
String audioProblemText(AudioProblem p) => switch (p) {
      AudioProblem.voiceOff => trKey('audio.voiceOff'),
      AudioProblem.missing => trKey('audio.missing'),
      AudioProblem.noVoice => trKey('audio.noVoice'),
      AudioProblem.recordingFailed => trKey('audio.recordingFailed'),
      AudioProblem.failed => trKey('audio.failed'),
      AudioProblem.none => '',
    };

/// A listen button whose look follows the REAL playback state: spinner while
/// loading, a "speaking" icon only while sound is playing, a warning (with the
/// reason on screen) when there is no sound. Tapping while playing stops it.
class AudioButton extends StatelessWidget {
  final String assetId;
  final String? text; // when there is no manifest asset: a text read by the device voice
  final String lang;
  final String? label;
  final bool slow;
  final bool filled;
  const AudioButton({
    super.key,
    this.assetId = '',
    this.text,
    this.lang = 'ar',
    this.label,
    this.slow = false,
    this.filled = true,
  });

  bool _mine(AudioState s) => assetId.isNotEmpty ? s.assetId == assetId : s.text == text;

  void _tap(AudioState s) {
    final service = AppAudio.service;
    if (_mine(s) && s.isBusy && s.slow == slow) {
      service.stop();
    } else if (assetId.isNotEmpty) {
      service.play(assetId, slow: slow);
    } else {
      service.playText(text ?? '', lang: lang, slow: slow);
    }
  }

  @override
  Widget build(BuildContext context) {
    return ValueListenableBuilder<AudioState>(
      valueListenable: AppAudio.service.state,
      builder: (context, s, _) {
        final mine = _mine(s) && s.slow == slow;
        final playing = mine && s.status == AudioStatus.playing;
        final loading = mine && s.status == AudioStatus.loading;
        final problem = mine && s.status == AudioStatus.error;
        final icon = loading
            ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2.5))
            : Icon(problem
                ? Icons.volume_off_rounded
                : playing
                    ? Icons.graphic_eq_rounded
                    : (slow ? Icons.slow_motion_video_rounded : Icons.volume_up_rounded));
        final shown = label ?? trKey(slow ? 'audio.slow' : 'audio.listen');
        final style = ButtonStyle(minimumSize: WidgetStatePropertyAll(Size(64, DS.tapTarget)));
        return Semantics(
          liveRegion: true,
          hint: playing ? trKey('audio.playing') : (problem ? audioProblemText(s.problem) : null),
          child: filled
              ? FilledButton.icon(style: style, onPressed: () => _tap(s), icon: icon, label: Text(shown, style: const TextStyle(fontSize: 18)))
              : OutlinedButton.icon(style: style, onPressed: () => _tap(s), icon: icon, label: Text(shown, style: const TextStyle(fontSize: 18))),
        );
      },
    );
  }
}

/// One line under the buttons that tells the truth about the sound: demo voice,
/// approved recording, or the reason there is none.
class AudioNotice extends StatelessWidget {
  const AudioNotice({super.key});

  @override
  Widget build(BuildContext context) {
    return ValueListenableBuilder<AudioState>(
      valueListenable: AppAudio.service.state,
      builder: (context, s, _) {
        String? msg;
        IconData icon = Icons.info_outline_rounded;
        if (s.status == AudioStatus.error) {
          msg = audioProblemText(s.problem);
          icon = Icons.volume_off_rounded;
        } else if (s.heard == AudioSource.deviceVoice) {
          msg = trKey('audio.demoVoice');
        } else if (s.heard == AudioSource.recorded || s.heard == AudioSource.generated) {
          msg = trKey(s.heard == AudioSource.generated ? 'audio.generated' : 'audio.recorded');
          icon = Icons.verified_rounded;
        }
        if (msg == null) return const SizedBox(height: 4);
        return Padding(
          padding: const EdgeInsets.only(top: DS.s8),
          child: Semantics(
            liveRegion: true,
            child: Row(mainAxisSize: MainAxisSize.min, children: [
              Icon(icon, size: 18, color: DS.inkSoft),
              const SizedBox(width: DS.s4),
              Flexible(child: Text(msg, style: DS.caption)),
            ]),
          ),
        );
      },
    );
  }
}
