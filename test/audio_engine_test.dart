import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/games/adventure_logic.dart';
import 'package:kids_app/games/game_common.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/media/audio.dart';
import 'package:kids_app/media/audio_gate.dart';
import 'package:kids_app/media/engine_settings_screen.dart';
import 'package:kids_app/media/rehlaty_audio_engine.dart';
import 'package:kids_app/media/voice_choice.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// Records what would be spoken and lets a test decide when each line "finishes".
class FakeSpeech implements SpeechBackend {
  final List<String> spoken = [];
  final List<String> langs = [];
  final List<String?> preferred = [];
  final List<Completer<void>> open = [];
  bool available = true;
  int stops = 0;
  int overlap = 0;
  int maxOverlap = 0;
  bool autoFinish = false;
  List<VoiceInfo> installed = const [];

  @override
  Future<bool> isAvailable(String lang) async => available;

  @override
  Future<void> speak(String text, {String lang = 'ar', double rate = 1.0}) async {
    spoken.add(text);
    langs.add(lang);
    overlap++;
    if (overlap > maxOverlap) maxOverlap = overlap;
    if (autoFinish) {
      overlap--;
      return;
    }
    final c = Completer<void>();
    open.add(c);
    await c.future;
    overlap--;
  }

  void finishCurrent() => open.removeAt(0).complete();

  @override
  Future<void> stop() async {
    stops++;
    for (final c in open) {
      if (!c.isCompleted) c.complete();
    }
    open.clear();
  }

  @override
  Future<List<VoiceInfo>> voices(String lang) async => installed.where((v) => v.locale.startsWith(lang)).toList();

  @override
  Future<void> preferVoice(String lang, String? name) async => preferred.add(name == null ? null : '$lang:$name');
}

Future<void> _tick() => Future<void>.delayed(Duration.zero);

