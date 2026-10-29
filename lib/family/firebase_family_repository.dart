import 'dart:convert';
import 'dart:math';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';

import '../l10n/strings.dart';
import 'call_models.dart';
import 'call_repository.dart';
import 'family_models.dart';
import 'family_repository.dart';

/// Firebase implementation of the family chat. Layout and limits are enforced by firestore.rules; the checks
/// here only give clearer messages. Collections: invites/{code}, families/{parentUid}/relatives/{uid},
/// families/{parentUid}/messages/{id}, users/{uid}/families/{familyId}.
class FirebaseFamilyRepository implements FamilyRepository, CallRepository {
  final FirebaseAuth _auth = FirebaseAuth.instance;
  final FirebaseFirestore _db = FirebaseFirestore.instance;

  @override
  String? get uid => _auth.currentUser?.uid;

  CollectionReference<Map<String, dynamic>> _rels(String fid) => _db.collection('families').doc(fid).collection('relatives');
  CollectionReference<Map<String, dynamic>> _msgs(String fid) => _db.collection('families').doc(fid).collection('messages');

  Future<T> _guard<T>(Future<T> Function() run) async {
    try {
      return await run();
    } on FamilyException {
      rethrow;
    } on FirebaseException catch (e) {
      throw FamilyException(switch (e.code) {
        'permission-denied' => '${tr2('غير مسموح. ربما لم يوافق ولي الأمر بعد أو الرمز غير صالح.', 'Not allowed. The parent may not have approved yet, or the code is not valid.')} [permission-denied]',
        'unavailable' || 'network-request-failed' => tr2('لا يوجد اتصال بالإنترنت', 'No internet connection'),
        _ => '${tr2('تعذّر إكمال العملية، حاول مرة أخرى', 'Something went wrong, please try again')} [${e.code}]',
      });
    } catch (e) {
      // Not a Firebase error (for example a bug): show what it is so it can be reported, never hide it.
      throw FamilyException('${tr2('تعذّر إكمال العملية', 'Something went wrong')} [$e]');
    }
  }

  static Map<String, String> _strMap(Object? v) => v is Map ? {for (final e in v.entries) '${e.key}': '${e.value}'} : <String, String>{};

  Relative _relative(String id, Map<String, dynamic> d) => Relative(
        uid: id,
        name: (d['name'] as String?) ?? '',
        relation: (d['relation'] as String?) ?? 'other',
        status: (d['status'] as String?) ?? kRelativePending,
        children: _strMap(d['children']),
        callsOn: d['calls'] == true,
      );

