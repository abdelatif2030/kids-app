# -*- coding: utf-8 -*-
# Extra words for the «اتعلّم» sections (2026-11-26): what the owner asked for ("lots of words, every animal ... everything a child can learn").
# (section, english, arabic, german with article, french with article)  -- written by hand, to be CHECKED by native speakers before recording.
# Run: python -X utf8 tools/learn_expansion.py   -> docs/LEARN_EXPANSION_WORDS.csv, docs/LEARN_EXPANSION_IMAGE_PROMPTS.md, tools/en_expansion/learn_cells.json
import csv, io, json, re
ROWS = [
 # ---- birds
 ('birds','robin','أبو الحناء','das Rotkehlchen','le rouge-gorge'),('birds','heron','مالك الحزين','der Reiher','le héron'),('birds','budgie','ببغاء صغير','der Wellensittich','la perruche'),
 ('birds','canary','كناري','der Kanarienvogel','le canari'),('birds','turkey','ديك رومي','der Truthahn','le dindon'),('birds','vulture','نسر','der Geier','le vautour'),
 ('birds','hoopoe','هدهد','der Wiedehopf','la huppe'),('birds','swallow','سنونو','die Schwalbe','l\'hirondelle'),('birds','cuckoo','وقواق','der Kuckuck','le coucou'),
 ('birds','cockatoo','كاكاتو','der Kakadu','le cacatoès'),('birds','puffin','بفن','der Papageitaucher','le macareux'),('birds','ibis','أبو منجل','der Ibis','l\'ibis'),
 ('birds','crane','كركي','der Kranich','la grue'),('birds','nightingale','بلبل','die Nachtigall','le rossignol'),('birds','magpie','عقعق','die Elster','la pie'),('birds','kingfisher','رفراف','der Eisvogel','le martin-pêcheur'),
 # ---- wild animals
 ('wild','buffalo','جاموس','der Büffel','le buffle'),('wild','antelope','ظبي','die Antilope','l\'antilope'),('wild','gazelle','غزالة','die Gazelle','la gazelle'),('wild','jaguar','جاكوار','der Jaguar','le jaguar'),
 ('wild','lynx','وشق','der Luchs','le lynx'),('wild','hyena','ضبع','die Hyäne','l\'hyène'),('wild','moose','موظ','der Elch','l\'élan'),('wild','bison','بيسون','der Bison','le bison'),
 ('wild','orangutan','إنسان الغاب','der Orang-Utan','l\'orang-outan'),('wild','lemur','ليمور','der Lemur','le lémur'),('wild','armadillo','المدرّع','das Gürteltier','le tatou'),('wild','anteater','آكل النمل','der Ameisenbär','le fourmilier'),
 ('wild','porcupine','نيص','das Stachelschwein','le porc-épic'),('wild','skunk','ظربان','das Stinktier','la mouffette'),('wild','jackal','ابن آوى','der Schakal','le chacal'),('wild','mole','خلد','der Maulwurf','la taupe'),
 # ---- farm / pets
 ('farm','buffalo calf','عجل جاموس','das Büffelkalb','le veau de buffle'),('farm','pony','مهر','das Pony','le poney'),('farm','guinea pig','خنزير غينيا','das Meerschweinchen','le cochon d\'Inde'),
 ('farm','goldfish','سمكة ذهبية','der Goldfisch','le poisson rouge'),('farm','ferret','نمس','das Frettchen','le furet'),
 # ---- sea
 ('sea','sea turtle','سلحفاة بحرية','die Meeresschildkröte','la tortue de mer'),('sea','stingray','ورنك','der Rochen','la raie'),('sea','swordfish','أبو سيف','der Schwertfisch','l\'espadon'),('sea','eel','ثعبان البحر','der Aal','l\'anguille'),
 ('sea','sea lion','أسد البحر','der Seelöwe','le lion de mer'),('sea','orca','حوت قاتل','der Orca','l\'orque'),('sea','manta ray','مانتا','der Manta','la raie manta'),('sea','sea urchin','قنفذ البحر','der Seeigel','l\'oursin'),
 ('sea','hermit crab','سرطان الناسك','der Einsiedlerkrebs','le bernard-l\'ermite'),('sea','oyster','محار','die Auster','l\'huître'),('sea','narwhal','حوت ناروال','der Narwal','le narval'),('sea','piranha','بيرانا','der Piranha','le piranha'),
 # ---- insects
 ('insects','bumblebee','نحلة كبيرة','die Hummel','le bourdon'),('insects','firefly','يراعة','das Glühwürmchen','la luciole'),('insects','cricket','صرصور الليل','die Grille','le grillon'),('insects','cockroach','صرصور','die Kakerlake','le cafard'),
 ('insects','flea','برغوث','der Floh','la puce'),('insects','termite','نمل أبيض','die Termite','la termite'),('insects','centipede','أم أربعة وأربعين','der Tausendfüßer','le mille-pattes'),('insects','moth','عثة','die Motte','le papillon de nuit'),
 # ---- reptiles / dinosaurs
 ('reptiles','gecko','وزغة','der Gecko','le gecko'),('reptiles','cobra','كوبرا','die Kobra','le cobra'),('reptiles','python','ثعبان ضخم','die Python','le python'),('reptiles','komodo dragon','تنين كومودو','der Komodowaran','le dragon de Komodo'),
 ('reptiles','velociraptor','فيلوسيرابتور','der Velociraptor','le vélociraptor'),('reptiles','pterodactyl','تيروصور','der Flugsaurier','le ptérodactyle'),('reptiles','spinosaurus','سبينوصور','der Spinosaurus','le spinosaure'),('reptiles','ankylosaurus','أنكيلوصور','der Ankylosaurus','l\'ankylosaure'),
 # ---- fruit
 ('fruit','blueberry','توت أزرق','die Blaubeere','la myrtille'),('fruit','raspberry','توت العليق','die Himbeere','la framboise'),('fruit','blackberry','توت أسود','die Brombeere','la mûre'),('fruit','papaya','بابايا','die Papaya','la papaye'),
 ('fruit','passion fruit','فاكهة العاطفة','die Passionsfrucht','le fruit de la passion'),('fruit','lychee','ليتشي','die Litschi','le litchi'),('fruit','star fruit','فاكهة النجمة','die Sternfrucht','la carambole'),('fruit','dragon fruit','فاكهة التنين','die Drachenfrucht','le fruit du dragon'),
 ('fruit','nectarine','نكتارين','die Nektarine','la nectarine'),('fruit','mulberry','توت','die Maulbeere','la mûre blanche'),('fruit','prickly pear','تين شوكي','die Kaktusfeige','la figue de Barbarie'),('fruit','banana bunch','عنقود موز','die Bananenstaude','le régime de bananes'),
 ('fruit','raisins','زبيب','die Rosinen','les raisins secs'),('fruit','cantaloupe','شمام','die Zuckermelone','le cantaloup'),
 # ---- vegetables
 ('veg','beetroot','بنجر','die Rote Bete','la betterave'),('veg','turnip','لفت','die Rübe','le navet'),('veg','sweet potato','بطاطا حلوة','die Süßkartoffel','la patate douce'),('veg','leek','كرات','der Lauch','le poireau'),
 ('veg','celery','كرفس','der Sellerie','le céleri'),('veg','parsley','بقدونس','die Petersilie','le persil'),('veg','mint','نعناع','die Minze','la menthe'),('veg','artichoke','خرشوف','die Artischocke','l\'artichaut'),
 ('veg','asparagus','هليون','der Spargel','l\'asperge'),('veg','chili pepper','فلفل حار','die Peperoni','le piment'),('veg','pea pod','قرن بازلاء','die Erbsenschote','la cosse de pois'),('veg','taro','قلقاس','der Taro','le taro'),
 # ---- food
 ('food','spaghetti bolognese','مكرونة بولونيز','die Spaghetti Bolognese','les spaghettis bolognaise'),('food','omelette','أومليت','das Omelett','l\'omelette'),('food','toast','توست','der Toast','le toast'),('food','croissant','كرواسون','das Croissant','le croissant'),
 ('food','donut','دونات','der Donut','le beignet'),('food','ice lolly','آيس كريم عصاية','das Eis am Stiel','la glace sur bâton'),('food','waffle','وافل','die Waffel','la gaufre'),('food','yoghurt cup','علبة زبادي','der Joghurtbecher','le pot de yaourt'),
 ('food','sandwich bread','عيش توست','das Toastbrot','le pain de mie'),('food','baladi bread','عيش بلدي','das Fladenbrot','le pain plat'),('food','fried egg','بيضة مقلية','das Spiegelei','l\'œuf au plat'),('food','boiled egg','بيضة مسلوقة','das gekochte Ei','l\'œuf dur'),
 ('food','biscuit','بسكويت','der Keks','le biscuit sec'),('food','jelly','جيلي','der Wackelpudding','la gelée'),
 # ---- vehicles
 ('vehicles','motorbike','موتوسيكل','das Motorrad','la moto'),('vehicles','scooter','سكوتر','der Roller','la trottinette'),('vehicles','tricycle','دراجة بثلاث عجلات','das Dreirad','le tricycle'),('vehicles','submarine','غواصة','das U-Boot','le sous-marin'),
 ('vehicles','cable car','تلفريك','die Seilbahn','le téléphérique'),('vehicles','metro','مترو','die U-Bahn','le métro'),('vehicles','tuk-tuk','توك توك','das Tuk-Tuk','le tuk-tuk'),('vehicles','dump truck','قلاب','der Kipper','la benne'),
 ('vehicles','crane truck','ونش','der Kranwagen','la grue mobile'),('vehicles','cement mixer','خلاطة أسمنت','der Betonmischer','la bétonnière'),('vehicles','hot air balloon','منطاد','der Heißluftballon','la montgolfière'),('vehicles','ship','سفينة','das Schiff','le navire'),
 ('vehicles','sailing boat','مركب شراع','das Segelboot','le voilier'),('vehicles','rickshaw','ريكشا','die Rikscha','le pousse-pousse'),
 # ---- nature
 ('nature','daisy','أقحوان','das Gänseblümchen','la pâquerette'),('nature','lily','زنبق','die Lilie','le lys'),('nature','lotus','لوتس','der Lotus','le lotus'),('nature','cactus flower','زهرة الصبار','die Kaktusblüte','la fleur de cactus'),
 ('nature','palm tree','نخلة','die Palme','le palmier dattier'),('nature','pine tree','شجرة صنوبر','die Kiefer','le pin'),('nature','oak tree','شجرة بلوط','die Eiche','le chêne'),('nature','olive tree','شجرة زيتون','der Olivenbaum','l\'olivier'),
 ('nature','mushroom house','فطر','der Fliegenpilz','l\'amanite'),('nature','rainbow','قوس قزح','der Regenbogen','l\'arc-en-ciel'),('nature','volcano eruption','انفجار بركان','der Vulkanausbruch','l\'éruption'),('nature','desert dune','كثيب','die Düne','la dune'),
 ('nature','coral reef','شعاب مرجانية','das Korallenriff','le récif corallien'),('nature','river bank','ضفة النهر','das Flussufer','la berge'),('nature','pond','بركة','der Teich','l\'étang'),('nature','meadow','مرج','die Wiese','la prairie'),
 # ---- space
 ('space','Earth','الأرض','die Erde','la Terre'),('space','Mars','المريخ','der Mars','Mars'),('space','Jupiter','المشتري','der Jupiter','Jupiter'),('space','Saturn','زحل','der Saturn','Saturne'),
 ('space','Venus','الزهرة','die Venus','Vénus'),('space','Mercury','عطارد','der Merkur','Mercure'),('space','galaxy','مجرة','die Galaxie','la galaxie'),('space','telescope','تلسكوب','das Teleskop','le télescope'),
 ('space','satellite','قمر صناعي','der Satellit','le satellite'),('space','shooting star','شهاب','die Sternschnuppe','l\'étoile filante'),
 # ---- sports
 ('sports','football','كرة القدم','der Fußball','le football'),('sports','basketball','كرة السلة','der Basketball','le basket'),('sports','tennis racket','مضرب تنس','der Tennisschläger','la raquette'),('sports','swimming','سباحة','das Schwimmen','la natation'),
 ('sports','bicycle race','سباق دراجات','das Radrennen','la course cycliste'),('sports','skipping rope','حبل القفز','das Springseil','la corde à sauter'),('sports','trophy','كأس','der Pokal','la coupe'),('sports','medal','ميدالية','die Medaille','la médaille'),
 ('sports','goal','مرمى','das Tor','le but'),('sports','helmet','خوذة','der Helm','le casque de vélo'),('sports','skateboard','لوح تزلج','das Skateboard','le skateboard'),('sports','running shoes','حذاء رياضي','die Laufschuhe','les chaussures de course'),
 # ---- toys
 ('toys','doll','عروسة','die Puppe','la poupée'),('toys','toy train','قطر لعبة','die Spielzeugeisenbahn','le train jouet'),('toys','jigsaw puzzle','بازل','das Puzzle','le puzzle'),('toys','kite toy','طيارة ورق','der Drachen','le cerf-volant'),
 ('toys','rocking horse','حصان هزاز','das Schaukelpferd','le cheval à bascule'),('toys','spinning top','نحلة لعبة','der Kreisel','la toupie'),('toys','toy car','عربية لعبة','das Spielzeugauto','la voiture miniature'),('toys','drum toy','طبلة لعبة','die Spielzeugtrommel','le tambour jouet'),
 ('toys','building blocks tower','برج مكعبات','der Bauklötzchenturm','la tour de cubes'),('toys','music box','علبة موسيقى','die Spieluhr','la boîte à musique'),
 # ---- kitchen
 ('kitchen','kettle','غلاية','der Wasserkocher','la bouilloire'),('kitchen','frying pan','طاسة','die Pfanne','la poêle'),('kitchen','toaster','محمصة','der Toaster','le grille-pain'),('kitchen','blender','خلاط','der Mixer','le mixeur'),
 ('kitchen','rolling pin','شوبك','das Nudelholz','le rouleau à pâtisserie'),('kitchen','cutting board','لوح تقطيع','das Schneidebrett','la planche à découper'),('kitchen','teapot','براد شاي','die Teekanne','la théière'),('kitchen','mug','مج','der Becher','la tasse'),
 ('kitchen','ladle','مغرفة','die Schöpfkelle','la louche'),('kitchen','apron','مريلة','die Schürze','le tablier'),
 # ---- tools
 ('tools','hammer','شاكوش','der Hammer','le marteau'),('tools','screwdriver','مفك','der Schraubendreher','le tournevis'),('tools','saw','منشار','die Säge','la scie'),('tools','wrench','مفتاح ربط','der Schraubenschlüssel','la clé'),
 ('tools','ladder','سلم','die Leiter','l\'échelle'),('tools','paint brush','فرشاة دهان','der Pinsel','le pinceau'),('tools','toolbox','صندوق عدة','der Werkzeugkasten','la boîte à outils'),('tools','shovel','جاروف','die Schaufel','la pelle'),
 ('tools','rake','أشة','der Rechen','le râteau'),('tools','magnifying glass','عدسة مكبرة','die Lupe','la loupe'),
 # ---- face and body
 ('face','eyelash','رمش','die Wimper','le cil'),('face','forehead','جبهة','die Stirn','le front'),('face','lips','شفايف','die Lippen','les lèvres'),
 ('face','thumb','إبهام','der Daumen','le pouce'),('face','toe','صباع الرجل','der Zeh','l\'orteil'),('face','heel','كعب','die Ferse','le talon'),('face','wrist','معصم','das Handgelenk','le poignet'),
 # ---- school / places
 ('school','blackboard','سبورة','die Tafel','le tableau noir'),('school','school bag','شنطة مدرسة','der Schulranzen','le cartable'),('school','pencil case','مقلمة','das Federmäppchen','la trousse'),('school','sharpener','براية','der Anspitzer','le taille-crayon'),
 ('school','stapler','دباسة','der Hefter','l\'agrafeuse'),('school','globe','كرة أرضية','der Globus','le globe'),('school','calculator','آلة حاسبة','der Taschenrechner','la calculatrice'),('school','paint set','علبة ألوان','der Malkasten','la boîte de peinture'),
]
if __name__ == '__main__':
    STYLE = "Polished kids' mobile-game art, cute 3D-cartoon look, glossy, rounded shapes, saturated friendly colours, family friendly (no blood, no weapons, no brands, no known cartoon characters)."
    TECH = "TECHNICAL RULES (the picture is cut by machine): ONE single image, pure flat white background #FFFFFF, no gradient, no floor, no cast shadows, no frame, no text, no letters, no numbers. Exact grid, every cell the same size, each item centred with a clear margin, nothing touching the cell edge."
    slug = lambda w: 'y_' + re.sub(r'[^a-z0-9]+', '_', w.lower()).strip('_')
    with io.open('docs/LEARN_EXPANSION_WORDS.csv', 'w', encoding='utf-8-sig', newline='') as f:
        w = csv.writer(f, quoting=csv.QUOTE_ALL); w.writerow(['section', 'english', 'arabic', 'german', 'french', 'picture_file_id'])
        for r in ROWS: w.writerow(list(r) + [slug(r[1])])
    sheets = {}; cells = {}
    for i in range(0, len(ROWS), 12):
        chunk = ROWS[i:i + 12]; n = i // 12 + 1; k = 'LRN-%02d' % n
        secs = sorted({r[0] for r in chunk}, key=[r[0] for r in chunk].index)
        order = ', '.join('(%d) %s' % (j + 1, r[1]) for j, r in enumerate(chunk))
        sheets[k] = '**%s** — %s\n%s %s Grid of 4 columns x 3 rows. One cute glossy 3D object or character per cell, in this exact order left to right, top to bottom: %s. Each one clearly recognisable for a 3-year-old, friendly smile on animals and people, one single subject per cell.\n' % (k, ' / '.join(secs), STYLE, TECH, order)
        cells[k] = [slug(r[1]) for r in chunk] + ['-'] * (12 - len(chunk))
    io.open('docs/LEARN_EXPANSION_IMAGE_PROMPTS.md', 'w', encoding='utf-8', newline='\n').write('# صور الكلمات الجديدة لوضع «اتعلّم» — برومتات الشيتات\nنفس شات ChatGPT الواحد. كل شيت 4 أعمدة × 3 صفوف = 12 صورة. **الترتيب زي ما هو** عشان أقصّها بالاسم.\n\n---\n\n' + '\n'.join(sheets.values()))
    io.open('tools/en_expansion/learn_cells.json', 'w', encoding='utf-8', newline='\n').write(json.dumps({'cells': cells, 'grid': {k: [4, 3] for k in cells}}, ensure_ascii=False, indent=1))
    print(len(ROWS), 'words,', len(sheets), 'sheets')
