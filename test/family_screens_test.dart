import 'package:flutter/material.dart';
import 'family_link.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/family/family_bubble.dart';
import 'package:kids_app/family/family_models.dart';
import 'package:kids_app/firebase_config.dart';
import 'package:kids_app/journey/ui/start_screen.dart';
import 'package:kids_app/family/family_prefs.dart';
import 'package:kids_app/family/family_screens.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'package:kids_app/family/memory_family_repository.dart';

const _kid = ChildProfile(id: 'c1', nickname: 'Lina', age: 5);

Widget _app(Widget w) => MaterialApp(key: UniqueKey(), home: w);

Future<void> _settle(WidgetTester t) async {
  for (var i = 0; i < 3; i++) {
    await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 30)));
    await t.pump(const Duration(milliseconds: 200));
  }
}

void main() {
  late FakeFamilyServer server;
  late FakeFamilyRepository parent, grandma;

  setUp(() async {
    AppLocale.instance.set('en');
    SharedPreferences.setMockInitialValues({});
    FlutterSecureStorage.setMockInitialValues({});
    final store = JourneyStore(LocalJourneyRepository());
    await store.load();
    await store.addProfile(_kid);
    JourneyStore.instance = store;
    server = FakeFamilyServer();
    parent = FakeFamilyRepository(server, 'p1');
    grandma = FakeFamilyRepository(server, 'g1', email: 'Nana@Test.com');
  });

  void big(WidgetTester t) {
    t.view.physicalSize = const Size(900, 1800);
    t.view.devicePixelRatio = 1;
    addTearDown(t.view.reset);
  }

  testWidgets('the parent sends a request by e-mail; the relative accepts and is active at once', (t) async {
    big(t);
    await t.pumpWidget(_app(FamilyParentScreen(repo: parent, parentName: 'Sara')));
    await _settle(t);
    expect(find.text('No relatives yet'), findsOneWidget);

    await t.tap(find.byKey(const ValueKey('invite_relative')));
    await t.pumpAndSettle();
    await t.tap(find.byKey(const ValueKey('send_request')));
    await t.pump();
    expect(find.byKey(const ValueKey('request_error')), findsOneWidget); // no e-mail yet
    await t.enterText(find.byKey(const ValueKey('request_email')), 'nana@test.com');
    await t.tap(find.byKey(const ValueKey('send_request')));
    await t.pump();
    expect(find.text('Choose at least one child'), findsOneWidget);
    await t.tap(find.byKey(const ValueKey('invite_child_c1')));
    await t.tap(find.byKey(const ValueKey('send_request')));
    await _settle(t);
    expect(find.textContaining('Request sent'), findsOneWidget);
    expect(find.text('nana@test.com'), findsOneWidget); // waiting for an answer

    // the person answers in their own app
    final incoming = await t.runAsync(() => grandma.watchIncomingRequests().first);
    expect(incoming!.single.parentName, 'Sara');
    await t.runAsync(() => grandma.respondToRequest(incoming.single, accept: true, name: 'Nana'));
    await t.pumpWidget(_app(FamilyParentScreen(repo: parent, parentName: 'Sara')));
    await _settle(t);
    expect(find.text('Active'), findsOneWidget);
    expect(find.byKey(const ValueKey('approve')), findsNothing); // no second approval is needed
    await t.tap(find.byKey(const ValueKey('pause')));
    await _settle(t);
    expect(find.text('Paused'), findsOneWidget);
  });

  testWidgets('the parent can cancel a request that has not been answered', (t) async {
    big(t);
    await parent.sendConnectRequest(parentName: 'Sara', toEmail: 'nana@test.com', relation: 'grandma', children: {'c1': 'Lina'});
    await t.pumpWidget(_app(FamilyParentScreen(repo: parent, parentName: 'Sara')));
    await _settle(t);
    final id = server.requests.keys.single;
    await t.tap(find.byKey(ValueKey('cancel_$id')));
    await _settle(t);
    expect(find.byKey(ValueKey('sent_$id')), findsNothing);
    expect(await t.runAsync(() => grandma.watchIncomingRequests().first), isEmpty);
  });

  testWidgets('removing a relative asks first', (t) async {
    big(t);
    await linkRelative(parent, 'g1');
    await t.pumpWidget(_app(FamilyParentScreen(repo: parent, parentName: 'Sara')));
    await _settle(t);
    await t.tap(find.byKey(const ValueKey('remove')));
    await t.pumpAndSettle();
    await t.tap(find.text('Cancel'));
    await t.pumpAndSettle();
    expect(find.byKey(const ValueKey('rel_g1')), findsOneWidget);
    await t.tap(find.byKey(const ValueKey('remove')));
    await t.pumpAndSettle();
    await t.tap(find.byKey(const ValueKey('confirm_remove')));
    await _settle(t);
    expect(find.byKey(const ValueKey('rel_g1')), findsNothing);
  });

  testWidgets('chat is off for every child until the parent turns it on; typing is a second switch', (t) async {
    big(t);
    expect((await FamilyPrefs.of('c1')).chatOn, false);
    await t.pumpWidget(_app(FamilyParentScreen(repo: parent, parentName: 'Sara')));
    await _settle(t);
    expect(find.byKey(const ValueKey('text_on_c1')), findsNothing);
    await t.tap(find.byKey(const ValueKey('chat_on_c1')));
    await _settle(t);
    expect(find.byKey(const ValueKey('text_on_c1')), findsOneWidget);
    expect((await t.runAsync(() => FamilyPrefs.of('c1')))!.textOn, false);
  });

  Future<void> linked() async {
    await linkRelative(parent, 'g1');
    await parent.setRelativeStatus('g1', kRelativeActive);
  }

  testWidgets('the child sends a phrase and a sticker; no typing box while typing is off', (t) async {
    big(t);
    await linked();
    await t.pumpWidget(_app(ChatScreen(repo: parent, familyId: 'p1', childId: 'c1', childName: 'Lina', relUid: 'g1', as: Side.child, title: 'Grandmother')));
    await _settle(t);
    expect(find.byKey(const ValueKey('chat_text')), findsNothing);
    final first = phrasesFor(DateTime.now()).first; // the first chip is always on screen
    await t.tap(find.byKey(ValueKey('phrase_$first')));
    await _settle(t);
    await t.tap(find.byKey(const ValueKey('sticker_🎉')));
    await _settle(t);
    expect(find.text(phraseText(first)), findsWidgets); // the message in the chat (and the chip)
    expect(server.messages['p1']!.length, 2);
  });

  testWidgets('the relative can type, but links are refused with a reason and nothing is sent', (t) async {
    big(t);
    await linked();
    await t.pumpWidget(_app(ChatScreen(repo: grandma, familyId: 'p1', childId: 'c1', childName: 'Lina', relUid: 'g1', as: Side.relative, title: 'Lina')));
    await _settle(t);
    await t.enterText(find.byKey(const ValueKey('chat_text')), 'look at https://example.com');
    await t.tap(find.byKey(const ValueKey('chat_send')));
    await _settle(t);
    expect(find.byKey(const ValueKey('chat_error')), findsOneWidget);
    expect(server.messages['p1'] ?? [], isEmpty);
    await t.enterText(find.byKey(const ValueKey('chat_text')), 'Good night my star');
    await t.tap(find.byKey(const ValueKey('chat_send')));
    await _settle(t);
    expect(server.messages['p1']!.single.body, 'Good night my star');
  });

  testWidgets('the parent reads every conversation and can delete one', (t) async {
    big(t);
    await linked();
    await parent.send(familyId: 'p1', childId: 'c1', childName: 'Lina', relUid: 'g1', from: Side.child, kind: kindPhrase, body: 'p_miss');
    await t.pumpWidget(_app(ConversationsScreen(repo: parent)));
    await _settle(t);
    expect(find.textContaining('I miss you!'), findsOneWidget);
    await t.tap(find.byKey(const ValueKey('clear_c1__g1')));
    await _settle(t);
    expect(find.text('No messages yet'), findsOneWidget);
  });

  testWidgets('the relative sees the request in the app and accepts or declines', (t) async {
    big(t);
    final r1 = await parent.sendConnectRequest(parentName: 'Sara', toEmail: 'NANA@test.com', relation: 'grandma', children: {'c1': 'Lina'});
    await parent.sendConnectRequest(parentName: 'Other', toEmail: 'someone@else.com', relation: 'uncle', children: {'c9': 'X'});
    await t.pumpWidget(_app(RelativeHomeScreen(repo: grandma, name: 'Nana')));
    await _settle(t);
    expect(find.byKey(ValueKey('request_${r1.id}')), findsOneWidget);
    expect(find.textContaining('someone@else.com'), findsNothing); // only their own request
    expect(find.byType(Card), findsOneWidget);
    await t.tap(find.byKey(ValueKey('accept_request_${r1.id}')));
    await _settle(t);
    expect(find.byKey(ValueKey('request_${r1.id}')), findsNothing);
    expect((await t.runAsync(() => parent.relatives()))!.single.status, kRelativeActive);
    expect(find.byKey(const ValueKey('write_c1')), findsOneWidget); // can write to the child now
  });

  testWidgets('declining changes nothing else', (t) async {
    big(t);
    final r1 = await parent.sendConnectRequest(parentName: 'Sara', toEmail: 'nana@test.com', relation: 'grandma', children: {'c1': 'Lina'});
    await t.pumpWidget(_app(RelativeHomeScreen(repo: grandma, name: 'Nana')));
    await _settle(t);
    await t.tap(find.byKey(ValueKey('decline_request_${r1.id}')));
    await _settle(t);
    expect(await t.runAsync(() => parent.relatives()), isEmpty);
    expect(server.requests[r1.id]!.status, kRequestDeclined);
  });

  group('messenger-style button and contacts', () {
    Future<void> approvedWithMessages() async {
      await linked();
      await grandma.send(familyId: 'p1', childId: 'c1', childName: 'Lina', relUid: 'g1', from: Side.relative, kind: kindText, body: 'Hello my star');
      await grandma.send(familyId: 'p1', childId: 'c1', childName: 'Lina', relUid: 'g1', from: Side.relative, kind: kindSticker, body: '🎉');
    }

    testWidgets('the bubble is hidden until the parent turns chat on, then shows the number of new messages', (t) async {
      big(t);
      await approvedWithMessages();
      familyRepository = parent;
      addTearDown(() => familyRepository = null);
      await t.pumpWidget(_app(const Scaffold(body: Center(child: FamilyBubbleButton(child: _kid)))));
      await _settle(t);
      expect(find.byKey(const ValueKey('family_bubble')), findsNothing); // chat is off for this child

      await t.runAsync(() => FamilyPrefs.save('c1', const ChildChatPrefs(chatOn: true)));
      await t.pumpWidget(_app(const Scaffold(body: Center(child: FamilyBubbleButton(child: _kid)))));
      await _settle(t);
      expect(find.byKey(const ValueKey('family_bubble')), findsOneWidget);
      expect(find.descendant(of: find.byKey(const ValueKey('family_unread')), matching: find.text('2')), findsOneWidget);
      await t.pumpWidget(const SizedBox()); // stop its timer
    });

    testWidgets('the contacts list shows the last message and the unread count; opening the chat clears it', (t) async {
      big(t);
      await approvedWithMessages();
      await parent.setRelativeNextCall('g1', 'Friday 6 pm');
      await t.pumpWidget(_app(ChildFamilyScreen(repo: parent, familyId: 'p1', childId: 'c1', childName: 'Lina')));
      await _settle(t);
      expect(find.byKey(const ValueKey('unread_g1')), findsOneWidget);
      expect(find.text('🎉'), findsOneWidget); // the last message preview
      expect(find.byKey(const ValueKey('next_g1')), findsOneWidget);
      expect(find.textContaining('Friday 6 pm'), findsOneWidget);

      await t.tap(find.byKey(const ValueKey('talk_g1')));
      await _settle(t);
      await t.pageBack();
      await _settle(t);
      await _settle(t);
      expect(find.byKey(const ValueKey('unread_g1')), findsNothing);
    });

    test('phrases follow the time of day, and the win phrase is never offered unless it is true', () {
      expect(phrasesFor(DateTime(2026, 1, 1, 8)).first, 'p_goodmorning');
      expect(phrasesFor(DateTime(2026, 1, 1, 14)).first, 'p_howareyou');
      expect(phrasesFor(DateTime(2026, 1, 1, 21)).first, 'p_goodnight');
      expect(phrasesFor(DateTime(2026, 1, 1, 2)).first, 'p_goodnight');
      expect(phrasesFor(DateTime(2026, 1, 1, 9)), isNot(contains(kWinPhrase)));
      expect(phrasesFor(DateTime(2026, 1, 1, 9), includeWin: true), contains(kWinPhrase));
      for (final p in kPhrases) {
        expect(validateMessage(kindPhrase, p), isNull);
        expect(phraseText(p), isNotEmpty);
        expect(RegExp(r'^p_[a-z]+$').hasMatch(p), true, reason: '$p must match the server rule');
      }
    });

    testWidgets('the win phrase appears in the chat only when the child finished something today', (t) async {
      big(t);
      await linked();
      Future<void> open(bool win) async {
        await t.pumpWidget(_app(ChatScreen(repo: parent, familyId: 'p1', childId: 'c1', childName: 'Lina', relUid: 'g1', as: Side.child, title: 'x', canShareWin: win)));
        await _settle(t);
      }

      await open(false);
      expect(find.byKey(const ValueKey('phrase_p_win')), findsNothing);
      await open(true);
      await t.scrollUntilVisible(find.byKey(const ValueKey('phrase_p_win')), 200, scrollable: find.byType(Scrollable).last);
      expect(find.byKey(const ValueKey('phrase_p_win')), findsOneWidget);
    });

    testWidgets('the parent sets a next-call note; the relative sees it', (t) async {
      big(t);
      await linked();
      await t.pumpWidget(_app(FamilyParentScreen(repo: parent, parentName: 'Sara')));
      await _settle(t);
      await t.tap(find.byKey(const ValueKey('nextcall_g1')));
      await t.pumpAndSettle();
      await t.enterText(find.byKey(const ValueKey('nextcall_field')), 'Friday 6 pm');
      await t.tap(find.byKey(const ValueKey('nextcall_save')));
      await _settle(t);
      expect(find.text('Friday 6 pm'), findsOneWidget);

      await t.pumpWidget(_app(RelativeHomeScreen(repo: grandma, name: 'Nana')));
      await _settle(t);
      expect(find.byKey(const ValueKey('relative_next_call')), findsOneWidget);
    });
  });

  testWidgets('a relative with no child profile still finds the family door on the welcome screen', (t) async {
    big(t);
    SharedPreferences.setMockInitialValues({});
    final empty = JourneyStore(LocalJourneyRepository());
    await empty.load();
    JourneyStore.instance = empty;
    familyRepository = grandma;
    addTearDown(() => familyRepository = null);
    await t.pumpWidget(_app(const StartScreen()));
    await _settle(t);
    expect(find.byKey(const ValueKey('i_am_family_welcome')), findsOneWidget);
  });
}
