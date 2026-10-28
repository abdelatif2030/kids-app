/// Models and the repository interface for parent/teacher accounts, teacher
/// profiles and lesson requests. The screens only know this interface, so the
/// Firebase code (firebase_repository.dart) can be swapped for a fake in tests.
///
/// Privacy: no child data is stored except an optional age on a lesson request.
/// There is no chat or messaging anywhere.
library;

import 'dart:convert';
import 'dart:typed_data';

enum UserRole { parent, teacher }

class AppUser {
  final String uid;
  final String email;
  const AppUser(this.uid, this.email);
}

/// A user-facing (Arabic) error from sign-in, registration or saving.
class AccountException implements Exception {
  final String message;
  const AccountException(this.message);
  @override
  String toString() => message;
}

const teacherStatusPending = 'pending'; // old profiles only; saving one makes it visible
/// New profiles are visible to parents straight away.
const teacherStatusApproved = 'approved';

/// Set by the app owner in the Firebase console to hide a teacher.
const teacherStatusSuspended = 'suspended';

/// Languages a teacher can offer, as shown to parents.
const kTeacherLanguages = ['العربية', 'English', 'Deutsch', 'Français'];

/// A teacher's CV (pdf/jpg/png), kept small so it fits in Firestore.
class CvFile {
  final String name;
  final Uint8List bytes;
  const CvFile(this.name, this.bytes);
}

class TeacherProfile {
  final String uid;
  final String name;
  final String bio;
  final List<String> subjects; // subject ids from curriculum.dart
  final List<String> languages;
  final String priceNote; // free text, e.g. "150 جنيه للحصة"
  final String status; // approved (visible) or suspended (hidden by the owner)
  final String? photoB64; // small JPEG, base64
  final String? cvName; // the CV file itself is loaded on demand (loadCv)

  const TeacherProfile({
    required this.uid,
    required this.name,
    required this.bio,
    required this.subjects,
    required this.languages,
    required this.priceNote,
    this.status = teacherStatusApproved,
    this.photoB64,
    this.cvName,
  });

  bool get approved => status == teacherStatusApproved;
  bool get suspended => status == teacherStatusSuspended;

  Uint8List? get photoBytes => photoB64 == null ? null : base64Decode(photoB64!);

  Map<String, dynamic> toMap() => {
        'name': name,
        'bio': bio,
        'subjects': subjects,
        'languages': languages,
        'priceNote': priceNote,
        'status': status,
        // Omitted when empty: the rules read these fields and null would break them.
        'photoB64': ?photoB64,
        'cvName': ?cvName,
      };

  factory TeacherProfile.fromMap(String uid, Map<String, dynamic> m) => TeacherProfile(
        uid: uid,
        name: (m['name'] as String?) ?? '',
        bio: (m['bio'] as String?) ?? '',
        subjects: [for (final s in (m['subjects'] as List<dynamic>? ?? [])) s as String],
        languages: [for (final s in (m['languages'] as List<dynamic>? ?? [])) s as String],
        priceNote: (m['priceNote'] as String?) ?? '',
        status: (m['status'] as String?) ?? teacherStatusApproved,
        photoB64: m['photoB64'] as String?,
        cvName: m['cvName'] as String?,
      );
}

const bookingRequested = 'requested';
const bookingAccepted = 'accepted';
const bookingDeclined = 'declined';
const bookingCancelled = 'cancelled';

class Booking {
  final String id;
  final String parentUid;
  final String teacherUid;
  final String teacherName;
  final String parentName;
  final String subject;
  final String whenText; // the parent's preferred time, free text
  final int? childAge; // optional
  final String note;
  final String status;
  final String? lessonLink; // set by the teacher on accepting

  const Booking({
    this.id = '',
    required this.parentUid,
    required this.teacherUid,
    required this.teacherName,
    required this.parentName,
    required this.subject,
    required this.whenText,
    this.childAge,
    this.note = '',
    this.status = bookingRequested,
    this.lessonLink,
  });

  Map<String, dynamic> toMap() => {
        'parentUid': parentUid,
        'teacherUid': teacherUid,
        'teacherName': teacherName,
        'parentName': parentName,
        'subject': subject,
        'whenText': whenText,
        'childAge': childAge,
        'note': note,
        'status': status,
        'lessonLink': lessonLink,
      };

  factory Booking.fromMap(String id, Map<String, dynamic> m) => Booking(
        id: id,
        parentUid: m['parentUid'] as String,
        teacherUid: m['teacherUid'] as String,
        teacherName: (m['teacherName'] as String?) ?? '',
        parentName: (m['parentName'] as String?) ?? '',
        subject: (m['subject'] as String?) ?? '',
        whenText: (m['whenText'] as String?) ?? '',
        childAge: m['childAge'] as int?,
        note: (m['note'] as String?) ?? '',
        status: (m['status'] as String?) ?? bookingRequested,
        lessonLink: m['lessonLink'] as String?,
      );
}

/// A lesson link must be https so a parent never opens a plain-http page.
bool isValidLessonLink(String link) {
  final uri = Uri.tryParse(link.trim());
  return uri != null && uri.scheme == 'https' && uri.host.contains('.');
}

abstract class TeacherRepository {
  AppUser? get currentUser;
  Future<UserRole?> currentRole();
  Future<String> displayName();

  Future<void> register({
    required String email,
    required String password,
    required String name,
    required UserRole role,
  });
  Future<void> signIn(String email, String password);
  Future<void> signOut();

  /// Teachers that are visible (not suspended by the app owner).
  Future<List<TeacherProfile>> approvedTeachers();
  Future<TeacherProfile?> myTeacherProfile();

  /// A new profile is visible at once. Saving never lets a teacher change a
  /// suspension.
  /// [newCv], when given, replaces the stored CV (profile.cvName should match).
  Future<void> saveTeacherProfile(TeacherProfile profile, {CvFile? newCv});

  /// The CV of an approved teacher (or your own), or null if there is none.
  Future<CvFile?> loadCv(String teacherUid);

  /// A parent's report about a teacher. Only the app owner can read it (console).
  Future<void> reportTeacher(String teacherUid, String reason);

  Future<void> requestBooking(Booking booking);

  /// The signed-in parent's requests, or the signed-in teacher's incoming ones.
  Future<List<Booking>> myBookings();

  /// [status] is one of the booking* constants; [lessonLink] only when accepting.
  Future<void> updateBooking(String id, {required String status, String? lessonLink});
}
