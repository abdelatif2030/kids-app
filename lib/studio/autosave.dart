import 'dart:async';

import '../journey/models.dart';
import '../library/learning_records.dart';
import 'creations.dart';

/// Saves a creation shortly after the last change, and once more when the
/// screen closes, so an interrupted session (a phone call, the app closing)
/// loses at most the last second of work.
class CreationAutosaver {
  final ChildProfile child;
  final CreationKind kind;
  late String id;
  Timer? _timer;
  bool _dirty = false;
  bool _hasSaved;
  Map<String, dynamic> Function()? _snapshot;

  /// True once the latest change has been written.
  bool saved = false;

  /// Set when the creation was too large to keep.
  bool tooLarge = false;
  void Function()? onChanged;

  CreationAutosaver(this.child, this.kind, {Creation? initial})
      : _hasSaved = initial != null {
    id = initial?.id ?? FamilyGallery.newId();
  }

  void changed(Map<String, dynamic> Function() snapshot) {
    _snapshot = snapshot;
    _dirty = true;
    saved = false;
    onChanged?.call();
    _timer?.cancel();
    _timer = Timer(const Duration(seconds: 1), flush);
  }

  Future<void> flush() async {
    _timer?.cancel();
    final snap = _snapshot;
    if (!_dirty || snap == null) return;
    _dirty = false;
    final ok = await FamilyGallery.save(Creation(id, child.id, kind, FamilyGallery.today(), snap()));
    tooLarge = !ok;
    saved = ok;
    if (ok && !_hasSaved) {
      _hasSaved = true;
      // Making something is practice; it says nothing about mastery.
      await LearningRecords.add(child.id, RecordType.creative, kind.name, Evidence.practice);
    }
    onChanged?.call();
  }

  void dispose() {
    onChanged = null;
    // Fire and forget: the data is already in memory.
    flush();
  }
}
