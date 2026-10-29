import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/games/choice_games.dart';
import 'package:kids_app/games/game_catalog.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/library/vocab.dart';
import 'package:kids_app/literacy/letters_data.dart';
import 'package:kids_app/media/audio.dart';
import 'package:kids_app/media/audio_gate.dart';
import 'package:kids_app/media/audio_manifest.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'fake_audio.dart';

Future<void> _show(WidgetTester t, Widget w, {Size size = const Size(900, 2200)}) async {
  t.view.physicalSize = size;
  t.view.devicePixelRatio = 1;
  addTearDown(t.view.reset);
  await t.pumpWidget(MaterialApp(key: UniqueKey(), home: w));
  await t.pump();
}

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  late FakeSpeech speech;

  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('ar');
    speech = FakeSpeech();
    AppAudio.speech = speech;
    AppAudio.service.recheckVoices();
    await AppAudio.service.stop();
    await AudioPrefs.instance.update(voiceOn: true, allowDeviceVoice: true, speechRate: 1.0);
  });

  tearDown(() {
    while (AudioGate.instance.inCall) {
      AudioGate.instance.leaveCall();
    }
  });

  group('generators', () {
    test('listen and pick the picture: the answer is the spoken word, no repeated picture, ages respected', () {
      final byEmoji = {for (final v in kVocab) v.emoji: v};
      for (final age in [3, 4, 5, 6]) {
        final rounds = makeListenPicture(age, Random(age));
        expect(rounds.length, kChoiceRounds);
        for (final r in rounds) {
          expect(r.options.length, 3);
          expect(r.options.toSet().length, 3);
          final v = kVocab.firstWhere((v) => v.id == r.ref);
          expect(r.say, v.ar);
          expect(r.options[r.correct], v.emoji);
          expect(kPicturableCategories, contains(v.category));
          expect(age >= v.minAge && age <= v.maxAge, true);
          expect(byEmoji[r.options[r.correct]], isNotNull);
        }
      }
    });

    test('listen and pick the word: three different written words, the answer is the spoken one', () {
      for (final age in [5, 6, 7, 8]) {
        for (final r in makeListenWord(age, Random(age))) {
          expect(r.options.toSet().length, 3);
          expect(r.options[r.correct], r.say);
        }
      }
    });

    test('listen and pick the letter: the NAME is spoken (never an isolated sound), three different letters', () {
      for (final age in [4, 5, 6]) {
        for (final r in makeListenLetter(age, Random(age))) {
          expect(r.options.toSet().length, 3);
          final l = kArabicLetters.firstWhere((l) => l.letter == r.options[r.correct]);
          expect(r.say, l.name);
          expect(r.say, isNot(l.soundFatha)); // not the sound بَ
        }
      }
    });

    test('every spoken text has an audio item or is an honest ad-hoc device-voice text', () {
      final m = AudioManifest.builtIn();
      for (final r in [...makeListenPicture(4, Random(1)), ...makeListenLetter(5, Random(2))]) {
        final a = m.forText('ar', r.say!);
        if (a != null) expect(a.text, r.say);
      }
    });
  });

  group('catalog', () {
    test('the three listening games are listed with sensible ages', () {
      final ids = {for (final g in kEducationalGames) g.id: g};
      expect(ids[ListenPictureGame.gameId]!.fitsAge(4), true);
      expect(ids[ListenWordGame.gameId]!.fitsAge(7), true);
      expect(ids[ListenWordGame.gameId]!.fitsAge(3), false);
      expect(ids[ListenLetterGame.gameId]!.fitsAge(5), true);
    });
  });

  group('screens', () {
    testWidgets('the word is shown as a caption, Listen speaks it, a wrong picture only fades', (t) async {
      final rounds = makeListenPicture(4, Random(7));
      await _show(t, ListenPictureGame(childId: 'c1', age: 4, random: Random(7)));
      expect(find.byKey(const ValueKey('listen_block')), findsOneWidget);
      expect(find.byKey(const ValueKey('caption')), findsOneWidget);
      expect(find.text(rounds[0].say!), findsWidgets);
      await t.tap(find.text('استمع').first);
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 60)));
      await t.pump();
      expect(speech.spoken, contains(rounds[0].say));

      final wrong = [for (var o = 0; o < 3; o++) if (o != rounds[0].correct) o].first;
      await t.tap(find.byKey(ValueKey('opt$wrong')));
      await t.pump();
      expect(find.byKey(ValueKey('opt${rounds[0].correct}')), findsOneWidget);
      expect(find.byKey(const ValueKey('display')), findsNothing);
    });

    testWidgets('no Arabic voice on the device: a clear message, the text stays, the game is still playable', (t) async {
      speech.available = false;
      AppAudio.service.recheckVoices();
      final rounds = makeListenPicture(4, Random(7));
      await _show(t, ListenPictureGame(childId: 'c1', age: 4, random: Random(7)));
      await t.tap(find.text('استمع').first);
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 60)));
      await t.pump();
      expect(find.text(rounds[0].say!), findsWidgets);
      await t.tap(find.byKey(ValueKey('opt${rounds[0].correct}')));
      await t.pump(const Duration(milliseconds: 700));
      expect(find.text('2 / 5'), findsOneWidget); // moved on
    });

    testWidgets('during a family call the listening button says so and nothing is spoken', (t) async {
      final rounds = makeListenPicture(4, Random(7));
      await _show(t, ListenPictureGame(childId: 'c1', age: 4, random: Random(7)));
      AudioGate.instance.enterCall();
      await t.tap(find.text('استمع').first);
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 60)));
      await t.pump();
      expect(speech.spoken, isEmpty);
      expect(find.textContaining('مكالمة عائلية'), findsWidgets);
      expect(find.text(rounds[0].say!), findsWidgets); // still readable
      AudioGate.instance.leaveCall();
    });

    for (final size in [const Size(320, 640), const Size(768, 1024), const Size(1280, 800)]) {
      testWidgets('listening games fit ${size.width.toInt()} wide at large text', (t) async {
        for (final w in <Widget>[
          const ListenPictureGame(childId: 'c1', age: 4),
          const ListenWordGame(childId: 'c1', age: 6),
          const ListenLetterGame(childId: 'c1', age: 5),
        ]) {
          t.view.physicalSize = size;
          t.view.devicePixelRatio = 1;
          addTearDown(t.view.reset);
          await t.pumpWidget(MaterialApp(
            key: UniqueKey(),
            builder: (c, child) => MediaQuery(data: MediaQuery.of(c).copyWith(textScaler: const TextScaler.linear(1.6)), child: child!),
            home: w,
          ));
          await t.pump();
          expect(t.takeException(), isNull);
        }
      });
    }
  });
}
