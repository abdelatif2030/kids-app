# Review: «برج الأبطال» Hero Tower vs the owner's original video (brief #16)

Video: `20261118-1756-33.2358567.mp4` (322x624 portrait screen recording, 3.5 min of a "Spire Breaker"-style tower game). Checked by extracting frames with ffmpeg and playing the current build in headless Chrome (844x390, 390x780) with real mouse input.

## What the original does
- A tower cross-section, narrow, three to four floors on screen at once. The hero's floor is in the lower half, the cleared floor below it, two floors above it. The camera scrolls up when the hero climbs.
- Floors above: the next floors show their real foes with numbers; later floors are dark silhouettes (the unknown).
- Ladders ZIG-ZAG: each floor's ladder is on the opposite side from the one the hero climbed up. A hatch in the floor shows where he arrives. An orange up-arrow shows on the ladder when the floor is clear.
- The hero starts at the left of floor 1 with the castle gate and green grass underneath. He stands next to the foes, small number with a sword icon over his head.
- Tap a foe: the hero walks to it, slashes (blue crescent), absorbs its power ("+N" floats). He does NOT walk back home; he walks from foe to foe. Green number = weaker, red/pink = stronger. A stronger foe ends the try (card "Almost there! That foe was stronger than you", Power / Floors, Try again).
- Items: purple crystal "+N", gold coin "x2/x3" (the multiplier), sword, potion, key and chest.
- HUD: ONE purple pill (sword + power | "FLOOR n/N" + green progress bar), sound button; bottom pills "TAP A GREEN FOE" and the goal "REACH THE STONE TROLL"; a gold banner "DEFEAT WEAKER FOES / absorb their power" at the start; "BOSS!" for the big foe; "STAGE CLEAR!" after a boss; "VICTORY!" at the end; the dragon on the roof of the tower.

## Differences found in the previous build
1. Tower too wide and too tall for the screen: only ~1.5 floors visible, huge sprites; no sense of a tower.
2. Hero always walked back to the left home position after every tap; ladders always on the right.
3. No view of the next floors (no preview, no silhouettes), no ground base or gate.
4. The crystal was the multiplier; in the video the CRYSTAL ADDS and a gold COIN multiplies.
5. Foes were flipped to face away from the hero (weapon on the wrong side).
6. HUD was two separate pills; no persistent goal pill; no "defeat weaker foes" banner; no stage-clear / victory banner.
7. The win/lose cards overflowed a landscape phone (390 px high); the win card had a scrollbar.

## What was fixed (game_src/hero_tower, rebuilt to assets/games/hero_tower/game.js)
- New geometry: narrow tower (3:1 floor ratio), hero's floor in the lower half, floor below + two above visible, works in landscape and portrait.
- Zig-zag ladders with a hatch on the arrival floor, orange arrow when the floor is clear, stone base with the castle gate and grass under floor 1.
- Previews: the next floor shows its foes and numbers, the one after is a dark silhouette, further floors dark.
- Hero stays where he fought, faces the target, walks foe to foe, slash crescent effect; runs to the ladder on the side of that floor.
- Foes face the hero. Tap hit area at least 5.5 units so small foes stay easy to tap.
- Crystal = additive (+N, purple), new gold coin = multiplier (x2/x3). `sim.js` has a new item type `mult`; roof uses a coin; tests updated and extended (13 pass).
- One purple HUD pill, persistent goal pill (troll / sorcerer / dragon / "beat the boss"), start banner with sub line, STAGE CLEAR and VICTORY banners.
- Compact win/lose cards for landscape.

## Verified
- `npm test`: 13 pass. Played a whole chapter by the planned order in headless Chrome: reaches the win card, 3 stars, no console errors; wrong tap shows the "Almost there" card without overflow (English and Arabic); portrait 390x780 checked.

## Still different (not done)
- Characters are still drawn in code (not the video's pixel-art knight/orc/skeleton sprites); pictures could be added through the art loader later.
- The original restarts the whole run after a loss; ours retries the floor (kinder for children, intended).
- The original has bombs, a "level up" armor change for the hero (gold sword after the troll) and an endless "the spire rises higher" loop; ours has 3 fixed chapters and a "Chapter complete" screen with Replay (as the brief says).
- Not tested on a real phone; sound not heard by a person. `docs/HERO_TOWER.md` still says the crystal multiplies (outside the allowed files; update it to "gold coin multiplies, crystal adds").

---

## Phase 2D — Egypt anchor: «برج القلعة / Citadel Tower» (2026-11-27)

**What was wrong:** the game was a generic fantasy tower; worse, chapters
4–6 repeated chapters 1–3's names exactly ("same looks, bigger numbers" —
the code comment admitted it), so half the game had no identity at all.

**What changed (names only — ids, floors, numbers, saves untouched):**
- Title: «برج الأبطال / Hero Tower» → **«برج القلعة / Citadel Tower»**.
- Every chapter now carries its own real Egyptian tower via a new `place`
  key on CHAPTERS (the visual `theme` is unchanged): 1 Salah El-Din Citadel
  (castle), 2 Saint Catherine Towers (ice), 3 Pharos Lighthouse (fire — the
  lighthouse flame), 4 The Nubian Fortress (castle), 5 Shali Fortress, Siwa
  (ice), 6 Philae Island Tower (fire). Chapter buttons and the win card now
  show the place name, so no two chapters share a name.

