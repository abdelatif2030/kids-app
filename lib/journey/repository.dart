import 'dart:convert';
import 'dart:math';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../safe_json.dart';
import 'lands.dart';
import 'models.dart';
import 'progress.dart';
import 'recommender.dart';

/// Where the journey data lives. The demo keeps it on the device; a real
/// backend can implement this interface later without touching the screens.
abstract class JourneyRepository {
  Future<List<ChildProfile>> loadProfiles();
  Future<void> saveProfiles(List<ChildProfile> profiles);
  Future<String?> loadActiveChild();
  Future<void> saveActiveChild(String? id);
  Future<List<Attempt>> loadAttempts();
  Future<void> saveAttempts(List<Attempt> attempts);
  Future<List<CustomQuestion>> loadCustomQuestions();
  Future<void> saveCustomQuestions(List<CustomQuestion> questions);
  Future<JourneySettings> loadSettings();
  Future<void> saveSettings(JourneySettings settings);

  /// Forget everything about the journey (profiles, runs, custom content).
  Future<void> resetAll();
}

/// Choices made in the content admin.
class JourneySettings {
  final Set<String> draftLands; // lands hidden from children (not published)
  final Map<String, int> badgeThresholds;
  final Map<String, List<int>> landAges; // land id -> [min, max]
  const JourneySettings({
    this.draftLands = const {},
    this.badgeThresholds = const {},
    this.landAges = const {},
  });

  JourneySettings copyWith({
    Set<String>? draftLands,
    Map<String, int>? badgeThresholds,
    Map<String, List<int>>? landAges,
  }) =>
      JourneySettings(
        draftLands: draftLands ?? this.draftLands,
        badgeThresholds: badgeThresholds ?? this.badgeThresholds,
        landAges: landAges ?? this.landAges,
      );

  Map<String, dynamic> toJson() => {'draft': draftLands.toList(), 'thr': badgeThresholds, 'ages': landAges};

  factory JourneySettings.fromJson(Map<String, dynamic> j) => JourneySettings(
        draftLands: {for (final e in (j['draft'] as List<dynamic>? ?? [])) e as String},
        badgeThresholds: {
          for (final e in ((j['thr'] as Map<String, dynamic>?) ?? {}).entries) e.key: e.value as int,
        },
        landAges: {
          for (final e in ((j['ages'] as Map<String, dynamic>?) ?? {}).entries)
            e.key: [for (final v in e.value as List<dynamic>) v as int],
        },
      );
}

class LocalJourneyRepository implements JourneyRepository {
  static const _profiles = 'rj_profiles';
  static const _active = 'rj_active';
  static const _attempts = 'rj_attempts';
  static const _custom = 'rj_custom';
  static const _settings = 'rj_settings';

  Future<SharedPreferences> get _p => SharedPreferences.getInstance();

  @override
  Future<List<ChildProfile>> loadProfiles() async =>
      decodeList(await _p, _profiles, ChildProfile.fromJson);

  @override
  Future<void> saveProfiles(List<ChildProfile> profiles) async => (await _p)
      .setString(_profiles, jsonEncode([for (final c in profiles) c.toJson()]));

  @override
  Future<String?> loadActiveChild() async => (await _p).getString(_active);

  @override
  Future<void> saveActiveChild(String? id) async {
    final p = await _p;
    id == null ? await p.remove(_active) : await p.setString(_active, id);
  }

  @override
  Future<List<Attempt>> loadAttempts() async =>
      decodeList(await _p, _attempts, Attempt.fromJson);

  @override
  Future<void> saveAttempts(List<Attempt> attempts) async => (await _p)
      .setString(_attempts, jsonEncode([for (final a in attempts) a.toJson()]));

  @override
  Future<List<CustomQuestion>> loadCustomQuestions() async =>
      decodeList(await _p, _custom, CustomQuestion.fromJson);

  @override
  Future<void> saveCustomQuestions(List<CustomQuestion> questions) async => (await _p)
      .setString(_custom, jsonEncode([for (final q in questions) q.toJson()]));

  @override
  Future<JourneySettings> loadSettings() async {
    final map = decodeMap(await _p, _settings);
    try {
      return map.isEmpty ? const JourneySettings() : JourneySettings.fromJson(map);
    } catch (_) {
      return const JourneySettings();
    }
  }

  @override
  Future<void> saveSettings(JourneySettings s) async =>
      (await _p).setString(_settings, jsonEncode(s.toJson()));

