import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/family/family_models.dart';
import 'package:kids_app/family/family_repository.dart';
import 'package:kids_app/family/family_screens.dart';
import 'package:kids_app/family/memory_family_repository.dart';
import 'package:kids_app/family/outbox.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'family_link.dart';

const _kid = ChildProfile(id: 'c1', nickname: 'Lina', age: 5);

void main() {
  late FakeFamilyServer server;
  late FakeFamilyRepository parent;
  final box = FamilyOutbox.instance;

  setUp(() async {
    AppLocale.instance.set('en');
    SharedPreferences.setMockInitialValues({});
    FlutterSecureStorage.setMockInitialValues({});
    box.resetForTest();
    server = FakeFamilyServer();
    parent = FakeFamilyRepository(server, 'p1');
    await linkRelative(parent, 'g1');
    await parent.setRelativeStatus('g1', kRelativeActive);
  });

  Future<OutboxItem> queue(String body, {String kind = kindText, DateTime? now}) => box.enqueue(
        familyId: 'p1',
        childId: 'c1',
        childName: 'Lina',
        relUid: 'g1',
        from: Side.child,
        kind: kind,
        body: body,
        now: now,
      );

  group('queue', () {
    test('a message written offline is stored on the device and survives the app being closed', () async {
      server.offline = true;
      await queue('hello');
      await box.flush(parent);
      expect(server.messages['p1'] ?? [], isEmpty);
      box.resetForTest(); // "the app is closed and opened again": the memory is gone, the storage is not
      final again = await box.all();
      expect(again.single.body, 'hello');
      expect(again.single.attempts, 1); // one try failed, it is still waiting
      expect(again.single.failed, isFalse);
    });

    test('when the internet is back, waiting messages are sent in the order they were written, once each', () async {
      server.offline = true;
      await queue('one');
      await queue('two');
      await queue('three');
      expect(await box.flush(parent), 0);
      expect(await box.count(), 3);
      server.offline = false;
      expect(await box.flush(parent), 3);
      expect([for (final m in server.messages['p1']!) m.body], ['one', 'two', 'three']);
      expect(await box.count(), 0);
    });

    test('a failed try stops at the first message, so the order is kept', () async {
      server.offline = true;
      await queue('a');
      await queue('b');
      await box.flush(parent);
      final items = await box.all();
      expect(items[0].attempts, 1);
      expect(items[1].attempts, 0); // not even tried: the first one already showed there is no connection
    });
  });

  group('no duplicates', () {
    test('sending the same message id twice (a lost answer) writes only one message', () async {
      final item = await queue('once');
      for (var i = 0; i < 3; i++) {
        await parent.send(familyId: 'p1', childId: 'c1', childName: 'Lina', relUid: 'g1', from: Side.child, kind: kindText, body: 'once', clientId: item.id);
      }
      expect(server.messages['p1']!.length, 1);
      expect(server.messages['p1']!.single.id, item.id);
    });

    test('flushing again after everything was sent sends nothing more', () async {
      await queue('x');
      expect(await box.flush(parent), 1);
      expect(await box.flush(parent), 0);
      expect(server.messages['p1']!.length, 1);
    });

    test('two flushes at the same moment send each message once', () async {
      await queue('x');
      await queue('y');
      final r = await Future.wait([box.flush(parent), box.flush(parent)]);
      expect(r.reduce((a, b) => a + b), 2);
      expect(server.messages['p1']!.length, 2);
    });

    test('a message that already reached the server but is still in the queue (app killed before it was removed) is not doubled', () async {
      final item = await queue('crash');
      // The server got it, the removal from the queue never happened:
      await parent.send(familyId: 'p1', childId: 'c1', childName: 'Lina', relUid: 'g1', from: Side.child, kind: kindText, body: 'crash', clientId: item.id);
      box.resetForTest();
      expect(await box.flush(parent), 1);
      expect(server.messages['p1']!.where((m) => m.body == 'crash').length, 1);
      expect(await box.count(), 0);
    });
  });

  group('retry and refusal', () {
    test('a message the server refuses for good is marked "not sent", the next one is still sent, and Try again puts it back', () async {
      await queue('refused');
      await box.enqueue(familyId: 'p1', childId: 'c1', childName: 'Lina', relUid: 'g1', from: Side.child, kind: kindText, body: 'fine');
      await parent.setRelativeStatus('g1', 'paused'); // the parent paused this relative: sending is refused
      await box.flush(parent);
      var items = await box.all();
      expect(items.every((i) => i.failed), isTrue);
      await parent.setRelativeStatus('g1', kRelativeActive);
      await box.retry(items.first.id);
      expect(await box.flush(parent), 1);
      items = await box.all();
      expect(items.length, 1); // the other one is still marked failed until retried or deleted
      expect(items.single.failed, isTrue);
      await box.discard(items.single.id);
      expect(await box.count(), 0);
      expect(server.messages['p1']!.single.body, 'refused');
    });

    test('a message older than a week is not sent any more', () async {
      final old = DateTime.now().subtract(const Duration(days: 8));
      await queue('stale', now: old);
      expect(await box.flush(parent), 0);
      final item = (await box.all()).single;
      expect(item.failed, isTrue);
      expect(server.messages['p1'] ?? [], isEmpty);
    });
  });

  group('limits', () {
    test('bad messages and voice messages are not queued; the queue has a limit', () async {
      expect(() => queue('see https://x.y'), throwsA(isA<FamilyException>()));
      expect(() => queue(''), throwsA(isA<FamilyException>()));
      expect(() => queue('v', kind: kindVoice), throwsA(isA<FamilyException>()));
      for (var i = 0; i < FamilyOutbox.maxItems; i++) {
        await queue('m$i');
      }
      expect(() => queue('one too many'), throwsA(isA<FamilyException>()));
    });

    test("deleting one child's data removes that child's waiting messages only", () async {
      await queue('mine');
      await box.enqueue(familyId: 'p1', childId: 'c2', childName: 'Omar', relUid: 'g1', from: Side.child, kind: kindText, body: 'other');
      await box.removeForChild('c1');
      expect((await box.all()).map((i) => i.childId), ['c2']);
    });

    test('damaged storage does not crash: the queue is just empty', () async {
      SharedPreferences.setMockInitialValues({'family_outbox': '{not json'});
      box.resetForTest();
      expect(await box.all(), isEmpty);
    });
  });

  group('chat screen', () {
    Future<void> settle(WidgetTester t) async {
      for (var i = 0; i < 3; i++) {
        await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 30)));
        await t.pump(const Duration(milliseconds: 200));
      }
    }

    testWidgets('offline: the message shows "Waiting to send"; online: it goes once and the waiting label goes away', (t) async {
      t.view.physicalSize = const Size(900, 1800);
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      final store = JourneyStore(LocalJourneyRepository());
      await store.load();
      await store.addProfile(_kid);
      JourneyStore.instance = store;
      server.offline = true;
      await t.pumpWidget(MaterialApp(key: UniqueKey(), home: ChatScreen(repo: parent, familyId: 'p1', childId: 'c1', childName: 'Lina', relUid: 'g1', as: Side.child, title: 'Grandmother')));
      await settle(t);
      final first = phrasesFor(DateTime.now()).first;
      await t.tap(find.byKey(ValueKey('phrase_$first')));
      await settle(t);
      expect(find.byKey(const ValueKey('waiting_label')), findsOneWidget);
      expect(find.byKey(const ValueKey('chat_error')), findsNothing); // being offline is not an error for the child
      expect(server.messages['p1'] ?? [], isEmpty);

      server.offline = false;
      await t.pump(const Duration(seconds: 16)); // the screen tries again by itself
      await settle(t);
      expect(find.byKey(const ValueKey('waiting_label')), findsNothing);
      expect(server.messages['p1']!.length, 1);
      expect(await box.count(), 0);

      // Pressing the same phrase again is a new message, not a duplicate of the first.
      await t.tap(find.byKey(ValueKey('phrase_$first')));
      await settle(t);
      expect(server.messages['p1']!.length, 2);
    });
  });
}
