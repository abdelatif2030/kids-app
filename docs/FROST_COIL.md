# «طريق التنين الجليدي» — Frost Coil

The third card on the second fun-games page («ألعاب أكتر»). Built from the owner's video (recording 2026-11-11 10:27).
Ages 4+ (age 4 gets extra moves).

## How it plays
- A wooden board of tiles, each with an ice tube (straight or curved; crosses and frozen tiles from level 4/6).
  Tap a tile to turn it a quarter turn. Build an unbroken ice path from the little ice dragon (it enters the
  bottom-left tile) to the portal (it leaves the top-right tile) before the moves run out. The ice glows as far as it
  already reaches from the dragon; a chime climbs with every tile it reaches.
- When the path is done, the dragon slides along the ice into the portal. Stars: finish, the gold star tile on the
  path, and moves to spare. Coins as a reward (nothing to buy, nothing lost).
- Out of moves: "Out of moves – The ice held. Try again!" (try again, nothing lost).
- Twelve levels from fixed seeds (3x3 to 5x5); every level is laid as a real path first, so it can always be solved,
  and the moves leave room to spare (level 1: 19 moves, like the video's 18).

## Like the video
Snowy night forest with lit cabins and falling snow, a wooden board with snow lumps, wooden plank tiles with snow
caps, light-blue ice tubes, the gold star, the portal in a snowy wooden arch with lanterns and a turning swirl, the
coiled ice dragon on a snow cloud, wooden HUD (LEVEL 1/12 with a purple bar, ice-cube moves bar green to red, coins),
"Build a path to the portal!", "Tap tiles to turn them", restart and sound buttons. Sound: a music-box waltz with
sleigh bells and wind, icy clicks, rising chimes, the dragon's whoosh and the portal swirl.

## Files / tests
game_src/frost_coil (2D canvas; `npm test`: turns, every level solvable and unsolved at the start, fixed seeds, frozen
and cross tiles, out of moves, the ice glow, easy mode, saves). Progress key `frost_coil`. The card on the second page
is made in code in the style of the owner's cards (the owner has no picture for this game yet).

Not played on a real phone, tablet or iPhone; the sound has not been listened to by a person.
