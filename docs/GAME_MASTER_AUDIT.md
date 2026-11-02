# Game master audit (Phase 1 + Phase 3 scoring)

Date: 2026-10-31 · `133b430` · Ages 1–6.
**Honesty note.** Scores out of 100 are a structured judgment from reading the code and tests, using the rubric in §3.
Nobody played these on a device for this audit. Where something could not be verified from files it says so.

## 1. Inventory (from `lib/games/game_catalog.dart`, `fun_games.dart`, `games_screen.dart`)

| # | id | Group | Ages (code) | Objective (catalog) | Skill event (`ProgressStore`) | Records learning evidence | Star rule |
|---|---|---|---|---|---|---|---|
| 1 | `balloons` | classic | 1–2 | pop balloons (cause/effect) | no | no | none |
| 2 | `animal` (فين الحيوان؟) | classic | 1–2 | name/locate animals | no | no | none |
| 3 | `colors` | classic | 2–3 | colour matching, 5 rounds | `colors` per round | no | star at end |
| 4 | `letters` | classic | 3–8 | first letter (ar/en/de/fr) | `letters_<lang>` per round | no | star at end |
| 5 | `memory` | classic | 3–6 | pair memory | no | no | star at end |
| 6 | `math` | classic | 4–12 | counting / sums / tables | skill per question | no | star at end |
| 7 | `snakes_ladders` | learning | 4–6 | counting on a board, turns | no | practice (`GameRewards.complete`) | first completion |
| 8 | `jigsaw` | learning | 3–6 | visual perception, fitting | no | practice | first completion |
| 9 | `maze` | learning | 4–6 | planning, problem solving | no | practice | first completion |
| 10 | `treasure_hunt` | learning | 4–6 | positions/directions | no | practice | first completion |
| 11 | `connect_dots` | learning | 3–6 | order, fine motor | no | practice | first completion |
| 12 | `animal_habitats` | learning | 3–6 | where animals live | no | practice | first completion |
| 13 | `match_pictures` | learning | 3–6 | pair matching | no | practice | first completion |
| 14 | `letter_fishing` | learning | 4–6 | recognise letters | no | practice | first completion |
| 15 | `connect_four` | learning | 5–6 | thinking, turns (2 players) | no | practice | first completion |
| 16 | `numerals` | learning | 4–6 | numerals 1–10 | no | practice | first completion |
| 17 | `trace_letters` | learning | 4–6 | tracing guide (stroke order not validated) | no | practice | first completion |
| 18 | `word_book` | learning | 2–6 | 50-word picture book | no | **exposure** per word | first completion |
| 19 | `listen_picture` | learning | 3–6 | word → picture | `listening` | practice | first completion |
| 20 | `listen_word` | learning | 5–8 | sound → written word | `listening` | practice | first completion |
| 21 | `listen_letter` | learning | 4–6 | sound → letter | `listening` | practice | first completion |
| 22 | `odd_one_out` | learning | 3–6 | classification | skill per round | practice | first completion |
| 23 | `pattern` | learning | 4–6 | sequence | `sequence` | practice | first completion |
| 24 | `compare` | learning | 3–6 | more/fewer | skill per round | practice | first completion |
| 25 | `sort_groups` | learning | 4–6 | sorting | skill per round | practice | first completion |
| 26 | `review_words` | learning | — | review words met in 30 days | no | practice (never demonstrated) | first completion |
| 27 | `fun_whack` | casual | 2+ | motor / fun | no | no | none (shows ⭐ score + countdown) |
| 28 | `fun_stars` | casual | 2+ | motor / fun | no | no | none |
| 29 | `fun_xo` | casual | 4+ | turns | no | no | none |
| 30 | `fun_snake` | casual | 5+ | motor | no | no | none |

Evidence: `ProgressStore.record` is called only from `choice_games.dart:272`, `color_game.dart:86`, `math_game.dart:106`,
`letters_game.dart:132`. `GameRewards.complete` (`game_common.dart`) writes an `Evidence.practice` record
(`game:<id>`) and returns whether it was the first completion. Ages of #26 not re-read (catalog tail); treated as 3–6.

## 2. Cross-cutting findings

