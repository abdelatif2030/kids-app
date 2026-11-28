
---

## Phase 2D — Egypt anchor: «عيلة الفنك / Fennec Family Rescue» (2026-11-27)

**What was wrong:** a generic fox family crossing generic seasons
(Summer Meadow, Autumn Woods, Snow Summit) — while Egypt has its own
iconic desert fox, the fennec, and a whole Western Desert of oases.

**What changed (names only — ids, seasons, lane layouts, speeds, saves
untouched):**
- Title: «أم الثعلب… / Fox Family Rescue» → **«عيلة الفنك / Fennec Family
  Rescue»** — Mama is a fennec now, Egypt's own desert fox.
- The six journeys cross the Western Desert: Siwa Oasis → Bahariya Oasis
  → The White Desert (its white chalk formations wear the "winter" look
  honestly) → Farafra Oasis → Dakhla Oasis → Gilf Kebir Plateau. The
  season keys still drive the palettes; only the places became true.

**Tested:** `npm test` 7/7 (+1 anchor test: six desert journeys, seasons
and ids unchanged); build green; real click-flow verify PASS — menu
shows «عيلة الفنك» over the journey map, Play reaches the level-1
crossing HUD, frames at 3 sizes, 0 page errors.

**Not done (Batch F):** the 10-journey target with dens between journeys
is not built; the fox models are not re-eared into true fennecs (that is
model work, not naming). Not tested on a real device.

## Phase 2F — Batch F: 12 journeys + the Berry Picnic Album (2026-11-27)

**Levels 6 → 12.** Six journeys appended (ids 7–12; levels 1–6 are
byte-for-byte unchanged — a test now pins their full objects). The family
turns home: the Black Desert (rail country, 4 rail rows) → Wadi El Hitan
(long rivers; whale fossils) → Fayoum Oasis (canal country: 10 river +
5 lily rows, fewest roads) → Nile Bank Reeds (a 7-row lily-pad maze) →
Delta Farm Roads (tractor country: 17 road rows) → Delta Canal Den
(50 rows, everything mixed, the new home). No place repeats across the
12. Each new level differs in lane signature, not just numbers (a test
asserts all six r/w/t/l mixes are distinct); seasons continue the
summer/autumn/winter palette cycle; speeds creep gently 1.52 → 1.66
against level 6's 1.5. The cub parade keeps growing on its own formula
(2 + id → 9–14 cubs). Menu map now shows all 12 nodes (4×3, smaller
nodes) and fits 844×390.

