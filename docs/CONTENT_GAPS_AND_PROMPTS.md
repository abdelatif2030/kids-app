# Content gaps and picture prompts (2026-11-17)

Owner request: children from 2 to 6 can learn all of this; the app knows the child's age and only uses it to pick what is best to START with.
He wants no gaps: all numbers, all letters, all animals, all shapes, many colours, and a full list of what is missing with picture prompts.
Everything below is counted from the real files (art folder, `levels.js`, `more_words.json`, `animals/sim.js`), not guessed. What a child should learn
at 2-6 is general early-childhood knowledge (written by Claude from memory, no outside source was read), so the owner should cut or add items.

## 1. The rule: content is not tied to age
- Today `poolFor(age)` / `levelsFor(age)` hide things (age 4 sees 8 letters, 5 numbers, 3 counting values...). Age 2 is not handled at all (it is treated as 4).
- New rule: EVERY item is available to EVERY age. Age only decides (a) how many choices are shown (2 for age 2, 3 for 3-4, 4 for 5-6), (b) which items come FIRST
  (an `easy` rank on each item: short, common, big picture, clear sound), (c) how fast the level widens. Freshness memory (already built) then walks through the rest.
- Wrong or right answers are never punished and nothing is locked; a child who knows more simply meets the harder items sooner.
- Status: NOT built yet. It needs the content below first, otherwise "everything for everyone" would still be a tiny list.

## 2. What exists now (counted)
| thing | now |
|---|---|
| pictures in `assets/games/art` | 604 (webp) |
| used by a game | 280 |
| useful but UNUSED | 190 (animals, sea life, dinosaurs, space, city, candy-land, desert, winter) |
| picture-words (the «فين الصورة؟» level) | 247 (28 letter words + 219 more) |
| numbers asked | 1-20 (voice words 1-20 only) |
| colours | 11 (code-drawn, no pictures needed) |
| shapes | 5 (circle, square, triangle, star, heart; code-drawn) |
| animals in «أطعم الحيوان» | 34 |
| letters | 28, one picture each, but words per letter are very uneven |

Words per letter now (more_words + the letter word): ب 27, م 25, ه 22, ا 14, ف 13, ن 13, س 13, ع 12, ق 10, ك 10, ح 10, ر 9, ج 8, خ 8, ش 8, د 7, ط 7, ص 6, ت 5,
و 4, ث 3, ز 2, ل 1, ذ 1, غ 1. The five thin letters (ل ذ غ ز ث) plus و and ت are the real gap in the letters.

## 3. Gaps by topic

### Numbers (code only, plus voice)
| needed | have | missing |
|---|---|---|
| 0 (صفر) | no | add |
| 1-10 | yes | - |
| 11-20 | asked, voiced | apples/objects shown up to 20 only |
| 21-100 by tens, then any | no | voice words for 30,40,...,100 and a few like 25, 50, 99 |
| ordinals (الأول..العاشر) | no | 10 voice lines |
| more/less, biggest/smallest, before/after, odd/even (simple) | partly (counting) | new question types |
| number shapes (٣ and 3) | plaque only | show both digit styles |
| money (Egyptian pound notes) | no | optional, needs pictures |
Needs: no new pictures. About 60 new voice lines.

### Letters (code plus a few pictures)
| needed | have | missing |
|---|---|---|
| 28 letters in order | yes | - |
| letter names and sounds | yes (spoken) | - |
| forms: alone / start / middle / end | no | code-drawn text, 112 shapes |
| harakat: فتحة ضمة كسرة سكون شدة تنوين | no | code + voice lines |
| long vowels (ا و ي) and sounds like با بو بي | no | code + voice |
| hamza forms أ إ ؤ ئ ء, ة, ى, لا | partial | code + voice |
| الـ (sun and moon letters) | no | later |
| 8+ picture-words for EVERY letter | ل1 ذ1 غ1 ز2 ث3 و4 ت5 only | about 40 words; about 20 already exist as unused pictures, about 25 need new pictures (section 5, packs `lettersA`, `lettersB`) |

