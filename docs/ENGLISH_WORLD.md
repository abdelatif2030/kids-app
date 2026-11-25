# English with Rehlaty («تعلّم الإنجليزي»)

Entering the learning games now asks first **«عايز تتعلم إيه؟»**: Arabic (the whole learning world as it was) or English
(`LearnLanguageGate`, lib/games/learning_page.dart; `kLearnLanguages` is the list: German/French later = one more entry + its levels).

## How a child learns a word
The same 3D world as the Arabic levels, a different method (listening first, the Arabic words are only the praise):
1. The child **hears** the English word (the owner's voice pack, `assets/games/learn_voice/en/`, 1299 clips); a NEW word is heard normally and then slowly (`<id>_slow`).
2. Taps the picture / number / letter / colour / shape / sign that matches.
3. A wrong tap only plays the slow clip again (no penalty).
4. After the right answer the pack's sentence is heard and shown («This is a panda.»).
5. 8 rounds: 5 new words, then 3 of them asked again with other neighbours (so a new word is met three times: 1st ask, slow, repeat). The replay memory (`FreshMemory`) puts words the child has not met first.

## Levels (src/english/levels.js, 12)
Animals · My first words · Me and my family · Yummy food · Clothes and school · Jobs, music and weather · Numbers (0-20) · ABC (26 letter names) · Colours (33) · Shapes (13) · Days and months (days, months, seasons, parts of the day) · Big numbers (30-100). 381 words in all (`src/english/words.json`, made by `tools/make_english_data.py` from `docs/ENGLISH_WORDLIST.csv` and the pictures the app already has; nothing invented).

## Code
- `kit/voice.js`: queue items may be `{t, lang:'en', slow}`; `<id>_slow` clips; device voice fallback per language.
- `letters/levels.js`: mode `en` in `LevelPlay`; `EVERY_LEVEL` (lookup by id) vs `ALL_LEVELS` (the Arabic world; tests iterate this one).
- `letters/main.js`: `_learnEn()`, `_list()`, English level list, `r.say/retry/rewardSay`.
- Flutter: `kLearnEnglish` (learnLang 'en', own store key `learn_english`, star id `english_world`), config key `learnLang`.
- Browser check: `learn_letters/index.html?learnLang=en&age=5&level=en_animals&debug=1`.
- Tests: game_src/learn_games/test/english.test.js, test/learning_page_test.dart.

## Not in yet (clips exist or are wanted)
- Phrases of the pack not built as levels: daily routine (10), where is the ball (5), pattern beads (6): they need their pictures/scenes.
- Words skipped for lack of a picture: shapes rectangle, oval, diamond, pentagon, hexagon, arrow, ring, cube, ball, cone, cylinder, pyramid; the 9 "things of a colour", 7 animal foods, 3 toys (teddy bear, blocks, yo-yo).
- Not tested on a real phone; the recordings were not listened to by a person here.
