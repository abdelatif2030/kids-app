import 'package:flutter/material.dart';

import '../design/layout.dart';
import '../journey/ui/privacy_screen.dart';
import '../l10n/app_locale.dart';
import '../l10n/strings.dart';

/// Terms of use (a DRAFT the owner must have checked before the store listing; the owner's name and contact go in the marked place).
/// Apple and Google both want this reachable inside the app and on any screen that sells something or creates an account.
class TermsScreen extends StatelessWidget {
  const TermsScreen({super.key});

  static const _ar = [
    'التطبيق مخصّص لأطفال من سنة إلى ٦ سنوات ويستخدمه الطفل بإشراف وليّ الأمر، وولي الأمر هو من يبدأ الجلسة ويحدد وقتها.',
    'المحتوى تعليمي وترفيهي ولا يغني عن التعليم الرسمي ولا عن الاستشارة الطبية أو النفسية.',
    'لا إعلانات ولا روابط خارجية للطفل ولا تتبّع. اقرأ سياسة الخصوصية لمعرفة ما يُحفظ وأين.',
    'إن وُجد اشتراك مدفوع في أي وقت فسيتم حصراً عبر نظام الاشتراك داخل التطبيق في المتجر (App Store أو Google Play)، ويُجدَّد تلقائياً ما لم تلغِه قبل نهاية الفترة من إعدادات حساب المتجر، ويمكن استعادة المشتريات من داخل التطبيق.',
    'يمكنك حذف حسابك وبياناتك في أي وقت من «الخصوصية والبيانات» داخل إعدادات وليّ الأمر.',
    'لا تستخدم التطبيق لأي غرض مخالف للقانون، ولا تشارك الرمز السري مع الأطفال.',
    'نحتفظ بحق تحديث هذه الشروط، وسنُظهر التاريخ الجديد هنا.',
  ];
  static const _en = [
    'The app is made for children aged 1 to 6 and is used by the child under a parent\'s supervision. The parent starts each session and sets its length.',
    'The content is for learning and fun. It is not a replacement for school or for medical or psychological advice.',
    'No ads, no external links for the child, no tracking. Read the privacy policy to see what is kept and where.',
    'If a paid subscription is ever offered, it is sold ONLY through the store\'s own in-app subscription (App Store or Google Play). It renews automatically unless you cancel before the period ends in your store account settings, and purchases can be restored inside the app.',
    'You can delete your account and data at any time from "Privacy and data" in the parent settings.',
    'Do not use the app for anything unlawful, and do not share the parent PIN with children.',
    'We may update these terms; the new date will be shown here.',
  ];

  @override
  Widget build(BuildContext context) {
    final list = AppLocale.instance.isArabic ? _ar : _en;
    return Scaffold(
      appBar: AppBar(title: Text(tr2('الشروط والأحكام', 'Terms of use'))),
      body: CenteredList(
        padding: const EdgeInsets.all(16),
        children: [
          Card(
            color: const Color(0xFFFFF4D6),
            child: Padding(
              padding: const EdgeInsets.all(12),
              child: Text(tr2('مسودة: اسم الجهة المسؤولة وبريد التواصل يُضافان قبل النشر.', 'Draft: the responsible party\'s name and contact e-mail are added before publishing.')),
            ),
          ),
          const SizedBox(height: 8),
          for (final t in list)
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 6),
              child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
                const Icon(Icons.check_circle_outline_rounded, size: 20, color: Colors.green),
                const SizedBox(width: 8),
                Expanded(child: Text(t, style: const TextStyle(fontSize: 16, height: 1.6))),
              ]),
            ),
          const SizedBox(height: 12),
          const LegalLinks(),
        ],
      ),
    );
  }
}

/// Privacy policy + terms, one tap away. Put it on every sign-up / sign-in / purchase screen (Apple review rule).
class LegalLinks extends StatelessWidget {
  final Color? color;
  const LegalLinks({super.key, this.color});

  @override
  Widget build(BuildContext context) {
    final style = TextStyle(decoration: TextDecoration.underline, color: color ?? Theme.of(context).colorScheme.primary, fontWeight: FontWeight.w700);
    Widget link(String key, String text, Widget page) => TextButton(
          key: ValueKey(key),
          onPressed: () => Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => page)),
          child: Text(text, style: style),
        );
    return Wrap(
      alignment: WrapAlignment.center,
      crossAxisAlignment: WrapCrossAlignment.center,
      children: [
        link('legal_privacy', tr2('سياسة الخصوصية', 'Privacy policy'), const PrivacyScreen()),
        Text('·', style: TextStyle(color: color)),
        link('legal_terms', tr2('الشروط والأحكام', 'Terms of use'), const TermsScreen()),
      ],
    );
  }
}
