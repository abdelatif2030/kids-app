import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/literacy/letters_data.dart';
import 'package:kids_app/media/audio.dart';
import 'package:kids_app/media/audio_button.dart';
import 'package:kids_app/media/audio_manifest.dart';
import 'package:kids_app/media/audio_service.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'fake_audio.dart';

AudioManifest _withRecording({bool approved = true}) => AudioManifest.builtIn(overrides: {
      'assets': {
        'ar.letter.0628.name': {
          'file': 'assets/audio/ar/letters/ba_name.mp3',
          'voice': 'speaker-a',
          'license': 'original, owned by the app',
          'review': approved ? 'approved' : 'pending',
          'reviewedBy': 'Reviewer 1, 2026-11-01',
          'durationMs': 900,
        },
      },
    });

String get _baName => letterAudioId(letterOf('ب')!, 'name');
String get _baSound => letterAudioId(letterOf('ب')!, 'sound');

void main() {
  late FakeSpeech speech;
  late FakePlayer player;

  AudioService make({AudioManifest? manifest, AudioPrefs? prefs}) => AudioService(
        speech: () => speech,
        newPlayer: () => player,
        manifest: () => manifest ?? AudioManifest.builtIn(),
        prefs: prefs,
      );

  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    speech = FakeSpeech();
    player = FakePlayer();
    await AudioPrefs.instance.update(voiceOn: true, allowDeviceVoice: true, speechRate: 1.0);
  });

  group('the audio manifest', () {
    test('every letter has a name and the three isolated sounds, with stable unique ids', () {
      final m = AudioManifest.builtIn();
      final ids = m.all.map((a) => a.id).toList();
      expect(ids.toSet().length, ids.length);
      for (final l in kArabicLetters) {
        for (final part in ['name', 'sound', 'sound_u', 'sound_i']) {
          expect(m.byId(letterAudioId(l, part)), isNotNull, reason: '${l.letter} $part');
        }
        for (final w in l.words) {
          expect(m.byId(wordAudioId(w.word)), isNotNull, reason: w.word);
        }
      }
      expect(m.byId('ar.letter.0628.name')!.text, 'باء');
      expect(m.byId('ar.letter.0628.sound')!.text, 'بَ');
    });

    test('isolated sounds and phonics may never be voiced by the device', () {
      final m = AudioManifest.builtIn();
      for (final a in m.all) {
        final isolated = a.kind == AudioKind.letterSound || a.kind == AudioKind.phonics;
        expect(a.deviceVoiceAllowed, !isolated, reason: a.id);
      }
    });

    test('nothing is approved without a file, a reviewer, a speaker and a license', () {
      expect(AudioManifest.builtIn().validate(), isEmpty);
      expect(AudioManifest.builtIn().approvedCount, 0); // honest: no recording exists yet
      expect(_withRecording().validate(), isEmpty);
      expect(_withRecording().approvedCount, 1);
      final bad = AudioManifest.builtIn(overrides: {
        'assets': {'ar.letter.0628.name': {'file': 'x.mp3', 'review': 'approved'}},
      });
      expect(bad.validate().length, 3); // no reviewer, no license, no speaker
    });

    test('a text maps to its asset, so a recording takes over automatically', () {
      final m = AudioManifest.builtIn();
      expect(m.forText('ar', 'باء')!.id, 'ar.letter.0628.name');
      expect(m.forText('ar', 'بطة')!.kind, AudioKind.word);
      expect(m.forText('en', 'A')!.id, 'en.letter.A.name');
      expect(m.forText('ar', 'جملة غير موجودة'), isNull);
    });

    test('the bundled manifest file loads and the bundled ambient files are real MP3 files', () async {
      TestWidgetsFlutterBinding.ensureInitialized();
      final m = await AudioManifest.load();
      expect(m.total, greaterThan(300));
      expect(m.validate(), isEmpty);
      for (final a in m.all.where((a) => a.hasRecording)) {
        final data = await rootBundle.load(a.file!);
        expect(data.lengthInBytes, greaterThan(1000), reason: a.id);
      }
      for (final f in ['rain', 'waves', 'wind', 'musicbox']) {
        final bytes = File('assets/audio/$f.mp3').readAsBytesSync();
        expect(bytes.length, greaterThan(100000), reason: f);
        final id3 = bytes[0] == 0x49 && bytes[1] == 0x44 && bytes[2] == 0x33;
        final sync = bytes[0] == 0xFF && (bytes[1] & 0xE0) == 0xE0;
        expect(id3 || sync, isTrue, reason: '$f is not an MP3 stream');
      }
    });
  });

  group('the audio service', () {
    test('the device voice reads a letter name; the state follows the real playback', () async {
      final s = make();
      final seen = <AudioStatus>[];
      s.state.addListener(() => seen.add(s.state.value.status));
      await s.play(_baName);
      expect(speech.spoken, ['باء']);
      expect(seen, [AudioStatus.loading, AudioStatus.playing, AudioStatus.completed]);
      expect(s.state.value.heard, AudioSource.deviceVoice);
    });

    test('"playing" lasts exactly as long as the speech', () async {
      speech.manual = true;
      final s = make();
      final f = s.play(_baName);
      await Future<void>.delayed(Duration.zero);
      expect(s.state.value.status, AudioStatus.playing);
      speech.finish();
      await f;
      expect(s.state.value.status, AudioStatus.completed);
    });

    test('a new clip stops the previous one: no overlapping speech', () async {
      speech.manual = true;
      final s = make();
      final a = s.play(_baName);
      await Future<void>.delayed(Duration.zero);
      final b = s.play(wordAudioId('بطة'));
      await Future<void>.delayed(Duration.zero);
      expect(speech.stops, greaterThanOrEqualTo(2)); // stopped before each start
      expect(s.state.value.text, 'بطة');
      speech.finish();
      await Future.wait([a, b]);
      expect(s.state.value.text, 'بطة'); // the first clip's end did not overwrite the state
      expect(s.state.value.status, AudioStatus.completed);
    });

    test('an isolated sound with no recording is NOT voiced by the device: a clear "missing" state', () async {
      final s = make();
      await s.play(_baSound);
      expect(speech.spoken, isEmpty);
      expect(s.state.value.status, AudioStatus.error);
      expect(s.state.value.problem, AudioProblem.missing);
    });

    test('with the device voice switched off, only recordings play', () async {
      await AudioPrefs.instance.update(allowDeviceVoice: false);
      final s = make();
      await s.play(_baName);
      expect(speech.spoken, isEmpty);
      expect(s.state.value.problem, AudioProblem.missing);
    });

    test('no Arabic voice on the device is reported, not read by another voice', () async {
      speech.available = false;
      final s = make();
      await s.play(_baName);
      expect(speech.spoken, isEmpty);
      expect(s.state.value.problem, AudioProblem.noVoice);
      speech.available = true;
      await s.play(_baName); // remembered as unavailable until re-checked
      expect(s.state.value.problem, AudioProblem.noVoice);
      s.recheckVoices();
      await s.play(_baName);
      expect(s.state.value.status, AudioStatus.completed);
    });

    test('an engine failure is shown and the next try recovers', () async {
      final s = make();
      speech.fail = true;
      await s.play(_baName);
      expect(s.state.value.status, AudioStatus.error);
      expect(s.state.value.problem, AudioProblem.failed);
      speech.fail = false;
      await s.play(_baName);
      expect(s.state.value.status, AudioStatus.completed);
    });

    test('voice off in the parent settings says so', () async {
      await AudioPrefs.instance.update(voiceOn: false);
      final s = make();
      await s.play(_baName);
      expect(s.state.value.problem, AudioProblem.voiceOff);
      expect(speech.spoken, isEmpty);
    });

    test('an unknown asset id is an error, not silence', () async {
      final s = make();
      await s.play('ar.nope');
      expect(s.state.value.status, AudioStatus.error);
    });

    test('slow practice is the same text at a lower speed', () async {
      final s = make();
      await s.play(wordAudioId('بطة'));
      await s.play(wordAudioId('بطة'), slow: true);
      expect(speech.spoken, ['بطة', 'بطة']);
      expect(speech.rates[1], closeTo(speech.rates[0] * 0.7, 0.001));
    });

    test('an approved recording is preferred over the device voice, and slow mode slows the file', () async {
      final s = make(manifest: _withRecording());
      await s.play(_baName);
      expect(player.loaded, isA<AssetAudio>());
      expect((player.loaded as AssetAudio).path, 'assets/audio/ar/letters/ba_name.mp3');
      expect(player.playing, isTrue);
      expect(speech.spoken, isEmpty);
      expect(s.state.value.heard, AudioSource.recorded);
      player.advance(const Duration(seconds: 200));
      await Future<void>.delayed(Duration.zero);
      expect(s.state.value.status, AudioStatus.completed);
      await s.play(_baName, slow: true);
      expect(player.speed, 0.8);
      await s.replay();
      expect(player.playing, isTrue);
    });

    test('a recording that is not approved is not used', () async {
      final s = make(manifest: _withRecording(approved: false));
      await s.play(_baName);
      expect(player.loaded, isNull);
      expect(speech.spoken, ['باء']);
    });

    test('a recording that cannot be loaded falls back to the device voice, or reports it', () async {
      player.length = null;
      var s = make(manifest: _withRecording());
      await s.play(_baName);
      expect(speech.spoken, ['باء']); // allowed fallback
      await AudioPrefs.instance.update(allowDeviceVoice: false);
      s = make(manifest: _withRecording());
      await s.play(_baName);
      expect(s.state.value.problem, AudioProblem.recordingFailed);
    });

    test('pausing a recording pauses it; the device voice cannot pause so it stops', () async {
      final s = make(manifest: _withRecording());
      await s.play(_baName);
      await s.pause();
      expect(s.state.value.status, AudioStatus.paused);
      expect(player.playing, isFalse);
      speech.manual = true;
      final f = s.play(wordAudioId('بطة'));
      await Future<void>.delayed(Duration.zero);
      await s.pause();
      expect(s.state.value.status, AudioStatus.idle);
      await f;
    });

    test('stop ends everything', () async {
      speech.manual = true;
      final s = make();
      final f = s.play(_baName);
      await Future<void>.delayed(Duration.zero);
      await s.stop();
      await f;
      expect(s.state.value.status, AudioStatus.idle);
    });
  });

  group('audio buttons show the truth', () {
    Widget app(Widget child) => MaterialApp(
          key: UniqueKey(),
          builder: (c, w) => Directionality(textDirection: AppLocale.instance.direction, child: w!),
          home: Scaffold(body: Center(child: child)),
        );

    setUp(() async {
      AppAudio.speech = speech;
      await AppAudio.service.stop();
    });

    testWidgets('the speaking icon appears only while sound plays', (tester) async {
      speech.manual = true;
      await tester.pumpWidget(app(Column(children: [AudioButton(assetId: _baName), const AudioNotice()])));
      expect(find.byIcon(Icons.volume_up_rounded), findsOneWidget);
      await tester.tap(find.text('استمع'));
      await tester.pump();
      expect(find.byIcon(Icons.graphic_eq_rounded), findsOneWidget);
      expect(find.text('صوت الجهاز التجريبي. ينتظر تسجيلاً بشرياً معتمداً.'), findsOneWidget);
      speech.finish();
      await tester.pump();
      await tester.pump();
      expect(find.byIcon(Icons.graphic_eq_rounded), findsNothing);
      expect(find.byIcon(Icons.volume_up_rounded), findsOneWidget);
    });

    testWidgets('a missing recording shows a warning icon and the reason, never a fake playing state', (tester) async {
      await tester.pumpWidget(app(Column(children: [AudioButton(assetId: _baSound), const AudioNotice()])));
      await tester.tap(find.text('استمع'));
      await tester.pump();
      await tester.pump();
      expect(find.byIcon(Icons.volume_off_rounded), findsWidgets);
      expect(find.byIcon(Icons.graphic_eq_rounded), findsNothing);
      expect(find.text('لم يُسجَّل هذا الصوت بعد. اقرأ النص الظاهر.'), findsOneWidget);
    });

    testWidgets('tapping a playing button stops it; the English labels follow the interface language', (tester) async {
      await tester.runAsync(() => AppLocale.instance.set('en'));
      addTearDown(() => AppLocale.instance.set('ar'));
      speech.manual = true;
      await tester.pumpWidget(app(AudioButton(assetId: _baName)));
      await tester.tap(find.text('Listen'));
      await tester.pump();
      expect(find.byIcon(Icons.graphic_eq_rounded), findsOneWidget);
      await tester.tap(find.text('Listen'));
      await tester.pump();
      await tester.pump();
      expect(find.byIcon(Icons.graphic_eq_rounded), findsNothing);
    });
  });
}
