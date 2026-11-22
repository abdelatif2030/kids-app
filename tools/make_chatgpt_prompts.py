# Builds docs/CHATGPT_PROMPTS.md : every prompt is ONE complete block (style + sheet rules + items) that can be pasted into ChatGPT as is.
import io
import os

STYLE = ("Glossy 3D-rendered cartoon style for a children's game: soft studio lighting, smooth rounded shapes, bright saturated colors, thick clean edges, "
         "cute friendly look, simple readable silhouettes. No text, no letters, no numbers, no logos, no real brands, nothing scary, no blood.")
GIRL = ("Premium glossy 3D-rendered cartoon art for a toddler girls' game: soft studio lighting, smooth rounded shapes, big expressive sparkling eyes, adorable characters, "
        "pink / lilac / white / gold pastel palette, sparkles, kid friendly. No text, no letters, no numbers, no logos, no real brands, nothing scary.")
SHEET = ("Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin "
         "on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no particles, no road, no scenery. "
         "Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.")
BG = ("Wide landscape game background, 16:9 (1920x1080). No characters in the middle, an empty open area in the lower third for gameplay, depth with foreground / midground / background layers, "
      "no text, no UI.")

REAR = "seen exactly from DIRECTLY BEHIND (rear view, perfectly symmetrical, camera at the vehicle's height, both rear wheels and both tail lights visible)"

P = []  # (id, title, files, unlocks, body)


def sheet(style, items):
    return f"{style}\n{SHEET}\nITEMS (left to right, top to bottom): {items}"


# ---- A. vehicles (REAR view) ------------------------------------------------------------------------------------------------
P.append(("A1", "عربيات السباق الساحلي — منظر خلفي (12)", "car_player_striker, car_player_arrow, car_player_nightfall, car_sedan_white, car_sedan_silver, car_suv_black, car_van_white, car_pickup_red, car_truck_box_white, car_bus_city, car_taxi_yellow, car_hatch_green", "coastal_drive (الشاحنات والفانات)",
          sheet(STYLE, f"12 cartoon vehicles {REAR}: 1 red open-top sports car with two round exhausts; 2 sharp teal wedge supercar with a rear wing; 3 dark purple sports coupe with glowing tail lights; 4 white sedan; 5 silver sedan; 6 black SUV; 7 white delivery van with two rear doors; 8 red pickup truck with an empty bed; 9 white box truck with a big rear door; 10 white and blue city bus; 11 yellow taxi with a roof sign (no text); 12 green hatchback.")))
P.append(("A2", "عربيات طريق الغروب — منظر خلفي (12)", "car_player_blue, car_player_red, car_rival_pink, car_rival_orange, car_rival_black, car_taxi, car_van, car_truck, car_bus, car_sedan_a, car_sedan_b, car_police", "highway_race / sunset_highway",
          sheet(STYLE, f"12 cartoon vehicles {REAR}: blue sleek supercar with a rear wing; red supercar; pink sports car; orange sports car; black sports car; yellow taxi (no text); white delivery van; white box truck; city bus; blue sedan; green sedan; blue and white police car (no text).")))
P.append(("A3", "دراجات سباق الموتوسيكلات — منظر خلفي (12)", "bike_player_c, bike_player_l, bike_player_r, bike_crash, bike_rival_1..5, bike_nitro, helmet_a, helmet_b", "moto_race",
          sheet(STYLE, f"12 cartoon sport motorbikes with their riders {REAR} (the rider is seen from behind): a child rider in a red helmet upright; the same rider leaning left; the same rider leaning right; the same rider falling over after a crash; five rival riders upright with different helmet and jacket colors (blue, green, yellow, purple, orange); the red-helmet rider with a bright orange nitro flame at the exhaust; two big round helmets (red, blue).")))
P.append(("A4", "سيارات سباق المطر — منظر خلفي (12)", "car_rain_1..12", "rain_circuit",
          sheet(STYLE, f"12 cartoon race cars {REAR}, glossy and wet-looking: 1 red formula-style race car, 2 blue, 3 green, 4 yellow, 5 purple, 6 orange, 7 white with a blue stripe, 8 black with gold stripes, 9 pink, 10 teal, 11 silver, 12 lime green - all with big rear tires, a rear wing and two glowing tail lights.")))
P.append(("A5", "شاحنات الصحراء — منظر خلفي (12)", "truck_desert_1..12", "dune_titans",
          sheet(STYLE, f"12 cartoon desert monster trucks {REAR}, huge chunky tires, roll cage, spare tire on the back, two tail lights, desert colors (orange, sand, red, green, blue, yellow, purple, white, brown, teal, pink, black).")))
P.append(("A6", "عربيات التصادم + حيوانات — منظر خلفي (12)", "bumper_bear, bumper_bunny, bumper_cat, bumper_dog, bumper_fox, bumper_monkey, ...", "carnival_race (glowfair)",
          sheet(STYLE, f"12 cartoon bumper cars with a cute animal driver, {REAR} (the animal is seen from behind, ears and tail visible): bear, bunny, cat, dog, fox, monkey, panda, tiger, pig, mouse, lion, penguin - each car a different glossy color with a round rubber bumper and a little antenna with a star.")))
