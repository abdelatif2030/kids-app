/// Models and the repository interface for parent/teacher accounts, teacher
/// profiles and lesson requests. The screens only know this interface, so the
/// Firebase code (firebase_repository.dart) can be swapped for a fake in tests.
///
/// Privacy: no child data is stored except an optional age on a lesson request.
/// There is no chat or messaging anywhere.
library;

import 'dart:convert';
import 'dart:typed_data';

import 'teachers_market.dart';
import 'teachers_portfolio.dart';
import 'l10n/strings.dart';

enum UserRole { parent, teacher, relative }

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

/// Choices a teacher picks from, so parents can filter on them.
const kTeacherDialects = ['مصري', 'فصحى', 'خليجي', 'شامي'];
const kTeacherCurricula = ['المنهج المصري', 'المنهج السعودي', 'المنهج البريطاني', 'المنهج الأمريكي', 'البكالوريا الدولية', 'بدون منهج محدد'];
const kTeacherSpecialties = ['تأسيس القراءة', 'تأسيس الكتابة', 'تأسيس الرياضيات', 'تقوية بعد المدرسة', 'محادثة', 'حفظ ومراجعة', 'رسم وفنون', 'علوم وتجارب'];
const kTeacherStyles = ['ألعاب', 'شرح مباشر', 'أنشطة', 'واجبات', 'مراجعة'];

const formatOnline = 'online';
const formatInPerson = 'in_person';
const classIndividual = 'individual';
const classSmallGroup = 'small_group';

String formatLabel(String f) => f == formatOnline ? loc('أونلاين') : loc('حضوري');
String classTypeLabel(String c) => c == classIndividual ? loc('فردية') : loc('مجموعة صغيرة');

