# Voice in the learning games

Owner feedback (2026-11-12): the voices in the learning games are not good, not clear. The cause: the games were read
by the **device's own reading voice** (the phone's or the browser's text-to-speech). For Arabic that voice is poor on
many phones and browsers, it is different on every device, and it is not Egyptian. No setting fixes that.

## What changed
- Every sentence a learning game says now has an **id**, and the game first looks for a **recorded clip** for it
  (`assets/games/learn_voice/<ar|en>/<id>.mp3`, listed in `manifest.js`). When the clip exists the game plays it;
  only when it does not does it fall back to the device voice. Music and effects drop while a clip plays.
- The device voice (the fallback) is back to its natural pitch and speed (the raised "child" pitch made it worse).
- `docs/GAME_VOICE_LINES.csv` lists every sentence with its id and file name: **146 Arabic sentences (about 2,200
  characters)** and 139 English ones, for the six games that speak (the maze is music only).
- Today **0 clips exist**, so the games still use the device voice until clips are made.

## Three ways to get good clips (owner's choice)
1. **Record them at home** (best for children: a real warm voice, Egyptian, free). Read each line of
   `docs/GAME_VOICE_LINES.csv` into a phone, save each as its file name, put them in the folders above, then run
   `node tools/game_voice/generate.mjs --manifest`. About 146 short lines.
1b. **Gemini voices from Google AI Studio (free, no card)**: a free key from https://aistudio.google.com/apikey (a Google
   account). Gemini text-to-speech speaks Egyptian Arabic and takes a style ("warm, slow, clear, to a small child").
   `setx GEMINI_API_KEY "<key>"`, then `node tools/game_voice/generate.mjs --provider gemini --limit 5` to hear five
   first, then without `--limit`. Default voice Leda (youthful); try `--voice Puck` or `Aoede`. Needs ffmpeg. The free tier
   has rate limits (the tool waits and retries; add `--delay 10`). Free-tier text may be used by Google to improve its
   products (only game sentences are sent). The terms for commercial use of the audio must be checked by the owner before
   the app is published (the pricing page does not say). Not run against the real service from this repository.
2. **A neural voice from Microsoft Azure** (very clear, real Egyptian Arabic voices: `ar-EG-SalmaNeural`,
   `ar-EG-ShakirNeural`; the free tier covers this many times over). Needs the owner's own Azure Speech key:
   set `AZURE_SPEECH_KEY` and `AZURE_SPEECH_REGION`, then `node tools/game_voice/generate.mjs --provider azure`.
3. **ElevenLabs** (has child-like character voices; Arabic is good but the dialect is less sure). Needs the owner's key
   and a voice id: `node tools/game_voice/generate.mjs --provider elevenlabs --voice <id>`.

Keys are read from the environment only and never written to a file. Only the sentence text is sent to the service.
The generator has NOT been run against a real service from this repository (no key here). After new games are
rebuilt, run `node tools/game_voice/lines.mjs` again and generate the new lines.

## Chosen voice (2026-11-12)
The owner chose the ElevenLabs library voice **Mahmoud Soliman - Egyptian Story** (voice id `oOge1k8044i7H9hCreX6`, an adult
Egyptian male storyteller). With the owner's key in the environment (`ELEVENLABS_API_KEY`, never in a file):
`node tools/game_voice/generate.mjs --provider elevenlabs --voice oOge1k8044i7H9hCreX6 --lang ar`
The free plan (10,000 credits a month) is enough to test; before the app is published the owner needs the Starter plan (it
lists the commercial licence) and must check the licence of this voice. The key was NOT created or read by the assistant.

## Final setup (2026-11-12)
* Voice: ElevenLabs **Fatima** (`I3u6waC588j43py1kDN2`, `eleven_multilingual_v2`) for every clip; Baba's lines (`tools/game_voice/baba_lines.txt`) use Mahmoud Soliman (`oOge1k8044i7H9hCreX6`). The greeting «أهلا بيكم يا أبطال» is Fatima on `eleven_v3`.
* **Mandatory: full tashkeel.** The text sent to the voice is always the diacritized reading in `tools/game_voice/tashkeel.json` (made by `make_tashkeel.py`, `tashkeel_games.py`, `tashkeel_levels.py`). `generate.mjs` refuses a sentence without a reading or with a bare word; `test/tashkeel.test.js` checks the same. The readings are Egyptian colloquial (not formal case endings) because the voice speaks to children in Egyptian Arabic.
* Never pass Arabic as a command-line argument on Windows (it is mangled): use `tools/game_voice/say.mjs <text file> <voice id> <out.mp3>`.
* Review file for the owner: `docs/GAME_TASHKEEL_REVIEW.txt` (screen text ← diacritized text, all 480 sentences).
* Listening pages: `docs/voice_preview/*.html`.
