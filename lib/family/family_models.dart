import '../l10n/strings.dart';

/// Family chat: the parent invites relatives (grandparents, aunts...), approves them, chooses which child may
/// talk to whom, and can read every conversation. Children have no account of their own: a child writes on
/// the parent's signed-in device. See docs/FAMILY_CHAT_DESIGN.md.

const kMaxTextLength = 200;
const kMaxNextCallLength = 60;

/// Kinds of message. Young children only send `phrase` and `sticker` (no typing); `text` is off unless the
/// parent turns it on for that child.
const kindPhrase = 'phrase';
const kindSticker = 'sticker';
const kindText = 'text';

const kRelativePending = 'pending'; // joined with a code, waiting for the parent
const kRelativeActive = 'active';
const kRelativePaused = 'paused'; // the parent paused it; can be resumed
const kRelativeRemoved = 'removed';

const kRelations = ['grandma', 'grandpa', 'aunt', 'uncle', 'father', 'mother', 'other'];

String relationLabel(String r) => switch (r) {
      'grandma' => tr2('جدة', 'Grandmother'),
      'grandpa' => tr2('جد', 'Grandfather'),
      'aunt' => tr2('عمة / خالة', 'Aunt'),
      'uncle' => tr2('عم / خال', 'Uncle'),
      'father' => tr2('أب', 'Father'),
      'mother' => tr2('أم', 'Mother'),
      _ => tr2('قريب', 'Relative'),
    };

/// Ready-made sentences a child can send by tapping. Each side shows them in its own language.
const kPhrases = [
  'p_hello', 'p_goodmorning', 'p_howareyou', 'p_miss', 'p_love', 'p_thanks', 'p_play', 'p_story', 'p_goodnight', 'p_call', 'p_win', 'p_sorry', 'p_hug',
];

/// Offered only after the child really finished something today (never as a reminder or a reward).
const kWinPhrase = 'p_win';

/// Phrases in a sensible order for the time of day: «صباح الخير» in the morning, «تصبح على خير» at night.
List<String> phrasesFor(DateTime now, {bool includeWin = false}) {
  final first = (now.hour >= 19 || now.hour < 5) ? 'p_goodnight' : (now.hour < 11 ? 'p_goodmorning' : 'p_howareyou');
  final rest = [for (final p in kPhrases) if (p != first && (includeWin || p != kWinPhrase)) p];
  return [first, ...rest];
}

String phraseText(String id) => switch (id) {
      'p_hello' => tr2('مرحباً! 👋', 'Hello! 👋'),
      'p_miss' => tr2('وحشتني!', 'I miss you!'),
      'p_love' => tr2('بحبك ❤', 'I love you ❤'),
      'p_thanks' => tr2('شكراً!', 'Thank you!'),
      'p_play' => tr2('تعالَ نلعب!', 'Let us play!'),
      'p_goodnight' => tr2('تصبح على خير 🌙', 'Good night 🌙'),
      'p_call' => tr2('هل نتكلم قريباً؟', 'Can we talk soon?'),
      'p_goodmorning' => tr2('صباح الخير ☀', 'Good morning ☀'),
      'p_howareyou' => tr2('كيف حالك؟', 'How are you?'),
      'p_story' => tr2('احكِ لي حكاية!', 'Tell me a story!'),
      'p_win' => tr2('أنهيت درساً اليوم! ⭐', 'I finished a lesson today! ⭐'),
      'p_sorry' => tr2('آسف، سامحني', 'I am sorry'),
      'p_hug' => tr2('أرسل لك حضناً 🤗', 'Sending you a hug 🤗'),
      _ => '',
    };

const kStickers = ['😀', '😍', '🥰', '👍', '🎉', '⭐', '🌈', '🐱', '🐶', '🌸', '🍎', '🚗'];

class Relative {
  final String uid;
  final String name;
  final String relation;
  final String status;

  /// The children (local id -> nickname) this relative may talk with. Set by the parent.
  final Map<String, String> children;

  /// Voice calls with this relative: OFF until the parent turns it on.
  final bool callsOn;

  /// A short note from the parent about the next planned call, for example "Friday 6 pm". Empty if none.
  final String nextCall;
  const Relative({
    required this.uid,
    required this.name,
    required this.relation,
    required this.status,
    this.children = const {},
    this.callsOn = false,
    this.nextCall = '',
  });

