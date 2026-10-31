import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/companion/companion_logic.dart';
import 'package:kids_app/companion/companion_service.dart';
import 'package:kids_app/companion/companion_store.dart';
import 'package:kids_app/companion/companion_ui.dart';
import 'package:kids_app/data_reset.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/media/audio_catalog.dart';
import 'package:kids_app/progress_store.dart';
import 'package:shared_preferences/shared_preferences.dart';

SkillEvent ev(String c, bool ok) => SkillEvent(day: '2026-10-30', skill: 's', ok: ok, childId: c);

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    await AppLocale.instance.set('ar');
  });

  group('logic', () {
    test('age bands', () {
      expect([1, 2, 3, 4, 5, 6, 8].map(ageBandFor), [AgeBand.toddler, AgeBand.toddler, AgeBand.preschool, AgeBand.preschool, AgeBand.early, AgeBand.early, AgeBand.early]);
    });

    test('ability is unknown with few rounds, and only counts this child', () {
      expect(abilityOf([for (var i = 0; i < 7; i++) ev('a', true)], 'a'), Ability.unknown);
      final mixed = [for (var i = 0; i < 10; i++) ev('a', true), for (var i = 0; i < 10; i++) ev('b', false)];
      expect(abilityOf(mixed, 'a'), Ability.confident);
      expect(abilityOf(mixed, 'b'), Ability.needsSupport);
      expect(abilityOf([for (var i = 0; i < 10; i++) ev('a', i.isEven)], 'a'), Ability.steady);
    });

    test('ability moves the band by one step at most, never past the ends', () {
      expect(effectiveBand(2, Ability.confident), AgeBand.preschool);
      expect(effectiveBand(2, Ability.needsSupport), AgeBand.toddler);
      expect(effectiveBand(6, Ability.confident), AgeBand.early);
      expect(effectiveBand(6, Ability.needsSupport), AgeBand.preschool);
      expect(effectiveBand(3, Ability.steady), AgeBand.preschool);
    });

    test('every returned line exists in the approved catalogue and belongs to the asked character', () {
      for (final who in [CharacterVoice.adam, CharacterVoice.nour]) {
        for (final m in CompanionMoment.values) {
          for (var age = 1; age <= 6; age++) {
            for (final a in Ability.values) {
              final id = companionLineId(m, who, age, a);
              if (id == null) continue;
              final line = kDialogue.firstWhere((l) => l.id == id);
              expect(line.voice, who, reason: id);
              expect(line.feature, 'companion');
            }
          }
        }
      }
      expect(companionLineId(CompanionMoment.greet, CharacterVoice.companion, 4, Ability.unknown), isNull);
    });

    test('a challenge is only offered to confident 5-6 year olds', () {
      expect(companionLineId(CompanionMoment.challenge, CharacterVoice.adam, 5, Ability.confident), 'cp_challenge_adam');
      expect(companionLineId(CompanionMoment.challenge, CharacterVoice.adam, 4, Ability.confident), isNull);
      expect(companionLineId(CompanionMoment.challenge, CharacterVoice.nour, 6, Ability.steady), isNull);
      expect(companionLineId(CompanionMoment.challenge, CharacterVoice.nour, 6, Ability.needsSupport), isNull);
    });

    test('a child who needs support is spoken to more simply than their age alone suggests', () {
      expect(companionLineId(CompanionMoment.activityDone, CharacterVoice.adam, 5, Ability.needsSupport), 'cp_done_mid_adam');
      expect(companionLineId(CompanionMoment.activityDone, CharacterVoice.adam, 3, Ability.confident), 'cp_done_old_adam');
    });

    test('all companion lines are short, written in both languages and free of pressure words', () {
      final lines = kDialogue.where((l) => l.feature == 'companion').toList();
      expect(lines.length, 28);
      for (final l in lines) {
        expect(l.ar.length, lessThan(50));
        expect(l.en.length, lessThan(55));
        for (final w in ['!!', 'must', 'have to', 'streak', 'come back', 'يجب']) {
          expect(l.en.toLowerCase().contains(w) || l.ar.contains(w), isFalse, reason: l.id);
        }
      }
    });
  });

  group('store and service', () {
    test('a reward moment is claimed once per child and a second child is independent', () async {
      expect(await CompanionStore.claim('a', 'game:x'), isTrue);
      expect(await CompanionStore.claim('a', 'game:x'), isFalse);
      expect(await CompanionStore.claim('b', 'game:x'), isTrue);
    });

    test('the choice, age and claims are per child and removed with the child', () async {
      await CompanionStore.setWho('a', CharacterVoice.nour);
      await CompanionStore.noteAge('a', 4);
      await CompanionStore.claim('a', 'e');
      expect(await CompanionStore.who('a'), CharacterVoice.nour);
      expect(await CompanionStore.who('b'), CharacterVoice.adam);
      await CompanionStore.setWho('a', CharacterVoice.companion); // not a pickable companion
      expect(await CompanionStore.who('a'), CharacterVoice.nour);
      await deleteOneChild('a');
      expect(await CompanionStore.who('a'), CharacterVoice.adam);
      expect(await CompanionStore.age('a'), isNull);
      expect(await CompanionStore.claim('a', 'e'), isTrue);
    });

    test('react gives the chosen character\'s line, once for a claimed event, and nothing when off', () async {
      await CompanionStore.setWho('a', CharacterVoice.nour);
      final r = await CompanionService.react('a', CompanionMoment.activityDone, eventId: 'game:g', age: 4, speak: false);
      expect(r!.lineId, 'cp_done_mid_nour');
      expect(r.who, CharacterVoice.nour);
      expect(await CompanionService.react('a', CompanionMoment.activityDone, eventId: 'game:g', age: 4, speak: false), isNull);
      expect(await CompanionService.react('a', CompanionMoment.greet, age: 2, speak: false), isNotNull);
      await CompanionStore.setEnabled(false);
      expect(await CompanionService.react('a', CompanionMoment.greet, speak: false), isNull);
    });

    test('damaged storage leaves the companion quiet instead of crashing', () async {
      SharedPreferences.setMockInitialValues({'companion_state': '{{not json'});
      expect(await CompanionStore.who('a'), CharacterVoice.adam);
      expect(await CompanionService.react('a', CompanionMoment.greet, speak: false), isNotNull);
    });
  });

  group('card', () {
    const kid = ChildProfile(id: 'k1', nickname: 'L', age: 3);
    Future<void> show(WidgetTester t, {String lang = 'ar', Size size = const Size(360, 640), double text = 1}) async {
      t.view.physicalSize = size;
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      await AppLocale.instance.set(lang);
      await t.pumpWidget(MaterialApp(
        key: UniqueKey(),
        builder: (c, w) => MediaQuery(data: MediaQuery.of(c).copyWith(textScaler: TextScaler.linear(text)), child: w!),
        home: const Scaffold(body: SingleChildScrollView(child: CompanionCard(child: kid))),
      ));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 150)));
      await t.pump();
    }

    testWidgets('shows a written greeting, switches character and talks on tap, in Arabic', (t) async {
      await show(t);
      expect(find.byKey(const ValueKey('companion_bubble')), findsOneWidget);
      expect(find.text('أهلاً بيك! نلعب إيه النهاردة؟'), findsOneWidget);
      await t.tap(find.byKey(const ValueKey('pick_nour')));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 150)));
      await t.pump();
      expect(await CompanionStore.who('k1'), CharacterVoice.nour);
      expect(find.text('أهلاً! تعالى نختار لعبة حلوة.'), findsOneWidget);
      await t.tap(find.byKey(const ValueKey('companion_bubble')));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 150)));
      await t.pump();
      expect(find.text('إيه رأيك نلعب لعبة؟'), findsNothing); // age 3 hears the young tap line
      expect(find.text('أنا هنا! يلا نلعب سوا.'), findsOneWidget);
    });

    testWidgets('English, large text, small phone and landscape do not overflow', (t) async {
      for (final size in [const Size(320, 568), const Size(844, 390)]) {
        await show(t, lang: 'en', size: size, text: 1.6);
        expect(find.text('Hi there! What shall we play today?'), findsOneWidget);
        expect(t.takeException(), isNull);
      }
    });

    testWidgets('is hidden when the parent switched the companion off', (t) async {
      await CompanionStore.setEnabled(false);
      await show(t);
      expect(find.byKey(const ValueKey('companion_card')), findsNothing);
    });

    testWidgets('exposes a readable label for screen readers', (t) async {
      final h = t.ensureSemantics();
      await show(t, lang: 'en');
      expect(find.bySemanticsLabel(RegExp('Tap to talk with Adam')), findsOneWidget);
      expect(find.bySemanticsLabel(RegExp('Adam: Hi there')), findsOneWidget);
      h.dispose();
    });
  });
}