P.append(("A7", "طيارات — منظر خلفي (12)", "plane_player, plane_rival_1..5, plane_jet, plane_biplane...", "air_race / sky_ace",
          sheet(STYLE, f"12 cartoon small propeller planes {REAR} (tail and wings visible, pilot's head from behind): white plane with red stripes; blue plane; yellow biplane; green plane; red plane; orange plane; purple plane; pink plane; teal jet; silver jet; black stunt plane; gold plane.")))

# ---- B. characters (poses) ---------------------------------------------------------------------------------------------------
P.append(("B1", "آدم — مستكشف الأدغال (١٢ وضعية جانبية)", "adam_idle, adam_run1..3, adam_jump, adam_fall, adam_hurt, adam_win ...", "jungle_adventure",
          sheet(STYLE, "A cute cartoon boy explorer named Adam (brown skin, short black hair, khaki shirt, green backpack, hiking boots), SIDE view facing right, 12 poses: standing, run 1, run 2, run 3, jump up, jump peak, falling, landing, hurt, happy cheering, sliding, victory pose with arms up. The same character in every cell.")))
P.append(("B2", "نور — مستكشفة الأدغال (١٢ وضعية جانبية)", "nour_*", "jungle_adventure",
          sheet(STYLE, "A cute cartoon girl explorer named Nour (light-brown skin, long dark ponytail, teal explorer shirt, orange backpack, boots), SIDE view facing right, 12 poses: standing, run 1, run 2, run 3, jump up, jump peak, falling, landing, hurt, happy cheering, sliding, victory pose with arms up. The same character in every cell.")))
P.append(("B3", "الهامستر المحارب (١٢ وضعية من الضهر)", "hamster_*", "hamster_warrior",
          sheet(STYLE, "A cute cartoon hamster warrior wearing a half-nut shell helmet and a tiny sword, seen from BEHIND (rear view), 12 poses: run 1, run 2, run 3, swing sword, got hit, shield up, jump, victory, tired, power-up glow, sleeping, throwing a seed.")))
P.append(("B4", "بطل برج الأبطال + الأعداء (١٢)", "ht_*", "hero_tower",
          sheet(STYLE, "A friendly cartoon knight hero in blue armor (idle, attack, hurt, victory) followed by 8 cartoon enemies in the same style: green slime, goblin, skeleton, imp, orc, ice troll, lava sorcerer, small sky dragon. Front view, similar size.")))
P.append(("B5", "زومبي الأسطح كرتوني (١٢)", "zombie_*", "zombie_rooftop",
          sheet(STYLE, "A cartoon city fighter hero in a red jacket (3 poses: shooting, running, victory) and 9 friendly cartoon green zombies (no blood, no gore, goofy faces): normal, tall, fat, with a traffic cone hat, with a bucket helmet, small, with a bandage, in a tutu, with a flower. 3/4 front view.")))
P.append(("B6", "الساموراي والنينجا (١٢)", "samurai_*", "samurai",
          sheet(STYLE, "A cute cartoon samurai hero in red armor (idle, slash, dash, victory), 3 ninja enemies in different colors, an oni boss with a big club (cute, not scary), and a petal burst effect, a combo star badge. Front view.")))
P.append(("B7", "حيوانات الألعاب (١٢): ثعلب وجراء، ضفدع، ديناصور، قرش", "fox_*, frog_*", "fox_family / hungry_frog / dino_grow / deep_sea",
          sheet(STYLE, "12 cute cartoon animals SIDE or FRONT view: fox mother, 3 fox cubs, green frog, big bully frog, baby raptor dinosaur, T-rex junior, small fish, big shark, octopus, turtle.")))

# ---- C. girls section -------------------------------------------------------------------------------------------------------
P.append(("C1", "البنت الأميرة بوضعيات (١٢)", "princess_*", "little_princess_dress",
          sheet(GIRL, "A cute toddler-style princess doll girl, big head and sparkling eyes, light-brown skin, long dark-brown hair, wearing only a white slip under-dress, seen from the FRONT, 12 poses: standing, waving, twirling, curtsy, clapping, happy jump, surprised, blowing a kiss, sitting, hugging a teddy, sleepy, dancing. The same girl in every cell.")))
P.append(("C2", "٤ بنات بألوان بشرة وشعر مختلفة (وقفة)", "princess_light, princess_dark, princess_curly, princess_red", "little_princess_dress",
          sheet(GIRL, "4 cute toddler-style girl dolls in the same front standing pose, each in a white slip: fair skin with blonde hair, dark skin with black curly hair, light-brown skin with straight dark hair, tan skin with red hair. Fill only 4 cells (top row), leave the rest empty.")))
