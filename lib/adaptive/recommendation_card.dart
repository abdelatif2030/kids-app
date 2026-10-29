import 'package:flutter/material.dart';

import '../design/motion.dart';
import '../journey/models.dart';
import '../journey/ui/kit.dart';
import '../l10n/strings.dart';
import '../ui.dart' show Mascot;
import 'destinations.dart';
import 'recommender.dart';
import 'skill_state.dart';

/// «اقتراح لك»: up to one suggestion on the child's home, from the child's own recorded rounds.
/// Shows nothing while loading, and nothing if there is no suitable destination. No numbers, no scores, no streaks.
class RecommendationCard extends StatefulWidget {
  final ChildProfile child;
  final DateTime? now;

  /// Tests inject the states and destinations; the app loads them from the local progress store.
  final Future<Map<String, SkillState>>? statesFuture;
  final List<Destination>? destinations;
  const RecommendationCard({
    super.key,
    required this.child,
    this.now,
    this.statesFuture,
    this.destinations,
  });

  @override
  State<RecommendationCard> createState() => _RecommendationCardState();
}

class _RecommendationCardState extends State<RecommendationCard> {
  // Read once per child: the home screen rebuilds often and must not re-read the progress store each time.
  late Future<Map<String, SkillState>> _states = _load();
  late final List<Destination> _destinations =
      widget.destinations ?? buildDestinations();

  Future<Map<String, SkillState>> _load() =>
      widget.statesFuture ?? loadSkillStates(widget.child.id, now: widget.now);

  @override
  void didUpdateWidget(RecommendationCard old) {
    super.didUpdateWidget(old);
    if (old.child.id != widget.child.id) {
      _states = _load();
    }
  }

  @override
  Widget build(BuildContext context) {
    final at = widget.now ?? DateTime.now();
    return FutureBuilder<Map<String, SkillState>>(
      future: _states,
      builder: (context, snap) {
        if (!snap.hasData) return const SizedBox.shrink();
        final recs = recommend(
          age: widget.child.age,
          states: snap.data!,
          destinations: _destinations,
          now: at,
          max: 1,
        );
        if (recs.isEmpty) return const SizedBox.shrink();
        return RecommendationView(rec: recs.first, child: widget.child);
      },
    );
  }
}

class RecommendationView extends StatelessWidget {
  final Recommendation rec;
  final ChildProfile child;
  const RecommendationView({super.key, required this.rec, required this.child});

  @override
  Widget build(BuildContext context) {
    final title = rec.destination.title();
    return Appear(
      child: Padding(
        padding: const EdgeInsets.only(top: 12),
        child: RCard(
          key: const Key('recommendation-card'),
          color: RC.mint.withAlpha(190),
          semanticLabel: '${rec.reason}. ${tr2('افتح', 'Open')} $title',
          onTap: () => Navigator.push(
            context,
            MaterialPageRoute(builder: (_) => rec.destination.build(child)),
          ),
          child: Row(
            children: [
              // The companion: the app's own mascot, still (no animation), so reduced motion needs nothing special.
              const ExcludeSemantics(child: Mascot(size: 64)),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      rec.reason,
                      style: const TextStyle(
                        fontSize: 17,
                        fontWeight: FontWeight.w800,
                        color: RC.ink,
                      ),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      title,
                      style: const TextStyle(fontSize: 15, color: RC.ink),
                    ),
                  ],
                ),
              ),
              const SizedBox(width: 8),
              const Icon(
                Icons.play_circle_fill_rounded,
                size: 44,
                color: RC.ink,
              ),
            ],
          ),
        ),
      ),
    );
  }
}
