import 'package:flutter/material.dart';
import '../online_gate.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../journey/avatars.dart';
import '../journey/models.dart';
import '../journey/repository.dart';
import '../journey/ui/kit.dart';
import '../journey/ui/profile_forms.dart';
import '../l10n/app_locale.dart';
import '../main.dart' show Video;
import '../l10n/strings.dart';
import '../parent_screens.dart' show askParentQuestion;

/// The interactive web demo. It is the SAME app with the SAME local storage (profiles, progress, stars, achievements
/// all live in the browser's localStorage through shared_preferences); this file only adds a friendly entry: a short
/// "make a child" screen with no PIN, no e-mail, no password, and a way to wipe the demo data.
///
/// Switch it on with `--dart-define=DEMO=true` at build time. Nothing here talks to a server, and the online gate
/// (lib/online_gate.dart) is not touched: online features stay off.
class DemoMode {
  DemoMode._();

  static const bool _compileTime = bool.fromEnvironment('DEMO');
  static bool? _override;

  static bool get enabled => _override ?? _compileTime;

  /// `--dart-define=DEMO_FULL=true`: the hosted demo runs the WHOLE offline app (full parent onboarding with PIN,
  /// assessment and plans, owner-reviewed videos). Only the demo notice and the erase button are added. Without it the
  /// demo keeps its short child form and parent-approved videos.
  static const bool kFull = bool.fromEnvironment('DEMO_FULL');
  static bool? _fullOverride;
  static bool get full => _fullOverride ?? kFull;

  /// True when the short "make a child" form replaces the full onboarding.
  static bool get shortChildForm => enabled && !full;

  /// Applies the demo's rules at start-up. In the demo the owner's pre-review flag of the bundled videos is NOT honoured:
  /// a lesson reaches a child only after a parent of this browser previews and approves it (and the parent can still hide
  /// it from one child or from all). Everything else about the video workflow is the normal app.
  static void applyPolicies() {
    if (enabled && !full) Video.honourOwnerReview = false;
  }

  /// Tests only.
  static void overrideForTest(bool? value) => _override = value;
  static void overrideFullForTest(bool? value) => _fullOverride = value;
}

/// What a visitor is told, in plain words. Kept in one place so the wording is tested.
String demoNoticeText({bool login = kDemoLogin}) => login
    ? tr2(
        'هذه نسخة تجريبية. يُحفظ تقدّم الطفل في هذا المتصفح فقط. الحساب (Google أو بريد) اختياري للكبار ويُحفظ عند Firebase، ولا تُرفع بيانات الأطفال ولا مزامنة بين الأجهزة.',
        'This is a demo. A child\'s progress is saved in this browser only. An account (Google or e-mail) is optional, for grown-ups, and is kept by Firebase; children\'s data is not uploaded and nothing syncs between devices.',
      )
    : tr2(
      'هذه نسخة تجريبية. يُحفظ التقدّم في هذا المتصفح فقط، على هذا الجهاز. مسح بيانات المتصفح أو استعمال نافذة خاصة قد يمحو التجربة. لا حسابات ولا نسخ احتياطي ولا مزامنة بين الأجهزة.',
      'This is a demo. Progress is saved in this browser only, on this device. Clearing browser data or using a private window can erase it. No accounts, no cloud backup, no sync between devices.',
    );

const int kDemoNicknameMax = 12;

/// A nickname is accepted when it has 1 to 12 characters after trimming.
String? validateDemoNickname(String raw) {
  final t = raw.trim();
  if (t.isEmpty) return tr2('اكتب اسماً مستعاراً', 'Type a nickname');
  if (t.runes.length > kDemoNicknameMax) return tr2('اسم قصير من فضلك (حتى ١٢ حرفاً)', 'A short name please (up to 12 letters)');
  return null;
}

/// Creates the child profile of the demo: nickname, age 1-6 and a cartoon avatar. Everything else takes the same
/// defaults the normal onboarding starts from. No photo, no birth date, no gender, no real name.
Future<ChildProfile> createDemoChild({required String nickname, required int age, String? avatar}) async {
  final store = JourneyStore.instance;
  final draft = ProfileDraft()
    ..nickname = nickname.trim()
    ..age = age.clamp(1, 6)
    ..avatar = avatar;
  final profile = await store.addProfile(draft.toProfile(store.newId()));
  await store.setActive(profile.id);
  return profile;
}

