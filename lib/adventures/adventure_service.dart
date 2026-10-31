import '../companion/companion_logic.dart';
import '../companion/companion_service.dart';
import '../games/game_common.dart' show GameRewards;
import '../notifications/notification_store.dart';
import '../progress_store.dart';
import '../stories/story_data.dart';
import '../stories/story_models.dart';
import '../stories/story_store.dart';
import 'adventure_logic.dart';
import 'adventure_store.dart';

class AdventureStatus {
  final AdventurePlan plan;
  final List<bool> done;
  final bool complete;

  /// True only on the call that recorded the completion (celebrate then, never again).
  final bool justCompleted;
  final CompanionReaction? said;
  const AdventureStatus(this.plan, this.done, this.complete, this.justCompleted, this.said);
  static final empty = AdventureStatus(AdventurePlan('', kAdventureThemes.first, const []), const [], false, false, null);
}

class AdventureService {
  AdventureService._();

  /// Reads this week's real progress for the child and, when every step is done, records the adventure once.
  static Future<AdventureStatus> check(String childId, int age, {DateTime? now, List<Story>? stories, bool speak = false, bool celebrate = true}) async {
    final at = now ?? DateTime.now();
    final ability = abilityOf(await ProgressStore.load(), childId);
    final plan = planFor(at, age, ability, stories ?? publishedStories());
    final from = weekIdOf(at), to = weekEndIdOf(at);
    final games = await GameRewards.doneBetween(childId, from, to);
    final heard = {
      for (final e in await StoryStore.history(childId))
        if (e.completed && e.day.compareTo(from) >= 0 && e.day.compareTo(to) <= 0) e.storyId,
    };
    final done = stepsDone(plan, games, heard);
    final complete = adventureComplete(plan, games, heard);
    var just = false;
    CompanionReaction? said;
    if (complete && await AdventureStore.record(childId, plan.weekId, plan.theme.id)) {
      just = true;
      if (celebrate) {
        said = await CompanionService.react(childId, CompanionMoment.activityDone, eventId: 'adv:${plan.weekId}', age: age, speak: speak);
      }
      await NotificationStore.instance.add(AppNotification(
        id: 'adv_${childId}_${plan.weekId}',
        audience: NotificationAudience.child,
        childId: childId,
        kind: NotificationKind.reward,
        titleAr: 'خلصت مغامرة الأسبوع!',
        titleEn: 'Weekly adventure finished!',
        bodyAr: plan.theme.title(),
        bodyEn: plan.theme.title(),
        at: at,
        route: 'tab:3',
      ));
    }
    return AdventureStatus(plan, done, complete, just, said);
  }
}