void main() {
  late FakeSpeech sp;
  late RehlatyAudioEngine engine;

  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    EnginePrefs.instance.resetForTest();
    AudioPrefs.instance.effectsOn = true;
    AudioGate.instance.setBackground(false);
    await AppLocale.instance.set('en');
    sp = FakeSpeech();
    engine = RehlatyAudioEngine.forTest(sp);
  });
  tearDown(() async {
    engine.disposeForTest();
    while (AudioGate.instance.inCall) {
      AudioGate.instance.leaveCall();
    }
    AudioGate.instance.setBackground(false);
    await AppLocale.instance.set('ar');
  });

  group('the dialogue catalogue', () {
    test('ids are unique and every line has both languages and a speaker', () {
      expect({for (final l in kDialogue) l.id}.length, kDialogue.length);
      for (final l in kDialogue) {
        expect(l.ar.trim(), isNotEmpty);
        expect(l.en.trim(), isNotEmpty);
        expect(l.ar.length, lessThan(70), reason: 'short sentences for ages 1-6');
        expect(l.en.length, lessThan(70));
      }
      expect({for (final l in kDialogue) l.voice}, {CharacterVoice.adam, CharacterVoice.nour, CharacterVoice.companion});
    });

    test('nothing shames, pressures or threatens', () {
      for (final l in kDialogue) {
        for (final w in kForbiddenInDialogue) {
          expect(l.ar.contains(w), isFalse, reason: '${l.id} ar has $w');
          expect(l.en.toLowerCase().contains(w), isFalse, reason: '${l.id} en has $w');
        }
      }
      // the encouraging reply to a wrong try says "together"
      expect(kDialogue.firstWhere((l) => l.id == 'try_again').en, contains('together'));
    });

    test('the example lines of the brief exist', () {
      final ar = kDialogue.map((l) => l.ar).toList();
      expect(ar, contains('أهلاً يا بطل! مستعد نكتشف حاجة جديدة؟'));
      expect(ar, contains('مش مشكلة، نجرب مرة تانية سوا!'));
      expect(ar, contains('ممتاز! أنت جمعت الأجزاء صح!'));
    });
  });

  group('speaking', () {
    test('a line is spoken in the interface language, then the English one after a switch', () async {
      sp.autoFinish = true;
      expect(await engine.say('well_done'), EngineProblem.none);
      await AppLocale.instance.set('ar');
      await engine.say('well_done');
      expect(sp.spoken, ['Well done! You finished the activity!', 'برافو عليك! خلصت النشاط بنجاح!']);
      expect(sp.langs, ['en', 'ar']);
    });

    test('lines never overlap: Nour waits until Adam has finished, in order', () async {
      final a = engine.say('well_done'); // Adam
      final b = engine.say('lion_says'); // Nour
      await _tick();
      await _tick();
      expect(sp.spoken.length, 1);
      expect(engine.speaking, CharacterVoice.adam);
      sp.finishCurrent();
      await a;
      await _tick();
      await _tick();
      expect(sp.spoken.length, 2);
      expect(engine.speaking, CharacterVoice.nour);
      sp.finishCurrent();
      await b;
      expect(sp.maxOverlap, 1);
      expect(engine.isSpeaking, isFalse);
    });

    test('interrupt drops the waiting lines and stops the current one', () async {
      final a = engine.say('well_done');
      final b = engine.say('lion_says');
      await _tick();
      final c = engine.say('your_turn', interrupt: true);
      await _tick();
      await _tick();
      expect(await b, EngineProblem.silenced); // never spoken
      sp.finishCurrent();
      await a;
      await c;
      expect(sp.spoken, ['Well done! You finished the activity!', "It's your turn!"]);
      expect(sp.maxOverlap, 1);
    });

    test('stop() silences everything and leaves nothing queued', () async {
      final a = engine.say('well_done');
      engine.say('lion_says');
      await _tick();
      await engine.stop();
      await a;
      await _tick();
      expect(sp.spoken.length, 1);
      expect(engine.isSpeaking, isFalse);
    });

    test('characters off: nothing is spoken and the caller learns why', () async {
      await EnginePrefs.instance.setCharactersOn(false);
      expect(await engine.say('hello'), EngineProblem.charactersOff);
      expect(sp.spoken, isEmpty);
    });

    test('a family call or the app in the background silences it, and it does not resume by itself', () async {
      final a = engine.say('well_done');
      await _tick();
      AudioGate.instance.enterCall();
      await a;
      expect(sp.stops, greaterThan(0));
      expect(await engine.say('hello'), EngineProblem.silenced);
      AudioGate.instance.leaveCall();
      await _tick();
      expect(sp.spoken.length, 1); // nothing started again after the call
      AudioGate.instance.setBackground(true);
      expect(await engine.say('hello'), EngineProblem.silenced);
    });

    test('no voice for the language: reported, not pretended', () async {
      sp.available = false;
      expect(await engine.say('hello'), EngineProblem.noVoice);
      expect(sp.spoken, isEmpty);
      expect(engine.lastProblem, EngineProblem.noVoice);
    });

    test('an unknown line id is a programming error, not silent', () {
      expect(() => engine.say('nope'), throwsArgumentError);
    });

    test('each character keeps its own chosen voice, per language', () async {
      sp.autoFinish = true;
      await EnginePrefs.instance.setVoice(CharacterVoice.adam, 'en', 'Boy Voice');
      await EnginePrefs.instance.setVoice(CharacterVoice.nour, 'en', 'Girl Voice');
      await engine.say('well_done'); // Adam
      await engine.say('lion_says'); // Nour
      await engine.say('hello'); // companion: automatic
      expect(sp.preferred, ['en:Boy Voice', 'en:Girl Voice', null]);
      await EnginePrefs.instance.setVoice(CharacterVoice.adam, 'en', null);
      expect(EnginePrefs.instance.voiceFor(CharacterVoice.adam, 'en'), isNull);
    });

    test('sayText reads an on-screen instruction in a character voice', () async {
      sp.autoFinish = true;
      await engine.sayText(CharacterVoice.adam, 'Find the red ball');
      expect(sp.spoken, ['Find the red ball']);
    });
  });

  group('sound cues', () {
    test('no effect files are bundled, so nothing claims to play', () {
      expect(engine.cuesWithFiles, isEmpty);
      for (final cue in ['roll', 'ladder', 'slide', 'place', 'found', 'win', 'gentle']) {
        expect(engine.playCue(cue), isFalse, reason: cue);
      }
    });

    test('the games hook reaches the engine', () {
      GameCue.onCue = null;
      engine.attachGameCues();
      expect(GameCue.onCue, isNotNull);
      GameCue.play('roll'); // must not throw
      GameCue.onCue = null;
    });
  });

  group('preferences', () {
    test('survive a restart and a damaged value falls back to defaults', () async {
      await EnginePrefs.instance.setAutoNarration(true);
      await EnginePrefs.instance.setVoice(CharacterVoice.nour, 'ar', 'V1');
      EnginePrefs.instance.resetForTest();
      await EnginePrefs.instance.load();
      expect(EnginePrefs.instance.autoNarration, isTrue);
      expect(EnginePrefs.instance.voiceFor(CharacterVoice.nour, 'ar'), 'V1');
      SharedPreferences.setMockInitialValues({'engine_prefs': '{broken'});
      EnginePrefs.instance.resetForTest();
      await EnginePrefs.instance.load();
      expect(EnginePrefs.instance.charactersOn, isTrue);
      expect(EnginePrefs.instance.autoNarration, isFalse); // off by default: no surprise autoplay
    });
  });

  group('screens', () {
    testWidgets('every game has a speaker button that reads its instruction; nothing plays by itself', (t) async {
      final fake = FakeSpeech()..autoFinish = true;
      final saved = AppAudio.speech;
      AppAudio.speech = fake;
      addTearDown(() => AppAudio.speech = saved);
      t.view.physicalSize = const Size(700, 600);
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      await t.pumpWidget(const MaterialApp(home: GameScaffold(title: 'Game', instruction: 'Find the red ball', child: SizedBox())));
      await t.pump();
      expect(fake.spoken, isEmpty); // no autoplay
      await t.tap(find.byKey(const ValueKey('speak_instruction')));
      await t.pump();
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 20)));
      expect(fake.spoken, ['Find the red ball']);
    });

    testWidgets('parent settings: master switch, language, three volumes and a switch per character all apply and persist', (t) async {
      final fake = FakeSpeech()..autoFinish = true;
      final saved = AppAudio.speech;
      AppAudio.speech = fake;
      addTearDown(() => AppAudio.speech = saved);
      t.view.physicalSize = const Size(700, 2000);
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      await t.pumpWidget(const MaterialApp(home: EngineSettingsScreen()));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 30)));
      await t.pump();
      await t.tap(find.byKey(const ValueKey('char_adam')));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 20)));
      expect(EnginePrefs.instance.adamOn, isFalse);
      expect(EnginePrefs.instance.nourOn, isTrue);
      await t.tap(find.text('العربية'));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 20)));
      expect(EnginePrefs.instance.languagePref, 'ar');
      await t.drag(find.byKey(const ValueKey('vol_music')), const Offset(-300, 0));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 20)));
      expect(EnginePrefs.instance.musicVolume, lessThan(0.6));
      await t.tap(find.byKey(const ValueKey('engine_master')));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 20)));
      await t.pump();
      expect(EnginePrefs.instance.masterOn, isFalse);
      // with the master switch off the sliders are disabled
      expect(t.widget<Slider>(find.byKey(const ValueKey('vol_music'))).onChanged, isNull);
      // and everything was saved
      final raw = (await SharedPreferences.getInstance()).getString('engine_prefs')!;
      expect(raw, contains('"m":false'));
      expect(raw, contains('"l":"ar"'));
      EnginePrefs.instance.resetForTest();
    });

    testWidgets('automatic narration is off by default, reads the instruction when on, and silences the characters when the screen is left', (t) async {
      final fake = FakeSpeech()..autoFinish = true;
      final saved = AppAudio.speech;
      AppAudio.speech = fake;
      addTearDown(() => AppAudio.speech = saved);
      t.view.physicalSize = const Size(700, 600);
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      Widget game() => const MaterialApp(home: GameScaffold(title: 'Game', instruction: 'Find the red ball', child: SizedBox()));
      await t.pumpWidget(game());
      await t.pump();
      await t.pump();
      expect(fake.spoken, isEmpty); // off by default: no surprise autoplay
      await t.pumpWidget(const MaterialApp(home: SizedBox()));
      await EnginePrefs.instance.setAutoNarration(true);
      await t.pumpWidget(game());
      await t.pump();
      await t.pump();
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 30)));
      expect(fake.spoken, ['Find the red ball']);
      final stopsBefore = fake.stops;
      await t.pumpWidget(const MaterialApp(home: SizedBox())); // leaving the screen
      expect(fake.stops, greaterThan(stopsBefore));
      EnginePrefs.instance.resetForTest();
    });

    testWidgets('parent settings: honest note, switches, per-character voice pickers, a listen button', (t) async {
      final fake = FakeSpeech()
        ..autoFinish = true
        ..installed = const [VoiceInfo('Voice A', 'en-US'), VoiceInfo('Voice B', 'ar-EG')];
      final saved = AppAudio.speech;
      AppAudio.speech = fake;
      addTearDown(() => AppAudio.speech = saved);
      t.view.physicalSize = const Size(700, 1600);
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      await t.pumpWidget(const MaterialApp(home: EngineSettingsScreen()));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 30)));
      await t.pump();
      expect(find.byKey(const ValueKey('engine_honesty')), findsOneWidget);
      expect(find.textContaining('no human recordings'), findsOneWidget);
      expect(find.byKey(const ValueKey('voice_adam_en')), findsOneWidget);
      await t.tap(find.byKey(const ValueKey('engine_auto')));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 20)));
      expect(EnginePrefs.instance.autoNarration, isTrue);
      await t.tap(find.byKey(const ValueKey('engine_characters')));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 20)));
      await t.pump();
      expect(EnginePrefs.instance.charactersOn, isFalse);
      EnginePrefs.instance.resetForTest();
    });
  });
}
