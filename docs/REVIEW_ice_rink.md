# Review: Ice Rink Brawl (brief 24) against the original video

Video: 20261118-2131-15 (338x584 portrait, 87 s). Source `game_src/ice_rink`, bundle `assets/games/ice_rink/game.js`.

## What the original does
- Bright daytime snowy winter-market scene around a wooden-rimmed rink (not night).
- Top HUD: pause (left), pill "LEVEL 1 - TURN 1 / Your move" or "Goblins move", goblin portrait with "x 2" remaining (right).
- Three arctic heroes at the bottom (penguin Tuck, husky Fenna, owl Olwen); goblins at the top with a pink ring, heroes with cyan ring; a health bar over every body.
- Slingshot: pull a hero back, dotted aim line, release; bounce off walls, crystals and teammates for chain hits. Then the goblins take their turn (a pink arrow shows where one will go).
- ONE shared special meter "Gala Spirit" above the hero cards; hero cards show portrait, name, HP bar and "120 / 120".
- Each hero has a passive shown in a tooltip: Shield Wall (takes 30% less damage), Ricochet (each wall bounce before a hit adds +40% damage), Mending Glow (heals every ally she touches).

## Already matching
Turn-based slingshot physics, wall/crystal/teammate bounces, goblin turn, win by knocking out all goblins, tougher levels, bosses, special attacks.

## Differences found and fixed
1. Night sky and dark scenery -> bright daytime snowy colours.
2. One special meter per hero -> one shared "Gala Spirit" bar above the cards (sim: `state.gala`; filled by damage dealt/taken, hero chains and each round; any hero can use it once full; tap the bar to arm/disarm).
3. No passives -> Shield Wall (penguin, damage x0.7), Ricochet (fox, +40% per wall/block bounce before the hit, max 4 bounces), Mending Glow (bear heals an ally it touches by 10). Tooltip shown when a hero card is tapped.
4. HUD: top pill now "LEVEL n - TURN t / Your move | Goblins move", goblin counter "x N" at the right, hero cards show "hp / max". Tests updated and 4 new tests added (15 pass).

## Still different
- Third hero is a polar bear, not an owl (art is drawn in code; no owl art), so Mending Glow sits on the bear. Goblins are green goblins, not dark hooded figures. Hero HP numbers differ from the video (80/64/120).
- Flat top-down canvas instead of the video's slightly tilted 3D rink; no market stall scenery.
- No pink telegraph arrow for the goblins' next move.
- Not tested on a real phone.

## Checks
`npm test` 15 pass. Played in headless Chrome at 390x780: start, tooltip, slingshot drag/release, goblin turn, shared meter; no console errors.

---

## Phase 2D — Egypt anchor: «حلبة شرم / Sharm Ice Rink» (2026-11-27)

**What was wrong:** "Ice Rink Brawl" — a brawl against "goblins" in
chapters named for nowhere (Goblin Camp, Goblin King…), in a country that
has real ice rinks (Sharm, Mall of Egypt) and real snow (Saint Catherine).

**What changed (names/framing only — physics, HP, foe layouts, boss
flags, saves untouched):**
- Title: «معركة حلبة الجليد / Ice Rink Brawl» → **«حلبة شرم / Sharm Ice
  Rink»**; the penguin hero is now **Lulu (لولو)** the skater, per plan.
- The "goblins" are reframed as **the other team** in a friendly winter
  championship: turn banner, win/lose lines and the three special-move
  descriptions now say rivals/other team, and the flame dash "dazzles"
  instead of "burns".
- The 12 chapters are an Egypt winter tour: Sharm Start → Rink Friends →
  Snowball Match → Slush Pool → Mall of Egypt Walls → Captain Snow
  (boss) → The Big Match → Healers Rest → The Two Giants → The Little
  Swarm → Ice Team Camp → **Catherine Final** (boss). Arabic names match.

