import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:kids_app/family/call_screens.dart';
import 'package:kids_app/family/family_screens.dart';
import 'package:kids_app/journey/models.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/family/call_controller.dart';
import 'package:kids_app/family/call_engine.dart';
import 'package:kids_app/family/call_models.dart';
import 'package:kids_app/family/call_repository.dart';
import 'package:kids_app/family/family_repository.dart';
import 'package:kids_app/family/family_models.dart';
import 'package:kids_app/family/memory_family_repository.dart';
import 'package:kids_app/l10n/app_locale.dart';

/// No real audio: it records what the controller asked for and connects when the exchange is complete.
class FakeEngine implements CallEngine {
  final String name;
  final bool micDenied;
  FakeEngine(this.name, {this.micDenied = false});

  final remoteCandidates = <Map<String, dynamic>>[];
  bool closed = false, muted = false, remoteSet = false;
  final _cands = StreamController<Map<String, dynamic>>.broadcast();
  final _phases = StreamController<CallPhase>.broadcast();

  void emitCandidate(String c) => _cands.add({'candidate': c});

  @override
  Future<void> init() async {
    if (micDenied) throw StateError('NotAllowedError');
  }

  @override
  Future<Map<String, String>> createOffer() async {
    emitCandidate('early-$name'); // gathered before the call id exists
    return {'sdp': 'offer-from-$name', 'type': 'offer'};
  }

  @override
  Future<Map<String, String>> acceptOffer(Map<String, String> offer) async {
    remoteSet = true;
    Timer.run(() => _phases.add(CallPhase.connected));
    return {'sdp': 'answer-from-$name', 'type': 'answer'};
  }

  @override
  Future<void> setAnswer(Map<String, String> answer) async {
    remoteSet = true;
    Timer.run(() => _phases.add(CallPhase.connected));
  }

  @override
  Future<void> addRemoteCandidate(Map<String, dynamic> candidate) async {
    if (!remoteSet) throw StateError('candidate before the remote description');
    remoteCandidates.add(candidate);
  }

  @override
  Stream<Map<String, dynamic>> get localCandidates => _cands.stream;
  @override
  Stream<CallPhase> get phases => _phases.stream;
  @override
  void setMuted(bool m) => muted = m;
  @override
  Future<void> close() async => closed = true;
  @override
  Widget? get audioSink => null;
}