  @override
  Future<void> resetAll() async {
    final p = await _p;
    for (final k in [_profiles, _active, _attempts, _custom, _settings, 'skill_events']) {
      await p.remove(k);
    }
  }
}

/// The app's view of the journey: profiles, finished activities and the
/// numbers derived from them. Screens listen to it and rebuild on change.
class JourneyStore extends ChangeNotifier {
  JourneyStore(this.repo);

  /// Replaced in tests.
  static JourneyStore instance = JourneyStore(LocalJourneyRepository());

  static const maxAttempts = 3000;

  final JourneyRepository repo;
  bool ready = false;
  List<ChildProfile> profiles = [];
  String? activeId;
  List<Attempt> _attempts = [];
  List<CustomQuestion> custom = [];
  JourneySettings settings = const JourneySettings();

  Future<void> load() async {
    profiles = await repo.loadProfiles();
    activeId = await repo.loadActiveChild();
    _attempts = await repo.loadAttempts();
    custom = await repo.loadCustomQuestions();
    settings = await repo.loadSettings();
    if (activeId != null && !profiles.any((p) => p.id == activeId)) activeId = null;
    ready = true;
    notifyListeners();
  }

  ChildProfile? get active {
    for (final p in profiles) {
      if (p.id == activeId) return p;
    }
    return null;
  }

  ChildProfile? profileById(String id) {
    for (final p in profiles) {
      if (p.id == id) return p;
    }
    return null;
  }

  List<Attempt> attemptsOf(String childId) => [for (final a in _attempts) if (a.childId == childId) a];

  ChildProgress progressOf(String childId, {DateTime? today}) {
    final child = profileById(childId);
    return computeProgress(
      attemptsOf(childId),
      today: today ?? DateTime.now(),
      dailyCount: child?.dailyCount ?? 3,
      badgeThresholds: settings.badgeThresholds,
    );
  }

  List<PlannedActivity> todayPlan(String childId, {DateTime? today}) {
    final child = profileById(childId);
    if (child == null) return const [];
    return planToday(
      child: child,
      attempts: attemptsOf(childId),
      today: today ?? DateTime.now(),
      hiddenLands: settings.draftLands,
      landAges: settings.landAges,
    );
  }

  /// Published lands only (what a child sees).
  List<Land> get publishedLands => [for (final l in kLands) if (!settings.draftLands.contains(l.id)) l];

  String newId() => '${DateTime.now().microsecondsSinceEpoch}${Random().nextInt(9999)}';

  Future<ChildProfile> addProfile(ChildProfile profile) async {
    profiles = [...profiles, profile];
    activeId ??= profile.id;
    await repo.saveProfiles(profiles);
    await repo.saveActiveChild(activeId);
    notifyListeners();
    return profile;
  }

  Future<void> updateProfile(ChildProfile profile) async {
    profiles = [for (final p in profiles) p.id == profile.id ? profile : p];
    await repo.saveProfiles(profiles);
    notifyListeners();
  }

  Future<void> deleteProfile(String id) async {
    profiles = [for (final p in profiles) if (p.id != id) p];
    _attempts = [for (final a in _attempts) if (a.childId != id) a];
    if (activeId == id) activeId = profiles.isEmpty ? null : profiles.first.id;
    await repo.saveProfiles(profiles);
    await repo.saveAttempts(_attempts);
    await repo.saveActiveChild(activeId);
    notifyListeners();
  }

  Future<void> setActive(String? id) async {
    activeId = id;
    await repo.saveActiveChild(id);
    notifyListeners();
  }

  Future<void> recordAttempt(Attempt attempt) async {
    _attempts = [..._attempts, attempt];
    if (_attempts.length > maxAttempts) _attempts = _attempts.sublist(_attempts.length - maxAttempts);
    await repo.saveAttempts(_attempts);
    notifyListeners();
  }

  Future<void> saveCustom(List<CustomQuestion> questions) async {
    custom = questions;
    await repo.saveCustomQuestions(questions);
    notifyListeners();
  }

  Future<void> saveSettings(JourneySettings s) async {
    settings = s;
    await repo.saveSettings(s);
    notifyListeners();
  }

  Future<void> resetAll() async {
    await repo.resetAll();
    profiles = [];
    activeId = null;
    _attempts = [];
    custom = [];
    settings = const JourneySettings();
    notifyListeners();
  }
}