  bool get active => status == kRelativeActive;

  Relative copyWith({String? status, Map<String, String>? children, bool? callsOn, String? nextCall}) => Relative(
        uid: uid,
        name: name,
        relation: relation,
        status: status ?? this.status,
        children: children ?? this.children,
        callsOn: callsOn ?? this.callsOn,
        nextCall: nextCall ?? this.nextCall,
      );
}

const kRequestPending = 'pending';
const kRequestAccepted = 'accepted';
const kRequestDeclined = 'declined';
const kRequestCancelled = 'cancelled';

/// A parent asks someone (by the e-mail they registered with) to be able to talk with the parent's children.
/// The person sees it in the app and accepts or declines. Nothing is possible before they accept.
class ConnectRequest {
  final String id;
  final String familyId;
  final String parentName;
  final String toEmail;
  final String relation;
  final Map<String, String> children;
  final String status;
  const ConnectRequest({
    required this.id,
    required this.familyId,
    required this.parentName,
    required this.toEmail,
    required this.relation,
    this.children = const {},
    this.status = kRequestPending,
  });

  bool get pending => status == kRequestPending;

  ConnectRequest copyWith({String? status}) => ConnectRequest(
        id: id,
        familyId: familyId,
        parentName: parentName,
        toEmail: toEmail,
        relation: relation,
        children: children,
        status: status ?? this.status,
      );
}

/// E-mails are compared in lower case and without spaces.
String normalizeEmail(String s) => s.trim().toLowerCase();

bool looksLikeEmail(String s) => RegExp(r'^[^@\s]+@[^@\s]+\.[^@\s]+$').hasMatch(normalizeEmail(s));

class FamilyInvite {
  final String code;
  final String familyId;
  final String parentName;
  final String relation;
  final Map<String, String> children;
  const FamilyInvite({
    required this.code,
    required this.familyId,
    required this.parentName,
    required this.relation,
    this.children = const {},
  });
}

enum Side { child, relative }

class FamilyMessage {
  final String id;
  final String childId;
  final String childName;
  final String relUid;
  final Side from;
  final String kind;
  final String body;
  final DateTime at;
  const FamilyMessage({
    required this.id,
    required this.childId,
    required this.childName,
    required this.relUid,
    required this.from,
    required this.kind,
    required this.body,
    required this.at,
  });

  String get threadId => threadIdOf(childId, relUid);

  /// What to show: phrases are localized by id, stickers and text as written.
  String get shown => kind == kindPhrase ? phraseText(body) : body;
}

String threadIdOf(String childId, String relUid) => '${childId}__$relUid';

final _link = RegExp(r'(https?:|www\.|://|\.com\b|\.net\b|\.org\b|@)', caseSensitive: false);

/// A very small filter: links, web addresses and e-mail addresses are not allowed in chat text.
bool containsLink(String s) => _link.hasMatch(s);

/// Null when the message may be sent, otherwise a short reason to show.
String? validateMessage(String kind, String body) {
  switch (kind) {
    case kindPhrase:
      return kPhrases.contains(body) ? null : tr2('رسالة غير معروفة', 'Unknown message');
    case kindSticker:
      return kStickers.contains(body) ? null : tr2('ملصق غير معروف', 'Unknown sticker');
    case kindText:
      final t = body.trim();
      if (t.isEmpty) return tr2('اكتب رسالة أولاً', 'Write a message first');
      if (t.length > kMaxTextLength) return tr2('الرسالة طويلة', 'The message is too long');
      if (containsLink(t)) return tr2('لا يمكن إرسال روابط أو عناوين', 'Links and addresses cannot be sent');
      return null;
  }
  return tr2('رسالة غير معروفة', 'Unknown message');
}

/// What the parent decided for one child on this device (stored locally).
class ChildChatPrefs {
  final bool chatOn;
  final bool textOn;
  const ChildChatPrefs({this.chatOn = false, this.textOn = false});

  Map<String, dynamic> toJson() => {'chatOn': chatOn, 'textOn': textOn};
  static ChildChatPrefs fromJson(Object? j) =>
      j is Map ? ChildChatPrefs(chatOn: j['chatOn'] == true, textOn: j['textOn'] == true) : const ChildChatPrefs();
}
