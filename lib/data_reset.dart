import 'family/family_prefs.dart';
import 'family/family_seen.dart';
import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

import 'journey/avatars.dart';
import 'journey/favorites.dart';
import 'journey/feelings.dart';
import 'journey/repository.dart';
import 'journey/resume.dart';
import 'l10n/strings.dart';

/// Deletes what the app learned about the children from this device: profiles,
/// finished activities, skill results, watch history, daily time, the weekly
/// plan and the parent's notes. The parent PIN and the time limits stay.
Future<void> deleteChildData() async {
  await JourneyStore.instance.resetAll();
  ChildPhotoStore.clearCache();
  final prefs = await SharedPreferences.getInstance();
  for (final key in prefs.getKeys().toList()) {
    if (key == 'watch_history' ||
        key == 'skill_events' ||
        key == 'parent_notes' ||
        key == 'home_tasks' ||
        key == 'learning_records' ||
        key == 'story_state' ||
        key == 'literacy_state' ||
        key == 'family_gallery' ||
        key == 'last_age' ||
        key == 'resume_state' ||
        key == 'feeling_log' ||
        key == 'favorites' ||
        key == 'family_prefs' ||
        key == 'family_seen' ||
        key.startsWith('child_photo_') ||
        key.startsWith('used_') ||
        key.startsWith('bonus_') ||
        key.startsWith('plan_target_')) {
      await prefs.remove(key);
    }
  }
}


/// Deletes one child and everything this device stored about them: their
/// profile and progress, skill results, learning records, home tasks, story
/// place and favourites, letter review state, and their gallery. Other
/// children, the PIN and the settings stay. Time used (a per-device total)
/// is not tied to a child and stays.
Future<void> deleteOneChild(String childId) async {
  final prefs = await SharedPreferences.getInstance();

  Future<void> filterList(String key, bool Function(Map<String, dynamic>) keep) async {
    final raw = prefs.getString(key);
    if (raw == null) return;
    final list = [for (final e in jsonDecode(raw) as List<dynamic>) e as Map<String, dynamic>];
    await prefs.setString(key, jsonEncode([for (final e in list) if (keep(e)) e]));
  }

  Future<void> dropKey(String key) async {
    final raw = prefs.getString(key);
    if (raw == null) return;
    final map = jsonDecode(raw) as Map<String, dynamic>..remove(childId);
    await prefs.setString(key, jsonEncode(map));
  }

  await filterList('skill_events', (e) => e['c'] != childId);
  await filterList('learning_records', (e) => e['c'] != childId);
  await filterList('home_tasks', (e) => e['c'] != childId);
  await filterList('family_gallery', (e) => e['c'] != childId);
  await dropKey('story_state');
  await dropKey('literacy_state');
  await ChildPhotoStore.delete(childId);
  await ResumeStore.forget(childId);
  await FeelingStore.forget(childId);
  await FavoritesStore.forget(childId);
  await FamilyPrefs.forget(childId);
  await FamilySeen.forget(childId);
  await JourneyStore.instance.deleteProfile(childId);
}


/// Everything this device holds about one child, as plain data a parent can
/// read and keep (a data export). Nothing is sent anywhere by this function.
Future<Map<String, dynamic>> exportChildData(String childId) async {
  final prefs = await SharedPreferences.getInstance();
  final store = JourneyStore.instance;

  List<dynamic> mine(String key) {
    final raw = prefs.getString(key);
    if (raw == null) return [];
    return [for (final e in jsonDecode(raw) as List<dynamic>) if ((e as Map<String, dynamic>)['c'] == childId) e];
  }

  dynamic byChild(String key) {
    final raw = prefs.getString(key);
    if (raw == null) return null;
    return (jsonDecode(raw) as Map<String, dynamic>)[childId];
  }

  return {
    'exportedAt': DateTime.now().toIso8601String(),
    'note': loc('هذه البيانات محفوظة على هذا الجهاز فقط. لم تُرسل إلى أي مكان.'),
    'profile': store.profileById(childId)?.toJson(),
    'hasPhotoOnDevice': store.profileById(childId)?.hasPhoto ?? false,
    'activities': [for (final a in store.attemptsOf(childId)) a.toJson()],
    'skillEvents': mine('skill_events'),
    'learningRecords': mine('learning_records'),
    'homeTasks': mine('home_tasks'),
    'gallery': mine('family_gallery'),
    'stories': byChild('story_state'),
    'letters': byChild('literacy_state'),
  };
}
