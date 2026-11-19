# Collects the owner's ORIGINAL game briefs (video recording path + the prompt he wrote with it) from the session transcripts.
# Output: docs/ORIGINAL_BRIEFS.md (one numbered brief per video) and docs/original_briefs.json.
# Run: python tools/extract_briefs.py
import glob, json, os, re

base = os.path.expanduser('~/.claude/projects/C--dev-rehlaty')
briefs = []
seen = set()
for f in sorted(glob.glob(base + '/*.jsonl')):
    for line in open(f, encoding='utf8'):
        try:
            d = json.loads(line)
        except Exception:
            continue
        if d.get('type') != 'user':
            continue
        c = d.get('message', {}).get('content')
        t = c if isinstance(c, str) else ' '.join(x.get('text', '') for x in c if isinstance(x, dict) and x.get('type') == 'text')
        vids = re.findall(r'@"([^"]+\.mp4)"', t)
        if not vids:
            continue
        text = re.sub(r'@"[^"]+\.mp4"', '', t)
        text = re.split(r'<system-reminder>|\[SYSTEM NOTIFICATION', text)[0].strip()
        if len(text) < 60:
            continue
        key = (tuple(vids), text[:80])
        if key in seen:
            continue
        seen.add(key)
        briefs.append({'videos': vids, 'prompt': text, 'time': d.get('timestamp', '')})

briefs.sort(key=lambda b: b['time'])
os.makedirs('docs', exist_ok=True)
json.dump(briefs, open('docs/original_briefs.json', 'w', encoding='utf8'), ensure_ascii=False, indent=1)
with open('docs/ORIGINAL_BRIEFS.md', 'w', encoding='utf8') as o:
    o.write('# الطلبات الأصلية للألعاب (الفيديو + البرومت اللي كتبه المالك)\n\nمتولّد بـ `python tools/extract_briefs.py` من سجل المحادثات. كل رقم = فيديو واحد وبرومته.\n\n')
    for i, b in enumerate(briefs, 1):
        o.write(f'## {i}. {b["time"][:10]}\n\n')
        for v in b['videos']:
            o.write(f'- الفيديو: `{v}`' + ('' if os.path.exists(v) else '  (الملف مش موجود على الجهاز)') + '\n')
        o.write('\n' + b['prompt'] + '\n\n---\n\n')
print(len(briefs), 'briefs')