Future<void> _wait([int ms = 40]) => Future<void>.delayed(Duration(milliseconds: ms));

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  late FakeFamilyServer server;
  late FakeFamilyRepository parent, nana, other;

  setUp(() async {
    AppLocale.instance.set('en');
    server = FakeFamilyServer();
    parent = FakeFamilyRepository(server, 'p1');
    nana = FakeFamilyRepository(server, 'n1');
    other = FakeFamilyRepository(server, 'x1');
    final inv = await parent.createInvite(parentName: 'Sara', relation: 'grandma', children: {'c1': 'Lina'});
    await nana.joinWithCode(inv.code, name: 'Nana');
    await parent.setRelativeStatus('n1', kRelativeActive);
  });

  CallController ctl(FakeFamilyRepository r, FakeEngine e, {int ring = 45}) => CallController(repo: r, engine: e, familyId: 'p1', ringSeconds: ring);

  test('calls are off until the parent switches them on', () async {
    final e = FakeEngine('parent');
    final c = ctl(parent, e);
    await c.startOutgoing(childId: 'c1', childName: 'Lina', relUid: 'n1', from: CallFrom.parent);
    expect(c.phase, CallPhase.failed);
    expect(e.closed, true); // the microphone is released
    expect(server.calls, isEmpty);
  });

  test('parent calls, the relative answers, both connect; hanging up ends both and frees the microphone', () async {
    await parent.setRelativeCalls('n1', true);
    final pe = FakeEngine('parent'), ne = FakeEngine('nana');
    final pc = ctl(parent, pe);
    await pc.startOutgoing(childId: 'c1', childName: 'Lina', relUid: 'n1', from: CallFrom.parent);
    expect(pc.phase, CallPhase.ringing);

    final incoming = await nana.watchIncoming('p1').first;
    expect(incoming.single.childName, 'Lina');
    expect(await parent.watchIncoming('p1').first, isEmpty); // the caller is not "called"

    final nc = ctl(nana, ne);
    await nc.accept(incoming.single);
    await _wait();
    expect(pc.phase, CallPhase.connected);
    expect(nc.phase, CallPhase.connected);
    // the candidate gathered before the call existed was delivered, and arrived after the description was set
    expect(ne.remoteCandidates.map((c) => c['candidate']), contains('early-parent'));

    nc.toggleMute();
    expect(ne.muted, true);

    await pc.hangUp();
    await _wait();
    expect(pc.phase, CallPhase.ended);
    expect(nc.phase, CallPhase.ended);
    expect(pe.closed && ne.closed, true);
    expect(await nana.watchIncoming('p1').first, isEmpty);
  });

  test('the relative calls the parent; declining is told to the caller', () async {
    await parent.setRelativeCalls('n1', true);
    final ne = FakeEngine('nana');
    final nc = ctl(nana, ne);
    await nc.startOutgoing(childId: 'c1', childName: 'Lina', relUid: 'n1', from: CallFrom.relative);
    final incoming = await parent.watchIncoming('p1').first;
    expect(incoming.single.from, CallFrom.relative);
    await parent.setCallStatus('p1', incoming.single.id, callDeclined);
    await _wait();
    expect(nc.phase, CallPhase.declined);
    expect(ne.closed, true);
  });

  test('a call nobody answers becomes a missed call', () async {
    await parent.setRelativeCalls('n1', true);
    final pc = ctl(parent, FakeEngine('parent'), ring: 0);
    await pc.startOutgoing(childId: 'c1', childName: 'Lina', relUid: 'n1', from: CallFrom.parent);
    await _wait(80);
    expect(pc.phase, CallPhase.missed);
    expect(await nana.watchIncoming('p1').first, isEmpty);
  });

  test('microphone refused: the call fails with a clear message and nothing is sent', () async {
    await parent.setRelativeCalls('n1', true);
    final e = FakeEngine('parent', micDenied: true);
    final pc = ctl(parent, e);
    await pc.startOutgoing(childId: 'c1', childName: 'Lina', relUid: 'n1', from: CallFrom.parent);
    expect(pc.phase, CallPhase.failed);
    expect(pc.error, contains('microphone'));
    expect(server.calls, isEmpty);
  });

  test('a paused relative cannot be called, and a stranger cannot call', () async {
    await parent.setRelativeCalls('n1', true);
    await parent.setRelativeStatus('n1', kRelativePaused);
    final c1 = ctl(parent, FakeEngine('p'));
    await c1.startOutgoing(childId: 'c1', childName: 'Lina', relUid: 'n1', from: CallFrom.parent);
    expect(c1.phase, CallPhase.failed);
    await parent.setRelativeStatus('n1', kRelativeActive);
    final c2 = ctl(other, FakeEngine('x'));
    await c2.startOutgoing(childId: 'c1', childName: 'Lina', relUid: 'n1', from: CallFrom.relative);
    expect(c2.phase, CallPhase.failed);
  });

  test('an old ringing call is ignored', () {
    final old = CallInfo(
      id: 'k', familyId: 'p1', childId: 'c1', childName: 'Lina', relUid: 'n1', from: CallFrom.parent, status: callRinging,
      offer: const {}, createdAt: DateTime.now().subtract(const Duration(minutes: 5)),
    );
    expect(old.freshAt(DateTime.now()), false);
  });

  group('screens', () {
    Future<void> settle(WidgetTester t) async {
      for (var i = 0; i < 3; i++) {
        await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 30)));
        await t.pump(const Duration(milliseconds: 200));
      }
    }

    Future<void> openParent(WidgetTester t) async {
      t.view.physicalSize = const Size(900, 2200);
      t.view.devicePixelRatio = 1;
      addTearDown(t.view.reset);
      SharedPreferences.setMockInitialValues({});
      FlutterSecureStorage.setMockInitialValues({});
      final store = JourneyStore(LocalJourneyRepository());
      await store.load();
      await store.addProfile(const ChildProfile(id: 'c1', nickname: 'Lina', age: 5));
      JourneyStore.instance = store;
      addTearDown(() => newCallEngine = () => WebRtcEngine());
      await t.pumpWidget(MaterialApp(key: UniqueKey(), home: FamilyParentScreen(repo: parent, parentName: 'Sara')));
      await settle(t);
    }

    testWidgets('calls are off by default; the parent turns them on, then calls and hangs up', (t) async {
      final engine = FakeEngine('parent');
      newCallEngine = () => engine;
      await openParent(t);
      expect(find.byKey(const ValueKey('call_n1_c1')), findsNothing); // no call button yet
      await t.tap(find.byKey(const ValueKey('calls_n1')));
      await settle(t);
      expect((await t.runAsync(() => parent.relatives()))!.single.callsOn, true);
      await t.tap(find.byKey(const ValueKey('call_n1_c1')));
      await settle(t);
      expect(find.byKey(const ValueKey('call_phase')), findsOneWidget);
      expect(find.text('Calling…'), findsOneWidget);
      expect(find.text('Voice only. It is never recorded or saved.'), findsOneWidget);
      await t.tap(find.byKey(const ValueKey('call_hangup')));
      await settle(t);
      expect(engine.closed, true);
      await t.pump(const Duration(seconds: 1)); // the screen slides away
      expect(find.byKey(const ValueKey('call_phase')), findsNothing); // back on the family screen
    });

    testWidgets('an incoming call from the relative shows in the parent area and can be declined or answered', (t) async {
      await parent.setRelativeCalls('n1', true);
      final engine = FakeEngine('parent');
      newCallEngine = () => engine;
      await openParent(t);
      final nc = CallController(repo: nana, engine: FakeEngine('nana'), familyId: 'p1');
      await t.runAsync(() => nc.startOutgoing(childId: 'c1', childName: 'Lina', relUid: 'n1', from: CallFrom.relative));
      await settle(t);
      final id = server.calls.keys.single;
      expect(find.byKey(ValueKey('incoming_$id')), findsOneWidget);
      await t.tap(find.byKey(ValueKey('accept_$id')));
      await settle(t);
      await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 80)));
      await t.pump(const Duration(milliseconds: 200));
      expect(find.text('Connected'), findsOneWidget);
      await t.tap(find.byKey(const ValueKey('call_hangup')));
      await settle(t);
      expect(server.calls[id]!.status, callEnded);
    });
  });

  group('call button in the chat', () {
    Future<void> settle(WidgetTester t) async {
      for (var i = 0; i < 3; i++) {
        await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 30)));
        await t.pump(const Duration(milliseconds: 200));
      }
    }

    Widget chat(FamilyRepository r, Side side, {bool callsOn = true, Future<bool> Function()? approve}) => MaterialApp(
          key: UniqueKey(),
          home: ChatScreen(
            repo: r,
            familyId: 'p1',
            childId: 'c1',
            childName: 'Lina',
            relUid: 'n1',
            as: side,
            title: 'Grandmother',
            calls: r as CallRepository,
            callsOn: callsOn,
            approveCall: approve,
          ),
        );

    testWidgets('no phone button until the parent allowed calls', (t) async {
      await t.pumpWidget(chat(nana, Side.relative, callsOn: false));
      await settle(t);
      expect(find.byKey(const ValueKey('chat_call')), findsNothing);
    });

    testWidgets('the relative taps the phone in the chat and the call screen opens', (t) async {
      await parent.setRelativeCalls('n1', true);
      final engine = FakeEngine('nana');
      newCallEngine = () => engine;
      addTearDown(() => newCallEngine = () => WebRtcEngine());
      await t.pumpWidget(chat(nana, Side.relative));
      await settle(t);
      await t.tap(find.byKey(const ValueKey('chat_call')));
      await settle(t);
      expect(find.byKey(const ValueKey('call_phase')), findsOneWidget);
      await t.tap(find.byKey(const ValueKey('call_hangup')));
      await settle(t);
    });

    testWidgets('a child cannot start a call without the parent: refused approval means no call', (t) async {
      await parent.setRelativeCalls('n1', true);
      final engine = FakeEngine('parent');
      newCallEngine = () => engine;
      addTearDown(() => newCallEngine = () => WebRtcEngine());
      var asked = 0;
      await t.pumpWidget(chat(parent, Side.child, approve: () async {
        asked++;
        return false;
      }));
      await settle(t);
      await t.tap(find.byKey(const ValueKey('chat_call')));
      await settle(t);
      expect(asked, 1);
      expect(find.byKey(const ValueKey('call_phase')), findsNothing);
      expect(server.calls, isEmpty);
    });
  });
}
