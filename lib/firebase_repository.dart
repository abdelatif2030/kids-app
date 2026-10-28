import 'dart:convert';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';

import 'teachers_models.dart';

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
        'email-already-in-use' => 'هذا البريد مستخدم بالفعل',
        'invalid-email' => 'البريد الإلكتروني غير صحيح',
        'weak-password' => 'كلمة المرور ضعيفة (6 أحرف على الأقل)',
        'wrong-password' ||
        'user-not-found' ||
        'invalid-credential' =>
          'البريد أو كلمة المرور غير صحيحة',
        'too-many-requests' => 'محاولات كثيرة، حاول لاحقاً',
        'network-request-failed' => 'لا يوجد اتصال بالإنترنت',
        _ => 'تعذر إكمال العملية، حاول مرة أخرى',
      };

  Future<T> _guard<T>(Future<T> Function() run) async {
    try {
      return await run();
    } on FirebaseAuthException catch (e) {
      throw AccountException(_authMessage(e));
    } on FirebaseException catch (e) {
      throw AccountException(e.code == 'permission-denied'
          ? 'ليس لديك صلاحية لهذه العملية'
          : 'تعذر الاتصال بالخادم، حاول مرة أخرى');
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
}