**G1 – Only 4 of 30 games feed the skill model.** The 13 adventure/board games (#7–#18 plus classic memory/animal/balloons)
leave no skill event, so the adaptive dashboard cannot say whether a child improved. `GameRewards` records only
"played" practice. *Improvement:* a small shared hook so finishing a round reports a `skill` event (Phase 3).

**G2 – Age 1–2 is under-served.** Age 1 can reach only `balloons`, `animal` (+ `whack`/`stars` from 2, `word_book` from 2).
No sound-and-touch, cause-and-effect, or "feed/hide-and-find" game; no game uses voice for a 1-year-old.

**G3 – `fun_whack` contradicts the program rule "no time pressure".** `fun_games.dart:64-130`: a 30-second countdown
(`_seconds = 30`, `_left--`) and a `⭐ $_score ⏱ $_left` status line while the file header (line 12) promises "no scores kept,
no timers that push the child". It is also the only place a ⭐ is shown for a non-completion. *Fix:* remove the
countdown, show a calm count of moles found, end after N moles.

**G4 – `fun_snake` (5+) and `fun_xo` (4+) have no age ceiling and `fun_snake` is real-time** (Timer 260 ms). Acceptable as
casual play; flagged for review as "Improve" (slower start, no game-over screen wording).

**G5 – Mechanic overlap.** Four games share one engine (`ChoiceGame`: odd one out, pattern, compare, sort + three listening
games). Matching: `match_pictures`, `listen_picture`, `animal_habitats` all are "pick the right picture". Sequence/maze/
treasure are distinct. See roadmap for the dedup rule (new games must introduce a new verb: feed, build, spot, arrange, buy).

**G6 – Instructions.** All games pass `instruction:` to `GameScaffold`; the Adam/Nour guide speaks it through
`CompanionService` (device voice unless an approved recording exists – only one exists). So spoken instructions for a
non-reading child are demo-quality TTS today.

**G7 – Landscape/touch.** Every game body is wrapped by `FitHeight` or uses `fit:false` with 40 px+ targets
(commit `133b430`); `test/responsive_matrix_test.dart` covers 3 widths × ar/en. Not verified on real devices.

**G8 – Child isolation.** Rewards, resume, favourites, records are keyed by `childId` (see `GameRewards`, `ResumeStore`,
`LearningRecords`). Casual games and balloons keep no data (nothing to leak).

**G9 – Adventure games ages and content** (`adventure_games.dart`, 6 games) use `fit:false`; difficulty from `age`
parameter only (no adaptive level from history).

## 3. Rubric (100)

Objective clarity 10 · Age fit 10 · Instructions/usability 10 · Visuals 10 · Interaction 10 · Difficulty progression 10 ·
Replay value 10 · Accessibility/touch 10 · Audio/feedback 5 · Skill tracking 10 · Safety/privacy/no pressure 5.

## 4. Scores and decisions (judgement from code; ± 8)

| Game | Score | Decision | Main reason |
|---|---:|---|---|
| balloons | 58 | Improve | cause/effect only, no instruction audio for age 1, no tracking |
| animal | 62 | Improve | no skill event; fixed set |
| colors | 78 | Keep | 5 rounds, skill event, gentle fade on wrong |
| letters | 76 | Keep | multi-language; Arabic letter *sounds* silent (audit C1) |
| memory | 64 | Improve | no skill event, no level progression |
| math | 74 | Keep | skill events + picture help on wrong answer; ages 4–12 (legacy ceiling) |
| snakes_ladders | 66 | Improve | luck-based, no skill event |
| jigsaw | 68 | Improve | no skill event, no level from history |
| maze | 70 | Keep | clear objective; add skill event |
| treasure_hunt | 66 | Improve | direction vocabulary only in text; no spoken cue guarantee |
| connect_dots | 68 | Keep | fine motor + order; add event |
| animal_habitats | 74 | Keep | good Arabic content fit (home of animals) |
| match_pictures | 72 | Keep | add skill event |
| letter_fishing | 72 | Keep | audio of letter sound unavailable (C1) |
| connect_four | 60 | Improve | 2 players, little learning value; keep as family game |
| numerals | 72 | Keep | add skill event |
| trace_letters | 62 | Improve | stroke order not validated; honest about it |
| word_book | 78 | Keep | exposure recorded honestly, ages 2–6 |
| listen_picture | 78 | Keep | skill event; depends on TTS quality |
| listen_word | 66 | Improve | age 5–8 reaches beyond scope (cap shown at 6) |
| listen_letter | 70 | Keep | depends on isolated sounds being recorded (C1) |
| odd_one_out | 76 | Keep | |
| pattern | 76 | Keep | |
| compare | 74 | Keep | |
| sort_groups | 74 | Keep | |
| review_words | 74 | Keep | honest "practice" evidence |
| fun_whack | 44 | Improve (priority) | countdown + score violates the no-pressure rule (G3) |
| fun_stars | 56 | Improve | review for time pressure/score text (not read in detail) |
| fun_xo | 60 | Keep | two-player turns |
| fun_snake | 52 | Improve | real-time; gentler start and ending |

No game is proposed for **Retire**: nothing has a compelling reason and many are referenced by weekly adventures
(`adventure_logic.dart`), My Day and resume. Redesign candidates: none (all are fixable in place).

## 5. Safe improvements selected for Phase 3 (low risk)
1. Remove countdown/score pressure from `fun_whack` (G3) with tests.
2. A shared "finish round" skill-event hook for games that currently report nothing (G1) – opt-in per game, tests.
3. Keep every id, route and star rule unchanged.

## 6. Implemented after this audit (same session)
* `fun_whack`: countdown and ⭐ score removed; the mole waits until tapped; the round ends after 8 finds (test rewritten).
* New games on the shared `ChoiceGame` engine (`lib/games/life_games.dart`): `feed_animal` 2–6 (skill `vocab`),
  `big_small` 2–6 (skill `shapes`), `next_in_day` 3–6 (skill `sequence`); they emit skill events, record practice only,
  give the star on first completion, and are placed in the animals / shapes / thinking weekly adventures.
* Catalogue is now 22 learning games; age 2 has 3 (was 1).
* Not done: G1 hook for the 13 adventure/board games (documented as next step).

## 7. Phase 2 changes
* Skill rules for every learning game are in `lib/games/game_skills.dart` (`kGameSkillRules`) and tested.
* `ProgressStore.record` no longer loses an event when two rounds are recorded almost together (read and write without
  an await between them).
* Games are now reached through ten category islands (`lib/games/games_hub.dart`); `GamesGrid(only:)` lists one category.
* Added: `shape_finder`, `where_ball`. Catalogue: 24 learning games.
