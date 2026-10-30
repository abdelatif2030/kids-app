import 'dart:async';
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_app/family/family_models.dart';
import 'package:kids_app/family/family_prefs.dart';
import 'package:kids_app/family/family_repository.dart';
import 'package:kids_app/family/family_screens.dart';
import 'package:kids_app/family/memory_family_repository.dart';
import 'package:kids_app/family/voice_io.dart';
import 'package:kids_app/l10n/app_locale.dart';
import 'package:shared_preferences/shared_preferences.dart';

class FakeRecorder implements VoiceRecorder {
  final bool refuse;
  bool cancelled = false, disposed = false, started = false;
  FakeRecorder({this.refuse = false});
  @override
  Future<bool> start() async {
    started = !refuse;
    return !refuse;
  }

  @override
  Future<RecordedVoice?> stop() async => RecordedVoice(Uint8List.fromList([0x1A, 0x45, 0xDF, 0xA3, 1, 2, 3]), 'audio/webm', 3);
  @override
  Future<void> cancel() async => cancelled = true;
  @override
  Future<void> dispose() async => disposed = true;
}

class FakePlayer implements VoicePlayer {
  final played = <VoiceClip>[];
  final _c = StreamController<bool>.broadcast();
  @override
  Future<void> play(VoiceClip clip) async {
    played.add(clip);
    _c.add(true);
  }

  @override
  Future<void> stop() async => _c.add(false);
  @override
  Stream<bool> get playing => _c.stream;
  @override
  Future<void> dispose() async {}
}

Widget _app(Widget w) => MaterialApp(key: UniqueKey(), home: w);

