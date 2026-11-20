import json, os
os.chdir('C:/dev/rehlaty')
base = json.load(open('tools/art_jobs/cards.json', encoding='utf8'))
P = {
 'alien_sky': 'A small colorful racer craft zooming through a neon alien sky among floating crystal islands and glowing rings, pink and green nebula.',
 'archer_bridge': 'A cute hero archer with a glowing bow on a fiery stone bridge over lava, facing friendly goblins, sparks and embers.',
 'ball_scoop': 'A chunky yellow truck scooping a huge pile of colorful balls on a plank bridge over a teal sea with white clouds.',
 'castaway_raft': 'A castaway kid on a wooden raft with a hook collecting floating barrels and planks on a tropical sea, palm island, sunset.',
 'chomp_maze': 'A round yellow hungry hero chomping glowing dots in a neon blue maze with friendly colorful ghosts chasing.',
 'cloud_dash': 'A cute runner dashing on a pastel cloud path through the sky with sparkles and a rainbow, three lanes.',
 'creator_tycoon': 'A young creator at a futuristic desk with glowing screens making videos, golden stars and hearts popping, cozy studio.',
 'dune_titans': 'A giant monster truck racing through golden desert dunes with a dust cloud, canyon and sunset, other trucks behind.',
 'fizz_runner': 'A cheerful original hero in a blue and white suit running through a bright city street with bubbly soda fizz splashes and bottle caps.',
 'hamster_warrior': 'A tiny brave hamster warrior with a brown nut-shell helmet and a wooden stick running along a dirt forest path toward a friendly green sprout monster, floating power numbers shown as glowing orbs.',
 'hero_tower': 'A knight standing at the foot of a tall stone tower with glowing ladders going up, a dragon on the roof, magic crystals and coins.',
 'honey_farm': 'A cute beekeeper bear among colorful beehives and flower fields collecting golden honey jars, bees buzzing, warm sun.',
 'ice_dragon': 'A friendly ice dragon curled around a frozen tunnel path with glowing blue crystals in a snowy mountain valley, northern lights.',
 'marble_dozer': 'A little yellow bulldozer pushing a pile of shiny colorful marbles toward a big funnel in a playful toy arena.',
 'pearl_divers': 'Cute divers in a tropical lagoon opening glowing clams with pearls, a little boat and a pink yacht above the water, bubbles.',
 'rain_circuit': 'A rally car splashing through puddles on a rainy racing circuit with wet reflections, storm clouds, spectators with umbrellas.',
 'rhino_summit': 'A strong cute rhino racing up a snowy mountain trail with boulders and flags, determined, bright sunrise.',
 'sky_capy': 'A cute capybara pilot in goggles flying a little propeller plane through golden clouds and shooting stars, a friendly bird beside.',
 'squad_shooter': 'A squad of cute heroes in colorful armor with bubble blasters on a neon night road facing funny green blobs, glowing barrels.',
 'sunset_highway': 'A bright convertible weaving through traffic on a sunset highway with an orange sky, palm trees and long shadows.',
 'winter_camp': 'A cozy snowy camp with a campfire, tents, penguins and kids in warm clothes building a snowman, pine trees, northern lights.',
 'sky_jumper': 'A bouncy little frog hero jumping up on cloud platforms high above colorful hills with stars and a rainbow.',
}
jobs = [{'name': k, 'kind': 'card', 'prompt': v} for k, v in P.items()]
jobs.insert(0, {'name': 'build', 'kind': 'section', 'prompt': 'A happy sunny cartoon farm village with fields of wheat, a red barn, windmill, beehives and baskets of fruit, a friendly farmer in the foreground. No signs, no shop boards, no writing on any object.'})
out = {k: base[k] for k in ('style', 'kind_sprite', 'suffix')}
out['jobs'] = jobs
json.dump(out, open('tools/art_jobs/cards2.json', 'w', encoding='utf8'), ensure_ascii=False, indent=1)
s = open('tools/process_art.py', encoding='utf8').read()
s = s.replace("if game != 'cards': os.makedirs(out, exist_ok=True)", "if not game.startswith('cards'): os.makedirs(out, exist_ok=True)")
open('tools/process_art.py', 'w', encoding='utf8').write(s)
print(len(jobs))