  /// 8 characters without look-alikes (no 0/O, 1/I). Single use, so guessing is not a risk.
  String _newCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    final r = Random.secure();
    return String.fromCharCodes([for (var i = 0; i < 8; i++) chars.codeUnitAt(r.nextInt(chars.length))]);
  }

  @override
  Future<FamilyInvite> createInvite({required String parentName, required String relation, required Map<String, String> children}) => _guard(() async {
        final code = _newCode();
        await _db.collection('invites').doc(code).set({
          'familyId': uid!,
          'parentName': parentName,
          'relation': relation,
          'children': children,
          'used': false,
          'createdAt': FieldValue.serverTimestamp(),
        });
        return FamilyInvite(code: code, familyId: uid!, parentName: parentName, relation: relation, children: children);
      });

  @override
  Future<List<Relative>> relatives() => _guard(() async {
        final snap = await _rels(uid!).get();
        return [for (final d in snap.docs) _relative(d.id, d.data())];
      });

  @override
  Future<void> setRelativeStatus(String relUid, String status) => _guard(() => _rels(uid!).doc(relUid).update({'status': status}));

  @override
  Future<void> setRelativeCalls(String relUid, bool on) => _guard(() => _rels(uid!).doc(relUid).update({'calls': on}));

  @override
  Future<void> setRelativeChildren(String relUid, Map<String, String> children) => _guard(() => _rels(uid!).doc(relUid).update({'children': children}));

  @override
  Future<void> joinWithCode(String code, {required String name}) => _guard(() async {
        final c = code.trim().toUpperCase();
        final inv = await _db.collection('invites').doc(c).get();
        final d = inv.data();
        if (!inv.exists || d == null || d['used'] == true) {
          throw FamilyException(tr2('الرمز غير صحيح أو استُخدم من قبل', 'The code is not valid or was already used'));
        }
        final fid = d['familyId'] as String;
        final batch = _db.batch();
        batch.set(_rels(fid).doc(uid), {
          'name': name.trim(),
          'relation': d['relation'],
          'status': kRelativePending,
          'children': d['children'],
          'code': c,
        });
        batch.update(_db.collection('invites').doc(c), {'used': true, 'usedBy': uid});
        batch.set(_db.collection('users').doc(uid).collection('families').doc(fid), {'parentName': d['parentName']});
        await batch.commit();
      });

  @override
  Future<List<(String, String)>> myFamilies() => _guard(() async {
        final snap = await _db.collection('users').doc(uid).collection('families').get();
        return [for (final d in snap.docs) (d.id, (d.data()['parentName'] as String?) ?? '')];
      });

  @override
  Future<List<Relative>> myLinks(String familyId) => _guard(() async {
        final d = await _rels(familyId).doc(uid).get();
        return d.exists ? [_relative(d.id, d.data()!)] : <Relative>[];
      });

  @override
  Future<void> send({
    required String familyId,
    required String childId,
    required String childName,
    required String relUid,
    required Side from,
    required String kind,
    required String body,
  }) => _guard(() async {
        final problem = validateMessage(kind, body);
        if (problem != null) throw FamilyException(problem);
        await _msgs(familyId).add({
          'threadId': threadIdOf(childId, relUid),
          'childId': childId,
          'childName': childName,
          'relUid': relUid,
          'from': from == Side.child ? 'child' : 'relative',
          'kind': kind,
          'body': kind == kindText ? body.trim() : body,
          'at': FieldValue.serverTimestamp(),
        });
      });

  FamilyMessage _message(String id, Map<String, dynamic> d) => FamilyMessage(
        id: id,
        childId: (d['childId'] as String?) ?? '',
        childName: (d['childName'] as String?) ?? '',
        relUid: (d['relUid'] as String?) ?? '',
        from: d['from'] == 'child' ? Side.child : Side.relative,
        kind: (d['kind'] as String?) ?? kindText,
        body: (d['body'] as String?) ?? '',
        at: ((d['at'] as Timestamp?) ?? Timestamp.now()).toDate(), // a just-sent message has no server time yet
      );

  List<FamilyMessage> _sorted(QuerySnapshot<Map<String, dynamic>> s) =>
      [for (final d in s.docs) _message(d.id, d.data())]..sort((a, b) => a.at.compareTo(b.at));

  @override
  Stream<List<FamilyMessage>> watch({required String familyId, required String childId, required String relUid}) {
    // Both filters are equalities, so no composite index is needed; the relUid filter is what lets the rules
    // prove a relative reads only their own thread.
    final q = _msgs(familyId).where('threadId', isEqualTo: threadIdOf(childId, relUid)).where('relUid', isEqualTo: relUid);
    return q.snapshots().map(_sorted);
  }

  @override
  Future<List<FamilyMessage>> allMessages(String familyId) => _guard(() async => _sorted(await _msgs(familyId).get()));

  @override
  Future<void> clearThread({required String familyId, required String childId, required String relUid}) => _guard(() async {
        final snap = await _msgs(familyId).where('threadId', isEqualTo: threadIdOf(childId, relUid)).where('relUid', isEqualTo: relUid).get();
        final batch = _db.batch();
        for (final d in snap.docs) {
          batch.delete(d.reference);
        }
        await batch.commit();
      });

  // --- calls: signalling only (the audio goes straight between the two devices) -----------------

  CollectionReference<Map<String, dynamic>> _calls(String fid) => _db.collection('families').doc(fid).collection('calls');

  CallInfo _call(String familyId, String id, Map<String, dynamic> d) => CallInfo(
        id: id,
        familyId: familyId,
        childId: (d['childId'] as String?) ?? '',
        childName: (d['childName'] as String?) ?? '',
        relUid: (d['relUid'] as String?) ?? '',
        from: d['from'] == 'parent' ? CallFrom.parent : CallFrom.relative,
        status: (d['status'] as String?) ?? callEnded,
        offer: _strMap(d['offer']),
        answer: d['answer'] == null ? null : _strMap(d['answer']),
        createdAt: ((d['createdAt'] as Timestamp?) ?? Timestamp.now()).toDate(),
      );

  @override
  Future<String> startCall({
    required String familyId,
    required String childId,
    required String childName,
    required String relUid,
    required CallFrom from,
    required Map<String, String> offer,
  }) => _guard(() async {
        final ref = await _calls(familyId).add({
          'childId': childId,
          'childName': childName,
          'relUid': relUid,
          'from': from == CallFrom.parent ? 'parent' : 'relative',
          'status': callRinging,
          'offer': offer,
          'createdAt': FieldValue.serverTimestamp(),
        });
        return ref.id;
      });

  @override
  Stream<List<CallInfo>> watchIncoming(String familyId) {
    final me = uid;
    final Query<Map<String, dynamic>> q = me == familyId
        ? _calls(familyId).where('from', isEqualTo: 'relative').where('status', isEqualTo: callRinging)
        : _calls(familyId).where('relUid', isEqualTo: me).where('status', isEqualTo: callRinging);
    return q.snapshots().map((s) {
      final now = DateTime.now();
      return [
        for (final d in s.docs)
          if (me == familyId || d.data()['from'] == 'parent') _call(familyId, d.id, d.data()),
      ].where((c) => c.freshAt(now)).toList();
    });
  }

  @override
  Stream<CallInfo?> watchCall(String familyId, String callId) =>
      _calls(familyId).doc(callId).snapshots().map((d) => d.exists ? _call(familyId, d.id, d.data()!) : null);

  @override
  Future<void> answerCall(String familyId, String callId, Map<String, String> answer) =>
      _guard(() => _calls(familyId).doc(callId).update({'status': callAccepted, 'answer': answer}));

  @override
  Future<void> setCallStatus(String familyId, String callId, String status) => _guard(() => _calls(familyId).doc(callId).update({'status': status}));

  @override
  Future<void> addCandidate(String familyId, String callId, CallFrom from, Map<String, dynamic> candidate) => _guard(
        () => _calls(familyId).doc(callId).collection('candidates').add({
          'from': from == CallFrom.parent ? 'parent' : 'relative',
          'data': jsonEncode(candidate),
        }),
      );

  @override
  Stream<Map<String, dynamic>> watchCandidates(String familyId, String callId, CallFrom other) {
    final q = _calls(familyId).doc(callId).collection('candidates').where('from', isEqualTo: other == CallFrom.parent ? 'parent' : 'relative');
    return q.snapshots().expand((s) => [
          for (final c in s.docChanges)
            if (c.type == DocumentChangeType.added) jsonDecode(c.doc.data()!['data'] as String) as Map<String, dynamic>,
        ]);
  }
}
