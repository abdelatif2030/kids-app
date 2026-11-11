# Learning games rebuild (owner request, 2026-11-11)

The owner asked: rebuild every learning game, one by one, each with its own prompt like the fun games, with a
professional look like the fun games, and do everything needed without asking again.

## How every rebuilt learning game works (shared rules)

- Built as a bundled web game (like the fun games): `game_src/learn_<id>` → `assets/games/learn_<id>/`, opened from its
  island in the learning-games hub. Art and sound made in code (Web Audio), no files from the internet, no links.
- It stays a LEARNING game: every round sends `{type:'round', skill, correct, detail}` to the app, which records it in
  the parent dashboard exactly like before (`ProgressStore.record`, first try = correct). Finishing a set sends
  `{type:'complete'}`, which gives the learning star only the first time (`GameRewards.complete`, same game id as
  before, so stars already earned stay). No stars for time, no streaks, a wrong tap only fades/bounces (no loss).
- Words, letters and numbers are spoken by the app's own voice (`{type:'speak', text}` → the app's speech), so the
  same voice is used everywhere and nothing is uploaded.
- Five rounds per set (as before), big touch targets, Arabic first (English when the app is in English), boy/girl
  wording, age-based difficulty (the same ages as before), the phone sound safeguards of the fun games.
- A friendly host character for each island; "play again" or "back" at the end.