/// Wipes everything the demo stored in this browser (children, progress, stars, achievements, settings), keeping only the
/// chosen language, and reloads the in-memory store. The caller must have asked for confirmation first.
Future<void> resetDemoData() async {
  final lang = AppLocale.instance.code;
  final prefs = await SharedPreferences.getInstance();
  await prefs.clear();
  await JourneyStore.instance.load();
  await AppLocale.instance.set(lang);
}

/// The reset flow: a grown-up question (a speed bump for small children), then a plain confirmation that says what
/// will be lost. Returns true when the data was wiped.
Future<bool> confirmAndResetDemo(BuildContext context, {int? a, int? b}) async {
  if (!await askParentQuestion(context, a: a, b: b, purposeAr: 'لمسح بيانات التجربة', purposeEn: 'To erase the demo data')) return false;
  if (!context.mounted) return false;
  final yes = await showDialog<bool>(
    context: context,
    builder: (ctx) => AlertDialog(
      key: const ValueKey('demo_reset_dialog'),
      title: Text(tr2('مسح بيانات التجربة؟', 'Erase the demo data?')),
      content: Text(tr2(
        'سيُمسح كل شيء في هذا المتصفح: الأطفال والنجوم والإنجازات والتقدّم. لا يمكن التراجع.',
        'Everything in this browser will be erased: the children, stars, achievements and progress. This cannot be undone.',
      )),
      actions: [
        TextButton(key: const ValueKey('demo_reset_cancel'), onPressed: () => Navigator.pop(ctx, false), child: Text(tr2('لا، ارجع', 'No, go back'))),
        FilledButton(
          key: const ValueKey('demo_reset_confirm'),
          style: FilledButton.styleFrom(backgroundColor: const Color(0xFFB3261E)),
          onPressed: () => Navigator.pop(ctx, true),
          child: Text(tr2('نعم، امسح كل شيء', 'Yes, erase everything')),
        ),
      ],
    ),
  );
  if (yes != true) return false;
  await resetDemoData();
  return true;
}

/// The reminder shown on the first screens of the demo.
class DemoBanner extends StatelessWidget {
  final VoidCallback? onReset;
  const DemoBanner({super.key, this.onReset});

  @override
  Widget build(BuildContext context) => Container(
        key: const ValueKey('demo_banner'),
        constraints: const BoxConstraints(maxWidth: 560),
        margin: const EdgeInsets.only(top: 14),
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(color: const Color(0xFFEDE6FF), borderRadius: BorderRadius.circular(18), border: Border.all(color: const Color(0xFF6B45D6), width: 2)),
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          Row(mainAxisSize: MainAxisSize.min, children: [
            const Icon(Icons.science_rounded, color: Color(0xFF6B45D6)),
            const SizedBox(width: 6),
            Text(tr2('نسخة تجريبية', 'Demo'), style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: RC.ink)),
          ]),
          const SizedBox(height: 4),
          Text(demoNoticeText(), textAlign: TextAlign.center, style: const TextStyle(fontSize: 14, color: RC.ink, height: 1.35)),
          // Arabic is the default; English is one tap away (the same switch also lives in Parent settings).
          TextButton.icon(
            key: const ValueKey('demo_lang'),
            onPressed: () => AppLocale.instance.set(AppLocale.instance.isArabic ? 'en' : 'ar'),
            icon: const Icon(Icons.translate_rounded),
            label: Text(AppLocale.instance.isArabic ? 'English' : 'العربية'),
          ),
          if (onReset != null)
            TextButton.icon(
              key: const ValueKey('demo_reset'),
              onPressed: onReset,
              icon: const Icon(Icons.delete_outline_rounded),
              label: Text(tr2('مسح بيانات التجربة (للكبار)', 'Erase demo data (grown-ups)')),
            ),
        ]),
      );
}

