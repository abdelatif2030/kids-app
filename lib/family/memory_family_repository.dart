import 'dart:async';

import 'call_models.dart';
import 'call_repository.dart';
import 'family_models.dart';
import 'family_repository.dart';

/// In-memory family server shared by several "devices" (one FakeFamilyRepository per signed-in account).
class FakeFamilyServer {
  final invites = <String, Map<String, dynamic>>{}; // code -> {familyId, parentName, relation, children, used}
  final relatives = <String, Map<String, Relative>>{}; // familyId -> relUid -> Relative
  final messages = <String, List<FamilyMessage>>{}; // familyId -> messages
  final _changes = StreamController<String>.broadcast();
  final calls = <String, CallInfo>{}; // call id -> call
  final candidates = <String, List<(CallFrom, Map<String, dynamic>)>>{};
  final _callChanges = StreamController<String>.broadcast();
  int _n = 0;
}

class FakeFamilyRepository implements FamilyRepository, CallRepository {
  final FakeFamilyServer server;
  @override
  final String? uid;
  FakeFamilyRepository(this.server, this.uid);

  Map<String, Relative> _mine(String fid) => server.relatives.putIfAbsent(fid, () => {});

  @override
  Future<FamilyInvite> createInvite({required String parentName, required String relation, required Map<String, String> children}) async {
    final code = 'C${1000 + server._n++}';
    server.invites[code] = {'familyId': uid!, 'parentName': parentName, 'relation': relation, 'children': children, 'used': false};
    return FamilyInvite(code: code, familyId: uid!, parentName: parentName, relation: relation, children: children);
  }

  @override
  Future<List<Relative>> relatives() async => _mine(uid!).values.toList();

  @override
  Future<void> setRelativeStatus(String relUid, String status) async {
    final r = _mine(uid!)[relUid];
    if (r == null) throw const FamilyException('not found');
    _mine(uid!)[relUid] = r.copyWith(status: status);
  }

  @override
  Future<void> setRelativeCalls(String relUid, bool on) async {
    final r = _mine(uid!)[relUid];
    if (r == null) throw const FamilyException('not found');
    _mine(uid!)[relUid] = r.copyWith(callsOn: on);
  }

  @override
  Future<void> setRelativeNextCall(String relUid, String text) async {
    final r = _mine(uid!)[relUid];
    if (r == null) throw const FamilyException('not found');
    if (text.length > kMaxNextCallLength || containsLink(text)) throw const FamilyException('invalid');
    _mine(uid!)[relUid] = r.copyWith(nextCall: text.trim());
  }

  @override
  Future<void> setRelativeChildren(String relUid, Map<String, String> children) async {
    final r = _mine(uid!)[relUid];
    if (r == null) throw const FamilyException('not found');
    _mine(uid!)[relUid] = r.copyWith(children: children);
  }

  @override
  Future<void> joinWithCode(String code, {required String name}) async {
    final inv = server.invites[code.trim().toUpperCase()];
    if (inv == null || inv['used'] == true) throw const FamilyException('invalid code');
    inv['used'] = true;
    _mine(inv['familyId'] as String)[uid!] = Relative(
      uid: uid!,
      name: name,
      relation: inv['relation'] as String,
      status: kRelativePending,
      children: Map<String, String>.from(inv['children'] as Map),
    );
  }

  @override
  Future<List<(String, String)>> myFamilies() async => [
        for (final e in server.relatives.entries)
          if (e.value[uid]?.status == kRelativeActive || e.value[uid]?.status == kRelativePending)
            (e.key, server.invites.values.firstWhere((i) => i['familyId'] == e.key)['parentName'] as String),
      ];

  @override
  Future<List<Relative>> myLinks(String familyId) async => [if (_mine(familyId)[uid] != null) _mine(familyId)[uid]!];

  @override
  Future<void> send({
    required String familyId,
    required String childId,
    required String childName,
    required String relUid,
    required Side from,
    required String kind,
    required String body,
  }) async {
    final problem = validateMessage(kind, body);
    if (problem != null) throw FamilyException(problem);
    final rel = _mine(familyId)[relUid];
    if (rel == null || !rel.active || !rel.children.containsKey(childId)) {
      throw const FamilyException('not allowed');
    }
    if (from == Side.child && uid != familyId) throw const FamilyException('not allowed');
    if (from == Side.relative && uid != relUid) throw const FamilyException('not allowed');
    server.messages.putIfAbsent(familyId, () => []).add(FamilyMessage(
          id: 'm${server._n++}',
          childId: childId,
          childName: childName,
          relUid: relUid,
          from: from,
          kind: kind,
          body: kind == kindText ? body.trim() : body,
          at: DateTime.fromMillisecondsSinceEpoch(1700000000000 + server._n * 1000),
        ));
    server._changes.add(familyId);
  }

  List<FamilyMessage> _thread(String fid, String childId, String relUid) => [
        for (final m in server.messages[fid] ?? const <FamilyMessage>[])
          if (m.childId == childId && m.relUid == relUid) m,
      ];

