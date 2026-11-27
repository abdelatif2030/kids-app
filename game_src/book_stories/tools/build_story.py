#!/usr/bin/env python3
"""
build_story.py — build a story.json for the «كتاب الحكايات» (Story Book) player
from a voice-request CSV (the owner's text source of truth).

The CSV columns are: file_name, voice, text, delivery_style
  - the row whose file_name ends with "_title.mp3" is the title page
  - rows sXX_pNN.mp3 are story pages in order

The text is copied EXACTLY as written in the CSV (tashkeel included) — this
script never edits a letter. Words are the text split on single spaces, so
" ".join(words) == text always holds (asserted).

Timings written by this script are ESTIMATES (char-length based) so the demo
can be motion-tested silently before/without audio analysis. Run
make_timings.py afterwards to replace them with timings computed from the
real narration clips.

Usage:
  python3 build_story.py --csv docs/BOOK_STORY_PILOT_VOICE_REQUEST.csv \
      --story-dir assets/book_stories/s01_thirsty_dog
"""
import argparse, csv, json, re, sys
from pathlib import Path

# Per-page illustration + ambience for the pilot story. For a NEW story, copy
# story.json and edit these two fields per page (see README.md). The player
# falls back to a calm generic scene for unknown art ids.
PILOT_ART = {
    "title": ("cover", "calm"),
    "p01": ("road", "wind"),
    "p02": ("thirst", "wind"),
    "p03": ("well", "well"),
    "p04": ("dog", "calm"),
    "p05": ("thought", "calm"),
    "p06": ("shoe", "well"),
    "p07": ("drink", "well"),
    "p08": ("sky", "calm"),
}

SENT_END = ".\u061f!\u2026"   # . ؟ ! …
COMMA = "\u060c"              # ،


def estimate_timings(words):
    """Char-length based estimated word timings (ms). TEMPORARY — replaced by
    make_timings.py output once the real clips are analysed."""
    t = 350  # lead-in before the first word
    out = []
    for w in words:
        letters = len([c for c in w if c.isalpha() or "\u064b" <= c <= "\u0652"])
        dur = max(240, min(950, 170 + 62 * max(letters, 2)))
        out.append({"w": w, "start": t, "end": t + dur})
        t += dur
        if w.endswith(COMMA):
            t += 260
        if w[-1:] in SENT_END:
            t += 620
    return out, t + 700  # page duration incl. tail


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--csv", required=True)
    ap.add_argument("--story-dir", required=True, help="folder that holds story.json and the <lang>/ audio")
    ap.add_argument("--lang", default="ar")
    args = ap.parse_args()

    rows = list(csv.DictReader(open(args.csv, encoding="utf-8-sig")))
    title_row = next(r for r in rows if r["file_name"].endswith("_title.mp3"))
    page_rows = sorted(
        (r for r in rows if re.search(r"_p\d+\.mp3$", r["file_name"])),
        key=lambda r: r["file_name"],
    )
    if not page_rows:
        sys.exit("no page rows found in CSV")

    story_id = title_row["file_name"].split("_")[0]  # e.g. s01

    def page_obj(key, row):
        text = row["text"]
        words = text.split(" ")
        assert " ".join(words) == text, f"text/words mismatch on {key}"
        timings, dur = estimate_timings(words)
        art, amb = PILOT_ART.get(key, ("cover", "calm"))
        return {
            "id": key,
            "audio": row["file_name"],
            "art": art,
            "ambience": amb,
            "text": text,
            "durationMs": dur,
            "timingsSource": "estimated",
            "words": timings,
        }

    title_key = "title"
    pages = [page_obj(title_key, title_row)]
    for i, r in enumerate(page_rows, 1):
        pages.append(page_obj(f"p{i:02d}", r))

    story = {
        "format": "rehlaty-book-story/1",
        "id": f"{story_id}_thirsty_dog" if story_id == "s01" else story_id,
        "title": title_row["text"],
        "lang": args.lang,
        "dir": "rtl",
        "narrator": title_row["voice"].split(" ")[0],
        "audioDir": args.lang,
        "sourceCsv": Path(args.csv).name,
        "pages": pages,
    }
    out = Path(args.story_dir) / "story.json"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(story, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"wrote {out}: title + {len(page_rows)} pages, "
          f"{sum(len(p['words']) for p in pages)} words, timings=estimated")


if __name__ == "__main__":
    main()
