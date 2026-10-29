import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:http/http.dart' as http;
import 'package:http/testing.dart';
import 'package:kids_app/assistant/ai_advisor.dart';
import 'package:kids_app/assistant/assistant_screen.dart';
import 'package:kids_app/assistant/planner.dart';
import 'package:kids_app/data_reset.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:kids_app/main.dart' show Video;
import 'package:shared_preferences/shared_preferences.dart';

Video v(String id, String subject) => Video(youtubeId: id, title: 'T-$id', category: 'Learning', minAge: 1, maxAge: 12, language: 'ar', subject: subject);
final videos = [v('a1', 'arabic'), v('m1', 'math'), v('s1', 'stories')];

ParentIntake intake({String note = '', Set<String> needs = const {}}) =>
    ParentIntake(age: 5, nickname: 'ليلى', loves: const {'stories'}, needsHelp: needs, traits: const {'shy'}, minutesPerDay: 20, note: note);

class FakeTransport implements AiTransport {
  String answer;
  Object? error;
  AiRequest? last;
  final bool isConfigured;
  FakeTransport(this.answer, {this.error, this.isConfigured = true});
  @override
  bool get configured => isConfigured;
  @override
  Future<String> complete(AiRequest r) async {
    last = r;
    if (error != null) throw error!;
    return answer;
  }
}

String goodAnswer([Map<String, dynamic>? plan]) => jsonEncode({
      'plans': [
        plan ?? {'title': 'خطة', 'summary': 'ملخص', 'reasons': ['سبب'], 'lands': ['letters', 'stories'], 'dailyCount': 3, 'bias': 0, 'subjects': {'arabic': 3}},
      ],
    });