**Berry Picnic Album.** A menu-reachable album (🧺 button under Play,
following ocean_defense's reef guide / deep_sea's album): one card per
journey with a picnic moment — place name ar+en plus one true, simple
line ar+en (Siwa dates & olives, Bahariya's warm springs, the White
Desert's mushroom rocks, Gilf Kebir's swimming paintings, Wadi El
Hitan's desert whales, Lake Qarun's birds, Delta canals…). Pure sim
exports `PICNIC` / `picnicEntries(save)` / `picnicClipName(level)`; a
card unlocks when its journey is completed (stars > 0) — no new
persistence, so an old 6-level save shows its six picnics open and the
new six silhouetted with the «لسه سرّ!» line. Unlocked cards carry a
listen button wired to `voice/<lang>/picnic<id>_1.mp3` (clips not yet
recorded — see the add-to-instinct table in the Phase 2F fragment;
until they land the kit's spoken fallback reads the line).

**Playtime (method: the test robot's median win time per level over
seeds 1–4, summed; the robot already plays cautiously — it waits for
traffic and fetches every cub and berry — so the child estimate is
robot ×2 + 20 s/level for menus, results and the album):** robot
231.5 s → **565.5 s** (new levels 43.5 / 53.5 / 43 / 31.5 / 92 / 70.5 s);
child estimate ≈9.7 min → **≈23 min**, against the ≈25 min plan target
(a pessimistic ×3 model gives ≈32 min).

**Tested:** `npm test` 11/11 — the robot brings every cub home on all
12 levels (levels 7–12: home 4/4 seeds, all cubs 4/4; level 6 keeps its
pre-existing 3/4), first-6 unchanged, unlock chain 1→12, old-save
migration (stars/berries/muted intact, level 7 locked until level 6 is
earned), album lock/unlock incl. the old-save split 6 open / 6 secret.
Build green: game.js 127.2 KB (was 117 KB; ≤200 KB target). Real
click-flow verify PASS, 0 page errors; frames eyeballed at 844×390 /
1024×768 / 1366×1024; album screenshotted fresh (all secret) and with a
seeded old save (6 open with correct stars) via the real menu button.

**Not tested:** on a real device; the new levels played by a human
child (robot only); picnic voice clips (not recorded yet). The fox
models are still not re-eared into true fennecs (pre-existing note).

## Certification Sweep A — fox_family (2026-11-27/28)

Harness: `~/tools/recorder/cert_dsfx_run.mjs` + `cert_dsfx_tail.mjs` (real menu click-flow, seeded saves via
`window.crStart`, frames in `~/workspace/audit_dsfx/fox_family/c{1,2,3}/`). A cycle = menu at 844×390 /
1024×768 / 1366×1024 + portrait 390×844, Play click-flow into journey 1, EVERY journey entered by clicking its
real map node, start+mid frames at 1024×768, journey 12 at all sizes, picnic album fresh + full-save, old
pre-2F save load, keyboard input, rAF perf plain + 4× CPU throttle, `npm test`.

### Level inventory (12 journeys; lanes: g grass, r road, w river, t rail, l lily, d den)

| # | Journey | Season → Sweep A tint identity | Rows (lane mix) | Speed | Cubs | Signature |
|---|---------|-------------------------------|-----------------|-------|------|-----------|
| 1 | واحة سيوة / Siwa Oasis | summer — original green | 19 (g10 r5 w1 t1 l1) | 1.00 | 3 | gentle opener |
| 2 | الواحات البحرية / Bahariya Oasis | autumn — original | 23 (g9 r7 w3 t2 l1) | 1.15 | 4 | first twin rivers |
| 3 | الصحراء البيضاء / The White Desert | winter — original white | 25 (g9 r7 w4 t3 l1) | 1.25 | 5 | snow palette, floes |
| 4 | واحة الفرافرة / Farafra Oasis | summer — **sandy-gold desert edge** | 31 (g12 r9 w4 t4 l1) | 1.35 | 6 | rail + river mix grows |
| 5 | واحة الداخلة / Dakhla Oasis | autumn — **olive-gold** | 37 (g13 r12 w5 t5 l1) | 1.45 | 7 | balanced long crossing |
| 6 | هضبة الجلف الكبير / Gilf Kebir Plateau | winter — **steel-blue white** | 42 (g14 r12 w8 t6 l1) | 1.50 | 8 | river-heavy plateau |
| 7 | الصحراء السوداء / The Black Desert | summer — **dark volcanic green-grey** | 45 (g20 r12 w6 t4 l2) | 1.52 | 9 | rail country (4 rail rows) |
| 8 | وادي الحيتان / Wadi El Hitan | autumn — **dry yellow-green** | 44 (g19 r11 w7 t4 l2) | 1.55 | 10 | long rivers |
| 9 | واحة الفيوم / Fayoum Oasis | winter — **soft lake green-white** | 45 (g20 w10 l5 r7 t2) | 1.58 | 11 | canal country, fewest roads |
| 10 | ضفاف النيل / Nile Bank Reeds | summer — **deep lush Nile green** | 44 (g19 l7 r10 w4 t3) | 1.60 | 12 | 7-row lily-pad reed maze |
| 11 | طرق مزارع الدلتا / Delta Farm Roads | autumn — **rich farm green** | 45 (g20 r17 w4 t2 l1) | 1.63 | 13 | tractor country, 17 road rows |
| 12 | بيت الدلتا على القناة / Delta Canal Den | winter — **cool grey-blue** | 50 (g20 r11 w9 t5 l4) | 1.66 | 14 | everything mixed, the new home |

Every journey's lane signature is distinct (2F test) and, after this sweep, every journey's background palette
is distinct too (test below). Difficulty rises by rows, traffic speed and mix — no timers, no lives; a bump
costs a cub-drop, never a fail. Stars: den / every berry / no bumps.

### ❌ found in cycle 1 and fixed

1. **Same-season journeys shared one background palette.** The renderer keyed sky, fog, ground and grass-lane
   colours by season only, so Siwa ≡ Farafra ≡ Black Desert ≡ Nile Bank (all "summer") were the same
   background with different lane layouts — worst at journey 7, where the *Black Desert* rendered bright
   summer green. Fix (commits `febf0705` then `35b6e504`): a pure `LEVEL_TINTS` table in sim.js (kept apart
   from LEVELS like PICNIC, so level objects stay byte-identical) gives each journey its own sky + ground +
   grass colours; main.js applies sky/fog/ground from the tint and passes the grass tint into
   `laneTexture` (50% blend, build-time canvas only). Journeys 1–3 keep the exact original season colours.
   First attempt's deltas were too subtle on the ground plane alone (cycle-2 spot-check caught this before
   the cycle completed; the cycle was discarded, the tint strengthened to include the grass lanes, and the
   cycle re-run). Verified in the re-run cycle-2/3 frames: Farafra is sandy-gold, the Black Desert is dark
   volcanic green-grey, Nile Bank is deep lush green — no two journeys look alike. Regression test pins all
   12 tint triples distinct and skies distinct within each season.
