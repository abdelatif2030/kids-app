# REVIEW — ocean_defense → «قلعة مرجان البحر الأحمر / Red Sea Reef Fort»

Phase 2D, Batch E remainder (Egypt anchor). Design reference: master plan §3
(action row) + docs/OCEAN_DEFENSE.md. Sim, waves, boss numbers and saves
are unchanged; the plan called this one "naming + framing fix (no art
rebuild)" and that is exactly what landed.

## What was wrong
- A generic "Ocean Defense" with seven levels named for nowhere (Sunlit
  Shallows, Ocean Floor…) and a hero with no name; the sim comment even
  claimed "five levels" while shipping seven.

## What changed (names/framing only)
- Title: «دفاع القلعة البحرية / Ocean Defense» → **«قلعة مرجان البحر الأحمر
  / Red Sea Reef Fort»**.
- The crowned clownfish is now named **Marjan (مرجان)** — in the sim header
  and in a new menu subtitle: "Marjan the clownfish guards the reef fort".
- The 7 levels are a Red Sea marine-park tour (ids/boss HP unchanged):
  Hurghada Shallows → Giftun Island → Ras Mohammed → Dahab Reefs → The
  Blue Hole → Tiran Island → Red Sea Deep. The shipped bg_reef1–7 plates
  were already Red-Sea-looking and already wired 1-to-1 — nothing to move.
- The giant octopus is reframed as a **friend-rival**: "عم أخطبوط المنافس /
  Octo the rival", who "arrives for the challenge" instead of menacing.

## Kind rules
Already satisfied: a lost level is "No worries! Try again", progress and
shells are kept, no timer/lives. Verified in code; nothing to convert.

## Tested
- `npm test` 9/9 (+1 anchor test: seven Red Sea sites, ids and boss
  numbers unchanged).
- `npm run build` green.
- Real click-flow (phase2d_verify.mjs): menu shows the new title and the
  Marjan subtitle over the level map; Play reaches level 1 gameplay;
  frames at 844×390, 1024×768, 1366×1024; 0 page errors.

## Phase 2E — Batch F (longer worlds)

- **10 reefs.** Three real southern Red Sea sites continue the tour after
  Red Sea Deep: Marsa Alam (boss 240) → Elphinstone Reef (280) → Brothers
  Islands (320), extending the boss curve 40→320. The new reefs differ in
  more than HP through fields the sim already consumes per level index:
  wave size/mix (141/160/177 swimmers across the 3 waves vs 124 at Red
  Sea Deep, more puffers/fast/jellies), tighter spawn gaps, tougher and
  faster enemies, and more octopus helpers. Only 7 bg_reef plates exist;
  the new reefs reuse plates 1–3 via the existing `(i % 7) + 1` cycle.
- **Reef-guide album** (📖 دليل الشعاب on the menu): all 10 reefs as
  cards. Locked entries are greyed/shadowed (silhouette fish, 🔒 ؟؟؟,
  "still a secret"); completing a reef (stars > 0) reveals its fish,
  name (ar+en) and one true, simple fact (ar+en, stored as data on the
  level). Unlock logic is a pure sim export (`guideEntries`) and pinned
  by tests. Existing art/emoji only — no new images.
- **Saves migrate:** unlocks/stars were already derived from LEVELS in
  `normalizeSave`; a 7-level save keeps every star and unlocks reef 8
  (Marsa Alam) — pinned by a migration test.
- **Beatable:** the robot wins every level 3/3 seeds with the shop
  upgrades a player can own by then, and a scripted campaign test plays
  reef 1 → 10 in order (unlock chain + album completion asserted).
- **Playtime:** robot campaign sum 6.8 min (7 reefs) → 10.0 min (10
  reefs); at child pace (aiming, power choices, retries, shop/album
  between reefs, ≈×3 + ~30 s/reef of menus) ≈ 27 min → ≈ 40 min,
  matching the master-plan target.
- **Tests/build/verify:** `npm test` 14/14 (was 9; +5 Batch F tests, the
  old 7-site anchor test now pins the first seven unchanged). Build
  green, game.js 166.4 KB. phase2e_verify PASS, 0 page errors, frames
  at 3 sizes; album screenshotted by real clicks in fresh (all locked)
  and seeded (3 unlocked) saves — clean both ways.
- **Not done:** spoken facts — no voices generated (rule). 20 lines
  (10 reefs × ar/en) are listed as ADD TO INSTINCT in the Phase 2E log
  fragment; album playback wiring waits for those clips. New reefs have
  no dedicated bg plates (reuse 1–3) — an art decision for the owner.
  Not tested on a real device.

## Not done / gaps
- Batch F target: 10 reefs + a reef-guide album with one spoken fact per
  fish (≈40 min). The tour has 7 named reefs; 3 more reefs and the album
  are not built, and the spoken facts would be new voice lines (none
  requested yet — the album doesn't exist to attach them to).
  → **Done in Phase 2E — Batch F above** (album + 10 reefs built; the
  spoken half is queued as ADD TO INSTINCT lines, per the no-voice rule).
- Voice state at audit time was partial for this game; lines install via
  the standing voice pipeline, not this phase.
- Not tested on a real device.

## Reef-guide narration wired (2026-11-27, add-to-instinct delivery)

The 20 reef-fact clips arrived (`voice/<lang>/reef1_1..reef10_1.mp3`,
narrator) and the Phase 2E reef-guide album now speaks: every unlocked
card carries a green «🔊 اسمع الحكاية / Hear the fact» pill that plays
that reef's clip in the current language via the new VoiceCoach
`playClip()` (direct play for user-requested narration — say()'s event
cooldown/gap would swallow rapid card browsing; a missing file falls
back to speaking the on-card fact text). Clip naming is a pure sim
helper, `reefClipName(level)` → `reef<id>_1`.

- **Shell-collision fix found by the verify harness:** a bare-'🔊'
  button is re-skinned by the app shell's shared_controls.js as the
  sound toggle and pinned to the screen corner (stacking all three
  cards' buttons on one spot). The button is therefore a worded pill —
  its text is not a bare emoji and its aria-label is not sound/mute —
  and a test + the harness both pin that the shell leaves it alone
  (no `data-sk` attribute).
- Tap target: `min-height: max(52px, …)` — measured 52px at 844×390,
  84px at 1024×768, 113px at 1366×1024.
- Tests: `npm test` 18/18 — new `test/voice.test.js` pins the
  reef→clip mapping for all 10 reefs, that all 20 clips are installed,
  playClip's per-language URL + mute/lock behaviour, and the wiring.
- Build green (game.js 167.6 KB). Verify
  (~/tools/recorder/voice_wire_verify.mjs): real menu click → album →
  3 speaker pills for a save with 3 reefs won → real mouse tap on reef
  1's pill fetched `voice/ar/reef1_1.mp3` with HTTP 200 and the audio
  element reached readyState 4 (7.1 s, playing); a pre-existing event
  clip (win_1) progressed its clock normally as an environment
  control. 0 page errors at all 3 sizes; album frames eyeballed.
- Not tested on a real device; locked cards intentionally have no
  button (their fact is still a secret).
