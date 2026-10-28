import 'package:kids_app/teachers_market.dart';
import 'package:kids_app/teachers_models.dart';
import 'package:kids_app/teachers_portfolio.dart';

/// In-memory stand-in for Firebase that follows the same rules as
/// firestore.rules: new teacher profiles are pending, only [approve] (the app
/// owner in the console) can approve, parents see approved teachers only.
class FakeTeacherRepository implements TeacherRepository {
  final Map<String, ({String email, String password, String name, UserRole role})> _users = {};
  final Map<String, TeacherProfile> _teachers = {};
  final List<Booking> _bookings = [];
  final Map<String, CvFile> _cvs = {};
  final List<PortfolioItem> _portfolio = [];
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

  /// The app owner hiding one item in the console (the teacher cannot lift it).
  void hideItem(String id) {
    final i = _portfolio.indexWhere((x) => x.id == id);
    _portfolio[i] = _portfolio[i].copyWith(status: portfolioHidden);
  }

  @override
  Future<List<PortfolioItem>> portfolioOf(String teacherUid) async {
    final mine = _current?.uid == teacherUid;
    return [
      for (final i in _portfolio)
        if (i.teacherUid == teacherUid && (mine || i.published)) i,
    ];
  }

  @override
  Future<void> savePortfolioItem(PortfolioItem item) async {
    final me = _current!.uid;
    if (_users[me]?.role != UserRole.teacher) throw const AccountException('ليس لديك صلاحية لهذه العملية');
    final problem = validatePortfolioItem(item);
    if (problem != null) throw AccountException(problem);
    if (item.id.isEmpty) {
      if (_portfolio.where((x) => x.teacherUid == me).length >= kPortfolioMaxItems) {
        throw const AccountException('وصلت إلى الحد الأقصى للأعمال');
      }
      _portfolio.add(item.copyWith(id: 'w${_nextId++}', teacherUid: me));
      return;
    }
    final i = _portfolio.indexWhere((x) => x.id == item.id && x.teacherUid == me);
    if (i < 0) throw const AccountException('ليس لديك صلاحية لهذه العملية');
    // A hidden item stays hidden: the teacher cannot lift the owner's decision.
    _portfolio[i] = item.copyWith(teacherUid: me, status: _portfolio[i].hidden ? portfolioHidden : item.status);
  }

  @override
  Future<void> deletePortfolioItem(String id) async {
    _portfolio.removeWhere((x) => x.id == id && x.teacherUid == _current!.uid);
  }

  @override
  Future<void> reportTeacher(String teacherUid, String reason) async =>
      reports.add((teacherUid: teacherUid, reporterUid: _current!.uid, reason: reason));

  @override
  Future<void> requestBooking(Booking b) async {
    if (!(_teachers[b.teacherUid]?.approved ?? false)) {
      throw const AccountException('ليس لديك صلاحية لهذه العملية');
    }
    _bookings.add(b.copyWith(id: 'b${_nextId++}'));
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
    _bookings[i] = _bookings[i].copyWith(status: status, lessonLink: lessonLink);
  }

  // ---- marketplace (mirrors firestore.rules; see rules_test/rules.test.mjs) ----

  /// Moves the fake's clock, so lessons can "start" and requests can expire.
  DateTime Function() clock = DateTime.now;
  int get _now => clock().millisecondsSinceEpoch;

  final Map<String, Slot> _slots = {};
  final Map<String, LessonReport> _reports = {};
  final Map<String, Review> _reviews = {};
  final Map<String, List<ChatMessage>> _messages = {};
  final Map<String, LearningRequest> _requests = {};
  final Map<String, Proposal> _proposals = {};
  final List<({String bookingId, String reporterUid, String reason})> reviewReports = [];
  static const _denied = AccountException('ليس لديك صلاحية لهذه العملية');

  String get _uid => _current!.uid;
  UserRole? get _role => _users[_uid]?.role;
  Booking? _booking(String id) => _bookings.where((b) => b.id == id).firstOrNull;

  /// Test helper: a booking whose lesson already happened (the owner/emulator seeding).
  void forceBooking(Booking b) => _bookings.add(b);
  Booking bookingById(String id) => _booking(id)!;

