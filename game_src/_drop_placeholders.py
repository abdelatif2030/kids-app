import os
os.chdir('C:/dev/rehlaty')
n = 0
for line in open('game_src/_generated_images/placeholders.txt', encoding='utf8').read().split('\n'):
    if not line:
        continue
    g, f = line.split('_generated_images/')[1].split('/')
    name = f[:-4]
    for p in (line, f'assets/games/{g}/art/{name}.webp'):
        if os.path.exists(p):
            os.remove(p)
            n += 1
print('removed files', n)
