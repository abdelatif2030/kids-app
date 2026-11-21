p = 'C:/dev/rehlaty/tools/voice_recorder/build.mjs'
s = open(p, encoding='utf8').read()
a = "fs.writeFileSync(path.join(ROOT, 'docs/VOICE_LIST.md'), md.join('\\n') + '\\n');"
assert a in s
b = a + """
// the full list: every sentence with the page (level) that records it, and the clip the app plays now
const csv = ['\\ufeffpage,id,text,current_clip'];
for (const g of groups) for (const id of g.ids) csv.push(`${g.key},${id},"${byId.get(id).text.replace(/"/g, '""')}",assets/games/learn_voice/ar/${id}.mp3`);
fs.writeFileSync(path.join(ROOT, 'docs/VOICE_LIST_FULL.csv'), csv.join('\\n') + '\\n');"""
s = s.replace(a, b, 1)
open(p, 'w', encoding='utf8').write(s)
print('ok')
