# Performance and quality pass (2026-10-29)

All numbers below were measured in this cloud session (Linux container, no phone, no browser profiler). There are **no frame-rate, memory or start-up measurements**:
the tools for them (a device, Flutter DevTools) were not available.

## Baseline (before the pass, this session)
- `flutter test`: 806 passed, 0 failed, ~3 min 14 s. `flutter analyze`: 8 issues (pre-existing).
- Web release build: succeeded, 87–90 s; `main.dart.js` 5.47 MB; `build/web` 45 MB (37 MB of it is the bundled CanvasKit because the repo builds with `--no-web-resources-cdn`, by design, so the page needs no CDN); `assets/` 1.5 MB (audio 1.2 MB, `videos.json` 36 KB).
- Android build: not run (no Android SDK).

## Problems found by reading the code (not by profiling)
| # | Finding | Evidence | Action |
|---|---|---|---|
| P1 | The video list called `loadVideos()` inside `build`, so the JSON whitelist was re-read and re-parsed on every rebuild of that screen. | `lib/main.dart` `FutureBuilder(future: loadVideos())` | **Fixed**: the future is created once per screen (`_videos`). A global cache was tried first and reverted: it broke 3 dashboard tests that reset the asset bundle between tests. |
| P2 | The new home recommendation card would have re-read the progress store on every rebuild of the home (the journey store notifies often). | `recommendation_card.dart` | **Fixed** before release: the card keeps one future per child. |
| P3 | Drawing painters repaint every frame (`shouldRepaint => true`). | `drawing_screen.dart`, `creations.dart` | Left: strokes are capped (400 strokes, 5 000 saved points); no measurement shows a problem. |
| P4 | Voice-message temp file was never deleted. | `voice_io.dart` | **Fixed** (privacy and storage). |
| P5 | `ChildShell` rebuilds every tab body when the journey store notifies. | `child_shell.dart` | Left: not measured, no evidence of a problem. |

## Lifecycle / reliability checks (code review + existing tests)
- Audio: one clip at a time, silenced by a call or when the app is backgrounded (`AudioGate`, `audio_gate_test.dart`). Not tested with a real phone call.
- Calls: controller disposes engine and subscriptions (`CallController._disposed`, controller tests with a fake engine). No leak test.
- Persistence: all stores read through `safe_json`; damaged data reads as empty (tests for gallery, drawing, word records).
- Navigation during async work: new code checks `mounted` / `context.mounted` after awaits (word builder, gallery rename, call start).
- Duplicate taps: games ignore taps while a round is resolving (existing tests); story graph and rename now validated.

## Responsive and language
`test/responsive_matrix_test.dart` covers three widths in Arabic and English for existing screens; the new card, offline banner/guide and parent insights are tested at 320, 768 and 1280 px in both languages (`recommendation_test`, `offline_test`, `insights_test`). Not covered: 360/390/1024 widths, large-text scaling on the new screens, real keyboard navigation of the drawing canvas (pointer only).

## After the pass
`flutter test`: 882 passed, 0 failed (3 min 29 s). `flutter analyze`: 9 issues, none new in behaviour (pre-existing style infos and the `_round` warning plus one more test info). Web build: succeeded in 90 s, `main.dart.js` 5.54 MB (+67 KB from the new features). Android build: not run.

## Needs a real device
Frame times on a low-end phone, memory while drawing and in long sessions, audio interruptions, rotation while drawing, TalkBack/VoiceOver, browser Back/Forward.
