import glob, os, math
from PIL import Image
fs = sorted(glob.glob('C:/dev/rehlaty/assets/games/creator_tycoon/art/*.webp'))
S = Image.new('RGB',(5*200, math.ceil(len(fs)/5)*160),(40,40,40))
for i,f in enumerate(fs):
    im = Image.open(f).convert('RGBA'); bg=Image.new('RGBA',im.size,(120,120,120,255)); bg.alpha_composite(im); im=bg.convert('RGB').resize((200,160))
    S.paste(im,((i%5)*200,(i//5)*160)); print(i, os.path.basename(f))
S.save('C:/dev/rehlaty/build/ct_sheet.png')