2. Nothing else failed in cycle 1: fresh Play flow, all 12 node-click entries with correct HUD (berries ٠/٥,
   cubs growing ٠/٣ → ٠/١٤), album fresh 12/12 locked with no listen buttons on locked cards, album full 12
   open with 12 listen buttons, old pre-2F save loads with stars intact (nodes 1–6 starred, journey 7
   unlocked by star-derivation, 8–12 locked), 0 page errors everywhere, menu clean at all 4 sizes incl.
   portrait (title fits — no clipping, unlike deep_sea's).

### Cycles

- **Cycle 1 ❌** — the shared-palette defect above (1 ❌ class, affecting 9 of 12 journeys' backgrounds).
- **Cycle 2 ✅ zero ❌** — full pass on the strengthened build in a single run: `DONE failures=0`. All 12
  journeys entered via map nodes, tint frames eyeballed (1 vs 4 vs 7 vs 10 all clearly different), album
  fresh/full as above, old save clean, `npm test` 12/12.
- **Cycle 3 ✅ zero ❌** — full repeat, `DONE failures=0`. Extra evidence this cycle: the album listen click's
  network log shows the button fetching `voice/ar/picnic1_1.mp3` → **404** (clip not yet recorded) and the
  kit falling back to the spoken line — exactly the designed pending-Instinct behaviour, now proven end to end.
  Two consecutive clean cycles (2+3), 3 cycles total — **CERTIFIED**.

### Final review (as a first-time viewer, cycle-3 frames)

The journey reads as a real trip now: green Siwa → amber Bahariya → white desert → golden Farafra → olive
Dakhla → steel-blue Gilf Kebir → dark Black Desert → dry Wadi El Hitan → pale Fayoum canals → lush Nile
reeds → farm-green Delta roads → cool canal den. HUD chips, goal line and the arrow pad never cover the fox
or the cubs; the big mascot overlay sits clear of traffic. Weakest feel: the crossing verb never changes
across 12 journeys (hop, wait, ride) — variety is carried by lane signatures, tints and the growing cub
parade, which is honest Crossy-Road-genre design for ages 3–6, but a future set-piece per region (2F's
deferred dens idea) is where new feel would come from.

### Length

Unchanged by this sweep (presentation-only): 2F's robot measurement stands — robot 565.5 s for all 12
journeys, child estimate ≈ **23 min** vs the ≈25 min plan target (robot re-proven in this sweep's `npm test`:
it brings every cub home on all 12 journeys). Within model noise of the target; no owner question raised in 2F
was reopened by anything play revealed here.

### Performance

- Changed code is build-time only (tint table lookup, one canvas texture blend per lane type per level
  build); no per-frame work added. `npm run build` game.js **130.6 KB** (≤200 KB budget).
- Headless rAF (SwiftShader, shared 1.5-CPU cell, sibling agents running): cycle 2 median/p90 1116.6/1383.3 ms
  plain, 1500/2116.6 ms at 4× CPU throttle; cycle 3 1566.7/2416.6 ms plain, 1899.9/2633.4 ms throttled;
  cycle 1 measured 3516.5/4699.9 and 4283.1/5316.5 under heavier contention. The spread across identical
  builds proves these numbers track host contention, not the game. **No device fps claim is made.**
- Tests: `npm test` **12/12 pass** (11 from 2F + 1 new Sweep A tint regression).

### Voice / audio checks

- Picnic clips `picnic1–12` (ar/en): **absent** from both voice folders (only the 12 event clips per lang are
  on disk) → the album listen buttons fetch, 404, and fall back to the kit's spoken reading of the line
  (network-proven in cycle 3). The 24 lines stay on the add-to-instinct list below; when they land, the same
  buttons play them with no code change.
- Event clips (go/pickup/bump/near/charge/win) exist ar+en; VoiceCoach cooldowns are the shared kit's
  (9 s per-event / 4 s global), untouched.

### Add to instinct (unchanged from 2F — still unrecorded)

fox_family, install to `assets/games/fox_family/voice/<lang>/picnic<id>_1.mp3` (family narrator voice):
1 ar «في سيوة بنقعد تحت النخل وناكل تمر وزيتون من الواحة نفسها.» / en "In Siwa we sit under the palms and eat dates and olives from the oasis itself." ·
2 ar «في البحرية عيون مية دافية طالعة من الأرض، بنرتاح جنبها بعد الطريق.» / en "Bahariya has warm springs bubbling out of the ground, and we rest beside one after the road." ·
3 ar «صخور الصحراء البيضاء البيضا شكلها زي فطر عملاق وحيوانات نايمة!» / en "The white rocks of the White Desert look like giant mushrooms and sleeping animals!" ·
4 ar «الفرافرة من أهدى واحات مصر، وغروبها بيخلي الرمل دهبي.» / en "Farafra is one of the quietest oases in Egypt, and its sunset turns the sand to gold." ·
5 ar «في الداخلة بيوت قديمة من الطوب اللبن عمرها مئات السنين.» / en "Dakhla has old mud-brick villages that are hundreds of years old." ·
6 ar «في الجلف الكبير ناس من آلاف السنين رسموا نفسهم على الصخر وهم بيسبحوا!» / en "At Gilf Kebir, people thousands of years ago painted themselves swimming on the rock!" ·
7 ar «تلال الصحراء السوداء متغطية بصخور سودا من براكين قديمة قوي.» / en "The hills of the Black Desert are covered in black rocks from very old volcanoes." ·
8 ar «في وادي الحيتان عظام حيتان في قلب الصحرا، لأن البحر كان هناك زمان!» / en "Wadi El Hitan has whale bones in the middle of the desert, because the sea was there long ago!" ·
9 ar «الفيوم فيها بحيرة قارون، وطيور كتير بتيجي تقعد على شطها.» / en "Fayoum has Lake Qarun, and lots of birds come to sit on its shore." ·
10 ar «البوص الطويل بيكبر على ضفاف النيل، والضفادع الصغيرة بتستخبى بينه.» / en "Tall reeds grow on the banks of the Nile, and tiny frogs hide among them." ·
11 ar «أرض الدلتا خضرا طول السنة، عشان مية النيل بتسقيها بقنوات صغيرة.» / en "Delta land stays green all year, because Nile water feeds it through little canals." ·
12 ar «وصلنا! بيتنا الجديد جنب قناة في الدلتا، ودي أكبر سلة توت في الرحلة كلها.» / en "We made it! Our new den sits beside a Delta canal, and this is the biggest berry basket of the whole journey."

### غير مؤكد (unconfirmed)

- Real-device / iPhone WebView performance and touch feel — headless SwiftShader only; rAF numbers above
  are host-contention artefacts.
- No human listened to the audio in this sweep; the picnic fallback is the kit's interim spoken voice, not
  the recorded narrator.
- Journeys 7–12 were click-entered and observed live, and are robot-proven end-to-end in the sim tests, but
  no human played a full journey 12 crossing in the browser; the results screen after journey 12 specifically
  was not screenshotted (the `last` branch is pre-existing, length-generic code).
- The fox models are still not re-eared into true fennecs (standing note since Phase 2D — model work, not
  a defect found by this sweep).
- Draw calls / triangles not read from the live renderer (not exposed); perf evidence is build-time-only
  changes + frame behaviour.