/// What each verification badge means. A badge is shown only when the app owner
/// set it after checking; a teacher can never set or keep one by editing their
/// own profile (the rules and the repository both block it).
const kIdentityBadgeMeaning = 'تحقق صاحب التطبيق من هوية المدرس بمستند رسمي.';
const kQualificationBadgeMeaning = 'تحقق صاحب التطبيق من المؤهل الدراسي الذي ذكره المدرس بمستند.';

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

  // Professional profile (all written by the teacher; none of it is verified).
  final String headline; // a short, outcome-focused line
  final String philosophy;
  final int? ageMin;
  final int? ageMax;
  final List<String> specialties;
  final List<String> curricula;
  final List<String> dialects;
  final List<String> formats; // formatOnline / formatInPerson
  final List<String> styles;
  final List<String> classTypes; // classIndividual / classSmallGroup
  final int? lessonMinutes;
  final int? priceEgp; // per lesson, a number so it can be filtered and sorted
  final int? experienceYears;
  final String qualifications; // the teacher's own words
  final String cancellationPolicy;

  /// An optional https link to a short intro video. Shown to parents as text to copy.
  final String introVideoUrl;

  /// Set ONLY by the app owner in the console, never by the teacher.
  final bool identityVerified;
  final bool qualificationVerified;

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
    this.headline = '',
    this.philosophy = '',
    this.ageMin,
    this.ageMax,
    this.specialties = const [],
    this.curricula = const [],
    this.dialects = const [],
    this.formats = const [],
    this.styles = const [],
    this.classTypes = const [],
    this.lessonMinutes,
    this.priceEgp,
    this.experienceYears,
    this.qualifications = '',
    this.cancellationPolicy = '',
    this.introVideoUrl = '',
    this.identityVerified = false,
    this.qualificationVerified = false,
  });

  bool get approved => status == teacherStatusApproved;
  bool get suspended => status == teacherStatusSuspended;

  Uint8List? get photoBytes => photoB64 == null ? null : base64Decode(photoB64!);

  bool teachesAge(int age) => ageMin != null && ageMax != null && age >= ageMin! && age <= ageMax!;

  /// A copy with the owner-only badges replaced (used by the owner tools and tests).
  TeacherProfile withVerification({bool? identity, bool? qualification}) => copyWith(
        identityVerified: identity ?? identityVerified,
        qualificationVerified: qualification ?? qualificationVerified,
      );

  TeacherProfile copyWith({
    String? status,
    bool? identityVerified,
    bool? qualificationVerified,
  }) =>
      TeacherProfile(
        uid: uid,
        name: name,
        bio: bio,
        subjects: subjects,
        languages: languages,
        priceNote: priceNote,
        status: status ?? this.status,
        photoB64: photoB64,
        cvName: cvName,
        headline: headline,
        philosophy: philosophy,
        ageMin: ageMin,
        ageMax: ageMax,
        specialties: specialties,
        curricula: curricula,
        dialects: dialects,
        formats: formats,
        styles: styles,
        classTypes: classTypes,
        lessonMinutes: lessonMinutes,
        priceEgp: priceEgp,
        experienceYears: experienceYears,
        qualifications: qualifications,
        cancellationPolicy: cancellationPolicy,
        introVideoUrl: introVideoUrl,
        identityVerified: identityVerified ?? this.identityVerified,
        qualificationVerified: qualificationVerified ?? this.qualificationVerified,
      );

  /// What a teacher is allowed to write. The verification badges are NOT here.
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
        if (headline.isNotEmpty) 'headline': headline,
        if (philosophy.isNotEmpty) 'philosophy': philosophy,
        'ageMin': ?ageMin,
        'ageMax': ?ageMax,
        'specialties': specialties,
        'curricula': curricula,
        'dialects': dialects,
        'formats': formats,
        'styles': styles,
        'classTypes': classTypes,
        'lessonMinutes': ?lessonMinutes,
        'priceEgp': ?priceEgp,
        'experienceYears': ?experienceYears,
        if (qualifications.isNotEmpty) 'qualifications': qualifications,
        if (cancellationPolicy.isNotEmpty) 'cancellationPolicy': cancellationPolicy,
        if (introVideoUrl.isNotEmpty) 'introVideoUrl': introVideoUrl,
      };

  static List<String> _list(Object? v) => [for (final s in (v as List<dynamic>? ?? [])) s as String];

  factory TeacherProfile.fromMap(String uid, Map<String, dynamic> m) => TeacherProfile(
        uid: uid,
        name: (m['name'] as String?) ?? '',
        bio: (m['bio'] as String?) ?? '',
        subjects: _list(m['subjects']),
        languages: _list(m['languages']),
        priceNote: (m['priceNote'] as String?) ?? '',
        status: (m['status'] as String?) ?? teacherStatusApproved,
        photoB64: m['photoB64'] as String?,
        cvName: m['cvName'] as String?,
        headline: (m['headline'] as String?) ?? '',
        philosophy: (m['philosophy'] as String?) ?? '',
        ageMin: (m['ageMin'] as num?)?.toInt(),
        ageMax: (m['ageMax'] as num?)?.toInt(),
        specialties: _list(m['specialties']),
        curricula: _list(m['curricula']),
        dialects: _list(m['dialects']),
        formats: _list(m['formats']),
        styles: _list(m['styles']),
        classTypes: _list(m['classTypes']),
        lessonMinutes: (m['lessonMinutes'] as num?)?.toInt(),
        priceEgp: (m['priceEgp'] as num?)?.toInt(),
        experienceYears: (m['experienceYears'] as num?)?.toInt(),
        qualifications: (m['qualifications'] as String?) ?? '',
        cancellationPolicy: (m['cancellationPolicy'] as String?) ?? '',
        introVideoUrl: (m['introVideoUrl'] as String?) ?? '',
        // Read-only here: only the console can set these.
        identityVerified: m['identityVerified'] == true,
        qualificationVerified: m['qualificationVerified'] == true,
      );
}

/// How complete a profile is, for the teacher's checklist and for the default
/// order (a plain, published rule: complete profiles first, then by name).
class ProfileCompleteness {
  final List<String> done;
  final List<String> missing;
  const ProfileCompleteness(this.done, this.missing);
  int get total => done.length + missing.length;
  double get ratio => total == 0 ? 0 : done.length / total;
}

