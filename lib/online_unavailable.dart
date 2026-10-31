import 'package:flutter/material.dart';

import 'design/components.dart';
import 'l10n/strings.dart';
import 'online_gate.dart';

String gateReasonText(OnlineGateReason r) => switch (r) {
      OnlineGateReason.notIntended => tr2('الخدمات عبر الإنترنت غير مفعّلة في هذا الإصدار.', 'Online services are not part of this version.'),
      OnlineGateReason.firebaseNotConfigured => tr2('لم يُربط بعد مشروع الخدمة (يربطه صاحب التطبيق).', 'The online service project has not been connected yet (the app owner does this).'),
      OnlineGateReason.accountDeletionMissing => tr2('حذف الحساب من داخل التطبيق غير جاهز بعد.', 'Deleting an account from inside the app is not ready yet.'),
      OnlineGateReason.backendUnverified => tr2('لم يُتحقَّق بعد من قواعد الأمان على الخدمة الحقيقية.', 'The security rules have not been verified on the real service yet.'),
    };

/// Shown instead of any online screen while the release gate is closed. It never offers a sign-in that cannot work.
class OnlineUnavailableView extends StatelessWidget {
  final String what;
  const OnlineUnavailableView({super.key, required this.what});

  @override
  Widget build(BuildContext context) {
    final reasons = lastOnlineGate.reasons;
    if (reasons.contains(OnlineGateReason.notIntended)) {
      // Release 1 is offline: say so plainly, without a list of backend reasons.
      return SingleChildScrollView(child: EmptyState(
        icon: Icons.cloud_off_rounded,
        title: tr2('غير متاح في هذا الإصدار', 'Not part of this version'),
        message: '$what\n${tr2('ستأتي في إصدار لاحق. كل ما عدا ذلك يعمل بلا إنترنت.', 'It is planned for a later version. Everything else works without internet.')}',
      ));
    }
    return SingleChildScrollView(child: EmptyState(
      icon: Icons.cloud_off_rounded,
      title: tr2('غير متاح في هذا الإصدار بعد', 'Not available in this version yet'),
      message: '$what\n${[for (final r in reasons) '• ${gateReasonText(r)}'].join('\n')}\n${tr2('كل ما عدا ذلك يعمل بلا إنترنت.', 'Everything else works without internet.')}',
    ));
  }
}
