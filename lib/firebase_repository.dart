import 'dart:convert';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';

import 'teachers_market.dart';
import 'teachers_models.dart';
import 'l10n/strings.dart';

/// Firebase implementation. Data lives in three Firestore collections:
/// users/{uid} (role, name), teachers/{uid} (profile, status) and
/// bookings/{id}. Access is limited by firestore.rules.
/// Optional profile fields: cleared ones are deleted on update.
const _optionalKeys = [
  'photoB64', 'cvName', 'headline', 'philosophy', 'ageMin', 'ageMax', 'lessonMinutes', 'priceEgp',
  'experienceYears', 'qualifications', 'cancellationPolicy',
];

class FirebaseTeacherRepository implements TeacherRepository {
  final FirebaseAuth _auth = FirebaseAuth.instance;
  final FirebaseFirestore _db = FirebaseFirestore.instance;

  @override
  AppUser? get currentUser {
    final u = _auth.currentUser;
    return u == null ? null : AppUser(u.uid, u.email ?? '');
  }

  DocumentReference<Map<String, dynamic>> get _userDoc =>
      _db.collection('users').doc(_auth.currentUser!.uid);

  @override
  Future<UserRole?> currentRole() async {
    final role = (await _userDoc.get()).data()?['role'] as String?;
    return UserRole.values.where((r) => r.name == role).firstOrNull;
  }

  @override
  Future<String> displayName() async =>
      ((await _userDoc.get()).data()?['name'] as String?) ?? '';

  String _authMessage(FirebaseAuthException e) => switch (e.code) {
        'email-already-in-use' => loc('هذا البريد مستخدم بالفعل'),
        'invalid-email' => loc('البريد الإلكتروني غير صحيح'),
        'weak-password' => loc('كلمة المرور ضعيفة (6 أحرف على الأقل)'),
        'wrong-password' ||
        'user-not-found' ||
        'invalid-credential' =>
          loc('البريد أو كلمة المرور غير صحيحة'),
        'too-many-requests' => loc('محاولات كثيرة، حاول لاحقاً'),
        'network-request-failed' => loc('لا يوجد اتصال بالإنترنت'),
        _ => loc('تعذر إكمال العملية، حاول مرة أخرى'),
      };

  Future<T> _guard<T>(Future<T> Function() run) async {
    try {
      return await run();
    } on FirebaseAuthException catch (e) {
      throw AccountException(_authMessage(e));
    } on FirebaseException catch (e) {
      throw AccountException(e.code == 'permission-denied'
          ? loc('ليس لديك صلاحية لهذه العملية')
          : loc('تعذر الاتصال بالخادم، حاول مرة أخرى'));
    }
  }

  @override
  Future<void> register({
    required String email,
    required String password,
    required String name,
    required UserRole role,
  }) =>
      _guard(() async {
        final cred = await _auth.createUserWithEmailAndPassword(
          email: email.trim(),
          password: password,
        );
        await _db.collection('users').doc(cred.user!.uid).set({
          'role': role.name,
          'name': name.trim(),
          'createdAt': FieldValue.serverTimestamp(),
        });
      });

  @override
  Future<void> signIn(String email, String password) => _guard(
        () => _auth.signInWithEmailAndPassword(email: email.trim(), password: password),
      );

  @override
  Future<void> signOut() => _auth.signOut();

  @override
  Future<List<TeacherProfile>> approvedTeachers() => _guard(() async {
        final snap = await _db
            .collection('teachers')
            .where('status', isEqualTo: teacherStatusApproved)
            .get();
        return [for (final d in snap.docs) TeacherProfile.fromMap(d.id, d.data())];
      });

  @override
  Future<TeacherProfile?> myTeacherProfile() => _guard(() async {
        final uid = _auth.currentUser!.uid;
        final doc = await _db.collection('teachers').doc(uid).get();
        final data = doc.data();
        return data == null ? null : TeacherProfile.fromMap(uid, data);
      });

  @override
  Future<void> saveTeacherProfile(TeacherProfile p, {CvFile? newCv}) => _guard(() async {
        final uid = _auth.currentUser!.uid;
        if (newCv != null) {
          await _db.collection('teacherFiles').doc(uid).set({
            'cvName': newCv.name,
            'cvB64': base64Encode(newCv.bytes),
          });
        }
        final ref = _db.collection('teachers').doc(uid);
        final map = p.toMap();
        final existing = (await ref.get()).data();
        if (existing != null) {
          // A teacher can never lift a suspension. An old pending profile
          // becomes visible when saved.
          if (existing['status'] == teacherStatusPending) {
            map['status'] = teacherStatusApproved;
          } else {
            map.remove('status');
          }
          // A field the teacher cleared is removed; the verification badges are
          // never written from the app (only the owner sets them in the console).
          for (final key in _optionalKeys) {
            if (!map.containsKey(key)) map[key] = FieldValue.delete();
          }
          await ref.update(map);
        } else {
          map['status'] = teacherStatusApproved;
          await ref.set(map);
        }
      });