  @override
  Future<void> addSlots(List<Slot> slots) async {
    if (_role != UserRole.teacher) throw _denied;
    for (final s in slots) {
      if (s.teacherUid != _uid || s.startMs <= _now || s.minutes < 15 || s.minutes > 180) throw _denied;
      _slots.putIfAbsent(s.id, () => s);
    }
  }

  @override
  Future<List<Slot>> slotsOf(String teacherUid) async =>
      [for (final s in _slots.values) if (s.teacherUid == teacherUid) s]..sort((a, b) => a.startMs.compareTo(b.startMs));

  @override
  Future<void> setSlotBlocked(String slotId, bool blocked) async {
    final s = _slots[slotId];
    if (s == null || s.teacherUid != _uid || s.status == slotBooked) throw _denied;
    _slots[slotId] = Slot(teacherUid: s.teacherUid, startMs: s.startMs, minutes: s.minutes, status: blocked ? slotBlocked : slotOpen);
  }

  @override
  Future<void> deleteSlot(String slotId) async {
    final s = _slots[slotId];
    if (s == null || s.teacherUid != _uid || s.status == slotBooked) throw _denied;
    _slots.remove(slotId);
  }

  @override
  Future<void> bookSlot(Booking b) async {
    final s = _slots[b.slotId];
    if (_role != UserRole.parent || !(_teachers[b.teacherUid]?.approved ?? false)) throw _denied;
    if (s == null || !s.isBookableAt(clock()) || s.teacherUid != b.teacherUid || s.startMs != b.startMs || s.minutes != b.minutes) {
      throw const AccountException('هذا الموعد لم يعد متاحاً، اختر موعداً آخر');
    }
    final id = 'b${_nextId++}';
    _bookings.add(b.copyWith(id: id));
    _slots[s.id] = Slot(teacherUid: s.teacherUid, startMs: s.startMs, minutes: s.minutes, status: slotBooked, bookingId: id);
  }

  @override
  Future<void> cancelOrDecline(Booking b, {required String status}) async {
    final cur = _booking(b.id);
    if (cur == null) throw _denied;
    final byParent = status == bookingCancelled && cur.parentUid == _uid && (cur.status == bookingRequested || cur.status == bookingAccepted);
    final byTeacher = status == bookingDeclined && cur.teacherUid == _uid && cur.status == bookingRequested;
    if (!byParent && !byTeacher) throw _denied;
    _bookings[_bookings.indexWhere((x) => x.id == b.id)] = cur.copyWith(status: status);
    final s = _slots[cur.slotId];
    if (s != null) {
      _slots[s.id] = Slot(teacherUid: s.teacherUid, startMs: s.startMs, minutes: s.minutes, status: slotOpen);
    }
  }

  @override
  Future<void> finishLesson(Booking b, {required String status}) async {
    final cur = _booking(b.id);
    if (cur == null || cur.teacherUid != _uid || cur.status != bookingAccepted || !cur.scheduled || _now < cur.startMs! ||
        (status != bookingCompleted && status != bookingNoShow)) {
      throw _denied;
    }
    _bookings[_bookings.indexWhere((x) => x.id == b.id)] = cur.copyWith(status: status);
  }

  @override
  Future<void> saveLessonReport(LessonReport r) async {
    final b = _booking(r.bookingId);
    if (b == null || b.teacherUid != _uid || b.status != bookingCompleted || r.parentUid != b.parentUid) throw _denied;
    _reports[r.bookingId] = r;
  }

  @override
  Future<LessonReport?> lessonReportFor(String bookingId) async {
    final r = _reports[bookingId];
    if (r == null) return null;
    if (r.parentUid != _uid && r.teacherUid != _uid) throw _denied;
    return r;
  }

  @override
  Future<void> submitReview(Review r) async {
    final b = _booking(r.bookingId);
    if (b == null || b.parentUid != _uid || b.status != bookingCompleted || r.teacherUid != b.teacherUid ||
        r.rating < 1 || r.rating > 5 || r.text.length > 400 || _reviews.containsKey(r.bookingId)) {
      throw _denied;
    }
    _reviews[r.bookingId] = r;
  }

  @override
  Future<List<Review>> reviewsFor(String teacherUid) async => [for (final r in _reviews.values) if (r.teacherUid == teacherUid) r];

