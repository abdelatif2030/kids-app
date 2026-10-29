// ignore_for_file: experimental_member_use  (just_audio marks StreamAudioSource experimental; it is the way to play from memory on phones)
import 'dart:async';
import 'dart:io' show Directory;

import 'package:flutter/foundation.dart';
import 'package:image_picker/image_picker.dart' show XFile; // reads bytes on the web and on phones alike
import 'package:just_audio/just_audio.dart';
import 'package:record/record.dart';

import 'family_models.dart';

/// A finished recording.
class RecordedVoice {
  final Uint8List bytes;
  final String mime;
  final int secs;
  const RecordedVoice(this.bytes, this.mime, this.secs);
}

/// Records a short voice message. The sound stays in memory until it is sent; nothing is kept on the device.
abstract class VoiceRecorder {
  /// Asks for the microphone and starts. False if the person refused.
  Future<bool> start();

  /// Stops and returns the recording (null if nothing usable).
  Future<RecordedVoice?> stop();

  /// Stops and throws the recording away.
  Future<void> cancel();
  Future<void> dispose();
}

/// Plays a voice message.
abstract class VoicePlayer {
  Future<void> play(VoiceClip clip);
  Future<void> stop();
  Stream<bool> get playing;
  Future<void> dispose();
}

VoiceRecorder Function() newVoiceRecorder = () => DeviceVoiceRecorder();
VoicePlayer Function() newVoicePlayer = () => DeviceVoicePlayer();

/// Works out the sound type from the first bytes (the browser and the phone each pick their own format).
String sniffAudioMime(Uint8List b) {
  bool starts(List<int> p, [int at = 0]) => b.length >= at + p.length && [for (var i = 0; i < p.length; i++) b[at + i] == p[i]].every((x) => x);
  if (starts([0x1A, 0x45, 0xDF, 0xA3])) return 'audio/webm';
  if (starts([0x4F, 0x67, 0x67, 0x53])) return 'audio/ogg'; // OggS
  if (starts([0x66, 0x74, 0x79, 0x70], 4)) return 'audio/mp4'; // ....ftyp
  if (starts([0x52, 0x49, 0x46, 0x46])) return 'audio/wav'; // RIFF
  if (starts([0xFF, 0xF1]) || starts([0xFF, 0xF9])) return 'audio/aac';
  if (starts([0x49, 0x44, 0x33]) || starts([0xFF, 0xFB])) return 'audio/mpeg';
  return 'audio/mp4';
}

class DeviceVoiceRecorder implements VoiceRecorder {
  final AudioRecorder _rec = AudioRecorder();
  final Stopwatch _watch = Stopwatch();

  @override
  Future<bool> start() async {
    if (!await _rec.hasPermission()) return false;
    // Small on purpose: mono, 16 kHz, low bit rate, so 30 s fits in a small database document.
    final encoder = kIsWeb ? AudioEncoder.opus : AudioEncoder.aacLc;
    final config = RecordConfig(encoder: encoder, numChannels: 1, sampleRate: 16000, bitRate: 24000);
    final path = kIsWeb ? '' : '${Directory.systemTemp.path}/rehlaty_voice_${DateTime.now().millisecondsSinceEpoch}.m4a';
    await _rec.start(config, path: path);
    _watch
      ..reset()
      ..start();
    return true;
  }

  @override
  Future<RecordedVoice?> stop() async {
    _watch.stop();
    final path = await _rec.stop();
    if (path == null) return null;
    final bytes = await XFile(path).readAsBytes();
    final secs = (_watch.elapsedMilliseconds / 1000).ceil().clamp(1, kMaxVoiceSeconds);
    if (bytes.isEmpty) return null;
    return RecordedVoice(bytes, sniffAudioMime(bytes), secs);
  }

  @override
  Future<void> cancel() async {
    _watch.stop();
    await _rec.cancel();
  }

  @override
  Future<void> dispose() => _rec.dispose();
}

class _BytesSource extends StreamAudioSource {
  final Uint8List bytes;
  final String mime;
  _BytesSource(this.bytes, this.mime);

  @override
  Future<StreamAudioResponse> request([int? start, int? end]) async {
    final s = start ?? 0, e = end ?? bytes.length;
    return StreamAudioResponse(
      sourceLength: bytes.length,
      contentLength: e - s,
      offset: s,
      stream: Stream.value(bytes.sublist(s, e)),
      contentType: mime,
    );
  }
}

class DeviceVoicePlayer implements VoicePlayer {
  final AudioPlayer _p = AudioPlayer();

  @override
  Future<void> play(VoiceClip clip) async {
    // The web plays a data address; phones play from memory.
    final source = kIsWeb ? AudioSource.uri(Uri.dataFromBytes(clip.bytes, mimeType: clip.mime)) : _BytesSource(clip.bytes, clip.mime);
    await _p.setAudioSource(source);
    unawaited(_p.play());
  }

  @override
  Future<void> stop() => _p.stop();

  @override
  Stream<bool> get playing => _p.playerStateStream.map((s) => s.playing && s.processingState != ProcessingState.completed);

  @override
  Future<void> dispose() => _p.dispose();
}
