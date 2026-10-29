import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

import '../safe_json.dart';
import 'family_models.dart';
import 'family_repository.dart';

/// Which conversations the child has looked at (device only, `family_seen`: thread id -> time). Used only to show
/// a "new messages" count. Nothing is sent anywhere.
class FamilySeen {
  static const _key = 'family_seen';

  static Future<Map<String, dynamic>> _all() async => decodeMap(await SharedPreferences.getInstance(), _key);

  static Future<DateTime> seenAt(String threadId) async {
    final v = (await _all())[threadId];
    return v is int ? DateTime.fromMillisecondsSinceEpoch(v) : DateTime.fromMillisecondsSinceEpoch(0);
  }

  static Future<void> markSeen(String threadId, DateTime upTo) async {
    final all = await _all();
    final old = all[threadId];
    final ms = upTo.millisecondsSinceEpoch;
    if (old is int && old >= ms) return;
    all[threadId] = ms;
    await (await SharedPreferences.getInstance()).setString(_key, jsonEncode(all));
  }

  static Future<void> forget(String childId) async {
    final all = await _all();
    final before = all.length;
    all.removeWhere((k, _) => k.startsWith('${childId}__'));
    if (all.length != before) await (await SharedPreferences.getInstance()).setString(_key, jsonEncode(all));
  }
}

/// One person the child can talk to, with what the list needs to show.
class FamilyContact {
  final Relative rel;
  final FamilyMessage? last;
  final int unread;
  const FamilyContact({required this.rel, required this.last, required this.unread});
}

class FamilyOverview {
  final List<FamilyContact> contacts;
  const FamilyOverview(this.contacts);
  int get unread => contacts.fold(0, (a, c) => a + c.unread);
}

/// The people this child can talk to (approved and linked), the last message of each conversation and how many of
/// the relative's messages the child has not seen yet. Read with the parent's account (the family id is its uid).
Future<FamilyOverview> loadFamilyOverview(FamilyRepository repo, String childId) async {
  final fid = repo.uid;
  if (fid == null) return const FamilyOverview([]);
  final rels = [for (final r in await repo.relatives()) if (r.active && r.children.containsKey(childId)) r];
  final all = await repo.allMessages(fid);
  final out = <FamilyContact>[];
  for (final r in rels) {
    final mine = [for (final m in all) if (m.childId == childId && m.relUid == r.uid) m]..sort((a, b) => a.at.compareTo(b.at));
    final seen = await FamilySeen.seenAt(threadIdOf(childId, r.uid));
    out.add(FamilyContact(
      rel: r,
      last: mine.isEmpty ? null : mine.last,
      unread: mine.where((m) => m.from == Side.relative && m.at.isAfter(seen)).length,
    ));
  }
  // Conversations with something new first, then the most recent.
  out.sort((a, b) {
    if ((a.unread > 0) != (b.unread > 0)) return a.unread > 0 ? -1 : 1;
    return (b.last?.at ?? DateTime.fromMillisecondsSinceEpoch(0)).compareTo(a.last?.at ?? DateTime.fromMillisecondsSinceEpoch(0));
  });
  return FamilyOverview(out);
}
