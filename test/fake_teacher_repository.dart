import 'package:kids_app/teachers_models.dart';

/// In-memory stand-in for Firebase that follows the same rules as
/// firestore.rules: new teacher profiles are pending, only [approve] (the app
/// owner in the console) can approve, parents see approved teachers only.
class FakeTeacherRepository implements TeacherRepository {
  final Map<String, ({String email, String password, String name, UserRole role})> _users = {};
  final Map<String, TeacherProfile> _teachers = {};
  final List<Booking> _bookings = [];
  final Map<String, CvFile> _cvs = {};
  final List<({String teacherUid, String reporterUid, String reason})> reports = [];
  AppUser? _current;
  int _nextId = 1;

  @override
  AppUser? get currentUser => _current;

  @override
  Future<UserRole?> currentRole() async => _users[_current!.uid]?.role;

  @override
  Future<String> displayName() async => _users[_current!.uid]?.name ?? '';

  @override
  Future<void> register({
    required String email,
    required String password,
    required String name,
    required UserRole role,
  }) async {
    if (_users.values.any((u) => u.email == email)) {
      throw const AccountException('هذا البريد مستخدم بالفعل');
    }
    final uid = 'u${_nextId++}';
    _users[uid] = (email: email, password: password, name: name, role: role);
    _current = AppUser(uid, email);
  }

  @override
  Future<void> signIn(String email, String password) async {
    final hit = _users.entries
        .where((e) => e.value.email == email && e.value.password == password)
        .firstOrNull;
    if (hit == null) throw const AccountException('البريد أو كلمة المرور غير صحيحة');
    _current = AppUser(hit.key, email);
  }

  @override
  Future<void> signOut() async => _current = null;

  /// The app owner hiding a teacher in the Firebase console.
  void suspend(String uid) {
    _teachers[uid] = _teachers[uid]!.copyWith(status: teacherStatusSuspended);
  }

  /// The app owner verifying a teacher in the console.
  void verify(String uid, {bool? identity, bool? qualification}) {
    _teachers[uid] = _teachers[uid]!.withVerification(identity: identity, qualification: qualification);
  }

  /// Puts a ready-made profile in the "database" (as if the teacher had saved it).
  void seed(TeacherProfile p) => _teachers[p.uid] = p;

  String get teacherUid => _teachers.keys.single;

  @override
  Future<List<TeacherProfile>> approvedTeachers() async =>
      _teachers.values.where((t) => t.approved).toList();

  @override
  Future<TeacherProfile?> myTeacherProfile() async => _teachers[_current!.uid];

  @override
  Future<void> saveTeacherProfile(TeacherProfile p, {CvFile? newCv}) async {
    final old = _teachers[_current!.uid];
    if (newCv != null) _cvs[_current!.uid] = newCv;
    // Visible at once; a suspension can never be lifted by the teacher, and a
    // teacher can never set or change the verification badges.
    _teachers[_current!.uid] = p.copyWith(
      status: old == null || old.status == teacherStatusPending ? teacherStatusApproved : old.status,
      identityVerified: old?.identityVerified ?? false,
      qualificationVerified: old?.qualificationVerified ?? false,
    );
  }

  @override
  Future<CvFile?> loadCv(String teacherUid) async => _cvs[teacherUid];

  @override
  Future<void> reportTeacher(String teacherUid, String reason) async =>
      reports.add((teacherUid: teacherUid, reporterUid: _current!.uid, reason: reason));

  @override
  Future<void> requestBooking(Booking b) async {
    if (!(_teachers[b.teacherUid]?.approved ?? false)) {
      throw const AccountException('ليس لديك صلاحية لهذه العملية');
    }
    _bookings.add(Booking(
      id: 'b${_nextId++}',
      parentUid: b.parentUid,
      teacherUid: b.teacherUid,
      teacherName: b.teacherName,
      parentName: b.parentName,
      subject: b.subject,
      whenText: b.whenText,
      childAge: b.childAge,
      note: b.note,
    ));
  }

  @override
  Future<List<Booking>> myBookings() async {
    final uid = _current!.uid;
    final teacher = _users[uid]?.role == UserRole.teacher;
    return [
      for (final b in _bookings)
        if (teacher ? b.teacherUid == uid : b.parentUid == uid) b,
    ];
  }

  @override
  Future<void> updateBooking(String id, {required String status, String? lessonLink}) async {
    final i = _bookings.indexWhere((b) => b.id == id);
    final b = _bookings[i];
    _bookings[i] = Booking(
      id: b.id,
      parentUid: b.parentUid,
      teacherUid: b.teacherUid,
      teacherName: b.teacherName,
      parentName: b.parentName,
      subject: b.subject,
      whenText: b.whenText,
      childAge: b.childAge,
      note: b.note,
      status: status,
      lessonLink: lessonLink ?? b.lessonLink,
    );
  }
}
