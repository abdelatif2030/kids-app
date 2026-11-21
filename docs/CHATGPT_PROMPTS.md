# برومتات توليد الصور من ChatGPT — جاهزة للنسخ (74 برومت)

**الطريقة:** كل برومت تحت **كتلة واحدة كاملة** (فيها الأسلوب وقواعد الشيت والعناصر) — انسخها كلها كما هي في ChatGPT. ابعتيلي الصورة الناتجة وأنا أقصّها (`python tools/cut_sprite.py شيت.png 4x3 الأسماء مجلد_اللعبة/art`) وأركّبها في اللعبة.

**الترتيب المقترح (الأهم أولًا):** A1 ← A2 ← A3 ← … (عربيات) ثم C1..C6 (ألبسي الأميرة) ثم باقي ألعاب البنات ثم B (الشخصيات) ثم E (الخلفيات).

**نصايح لـ ChatGPT:** (1) ولّد الصورة بنسبة 3:2 (1536×1024). (2) لو الخلفية طلعت مش بيضا صافية قول: «Make the background pure flat white #FFFFFF, remove the shadows». (3) لو العناصر لزقت في بعض قول: «Increase the margin between items, no overlaps». (4) اطلب نفس الشخصية في كل الخانات: «Keep the exact same character design in every cell». (5) في الخلفيات: اطلب 16:9 (1920×1080) صورة واحدة.


---

## A — عربيات وطيارات (منظر خلفي بالظبط)

### A1 — عربيات السباق الساحلي — منظر خلفي (12)
- **الملفات:** `car_player_striker, car_player_arrow, car_player_nightfall, car_sedan_white, car_sedan_silver, car_suv_black, car_van_white, car_pickup_red, car_truck_box_white, car_bus_city, car_taxi_yellow, car_hatch_green`
- **بتفتح:** coastal_drive (الشاحنات والفانات)

```
Glossy 3D-rendered cartoon style for a children's game: soft studio lighting, smooth rounded shapes, bright saturated colors, thick clean edges, cute friendly look, simple readable silhouettes. No text, no letters, no numbers, no logos, no real brands, nothing scary, no blood.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): 12 cartoon vehicles seen exactly from DIRECTLY BEHIND (rear view, perfectly symmetrical, camera at the vehicle's height, both rear wheels and both tail lights visible): 1 red open-top sports car with two round exhausts; 2 sharp teal wedge supercar with a rear wing; 3 dark purple sports coupe with glowing tail lights; 4 white sedan; 5 silver sedan; 6 black SUV; 7 white delivery van with two rear doors; 8 red pickup truck with an empty bed; 9 white box truck with a big rear door; 10 white and blue city bus; 11 yellow taxi with a roof sign (no text); 12 green hatchback.
```

### A2 — عربيات طريق الغروب — منظر خلفي (12)
- **الملفات:** `car_player_blue, car_player_red, car_rival_pink, car_rival_orange, car_rival_black, car_taxi, car_van, car_truck, car_bus, car_sedan_a, car_sedan_b, car_police`
- **بتفتح:** highway_race / sunset_highway

```
Glossy 3D-rendered cartoon style for a children's game: soft studio lighting, smooth rounded shapes, bright saturated colors, thick clean edges, cute friendly look, simple readable silhouettes. No text, no letters, no numbers, no logos, no real brands, nothing scary, no blood.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): 12 cartoon vehicles seen exactly from DIRECTLY BEHIND (rear view, perfectly symmetrical, camera at the vehicle's height, both rear wheels and both tail lights visible): blue sleek supercar with a rear wing; red supercar; pink sports car; orange sports car; black sports car; yellow taxi (no text); white delivery van; white box truck; city bus; blue sedan; green sedan; blue and white police car (no text).
```

### A3 — دراجات سباق الموتوسيكلات — منظر خلفي (12)
- **الملفات:** `bike_player_c, bike_player_l, bike_player_r, bike_crash, bike_rival_1..5, bike_nitro, helmet_a, helmet_b`
- **بتفتح:** moto_race

