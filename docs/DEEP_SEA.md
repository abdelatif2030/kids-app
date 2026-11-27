# «بُوري في البحر الأحمر» — Bouri of the Red Sea

The wide card at the bottom of the fun-games page. Ages 4+ (age 4 easy: Bouri starts a little bigger and a bite
costs less growth — there is no clock to extend and no life to add).

## How it plays
- Bouri the grey mullet (silvery grey): drag to swim, tap the red button to DASH (cooldown ring). Eat creatures up
  to 90% of your size to grow (combos); anything 15% bigger that is a predator hunts you: a red "!" warns, then it
  lunges. A bite is a bump: Bouri is pushed away and loses a little growth (never below the starting size) — nothing
  else. **There is no timer and there are no lives**: the child swims at their own pace until Bouri reaches the
  level goal; there is no fail state. Stars still reward a fast finish (3 stars = quick), but a slow, careful swim
  always wins with 1 star.
- Six Red Sea stops, each with its own shipped art plate: Hurghada Reef «شعاب الغردقة» (bg_reef; grow to 45 cm;
  bait balls of sardines, anthias, Red Sea butterflyfish, pufferfish, the grouper), Ras Mohammed «رأس محمد»
  (bg_kelp; grow to 110 cm and eat 3 squid; mackerel, barracuda), The Blue Hole «الثقب الأزرق» (bg_trench; grow to
  250 cm, then devour the reef shark; lanternfish, tuna, anglerfish), Dolphin House «بيت الدلافين» (bg_night),
  The Great Wreck «السفينة الغارقة» (bg_wreck; eat 5 squid), Elphinstone «إلفينستون» (bg_abyss; grow to 450 cm and
  devour the reef shark). Hunters wait a few seconds at the start and there are never many at once. Bait-ball
  swarms arrive in every stop, and god-rays slant down in every world (fainter in the deep palettes).

## Phone first
The start screen and the level card fit a phone screen with large text and buttons (in the video the card was cut
off with scroll bars); nothing needs scrolling.

## Like the video
Blue water, sand ripples, rock arches, corals, kelp, light rays, bubbles; goal pill with a fish and a bar (no timer
pill, no lives pill), pause; "Bait ball incoming" toast; "Combo x4"; red dash button. Sound: dreamy ocean tune
(darker in the trench, pounding for the shark), bubbles, gulps that climb with the combo, dash whoosh, warning
alarm, lunge, bonk, bait shimmer, squid ink, shark arrival.

## Files / tests
game_src/deep_sea (`npm test`: the robot clears all six stops incl. the squid hunts and the reef shark, many seeds;
idling forever never ends a run; thirty bites never end a run; eating rules, warnings and dash, easy mode, saves).
Progress key `deep_sea`.

Not played on a real phone, tablet or iPhone; the sound has not been listened to by a person.
