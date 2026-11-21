# Builds docs/NEW_LEVELS_IMAGE_SCRIPTS.md : picture prompts for every level / background added on 2026-11-21
# (the older docs/ALL_GAMES_IMAGE_SCRIPTS.md covers the first levels).
import io

STYLE = ("Glossy 3D-rendered cartoon style for a children's game: soft studio lighting, smooth rounded shapes, bright saturated colors, "
         "thick clean edges, cute friendly look, simple readable silhouettes, no text, no letters, no logos, nothing scary, no blood.")
BG = "Wide game background 1920x1080 landscape, empty center area for gameplay, no characters in the middle, depth with foreground/midground/background layers. "
CUT = "Single character or object, centered, pure flat white background (#FFFFFF), 60 px margin, soft grey-blue edge shading, no ground shadow. "

G = [
    ("hungry_frog", "لعبة الضفدع الجائع", [
        ("bg_moon_pond", "level 4 Moon Pond: " + BG + "A calm night pond lit by a big pale moon, lily pads, glowing fireflies, reeds, purple-blue water, soft mist."),
        ("bg_emerald_marsh", "level 5 Emerald Marsh: " + BG + "A misty green swamp, giant mossy logs, hanging vines, glowing mushrooms, emerald water."),
        ("bg_legend_lake", "level 6 Legend Lake: " + BG + "A golden sunrise lake with tall golden reeds, a stone arch, floating petals, warm light."),
        ("boss_grandpa_bo", CUT + "Boss: a huge old wise bullfrog named Grandpa Bo with a mossy cape, big sleepy eyes, friendly grumpy face."),
        ("boss_queen_slay", CUT + "Boss: a pink-and-green frog queen with a tiny crown, glossy skin, proud smile."),
        ("boss_heron_king", CUT + "Boss: a tall cartoon heron king with a golden crown and a long beak, standing on one leg, not scary."),
    ]),
    ("deep_sea", "أسماك الأعماق", [
        ("bg_night_reef", "level 4 Night Reef, side-view underwater. " + BG + "Dark blue reef with glowing coral and bioluminescent plankton, moonlight beams from above."),
        ("bg_shipwreck", "level 5 Shipwreck, side-view underwater. " + BG + "A broken wooden ship half buried in sand, barrels, anchor, schools of small fish, green-blue water."),
        ("deco_wreck_set", "Underwater decoration set: ship mast, anchor, treasure chest, barrel as 4 separate items. " + CUT),
        ("bg_abyss_castle", "level 6 Abyss Castle, side-view underwater. " + BG + "A glowing sunken castle with towers and arches, deep purple-blue, pale jellyfish lights."),
    ]),
    ("ice_dragon", "طريق التنين الجليدي (التنين)", [
        ("bg_ice_bridge", "level 4 Ice Bridge: " + BG + "A frozen stone bridge over a deep glowing blue chasm, snowy peaks, aurora sky."),
        ("bg_ghost_lake", "level 5 Ghost Lake: " + BG + "A foggy frozen lake with pale blue lanterns on ice, friendly ghost-shaped mist, silver moonlight."),
        ("bg_mountain_heart", "level 6 Mountain Heart: " + BG + "Inside a crystal cave, a giant glowing ice-crystal heart in the middle, shimmering walls."),
    ]),
    ("fox_family", "أم الثعلب", [
        ("bg_fields_run", "level 4 Fields Race: " + BG + "Top-down friendly countryside road, golden wheat fields, scarecrow, little barns."),
        ("bg_red_leaves", "level 5 Red Leaf Forest: " + BG + "Top-down forest road covered by red and orange leaves, pumpkins, mushrooms."),
        ("bg_snow_summit", "level 6 Snow Summit: " + BG + "Top-down snowy mountain road, snowmen, pine trees, a little cabin, falling snow."),
        ("bg_spring_new", "new season Spring: " + BG + "Top-down road with pink blossom trees, tulips, butterflies, a stream."),
    ]),
    ("moto_race", "سباق الدراجات", [
        ("bg_night_beach", "round 5 Night Beach: " + BG + "A coastal road at night, lit lamp posts, moon over the sea, neon palm trees."),
        ("bg_champions_cup", "round 6 Champions Cup: " + BG + "A grand stadium-style coastal circuit with colorful flags, fireworks, cheering crowd of cartoon animals."),
    ]),
    ("rain_circuit", "سباق حلبة المطر", [
        ("bg_thunder_marsh", "round 5 Thunder Marsh: " + BG + "A racing track through a rainy marsh with cartoon lightning in the distance, puddles, cattails."),
        ("bg_storm_cup", "round 6 Great Storm Cup: " + BG + "A rainy stadium circuit under dark purple clouds, a big rainbow breaking through, trophies on a podium."),
    ]),
    ("dune_titans", "تيتان الكثبان", [
        ("bg_sandstorm", "round 5 Sandstorm: " + BG + "Desert dunes with a swirling warm orange sandstorm, silhouettes of cacti and rock arches."),
        ("bg_titan_cup", "round 6 Grand Titan Cup: " + BG + "A desert stadium with giant sandstone statues, flags, golden evening light."),
    ]),
    ("air_race", "سباق الطائرات", [
        ("bg_big_lagoon", "course 4 Big Lagoon: " + BG + "A huge turquoise lagoon with tiny islands, rock arches, white clouds, seen from above the water."),
        ("bg_ice_storm", "course 5 Ice Storm: " + BG + "A glacier valley sky with swirling snow, icy arches, pale blue light."),
    ]),
    ("summit_rush", "سباق القمة", [
        ("bg_big_lagoon_slope", "slope 4: " + BG + "A snowy mountain slope with tall pine forest and a wide glittering frozen lake on the side."),
        ("bg_ice_storm_slope", "slope 5 Ice Storm: " + BG + "A steep icy slope in a snowstorm, swirling flakes, a distant glowing summit."),
    ]),
    ("nutmeg_rush", "سكة الكورة", [
        ("bg_big_stand", "level 4 Big Stand: " + BG + "A football pitch seen from the side, a packed colorful stand of cartoon animals, evening floodlights."),
        ("bg_final", "level 5 Champions Final: " + BG + "A glowing night stadium with confetti, giant trophy statue behind the goal."),
        ("bg_legends_cup", "level 6 Legends Cup: " + BG + "A golden stadium with flags of many colors and fireworks."),
        ("bg_world_cup", "level 7 World Championship: " + BG + "A giant globe-themed stadium with fireworks over the roof, rainbow spotlights."),
    ]),
    ("ocean_defense", "دفاع القلعة البحرية", [
        ("bg_jelly_garden", "level 4 Jellyfish Garden, side-view underwater. " + BG + "Pink and violet glowing jellyfish drifting over soft coral."),
        ("bg_octopus_lair", "level 5 Octopus Lair, side-view underwater. " + BG + "A dark blue cave with round windows, treasure piles and friendly lamps."),
        ("bg_pearl_castle", "level 6 Pearl Castle, side-view underwater. " + BG + "A white-and-pink castle built from giant pearls and shells."),
        ("bg_ocean_floor", "level 7 Ocean Floor, side-view underwater. " + BG + "Deepest blue trench with glowing lantern fish and a giant clam."),
    ]),
    ("rhythm", "البقاء على الإيقاع", [
        ("bg_music_box", "track 5 Music Box: top view of a spinning record on a pastel music-box lid, gears, tiny dancing figures around."),
        ("bg_concert_hall", "track 6 Concert Hall: " + BG + "A grand hall with red curtains, gold balconies, round stage lights."),
        ("bg_grand_orchestra", "track 7 Grand Orchestra: " + BG + "A big stage with cartoon instruments (violins, drums, horns) around, warm spotlight."),
    ]),
    ("highway_race", "طريق الغروب", [
        ("bg_mountain_dawn", "stage 4 Mountain Dawn: " + BG + "Road winding along a mountain at sunrise, pink-gold sky, pine forest."),
        ("bg_rain_road", "stage 5 Rainy Road: " + BG + "A coastal highway in light rain, glowing wet asphalt, a rainbow beginning to appear."),
        ("bg_last_city", "stage 6 Last City Race: " + BG + "A neon-lit city highway at dusk, skyscrapers, balloons, finish arch."),
    ]),
    ("samurai", "سيف الساموراي", [
        ("bg_bamboo_night", "stage 4: " + BG + "A bamboo forest at night with lanterns, moon and falling petals."),
        ("bg_snow_dojo", "stage 5: " + BG + "A snowy dojo courtyard, red torii gate, cherry petals mixed with snow."),
        ("bg_castle_gate", "stage 6: " + BG + "A big castle gate at sunrise, banners, stone steps, petals in the wind."),
    ]),
    ("splash_race", "سباق السباحة", [
        ("bg_snail_whirl", "round 5 Snail Whirlpool: top view of a pool with a spiral water slide shaped like a snail shell."),
        ("bg_final_pool", "round 6 Final: top view of a giant water park finish pool with flags and a golden podium."),
    ]),
    ("course_race", "سباق السماء الغريبة / سباق القمة (وحيد القرن)", [
        ("bg_alien_nebula", "alien sky rounds 4-6: " + BG + "A purple-pink alien sky with floating rock islands, ringed planets and soft nebula."),
        ("bg_alien_ruins", "alien sky round 6: " + BG + "Giant crystal ruins floating in a green aurora sky."),
        ("bg_rhino_peaks", "rhino summit rounds 4-6: " + BG + "Snowy mountain peaks with a rope bridge and warm sunrise."),
        ("char_rhino_rider", CUT + "A friendly cartoon rhino with a tiny scarf, racing pose."),
    ]),
    ("dino_grow", "ديناصور صغير يكبر", [
        ("bg_deep_fern", "level 4 Deep Fern Hollow: " + BG + "A thick prehistoric jungle with giant ferns and glowing flowers."),
        ("bg_black_swamp", "level 5 Black Swamp: " + BG + "A dark teal swamp with big lily pads, fireflies and twisted trees."),
        ("bg_volcano_peak", "level 6 Volcano Peak: " + BG + "The rim of a cartoon volcano with orange lava glow, smoke clouds, rocky ledges."),
    ]),
    ("carnival_race", "سباق ملاهي الأبطال", [
        ("bg_mirror_pier", "tracks 4-6 are mirrored versions: " + BG + "An amusement pier at night with neon lights and a ferris wheel (3 variants: pier, lanterns, stars)."),
    ]),
    ("jungle_adventure", "مغامرة الأدغال", [
        ("bg_night_trail", "level 4 Night Jungle Trail: " + BG + "A jungle trail at night with glowing flowers, fireflies and moonlight."),
        ("bg_forgotten_ruins", "level 5 Forgotten Ruins: " + BG + "Overgrown stone ruins with vines, statues and mist."),
        ("bg_great_sun_temple", "level 6 Great Sun Temple: " + BG + "A golden sun temple with huge stone steps and a glowing sun disc."),
    ]),
    ("gummy_squad", "فرقة الدببة الجيلي", [
        ("bg_candy_stage4", "stages 4-6: " + BG + "A candy-land battlefield with lollipop trees, chocolate river, gumdrop hills (3 variants: day, dusk, night)."),
        ("boss_gummy_giant", CUT + "A giant gummy bear boss, red jelly, glossy, with a grumpy-cute face."),
    ]),
    ("hero_tower", "برج الأبطال", [
        ("bg_chapter4_ice", "chapter 4: " + BG + "Inside a tower floor with ice walls, blue torches."),
        ("bg_chapter5_lava", "chapter 5: " + BG + "Inside a tower floor with warm lava glow, red banners."),
        ("bg_chapter6_sky", "chapter 6: " + BG + "The tower top among golden clouds, a crown-shaped door."),
        ("boss_chapter_set", CUT + "Three new boss characters for chapters 4-6: an ice troll, a lava sorcerer, a sky dragon (3 separate images)."),
    ]),
    ("winter_camp", "معسكر الشتاء", [
        ("build_greenhouse", CUT + "A cozy glass greenhouse with plants inside, snow on the roof."),
        ("build_watchtower", CUT + "A wooden watchtower with a lantern on top, snow on the roof."),
    ]),
    ("coastal_drive", "سباق الطريق الساحلي", [
        ("bg_canyon_road", "level 4 Canyon Road: " + BG + "A road through a red canyon at sunset, rock arches."),
        ("bg_neon_duel", "level 5 Neon Duel: " + BG + "A night coastal road with pink and blue neon signs, wet road."),
        ("bg_midnight_rush", "level 6 Midnight Rush: " + BG + "A moonlit road along the sea with stars and a glowing lighthouse."),
    ]),
    ("golden_tail", "مغامرة الذيل الذهبي", [
        ("bg_slides", "level 4 Slides: " + BG + "A treetop park with long colorful wooden slides and rope bridges."),
        ("bg_watch_tower", "level 5 Watchtower: " + BG + "A big treehouse tower among clouds."),
        ("bg_forest_cup", "level 6 Forest Championship: " + BG + "A festive forest with banners, lanterns and a golden trophy."),
    ]),
    ("castaway_raft", "طوف الناجي", [
        ("bg_lost_coral", "level 5 Lost Coral: " + BG + "Shallow turquoise water with a pink coral reef, sunlight rays."),
        ("bg_storm_strait", "level 6 Storm Strait: " + BG + "A cartoon stormy sea with big waves and a rainbow gap in the clouds."),
        ("bg_whale_gate", "level 7 Whale Gate: " + BG + "Two huge rocks forming a gate with a friendly whale tail behind."),
        ("bg_treasure_island", "level 8 Treasure Island: " + BG + "A tropical island with a palm tree, a big X on sand and a golden chest."),
    ]),
    ("temple_army", "جيش المعبد", [
        ("bg_saw_corridor", "level 4: " + BG + "A stone corridor with cartoon sawblades on the walls, torches."),
        ("bg_vine_temple", "level 5: " + BG + "A temple room tangled with green vines and glowing runes."),
        ("bg_golem_arena", "level 6: " + BG + "A round stone arena with a big golem statue in the back."),
    ]),
]

