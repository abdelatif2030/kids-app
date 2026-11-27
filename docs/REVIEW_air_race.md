# Review: «سباق الطيارات» Air Race — Phase 2B (Batch B2)

## What was reviewed
Audit card (racing_action.md): five courses named for Cairo/Alexandria landmarks flew
over 'lagoon', 'glacier' and 'sunset' worlds — snow and ice palettes under Cairo
landmarks — and the panoramas loaded by a positional cycle. On inspection the five
paintings are in fact place-true and in course order (viewed all five): pano1 = Cairo
Airport with the pyramids, pano2 = the New Capital's Iconic Tower, pano3 = Alexandria
Library + Qaitbay, pano4 = Montaza Palace, pano5 = the Baron Palace at sunset. The real
mismatch was the 3D worlds beneath them.

## Changed (game_src/air_race)
- `src/sim.js`: every course now carries an explicit `pano` field (loaded by name, not
  by cycle position), and worlds were re-matched to each painting's place and light:
  Cairo Airport lagoon → sunset (golden-hour painting), New Capital glacier → desert
  (new world), Alex Library sunset → lagoon (midday sea painting), Montaza lagoon
  (unchanged), Baron Palace glacier → sunset (sunset painting). No course flies over
  ice any more — no Egyptian landmark here is icy.
- `src/main.js`: FOG gains `desert` (warm haze); the desert ground is sand-coloured
  with a sandy hemisphere bounce; the pano loads from `course.pano`.
- `src/models.js`: RING_COLORS gains a desert entry (required — rings index by world).

## Tests & playtest evidence
- New regression test: every course names an existing pano file, no course is a
  glacier, and the three re-matched worlds are as designed. `npm test` 8/8; build ok.
- Real click-flow harness (phase2b_verify.mjs): clicked the New Capital course button —
  scene fog is the desert haze (f2ddb0) and pano2 is loaded and visible; Baron Palace
  loads pano5. Zero page errors. Frames at 3 sizes in
  ~/workspace/projects/audit/shots_phase2b/ — the New Capital frame shows sand and
  green oasis islands, no snow.

## Honest gaps
- The 'glacier' world code remains (unused by any course now) as the mountain-pass
  scenery set; removing it would be a bigger change than this data fix.
- Courses are still ~1.5 min with no championship structure (audit point) — length
  work belongs to the identity/length batches, not B2.

---

## Phase 2D — Egypt anchor: «جولة النيل الجوية / Nile Air Tour» (2026-11-27)

**What changed (name only):** the title «سباق الطيارات / Plane Race» →
**«جولة النيل الجوية / Nile Air Tour»**. The five courses were already
Egyptian landmarks with truthfully matched panoramas (Phase 2B):
Cairo Airport → New Capital → Alex Library → Montaza Palace → Baron
Palace. Courses, laps, rings and saves untouched.

**Tested:** `npm test` 9/9 (+1 anchor test); build green; real
click-flow verify PASS — course menu with the new title, race HUD with
lap/ring counters and the steer hint, frames at 3 sizes, 0 page
errors.

**Not done (Batch F):** a Luxor/Aswan southern leg is not built. Not
tested on a real device.
