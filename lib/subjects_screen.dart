import 'package:flutter/material.dart';

import 'curriculum.dart';
import 'drawing_screen.dart';
import 'main.dart' show Video, VideoListScreen, loadVideos;
import 'ui.dart';
import 'l10n/strings.dart';

/// "دروسي": one big card per subject, with how many lessons exist for this age.
class SubjectsScreen extends StatelessWidget {
  final int age;
  const SubjectsScreen({super.key, required this.age});

  void _open(BuildContext context, Subject s) {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (_) => s.id == 'drawing'
            ? const DrawingScreen()
            : VideoListScreen(age: age, subject: s.id),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return SceneScaffold(
      title: loc('دروسي'),
      body: FutureBuilder<List<Video>>(
        future: loadVideos(),
        builder: (context, snapshot) {
          if (snapshot.connectionState != ConnectionState.done) {
            return const Center(child: CircularProgressIndicator());
          }
          final counts = <String, int>{};
          for (final v in snapshot.data ?? const <Video>[]) {
            if (age >= v.minAge && age <= v.maxAge) {
              counts[v.subject] = (counts[v.subject] ?? 0) + 1;
            }
          }
          return Center(
            child: SingleChildScrollView(
              padding: const EdgeInsets.all(20),
              child: Wrap(
                spacing: 16,
                runSpacing: 16,
                alignment: WrapAlignment.center,
                children: [
                  for (final s in kSubjects)
                    BigTile(
                      label: s.label,
                      icon: s.icon,
                      color: s.color,
                      badge: (counts[s.id] ?? 0) > 0 ? tr2('${counts[s.id]} دروس', '${counts[s.id]} lessons') : null,
                      // Subjects with no lessons for this age stay visible but faded.
                      dim: s.id != 'drawing' && (counts[s.id] ?? 0) == 0,
                      onTap: () => _open(context, s),
                    ),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}
