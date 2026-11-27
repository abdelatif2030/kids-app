import io, json, re
R = 'C:/dev/rehlaty/game_src/learn_games/src/'

def edit(path, pairs):
    s = io.open(R + path, encoding='utf-8').read()
    for a, b in pairs:
        assert a in s, (path, a[:70])
        s = s.replace(a, b, 1)
    io.open(R + path, 'w', encoding='utf-8', newline='').write(s)

# ---- voice.js
edit('kit/voice.js', [
    ("x.lang === 'en' || x.lang === 'de' || x.lang === 'fr' || x.lang === 'ar'", "x.lang === 'en' || x.lang === 'de' || x.lang === 'fr' || x.lang === 'it' || x.lang === 'ar'"),
    ("window.__learnVoice || { ar: [], en: [], de: [], fr: [] }", "window.__learnVoice || { ar: [], en: [], de: [], fr: [], it: [] }"),
])

# ---- english/levels.js: the Italian levels (same levels and pictures, the Italian words)
edit('english/levels.js', [
    ("import FR_WORDS from '../french/words.json' with { type: 'json' };", "import FR_WORDS from '../french/words.json' with { type: 'json' };\nimport IT_WORDS from '../italian/words.json' with { type: 'json' };"),
    ("export const isEnglishLevel =", """// Italian with Rehlaty: the same levels and pictures, the Italian words of docs/ITALIAN_WORDLIST.csv. Ids it_*. The map / badges / win picture are the English
// world's until the owner's Italian pictures arrive (docs/ITALIAN_IMAGE_PROMPTS.md).
const IT_NAMES = { animals: 'Gli animali', first: 'Le mie prime parole', family: 'Io e la mia famiglia', food: 'Gnam gnam', school: 'Vestiti e scuola', world: 'Mestieri, musica e tempo',
  colorful: 'Cose colorate', routine: 'La mia giornata', numbers: 'I numeri', letters: "L'alfabeto", colors: 'I colori', shapes: 'Le forme', time: 'Giorni e mesi', tens: 'Numeri grandi', where: "Dov'è la palla?", beads: 'Le perle' };
export const IT_LEVELS = EN_LEVELS.filter((l) => IT_WORDS.some(l.pick)).map((l) => {
  const k = l.id.slice(3);
  return { ...l, id: `it_${k}`, mode: 'en', lang: 'it', ar: IT_NAMES[k] || l.ar, words: IT_WORDS, art: { ...l.art, lang: 'it' } };
});
export const isItalianLevel = (id) => typeof id === 'string' && id.startsWith('it_');
export const isEnglishLevel ="""),
])

# ---- learn/sections.js
s = io.open(R + 'learn/sections.js', encoding='utf-8').read()
s = s.replace("import FR from '../french/words.json' with { type: 'json' };", "import FR from '../french/words.json' with { type: 'json' };\nimport IT from '../italian/words.json' with { type: 'json' };", 1)
s = s.replace("export const LANGS = ['ar', 'en', 'de', 'fr'];", "export const LANGS = ['ar', 'en', 'de', 'fr', 'it'];", 1)
s = s.replace("const WORDS = { en: EN, de: DE, fr: FR };", "const WORDS = { en: EN, de: DE, fr: FR, it: IT };", 1)
s = s.replace("const sep = lang === 'de' ? '.' : lang === 'fr' ? ' ' : ',';", "const sep = lang === 'de' || lang === 'it' ? '.' : lang === 'fr' ? ' ' : ',';", 1)
it_names = ['Le lettere', 'I numeri', 'Tutti gli animali', 'Gli animali della fattoria', 'Gli animali selvatici', 'Gli uccelli', 'Gli animali del mare', 'Gli insetti', 'Rettili e dinosauri', 'I colori', 'Le forme',
  'I giorni della settimana', 'I mesi', 'Stagioni e momenti del giorno', 'Il mio corpo', 'Le emozioni', 'I vestiti', 'La famiglia', 'Il cibo', 'La frutta', 'La verdura', 'I mestieri', 'La scuola', 'La musica', 'Il tempo',
  'I veicoli', 'In casa', 'La città e i luoghi', 'La mia giornata', 'Intorno a me', 'Tante cose']
# SECTION_DEFS lines: add the Italian name as a fifth entry of every name array, in order
idx = 0
def add_name(m):
    global idx
    t = m.group(0)
    out = t[:-1] + ", " + json.dumps(it_names[idx], ensure_ascii=False).replace('"', "'") + "]"
    idx += 1
    return out
s = re.sub(r"name: \[[^\]]*\]", add_name, s)
assert idx == len(it_names), idx
io.open(R + 'learn/sections.js', 'w', encoding='utf-8', newline='').write(s)

# ---- learn/lines.js
s = io.open(R + 'learn/lines.js', encoding='utf-8').read()
it_gen = {'start': 'Impariamo insieme!', 'look': 'Guarda!', 'say': 'Ripeti con me!', 'again': 'Ancora!', 'great': 'Bravissimo!', 'next': 'Il prossimo!', 'done': 'Hai imparato tutto! Bravo!', 'count': 'Contiamo insieme!'}
for k, v in it_gen.items():
    s = re.sub(r"(  %s: \[.*?)\],\n" % k, lambda m: m.group(1) + ", '" + v.replace("'", "\\'") + "'],\n", s, count=1)