```
Glossy 3D-rendered cartoon style for a children's game: soft studio lighting, smooth rounded shapes, bright saturated colors, thick clean edges, cute friendly look, simple readable silhouettes. No text, no letters, no numbers, no logos, no real brands, nothing scary, no blood.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): 12 cartoon sport motorbikes with their riders seen exactly from DIRECTLY BEHIND (rear view, perfectly symmetrical, camera at the vehicle's height, both rear wheels and both tail lights visible) (the rider is seen from behind): a child rider in a red helmet upright; the same rider leaning left; the same rider leaning right; the same rider falling over after a crash; five rival riders upright with different helmet and jacket colors (blue, green, yellow, purple, orange); the red-helmet rider with a bright orange nitro flame at the exhaust; two big round helmets (red, blue).
```

### A4 — سيارات سباق المطر — منظر خلفي (12)
- **الملفات:** `car_rain_1..12`
- **بتفتح:** rain_circuit

```
Glossy 3D-rendered cartoon style for a children's game: soft studio lighting, smooth rounded shapes, bright saturated colors, thick clean edges, cute friendly look, simple readable silhouettes. No text, no letters, no numbers, no logos, no real brands, nothing scary, no blood.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): 12 cartoon race cars seen exactly from DIRECTLY BEHIND (rear view, perfectly symmetrical, camera at the vehicle's height, both rear wheels and both tail lights visible), glossy and wet-looking: 1 red formula-style race car, 2 blue, 3 green, 4 yellow, 5 purple, 6 orange, 7 white with a blue stripe, 8 black with gold stripes, 9 pink, 10 teal, 11 silver, 12 lime green - all with big rear tires, a rear wing and two glowing tail lights.
```

### A5 — شاحنات الصحراء — منظر خلفي (12)
- **الملفات:** `truck_desert_1..12`
- **بتفتح:** dune_titans

```
Glossy 3D-rendered cartoon style for a children's game: soft studio lighting, smooth rounded shapes, bright saturated colors, thick clean edges, cute friendly look, simple readable silhouettes. No text, no letters, no numbers, no logos, no real brands, nothing scary, no blood.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): 12 cartoon desert monster trucks seen exactly from DIRECTLY BEHIND (rear view, perfectly symmetrical, camera at the vehicle's height, both rear wheels and both tail lights visible), huge chunky tires, roll cage, spare tire on the back, two tail lights, desert colors (orange, sand, red, green, blue, yellow, purple, white, brown, teal, pink, black).
```

### A6 — عربيات التصادم + حيوانات — منظر خلفي (12)
- **الملفات:** `bumper_bear, bumper_bunny, bumper_cat, bumper_dog, bumper_fox, bumper_monkey, ...`
- **بتفتح:** carnival_race (glowfair)

```
Glossy 3D-rendered cartoon style for a children's game: soft studio lighting, smooth rounded shapes, bright saturated colors, thick clean edges, cute friendly look, simple readable silhouettes. No text, no letters, no numbers, no logos, no real brands, nothing scary, no blood.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): 12 cartoon bumper cars with a cute animal driver, seen exactly from DIRECTLY BEHIND (rear view, perfectly symmetrical, camera at the vehicle's height, both rear wheels and both tail lights visible) (the animal is seen from behind, ears and tail visible): bear, bunny, cat, dog, fox, monkey, panda, tiger, pig, mouse, lion, penguin - each car a different glossy color with a round rubber bumper and a little antenna with a star.
```

### A7 — طيارات — منظر خلفي (12)
- **الملفات:** `plane_player, plane_rival_1..5, plane_jet, plane_biplane...`
- **بتفتح:** air_race / sky_ace

```
Glossy 3D-rendered cartoon style for a children's game: soft studio lighting, smooth rounded shapes, bright saturated colors, thick clean edges, cute friendly look, simple readable silhouettes. No text, no letters, no numbers, no logos, no real brands, nothing scary, no blood.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): 12 cartoon small propeller planes seen exactly from DIRECTLY BEHIND (rear view, perfectly symmetrical, camera at the vehicle's height, both rear wheels and both tail lights visible) (tail and wings visible, pilot's head from behind): white plane with red stripes; blue plane; yellow biplane; green plane; red plane; orange plane; purple plane; pink plane; teal jet; silver jet; black stunt plane; gold plane.
```


