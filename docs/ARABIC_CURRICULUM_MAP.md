# Arabic-first curriculum map (ages 1–6)

Date: 2026-10-31. Status of every unit below: **draft – not reviewed by a native Arabic early-years teacher**.
Coverage is measured against what exists in the repo today (see CONTENT_MASTER_AUDIT / GAME_MASTER_AUDIT). The machine-readable
version is `lib/curriculum/units.dart` (added in Phase 2) and is tested for consistency (known games, skills, ages 1–6).

Legend: ● solid (content + game + tracking) · ◐ partial · ○ missing. Age bands: A = 1–2, B = 3–4, C = 5–6.

## 1. Coverage matrix

| Strand | Skill ids (`lib/skills.dart`) | A (1–2) | B (3–4) | C (5–6) | What exists (evidence) | Main gap |
|---|---|:-:|:-:|:-:|---|---|
| Arabic language & early literacy | letters_ar, phonics, letter_position, syllables, word_building, reading | ◐ | ● | ◐ | 28 letters, guided lesson, adaptive letters, trace, fishing, word_book, listen_letter | letter *sounds* silent (audio C1); nothing for ages 1–2 beyond words; no rhymes/syllable game; reading beyond words absent |
| English exposure | letters_en, english_vocab | ◐ | ● | ● | `english` land, 107 vocab with `en`, 26 videos | no spoken English audio approved |
| Early maths | counting, addition, subtraction | ○ | ● | ● | numerals, compare, math game, snakes/ladders, 30 videos | counting for age 1–2 (touch-and-count), no money/market, no measurement words |
| Science & nature | – (no skill id) | ○ | ◐ | ◐ | nature vocab, habitats game, 20 videos, plant/float activities | no science skill id; no weather/seasons/day-night game |
| Everyday life / practical | – | ◐ | ● | ● | 17 everyday tasks (parent-confirmed), 17 real activities | no child-facing game for routines ("arrange your day") |
| Logic, memory, observation | memory, sequence, shapes | ◐ | ● | ● | memory, pattern, odd one out, maze, jigsaw, treasure | spot-the-difference/observation missing; shapes build missing |
| Social-emotional | feelings | ○ | ● | ● | `feelings` land (5 levels), feeling-of-the-day faces | no Adam & Nour feelings game with dialogue |
| Creativity & art | – | ○ | ● | ● | drawing, studio, picture story, 9 drawing videos | no age 1–2 free play with sound/colour |
| Stories & entertainment | story | ◐ | ● | ● | 10 stories, 3 branching, bedtime player | 2 stories for ages 1–2, none interactive |
| Islamic / values (deen, Quran) | – | ○ | ◐ | ● | 11 deen + 7 quran videos (age 3+) | no interactive content; owner decision needed on scope |

## 2. Learning units (Phase 2 data; summarised)

Each unit has: id, strand, age range, objective, prerequisites, content items, interactive activity, related game(s),
required assets/audio, completion criteria, assessment method, Arabic text (+ English), review status.
`reviewStatus` is `draft` for every unit; none is marked reviewed, and units never claim an asset that is not in the repo.

Examples (full list in code):

| Unit id | Ages | Objective (Arabic) | Game | Completion | Assets needed |
|---|---|---|---|---|---|
| `ar_words_first` | 1–2 | أتعرّف على أسماء الأشياء حولي | `word_book` | open ≥ 5 words (exposure) | device voice (no approved audio) |
| `ar_letters_intro` | 3–4 | أتعرّف على شكل الحرف واسمه | `letter_fishing`, `trace_letters` | 5 rounds first-try ≥ 60 % | letter sounds (not approved) |
| `ar_letter_sounds` | 4–6 | أسمع صوت الحرف وأختاره | `listen_letter` | skill `listening` ≥ 80 % over 3 weeks | recorded isolated sounds (blocked) |
| `math_count_10` | 3–6 | أعدّ حتى ١٠ | `numerals` | finish game + skill `counting` | – |
| `math_compare` | 3–6 | أقارن بين الكمّيات | `compare` | skill events | – |
| `logic_sort` | 3–6 | أصنّف الأشياء في مجموعات | `sort_groups` | skill events | – |
| `life_animal_world` | 2–6 | أعرف الحيوانات وأين تعيش | `animal_habitats`, `word_book`, `listen_picture` | adventure claim | – |
| `emo_feelings_basic` | 3–6 | أسمّي شعوري وأتصرف بلطف | feelings land | 5 levels | – |
| `art_free_draw` | 2–6 | أرسم وأعبّر | drawing/studio | “خلصت” pressed | – |

## 3. Arabic language rules used by new content
* Simple Modern Standard Arabic for instructions; short sentences (≤ 8 words for ages 1–4).
* Egyptian colloquial only inside character dialogue (Adam & Nour), selectively; educational terms (names of letters,
  numbers, shapes) stay in standard form.
* Letter *names* (باء) and letter *sounds* are separate data; sounds are never read by device TTS in isolation.
* Words in new vocabulary get harakat only where the pronunciation is ambiguous; every new item has `ar` + `en`.
* Never label device TTS as a human recording; units list `audioNeeded` honestly.

## 4. Review state
All new text is machine-drafted by this program and listed as `draft`. A native reviewer must check spelling, grammar,
dialect and pronunciation notes before any unit is marked reviewed (see `docs/CONTENT_REVIEW.md`).
