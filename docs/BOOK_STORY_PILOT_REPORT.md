# كتاب الحكايات — Pilot Report: «قصة الرجل الطيب والكلب العطشان»

**Status: pilot complete and verified end-to-end with the real narration.**
Branch `ai/moss-work`. Player: `assets/book_stories/index.html` (source:
`game_src/book_stories/src/index.html`). Story data:
`assets/book_stories/s01_thirsty_dog/story.json` + the owner's clips in
`s01_thirsty_dog/ar/` (his commit `d7629a2d`; not re-committed by me).

## What was built

- **Data-driven storybook player** (one self-contained page, zero external
  requests — verified: the standalone bundle made exactly 5 requests, all
  local; the only URL string in the code is the SVG `xmlns` identifier, which
  is never fetched). A new story = a new folder with a new `story.json` +
  clips; no code changes (format documented in
  `game_src/book_stories/README.md`).
- **The book writes itself**: each word is invisible until the narrator says
  it, then appears; the word being spoken glows (gold pill + halo). Words are
  driven by the real audio clock (`HTMLAudioElement.currentTime`), so sync is
  inherent, not timer-based.
- **Real word timings from the real clips**: `tools/make_timings.py` detects
  the narrator's pauses with ffmpeg silencedetect, anchors clause/sentence
  boundaries to real pauses, and distributes words by letter count consuming
  letters only during detected speech (no word is ever scheduled inside a
  silence). `tools/build_story.py` builds story.json from the voice-request
  CSV with the text copied **byte-exactly** (asserted in code and re-verified:
  `" ".join(words) == text == CSV text` for all 9 pages).
- **Page turn**: a 3D leaf (rotateY around the spine) with bend shading and a
  cast shadow, plus a synthesized paper sound. Auto-turn when a page's
  narration ends; big child buttons: play/pause, next, previous, replay page
  (reload-based, so it works even on servers without HTTP Range support),
  restart, mute.
- **Illustrations drawn in code** (SVG, gently animated: rotating sun rays,
  drifting clouds, swaying bucket, wagging tail, panting tongue, floating
  hearts, twinkling stars). The man is always seen **from behind**, in a robe
  and head-cloth, with **no face**; the final page (the Prophet's ﷺ saying)
  shows **text only** over a calm night scene — well, dog, crescent — with no
  person at all.
- **Sound**: narrator = the owner's Aoede clips only. Music (original
  Karplus-Strong plucked lullaby in D hijaz, ducked under narration),
  ambience per page (wind / well droplets / calm birds), and the page-turn
  swish are all synthesized with WebAudio. `speechSynthesis` is never used.
- **Silent mode**: if a clip is missing/unreachable the page falls back to an
  estimated-timing clock (the same timings `build_story.py` writes before
  analysis), so the book still reads itself silently.
- Cover screen (book cover + title + «ابدأ الحكاية») and a calm end screen
  (no stars, no scores, no pressure). `prefers-reduced-motion` → fade instead
  of curl and still artwork. No ads, no links, no tracking.

## Timings validation (make_timings.py, real clips)

| page | duration | sentences | pauses | clause boundaries anchored | speech coverage | verdict |
|---|---|---|---|---|---|---|
| title | 4.40s | 1 | 1 | 0/0 | 74% | OK |
| p01 | 9.32s | 1 | 2 | 2/2 | 83% | OK |
| p02 | 10.12s | 2 | 4 | 3/3 | 67% | OK |
| p03 | 11.88s | 3 | 5 | 4/4 | 60% | OK |
| p04 | 9.52s | 1 | 2 | 2/2 | 76% | OK |
| p05 | 5.64s | 1 | 1 | 1/1 | 76% | OK |
| p06 | 10.08s | 1 | 3 | 2/2 | 77% | OK |
| p07 | 8.72s | 2 | 3 | 3/3 | 71% | OK |
| p08 | 17.04s | 3 | 3 | **3/5** | 79% | **note** |

