import io
p = 'tools/make_examples.mjs'
s = io.open(p, encoding='utf-8').read()

def rep(a, b):
    global s
    assert a in s, a[:60]
    s = s.replace(a, b, 1)

rep("const EN = rd('english'), DE = rd('german'), FR = rd('french');", "const EN = rd('english'), DE = rd('german'), FR = rd('french'), IT = rd('italian');")
rep("const M = { en: byKey(EN), de: byKey(DE), fr: byKey(FR) };", "const M = { en: byKey(EN), de: byKey(DE), fr: byKey(FR), it: byKey(IT) };\nconst IT_ART = /^(il|lo|la|i|gli|le|l') ?/;\nconst itPlural = (w) => /^(i|gli|le) /.test(w);")
rep("(w) => `Regarde ${w} !`],", "(w) => `Regarde ${w} !`, (w) => `Guarda ${w}!`],")
rep("(w) => `Je vois ${w}.`],", "(w) => `Je vois ${w}.`, (w) => `Vedo ${w}.`],")
rep("(w) => `Où est ${w} ?`],", "(w) => `Où est ${w} ?`, (w) => (itPlural(w) ? `Dove sono ${w}?` : `Dov'è ${w}?`)],")
rep("(w) => `Peux-tu trouver ${w} ?`],", "(w) => `Peux-tu trouver ${w} ?`, (w) => `Riesci a trovare ${w}?`],")
rep("(w) => `Montre-moi ${w} !`],", "(w) => `Montre-moi ${w} !`, (w) => `Mostrami ${w}!`],")
rep("(w) => `J'aime ${w}.`],", "(w) => `J'aime ${w}.`, (w) => (itPlural(w) ? `Mi piacciono ${w}.` : `Mi piace ${w}.`)],")
rep("(w) => `Je veux ${w}.`],", "(w) => `Je veux ${w}.`, (w) => `Voglio ${w}.`],")

hand_it = {
    'morning': ['Buongiorno! Il sole è alto.', 'Al mattino mi lavo i denti.', 'Al mattino faccio colazione.'],
    'afternoon': ['Il pomeriggio giochiamo.', 'Il pomeriggio pranziamo.', 'Il pomeriggio il sole è alto.'],
    'evening': ['La sera ceniamo.', 'La sera il sole tramonta.', 'La sera ascolto una storia.'],
    'night': ['Di notte brillano le stelle.', 'Di notte dormiamo.', 'Di notte esce la luna.'],
    'spring': ['In primavera crescono i fiori.', 'In primavera il tempo è bello.', 'In primavera volano le farfalle.'],
    'summer': ['In estate nuotiamo.', 'In estate fa caldo.', 'In estate mangiamo il gelato.'],
    'autumn': ['In autunno cadono le foglie.', "In autunno il tempo è mite.", 'In autunno inizia la scuola.'],
    'winter': ['In inverno fa freddo.', 'In inverno indossiamo vestiti caldi.', 'In inverno piove.'],
}
import json
rep("const DAYS = [", "const HAND_IT = " + json.dumps(hand_it, ensure_ascii=False) + ";\nconst DAYS = [")
rep("if (HAND[k]) sets.push(...HAND[k].map((x) => [...x, HAND_ICON[k]]));", "if (HAND[k]) sets.push(...HAND[k].map((x, i) => [...x, (HAND_IT[k] || [])[i] || null, HAND_ICON[k]]));")
rep("for (const f of DAYS) sets.push([...f(en.ar, en.w, de && de.w, fr && fr.w), '📅']);",
    "DAYS.forEach((f, i) => { const w = it && it.w; const t = [`Ci vediamo ${w}!`, `Il ${w} giochiamo.`, `${cap(w || '')} è un bel giorno.`, `${cap(w || '')} vedo la mia famiglia.`][i]; sets.push([...f(en.ar, en.w, de && de.w, fr && fr.w), w ? t : null, '📅']); });")
rep("for (const f of MONTHS) sets.push([...f(en.ar, en.w, de && de.w, fr && fr.w), '🗓️']);",
    "MONTHS.forEach((f, i) => { const w = it && it.w; const t = [`Il mio compleanno è a ${w}.`, `${cap(w || '')} è un mese dell'anno.`, `A ${w} ci divertiamo.`, `Il mio mese preferito è ${w}.`][i]; sets.push([...f(en.ar, en.w, de && de.w, fr && fr.w), w ? t : null, '🗓️']); });")
rep("for (const f of COLOURS) sets.push([...f(en.ar, en.w, de && de.w, fr && fr.w), '🎨']);",
    "COLOURS.forEach((f, i) => { const w = it && it.w; const d = w ? (/^[aeiou]/.test(w) ? `l'${w}` : `il ${w}`) : ''; const t = [`Mi piace ${d}.`, `${cap(d)} è un bel colore.`, `Riesci a trovare qualcosa di ${w}?`][i]; sets.push([...f(en.ar, en.w, de && de.w, fr && fr.w), w ? t : null, '🎨']); });")
rep("frOk ? b[3](fr.w) : null, ICON[p]]);", "frOk ? b[3](fr.w) : null, itOk ? b[4](it.w) : null, ICON[p]]);")
rep("      const frOk = fr && FR_ART.test(fr.w) && !(p === 'where' && /^les /.test(fr.w));", "      const frOk = fr && FR_ART.test(fr.w) && !(p === 'where' && /^les /.test(fr.w));\n      const itOk = it && IT_ART.test(it.w);")
rep("  const de = M.de.get(k), fr = M.fr.get(k);\n  const sets = [];", "  const de = M.de.get(k), fr = M.fr.get(k), it = M.it.get(k);\n  const sets = [];")
rep("fr: s[3] || '', ic: s[4] || '💡' }));", "fr: s[3] || '', it: s[4] || '', ic: s[5] || '💡' }));")
rep("s[2] || '', s[3] || '']));", "s[2] || '', s[3] || '', s[4] || '']));")
rep("'german', 'french']];", "'german', 'french', 'italian']];")
rep("fr: { words: 0, sentences: 0 } };", "fr: { words: 0, sentences: 0 }, it: { words: 0, sentences: 0 } };")
rep("for (const l of ['ar', 'en', 'de', 'fr']) {\n  let any = false;", "for (const l of ['ar', 'en', 'de', 'fr', 'it']) {\n  let any = false;")
io.open(p, 'w', encoding='utf-8', newline='').write(s)
print('patched')
