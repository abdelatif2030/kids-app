# Creative Studio audit (2026-10-29)

## What already existed (reused, not rebuilt)
- `lib/studio/`: `StudioScreen` (hub, reachable from the child shell), `FamilyGallery` (private per-child gallery in
  shared_preferences key `family_gallery`, 25 items per child, 150 KB per item, parent-only deletion behind the PIN),
  `CreationAutosaver` (debounced save + save on dispose, records `RecordType.creative` as *practice* only),
  scene builder, character creator, picture story (3 pictures: beginning/middle/end), ordering lesson (`LessonRunnerScreen`).
- `lib/drawing_screen.dart`: free drawing with 8 colours, 3 sizes, eraser, undo, clear.
- Persistence / privacy: `safe_json` (damaged storage never crashes), `deleteOneChild` / `deleteChildData` remove a child's gallery.
- Progress: `ProgressStore` (skill events), `LearningRecords` (exposure < practice < demonstrated).
- `AudioButton` for the device voice / approved audio; `FocusableTap`, worlds, `PastelBackground`.

## Gaps found
| Gap | Evidence |
|---|---|
| Strokes stored in canvas pixels: rotating or resizing the window distorted a drawing | old `_Stroke` kept pixel points, `_canvas` only used when saving |
| No redo, undo history unbounded, clear had no confirmation | `drawing_screen.dart` |
| No colouring templates | none existed |
| No word-building activity in the studio (the letters module has a lesson-bound one, `word_tiles.dart`, with no undo/reset) | `lib/literacy/word_tiles.dart` |
| Creations could not be renamed | `Creation` had no name |
| Thumbnails would throw on damaged drawing data | `strokesOf` cast without guard |

## Decisions
- One pure `DrawingModel` (`lib/studio/drawing_model.dart`): strokes in a 0..1000 square space, bounded undo (50 steps, shared immutable strokes),
  max 400 strokes, clear is a normal undoable step, damaged data opens as an empty drawing. Saved format stays backward compatible (`s`), `t` (template id) is optional.
- Templates are six outlines drawn in code (circle, square, triangle, star, house, flower): no new assets.
- Word builder (`lib/studio/word_builder.dart`) uses only the approved `kVocab` words (2–6 letters, age-filtered, Arabic or English names).
  Tiles keep combining marks with their letter; the placed word is shown as one string so Arabic joins and runs right-to-left.
  A wrong full arrangement only asks the child to undo; nothing is lost. A finished word records one `word_building` skill event
  (first try or not) and a *practice* learning record — never mastery.
- Rename: stored as `name` in the creation data, trimmed, one line, 24 characters, only for the owning child; local only.
- Deleting stays parent-only (existing safety design: PIN). The child gallery has no delete button on purpose.
- Not added: stylus pressure (not implemented, not claimed), uploads, sharing, text generation, new packages.

## Not done / limits
- No browser or device test of touch/mouse drawing; the model and widget tests are headless.
- Picture-story creator keeps its existing 3-card structure (beginning/middle/end); longer sequences are a later phase.
- Drawings are stored as strokes, not images, so exports (PNG) are not offered.
