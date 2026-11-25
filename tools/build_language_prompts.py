# Builds docs/ENGLISH_GERMAN_IMAGE_PROMPTS.md: every picture the English and German learning levels need.
# Run: python tools/build_language_prompts.py
import io, os

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')

STYLE = ("Polished kids' mobile-game art, cute 3D-cartoon look, rounded shapes, saturated friendly colours, family friendly "
         "(no blood, no weapons, no brands, no known cartoon characters).")
SINGLE = "TECHNICAL RULES: ONE single image, no text, no letters, no numbers, no logos, no frame, no watermark."
SHEET = ("TECHNICAL RULES (the picture is cut by machine): ONE single image, pure flat white background #FFFFFF, no gradient, no floor, "
         "no cast shadows, no frame, no text, no letters, no numbers. Exact grid of {cols} columns x {rows} rows, every cell the same size, "
         "each item centred with a clear margin, nothing touching the cell edges.")
ADAMNOUR = ("Add Adam and Nour EXACTLY like the explorer pair of the approved outfits sheet in this chat (never redesign them), very small, "
            "{where}.")
WIDE = "Aspect 21:9, the lower third calm and almost empty (buttons are drawn there), no characters in the centre."

EN_LEVELS = [
    ('animals', 'Animals', 'a sunny storybook countryside farm and meadow: red barn, haystacks, a pond with ducks, a hill with sheep, a wooden fence, far hills; many cute animals relaxing in the distance'),
    ('colours', 'Colours', 'a rainbow valley: a huge soft rainbow over rolling hills, flower fields in every colour in clear colour bands, a paint-splash waterfall into a pastel river'),
    ('numbers', 'Numbers', 'a counting garden: ten round flower beds in a row with stepping stones, ten balloons tied to a gate, rows of apples on trees, a small wooden bridge (strictly no digits or numerals anywhere)'),
    ('shapes', 'Shapes', 'a building-block playground: a castle made of big toy blocks (cubes, cylinders, cones, arches), shape-sorter slides, a sandbox with plastic shapes, bright sky'),
    ('food', 'Food', 'a cheerful open-air market square with striped awnings: fruit and vegetable stalls, a bakery stand with bread and cookies, a milk cart, baskets, bunting'),
    ('body', 'Body and clothes', 'a cosy dress-up theatre stage: curtains, a wardrobe with hats, jackets and scarves on pegs, a big mirror frame, spotlights, a small rail of colourful clothes'),
    ('family', 'Family and home', 'a cosy two-storey house shown as a cutaway doll-house: living room, kitchen, bedroom, a tree swing in the garden, warm lights, family photos as blank frames'),
    ('greetings', 'Greetings', 'a friendly little town square with a fountain and a clock tower (no numerals on the clock, tick marks only), people waving from windows and a bakery door, flower boxes, morning light'),
    ('letters', 'Letters and sounds', 'an alphabet treehouse village: rope bridges between treehouses, picture blocks hanging on branches (each block shows a drawing only, never a letter), a slide, fairy lights'),
]
DE_LEVELS = [
    ('animals', 'Tiere', 'a farm at the edge of a pine forest in warm light: half-timbered barn, cows and goats on a green slope, a stream, a deer at the forest edge, wooden fences'),
    ('colours', 'Farben', 'a paint workshop village: big paint pots and brushes as houses, colour-dipped ribbons on washing lines, a paint-splash fountain, pastel cobbled street'),
    ('numbers', 'Zahlen', 'a cuckoo-clock town: tall painted clock tower (tick marks only, no numerals), houses with small clock windows, counting beads on a market arch, a toy train crossing a bridge'),
    ('shapes', 'Formen', 'a toy workshop: shelves of wooden toys in simple shapes, a rocking horse, a spinning top, a puzzle table, woodworker tools hanging on the wall, warm lamp light'),
    ('food', 'Essen', 'a bakery street and a small festive market: pretzel-shaped sign, loaves and rolls in baskets, an apple cart, a sausage and cheese stall, string lights'),
    ('body', 'Körper und Kleidung', "a tailor's shop: mannequins in cute outfits, hats on hooks, rolls of fabric, a measuring tape curling, a sewing machine, a fitting mirror"),
    ('family', 'Familie und Zuhause', 'a half-timbered house with a flower balcony, an open front door, a garden table set for a family lunch, a bicycle by the gate, chimney smoke'),
    ('greetings', 'Begrüßungen', 'a sunny harbour promenade: small boats, a lighthouse, a bench, people waving hello and goodbye from a ferry and the quay, seagulls, bunting'),
    ('letters', 'Buchstaben', 'a fairytale castle library: tall shelves, a spiral stair, floating picture-books (pictures only, never letters), a reading nook with cushions, warm lanterns'),
    ('umlaut', 'Umlaut dots', 'a whispering lake at dusk: two small glowing fireflies hovering in pairs over the water (like two dots), a wooden dock, reeds, a friendly moon, magical but calm'),
]