---

## B — شخصيات الألعاب (وضعيات)

### B1 — آدم — مستكشف الأدغال (١٢ وضعية جانبية)
- **الملفات:** `adam_idle, adam_run1..3, adam_jump, adam_fall, adam_hurt, adam_win ...`
- **بتفتح:** jungle_adventure

```
Glossy 3D-rendered cartoon style for a children's game: soft studio lighting, smooth rounded shapes, bright saturated colors, thick clean edges, cute friendly look, simple readable silhouettes. No text, no letters, no numbers, no logos, no real brands, nothing scary, no blood.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): A cute cartoon boy explorer named Adam (brown skin, short black hair, khaki shirt, green backpack, hiking boots), SIDE view facing right, 12 poses: standing, run 1, run 2, run 3, jump up, jump peak, falling, landing, hurt, happy cheering, sliding, victory pose with arms up. The same character in every cell.
```

### B2 — نور — مستكشفة الأدغال (١٢ وضعية جانبية)
- **الملفات:** `nour_*`
- **بتفتح:** jungle_adventure

```
Glossy 3D-rendered cartoon style for a children's game: soft studio lighting, smooth rounded shapes, bright saturated colors, thick clean edges, cute friendly look, simple readable silhouettes. No text, no letters, no numbers, no logos, no real brands, nothing scary, no blood.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): A cute cartoon girl explorer named Nour (light-brown skin, long dark ponytail, teal explorer shirt, orange backpack, boots), SIDE view facing right, 12 poses: standing, run 1, run 2, run 3, jump up, jump peak, falling, landing, hurt, happy cheering, sliding, victory pose with arms up. The same character in every cell.
```

### B3 — الهامستر المحارب (١٢ وضعية من الضهر)
- **الملفات:** `hamster_*`
- **بتفتح:** hamster_warrior

```
Glossy 3D-rendered cartoon style for a children's game: soft studio lighting, smooth rounded shapes, bright saturated colors, thick clean edges, cute friendly look, simple readable silhouettes. No text, no letters, no numbers, no logos, no real brands, nothing scary, no blood.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): A cute cartoon hamster warrior wearing a half-nut shell helmet and a tiny sword, seen from BEHIND (rear view), 12 poses: run 1, run 2, run 3, swing sword, got hit, shield up, jump, victory, tired, power-up glow, sleeping, throwing a seed.
```

### B4 — بطل برج الأبطال + الأعداء (١٢)
- **الملفات:** `ht_*`
- **بتفتح:** hero_tower

```
Glossy 3D-rendered cartoon style for a children's game: soft studio lighting, smooth rounded shapes, bright saturated colors, thick clean edges, cute friendly look, simple readable silhouettes. No text, no letters, no numbers, no logos, no real brands, nothing scary, no blood.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): A friendly cartoon knight hero in blue armor (idle, attack, hurt, victory) followed by 8 cartoon enemies in the same style: green slime, goblin, skeleton, imp, orc, ice troll, lava sorcerer, small sky dragon. Front view, similar size.
```

### B5 — زومبي الأسطح كرتوني (١٢)
- **الملفات:** `zombie_*`
- **بتفتح:** zombie_rooftop

```
Glossy 3D-rendered cartoon style for a children's game: soft studio lighting, smooth rounded shapes, bright saturated colors, thick clean edges, cute friendly look, simple readable silhouettes. No text, no letters, no numbers, no logos, no real brands, nothing scary, no blood.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): A cartoon city fighter hero in a red jacket (3 poses: shooting, running, victory) and 9 friendly cartoon green zombies (no blood, no gore, goofy faces): normal, tall, fat, with a traffic cone hat, with a bucket helmet, small, with a bandage, in a tutu, with a flower. 3/4 front view.
```