ProfileCompleteness profileCompleteness(TeacherProfile p) {
  final checks = <String, bool>{
    loc('صورة شخصية'): p.photoB64 != null,
    loc('عنوان قصير يصف ما تقدمه'): p.headline.trim().length >= 10,
    loc('نبذة (80 حرفاً على الأقل)'): p.bio.trim().length >= 80,
    loc('المواد'): p.subjects.isNotEmpty,
    loc('الفئة العمرية'): p.ageMin != null && p.ageMax != null,
    loc('السعر'): p.priceEgp != null || p.priceNote.trim().isNotEmpty,
    loc('مدة الحصة'): p.lessonMinutes != null,
    loc('سنوات الخبرة'): p.experienceYears != null,
    loc('المؤهلات'): p.qualifications.trim().isNotEmpty,
    loc('طريقة التدريس (أونلاين/حضوري)'): p.formats.isNotEmpty,
    loc('سياسة الإلغاء'): p.cancellationPolicy.trim().isNotEmpty,
    loc('اللغات'): p.languages.isNotEmpty,
  };
  return ProfileCompleteness(
    [for (final e in checks.entries) if (e.value) e.key],
    [for (final e in checks.entries) if (!e.value) e.key],
  );
}

enum TeacherSort { relevance, priceLow, priceHigh, experience, rating, earliest }

extension TeacherSortText on TeacherSort {
  String get label => switch (this) {
        TeacherSort.relevance => loc('الأنسب (الملفات الأكثر اكتمالاً أولاً)'),
        TeacherSort.priceLow => loc('السعر: الأقل أولاً'),
        TeacherSort.priceHigh => loc('السعر: الأعلى أولاً'),
        TeacherSort.experience => loc('الأكثر خبرة'),
        TeacherSort.rating => loc('الأعلى تقييماً (من تقييمات حقيقية)'),
        TeacherSort.earliest => loc('أقرب موعد متاح'),
      };
}

/// Parent-chosen filters. Filters combine (all must match). A teacher who left a
/// field empty does not match a filter on that field: the app never assumes.
class TeacherFilters {
  final String query;
  final String? subject;
  final int? childAge;
  final String? language;
  final String? dialect;
  final String? format;
  final String? curriculum;
  final int? maxPrice;
  final bool identityVerified;
  final bool qualificationVerified;
  const TeacherFilters({
    this.query = '',
    this.subject,
    this.childAge,
    this.language,
    this.dialect,
    this.format,
    this.curriculum,
    this.maxPrice,
    this.identityVerified = false,
    this.qualificationVerified = false,
  });

  static const none = TeacherFilters();

  bool get isEmpty =>
      query.trim().isEmpty &&
      subject == null &&
      childAge == null &&
      language == null &&
      dialect == null &&
      format == null &&
      curriculum == null &&
      maxPrice == null &&
      !identityVerified &&
      !qualificationVerified;

  int get activeCount => [
        query.trim().isNotEmpty,
        subject != null,
        childAge != null,
        language != null,
        dialect != null,
        format != null,
        curriculum != null,
        maxPrice != null,
        identityVerified,
        qualificationVerified,
      ].where((x) => x).length;

  TeacherFilters copyWith({
    String? query,
    Object? subject = _keep,
    Object? childAge = _keep,
    Object? language = _keep,
    Object? dialect = _keep,
    Object? format = _keep,
    Object? curriculum = _keep,
    Object? maxPrice = _keep,
    bool? identityVerified,
    bool? qualificationVerified,
  }) =>
      TeacherFilters(
        query: query ?? this.query,
        subject: identical(subject, _keep) ? this.subject : subject as String?,
        childAge: identical(childAge, _keep) ? this.childAge : childAge as int?,
        language: identical(language, _keep) ? this.language : language as String?,
        dialect: identical(dialect, _keep) ? this.dialect : dialect as String?,
        format: identical(format, _keep) ? this.format : format as String?,
        curriculum: identical(curriculum, _keep) ? this.curriculum : curriculum as String?,
        maxPrice: identical(maxPrice, _keep) ? this.maxPrice : maxPrice as int?,
        identityVerified: identityVerified ?? this.identityVerified,
        qualificationVerified: qualificationVerified ?? this.qualificationVerified,
      );
}

const Object _keep = Object();

String _plain(String s) => s
    .replaceAll(RegExp('[\u064B-\u0652\u0670]'), '')
    .replaceAll(RegExp('[أإآٱ]'), 'ا')
    .replaceAll('ة', 'ه')
    .replaceAll('ى', 'ي')
    .toLowerCase();

