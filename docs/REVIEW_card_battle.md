# Review: Neon Card Battle (brief 23) against the original video

Video: 20261118-2129-29 (318x566 portrait, 72 s). Source `game_src/card_battle`, bundle `assets/games/card_battle/game.js`.

## What the original does
- Portrait, tilted 3D neon platform: pink alien half on top (UFO), cyan player half at the bottom (small robot base), dashed middle line.
- Top bar: robot avatar + vertical health bar, big timer in the middle, vertical health bar + alien avatar. A round pause button floats inside the arena corner (right).
- Bottom: "NEXT" small card at the left, energy as a round number + 10 pink segments, hand of four hexagon-cost cards (grey when not affordable).
- Holding a card shows an info panel (name, UNIT/BUILDING/SPELL, one-line description). Drag onto your half to deploy.
- "FIGHT!" banner at the start, floating damage numbers (-60, -150), pause menu: Resume, Restart, How to play, Quit to menu, Sound, Music.
- Units walk and fight alone; plasma wave, black hole, repair field, turret.

## Already matching (not touched)
Rules and structure: 2:30 match, energy x2 in the last minute, hand of 4 + next card, own-half drops, spells anywhere, units fight alone, alien AI (slime, bug, brute, spitter), Easy/Normal/Hard, UFO destroyed or more base health = win, up to 3 stars, damage numbers, hex arena with magenta/cyan halves.

## Differences found and fixed
1. HUD layout was two horizontal bars under a timer row: now avatars + vertical bars flank the timer like the video; the pause button floats at the arena corner.
2. No card info panel: added (name, UNIT / SPELL / BUILDING, one line, Arabic and English) while a card is pressed or dragged.
3. Start banner said "Go": now "FIGHT!" / «قتال!» in an italic outlined style.
4. Pause menu lacked Restart and a sound switch: added both (sound moved there from the top bar).

## Still different
- The arena is a 2D canvas drawn in perspective, not real 3D; the player base is larger than in the video.
- The video has separate Sound and Music toggles (there is only one sound switch here) and different card names (Jet Striker, Laser, Hammer, Mine, Shield...). The brief only names Plasma Wave, Black Hole, Repair Field and a turret, so the card set was kept.
- Avatars are emoji-style (robot/alien), not the video's portraits.

## Checks
`npm test` 12 pass (sim untouched). Played in headless Chrome at 390x780: menu, start, drag deploy, info panel, pause menu; no console errors. Not tested on a real phone.

## Phase 2B (Batch C, rollout 2.2) — the 150 s match clock is removed
The match ran on a 150 s clock: at zero the winner was decided by remaining base
health, and the last 60 s doubled everyone's energy income (×2 HUD badge, faster
music, a "hurry" timer state) — a pressure ramp against the house rules for ages 3–6.
Now: MATCH_TIME/DOUBLE_AT are deleted from sim.js; a match ends only when a base
falls (both together = draw); energy income is the constant REGEN all match (the
'double' event/flag are gone); the HUD timer pill and ×2 badge are removed; the
how-to teaches "there is no clock — play at your own pace"; `over.time` is the
honest duration, shown as a result stat. Tests rewritten: 400 s with both bases
standing never ends the match and no 'double' fires; the rate is REGEN at 2.8 s and
at 5 minutes; base-fall endings keep the health-based stars. Balance improved
untimed (scripted bot: 24/24 Easy, 15/24 Normal, 2/24 Hard). `npm test` 12/12,
build ok. Playtest (phase2b_verify.mjs): Battle! starts a match with no timer/×2 in
the HUD; destroying the UFO gives the result card with 3 stars; zero page errors.
Gap: a child who never plays a card can stall — in practice the Overlord keeps
attacking, so the match still resolves; the audio bank keeps an unused 'double'
sting (harmless dead code).

---

## Phase 2D — Egypt anchor: «بطاقات الأبطال / Heroes' Cards» (2026-11-27)

**What changed (names only):** «معركة الكروت النيون / Neon Card
Battle» → **«بطاقات الأبطال / Heroes' Cards»**, and the play button
says "Play!" instead of "Battle!" — the neon battle framing becomes a
heroes' card game (the Phase 2B kind-rules pass had already removed
its clock/pressure). Cards, AI difficulties and saves untouched.

**Tested:** `npm test` 13/13 (+1 anchor test; the file header comment
was updated to match); build green; real click-flow verify PASS —
difficulty menu with the new title, a live match with cards on the
arena, frames at 3 sizes, 0 page errors.

**Not done (Batch F):** the campaign expansion (more heroes, a story
ladder of Egyptian champions) is not built. Not tested on a real
device.

---

