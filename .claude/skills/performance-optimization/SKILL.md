---
name: performance-optimization
description: Use when something is slow, janky, heavy on memory or battery, slow to start, or large to download, or when asked to optimize. Measure-first workflow with Flutter and Dart specifics (rebuilds, lists, images, animations, isolates, app size).
---

# Performance optimization

## Workflow
1. State the goal as a number (frame time under 16 ms, start under 2 s, size under X MB) and the device it applies to.
2. Measure before changing: Flutter DevTools (Performance, CPU, Memory), `flutter run --profile` on a real mid-range device. Never judge in debug mode.
3. Find the single biggest cost; change one thing; measure again.
4. Keep the optimization only if the number improved; otherwise revert it.
5. Add a note or test so it does not regress (e.g. a widget test that a list uses `builder`).

## Flutter and Dart specifics
- Rebuilds: use `const` widgets, split big `build` methods into classes, rebuild only the subtree that listens (`ValueListenableBuilder`, `ListenableBuilder`, `select`-style narrow listeners).
- Lists: `ListView.builder`/`SliverList` with `itemExtent` or `prototypeItem` for long lists; never build thousands of children eagerly.
- Painting: wrap expensive, rarely changing layers in `RepaintBoundary`; give `CustomPainter` a precise `shouldRepaint`; avoid `saveLayer` (opacity, clip with antialiasing on big areas, shadows on many items).
- Animations: drive them with one controller per effect, off-screen animations stopped, honour reduced motion; avoid animating layout (width/height) when a transform works.
- Images: ship sizes close to display size (`cacheWidth`/`cacheHeight`), prefer WebP/compressed PNG, no giant backgrounds, use `precacheImage` for the first screen only.
- Heavy work (parsing, big loops, image processing): move off the UI thread with `compute`/`Isolate.run`.
- Startup: defer non-essential init after the first frame; lazy-load big assets and data; avoid reading all storage keys on launch.
- Storage/network: batch writes, debounce frequent saves, cache reads, bound history length.
- App size: `flutter build apk --analyze-size`, remove unused assets/packages, tree-shake icons, split per ABI.
- Memory: dispose controllers, timers and listeners in `dispose`; cancel streams; avoid keeping big lists in singletons.

## When to read more
- Profiling steps and a symptom-to-cause table: `references/profiling.md`.
