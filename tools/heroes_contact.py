import glob,os
from PIL import Image, ImageDraw
fs=sorted(glob.glob('assets/games/*/hero.webp'))
S=150; cols=12; rows=(len(fs)+cols-1)//cols
sh=Image.new('RGB',(cols*S,rows*(S+12)),(200,200,230)); d=ImageDraw.Draw(sh)
for i,f in enumerate(fs):
    t=Image.open(f).convert('RGBA'); t.thumbnail((S-6,S-6)); x=(i%cols)*S; y=(i//cols)*(S+12)
    sh.paste(t,(x+3,y+12),t); d.text((x+2,y),os.path.basename(os.path.dirname(f))[:20],fill='black')
sh.save('build/heroes_contact.png'); print(len(fs))
