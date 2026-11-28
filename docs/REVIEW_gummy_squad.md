# REVIEW — gummy_squad → «فرقة الحلويات / The Sweet Shop Squad»

Phase 2D, Batch E remainder (Egypt anchor). Design reference: master plan §3
(action row). Sim, waves, upgrades and saves are unchanged.

## What was wrong
- A generic candy land with zero Egyptian identity: "Gummy Squad", fruit-
  flavoured bears, and the same boss — King Donut — six stages in a row.

## What changed (names/framing only)
- Title: «فرقة الدببة الجيلي / Gummy Squad» → **«فرقة الحلويات / The Sweet
  Shop Squad»**.
- The three guardian bears are now **Kunafa, Basbousa and Qatayef**
  (كنافة، بسبوسة، قطايف) — the fruit names are gone from the UI; "bears"
  wording in upgrade/hint strings became "the squad" (الفرقة).
- **Boss roster** (new `BOSSES` table in sim.js, picked by stage): Date
  King → Honey Queen → Kunafa Giant, then the three return stronger via
  the existing stage multipliers. The boss HUD label and the intro banner
  now announce the actual boss ("عملاق الكنافة وصل!"); the win card no
  longer hard-codes King Donut.
- **Stage places** (new `STAGE_PLACES` table): The Sweet Shop → The Ramadan
  Tent → The Hara Bakery → The Moulid Market → Eid Night → The Eid Feast,
  shown in the menu stage selector next to "Stage n / 6".

## Kind rules
Already satisfied and re-verified in code: hazards telegraph ≥1 s before
they hurt, a lost run keeps its candies, stars = bears standing at the win,
no timer, no lives. Nothing to convert.

## Tested
- `npm test` 18/18 (+1 anchor test: six places, three distinct rotating
  bosses, clamped lookups).
- `npm run build` green.
- Real click-flow (phase2d_verify.mjs): menu shows the new title and
  "Stage 1/6 · The Sweet Shop"; Play reaches wave 1/2 gameplay; frames at
  844×390, 1024×768, 1366×1024; 0 page errors.

## Phase 2E — Batch F (longer world: 10 stages + recipe cards)

- **Stages 6 → 10.** The sweet tour continues past The Eid Feast:
  7 نصبة حلاوة المولد / The Moulid Sweet Stall, 8 دكان الحلواني الكبير /
  The Grand Halawani Shop, 9 سوق ليلة رمضان / The Ramadan Night Market,
  10 مائدة العيد الكبيرة / The Grand Eid Banquet. The boss roster keeps
  rotating (Date King → Honey Queen → Kunafa Giant ×3), and the finale's
  boss is named أبطال الحلويات الثلاثة / The Three Sweet Champions (the
  shared boss model, at the highest stage multiplier). The save clamp was
  widened (`stage` 0–9) and the unlock chain runs to stage 10.
- **Wave variety.** Stages 7–9 open with a new FOURTH_WAVE (spitters +
  a tank + bombers), and stage 10 opens with FINALE_WAVE, the richest
  single wave in the game (23 sweets). Wave counts per stage: 2,2,3,3,3,3,
  4,4,4,5. The HUD wave counter was hard-coded "/2" — now reads the run's
  real wave count. The existing linear `stageMul` curve was kept as-is:
  a pre-change probe and the extended suite both show the robot winning
  every stage 1–10 with the upgrades buyable by then (suite: 6/6 seeds at
  every stage), so no softening was needed.
- **Recipe cards.** New `RECIPES` table (one per stage, ar+en name +
  a 4-item ingredient line). Winning a stage collects its card
  (`applyResult`), the win card shows it ("📖 وصفة جديدة!"), and a new
  📖 Recipes button on the menu (with an n/10 counter) opens a book view:
  collected cards show name + ingredients, locked ones show the place
  name and a 🔒. The save gains a `recipes` field; old saves migrate
  safely — a missing field derives the recipes of the stages already
  beaten to open the saved stage, garbage entries are dropped, and a
  finished 6-stage save (stage 5) opens with recipes 1–5 and can keep
  touring to stage 10. Pure collection joy: no streaks, no pressure.
- **Playtime (estimate).** Method: robot clear-time sums per stage with
  campaign-grown upgrades — 425 s for the old 6 stages, 902 s for all 10
  (≈2.1× combat time). A child plays slower than the robot and browses
  upgrades/replays, so the honest estimate is ≈15 min → ≈30 min for a
  full tour, matching the master-plan target.
- **Tested.** `npm test` 21/21 (was 18): STAGES === 10, places/bosses for
  all 10, wave-count growth + richest finale, unlock chain to stage 10,
  6-stage save migration, recipe collect/no-duplicate/none-on-loss,
  robot wins all 10 stages. A scripted from-zero campaign (buying
  upgrades only with earned candies) won all 10 stages first try,
  collected all 10 recipes, and beat the finale. `npm run build` green,
  game.js 152.7 KB. Click-flow verify (phase2e_verify) PASS, 0 page
  errors; screenshots eyeballed: menu/stage bar, gameplay + pause at 3
  sizes, plus (via a seeded veteran save) the menu at "Stage 10/10 ·
  The Grand Eid Banquet" and the recipes book at 4/10 with locked rows.
- **Not tested.** The win card's recipe block in a real browser (covered
  by sim tests + code path, not screenshotted — the harness doesn't play
  a full stage); real device/WebView; the finale boss is a name/stat
  finale only — the shared boss model still renders for all bosses
  (pre-existing gap, unchanged).

## Not done / gaps
- Batch F target is 10 stages + recipe cards (≈30 min); the game still has
  6 stages — the tour names are in, the extra 4 stages are not built. ✅ Done in Phase 2E — Batch F above.
- The plan's carnival Eid-Night pano as a shop-street backdrop ring was not
  wired: the arena is a self-contained 3D candy land and carnival_race's
  shipped art folder holds character sheets, not a usable Eid pano — logged
  as an art gap rather than forced.
- Boss models: one shared boss model still renders for all three roster
  names (the owner's code art; names rotate, the silhouette doesn't).
- Art-batch sheets gummy_squad-*.png exist but need the owner's cutting
  step — not wired. Not tested on a real device.