s = s.replace("const IDX = { ar: 0, en: 1, de: 2, fr: 3 };", "const IDX = { ar: 0, en: 1, de: 2, fr: 3, it: 4 };", 1)
s = s.replace("// key -> [ar, en, de, fr]", "// key -> [ar, en, de, fr, it]", 1)
io.open(R + 'learn/lines.js', 'w', encoding='utf-8', newline='').write(s)

# ---- learn/extra.js
s = io.open(R + 'learn/extra.js', encoding='utf-8').read()
s = s.replace("import FR from '../french/words.json' with { type: 'json' };", "import FR from '../french/words.json' with { type: 'json' };\nimport IT from '../italian/words.json' with { type: 'json' };", 1)
s = s.replace("const IDX = { ar: 0, en: 1, de: 2, fr: 3 };", "const IDX = { ar: 0, en: 1, de: 2, fr: 3, it: 4 };", 1)
s = s.replace("const WORDS = { en: EN, de: DE, fr: FR };", "const WORDS = { en: EN, de: DE, fr: FR, it: IT };", 1)
s = s.replace("  fr: ['premier', 'deuxième',", "  it: ['primo', 'secondo', 'terzo', 'quarto', 'quinto', 'sesto', 'settimo', 'ottavo', 'nono', 'decimo', 'undicesimo', 'dodicesimo', 'tredicesimo', 'quattordicesimo', 'quindicesimo', 'sedicesimo', 'diciassettesimo', 'diciottesimo', 'diciannovesimo', 'ventesimo'],\n  fr: ['premier', 'deuxième',", 1)
s = s.replace("  if (lang === 'fr') return n === 1 ? '1er' : `${n}e`;", "  if (lang === 'fr') return n === 1 ? '1er' : `${n}e`;\n  if (lang === 'it') return `${n}º`;", 1)
# stories: a fifth (Italian) entry in names and pages
stories_it = [
    ('Storia: La gatta affamata', ["C'è una gattina affamata.", 'Vede un pesce.', "Beve un po' di latte.", 'Ora va a letto. Buonanotte!']),
    ('Storia: Una giornata di sole', ['Il sole è alto.', 'Sami ha un aquilone rosso.', 'Arriva una grande nuvola.', 'Piove! Sami corre a casa.']),
    ('Storia: In fattoria', ['La mucca fa muuu.', 'Il cavallo corre veloce.', "L'anatra nuota nello stagno.", 'Il cane fa bau. Buongiorno, fattoria!']),
    ('Storia: La giornata di Adam', ['Adam è sveglio.', 'Mangia il pane a colazione.', "Va a scuola con l'autobus.", 'Legge un libro. Che bella giornata!']),
    ('Storia: La mela rossa', ["C'è un albero alto.", 'Una mela rossa cade giù.', 'Nour la raccoglie.', 'La divide con il suo fratellino.']),
]
parts = re.split(r"(\{ id: 'story\d', emoji: '[^']*', name: \[)", s)
# parts: [before, hdr1, body1, hdr2, body2, ...]
out = parts[0]
for n in range(1, len(parts), 2):
    hdr, body = parts[n], parts[n + 1]
    si = (n - 1) // 2
    name_it, pages_it = stories_it[si]
    # name array ends at the first '], pics'
    body = body.replace("], pics:", ", '" + name_it.replace("'", "\\'") + "'], pics:", 1)
    # add the Italian pages array before the end of the story object: the story ends with ']] },'
    pages_js = "[" + ", ".join("'" + t.replace("'", "\\'") + "'" for t in pages_it) + "]"
    body = body.replace("']] },", "'],\n    " + pages_js + "] },", 1) if "']] }," in body else body
    out += hdr + body
s = out
# phonics (Italian letter sounds) and sight words
s = s.replace("  fr: 'le la les un une et est", "  it: 'il lo la un una e è sono io tu lui lei noi di a in su con per non sì no mio tuo qui là che chi dove come grande piccolo buono bello mamma papà'.split(' '),\n  fr: 'le la les un une et est", 1)
s = s.replace("  fr: { a: 'a', b: 'beu',", "  it: { a: 'a', b: 'bu', c: 'ku', d: 'du', e: 'e', f: 'fff', g: 'gu', i: 'i', l: 'lll', m: 'mmm', n: 'nnn', o: 'o', p: 'pu', q: 'ku', r: 'rrr', s: 'sss', t: 'tu', u: 'u', v: 'vvv', z: 'ts' },\n  fr: { a: 'a', b: 'beu',", 1)
s = s.replace("const ARTICLE = /^(der|die|das|ein|eine|le|la|les|l'|un|une|the|a|an)\\s+/i;", "const ARTICLE = /^(der|die|das|ein|eine|le|la|les|l'|un|une|the|a|an|il|lo|i|gli|le)\\s*/i;", 1)
# extra defs: names get the Italian entry
names_it = {'count': 'Conta con me', 'ordinals': 'Primo, secondo, terzo', 'sentences': 'Frasi brevi', 'sight': 'Parole da leggere', 'phonics': 'I suoni delle lettere', 'harakat': 'Le vocali (arabo)', 'forms': 'Forme delle lettere (arabo)'}
for k, v in names_it.items():
    s = re.sub(r"(id: '%s', emoji: '[^']*', name: \[[^\]]*)\]" % k, lambda m: m.group(1) + ", '" + v + "']", s, count=1)
io.open(R + 'learn/extra.js', 'w', encoding='utf-8', newline='').write(s)
print('wired data files')
