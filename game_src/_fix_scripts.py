import os, re
os.chdir('C:/dev/rehlaty')
p = 'tools/image_scripts_new.py'
s = open(p, encoding='utf8').read()
a = s.index("game(46, 'استوديو الأميرات'")
b = s.index("game(47,")
s = s[:a] + s[b:]
s += '''

game(46, 'ملكة الموضة (Fashion Queen)', 'Fashion Queen - Ultimate Girls World',
     "Premium glossy 3D-rendered cartoon girls mobile game art, pink purple white and gold palette, sparkles, soft studio lighting, big expressive eyes, adorable characters, rounded glossy UI, kid friendly, no real brands.",
     [('hero_girl_poses', 'sprite', 'A beautiful young cartoon fashion designer with long wavy brown hair, big sparkling eyes and a tiara: idle, wave, thinking, walking, runway pose, victory, dancing, spinning; eight files, transparent background.'),
      ('doll_base_layers', 'sprite', 'The same girl as a clean dress-up base in front view, arms slightly out, five skin tones, separate layers for body, face, eyes with six colors, eyelashes (natural, long, wing, glam); transparent background.'),
      ('hairstyles_eight', 'sprite', 'Eight hairstyles as front and back layers (long, curly, bun, ponytail, braid, bob, wavy, pigtails), each in a neutral grey so it can be tinted; sixteen files.'),
      ('dresses_thirty', 'sprite', 'Thirty dresses as separate transparent pieces fitting the doll: six styles (gown, mermaid, mini, A-line, ball gown, wrap) in five colors (rose, white, purple, blue, red) with soft glossy fabric shading.'),
      ('tops_bottoms', 'sprite', 'Fifteen tops (tee, blouse, hoodie, sweater, crop in white, pink, sky) and eighteen bottoms (skirt, long skirt, pleated skirt, jeans, leggings, shorts in black, denim, cream); transparent pieces.'),
      ('shoes_bags', 'sprite', 'Eighteen shoes (heels, flats, boots, sandals, sneakers, crystal in white, rose, gold) and ten bags (clutch, tote, mini, backpack, crossbody in rose and gold); transparent pieces.'),
      ('jewelry_crowns', 'sprite', 'Necklaces (pearls, heart, star, choker), earrings (studs, hoops, drops), bracelets (bracelet, watch, bangles), crowns (crown, tiara, bow, sun hat, flower crown, veil, beanie), glasses (sunglasses, heart glasses); transparent pieces in gold, silver and rose.'),
      ('salon_tools', 'sprite', 'Beauty salon tools and icons: shampoo and water spray, hair dryer, scissors and comb, hair dye brush, eyeshadow palette, lipsticks in eight colors, blush brush, mascara, nail polish bottles in eight colors; transparent.'),
      ('pets_seven', 'sprite', 'Seven adorable 3D cartoon pets with big eyes in four moods each (happy, hungry, sleepy, playing): puppy, kitten, rabbit, panda, pony, fluffy kitten, baby dog; plus six pet outfits and six pet beds; transparent.'),
      ('pet_care_icons', 'ui', 'Pet care icons: food bowl, bone, carrot, fish, apple, shampoo bubbles, brush, ball toy, bed, heart reaction bubble.'),
      ('rooms_six', 'scene', 'Six luxurious dollhouse rooms seen from the front: princess bedroom, living room, kitchen, bathroom, dressing room, garden; empty of furniture, 1080x1920 portrait each.'),
      ('furniture_sets', 'sprite', 'Furniture and decoration pieces for each room (beds, sofas, TVs, plants, lamps, mirrors, bathtubs, wardrobes, garden fountains, swings) in pastel colors; transparent pieces.'),
      ('runway_scene', 'scene', 'A glamorous fashion runway with spotlights, pink carpet, cheering audience silhouettes, a big glowing backdrop; no characters, 1080x1920.'),
      ('runway_ui', 'ui', 'Competition cards for eight themes (Princess Night, Summer Beach, Wedding Party, Winter Fashion, School Style, Royal Ball, Casual Day, Fantasy Fashion), a golden trophy, star ratings, confetti burst.'),
      ('world_map', 'scene', 'A colorful fantasy world map with six themed islands (Fashion City, Beauty Palace, Pet Paradise, Dream House, Royal Runway, Magical Fashion Island), winding path with numbered level dots, treasure chests; 1080x1920.'),
      ('menu_palace_bg', 'scene', 'A magical pink fashion palace exterior at golden hour with sparkling towers and a garden, no characters, 1080x1920.'),
      ('ui_kit', 'ui', 'Glossy rounded pink, purple and gold UI kit: PLAY button, round icon buttons (studio, salon, pets, house, runway, shop, settings, missions), coin, pink diamond, star, locked padlock, tabs, sliders, panels.'),
      ('card_fashion_queen', 'scene', CARD)])

game(49, 'فيزمان (Fizz Man) - بديل أصلي', 'Fizz Man (original soda-hero runner)',
     "Premium 3D-rendered arcade endless-runner art, bright saturated colors, glossy cartoon superhero in a blue-and-silver suit with a chest bubble emblem (ORIGINAL, no real brand logos), dynamic action poses, sunny city.",
     [('hero_turnaround', 'sprite', 'The muscular friendly blue-and-silver superhero with a smooth silver helmet and chest emblem, T-pose front, side and back views, plus thumbs-up; four files, transparent background.'),
      ('hero_action_poses', 'sprite', 'The hero in action: running (4 frames), jumping, sliding under a bar, dodging left, dodging right, stunt spin, crash reaction, victory; twelve files.'),
      ('cans_powerups', 'sprite', 'Shiny blue-and-silver generic fizzy soda cans (standing, tilted), a magnet, a shield bubble, a gold star; transparent.'),
      ('obstacles_vehicles', 'sprite', 'Red-white barrier, traffic cones, an overhead gantry bar, a stunt ramp, a taxi, a yellow car, a delivery truck, a blue truck; transparent pieces.'),
      ('env_city', 'scene', 'Modern city street at noon with trees, towers and billboards (generic), 1080x1920.'),
      ('env_downtown', 'scene', 'Busy downtown avenue with skyscrapers and traffic, 1080x1920.'),
      ('env_shops', 'scene', 'Colorful shopping district with awnings and shop windows, 1080x1920.'),
      ('env_industry', 'scene', 'Industrial area with chimneys, pipes and containers at dusk, 1080x1920.'),
      ('env_highway', 'scene', 'Elevated highway at sunset with moving traffic and guardrails, 1080x1920.'),
      ('env_bonus', 'scene', 'A magical fizzy bonus world with giant floating cans, bubbles and a rainbow road, 1080x1920.'),
      ('menu_ui', 'ui', 'Main menu art: the hero in a low dash pose over a city skyline with the title FIZZ MAN, glossy PLAY, LEVELS, HIGH SCORE, SETTINGS, QUIT buttons, level select cards with stars and a locked padlock, game over panel with RESTART and HOME.'),
      ('card_fizz_man', 'scene', CARD)])

game(50, 'أقسام ألعاب التسلية (واجهة التقسيم الجديد)', 'Fun Games Sections (new menu art)',
     "Premium 3D-rendered mobile game menu art, wide cinematic panels, rich saturated colors, glowing edges, rounded glossy golden frames, kid friendly, no text on the pictures (the app writes the names).",
     [('section_racing', 'scene', 'A wide 1.7:1 panel for RACING: a sports car, a desert truck and a motorbike racing together on a sunset coastal road with speed lines and checkered flags, dynamic angle.'),
      ('section_action', 'scene', 'A wide 1.7:1 panel for ACTION AND BATTLES: a samurai, an archer squad, an ice dragon and a brave knight in an epic cartoon fantasy clash, no gore, magical effects.'),
      ('section_runners', 'scene', 'A wide 1.7:1 panel for RUNNERS AND JUMPERS: a cartoon runner leaping over gaps on floating islands among clouds, with a jungle explorer, a space creature and a rhino racer.'),
      ('section_build', 'scene', 'A wide 1.7:1 panel for FARMS AND BUSINESSES: a sunny cozy farm with a honey stand, a bakery, a pearl-diving boat and a snowy camp, tiny happy workers, coins sparkling.'),
      ('section_puzzle', 'scene', 'A wide 1.7:1 panel for PUZZLES AND BRAIN GAMES: colorful balls pouring into a funnel, a maze with a friendly yellow chomper and ghosts, an ice path puzzle, glowing question marks.'),
      ('section_girls', 'scene', 'A wide 1.7:1 panel for GIRLS WORLD: a glamorous pink fashion palace, a cute girl with a tiara and a kitten, sparkles and dresses.'),
      ('sections_page_bg', 'scene', 'The page background for the sections screen, 1920x1080: deep purple night sky with soft glowing stars and floating game icons, no characters, empty center.'),
      ('sections_title_banner', 'ui', 'A golden ribbon banner frame for the title (empty center), 1536x400.'),
      ('section_back_button', 'ui', 'A round glossy purple back-arrow button with white border, 256x256.')])
'''
open(p, 'w', encoding='utf8').write(s)
print('ok')