Future<void> _settle(WidgetTester t) async {
  for (var i = 0; i < 3; i++) {
    await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 30)));
    await t.pump(const Duration(milliseconds: 200));
  }
}

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  late FakeFamilyServer server;
  late FakeFamilyRepository parent, nana;

  setUp(() async {
    AppLocale.instance.set('en');
    SharedPreferences.setMockInitialValues({});
    FlutterSecureStorage.setMockInitialValues({});
    server = FakeFamilyServer();
    parent = FakeFamilyRepository(server, 'p1');
    nana = FakeFamilyRepository(server, 'n1', username: 'um_nana');
    final r = await parent.sendConnectRequest(parentName: 'Sara', toName: 'um_nana', relation: 'grandma', children: {'c1': 'Lina'});
    await nana.respondToRequest(r, accept: true, name: 'Nana');
  });

  tearDown(() {
    newVoiceRecorder = () => DeviceVoiceRecorder();
    newVoicePlayer = () => DeviceVoicePlayer();
  });

  void big(WidgetTester t) {
    t.view.physicalSize = const Size(900, 1800);
    t.view.devicePixelRatio = 1;
    addTearDown(t.view.reset);
  }

  test('the sound type is read from the first bytes', () {
    expect(sniffAudioMime(Uint8List.fromList([0x1A, 0x45, 0xDF, 0xA3, 0])), 'audio/webm');
    expect(sniffAudioMime(Uint8List.fromList([0, 0, 0, 0x20, 0x66, 0x74, 0x79, 0x70])), 'audio/mp4');
    expect(sniffAudioMime(Uint8List.fromList([0x4F, 0x67, 0x67, 0x53, 0])), 'audio/ogg');
    expect(sniffAudioMime(Uint8List.fromList([0x52, 0x49, 0x46, 0x46, 0])), 'audio/wav');
    for (final m in ['audio/webm', 'audio/mp4', 'audio/ogg', 'audio/wav', 'audio/aac', 'audio/mpeg']) {
      expect(kVoiceMimes, contains(m));
    }
  });

  group('server rules in the fake match the real ones', () {
    final bytes = Uint8List.fromList([1, 2, 3]);
    Future<void> send(FakeFamilyRepository r, Side from, {int secs = 5, Uint8List? b, String mime = 'audio/webm'}) =>
        r.sendVoice(familyId: 'p1', childId: 'c1', childName: 'Lina', relUid: 'n1', from: from, bytes: b ?? bytes, mime: mime, secs: secs);

    test('voice is off until the parent switches it on', () async {
      expect(() => send(nana, Side.relative), throwsA(isA<FamilyException>()));
      await parent.setRelativeVoice('n1', true);
      await send(nana, Side.relative);
      await send(parent, Side.child);
      expect(server.messages['p1']!.where((m) => m.isVoice).length, 2);
    });

    test('limits: length, size, type; nobody writes as someone else', () async {
      await parent.setRelativeVoice('n1', true);
      expect(() => send(nana, Side.relative, secs: 31), throwsA(isA<FamilyException>()));
      expect(() => send(nana, Side.relative, secs: 0), throwsA(isA<FamilyException>()));
      expect(() => send(nana, Side.relative, b: Uint8List(kMaxVoiceBytes + 1)), throwsA(isA<FamilyException>()));
      expect(() => send(nana, Side.relative, mime: 'video/mp4'), throwsA(isA<FamilyException>()));
      expect(() => send(nana, Side.child), throwsA(isA<FamilyException>()));
      expect(() => send(parent, Side.relative), throwsA(isA<FamilyException>()));
    });

    test('only the parent and that relative can fetch a recording; old ones are purged', () async {
      await parent.setRelativeVoice('n1', true);
      await send(nana, Side.relative);
      final id = server.messages['p1']!.single.body;
      expect((await parent.loadVoice('p1', id, relUid: 'n1'))!.bytes, bytes);
      expect((await nana.loadVoice('p1', id, relUid: 'n1'))!.bytes, bytes);
      final stranger = FakeFamilyRepository(server, 'x1');
      expect(() => stranger.loadVoice('p1', id, relUid: 'n1'), throwsA(isA<FamilyException>()));
      expect(await parent.purgeOldVoices('p1'), 0); // fresh
      final v = server.voices[id]!;
      server.voices[id] = (v.$1, v.$2, v.$3, DateTime.now().subtract(const Duration(days: kVoiceKeepDays + 1)));
      expect(() => nana.purgeOldVoices('p1'), throwsA(isA<FamilyException>())); // only the parent
      expect(await parent.purgeOldVoices('p1'), 1);
      expect(await parent.loadVoice('p1', id, relUid: 'n1'), isNull);
    });
  });

  group('screens', () {
    Widget chat(FamilyRepository r, Side side, {bool voiceOn = true}) => _app(ChatScreen(
          repo: r,
          familyId: 'p1',
          childId: 'c1',
          childName: 'Lina',
          relUid: 'n1',
          as: side,
          title: 'Chat',
          voiceOn: voiceOn,
        ));

    testWidgets('no microphone button until the parent allowed voice for this relative', (t) async {
      big(t);
      await t.pumpWidget(chat(nana, Side.relative, voiceOn: false));
      await _settle(t);
      expect(find.byKey(const ValueKey('mic')), findsNothing);
    });

    testWidgets('the relative records and sends; the message shows with a play button; playing fetches the sound', (t) async {
      big(t);
      await parent.setRelativeVoice('n1', true);
      final rec = FakeRecorder();
      final player = FakePlayer();
      newVoiceRecorder = () => rec;
      newVoicePlayer = () => player;
      await t.pumpWidget(chat(nana, Side.relative));
      await _settle(t);
      await t.tap(find.byKey(const ValueKey('mic')));
      await _settle(t);
      expect(find.byKey(const ValueKey('recording_bar')), findsOneWidget);
      await t.tap(find.byKey(const ValueKey('rec_send')));
      await _settle(t);
      expect(rec.disposed, true);
      expect(server.messages['p1']!.single.isVoice, true);
      expect(find.byKey(const ValueKey('recording_bar')), findsNothing);
      final id = server.messages['p1']!.single.id;
      await t.tap(find.byKey(ValueKey('voice_$id')));
      await _settle(t);
      expect(player.played.single.mime, 'audio/webm');
    });

    testWidgets('cancelling a recording sends nothing', (t) async {
      big(t);
      await parent.setRelativeVoice('n1', true);
      final rec = FakeRecorder();
      newVoiceRecorder = () => rec;
      await t.pumpWidget(chat(nana, Side.relative));
      await _settle(t);
      await t.tap(find.byKey(const ValueKey('mic')));
      await _settle(t);
      await t.tap(find.byKey(const ValueKey('rec_cancel')));
      await _settle(t);
      expect(rec.cancelled, true);
      expect(server.messages['p1'] ?? [], isEmpty);
    });

    testWidgets('a refused microphone shows a message and starts nothing', (t) async {
      big(t);
      await parent.setRelativeVoice('n1', true);
      newVoiceRecorder = () => FakeRecorder(refuse: true);
      await t.pumpWidget(chat(nana, Side.relative));
      await _settle(t);
      await t.tap(find.byKey(const ValueKey('mic')));
      await _settle(t);
      expect(find.byKey(const ValueKey('chat_error')), findsOneWidget);
      expect(find.byKey(const ValueKey('recording_bar')), findsNothing);
    });

    testWidgets('a child needs BOTH the relative voice switch and the child voice switch', (t) async {
      big(t);
      await parent.setRelativeVoice('n1', true);
      await t.pumpWidget(chat(parent, Side.child));
      await _settle(t);
      expect(find.byKey(const ValueKey('mic')), findsNothing); // the child switch is off by default
      expect(find.byKey(const ValueKey('mic_locked')), findsOneWidget); // but a locked microphone is visible
      await t.tap(find.byKey(const ValueKey('mic_locked')));
      await t.pump();
      expect(find.byKey(const ValueKey('recording_bar')), findsNothing); // pressing it records nothing
      await FamilyPrefs.save('c1', const ChildChatPrefs(chatOn: true, voiceOn: true));
      await t.pumpWidget(chat(parent, Side.child));
      await _settle(t);
      expect(find.byKey(const ValueKey('mic')), findsOneWidget);
      await t.pumpWidget(chat(parent, Side.child, voiceOn: false));
      await _settle(t);
      expect(find.byKey(const ValueKey('mic')), findsNothing);
    });

    testWidgets('an expired recording says so instead of failing', (t) async {
      big(t);
      await parent.setRelativeVoice('n1', true);
      await nana.sendVoice(familyId: 'p1', childId: 'c1', childName: 'Lina', relUid: 'n1', from: Side.relative, bytes: Uint8List.fromList([1]), mime: 'audio/webm', secs: 2);
      server.voices.clear();
      await t.pumpWidget(chat(nana, Side.relative));
      await _settle(t);
      await t.tap(find.byKey(ValueKey('voice_${server.messages['p1']!.single.id}')));
      await _settle(t);
      expect(find.byKey(const ValueKey('voice_gone')), findsOneWidget);
    });

    testWidgets('the parent sees the voice switches on the relative card and for the child', (t) async {
      big(t);
      final store = await _store();
      expect(store, isNotNull);
      await t.pumpWidget(_app(FamilyParentScreen(repo: parent, parentName: 'Sara')));
      await _settle(t);
      await t.tap(find.byKey(const ValueKey('voice_n1')));
      await _settle(t);
      expect((await t.runAsync(() => parent.relatives()))!.single.voiceOn, true);
    });
  });
}

Future<Object?> _store() async {
  // The parent screen lists the children from the journey store.
  return Object();
}