### B6 — الساموراي والنينجا (١٢)
- **الملفات:** `samurai_*`
- **بتفتح:** samurai

```
Glossy 3D-rendered cartoon style for a children's game: soft studio lighting, smooth rounded shapes, bright saturated colors, thick clean edges, cute friendly look, simple readable silhouettes. No text, no letters, no numbers, no logos, no real brands, nothing scary, no blood.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): A cute cartoon samurai hero in red armor (idle, slash, dash, victory), 3 ninja enemies in different colors, an oni boss with a big club (cute, not scary), and a petal burst effect, a combo star badge. Front view.
```

### B7 — حيوانات الألعاب (١٢): ثعلب وجراء، ضفدع، ديناصور، قرش
- **الملفات:** `fox_*, frog_*`
- **بتفتح:** fox_family / hungry_frog / dino_grow / deep_sea

```
Glossy 3D-rendered cartoon style for a children's game: soft studio lighting, smooth rounded shapes, bright saturated colors, thick clean edges, cute friendly look, simple readable silhouettes. No text, no letters, no numbers, no logos, no real brands, nothing scary, no blood.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): 12 cute cartoon animals SIDE or FRONT view: fox mother, 3 fox cubs, green frog, big bully frog, baby raptor dinosaur, T-rex junior, small fish, big shark, octopus, turtle.
```


---

## C — قسم البنات ٢–٤ سنين (شخصيات وأغراض)

### C1 — البنت الأميرة بوضعيات (١٢)
- **الملفات:** `princess_*`
- **بتفتح:** little_princess_dress

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): A cute toddler-style princess doll girl, big head and sparkling eyes, light-brown skin, long dark-brown hair, wearing only a white slip under-dress, seen from the FRONT, 12 poses: standing, waving, twirling, curtsy, clapping, happy jump, surprised, blowing a kiss, sitting, hugging a teddy, sleepy, dancing. The same girl in every cell.
```

### C2 — ٤ بنات بألوان بشرة وشعر مختلفة (وقفة)
- **الملفات:** `princess_light, princess_dark, princess_curly, princess_red`
- **بتفتح:** little_princess_dress

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): 4 cute toddler-style girl dolls in the same front standing pose, each in a white slip: fair skin with blonde hair, dark skin with black curly hair, light-brown skin with straight dark hair, tan skin with red hair. Fill only 4 cells (top row), leave the rest empty.
```

### C3 — فساتين (١٢ — شيت ١)
- **الملفات:** `dress_01..12`
- **بتفتح:** little_princess_dress

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): 12 pretty toddler princess DRESSES laid flat facing the camera, each a different color and style: pink ball gown, lilac star dress, mint garden dress, yellow sun dress, blue snow-queen dress, coral beach dress, white wedding-style dress, rainbow tutu, red party dress, purple night dress, golden gala dress, teal mermaid dress.
```

### C4 — فساتين (١٢ — شيت ٢)
- **الملفات:** `dress_13..24`
- **بتفتح:** little_princess_dress

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): 12 more pretty toddler princess DRESSES laid flat facing the camera, different from the first sheet: peach flower dress, sky-blue butterfly dress, lavender heart dress, red polka-dot dress, orange sunset dress, green leaf dress, silver ice dress, pink cupcake dress, navy star dress, cream lace dress, rose-gold glitter dress, rainbow ruffle dress.
```

### C5 — أحذية (١٢)
- **الملفات:** `shoes_01..12`
- **بتفتح:** little_princess_dress

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): 12 cute toddler princess SHOES, each a pair facing the camera: glittery pink flats, silver slippers, red ballet shoes, blue snow boots, golden sandals, rainbow sneakers, white lace shoes, purple shoes with bows, star boots, butterfly shoes, heart shoes, crystal slippers.
```

### C6 — تيجان وفيونكات (١٢)
- **الملفات:** `crown_01..12`
- **بتفتح:** little_princess_dress / little_salon

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): 12 toddler princess crowns, tiaras and hair bows: gold crown, silver tiara, pink flower crown, big red bow, rainbow bow, star clip, butterfly clip, heart crown, pearl headband, snowflake crown, sun crown, crystal tiara.
```

