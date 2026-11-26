# What is still needed (2026-11-26)

## 1. Voices (you generate them)  → `docs/NEW_CLIPS_TO_RECORD.csv`  (2830 clips: file_name, language, kind, text, for_word)
- **English (891 clips):** the 297 new words × (word, the same word read slowly, sentence). Drop the mp3 into `assets/games/learn_voice/en/` with exactly the file name in the csv.
- **German (1311 clips):** all 437 words × (word, slowly, sentence). Into `assets/games/learn_voice/de/`. (Text and file names are also in `docs/GERMAN_WORDLIST.csv`.)
- **Arabic (628 clips):** the Arabic word said after "برافو" (e.g. كورة). Into `assets/games/learn_voice/ar/`. (The 327 older ones are in `docs/ENGLISH_VOICE_REQUEST.csv` with the vowelled reading.)
- After copying: `node tools/game_voice/generate.mjs --manifest` (I do it if you tell me), then a localhost test. Until then the device voice speaks, so the game already works.

## 2. Words
- **German expansion words** (the same 297 new picture words in German, with the right article «der/die/das» and the sentence «Das ist ein …»): I can write the list for you to check, then you record it. Say "اكتب الألماني".
- Numbers / ABC / colours / time levels still have their original size (21 / 26 / 33 / 30 items): bigger sets need new question types (how many?, colour + shape phrases, letter sounds). I can build them from words I write; no pictures needed.

## 3. Pictures
- **Nothing is missing for English or German words** — every word has a picture.
- Not used yet (received, no place for them in the 3D worlds): LANG-01 island map, LANG-03/04 dog and hedgehog guide poses, LANG-05 medallions, LANG-06 seasons, LANG-08 stickers, LANG-09 day windows, LANG-11 album; the level backdrops of the English/German worlds; the painted backdrops of pumpkin pie / rhythm / samurai / golden tail / ocean defense / happy farm (their cameras look straight down).
- If you want the guide characters (dog for English, hedgehog for German) to appear next to the word card, tell me where.

## 4. Things nobody tested
Real phone/iPad, listening to any recording, the Flutter webview path of the new German card, the win screens of the five games with a real finished level.
