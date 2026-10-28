/// Marketplace data: slots, lesson reports, reviews, messages, learning requests
/// and proposals. Plain data classes plus the small rules that are the same on
/// the client and in firestore.rules (statuses, limits, rating summary).
library;

import 'l10n/strings.dart';

const slotOpen = 'open';
const slotBooked = 'booked';
const slotBlocked = 'blocked';

/// A time a teacher offers. All times are UTC milliseconds; screens show them in
/// the phone's local time zone.
class Slot {
  final String teacherUid;
  final int startMs;
  final int minutes;
  final String status;
  final String? bookingId;
  const Slot({
    required this.teacherUid,
    required this.startMs,
    required this.minutes,
    this.status = slotOpen,
    this.bookingId,
  });

  /// The document id: it contains the start, so one teacher cannot have two slots at the same time.
  String get id => slotIdFor(teacherUid, startMs);
  DateTime get start => DateTime.fromMillisecondsSinceEpoch(startMs);
  DateTime get end => start.add(Duration(minutes: minutes));
  bool get isOpen => status == slotOpen;
  bool isBookableAt(DateTime now) => isOpen && startMs > now.millisecondsSinceEpoch;

  Map<String, dynamic> toMap() => {'teacherUid': teacherUid, 'startMs': startMs, 'minutes': minutes, 'status': status};

  factory Slot.fromMap(Map<String, dynamic> m) => Slot(
        teacherUid: m['teacherUid'] as String,
        startMs: (m['startMs'] as num).toInt(),
        minutes: (m['minutes'] as num).toInt(),
        status: (m['status'] as String?) ?? slotOpen,
        bookingId: m['bookingId'] as String?,
      );
}

String slotIdFor(String teacherUid, int startMs) => '${teacherUid}_$startMs';

/// Weekly hours -> concrete slots for the next [weeks] weeks, starting after [from]
/// (so past times are never produced). [weekdays] use DateTime.monday..sunday,
/// [hour]/[minute] are local time, [lessonMinutes] is each slot's length.
List<Slot> generateSlots({
  required String teacherUid,
  required Set<int> weekdays,
  required int hour,
  required int minute,
  required int lessonMinutes,
  required int weeks,
  required DateTime from,
}) {
  final out = <Slot>[];
  final startDay = DateTime(from.year, from.month, from.day);
  for (var d = 0; d < weeks * 7; d++) {
    final day = DateTime(startDay.year, startDay.month, startDay.day + d);
    if (!weekdays.contains(day.weekday)) continue;
    final start = DateTime(day.year, day.month, day.day, hour, minute);
    if (!start.isAfter(from)) continue;
    out.add(Slot(teacherUid: teacherUid, startMs: start.millisecondsSinceEpoch, minutes: lessonMinutes));
  }
  return out;
}

/// The soonest slot a parent could book, or null.
Slot? earliestOpen(List<Slot> slots, DateTime now) {
  final open = [for (final s in slots) if (s.isBookableAt(now)) s]..sort((a, b) => a.startMs.compareTo(b.startMs));
  return open.isEmpty ? null : open.first;
}

class LessonReport {
  final String bookingId;
  final String teacherUid;
  final String parentUid;
  final String covered;
  final String understood; // what the child showed in the lesson (the teacher's observation)
  final String needsReview;
  final String homeActivity;
  final String nextLesson;
  const LessonReport({
    required this.bookingId,
    required this.teacherUid,
    required this.parentUid,
    this.covered = '',
    this.understood = '',
    this.needsReview = '',
    this.homeActivity = '',
    this.nextLesson = '',
  });

  Map<String, dynamic> toMap() => {
        'teacherUid': teacherUid,
        'parentUid': parentUid,
        'covered': covered,
        'understood': understood,
        'needsReview': needsReview,
        'homeActivity': homeActivity,
        'nextLesson': nextLesson,
      };

  factory LessonReport.fromMap(String bookingId, Map<String, dynamic> m) => LessonReport(
        bookingId: bookingId,
        teacherUid: m['teacherUid'] as String,
        parentUid: m['parentUid'] as String,
        covered: (m['covered'] as String?) ?? '',
        understood: (m['understood'] as String?) ?? '',
        needsReview: (m['needsReview'] as String?) ?? '',
        homeActivity: (m['homeActivity'] as String?) ?? '',
        nextLesson: (m['nextLesson'] as String?) ?? '',
      );
}

class Review {
  final String bookingId;
  final String teacherUid;
  final String parentUid;
  final int rating; // 1..5
  final String text;
  const Review({
    required this.bookingId,
    required this.teacherUid,
    required this.parentUid,
    required this.rating,
    this.text = '',
  });

  factory Review.fromMap(Map<String, dynamic> m) => Review(
        bookingId: m['bookingId'] as String,
        teacherUid: m['teacherUid'] as String,
        parentUid: m['parentUid'] as String,
        rating: (m['rating'] as num).toInt(),
        text: (m['text'] as String?) ?? '',
      );
}

/// Computed from the review records themselves, nothing else.
class RatingSummary {
  final int count;
  final double average; // 0 when there are no reviews
  final Map<int, int> distribution; // stars -> count
  const RatingSummary(this.count, this.average, this.distribution);

  static const none = RatingSummary(0, 0, {});