### Colours (code only)
Now 11: red blue yellow green orange purple pink black white brown gray.
Add 14: sky-blue (سماوي), navy (كحلي), light green (أخضر فاتح), dark green, turquoise (تركواز), gold (ذهبي), silver (فضي), beige (بيج), maroon (عنابي), light brown,
light blue (لبني), lemon yellow, peach (خوخي), lilac. Total 25. Also "light and dark" of one colour, and "which thing is red?" using existing food/animal pictures (apple, tomato,
banana, lemon, carrot, eggplant, kiwi...). No new pictures needed. About 25 voice lines + 40 for the "which thing" questions.

### Shapes (mostly code; art exists)
Have 5. Add: rectangle, oval, diamond (معين), pentagon, hexagon, octagon, crescent, cross, arrow, ring (حلقة); solids: cube, sphere, cone, cylinder, pyramid.
Art already exists for: rectangle, oval, diamond, hexagon, pentagon, ring, cube, sphere, cone, cylinder, arrow, crescent. Missing in art: octagon, cross, pyramid (can be drawn in code).
New question: "where is the shape that looks like a ball / a window / a pizza slice" needs pictures (section 5, pack `shapeThings`).

### Animals (biggest quick win: pictures already exist)
Already asked in the feeding level: 34. Pictures that exist but are not used yet (so they cost NO new picture):
panda, peacock, goose, duck (mallard), pigeon, owl, shark, cheetah, crocodile, iguana, tortoise, dolphin, octopus, crab, starfish, seahorse, clownfish, pufferfish, jellyfish,
snake, dragonfly, mantis, ant, caterpillar, ladybug, butterfly, and four dinosaurs (T-rex, triceratops, stegosaurus, brachiosaurus). Voice for the new names is needed.
Animals that do NOT exist yet (new pictures, section 5): kangaroo, koala, hippo, rhino, wolf, deer, squirrel, hedgehog, buffalo (جاموسة), turkey, walrus, lobster,
and baby animals (calf, lamb, kid, foal, puppy, kitten, duckling, cub, fawn, bunny, joey, piglet-free).
New question types for animals (code): who says "moo"? (Fatima imitates, not a real recording), where does it live (farm / sea / jungle / snow / desert / sky), baby of which animal, big or small.

### Topics that exist as pictures but are not a level yet (use all pictures)
| topic | unused pictures | idea |
|---|---|---|
| sea life | b_*, u_* (about 40) | «حياة البحر»: names + "who lives in the sea" |
| space | s_* (planets, rocket, robot, ufo, helmet, rover...) | «الفضاء» |
| city / places | c_* (hospital, school, fire station, bus stop, plane...) | «أماكن في المدينة» |
| candy-land / fun | r_* (ice cream, lollipop, kite, rainbow, sun, swing, slide...) | «ألعاب وحلويات» |
| winter | w_* (igloo, sled, skis, snowballs, pine...) | «الشتا» |
| desert | d_* (pyramid, lantern, well, oasis, dune...) | «الصحرا والتراث» |
| dinosaurs | trex, triceratops, stego, brachio | «الديناصورات» |
Each of these only needs words + voice lines; the code and the picture packs already work (`packs/*.json`).
Note: the levels page is the owner's picture with 12 tiles. More levels need a new levels picture (more tiles) or a second page.

### Other early-learning topics (not in the app yet)
Opposites (big/small, hot/cold, up/down, full/empty, fast/slow), positions (فوق تحت جنب ورا قدام), days of the week and the four seasons, feelings (happy, sad, angry, scared,
surprised, sleepy: faces), senses, hygiene (partly in «عاداتي»), good manners, safety (traffic light, "stop at the road"), the family tree, house rooms, tools.
Most can be done with pictures that exist (a_* family, t_hot/t_cold, h_* house) plus code-drawn faces. Ask before adding any religion-related content.

