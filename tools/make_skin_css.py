# Writes assets/games/<game>/skin.css for a game built on the shared cozy menu classes (.P-dim .P-card .P-logo .P-small .P-btn .P-lv), links it in
# index.html and lists skin/ and art/ in pubspec.yaml.
#   python -X utf8 tools/make_skin_css.py <game> <prefix> <title> <text colour> <outline colour> [level text colour]
# The pictures (skin/panel, ribbon, pill_*, lv_*) come from tools/cut_sheet.py (see docs/ART_PIPELINE_NOTES in the handoff).
import sys, re, io

game, P, title, text, shadow = sys.argv[1:6]
lvtext = sys.argv[6] if len(sys.argv) > 6 else text
css = f'''/* {title} skin: the owner's pictures (skin/*.webp) drawn over the menu pieces. Shapes keep their size; only the look changes. */
.{P}-card{{overflow-x:hidden !important;overflow-y:auto !important;max-height:94% !important;background:url(skin/panel.webp) center/100% 100% no-repeat !important;border:none !important;box-shadow:none !important;padding:calc(var(--u)*15) calc(var(--u)*12) calc(var(--u)*11) !important;gap:calc(var(--u)*1.1) !important;color:{text} !important}}
.{P}-logo{{color:#fff !important;font-size:calc(var(--u)*7) !important;line-height:1.15 !important;background:url(skin/ribbon.webp) center/100% 100% no-repeat;padding:calc(var(--u)*2.6) calc(var(--u)*10) calc(var(--u)*3.6) !important;margin:calc(var(--u)*-4) 0 calc(var(--u)*.5) !important;-webkit-text-stroke:calc(var(--u)*.8) {shadow};paint-order:stroke fill;text-shadow:0 calc(var(--u)*.5) 0 {shadow};white-space:nowrap}}
.{P}-small{{color:{text} !important;opacity:1 !important;font-size:calc(var(--u)*3) !important}}
.{P}-btn{{text-shadow:0 calc(var(--u)*.4) 0 {shadow};min-height:calc(var(--u)*8.6) !important;font-size:calc(var(--u)*4.2) !important;padding-top:calc(var(--u)*.6) !important;padding-bottom:calc(var(--u)*.6) !important}}
.{P}-lv{{background:url(skin/lv_open.webp) center/contain no-repeat !important;border:none !important;box-shadow:none !important;color:{lvtext} !important;text-shadow:none !important}}
.{P}-lv.lock{{background-image:url(skin/lv_lock.webp) !important;font-size:0 !important;color:transparent !important}}
.{P}-lv.lock i,.{P}-lv.lock span{{display:none !important}}
'''
root = 'C:/dev/rehlaty/'
d = root + f'assets/games/{game}/'
io.open(d + 'skin.css', 'a', encoding='utf-8', newline='\n').write(('\n' if True else '') + css)
h = io.open(d + 'index.html', encoding='utf-8').read()
if 'skin.css' not in h:
    h = h.replace('</head>', '<link rel="stylesheet" href="skin.css"></head>', 1)
    io.open(d + 'index.html', 'w', encoding='utf-8', newline='').write(h)
p = io.open(root + 'pubspec.yaml', encoding='utf-8').read()
for sub in ('skin', 'art'):
    line = f'    - assets/games/{game}/{sub}/\n'
    if line not in p:
        base = f'    - assets/games/{game}/\n'
        assert base in p, game
        p = p.replace(base, base + line, 1)
open(root + 'pubspec.yaml', 'w', encoding='utf-8', newline='').write(p)
print('ok', game)
