import '../journey/models.dart';
import '../journey/repository.dart';
import 'notification_store.dart';

String _day(DateTime d) =>
    '${d.year}-${d.month.toString().padLeft(2, '0')}-${d.day.toString().padLeft(2, '0')}';

/// Creates notifications from things that really happened on this device. Nothing here invents an event; every
/// call is safe to repeat because each notification has a fixed id.
class NotificationEvents {
  NotificationEvents._();

  /// A learning activity was finished: one note for the child and a short summary line for the parent.
  static Future<void> activityFinished(
    ChildProfile? child,
    String childId,
    String what,
    int stars,
    int serial, {
    DateTime? now,
  }) async {
    final at = now ?? DateTime.now();
    final name = child?.nickname ?? '';
    final st = NotificationStore.instance;
    await st.add(
      AppNotification(
        id: 'act_${childId}_$serial',
        audience: NotificationAudience.child,
        childId: childId,
        kind: NotificationKind.activity,
        titleAr: 'برافو! خلصت نشاط',
        titleEn: 'Well done! Activity finished',
        bodyAr: 'كسبت $stars ${stars == 1 ? 'نجمة' : 'نجوم'}.',
        bodyEn: 'You earned $stars ${stars == 1 ? 'star' : 'stars'}.',
        at: at,
        route: 'tab:3',
      ),
    );
    await st.add(
      AppNotification(
        id: 'pact_${childId}_$serial',
        audience: NotificationAudience.parent,
        childId: childId,
        kind: NotificationKind.summary,
        titleAr: '$name أنهى نشاطاً',
        titleEn: '$name finished an activity',
        bodyAr: '$stars من 3 نجوم. شاهد التفاصيل في لوحة المتابعة.',
        bodyEn: '$stars of 3 stars. See the details in the progress dashboard.',
        at: at,
        route: 'dashboard:$childId',
      ),
    );
  }

  /// A game was finished for the first time (the star is earned only once).
  static Future<void> gameStarEarned(
    String childId,
    String gameId, {
    DateTime? now,
  }) => NotificationStore.instance.add(
    AppNotification(
      id: 'game_${childId}_$gameId',
      audience: NotificationAudience.child,
      childId: childId,
      kind: NotificationKind.reward,
      titleAr: 'نجمة جديدة!',
      titleEn: 'A new star!',
      bodyAr: 'خلصت لعبة جديدة وكسبت نجمة.',
      bodyEn: 'You finished a new game and earned a star.',
      at: now ?? DateTime.now(),
      route: 'tab:3',
    ),
  );

  /// Called when the child's home opens: today's plan is ready (once a day) and, for the parent, the weekly summary
  /// (once a week, only when something was really done in the last 7 days).
  static Future<void> refresh(ChildProfile child, {DateTime? now}) async {
    final at = now ?? DateTime.now();
    final store = JourneyStore.instance;
    final plan = store.todayPlan(child.id);
    if (plan.isNotEmpty) {
      await NotificationStore.instance.add(
        AppNotification(
          id: 'daily_${child.id}_${_day(at)}',
          audience: NotificationAudience.child,
          childId: child.id,
          kind: NotificationKind.daily,
          titleAr: 'أنشطة اليوم جاهزة',
          titleEn: "Today's activities are ready",
          bodyAr: 'عندك ${plan.length} أنشطة جديدة النهارده.',
          bodyEn: 'You have ${plan.length} new activities today.',
          at: at,
          route: 'tab:0',
        ),
      );
    }
    final weekAgo = _day(at.subtract(const Duration(days: 7)));
    final active = store.attempts.any((a) => a.day.compareTo(weekAgo) > 0);
    if (active) {
      final monday = at.subtract(Duration(days: at.weekday - 1));
      await NotificationStore.instance.add(
        AppNotification(
          id: 'weekly_${_day(monday)}',
          audience: NotificationAudience.parent,
          kind: NotificationKind.weekly,
          titleAr: 'ملخص الأسبوع جاهز',
          titleEn: 'Weekly summary is ready',
          bodyAr: 'شاهد ما تعلّمه أطفالك هذا الأسبوع.',
          bodyEn: 'See what your children learned this week.',
          at: at,
          route: 'dashboard',
        ),
      );
    }
  }
}
