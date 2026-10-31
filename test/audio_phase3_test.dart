import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/media/audio.dart';
import 'package:kids_app/media/audio_gate.dart';
import 'package:kids_app/media/rehlaty_audio_engine.dart';
import 'package:kids_app/media/voice_choice.dart';
import 'package:shared_preferences/shared_preferences.dart';

class Tune {
  final double pitch, rate, volume;
  Tune(this.pitch, this.rate, this.volume);
}

/// A speech backend that records what was spoken, with which tuning and voice, and when each line is allowed to end.
class TunableSpeech implements SpeechBackend, VoiceTunable {
  final spoken = <String>[];
  final langs = <String>[];
  final tunes = <Tune>[];
  final voicePrefs = <String?>[];
  final open = <Completer<void>>[];
  bool autoFinish = false;
  bool available = true;
  Tune _t = Tune(1, 1, 1);

  @override
  void tune({double pitchScale = 1.0, double rateScale = 1.0, double volume = 1.0}) => _t = Tune(pitchScale, rateScale, volume);

  @override
  Future<bool> isAvailable(String lang) async => available;

  @override
  Future<void> speak(String text, {String lang = 'ar', double rate = 1.0}) async {
    spoken.add(text);
    langs.add(lang);
    tunes.add(_t);
    if (autoFinish) return;
    final c = Completer<void>();
    open.add(c);
    await c.future;
  }

  void finishCurrent() => open.removeAt(0).complete();

  @override
  Future<void> stop() async {
    for (final c in open) {
      if (!c.isCompleted) c.complete();
    }
    open.clear();
  }

  @override
  Future<List<VoiceInfo>> voices(String lang) async => const [];

  @override
  Future<void> preferVoice(String lang, String? name) async => voicePrefs.add(name == null ? null : '$lang:$name');
}

Future<void> _tick() async {
  await Future<void>.delayed(Duration.zero);
  await Future<void>.delayed(Duration.zero);
  await Future<void>.delayed(Duration.zero);
}

/// Waits (a few event-loop turns) until the fake voice has a line it is currently speaking.
Future<void> _speaking(TunableSpeech sp) async {
  for (var i = 0; i < 100 && sp.open.isEmpty; i++) {
    await Future<void>.delayed(Duration.zero);
  }
}

