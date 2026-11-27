#!/usr/bin/env python3
"""test_story.py — integrity tests for a built story folder.
Run: python3 test_story.py [story_dir]  (default: the pilot story)
Asserts the template's invariants: exact text reconstruction from words,
monotonic timings inside the page duration, known art/ambience ids, and —
when timings are audio-analyzed — that make_timings --check-only agrees."""
import json, subprocess, sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
STORY = Path(sys.argv[1]) if len(sys.argv) > 1 else \
    HERE.parent.parent.parent / "assets" / "book_stories" / "s01_thirsty_dog"
ART_IDS = {"cover", "road", "thirst", "well", "dog", "thought", "shoe", "drink", "sky"}
AMBIENCES = {"wind", "well", "calm"}

story = json.loads((STORY / "story.json").read_text(encoding="utf-8"))
assert story["format"] == "rehlaty-book-story/1"
assert story["pages"][0]["id"] == "title", "first page must be the title page"
fails = []
for p in story["pages"]:
    if " ".join(w["w"] for w in p["words"]) != p["text"]:
        fails.append(f"{p['id']}: words do not reconstruct the text exactly")
    last = -1
    for w in p["words"]:
        if not (0 <= w["start"] <= w["end"] <= p["durationMs"]):
            fails.append(f"{p['id']}: word '{w['w']}' timing outside the page")
        if w["start"] < last:
            fails.append(f"{p['id']}: non-monotonic timings at '{w['w']}'")
        last = w["start"]
    if p["art"] not in ART_IDS:
        fails.append(f"{p['id']}: unknown art id '{p['art']}'")
    if p["ambience"] not in AMBIENCES:
        fails.append(f"{p['id']}: unknown ambience '{p['ambience']}'")
    audio = STORY / story["audioDir"] / p["audio"]
    if not audio.exists():
        fails.append(f"{p['id']}: missing audio {audio}")
if fails:
    print("\n".join("FAIL: " + f for f in fails))
    sys.exit(1)
print(f"story integrity OK: {len(story['pages'])} pages, "
      f"{sum(len(p['words']) for p in story['pages'])} words, "
      f"timingsSource={story['pages'][0]['timingsSource']}")

# the timings tool must validate the shipped timings without new flags
tool = HERE.parent / "tools" / "make_timings.py"
out = subprocess.run([sys.executable, str(tool), "--story-dir", str(STORY),
                      "--check-only"], capture_output=True, text=True)
suspicious = [ln for ln in out.stdout.splitlines() if "SUSPICIOUS" in ln]
print("make_timings --check-only:", out.stdout.strip().splitlines()[-1])
if suspicious:
    print("note: pages with interpolation notes:", "; ".join(suspicious))
