import 'dart:io';

import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/library/learning_records.dart';
import 'package:kids_app/media/audio.dart';
import 'package:kids_app/stories/story_data.dart';
import 'package:kids_app/stories/story_models.dart';
import 'package:kids_app/stories/story_player.dart';
import 'package:kids_app/stories/story_store.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'fake_audio.dart';

void main() {
  late FakeSpeech speech;
  late List<FakePlayer> players;

  StoryPlayerController make(Story s, {String child = 'k1'}) => StoryPlayerController(
        s,
        childId: child,
        speech: speech,
        newPlayer: () {
          final p = FakePlayer();
          players.add(p);
          return p;
        },
      );

  Future<void> pumpMs(WidgetTester t, int ms) => t.pump(Duration(milliseconds: ms));

  setUp(() {
    SharedPreferences.setMockInitialValues({});
    speech = FakeSpeech()..manual = true;
    players = [];
  });

  group('story content', () {
    test('every story is well formed', () {
      expect(kStories.map((s) => s.id).toSet().length, kStories.length);
      for (final s in kStories) {
        expect(s.title, isNotEmpty);
        expect(s.description, isNotEmpty);
        expect(s.chapters, isNotEmpty, reason: s.id);
        expect(s.minAge <= s.maxAge, isTrue);
        expect(s.themes, isNotEmpty);
        expect(s.rights, isNotEmpty);
        expect(s.source, isNotEmpty);
        expect(s.estimatedSeconds, greaterThan(0));
        for (final q in s.questions) {
          expect(q.correct, inInclusiveRange(0, q.options.length - 1));
        }
        for (final c in s.chapters) {
          for (final ch in c.choices) {
            expect(ch.goTo, inInclusiveRange(0, s.chapters.length - 1), reason: s.id);
          }
          if (c.ending) expect(c.choices, isEmpty);
          expect(c.text.trim(), isNotEmpty);
        }
      }
    });

    test('there is a story in every category and the demo voice is labelled as a demo', () {
      for (final c in StoryCategory.values) {
        expect(kStories.any((s) => s.category == c), isTrue, reason: c.name);
      }
      for (final s in kStories.where((s) => s.isDeviceVoice)) {
        expect(s.narrator, contains('تجريبي'));
      }
    });

    test('the bundled audio files really exist', () {
      for (final s in kStories.where((s) => s.media is AssetAudio)) {
        expect(File((s.media as AssetAudio).path).existsSync(), isTrue, reason: s.id);
      }
      for (final e in kAmbientSounds.values.where((e) => e.$2 != null)) {
        expect(File(e.$2!).existsSync(), isTrue, reason: e.$2);
      }
    });

    test('interactive stories reach an ending from every choice', () {
      final s = storyById('choice_island')!;
      expect(s.branching, isTrue);
      bool reaches(int i, Set<int> seen) {
        if (!seen.add(i)) return false;
        final c = s.chapters[i];
        return c.ending || c.choices.any((x) => reaches(x.goTo, seen));
      }
      for (final c in s.chapters.where((c) => c.choices.isNotEmpty)) {
        for (final ch in c.choices) {
          expect(reaches(ch.goTo, {}), isTrue);
        }
      }
    });

    test('segments cover the whole transcript in order', () {
      final s = storyById('three_apples')!;
      final segs = segmentsOf(s);
      expect(segs.first.start, 0);
      for (var i = 1; i < segs.length; i++) {
        expect(segs[i].start, segs[i - 1].end);
      }
      expect(segs.map((x) => x.chapter).toSet(), {0, 1, 2});
    });
  });

  group('device-voice story', () {
    testWidgets('plays sentence by sentence, pauses and resumes from the same sentence, then stops at the end',
        (tester) async {
      final story = storyById('moon_star')!;
      final c = make(story);
      await c.init();
      expect(c.state, PlayState.ready);
      await c.play();
      await pumpMs(tester, 10);
      expect(c.state, PlayState.playing);
      expect(speech.spoken.length, 1);
      final first = speech.spoken.single;
      speech.finish();
      await pumpMs(tester, 10);
      expect(speech.spoken.length, 2);
      await c.pause();
      expect(c.state, PlayState.paused);
      await pumpMs(tester, 10);
      final spokenWhilePaused = speech.spoken.length;
      speech.finish();
      await pumpMs(tester, 10);
      expect(speech.spoken.length, spokenWhilePaused); // nothing keeps talking
      await c.play();
      await pumpMs(tester, 10);
      expect(speech.spoken.last, speech.spoken[1]); // resumed at the sentence that was interrupted
      expect(speech.spoken.last, isNot(first));
      // Read to the end.
      for (var i = 0; i < 40 && c.state != PlayState.completed; i++) {
        speech.finish();
        await pumpMs(tester, 10);
      }
      expect(c.state, PlayState.completed);
      final before = speech.spoken.length;
      speech.finish();
      await pumpMs(tester, 50);
      expect(speech.spoken.length, before, reason: 'no autoplay of anything else');
      expect(await StoryStore.resumePoint('k1', story.id), isNull);
      final hist = await StoryStore.history('k1');
      expect(hist.single.completed, isTrue);
      c.dispose();
    });

    testWidgets('seeking and skipping move to the right sentence; chapters can be jumped to', (tester) async {
      final story = storyById('three_apples')!;
      final c = make(story);
      await c.init();
      expect(c.canSeek, isTrue);
      final dur = c.durationSec;
      await c.seekTo(dur ~/ 2);
      expect(c.positionSec, lessThanOrEqualTo(dur ~/ 2));
      expect(c.positionSec, greaterThan(0));
      await c.skip(-1000);
      expect(c.positionSec, 0);
      await c.skip(1000);
      expect(c.positionSec, lessThanOrEqualTo(dur));
      await c.jumpToChapter(2);
      expect(c.chapterIndex, 2);
      expect(c.positionSec, c.chapterStart(2));
      c.dispose();
    });

    testWidgets('the speed is passed to the voice for the next sentence', (tester) async {
      final c = make(storyById('moon_star')!);
      await c.init();
      await c.setSpeed(0.75);
      await c.play();
      await pumpMs(tester, 10);
      expect(speech.rates.last, 0.75);
      speech.finish();
      await c.setSpeed(1.25);
      await pumpMs(tester, 10);
      expect(speech.rates.last, 1.25);
      await c.pause();
      c.dispose();
    });

    testWidgets('elapsed time advances while playing and not while paused', (tester) async {
      final c = make(storyById('moon_star')!);
      await c.init();
      await c.play();
      await tester.pump(const Duration(seconds: 2));
      final p1 = c.positionSec;
      expect(p1, greaterThan(0));
      expect(c.listenedSeconds, 2);
      await c.pause();
      await tester.pump(const Duration(seconds: 5));
      expect(c.positionSec, p1);
      expect(c.listenedSeconds, 2);
      c.dispose();
    });

    testWidgets('closing the player keeps the place, and the next one offers to continue', (tester) async {
      final story = storyById('moon_star')!;
      final c = make(story);
      await c.init();
      await c.play();
      await pumpMs(tester, 10);
      speech.finish();
      await pumpMs(tester, 10);
      speech.finish();
      await pumpMs(tester, 10);
      await c.pause();
      final at = c.positionSec;
      expect(at, greaterThan(0));
      c.dispose();
      await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 50)));
      final again = make(story);
      await tester.runAsync(again.init);
      expect(again.hasResume, isTrue);
      expect(again.positionSec, at);
      // Another child has no such place.
      final other = make(story, child: 'k2');
      await tester.runAsync(other.init);
      expect(other.hasResume, isFalse);
      again.dispose();
      other.dispose();
    });

    testWidgets('no Arabic voice on the device: playback is disabled with an explanation', (tester) async {
      speech.available = false;
      final c = make(storyById('moon_star')!);
      await c.init();
      expect(c.state, PlayState.unavailable);
      expect(c.message, contains('صوت عربي'));
      await c.play();
      expect(c.state, PlayState.unavailable);
      expect(speech.spoken, isEmpty);
      c.dispose();
    });

    testWidgets('listening is exposure in the records, never demonstrated understanding', (tester) async {
      final story = storyById('moon_star')!;
      final c = make(story);
      await c.init();
      await c.play();
      await tester.pump(const Duration(seconds: 3));
      await c.pause();
      await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 50)));
      final records = await tester.runAsync(LearningRecords.all);
      expect(records, isNotEmpty);
      expect(records!.every((r) => r.type == RecordType.story && r.evidence == Evidence.exposure), isTrue);
      expect(records.fold<int>(0, (s, r) => s + r.seconds), 3);
      c.dispose();
    });
  });

  group('interactive story', () {
    testWidgets('waits for a choice, follows it, and ends', (tester) async {
      final story = storyById('choice_island')!;
      final c = make(story);
      await c.init();
      expect(c.canSeek, isFalse);
      await c.play();
      for (var i = 0; i < 10 && c.state != PlayState.waitingChoice; i++) {
        speech.finish();
        await pumpMs(tester, 10);
      }
      expect(c.state, PlayState.waitingChoice);
      expect(c.chapter.choices.length, 2);
      await c.play(); // pressing play must not skip a choice
      expect(c.state, PlayState.waitingChoice);
      await c.choose(c.chapter.choices.first);
      await pumpMs(tester, 10);
      expect(c.chapterIndex, 1);
      for (var i = 0; i < 10 && c.state != PlayState.waitingChoice; i++) {
        speech.finish();
        await pumpMs(tester, 10);
      }
      await c.choose(c.chapter.choices.first); // -> an ending
      for (var i = 0; i < 20 && c.state != PlayState.completed; i++) {
        speech.finish();
        await pumpMs(tester, 10);
      }
      expect(c.state, PlayState.completed);
      expect(c.chapter.ending, isTrue);
      c.dispose();
    });
  });

  group('sleep timer', () {
    testWidgets('stops playback and fades the ambient sound when it runs out', (tester) async {
      final c = make(storyById('moon_star')!);
      await c.init();
      await c.setAmbient('rain');
      final ambient = players.last;
      await c.play();
      await pumpMs(tester, 10);
      expect(ambient.playing, isTrue);
      c.startSleepTimer(5);
      expect(c.sleepRemaining, 300);
      await tester.pump(const Duration(seconds: 100));
      expect(c.sleepRemaining, 200);
      expect(c.playing, isTrue);
      await tester.pump(const Duration(seconds: 196));
      expect(ambient.volume, lessThan(0.35)); // fading in the last seconds
      await tester.pump(const Duration(seconds: 5));
      expect(c.sleepEnded, isTrue);
      expect(c.state, PlayState.paused);
      expect(ambient.playing, isFalse);
      expect(c.sleepRemaining, isNull);
      c.dispose();
    });

    testWidgets('can be cancelled, and "end of story" stops at the end', (tester) async {
      final c = make(storyById('moon_star')!);
      await c.init();
      c.startSleepTimer(10);
      c.cancelSleepTimer();
      expect(c.sleepRemaining, isNull);
      c.sleepAtEndOfStory();
      expect(c.sleepAtEnd, isTrue);
      await c.play();
      for (var i = 0; i < 40 && c.state != PlayState.completed; i++) {
        speech.finish();
        await pumpMs(tester, 10);
      }
      expect(c.state, PlayState.completed);
      expect(c.sleepEnded, isTrue);
      c.dispose();
    });
  });

  group('recording (file) story', () {
    testWidgets('plays a real file with seek, skip, speed and completion; resume is saved', (tester) async {
      final story = storyById('music_box')!;
      final c = make(story);
      await c.init();
      final p = players.first;
      expect((p.loaded as AssetAudio).path, 'assets/audio/musicbox.mp3');
      expect(c.durationSec, 100); // from the player
      await c.setSpeed(1.25);
      await c.play();
      expect(p.playing, isTrue);
      expect(p.speed, 1.25);
      p.advance(const Duration(seconds: 8)); // 8 s at 1.25x = 10 s of audio
      await pumpMs(tester, 10);
      expect(c.positionSec, 10);
      await c.skip(15);
      expect(c.positionSec, 25);
      await c.skip(-15);
      expect(c.positionSec, 10);
      await c.seekTo(60);
      expect(p.position, const Duration(seconds: 60));
      await c.pause();
      expect(p.playing, isFalse);
      c.dispose();
      await tester.runAsync(() => Future.delayed(const Duration(milliseconds: 50)));
      // A new player resumes at the saved second.
      final c2 = make(story);
      await tester.runAsync(c2.init);
      expect(c2.hasResume, isTrue);
      expect(players.last.position, const Duration(seconds: 60));
      await c2.play();
      players.last.advance(const Duration(seconds: 100));
      await pumpMs(tester, 10);
      expect(c2.state, PlayState.completed);
      expect(players.last.playing, isFalse); // stops, nothing else starts
      c2.dispose();
    });

    testWidgets('a file that cannot be loaded disables playback honestly', (tester) async {
      final c = StoryPlayerController(
        storyById('music_box')!,
        childId: 'k1',
        speech: speech,
        newPlayer: () => FakePlayer()..length = null,
      );
      await c.init();
      expect(c.state, PlayState.unavailable);
      expect(c.message, isNotEmpty);
      await c.play();
      expect(c.playing, isFalse);
      c.dispose();
    });

    testWidgets('a story with no recording at all says the recording has not been added', (tester) async {
      const s = Story(
        id: 'x',
        title: 'x',
        description: 'x',
        category: StoryCategory.calm,
        minAge: 1,
        maxAge: 5,
        narrator: '-',
        media: NoAudio(),
        cover: '🌙',
        coverColor: 0xFFFFFFFF,
        themes: ['x'],
        objectives: 'x',
        source: 'x',
        rights: 'x',
        chapters: [StoryChapter('a', 'نص.')],
      );
      final c = make(s);
      await c.init();
      expect(c.state, PlayState.unavailable);
      expect(c.message, 'لم تتم إضافة التسجيل الصوتي بعد');
      c.dispose();
    });
  });

  group('ambient sound', () {
    testWidgets('loops quietly, follows play and pause, and can be switched off', (tester) async {
      final c = make(storyById('moon_star')!);
      await c.init();
      await c.setAmbient('waves');
      final a = players.last;
      expect((a.loaded as AssetAudio).path, 'assets/audio/waves.mp3');
      expect(a.loop, isTrue);
      expect(a.volume, 0.35);
      expect(a.playing, isFalse); // not before the story plays
      await c.play();
      await pumpMs(tester, 10);
      expect(a.playing, isTrue);
      await c.setAmbientVolume(0.1);
      expect(a.volume, 0.1);
      await c.pause();
      expect(a.playing, isFalse);
      await c.setAmbient('none');
      expect(a.disposed, isTrue);
      expect(c.ambient, 'none');
      c.dispose();
    });
  });

  group('history and favourites', () {
    test('favourites toggle per child', () async {
      expect(await StoryStore.toggleFavorite('a', 'moon_star'), isTrue);
      expect(await StoryStore.favorites('a'), {'moon_star'});
      expect(await StoryStore.favorites('b'), isEmpty);
      expect(await StoryStore.toggleFavorite('a', 'moon_star'), isFalse);
      expect(await StoryStore.favorites('a'), isEmpty);
    });

    test('history keeps one row per story per day and adds up the seconds', () async {
      await StoryStore.addListening('a', 's', 30, now: DateTime(2026, 10, 1));
      await StoryStore.addListening('a', 's', 20, completed: true, now: DateTime(2026, 10, 1));
      await StoryStore.addListening('a', 's', 5, now: DateTime(2026, 10, 2));
      final h = await StoryStore.history('a');
      expect(h.length, 2);
      expect([h[0].seconds, h[0].completed], [50, true]);
      expect([h[1].seconds, h[1].completed], [5, false]);
    });
  });
}
