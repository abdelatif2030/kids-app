import 'dart:convert';
import 'dart:typed_data';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';

import '../l10n/strings.dart';
import 'call_models.dart';
import 'call_repository.dart';
import 'family_models.dart';
import 'family_repository.dart';

/// Firebase implementation of the family chat. Layout and limits are enforced by firestore.rules; the checks
/// here only give clearer messages. Collections: families/{parentUid}/relatives/{uid},
/// families/{parentUid}/messages/{id}, users/{uid}/families/{familyId}.
class FirebaseFamilyRepository implements FamilyRepository, CallRepository {
  final FirebaseAuth _auth = FirebaseAuth.instance;
  final FirebaseFirestore _db = FirebaseFirestore.instance;

  @override
  String? get uid => _auth.currentUser?.uid;

  @override
  Future<String?> myUsername() => _guard(() async {
        final me = uid;
        if (me == null) return null;
        final d = await _db.collection('users').doc(me).get();
        final n = d.data()?['username'];
        return n is String && n.isNotEmpty ? n : null;
      });

  @override
  Future<void> claimUsername(String username) => _guard(() async {
        final name = normalizeUsername(username);
        if (!validUsername(name)) {
          throw FamilyException(tr2('اسم المستخدم من ٣ إلى ٢٠ حرفاً أو رقماً أو «_» بلا مسافات', 'A user name is 3 to 20 letters, digits or "_", with no spaces'));
        }
        if (await myUsername() != null) throw FamilyException(tr2('لديك اسم مستخدم بالفعل', 'You already have a user name'));
        final ref = _db.collection('usernames').doc(name);
        if ((await ref.get()).exists) {
          throw FamilyException(tr2('هذا الاسم مستخدم، اختر اسماً آخر', 'This user name is taken, choose another'));
        }
        // Both writes in one batch: the name and the pointer back on the account (the rules check both).
        final batch = _db.batch();
        batch.set(ref, {'uid': uid, 'displayName': (_auth.currentUser?.displayName ?? '').trim()});
        batch.update(_db.collection('users').doc(uid), {'username': name});
        await batch.commit();
      });

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
        voiceOn: d['voice'] == true,
        videoOn: d['video'] == true,
        nextCall: (d['nextCall'] as String?) ?? '',
      );

  /// 8 characters without look-alikes (no 0/O, 1/I). Single use, so guessing is not a risk.
  // --- connection requests -------------------------------------------------------------------------
  CollectionReference<Map<String, dynamic>> get _requests => _db.collection('connectRequests');

  ConnectRequest _request(String id, Map<String, dynamic> d) => ConnectRequest(
        id: id,
        familyId: (d['familyId'] as String?) ?? '',
        parentName: (d['parentName'] as String?) ?? '',
        toName: (d['toName'] as String?) ?? '',
        toUid: (d['toUid'] as String?) ?? '',
        relation: (d['relation'] as String?) ?? 'other',
        children: _strMap(d['children']),
        status: (d['status'] as String?) ?? kRequestPending,
      );

  @override
  Future<ConnectRequest> sendConnectRequest({
    required String parentName,
    required String toName,
    required String relation,
    required Map<String, String> children,
  }) => _guard(() async {
        final name = normalizeUsername(toName);
        if (!validUsername(name)) {
          throw FamilyException(tr2('اسم المستخدم من ٣ إلى ٢٠ حرفاً أو رقماً أو «_» بلا مسافات', 'A user name is 3 to 20 letters, digits or "_", with no spaces'));
        }
        // One exact document is read: there is no search and no list of people.
        final found = await _db.collection('usernames').doc(name).get();
        final toUid = found.data()?['uid'] as String?;
        if (!found.exists || toUid == null) {
          throw FamilyException(tr2('لا يوجد قريب بهذا الاسم. اسأله عن اسم المستخدم الذي اختاره في التطبيق.', 'Nobody has this user name. Ask the person which user name they chose in the app.'));
        }
        final data = {
          'familyId': uid!,
          'parentName': parentName,
          'toName': name,
          'toUid': toUid,
          'relation': relation,
          'children': children,
          'status': kRequestPending,
          'createdAt': FieldValue.serverTimestamp(),
        };
        final ref = await _requests.add(data);
        return ConnectRequest(id: ref.id, familyId: uid!, parentName: parentName, toName: name, toUid: toUid, relation: relation, children: children);
      });

  @override
  Future<List<ConnectRequest>> sentRequests() => _guard(() async {
        final snap = await _requests.where('familyId', isEqualTo: uid).where('status', isEqualTo: kRequestPending).get();
        return [for (final d in snap.docs) _request(d.id, d.data())];
      });

  @override
  Future<void> cancelRequest(String requestId) => _guard(() => _requests.doc(requestId).update({'status': kRequestCancelled}));

  @override
  Stream<List<ConnectRequest>> watchIncomingRequests() {
    final me = uid;
    if (me == null) return Stream.value(const []);
    return _requests
        .where('toUid', isEqualTo: me)
        .where('status', isEqualTo: kRequestPending)
        .snapshots()
        .map((s) => [for (final d in s.docs) _request(d.id, d.data())]);
  }

  @override
  Future<void> respondToRequest(ConnectRequest request, {required bool accept, required String name}) => _guard(() async {
        final batch = _db.batch();
        batch.update(_requests.doc(request.id), {'status': accept ? kRequestAccepted : kRequestDeclined});
        if (accept) {
          batch.set(_rels(request.familyId).doc(uid), {
            'name': name.trim(),
            'relation': request.relation,
            'status': kRelativeActive,
            'children': request.children,
            'requestId': request.id,
          });
          batch.set(_db.collection('users').doc(uid).collection('families').doc(request.familyId), {'parentName': request.parentName});
        }
        await batch.commit();
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
  Future<void> setRelativeVideo(String relUid, bool on) => _guard(() => _rels(uid!).doc(relUid).update({'video': on}));

  @override
  Future<void> setRelativeVoice(String relUid, bool on) => _guard(() => _rels(uid!).doc(relUid).update({'voice': on}));

  CollectionReference<Map<String, dynamic>> _voices(String fid) => _db.collection('families').doc(fid).collection('voices');

  @override
  Future<void> sendVoice({
    required String familyId,
    required String childId,
    required String childName,
    required String relUid,
    required Side from,
    required Uint8List bytes,
    required String mime,
    required int secs,
  }) => _guard(() async {
        if (bytes.isEmpty || bytes.length > kMaxVoiceBytes || secs < 1 || secs > kMaxVoiceSeconds) {
          throw FamilyException(tr2('الرسالة الصوتية طويلة جداً', 'The voice message is too long'));
        }
        final side = from == Side.child ? 'child' : 'relative';
        // First the sound (a small document of its own), then the message that points to it.
        final ref = await _voices(familyId).add({
          'childId': childId,
          'relUid': relUid,
          'from': side,
          'data': base64Encode(bytes),
          'mime': mime,
          'secs': secs,
          'at': FieldValue.serverTimestamp(),
        });
        await _msgs(familyId).add({
          'threadId': threadIdOf(childId, relUid),
          'childId': childId,
          'childName': childName,
          'relUid': relUid,
          'from': side,
          'kind': kindVoice,
          'body': ref.id,
          'secs': secs,
          'at': FieldValue.serverTimestamp(),
        });
      });

  @override
  Future<VoiceClip?> loadVoice(String familyId, String voiceId, {required String relUid}) => _guard(() async {
        final d = await _voices(familyId).doc(voiceId).get();
        final m = d.data();
        if (!d.exists || m == null) return null;
        return VoiceClip(base64Decode(m['data'] as String), (m['mime'] as String?) ?? 'audio/webm');
      });

  @override
  Future<int> purgeOldVoices(String familyId, {int days = kVoiceKeepDays}) => _guard(() async {
        final cutoff = Timestamp.fromDate(DateTime.now().subtract(Duration(days: days)));
        final snap = await _voices(familyId).where('at', isLessThan: cutoff).limit(200).get();
        if (snap.docs.isEmpty) return 0;
        final batch = _db.batch();
        for (final d in snap.docs) {
          batch.delete(d.reference);
        }
        await batch.commit();
        return snap.docs.length;
      });

  @override
  Future<void> setRelativeNextCall(String relUid, String text) {
    if (text.length > kMaxNextCallLength || containsLink(text)) throw FamilyException(tr2('النص طويل أو فيه رابط', 'Too long, or it has a link'));
    return _guard(() => _rels(uid!).doc(relUid).update({'nextCall': text.trim()}));
  }

  @override
  Future<void> setRelativeChildren(String relUid, Map<String, String> children) => _guard(() => _rels(uid!).doc(relUid).update({'children': children}));

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
        secs: (d['secs'] as int?) ?? 0,
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
  Future<List<FamilyMessage>> allMessages(String familyId) =>
      _guard(() async => _sorted(await _msgs(familyId).orderBy('at', descending: true).limit(400).get()));

  @override
  Future<List<FamilyMessage>> recentMessages(String familyId, {int limit = 80}) =>
      _guard(() async => _sorted(await _msgs(familyId).orderBy('at', descending: true).limit(limit).get()));

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
        video: d['video'] == true,
      );

  @override
  Future<int> purgeOldCalls(String familyId, {int hours = 24}) => _guard(() async {
        final cutoff = Timestamp.fromDate(DateTime.now().subtract(Duration(hours: hours)));
        final snap = await _calls(familyId).where('createdAt', isLessThan: cutoff).limit(40).get();
        var n = 0;
        for (final d in snap.docs) {
          if (d.data()['status'] == callRinging) continue;
          final cands = await d.reference.collection('candidates').limit(200).get();
          final batch = _db.batch();
          for (final c in cands.docs) {
            batch.delete(c.reference);
          }
          batch.delete(d.reference);
          await batch.commit();
          n++;
        }
        return n;
      });

  @override
  Future<String> startCall({
    required String familyId,
    required String childId,
    required String childName,
    required String relUid,
    required CallFrom from,
    required Map<String, String> offer,
    bool video = false,
  }) => _guard(() async {
        final ref = await _calls(familyId).add({
          'childId': childId,
          'childName': childName,
          'relUid': relUid,
          'from': from == CallFrom.parent ? 'parent' : 'relative',
          'status': callRinging,
          'offer': offer,
          if (video) 'video': true,
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
