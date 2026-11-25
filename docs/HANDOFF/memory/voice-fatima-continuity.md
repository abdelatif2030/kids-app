---
name: voice-fatima-continuity
description: The learning game's voice is ElevenLabs "Fatima – Expressive Egyptian Voice" (id I3u6waC588j43py1kDN2); how to continue it on a new account/key
metadata:
  type: reference
---

Learning-game narrator = ElevenLabs voice "Fatima – Expressive Egyptian Voice", id `I3u6waC588j43py1kDN2` (category professional, probably a Voice Library voice), model `eleven_multilingual_v2`, stability 0.55, similarity 0.8, mp3_44100_64, text always fully diacritized (tools/game_voice/tashkeel.json).
The owner switched to a NEW ElevenLabs account on 2026-11-18 (old one hit 0 credits). Voice ids belong to an account: when he adds the new key, run `node tools/game_voice/check_voice.mjs` first; if the voice is not usable, add it from the Voice Library (same name) or clone it from our existing clips (docs/VOICE_CONTINUITY.md). Key goes in env `ELEVENLABS_API_KEY` only, never in a file.
Still to record: ~270 new fact sentences (then `node tools/game_voice/voiced.mjs`, then `verify_voice.mjs`).

**Why:** the owner wants the exact same voice across the whole game. **How to apply:** never switch the voice silently; compare a sample before continuing if the voice had to be re-created.
