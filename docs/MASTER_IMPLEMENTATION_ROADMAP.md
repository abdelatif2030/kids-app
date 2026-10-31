# Rehlaty — master implementation roadmap

Status words: NOT STARTED / IMPLEMENTING / IMPLEMENTED / TESTING / NEEDS FIX / VERIFIED / BLOCKED BY EXTERNAL DEPENDENCY.
VERIFIED would need functionality, integration, tests, Arabic and English, responsive layouts, child isolation, safety and docs
**and** a check on a real device. No item below is VERIFIED, because nothing has been run on a real device.

| # | Item | Status | Where |
|---|---|---|---|
| 1 | Six polished games (ladders, puzzle, maze, treasure, dots, habitats) | IMPLEMENTED (browser screenshots, no device) | `lib/games/adventure_*.dart`, `docs/GAME_IMPLEMENTATION.md` |
| 2 | Visual identity | IMPLEMENTED (code-drawn art; items 2-6 of the world audit open) | `lib/design/`, `docs/WORLD_EXPERIENCE_AUDIT.md` |
| 3 | Audio engine and parent controls | IMPLEMENTED (demo phone voice only) | `lib/media/`, `docs/AUDIO_IMPLEMENTATION.md` |
| F1 | Evolving Magical World | IMPLEMENTED (islands with buildings, 26 collectibles, personalisation; still procedural vector art) | `lib/world/`, `docs/WORLD_FEATURE.md` |
| F2 | Virtual Companion | IMPLEMENTED | `lib/companion/` |
| F3 | Weekly Educational Adventures | IMPLEMENTED | `lib/adventures/` |
| F4 | Adam and Nour as guides | IMPLEMENTED (guide button in every game; no guide in stories/lessons) | `lib/companion/companion_ui.dart` |
| F5 | Everyday Life Learning | IMPLEMENTED (16 tasks, supervision flags) | `lib/everyday/` |
| F6 | Family Time | IMPLEMENTED (local planner; no new communication path) | `lib/family_time/` |
| F7 | Achievement Museum | IMPLEMENTED (six rooms from real records) | `lib/museum/` |
| 4 | Stories: branching | IMPLEMENTED (2 original stories, validator proves every page is reachable and can reach an ending) | `lib/stories/branching*.dart` |
| 5 | Parent-controlled video library | IMPLEMENTED (infrastructure); CONTENT UNVERIFIED: no lesson is approved or verified | `lib/lessons/`, `lib/video_controls.dart`, `docs/VIDEO_LIBRARY.md` |
| 6 | Parent/teacher/family completion | PARTLY: see `docs/FEATURE_ACCEPTANCE_REPORT.md` | |
| 7 | Release preparation | BLOCKED: iOS bundle id, signing, store assets | `docs/RELEASE_READINESS.md` |

Order of work: games, audio, F1 to F7 in the directive's order, then documentation and checks. Next: verified video content,
unifying the RC and DS palettes, real-device testing.
