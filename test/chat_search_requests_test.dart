import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/design/rehlaty_heart.dart';
import 'package:kids_app/family/contact_search.dart';
import 'package:kids_app/family/family_models.dart';
import 'package:kids_app/family/family_repository.dart';
import 'package:kids_app/family/family_screens.dart';
import 'package:kids_app/family/memory_family_repository.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:shared_preferences/shared_preferences.dart';

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
    grandma = FakeFamilyRepository(server, 'g1', username: 'Um_Nana');
  });

  void big(WidgetTester t) {
    t.view.physicalSize = const Size(900, 1800);
    t.view.devicePixelRatio = 1;
    addTearDown(t.view.reset);
  }

  group('search text', () {
    test('Arabic letter variants and diacritics match', () {
      expect(normalizeSearch('أَحمد'), normalizeSearch('احمد'));
      expect(normalizeSearch('  Nana  '), 'nana');
    });
    test('matches by name or relation, every word, empty matches all', () {
      const r = Relative(uid: 'g1', name: 'Um Nana', relation: 'grandma', status: 'active');
      expect(relativeMatches(r, ''), isTrue);
      expect(relativeMatches(r, 'nan'), isTrue);
      expect(relativeMatches(r, 'um na'), isTrue);
      expect(relativeMatches(r, 'zed'), isFalse);
    });
  });

  group('requests', () {
    test('a second pending request to the same person is refused', () async {
      await parent.sendConnectRequest(parentName: 'Sara', toName: 'um_nana', relation: 'grandma', children: {'c1': 'Lina'});
      expect(
        () => parent.sendConnectRequest(parentName: 'Sara', toName: 'Um_Nana', relation: 'grandma', children: {'c1': 'Lina'}),
        throwsA(isA<FamilyException>()),
      );
      expect((await parent.requestHistory()).length, 1);
    });

    test('pending -> accepted; then a new request to an active relative is refused', () async {
      final r = await parent.sendConnectRequest(parentName: 'Sara', toName: 'um_nana', relation: 'grandma', children: {'c1': 'Lina'});
      expect((await parent.requestHistory()).single.status, kRequestPending);
      await grandma.respondToRequest(r, accept: true, name: 'Nana');
      expect((await parent.requestHistory()).single.status, kRequestAccepted);
      expect(
        () => parent.sendConnectRequest(parentName: 'Sara', toName: 'um_nana', relation: 'grandma', children: {'c1': 'Lina'}),
        throwsA(isA<FamilyException>()),
      );
    });

    test('declined keeps no relative, and the parent may ask again', () async {
      final r = await parent.sendConnectRequest(parentName: 'Sara', toName: 'um_nana', relation: 'grandma', children: {'c1': 'Lina'});
      await grandma.respondToRequest(r, accept: false, name: 'Nana');
      expect((await parent.requestHistory()).single.status, kRequestDeclined);
      expect(await parent.relatives(), isEmpty);
      await parent.sendConnectRequest(parentName: 'Sara', toName: 'um_nana', relation: 'grandma', children: {'c1': 'Lina'});
      expect((await parent.requestHistory()).length, 2);
    });

    test('offline: sending and reading history say so', () async {
      server.offline = true;
      await expectLater(
        parent.sendConnectRequest(parentName: 'Sara', toName: 'um_nana', relation: 'grandma', children: {'c1': 'Lina'}),
        throwsA(isA<FamilyException>().having((e) => e.offline, 'offline', true)),
      );
      await expectLater(parent.requestHistory(), throwsA(isA<FamilyException>()));
    });

    test('no message before the request is accepted', () async {
      await parent.sendConnectRequest(parentName: 'Sara', toName: 'um_nana', relation: 'grandma', children: {'c1': 'Lina'});
      await expectLater(
        parent.send(familyId: 'p1', childId: 'c1', childName: 'Lina', relUid: 'g1', from: Side.child, kind: 'phrase', body: 'p_hello'),
        throwsA(isA<FamilyException>()),
      );
    });
  });

  group('screens', () {
    testWidgets('parent: statuses show, search filters, and an unknown user name offers a request', (t) async {
      big(t);
      final r = await parent.sendConnectRequest(parentName: 'Sara', toName: 'um_nana', relation: 'grandma', children: {'c1': 'Lina'});
      await grandma.respondToRequest(r, accept: true, name: 'Nana');
      await t.pumpWidget(_app(FamilyParentScreen(repo: parent, parentName: 'Sara')));
      await _settle(t);
      expect(find.byKey(const ValueKey('status_accepted')), findsOneWidget);
      expect(find.byKey(const ValueKey('contact_search')), findsOneWidget);

      await t.enterText(find.byKey(const ValueKey('contact_search')), 'nana');
      await t.pump();
      expect(find.byKey(ValueKey('rel_${'g1'}')), findsOneWidget);

      await t.enterText(find.byKey(const ValueKey('contact_search')), 'stranger_x');
      await t.pump();
      expect(find.byKey(const ValueKey('rel_g1')), findsNothing);
      expect(find.text('Nobody in your family has this name'), findsOneWidget);
      await t.ensureVisible(find.byKey(const ValueKey('request_from_search')));
      await t.tap(find.byKey(const ValueKey('request_from_search')));
      await t.pumpAndSettle();
      expect(find.byKey(const ValueKey('request_username')), findsOneWidget);
    });

    testWidgets('child: the search shows only approved contacts and an empty state otherwise', (t) async {
      big(t);
      final r = await parent.sendConnectRequest(parentName: 'Sara', toName: 'um_nana', relation: 'grandma', children: {'c1': 'Lina'});
      await grandma.respondToRequest(r, accept: true, name: 'Nana');
      await t.pumpWidget(_app(ChildFamilyScreen(repo: parent, familyId: 'p1', childId: 'c1', childName: 'Lina')));
      await _settle(t);
      expect(find.byKey(const ValueKey('talk_g1')), findsOneWidget);
      await t.enterText(find.byKey(const ValueKey('contact_search')), 'zzz');
      await t.pump();
      expect(find.byKey(const ValueKey('talk_g1')), findsNothing);
      expect(find.text('Only people your parent approved appear here.'), findsOneWidget);
      await t.tap(find.byKey(const ValueKey('contact_search_clear')));
      await t.pump();
      expect(find.byKey(const ValueKey('talk_g1')), findsOneWidget);
    });
  });

  testWidgets('the 3D heart paints filled and outline at small and large sizes', (t) async {
    await t.pumpWidget(MaterialApp(home: Row(children: const [RehlatyHeart(size: 16), RehlatyHeart(size: 64), RehlatyHeart(size: 24, filled: false)])));
    expect(tester(t), isNull);
  });
}

Object? tester(WidgetTester t) => t.takeException();
