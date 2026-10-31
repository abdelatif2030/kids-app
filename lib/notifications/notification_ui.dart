import 'package:flutter/material.dart';

import '../design/brand.dart';
import '../design/focusable_tap.dart';
import '../design/layout.dart';
import '../design/tokens.dart';
import '../design/motion.dart';
import '../design/motion_system.dart';
import '../dashboard_screen.dart';
import '../plan_screen.dart';
import '../l10n/app_locale.dart';
import '../l10n/strings.dart';
import 'notification_store.dart';

/// Opens what a notification points to. [onTab] switches the child shell's tab (`tab:N`); the parent's targets push
/// a screen. Unknown or missing routes do nothing.
typedef NotificationRouter = void Function(
  BuildContext context,
  AppNotification n,
);

/// The bell: a rounded purple button with the number of unread notifications (99+ at most). It wiggles once when a
/// new one arrives, unless motion is reduced. Always on screen on the child home, so nothing is hidden under «المزيد».
class NotificationBell extends StatefulWidget {
  final NotificationAudience audience;
  final String? childId;
  final NotificationRouter onRoute;
  final bool onDark;
  const NotificationBell({
    super.key,
    required this.audience,
    this.childId,
    required this.onRoute,
    this.onDark = false,
  });

  /// Tests set this to true to run the wiggle; otherwise it is off under a test binding.
  static bool? forceMotion;

  @override
  State<NotificationBell> createState() => _NotificationBellState();
}

