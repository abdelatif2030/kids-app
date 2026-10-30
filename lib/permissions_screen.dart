import 'package:flutter/material.dart';

import 'design/layout.dart';
import 'l10n/strings.dart';

/// One phone permission the app can use, in plain words. Pure data so tests can check every entry has all its text.
class PermissionInfo {
  final String id;
  final IconData icon;
  final String Function() name;

  /// Which features use it.
  final String Function() usedFor;

  /// When the phone asks.
  final String Function() whenAsked;

  /// What happens if the parent says no.
  final String Function() ifRefused;

  /// What the app does NOT do with it.
  final String Function() never;
  const PermissionInfo({
    required this.id,
    required this.icon,
    required this.name,
    required this.usedFor,
    required this.whenAsked,
    required this.ifRefused,
    required this.never,
  });
}

/// The permissions listed in the Android manifest that a parent can see or refuse: microphone, camera, and
/// files/photos (which the app reaches through the phone's own picker, so there is no storage permission).
final List<PermissionInfo> appPermissions = [
  PermissionInfo(
    id: 'microphone',
    icon: Icons.mic_rounded,
    name: () => tr2('الميكروفون', 'Microphone'),
    usedFor: () => tr2(
      'الرسائل الصوتية ومكالمات الصوت والفيديو مع الأقارب الموافَق عليهم (إن فعّلتها أنت)، '
      'وإملاء الصوت في مساعد الخطة (التعرّف على الجهاز نفسه).',
      'Voice messages and voice/video calls with approved relatives (only if you switch them on), '
      'and speaking to the plan assistant (recognised on the phone itself).',
    ),
    whenAsked: () => tr2(
      'عند أول تسجيل رسالة صوتية أو بدء مكالمة أو الضغط على زر الإملاء، وليس عند فتح التطبيق.',
      'The first time you record a voice message, start a call or press the dictation button, not when the app opens.',
    ),
    ifRefused: () => tr2(
      'يبقى كل شيء آخر يعمل. لا تُرسل رسائل صوتية ولا تتم المكالمات، ويمكنك الكتابة بدل الإملاء.',
      'Everything else keeps working. Voice messages and calls are not possible, and you can type instead of speaking.',
    ),
    never: () => tr2(
      'لا يسمع التطبيق في الخلفية ولا يحفظ تسجيلات من الطفل. الصوت يُستعمل فقط أثناء المكالمة أو التسجيل الذي تبدؤه.',
      'The app never listens in the background. Sound is used only during a call or a recording that is started.',
    ),
  ),
  PermissionInfo(
    id: 'camera',
    icon: Icons.videocam_rounded,
    name: () => tr2('الكاميرا', 'Camera'),
    usedFor: () => tr2(
      'مكالمات الفيديو مع الأقارب الموافَق عليهم، وفقط إن فعّلت لهم مكالمات الفيديو.',
      'Video calls with approved relatives, and only if you switched video calls on for them.',
    ),
    whenAsked: () => tr2(
      'عند بدء أول مكالمة فيديو.',
      'When the first video call starts.',
    ),
    ifRefused: () => tr2(
      'تبقى مكالمات الصوت تعمل بلا كاميرا. لا يمكن إجراء مكالمة فيديو.',
      'Voice calls still work without the camera. Video calls are not possible.',
    ),
    never: () => tr2(
      'لا يلتقط التطبيق صوراً ولا فيديو ولا يحفظهما، ولا يشغّل الكاميرا خارج المكالمة.',
      'The app never takes or saves photos or video, and never turns the camera on outside a call.',
    ),
  ),
  PermissionInfo(
    id: 'storage',
    icon: Icons.folder_rounded,
    name: () => tr2('الملفات والصور', 'Files and photos'),
    usedFor: () => tr2(
      'اختيار صورة للطفل (بموافقتك) أو صورة وسيرة ذاتية للمعلّم، وحفظ ورقة للطباعة أو مشاركتها.',
      'Choosing a photo for a child (with your consent) or a photo and CV for a teacher, and saving or sharing a printable sheet.',
    ),
    whenAsked: () => tr2(
      'لا يطلب التطبيق إذن تخزين. تظهر شاشة اختيار الملفات الخاصة بالهاتف، وتختار أنت ملفاً واحداً فقط.',
      'The app asks for no storage permission. The phone\'s own file picker opens and you choose one file only.',
    ),
    ifRefused: () => tr2(
      'إن أغلقت شاشة الاختيار بلا اختيار فلا يحدث شيء. يبقى الطفل بصورة الرسوم المرسومة في التطبيق.',
      'If you close the picker without choosing, nothing happens. The child keeps the cartoon avatar drawn in the app.',
    ),
    never: () => tr2(
      'لا يقرأ التطبيق معرض الصور ولا ملفات الهاتف. بيانات الأطفال تُحفظ في مساحة التطبيق الخاصة على هذا الجهاز.',
      'The app never reads your photo gallery or phone files. Children\'s data is kept in the app\'s private space on this device.',
    ),
  ),
];

