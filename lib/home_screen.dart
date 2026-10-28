import 'package:flutter/material.dart';

import 'main.dart' show openSection;
import 'session_manager.dart';
import 'ui.dart';

/// Shown after the parent picks an age: lessons, videos, games and drawing.
/// Leaving it (back to the age screen, or the rest screen replacing it) ends
/// the session's time counting.
class HomeScreen extends StatefulWidget {
  final int age;
  const HomeScreen({super.key, required this.age});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  static const _sections = [
    ('دروسي', Icons.school_rounded, 'subjects'),
    ('فيديوهات', Icons.play_circle_rounded, 'videos'),
    ('ألعاب', Icons.extension_rounded, 'games'),
    ('رسم', Icons.brush_rounded, 'draw'),
  ];

  @override
  void dispose() {
    // Deferred so listeners are not notified in the middle of tearing down.
    WidgetsBinding.instance.addPostFrameCallback((_) => SessionManager.instance.stop());
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        title: Text('أهلاً، عمره ${widget.age} سنين', style: const TextStyle(fontSize: 26)),
      ),
      body: Center(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              const Mascot(size: 120),
              const SizedBox(height: 16),
              Wrap(
                spacing: 20,
                runSpacing: 20,
                alignment: WrapAlignment.center,
                children: [
                  for (var i = 0; i < _sections.length; i++)
                    _SectionTile(
                      label: _sections[i].$1,
                      icon: _sections[i].$2,
                      color: kBright[i % kBright.length],
                      onTap: () => openSection(context, widget.age, _sections[i].$3),
                    ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _SectionTile extends StatelessWidget {
  final String label;
  final IconData icon;
  final Color color;
  final VoidCallback onTap;

  const _SectionTile({
    required this.label,
    required this.icon,
    required this.color,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 150,
      height: 150,
      child: FilledButton(
        style: FilledButton.styleFrom(
          backgroundColor: color,
          padding: const EdgeInsets.all(8),
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(28)),
        ),
        onPressed: onTap,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(icon, size: 56),
            const SizedBox(height: 8),
            Text(label, style: const TextStyle(fontSize: 26, fontWeight: FontWeight.bold)),
          ],
        ),
      ),
    );
  }
}

/// Placeholder until the games are built.
class ComingSoonScreen extends StatelessWidget {
  final String title;
  const ComingSoonScreen({super.key, required this.title});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        title: Text(title, style: const TextStyle(fontSize: 26)),
      ),
      body: const Center(
        child: Text('قريباً', style: TextStyle(fontSize: 32)),
      ),
    );
  }
}