  @override
  Stream<List<FamilyMessage>> watch({required String familyId, required String childId, required String relUid}) async* {
    yield _thread(familyId, childId, relUid);
    await for (final f in server._changes.stream) {
      if (f == familyId) yield _thread(familyId, childId, relUid);
    }
  }

  @override
  Future<List<FamilyMessage>> allMessages(String familyId) async {
    if (uid != familyId) throw const FamilyException('not allowed');
    return List.of(server.messages[familyId] ?? const []);
  }

  @override
  Future<void> clearThread({required String familyId, required String childId, required String relUid}) async {
    if (uid != familyId) throw const FamilyException('not allowed');
    server.messages[familyId]?.removeWhere((m) => m.childId == childId && m.relUid == relUid);
    server._changes.add(familyId);
  }

  // --- calls (signalling only; the audio never touches the server) ------------------------------
  int _callN = 0;

  @override
  Future<String> startCall({
    required String familyId,
    required String childId,
    required String childName,
    required String relUid,
    required CallFrom from,
    required Map<String, String> offer,
  }) async {
    final rel = _mine(familyId)[relUid];
    if (rel == null || !rel.active || !rel.callsOn || !rel.children.containsKey(childId)) throw const FamilyException('not allowed');
    if (from == CallFrom.parent && uid != familyId) throw const FamilyException('not allowed');
    if (from == CallFrom.relative && uid != relUid) throw const FamilyException('not allowed');
    final id = 'call${server._n++}_${_callN++}';
    server.calls[id] = CallInfo(
      id: id,
      familyId: familyId,
      childId: childId,
      childName: childName,
      relUid: relUid,
      from: from,
      status: callRinging,
      offer: offer,
      createdAt: DateTime.now(),
    );
    server._callChanges.add(id);
    return id;
  }

  List<CallInfo> _incoming(String familyId) => [
        for (final c in server.calls.values)
          if (c.familyId == familyId && c.ringing && c.freshAt(DateTime.now()) && (uid == familyId ? c.from == CallFrom.relative : (c.from == CallFrom.parent && c.relUid == uid))) c,
      ];

  /// A stream that first reports the current value and then every change, without missing a change that
  /// happens right after listening starts.
  Stream<T> _live<T>(T Function() read, bool Function(String change) relevant) {
    late StreamController<T> c;
    StreamSubscription<String>? sub;
    c = StreamController<T>(
      onListen: () {
        sub = server._callChanges.stream.listen((id) {
          if (relevant(id)) c.add(read());
        });
        c.add(read());
      },
      onCancel: () => sub?.cancel(),
    );
    return c.stream;
  }

  @override
  Stream<List<CallInfo>> watchIncoming(String familyId) => _live(() => _incoming(familyId), (_) => true);

  @override
  Stream<CallInfo?> watchCall(String familyId, String callId) => _live(() => server.calls[callId], (id) => id == callId);

  @override
  Future<void> answerCall(String familyId, String callId, Map<String, String> answer) async {
    final c = server.calls[callId];
    if (c == null || !c.ringing) throw const FamilyException('not allowed');
    server.calls[callId] = c.copyWith(status: callAccepted, answer: answer);
    server._callChanges.add(callId);
  }

  @override
  Future<void> setCallStatus(String familyId, String callId, String status) async {
    final c = server.calls[callId];
    if (c == null) return;
    server.calls[callId] = c.copyWith(status: status);
    server._callChanges.add(callId);
  }

  @override
  Future<void> addCandidate(String familyId, String callId, CallFrom from, Map<String, dynamic> candidate) async {
    server.candidates.putIfAbsent(callId, () => []).add((from, candidate));
    server._callChanges.add('cand:$callId');
  }

  @override
  Stream<Map<String, dynamic>> watchCandidates(String familyId, String callId, CallFrom other) {
    var seen = 0;
    List<Map<String, dynamic>> now() => [for (final e in server.candidates[callId] ?? const <(CallFrom, Map<String, dynamic>)>[]) if (e.$1 == other) e.$2];
    late StreamController<Map<String, dynamic>> c;
    StreamSubscription<String>? sub;
    void flush() {
      final all = now();
      while (seen < all.length) {
        c.add(all[seen++]);
      }
    }

    c = StreamController<Map<String, dynamic>>(
      onListen: () {
        sub = server._callChanges.stream.listen((id) {
          if (id == 'cand:$callId') flush();
        });
        flush();
      },
      onCancel: () => sub?.cancel(),
    );
    return c.stream;
  }
}

/// Demo mode (`--dart-define=FAMILY_DEMO=true`): one in-memory server shared by a demo parent and a demo
/// relative, so the whole chat can be tried in a single window without Firebase. Nothing is saved or sent;
/// it resets when the app restarts. Never on in a normal build.
const kFamilyDemo = bool.fromEnvironment('FAMILY_DEMO');
final demoFamilyServer = FakeFamilyServer();
final demoParentRepo = FakeFamilyRepository(demoFamilyServer, 'demo-parent');
final demoRelativeRepo = FakeFamilyRepository(demoFamilyServer, 'demo-relative');