bool teacherMatches(TeacherProfile t, TeacherFilters f, String Function(String subjectId) subjectLabel) {
  final q = _plain(f.query.trim());
  if (q.isNotEmpty) {
    final haystack = _plain([
      t.name,
      t.headline,
      t.bio,
      ...t.specialties,
      ...t.subjects.map(subjectLabel),
    ].join(' '));
    if (!haystack.contains(q)) return false;
  }
  if (f.subject != null && !t.subjects.contains(f.subject)) return false;
  if (f.childAge != null && !t.teachesAge(f.childAge!)) return false;
  if (f.language != null && !t.languages.contains(f.language)) return false;
  if (f.dialect != null && !t.dialects.contains(f.dialect)) return false;
  if (f.format != null && !t.formats.contains(f.format)) return false;
  if (f.curriculum != null && !t.curricula.contains(f.curriculum)) return false;
  if (f.maxPrice != null && (t.priceEgp == null || t.priceEgp! > f.maxPrice!)) return false;
  if (f.identityVerified && !t.identityVerified) return false;
  if (f.qualificationVerified && !t.qualificationVerified) return false;
  return true;
}

int _byRating(RatingSummary? a, RatingSummary? b) {
  final ra = (a == null || a.count == 0) ? null : a;
  final rb = (b == null || b.count == 0) ? null : b;
  if (ra == null && rb == null) return 0;
  if (ra == null) return 1;
  if (rb == null) return -1;
  final c = rb.average.compareTo(ra.average);
  return c != 0 ? c : rb.count.compareTo(ra.count);
}

/// Filters and sorts. The order is fixed and public: by the chosen sort, then
/// by profile completeness, then by name. Nothing is paid for and nothing
/// depends on ratings (there are none yet). Teachers missing the sort field go last.
List<TeacherProfile> searchTeachers(
  List<TeacherProfile> all,
  TeacherFilters f,
  TeacherSort sort,
  String Function(String subjectId) subjectLabel, {
  Map<String, RatingSummary> ratings = const {},
  Map<String, int> earliestStartMs = const {},
}) {
  final list = [for (final t in all) if (teacherMatches(t, f, subjectLabel)) t];
  int byName(TeacherProfile a, TeacherProfile b) => a.name.compareTo(b.name);
  int byCompleteness(TeacherProfile a, TeacherProfile b) {
    final c = profileCompleteness(b).ratio.compareTo(profileCompleteness(a).ratio);
    return c != 0 ? c : byName(a, b);
  }

  int nullsLast(int? a, int? b, {bool desc = false}) {
    if (a == null && b == null) return 0;
    if (a == null) return 1;
    if (b == null) return -1;
    return desc ? b.compareTo(a) : a.compareTo(b);
  }

  list.sort((a, b) {
    final primary = switch (sort) {
      TeacherSort.relevance => 0,
      TeacherSort.priceLow => nullsLast(a.priceEgp, b.priceEgp),
      TeacherSort.priceHigh => nullsLast(a.priceEgp, b.priceEgp, desc: true),
      TeacherSort.experience => nullsLast(a.experienceYears, b.experienceYears, desc: true),
      // Reviewed teachers first by average, then by number of reviews; unreviewed ones last.
      TeacherSort.rating => _byRating(ratings[a.uid], ratings[b.uid]),
      TeacherSort.earliest => nullsLast(earliestStartMs[a.uid], earliestStartMs[b.uid]),
    };
    return primary != 0 ? primary : byCompleteness(a, b);
  });
  return list;
}

const bookingRequested = 'requested';
const bookingAccepted = 'accepted';
const bookingDeclined = 'declined';
const bookingCancelled = 'cancelled';
const bookingCompleted = 'completed';
const bookingNoShow = 'no_show';

class Booking {
  final String id;
  final String parentUid;
  final String teacherUid;
  final String teacherName;
  final String parentName;
  final String subject;
  final String whenText; // the parent's preferred time (free text) or a readable copy of the slot time
  final int? childAge; // optional
  final String note;
  final String status;
  final String? lessonLink; // set by the teacher on accepting