## 4. Suggested order (each step = code + tests + voice, then you listen and correct)
1. Numbers 0-100 and ordinals (no pictures). 2. Colours 25 (no pictures). 3. Shapes 15 with the existing art (+ octagon, cross, pyramid in code).
4. Letters: forms, harakat, hamza, then words for the thin letters from pictures that exist. 5. Animals: 26 more from pictures that exist. 6. Remove age limits
(section 1) once 1-5 are in. 7. The new levels (sea, space, city, fun, winter, desert, dinosaurs) with a new levels picture.
Picture packs in section 5 are only needed for step 4's thin letters, new animals, baby animals and shape-things.

## 5. Picture prompts (same format as `docs/IMAGE_SCRIPTS_NEXT.md`)
Paste the STYLE block and the SHEET block from `IMAGE_SCRIPTS_NEXT.md` first (do not change them), then ONE of the ITEMS lines below. Upload an old finished sheet as the style reference.
Send each sheet back; I cut it with `tools/art/cut_pack.py`, add its words and voice lines, and rebuild. One sheet = 12 pictures, left to right, top to bottom.

### Pack `animals2` — More animals (art prefix `n_`)
```
More animals sheet. The 12 items, left to right, top to bottom: kangaroo; koala hugging a branch; hippopotamus; rhinoceros; grey wolf; deer with small antlers; red squirrel holding a nut; hedgehog; water buffalo (Egyptian buffalo, dark grey); turkey with a fanned tail; walrus with white tusks; red lobster.
```

### Pack `babies` — Baby animals (art prefix `b2_`)
```
Baby animals sheet. The 12 items, left to right, top to bottom: calf (baby cow); lamb (baby sheep); baby goat; foal (baby horse); puppy; kitten; duckling; fluffy yellow gosling (baby goose); lion cub; fawn (baby deer) with white spots; baby rabbit; joey (baby kangaroo) peeking out of a pouch.
```

### Pack `lettersA` — Words for thin letters, part 1 (art prefix `la_`)  (ل غ ذ)
```
Words for letters sheet. The 12 items, left to right, top to bottom: wooden toy blocks (لعبة); almonds (لوز); light bulb (لمبة); turnip (لفت); smiling mouth with the tongue out (لسان); gazelle (غزال); submarine (غواصة); washing machine (غسالة); fluffy grey cloud (غيمة); sunset over the sea (غروب); tree branch with leaves (غصن); gold bars (ذهب).
```

### Pack `lettersB` — Words for thin letters, part 2 (art prefix `lb_`)  (ز ث و ت)
```
Words for letters sheet. The 12 items, left to right, top to bottom: glass bottle (زجاجة); round button (زر); olive oil bottle (زيت); small rowing boat (زورق); bull (ثور); refrigerator (ثلاجة); hanging chandelier (ثريا); long white robe on a hanger (ثوب); pillow (وسادة); golden crown (تاج); television (تلفاز); telephone (تليفون).
```
### Pack `shapeThings` — Things that look like shapes (art prefix `sh_`)
```
Things shaped like geometric shapes sheet. The 12 items, left to right, top to bottom: round football (circle); square window with a blue frame (square); slice of pizza (triangle); rectangular door (rectangle); egg (oval); kite shaped like a diamond; star-shaped cookie (star); heart-shaped balloon (heart); stop-sign octagon (octagon); crescent moon (crescent); pyramid of stone (pyramid); ring-shaped donut (ring).
```

### Pack `colorThings` — Things with one clear colour (art prefix `ct_`)
```
Things with one clear colour sheet. The 12 items, left to right, top to bottom: golden crown (gold); silver key (silver); turquoise beach bucket (turquoise); navy blue school bag (navy); beige teddy bear (beige); maroon beetroot (maroon); sky-blue balloon (light blue); lilac flower (lilac); light green watering can; pink-orange seashell (coral); mustard yellow rubber duck; dark green cactus.
```

## 6. What I need from the owner
1. Approve the rule in section 1 (age only decides what comes first).
2. Approve the order in section 4, and say which topics from section 3 you want or do not want (opposites, feelings, money, safety).
3. Make the picture packs in section 5 (the wording is final; some item names carry the Arabic word in brackets so the picture matches the word), or tell me to draw some in code instead (shapes, colours, number forms are drawn in code anyway).
4. The ElevenLabs key as an environment variable when each step is ready (about 200+ new voice lines in total).
