import '../l10n/strings.dart';

/// How a feature behaves with no internet. Each entry below was checked against the code (see `evidence`).
enum Availability {
  /// Works with no network (all content and saving are on the device).
  offline,

  /// The core works offline, something around it does not or is not certain.
  partial,

  /// Cannot work without a connection.
  online,

  /// Not checked well enough to say.
  unverified,
}

class Capability {
  final String id;
  final String Function() title;
  final Availability availability;

  /// One plain sentence for the parent: what works and what does not.
  final String Function() note;

  /// Where in the code the claim comes from (for reviewers; not shown to children).
  final String evidence;
  const Capability(this.id, this.title, this.availability, this.note, this.evidence);
}

final List<Capability> kCapabilities = [
  Capability('games', () => tr2('الألعاب التعليمية', 'Learning games'), Availability.offline,
      () => tr2('تعمل بلا إنترنت: كل المحتوى والصور داخل التطبيق والنتائج تُحفظ على الجهاز.', 'Work without internet: all content and pictures are in the app and results are saved on the device.'),
      'lib/games, lib/color_game.dart, lib/math_game.dart: no network calls; progress in shared_preferences'),
  Capability('letters', () => tr2('الحروف والكلمات', 'Letters and words'), Availability.partial,
      () => tr2('الدروس والصور تعمل بلا إنترنت. الصوت يأتي من صوت الجهاز وقد لا يعمل بلا إنترنت إن لم يكن صوت اللغة مثبتاً على الهاتف.', 'Lessons and pictures work offline. Sound comes from the device voice, which may need the language voice installed on the phone.'),
      'lib/literacy, lib/library/vocab.dart; audio via flutter_tts (offline availability depends on installed voices: not verified on a device)'),
  Capability('stories', () => tr2('القصص', 'Stories'), Availability.partial,
      () => tr2('القصص مكتوبة داخل التطبيق وتُقرأ بصوت الجهاز؛ أصوات الطبيعة داخل التطبيق أيضاً.', 'Stories are inside the app and read by the device voice; the nature sounds are bundled too.'),
      'lib/stories/story_data.dart; assets/audio/*.mp3 bundled; no story uses remote media'),
  Capability('studio', () => tr2('استوديو الإبداع والمعرض', 'Creative studio and gallery'), Availability.offline,
      () => tr2('الرسم وبناء الكلمات والقصص بالصور تُحفظ على هذا الجهاز فقط.', 'Drawing, word building and picture stories are saved on this device only.'),
      'lib/studio: FamilyGallery in shared_preferences'),
  Capability('parent', () => tr2('لوحة الأهل والتقارير', 'Parent area and reports'), Availability.offline,
      () => tr2('الإعدادات والتقارير والأوراق القابلة للطباعة تعمل بلا إنترنت (الطباعة نفسها تعتمد على جهازك).', 'Settings, reports and printables work offline (printing itself depends on your device).'),
      'lib/parent_screens.dart, dashboard_screen.dart, lib/print; local data only'),
  Capability('videos', () => tr2('الفيديوهات', 'Videos'), Availability.online,
      () => tr2('الفيديوهات والصور المصغّرة تأتي من يوتيوب وتحتاج إنترنت.', 'Videos and thumbnails come from YouTube and need internet.'),
      'lib/player_screen.dart (YouTube IFrame), lib/main.dart img.youtube.com thumbnails'),
  Capability('chat', () => tr2('محادثة العائلة', 'Family chat'), Availability.online,
      () => tr2('الرسائل والرسائل الصوتية تحتاج إنترنت. لم نتحقق مما يحدث لرسالة أُرسلت دون اتصال، فتأكد أنها ظهرت قبل الاعتماد عليها.', 'Messages and voice messages need internet. We have not verified what happens to a message sent while offline, so check that it appears before relying on it.'),
      'lib/family/firebase_family_repository.dart (Firestore)'),
  Capability('calls', () => tr2('مكالمات الصوت والفيديو', 'Voice and video calls'), Availability.online,
      () => tr2('المكالمات تحتاج إنترنت عند الطرفين. بدون اتصال لن تبدأ مكالمة.', 'Calls need internet on both sides. Without a connection a call will not start.'),
      'lib/family/call_*: WebRTC + Firestore signalling'),
  Capability('teachers', () => tr2('المعلمون والحجوزات', 'Teachers and bookings'), Availability.online,
      () => tr2('تحتاج إنترنت وحساباً.', 'Needs internet and an account.'), 'lib/teachers_*, firebase_repository.dart'),
  Capability('web', () => tr2('النسخة على المتصفح دون اتصال', 'Web version without a connection'), Availability.unverified,
      () => tr2('لم نتحقق من عمل صفحة الويب دون اتصال بعد تحميلها.', 'We have not verified that the web page works offline after loading.'),
      'No service worker offline test performed'),
];

Capability? capabilityById(String id) {
  for (final c in kCapabilities) {
    if (c.id == id) return c;
  }
  return null;
}

/// True when the feature can be used right now given what is known about the network.
/// `unknown` network never blocks anything: the app only explains, it does not lock features on a guess.
bool usableNow(Capability c, {required bool offline}) =>
    !offline || c.availability == Availability.offline || c.availability == Availability.partial;
