import 'package:flutter/material.dart';

import '../journey/ui/kit.dart';
import '../l10n/strings.dart';
import 'capabilities.dart';
import 'connectivity.dart';

/// A slim notice shown only while the app is offline. It says what still works and what needs internet,
/// in words a parent can read to a child. Never shown for `unknown`, and it never blocks anything.
class OfflineBanner extends StatelessWidget {
  final ConnectivityMonitor? monitor;
  const OfflineBanner({super.key, this.monitor});

  @override
  Widget build(BuildContext context) {
    final m = monitor ?? ConnectivityMonitor.instance;
    return ListenableBuilder(
      listenable: m,
      builder: (context, _) {
        if (!m.isOffline) return const SizedBox.shrink();
        final text = tr2(
          'لا يوجد إنترنت. الألعاب والحروف والقصص والرسم تعمل. الفيديوهات والمحادثة والمكالمات تحتاج إنترنت.',
          'No internet. Games, letters, stories and drawing still work. Videos, chat and calls need internet.',
        );
        return Semantics(
          liveRegion: true,
          container: true,
          label: text,
          child: Material(
            color: RC.yellow,
            child: SafeArea(
              bottom: false,
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                child: Row(
                  children: [
                    const Icon(Icons.cloud_off_rounded, color: RC.ink),
                    const SizedBox(width: 10),
                    Expanded(child: ExcludeSemantics(child: Text(text, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: RC.ink)))),
                    TextButton(
                      onPressed: m.checking ? null : m.check,
                      child: Text(m.checking ? tr2('...', '...') : tr2('حاول مرة أخرى', 'Try again')),
                    ),
                  ],
                ),
              ),
            ),
          ),
        );
      },
    );
  }
}

/// Parent screen: which features work offline, from the capability list.
class OfflineGuideScreen extends StatelessWidget {
  final ConnectivityMonitor? monitor;
  const OfflineGuideScreen({super.key, this.monitor});

  static String label(Availability a) => switch (a) {
        Availability.offline => tr2('يعمل بلا إنترنت', 'Works offline'),
        Availability.partial => tr2('يعمل جزئياً بلا إنترنت', 'Partly works offline'),
        Availability.online => tr2('يحتاج إنترنت', 'Needs internet'),
        Availability.unverified => tr2('لم يُتحقق منه', 'Not verified'),
      };

  static IconData icon(Availability a) => switch (a) {
        Availability.offline => Icons.check_circle_rounded,
        Availability.partial => Icons.timelapse_rounded,
        Availability.online => Icons.cloud_rounded,
        Availability.unverified => Icons.help_outline_rounded,
      };

  @override
  Widget build(BuildContext context) {
    final m = monitor ?? ConnectivityMonitor.instance;
    return Scaffold(
      appBar: AppBar(title: Text(tr2('العمل بلا إنترنت', 'Working offline'))),
      body: ListenableBuilder(
        listenable: m,
        builder: (context, _) {
          final status = switch (m.status) {
            NetStatus.online => tr2('يبدو أن الجهاز متصل بالإنترنت.', 'The device seems to be online.'),
            NetStatus.offline => tr2('الجهاز غير متصل الآن.', 'The device is offline now.'),
            NetStatus.unknown => tr2('لم نفحص الاتصال بعد.', 'The connection has not been checked yet.'),
          };
          return ListView(
            padding: const EdgeInsets.all(16),
            children: [
              Text(status, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w800)),
              const SizedBox(height: 4),
              Text(
                tr2('الفحص تقريبي: يتحقق من وجود شبكة، لا من وصول كل خدمة. لا يُرسل أي شيء عن طفلك.',
                    'The check is approximate: it tests for a network, not that every service is reachable. Nothing about your child is sent.'),
              ),
              const SizedBox(height: 8),
              Align(
                alignment: AlignmentDirectional.centerStart,
                child: OutlinedButton.icon(
                  onPressed: m.checking ? null : m.check,
                  icon: const Icon(Icons.refresh_rounded),
                  label: Text(tr2('افحص الآن', 'Check now')),
                ),
              ),
              const Divider(height: 28),
              for (final c in kCapabilities)
                Semantics(
                  container: true,
                  label: '${c.title()}. ${label(c.availability)}. ${c.note()}',
                  child: ExcludeSemantics(
                    child: ListTile(
                      leading: Icon(icon(c.availability)),
                      title: Text(c.title()),
                      subtitle: Text('${label(c.availability)} — ${c.note()}'),
                    ),
                  ),
                ),
              const SizedBox(height: 12),
              Text(
                tr2('بيانات طفلك تُحفظ على هذا الجهاز فقط. لا توجد مزامنة سحابية لتقدّم التعلّم.',
                    'Your child\'s data is saved on this device only. There is no cloud sync of learning progress.'),
                style: const TextStyle(fontWeight: FontWeight.w700),
              ),
            ],
          );
        },
      ),
    );
  }
}

/// Tells the person a feature needs internet and offers to try again. Returns true when a check now says online.
Future<bool> explainNeedsInternet(BuildContext context, String capabilityId, {ConnectivityMonitor? monitor}) async {
  final m = monitor ?? ConnectivityMonitor.instance;
  final cap = capabilityById(capabilityId);
  final again = await showDialog<bool>(
    context: context,
    builder: (c) => AlertDialog(
      icon: const Icon(Icons.cloud_off_rounded),
      title: Text(cap?.title() ?? tr2('يحتاج إنترنت', 'Needs internet')),
      content: Text(tr2('لا يوجد اتصال الآن. هذه الميزة تحتاج إنترنت. يمكنك المحاولة بعد عودة الاتصال، وبقية الألعاب والقصص تعمل.',
          'There is no connection right now and this needs internet. Try again when it is back; games and stories still work.')),
      actions: [
        TextButton(onPressed: () => Navigator.pop(c, false), child: Text(tr2('حسناً', 'OK'))),
        FilledButton(onPressed: () => Navigator.pop(c, true), child: Text(tr2('حاول مرة أخرى', 'Try again'))),
      ],
    ),
  );
  if (again != true) return false;
  await m.check();
  return !m.isOffline;
}
