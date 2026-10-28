import 'dart:typed_data';

import 'package:flutter/material.dart';

import 'curriculum.dart';
import 'ui.dart';

/// A teacher's round photo, or a friendly placeholder.
class TeacherAvatar extends StatelessWidget {
  final Uint8List? photo;
  final double radius;
  const TeacherAvatar({super.key, required this.photo, this.radius = 28});

  @override
  Widget build(BuildContext context) {
    return CircleAvatar(
      radius: radius,
      backgroundColor: kBright[1].withAlpha(60),
      backgroundImage: photo == null ? null : MemoryImage(photo!),
      child: photo == null
          ? Icon(Icons.person_rounded, size: radius * 1.1, color: kBright[1])
          : null,
    );
  }
}

/// A small colored chip for a subject id.
class SubjectChip extends StatelessWidget {
  final String id;
  const SubjectChip({super.key, required this.id});

  @override
  Widget build(BuildContext context) {
    final s = subjectById(id);
    final color = s?.color ?? Colors.grey;
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
      decoration: BoxDecoration(
        color: color.withAlpha(30),
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: color.withAlpha(120)),
      ),
      child: Text(s?.label ?? id, style: TextStyle(color: color, fontWeight: FontWeight.bold)),
    );
  }
}

/// The warm banner at the top of teacher screens.
class TeacherHeader extends StatelessWidget {
  final Widget avatar;
  final String title;
  final String? subtitle;
  const TeacherHeader({super.key, required this.avatar, required this.title, this.subtitle});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        gradient: const LinearGradient(
          colors: [Color(0xFFFFA726), Color(0xFFEF6C00)],
          begin: Alignment.topRight,
          end: Alignment.bottomLeft,
        ),
        borderRadius: BorderRadius.circular(28),
      ),
      child: Row(
        children: [
          Container(
            padding: const EdgeInsets.all(4),
            decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle),
            child: avatar,
          ),
          const SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title,
                    style: const TextStyle(
                        color: Colors.white, fontSize: 24, fontWeight: FontWeight.bold)),
                if (subtitle != null)
                  Text(subtitle!, style: const TextStyle(color: Colors.white, fontSize: 15)),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
