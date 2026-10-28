import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'curriculum.dart';
import 'main.dart' show Video, loadVideos;
import 'watch_history.dart';
import 'l10n/strings.dart';

/// Parent-only: a weekly target of finished lessons per subject, and how many
/// the child finished in the last 7 days. Stored on this device only.
class PlanScreen extends StatefulWidget {
  const PlanScreen({super.key});

  @override
  State<PlanScreen> createState() => _PlanScreenState();
}

class _PlanScreenState extends State<PlanScreen> {
  static const _maxTarget = 7;

  bool _loaded = false;
  final Map<String, int> _targets = {};
  final Map<String, int> _done = {};
  final Map<String, int> _available = {};

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final prefs = await SharedPreferences.getInstance();
    final videos = await loadVideos();
    final entries = await WatchHistory.load();

    final subjectOf = {for (final Video v in videos) v.youtubeId: v.subject};
    final week = {
      for (var i = 0; i < 7; i++)
        WatchHistory.dayKey(DateTime.now().subtract(Duration(days: i))),
    };
    final finished = <String, Set<String>>{};
    for (final e in entries) {
      final subject = subjectOf[e.videoId];
      if (e.completed && subject != null && week.contains(e.day)) {
        finished.putIfAbsent(subject, () => {}).add(e.videoId);
      }
    }

    if (!mounted) return;
    setState(() {
      for (final s in kSubjects) {
        _targets[s.id] = prefs.getInt('plan_target_${s.id}') ?? 0;
        _done[s.id] = finished[s.id]?.length ?? 0;
        _available[s.id] = videos.where((v) => v.subject == s.id).length;
      }
      _loaded = true;
    });
  }

  Future<void> _setTarget(String id, int target) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setInt('plan_target_$id', target);
    setState(() => _targets[id] = target);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(loc('الخطة الأسبوعية'))),
      body: !_loaded
          ? const Center(child: CircularProgressIndicator())
          : ListView(
              padding: const EdgeInsets.all(16),
              children: [
                Padding(
                  padding: EdgeInsets.only(bottom: 12),
                  child: Text(
                    loc('الخطة المجانية: اختر كم درساً تريد أن يكمله طفلك في الأسبوع لكل مادة. '
                    'يُحسب الدرس عندما ينتهي الفيديو حتى آخره.'),
                    style: TextStyle(fontSize: 16),
                  ),
                ),
                for (final s in kSubjects)
                  if (s.id != 'drawing') _row(s),
                Padding(
                  padding: EdgeInsets.only(top: 16),
                  child: Text(
                    loc('تُحفظ هذه البيانات على هذا الجهاز فقط.'),
                    textAlign: TextAlign.center,
                  ),
                ),
              ],
            ),
    );
  }

  Widget _row(Subject s) {
    final target = _targets[s.id] ?? 0;
    final done = _done[s.id] ?? 0;
    final available = _available[s.id] ?? 0;
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(12),
        child: Row(
          children: [
            Icon(s.icon, color: s.color, size: 36),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(s.label,
                      style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
                  const SizedBox(height: 6),
                  if (target > 0)
                    LinearProgressIndicator(
                      value: (done / target).clamp(0.0, 1.0),
                      color: s.color,
                      minHeight: 8,
                    ),
                  const SizedBox(height: 4),
                  Text(
                    target > 0
                        ? tr2('أكمل $done من $target هذا الأسبوع', 'Finished $done of $target this week')
                        : tr2('أكمل $done هذا الأسبوع (بدون هدف)', 'Finished $done this week (no goal)'),
                  ),
                  Text(
                    available == 0 ? loc('لا توجد دروس بعد') : tr2('الدروس المتاحة: $available', 'Available lessons: $available'),
                    style: const TextStyle(fontSize: 12),
                  ),
                ],
              ),
            ),
            DropdownButton<int>(
              value: target,
              items: [
                for (var t = 0; t <= _maxTarget; t++)
                  DropdownMenuItem(value: t, child: Text(t == 0 ? loc('بدون') : '$t')),
              ],
              onChanged: (t) {
                if (t != null) _setTarget(s.id, t);
              },
            ),
          ],
        ),
      ),
    );
  }
}
