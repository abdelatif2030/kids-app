import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

import '../l10n/strings.dart';
import '../library/learning_records.dart';
import '../safe_json.dart';

/// «شعوري اليوم»: an optional face the child can pick. It is never required, never scored and never
/// turned into a diagnosis; it is not shown on the parent dashboard. Kept for 30 days on this device.
class Feeling {
  final String id;
  final String emoji;
  final String Function() label;
  final String Function() reply;
  const Feeling(this.id, this.emoji, this.label, this.reply);
}

final List<Feeling> kFeelings = [
  Feeling('happy', '😊', () => tr2('سعيد', 'Happy'), () => tr2('جميل! لنستمتع بيوم لطيف.', 'Lovely! Let us have a nice day.')),
  Feeling('excited', '🤩', () => tr2('متحمس', 'Excited'), () => tr2('رائع! ماذا تريد أن تبدأ به؟', 'Great! What would you like to start with?')),
  Feeling('calm', '😌', () => tr2('هادئ', 'Calm'), () => tr2('شعور هادئ وجميل.', 'A calm, nice feeling.')),
  Feeling('tired', '😴', () => tr2('متعب', 'Tired'), () => tr2('لا بأس. يمكنك أن تختار قصة هادئة.', 'That is fine. You could pick a calm story.')),
  Feeling('sad', '😢', () => tr2('حزين', 'Sad'), () => tr2('شكراً لأنك أخبرتنا. يمكنك أن تتحدث مع ماما أو بابا.', 'Thank you for telling us. You can talk to Mum or Dad.')),
  Feeling('angry', '😠', () => tr2('غاضب', 'Angry'), () => tr2('شكراً لأنك أخبرتنا. خذ نفساً عميقاً، ويمكنك أن تتحدث مع ماما أو بابا.', 'Thank you for telling us. Take a deep breath, and you can talk to Mum or Dad.')),
];

Feeling? feelingById(String? id) {
  for (final f in kFeelings) {
    if (f.id == id) return f;
  }
  return null;
}

class FeelingStore {
  static const _key = 'feeling_log';
  static const keepDays = 30;

  static Future<Map<String, dynamic>> _all() async => decodeMap(await SharedPreferences.getInstance(), _key);

  /// Today's choice for [childId], or null.
  static Future<Feeling?> today(String childId, {DateTime? now}) async {
    final mine = (await _all())[childId];
    if (mine is! Map) return null;
    return feelingById(mine[dayOf(now ?? DateTime.now())] as String?);
  }

  static Future<void> set(String childId, String feelingId, {DateTime? now}) async {
    final t = now ?? DateTime.now();
    final all = await _all();
    final mine = <String, dynamic>{...((all[childId] as Map?)?.cast<String, dynamic>() ?? {})};
    mine[dayOf(t)] = feelingId;
    final cutoff = dayOf(t.subtract(const Duration(days: keepDays)));
    mine.removeWhere((day, _) => day.compareTo(cutoff) < 0);
    all[childId] = mine;
    await (await SharedPreferences.getInstance()).setString(_key, jsonEncode(all));
  }

  static Future<void> forget(String childId) async {
    final all = await _all()..remove(childId);
    await (await SharedPreferences.getInstance()).setString(_key, jsonEncode(all));
  }
}