P.append(("C3", "فساتين (١٢ — شيت ١)", "dress_01..12", "little_princess_dress",
          sheet(GIRL, "12 pretty toddler princess DRESSES laid flat facing the camera, each a different color and style: pink ball gown, lilac star dress, mint garden dress, yellow sun dress, blue snow-queen dress, coral beach dress, white wedding-style dress, rainbow tutu, red party dress, purple night dress, golden gala dress, teal mermaid dress.")))
P.append(("C4", "فساتين (١٢ — شيت ٢)", "dress_13..24", "little_princess_dress",
          sheet(GIRL, "12 more pretty toddler princess DRESSES laid flat facing the camera, different from the first sheet: peach flower dress, sky-blue butterfly dress, lavender heart dress, red polka-dot dress, orange sunset dress, green leaf dress, silver ice dress, pink cupcake dress, navy star dress, cream lace dress, rose-gold glitter dress, rainbow ruffle dress.")))
P.append(("C5", "أحذية (١٢)", "shoes_01..12", "little_princess_dress",
          sheet(GIRL, "12 cute toddler princess SHOES, each a pair facing the camera: glittery pink flats, silver slippers, red ballet shoes, blue snow boots, golden sandals, rainbow sneakers, white lace shoes, purple shoes with bows, star boots, butterfly shoes, heart shoes, crystal slippers.")))
P.append(("C6", "تيجان وفيونكات (١٢)", "crown_01..12", "little_princess_dress / little_salon",
          sheet(GIRL, "12 toddler princess crowns, tiaras and hair bows: gold crown, silver tiara, pink flower crown, big red bow, rainbow bow, star clip, butterfly clip, heart crown, pearl headband, snowflake crown, sun crown, crystal tiara.")))
P.append(("C7", "صالون: ٦ بنات جالسات (وش قدام)", "salon_girl_1..6", "little_salon",
          sheet(GIRL, "6 different cute toddler-style girls (different skin tones and hair colors), each sitting on a pink salon chair, FRONT view, hair simple and plain: fill only 6 cells (two rows of 3), leave the rest empty.")))
P.append(("C8", "صالون: تسريحات (٨ طبقات شعر فقط)", "hair_*", "little_salon",
          sheet(GIRL, "8 cartoon hairstyles drawn as hair only (no face, no head) seen from the front: braids, ponytail, two buns, big curls, long straight hair, short bob, pigtails, crown braid. Fill 8 cells, leave the rest empty. Brown hair color.")))
P.append(("C9", "صالون: أدوات (١٢)", "tool_*", "little_salon",
          sheet(GIRL, "12 toddler salon tools with big friendly shapes: brush, comb, pink magic wand, blue magic wand, yellow magic wand, green magic wand, hair dryer, safe round scissors, nail polish bottle, hand mirror, spray bottle, sponge.")))
P.append(("C10", "صالون: فيونكات وكليبسات (١٢)", "bow_*", "little_salon",
          sheet(GIRL, "12 hair accessories: red bow, pink bow, blue bow, yellow bow, purple bow, rainbow bow, star clip, heart clip, flower clip, butterfly clip, pearl clip, ribbon with bells.")))
P.append(("C11", "بيبي: عروسة بوضعيات (١٢)", "baby_*", "baby_and_pet",
          sheet(GIRL, "A cute cartoon baby doll, FRONT view, 12 poses: happy, hungry, eating, drinking from a bottle, dirty with mud, bathing in bubbles, wrapped in a towel, getting brushed, dressed up, yawning, sleeping under a blanket, hugging.")))
P.append(("C12", "قطة بوضعيات (١٢)", "kitten_*", "baby_and_pet",
          sheet(GIRL, "A cute cartoon kitten, FRONT view, 12 poses: happy, hungry, eating, drinking, dirty with mud, bathing in bubbles, wrapped in a towel, getting brushed, wearing a bow, yawning, sleeping under a blanket, hugging a toy.")))
P.append(("C13", "أرنب بوضعيات (١٢)", "bunny_*", "baby_and_pet",
          sheet(GIRL, "A cute cartoon bunny, FRONT view, 12 poses: happy, hungry, eating a carrot, drinking, dirty with mud, bathing in bubbles, wrapped in a towel, getting brushed, wearing a bow, yawning, sleeping under a blanket, hugging a toy.")))
P.append(("C14", "كلب صغير بوضعيات (١٢)", "puppy_*", "baby_and_pet",
          sheet(GIRL, "A cute cartoon puppy, FRONT view, 12 poses: happy, hungry, eating, drinking, dirty with mud, bathing in bubbles, wrapped in a towel, getting brushed, wearing a bow, yawning, sleeping under a blanket, hugging a toy.")))
P.append(("C15", "بيبي: أغراض (١٢)", "care_*", "baby_and_pet",
          sheet(GIRL, "12 baby care items: milk bottle, red apple, carrot, fish, bath sponge, soap bubbles cluster, rubber duck, comb, soft brush, blanket, moon with a sleepy face, teddy bear.")))