/// Make a child for the demo: nickname, age 1-6, avatar. Pops with the new [ChildProfile].
class DemoCreateChildScreen extends StatefulWidget {
  const DemoCreateChildScreen({super.key});

  @override
  State<DemoCreateChildScreen> createState() => _DemoCreateChildScreenState();
}

class _DemoCreateChildScreenState extends State<DemoCreateChildScreen> {
  final _name = TextEditingController();
  int _age = 4;
  String _avatar = kAvatars.first.id;
  String? _error;
  bool _saving = false;

  @override
  void dispose() {
    _name.dispose();
    super.dispose();
  }

  Future<void> _create() async {
    final err = validateDemoNickname(_name.text);
    if (err != null) {
      setState(() => _error = err);
      return;
    }
    if (_saving) return;
    setState(() => _saving = true);
    final child = await createDemoChild(nickname: _name.text, age: _age, avatar: _avatar);
    if (mounted) Navigator.pop(context, child);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(tr2('طفل جديد في التجربة', 'New child in the demo')), centerTitle: true),
      // The start button stays on screen (a phone held sideways is short): only the form scrolls.
      bottomNavigationBar: SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(20, 8, 20, 10),
          child: Center(
            heightFactor: 1,
            child: ConstrainedBox(
              constraints: const BoxConstraints(maxWidth: 640),
              child: FilledButton.icon(
                key: const ValueKey('demo_start'),
                style: FilledButton.styleFrom(minimumSize: const Size.fromHeight(56), backgroundColor: RC.good),
                onPressed: _saving ? null : _create,
                icon: const Icon(Icons.rocket_launch_rounded, size: 28),
                label: Text(tr2('ابدأ التجربة', 'Start the demo'), style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w900)),
              ),
            ),
          ),
        ),
      ),
      body: SafeArea(
        child: Center(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 640),
            child: ListView(
              padding: const EdgeInsets.all(20),
              children: [
                Text(
                  tr2('اكتب اسماً مستعاراً (ليس الاسم الحقيقي)، واختر العمر والصورة. لا نطلب بريداً ولا كلمة مرور ولا صورة حقيقية.',
                      'Type a nickname (not a real name), then pick an age and a picture. We ask for no e-mail, no password and no real photo.'),
                  style: const TextStyle(fontSize: 16, color: RC.ink, height: 1.4),
                ),
                const SizedBox(height: 16),
                TextField(
                  key: const ValueKey('demo_nickname'),
                  controller: _name,
                  maxLength: kDemoNicknameMax,
                  textInputAction: TextInputAction.done,
                  onSubmitted: (_) => _create(),
                  style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w800),
                  decoration: InputDecoration(labelText: tr2('الاسم المستعار', 'Nickname'), errorText: _error, border: const OutlineInputBorder()),
                  onChanged: (_) => setState(() => _error = null),
                ),
                const SizedBox(height: 8),
                Text(tr2('العمر', 'Age'), style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: RC.ink)),
                const SizedBox(height: 6),
                Wrap(spacing: 10, runSpacing: 10, children: [
                  for (var a = 1; a <= 6; a++)
                    ChoiceChip(
                      key: ValueKey('demo_age_$a'),
                      label: Padding(padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6), child: Text('$a', style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w900))),
                      selected: _age == a,
                      onSelected: (_) => setState(() => _age = a),
                    ),
                ]),
                const SizedBox(height: 16),
                Text(tr2('اختر صورة', 'Pick a picture'), style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: RC.ink)),
                const SizedBox(height: 6),
                Wrap(spacing: 10, runSpacing: 10, children: [
                  for (final a in kAvatars)
                    Semantics(
                      button: true,
                      selected: _avatar == a.id,
                      label: a.name(),
                      child: InkWell(
                        key: ValueKey('demo_avatar_${a.id}'),
                        borderRadius: BorderRadius.circular(40),
                        onTap: () => setState(() => _avatar = a.id),
                        child: Padding(padding: const EdgeInsets.all(2), child: AvatarFace(id: a.id, size: 64, selected: _avatar == a.id)),
                      ),
                    ),
                ]),
                const SizedBox(height: 12),
                const DemoBanner(),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
