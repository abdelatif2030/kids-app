import '../adventures/adventure_service.dart';
import '../companion/companion_logic.dart';
import '../companion/companion_store.dart';
import '../companion/companion_service.dart';
import '../companion/companion_ui.dart';
import '../notifications/notification_events.dart';
import '../design/worlds.dart';
import '../design/tokens.dart';

import 'dart:convert';

import 'package:flutter/material.dart';
import '../media/rehlaty_audio_engine.dart';
import 'adventure_logic.dart' show GameCue;
import 'package:shared_preferences/shared_preferences.dart';

import '../design/layout.dart';
import '../journey/resume.dart';
import '../journey/stickers.dart';
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

  /// Games this child finished on [day] (yyyy-mm-dd), counting repeats on that day.
  static Future<Set<String>> doneOn(String childId, String day) async => {
    for (final e
        in ((await _all())[childId] ?? const <String, dynamic>{}).entries)
      if (e.value is Map && (e.value as Map)['d'] == day) e.key,
  };

  /// The last day and the number of finishes of one game, or null when it was never finished.
  static Future<({String day, int times})?> detail(String childId, String gameId) async {
    final m = (await _all())[childId]?[gameId];
    if (m is! Map) return null;
    return (day: '${m['d'] ?? ''}', times: (m['n'] as num?)?.toInt() ?? 1);
  }

  /// Games this child finished from [from] to [to] (inclusive, yyyy-mm-dd): a replay inside the range counts again.
  static Future<Set<String>> doneBetween(String childId, String from, String to) async => {
    for (final e in ((await _all())[childId] ?? const <String, dynamic>{}).entries)
      if (e.value is Map && ((e.value as Map)['d'] as String? ?? '').compareTo(from) >= 0 && ((e.value as Map)['d'] as String? ?? '').compareTo(to) <= 0) e.key,
  };

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
    if (first) {
      await NotificationEvents.gameStarEarned(childId, gameId, now: now);
    }
    return first;
  }
}

/// A game page: the pastel background, a title, and a one-line instruction. With [confirmLeave] (set
/// while a game is half played) leaving asks first, because a half-played game is not saved.
class GameScaffold extends StatelessWidget {
  final String title;
  final String? instruction;
  final Widget child;
  final bool confirmLeave;

  /// Which visual world the game lives in (forest for letters and words, ocean for listening, space for numbers).
  final RWorld world;
  const GameScaffold({
    super.key,
    required this.title,
    this.instruction,
    required this.child,
    this.confirmLeave = false,
    this.world = RWorld.journey,
  });

  Future<void> _askLeave(BuildContext context) async {
    final leave = await showDialog<bool>(
      context: context,
      builder: (_) => AlertDialog(
        title: Text(tr2('هل تريد الخروج من اللعبة؟', 'Leave the game?')),
        content: Text(
          tr2(
            'لن يُحفظ مكانك في هذه اللعبة. يمكنك أن تلعبها من البداية في أي وقت.',
            'Your place in this game is not saved. You can play it again from the start any time.',
          ),
        ),
        actions: [
          TextButton(
            key: const ValueKey('leave_game'),
            onPressed: () => Navigator.pop(context, true),
            child: Text(tr2('اخرج', 'Leave')),
          ),
          FilledButton(
            key: const ValueKey('keep_playing'),
            onPressed: () => Navigator.pop(context, false),
            child: Text(tr2('أكمل اللعب', 'Keep playing')),
          ),
        ],
      ),
    );
    if (leave == true && context.mounted) Navigator.of(context).pop();
  }

  @override
  Widget build(BuildContext context) {
    return PopScope(
      canPop: !confirmLeave,
      onPopInvokedWithResult: (didPop, _) {
        if (!didPop) _askLeave(context);
      },
      child: _body(context),
    );
  }

