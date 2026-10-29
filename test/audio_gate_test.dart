import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/media/audio.dart';
import 'package:kids_app/media/audio_button.dart';
import 'package:kids_app/media/audio_gate.dart';
import 'package:kids_app/media/audio_manifest.dart';
import 'package:kids_app/media/audio_service.dart';
import 'package:kids_app/stories/story_data.dart';
import 'package:kids_app/stories/story_models.dart';
import 'package:kids_app/stories/story_player.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'fake_audio.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  late FakeSpeech speech;
  late FakePlayer player;
  late AudioGate gate;

  AudioService make() => AudioService(speech: () => speech, newPlayer: () => player, manifest: () => AudioManifest.builtIn(), gate: gate);

  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    speech = FakeSpeech()..manual = true;
    player = FakePlayer();
    gate = AudioGate.forTest();
    await AudioPrefs.instance.update(voiceOn: true, allowDeviceVoice: true, speechRate: 1.0);
  });

  tearDown(() {
    // the story tests use the real gate: make sure no call is left open
    while (AudioGate.instance.inCall) {
      AudioGate.instance.leaveCall();
    }
  });

  test('the gate counts nested calls and only reports a change at the edges', () {
    var changes = 0;
    gate.addListener(() => changes++);
    expect(gate.inCall, false);
    gate.enterCall();
    gate.enterCall();
    expect(gate.inCall, true);
    expect(changes, 1);
    gate.leaveCall();
    expect(gate.inCall, true);
    gate.leaveCall();
    expect(gate.inCall, false);
    expect(changes, 2);
    gate.leaveCall(); // extra leave is harmless
    expect(gate.inCall, false);
  });

  group('lesson audio service', () {
    test('a call stops the lesson voice at once', () async {
      final s = make();
      final playing = s.playText('تفاحة', lang: 'ar');
      await Future<void>.delayed(const Duration(milliseconds: 10));
      expect(s.state.value.status, AudioStatus.playing);
      gate.enterCall();
      await Future<void>.delayed(const Duration(milliseconds: 10));
      expect(s.state.value.status, isNot(AudioStatus.playing));
      await playing;
    });

    test('nothing starts during a call, and the reason is told', () async {
      final s = make();
      gate.enterCall();
      await s.playText('تفاحة', lang: 'ar');
      expect(speech.spoken, isEmpty);
      expect(s.state.value.status, AudioStatus.error);
      expect(s.state.value.problem, AudioProblem.inCall);
      expect(audioProblemText(AudioProblem.inCall), isNotEmpty);
    });

    test('when the call ends nothing resumes by itself; a new tap plays again', () async {
      final s = make();
      gate.enterCall();
      await s.playText('تفاحة', lang: 'ar');
      gate.leaveCall();
      await Future<void>.delayed(const Duration(milliseconds: 20));
      expect(speech.spoken, isEmpty); // no surprise voice after the call
      final f = s.playText('تفاحة', lang: 'ar');
      await Future<void>.delayed(const Duration(milliseconds: 10));
      expect(speech.spoken, ['تفاحة']);
      speech.finish();
      await f;
    });
  });

  group('stories', () {
    Story deviceStory() => kStories.firstWhere((s) => s.media is DeviceVoice);

    test('a call pauses a story that is playing and it stays paused afterwards', () async {
      final c = StoryPlayerController(deviceStory(), childId: 'k1', speech: speech, newPlayer: () => player);
      await c.init();
      await c.play();
      await Future<void>.delayed(const Duration(milliseconds: 10));
      expect(c.playing, true);
      AudioGate.instance.enterCall();
      await Future<void>.delayed(const Duration(milliseconds: 20));
      expect(c.state, PlayState.paused);
      AudioGate.instance.leaveCall();
      await Future<void>.delayed(const Duration(milliseconds: 20));
      expect(c.state, PlayState.paused); // not resumed by itself
      c.dispose();
    });

    test('a story cannot start during a call', () async {
      final c = StoryPlayerController(deviceStory(), childId: 'k1', speech: speech, newPlayer: () => player);
      await c.init();
      AudioGate.instance.enterCall();
      await c.play();
      expect(c.playing, false);
      expect(c.message, isNotNull);
      AudioGate.instance.leaveCall();
      c.dispose();
    });
  });
}