  @override
  Future<CvFile?> loadCv(String teacherUid) => _guard(() async {
        final data = (await _db.collection('teacherFiles').doc(teacherUid).get()).data();
        if (data == null) return null;
        return CvFile(data['cvName'] as String, base64Decode(data['cvB64'] as String));
      });

  @override
  Future<void> reportTeacher(String teacherUid, String reason) => _guard(() async {
        await _db.collection('reports').add({
          'teacherUid': teacherUid,
          'reporterUid': _auth.currentUser!.uid,
          'reason': reason,
          'createdAt': FieldValue.serverTimestamp(),
        });
      });

  @override
  Future<void> requestBooking(Booking b) => _guard(() async {
        await _db.collection('bookings').add({
          ...b.toMap(),
          'createdAt': FieldValue.serverTimestamp(),
        });
      });

  @override
  Future<List<Booking>> myBookings() => _guard(() async {
        final uid = _auth.currentUser!.uid;
        final field = await currentRole() == UserRole.teacher ? 'teacherUid' : 'parentUid';
        final snap = await _db.collection('bookings').where(field, isEqualTo: uid).get();
        final list = [for (final d in snap.docs) (Booking.fromMap(d.id, d.data()), d.data())];
        // Newest first, sorted here so no Firestore index is needed.
        list.sort((a, b) {
          final ta = a.$2['createdAt'] as Timestamp?;
          final tb = b.$2['createdAt'] as Timestamp?;
          return (tb?.millisecondsSinceEpoch ?? 0).compareTo(ta?.millisecondsSinceEpoch ?? 0);
        });
        return [for (final e in list) e.$1];
      });

  @override
  Future<void> updateBooking(String id, {required String status, String? lessonLink}) =>
      _guard(() => _db.collection('bookings').doc(id).update({
            'status': status,
            'lessonLink': ?lessonLink,
          }));

  // --- availability and scheduled bookings ---------------------------------

  String get _uid => _auth.currentUser!.uid;

  @override
  Future<void> addSlots(List<Slot> slots) => _guard(() async {
        // One batch (max 500 writes). create-only: a slot that already exists is skipped.
        final existing = {for (final s in await slotsOf(_uid)) s.id};
        final batch = _db.batch();
        var n = 0;
        for (final s in slots.take(400)) {
          if (existing.contains(s.id)) continue;
          batch.set(_db.collection('slots').doc(s.id), s.toMap());
          n++;
        }
        if (n > 0) await batch.commit();
      });

  @override
  Future<List<Slot>> slotsOf(String teacherUid) => _guard(() async {
        final snap = await _db.collection('slots').where('teacherUid', isEqualTo: teacherUid).get();
        final list = [for (final d in snap.docs) Slot.fromMap(d.data())]..sort((a, b) => a.startMs.compareTo(b.startMs));
        return list;
      });

  @override
  Future<void> setSlotBlocked(String slotId, bool blocked) => _guard(
        () => _db.collection('slots').doc(slotId).update({'status': blocked ? slotBlocked : slotOpen}),
      );

  @override
  Future<void> deleteSlot(String slotId) => _guard(() => _db.collection('slots').doc(slotId).delete());

  @override
  Future<void> bookSlot(Booking booking) async {
    try {
      await _guard(() async {
        final ref = _db.collection('bookings').doc();
        final batch = _db.batch();
        batch.set(ref, {...booking.toMap(), 'createdAt': FieldValue.serverTimestamp()});
        batch.update(_db.collection('slots').doc(booking.slotId), {'status': slotBooked, 'bookingId': ref.id});
        await batch.commit();
      });
    } on AccountException catch (e) {
      // The slot was taken or changed meanwhile.
      if (e.message == 'ليس لديك صلاحية لهذه العملية') {
        throw AccountException(loc('هذا الموعد لم يعد متاحاً، اختر موعداً آخر'));
      }
      rethrow;
    }
  }

  @override
  Future<void> cancelOrDecline(Booking booking, {required String status}) => _guard(() async {
        final batch = _db.batch();
        batch.update(_db.collection('bookings').doc(booking.id), {'status': status});
        if (booking.slotId != null) {
          batch.update(_db.collection('slots').doc(booking.slotId), {'status': slotOpen, 'bookingId': FieldValue.delete()});
        }
        await batch.commit();
      });

  @override
  Future<void> finishLesson(Booking booking, {required String status}) =>
      _guard(() => _db.collection('bookings').doc(booking.id).update({'status': status}));

  // --- reports, reviews, messages --------------------------------------------

  @override
  Future<void> saveLessonReport(LessonReport r) => _guard(
        () => _db.collection('lessonReports').doc(r.bookingId).set({...r.toMap(), 'updatedAt': FieldValue.serverTimestamp()}),
      );