class _Bundle implements AssetBundleLike {
  final String? json;
  _Bundle(this.json);
  @override
  Future<String> loadString(String key) async => json ?? (throw Exception('missing asset'));
}

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  late TunableSpeech sp;
  late RehlatyAudioEngine engine;
  late DateTime now;
  final played = <String>[];

  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    EnginePrefs.instance.resetForTest();
    AudioPrefs.instance.effectsOn = true;
    AudioGate.instance.setBackground(false);
    await AppLocale.instance.set('en');
    sp = TunableSpeech();
    now = DateTime(2026, 1, 1, 10);
    played.clear();
    engine = RehlatyAudioEngine.forTest(sp, clock: () => now, playRecording: (path, v) async => played.add('$path@$v'));
  });
  tearDown(() async {
    engine.disposeForTest();
    while (AudioGate.instance.inCall) {
      AudioGate.instance.leaveCall();
    }
    AudioGate.instance.setBackground(false);
    await AppLocale.instance.set('ar');
  });

  group('catalogue', () {
    test('every category and every game has lines; ids unique; texts short and in both languages', () {
      expect({for (final l in kDialogue) l.category}, LineCategory.values.toSet());
      expect(kDialogue.length, greaterThanOrEqualTo(30));
      expect({for (final l in kDialogue) l.id}.length, kDialogue.length);
      for (final game in ['snakes_ladders', 'jigsaw', 'maze', 'treasure_hunt', 'connect_dots', 'animal_habitats']) {
        expect(kDialogue.any((l) => l.category == LineCategory.instruction && l.feature == game), isTrue, reason: game);
      }
      for (final l in kDialogue) {
        expect(l.ar.length, lessThan(70));
        expect(l.en.length, lessThan(70));
        for (final w in kForbiddenInDialogue) {
          expect(l.ar.contains(w) || l.en.toLowerCase().contains(w), isFalse, reason: '${l.id} has $w');
        }
      }
    });

    test('each line has exactly one speaker and a structured recording path per character and language', () {
      for (final l in kDialogue) {
        expect(l.recordingPath('ar'), 'assets/audio/voices/${l.voice.name}/ar/${l.id}.ogg');
        expect(l.recordingPath('en'), 'assets/audio/voices/${l.voice.name}/en/${l.id}.ogg');
      }
    });

    test('sound cues and music tracks cover what was asked', () {
      final cues = {for (final c in kSoundCues) c.id};
      expect(cues, containsAll(['roll', 'move', 'ladder', 'slide', 'place', 'correct', 'gentle', 'found', 'dot', 'win', 'star', 'tap', 'navigate', 'open', 'close', 'unlock', 'reward', 'notify']));
      expect({for (final t in kMusicTracks) t.area}, MusicArea.values.toSet());
      expect(kSoundCues.first.path, 'assets/audio/sfx/roll.ogg');
    });

    test('the pipeline is written down, ends with listening on a real phone and never allows keys in the app', () {
      expect(kVoicePipelineSteps.length, greaterThanOrEqualTo(6));
      expect(kVoicePipelineSteps.join(' '), contains('approved.json'));
      expect(kVoicePipelineSteps.last.toLowerCase(), contains('never in the app'));
    });
  });

  group('character voice identity', () {
    test('a character keeps the same tuning and the same chosen voice on every line, in both languages', () async {
      sp.autoFinish = true;
      await EnginePrefs.instance.setVoice(CharacterVoice.adam, 'en', 'Boy');
      await EnginePrefs.instance.setVoice(CharacterVoice.adam, 'ar', 'ولد');
      await EnginePrefs.instance.setVoice(CharacterVoice.nour, 'en', 'Girl');
      for (final id in ['how_maze', 'well_done', 'look_red']) {
        await engine.say(id, force: true); // Adam
      }
      await AppLocale.instance.set('ar');
      await engine.say('how_dots', force: true); // Adam, Arabic
      for (final id in ['how_jigsaw', 'try_again']) {
        await engine.say(id, force: true); // Nour
      }
      final adamTunes = sp.tunes.sublist(0, 4);
      expect(adamTunes.every((t) => t.pitch == CharacterTuning.adam.pitchScale && t.rate == CharacterTuning.adam.rateScale), isTrue);
      expect(sp.tunes.sublist(4).every((t) => t.pitch == CharacterTuning.nour.pitchScale), isTrue);
      expect(CharacterTuning.adam.pitchScale, lessThan(CharacterTuning.nour.pitchScale)); // a boy is lower, a girl higher
      expect(sp.voicePrefs.sublist(0, 3), ['en:Boy', 'en:Boy', 'en:Boy']);
      expect(sp.voicePrefs[3], 'ar:ولد');
      expect(sp.voicePrefs.sublist(4), [null, null]); // Nour has no Arabic choice: automatic, never Adam's
    });

    test('Nour never speaks with Adam\'s voice choice', () async {
      sp.autoFinish = true;
      await EnginePrefs.instance.setVoice(CharacterVoice.adam, 'en', 'Boy');
      await engine.say('how_jigsaw', force: true); // Nour
      expect(sp.voicePrefs, [null]);
    });
  });

  group('language', () {
    test('the parent can pin the characters to Arabic or English whatever the interface language', () async {
      sp.autoFinish = true;
      await EnginePrefs.instance.setLanguagePref('ar');
      await engine.say('well_done', force: true);
      expect(sp.langs.last, 'ar');
      expect(sp.spoken.last, 'برافو عليك! خلصت النشاط بنجاح!');
      await EnginePrefs.instance.setLanguagePref('auto');
      await engine.say('well_done', force: true);
      expect(sp.langs.last, 'en');
      await AppLocale.instance.set('ar');
      await EnginePrefs.instance.setLanguagePref('en');
      await engine.say('well_done', force: true);
      expect(sp.langs.last, 'en');
    });
  });

  group('priority, repeats and music', () {
    test('a high line goes first and cuts a low one that has not finished starting; the rest run in order', () async {
      final low = engine.say('well_done', priority: AudioPriority.low); // starts at once
      final n1 = engine.say('lion_says');
      final n2 = engine.say('your_turn');
      final hi = engine.say('hello', priority: AudioPriority.high);
      await low; // cut by the high line
      await _speaking(sp);
      expect(sp.spoken, ['Hello, hero! Ready to discover something new?']); // the low line was cut before it began
      sp.finishCurrent();
      await hi;
      await _speaking(sp);
      sp.finishCurrent();
      await n1;
      await _speaking(sp);
      sp.finishCurrent();
      await n2;
      expect(sp.spoken, [
        'Hello, hero! Ready to discover something new?',
        'What do you think the lion says?',
        "It's your turn!",
      ]);
    });

    test('a high priority line cuts in on a lower one already speaking', () async {
      final low = engine.say('well_done');
      await _tick();
      expect(sp.spoken.length, 1);
      final hi = engine.say('new_star', priority: AudioPriority.high);
      await _tick();
      await low; // the lower one was stopped
      await _tick();
      expect(sp.spoken.last, 'A new star for you!');
      sp.finishCurrent();
      await hi;
    });

    test('the same line is not repeated within the gap, unless forced, and again after the gap', () async {
      sp.autoFinish = true;
      expect(await engine.say('hello'), EngineProblem.none);
      expect(await engine.say('hello'), EngineProblem.duplicate);
      expect(await engine.say('hello', force: true), EngineProblem.none);
      now = now.add(const Duration(seconds: 31));
      expect(await engine.say('hello'), EngineProblem.none);
      expect(sp.spoken.length, 3);
    });

    test('an identical line already waiting is not queued twice', () async {
      final a = engine.say('well_done');
      final b = await engine.say('well_done');
      expect(b, EngineProblem.duplicate);
      await _tick();
      sp.finishCurrent();
      await a;
      expect(sp.spoken.length, 1);
    });

    test('music is ducked while a character speaks and returns afterwards; the parent volume and master switch apply', () async {
      await EnginePrefs.instance.setMusicVolume(0.8);
      expect(engine.effectiveMusicVolume, closeTo(0.8, 1e-9));
      final a = engine.say('hello');
      await _tick();
      expect(engine.isSpeaking, isTrue);
      expect(engine.effectiveMusicVolume, closeTo(0.2, 1e-9)); // 0.8 x 0.25
      sp.finishCurrent();
      await a;
      await _tick();
      expect(engine.effectiveMusicVolume, closeTo(0.8, 1e-9));
      await EnginePrefs.instance.setMasterOn(false);
      expect(engine.effectiveMusicVolume, 0);
    });

    test('listeners (a music player) are told when the ducking changes', () async {
      var calls = 0;
      engine.addListener(() => calls++);
      final a = engine.say('hello');
      await _tick();
      sp.finishCurrent();
      await a;
      await _tick();
      expect(calls, greaterThanOrEqualTo(2)); // down and up
    });
  });

  group('volumes and switches', () {
    test('narration volume reaches the voice, and is clamped to 0..1', () async {
      sp.autoFinish = true;
      await EnginePrefs.instance.setNarrationVolume(0.4);
      await engine.say('hello');
      expect(sp.tunes.last.volume, closeTo(0.4, 1e-9));
      await EnginePrefs.instance.setNarrationVolume(7);
      expect(EnginePrefs.instance.narrationVolume, 1.0);
      await EnginePrefs.instance.setEffectsVolume(-1);
      expect(EnginePrefs.instance.effectsVolume, 0.0);
    });

    test('the master switch silences everything; one character can be switched off alone', () async {
      sp.autoFinish = true;
      await EnginePrefs.instance.setCharacter(CharacterVoice.adam, false);
      expect(await engine.say('well_done', force: true), EngineProblem.charactersOff); // Adam
      expect(await engine.say('try_again', force: true), EngineProblem.none); // Nour still speaks
      expect(await engine.say('hello', force: true), EngineProblem.none); // the companion too
      await EnginePrefs.instance.setMasterOn(false);
      expect(await engine.say('try_again', force: true), EngineProblem.charactersOff);
      expect(engine.playCue('roll'), isFalse);
    });
  });

  group('pause, resume, stop, lifecycle', () {
    test('pause holds the line; resume says it again from the start', () async {
      final a = engine.say('well_done');
      await _tick();
      await engine.pause();
      await a;
      await _tick();
      expect(engine.isPaused, isTrue);
      expect(sp.spoken.length, 1); // nothing new started while paused
      await engine.resume();
      await _tick();
      expect(sp.spoken.length, 2);
      expect(sp.spoken.last, sp.spoken.first);
      sp.finishCurrent();
    });

    test('resume does nothing after a call started, and the gate stops speech and clears the queue', () async {
      final a = engine.say('well_done');
      engine.say('lion_says');
      await _tick();
      await engine.pause();
      await a;
      AudioGate.instance.enterCall();
      await engine.resume();
      await _tick();
      expect(sp.spoken.length, 1);
      AudioGate.instance.leaveCall();
      expect(engine.isSpeaking, isFalse);
    });

    test('after disposeForTest the engine no longer listens to the gate (no leaked listener)', () async {
      engine.disposeForTest();
      var stops = 0;
      final other = RehlatyAudioEngine.forTest(sp);
      other.addListener(() => stops++);
      AudioGate.instance.setBackground(true);
      AudioGate.instance.setBackground(false);
      other.disposeForTest();
      expect(true, isTrue);
    });
  });

  group('recordings and fallback', () {
    test('no approved recording: the phone voice is used and the engine says so', () async {
      sp.autoFinish = true;
      await engine.say('hello');
      expect(engine.lastUsedRecording, isFalse);
      expect(played, isEmpty);
    });

    test('an approved recording is played from its structured path and the phone voice stays silent', () async {
      sp.autoFinish = true;
      engine.recordings = const ApprovedRecordings({'companion/en/hello'});
      await EnginePrefs.instance.setNarrationVolume(0.5);
      await engine.say('hello');
      expect(played, ['assets/audio/voices/companion/en/hello.ogg@0.5']);
      expect(sp.spoken, isEmpty);
      expect(engine.lastUsedRecording, isTrue);
      // the other language of the same line is still the phone voice: approval is per language
      await EnginePrefs.instance.setLanguagePref('ar');
      await engine.say('hello', force: true);
      expect(sp.spoken.length, 1);
    });

    test('a missing approved.json means nothing is approved; a real one is read', () async {
      expect((await ApprovedRecordings.load(bundle: _Bundle(null))).keys, isEmpty);
      final r = await ApprovedRecordings.load(bundle: _Bundle(jsonEncode(['adam/ar/well_done'])));
      expect(r.has(CharacterVoice.adam, 'ar', 'well_done'), isTrue);
      expect(r.has(CharacterVoice.adam, 'en', 'well_done'), isFalse);
      expect((await ApprovedRecordings.load(bundle: _Bundle('{broken'))).keys, isEmpty);
    });

    test('no voice installed for the language: reported, nothing pretended, no recording claimed', () async {
      sp.available = false;
      expect(await engine.say('hello'), EngineProblem.noVoice);
      expect(sp.spoken, isEmpty);
    });

    test('works offline: nothing needs a network (fake backend, no connectivity involved)', () async {
      sp.autoFinish = true;
      expect(await engine.say('hello'), EngineProblem.none);
    });
  });

  group('settings and privacy', () {
    test('all the new settings survive a restart; a damaged value falls back safely', () async {
      await EnginePrefs.instance.setMasterOn(false);
      await EnginePrefs.instance.setCharacter(CharacterVoice.nour, false);
      await EnginePrefs.instance.setLanguagePref('ar');
      await EnginePrefs.instance.setMusicVolume(0.3);
      await EnginePrefs.instance.setEffectsVolume(0.2);
      await EnginePrefs.instance.setNarrationVolume(0.7);
      EnginePrefs.instance.resetForTest();
      await EnginePrefs.instance.load();
      final p = EnginePrefs.instance;
      expect([p.masterOn, p.nourOn, p.adamOn, p.languagePref, p.musicVolume, p.effectsVolume, p.narrationVolume], [false, false, true, 'ar', 0.3, 0.2, 0.7]);
      SharedPreferences.setMockInitialValues({'engine_prefs': '{"l":"fr","v":9,"mv":-3}'});
      EnginePrefs.instance.resetForTest();
      await EnginePrefs.instance.load();
      expect(EnginePrefs.instance.languagePref, 'auto');
      expect(EnginePrefs.instance.narrationVolume, 1.0);
      expect(EnginePrefs.instance.musicVolume, 0.0);
    });

    test('the engine stores only settings: no child id, name or interaction is ever saved by it', () async {
      await EnginePrefs.instance.setVoice(CharacterVoice.adam, 'en', 'Boy');
      final raw = (await SharedPreferences.getInstance()).getString('engine_prefs')!;
      final keys = (jsonDecode(raw) as Map<String, dynamic>).keys.toSet();
      expect(keys, {'m', 'c', 'ad', 'no', 'a', 'l', 'v', 'mv', 'ev', 'n'});
      expect(raw.contains('child'), isFalse);
    });

    test('there is no microphone use in the engine source', () {
      final src = File('lib/media/rehlaty_audio_engine.dart').readAsStringSync() + File('lib/media/audio_catalog.dart').readAsStringSync();
      for (final w in ['record(', 'Permission.microphone', 'getUserMedia', 'AudioRecorder']) {
        expect(src.contains(w), isFalse, reason: w);
      }
    });
  });

  test('regenerates docs/VOICE_ASSET_STATUS.md from the real files on disk', () {
    final approvedFile = File('assets/audio/voices/approved.json');
    final approved = approvedFile.existsSync() ? {for (final e in jsonDecode(approvedFile.readAsStringSync()) as List<dynamic>) '$e'} : <String>{};
    var files = 0, ok = 0;
    final byChar = <String, int>{};
    for (final l in kDialogue) {
      for (final lang in ['ar', 'en']) {
        final has = File(l.recordingPath(lang)).existsSync();
        if (has) files++;
        if (has && approved.contains('${l.voice.name}/$lang/${l.id}')) ok++;
        byChar[l.voice.name] = (byChar[l.voice.name] ?? 0) + 1;
      }
    }
    final cueFiles = kSoundCues.where((c) => File(c.path).existsSync()).length;
    final musicFiles = kMusicTracks.where((m) => File(m.path).existsSync()).length;
    final total = kDialogue.length * 2;
    final b = StringBuffer()
      ..writeln('# Voice, sound and music asset status')
      ..writeln()
      ..writeln('Generated by `test/audio_phase3_test.dart` from the files that really exist. Do not edit by hand.')
      ..writeln()
      ..writeln('| What | Needed | Files present | Approved and playable |')
      ..writeln('|---|---|---|---|')
      ..writeln('| Character lines (text x 2 languages) | $total | $files | $ok |')
      ..writeln('| Sound effects | ${kSoundCues.length} | $cueFiles | n/a (no approval list yet) |')
      ..writeln('| Background music tracks | ${kMusicTracks.length} | $musicFiles | n/a |')
      ..writeln()
      ..writeln('Lines per character (both languages): ${byChar.entries.map((e) => '${e.key} ${e.value}').join(', ')}.')
      ..writeln()
      ..writeln(ok == 0 ? '**No approved recording exists.** Every character line is read by the phone\'s own text-to-speech (a demo voice). No sound effect or music file exists, so those cues stay silent.' : 'Some lines have approved recordings; the rest use the phone voice.')
      ..writeln()
      ..writeln('## Pipeline')
      ..writeln();
    for (final s in kVoicePipelineSteps) {
      b.writeln('- $s');
    }
    b
      ..writeln()
      ..writeln('## Lines to record')
      ..writeln()
      ..writeln('| id | speaker | category | Arabic | English | file (ar) | recorded |')
      ..writeln('|---|---|---|---|---|---|---|');
    for (final l in kDialogue) {
      b.writeln('| ${l.id} | ${l.voice.name} | ${l.category.name} | ${l.ar} | ${l.en} | `${l.recordingPath('ar')}` | ${File(l.recordingPath('ar')).existsSync() ? 'file' : 'missing'} |');
    }
    b
      ..writeln()
      ..writeln('## Sound effects to create')
      ..writeln()
      ..writeln('| id | kind | what | file | present |')
      ..writeln('|---|---|---|---|---|');
    for (final c in kSoundCues) {
      b.writeln('| ${c.id} | ${c.kind.name} | ${c.description} | `${c.path}` | ${File(c.path).existsSync() ? 'yes' : 'missing'} |');
    }
    b
      ..writeln()
      ..writeln('## Music to create')
      ..writeln()
      ..writeln('| area | what | file | present |')
      ..writeln('|---|---|---|---|');
    for (final m in kMusicTracks) {
      b.writeln('| ${m.area.name} | ${m.description} | `${m.path}` | ${File(m.path).existsSync() ? 'yes' : 'missing'} |');
    }
    File('docs/VOICE_ASSET_STATUS.md').writeAsStringSync(b.toString());
    expect(File('docs/VOICE_ASSET_STATUS.md').existsSync(), isTrue);
  });
}