void main() {
  setUp(() {
    SharedPreferences.setMockInitialValues({});
    AppLocale.instance.set('en');
  });

  group('privacy of what is sent', () {
    test('e-mails, links, handles, phone numbers and the child\'s name are removed from the note', () {
      final t = cleanNoteForAi('ليلى loves drawing. mail me mum@example.com or call +20 100 123 4567, see https://x.com/a and @mum_1', childName: 'ليلى');
      expect(t, isNot(contains('@')));
      expect(t, isNot(contains('http')));
      expect(t, isNot(contains('ليلى')));
      expect(RegExp(r'\d{4}').hasMatch(t), isFalse);
      expect(t, contains('loves drawing'));
    });
    test('the note is capped', () => expect(cleanNoteForAi('a ' * 500).runes.length, lessThanOrEqualTo(kAiNoteMax)));
    test('the request has an age band and chosen areas, and NO name, id, photo or progress field', () {
      final j = buildAiRequest(intake(note: 'ليلى is shy')).toJson();
      expect(j['ageBand'], '5-6');
      final text = jsonEncode(j);
      expect(text, isNot(contains('ليلى')));
      for (final bad in ['nickname', 'name"', 'childId', 'photo', 'progress', 'age"']) {
        expect(text.contains(bad), isFalse, reason: bad);
      }
      expect(j.keys, containsAll(['ageBand', 'loves', 'needsHelp', 'traits', 'minutesPerDay', 'learnLang', 'note', 'allowedLands', 'allowedSubjects']));
    });
    test('age bands', () {
      expect([1, 3, 5, 8, 11].map(ageBandOf), ['1-2', '3-4', '5-6', '7-9', '10-12']);
    });
  });

  group('validating the answer', () {
    test('a good answer becomes a plan marked as AI, with whitelisted videos only', () {
      final p = parseAiPlans(goodAnswer(), intake(), videos).single;
      expect(p.fromAi, isTrue);
      expect(p.lands, ['letters', 'stories']);
      expect(p.videos.every(videos.contains), isTrue);
    });
    test('unknown lands and subjects are dropped, numbers are clamped, text is shortened', () {
      final p = parseAiPlans(
        goodAnswer({'title': 'x' * 300, 'summary': 'y' * 900, 'reasons': ['z' * 500], 'lands': ['letters', 'hack', 'letters'], 'dailyCount': 99, 'bias': -9, 'subjects': {'math': 50, 'evil': 3}}),
        intake(),
        videos,
      ).single;
      expect(p.lands, ['letters']);
      expect(p.dailyCount, 5);
      expect(p.bias, -1);
      expect(p.weeklyTargets, {'math': 7});
      expect(p.title.length, lessThan(100));
      expect(p.summary.length, lessThanOrEqualTo(220));
      expect(p.reasons.single.length, lessThanOrEqualTo(160));
    });
    test('a plan whose lands are all invalid, non-JSON and wrong shapes give nothing (never a crash)', () {
      expect(parseAiPlans(goodAnswer({'title': 't', 'lands': ['nope']}), intake(), videos), isEmpty);
      expect(parseAiPlans('not json', intake(), videos), isEmpty);
      expect(parseAiPlans('[]', intake(), videos), isEmpty);
      expect(parseAiPlans('{"plans":"x"}', intake(), videos), isEmpty);
      expect(parseAiPlans('{"plans":[1,"a",null]}', intake(), videos), isEmpty);
    });
    test('lands that do not fit the age are dropped', () {
      final p = parseAiPlans(jsonEncode({'plans': [{'title': 't', 'lands': ['english', 'letters']}]}), ParentIntake(age: 2, nickname: 'x', learnLang: 'ar'), videos).single;
      expect(p.lands, ['letters']);
    });
  });

  group('suggestWithAi', () {
    test('off by default: nothing is sent', () async {
      final t = FakeTransport(goodAnswer());
      await expectLater(suggestWithAi(intake(), videos, transport: t), throwsA(isA<AiException>().having((e) => e.problem, 'problem', AiProblem.notEnabled)));
      expect(t.last, isNull);
    });
    test('not configured -> reported, nothing sent', () async {
      final t = FakeTransport(goodAnswer(), isConfigured: false);
      await expectLater(suggestWithAi(intake(), videos, transport: t, enabled: true), throwsA(isA<AiException>().having((e) => e.problem, 'problem', AiProblem.notConfigured)));
    });
    test('network failure and bad answers are reported as such', () async {
      await expectLater(suggestWithAi(intake(), videos, transport: FakeTransport('', error: const AiException(AiProblem.offline)), enabled: true), throwsA(isA<AiException>()));
      await expectLater(suggestWithAi(intake(), videos, transport: FakeTransport('{}'), enabled: true), throwsA(isA<AiException>().having((e) => e.problem, 'problem', AiProblem.badAnswer)));
    });
    test('success sends only the sanitized request', () async {
      final t = FakeTransport(goodAnswer());
      final plans = await suggestWithAi(intake(note: 'ليلى loves art, mum@x.com'), videos, transport: t, enabled: true);
      expect(plans, isNotEmpty);
      expect(jsonEncode(t.last!.toJson()), isNot(contains('mum@x.com')));
      expect(jsonEncode(t.last!.toJson()), isNot(contains('ليلى')));
    });
  });

  group('http transport', () {
    test('only an https address with a host counts as configured; none is configured by default', () {
      expect(HttpAiTransport(endpointUrl: '').configured, isFalse);
      expect(HttpAiTransport(endpointUrl: 'http://example.com/x').configured, isFalse);
      expect(HttpAiTransport(endpointUrl: 'https://example.com/plan').configured, isTrue);
      expect(kAiEndpoint, isEmpty);
    });
    test('posts JSON, and maps errors to "offline"', () async {
      late http.Request seen;
      final ok = HttpAiTransport(endpointUrl: 'https://example.com/plan', client: () => MockClient((r) async {
            seen = r;
            return http.Response.bytes(utf8.encode(goodAnswer()), 200);
          }));
      expect(await ok.complete(buildAiRequest(intake())), contains('plans'));
      expect(seen.method, 'POST');
      expect(seen.headers['content-type'], contains('application/json'));
      final bad = HttpAiTransport(endpointUrl: 'https://example.com/plan', client: () => MockClient((r) async => http.Response('x', 500)));
      await expectLater(bad.complete(buildAiRequest(intake())), throwsA(isA<AiException>()));
      final down = HttpAiTransport(endpointUrl: 'https://example.com/plan', client: () => MockClient((r) async => throw Exception('no network')));
      await expectLater(down.complete(buildAiRequest(intake())), throwsA(isA<AiException>().having((e) => e.problem, 'problem', AiProblem.offline)));
      await expectLater(HttpAiTransport(endpointUrl: '').complete(buildAiRequest(intake())), throwsA(isA<AiException>().having((e) => e.problem, 'problem', AiProblem.notConfigured)));
    });
  });

  test('consent is off by default, can be turned on and off, and "delete data" clears it', () async {
    expect(await AiConsent.isOn(), isFalse);
    await AiConsent.set(true);
    expect(await AiConsent.isOn(), isTrue);
    await deleteChildData();
    expect(await AiConsent.isOn(), isFalse);
  });

  group('screen', () {
    final child = ChildProfile(id: 'c1', nickname: 'ليلى', age: 5);
    Future<void> open(WidgetTester t, AiTransport transport) async {
      t.view.physicalSize = const Size(600, 1400);
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      final store = JourneyStore(LocalJourneyRepository());
      await t.runAsync(store.load);
      await t.runAsync(() => store.addProfile(child));
      JourneyStore.instance = store;
      await t.pumpWidget(MaterialApp(key: UniqueKey(), home: PlanAssistantScreen(child: child, loadVideosFn: () async => videos, aiTransport: transport)));
      await t.pump(const Duration(milliseconds: 500));
    }

    Future<void> scrollTo(WidgetTester t, String key) async {
      await t.scrollUntilVisible(find.byKey(ValueKey(key)), 300, scrollable: find.byType(Scrollable).first);
      await t.ensureVisible(find.byKey(ValueKey(key)));
      await t.pump();
    }

    testWidgets('not set up: the switch is disabled and says why', (t) async {
      await open(t, FakeTransport('', isConfigured: false));
      await scrollTo(t, 'ai_switch');
      expect(t.widget<SwitchListTile>(find.byKey(const ValueKey('ai_switch'))).onChanged, isNull);
      expect(find.textContaining('Not set up yet'), findsOneWidget);
    });

    testWidgets('turning it on shows exactly what is sent; saying no keeps it off', (t) async {
      await open(t, FakeTransport(goodAnswer()));
      await scrollTo(t, 'ai_switch');
      await t.tap(find.byKey(const ValueKey('ai_switch')));
      await t.pumpAndSettle();
      expect(find.byKey(const ValueKey('ai_consent')), findsOneWidget);
      expect(find.textContaining('Never sent'), findsOneWidget);
      await t.tap(find.text('No'));
      await t.pumpAndSettle();
      expect(await t.runAsync(AiConsent.isOn), isFalse);
    });

    testWidgets('after agreeing, plans include an AI suggestion labelled as such; a failing service falls back with a message', (t) async {
      final good = FakeTransport(goodAnswer());
      await open(t, good);
      await scrollTo(t, 'ai_switch');
      await t.tap(find.byKey(const ValueKey('ai_switch')));
      await t.pumpAndSettle();
      await t.tap(find.byKey(const ValueKey('ai_agree')));
      await t.pumpAndSettle();
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 30)));
      await scrollTo(t, 'prepare');
      await t.tap(find.byKey(const ValueKey('prepare')));
      await t.pump();
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 30)));
      await t.pump(const Duration(milliseconds: 800));
      expect(good.last, isNotNull);
      await scrollTo(t, 'plan_ai1');
      expect(find.byKey(const ValueKey('plan_ai1')), findsOneWidget);
      expect(find.textContaining('AI suggestion'), findsWidgets);
      expect(find.byKey(const ValueKey('plan_balanced')), findsOneWidget); // the normal plans are still there
    });

    testWidgets('a failing service shows the message and still shows the normal plans', (t) async {
      SharedPreferences.setMockInitialValues({'ai_assistant_enabled': true});
      await open(t, FakeTransport('', error: const AiException(AiProblem.offline)));
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 30)));
      await t.pump();
      await scrollTo(t, 'prepare');
      await t.tap(find.byKey(const ValueKey('prepare')));
      await t.pump();
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 30)));
      await t.pump(const Duration(milliseconds: 800));
      await scrollTo(t, 'ai_message');
      expect(find.byKey(const ValueKey('ai_message')), findsOneWidget);
      await scrollTo(t, 'plan_balanced');
      expect(find.byKey(const ValueKey('plan_balanced')), findsOneWidget);
    });
  });
}
