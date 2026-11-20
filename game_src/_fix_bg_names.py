import json, os, glob
os.chdir('C:/dev/rehlaty')
p = 'tools/art_jobs/cards.json'
d = json.load(open(p, encoding='utf8'))
for j in d['jobs']:
    if j['kind'] == 'bg' and not j['name'].startswith('bg_'):
        j['name'] = 'bg_' + j['name']
json.dump(d, open(p, 'w', encoding='utf8'), ensure_ascii=False, indent=1)
s = open('tools/process_art.py', encoding='utf8').read()
s = s.replace("dest = f'assets/games/sections/bg_{j[\"name\"]}.webp'", "dest = f'assets/games/sections/{j[\"name\"]}.webp'")
open('tools/process_art.py', 'w', encoding='utf8').write(s)
# the section pictures generated so far may be mixed with the background prompts (same file name): regenerate them
for f in glob.glob('game_src/_generated_images/cards/*.jpg') + glob.glob('assets/games/sections/*.webp'):
    os.remove(f)
print([j['name'] for j in d['jobs'] if j['kind'] in ('bg', 'section')])