p08's note: the narrator reads the hadith quote and its explanation more
continuously, so 2 of its 5 clause boundaries have no ≥0.35s pause to anchor
to and are interpolated. The tool's other checks still pass for p08 — no word
overlaps a silence, durations are sane, order is monotonic — so the possible
local drift is bounded to part of one clause, but it is the one page whose
sync is computed rather than pause-anchored. Full machine report:
`assets/book_stories/s01_thirsty_dog/timings_validation.json`.

## What was actually tested (evidence)

Automated harness (`game_src/book_stories/test/capture.mjs`, headless
Chrome, real clicks, real audio playback): **93/93 checks passed, 0 page
errors.** Frames in `game_src/book_stories/test/frames/` (full set kept in
the workspace review folder).

- **Word sync, deterministic**: at 1366×1024, every page (title + p1–p8) was
  seeked to 8% / 50% / 88% of its duration; the highlighted word matched
  story.json's timings within ±1 word in all 27 checks. At 844×390,
  1024×768 and 390×844 (portrait), the 50% check passed for all 9 pages.
- **Word sync, real-time**: on p1, the highlighted word was compared against
  the live audio clock at two moments (~1.3s and ~3.3s in) at every size —
  always within ±1 word and advancing.
- **Frames reviewed by eye** (cover; every page at start/middle/end of its
  writing at 1366×1024; mid-page frames at the other three sizes; the
  mid-turn frame; the end screen; a silent-mode frame; a standalone frame):
  full text visible and uncut, tashkeel intact and legible, RTL correct,
  current word highlighted at the right moment, nothing off-screen, no
  covered buttons. The ﷺ ligature (U+FDFA) renders correctly via system-font
  fallback (Tajawal has no glyph for it) — verified in the p8 frames.
- **Controls**: start flow, pause freezes the highlighted word (sampled
  twice, unchanged), resume, replay resets to word 0, next-page curl lands
  on the next page, previous-page curl returns, the last page's ending
  reaches the end screen, restart works.
- **Silent mode** (mp3 requests blocked): `audioOk=false`, words advance on
  the estimated clock.
- **Reduced motion** (emulated): `body.reduced` set, page changes use a fade
  (no curl leaf is created), page still advances.
- **Standalone bundle** (`build.mjs --standalone`): loads with fonts from
  its own `fonts/` folder, plays the real narration, 5 requests / 0 external.
- **Story integrity test** (`test/test_story.py`): text reconstruction,
  monotonic in-range timings, known art/ambience ids, all clips present.

## What was NOT tested

- **No real device / real WebView** — everything above is headless Chromium
  (SwiftShader). Touch feel, the iOS audio-unlock path, and Android WebView
  font fallback for the ﷺ ligature still need one pass on a real phone.
- **Sync was verified by measurement, not by ear** — the owner confirmed the
  clips' spoken words are correct; I verified word onsets against detected
  speech/pause structure, not by listening (per his instruction, no listening
  review was needed).
- **Local `python -m http.server` cannot serve HTTP Range requests**, so
  media *seeking* is ignored there (normal sequential playback — the actual
  product flow — is unaffected; replay deliberately reloads the clip instead
  of seeking). Real hosting and the app shell serve ranges normally.

## Risks / open items

- p08's two interpolated clause boundaries (above) — the only computed-sync
  page; a re-record with slightly longer pauses at the commas would let the
  tool anchor 5/5.
- The ﷺ glyph depends on OS font fallback everywhere (Tajawal lacks it). It
  renders in Chromium; confirm once on the target Android/iOS devices.
- Headless frame rate is not representative; the page is DOM/SVG-light
  (one rAF loop, class toggles only when the current word changes), so real
  devices should be comfortable, but this is asserted from design, not from
  a device measurement.

## My notes — what I would change / what I need

- The illustration plates are 4:3 inside a taller page half, so they sit
  like a picture on the page with calm margins. If we want a fuller look for
  future stories, I can compose scenes wider (the ART functions are small
  and per-story).
- During the narrator's inter-sentence pauses the highlight stays on the
  last spoken word; fading it after ~600ms of silence might read cleaner.
  I left it as-is — it tells the child "we are here" — but it's a one-line
  change if the owner prefers.
- For the next stories, the same CSV → build → record → analyze pipeline
  works unchanged; all I need from the owner is the next story's CSV and its
  clips in the same layout.
