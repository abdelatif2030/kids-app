import json, os
os.chdir('C:/dev/rehlaty')
p = 'tools/process_art.py'
s = open(p, encoding='utf8').read()
old = """    def near(x, y):
        r, g, b = px[x, y]
        return r > 255 - tol and g > 255 - tol and b > 255 - tol
"""
new = """    # the background colour = the average of the four corners (white for most pictures, dark for some)
    cs = [px[0, 0], px[w - 1, 0], px[0, h - 1], px[w - 1, h - 1]]
    bgc = tuple(sum(c[i] for c in cs) // 4 for i in range(3))

    def near(x, y):
        r, g, b = px[x, y]
        return abs(r - bgc[0]) < tol and abs(g - bgc[1]) < tol and abs(b - bgc[2]) < tol
"""
assert old in s
s = s.replace(old, new, 1)
open(p, 'w', encoding='utf8').write(s)
j = 'tools/art_jobs/hero_tower.json'
d = json.load(open(j, encoding='utf8'))
for x in d['jobs']:
    if x['name'] == 'sky_ice':
        x['prompt'] = 'A frozen snowy mountain landscape at dawn, icy blue peaks and glaciers, pale pink clouds, an empty wide scenery with absolutely no people, no characters and no creatures.'
json.dump(d, open(j, 'w', encoding='utf8'), ensure_ascii=False, indent=1)
for f in ('game_src/_generated_images/hero_tower/sky_ice.jpg', 'assets/games/hero_tower/art/sky_ice.webp'):
    if os.path.exists(f):
        os.remove(f)
print('ok')
