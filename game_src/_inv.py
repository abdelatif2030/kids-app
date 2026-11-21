import os,re,json,glob
os.chdir('C:/dev/rehlaty')
games=[d for d in sorted(os.listdir('assets/games')) if os.path.exists(f'assets/games/{d}/index.html') and not d.startswith('learn_')]
rows=[]
for g in games:
    art=len(glob.glob(f'assets/games/{g}/art/*.webp'))
    card=os.path.exists(f'assets/games/{g}/card.webp')
    src=f'game_src/{g}/src'
    loc=sum(len(open(f,encoding='utf8',errors='ignore').read().splitlines()) for f in glob.glob(src+'/*.js')) if os.path.isdir(src) else 0
    tests=len(glob.glob(f'game_src/{g}/test/*.js'))
    rev=any(os.path.exists(f'docs/REVIEW_{g.upper()}.md') or f.lower().startswith('review_'+g) for f in os.listdir('docs'))
    lv=0
    sim=f'{src}/sim.js'
    if os.path.exists(sim):
        t=open(sim,encoding='utf8',errors='ignore').read()
        m=re.search(r'LEVELS\s*=\s*\[',t)
        lv=len(re.findall(r'\bid:\s*[\'"]',t[m.start():m.start()+20000])) if m else 0
    rows.append((g,art,card,loc,tests,rev,lv))
print(len(rows))
for r in rows: print(*r)

# ---- write docs/GAME_STATUS.md
def tier(loc): return 'thin' if loc<700 else 'medium' if loc<1500 else 'big'
out=['# حالة الألعاب التسلية — 2026-11-21','',
'كل لعبة: صور داخل اللعبة (art)، مراجعة مقابل الفيديو/البرومبت، حجم الكود (مقياس تقريبي للعمق)، واللي ناقص. `done` = اتطوّرت واتجرّبت وصورها اتركّبت.','',
'| اللعبة | صور داخلها | كارت | مراجعة REVIEW | حجم الكود | الحجم | الحالة |','|---|---|---|---|---|---|---|']
done=set(open('docs/GAME_DONE.txt').read().split()) if os.path.exists('docs/GAME_DONE.txt') else set()
for g,art,card,loc,tests,rev,lv in rows:
    st='done' if g in done else ('بدون كود مصدر في المستودع' if loc==0 else 'ينتظر التطوير')
    out.append(f'| {g} | {art} | {"نعم" if card else "لا"} | {"نعم" if rev else "لا"} | {loc} | {tier(loc)} | {st} |')
out+=['','## أولويات الصور (الأهم أولًا)','1. ألعاب `thin` بدون صور داخلها (عمقها قليل واللعبة بتخلص بسرعة): خلفيات + شخصية رئيسية + عدو/عائق.','2. ألعاب فيها صور لكن ناقصة (ست ألعاب: card_battle, ice_rink لسه صورهم مش مركّبة).','3. خلفيات إضافية لكل مستوى جديد يتضاف (مذكورة تحت كل لعبة في docs/GAME_DEPTH_<اللعبة>.md).','']
open('docs/GAME_STATUS.md','w',encoding='utf8').write('\n'.join(out)+'\n')
