import '../library/vocab.dart';
import 'planned_vocab.dart';

/// The artwork plan for every word the child meets. Today each of the 107 library words is an emoji, and emoji are
/// not final educational artwork (they look different on every phone). This list says, per word, what is still
/// needed and in what order. It never claims a file that is not in the repository: the only "done" status is
/// [AssetStatus.codeDrawn], for pictures that are drawn by code in lib/games/shape_games.dart.
enum AssetStatus { missing, codeDrawn }

class VisualAsset {
  final String id;
  final String category;
  final int priority; // 1 = wanted first
  final AssetStatus status;
  const VisualAsset(this.id, this.category, this.priority, this.status);
}

/// Priority by the owner's order: animals, food, colours, shapes, numbers, family, clothes, everyday objects, then the rest.
const kAssetPriority = <String, int>{
  'animals': 1,
  'food': 2,
  'colors': 3,
  'shapes': 4,
  'numbers': 5,
  'family': 6,
  'clothes': 7,
  'home': 8,
  'positions': 9,
  'transport': 10,
  'nature': 10,
  'body': 10,
  'jobs': 10,
  'actions': 11,
  'emotions': 11,
  'english': 12,
};

/// Words whose picture is drawn in code today.
const kCodeDrawn = <String>{
  'shape_circle', 'shape_square', 'shape_triangle', 'shape_rectangle', 'shape_star', 'shape_heart', 'shape_diamond',
  'pos_above', 'pos_below', 'pos_inside', 'pos_beside',
};

List<VisualAsset> buildAssetPlan() => [
      for (final v in kVocab) VisualAsset(v.id, v.category, kAssetPriority[v.category] ?? 12, AssetStatus.missing),
      for (final w in kPlannedVocab)
        VisualAsset(w.id, w.category, kAssetPriority[w.category] ?? 12,
            kCodeDrawn.contains(w.id) ? AssetStatus.codeDrawn : AssetStatus.missing),
    ];

/// Counts by category: total, drawn, missing.
Map<String, ({int total, int drawn, int missing})> assetCoverage([List<VisualAsset>? plan]) {
  final out = <String, ({int total, int drawn, int missing})>{};
  for (final a in plan ?? buildAssetPlan()) {
    final c = out[a.category] ?? (total: 0, drawn: 0, missing: 0);
    final drawn = a.status == AssetStatus.codeDrawn;
    out[a.category] = (total: c.total + 1, drawn: c.drawn + (drawn ? 1 : 0), missing: c.missing + (drawn ? 0 : 1));
  }
  return out;
}