  @override
  Future<LessonReport?> lessonReportFor(String bookingId) => _guard(() async {
        final doc = await _db.collection('lessonReports').doc(bookingId).get();
        final data = doc.data();
        return data == null ? null : LessonReport.fromMap(bookingId, data);
      });

  @override
  Future<void> submitReview(Review r) => _guard(
        () => _db.collection('reviews').doc(r.bookingId).set({
          'bookingId': r.bookingId,
          'teacherUid': r.teacherUid,
          'parentUid': r.parentUid,
          'rating': r.rating,
          'text': r.text,
          'createdAt': FieldValue.serverTimestamp(),
        }),
      );

  @override
  Future<List<Review>> reviewsFor(String teacherUid) => _guard(() async {
        final snap = await _db.collection('reviews').where('teacherUid', isEqualTo: teacherUid).get();
        return [for (final d in snap.docs) Review.fromMap(d.data())];
      });

  @override
  Future<List<Review>> allReviews() => _guard(() async {
        final snap = await _db.collection('reviews').limit(1000).get();
        return [for (final d in snap.docs) Review.fromMap(d.data())];
      });

  @override
  Future<void> reportReview(String bookingId, String reason) => _guard(
        () => _db.collection('reviewReports').add({
          'bookingId': bookingId,
          'reporterUid': _uid,
          'reason': reason,
          'createdAt': FieldValue.serverTimestamp(),
        }),
      );

  @override
  Future<List<ChatMessage>> messagesOf(String bookingId) => _guard(() async {
        final snap = await _db.collection('bookings').doc(bookingId).collection('messages').orderBy('createdAt').get();
        return [
          for (final d in snap.docs)
            ChatMessage(
              id: d.id,
              senderUid: d.data()['senderUid'] as String,
              text: d.data()['text'] as String,
              createdMs: (d.data()['createdAt'] as Timestamp?)?.millisecondsSinceEpoch ?? 0,
            ),
        ];
      });

  @override
  Future<void> sendMessage(String bookingId, String text) => _guard(
        () => _db.collection('bookings').doc(bookingId).collection('messages').add({
          'senderUid': _uid,
          'text': text,
          'createdAt': FieldValue.serverTimestamp(),
        }),
      );

  // --- requests and proposals --------------------------------------------------

  LearningRequest _request(QueryDocumentSnapshot<Map<String, dynamic>> d) => LearningRequest.fromMap(
        d.id,
        d.data(),
        createdMs: (d.data()['createdAt'] as Timestamp?)?.millisecondsSinceEpoch ?? 0,
      );

  @override
  Future<void> createRequest(LearningRequest r) => _guard(
        () => _db.collection('requests').add({...r.toMap(), 'createdAt': FieldValue.serverTimestamp()}),
      );

  @override
  Future<List<LearningRequest>> myRequests() => _guard(() async {
        final snap = await _db.collection('requests').where('parentUid', isEqualTo: _uid).get();
        return [for (final d in snap.docs) _request(d)]..sort((a, b) => b.createdMs.compareTo(a.createdMs));
      });

  @override
  Future<List<LearningRequest>> openRequests() => _guard(() async {
        final snap = await _db.collection('requests').where('status', isEqualTo: requestOpen).get();
        final now = DateTime.now();
        return [for (final d in snap.docs) _request(d)]
            .where((r) => !r.isExpired(now))
            .toList()
          ..sort((a, b) => b.createdMs.compareTo(a.createdMs));
      });

  @override
  Future<void> closeRequest(String requestId) =>
      _guard(() => _db.collection('requests').doc(requestId).update({'status': requestClosed}));

  @override
  Future<void> submitProposal(Proposal p) => _guard(
        () => _db.collection('proposals').doc(p.id).set({...p.toMap(), 'createdAt': FieldValue.serverTimestamp()}),
      );

  @override
  Future<List<Proposal>> proposalsForRequest(String requestId) => _guard(() async {
        final snap = await _db
            .collection('proposals')
            .where('requestId', isEqualTo: requestId)
            .where('parentUid', isEqualTo: _uid)
            .get();
        return [for (final d in snap.docs) Proposal.fromMap(d.data())];
      });

  @override
  Future<List<Proposal>> myProposals() => _guard(() async {
        final snap = await _db.collection('proposals').where('teacherUid', isEqualTo: _uid).get();
        return [for (final d in snap.docs) Proposal.fromMap(d.data())];
      });

  @override
  Future<void> setProposalStatus(String proposalId, String status) =>
      _guard(() => _db.collection('proposals').doc(proposalId).update({'status': status}));

  @override
  Future<void> acceptProposal(Proposal proposal, Booking booking) => _guard(() async {
        final batch = _db.batch();
        batch.update(_db.collection('proposals').doc(proposal.id), {'status': proposalAccepted});
        batch.set(_db.collection('bookings').doc(), {...booking.toMap(), 'createdAt': FieldValue.serverTimestamp()});
        await batch.commit();
      });
}