**Kind rules:** already satisfied (a stronger foe only bonks gently, the
floor retries with its start power, nothing is lost) — verified in sim.

**Tested:** `npm test` 20/20 (+1 anchor test: six distinct places, ids and
floor counts unchanged); build green; real click-flow verify PASS — menu
shows the new title and all six place names, Play reaches floor 1/12,
frames at 844×390 / 1024×768 / 1366×1024, 0 page errors.

**Not done (Batch F):** the plan's visible tower map (floors lighting up)
and two genuinely new-look chapters are not built; the six places are
carried by names on the existing three looks. ≈60 min target: 6 chapters ×
13 floors already exist structurally. Not tested on a real device.

---

## Phase 2E — Batch F: two new-look chapters + the visible tower map (2026-11-27)

**Chapters/floors:** 6 chapters × 13 floors (72 + 6 roofs counted in the 13)
→ **8 chapters × 13 floors = 104 floors**. Chapters 1–6 untouched (ids,
themes, places, start/ratio/mulMax, save semantics). Two new chapters were
appended, continuing the difficulty curve of chapters 5–6:

- **Chapter 7 — «قلعة قايتباي في إسكندرية / Qaitbey Citadel, Alexandria»**,
  place `qaitbey`, NEW theme `sea`: start 68, ratio 0.91, mulMax 4.
- **Chapter 8 — «باب زويلة في القاهرة / Bab Zuweila, Cairo»**, place
  `zweila`, NEW theme `dawn`: start 78, ratio 0.92, mulMax 4.

**The two new themes (art.js, code-painted, no external images):**
- `sea`: teal sky gradient; `paintSky` draws the Mediterranean into the
  lower sky — a bright horizon line, a layered sea gradient, white wave
  crests and gull silhouettes. Rooms are pale sandstone with a round
  porthole window (waves inside it) and wave trim on the floor boards;
  the tower base gets foam lapping at the stone; the ground strip is sea
  water. Menu icon ⚓, teal segment gradient.
- `dawn`: rose-gold sky gradient; `paintSky` draws a big low sun with a
  warm halo and an old-Cairo skyline of domes and two minarets silhouetted
  against it. Rooms are warm rose sandstone with a hanging lantern (lit,
  gently flickering) and a small crescent beside the window. Menu icon 🌅,
  rose-gold segment gradient.
Both run on the same cached `paintSky` path as the old themes (painted
once per size/theme; a missing `ART['sky_sea'/'sky_dawn']` image simply
falls through to the procedural painting, exactly like the existing
themes). No per-frame painting was added — the room accents ride the
existing `drawRoom`/`drawBase` calls.

**The visible tower map (menu):** the old horizontal chapter-button row
is now the tower itself. The chapter selector is a vertical stack of
tapered segments (chapter 1 at the base, each higher chapter 3% narrower)
topped by a roof triangle and the dragon. Progress comes only from the
existing save (`normalizeSave`: `stars` per chapter + `unlocked`):
a won chapter's segment lights up with a gold border/glow and shows its
stars; the next climbable chapter (id === unlocked, no stars yet) pulses;
locked chapters stay grey with 🔒. The segments ARE the chapter buttons —
same click behaviour, same lock sound. Per-floor progress does not exist
in the save, so the map is honestly per-chapter. Eyeballed at 844×390,
1024×768 and 1366×1024 with a mid-progress save (1–6 won, 7 current,
8 locked): all 8 segments + roof + Play fit at 844×390 with no scrolling,
lit/current/locked states are unmistakable at all three sizes. Sea and
dawn gameplay frames were also eyeballed: both looks are unmistakably
their own, not castle/ice/fire recolours.

**Playtime estimate (honest):** measured from the sim — a planned-order
clear averages ≈68 taps per chapter (10 seeds/chapter), 409 taps for 6
chapters → 547 taps for 8. At ~0.6 s of dash/strike animation plus a
child's 2–4 s think-and-tap per action and ~1.5 s per ladder climb,
flawless play is ≈20–33 min before → ≈26–45 min after. With normal child
pacing (wrong taps, gentle retries, replays) the full 8-chapter climb
lands around the plan's ≈60 min of engagement; the flawless-run number
itself is below 60 and is stated as such.

**Kind rules:** untouched — gentle bonk, floor retries with start power,
nothing lost; no timers/lives/stars changes.

**Tested:** `npm test` **28/28** (was 20; +4 new Phase 2E tests pinning
CHAPTERS.length === 8, distinct new theme keys/places, chapters 7–8 build
+ robot climb, the full 1→8 unlock chain, and 6-chapter save migration —
plus the existing per-chapter solver tests now also cover 7–8 in normal
and easy). `npm run build` green, game.js **141.1 KB**. Official harness
`phase2e_verify.mjs hero_tower` → **PASS, 0 page errors** (real menu
clicks, Play reaches floor 1/12). Scripted sim playthrough completes
chapters 1→8 in order, the unlock chain reaching the chapter-8 roof.

**Not tested:** on a real device; the new chapters played by a human
end-to-end in the browser (sim robot + first-floor frames only); sound
not heard. No new spoken lines were needed, so nothing for Instinct.

**Owner question:** none blocking. Note the win card's "all chapters
done" line now triggers after chapter 8, as derived from CHAPTERS.length.