  factory RatingSummary.of(Iterable<Review> reviews) {
    final list = reviews.toList();
    if (list.isEmpty) return none;
    final dist = <int, int>{};
    var sum = 0;
    for (final r in list) {
      dist[r.rating] = (dist[r.rating] ?? 0) + 1;
      sum += r.rating;
    }
    return RatingSummary(list.length, sum / list.length, dist);
  }

  String get label => count == 0 ? loc('لا توجد تقييمات بعد') : tr2('${average.toStringAsFixed(1)} من 5 ($count تقييم)', '${average.toStringAsFixed(1)} of 5 ($count ratings)');
}

/// Summaries per teacher, from a flat list of reviews.
Map<String, RatingSummary> ratingSummaries(Iterable<Review> reviews) {
  final byTeacher = <String, List<Review>>{};
  for (final r in reviews) {
    byTeacher.putIfAbsent(r.teacherUid, () => []).add(r);
  }
  return {for (final e in byTeacher.entries) e.key: RatingSummary.of(e.value)};
}

class ChatMessage {
  final String id;
  final String senderUid;
  final String text;
  final int createdMs;
  const ChatMessage({required this.id, required this.senderUid, required this.text, required this.createdMs});
}

const requestOpen = 'open';
const requestClosed = 'closed';

/// A parent's public learning request. It carries no child name, photo, school
/// or contact details; only an optional age.
class LearningRequest {
  final String id;
  final String parentUid;
  final String subject;
  final String goal;
  final int? childAge;
  final String format; // online / in_person / ''
  final String schedule;
  final int? budgetMin;
  final int? budgetMax;
  final String approach;
  final String status;
  final int createdMs;
  final int expiresMs;
  const LearningRequest({
    this.id = '',
    required this.parentUid,
    required this.subject,
    required this.goal,
    this.childAge,
    this.format = '',
    this.schedule = '',
    this.budgetMin,
    this.budgetMax,
    this.approach = '',
    this.status = requestOpen,
    this.createdMs = 0,
    required this.expiresMs,
  });

  bool isExpired(DateTime now) => expiresMs <= now.millisecondsSinceEpoch;

  Map<String, dynamic> toMap() => {
        'parentUid': parentUid,
        'subject': subject,
        'goal': goal,
        'childAge': ?childAge,
        'format': format,
        'schedule': schedule,
        'budgetMin': ?budgetMin,
        'budgetMax': ?budgetMax,
        'approach': approach,
        'status': status,
        'expiresMs': expiresMs,
      };

  factory LearningRequest.fromMap(String id, Map<String, dynamic> m, {int createdMs = 0}) => LearningRequest(
        id: id,
        parentUid: m['parentUid'] as String,
        subject: (m['subject'] as String?) ?? '',
        goal: (m['goal'] as String?) ?? '',
        childAge: (m['childAge'] as num?)?.toInt(),
        format: (m['format'] as String?) ?? '',
        schedule: (m['schedule'] as String?) ?? '',
        budgetMin: (m['budgetMin'] as num?)?.toInt(),
        budgetMax: (m['budgetMax'] as num?)?.toInt(),
        approach: (m['approach'] as String?) ?? '',
        status: (m['status'] as String?) ?? requestOpen,
        createdMs: createdMs,
        expiresMs: (m['expiresMs'] as num?)?.toInt() ?? 0,
      );
}

const proposalSent = 'sent';
const proposalShortlisted = 'shortlisted';
const proposalAccepted = 'accepted';
const proposalDeclined = 'declined';
const proposalWithdrawn = 'withdrawn';

class Proposal {
  final String requestId;
  final String parentUid;
  final String teacherUid;
  final String teacherName;
  final String message;
  final int priceEgp;
  final int minutes;
  final String schedule;
  final String firstSteps;
  final String status;
  const Proposal({
    required this.requestId,
    required this.parentUid,
    required this.teacherUid,
    required this.teacherName,
    required this.message,
    required this.priceEgp,
    required this.minutes,
    this.schedule = '',
    this.firstSteps = '',
    this.status = proposalSent,
  });

  /// One proposal per teacher per request.
  String get id => '${requestId}_$teacherUid';

  Proposal withStatus(String s) => Proposal(
        requestId: requestId,
        parentUid: parentUid,
        teacherUid: teacherUid,
        teacherName: teacherName,
        message: message,
        priceEgp: priceEgp,
        minutes: minutes,
        schedule: schedule,
        firstSteps: firstSteps,
        status: s,
      );

  Map<String, dynamic> toMap() => {
        'requestId': requestId,
        'parentUid': parentUid,
        'teacherUid': teacherUid,
        'teacherName': teacherName,
        'message': message,
        'priceEgp': priceEgp,
        'minutes': minutes,
        'schedule': schedule,
        'firstSteps': firstSteps,
        'status': status,
      };

  factory Proposal.fromMap(Map<String, dynamic> m) => Proposal(
        requestId: m['requestId'] as String,
        parentUid: m['parentUid'] as String,
        teacherUid: m['teacherUid'] as String,
        teacherName: (m['teacherName'] as String?) ?? '',
        message: (m['message'] as String?) ?? '',
        priceEgp: (m['priceEgp'] as num).toInt(),
        minutes: (m['minutes'] as num).toInt(),
        schedule: (m['schedule'] as String?) ?? '',
        firstSteps: (m['firstSteps'] as String?) ?? '',
        status: (m['status'] as String?) ?? proposalSent,
      );
}
