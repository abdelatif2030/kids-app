#!/usr/bin/env python3
"""
make_timings.py — compute REAL word timings for a «كتاب الحكايات» story from
the narrator's mp3 clips, and validate them.

How it works, per page:
  1. ffprobe gives the exact clip duration.
  2. ffmpeg silencedetect finds the speech segments and the natural pauses
     (the narrator pauses between sentences and at commas).
  3. Sentence boundaries in the text are matched, in order, to the detected
     pauses nearest to them — these become anchors. Between anchors, words
     are distributed with a speech-rate mapping that consumes letters ONLY
     during detected speech, so no word is ever scheduled inside a silence.
  4. Validation (every page, reported — never hidden): timings vs clip
     duration, first-word onset, speech coverage, per-word duration sanity,
     monotonic order, words overlapping a long silence, and how many
     sentence boundaries were anchored to a real pause.

Output: story.json is updated in place (timingsSource -> "audio-analyzed",
durationMs -> real clip duration) and a validation report is written next to
it (timings_validation.json) and printed.

Usage:
  python3 make_timings.py --story-dir assets/book_stories/s01_thirsty_dog
  python3 make_timings.py --story-dir ... --check-only   # validate, don't write
"""
import argparse, json, re, subprocess, sys
from pathlib import Path

SENT_END = set(".\u061f!\u2026")          # . ؟ ! …
CLAUSE_END = SENT_END | {"\u060c", ":"}   # plus ، and : — the narrator pauses there too
PAUSE_MIN = 0.35                          # s — a gap this long = a real pause
SILENCE_NOISE = "-40dB"
SILENCE_DUR = "0.15"


def ffprobe_duration(path):
    out = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration",
         "-of", "csv=p=0", str(path)],
        capture_output=True, text=True, check=True).stdout.strip()
    return float(out)


def speech_segments(path, duration):
    """Return ([(start,end) speech], [(start,end) silence]) via silencedetect."""
    proc = subprocess.run(
        ["ffmpeg", "-i", str(path), "-af",
         f"silencedetect=noise={SILENCE_NOISE}:d={SILENCE_DUR}", "-f", "null", "-"],
        capture_output=True, text=True)
    silences, cur = [], None
    for line in proc.stderr.splitlines():
        m = re.search(r"silence_start: ([\d.]+)", line)
        if m:
            cur = float(m.group(1))
        m = re.search(r"silence_end: ([\d.]+)", line)
        if m and cur is not None:
            silences.append((cur, float(m.group(1))))
            cur = None
    if cur is not None:
        silences.append((cur, duration))
    segs, t = [], 0.0
    for s, e in silences:
        if s > t + 0.03:
            segs.append((t, s))
        t = max(t, e)
    if duration > t + 0.03:
        segs.append((t, duration))
    return segs, silences


def letters(word):
    return max(1, len([c for c in word if c.isalpha() or "\u064b" <= c <= "\u0652"]))


def split_sentences(words):
    groups, cur = [], []
    for i, w in enumerate(words):
        cur.append(i)
        core = w.rstrip("»\"'”")
        if core and core[-1] in SENT_END:
            groups.append(cur)
            cur = []
    if cur:
        groups.append(cur)
    return groups


