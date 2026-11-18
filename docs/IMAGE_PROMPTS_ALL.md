# ALL the picture prompts (2026-11-18)

Everything the new learning world still needs from the owner, in the order of importance. Paste the STYLE block, then the SHEET block, then ONE pack line (one sheet = 12 pictures,
left to right, top to bottom). Upload an old finished sheet as the style reference. Send each finished sheet back; Claude cuts it with `tools/art/cut_pack.py`, adds the words
and the voice lines, and rebuilds. The levels page prompt is separate (it is one big picture).

## STYLE (paste first)
```
Glossy 3D-rendered cartoon style for a children's learning game: soft studio lighting, smooth rounded shapes, bright saturated colors, thick clean edges, cute friendly look, simple readable silhouettes. No text, no letters, no logos, nothing scary.
```

## SHEET (paste second)
```
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no light rays, no particles, no motion trails. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
```

## 1. Pack `lettersA` — Words for thin letters, part 1 (art prefix `la_`)  (ل غ ذ)
Words I will add when it arrives: ل لعبة، لوز، لمبة، لفت، لسان | غ غزال، غواصة، غسالة، غيمة، غروب، غصن | ذ ذهب
```
Words for letters sheet. The 12 items, left to right, top to bottom: wooden toy blocks (لعبة); almonds (لوز); light bulb (لمبة); turnip (لفت); smiling mouth with the tongue out (لسان); gazelle (غزال); submarine (غواصة); washing machine (غسالة); fluffy grey cloud (غيمة); sunset over the sea (غروب); tree branch with leaves (غصن); gold bars (ذهب).
```

## 2. Pack `lettersB` — Words for thin letters, part 2 (art prefix `lb_`)  (ز ث و ت)
Words I will add when it arrives: ز زجاجة، زر، زيت، زورق | ث ثور، ثلاجة، ثريا، ثوب | و وسادة | ت تاج، تلفاز، تليفون
```
Words for letters sheet. The 12 items, left to right, top to bottom: glass bottle (زجاجة); round button (زر); olive oil bottle (زيت); small rowing boat (زورق); bull (ثور); refrigerator (ثلاجة); hanging chandelier (ثريا); long white robe on a hanger (ثوب); pillow (وسادة); golden crown (تاج); television (تلفاز); telephone (تليفون).
```

## 3. Pack `animals2` — More animals (art prefix `n_`)
Words I will add when it arrives: كنغر، كوالا، فرس النهر، وحيد القرن، ذئب، غزال، سنجاب، قنفذ، جاموسة، ديك رومي، فظ، كركند
```
More animals sheet. The 12 items, left to right, top to bottom: kangaroo; koala hugging a branch; hippopotamus; rhinoceros; grey wolf; deer with small antlers; red squirrel holding a nut; hedgehog; water buffalo (Egyptian buffalo, dark grey); turkey with a fanned tail; walrus with white tusks; red lobster.
```

## 4. Pack `babies` — Baby animals (art prefix `b2_`)
Words I will add when it arrives: عجل، حمل، جدي، مهر، جرو، قطة صغيرة، بطوط صغير، فرخ وزة، شبل، ظبي صغير، أرنب صغير، كنغر صغير (سؤال «ابن مين؟»)
```
Baby animals sheet. The 12 items, left to right, top to bottom: calf (baby cow); lamb (baby sheep); baby goat; foal (baby horse); puppy; kitten; duckling; fluffy yellow gosling (baby goose); lion cub; fawn (baby deer) with white spots; baby rabbit; joey (baby kangaroo) peeking out of a pouch.
```

## 5. Pack `shapeThings` — Things that look like shapes (art prefix `sh_`)
Words I will add when it arrives: حاجات شكلها زي الأشكال: كورة، شباك، بيتزا، باب، بيضة، طيارة ورق، بسكوتة نجمة، بالونة قلب، علامة وقوف، هلال، هرم، دونات
```
Things shaped like geometric shapes sheet. The 12 items, left to right, top to bottom: round football (circle); square window with a blue frame (square); slice of pizza (triangle); rectangular door (rectangle); egg (oval); kite shaped like a diamond; star-shaped cookie (star); heart-shaped balloon (heart); stop-sign octagon (octagon); crescent moon (crescent); pyramid of stone (pyramid); ring-shaped donut (ring).
```

