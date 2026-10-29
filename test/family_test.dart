import 'package:flutter_test/flutter_test.dart';
import 'family_link.dart';
import 'package:kids_app/family/family_models.dart';
import 'package:kids_app/family/family_repository.dart';
import 'package:kids_app/l10n/app_locale.dart';

import 'package:kids_app/family/memory_family_repository.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  setUp(() => AppLocale.instance.set('en'));

  group('message validation', () {
    test('phrases and stickers must come from the fixed lists', () {
      expect(validateMessage(kindPhrase, 'p_love'), isNull);
      expect(validateMessage(kindPhrase, 'anything else'), isNotNull);
      expect(validateMessage(kindSticker, '😀'), isNull);
      expect(validateMessage(kindSticker, '💣'), isNotNull);
    });

    test('text: not empty, not too long, no links, web addresses or e-mails', () {
      expect(validateMessage(kindText, 'Hi Grandma, see you soon'), isNull);
      expect(validateMessage(kindText, '   '), isNotNull);
      expect(validateMessage(kindText, 'x' * (kMaxTextLength + 1)), isNotNull);
      for (final bad in ['visit https://x.y', 'go to www.site', 'mail me a@b.c', 'site.com now', 'ftp://a']) {
        expect(validateMessage(kindText, bad), isNotNull, reason: bad);
      }
      expect(validateMessage('video', 'x'), isNotNull);
    });
  });

  group('family flow', () {
    late FakeFamilyServer server;
    late FakeFamilyRepository parent, grandma;

    Future<void> link() => linkRelative(parent, 'g1');

    setUp(() {
      server = FakeFamilyServer();
      parent = FakeFamilyRepository(server, 'p1');
      grandma = FakeFamilyRepository(server, 'g1');
    });

    test('nobody can write before the relative has accepted the parent\'s request', () async {
      expect(
        () => grandma.send(familyId: 'p1', childId: 'c1', childName: 'Lina', relUid: 'g1', from: Side.relative, kind: kindText, body: 'hi'),
        throwsA(isA<FamilyException>()),
      );
      await parent.sendConnectRequest(parentName: 'Sara', toEmail: 'g1@test.com', relation: 'grandma', children: {'c1': 'Lina'});
      // A request alone does not link anyone.
      expect(
        () => grandma.send(familyId: 'p1', childId: 'c1', childName: 'Lina', relUid: 'g1', from: Side.relative, kind: kindText, body: 'hi'),
        throwsA(isA<FamilyException>()),
      );
    });

    test('after approval both sides talk; the parent can read everything', () async {
      await link();
      await parent.setRelativeStatus('g1', kRelativeActive);
      await parent.send(familyId: 'p1', childId: 'c1', childName: 'Lina', relUid: 'g1', from: Side.child, kind: kindPhrase, body: 'p_love');
      await grandma.send(familyId: 'p1', childId: 'c1', childName: 'Lina', relUid: 'g1', from: Side.relative, kind: kindText, body: 'Love you too');
      final seen = await grandma.watch(familyId: 'p1', childId: 'c1', relUid: 'g1').first;
      expect(seen.map((m) => m.from), [Side.child, Side.relative]);
      expect((await parent.allMessages('p1')).length, 2);
      expect(() => grandma.allMessages('p1'), throwsA(isA<FamilyException>())); // only the parent
    });

    test('a relative cannot write as the child, and cannot reach a child they are not linked to', () async {
      await link();
      await parent.setRelativeStatus('g1', kRelativeActive);
      expect(() => grandma.send(familyId: 'p1', childId: 'c1', childName: 'Lina', relUid: 'g1', from: Side.child, kind: kindPhrase, body: 'p_love'), throwsA(isA<FamilyException>()));
      expect(() => grandma.send(familyId: 'p1', childId: 'c2', childName: 'Omar', relUid: 'g1', from: Side.relative, kind: kindSticker, body: '😀'), throwsA(isA<FamilyException>()));
    });

    test('pausing or removing stops messages at once; resuming brings them back', () async {
      await link();
      await parent.setRelativeStatus('g1', kRelativeActive);
      await parent.setRelativeStatus('g1', kRelativePaused);
      Future<void> hello() => grandma.send(familyId: 'p1', childId: 'c1', childName: 'Lina', relUid: 'g1', from: Side.relative, kind: kindSticker, body: '😀');
      expect(hello, throwsA(isA<FamilyException>()));
      await parent.setRelativeStatus('g1', kRelativeActive);
      await hello();
      await parent.setRelativeStatus('g1', kRelativeRemoved);
      expect(hello, throwsA(isA<FamilyException>()));
    });

    test('the parent can clear a conversation', () async {
      await link();
      await parent.setRelativeStatus('g1', kRelativeActive);
      await grandma.send(familyId: 'p1', childId: 'c1', childName: 'Lina', relUid: 'g1', from: Side.relative, kind: kindSticker, body: '😀');
      await parent.clearThread(familyId: 'p1', childId: 'c1', relUid: 'g1');
      expect(await parent.allMessages('p1'), isEmpty);
    });
  });

  group('connection requests', () {
    late FakeFamilyServer server;
    late FakeFamilyRepository parent, nana, other;
    setUp(() {
      server = FakeFamilyServer();
      parent = FakeFamilyRepository(server, 'p1');
      nana = FakeFamilyRepository(server, 'g1', email: 'Nana@Test.com');
      other = FakeFamilyRepository(server, 'x1', email: 'other@test.com');
    });

    test('e-mails are compared without case or spaces; bad ones are refused', () async {
      expect(looksLikeEmail(' Nana@Test.com '), true);
      expect(looksLikeEmail('nana'), false);
      expect(looksLikeEmail('a@b'), false);
      expect(() => parent.sendConnectRequest(parentName: 'S', toEmail: 'nope', relation: 'grandma', children: {'c1': 'L'}), throwsA(isA<FamilyException>()));
      expect(() => parent.sendConnectRequest(parentName: 'S', toEmail: 'a@b.co', relation: 'grandma', children: {}), throwsA(isA<FamilyException>()));
    });

    test('only the addressed person sees it and can answer; accepting makes them active at once', () async {
      final r = await parent.sendConnectRequest(parentName: 'Sara', toEmail: ' nana@test.COM', relation: 'grandma', children: {'c1': 'Lina'});
      expect((await nana.watchIncomingRequests().first).single.id, r.id);
      expect(await other.watchIncomingRequests().first, isEmpty);
      expect(() => other.respondToRequest(r, accept: true, name: 'Eve'), throwsA(isA<FamilyException>()));
      await nana.respondToRequest(r, accept: true, name: 'Nana');
      expect((await parent.relatives()).single.active, true);
      expect(() => nana.respondToRequest(r, accept: true, name: 'Nana'), throwsA(isA<FamilyException>())); // used once
      // they can talk straight away
      await parent.send(familyId: 'p1', childId: 'c1', childName: 'Lina', relUid: 'g1', from: Side.child, kind: kindPhrase, body: 'p_hello');
    });

    test('a cancelled or declined request is gone for everyone', () async {
      final r = await parent.sendConnectRequest(parentName: 'Sara', toEmail: 'nana@test.com', relation: 'grandma', children: {'c1': 'Lina'});
      await parent.cancelRequest(r.id);
      expect(await nana.watchIncomingRequests().first, isEmpty);
      expect(() => nana.respondToRequest(r, accept: true, name: 'Nana'), throwsA(isA<FamilyException>()));
      expect(() => other.cancelRequest(r.id), throwsA(isA<FamilyException>()));
    });
  });
}
