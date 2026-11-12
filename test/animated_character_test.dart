import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/design/animated_character.dart';
import 'package:kids_app/games/learning_page.dart';
import 'package:kids_app/games/web_games/learn_reactions.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:shared_preferences/shared_preferences.dart';

Widget _host(CharacterController c, {CharacterKind kind = CharacterKind.boy, bool randomIdle = false, bool reduced = false}) => MaterialApp(
      builder: (ctx, child) => MediaQuery(data: MediaQuery.of(ctx).copyWith(disableAnimations: reduced), child: child!),
      home: Scaffold(body: Center(child: AnimatedCharacter(key: const ValueKey('hero'), kind: kind, controller: c, height: 240, randomIdle: randomIdle))),
    );

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  group('controller rules', () {
    test('a small reaction never cuts a bigger one; a bigger one replaces a smaller one', () {
      final c = CharacterController();
      expect(c.celebrate(), isTrue);
      expect(c.tap(), isFalse);
      expect(c.wrong(), isFalse);
      expect(c.correct(), isFalse);
      expect(c.mood, CharMood.celebrate);
      expect(c.complete(), isTrue);
      expect(c.mood, CharMood.complete);
      c.dispose();
    });
    test('the same reaction again restarts it (each correct answer gets its own jump)', () {
      final c = CharacterController();
      c.correct();
      final first = c.serial;
      expect(c.correct(), isTrue);
      expect(c.serial, greaterThan(first));
      c.dispose();
    });
    test('finish only ends the reaction it belongs to', () {
      final c = CharacterController();
      c.correct();
      final old = c.serial;
      c.correct();
      c.finish(old); // the first jump ended late: the second one keeps playing
      expect(c.mood, CharMood.correct);
      c.finish(c.serial);
      expect(c.mood, CharMood.idle);
      c.dispose();
    });
  });

  group('the character on screen', () {
    testWidgets('idle to correct to idle, with the pose pictures of the owner\'s art', (t) async {
      final c = CharacterController();
      await t.pumpWidget(_host(c));
      await t.pump(const Duration(milliseconds: 100));
      expect(c.mood, CharMood.idle);
      c.correct();
      await t.pump();
      await t.pump(const Duration(milliseconds: 400));
      expect(c.mood, CharMood.correct);
      await t.pump(const Duration(milliseconds: 1200));
      expect(c.mood, CharMood.idle);
      expect(t.takeException(), isNull);
      await t.pumpWidget(const SizedBox());
      c.dispose();
    });

    testWidgets('repeated correct answers, then a wrong one, then a big celebration: no overlap, back to idle, never stuck', (t) async {
      final c = CharacterController();
      await t.pumpWidget(_host(c, kind: CharacterKind.girl));
      for (var i = 0; i < 5; i++) {
        c.correct();
        await t.pump(const Duration(milliseconds: 300));
      }
      expect(c.mood, CharMood.correct);
      c.wrong(); // lower priority while a correct jump is playing: ignored
      await t.pump(const Duration(milliseconds: 200));
      expect(c.mood, CharMood.correct);
      await t.pump(const Duration(milliseconds: 1400));
      expect(c.mood, CharMood.idle);
      c.wrong();
      await t.pump(const Duration(milliseconds: 300));
      expect(c.mood, CharMood.wrong);
      c.celebrate(); // interrupts the gentle wrong reaction
      await t.pump(const Duration(milliseconds: 300));
      expect(c.mood, CharMood.celebrate);
      c.complete();
      await t.pump(const Duration(milliseconds: 300));
      expect(c.mood, CharMood.complete);
      await t.pump(const Duration(seconds: 4));
      expect(c.mood, CharMood.idle);
      expect(t.takeException(), isNull);
      await t.pumpWidget(const SizedBox());
      c.dispose();
    });

    testWidgets('rapid mixed taps and answers always end in idle', (t) async {
      final c = CharacterController();
      await t.pumpWidget(_host(c, kind: CharacterKind.owl));
      final order = [c.tap, c.wrong, c.correct, c.tap, c.welcome, c.wrong, c.correct, c.celebrate, c.tap, c.complete, c.wrong];
      for (final f in order) {
        f();
        await t.pump(const Duration(milliseconds: 50));
      }
      await t.pump(const Duration(seconds: 5));
      expect(c.mood, CharMood.idle);
      expect(t.takeException(), isNull);
      await t.pumpWidget(const SizedBox());
      c.dispose();
    });

    testWidgets('random idle moves (look, hop, wave, excited) never break anything', (t) async {
      final c = CharacterController();
      await t.pumpWidget(_host(c, randomIdle: true));
      await t.pump(const Duration(seconds: 20));
      expect(c.mood, CharMood.idle);
      expect(t.takeException(), isNull);
      await t.pumpWidget(const SizedBox()); // disposed: timers and controllers are cancelled
      await t.pump(const Duration(seconds: 10));
      expect(t.takeException(), isNull);
      c.dispose();
    });

    testWidgets('reduced motion: reactions still finish, with no movement', (t) async {
      final c = CharacterController();
      await t.pumpWidget(_host(c, reduced: true));
      c.complete();
      await t.pump(const Duration(milliseconds: 500));
      await t.pump(const Duration(seconds: 4));
      expect(c.mood, CharMood.idle);
      expect(t.takeException(), isNull);
      await t.pumpWidget(const SizedBox());
      c.dispose();
    });
  });

  group('on the learning page, from real game events', () {
    Future<void> open(WidgetTester t, {String gender = 'boy'}) async {
      SharedPreferences.setMockInitialValues({});
      FlutterSecureStorage.setMockInitialValues({});
      await AppLocale.instance.set('ar');
      final kid = ChildProfile(id: 'k1', nickname: 'سلمى', age: 5, gender: gender);
      final store = JourneyStore(LocalJourneyRepository());
      await t.runAsync(() async {
        await store.load();
        await store.addProfile(kid);
      });
      JourneyStore.instance = store;
      t.view.physicalSize = const Size(1100, 620);
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      await t.pumpWidget(MaterialApp(home: LearningGamesScreen(child: kid)));
      await t.pump();
    }

    CharacterController ctrl(WidgetTester t) => t.widget<AnimatedCharacter>(find.byKey(const ValueKey('learning_hero'))).controller;

    testWidgets('it waves when the page opens, then rests; the right character shows for a girl', (t) async {
      await open(t, gender: 'girl');
      final w = t.widget<AnimatedCharacter>(find.byKey(const ValueKey('learning_hero')));
      expect(w.kind, CharacterKind.girl);
      await t.pump();
      expect(ctrl(t).mood, CharMood.welcome);
      await t.pump(const Duration(seconds: 3));
      expect(ctrl(t).mood, CharMood.idle);
      await t.pumpWidget(const SizedBox());
    });

    testWidgets('a real correct answer, a wrong first try and a finished game each get their own reaction', (t) async {
      await open(t);
      await t.pump(const Duration(seconds: 3));
      LearnReactions.emit(LearnEvent.correct);
      await t.pump(const Duration(milliseconds: 100));
      expect(ctrl(t).mood, CharMood.correct);
      await t.pump(const Duration(seconds: 2));
      expect(ctrl(t).mood, CharMood.idle);
      LearnReactions.emit(LearnEvent.wrong);
      await t.pump(const Duration(milliseconds: 100));
      expect(ctrl(t).mood, CharMood.wrong);
      await t.pump(const Duration(seconds: 2));
      LearnReactions.emit(LearnEvent.complete);
      await t.pump(const Duration(milliseconds: 100));
      expect(ctrl(t).mood, CharMood.complete);
      await t.pump(const Duration(seconds: 5));
      expect(ctrl(t).mood, CharMood.idle);
      LearnReactions.takePendingComplete();
      await t.pumpWidget(const SizedBox());
    });
  });
}
