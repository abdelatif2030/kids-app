import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_test/flutter_test.dart';
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
    grandma = FakeFamilyRepository(server, 'g1');
  });

  void big(WidgetTester t) {
    t.view.physicalSize = const Size(900, 1800);
    t.view.devicePixelRatio = 1;
    addTearDown(t.view.reset);
  }

  testWidgets('parent invites a relative, approves them, and sees the status change', (t) async {
    big(t);
    await t.pumpWidget(_app(FamilyParentScreen(repo: parent, parentName: 'Sara')));
    await _settle(t);
    expect(find.text('No relatives yet'), findsOneWidget);

    await t.tap(find.byKey(const ValueKey('invite_relative')));
    await t.pumpAndSettle();
    await t.tap(find.byKey(const ValueKey('make_code')));
    await t.pump();
    expect(find.text('Choose at least one child'), findsOneWidget); // a code needs a child
    await t.tap(find.byKey(const ValueKey('invite_child_c1')));
    await t.tap(find.byKey(const ValueKey('make_code')));
    await _settle(t);
    final code = (t.widget(find.byKey(const ValueKey('invite_code'))) as SelectableText).data!;
    await t.tap(find.text('Done'));
    await _settle(t);

    await grandma.joinWithCode(code, name: 'Nana');
    await t.pumpWidget(_app(FamilyParentScreen(repo: parent, parentName: 'Sara')));
    await _settle(t);
    expect(find.text('Waiting for your approval'), findsOneWidget);
    await t.tap(find.byKey(const ValueKey('approve')));
    await _settle(t);
    expect(find.text('Active'), findsOneWidget);
    await t.tap(find.byKey(const ValueKey('pause')));
    await _settle(t);
    expect(find.text('Paused'), findsOneWidget);
  });

  testWidgets('removing a relative asks first', (t) async {
    big(t);
    final inv = await parent.createInvite(parentName: 'Sara', relation: 'grandma', children: {'c1': 'Lina'});
    await grandma.joinWithCode(inv.code, name: 'Nana');
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
    final inv = await parent.createInvite(parentName: 'Sara', relation: 'grandma', children: {'c1': 'Lina'});
    await grandma.joinWithCode(inv.code, name: 'Nana');
    await parent.setRelativeStatus('g1', kRelativeActive);
  }

  testWidgets('the child sends a phrase and a sticker; no typing box while typing is off', (t) async {
    big(t);
    await linked();
    await t.pumpWidget(_app(ChatScreen(repo: parent, familyId: 'p1', childId: 'c1', childName: 'Lina', relUid: 'g1', as: Side.child, title: 'Grandmother')));
    await _settle(t);
    expect(find.byKey(const ValueKey('chat_text')), findsNothing);
    await t.tap(find.byKey(const ValueKey('phrase_p_love')));
    await _settle(t);
    await t.tap(find.byKey(const ValueKey('sticker_🎉')));
    await _settle(t);
    expect(find.text('I love you ❤'), findsNWidgets(2)); // the chip and the message in the chat
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

  testWidgets('the relative joins with a code and waits; a wrong code shows a message', (t) async {
    big(t);
    final inv = await parent.createInvite(parentName: 'Sara', relation: 'grandma', children: {'c1': 'Lina'});
    await t.pumpWidget(_app(RelativeHomeScreen(repo: grandma, name: 'Nana')));
    await _settle(t);
    await t.enterText(find.byKey(const ValueKey('join_code')), 'WRONG');
    await t.tap(find.byKey(const ValueKey('join')));
    await _settle(t);
    expect(find.byKey(const ValueKey('join_error')), findsOneWidget);
    await t.enterText(find.byKey(const ValueKey('join_code')), inv.code);
    await t.tap(find.byKey(const ValueKey('join')));
    await _settle(t);
    expect(find.byKey(const ValueKey('waiting')), findsOneWidget);
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