class _NotificationBellState extends State<NotificationBell>
    with SingleTickerProviderStateMixin {
  late final AnimationController _c = AnimationController(
    vsync: this,
    duration: const Duration(milliseconds: 700),
  );
  int _last = 0;

  @override
  void initState() {
    super.initState();
    final s = NotificationStore.instance..ensureLoaded();
    _last = s.unread(widget.audience, childId: widget.childId);
    s.addListener(_changed);
  }

  bool get _motion =>
      (NotificationBell.forceMotion ??
          !WidgetsBinding.instance.runtimeType.toString().contains('Test')) &&
      !motionReduced(context);

  void _changed() {
    if (!mounted) return;
    final now = NotificationStore.instance.unread(
      widget.audience,
      childId: widget.childId,
    );
    if (now > _last && _motion) _c.forward(from: 0);
    _last = now;
  }

  @override
  void dispose() {
    NotificationStore.instance.removeListener(_changed);
    _c.dispose();
    super.dispose();
  }

  Future<void> _open() async {
    await Navigator.push(
      context,
      MaterialPageRoute(
        builder: (_) => NotificationCenterScreen(
          audience: widget.audience,
          childId: widget.childId,
          onRoute: widget.onRoute,
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return ListenableBuilder(
      listenable: NotificationStore.instance,
      builder: (context, _) {
        final n = NotificationStore.instance.unread(
          widget.audience,
          childId: widget.childId,
        );
        final label = n == 0
            ? tr2('الإشعارات', 'Notifications')
            : tr2('الإشعارات، $n غير مقروء', 'Notifications, $n unread');
        return Semantics(
          button: true,
          label: label,
          excludeSemantics: true,
          child: FocusableTap(
            key: const ValueKey('notification_bell'),
            onTap: _open,
            radius: 24,
            child: SizedBox(
              width: 52,
              height: 52,
              child: Stack(
                clipBehavior: Clip.none,
                alignment: Alignment.center,
                children: [
                  AnimatedBuilder(
                    animation: _c,
                    builder: (context, child) => Transform.rotate(
                      angle: _c.isAnimating
                          ? 0.35 *
                                (1 - _c.value) *
                                (_c.value * 24 % 2 < 1 ? 1 : -1)
                          : 0,
                      child: child,
                    ),
                    child: Container(
                      width: 44,
                      height: 44,
                      decoration: BoxDecoration(
                        gradient: widget.onDark ? null : DS.primaryGradient,
                        color: widget.onDark
                            ? Colors.white.withAlpha(36)
                            : null,
                        borderRadius: BorderRadius.circular(16),
                        boxShadow: widget.onDark ? null : DS.softShadow,
                      ),
                      child: Icon(
                        n == 0
                            ? Icons.notifications_none_rounded
                            : Icons.notifications_active_rounded,
                        color: Colors.white,
                        size: 26,
                      ),
                    ),
                  ),
                  if (n > 0)
                    PositionedDirectional(
                      top: 0,
                      end: 0,
                      child: Container(
                        key: const ValueKey('notification_badge'),
                        constraints: const BoxConstraints(
                          minWidth: 22,
                          minHeight: 22,
                        ),
                        padding: const EdgeInsets.symmetric(horizontal: 5),
                        alignment: Alignment.center,
                        decoration: BoxDecoration(
                          color: const Color(0xFFE53935),
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(color: Colors.white, width: 2),
                        ),
                        child: Text(
                          n > 99 ? '99+' : '$n',
                          style: const TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.w900,
                            fontSize: 12,
                          ),
                        ),
                      ),
                    ),
                ],
              ),
            ),
          ),
        );
      },
    );
  }
}

/// A small red dot on another button when there are unread notifications for [audience] (used on the parent entry).
class UnreadDot extends StatelessWidget {
  final NotificationAudience audience;
  final String? childId;
  final Widget child;
  const UnreadDot({
    super.key,
    required this.audience,
    this.childId,
    required this.child,
  });

  @override
  Widget build(BuildContext context) => ListenableBuilder(
    listenable: NotificationStore.instance,
    builder: (context, _) => Badge(
      key: const ValueKey('unread_dot'),
      isLabelVisible:
          NotificationStore.instance.unread(audience, childId: childId) > 0,
      smallSize: 10,
      child: child,
    ),
  );
}

IconData _icon(NotificationKind k) => switch (k) {
  NotificationKind.daily => Icons.wb_sunny_rounded,
  NotificationKind.activity => Icons.check_circle_rounded,
  NotificationKind.reward => Icons.star_rounded,
  NotificationKind.weekly => Icons.insights_rounded,
  NotificationKind.summary => Icons.school_rounded,
  NotificationKind.content => Icons.auto_stories_rounded,
  NotificationKind.security => Icons.shield_rounded,
};

Color _color(NotificationKind k) => switch (k) {
  NotificationKind.daily => const Color(0xFFE59A0B),
  NotificationKind.activity => const Color(0xFF2E9E5B),
  NotificationKind.reward => const Color(0xFFE59A0B),
  NotificationKind.weekly => DS.primary,
  NotificationKind.summary => const Color(0xFF2B6FD6),
  NotificationKind.content => DS.secondary,
  NotificationKind.security => const Color(0xFFD64545),
};

/// «الإشعارات»: the history, newest first, unread ones highlighted, with «mark all as read». Tapping a card marks it
/// read and goes to what it is about.
class NotificationCenterScreen extends StatelessWidget {
  final NotificationAudience audience;
  final String? childId;
  final NotificationRouter onRoute;
  final DateTime? now;
  const NotificationCenterScreen({
    super.key,
    required this.audience,
    this.childId,
    required this.onRoute,
    this.now,
  });

  @override
  Widget build(BuildContext context) {
    NotificationStore.instance.ensureLoaded();
    return ListenableBuilder(
      listenable: Listenable.merge([
        NotificationStore.instance,
        AppLocale.instance,
      ]),
      builder: (context, _) {
        final list = NotificationStore.instance.listFor(
          audience,
          childId: childId,
        );
        final unread = list.where((n) => !n.read).length;
        final clock = now ?? DateTime.now();
        return Scaffold(
          backgroundColor: DS.cream,
          appBar: AppBar(
            title: Text(tr2('الإشعارات', 'Notifications')),
            backgroundColor: const Color(0xFF2E1A6B),
            foregroundColor: Colors.white,
            actions: [
              TextButton(
                key: const ValueKey('mark_all_read'),
                onPressed: unread == 0
                    ? null
                    : () => NotificationStore.instance.markAllRead(
                        audience,
                        childId: childId,
                      ),
                child: Text(
                  tr2('قراءة الكل', 'Mark all read'),
                  style: TextStyle(
                    color: unread == 0 ? Colors.white38 : Colors.white,
                    fontWeight: FontWeight.w800,
                  ),
                ),
              ),
            ],
          ),
          body: list.isEmpty
              ? Center(
                  key: const ValueKey('notifications_empty'),
                  child: Padding(
                    padding: const EdgeInsets.all(24),
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        const AnimatedIconWrapper(
                          effect: IconEffect.float,
                          child: CharacterImage(
                            BrandCharacter.nourHead,
                            height: 120,
                          ),
                        ),
                        const SizedBox(height: 12),
                        Text(
                          tr2('لا توجد إشعارات بعد', 'No notifications yet'),
                          style: DS.heading,
                        ),
                        const SizedBox(height: 6),
                        Text(
                          tr2(
                            'عندما يحدث شيء جديد سيظهر هنا.',
                            'When something new happens, it will show up here.',
                          ),
                          textAlign: TextAlign.center,
                          style: DS.caption,
                        ),
                      ],
                    ),
                  ),
                )
              : CenteredList(
                  padding: const EdgeInsets.all(16),
                  children: [
                    for (final n in list)
                      Padding(
                        padding: const EdgeInsets.only(bottom: 10),
                        child: _Card(
                          n: n,
                          time: notificationTime(
                            n.at,
                            clock,
                            arabic: AppLocale.instance.isArabic,
                          ),
                          onTap: () async {
                            await NotificationStore.instance.markRead(n.id);
                            if (n.route != null && context.mounted) {
                              onRoute(context, n);
                            }
                          },
                        ),
                      ),
                  ],
                ),
        );
      },
    );
  }
}

