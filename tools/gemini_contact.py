import glob,os,sys
from PIL import Image, ImageDraw
pat=sys.argv[1] if len(sys.argv)>1 else '*'
fs=sorted(glob.glob(f'build/gemini_art/{pat}__*.jpg'))
W,H=320,180; cols=4; rows=(len(fs)+cols-1)//cols
sheet=Image.new('RGB',(cols*W,rows*(H+16)),'white'); d=ImageDraw.Draw(sheet)
for i,f in enumerate(fs):
    im=Image.open(f).convert('RGB').resize((W,H)); x=(i%cols)*W; y=(i//cols)*(H+16)
    sheet.paste(im,(x,y+16)); d.text((x+2,y+2),os.path.basename(f)[:44],fill='black')
sheet.save('build/gemini_contact.jpg',quality=80); print(len(fs))
