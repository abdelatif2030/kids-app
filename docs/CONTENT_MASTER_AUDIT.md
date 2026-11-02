# Content master audit (Content & Games Excellence Program, Phase 1)

Date: 2026-10-31 · Branch `feature/rehlaty` at `133b430` · Scope: ages 1–6 only.
Method: counts below were computed from the repository files (scripts over `assets/videos.json`, `lib/library/vocab.dart`,
`lib/games/game_catalog.dart`, `lib/stories/*`, `lib/media/audio_catalog.dart`, `docs/AUDIO_COVERAGE.md`). Nothing was
played on a device; "works" means "code exists and a test covers it", never "a child enjoyed it".

## 1. Inventory

| Content type | Where | Count (evidence) | Ages 1–6 notes |
|---|---|---:|---|
| Whitelisted videos | `assets/videos.json` | 157 | all `ownerReviewed: true`, `verification: unverified` (owner statement, not an app check) |
| Vocabulary items | `lib/library/vocab.dart` (`kVocab`) | 107 parsed (all have `en`) | by age: 1y 38 · 2y 71 · 3y 104 · 4y 106 · 5y 107 · 6y 107 |
| Vocabulary categories | `kVocabCategories` | 10 (animals 21, home 16, food 15, nature 12, actions 10, transport 9, jobs 9, body 8, emotions 7) | no shapes/colours/numbers/family/clothes/places categories |
| Arabic letters | `lib/literacy/letters_data.dart` | 28 | name + sound + 3 positions + words; sounds are device voice or silent |
| Stories (linear) | `lib/stories/story_data.dart` `kStories` | 10 | ages 1–6: moon_star 1+, music_box 1+, three_apples 3+, little_lamp 3+, bee_flower 3+, broken_cup 4+, bunny_garden 4+, raindrop 5+, tiny_spaceship 5+, rainy_day 6+; `choice_island` is 8–12 (legacy) |
| Branching stories | `lib/stories/branching.dart` | 3 | e.g. `boat` 3–6 |
| Real-life activities | `lib/library/activities.dart` | 17 `RealActivity` | offline, parent-confirmed |
| Everyday tasks | `lib/everyday/everyday_data.dart` | 17 `EverydayTask` | six areas, supervision level on every task |
| Journey lands | `lib/journey/lands.dart` | 7 (letters, numbers, colors, english, brain, stories, feelings) | activities generated in `lib/journey/content.dart` |
| Dialogue lines (Adam & Nour) | `lib/media/audio_catalog.dart` | 64–65 `DialogueLine` | 1 approved recording (`adam/ar/welcome_back`) |
| Audio manifest items | `docs/AUDIO_COVERAGE.md` | 360 | 0 approved; 250 device voice; 110 silent |
| Educational games | `kEducationalGames` | 19 | see GAME_MASTER_AUDIT |
| Casual games | `kFunGames` | 4 | no scores, no stars |
| Classic games | `games_screen.dart` | 6 (balloons, animal, colors, letters, memory, math) | |
| Weekly adventures | `lib/adventures/adventure_logic.dart` | 6 themes × 5 games | rotate by week |
| Printable worksheets | `lib/print/worksheets.dart` | 7 kinds | |

## 2. Videos by subject × age (computed)

| Subject | 1y | 2y | 3y | 4y | 5y | 6y |
|---|---:|---:|---:|---:|---:|---:|
| arabic | 2 | 4 | 12 | 11 | 13 | 12 |
| english | 4 | 9 | 18 | 19 | 22 | 14 |
| math | 0 | 6 | 14 | 15 | 14 | 10 |
| science | 0 | 0 | 4 | 4 | 11 | 11 |
| discover | 3 | 9 | 11 | 12 | 8 | 3 |
| calm | 4 | 4 | 4 | 4 | 4 | 3 |
| stories | 0 | 0 | 3 | 5 | 5 | 5 |
| deen / quran | 0 | 0 | 3 | 12 | 18 | 18 |
| drawing | 0 | 0 | 1 | 4 | 9 | 9 |
| french / german | 0 | 4 | 8 | 9 | 12 | 12 |
| fun | 1 | 1 | 1 | 1 | 0 | 0 |