class _Card extends StatelessWidget {
  final AppNotification n;
  final String time;
  final VoidCallback onTap;
  const _Card({required this.n, required this.time, required this.onTap});

  @override
  Widget build(BuildContext context) {
    final c = _color(n.kind);
    return Semantics(
      container: true,
      label:
          '${n.read ? '' : '${tr2('غير مقروء', 'Unread')}. '}${n.title}. ${n.body}. $time',
      excludeSemantics: true,
      child: FocusableTap(
        key: ValueKey('notification_${n.id}'),
        onTap: onTap,
        radius: 22,
        child: Container(
          padding: const EdgeInsets.all(14),
          decoration: BoxDecoration(
            color: n.read ? Colors.white : DS.primarySoft,
            borderRadius: BorderRadius.circular(22),
            border: Border.all(
              color: n.read ? DS.border : DS.primary,
              width: n.read ? 1 : 2,
            ),
            boxShadow: DS.softShadow,
          ),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                width: 46,
                height: 46,
                decoration: BoxDecoration(
                  color: c.withAlpha(30),
                  borderRadius: BorderRadius.circular(15),
                ),
                child: Icon(_icon(n.kind), color: c, size: 26),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      n.title,
                      style: TextStyle(
                        fontSize: 17,
                        fontWeight: n.read ? FontWeight.w700 : FontWeight.w900,
                        color: DS.ink,
                      ),
                    ),
                    const SizedBox(height: 2),
                    Text(n.body, style: DS.body),
                    const SizedBox(height: 6),
                    Text(time, style: DS.caption),
                  ],
                ),
              ),
              if (!n.read)
                Container(
                  key: ValueKey('unread_${n.id}'),
                  width: 12,
                  height: 12,
                  margin: const EdgeInsets.only(top: 4),
                  decoration: const BoxDecoration(
                    color: Color(0xFFE53935),
                    shape: BoxShape.circle,
                  ),
                ),
            ],
          ),
        ),
      ),
    );
  }
}

/// The child's routes: `tab:N` switches the shell's tab (0 = the map). The notification screen closes first.
NotificationRouter childRouter({required void Function(int tab) onTab}) =>
    (context, n) {
      final r = n.route ?? '';
      if (!r.startsWith('tab:')) return;
      final i = int.tryParse(r.substring(4));
      if (i == null) return;
      Navigator.of(context).pop();
      onTab(i);
    };

/// The parent's routes: the progress dashboard (for the child in `dashboard:<id>`, or the first one) or the plan.
void parentRoute(BuildContext context, AppNotification n) {
  final r = n.route ?? '';
  if (r == 'plan') {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (_) => const PlanScreen()),
    );
  } else if (r.startsWith('dashboard')) {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (_) => DashboardScreen(childId: childIdOfRoute(r)),
      ),
    );
  }
}

String? childIdOfRoute(String? route) =>
    route != null && route.startsWith('dashboard:')
    ? route.substring(10)
    : null;
