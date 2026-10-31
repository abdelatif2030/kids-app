# Profiling playbook

## Steps
1. `flutter run --profile -d <device>`; open DevTools.
2. Performance tab: record while reproducing the jank; look for frames over 16 ms (60 Hz) or 8 ms (120 Hz). Check UI thread vs raster thread.
3. CPU profiler: find the top self-time functions.
4. Memory: take snapshots before/after a flow; look for growing counts of a class.
5. "Track widget rebuilds" to see what rebuilds too often.

## Symptom -> likely cause -> first fix
| Symptom | Likely cause | First fix |
|---|---|---|
| UI thread slow | work in `build`, huge rebuild | move work out, split widgets, `const` |
| Raster thread slow | `saveLayer`, big blur/shadows, huge images, many clips | simplify effects, `RepaintBoundary`, smaller images |
| Scroll jank | eager list, heavy item build | builder list, cheaper items, `itemExtent` |
| Slow first frame | big init, big assets | defer, lazy-load, precache only the first screen |
| Memory climbs | undisposed controllers/streams, cached images | dispose, cancel, limit caches |
| Battery drain | endless animations/timers off-screen | stop when hidden, honour reduced motion |
| Large APK | unused assets/packages, all ABIs | analyze-size, remove, split ABI |

## Rules for CustomPainter
- Pre-compute geometry outside `paint` (cache paths and random positions per layout).
- Reuse `Paint` objects; avoid allocating in hot loops.
- Separate static and moving layers into different `RepaintBoundary` painters.

## Reporting
Say what was measured, on which device and mode, the before and after numbers, and what was not measured.
