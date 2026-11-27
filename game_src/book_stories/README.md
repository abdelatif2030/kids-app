# كتاب الحكايات — Story Book template

An interactive read-along storybook for Rehlaty: a big open book, a narrator
reads aloud, and **each word appears on the page as it is spoken** and glows
while it is being said. When a page ends, a real page-curl turn (with a soft
paper sound) brings the next page. Every page has a small illustration drawn
in code (SVG) with gentle motion.

- Player: `assets/book_stories/index.html` (built from `game_src/book_stories/src/index.html`)
- Pilot story: `assets/book_stories/s01_thirsty_dog/` — «قصة الرجل الطيب والكلب العطشان»
- Fully offline: no CDN, no external fonts, no tracking, no ads, no links.
  The only files loaded are the story's own `story.json`, its narration mp3s,
  and the app's Tajawal fonts (`assets/fonts/`, referenced as `../fonts/`).
- The narrator's voice is the ONLY voice. `speechSynthesis` is never used.
  Music, ambience (wind / well water / birds) and the page-turn sound are all
  synthesized in code with WebAudio — original, no copyrighted material.

## Run it locally

```sh
sh game_src/book_stories/play.sh     # or play.bat on Windows
# open http://127.0.0.1:8123/book_stories/index.html
```

## Add a NEW story (no code changes)

1. Create a folder `assets/book_stories/<story_id>/` with a subfolder per
   language (e.g. `ar/`) holding one mp3 per page.
2. Write the voice-request CSV (columns: `file_name,voice,text,delivery_style`;
   one `*_title.mp3` row + `*_p01.mp3 … *_pNN.mp3` rows) — the text in the CSV
   is the source of truth and is copied **exactly** into the story.
3. Build `story.json`:
   ```sh
   python3 game_src/book_stories/tools/build_story.py \
     --csv docs/<YOUR_VOICE_REQUEST>.csv --story-dir assets/book_stories/<story_id>
   ```
   This writes estimated word timings (good enough to test the motion
   silently). Then compute the REAL timings from the recorded clips:
   ```sh
   python3 game_src/book_stories/tools/make_timings.py \
     --story-dir assets/book_stories/<story_id>
   ```
   The tool anchors words to the narrator's actual pauses (detected with
   ffmpeg silencedetect), writes `timingsSource: "audio-analyzed"` into
   story.json, and prints a validation report (also saved as
   `timings_validation.json`). **Read the flags** — a page marked SUSPICIOUS
   has interpolated timings somewhere and deserves a listen.
4. Per page, set `art` (illustration id) and `ambience` (`wind` | `well` |
   `calm`) in story.json. Existing art ids: `cover, road, thirst, well, dog,
   thought, shoe, drink, sky`. A new scene means adding one SVG function to
   the `ART` table in the player source — that is the only code a truly new
   scene ever needs; reusing an existing scene needs none.
5. Open the player with `?story=<story_id>` (the pilot is the default).

## story.json format (`rehlaty-book-story/1`)

```jsonc
{
  "format": "rehlaty-book-story/1",
  "id": "s01_thirsty_dog",
  "title": "<title text — shown on the cover and the title page>",
  "lang": "ar", "dir": "rtl",
  "narrator": "Aoede",
  "audioDir": "ar",              // subfolder holding the mp3s
  "sourceCsv": "BOOK_STORY_PILOT_VOICE_REQUEST.csv",
  "pages": [
    {
      "id": "title",             // first page: id "title", then "p01", "p02", …
      "audio": "s01_title.mp3",
      "art": "cover",            // ART table key
      "ambience": "calm",        // wind | well | calm
      "text": "<the page's full text, exactly as narrated>",
      "durationMs": 4400,        // real clip duration once analysed
      "timingsSource": "audio-analyzed",   // or "estimated"
      "words": [ {"w": "قِصَّةُ", "start": 231, "end": 716}, … ]
      // " ".join(words.w) MUST equal text. start/end are ms from page start.
    }
  ]
}
```

Rules the template keeps for every story:
- Words appear only when spoken (target tolerance ≈ 80 ms) and the current
  word is highlighted; nothing is shown early.
- Pages turn automatically when the narration ends; the child can also go
  next / previous / replay with big buttons.
- Calm end screen — no stars, no scores, no pressure, ever.
- `prefers-reduced-motion` is respected (fade instead of curl, still art).
- Religious-content rule for this series: never draw the Prophet ﷺ, any
  prophet, or any companion. People are drawn from behind, without facial
  features; a page carrying a saying of the Prophet ﷺ shows text with a calm
  nature scene only.

## Files

| Path | What |
|---|---|
| `game_src/book_stories/src/index.html` | player source (HTML+CSS+JS, ART table, WebAudio engine) |
| `game_src/book_stories/build.mjs` | copies the player to `assets/book_stories/` (`--standalone <dir>` bundles fonts+story for a zip) |
| `game_src/book_stories/tools/build_story.py` | CSV → story.json (exact text, estimated timings) |
| `game_src/book_stories/tools/make_timings.py` | real word timings from the mp3s + validation report |
| `game_src/book_stories/play.sh` / `play.bat` | local server for trying the demo |
| `assets/book_stories/index.html` | built player |
| `assets/book_stories/s01_thirsty_dog/story.json` | pilot story data (real timings) |
| `assets/book_stories/s01_thirsty_dog/ar/*.mp3` | narrator clips (owner-provided) |
| `docs/BOOK_STORY_PILOT_REPORT.md` | pilot review report (evidence, gaps, risks) |
