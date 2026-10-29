import '../l10n/strings.dart';

/// Family chat: the parent invites relatives (grandparents, aunts...), approves them, chooses which child may
/// talk to whom, and can read every conversation. Children have no account of their own: a child writes on
/// the parent's signed-in device. See docs/FAMILY_CHAT_DESIGN.md.

const kMaxTextLength = 200;

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
const kPhrases = ['p_hello', 'p_miss', 'p_love', 'p_thanks', 'p_play', 'p_goodnight', 'p_call'];

String phraseText(String id) => switch (id) {
      'p_hello' => tr2('مرحباً! 👋', 'Hello! 👋'),
      'p_miss' => tr2('وحشتني!', 'I miss you!'),
      'p_love' => tr2('بحبك ❤', 'I love you ❤'),
      'p_thanks' => tr2('شكراً!', 'Thank you!'),
      'p_play' => tr2('تعالَ نلعب!', 'Let us play!'),
      'p_goodnight' => tr2('تصبح على خير 🌙', 'Good night 🌙'),
      'p_call' => tr2('هل نتكلم قريباً؟', 'Can we talk soon?'),
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
  const Relative({
    required this.uid,
    required this.name,
    required this.relation,
    required this.status,
    this.children = const {},
  });

  bool get active => status == kRelativeActive;

  Relative copyWith({String? status, Map<String, String>? children}) => Relative(
        uid: uid,
        name: name,
        relation: relation,
        status: status ?? this.status,
        children: children ?? this.children,
      );
}

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