P.append(("C16", "المخبز: البنت الخبّازة (١٢)", "baker_*", "cupcake_shop",
          sheet(GIRL, "A cute toddler-style girl baker with a white apron and a pink chef hat, FRONT view, 12 poses: standing, waving, singing, holding a spoon, laughing, carrying a tray, clapping, jumping, surprised, blowing a kiss, serving, dancing.")))
P.append(("C17", "كب كيك: أكواب ورقية + كب كيك جاهز (١٢)", "liner_*, cupcake_*", "cupcake_shop",
          sheet(GIRL, "6 colorful paper cupcake liners (empty, pink, blue, yellow, green, purple, red) and 6 finished cupcakes with swirled cream and a cherry in different colors.")))
P.append(("C18", "كب كيك: كريمة ورشّات وزينة (١٢)", "topping_*", "cupcake_shop",
          sheet(GIRL, "12 cupcake decorations: pink cream swirl, blue cream swirl, yellow cream swirl, green cream swirl, purple cream swirl, rainbow sprinkles, star sprinkles, heart sprinkles, cherry, strawberry, candy star, sugar butterfly.")))
P.append(("C19", "المخبز: الضيوف (١٢)", "guest_*", "cupcake_shop",
          sheet(GIRL, "6 cute animal tea-party guests in two poses each (happy waiting, eating a cupcake): bear, bunny, cat, dog, panda, monkey. Front view.")))
P.append(("C20", "الحديقة: زهور بمراحل (١٢ — شيت ١)", "flower_*", "butterfly_garden",
          sheet(GIRL, "6 flowers in 2 growth stages each (tiny sprout, full bloom), front view, in 6 colors: red, yellow, pink, blue, purple, orange.")))
P.append(("C21", "الحديقة: زهور بمراحل (١٢ — شيت ٢) + أصيص", "flower_*", "butterfly_garden",
          sheet(GIRL, "6 flowers in the BIG bloom stage (red, yellow, pink, blue, purple, orange) and 6 flower pots in matching colors, front view.")))
P.append(("C22", "الحديقة: فراشات (١٢)", "butterfly_*", "butterfly_garden",
          sheet(GIRL, "12 cute cartoon butterflies, front-top view: 4 wing patterns, each in 3 poses (wings open, wings half, wings closed). Plain white-ish wings that a child can color.")))
P.append(("C23", "الحديقة: أغراض (١٢)", "garden_*", "butterfly_garden",
          sheet(GIRL, "12 garden items: watering can, 6 seed packets in different colors, a smiling sun, a fluffy cloud, a rainbow, a water drop, a garden fork toy.")))
P.append(("C24", "الجنيّة المرشدة (١٢ وضعية)", "fairy_*", "كل ألعاب البنات",
          sheet(GIRL, "A tiny cute fairy with a pink dress and glittery wings, a friendly guide, FRONT view, 12 poses: waving, pointing left, pointing right, pointing up, clapping, thinking, flying, blowing a kiss, surprised, giggling, sleeping, sparkling.")))

# ---- D. cards for the girls section -----------------------------------------------------------------------------------------
CARD = ("Image 1024x768 (4:3) game card picture, a single scene, no text, no letters, no UI: ")
for i, (nm, d) in enumerate([("card_princess", "a happy princess girl in a pink ball gown with a golden crown twirling in a pastel castle ballroom with a rainbow"),
                             ("card_salon", "a cute girl in a pink salon chair holding a big mirror with sparkly braided hair and big bows, pastel salon"),
                             ("card_baby_pet", "a baby doll and a kitten and a bunny hugging in a cozy pastel nursery with a moon and stars"),
                             ("card_cupcake", "a girl baker with a pink chef hat holding a giant swirled cupcake with a cherry, pastel bakery with a rainbow"),
                             ("card_butterfly", "a smiling girl watering colorful flowers with many colorful butterflies flying, sunny magic garden with a rainbow")]):
    P.append((f"D{i+1}", f"كارت اللعبة: {nm}", nm, nm.replace("card_", ""), GIRL + "\n" + CARD + d + "."))
P.append(("D6", "غلاف قسم البنات (١٦:٩)", "bg_girls_world", "القسم", GIRL + "\n" + BG + " A magical pastel pink castle on a hill with a rainbow, floating hearts and butterflies, five colorful glowing doors on the ground for five games (a dress, a mirror, a baby bottle, a cupcake, a flower)."))


# ---- F. animated creatures (frames for the 3D-style games: frog, dino, deep sea) -----------------------------------------------
P.append(("F1", "الضفدع الجائع: الضفدع بإطارات الحركة (١٢)", "frog_idle, frog_blink, frog_crouch, frog_jump_up, frog_jump_air, frog_land, frog_tongue_out, frog_tongue_full, frog_eat, frog_hurt, frog_big, frog_king", "hungry_frog",
          sheet(STYLE, "A cute round green frog seen from the FRONT-SIDE (3/4 view looking to the right), same character in every cell, 12 frames: 1 idle sitting, 2 blinking, 3 crouching to jump, 4 jumping up, 5 in the air with legs stretched, 6 landing, 7 mouth open with the tongue starting to come out (tongue pointing right), 8 tongue fully out and straight to the right (long pink tongue), 9 eating with puffed cheeks, 10 hurt with dizzy stars, 11 the same frog but twice bigger with a gold belly, 12 the frog wearing a tiny gold crown.")))