## 6. Pack `colorThings` — Things with one clear colour (art prefix `ct_`)
Words I will add when it arrives: حاجات بلون واحد: تاج ذهبي، مفتاح فضي، جردل تركواز، شنطة كحلي، دبدوب بيج، شمندر عنابي، بالونة سماوي، زهرة ليلكي، رشاشة، صدفة مرجانية، بطة صفرا، صبار
```
Things with one clear colour sheet. The 12 items, left to right, top to bottom: golden crown (gold); silver key (silver); turquoise beach bucket (turquoise); navy blue school bag (navy); beige teddy bear (beige); maroon beetroot (maroon); sky-blue balloon (light blue); lilac flower (lilac); light green watering can; pink-orange seashell (coral); mustard yellow rubber duck; dark green cactus.
```

## 7. Pack `places` — Homes and places (new, for «بيعيش فين؟» and the new levels) (art prefix `pl_`)
Words I will add: بيت الكلب، عش، جحر الأرنب، خلية النحل، عشة الفراخ، مزرعة، غابة، شعاب مرجانية، إيجلو، كثبان صحرا، كهف، بركة. Every animal then gets a real home picture instead of a place sign.
```
Homes and places sheet. The 12 items, left to right, top to bottom: wooden dog house; bird nest with eggs in a branch; rabbit burrow hole in a grassy mound; beehive with bees; chicken coop; red farm barn with hay; jungle tree with hanging vines; coral reef with colourful fish; igloo in the snow; desert sand dune with a palm tree; cave entrance with rocks; small pond with lily pads and a frog.
```

## 8. Pack `dinos` — Dinosaurs (new, for the dinosaur level and the animals level) (art prefix `dn_`)
Words I will add: الديناصور الطويل / المفترس / أبو قرون / أبو شوك (these four already exist) + الديناصور الطائر، الديناصور المدرّع، بيضة ديناصور، ديناصور صغير، بركان، بصمة قدم، عظمة ديناصور، ديناصور السباح.
```
Cute dinosaurs sheet. The 12 items, left to right, top to bottom: flying pterodactyl; armoured ankylosaurus with a spiked tail; spinosaurus with a big sail on its back; raptor running; baby dinosaur hatching from an egg; big cracked dinosaur egg with spots; small erupting volcano; giant dinosaur footprint in the mud; fossil dinosaur bone; swimming plesiosaur; long-necked baby dinosaur eating a leaf; dinosaur skeleton skull.
```

## 9. The levels page (20 levels, one big picture)
No text on the picture: the names and numbers are drawn by the app. Recommended levels 13-20: حياة البحر، الفضاء، المدينة، جسمي، الملابس، المهن، الطقس والفصول، الديناصورات.
```
Portrait image 1226x1283, same art style, colours and scene as the reference picture: a sunny enchanted garden with a fairy-tale castle on a hill in the background, a cute cartoon girl (pink jacket, ponytail with a pink bow) on the top left and a cute cartoon boy (yellow hoodie with a star, brown curly hair) on the top right, a wooden title sign at the top centre with a purple ribbon under it, a wooden arrow sign on the left with a blue owl wearing a graduation cap and a red bow tie sitting on a tree stump, round purple home button in the top-left corner and round purple speaker button in the top-right corner. In the centre a big cream rounded board holds a grid of 4 columns x 5 rows = 20 glossy blue rounded tiles of equal size, evenly spaced, each with a small flower decoration at the bottom and a round yellow badge in its top-left corner. IMPORTANT: no text, no letters, no numbers anywhere in the picture: the title sign, the ribbon, the arrow sign, the badges and all tiles are left EMPTY. Each tile shows one clear glossy 3D icon in the middle, left to right, top to bottom: 1 a red block with a letter-shaped pattern but no real letter (use a star on it); 2 a picture frame with a landscape; 3 a red block with an arrow; 4 a number block with dots (no digits); 5 a red apple; 6 colourful alphabet blocks without letters (use shapes); 7 a blue diamond and a circle; 8 a white bunny; 9 a painter palette with paint; 10 a strawberry; 11 a yellow school bus; 12 a pink watering can; 13 a friendly orange fish with a seashell; 14 a small rocket with a star; 15 a tall city building with windows; 16 a smiling child body-parts icon: a cute hand and an eye together; 17 a blue t-shirt on a hanger; 18 a friendly doctor with a stethoscope; 19 a sun behind a cloud with a raindrop; 20 a friendly green dinosaur. Keep the icons large, simple and readable, every tile clear of overlap with its neighbours.
```

## Notes
- Every sheet needs a plain white background and 50 px of empty margin around each item (it is in the SHEET block).
- Nothing here is needed for the game to work today: all 12 levels run with the pictures that already exist.
- Ideas for further levels (after the 12): see the end of the report in the chat (sea life, space, city, my body, clothes, jobs, weather and seasons, dinosaurs, opposites, positions, days and months, feelings, manners, safety, my family, my house, Egypt).
