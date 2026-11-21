# صور داخل اللعبة (سبرايت) — كل العربيات والشخصيات والمناظر

**ليه الملف ده؟** صور «الكارت» وشاشة التحميل حلوة، لكن جوّه اللعب العربيات والشخصيات لسه مرسومة بالكود (مكعبات). الحل اللي اتجرّب في
`coastal_drive` (سباق الطريق الساحلي) ونجح: العربية بقت صورة كرتونية لامعة واقفة على الطريق. نفس الطريقة ينفع في كل الألعاب.

## إزاي الصور بتتركّب (أنا بعملها، أنت بتعمل الصور بس)
1. تعمل شيت بالبرومت تحت (شبكة، خلفية بيضا صافية).
2. تبعتهولي، وأنا بشغّل: `python tools/cut_sprite.py sheet.png 4x3 اسم1,اسم2,... assets/games/<اللعبة>/art`
   فيطلع لكل عنصر ملف شفاف (WebP) باسمه.
3. اللعبة بتحمّلهم لوحدها (`loadSprites` / `loadArt`)؛ لو صورة ناقصة بترجع تستخدم الرسم بالكود، فمفيش حاجة بتبوظ.

## قواعد كل شيت (مهمة عشان القص يطلع نضيف)
- خلفية **بيضا صافية #FFFFFF**، كل عنصر في خانته، هامش 50 بكسل على الأقل، العناصر ما بتلمسش بعض ولا حافة الصورة.
- **من غير ظل أرضي، من غير أضواء، من غير كلام أو أرقام لوحات**، من غير خلفية أو طريق أو أشجار.
- نفس حجم العناصر تقريبًا في الشيت. الأبيض/الفاتح يبقى له حافة رمادية زرقاء خفيفة عشان يبان.
- **زاوية الرؤية مهمة** (دي اللي كانت بتبوّظ الصور القديمة، كانت بتيجي 3/4):
  - **ألعاب الجري/السباق من ورا العربية (الكاميرا خلف اللاعب): منظر خلفي تمامًا (REAR VIEW)، متماثل.**
  - ألعاب الجنب (side-scrollers): منظر جانبي تمامًا (SIDE VIEW)، الوش ناحية اليمين.
  - ألعاب من فوق (top-down): منظر من فوق تمامًا (TOP-DOWN)، الوش لفوق.

## سطر الأسلوب (يتلصق قبل كل شيت)
```
Glossy 3D-rendered cartoon style for a children's game: soft studio lighting, smooth rounded shapes, bright saturated colors, thick clean edges, cute friendly look, simple readable silhouettes. No text, no letters, no numbers, no logos, nothing scary, no blood.
```

## سطر الشيت (يتلصق بعد سطر الأسلوب)
```
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow, no particles, no motion trails, no road, no scenery, no text. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
```

---

## 1) ألعاب الكاميرا من ورا العربية (REAR VIEW) — الأولوية الأولى

اللعبة جاهزة ببنية السبرايت (`makeSpriteVehicle` في `game_src/cozy_kit/art.js`)؛ وقت ما الشيت ييجي بتركّب في ربع ساعة للعبة.

### 1.1 `coastal_drive` — سباق الطريق الساحلي  (متركّب فيه 4 عربيات: أحمر مكشوف، هاتش أزرق، تاكسي، شرطة)
**شيت العربيات (12 عربية، كلها REAR VIEW)** — ملفات: `car_player_striker, car_player_arrow, car_player_nightfall, car_sedan_white, car_sedan_silver, car_suv_black, car_van_white, car_pickup_red, car_truck_box_white, car_bus_city, car_taxi_yellow, car_hatch_green`
```
ITEMS: 12 cartoon vehicles seen exactly from DIRECTLY BEHIND (rear view, perfectly symmetrical, camera at the car's height, both rear wheels and both tail lights visible): 1 red open-top sports car with two round exhausts; 2 sharp teal wedge supercar with a rear wing; 3 dark purple night sports coupe with glowing tail lights; 4 white sedan; 5 silver sedan; 6 black SUV; 7 white delivery van; 8 red pickup truck with an empty bed; 9 white box truck with a big rear door; 10 white and blue city bus; 11 yellow taxi with a roof sign (no text); 12 green hatchback.
```
**شيت أجواء** (اختياري): ملفات `bg_azure_coast, bg_red_canyon, bg_neon_city` — 3 خلفيات 16:9 (1920x1080) بدون عربيات ولا ناس: سما + جبال/مباني بعيدة + بحر، والأرض الأمامية فاضية.

### 1.2 `highway_race` / `sunset_highway` — طريق الغروب (نفس الأسلوب، عربيات REAR VIEW بألوان الغروب)
ملفات: `car_player_blue_super, car_player_red_super, car_rival_pink, car_rival_orange, car_rival_black, car_taxi, car_van, car_truck, car_bus, car_sedan_a, car_sedan_b, car_police`
```
ITEMS: 12 cartoon vehicles seen exactly from DIRECTLY BEHIND (rear view, symmetrical): blue sleek supercar with a rear wing; red supercar; pink sports car; orange sports car; black sports car; yellow taxi (no text); white delivery van; white box truck; city bus; blue sedan; green sedan; blue and white police car (no text).
```

