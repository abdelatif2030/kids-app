import 'package:flutter/material.dart';

import '../../data_reset.dart';
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
    'لا موقع جغرافي ولا جهات اتصال ولا ميكروفون.',
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
                      Expanded(child: Text(item, style: const TextStyle(fontSize: 15))),
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
      body: ListView(
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
                    loc('• الفيديوهات تُشغَّل بمشغّل YouTube الرسمي، وقد تنطبق عليه سياسات Google '
                    'الخاصة بالبيانات. نعرض فيديوهات مختارة فقط ولا نتيح البحث.\n'
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
        ],
      ),
    );
  }
}
