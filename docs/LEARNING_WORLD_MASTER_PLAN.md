# عالم رحلتي التعليمي — Master plan and audit (2026-11-12)

The owner's decision: **one strong learning game**, a 3D world, built on the existing Flutter app + the bundled three.js
games (`game_src/learn_games`). Every other learning game became a level of it. The two master reference sheets
(characters, animals, letters, numbers, shapes, fruits, vehicles, body parts, school items, environments, rewards, UI) are
the visual bible. This file is the honest map between that bible, the original master prompt and what exists today.

## Phase 1 — audit (what exists)

| Area | State |
|---|---|
| Stack | Flutter app; the world is a three.js page in `game_src/learn_games/src/letters` (+ `kit/`), built with esbuild into `assets/games/learn_letters`, opened through `WebGame` / `LearnBridge` (progress, first-completion star). |
| 3D art | Everything is drawn from shapes in code (no downloaded art): `kit/things3d.js` (≈50 objects: animals, foods, objects), `kit/kids.js` (boy + girl heroes), `kit/owl.js` (guide owl), `kit/people.js` (Mama/Baba), `kit/shapes3d.js`, `kit/realism.js` (tone mapping, reflections, sky, clouds, trees, flowers). |
| Voice | ElevenLabs voice **Fatima** (id `I3u6waC588j43py1kDN2`), 460 Arabic clips pre-generated into `assets/games/learn_voice/ar` (no key in the app; no API call at play time = no credits spent while playing). Baba's lines use Mahmoud Soliman (`oOge1k8044i7H9hCreX6`). The spoken text is the **diacritized** text (`tools/game_voice/tashkeel*.py`). Device voice is only the fallback. |
| Music | One calm original theme made in code (`kit/sound.js`); it opens up with every right answer (`energy`) and ducks under the voice. |
| Levels (9) | letters, words, first letter, numbers, counting (to 20), alphabet order, shapes + colours, animals + food, habits (Mama and Baba). Unlock one after another, five rounds each. |
| Reward | Learning star the first time a level set is finished (existing app rule: stars only for finishing, never for time, no streaks). |
| Progress | Every round goes to the parent dashboard (skills letters_ar, vocab, counting, shapes, nature, listening). Local only. |

## Phase 2 — design system (from the reference sheets)

* Style: soft rounded cartoon 3D, bright pastel colours, glossy materials, soft shadows, warm sky.
* Boy: curly dark-brown hair, yellow hoodie with a star, blue backpack, jeans, red sneakers.
* Girl: brown ponytail with a pink bow, pink hoodie with a flower, blue skirt, pink sneakers.
* Guide: blue owl with glasses, red bow tie, graduation cap and a star wand (**Boom**). Mascot crocodile, dog, cat, lion,
  elephant, cow, giraffe, sheep are in the second sheet; the first four of those still need models.
* Naming: `kit/<thing>3d.js` for model libraries, `src/<world>/levels.js` for content (pure rules, no UI), `main.js` for the scene.

## Phase 3 — main experience (status)

* Done: hero selection (boy or girl, hair and clothes colours, saved), the world scene, level map with locks, hero and
  owl reactions (celebrate, clap, think, point, talk), Mama/Baba, rack that "arranges" every right answer, sound controls,
  music that reacts, kind phrases (`CHEERS_*`, never the word "bravo": owner's choice).
* Not done yet: a 3D world map hub with separate environments per world (today one pond hosts all levels), character
  customisation of shoes / accessories / backpack, a reward shop of outfits, walking and running animations.

## Phase 5 — worlds from the master prompt, mapped

| Prompt world | Today | Next |
|---|---|---|
| 1 Arabic alphabet (28 letters) | Done as levels 1-3 and 6 (all 28 letters, a thing for each, voice) | tracing, listening challenge, memory pairs |
| 2 English alphabet | Not built | same engine, `levels.js` data + English voice |
| 3 Numbers | levels 4-5 (to 20) | 0, 21-100, addition, subtraction, more/less |
| 4 Colours | inside level 7 (5 colours) | the other six colours as their own level |
| 5 Shapes | level 7 (5 shapes) | rectangle, oval, diamond, cube, sphere, cylinder, cone |
| 6 Animals | level 8 (8 animals and their food) | sounds, facts, sea/birds/insects |
| 7 Fruit and vegetables | foods appear in level 8 | their own level with health facts |
| 8 My body | not built | needs the body-part models |
| 9 Habits and safety | level 9 (10 gentle habits) | safety scenes (road, trusted adult) |
| 10 Nature and science | not built | |
| 11 Transport | not built (car, bus, boat, plane, train models exist in `toys3d`) | |
| 12 Opposites | not built | |

New worlds are added by writing content in `levels.js` and any missing model in `things3d.js`; the scene needs no change.

## Rules that stay (CLAUDE.md)

No ads, no external links, no tracking; no analytics; stars only for finishing; no streaks; parent PIN and timer unchanged;
Arabic first. The voice key is never in the app. Arabic text is checked by tests (`levels.test.js`, `voice.test.js`:
every spoken sentence has a clip and a diacritized reading); the reference sheet's generated Arabic letters and numbers are
**not** reused (they contain errors): letters and numerals are drawn from the font.

## Assets checklist (what is still missing from the sheets)

Models: crocodile mascot, dog, cat (as characters), lion, elephant, sheep, panda, penguin, dolphin, turtle, pineapple, mango,
watermelon, broccoli, cucumber, fire truck, ambulance, police car, helicopter, globe, microscope, crown, trophy, chest,
body parts (eyes, ear, nose, mouth, hand, brain). Scenes: school gate, farm, sea, space, rainbow gate, orchard, city, robot
lab, waterfall valley, classroom, bedroom, castle. UI: progress bar, badges, shield, podium, scroll, signpost.