P.append(("F2", "الضفدع الجائع: الأعداء والأكل (١٢)", "frog_bully, frog_bully_big, snake, heron, fly, beetle, dragonfly, snail, lily_pad, reed, mud_splash, bubble", "hungry_frog",
          sheet(STYLE, "12 items for a frog game, each seen from the side facing LEFT: a big grumpy bully frog, an even bigger bully frog, a friendly cartoon snake, a tall heron bird, a fly, a beetle, a dragonfly, a snail, a round lily pad with a flower, a bunch of reeds, a mud splash, a water bubble.")))
P.append(("F3", "ديناصور صغير يكبر: الراپتور بإطارات (١٢)", "raptor_idle, raptor_run1, raptor_run2, raptor_run3, raptor_bite, raptor_hurt, raptor_eat, raptor_big1, raptor_big2, rex_small, rex_mid, rex_big", "dino_grow",
          sheet(STYLE, "A cute baby raptor dinosaur seen from the SIDE facing RIGHT, same character in every cell, 12 frames: idle, run 1, run 2, run 3, biting, hurt, happily eating, then it grows: bigger teen raptor (2 frames), then a small T-rex, a medium T-rex and a big T-rex, all cute and friendly, no blood.")))
P.append(("F4", "ديناصور صغير يكبر: فرائس وأعداء (١٢)", "bug, egg, lizard, frog_small, dodo, stego, trike, ankylo, croc, spino, volcano_rock, fern", "dino_grow",
          sheet(STYLE, "12 prehistoric critters for a dinosaur game, seen from the side facing LEFT, cute and friendly: a bug, a dinosaur egg, a lizard, a small frog, a dodo, a baby stegosaurus, a triceratops, an ankylosaurus, a crocodile, a spinosaurus, a volcano rock, a big fern.")))
P.append(("F5", "أسماك الأعماق: السمكة اللاعبة بأحجام (١٢)", "fish_s1, fish_s2, fish_m1, fish_m2, fish_l1, fish_l2, fish_eat, fish_hurt, fish_dash, fish_boss1, fish_boss2, fish_boss3", "deep_sea",
          sheet(STYLE, "A cute orange-and-white clownfish seen from the SIDE facing RIGHT, same character in every cell, growing: 2 tiny frames, 2 small, 2 medium, 2 large (each pair: tail left and tail right), then eating with a wide mouth, hurt, dashing with speed lines, and three giant glowing boss versions with golden fins.")))
P.append(("F6", "أسماك الأعماق: الفرائس والمفترسات (١٢)", "prey_plankton, prey_shrimp, prey_small_fish, prey_crab, prey_jelly, prey_squid, pred_shark, pred_barracuda, pred_angler, pred_octopus, pred_turtle, pred_whale", "deep_sea",
          sheet(STYLE, "12 sea creatures seen from the SIDE facing LEFT, cute and friendly: plankton glow, shrimp, small blue fish, crab, jellyfish, squid, shark, barracuda, angler fish with a glowing lure, pink octopus, sea turtle, small whale.")))
P.append(("F7", "بطل زومبي الأسطح بالأسلحة (١٢)", "survivor_idle, survivor_run, survivor_shoot, survivor_bomb, survivor_rocket, survivor_hurt, survivor_win, gun_blaster, gun_bomb_launcher, gun_rocket, gun_fireworks, gun_pistol", "zombie_rooftop",
          sheet(STYLE, "A cartoon city fighter in a red jacket seen from a 3/4 TOP view facing right, 7 frames (idle, running, shooting, holding a bomb launcher, holding a rocket launcher, hurt, victory) followed by 5 weapons laid flat: blaster, bomb launcher, rocket launcher, fireworks launcher, pistol. No blood.")))

# ---- G. more content for the five girls levels (owner 2026-11-22: levels were too short) --------------------------------------
P.append(("G1", "عالم الأميرة: ٨ بنات إضافيين للصالون وألبسي الأميرة (وقفة)", "doll_5..doll_12", "little_salon / little_princess_dress",
          sheet(GIRL, "8 more cute toddler-style girl dolls in the same front standing pose with hands on hips, each in a white slip and a pink hair bow, same style as the first four dolls, with different skin tones and hairstyles: black braids, blonde pigtails, auburn bun, curly afro puffs, long wavy dark-brown, short bob, red curly, side ponytail. 4 columns x 2 rows, fill 8 cells.")))