### C7 — صالون: ٦ بنات جالسات (وش قدام)
- **الملفات:** `salon_girl_1..6`
- **بتفتح:** little_salon

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): 6 different cute toddler-style girls (different skin tones and hair colors), each sitting on a pink salon chair, FRONT view, hair simple and plain: fill only 6 cells (two rows of 3), leave the rest empty.
```

### C8 — صالون: تسريحات (٨ طبقات شعر فقط)
- **الملفات:** `hair_*`
- **بتفتح:** little_salon

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): 8 cartoon hairstyles drawn as hair only (no face, no head) seen from the front: braids, ponytail, two buns, big curls, long straight hair, short bob, pigtails, crown braid. Fill 8 cells, leave the rest empty. Brown hair color.
```

### C9 — صالون: أدوات (١٢)
- **الملفات:** `tool_*`
- **بتفتح:** little_salon

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): 12 toddler salon tools with big friendly shapes: brush, comb, pink magic wand, blue magic wand, yellow magic wand, green magic wand, hair dryer, safe round scissors, nail polish bottle, hand mirror, spray bottle, sponge.
```

### C10 — صالون: فيونكات وكليبسات (١٢)
- **الملفات:** `bow_*`
- **بتفتح:** little_salon

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): 12 hair accessories: red bow, pink bow, blue bow, yellow bow, purple bow, rainbow bow, star clip, heart clip, flower clip, butterfly clip, pearl clip, ribbon with bells.
```

### C11 — بيبي: عروسة بوضعيات (١٢)
- **الملفات:** `baby_*`
- **بتفتح:** baby_and_pet

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): A cute cartoon baby doll, FRONT view, 12 poses: happy, hungry, eating, drinking from a bottle, dirty with mud, bathing in bubbles, wrapped in a towel, getting brushed, dressed up, yawning, sleeping under a blanket, hugging.
```

### C12 — قطة بوضعيات (١٢)
- **الملفات:** `kitten_*`
- **بتفتح:** baby_and_pet

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): A cute cartoon kitten, FRONT view, 12 poses: happy, hungry, eating, drinking, dirty with mud, bathing in bubbles, wrapped in a towel, getting brushed, wearing a bow, yawning, sleeping under a blanket, hugging a toy.
```

### C13 — أرنب بوضعيات (١٢)
- **الملفات:** `bunny_*`
- **بتفتح:** baby_and_pet

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): A cute cartoon bunny, FRONT view, 12 poses: happy, hungry, eating a carrot, drinking, dirty with mud, bathing in bubbles, wrapped in a towel, getting brushed, wearing a bow, yawning, sleeping under a blanket, hugging a toy.
```

### C14 — كلب صغير بوضعيات (١٢)
- **الملفات:** `puppy_*`
- **بتفتح:** baby_and_pet

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): A cute cartoon puppy, FRONT view, 12 poses: happy, hungry, eating, drinking, dirty with mud, bathing in bubbles, wrapped in a towel, getting brushed, wearing a bow, yawning, sleeping under a blanket, hugging a toy.
```

### C15 — بيبي: أغراض (١٢)
- **الملفات:** `care_*`
- **بتفتح:** baby_and_pet

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): 12 baby care items: milk bottle, red apple, carrot, fish, bath sponge, soap bubbles cluster, rubber duck, comb, soft brush, blanket, moon with a sleepy face, teddy bear.
```

### C16 — المخبز: البنت الخبّازة (١٢)
- **الملفات:** `baker_*`
- **بتفتح:** cupcake_shop

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): A cute toddler-style girl baker with a white apron and a pink chef hat, FRONT view, 12 poses: standing, waving, singing, holding a spoon, laughing, carrying a tray, clapping, jumping, surprised, blowing a kiss, serving, dancing.
```

