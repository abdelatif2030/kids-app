import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/family/family_models.dart';
import 'package:kids_app/family/family_repository.dart';
import 'package:kids_app/l10n/app_locale.dart';

import 'fake_family_repository.dart';

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
    late FakeFamilyRepository parent, grandma, stranger;

    Future<void> link() async {
      final inv = await parent.createInvite(parentName: 'Sara', relation: 'grandma', children: {'c1': 'Lina'});
      await grandma.joinWithCode(inv.code, name: 'Nana');
    }

    setUp(() {
      server = FakeFamilyServer();
      parent = FakeFamilyRepository(server, 'p1');
      grandma = FakeFamilyRepository(server, 'g1');
      stranger = FakeFamilyRepository(server, 's1');
    });

    test('a code works once and the relative waits for approval', () async {
      final inv = await parent.createInvite(parentName: 'Sara', relation: 'grandma', children: {'c1': 'Lina'});
      await grandma.joinWithCode(inv.code, name: 'Nana');
      expect((await parent.relatives()).single.status, kRelativePending);
      expect(() => stranger.joinWithCode(inv.code, name: 'X'), throwsA(isA<FamilyException>()));
      expect(() => stranger.joinWithCode('nope', name: 'X'), throwsA(isA<FamilyException>()));
    });

    test('nobody can write before the parent approves', () async {
      await link();
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
}