P.append(("G2", "عالم الأميرة: ٦ حقائب وعقود وأغراض زينة (١٢)", "acc_01..acc_12", "little_princess_dress",
          sheet(GIRL, "12 princess accessories for a dress-up game: pink handbag, heart purse, star backpack, pearl necklace, heart necklace, flower necklace, magic wand with a star, fairy wings, pink gloves, butterfly bracelet, sunglasses with heart frames, tiny umbrella.")))
P.append(("G3", "بيبي وصاحبها: ٤ أصدقاء إضافيين بوضعيات الرعاية (بطة صغيرة)", "duck_*", "baby_and_pet",
          sheet(GIRL, "A cute cartoon baby duckling, FRONT view, 12 poses: happy, hungry, eating, drinking, dirty with mud, bathing in bubbles, wrapped in a towel, getting brushed, wearing a bow, yawning, sleeping under a blanket, hugging a toy.")))
P.append(("G4", "بيبي وصاحبها: خروف صغير بوضعيات الرعاية", "lamb_*", "baby_and_pet",
          sheet(GIRL, "A cute cartoon baby lamb, FRONT view, 12 poses: happy, hungry, eating, drinking, dirty with mud, bathing in bubbles, wrapped in a towel, getting brushed, wearing a bow, yawning, sleeping under a blanket, hugging a toy.")))
P.append(("G5", "محل الكب كيك: ٦ أكواب إضافية وزينة وطلبات (١٢)", "cup_13..cup_24", "cupcake_shop",
          sheet(GIRL, "6 more empty paper cupcake liners in new colors and patterns (mint with stars, peach with dots, lilac with hearts, coral with flowers, sky blue with stripes, lemon with stars) followed by their 6 finished cupcakes with swirled cream, sprinkles and a cherry, matching colors.")))
P.append(("G6", "حديقة الفراشات: ٦ أنواع زهور إضافية بثلاث مراحل", "fl3_*", "butterfly_garden",
          sheet(GIRL, "6 more flower types, each in two growth stages side by side in one cell pair (sprout then full bloom), cartoon: tulip, daisy, sunflower, lavender, lily, rose. 4 columns x 3 rows: row 1 sprout/bloom of tulip and daisy, row 2 sunflower and lavender, row 3 lily and rose.")))

# ---- H. Fashion Queen (ages 4+): a professional doll + every clothing piece as a transparent sprite ----------------------------
FASH = ("Premium glossy 3D-rendered cartoon art for a girls fashion dress-up game (ages 4 to 8): soft studio lighting, smooth rounded shapes, big friendly expressive eyes, "
        "pink / lilac / white / gold palette, sparkles, stylish and kid friendly, modest and age-appropriate. No text, no letters, no numbers, no logos, no real brands, no heavy makeup.")
FLAT = " All garments are laid FLAT, seen straight from the FRONT, symmetrical, shaped to fit a slim cartoon fashion doll (about 5 heads tall), each one a similar size, no mannequin, no hanger, no body inside."
P.append(("H1", "ملكة الموضة: العروسة الأساسية بأوضاع (١٢)", "fq_doll_*", "fashion_queen",
          sheet(FASH, "A stylish cartoon fashion doll girl, about 5 heads tall, slim, long legs and feet, FRONT view, arms slightly away from the body so clothes can be drawn over her, wearing only a plain white tank top and white shorts (like underwear layers) and barefoot, big friendly eyes, light-brown skin, long brown hair. 12 cells: 4 columns x 3 rows: row 1 = the SAME doll standing neutral, smiling wide, winking, surprised; row 2 = turning left (3/4 view), turning right (3/4 view), back view, side view; row 3 = hand on hip, twirling, waving, blowing a kiss. Same character in every cell.")))
P.append(("H2", "ملكة الموضة: ٤ عرايس بألوان بشرة وشعر مختلفة (وقفة)", "fq_doll_light/dark/tan/red", "fashion_queen",
          sheet(FASH, "4 stylish cartoon fashion doll girls with the exact same body, size and standing pose as the first doll (arms slightly away, tank top and shorts, barefoot): fair skin with blonde hair, dark skin with black curly hair, tan skin with straight dark hair, light skin with red hair. Fill the top row only (4 cells), leave the rest empty.")))
P.append(("H3", "ملكة الموضة: ٦ فساتين — ستايلات مختلفة (لون وردي)", "dress_gown_rose, dress_mermaid_rose, dress_mini_rose, dress_aline_rose, dress_ball_rose, dress_wrap_rose", "fashion_queen",
          sheet(FASH + FLAT, "6 DRESSES, all in rose pink, one style each, in 2 rows of 3 (fill 6 cells, leave the rest empty): an elegant long gown, a mermaid dress that flares at the knees, a short mini party dress, an A-line knee-length dress, a big princess ball gown, a wrap dress with a bow.")))