### C17 — كب كيك: أكواب ورقية + كب كيك جاهز (١٢)
- **الملفات:** `liner_*, cupcake_*`
- **بتفتح:** cupcake_shop

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): 6 colorful paper cupcake liners (empty, pink, blue, yellow, green, purple, red) and 6 finished cupcakes with swirled cream and a cherry in different colors.
```

### C18 — كب كيك: كريمة ورشّات وزينة (١٢)
- **الملفات:** `topping_*`
- **بتفتح:** cupcake_shop

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): 12 cupcake decorations: pink cream swirl, blue cream swirl, yellow cream swirl, green cream swirl, purple cream swirl, rainbow sprinkles, star sprinkles, heart sprinkles, cherry, strawberry, candy star, sugar butterfly.
```

### C19 — المخبز: الضيوف (١٢)
- **الملفات:** `guest_*`
- **بتفتح:** cupcake_shop

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): 6 cute animal tea-party guests in two poses each (happy waiting, eating a cupcake): bear, bunny, cat, dog, panda, monkey. Front view.
```

### C20 — الحديقة: زهور بمراحل (١٢ — شيت ١)
- **الملفات:** `flower_*`
- **بتفتح:** butterfly_garden

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): 6 flowers in 2 growth stages each (tiny sprout, full bloom), front view, in 6 colors: red, yellow, pink, blue, purple, orange.
```

### C21 — الحديقة: زهور بمراحل (١٢ — شيت ٢) + أصيص
- **الملفات:** `flower_*`
- **بتفتح:** butterfly_garden

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): 6 flowers in the BIG bloom stage (red, yellow, pink, blue, purple, orange) and 6 flower pots in matching colors, front view.
```

### C22 — الحديقة: فراشات (١٢)
- **الملفات:** `butterfly_*`
- **بتفتح:** butterfly_garden

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): 12 cute cartoon butterflies, front-top view: 4 wing patterns, each in 3 poses (wings open, wings half, wings closed). Plain white-ish wings that a child can color.
```

### C23 — الحديقة: أغراض (١٢)
- **الملفات:** `garden_*`
- **بتفتح:** butterfly_garden

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): 12 garden items: watering can, 6 seed packets in different colors, a smiling sun, a fluffy cloud, a rainbow, a water drop, a garden fork toy.
```

### C24 — الجنيّة المرشدة (١٢ وضعية)
- **الملفات:** `fairy_*`
- **بتفتح:** كل ألعاب البنات

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
ITEMS (left to right, top to bottom): A tiny cute fairy with a pink dress and glittery wings, a friendly guide, FRONT view, 12 poses: waving, pointing left, pointing right, pointing up, clapping, thinking, flying, blowing a kiss, surprised, giggling, sleeping, sparkling.
```


---

## D — كروت قسم البنات وغلافه

### D1 — كارت اللعبة: card_princess
- **الملفات:** `card_princess`
- **بتفتح:** princess

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Image 1024x768 (4:3) game card picture, a single scene, no text, no letters, no UI: a happy princess girl in a pink ball gown with a golden crown twirling in a pastel castle ballroom with a rainbow.
```

### D2 — كارت اللعبة: card_salon
- **الملفات:** `card_salon`
- **بتفتح:** salon

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Image 1024x768 (4:3) game card picture, a single scene, no text, no letters, no UI: a cute girl in a pink salon chair holding a big mirror with sparkly braided hair and big bows, pastel salon.
```

### D3 — كارت اللعبة: card_baby_pet
- **الملفات:** `card_baby_pet`
- **بتفتح:** baby_pet

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Image 1024x768 (4:3) game card picture, a single scene, no text, no letters, no UI: a baby doll and a kitten and a bunny hugging in a cozy pastel nursery with a moon and stars.
```

### D4 — كارت اللعبة: card_cupcake
- **الملفات:** `card_cupcake`
- **بتفتح:** cupcake

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Image 1024x768 (4:3) game card picture, a single scene, no text, no letters, no UI: a girl baker with a pink chef hat holding a giant swirled cupcake with a cherry, pastel bakery with a rainbow.
```

