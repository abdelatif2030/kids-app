p = 'C:/dev/rehlaty/tools/voice_recorder/build.mjs'
s = open(p, encoding='utf8').read()
old = "  ids.forEach((i) => used.add(i));\n  groups.push({ key: `${String(no).padStart(2, '0')}_${lv.id}`, title: `المستوى ${no}: ${lv.ar}`, ids: [...ids] });"
new = "  // a sentence that several levels share is recorded ONCE, in the first level that uses it (the same clip serves all of them)\n  const fresh = [...ids].filter((i) => !used.has(i));\n  ids.forEach((i) => used.add(i));\n  if (fresh.length) groups.push({ key: `${String(no).padStart(2, '0')}_${lv.id}`, title: `المستوى ${no}: ${lv.ar}`, ids: fresh });"
assert old in s
s = s.replace(old, new, 1)
open(p, 'w', encoding='utf8').write(s)
print('ok')