out = []
w = out.append
w("# صور اللغة الإنجليزية والألمانية للألعاب التعليمية — برومتات الصور\n")
w("**الغرض:** كل صور المستويات الجديدة (اختيار اللغة، خريطة مستويات الإنجليزي والألماني، أيقونات المستويات، خلفية كل مستوى، شخصيتا المرشد، كروت التحيات، الفصول، أيام الأسبوع، جواز السفر والأختام، شاشة الفوز). كل الصور **من غير أي نص أو حروف أو أرقام** (الكتابة بتترسم بالكود على لافتات فاضية).\n")
w("**القواعد:** نفس شات ChatGPT الواحد. ابدأ بـ LANG-01 واتبع الترتيب. الصور المشتركة للغتين (قسم 3) تتعمل مرة واحدة. الأماكن هنا جديدة ومش متكررة من الألعاب التانية (ممنوع الألب والأهرامات وأي مكان في قايمة الأماكن المستخدمة).\n")
w("- **Style base (انسخه في كل برومت):** " + STYLE + "\n")
w("- **آدم ونور:** لو ظهروا، دايماً بنفس الجملة: «" + ADAMNOUR.format(where='in a corner of the picture, waving') + "»\n")
w("- خلفية المستوى والخريطة: " + WIDE + "\n")
w("- الشيت: " + SHEET.format(cols='N', rows='M') + "\n")
w("\n---\n")

n = 0
def P(code, kind, title, text):
    global n
    n += 1
    w(f"**{code} · {kind} · {title}**\n\n{text}\n")

w("## 1. اختيار اللغة (شاشة الألعاب التعليمية)\n")
P('LANG-01', 'E', 'Language chooser backdrop',
  f"{STYLE} A cheerful 'learning world' viewed like a map table: three floating islands side by side in a bright sky with soft clouds, each island with a blank wooden signpost, connected by rope bridges; calm centre, nothing at the bottom third. Aspect 16:9. {SINGLE} " + ADAMNOUR.format(where='waving from the lower-left corner'))
P('LANG-02', 'K', 'Three language cards',
  f"{STYLE} {SHEET.format(cols=3, rows=1)} Three tall rounded game cards, each a small friendly scene inside a thick rounded frame with an empty ribbon at the bottom: (1) Arabic world: a warm lantern, an oud, a palm and a crescent moon; (2) English world: a storybook village with a little red bus, a round green hill and a big clock tower (no numerals); (3) German world: a half-timbered cottage in pine trees with a pretzel sign (no letters). No flags, no text.")
P('LANG-03', 'C', 'English guide: Pip the puppy (poses)',
  f"{STYLE} {SHEET.format(cols=4, rows=2)} Pip, a small cream puppy with a red scarf and big friendly eyes, the English-world guide, 8 poses: waving hello, pointing right, thumbs-up, cheering with both paws up, thinking with a paw on the chin, listening with a hand at the ear, sad-but-kind (head tilted), sleeping curled up.")
P('LANG-04', 'C', 'German guide: Iggy the hedgehog (poses)',
  f"{STYLE} {SHEET.format(cols=4, rows=2)} Iggy, a small round hedgehog with soft light-brown spines, a green knitted hat and big friendly eyes, the German-world guide, 8 poses: waving hello, pointing right, thumbs-up, cheering with both paws up, thinking with a paw on the chin, listening with a hand at the ear, sad-but-kind (head tilted), curled in a ball asleep.")