### D5 — كارت اللعبة: card_butterfly
- **الملفات:** `card_butterfly`
- **بتفتح:** butterfly

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Image 1024x768 (4:3) game card picture, a single scene, no text, no letters, no UI: a smiling girl watering colorful flowers with many colorful butterflies flying, sunny magic garden with a rainbow.
```

### D6 — غلاف قسم البنات (١٦:٩)
- **الملفات:** `bg_girls_world`
- **بتفتح:** القسم

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, no text, no UI. A magical pastel pink castle on a hill with a rainbow, floating hearts and butterflies, five colorful glowing doors on the ground for five games (a dress, a mirror, a baby bottle, a cupcake, a flower).
```


---

## E — خلفيات قسم البنات (٣٠)

### E1.1 — خلفيات ألبسي الأميرة (٦) — 1
- **الملفات:** `bg_little_princess_dress_1`
- **بتفتح:** little_princess_dress

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, no text, no UI. A pastel castle bedroom with a big window and a canopy bed.
```

### E1.2 — خلفيات ألبسي الأميرة (٦) — 2
- **الملفات:** `bg_little_princess_dress_2`
- **بتفتح:** little_princess_dress

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, no text, no UI. A garden tea party with a gazebo and flowers.
```

### E1.3 — خلفيات ألبسي الأميرة (٦) — 3
- **الملفات:** `bg_little_princess_dress_3`
- **بتفتح:** little_princess_dress

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, no text, no UI. A snowy ice castle with crystal pillars.
```

### E1.4 — خلفيات ألبسي الأميرة (٦) — 4
- **الملفات:** `bg_little_princess_dress_4`
- **بتفتح:** little_princess_dress

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, no text, no UI. A sunny beach party with palm trees and a pastel tent.
```

### E1.5 — خلفيات ألبسي الأميرة (٦) — 5
- **الملفات:** `bg_little_princess_dress_5`
- **بتفتح:** little_princess_dress

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, no text, no UI. A magic forest with glowing mushrooms and fairy lights.
```

### E1.6 — خلفيات ألبسي الأميرة (٦) — 6
- **الملفات:** `bg_little_princess_dress_6`
- **بتفتح:** little_princess_dress

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, no text, no UI. A rainbow ballroom with chandeliers and a shiny floor.
```

### E2.1 — خلفيات الصالون (٦) — 1
- **الملفات:** `bg_little_salon_1`
- **بتفتح:** little_salon

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, no text, no UI. A pink salon with a giant mirror in the middle and shelves of tools at the sides.
```

### E2.2 — خلفيات الصالون (٦) — 2
- **الملفات:** `bg_little_salon_2`
- **بتفتح:** little_salon

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, no text, no UI. A princess salon with gold frames and a velvet chair area.
```

### E2.3 — خلفيات الصالون (٦) — 3
- **الملفات:** `bg_little_salon_3`
- **بتفتح:** little_salon

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, no text, no UI. A garden salon with flowers and trellis walls.
```

### E2.4 — خلفيات الصالون (٦) — 4
- **الملفات:** `bg_little_salon_4`
- **بتفتح:** little_salon

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, no text, no UI. A rainbow salon with colorful walls.
```

### E2.5 — خلفيات الصالون (٦) — 5
- **الملفات:** `bg_little_salon_5`
- **بتفتح:** little_salon

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, no text, no UI. An ice-themed salon with snowflake decorations.
```

### E2.6 — خلفيات الصالون (٦) — 6
- **الملفات:** `bg_little_salon_6`
- **بتفتح:** little_salon

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, no text, no UI. A starry night salon with moon lamps.
```

### E3.1 — خلفيات بيبي وصاحبها (٦) — 1
- **الملفات:** `bg_baby_and_pet_1`
- **بتفتح:** baby_and_pet

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, no text, no UI. A pastel nursery with a crib, toys and a window.
```

### E3.2 — خلفيات بيبي وصاحبها (٦) — 2
- **الملفات:** `bg_baby_and_pet_2`
- **بتفتح:** baby_and_pet

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, no text, no UI. A garden home yard with a swing and flowers.
```

