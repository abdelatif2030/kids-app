import '../games/game_common.dart';
import '../lessons_own/video_rewards.dart';
import 'repository.dart';

/// What a child has earned in total, from three real sources: the learning activities of the journey, the games finished for
/// the first time, and the lesson videos watched to the end (one star each, once). The level comes from the experience
/// points (10 per star, plus 5 per finished journey activity) and only ever goes up.
class RewardTotals {
  final int stars;
  final int xp;
  final int games;
  final int videos;
  const RewardTotals({required this.stars, required this.xp, required this.games, required this.videos});

  int get level => 1 + xp ~/ 100;
  int get xpIntoLevel => xp % 100;

  static Future<RewardTotals> of(String childId) async {
    final p = JourneyStore.instance.progressOf(childId);
    final games = (await GameRewards.doneIds(childId)).length;
    final videos = await VideoRewards.count(childId);
    return RewardTotals(stars: p.totalStars + games + videos, xp: p.xp + 10 * (games + videos), games: games, videos: videos);
  }
}
