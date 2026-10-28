import 'package:flutter/material.dart';

import '../../parent_screens.dart';
import '../../parent_settings.dart';
import '../../rest_screen.dart';
import '../../session_manager.dart';
import '../../teachers_screens.dart';
import '../../ui.dart' show Mascot;
import '../models.dart';
import '../repository.dart';
import 'child_shell.dart';
import 'kit.dart';
import 'onboarding.dart';
import 'privacy_screen.dart';

/// The first screen: a welcome for a new device, or "who is playing?".
class StartScreen extends StatelessWidget {
  const StartScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return ListenableBuilder(
      listenable: JourneyStore.instance,
      builder: (context, _) {
        final store = JourneyStore.instance;
        return Scaffold(
          appBar: AppBar(
            backgroundColor: Colors.transparent,
            foregroundColor: RC.ink,
            actions: [
              IconButton(
                iconSize: 30,
                tooltip: 'إعدادات الوالدين',
                icon: const Icon(Icons.settings_rounded),
                onPressed: () => openParentArea(context),
              ),
            ],
          ),
          extendBodyBehindAppBar: true,
          body: PastelBackground(
            child: SafeArea(
              child: !store.ready
                  ? const Center(child: CircularProgressIndicator())
                  : (store.profiles.isEmpty ? const _Welcome() : const _Picker()),
            ),
          ),
        );
      },
    );
  }
}

class _Welcome extends StatelessWidget {
  const _Welcome();

  @override
  Widget build(BuildContext context) {
    return Center(
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(24),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const Mascot(size: 170),
            const SizedBox(height: 12),
            Semantics(
              header: true,
              child: const Text('رحلتي',
                  style: TextStyle(fontSize: 56, fontWeight: FontWeight.w900, color: RC.ink)),
            ),
            const Text('Rehlaty',
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold, color: RC.outline)),
            const SizedBox(height: 8),
            const Text('تعلّم · العب · اكتشف',
                style: TextStyle(fontSize: 22, color: RC.ink)),
            const SizedBox(height: 28),
            FilledButton.icon(
              style: FilledButton.styleFrom(
                minimumSize: const Size(260, 64),
                backgroundColor: RC.good,
              ),
              onPressed: () => Navigator.push(
                context,
                MaterialPageRoute(builder: (_) => const OnboardingFlow()),
              ),
              icon: const Icon(Icons.rocket_launch_rounded, size: 30),
              label: const Text('ابدأ الرحلة', style: TextStyle(fontSize: 24, fontWeight: FontWeight.w900)),
            ),
            const SizedBox(height: 10),
            const Text('يبدأ ولي الأمر بإضافة طفل', style: TextStyle(fontSize: 15, color: RC.ink)),
            const SizedBox(height: 18),
            TextButton.icon(
              onPressed: () => Navigator.push(
                context,
                MaterialPageRoute(builder: (_) => const TeachersEntryScreen()),
              ),
              icon: const Icon(Icons.school_rounded),
              label: const Text('حساب الأهل والمدرسين', style: TextStyle(fontSize: 17)),
            ),
            TextButton.icon(
              onPressed: () => Navigator.push(
                context,
                MaterialPageRoute(builder: (_) => const PrivacyScreen()),
              ),
              icon: const Icon(Icons.privacy_tip_outlined),
              label: const Text('الخصوصية', style: TextStyle(fontSize: 17)),
            ),
          ],
        ),
      ),
    );
  }
}

class _Picker extends StatelessWidget {
  const _Picker();

  /// Adding a child is a parent's job: it asks for the PIN when one is set.
  Future<void> _addChild(BuildContext context) async {
    if (await ParentSettings.instance.hasPin()) {
      if (!context.mounted) return;
      final ok = await Navigator.push<bool>(
        context,
        MaterialPageRoute(builder: (_) => const PinEntryScreen(returnResult: true)),
      );
      if (ok != true) return;
    }
    if (!context.mounted) return;
    Navigator.push(context, MaterialPageRoute(builder: (_) => const OnboardingFlow()));
  }

  /// Picking a child starts child mode: it checks the daily limit and quiet hours first.
  Future<void> _enter(BuildContext context, ChildProfile child) async {
    final session = SessionManager.instance;
    final blocked = await session.check();
    if (!context.mounted) return;
    await JourneyStore.instance.setActive(child.id);
    if (!context.mounted) return;
    if (blocked != null) {
      session.currentAge = child.age;
      goToRest(context, blocked);
      return;
    }
    await session.start(child.age);
    if (!context.mounted) return;
    Navigator.push(context, MaterialPageRoute(builder: (_) => ChildShell(child: child)));
  }

  @override
  Widget build(BuildContext context) {
    final store = JourneyStore.instance;
    return Center(
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(24),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const Text('رحلتي',
                style: TextStyle(fontSize: 44, fontWeight: FontWeight.w900, color: RC.ink)),
            const SizedBox(height: 6),
            Semantics(
              header: true,
              child: const Text('من سيلعب اليوم؟',
                  style: TextStyle(fontSize: 26, fontWeight: FontWeight.w800, color: RC.ink)),
            ),
            const SizedBox(height: 20),
            Wrap(
              spacing: 16,
              runSpacing: 16,
              alignment: WrapAlignment.center,
              children: [
                for (final c in store.profiles)
                  SizedBox(
                    width: 150,
                    child: RCard(
                      color: c.id == store.activeId ? RC.yellow : RC.card,
                      outline: c.id == store.activeId ? RC.star : RC.outline,
                      semanticLabel: 'ابدأ اللعب: ${c.nickname}',
                      onTap: () => _enter(context, c),
                      child: Column(
                        children: [
                          Mascot(size: 86, accessory: c.accessory),
                          const SizedBox(height: 4),
                          Text(c.nickname,
                              textAlign: TextAlign.center,
                              maxLines: 1,
                              overflow: TextOverflow.ellipsis,
                              style: const TextStyle(
                                  fontSize: 20, fontWeight: FontWeight.w900, color: RC.ink)),
                          Text('⭐ ${store.progressOf(c.id).totalStars}',
                              style: const TextStyle(fontWeight: FontWeight.bold, color: RC.ink)),
                        ],
                      ),
                    ),
                  ),
                SizedBox(
                  width: 150,
                  child: RCard(
                    color: Colors.white.withAlpha(170),
                    semanticLabel: 'إضافة طفل (للأهل)',
                    onTap: () => _addChild(context),
                    child: const Column(
                      children: [
                        SizedBox(height: 14),
                        Icon(Icons.add_circle_rounded, size: 58, color: RC.outline),
                        SizedBox(height: 10),
                        Text('إضافة طفل',
                            style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: RC.ink)),
                        SizedBox(height: 14),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
