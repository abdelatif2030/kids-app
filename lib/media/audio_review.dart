import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

import '../safe_json.dart';
import 'audio.dart';
import 'audio_manifest.dart';

/// Review decisions made with the review tool on this device. They are laid over
/// `assets/audio/manifest.json`; to make them permanent the owner exports them
/// and merges them into that file (the approval then travels with the app).
/// Decisions carry a reviewer name and a date; nothing here ever approves by itself.
class AudioReviewStore {
  static const _key = 'audio_reviews';
  static const _nameKey = 'audio_reviewer_name';

  static Future<Map<String, Map<String, dynamic>>> all() async {
    final m = decodeMap(await SharedPreferences.getInstance(), _key);
    return {
      for (final e in m.entries)
        if (e.value is Map) e.key: (e.value as Map).cast<String, dynamic>(),
    };
  }

  static Future<String> reviewerName() async => (await SharedPreferences.getInstance()).getString(_nameKey) ?? '';

  static Future<void> setReviewerName(String name) async =>
      (await SharedPreferences.getInstance()).setString(_nameKey, name.trim());

  /// Records one decision. [kind] is 'audio' (sound quality) or 'language' (pronunciation correctness).
  static Future<void> decide(String assetId, {required String kind, required Verdict verdict, required String reviewer, DateTime? now}) async {
    assert(kind == 'audio' || kind == 'language');
    final all0 = await all();
    final r = {...?all0[assetId]};
    final v = switch (verdict) { Verdict.approved => 'approved', Verdict.rejected => 'rejected', Verdict.pending => 'pending' };
    r['${kind}Review'] = v;
    r['${kind}Reviewer'] = verdict == Verdict.pending ? '' : reviewer;
    r['approvedAt'] = (now ?? DateTime.now()).toIso8601String().substring(0, 10);
    all0[assetId] = r;
    await (await SharedPreferences.getInstance()).setString(_key, jsonEncode(all0));
    await AppAudio.reloadManifest();
  }

  static Future<void> clear(String assetId) async {
    final all0 = await all()..remove(assetId);
    await (await SharedPreferences.getInstance()).setString(_key, jsonEncode(all0));
    await AppAudio.reloadManifest();
  }

  /// The decisions as JSON, ready to merge into assets/audio/manifest.json -> "assets".
  static Future<String> exportJson() async =>
      const JsonEncoder.withIndent('  ').convert({'assets': await all()});
}