def world(prefix, label, levels, guide, extra_note, en_label):
    w(f"## {label}\n")
    P(f'{prefix}-MAP', 'U', f'{en_label} level map backdrop',
      f"{STYLE} A winding adventure path map across the {extra_note} world: {len(levels)} marked stops along a ribbon path with small blank round pads, each stop hinting at its topic in miniature, soft sky, clouds; the guide ({guide}) small near the start. {WIDE} {SINGLE}")
    cols = 5 if len(levels) == 10 else 3
    rows = 2 if len(levels) == 10 else 3
    items = '; '.join(f"({i+1}) {t}: a simple friendly icon picture of the topic" for i, (_, t, _) in enumerate(levels))
    P(f'{prefix}-ICONS', 'I', f'{en_label} level badges',
      f"{STYLE} {SHEET.format(cols=cols, rows=rows)} {len(levels)} round level badges with a thick coloured rim and a glossy centre picture (no text, no numbers): {items}.")
    for i, (key, title, scene) in enumerate(levels):
        P(f'{prefix}-L{i+1:02d}', 'L', f'Level {i+1}: {title}',
          f"{STYLE} Level backdrop for the level '{title}' of the {en_label}: {scene}. {WIDE} {SINGLE} The scene must NOT repeat the places of any other level or game.")
    P(f'{prefix}-WIN', 'F', f'{en_label} completion screen',
      f"{STYLE} Celebration scene for finishing a level: confetti and ribbons, a golden stamp floating down onto an open passport (blank pages), the guide ({guide}) cheering, soft glow; centre calm for a banner. Aspect 16:9. {SINGLE}")

world('EN', 'English world (ألعاب الإنجليزي)', EN_LEVELS, 'Pip the puppy', 'English-speaking storybook', 'English world')
world('DE', 'German world (ألعاب الألماني)', DE_LEVELS, 'Iggy the hedgehog', 'German fairytale-village', 'German world')

w("## 3. صور مشتركة للغتين (مرة واحدة)\n")
P('LANG-05', 'I', 'Greetings cards (language-neutral)',
  f"{STYLE} {SHEET.format(cols=4, rows=2)} Eight round-framed cards with Adam and Nour (exactly as in the approved outfits sheet) showing gestures only: waving hello, waving goodbye, saying thank you with a hand on the heart, please with open palms, sorry with a gentle bow, good morning stretching by a sunrise window, good night yawning with a pillow and moon, a friendly handshake.")
P('LANG-06', 'I', 'Four seasons',
  f"{STYLE} {SHEET.format(cols=2, rows=2)} Four square scene cards of the same friendly hill with one tree: summer (sun, swim ring, ice cream), winter (snow, snowman, scarf), spring (blossoms, butterflies, rain boots), autumn (orange leaves, pumpkin, kite).")
P('LANG-07', 'I', 'Days of the week characters',
  f"{STYLE} {SHEET.format(cols=4, rows=2)} Seven different small round creature characters, one per day, each with a simple prop that gives it a calm personality (no letters or numbers): sleepy moon-cat, sunny chick, brave knight-bear, painter-mouse, musician-frog, reading-owl, picnic-bunny; the eighth cell: an empty wooden calendar board with seven blank hooks.")
P('LANG-08', 'I', 'Months icons',
  f"{STYLE} {SHEET.format(cols=4, rows=3)} Twelve simple month pictures, no text or numbers: new-year sparkles, snowman, kite in wind, rain with umbrella, flowers, strawberry basket, beach ball, watermelon slice, school bag, falling leaves, bonfire-free autumn pumpkin, gift with snowflake.")
P('LANG-09', 'I', 'Parts of the day',
  f"{STYLE} {SHEET.format(cols=4, rows=1)} Four wide cards of the same village window view: morning sunrise with a rooster, noon bright sun high, evening orange sunset with a lamp being lit, night with a moon and stars.")
P('LANG-10', 'I', 'Passport and stamps',
  f"{STYLE} {SHEET.format(cols=5, rows=2)} Ten round travel stamps with ink-like rims, each with a different simple picture that matches a level topic (animal paw, rainbow, balloon bunch, building block, apple, hat, house, waving hand, book, star) and one different bright ink colour each; no text, no numbers.")
P('LANG-11', 'E', 'Passport book cover and page',
  f"{STYLE} Two items on a white background: (left) a closed child's passport with a soft golden emblem of a globe and a small paper plane (no text); (right) an open passport with ten empty round stamp spaces on two pages. Aspect 16:9, white background #FFFFFF, no shadows, no text.")

w(f"\n---\n**المجموع:** {n} برومت.\n")
w("**ملاحظات تنفيذ:** (1) الصور من غير أي حروف، لأن الأسماء بتترسم بالكود بعدين. (2) لو صورة طلعت فيها نص أو أرقام اعمل regenerate. (3) بعد كل دفعة: قص الشيتات بـ `tools/cut_sheet.py` وركّبها باسم الكود.\n")

path = os.path.join(ROOT, 'docs', 'ENGLISH_GERMAN_IMAGE_PROMPTS.md')
io.open(path, 'w', encoding='utf8', newline='\n').write('\n'.join(out))
print(n, 'prompts ->', path)
