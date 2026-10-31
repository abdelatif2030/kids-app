import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../l10n/app_locale.dart';
import '../safe_json.dart';

/// Who a notification is for. Children only ever see `child` notifications of their own profile; the parent area
/// shows `parent` ones. `teacher` is reserved: nothing creates it yet because there is no teacher data on the device
/// (classroom updates and parent messages need the online teacher service).
enum NotificationAudience { child, parent, teacher }

enum NotificationKind {
  daily,
  activity,
  reward,
  weekly,
  summary,
  content,
  security,
}

/// One in-app notification. Text is stored in both languages, so it follows a later language change.
class AppNotification {
  final String id;
  final NotificationAudience audience;
  final String? childId;
  final NotificationKind kind;
  final String titleAr, titleEn, bodyAr, bodyEn;
  final DateTime at;
  final bool read;

  /// Where tapping goes: `tab:1` (games), `tab:2` (create), `tab:3` (rewards), `stories`, `learn`, `dashboard`, `plan`.
  final String? route;
  const AppNotification({
    required this.id,
    required this.audience,
    this.childId,
    required this.kind,
    required this.titleAr,
    required this.titleEn,
    required this.bodyAr,
    required this.bodyEn,
    required this.at,
    this.read = false,
    this.route,
  });

  String get title => AppLocale.instance.isArabic ? titleAr : titleEn;
  String get body => AppLocale.instance.isArabic ? bodyAr : bodyEn;

  AppNotification asRead() => AppNotification(
    id: id,
    audience: audience,
    childId: childId,
    kind: kind,
    titleAr: titleAr,
    titleEn: titleEn,
    bodyAr: bodyAr,
    bodyEn: bodyEn,
    at: at,
    read: true,
    route: route,
  );

  Map<String, dynamic> toJson() => {
    'id': id,
    'a': audience.name,
    'c': childId,
    'k': kind.name,
    'ta': titleAr,
    'te': titleEn,
    'ba': bodyAr,
    'be': bodyEn,
    't': at.millisecondsSinceEpoch,
    'r': read,
    'o': route,
  };

  factory AppNotification.fromJson(Map<String, dynamic> j) => AppNotification(
    id: j['id'] as String,
    audience: NotificationAudience.values.byName(j['a'] as String),
    childId: j['c'] as String?,
    kind: NotificationKind.values.byName(j['k'] as String),
    titleAr: j['ta'] as String,
    titleEn: j['te'] as String,
    bodyAr: j['ba'] as String,
    bodyEn: j['be'] as String,
    at: DateTime.fromMillisecondsSinceEpoch(j['t'] as int),
    read: j['r'] as bool? ?? false,
    route: j['o'] as String?,
  );
}

/// The notification history, kept on this device only (shared_preferences `notifications`): at most 100 entries and
/// 60 days. Adding an id that already exists does nothing, so the same event can never notify twice.
class NotificationStore extends ChangeNotifier {
  NotificationStore._();
  static final NotificationStore instance = NotificationStore._();
  static const key = 'notifications';
  static const maxItems = 100;
  static const keepDays = 60;

  List<AppNotification> _items = [];
  bool _loaded = false;
  Future<void>? _loading;

  /// Starts loading once; widgets call this and rebuild when it finishes.
  void ensureLoaded() {
    if (_loaded || _loading != null) return;
    _loading = load();
  }

  Future<void> load() async {
    final p = await SharedPreferences.getInstance();
    final cutoff = DateTime.now().subtract(const Duration(days: keepDays));
    _items = decodeList(
      p,
      key,
      AppNotification.fromJson,
    ).where((n) => n.at.isAfter(cutoff)).toList();
    _loaded = true;
    _loading = null;
    notifyListeners();
  }

  /// Tests start from a clean store.
  void resetForTest() {
    _items = [];
    _loaded = false;
    _loading = null;
  }

  Future<void> _save() async {
    try {
      await (await SharedPreferences.getInstance()).setString(
        key,
        jsonEncode([for (final n in _items) n.toJson()]),
      );
    } catch (_) {
      // The list still works for this run.
    }
  }

  bool _mine(AppNotification n, NotificationAudience a, String? childId) =>
      n.audience == a &&
      (a != NotificationAudience.child || n.childId == childId);

  /// Newest first.
  List<AppNotification> listFor(NotificationAudience a, {String? childId}) => [
    for (final n in _items)
      if (_mine(n, a, childId)) n,
  ]..sort((x, y) => y.at.compareTo(x.at));

  int unread(NotificationAudience a, {String? childId}) =>
      _items.where((n) => _mine(n, a, childId) && !n.read).length;

  /// Returns false when a notification with this id already exists.
  Future<bool> add(AppNotification n) async {
    if (!_loaded) await load();
    if (_items.any((e) => e.id == n.id)) return false;
    _items = [..._items, n];
    if (_items.length > maxItems) {
      _items.sort((a, b) => a.at.compareTo(b.at));
      _items = _items.sublist(_items.length - maxItems);
    }
    notifyListeners();
    await _save();
    return true;
  }

  Future<void> markRead(String id) async {
    if (!_loaded) await load();
    final i = _items.indexWhere((n) => n.id == id);
    if (i < 0 || _items[i].read) return;
    _items = [..._items]..[i] = _items[i].asRead();
    notifyListeners();
    await _save();
  }

  Future<void> markAllRead(NotificationAudience a, {String? childId}) async {
    if (!_loaded) await load();
    _items = [for (final n in _items) _mine(n, a, childId) ? n.asRead() : n];
    notifyListeners();
    await _save();
  }

  /// Everything is deleted (used by "delete all children's data").
  Future<void> clearAll() async {
    _items = [];
    _loaded = true;
    notifyListeners();
    try {
      await (await SharedPreferences.getInstance()).remove(key);
    } catch (_) {}
  }

  /// Removes everything addressed to one child (used when the child's data is deleted).
  Future<void> removeChild(String childId) async {
    if (!_loaded) await load();
    _items = [
      for (final n in _items)
        if (n.childId != childId) n,
    ];
    notifyListeners();
    await _save();
  }
}

/// "Just now", "5 min ago", "Yesterday" or a date, in the interface language.
String notificationTime(DateTime at, DateTime now, {required bool arabic}) {
  final d = now.difference(at);
  if (d.inMinutes < 1) return arabic ? 'الآن' : 'Just now';
  if (d.inMinutes < 60) {
    return arabic ? 'منذ ${d.inMinutes} دقيقة' : '${d.inMinutes} min ago';
  }
  final today = DateTime(now.year, now.month, now.day);
  final day = DateTime(at.year, at.month, at.day);
  final days = today.difference(day).inDays;
  if (days == 0) return arabic ? 'منذ ${d.inHours} ساعة' : '${d.inHours} h ago';
  if (days == 1) return arabic ? 'أمس' : 'Yesterday';
  return '${at.day}/${at.month}/${at.year}';
}
