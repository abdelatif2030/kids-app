import 'package:flutter/material.dart';

import 'journey/repository.dart';
import 'journey/ui/child_shell.dart';
import 'media/audio.dart';
import 'stories/story_screens.dart';
import 'parent_screens.dart';
import 'session_manager.dart';
import 'ui.dart';
import 'l10n/strings.dart';

/// Replaces the child screens (keeping only the first route) with the rest screen.
void goToRest(BuildContext context, RestReason reason) {
  Navigator.pushAndRemoveUntil(
    context,
    MaterialPageRoute(builder: (_) => RestScreen(reason: reason)),
    (route) => route.isFirst,
  );
}

/// Call when a game or activity ends a set. If the session timer says it is
/// time to rest, stops the session, shows the rest screen and returns true;
/// otherwise returns false and nothing happens.
Future<bool> restIfTimeUp(BuildContext context) async {
  final session = SessionManager.instance;
  final reason = session.reason.value;
  if (reason == null) return false;
  await session.stop();
  if (!context.mounted) return true;
  goToRest(context, reason);
  return true;
}

/// Shown after the last video of "Today's plan". [stars] is how many plan
/// videos the child finished.
void goToPlanDone(BuildContext context, int stars) {
  Navigator.pushAndRemoveUntil(
    context,
    MaterialPageRoute(builder: (_) => RestScreen(stars: stars)),
    (route) => route.isFirst,
  );
}

/// A null [reason] means the plan was completed rather than time running out.
class RestScreen extends StatelessWidget {
  final RestReason? reason;
  final int stars;
  const RestScreen({super.key, this.reason, this.stars = 0});

  bool get _planDone => reason == null;

  Future<void> _parent(BuildContext context) async {
    final ok = await Navigator.push<bool>(
      context,
      MaterialPageRoute(builder: (_) => const PinEntryScreen(returnResult: true)),
    );
    if (ok != true || !context.mounted) return;
    final choice = await showDialog<String>(
      context: context,
      builder: (_) => SimpleDialog(
        title: Text(loc('خيارات الوالدين')),
        children: [
          SimpleDialogOption(
            onPressed: () => Navigator.pop(context, _planDone ? 'back' : 'extend'),
            child: Padding(
              padding: const EdgeInsets.symmetric(vertical: 8),
              child: Text(
                _planDone
                    ? loc('العودة إلى الفيديوهات')
                    : 'تمديد ${SessionManager.extendMinutes} دقيقة',
                style: const TextStyle(fontSize: 20),
              ),
            ),
          ),
          SimpleDialogOption(
            onPressed: () => Navigator.pop(context, 'end'),
            child: Padding(
              padding: EdgeInsets.symmetric(vertical: 8),
              child: Text(loc('إنهاء الجلسة'), style: TextStyle(fontSize: 20)),
            ),
          ),
        ],
      ),
    );
    if (!context.mounted) return;
    if (choice == 'extend' || choice == 'back') {
      final session = SessionManager.instance;
      final child = JourneyStore.instance.active;
      final age = child?.age ?? session.currentAge;
      if (child == null || age == null) {
        Navigator.popUntil(context, (r) => r.isFirst);
        return;
      }
      if (choice == 'extend') await session.extend();
      await session.start(age);
      if (!context.mounted) return;
      Navigator.pushAndRemoveUntil(
        context,
        MaterialPageRoute(builder: (_) => ChildShell(child: child)),
        (route) => route.isFirst,
      );
    } else if (choice == 'end') {
      Navigator.popUntil(context, (r) => r.isFirst);
    }
  }

  @override
  Widget build(BuildContext context) {
    final quiet = reason == RestReason.quiet;
    return PopScope(
      canPop: false,
      child: Scaffold(
        backgroundColor: const Color(0xFFE8EAF6),
        body: SafeArea(
          child: Center(
            child: Padding(
              padding: const EdgeInsets.all(32),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Mascot(size: 140),
                  const SizedBox(height: 8),
                  Icon(quiet ? Icons.nightlight_round : Icons.bedtime,
                      size: 56, color: Colors.indigo),
                  const SizedBox(height: 16),
                  Text(
                    loc('حان وقت الراحة'),
                    style: TextStyle(fontSize: 36, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 12),
                  Text(
                    _planDone
                        ? loc('أحسنت! أكملت خطة اليوم')
                        : quiet
                            ? loc('نراك في الصباح، أحلاماً سعيدة')
                            : loc('أحسنت! نلتقي لاحقاً'),
                    style: const TextStyle(fontSize: 24),
                  ),
                  if (stars > 0) ...[
                    const SizedBox(height: 16),
                    Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        for (var i = 0; i < stars; i++)
                          const Icon(Icons.star_rounded, size: 56, color: Colors.amber),
                      ],
                    ),
                  ],
                  if (!_planDone &&
                      AudioPrefs.instance.storiesInQuietHours &&
                      JourneyStore.instance.active != null) ...[
                    const SizedBox(height: 24),
                    OutlinedButton.icon(
                      onPressed: () => Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (_) => StoriesHomeScreen(child: JourneyStore.instance.active!),
                        ),
                      ),
                      icon: const Text('🌙', style: TextStyle(fontSize: 22)),
                      label: Text(loc('قصة هادئة قبل النوم'), style: TextStyle(fontSize: 18)),
                    ),
                  ],
                  const SizedBox(height: 48),
                  TextButton(
                    onPressed: () => _parent(context),
                    child: Text(loc('للوالدين'), style: TextStyle(fontSize: 18)),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
