import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../journey/ui/kit.dart';
import '../l10n/strings.dart';
import '../library/learning_records.dart';
import '../rest_screen.dart';
import '../safe_json.dart';

/// Stars for finishing one of these games. Only completion earns it, and only the
/// first time per child: playing again is welcome but never adds more stars.
const kCompletionStars = 1;

/// Which games a child has completed (local only, `game_completions`).
class GameRewards {
  static const _key = 'game_completions';

  static Future<Map<String, Map<String, dynamic>>> _all() async {
    final raw = decodeMap(await SharedPreferences.getInstance(), _key);
    return {
      for (final e in raw.entries)
        if (e.value is Map) e.key: (e.value as Map).cast<String, dynamic>(),
    };
  }

  static Future<bool> isDone(String childId, String gameId) async =>
      (await _all())[childId]?.containsKey(gameId) ?? false;

  static Future<Set<String>> doneIds(String childId) async =>
      ((await _all())[childId]?.keys ?? const <String>[]).toSet();

  /// Records that the game was finished. Returns true when this finish earned the star
  /// (the first completion), false when the child had already finished it before.
  static Future<bool> complete(
    String childId,
    String gameId, {
    DateTime? now,
  }) async {
    final all = await _all();
    final mine = all.putIfAbsent(childId, () => {});
    final first = !mine.containsKey(gameId);
    final old = (mine[gameId] as Map?)?.cast<String, dynamic>();
    mine[gameId] = {
      'd': dayOf(now ?? DateTime.now()),
      'n': ((old?['n'] as num?)?.toInt() ?? 0) + 1,
    };
    await (await SharedPreferences.getInstance()).setString(
      _key,
      jsonEncode(all),
    );
    // Playing a game is practice, not proof of understanding.
    await LearningRecords.add(
      childId,
      RecordType.activity,
      'game:$gameId',
      Evidence.practice,
      now: now,
    );
    return first;
  }
}

/// A game page: the pastel background, a title, and a one-line instruction.
class GameScaffold extends StatelessWidget {
  final String title;
  final String? instruction;
  final Widget child;
  const GameScaffold({
    super.key,
    required this.title,
    this.instruction,
    required this.child,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: RC.ink,
        title: Text(
          title,
          style: const TextStyle(
            fontSize: 22,
            fontWeight: FontWeight.w900,
            color: RC.ink,
          ),
        ),
      ),
      body: PastelBackground(
        child: SafeArea(
          child: Column(
            children: [
              if (instruction != null)
                Padding(
                  padding: const EdgeInsets.fromLTRB(16, 4, 16, 8),
                  child: Text(
                    instruction!,
                    textAlign: TextAlign.center,
                    style: const TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.w700,
                      color: RC.ink,
                    ),
                  ),
                ),
              Expanded(child: child),
            ],
          ),
        ),
      ),
    );
  }
}

/// What the child sees when a game is finished. The star appears only when this
/// finish earned it; a repeat shows kind words and no star. Never a failure.
class GameFinishPanel extends StatefulWidget {
  final String childId;
  final String gameId;
  final VoidCallback onAgain;
  const GameFinishPanel({
    super.key,
    required this.childId,
    required this.gameId,
    required this.onAgain,
  });

  @override
  State<GameFinishPanel> createState() => _GameFinishPanelState();
}

class _GameFinishPanelState extends State<GameFinishPanel> {
  bool? _earned;
  bool _saving = false;

  @override
  void initState() {
    super.initState();
    _save();
  }

  Future<void> _save() async {
    if (_saving) return;
    _saving = true;
    bool earned;
    try {
      earned = await GameRewards.complete(widget.childId, widget.gameId);
    } catch (_) {
      earned = false; // storage trouble: no star claimed we could not record
    }
    if (mounted) setState(() => _earned = earned);
  }

  @override
  Widget build(BuildContext context) {
    final earned = _earned;
    return Center(
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(24),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            if (earned == true) ...[
              for (var i = 0; i < kCompletionStars; i++)
                const Icon(Icons.star_rounded, size: 110, color: Colors.amber),
            ] else
              const Icon(
                Icons.celebration_rounded,
                size: 90,
                color: RC.pinkDeep,
              ),
            const SizedBox(height: 12),
            Text(
              loc('أحسنت!'),
              style: const TextStyle(
                fontSize: 34,
                fontWeight: FontWeight.w900,
                color: RC.ink,
              ),
            ),
            if (earned == false)
              Padding(
                padding: const EdgeInsets.only(top: 8),
                child: Text(
                  tr2(
                    'أكملتها من قبل، وحصلتَ على نجمتها. العب لتستمتع!',
                    'You finished this before and already have its star. Play for fun!',
                  ),
                  textAlign: TextAlign.center,
                  style: const TextStyle(fontSize: 17, color: RC.ink),
                ),
              ),
            const SizedBox(height: 20),
            Wrap(
              spacing: 12,
              runSpacing: 12,
              alignment: WrapAlignment.center,
              children: [
                FilledButton.icon(
                  style: FilledButton.styleFrom(
                    minimumSize: const Size(160, 56),
                  ),
                  onPressed: () async {
                    if (await restIfTimeUp(context)) return;
                    widget.onAgain();
                  },
                  icon: const Icon(Icons.replay_rounded),
                  label: Text(
                    loc('العب تاني'),
                    style: const TextStyle(fontSize: 20),
                  ),
                ),
                OutlinedButton.icon(
                  style: OutlinedButton.styleFrom(
                    minimumSize: const Size(160, 56),
                  ),
                  onPressed: () => Navigator.maybePop(context),
                  icon: const Icon(Icons.home_rounded),
                  label: Text(
                    tr2('رجوع', 'Back'),
                    style: const TextStyle(fontSize: 20),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