## Phase 2E — Batch F: the 8-duel Nile Tour campaign (2026-11-27)

**What changed:** the game gains the campaign the master plan asked
for — an 8-duel Nile tour (south → north), a landmark card album, and
campaign progress in the save. Free play (pick a difficulty, play a
match) is untouched and works exactly as before.

**The 8 duels** (data: `CAMPAIGN` in sim.js):

| # | Landmark | Difficulty | Narrative focus |
|---|----------|-----------|-----------------|
| 1 | أسوان / Aswan 🌴 | easy | bugs (fast swarm) |
| 2 | جزيرة فيلة / Philae Island 🏝️ | easy | spitters (ranged) |
| 3 | معبد الأقصر / Luxor Temple 🏛️ | normal | slimes (steady march) |
| 4 | سقارة / Saqqara 🔺 | normal | bugs + slimes |
| 5 | أهرامات الجيزة / Giza Pyramids 🐪 | hard | brutes (tanks) |
| 6 | القاهرة القديمة / Old Cairo 🕌 | expert | spitters + slimes |
| 7 | قلعة قايتباي / Qaitbey Citadel 🏰 | expert | brutes + spitters |
| 8 | المتحف المصري الكبير / Grand Egyptian Museum 🏺 | expert | all four kinds |

**Honest theming note:** the sim has no deck-selection system — the
Overlord AI always draws from the one shared `ALIEN_CARDS` pool with
hard-coded preference orders. So no duel restricts the opponent's
deck; each duel is themed *mechanically* by its difficulty key (the
rising curve easy→easy→normal→normal→hard→expert→expert→expert, the
only per-match knob the sim offers) and *narratively* by its `focus`
(the alien kind the place is famous for, in the menu's foe line).
`focus` is flavour only and says so in the code.

**Progression + save:** new save field `campaign: { unlocked, won[8],
album[], complete }`, derived safely in `normalizeSave` — an old save
migrates to a fresh tour (duel 1 unlocked, empty album) and loses
nothing; a won duel always owns its landmark card, so a damaged save
heals itself. `recordCampaignResult(save, idx, over)` is the only
writer: a win marks the duel, awards the card (never a duplicate) and
unlocks the next duel; winning duel 8 sets `complete`. A loss/draw
changes nothing (gentle retry). Plays/stars stay owned by
`recordResult`, so a campaign match counts exactly once, and its stars
land on the duel's difficulty as in free play.

**Menu:** the main menu gains «رحلة النيل · n/8» and «ألبوم المعالم»
buttons alongside free play. The tour map lists the 8 stops in order
with locked 🔒 / unlocked ▶️ / done ✅ states; tapping an open stop
starts that duel (a gold pill in the match names the landmark). The
result card for a campaign duel offers Next duel / Retry / Tour map,
announces a newly earned landmark card, and duel 8's win shows the
tour-complete celebration. The album is a menu-reachable 4×2 grid in
the game's own card frame (gold border when owned, dimmed + 🔒 when
not) — collection only, no stats, no pressure. No match clock was
reintroduced; matches still end only when a base falls.

**Winnability (test bot, the suite's scripted player):** every duel
completes with a winner on every seed tried, and the bot wins each
duel at least sometimes — duels 1–2: 12/12, duels 3–4: 8/12, duel 5
(Giza, Hard): 2/24 (the tightest duel — Hard is paradoxically the
bot's worst difficulty; a human who aims spells beats the bot's fixed
habits, and the suite uses 24 seeds there so the win is pinned, not
lucky), duels 6–8 (Expert): 8/12. The campaign is not a wall, but
duel 5 is its hardest step for the scripted player — logged honestly.

**Playtime:** before, matches were endless standalone replays with no
finite total. A campaign run is now the sum of its duel lengths:
averaging the bot's *winning* runs per duel (seeds 1–24) gives
≈ 50+50+99+99+104+303+303+303 s ≈ **21.8 min of pure match time**;
a child playing at their own pace with a retry or two lands at
≈ 30 min, the master plan's target.

**Checks:** `npm test` 18/18 (13 before + 5 new campaign tests:
structure CURVE, unlock chain, album awards, save migration, all-8
sim matches). Build green, game.js 152.9 KB. A scripted run through
the real save flow (old save → win duels 1→8 in order) proves the
finale unlocks and the campaign completes with an 8-card album.
Click-flow verify (phase2e_verify.mjs): PASS, 0 page errors; frames
eyeballed — the tour map (duel 1 open, 2–8 locked), a live duel-1
match with its landmark pill, and a free-play match at 3 sizes.
Not tested on a real device; the album screen was code-reviewed and
shares the verified menu flow but was not separately screenshotted.
