# Helper for the Gemini image batch. python tools/gemini_art.py build | show N | take N | status
import re,json,sys,glob,os,shutil
Q='tools/gemini_queue.json'; D=os.path.expanduser('~/Downloads')
ORDER=['air_race','moto_race','hungry_frog','samurai','happy_farm','zombie_rooftop','coastal_drive','rain_circuit','carnival_race','cloud_dash','jungle_adventure','golden_tail','fox_family','summit_rush','hero_tower','deep_sea','ocean_defense','dino_grow','gum_ball','splash_race']
def build():
    s=open('docs/CHATGPT_PROMPTS.md',encoding='utf8').read(); i=s.index('## J ')
    items=[]; g=None
    for ln in s[i:].splitlines():
        m=re.match(r'### .*\(`(\w+)`\)',ln)
        if m: g=m.group(1); continue
        m=re.match(r'\*\*(\d)\) .*?`(\w+)\.webp` \((.*?)\):\*\* (.*)',ln)
        if m and g:
            kind=m.group(2); p=m.group(4); asp='16:9' if kind in('bg_wide','hero_sheet') else '1:1'
            items.append({'game':g,'kind':kind,'prompt':'Create an image: '+p+' '+asp+' aspect ratio.','done':False})
    rank=lambda it:(ORDER.index(it['game']) if it['game'] in ORDER else 99, it['game'], ['bg_wide','hero_sheet','ground_tile'].index(it['kind']))
    items.sort(key=rank); json.dump(items,open(Q,'w'),ensure_ascii=False,indent=1); print(len(items))
def load(): return json.load(open(Q,encoding='utf8'))
def show(n): it=load()[n]; print(it['game'],it['kind']); print(it['prompt'])
def take(n):
    items=load(); it=items[n]
    fs=sorted(glob.glob(D+'/Gemini_Generated_Image_*.*')+glob.glob(D+'/*.tmp'),key=os.path.getmtime)
    taken={x.get('src') for x in items}|{x.get('src_bad') for x in items}
    fs=[f for f in fs if os.path.basename(f) not in taken]
    if not fs: print('NO NEW FILE'); return
    import time
    fs=[x for x in fs if time.time()-os.path.getmtime(x)<150]
    if not fs: print('NO NEW FILE (none in the last 150 s)'); return
    f=fs[-1]; out=f"assets/games/{it['game']}/art/{it['kind']}_gemini.jpg"; os.makedirs(os.path.dirname(out),exist_ok=True); from PIL import Image
    im=Image.open(f); r=im.size[0]/im.size[1]
    if it['kind']!='ground_tile' and abs(r-1.79)>0.12: print('WRONG FILE (not 16:9)',os.path.basename(f),im.size); items[n]['src_bad']=os.path.basename(f); json.dump(items,open(Q,'w'),ensure_ascii=False,indent=1); return
    import hashlib
    md=lambda x:hashlib.md5(open(x,'rb').read()).hexdigest()
    seen={md(x) for x in glob.glob('assets/games/*/art/*_gemini.jpg')+glob.glob('build/gemini_art/*.jpg')}
    if md(f) in seen: print('DUPLICATE of an image already saved: not taken',os.path.basename(f)); return
    shutil.copy(f,out)
    it['done']=True; it['src']=os.path.basename(f); json.dump(items,open(Q,'w'),ensure_ascii=False,indent=1); print('saved',out,os.path.getsize(out)//1024,'KB')
def status(): it=load(); print(sum(1 for x in it if x['done']),'/',len(it),'next',next((i for i,x in enumerate(it) if not x['done']),None))
{'build':build,'show':lambda:show(int(sys.argv[2])),'take':lambda:take(int(sys.argv[2])),'status':status}[sys.argv[1]]()
