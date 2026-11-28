
---

## Phase 2D — Egypt anchor: «معسكر سانت كاترين / Saint Catherine Camp» (2026-11-27)

**What changed (name only):** the title «معسكر الشتاء / Winter Camp» →
**«معسكر سانت كاترين / Saint Catherine Camp»** — the camp now sits on
Egypt's one truly snowy mountain, which makes the blizzards, the fire
and the frozen gate honest. Sim, builds (cabin → workshop → sawmill →
greenhouse → watch tower → supply sled), costs and saves untouched.

**Tested:** `npm test` 6/6 (+1 anchor test; one wrong count in my first
draft of it — BUILDS has six entries, not five — was caught by the gate
and fixed). Build green. Click-flow: menu title via the harness;
gameplay confirmed with a single-click check — camp HUD with the cabin
build progress and fire-warmth prompts, 0 page errors; menu frames at
3 sizes.

**Not done (Batch F):** a second camp site (Sinai coast / White Desert)
and a monastery-visit story beat are not built. Not tested on a real
device.

## Phase 2G — the summit camp: «معسكر القمة / Summit Camp» (2026-11-27)

**What changed:** the Batch F remainder item is built. Once the supply
sled is finished, the camp climbs to the summit of Saint Catherine
itself: three builds appended to the ladder in the game's existing
format — **summit trail** (درب القمة, 60 logs), **summit stone shelter**
(ملجأ القمة, 68) and **summit beacon** (منارة القمة, 76). Lighting the
beacon — not the sled — now opens the frozen gate. The six original
builds are frozen byte-identical (ids, order, Arabic/English names, log
costs), pinned by a freeze test. The +8-logs-a-step increments continue
the existing curve exactly (…42 → 52 → 60 → 68 → 76): the summit is the
gentle finale, no new mechanic, no harsher cold — storm, warmth and
slow-down rules untouched. A `summit` event fires once when the sled is
done and announces the climb (ar/en hint, existing built sound + voice
clip).

**Look (code-drawn only, no art touched):** a grey granite ridge with
snow-capped peaks rises behind the camp once the sled is built; the
three summit builds stand on it — a dotted cairn trail with red flags,
a granite-block shelter with a warm window, and a stone beacon tower
whose lamp glows, with a sunrise glow behind it once lit. Save gains a
`summits` counter (old saves migrate to 0, best/finished preserved —
tested); the result card shows it. Small fix in passing: `greenhouse`
and `tower` had no i18n entries, so the HUD showed the raw keys — both
names now render in Arabic and English.

**Playtime (honest, stated method):** the test-suite robot (walks,
chops, delivers, auto-hires helpers and bag upgrades, seed 4, sim-time
at 30 steps/s) finished the campaign in **196 s / 170 logs before →
332 s / 374 logs after** (+69% robot time; a child's real time grows by
roughly the same share). No padding: the summit tier is three builds,
not a second game.

**Tested:** `npm test` **10/10** (was 6/6): freeze of the original six,
unlock chain (strict order, summit event exactly once after the sled,
gate only after the beacon), scripted first→last campaign proof
(robot, all nine builds, 374 logs), gentle-curve assertions, old-save
migration. `npm run build` green — game.js **117,837 bytes** (was
111,855; ≤200 KB kept). Verify harness: **PASS, 0 page errors**, real
menu clicks at 844×390 / 1024×768 / 1366×1024. Seeded captures of the
summit at stage 6/8/9 eyeballed: ridge + snow caps behind the camp,
Arabic HUD names («درب القمة ٢٠/٦٠», «منارة القمة ٤٠/٧٦»), beacon ghost
at the site, gate text after the beacon.

**Not done / gaps:** the second camp site (Sinai coast / White Desert)
and the monastery-visit story beat from Batch F remain unbuilt — this
phase delivered the summit camp only. The ridge builds sit at the top
edge of the screen when standing at the site (same as the pre-existing
finished-build row); they are fully visible when the player walks
north. Not tested on a real device; sound not heard by a person.
