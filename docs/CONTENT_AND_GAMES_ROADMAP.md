# Content & games roadmap

Date: 2026-10-31. Follows CONTENT_MASTER_AUDIT, GAME_MASTER_AUDIT, ARABIC_CURRICULUM_MAP.
Rules: no new package, no fake assets/approvals, offline Release 1, nothing committed or pushed in this program.

## P0 – done in this program (code + tests)
1. Curriculum as data (`lib/curriculum/units.dart`): units with prerequisites, game links, completion criteria, review status;
   consistency tests (known games/skills, ages 1–6, no unit marked reviewed).
2. `fun_whack` pressure removal (countdown + ⭐ score) – GAME audit G3.
3. Shared skill-event hook for games that report nothing (G1).
4. New games filling real gaps (verified non-overlapping verbs): see §P1.
5. Learning-adventure integration through the existing `AdventureTheme` list (no new reward system).

## P1 – new games (Phase 4 candidates, overlap check)
| Candidate | Verb | Gap it fills | Overlap check | Decision |
|---|---|---|---|---|
| Feed the Animal | feed/match food | ages 1–2 cause/effect + animal vocabulary | `animal_habitats` = place, not food | **build** (uses existing vocab; 1–6) |
| Big or Small | compare size | size words, ages 1–3 | `compare` = more/fewer quantity | **build** only if `compare` cannot express size (it cannot: counts) |
| Arrange Your Day | order routine | everyday strand ○ | `pattern` = visual sequence | **build** (ties to everyday tasks) |
| Build the Shape | compose | shapes strand | `jigsaw` fits a picture | **design only** (needs drawn shapes; larger work) |
| Spot the Difference | observe | observation ○ | none | **design only** (needs artwork pairs) |
| Number Market | buy/count | maths with money | `numerals`/`compare` | **design only** (money values need review) |
| Listen and Choose | listen | listening | already built (3 games) | **skip – duplicate** |
| Adam & Nour Feelings | feelings dialogue | social-emotional | feelings land has quiz levels | **design only** (dialogue lines need recorded audio) |

## P2 – blocked on humans/services (documented, work continues around them)
| Blocker | Impact | Owner action |
|---|---|---|
| Letter-sound recordings (84 items silent) | phonics games silent | record or approve a licensed voice; run `tools/audio_gen` offline |
| 0/360 audio approved | all audio is device TTS demo | native + language reviewers per `docs/AUDIO_QA.md` |
| Illustrations for vocab (emoji today) | visual quality varies per device | commission/approve art |
| Native Arabic review of units and vocab | units stay `draft` | teacher review |
| Real-device checks (videos, tap sizes, landscape) | unverified | `docs/MANUAL_TESTS.md` |
| Video verification (157 unverified) | owner-reviewed only | keep parent hide controls |
| Online features (family chat, teachers) | out of Release 1 | separate decision |

## P3 – next prioritised actions after this program
1. Record/approve letter sounds + core Adam & Nour lines.
2. Add vocabulary categories (colours, shapes, numbers, family, clothes, positions) – needs native review.
3. Age 1–2 content pack: interactive stories with tap sounds; touch-and-count; sound toys.
4. Skill events for every adventure game; adaptive level from history.
5. Spot-the-difference and Build-the-shape with real artwork.
6. Science skill id + weather/seasons game.

## Phase 2 status (2026-11-01)
* Skill tracking now covers 8 more games through `lib/games/game_skills.dart` (jigsaw, treasure hunt, connect the dots,
  animal habitats, match pictures, letter fishing, numerals, classic memory) plus `sort_groups`; 5 games are exempt on
  purpose (snakes and ladders, maze, connect four, tracing, word book), each with a written reason. Two skills were
  added: `nature` and `spatial`.
* New games: `shape_finder` (2–6), `where_ball` (3–6) with shapes and scenes drawn in code. Spot the Difference,
  Build the Shape, Number Market and Adam & Nour Feelings are NOT built: they need artwork pairs, money values or
  recorded dialogue that do not exist; no placeholder was made.
* Curriculum: 33 units (draft), 56 planned words, learning adventures for the six weekly themes.
* Games hub: the owner's picture with ten category islands; each category lists its games on grass islands.
