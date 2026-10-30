import 'package:flutter/foundation.dart';
import 'package:speech_to_text/speech_recognition_error.dart';
import 'package:speech_to_text/speech_recognition_result.dart';
import 'package:speech_to_text/speech_to_text.dart';

import '../l10n/strings.dart';

/// Speaking the parent's note instead of typing it. Rules (CLAUDE.md): recognition happens ON THE DEVICE only, no audio
/// is stored or uploaded, and the text is only used to fill the note box, which the parent can read and edit.
///
/// If the phone cannot recognise this language without a connection, nothing is recognised and the parent is told to type
/// (or use the keyboard's own dictation): the app never falls back to an online recognizer.
abstract class Dictation {
  /// True when this platform and phone can listen on the device. Cheap to call; may ask the system once.
  Future<bool> available();

  /// Starts listening. [onText] receives the words heard so far (`done` once the phrase is final). [onProblem] gets a
  /// short, parent-readable reason when listening could not start or failed.
  Future<void> start({required String lang, required void Function(String text, bool done) onText, required void Function(String message) onProblem, required void Function() onStopped});

  Future<void> stop();
}

/// Where the screen gets its dictation from. Tests replace it with a fake.
Dictation Function() newDictation = _platformDictation;

Dictation _platformDictation() {
  // The browser's recognizer sends audio to a server, so it is not used. Phones and tablets only.
  final phone = !kIsWeb && (defaultTargetPlatform == TargetPlatform.android || defaultTargetPlatform == TargetPlatform.iOS);
  return phone ? DeviceDictation() : UnavailableDictation(tr2('الإملاء داخل التطبيق متاح على الهاتف فقط. اكتب، أو استخدم إملاء لوحة المفاتيح.', 'In-app dictation is only on phones. Type, or use your keyboard\'s dictation.'));
}

class UnavailableDictation implements Dictation {
  final String reason;
  UnavailableDictation(this.reason);

  @override
  Future<bool> available() async => false;

  @override
  Future<void> start({required String lang, required void Function(String text, bool done) onText, required void Function(String message) onProblem, required void Function() onStopped}) async {
    onProblem(reason);
    onStopped();
  }

  @override
  Future<void> stop() async {}
}

/// The phone's own recognizer through the `speech_to_text` plugin, asked to work on the device (`onDevice: true`).
class DeviceDictation implements Dictation {
  final SpeechToText _stt = SpeechToText();
  bool _ready = false;
  void Function(String message)? _problem;
  void Function()? _stopped;

  Future<bool> _init() async {
    if (_ready) return true;
    try {
      _ready = await _stt.initialize(
        onStatus: (s) {
          if (s == 'done' || s == 'notListening') _stopped?.call();
        },
        onError: (SpeechRecognitionError e) {
          final unsupported = e.errorMsg.contains('language');
          _problem?.call(unsupported
              ? tr2('هذا الهاتف لا يدعم التعرف على هذه اللغة دون إنترنت. اكتب أو استخدم إملاء لوحة المفاتيح.', 'This phone cannot recognise this language offline. Type, or use your keyboard\'s dictation.')
              : tr2('تعذّر الاستماع. حاول مرة أخرى أو اكتب.', 'Could not listen. Try again or type.'));
          _stopped?.call();
        },
      );
    } catch (_) {
      _ready = false;
    }
    return _ready;
  }

  @override
  Future<bool> available() => _init();

  Future<String?> _localeFor(String lang) async {
    try {
      final all = await _stt.locales();
      final want = lang == 'ar' ? ['ar_SA', 'ar'] : ['en_US', 'en'];
      for (final w in want) {
        for (final l in all) {
          if (l.localeId.replaceAll('-', '_').toLowerCase().startsWith(w.toLowerCase())) return l.localeId;
        }
      }
    } catch (_) {}
    return null;
  }

  @override
  Future<void> start({required String lang, required void Function(String text, bool done) onText, required void Function(String message) onProblem, required void Function() onStopped}) async {
    _problem = onProblem;
    _stopped = onStopped;
    if (!await _init()) {
      onProblem(tr2('الميكروفون أو التعرف على الصوت غير متاح. اسمح به من إعدادات الهاتف أو اكتب.', 'The microphone or speech recognition is not available. Allow it in the phone settings, or type.'));
      onStopped();
      return;
    }
    final locale = await _localeFor(lang);
    if (locale == null) {
      onProblem(tr2('لا توجد لغة مناسبة للتعرف على الصوت في هذا الهاتف. اكتب بدلاً من ذلك.', 'This phone has no recognition language for this. Type instead.'));
      onStopped();
      return;
    }
    await _stt.listen(
      onResult: (SpeechRecognitionResult r) => onText(r.recognizedWords, r.finalResult),
      listenOptions: SpeechListenOptions(
        onDevice: true,
        partialResults: true,
        cancelOnError: true,
        listenMode: ListenMode.dictation,
        localeId: locale,
        listenFor: const Duration(seconds: 60),
        pauseFor: const Duration(seconds: 4),
      ),
    );
  }

  @override
  Future<void> stop() async {
    try {
      await _stt.stop();
    } catch (_) {}
  }
}