### E3.3 — خلفيات بيبي وصاحبها (٦) — 3
- **الملفات:** `bg_baby_and_pet_3`
- **بتفتح:** baby_and_pet

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, no text, no UI. A cozy bathroom with a bathtub and rubber ducks.
```

### E3.4 — خلفيات بيبي وصاحبها (٦) — 4
- **الملفات:** `bg_baby_and_pet_4`
- **بتفتح:** baby_and_pet

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, no text, no UI. A cute farm barn with hay bales.
```

### E3.5 — خلفيات بيبي وصاحبها (٦) — 5
- **الملفات:** `bg_baby_and_pet_5`
- **بتفتح:** baby_and_pet

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, no text, no UI. A snowy cabin with a fireplace.
```

### E3.6 — خلفيات بيبي وصاحبها (٦) — 6
- **الملفات:** `bg_baby_and_pet_6`
- **بتفتح:** baby_and_pet

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, no text, no UI. A rainbow playroom with cushions.
```

### E4.1 — خلفيات محل الكب كيك (٦) — 1
- **الملفات:** `bg_cupcake_shop_1`
- **بتفتح:** cupcake_shop

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, no text, no UI. A garden bakery counter with flower pots.
```

### E4.2 — خلفيات محل الكب كيك (٦) — 2
- **الملفات:** `bg_cupcake_shop_2`
- **بتفتح:** cupcake_shop

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, no text, no UI. A rainbow bakery with colorful shelves.
```

### E4.3 — خلفيات محل الكب كيك (٦) — 3
- **الملفات:** `bg_cupcake_shop_3`
- **بتفتح:** cupcake_shop

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, no text, no UI. A snowy bakery with a winter window.
```

### E4.4 — خلفيات محل الكب كيك (٦) — 4
- **الملفات:** `bg_cupcake_shop_4`
- **بتفتح:** cupcake_shop

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, no text, no UI. A beach bakery with a striped awning and the sea behind.
```

### E4.5 — خلفيات محل الكب كيك (٦) — 5
- **الملفات:** `bg_cupcake_shop_5`
- **بتفتح:** cupcake_shop

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, no text, no UI. A castle bakery with golden arches.
```

### E4.6 — خلفيات محل الكب كيك (٦) — 6
- **الملفات:** `bg_cupcake_shop_6`
- **بتفتح:** cupcake_shop

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, no text, no UI. A starry night bakery with lanterns.
```

### E5.1 — خلفيات حديقة الفراشات (٦) — 1
- **الملفات:** `bg_butterfly_garden_1`
- **بتفتح:** butterfly_garden

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, no text, no UI. A spring meadow with six empty flower pots in a row on soft grass.
```

### E5.2 — خلفيات حديقة الفراشات (٦) — 2
- **الملفات:** `bg_butterfly_garden_2`
- **بتفتح:** butterfly_garden

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, no text, no UI. A tulip field with a windmill far away and six empty pots.
```

### E5.3 — خلفيات حديقة الفراشات (٦) — 3
- **الملفات:** `bg_butterfly_garden_3`
- **بتفتح:** butterfly_garden

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, no text, no UI. A sunflower farm with six empty pots.
```

### E5.4 — خلفيات حديقة الفراشات (٦) — 4
- **الملفات:** `bg_butterfly_garden_4`
- **بتفتح:** butterfly_garden

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, no text, no UI. A rose garden with an arch and six empty pots.
```

### E5.5 — خلفيات حديقة الفراشات (٦) — 5
- **الملفات:** `bg_butterfly_garden_5`
- **بتفتح:** butterfly_garden

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, no text, no UI. A snowy winter garden with ice crystals and six empty pots.
```

### E5.6 — خلفيات حديقة الفراشات (٦) — 6
- **الملفات:** `bg_butterfly_garden_6`
- **بتفتح:** butterfly_garden

```
Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.
Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, no text, no UI. A magic night garden with glowing fireflies and six empty pots.
```