  @override
  Future<List<Review>> allReviews() async => _reviews.values.toList();

  @override
  Future<void> reportReview(String bookingId, String reason) async =>
      reviewReports.add((bookingId: bookingId, reporterUid: _uid, reason: reason));

  @override
  Future<List<ChatMessage>> messagesOf(String bookingId) async {
    final b = _booking(bookingId);
    if (b == null || (b.parentUid != _uid && b.teacherUid != _uid)) throw _denied;
    return List.of(_messages[bookingId] ?? const []);
  }

  @override
  Future<void> sendMessage(String bookingId, String text) async {
    final b = _booking(bookingId);
    if (b == null || (b.parentUid != _uid && b.teacherUid != _uid) ||
        ![bookingRequested, bookingAccepted, bookingCompleted].contains(b.status) ||
        text.isEmpty || text.length > 500) {
      throw _denied;
    }
    _messages.putIfAbsent(bookingId, () => []).add(ChatMessage(id: 'm${_nextId++}', senderUid: _uid, text: text, createdMs: _now));
  }

  @override
  Future<void> createRequest(LearningRequest r) async {
    if (_role != UserRole.parent || r.parentUid != _uid || r.goal.isEmpty || r.goal.length > 500 ||
        (r.childAge != null && (r.childAge! < 1 || r.childAge! > 12)) || r.expiresMs <= _now ||
        r.expiresMs > _now + 7776000000 ||
        (r.budgetMin != null && r.budgetMax != null && r.budgetMin! > r.budgetMax!)) {
      throw _denied;
    }
    final id = 'r${_nextId++}';
    _requests[id] = LearningRequest.fromMap(id, r.toMap(), createdMs: _now);
  }

  @override
  Future<List<LearningRequest>> myRequests() async =>
      [for (final r in _requests.values) if (r.parentUid == _uid) r]..sort((a, b) => b.createdMs.compareTo(a.createdMs));

  @override
  Future<List<LearningRequest>> openRequests() async {
    if (_role != UserRole.teacher) throw _denied;
    return [for (final r in _requests.values) if (r.status == requestOpen && !r.isExpired(clock())) r];
  }

  @override
  Future<void> closeRequest(String requestId) async {
    final r = _requests[requestId];
    if (r == null || r.parentUid != _uid) throw _denied;
    _requests[requestId] = LearningRequest.fromMap(requestId, {...r.toMap(), 'status': requestClosed}, createdMs: r.createdMs);
  }

  @override
  Future<void> submitProposal(Proposal p) async {
    final r = _requests[p.requestId];
    if (_role != UserRole.teacher || p.teacherUid != _uid || r == null || r.status != requestOpen || r.isExpired(clock()) ||
        p.parentUid != r.parentUid || p.message.isEmpty || p.priceEgp < 0 || p.minutes < 15 || _proposals.containsKey(p.id)) {
      throw _denied;
    }
    _proposals[p.id] = p;
  }

  @override
  Future<List<Proposal>> proposalsForRequest(String requestId) async =>
      [for (final p in _proposals.values) if (p.requestId == requestId && p.parentUid == _uid) p];

  @override
  Future<List<Proposal>> myProposals() async => [for (final p in _proposals.values) if (p.teacherUid == _uid) p];

  @override
  Future<void> setProposalStatus(String proposalId, String status) async {
    final p = _proposals[proposalId];
    if (p == null || (p.status != proposalSent && p.status != proposalShortlisted)) throw _denied;
    final okParent = p.parentUid == _uid && [proposalShortlisted, proposalDeclined, proposalAccepted].contains(status);
    final okTeacher = p.teacherUid == _uid && status == proposalWithdrawn;
    if (!okParent && !okTeacher) throw _denied;
    _proposals[proposalId] = p.withStatus(status);
  }

  @override
  Future<void> acceptProposal(Proposal p, Booking b) async {
    final cur = _proposals[p.id];
    if (cur == null || cur.parentUid != _uid || (cur.status != proposalSent && cur.status != proposalShortlisted) ||
        b.parentUid != _uid || b.teacherUid != cur.teacherUid) {
      throw _denied;
    }
    _proposals[p.id] = cur.withStatus(proposalAccepted);
    _bookings.add(b.copyWith(id: 'b${_nextId++}'));
  }
}
