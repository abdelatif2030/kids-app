import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../safe_json.dart';
import 'family_models.dart';
import 'family_repository.dart';

/// A chat message written on this device that has not reached the server yet.
class OutboxItem {
  /// Also the id of the message on the server, so sending the same item twice can never make two messages.
  final String id;
  final String familyId;
  final String childId;
  final String childName;
  final String relUid;
  final Side from;
  final String kind;
  final String body;
  final int createdMs;
  final int attempts;

  /// Set when the server refused it for good (not allowed, too old): it stays visible until the person deletes it.
  final String? failedReason;
  const OutboxItem({
    required this.id,
    required this.familyId,
    required this.childId,
    required this.childName,
    required this.relUid,
    required this.from,
    required this.kind,
    required this.body,
    required this.createdMs,
    this.attempts = 0,
    this.failedReason,
  });

  bool get failed => failedReason != null;
  String get threadId => threadIdOf(childId, relUid);

  OutboxItem copyWith({int? attempts, String? failedReason, bool clearFailure = false}) => OutboxItem(
        id: id,
        familyId: familyId,
        childId: childId,
        childName: childName,
        relUid: relUid,
        from: from,
        kind: kind,
        body: body,
        createdMs: createdMs,
        attempts: attempts ?? this.attempts,
        failedReason: clearFailure ? null : (failedReason ?? this.failedReason),
      );

  Map<String, dynamic> toJson() => {
        'i': id,
        'f': familyId,
        'c': childId,
        'n': childName,
        'r': relUid,
        's': from == Side.child ? 'c' : 'r',
        'k': kind,
        'b': body,
        't': createdMs,
        'a': attempts,
        if (failedReason != null) 'x': failedReason,
      };

  static OutboxItem fromJson(Map<String, dynamic> j) => OutboxItem(
        id: j['i'] as String,
        familyId: j['f'] as String,
        childId: j['c'] as String,
        childName: (j['n'] as String?) ?? '',
        relUid: j['r'] as String,
        from: j['s'] == 'c' ? Side.child : Side.relative,
        kind: j['k'] as String,
        body: j['b'] as String,
        createdMs: j['t'] as int,
        attempts: (j['a'] as int?) ?? 0,
        failedReason: j['x'] as String?,
      );
}

/// Messages written while offline. They are kept on the device (nothing else is stored or sent), shown as "waiting to
/// send", and sent in the order they were written as soon as the server can be reached. Every item carries its own id
/// that is also the server's message id, so a retry after an unknown outcome cannot create a duplicate.
/// Only text, phrases and stickers are queued; voice messages are not (they are large and time-bound).
class FamilyOutbox extends ChangeNotifier {
  FamilyOutbox();
  static final FamilyOutbox instance = FamilyOutbox();

  static const prefsKey = 'family_outbox';
  static const maxItems = 50;

  /// A message older than this is not sent any more: the conversation has moved on.
  static const maxAge = Duration(days: 7);

  List<OutboxItem>? _items;
  bool _flushing = false;
  int _n = 0;

  SharedPreferences? _prefsRef;

  Future<List<OutboxItem>> _load() async {
    final prefs = await SharedPreferences.getInstance();
    final cached = _items;
    // Re-read when the storage object itself was replaced (tests do this; the app never does).
    if (cached != null && identical(prefs, _prefsRef)) return cached;
    _prefsRef = prefs;
    return _items = decodeList(prefs, prefsKey, OutboxItem.fromJson);
  }

  Future<void> _save() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(prefsKey, jsonEncode([for (final i in _items ?? const <OutboxItem>[]) i.toJson()]));
    notifyListeners();
  }

  /// For tests: forget the cache so the next call reads storage again.
  void resetForTest() {
    _items = null;
    _flushing = false;
  }

  Future<List<OutboxItem>> all() async => List.unmodifiable(await _load());

  Future<List<OutboxItem>> pendingFor({required String familyId, required String childId, required String relUid}) async =>
      [for (final i in await _load()) if (i.familyId == familyId && i.childId == childId && i.relUid == relUid) i];

  Future<int> count() async => (await _load()).length;

  /// Stores a message to be sent. Throws [FamilyException] if it is not a valid message or the queue is full.
  Future<OutboxItem> enqueue({
    required String familyId,
    required String childId,
    required String childName,
    required String relUid,
    required Side from,
    required String kind,
    required String body,
    DateTime? now,
  }) async {
    if (kind == kindVoice) throw const FamilyException('voice messages are not queued');
    final problem = validateMessage(kind, body);
    if (problem != null) throw FamilyException(problem);
    final items = await _load();
    if (items.length >= maxItems) throw const FamilyException('too many messages are waiting');
    final ms = (now ?? DateTime.now()).millisecondsSinceEpoch;
    final item = OutboxItem(
      id: 'o${ms.toRadixString(36)}${(_n++).toRadixString(36)}${(ms * 7919 % 100003).toRadixString(36)}',
      familyId: familyId,
      childId: childId,
      childName: childName,
      relUid: relUid,
      from: from,
      kind: kind,
      body: kind == kindText ? body.trim() : body,
      createdMs: ms,
    );
    items.add(item);
    await _save();
    return item;
  }

  Future<void> discard(String id) async {
    final items = await _load();
    items.removeWhere((i) => i.id == id);
    await _save();
  }

  /// Puts a refused message back in the line.
  Future<void> retry(String id) async {
    final items = await _load();
    final k = items.indexWhere((i) => i.id == id);
    if (k < 0) return;
    items[k] = items[k].copyWith(clearFailure: true);
    await _save();
  }

  /// Everything queued for one child (when the child's data is deleted).
  Future<void> removeForChild(String childId) async {
    final items = await _load();
    items.removeWhere((i) => i.childId == childId);
    await _save();
  }

  /// Sends what is waiting, oldest first. Stops at the first message that cannot be sent because there is no connection
  /// (the rest would fail the same way and the order must stay). A message the server refuses for good is marked failed
  /// and the next ones are still tried. Returns how many were sent. Two flushes never run at once.
  Future<int> flush(FamilyRepository repo, {DateTime? now}) async {
    if (_flushing) return 0;
    _flushing = true;
    var sent = 0;
    try {
      final items = await _load();
      final nowMs = (now ?? DateTime.now()).millisecondsSinceEpoch;
      for (final item in List.of(items)) {
        if (item.failed) continue;
        final at = items.indexWhere((i) => i.id == item.id);
        if (at < 0) continue; // discarded while flushing
        if (nowMs - item.createdMs > maxAge.inMilliseconds) {
          items[at] = item.copyWith(failedReason: 'too old');
          await _save();
          continue;
        }
        try {
          await repo.send(
            familyId: item.familyId,
            childId: item.childId,
            childName: item.childName,
            relUid: item.relUid,
            from: item.from,
            kind: item.kind,
            body: item.body,
            clientId: item.id,
          );
          items.removeWhere((i) => i.id == item.id);
          sent++;
          await _save();
        } on FamilyException catch (e) {
          final k = items.indexWhere((i) => i.id == item.id);
          if (k < 0) continue;
          if (e.offline) {
            items[k] = items[k].copyWith(attempts: items[k].attempts + 1);
            await _save();
            break;
          }
          items[k] = items[k].copyWith(attempts: items[k].attempts + 1, failedReason: e.message);
          await _save();
        }
      }
    } finally {
      _flushing = false;
    }
    return sent;
  }
}
