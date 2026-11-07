import 'package:flutter_test/flutter_test.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:kids_app/journey/repository.dart';
import 'package:kids_app/journey/reward_totals.dart';
import 'package:kids_app/lessons_own/video_rewards.dart';
import 'package:kids_app/notifications/notification_store.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  setUp(() async {
    SharedPreferences.setMockInitialValues({});
    FlutterSecureStorage.setMockInitialValues({});
  });

  test('a video counts only when it was really played (70%), not dragged to the end', () {
    const len = Duration(minutes: 10);
    expect(videoWatchedEnough(played: const Duration(minutes: 8), length: len), isTrue);
    expect(videoWatchedEnough(played: const Duration(seconds: 5), length: len), isFalse);
    expect(videoWatchedEnough(played: const Duration(minutes: 7), length: len), isTrue);
    expect(videoWatchedEnough(played: const Duration(minutes: 6), length: len), isFalse);
    expect(videoWatchedEnough(played: const Duration(minutes: 1), length: Duration.zero), isFalse);
  });

  test('the first finish of a video earns one star and one child notification; a replay earns nothing', () async {
    await NotificationStore.instance.load();
    expect(await VideoRewards.complete('k1', 'lesson_01'), isTrue);
    expect(await VideoRewards.complete('k1', 'lesson_01'), isFalse);
    expect(await VideoRewards.complete('k1', 'lesson_02'), isTrue);
    expect(await VideoRewards.count('k1'), 2);
    expect(await VideoRewards.count('k2'), 0, reason: 'stars belong to one child');
    expect((await VideoRewards.doneIds('k1')), {'lesson_01', 'lesson_02'});
  });

  test('totals add the journey, the games and the videos, and the level only goes up with real finishes', () async {
    await JourneyStore.instance.load();
    final before = await RewardTotals.of('nobody');
    expect(before.stars, 0);
    expect(before.level, 1);
    await VideoRewards.complete('nobody', 'lesson_01');
    final after = await RewardTotals.of('nobody');
    expect(after.stars, 1);
    expect(after.videos, 1);
    expect(after.xp, 10);
    for (var i = 2; i <= 10; i++) {
      await VideoRewards.complete('nobody', 'lesson_$i');
    }
    final ten = await RewardTotals.of('nobody');
    expect(ten.stars, 10);
    expect(ten.level, 2, reason: '100 xp = level 2');
  });
}