Language of the whitelist: ar 90, en 54, fr 7, de 6.
Findings: **age 1 has 14 videos, no maths/science/stories/Quran/drawing**; science only starts at 3; Arabic-language
share is 57 %, but Arabic *early-literacy* videos for age 1–2 are 2 and 4.

## 3. Findings (each with evidence)

**C1 – Audio is the weakest layer.** `docs/AUDIO_COVERAGE.md`: 0 of 360 manifest items approved, 0 bundled files;
Arabic letter *sounds* (84 items) have no device-voice fallback (isolated sounds are deliberately never read by TTS), so a
child hears nothing for phonics. Only one dialogue line is an approved human/clone recording (`approved.json`).
Impact: every "listen" game and phonics step depends on device TTS (offline, demo quality, unverified Arabic).

**C2 – Vocabulary is emoji-illustrated.** `Vocab.emoji` is the picture for all 107 items ("an emoji until real artwork is
added"). Emoji rendering differs per platform; no real or illustrated art exists for any word.

**C3 – Narrow noun-only vocabulary.** Categories contain only nouns/verbs/emotions. Missing for ages 1–6: colours, shapes,
numbers 1–10 as words (numbers live in games/audio manifest only), family members, clothes, places, opposites, positions
(فوق/تحت), days/seasons. These are core Arabic early-years topics.

**C4 – Story coverage is thin for ages 1–2.** Two stories fit age 1–2 (moon_star, music_box); none are interactive
(no tap-the-animal, no sound-play). No Arabic rhymes/songs/finger-play content exists as app content (only as videos).
Branching stories: 3, all for 3–6.

**C5 – Videos are unverified at app level.** `verification: unverified` for all 157; the owner reviewed them by hand
(documented decision). Titles/age ranges were written from search titles (CLAUDE.md). Some are long compilations. This is a
human-review dependency, not something the audit can close.

**C6 – Subject map vs. age.** Science, Quran, drawing and stories videos start at age 3–4; for ages 1–2 the only video
content is arabic/english/discover/calm/fun (see table). Maths videos start at 2.

**C7 – Curriculum structure exists only implicitly.** Skills (`lib/skills.dart`, 22 skill ids) and lands (7) exist, but
there is no unit-level model (objective → prerequisites → content → game → completion criteria). The program's Phase 2
adds this as data (`lib/curriculum/units.dart`) without touching the existing stores.

**C8 – Duplicate/overlapping content.** (a) `match_pictures`, `listen_picture`, `odd_one_out`, `sort_groups` all consume
vocab emoji pictures through the same two shared engines (intentional reuse, but experience overlaps). (b) Weekly adventure
themes reuse the same game ids repeatedly (`pattern`, `jigsaw`, `connect_dots`, `odd_one_out`, `match_pictures` each appear
in 2–3 themes). (c) `word_book` (50-word picture book) and the Vocabulary library present overlapping words through two different flows.

**C9 – Arabic quality risks (unverified, need a native reviewer).** `docs/CONTENT_REVIEW.md` already requires a teacher to
review letters/words. No automated check exists for tashkeel consistency in vocab (words are written without harakat),
and letter names/sounds follow `letters_data.dart` only. The program will not claim linguistic review.

**C10 – English support is complete for vocab (107/107 have `en`)**, stories have English text via `tr2`, but
learn-language English for letters is Arabic-script-agnostic (`letters_en` skill exists).

## 4. What is solid (kept as is)
Per-child isolation of stores; first-completion-only stars; adaptive letters with reasons; Leitner mastery; learning
records with Evidence levels (exposure < practice < demonstrated) – games record *practice* only; parent-hide for videos;
audio approval gate (file + licence + two reviewers); offline-first with online gated off.

## 5. Dependencies that code cannot close
Human recordings/approval (C1), real artwork (C2), native Arabic reviewer (C9), device verification of video embedding
(C5). They are listed in `CONTENT_AND_GAMES_ROADMAP.md` as blockers with the work that proceeds around them.