def analyse_page(page, audio_path):
    words = [w["w"] for w in page["words"]]
    duration = ffprobe_duration(audio_path)
    segs, _ = speech_segments(audio_path, duration)
    speech_total = sum(e - s for s, e in segs)
    groups = split_sentences(words)
    flags = []

    # char offsets
    cum = [0]
    for w in words:
        cum.append(cum[-1] + letters(w))
    total_chars = cum[-1]

    # pauses between speech segments
    pauses = [(segs[i][1], segs[i + 1][0]) for i in range(len(segs) - 1)
              if segs[i + 1][0] - segs[i][1] >= PAUSE_MIN]

    def speech_before(t):
        return sum(max(0.0, min(e, t) - s) for s, e in segs if s < t)

    # Anchor candidates: every word that ends a clause (، or :) or a sentence
    # (. ؟ ! …) — the narrator audibly pauses at these points.
    boundary_chars = []
    for i, w in enumerate(words[:-1]):
        core = w.rstrip("»\"'”")
        if core and core[-1] in CLAUSE_END:
            boundary_chars.append(cum[i + 1])

    # --- match pauses to clause boundaries (in order, nearest speech-fraction) ---
    matched = []          # (boundary_char, pause_start, pause_end)
    used = [False] * len(pauses)
    for bc in boundary_chars:
        f = bc / total_chars
        best, best_d = None, 1e9
        for j, (ps, pe) in enumerate(pauses):
            if used[j]:
                continue
            d = abs(speech_before(ps) / speech_total - f) if speech_total else 1e9
            if d < best_d:
                best, best_d = j, d
        if best is not None and best_d < 0.18:
            used[best] = True
            matched.append((bc, pauses[best][0], pauses[best][1]))
    matched.sort()
    anchored = len(matched)
    if boundary_chars and anchored < len(boundary_chars):
        flags.append(f"only {anchored}/{len(boundary_chars)} clause boundaries "
                     f"anchored to a detected pause — the rest are interpolated")

    # --- add synthetic anchors for pauses NOT matched to punctuation, so no
    # block contains a long silence inside it (char position interpolated by
    # speech fraction within the enclosing block) ---
    anchors = [(0, segs[0][0], segs[0][0])] + matched + \
              [(total_chars, segs[-1][1], segs[-1][1])]
    matched_pause_starts = {ps for _, ps, _ in matched}
    for ps, pe in pauses:
        if ps in matched_pause_starts:
            continue
        for bi in range(len(anchors) - 1):
            c0, _, t0 = anchors[bi]
            c1, t1, _ = anchors[bi + 1]
            if t0 <= ps and pe <= t1 or (t0 <= ps <= t1):
                block_speech = sum(max(0.0, min(e, t1) - max(s, t0))
                                   for s, e in segs if min(e, t1) > max(s, t0))
                frac = (speech_before(ps) - speech_before(t0)) / block_speech \
                    if block_speech > 0 else 0.5
                cpos = c0 + frac * (c1 - c0)
                # Snap to the nearest real word boundary: a spoken pause
                # always falls BETWEEN words, never inside one.
                cpos = min(cum[1:-1], key=lambda c: abs(c - cpos)) if len(cum) > 2 else cpos
                if any(abs(a[0] - cpos) < 0.01 for a in anchors):
                    break
                anchors.append((cpos, ps, pe))
                anchors.sort()
                break

    # --- blocks between anchors; distribute by speech-rate inside a block ---
    timings = [None] * len(words)

    def time_in_block(char_pos, c0, c1, t0, t1):
        """Map a char position inside block [c0,c1] to a time, consuming
        letters only during speech segments inside [t0,t1]."""
        block_segs = [(max(s, t0), min(e, t1)) for s, e in segs
                      if min(e, t1) > max(s, t0)]
        block_speech = sum(e - s for s, e in block_segs)
        if block_speech <= 0 or c1 <= c0:
            return t0 + (t1 - t0) * (char_pos - c0) / max(1, c1 - c0)
        target = (char_pos - c0) / (c1 - c0) * block_speech
        acc = 0.0
        for s, e in block_segs:
            if acc + (e - s) >= target:
                return s + (target - acc)
            acc += e - s
        return block_segs[-1][1]

    blocks = [(anchors[bi][0], anchors[bi + 1][0], anchors[bi][2], anchors[bi + 1][1])
              for bi in range(len(anchors) - 1)]

    def block_for(pos, is_end):
        for c0, c1, t0, t1 in blocks:
            if is_end and c0 < pos <= c1:
                return c0, c1, t0, t1
            if not is_end and c0 <= pos < c1:
                return c0, c1, t0, t1
        return blocks[-1] if is_end else blocks[0]

    for i, w in enumerate(words):
        sc = block_for(cum[i], is_end=False)
        ec = block_for(cum[i + 1], is_end=True)
        s_t = time_in_block(cum[i], *sc)
        e_t = time_in_block(cum[i + 1], *ec)
        timings[i] = {"w": w, "start": round(s_t * 1000),
                      "end": round(max(e_t, s_t + 0.05) * 1000)}
    assert all(t is not None for t in timings), "unassigned word"

    # ---- validation ----
    first_start = timings[0]["start"] / 1000
    last_end = timings[-1]["end"] / 1000
    if first_start > 1.0:
        flags.append(f"first word starts late: {first_start:.2f}s into the clip")
    tail = duration - last_end
    if tail > 1.5:
        flags.append(f"last word ends {tail:.2f}s before the clip ends")
    if tail < -0.05:
        flags.append(f"last word ends AFTER the clip ({last_end:.2f}s > {duration:.2f}s)")
    coverage = speech_total / duration if duration else 0
    if coverage < 0.5 or coverage > 0.98:
        flags.append(f"unusual speech coverage: {coverage:.0%} of the clip")
    for tm in timings:
        d = tm["end"] - tm["start"]
        if d < 60:
            flags.append(f"word '{tm['w']}' too short: {d}ms")
        if d > 1600:
            flags.append(f"word '{tm['w']}' too long: {d}ms")
    for a, b in zip(timings, timings[1:]):
        if b["start"] < a["start"]:
            flags.append("non-monotonic word timings")
            break
    long_silences = [(s, e) for s, e in
                     [(segs[i][1], segs[i + 1][0]) for i in range(len(segs) - 1)]
                     if e - s >= PAUSE_MIN]
    for tm in timings:
        ws, we = tm["start"] / 1000, tm["end"] / 1000
        for ss, se in long_silences:
            overlap = min(we, se) - max(ws, ss)
            if overlap > 0.12:
                flags.append(f"word '{tm['w']}' overlaps a {se - ss:.2f}s silence "
                             f"by {overlap:.2f}s")
                break

    report = {
        "page": page["id"], "audio": page["audio"],
        "duration_s": round(duration, 3),
        "sentences": len(groups), "pauses_detected": len(pauses),
        "boundaries_anchored": f"{anchored}/{len(boundary_chars)}",
        "speech_coverage": round(coverage, 3),
        "first_word_ms": timings[0]["start"], "last_word_end_ms": timings[-1]["end"],
        "flags": flags,
        "status": "SUSPICIOUS" if flags else "OK",
    }
    return timings, round(duration * 1000), report


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--story-dir", required=True)
    ap.add_argument("--check-only", action="store_true")
    args = ap.parse_args()

    story_dir = Path(args.story_dir)
    story = json.loads((story_dir / "story.json").read_text(encoding="utf-8"))
    audio_base = story_dir / story.get("audioDir", "ar")

    reports = []
    for page in story["pages"]:
        audio = audio_base / page["audio"]
        if not audio.exists():
            reports.append({"page": page["id"], "status": "MISSING-AUDIO",
                            "flags": [f"{audio} not found"]})
            continue
        timings, dur_ms, rep = analyse_page(page, audio)
        reports.append(rep)
        if not args.check_only:
            page["words"] = timings
            page["durationMs"] = dur_ms
            page["timingsSource"] = "audio-analyzed"

    if not args.check_only:
        (story_dir / "story.json").write_text(
            json.dumps(story, ensure_ascii=False, indent=1), encoding="utf-8")
    (story_dir / "timings_validation.json").write_text(
        json.dumps(reports, ensure_ascii=False, indent=1), encoding="utf-8")

    for r in reports:
        print(f"{r['page']:>6}  {r['status']:<14} dur={r.get('duration_s', '?')}s "
              f"sentences={r.get('sentences', '?')} pauses={r.get('pauses_detected', '?')} "
              f"anchored={r.get('boundaries_anchored', '-')} coverage={r.get('speech_coverage', '?')}")
        for f in r["flags"]:
            print(f"         FLAG: {f}")
    bad = [r for r in reports if r["status"] != "OK"]
    print(f"\n{len(reports) - len(bad)}/{len(reports)} pages fully clean, "
          f"{len(bad)} with notes — full report: {story_dir / 'timings_validation.json'}")
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