for i, (col, nm) in enumerate([("white", "أبيض"), ("purple", "بنفسجي"), ("blue", "أزرق"), ("red", "أحمر")]):
    P.append((f"H{4+i}", f"ملكة الموضة: نفس الـ٦ فساتين باللون {nm}", f"dress_*_{col}", "fashion_queen",
              sheet(FASH + FLAT, f"The SAME 6 dress styles as the rose sheet (long gown, mermaid, mini party dress, A-line, ball gown, wrap dress) with identical shapes and proportions, all in {col}, 2 rows of 3, fill 6 cells.")))
P.append(("H8", "ملكة الموضة: البلوزات (١٢)", "top_*", "fashion_queen",
          sheet(FASH + FLAT, "12 TOPS: a t-shirt, a blouse with a bow, a hoodie, a knit sweater, a crop top, in white (5 items) then the same 5 shapes in pink, then two sky-blue ones (t-shirt and hoodie). Order: 5 white, 5 pink, 2 sky blue.")))
P.append(("H9", "ملكة الموضة: التنانير والبناطيل (١٢)", "bottom_*", "fashion_queen",
          sheet(FASH + FLAT, "12 BOTTOMS laid flat: a short skirt, a long skirt, a pleated skirt, jeans, leggings, shorts, shown in black (6 items) and then the same 6 in blue denim / cream (6 items).")))
P.append(("H10", "ملكة الموضة: الأحذية (١٢ — ٦ موديلات × لونين)", "shoes_*", "fashion_queen",
          sheet(FASH, "12 SHOES, each a PAIR seen from the FRONT-SIDE 3/4 view: high heels, ballet flats, boots, sandals, sneakers, crystal slippers, shown in white (6 pairs) and in rose pink (6 pairs).")))
P.append(("H11", "ملكة الموضة: الشنط والعقود (١٢)", "bag_*, neck_*", "fashion_queen",
          sheet(FASH, "12 items: 5 BAGS (a clutch, a tote, a mini bag, a backpack, a crossbody bag) in rose pink, then 4 NECKLACES (pearls, a heart pendant, a star pendant, a choker) in gold, then 3 more bags in gold (clutch, tote, mini).")))
P.append(("H12", "ملكة الموضة: الحلق والأساور والنظارات (١٢)", "ears_*, wrist_*, face_*", "fashion_queen",
          sheet(FASH, "12 small accessories, each shown as a PAIR where natural: stud earrings, hoop earrings, drop earrings (gold), then the same three in silver, then a gold bracelet, a wristwatch, gold bangles, then black sunglasses and heart-shaped pink sunglasses seen from the front.")))
P.append(("H13", "ملكة الموضة: التيجان والإكسسوارات للرأس (١٢)", "head_*", "fashion_queen",
          sheet(FASH, "12 HEAD accessories seen from the front: a crown, a tiara, a hair bow, a sun hat, a flower crown, a bridal veil, a beanie, shown in gold / rose where they have colors (7 items), then 5 more: a gold crown with jewels, a silver tiara, a red hair bow, a straw sun hat with a ribbon, a pink beanie.")))
P.append(("H14", "ملكة الموضة: ٨ تسريحات شعر (طبقات شعر فقط)", "hair_*", "fashion_queen",
          sheet(FASH, "8 hairstyles drawn as HAIR ONLY (no head, no face) seen from the front, brown: long straight, curly, bun, ponytail, braid, bob, wavy, pigtails. 4 columns x 2 rows, fill 8 cells.")))
P.append(("H15", "ملكة الموضة: الحيوانات الأليفة (١٢)", "pet_*", "fashion_queen",
          sheet(FASH, "8 cute pets, FRONT view, each in a happy pose, big eyes: a kitten, a puppy, a bunny, a panda, a pony, a hamster, a parrot, a little fox, then 4 small pet items: a pet bed, a food bowl, a ball, a pink leash.")))
P.append(("H16", "ملكة الموضة: أثاث الغرف (١٢)", "furn_*", "fashion_queen",
          sheet(FASH, "12 cute pieces of furniture and decor for a dream house, each seen from the front: a canopy bed, a wardrobe, a vanity table with a mirror, a sofa, a rug, a lamp, a bookshelf, a toy chest, a plant in a pot, a window with curtains, a picture frame, a bean bag.")))

# ---- I. one main sheet for every other fun game (professional pictures instead of code-drawn figures) ---------------------------
import importlib.util
_spec = importlib.util.spec_from_file_location('more_prompts', os.path.join(os.path.dirname(os.path.abspath(__file__)), 'more_prompts.py'))
_mp = importlib.util.module_from_spec(_spec); _spec.loader.exec_module(_mp)
for _k, (_gid, _ar, _view, _items) in enumerate(_mp.GAMES, 1):
    if _items.startswith('see sheets'): continue
    P.append((f"I{_k}", f"{_ar}: الشيت الأساسي (شخصيات وأغراض اللعبة)", f"{_gid}_*", _gid,
              sheet(STYLE, f"12 items for the game '{_gid.replace('_', ' ')}', ALL seen from {_view} the same way, same scale, cartoon and friendly (no scary details, no blood): {_items}.")))

