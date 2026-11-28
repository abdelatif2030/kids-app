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

---

## Phase 2G — southern leg + postcards (2026-11-27)

**Southern leg (append-only):** four new courses appended after Baron Palace, taking the
tour south in its own geography: **06 «معابد الأقصر / Luxor Temples»** (desert, temple
canyon), **07 «أسوان والنيل / Aswan & the Nile»** (lagoon — river islands and felucca-blue
water), **08 «أبو سمبل / Abu Simbel»** (sunset over Lake Nasser, canyon), **09 «الغردقة
والبحر الأحمر / Hurghada & the Red Sea»** (lagoon finale, the longest course in the game).
Courses 1–5 are byte-identical data (freeze test); ids/order never renumbered; rings grow
gently 33→34→35→36 and every new course uses only the existing mechanics (rings, bridges,
pillars, arches, canyon). New courses reuse a shipped same-world panorama via the existing
`pano` field (the Phase 2F pattern — no image files added or touched); a bespoke painting
per southern stop can replace each with a one-line change.

**Postcards:** a menu-reachable album («✉️ بطاقات الجولة / Tour postcards», with an n/9
counter on the menu button). One postcard per stop, derived purely from the existing save
by the new pure `postcards(save)` in `src/sim.js` — **no new persistence**. A card is earned
by finishing its race (a star in the save; stars are completion-only here, never speed).
Earned cards show the stop's own panorama painting, name, stars and a true one-line fact
(ar+en, added as a `fact` field on every course). Locked cards are grayscale silhouettes
(«؟؟؟») and `postcards()` does not even hand out their fact. Finishing a stop for the first
time adds a «بطاقة جديدة وصلت» line to the results card. All new text is display-only via
the existing i18n — no new voice lines.

**Playtime (method: the game's own sim, seed 11 — robot-pilot finish times and
never-steer-child finish times, summed over the campaign):** before 5 courses: pilot
414.9 s, child 502.2 s. After 9 courses: pilot **811.6 s**, child **976.3 s** (≈ +95%).
Labelled child model (never-steer total × 1.25 for pauses/replays/looking around):
≈ 10.5 min → **≈ 20 min** for one full tour pass, before replays for stars/postcards.

**Tests:** `npm test` **14/14** (was 9/9). New pins: freeze of courses 1–5 field-for-field,
sequential append-only ids 1–9, unlock chain to the end of the leg, old-save migration
(a finished pre-2G save keeps stars/best/muted exactly, opens course 6, and shows its five
earned postcards), postcard lock/unlock derivation (fresh save leaks no fact), and a
scripted first→last campaign proof (pilot flies all 9 in order under the game's own
progression rule and collects every postcard). The pre-existing pilot/child tests now also
cover the four new courses (pilot wins all 9 with 0 bumps; a child who never steers still
finishes all 9). Two old expectations were updated for the longer tour only: `unlocked: 9`
is now a valid save value (the damaged-save test uses 42), and the 2D anchor test slices
the first five course names. Build green; built `game.js` **148,250 B** (was 139,208 B).

**Verify:** `node phase2g_verify.mjs air_race` → **PASS, 0 page errors** (real menu
clicks, race HUD live at 844×390 / 1024×768 / 1366×1024). Own seeded captures
(`phase2g_air_race_album.mjs`): fresh album = 9 silhouette secrets; seeded save (stops
1–6 finished) = 6 open postcards with facts/stars + 3 secrets; the Hurghada finale
entered by a real menu click with the race running. Frames in
~/workspace/projects/audit/shots_phase2g/.

**Honest gaps:** not played on a real device; the southern stops fly over reused
same-world panoramas (2F precedent), not bespoke Luxor/Aswan/Abu Simbel/Hurghada
paintings; the full 9-race campaign was proven by the sim robot and spot-entered in the
browser, not played end-to-end by hand; EN album strings verified via the shared i18n
table, screenshotted in AR only.