## How it is built (shared by every rebuilt game)
- One package `game_src/learn_games` (three.js + esbuild), one folder per game in `src/<id>`, a shared kit in
  `src/kit`: `shell.js` (frame, top bar with five round marks, back, sound, the host's speech bubble, title card, end
  card with the learning star, the app bridge, Arabic/English, boy/girl wording) and `sound.js` (each game's own tune,
  kind effects: tap, step, soft bump, right chime, gentle "try again", pop, sparkle, star, win fanfare, nibble, squeak,
  splash, page, drop, and a cute chirp "voice" for the host; the music ducks while the app's voice says a word).
- Voice (owner requests 2026-11-11: clear, Egyptian, child-like): words go to the app (`{type:'speak'}` →
  `AppAudio.say(lang: 'ar-EG', childVoice: true)`): an **Egyptian Arabic voice** when the device has one (any Arabic
  voice otherwise; the lessons keep Modern Standard Arabic), spoken a little **higher and slower** than the lesson voice
  (`kGameVoicePitch` 1.22, `kGameVoiceRate` 0.92 in lib/media/voice_choice.dart) — the phones have no real child voice,
  and a much higher pitch makes Arabic hard to understand. While a word is said the game's music drops to a whisper and
  the effects step back, so the word is clear. The parent's voice switch still applies. Opened on its own in a browser,
  `boot.js` uses the browser's voice instead. Real recordings of a child's voice would be better (none exist yet).
- App side: `WebGame.learnId` (the old game id), `kLearnWebGames`, `LearnBridge` (round → ProgressStore,
  complete → GameRewards + ResumeStore + adventure check), `learnWebGameScreen()`; the catalog entry of the old game
  now opens the new one everywhere (learning page, «يومي», resume, adventures). The old Flutter game stays in the code.
- Tests: `npm test` in `game_src/learn_games` (logic + a robot), `test/learn_web_games_test.dart` (bundled files, the
  catalog opens the new game, star once under the old id, rounds recorded, fun games record nothing).

## Status
| # | Game | Status |
| --- | --- | --- |
| 1 | maze «الفأر والجبنة» | **Built** (3D hedge maze, swipe/tap/arrows, runs to the next crossing, crumbs, glowing paw hint after 8 s, five mazes by age, voice + music + effects). Not tested on a real phone. |
| 2 | sort_groups «رتّب في مجموعات» | **Built** (3D toy shop: conveyor belt from a curtained hatch, drag or tap into coloured baskets with picture signs, a wrong basket shakes "no" and the thing hops back, glow after two misses, Robi the shop robot, the thing's name said on arrival and "the apple is fruit!" when sorted, 2 baskets ages 3-4 / 3 baskets from round 3 at 5-6, 22 things drawn in code in `src/kit/toys3d.js`). Not tested on a real phone. |
| 3-35 | the rest | Not built yet; next in the order below. |

## The prompts

### Island «ألعاب الذكاء والتفكير» (thinking)

1. **maze — «الفأر والجبنة»**: Create a 3D toy-box maze game where a cute mouse in a little cap runs through a hedge
   maze made of building blocks to reach a big wedge of cheese. Swipe or tap the arrows to move. Walls are colourful
   blocks; crumbs mark the way you came; a hint glow shows the next step after a short wait. Five mazes per set, bigger
   with age. Sound: tiny footsteps, a squeak at walls, a happy nibble at the cheese.
2. **sort_groups — «رتّب في مجموعات»**: Create a bright toy-shop sorting game: things fall onto a conveyor belt (fruit,
   toys, animals, vehicles) and the child drags each into the right coloured basket with a picture on it. Baskets wobble
   happily when right; a wrong drop bounces back. Five rounds of four items.
3. **treasure_hunt — «كنز الجزيرة»**: Create a pirate-island treasure hunt on a top-down sandy island with palm trees,
   a parrot guide and a red X. The parrot gives directions (up, down, left, right, next to the tree) and the child
   moves a little pirate along the grid to dig at the right spot; the chest pops open with gold. Five clues per set.
4. **next_in_day — «رتّب يومي»**: Create a cosy day-routine picture strip: a sun moves across a house window from
   morning to night; picture cards (wake up, brush teeth, breakfast, school, play, bath, sleep) must be put in order on
   a clothesline. Cards swing when placed; the house lights change with the time of day.
5. **snakes_ladders — «السلالم والزلاجات»**: Create a 3D board game in a playground: a giant spinning die, colourful
   ladders and soft slides (no snakes) on a 1–30 board; two pawns (the child and a friendly bear) take turns; the
   child counts the steps out loud with the app's voice. Gentle: a slide is a fun ride, never a loss.
6. **connect_four — «أربعة ورا بعض»**: Create a glossy toy Connect-Four for two players on one device: chunky red and
   yellow discs drop with a bounce into a blue frame; four in a row glows and plays a fanfare. Turn arrows show whose
   turn it is.
7. **where_ball — «فين الكورة؟»**: Create a 3D playroom where a puppy hides a ball on, under, inside or next to
   furniture (box, table, chair, basket). The app asks "Where is the ball? Under the table" and the child taps the
   right place; the puppy wags and fetches it.
8. **pattern — «كمّل النمط»**: Create a bead-threading pattern game: a string of big wooden beads (colours, shapes, fruit)
   with a gap; the child picks the bead that comes next and it slides onto the string. Longer patterns with age.
9. **fun_xo — «إكس أو»**: Create a chalkboard tic-tac-toe against a gentle robot friend: chalk X and O draw themselves,
   a line of three is chalked through with a cheer; the robot plays kindly at age 4–5.
10. **fun_snake — «الثعبان الجعان»**: Create a garden snake game: a smiling caterpillar-snake moves on a grass grid and
    eats apples to grow; walls are soft bushes (bump = start again calmly). Slow and kind for young children.
11. **fun_whack — «اضرب الخلد»**: Create a garden whack-a-mole: moles in hard hats pop out of molehills; tapping one
    gives a funny "boing" (they duck, no hitting animation). No countdown, no score pressure: a calm count of taps.
12. **fun_stars — «امسك النجوم»**: Create a night-sky catch game: a little rocket at the bottom slides left and right to
    catch falling stars; shooting stars sparkle; a cloud now and then is just a soft bump.

### Island «الحروف والكلمات» (letters and words)

13. **letters — «الحروف»**: Create a letter garden: each round a big Arabic letter grows like a flower; the app says a
    word and the child taps the flower whose letter starts it. The right flower blooms with butterflies.
14. **letter_fishing — «صيد الحروف»**: Create a 3D fishing pond: fish carry letters on their sides; the app says a letter
    and the child taps the fish with that letter; a fishing line pulls it up into a bucket with a splash.
15. **trace_letters — «اكتب الحرف»**: Create a magic-wand tracing board: a big glowing letter on a chalk slate; the child
    traces with a finger along dotted guides (right to left), sparkles follow the finger, and the letter comes alive
    as a small animation (ب = a duck, etc.).
16. **word_book — «كتاب الكلمات»**: Create a pop-up picture book of 50 words: pages turn with a paper sound; each page
    shows a 3D-looking pop-up picture and the word; tapping says it. A heart keeps favourites.
17. **listen_letter — «اسمع واختار الحرف»**: Create a radio-and-letters game: an old friendly radio says a letter's
    name; three letter balloons float up and the child taps the right one; it pops into confetti.
18. **listen_word — «اسمع واختار الكلمة»**: Create a talking-parrot word game: the parrot says a word; three word signs
    hang on branches; the child taps the right sign and the parrot repeats it happily.
19. **review_words — «راجع اللي اتعلمته»**: Create a treasure-chest review: words the child met recently are locked in
    little chests; each right answer opens one and adds the word to a shelf of trophies.

### Island «الأرقام والحساب» (numbers)

20. **math — «الحساب»**: Create a bakery counting game: cupcakes on trays; questions ask "how many?", "put 2 more",
    "take 1 away" (sums, take-away, times tables with age); the child taps the answer bubble and the baker boxes the
    cupcakes. A wrong answer shows the sum as a picture (as before).
21. **numerals — «الأرقام بالشكلين»**: Create a train of number wagons: a wagon shows 3 and the child picks the matching
    Arabic-Indic digit ٣ (and the other way round) to couple the wagon; the train toots and moves on.
22. **compare — «أكتر ولا أقل»**: Create a two-pan balance scale: two groups of things on the pans; the child taps the
    side with more (or fewer); the scale tips with a satisfying clunk.
23. **connect_dots — «وصّل النقط»**: Create a starry connect-the-dots: numbered stars; the child taps them in order and
    a glowing line draws a picture (a fish, a rocket, a house) that then comes alive.
24. **big_small — «كبير ولا صغير»**: Create a zoo size game: two animals or things side by side (elephant and mouse);
    the app asks for the big or small one; the chosen one does a little dance.

### Island «الألوان والأشكال» (colours and shapes)

25. **colors — «الألوان»**: Create a paint-studio colour game: the app names a colour; paint buckets wobble; the child
    taps the right bucket and it splashes a rainbow across a canvas.
26. **shape_finder — «لاقي الشكل»**: Create a shape-sorter toy: a wooden box with holes (circle, square, triangle, star,
    heart); the app names a shape and colour and the child taps the matching block, which drops through its hole.
27. **jigsaw — «البازل»**: Create a jigsaw on a wooden table: a bright picture (farm, sea, space) broken into 4–9 chunky
    pieces with outlines; pieces snap into place with a click and the finished picture animates.

### Island «الحيوانات والطبيعة» (animals and nature)

28. **animal — «فين الحيوان؟»**: Create a peek-a-boo farm: animals hide behind bushes and barn doors; the app says an
    animal's name (and its sound); the child taps where it hides and it pops out.
29. **animal_habitats — «بيته فين؟»**: Create a world map of homes: sea, jungle, farm, desert, snow; an animal waits on a
    raft; the child drags it to its home, where friends welcome it.
30. **feed_animal — «أكّل الحيوان»**: Create a feeding time at the zoo: a hungry animal opens its mouth (rabbit, monkey,
    cow, cat); three foods on a tray; the child drags the right food in; the animal munches happily.
31. **listen_picture — «اسمع واختار الصورة»**: Create a listening garden: the app says a word; three picture bubbles
    float; the child taps the right picture and it turns into a butterfly.
32. **balloons — «البالونات»**: Create a sky full of balloons for the youngest (ages 1–2): big balloons with animals
    float up; any tap pops one into stars with a soft pop and the animal's name. No wrong answers.

### Island «الذاكرة والملاحظة» (memory and observation)

33. **memory — «الذاكرة»**: Create a memory card game on a cosy rug: cards with friendly animals flip in 3D; find the
    pairs; a matched pair jumps up and dances. 4–12 cards by age.
34. **match_pictures — «طابق الصور»**: Create a sticker-matching game: a picture at the top and three stickers below;
    the child taps the identical one (later with small differences to notice).
35. **odd_one_out — «مين المختلف؟»**: Create a detective game: a cute detective with a magnifying glass looks at four
    things; one doesn't belong; the child taps it and the detective cheers.

## Order of work
Island by island, one game at a time: thinking → letters → numbers → shapes → animals → memory. Each game is committed
on its own with its tests; the old Flutter version stays in the code until its new version is in, then the island
card opens the new one.
