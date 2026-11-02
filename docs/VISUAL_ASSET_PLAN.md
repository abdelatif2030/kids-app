# Visual asset plan (vocabulary and games)

Data: `lib/curriculum/visual_assets.dart` (`buildAssetPlan`, tested in `test/visual_assets_test.dart`).
Today **all 107 library words are emoji**. Emoji are not final educational artwork: they look different on every
phone and cannot carry the purple 3D Rehlaty look. Nothing in the plan claims a file that is not in the repository.

## Status today
| Area | Words | Picture today | Needed |
|---|---:|---|---|
| Animals | 21 | emoji | Rehlaty-style illustrations (priority 1) |
| Food and fruit | 15 | emoji | illustrations (2) |
| Colours | 10 planned | none (4 colours are drawn as swatches in the shape game) | 6 more colour cards (3) |
| Shapes | 7 planned | **drawn in code** (`ShapePainter`) | done; 3D shading optional (4) |
| Numbers 1–10 | 10 planned | none (numerals are text) | counting pictures (5) |
| Family | 9 planned | none | drawn in Rehlaty style, no photos (6) |
| Clothes | 8 planned (+ shoes, hat already in the library) | none | illustrations (7) |
| Everyday objects (home) | 16 | emoji | illustrations (8) |
| Positions | 7 planned | 4 scenes **drawn in code** (`PositionScene`) | «أمام» «خلف» «خارج» scenes (9) |
| Transport, nature, body, jobs, actions, feelings | 55 | emoji | illustrations (10–11) |

## What was built without any image tool
* Shapes (circle, square, triangle, rectangle, star, heart, diamond) and the ball/table/box position scenes are real
  vector art drawn in code, so they look the same on every device and need no files.
* The games hub uses the owner's own picture (`assets/games/hub_scene.jpg`); in-category islands are code-drawn.

## How artwork will be added (no new package, no external service)
1. Artwork is made by the owner or an approved designer in the Rehlaty style (Adam & Nour sheet is the reference).
2. Files go under `assets/vocab/<category>/<id>.png` (transparent, 512 px). The folder does not exist yet, and
   `test/visual_assets_test.dart` fails when it appears without the plan being updated.
3. `Vocab` gets an optional `art` path; screens show it when present and the emoji otherwise (so nothing breaks).
4. A word's status changes to approved only when the file exists and a reviewer checked it is age-appropriate.
