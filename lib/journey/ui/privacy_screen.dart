import '../../design/layout.dart';
import 'package:flutter/material.dart';

import '../../account_deletion.dart';
import '../../data_reset.dart';
import '../../legal/terms_screen.dart';
import '../../teachers_models.dart' show AccountException;
import '../../l10n/strings.dart';

/// What the app keeps, what it never does, and the parent's data reset.
class PrivacyScreen extends StatelessWidget {
  const PrivacyScreen({super.key});

  static const _kept = [
    'لقب الطفل وعمره وأهدافه (لا نطلب الاسم الكامل ولا الصورة).',
    'نتائج الأنشطة: النجوم والمستويات وما أجاب عنه صحيحاً.',
    'وقت الاستخدام اليومي وما شاهده من الفيديوهات.',
    'ملاحظاتك وإعدادات الوقت والرمز السري (مشفّر).',
  ];

  static const _never = [
    'لا إعلانات ولا تتبع ولا حزم تحليلات.',
    'لا محادثات ولا رسائل ولا تواصل اجتماعي.',
    'لا موقع جغرافي ولا جهات اتصال. الميكروفون فقط عندما يضغط ولي الأمر زر الإملاء، ولا يستخدم التطبيق الكاميرا.',
    'لا روابط خارجية في شاشات الطفل.',
  ];

  Future<void> _reset(BuildContext context) async {
    final ok = await showDialog<bool>(
      context: context,
      builder: (_) => AlertDialog(
        title: Text(loc('حذف بيانات الأطفال؟')),
        content: Text(
          loc('سيُحذف من هذا الجهاز نهائياً: ملفات الأطفال وتقدمهم ونتائجهم وسجل المشاهدة '
          'والخطة الأسبوعية والملاحظات.\nيبقى الرمز السري وحدود الوقت.'),
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(context, false), child: Text(loc('إلغاء'))),
          FilledButton(onPressed: () => Navigator.pop(context, true), child: Text(loc('حذف كل شيء'))),
        ],
      ),
    );
    if (ok != true) return;
    await deleteChildData();
    if (context.mounted) {
      ScaffoldMessenger.of(context)
        ..hideCurrentSnackBar()
        ..showSnackBar(SnackBar(content: Text(loc('تم حذف بيانات الأطفال من هذا الجهاز.'))));
    }
  }

  /// Store rule: deleting the account (and its data) is possible inside the app. Always shown: with no online account it erases
  /// everything the app kept on this device; with a signed-in account it deletes that account first.
  Future<void> _deleteAccount(BuildContext context) async {
    final ok = await showDialog<bool>(
      context: context,
      builder: (_) => AlertDialog(
        title: Text(tr2('حذف حسابي وبياناتي؟', 'Delete my account and data?')),
        content: Text(tr2(
            'سيُحذف حسابك (إن كان لك حساب) وكل ما حفظه التطبيق على هذا الجهاز: ملفات الأطفال وتقدمهم والرسومات وما كتبته عند التسجيل. لا يمكن التراجع.',
            'Your account (if you have one) and everything the app kept on this device will be deleted: the profiles of your children, their progress, drawings and what you typed at sign-up. This cannot be undone.')),
        actions: [
          TextButton(onPressed: () => Navigator.pop(context, false), child: Text(tr2('إلغاء', 'Cancel'))),
          FilledButton(
            style: FilledButton.styleFrom(backgroundColor: Colors.red),
            onPressed: () => Navigator.pop(context, true),
            child: Text(tr2('احذف نهائياً', 'Delete for good')),
          ),
        ],
      ),
    );
    if (ok != true || !context.mounted) return;
    String message;
    try {
      await deleteAccountAndData();
      message = tr2('تم حذف الحساب والبيانات.', 'Your account and data were deleted.');
    } on AccountException catch (e) {
      message = e.message;
    } catch (_) {
      message = tr2('تعذر حذف الحساب الآن، حاول مرة أخرى.', 'Could not delete the account now, please try again.');
    }
    if (context.mounted) {
      ScaffoldMessenger.of(context)
        ..hideCurrentSnackBar()
        ..showSnackBar(SnackBar(content: Text(message)));
    }
  }

  Widget _list(String title, List<String> items, IconData icon, Color color) => Card(
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(title, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
              const SizedBox(height: 8),
              for (final item in items)
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 4),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Icon(icon, color: color, size: 20),
                      const SizedBox(width: 8),
                      Expanded(child: Text(loc(item), style: const TextStyle(fontSize: 15))),
                    ],
                  ),
                ),
            ],
          ),
        ),
      );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(loc('الخصوصية والبيانات'))),
      body: CenteredList(
        padding: const EdgeInsets.all(16),
        children: [
          Text(
            loc('تبقى بيانات أطفالك على هذا الجهاز فقط. لا نرسلها إلى أي خادم.'),
            style: TextStyle(fontSize: 17),
          ),
          const SizedBox(height: 12),
          _list(loc('ما نحفظه على الجهاز'), _kept, Icons.check_circle_outline_rounded, Colors.green),
          _list(loc('ما لا نفعله أبداً'), _never, Icons.block_rounded, Colors.red),
          Card(
            child: Padding(
              padding: EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(loc('تنبيهات صريحة'), style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                  SizedBox(height: 8),
                  Text(
                    loc('• لا يحتوي التطبيق على أي محتوى من YouTube ولا يطلب شيئاً منه.\n'
                    '• ما تكتبه عند إنشاء الحساب (جنس الطفل وعمره ومدينتك، وكلها اختيارية) يبقى على هذا الجهاز فقط '
                    'ولا يُرسل إلى أي خدمة.\n'
                    '• حساب الأهل والمدرسين (إن فُعّل) يحفظ البريد والاسم في خدمة Firebase، '
                    'ولا يحفظ أي بيانات عن الطفل سوى عمر اختياري في طلب الحصة.\n'
                    '• هذه نسخة تجريبية: راجع docs/PRODUCTION.md قبل استخدام التطبيق مع أطفال حقيقيين.'),
                    style: TextStyle(fontSize: 15, height: 1.6),
                  ),
                ],
              ),
            ),
          ),
          const SizedBox(height: 16),
          OutlinedButton.icon(
            style: OutlinedButton.styleFrom(foregroundColor: Colors.red),
            onPressed: () => _reset(context),
            icon: const Icon(Icons.delete_forever_rounded),
            label: Text(loc('حذف بيانات الأطفال من هذا الجهاز')),
          ),
          const SizedBox(height: 10),
          FilledButton.icon(
            key: const ValueKey('delete_account'),
            style: FilledButton.styleFrom(backgroundColor: Colors.red),
            onPressed: () => _deleteAccount(context),
            icon: const Icon(Icons.person_off_rounded),
            label: Text(tr2('حذف حسابي وبياناتي', 'Delete my account and data')),
          ),
          const SizedBox(height: 12),
          const LegalLinks(),
        ],
      ),
    );
  }
}
