# Debugging playbook

## Debug log template
```
Symptom:
Steps to reproduce:
Environment (device, mode, version):
First bad commit / change:
Hypotheses: 1) ... 2) ... 3) ...
Observations:
Cause (proved by):
Fix:
Regression test:
Not verified:
```

## Common Flutter symptoms
| Symptom | Check first |
|---|---|
| Overflow stripes | Row/Column inside unbounded parent; text scale; missing Expanded |
| Widget not updating | state held in a non-listened object; missing `notifyListeners`; stale `const` |
| Tap does nothing | covered by another widget; `IgnorePointer`; zero-size target; disabled callback |
| List item state jumps | missing keys on reordered items |
| Late/Null errors | init order; field used before assignment; async not awaited |
| Works in debug, fails in release | tree-shaken icons, obfuscation, missing permissions/manifest, minification |
| Only fails on one device | text scale, locale/RTL, OS version, permissions |
| Test passes alone, fails in suite | shared singleton or storage not reset |
| `pumpAndSettle` timeout | endless animation or periodic timer |

## Bisect quickly
```bash
git bisect start
git bisect bad            # current
git bisect good <old-sha>
# run the reproducer; mark good/bad until it names the commit
git bisect reset
```

## When stuck
Explain the problem out loud step by step (rubber duck), list what you assumed, and check each assumption with an observation.
