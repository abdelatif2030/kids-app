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
2. **A neural voice from Microsoft Azure** (very clear, real Egyptian Arabic voices: `ar-EG-SalmaNeural`,
   `ar-EG-ShakirNeural`; the free tier covers this many times over). Needs the owner's own Azure Speech key:
   set `AZURE_SPEECH_KEY` and `AZURE_SPEECH_REGION`, then `node tools/game_voice/generate.mjs --provider azure`.
3. **ElevenLabs** (has child-like character voices; Arabic is good but the dialect is less sure). Needs the owner's key
   and a voice id: `node tools/game_voice/generate.mjs --provider elevenlabs --voice <id>`.

Keys are read from the environment only and never written to a file. Only the sentence text is sent to the service.
The generator has NOT been run against a real service from this repository (no key here). After new games are
rebuilt, run `node tools/game_voice/lines.mjs` again and generate the new lines.
