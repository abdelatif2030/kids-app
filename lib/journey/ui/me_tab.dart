import 'package:flutter/material.dart';

import '../models.dart';
import 'profile_screen.dart';

/// «أنا»: the child's own page, the owner's picture «ملفي الشخصي» with live numbers and working buttons (profile_screen.dart).
class MeTab extends StatelessWidget {
  final ChildProfile child;
  final VoidCallback? onBack;
  const MeTab({super.key, required this.child, this.onBack});

  @override
  Widget build(BuildContext context) => ProfileScreen(child: child, onBack: onBack);
}
