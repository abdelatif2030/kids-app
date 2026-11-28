# REVIEW — zombie_rooftop → «سطوح القاهرة / Cairo Rooftops»

Phase 2D, Batch E remainder (Egypt anchor). Design reference: master plan §3
(action row) + docs/ZOMBIE_ROOFTOP.md (owner's original design — sim, waves,
perks, shop and the health-based star rule are his and are unchanged).

## What was wrong
- The game had no Egyptian identity at all: a generic "Zombie Rooftop
  Shooter" with military hardware names (bomb/rocket launchers, a gun icon)
  in a kids' app, and eight roofs named for nowhere (Sunset Blocks, Snowy
  Tops…).

## What changed (display/framing only — sim, balance, saves untouched)
- Title: «البقاء على قيد الحياة / Zombie Rooftop Shooter» → **«سطوح القاهرة /
  Cairo Rooftops»**.
- The invaders are now **night-ghouls (عفاريت الليل)** scared of light:
  every user-visible "zombie" string (kind names, tips, HUD counter) renamed;
  internal identifiers and the owner's models/portraits are untouched.
- Weapons reframed as **light & fireworks tools** (ids unchanged, so saves
  and crate drops are unaffected): blaster 🔫 → light torch 🔦, bomb
  launcher 💣 → light-orb launcher 🔆, rocket 🚀 → sparkler launcher ✨,
  fireworks 🎆 kept. "Weapon" wording in the UI → "light tool"; the power
  perk → "stronger light".
- The 8 roofs are now a Cairo → Alexandria tour (ids/looks/waves identical):
  Downtown → Islamic Cairo → Zamalek Gardens → Tahrir Neon → New Capital
  Crane Yard → Alexandria Winter → Montazah Tower → Qaitbey Citadel finale.
- The neon-roof sign "ZOMBIE PIZZA" → "NILE PIZZA / بيتزا النيل".

## Kind rules
Already kind by the owner's design and verified in code: the hero is only
"knocked out", coins are kept, retry is one tap, no timer, no lives counter,
no harsh game-over. Stars: 1 = cleared (completion), 2/3 = health kept —
an achievement grade from the owner's doc, left as designed.

## Tested
- `npm test` 10/10 (robot clears all 8 roofs; +1 new anchor test asserting
  the Cairo roof names and that weapon **ids** did not change).
- `npm run build` green; game.js 196.5 KB (shared engine).
- Real click-flow (~/tools/recorder/phase2d_verify.mjs): menu shows the new
  title, Play → roof card → Start reaches wave 1/3 gameplay; frames at
  844×390, 1024×768, 1366×1024 eyeballed (audit/shots_phase2d/); 0 page
  errors.

## Not done / gaps
- Batch F target (≈60 min incl. endless): the 8 roofs + endless already
  exist; a second-district roof set is NOT added here — the Alexandria arc
  is in the names of roofs 6–8, not new geometry. Logged for Batch F.
- The ghoul models are still the owner's zombie models/portraits (art is
  never replaced); the reframe lives in names and framing.
- Art-batch sheets zombie_rooftop-*.png exist in ~/workspace/art_batch/out/
  but are multi-cell sheets needing the owner's cutting step — not wired.
- Not tested on a real device; headless fps is SwiftShader-bound and not
  reported as a device number.
