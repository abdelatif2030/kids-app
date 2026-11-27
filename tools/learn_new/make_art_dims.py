# Writes assets/games/learn_voice/extra_art_dims.js: window.__learnArtDims = {picture id: [width, height]} for every picture the new words use
# (only the aspect matters). Run after tools/learn_new/build_new_words.mjs:  python -X utf8 tools/learn_new/make_art_dims.py
import io, json, re, os
from PIL import Image
s = io.open('assets/games/learn_voice/extra_words.js', encoding='utf-8').read()
ids = sorted(set(re.findall(r'"thing":"([^"]+)"', s)))
d, miss = {}, []
for i in ids:
    p = f'assets/games/art/{i}.webp'
    if os.path.exists(p):
        w, h = Image.open(p).size
        d[i] = [w, h]
    else:
        miss.append(i)
io.open('assets/games/learn_voice/extra_art_dims.js', 'w', encoding='utf-8').write('// made by tools/learn_new/make_art_dims.py\nwindow.__learnArtDims = ' + json.dumps(d, separators=(',', ':')) + ';\n')
print('pictures', len(d), 'missing files', miss)
