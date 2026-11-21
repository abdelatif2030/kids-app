import glob, hashlib, os
os.chdir('C:/dev/rehlaty')
h = {}
for f in glob.glob('game_src/_generated_images/*/*.jpg'):
    h.setdefault(hashlib.md5(open(f, 'rb').read()).hexdigest(), []).append(f.replace('\\', '/'))
bad = []
for k, v in h.items():
    if len(v) > 1:
        # the same bytes for different prompts = the safety filter's placeholder picture
        print(len(v), [x.split('_generated_images/')[1] for x in v][:8])
        bad += v
open('game_src/_generated_images/placeholders.txt', 'w', encoding='utf8').write('\n'.join(bad))
print('total placeholders', len(bad))