out = io.open('docs/NEW_LEVELS_IMAGE_SCRIPTS.md', 'w', encoding='utf8')
n = sum(len(x[2]) for x in G)
out.write("# برومتات صور المستويات والخلفيات الجديدة (%d برومت) — 2026-11-21\n\n" % n)
out.write("المستويات دي اتضافت يوم 2026-11-21 (ألعاب بقت 6 مستويات أو أكتر). الملف مكمّل لـ `docs/ALL_GAMES_IMAGE_SCRIPTS.md`. "
          "كل برومت بالإنجليزي جاهز للصق. اكتب سطر الأسلوب قبل كل برومت.\n\n")
out.write("## سطر الأسلوب (STYLE) — يتلصق قبل كل برومت\n```\n" + STYLE + "\n```\n\n")
out.write("**ملاحظة:** الصور بتتحط في `assets/games/<اللعبة>/art/` بأسماء الملفات اللي تحت (وبيتضاف `- assets/games/<اللعبة>/art/` في pubspec لو مش موجود). "
          "اللعبة بتستخدم الصورة لو موجودة وإلا بترسم بالكود. الأسماء دي بتتربط في الكود وقت التركيب.\n\n")
for gid, name, items in G:
    out.write("## %s — `%s`\n\n" % (name, gid))
    for fn, prompt in items:
        out.write("- **%s** — %s\n" % (fn, prompt))
    out.write("\n")
out.close()
print(n, 'prompts')