### 1.3 `moto_race` — سباق الدراجات (دراجة + راكب REAR VIEW)
ملفات: `bike_player_lean_c, bike_player_lean_l, bike_player_lean_r, bike_rival_1..5, bike_crash_1, bike_crash_2, nitro_burst`
```
ITEMS: 12 cartoon motorbike riders seen exactly from DIRECTLY BEHIND: first row: the player (a child rider in a red helmet on a sport bike) upright, leaning left, leaning right, and falling over after a crash; then five rival riders (different helmet colors, same sport-bike shape, upright); then a rider on a bike from behind with a bright orange nitro flame at the exhaust, and 3 small round helmets (red, blue, green).
```

### 1.4 `rain_circuit` وَ `dune_titans` وَ `carnival_race` (عربيات REAR VIEW)
- `rain_circuit`: 6 سيارات سباق REAR VIEW (لاعب + 5 منافسين) بألوان مختلفة، مبلولة لامعة.
- `dune_titans`: 6 شاحنات صحراء (monster/off-road trucks) REAR VIEW، عجلات كبيرة، حمل على الضهر، ألوان رملية/برتقالي.
- `carnival_race`: 6 عربيات تصادم (bumper cars) REAR VIEW، حيوانات كرتونية ركّابها (قطة، كلب، أرنب، دب، ثعلب، قرد) — الحيوان من ورا بيبان ضهره وودنه.

استخدم نفس سطر الأسلوب وسطر الشيت، والـ ITEMS: «6 [نوع] seen exactly from DIRECTLY BEHIND…» (شيت 3x2).

### 1.5 طيران ومنحدرات (REAR VIEW)
- `air_race` / `sky_ace`: 8 طيارات صغيرة كرتونية REAR VIEW (لاعب أبيض + منافسين أزرق/أصفر/أحمر…).
- `summit_rush` / `rhino_summit`: 8 متسابقين على منحدر من ورا (ضهر المتزلج/الجري) وبوزات مختلفة.

---

## 2) شخصيات الجري/القتال (SIDE أو FRONT حسب اللعبة)

لكل لعبة شيت **وضعيات** (poses) للبطل: وقوف، جري 1، جري 2، قفز، ضرب، إصابة، فرحة، سقوط. نفس الشخصية بالظبط في كل خانة (نفس الألوان والمقاسات).

| اللعبة | الزاوية | ملفات | الشخصيات |
|---|---|---|---|
| `jungle_adventure` | جانبية (الوش يمين) | `adam_*`, `nour_*` (8 وضعيات لكل واحد) | آدم ونور مستكشفين |
| `hero_tower`, `samurai`, `temple_army` | قدام/جانبي | `hero_*`, `foe_*` | البطل + 6 أعداء |
| `hamster_warrior` | من الضهر | `hamster_run_1..3, hurt, win` | الهامستر بخوذة بندقة |
| `zombie_rooftop` | 3/4 من فوق | `survivor_*`, `zombie_1..6` | المقاتل + زومبي كرتوني أخضر بدون دم |
| `fox_family` | من فوق | `fox_mother`, `cub_1..4` | الثعلبة والجراء |
| `golden_tail`, `dino_grow`, `hungry_frog`, `deep_sea` | جانبية/من فوق | `player_*`, `prey_*`, `predator_*` | حسب اللعبة |

الأسماء النهائية بتتحدد وقت التركيب؛ المهم الشيت يتبعت بنفس القواعد فوق.

## 3) مناظر وخلفيات (لكل لعبة وكل مستوى)
- الخلفية 16:9 (1920x1080) **بدون أي شخصية أو عربية في النص**، لأن العناصر المتحركة بتتحط فوقها بالكود.
- البرومتات الكاملة للخلفيات: `docs/ALL_GAMES_IMAGE_SCRIPTS.md` (المستويات الأولى) وَ `docs/NEW_LEVELS_IMAGE_SCRIPTS.md` (المستويات الجديدة).
- ملحوظة: ألعاب الكاميرا العالية (فوق الأرض) ما بتورّيش سما أصلًا، فخلفياتها بتبان بس في الشاشات والـ intro.

## 4) ترتيب الشغل المقترح
1. شيت عربيات `coastal_drive` (12) ← أسرع نتيجة (اللعبة جاهزة).
2. `highway_race` ← `moto_race` ← `rain_circuit` ← `dune_titans` ← `carnival_race`.
3. شخصيات `jungle_adventure` ← `hero_tower` ← `hamster_warrior` ← باقي الألعاب.
4. الخلفيات الجديدة للمستويات.

## 5) اللي اتعمل فعلًا
- `coastal_drive`: عربية اللاعب (أحمر مكشوف) وعربيات الزحمة (هاتش أزرق، تاكسي، شرطة) بقوا صور كرتونية جوّه السباق بدل المكعبات؛ الجراج والقوائم لسه بالنموذج ثلاثي الأبعاد (بيلف). الشاحنة لسه نموذج بالكود لحد ما شيت الشاحنات ييجي.
- أدوات: `tools/cut_sprite.py` (قص شيت لملفات شفافة)، `game_src/cozy_kit/art.js` (`loadSprites`, `makeSpriteVehicle`)، `game_src/_shot_seq.mjs` (لقطة شاشة بعد ضغط أزرار بالترتيب).