  Widget _body(BuildContext context) {
    return Scaffold(
      backgroundColor:
          kWorldPalettes[world]!.top, // the app bar blends into the sky
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
        actions: [
          if (instruction != null)
            GuideSpeakButton(instruction!),
        ],
      ),
      body: _AutoNarrate(
        instruction: instruction,
        child: PastelBackground(
        world: world,
        child: SafeArea(
          child: LayoutBuilder(
            builder: (context, box) {
              // Tablet or desktop in landscape: the instruction moves to a side card so the board can use the height.
              final sideBySide =
                  instruction != null &&
                  box.maxWidth >= 900 &&
                  box.maxWidth > box.maxHeight * 1.2;
              if (sideBySide) {
                return Row(
                  children: [
                    SizedBox(
                      width: 300,
                      child: Padding(
                        padding: const EdgeInsets.all(20),
                        child: Align(
                          alignment: Alignment.topCenter,
                          child: Container(
                            key: const ValueKey('game_side_instruction'),
                            padding: const EdgeInsets.all(18),
                            decoration: BoxDecoration(
                              color: RC.card,
                              borderRadius: BorderRadius.circular(DS.rLarge),
                              border: Border.all(color: RC.outline, width: 2),
                            ),
                            child: Text(
                              instruction!,
                              style: const TextStyle(
                                fontSize: 20,
                                fontWeight: FontWeight.w700,
                                color: RC.ink,
                                height: 1.5,
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                    Expanded(
                      child: ResponsiveBody(maxWidth: 760, child: child),
                    ),
                  ],
                );
              }
              return Column(
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
                  Expanded(child: ResponsiveBody(maxWidth: 760, child: child)),
                ],
              );
            },
          ),
        ),
        ),
      ),
    );
  }
}

/// Reads a game's instruction by itself ONLY when the parent switched automatic narration on; always silences the
/// characters when the child leaves the screen, so nothing keeps talking in the background of another page.
class _AutoNarrate extends StatefulWidget {
  final String? instruction;
  final Widget child;
  const _AutoNarrate({required this.instruction, required this.child});

  @override
  State<_AutoNarrate> createState() => _AutoNarrateState();
}

class _AutoNarrateState extends State<_AutoNarrate> {
  @override
  void initState() {
    super.initState();
    final text = widget.instruction;
    if (text != null && EnginePrefs.instance.autoNarration) {
      WidgetsBinding.instance.addPostFrameCallback((_) async {
        final who = await currentGuide();
        RehlatyAudioEngine.instance.sayText(who, text, priority: AudioPriority.normal);
      });
    }
  }

  @override
  void dispose() {
    RehlatyAudioEngine.instance.stop();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => widget.child;
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
  Sticker? _sticker;
  CompanionReaction? _said;
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
      await ResumeStore.clear(widget.childId, 'game', widget.gameId);
    } catch (_) {
      earned = false; // storage trouble: no star claimed we could not record
    }
    GameCue.play('win');
    // a finished game may complete the week's adventure: record it quietly (the adventure screen celebrates it)
    CompanionStore.age(widget.childId).then((a) {
      if (a != null) AdventureService.check(widget.childId, a, celebrate: false).catchError((_) => AdventureStatus.empty);
    });
    // The companion celebrates a first finish once (the event is claimed per child); a replay gets the plain cheer.
    CompanionReaction? said;
    if (earned) {
      said = await CompanionService.react(
        widget.childId,
        CompanionMoment.activityDone,
        eventId: 'game:${widget.gameId}',
        speak: EnginePrefs.instance.autoNarration,
      );
    }
    if (said == null && EnginePrefs.instance.autoNarration) {
      RehlatyAudioEngine.instance.say(earned ? 'new_star' : 'well_done');
    }
    Sticker? sticker;
    if (earned) {
      try {
        // The sticker for this new finish: the album unlocks one per real finished thing.
        sticker = newestSticker(await finishedCount(widget.childId));
      } catch (_) {
        sticker = null;
      }
    }
    if (mounted) {
      setState(() {
        _earned = earned;
        _sticker = sticker;
        _said = said;
      });
    }
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
            if (_sticker != null)
              Padding(
                key: const ValueKey('new_sticker'),
                padding: const EdgeInsets.only(top: 10),
                child: Column(
                  children: [
                    Text(_sticker!.emoji, style: const TextStyle(fontSize: 64)),
                    Text(
                      tr2(
                        'ملصق جديد: ${_sticker!.name()}!',
                        'A new sticker: ${_sticker!.name()}!',
                      ),
                      textAlign: TextAlign.center,
                      style: const TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.w800,
                        color: RC.ink,
                      ),
                    ),
                  ],
                ),
              ),
            if (_said != null)
              Padding(
                padding: const EdgeInsets.only(top: 12),
                child: CompanionBubble(_said!, artHeight: 80),
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