/// Parent settings -> «الأذونات»: what the app can ask the phone for, why, and what happens if the parent refuses.
/// This screen only explains; it never asks the phone for anything.
class PermissionsScreen extends StatelessWidget {
  const PermissionsScreen({super.key});

  Widget _line(BuildContext context, IconData icon, String label, String text) => Padding(
        padding: const EdgeInsets.only(top: 10),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Icon(icon, size: 20, color: Theme.of(context).colorScheme.primary),
            const SizedBox(width: 10),
            Expanded(
              child: Text.rich(
                TextSpan(children: [
                  TextSpan(text: '$label: ', style: const TextStyle(fontWeight: FontWeight.w800)),
                  TextSpan(text: text),
                ]),
                style: const TextStyle(fontSize: 15, height: 1.4),
              ),
            ),
          ],
        ),
      );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(tr2('الأذونات', 'Permissions'))),
      body: CenteredList(
        padding: const EdgeInsets.all(16),
        children: [
          Text(
            tr2(
              'لا يطلب التطبيق أي إذن عند فتحه. تظهر رسالة الهاتف فقط عند استعمال ميزة تحتاجه، وأنت من تقرر.',
              'The app asks for nothing when it opens. The phone asks only when you use a feature that needs it, and you decide.',
            ),
            style: const TextStyle(fontSize: 17, height: 1.4),
          ),
          const SizedBox(height: 12),
          for (final p in appPermissions)
            Card(
              key: ValueKey('permission_${p.id}'),
              child: Padding(
                padding: const EdgeInsets.all(16),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        Icon(p.icon, size: 30),
                        const SizedBox(width: 10),
                        Expanded(
                          child: Semantics(
                            header: true,
                            child: Text(p.name(), style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w900)),
                          ),
                        ),
                      ],
                    ),
                    _line(context, Icons.help_outline_rounded, tr2('لماذا', 'Why'), p.usedFor()),
                    _line(context, Icons.notifications_none_rounded, tr2('متى يُطلب', 'When it is asked'), p.whenAsked()),
                    _line(context, Icons.block_rounded, tr2('إن رفضت', 'If you refuse'), p.ifRefused()),
                    _line(context, Icons.verified_user_outlined, tr2('ما لا نفعله', 'What we never do'), p.never()),
                  ],
                ),
              ),
            ),
          Card(
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(tr2('أذونات لا يطلبها التطبيق', 'Permissions the app does not ask for'),
                      style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w800)),
                  const SizedBox(height: 6),
                  Text(
                    tr2('الموقع الجغرافي، جهات الاتصال، الرسائل النصية، التقويم، والإشعارات.',
                        'Location, contacts, text messages, calendar and notifications.'),
                    style: const TextStyle(fontSize: 15, height: 1.4),
                  ),
                  const SizedBox(height: 10),
                  Text(
                    tr2('لتغيير أي إذن لاحقاً: إعدادات الهاتف ← التطبيقات ← رحلتي ← الأذونات.',
                        'To change one later: phone Settings → Apps → Rehlaty → Permissions.'),
                    style: const TextStyle(fontSize: 15, height: 1.4),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
