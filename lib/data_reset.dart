import 'package:shared_preferences/shared_preferences.dart';

import 'journey/repository.dart';

/// Deletes what the app learned about the children from this device: profiles,
/// finished activities, skill results, watch history, daily time, the weekly
/// plan and the parent's notes. The parent PIN and the time limits stay.
Future<void> deleteChildData() async {
  await JourneyStore.instance.resetAll();
  final prefs = await SharedPreferences.getInstance();
  for (final key in prefs.getKeys().toList()) {
    if (key == 'watch_history' ||
        key == 'skill_events' ||
        key == 'parent_notes' ||
        key == 'last_age' ||
        key.startsWith('used_') ||
        key.startsWith('bonus_') ||
        key.startsWith('plan_target_')) {
      await prefs.remove(key);
    }
  }
}