  /// Set when the booking was made from a teacher's slot (a real, scheduled lesson).
  final String? slotId;
  final int? startMs; // UTC milliseconds
  final int? minutes;
  final int? priceEgp; // the teacher's price when it was booked
  final String? proposalId; // set when it comes from an accepted proposal

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
    this.slotId,
    this.startMs,
    this.minutes,
    this.priceEgp,
    this.proposalId,
  });

  bool get scheduled => startMs != null;
  DateTime? get start => startMs == null ? null : DateTime.fromMillisecondsSinceEpoch(startMs!);
  bool get started => startMs != null && DateTime.now().millisecondsSinceEpoch >= startMs!;

  Booking copyWith({String? id, String? status, String? lessonLink}) => Booking(
        id: id ?? this.id,
        parentUid: parentUid,
        teacherUid: teacherUid,
        teacherName: teacherName,
        parentName: parentName,
        subject: subject,
        whenText: whenText,
        childAge: childAge,
        note: note,
        status: status ?? this.status,
        lessonLink: lessonLink ?? this.lessonLink,
        slotId: slotId,
        startMs: startMs,
        minutes: minutes,
        priceEgp: priceEgp,
        proposalId: proposalId,
      );

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
        'slotId': ?slotId,
        'startMs': ?startMs,
        'minutes': ?minutes,
        'priceEgp': ?priceEgp,
        'proposalId': ?proposalId,
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
        slotId: m['slotId'] as String?,
        startMs: (m['startMs'] as num?)?.toInt(),
        minutes: (m['minutes'] as num?)?.toInt(),
        priceEgp: (m['priceEgp'] as num?)?.toInt(),
        proposalId: m['proposalId'] as String?,
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

  // --- portfolio -------------------------------------------------------------

  /// A teacher's work samples. Parents get only the published ones; a teacher gets all of their own.
  Future<List<PortfolioItem>> portfolioOf(String teacherUid);

  /// Creates (empty id) or updates one of the signed-in teacher's items. The owner-only `hidden`
  /// status can never be set or lifted from the app.
  Future<void> savePortfolioItem(PortfolioItem item);
  Future<void> deletePortfolioItem(String id);

  Future<void> requestBooking(Booking booking);

  /// The signed-in parent's requests, or the signed-in teacher's incoming ones.
  Future<List<Booking>> myBookings();

  /// [status] is one of the booking* constants; [lessonLink] only when accepting.
  Future<void> updateBooking(String id, {required String status, String? lessonLink});

  // --- availability and scheduled bookings -------------------------------------

  /// A teacher publishes bookable times (UTC). Existing ones at the same start are left alone.
  Future<void> addSlots(List<Slot> slots);

  /// A teacher's slots. A parent sees only the open, future ones.
  Future<List<Slot>> slotsOf(String teacherUid);
  Future<void> setSlotBlocked(String slotId, bool blocked);
  Future<void> deleteSlot(String slotId);

  /// Books a slot. Atomic: the booking and the slot change together or not at all.
  /// Throws [AccountException] ("not available any more") when someone else got it.
  Future<void> bookSlot(Booking booking);

  /// Cancel (parent) or decline (teacher) a booking and free its slot in the same step.
  Future<void> cancelOrDecline(Booking booking, {required String status});

  /// The teacher records the lesson as completed or no-show (after its start).
  Future<void> finishLesson(Booking booking, {required String status});

  // --- lesson reports, reviews, messages ----------------------------------------
  Future<void> saveLessonReport(LessonReport report);
  Future<LessonReport?> lessonReportFor(String bookingId);
  Future<void> submitReview(Review review);
  Future<List<Review>> reviewsFor(String teacherUid);
  Future<List<Review>> allReviews();
  Future<void> reportReview(String bookingId, String reason);
  Future<List<ChatMessage>> messagesOf(String bookingId);
  Future<void> sendMessage(String bookingId, String text);

  // --- requests and proposals -----------------------------------------------------
  Future<void> createRequest(LearningRequest request);
  Future<List<LearningRequest>> myRequests();
  Future<List<LearningRequest>> openRequests();
  Future<void> closeRequest(String requestId);
  Future<void> submitProposal(Proposal proposal);
  Future<List<Proposal>> proposalsForRequest(String requestId);
  Future<List<Proposal>> myProposals();
  Future<void> setProposalStatus(String proposalId, String status);

  /// Accepting a proposal also creates the booking, in one step.
  Future<void> acceptProposal(Proposal proposal, Booking booking);
}
