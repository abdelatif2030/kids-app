# «البقاء على قيد الحياة» — Zombie Rooftop Shooter

The 14th card on the «ألعاب للتسلية» page (owner request, 2026-11-11, from a video and a prompt). Ages 4+ (like the
samurai game); age 4 plays the easy mode.

## How it plays
- Swipe anywhere to run (a floating joystick appears under the finger); arrows/WASD on a keyboard. The weapon aims at
  the nearest zombie and fires by itself.
- Goofy cartoon zombies climb over the parapet in waves (3 waves on the first roofs, 4 later):
  shambler (slow), sprinter (fast, fragile), brute (big, white shirt), and the zombie king in the last wave of roof 8.
  Beaten zombies pop into a green puff and leave a coin; there is no blood. The hero is only "knocked out" and tries
  again; coins collected are kept.
- Blue gas tanks blow up a crowd (the auto-aim shoots a tank when 3+ zombies stand around it). They come back next wave.
- Weapon crates: bomb launcher (roofs 2-3), rocket launcher (roofs 4-5), fireworks launcher (roofs 6-8). A found weapon
  stays unlocked and can be chosen on the roof card ("change").
- Each level up pauses the game: pick one of three perks "for this roof" (rapid fire, thick vest, big bang, piercing,
  twin shot, swift shoes, power shot).
- After the last wave the pink launch pad lights up: stand on it and the hero leaps across the gap to the next building.
  Stars: 1 = cleared, 2 = health never below 40%, 3 = never below 75%.
- Eight roofs with their own look: Sunset Blocks, Water Tower Row, Garden Roof, Neon Signs, Crane Yard, Snowy Tops,
  Helipad Tower, Clock Tower. Endless opens after roof 8 (best wave is kept).
- Shop (coins, nothing bought with money): stronger weapon, stronger vest, coin magnet.

## Like the video
Terracotta tiled roof seen from high and steep, brick walls with windows going down, neighbouring roofs below with
water towers, air vents with fans and blue gas tanks; HUD: pause, gold hexagon coin counter, "Wave 1/3" with hexagon
dots, a hexagon zombie badge with the wave bar and a cyan level bar, a health bar over the hero; red ribbons with rays
("Wave 2", "Wave cleared!", "Knocked out!"), the teal "Level up! Pick one for this roof" card, the roof card
(roof name, zombie portrait, tip, stars, weapon with "change", back/start) and the "Roof cleared" card (stars, zombies,
coins, next roof, map, shop). The hero follows the owner's card: red headband, red jacket.

## Files
- game_src/zombie_rooftop: sim.js (rules, deterministic, path field for walking around props), models.js (all models
  drawn from shapes), audio.js (Web Audio only), ui.js, i18n.js (Arabic/English, boy/girl wording), main.js.
- `npm test`: a robot clears all 8 roofs, more seeds, the idle easy child, tanks, crates, perks, knock-out, endless, saves.
- Built to assets/games/zombie_rooftop/game.js with `npm run build`. Progress per child in `zombie_rooftop`, erased with
  the child.

## Not verified
Not played on a real phone, tablet or iPhone; the sound has not been listened to by a person.