**Tested:** `npm test` 16/16 (+1 anchor test: tour names, exactly two
bosses, layouts unchanged); build green (one build failure on the way —
an apostrophe in "Healer's Rest" inside a single-quoted sim string —
caught by the test/build gate and fixed to "Healers Rest" before
verifying); real click-flow verify PASS on the rebuilt game — menu shows
«حلبة شرم», match HUD shows Lulu and "Your turn!", frames at 3 sizes,
0 page errors.

**Not done (Batch F):** the 16-chapter target with a between-chapter
figure-skating show is not built. The HP/knock-about physics are the
owner's game design and were not redesigned — only the framing language
moved from "brawl vs goblins" to a team championship. Not tested on a
real device.

---

## Phase 2E — Batch F: 16 chapters + skating-show finale (2026-11-27)

**Chapters 12 → 16.** The four new chapters are **appended** after the
Catherine Final as an encore winter tour — not inserted — because saves key
stars by chapter number and `unlocked` is a plain count: appending keeps
every existing save byte-correct (a 12-chapter save keeps its stars/unlocks;
chapters 13–16 stay locked until chapter 12 is beaten again under the
existing derived unlock rule in `main.js _result`).

The 16 chapters in order: 1 Sharm Start · 2 Rink Friends · 3 Snowball Match ·
4 Slush Pool · 5 Mall of Egypt Walls · 6 Captain Snow (boss) · 7 The Big
Match · 8 Healers Rest · 9 The Two Giants · 10 The Little Swarm · 11 Ice Team
Camp · 12 Catherine Final (boss) · **13 Alexandria Corniche Rink
(حلبة كورنيش إسكندرية) · 14 Genena Mall Rink (حلبة مول جنينة — Cairo's real
Nasr City rink) · 15 Catherine Champions Cup (كأس أبطال كاترين, boss) ·
16 Sharm Skating Show (عرض شرم للتزلج)**.

Each new chapter differs in the fields the sim consumes, along the 9–12
curve: ch13 = brute + 2 grunts + 2 throwers + shaman with 3 crystals and a
slush pool; ch14 = twin brutes + twin throwers + grunt + shaman behind two
ice walls; ch15 = king boss rematch with twin brutes, a shaman and twin
throwers; ch16 = five light performers and a festive 4-crystal ring.

**The show finale is a real variant, not just a rename.** The sim gained a
per-level `show` field (plus optional `hpMul`/`atkMul` overrides on the
level-data helper). In a show chapter the rival skaters are fellow
performers: their charge moves launch with `attacking = false`, so they
skate friendly laps and can never hurt a hero; their HP/attack are halved
via the level multipliers. The routine is won by gently bumping every
performer out (the existing clear-the-rink win condition), stars stay
completion/HP-based, and the chapter cannot be lost. Proven by test: the
robot wins ch16 with `taken = 0` and full team HP (264/264). The level
select gives the show chapter a 🎉 icon.

**Playtime estimate:** robot turn counts are 102 turns for chapters 1–12
and 49 for 13–16 (151 total); at ≈12 s per real turn (aim + shot + rival
phase for a child) that is ≈20 min before → **≈30 min after**, matching the
master-plan target.

**Tested:** `npm test` 19/19 (was 16): robot test extended to all 16
chapters and now asserts 16/16 wins; new regression tests pin
`LEVELS.length === 16`, the encore-tour/show structure, the unlock chain
across all 16, 12-chapter save migration, and the show's zero-damage rule;
the Phase 2D anchor test still pins the original 12 names/layouts verbatim.
Build green, game.js 138.6 KB. Click-flow verify (phase2e_verify) PASS at
3 sizes, 0 page errors — frames show the chapter-1 match HUD (Lulu & team
cards, Gala Spirit bar, "Your turn!") over the painted festival rink.
A scripted first→last playthrough from a fresh save (derived unlock rule)
won all 16 chapters in order and reached/won the show finale.

**Not tested:** on a real device; the chapter-select grid with all 16
buttons was not in the saved verify frames (menu text was verified by the
harness). No new voices or images were generated.
