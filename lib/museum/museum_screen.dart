import 'package:flutter/material.dart';

import '../design/focusable_tap.dart';
import '../journey/models.dart';
import '../journey/ui/kit.dart';
import '../l10n/strings.dart';
import 'museum.dart';

/// «متحف إنجازاتي»: only what this child really did. Empty rooms say "nothing here yet", never "you failed".
class MuseumScreen extends StatefulWidget {
  final ChildProfile child;
  const MuseumScreen({super.key, required this.child});

  @override
  State<MuseumScreen> createState() => _MuseumScreenState();
}

class _MuseumScreenState extends State<MuseumScreen> {
  List<MuseumRoom>? _rooms;

  @override
  void initState() {
    super.initState();
    loadMuseumData(widget.child.id).then((d) {
      if (mounted) setState(() => _rooms = buildMuseum(d));
    }).catchError((_) {
      if (mounted) setState(() => _rooms = buildMuseum(const MuseumData()));
    });
  }

  @override
  Widget build(BuildContext context) {
    final rooms = _rooms;
    return Scaffold(
      appBar: AppBar(title: Text(tr2('متحف إنجازاتي', 'My achievement museum'))),
      body: rooms == null
          ? const Center(child: CircularProgressIndicator())
          : ListView(
              padding: const EdgeInsets.all(16),
              children: [
                for (final r in rooms)
                  Padding(
                    padding: const EdgeInsets.only(bottom: 12),
                    child: RCard(
                      key: ValueKey('room_${r.id}'),
                      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                        Text('${r.title}  (${r.exhibits.length})', style: const TextStyle(fontSize: 19, fontWeight: FontWeight.w900, color: RC.ink)),
                        const SizedBox(height: 6),
                        if (r.exhibits.isEmpty)
                          Text(tr2('لا شيء هنا بعد.', 'Nothing here yet.'), key: ValueKey('empty_${r.id}'), style: const TextStyle(fontSize: 15, color: RC.ink))
                        else
                          Wrap(spacing: 8, runSpacing: 8, children: [
                            for (final e in r.exhibits)
                              Chip(
                                key: ValueKey(e.id),
                                label: Text(e.note == null ? e.title : '${e.title} · ${e.note}', style: const TextStyle(fontSize: 14)),
                              ),
                          ]),
                      ]),
                    ),
                  ),
              ],
            ),
    );
  }
}

class MuseumCard extends StatelessWidget {
  final ChildProfile child;
  const MuseumCard({super.key, required this.child});

  @override
  Widget build(BuildContext context) => FocusableTap(
        onTap: () => Navigator.push(context, MaterialPageRoute<void>(builder: (_) => MuseumScreen(child: child))),
        semanticLabel: tr2('متحف إنجازاتي', 'My achievement museum'),
        child: RCard(
          key: const ValueKey('museum_card'),
          color: const Color(0xFFE8E0FF),
          child: Row(children: [
            const Icon(Icons.account_balance_rounded, size: 40, color: RC.pinkDeep),
            const SizedBox(width: 12),
            Expanded(child: Text(tr2('متحف إنجازاتي', 'My achievement museum'), style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w900, color: RC.ink))),
            const Icon(Icons.chevron_right, color: RC.ink),
          ]),
        ),
      );
}