# ---- E. backgrounds ---------------------------------------------------------------------------------------------------------
bgs = {
    "E1": ("خلفيات ألبسي الأميرة (٦)", "little_princess_dress", ["a pastel castle bedroom with a big window and a canopy bed", "a garden tea party with a gazebo and flowers", "a snowy ice castle with crystal pillars", "a sunny beach party with palm trees and a pastel tent", "a magic forest with glowing mushrooms and fairy lights", "a rainbow ballroom with chandeliers and a shiny floor"]),
    "E2": ("خلفيات الصالون (٦)", "little_salon", ["a pink salon with a giant mirror in the middle and shelves of tools at the sides", "a princess salon with gold frames and a velvet chair area", "a garden salon with flowers and trellis walls", "a rainbow salon with colorful walls", "an ice-themed salon with snowflake decorations", "a starry night salon with moon lamps"]),
    "E3": ("خلفيات بيبي وصاحبها (٦)", "baby_and_pet", ["a pastel nursery with a crib, toys and a window", "a garden home yard with a swing and flowers", "a cozy bathroom with a bathtub and rubber ducks", "a cute farm barn with hay bales", "a snowy cabin with a fireplace", "a rainbow playroom with cushions"]),
    "E4": ("خلفيات محل الكب كيك (٦)", "cupcake_shop", ["a garden bakery counter with flower pots", "a rainbow bakery with colorful shelves", "a snowy bakery with a winter window", "a beach bakery with a striped awning and the sea behind", "a castle bakery with golden arches", "a starry night bakery with lanterns"]),
    "E5": ("خلفيات حديقة الفراشات (٦)", "butterfly_garden", ["a spring meadow with six empty flower pots in a row on soft grass", "a tulip field with a windmill far away and six empty pots", "a sunflower farm with six empty pots", "a rose garden with an arch and six empty pots", "a snowy winter garden with ice crystals and six empty pots", "a magic night garden with glowing fireflies and six empty pots"]),
}
for k, (title, gid, items) in bgs.items():
    for j, it in enumerate(items, 1):
        P.append((f"{k}.{j}", f"{title} — {j}", f"bg_{gid}_{j}", gid, GIRL + "\n" + BG + " " + it[0].upper() + it[1:] + "."))

out = io.open("docs/CHATGPT_PROMPTS.md", "w", encoding="utf8")
w = out.write
w("# برومتات توليد الصور من ChatGPT — جاهزة للنسخ (%d برومت)\n\n" % len(P))
w("**الطريقة:** كل برومت تحت **كتلة واحدة كاملة** (فيها الأسلوب وقواعد الشيت والعناصر) — انسخها كلها كما هي في ChatGPT. "
  "ابعتيلي الصورة الناتجة وأنا أقصّها (`python tools/cut_sprite.py شيت.png 4x3 الأسماء مجلد_اللعبة/art`) وأركّبها في اللعبة.\n\n")
w("**الترتيب المقترح (الأهم أولًا):** A1 ← A2 ← A3 ← … (عربيات) ثم C1..C6 (ألبسي الأميرة) ثم باقي ألعاب البنات ثم B (الشخصيات) ثم E (الخلفيات).\n\n")
w("**نصايح لـ ChatGPT:** (1) ولّد الصورة بنسبة 3:2 (1536×1024). (2) لو الخلفية طلعت مش بيضا صافية قول: «Make the background pure flat white #FFFFFF, remove the shadows». "
  "(3) لو العناصر لزقت في بعض قول: «Increase the margin between items, no overlaps». (4) اطلب نفس الشخصية في كل الخانات: «Keep the exact same character design in every cell». "
  "(5) في الخلفيات: اطلب 16:9 (1920×1080) صورة واحدة.\n\n")
groups = [("I", "شيت أساسي لكل لعبة تسلية (باقي الألعاب)"), ("H", "ملكة الموضة (٤+): عروسة احترافية وكل القطع كصور شفافة"), ("G", "إضافات لزيادة محتوى مستويات عالم الأميرة"), ("F", "مخلوقات بإطارات حركة (ضفدع، ديناصور، أسماك، بطل الأسطح)"), ("A", "عربيات وطيارات (منظر خلفي بالظبط)"), ("B", "شخصيات الألعاب (وضعيات)"), ("C", "قسم البنات ٢–٤ سنين (شخصيات وأغراض)"), ("D", "كروت قسم البنات وغلافه"), ("E", "خلفيات قسم البنات (٣٠)")]
for g, title in groups:
    w("\n---\n\n## %s — %s\n\n" % (g, title))
    for pid, ttl, files, unlocks, body in P:
        if not pid.startswith(g): continue
        w("### %s — %s\n" % (pid, ttl))
        w("- **الملفات:** `%s`\n- **بتفتح:** %s\n\n" % (files, unlocks))
        w("```\n" + body + "\n```\n\n")
out.close()
print(len(P), "prompts")
