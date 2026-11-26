# Cuts the owner's English word sheets (EN-IMG-01..19, EN-MISS-01,02,04,05) into one picture per word:
#   assets/games/art/x_<word>.webp  and writes tools/en_expansion/cells.json {sheet: [ids]}
# The cell order comes from docs/ENGLISH_EXPANSION_IMAGE_PROMPTS.md and docs/ENGLISH_MISSING_PICTURES.md.
#   python -X utf8 tools/install_en_images.py <dir with EN-IMG-*.png> [--jobs-only]
import re, io, json, sys, glob, os
slug = lambda w: 'x_' + re.sub(r'[^a-z0-9]+', '_', w.lower()).strip('_')
cells = {}
s = io.open('docs/ENGLISH_EXPANSION_IMAGE_PROMPTS.md', encoding='utf-8').read()
for m in re.finditer(r'\*\*(EN-IMG-\d\d)\*\*.*?top to bottom: (.*?)\. Each one', s, re.S):
    words = [w.strip() for w in re.split(r'\(\d+\)', m.group(2)) if w.strip()]
    words = [w.rstrip(',').strip() for w in words]
    cells[m.group(1)] = (4, 3, words + ['-'] * (12 - len(words)))
t = io.open('docs/ENGLISH_MISSING_PICTURES.md', encoding='utf-8').read()
cells['EN-MISS-01'] = (4, 3, ['rectangle', 'oval', 'diamond', 'pentagon', 'hexagon', 'arrow', 'ring', 'cube', 'ball', 'cone', 'cylinder', 'pyramid'])
cells['EN-MISS-02'] = (3, 1, ['toy blocks', 'yo-yo', 'caterpillar'])
cells['EN-MISS-04'] = (3, 2, ['bead red ball', 'bead blue cube', 'bead yellow star', 'bead green heart', 'bead purple ring', 'bead orange drop'])
cells['EN-MISS-05'] = (5, 2, ['routine wake up', 'routine wash face', 'routine breakfast', 'routine school', 'routine lunch', 'routine play', 'routine dinner', 'routine bath', 'routine teeth', 'routine sleep'])
cells['EN-MISS-03'] = (3, 2, ['where on', 'where under', 'where inside', 'where next to box', 'where next to table', '-'])
out = {k: [slug(w) if w != '-' else '-' for w in v[2]] for k, v in cells.items()}
for k, v in cells.items(): assert len(v[2]) == v[0] * v[1] or k == 'EN-MISS-03', (k, len(v[2]))
io.open('tools/en_expansion/cells.json', 'w', encoding='utf-8', newline='\n').write(json.dumps({'cells': out, 'grid': {k: v[:2] for k, v in cells.items()}}, ensure_ascii=False, indent=1))
print(len(cells), 'sheets', sum(len(v[2]) for v in cells.values()), 'cells')
