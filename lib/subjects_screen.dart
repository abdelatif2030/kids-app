import 'package:flutter/material.dart';

import 'curriculum.dart';
import 'drawing_screen.dart';
import 'main.dart' show Video, VideoListScreen, loadVideos;

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
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        title: const Text('دروسي', style: TextStyle(fontSize: 26)),
      ),
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
                    _SubjectCard(
                      subject: s,
                      count: counts[s.id] ?? 0,
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

class _SubjectCard extends StatelessWidget {
  final Subject subject;
  final int count;
  final VoidCallback onTap;
  const _SubjectCard({required this.subject, required this.count, required this.onTap});

  @override
  Widget build(BuildContext context) {
    final hasLessons = subject.id == 'drawing' || count > 0;
    return Opacity(
      opacity: hasLessons ? 1 : 0.55,
      child: SizedBox(
        width: 150,
        height: 164,
        child: FilledButton(
          style: FilledButton.styleFrom(
            backgroundColor: subject.color,
            padding: const EdgeInsets.all(8),
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(28)),
          ),
          onPressed: onTap,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(subject.icon, size: 48),
              const SizedBox(height: 4),
              Text(subject.label,
                  style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
              if (count > 0) Text('$count دروس', style: const TextStyle(fontSize: 14)),
            ],
          ),
        ),
      ),
    );
  }
}
