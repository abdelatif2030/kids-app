import 'package:flutter/material.dart';

import '../../l10n/strings.dart';
import '../favorites.dart';

/// A heart that adds or removes a word or game from «مكتبتي». Shows the real saved state.
class HeartButton extends StatefulWidget {
  final String childId;
  final String kind; // 'word' or 'game'
  final String refId;
  final double size;
  const HeartButton({super.key, required this.childId, required this.kind, required this.refId, this.size = 30});

  @override
  State<HeartButton> createState() => _HeartButtonState();
}

class _HeartButtonState extends State<HeartButton> {
  bool? _on;

  @override
  void initState() {
    super.initState();
    FavoritesStore.of(widget.childId, widget.kind).then((s) {
      if (mounted) setState(() => _on = s.contains(widget.refId));
    });
  }

  Future<void> _toggle() async {
    final now = await FavoritesStore.toggle(widget.childId, widget.kind, widget.refId);
    if (mounted) setState(() => _on = now);
  }

  @override
  Widget build(BuildContext context) {
    final on = _on ?? false;
    return IconButton(
      tooltip: on ? tr2('إزالة من مكتبتي', 'Remove from my library') : tr2('أضف إلى مكتبتي', 'Add to my library'),
      iconSize: widget.size,
      constraints: const BoxConstraints(minWidth: 48, minHeight: 48),
      onPressed: _on == null ? null : _toggle,
      icon: Icon(on ? Icons.favorite_rounded : Icons.favorite_border_rounded, color: Colors.redAccent),
    );
  }
}
