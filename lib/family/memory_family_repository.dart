import 'dart:async';

import 'family_models.dart';
import 'family_repository.dart';

/// In-memory family server shared by several "devices" (one FakeFamilyRepository per signed-in account).
class FakeFamilyServer {
  final invites = <String, Map<String, dynamic>>{}; // code -> {familyId, parentName, relation, children, used}
  final relatives = <String, Map<String, Relative>>{}; // familyId -> relUid -> Relative
  final messages = <String, List<FamilyMessage>>{}; // familyId -> messages
  final _changes = StreamController<String>.broadcast();
  int _n = 0;
}

class FakeFamilyRepository implements FamilyRepository {
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
}

/// Demo mode (`--dart-define=FAMILY_DEMO=true`): one in-memory server shared by a demo parent and a demo
/// relative, so the whole chat can be tried in a single window without Firebase. Nothing is saved or sent;
/// it resets when the app restarts. Never on in a normal build.
const kFamilyDemo = bool.fromEnvironment('FAMILY_DEMO');
final demoFamilyServer = FakeFamilyServer();
final demoParentRepo = FakeFamilyRepository(demoFamilyServer, 'demo-parent');
final demoRelativeRepo = FakeFamilyRepository(demoFamilyServer, 'demo-relative');
