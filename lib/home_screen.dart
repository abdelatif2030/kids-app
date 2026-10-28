import 'package:flutter/material.dart';

import 'ui.dart';

/// Shown after the parent picks an age. Three sections for the child.
class HomeScreen extends StatelessWidget {
  final int age;
  final void Function(String section) onSectionSelected;

  const HomeScreen({
    super.key,
    required this.age,
    required this.onSectionSelected,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        title: Text('أهلاً، عمره $age سنين', style: const TextStyle(fontSize: 26)),
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              _SectionButton(
                label: 'تعلّم',
                icon: Icons.school_rounded,
                color: kBright[0],
                onTap: () => onSectionSelected('learn'),
              ),
              const SizedBox(height: 20),
              _SectionButton(
                label: 'مرح',
                icon: Icons.music_note_rounded,
                color: kBright[1],
                onTap: () => onSectionSelected('fun'),
              ),
              const SizedBox(height: 20),
              _SectionButton(
                label: 'ألعاب',
                icon: Icons.extension_rounded,
                color: kBright[2],
                onTap: () => onSectionSelected('games'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _SectionButton extends StatelessWidget {
  final String label;
  final IconData icon;
  final Color color;
  final VoidCallback onTap;

  const _SectionButton({
    required this.label,
    required this.icon,
    required this.color,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 280,
      height: 120,
      child: FilledButton.icon(
        style: FilledButton.styleFrom(
          backgroundColor: color,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(28),
          ),
        ),
        onPressed: onTap,
        icon: Icon(icon, size: 40),
        label: Text(
          label,
          style: const TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
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