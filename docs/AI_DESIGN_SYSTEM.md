# Rehlaty game-experience design system (ai/moss-work)

Written by Muse on branch `ai/moss-work`. This is the shared bar every upgraded game is held to.
It governs the *game experience* (start flow, movement feel, feedback, sound, celebration).
It does not merge the app's two deliberate UI looks (RC child pastel / DS adult calm) — that stays the owner's call.

## The owner's pillars (2026-11-27)

1. **A complete world from the first second.** Menu, countdown, play and celebration all feel like one cartoon the child steps into.
2. **Real movement.** Physics with weight: acceleration curves, gears, spring steering, body roll and pitch. The reference feeling is Need for Speed, translated for ages 3–6 (no crashes, no punishment — bumps stumble, never destroy).
3. **A living voice.** Event-driven spoken encouragement in the child's language (Arabic first), from local pre-generated clips: nitro, overtakes, near misses, bumps, pickups, wins. Never a nagging loop — variants + cooldowns.
4. **Sound for every action.** Synthesised SFX + a music bed per game, engine/ambience tied to what is actually happening (RPM, speed, water, wind).
5. **Every game is its own world.** Distinct character, palette, fantasy and verb. Egyptian places, food, animals and humour where the game allows.
6. **Bilingual names.** Every game keeps an Arabic + English name pair (already true for 76 of 77 registered web games).

## Shared systems (cozy_kit)

- `voice.js` — **VoiceCoach**. Clip-first (`<base>voice/<lang>/<event>_<n>.mp3`), speechSynthesis fallback, silence last. Per-event cooldown (3 s), global gap (1.4 s), variant rotation, girl-aware Arabic swaps, mute-aware. Events: go, nitro, overtake, overtaken, near, bump, charge, win, lose, count (+ per-game extras).
- `audio.js` — existing SynthBase: SFX, beds, tunes. Engine voices must be driven by the sim (gear + rpm), not by wall-clock loops.
- Driving model (reference implementation: highway_race): spring-damper lateral control (k≈30, damping≈10.5, looser at speed), 5-gear longitudinal model (strong pull low in the gear, fade near the shift), firm engine braking, bump = brief speed scrub with a rising target, near-miss detection on clean close passes.
- Camera language (racers/chase games): FOV widens with speed (+7) and kicks on nitro (+5), lateral follow lag, bump shake ≈0.4 s decaying, look-ahead into bends.
- Particles: one pooled Points system per game (nitro flames, bump sparks, celebration confetti) — no per-frame allocation.

## Per-game identity

Each game gets a one-line identity in the work log when its batch starts: hero character, world, palette, signature verb, voice personality (which events it speaks on), and its AR/EN name pair. Names come from `lib/games/web_games/web_game.dart` registrations; new or renamed games must add both languages there.

## Verification bar per game

`npm test` + `npm run build` for the game (built game.js committed), `flutter analyze` + `flutter test` when Dart changes, a recorded gameplay video + a playable build delivered to the owner per finished game.
