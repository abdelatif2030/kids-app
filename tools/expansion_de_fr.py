# -*- coding: utf-8 -*-
# German and French for the 297 expansion words of the English world (the ones in docs/ENGLISH_EXPANSION_WORDS.csv that became words),
# with their sentences. Written by hand: to be CHECKED by native speakers before recording.
# Line format:  english | German (article) | French (article) [| flags]
#   flags: pl = plural, u = uncountable (no article in the sentence), m/f = gender of a French word that starts with l'
# Run: python -X utf8 tools/expansion_de_fr.py  -> docs/EXPANSION_DE_FR.csv
import csv, io, json
DATA = '''
## x:around
starfish|der Seestern|l'étoile de mer|f
pineapple|die Ananas|l'ananas|m
mango|die Mango|la mangue
ambulance|der Krankenwagen|l'ambulance|f
police car|das Polizeiauto|la voiture de police
helicopter|der Hubschrauber|l'hélicoptère|m
school bus|der Schulbus|le bus scolaire
city bus|der Stadtbus|le bus de ville
taxi|das Taxi|le taxi
tram|die Straßenbahn|le tramway
bulldozer|der Bulldozer|le bulldozer
felucca|die Feluke|la felouque
donkey cart|der Eselskarren|la charrette à âne
tractor|der Traktor|le tracteur
sled|der Schlitten|la luge
space rover|das Mondfahrzeug|le rover spatial
flying saucer|die fliegende Untertasse|la soucoupe volante
fence|der Zaun|la clôture
tulips|die Tulpen|les tulipes|pl
bird bath|die Vogeltränke|le bain d'oiseaux
garden gnome|der Gartenzwerg|le nain de jardin
plant|die Pflanze|la plante
ice cream|das Eis|la glace|u
lollipop|der Lutscher|la sucette
gingerbread house|das Lebkuchenhaus|la maison en pain d'épices
yellow bird|der gelbe Vogel|l'oiseau jaune|m
rainbow|der Regenbogen|l'arc-en-ciel|m
kite|der Drachen|le cerf-volant
pinwheel|das Windrad|le moulinet
clownfish|der Clownfisch|le poisson-clown
yellow fish|der gelbe Fisch|le poisson jaune
seagull|die Möwe|la mouette
beach ball|der Wasserball|le ballon de plage
life ring|der Rettungsring|la bouée
beach palm|die Strandpalme|le palmier de plage
small boat|das kleine Boot|le petit bateau
dock|der Steg|le ponton
beach chair|der Strandstuhl|la chaise de plage
rocks|die Felsen|les rochers|pl
seaweed|der Seetang|les algues|pl
surfboard|das Surfbrett|la planche de surf
bucket|der Eimer|le seau
shipwreck|das Schiffswrack|l'épave|f
anchor|der Anker|l'ancre|f
clam|die Muschel|la palourde
sea anemone|die Seeanemone|l'anémone de mer|f
puffer fish|der Kugelfisch|le poisson-globe
small rocket|die kleine Rakete|la petite fusée
space helmet|der Weltraumhelm|le casque d'astronaute
comet|der Komet|la comète
space station|die Raumstation|la station spatiale
tower|der Turm|la tour
princess|die Prinzessin|la princesse
shield|der Schild|le bouclier
torch|die Fackel|la torche
knight horse|das Pferd des Ritters|le cheval du chevalier
jester|der Hofnarr|le bouffon
cottage|das Häuschen|la chaumière
well|der Brunnen|le puits
banner|das Banner|la bannière
hut|die Hütte|la cabane
bridge|die Brücke|le pont
totem|der Totempfahl|le totem
silo|das Silo|le silo
scarecrow|die Vogelscheuche|l'épouvantail|m
haystack|der Heuhaufen|la meule de foin
trough|der Futtertrog|l'abreuvoir|m
farm gate|das Hoftor|le portail de la ferme
water pump|die Wasserpumpe|la pompe à eau
chicken coop|der Hühnerstall|le poulailler
wheelbarrow|die Schubkarre|la brouette
watering can|die Gießkanne|l'arrosoir|m
snow cabin|die Schneehütte|la cabane dans la neige
skis|die Skier|les skis|pl
snowballs|die Schneebälle|les boules de neige|pl
ice block|der Eisblock|le bloc de glace
fire station|die Feuerwache|la caserne de pompiers
bus stop|die Bushaltestelle|l'arrêt de bus|m
street lamp|die Straßenlaterne|le lampadaire
bench|die Bank|le banc
mailbox|der Briefkasten|la boîte aux lettres
sand dune|die Sanddüne|la dune de sable
oasis|die Oase|l'oasis|f
jar|der Krug|la jarre
wooden cart|der Holzkarren|la charrette en bois
lantern|die Laterne|la lanterne
baby camel|das Kamelbaby|le bébé chameau
## x:animals
squirrel|das Eichhörnchen|l'écureuil|m
hedgehog|der Igel|le hérisson
deer|das Reh|le cerf
wolf|der Wolf|le loup
hippo|das Nilpferd|l'hippopotame|m
rhino|das Nashorn|le rhinocéros
kangaroo|das Känguru|le kangourou
koala|der Koala|le koala
polar bear|der Eisbär|l'ours polaire|m
puppy|der Welpe|le chiot
kitten|das Kätzchen|le chaton
lamb|das Lamm|l'agneau|m
calf|das Kalb|le veau
hamster|der Hamster|le hamster
walrus|das Walross|le morse
otter|der Otter|la loutre
beaver|der Biber|le castor
raccoon|der Waschbär|le raton laveur
pelican|der Pelikan|le pélican
stork|der Storch|la cigogne
hummingbird|der Kolibri|le colibri
woodpecker|der Specht|le pic
lobster|der Hummer|le homard
shrimp|die Garnele|la crevette
beetle|der Käfer|le scarabée
grasshopper|die Heuschrecke|la sauterelle
wasp|die Wespe|la guêpe
mosquito|die Mücke|le moustique
llama|das Lama|le lama
leopard|der Leopard|le léopard
chimpanzee|der Schimpanse|le chimpanzé
sloth|das Faultier|le paresseux
squid|der Tintenfisch|le calmar
meerkat|das Erdmännchen|le suricate
## x:family
happy|glücklich|heureux|feel:Ich bin glücklich.:Je suis heureux.
sad|traurig|triste|feel:Ich bin traurig.:Je suis triste.
angry|wütend|en colère|feel:Ich bin wütend.:Je suis en colère.
tired|müde|fatigué|feel:Ich bin müde.:Je suis fatigué.
hungry|hungrig|la faim|feel:Ich habe Hunger.:J'ai faim.
thirsty|durstig|la soif|feel:Ich habe Durst.:J'ai soif.
scared|ängstlich|la peur|feel:Ich habe Angst.:J'ai peur.
surprised|überrascht|surpris|feel:Ich bin überrascht.:Je suis surpris.
sleepy|schläfrig|le sommeil|feel:Ich bin schläfrig.:J'ai sommeil.
shy|schüchtern|timide|feel:Ich bin schüchtern.:Je suis timide.
proud|stolz|fier|feel:Ich bin stolz.:Je suis fier.
excited|aufgeregt|excité|feel:Ich bin aufgeregt.:Je suis excité.
shoulder|die Schulter|l'épaule|f
neck|der Hals|le cou
arm|der Arm|le bras
leg|das Bein|la jambe
elbow|der Ellbogen|le coude
back|der Rücken|le dos
chin|das Kinn|le menton
cheek|die Wange|la joue
eyebrow|die Augenbraue|le sourcil
tongue|die Zunge|la langue
aunt|die Tante|la tante
cousin|der Cousin|le cousin
twins|die Zwillinge|les jumeaux|pl
neighbour|der Nachbar|le voisin
## x:school
shorts|die Shorts|les shorts|pl
skirt|der Rock|la jupe
sweater|der Pullover|le pull
boots|die Stiefel|les bottes|pl
sandals|die Sandalen|les sandales|pl
t-shirt|das T-Shirt|le tee-shirt
coat|der Mantel|le manteau
belt|der Gürtel|la ceinture
## x:world
baker|der Bäcker|le boulanger
dentist|der Zahnarzt|le dentiste
mechanic|der Mechaniker|le mécanicien
waiter|der Kellner|le serveur
captain|der Kapitän|le capitaine
scientist|der Wissenschaftler|le scientifique
astronaut|der Astronaut|l'astronaute|m
gardener|der Gärtner|le jardinier
fisherman|der Fischer|le pêcheur
shopkeeper|der Ladenbesitzer|le commerçant
tailor|der Schneider|le tailleur
vet|der Tierarzt|le vétérinaire
## x:food
koshari|das Koshari|le koshari|u
falafel|die Falafel|les falafels|pl
fava beans|die Saubohnen|les fèves|pl
molokhia|die Molokhia|la mouloukhia|u
feteer|das Feteer|le feteer|u
basbousa|die Basbousa|la basboussa|u
kunafa|die Kunafa|le kounafa|u
om ali|das Om Ali|l'Om Ali|u,m
stuffed vine leaves|die gefüllten Weinblätter|les feuilles de vigne farcies|pl
hummus|der Hummus|le houmous|u
tahini|das Tahini|le tahini|u
rice pudding|der Milchreis|le riz au lait|u
burger|der Burger|le hamburger
sandwich|das Sandwich|le sandwich
spaghetti|die Spaghetti|les spaghettis|pl
french fries|die Pommes frites|les frites|pl
salad|der Salat|la salade
butter|die Butter|le beurre|u
yogurt|der Joghurt|le yaourt|u
cake|der Kuchen|le gâteau
chocolate|die Schokolade|le chocolat|u
jam|die Marmelade|la confiture|u
sugar|der Zucker|le sucre|u
salt|das Salz|le sel|u
tea|der Tee|le thé|u
lemonade|die Limonade|la limonade
cereal|die Cornflakes|les céréales|pl
nuts|die Nüsse|les noix|pl
peanuts|die Erdnüsse|les cacahuètes|pl
spinach|der Spinat|les épinards|pl
zucchini|die Zucchini|la courgette
cabbage|der Kohl|le chou
cauliflower|der Blumenkohl|le chou-fleur
okra|die Okra|le gombo
green beans|die grünen Bohnen|les haricots verts|pl
radish|das Radieschen|le radis
grapefruit|die Grapefruit|le pamplemousse
tangerine|die Mandarine|la mandarine
guava|die Guave|la goyave
lime|die Limette|le citron vert
pancake|der Pfannkuchen|la crêpe
popcorn|das Popcorn|le pop-corn|u
sausage|die Wurst|la saucisse
tuna|der Thunfisch|le thon|u
lentil soup|die Linsensuppe|la soupe de lentilles
mango juice|der Mangosaft|le jus de mangue|u
## x:home
door|die Tür|la porte
window|das Fenster|la fenêtre
sofa|das Sofa|le canapé
kitchen|die Küche|la cuisine
bathroom|das Badezimmer|la salle de bain
bedroom|das Schlafzimmer|la chambre
stairs|die Treppe|l'escalier|m
roof|das Dach|le toit
fridge|der Kühlschrank|le frigo
oven|der Ofen|le four
lamp|die Lampe|la lampe
carpet|der Teppich|le tapis
mirror|der Spiegel|le miroir
curtain|der Vorhang|le rideau
key|der Schlüssel|la clé
cup|die Tasse|la tasse
plate|der Teller|l'assiette|f
spoon|der Löffel|la cuillère
fork|die Gabel|la fourchette
knife|das Messer|le couteau
bowl|die Schüssel|le bol
bottle|die Flasche|la bouteille
pot|der Topf|la casserole
soap|die Seife|le savon
comb|der Kamm|le peigne
bin|der Mülleimer|la poubelle
television|der Fernseher|la télévision
phone|das Telefon|le téléphone
computer|der Computer|l'ordinateur|m
pillow|das Kissen|l'oreiller|m
blanket|die Decke|la couverture
chair|der Stuhl|la chaise
balcony|der Balkon|le balcon
garage|die Garage|le garage
lift|der Aufzug|l'ascenseur|m
hall|der Flur|le couloir
toilet|die Toilette|les toilettes|pl
shower|die Dusche|la douche
bathtub|die Badewanne|la baignoire
washing machine|die Waschmaschine|la machine à laver
vacuum cleaner|der Staubsauger|l'aspirateur|m
iron|das Bügeleisen|le fer à repasser
hanger|der Kleiderbügel|le cintre
shelf|das Regal|l'étagère|f
drawer|die Schublade|le tiroir
cupboard|der Schrank|le placard
## x:city
garden|der Garten|le jardin
park|der Park|le parc
zoo|der Zoo|le zoo
farm|der Bauernhof|la ferme
beach|der Strand|la plage
market|der Markt|le marché
mosque|die Moschee|la mosquée
church|die Kirche|l'église|f
library|die Bibliothek|la bibliothèque
bakery|die Bäckerei|la boulangerie
shop|der Laden|le magasin
bank|die Bank|la banque
airport|der Flughafen|l'aéroport|m
train station|der Bahnhof|la gare
street|die Straße|la rue
traffic light|die Ampel|le feu de circulation
river|der Fluss|le fleuve
sea|das Meer|la mer
lake|der See|le lac
island|die Insel|l'île|f
forest|der Wald|la forêt
desert|die Wüste|le désert
hill|der Hügel|la colline
sky|der Himmel|le ciel
volcano|der Vulkan|le volcan
cave|die Höhle|la grotte
waterfall|der Wasserfall|la cascade
school gate|das Schultor|la porte de l'école
playground|der Spielplatz|l'aire de jeux|f
swimming pool|das Schwimmbad|la piscine
cinema|das Kino|le cinéma
restaurant|das Restaurant|le restaurant
pharmacy|die Apotheke|la pharmacie
supermarket|der Supermarkt|le supermarché
police station|die Polizeistation|le commissariat
post office|die Post|la poste
museum|das Museum|le musée
stadium|das Stadion|le stade
'''

def de_sentence(word, flags):
    if any(f.startswith('feel:') for f in flags): return [f for f in flags if f.startswith('feel:')][0].split(':')[1]
    art, _, noun = word.partition(' ')
    if 'pl' in flags: return 'Das sind %s.' % word.split(' ', 1)[1]
    if 'u' in flags: return 'Das ist %s.' % noun
    ind = {'der': 'ein', 'die': 'eine', 'das': 'ein'}[art]
    return 'Das ist %s %s.' % (ind, noun)

def fr_sentence(word, flags):
    for f in flags:
        if f.startswith('feel:'): return f.split(':')[2]
    if 'pl' in flags: return 'Ce sont %s.' % ('des ' + word.split(' ', 1)[1] if word.startswith('les ') else word)
    g = 'm' if 'm' in flags else 'f' if 'f' in flags else None
    if 'u' in flags:
        if word.startswith('le '): return "C'est du %s." % word[3:]
        if word.startswith('la '): return "C'est de la %s." % word[3:]
        if word.startswith("l'"): return "C'est de l'%s." % word[2:]
    for a, ind in (('le ', 'un '), ('la ', 'une ')):
        if word.startswith(a): return "C'est %s%s." % (ind, word[len(a):])
    if word.startswith("l'"): return "C'est %s%s." % ('un ' if g == 'm' else 'une ', word[2:])
    # a feeling noun without an article (adjectives) is handled by 'feel:'
    return "C'est %s." % word

def rows():
    out, cat = [], ''
    for line in DATA.strip().split('\n'):
        if line.startswith('## '): cat = line[3:]; continue
        p = line.split('|'); en, de, fr = p[0], p[1], p[2]
        flags = [x for part in p[3:] for x in part.split(',')] if len(p) > 3 else []
        # 'feel:' flags hold colons, not commas
        out.append({'cat': cat, 'en': en, 'de': de, 'fr': fr, 'de_s': de_sentence(de, flags), 'fr_s': fr_sentence(fr, flags), 'flags': flags})
    return out

if __name__ == '__main__':
    R = rows()
    w = json.load(io.open('game_src/learn_games/src/english/words.json', encoding='utf-8'))
    ar = {e['en']: e.get('ar', '') for e in w}
    want = [e['en'] for e in w if e['cat'].startswith('x:')]
    have = [r['en'] for r in R]
    assert sorted(want) == sorted(have), (set(want) ^ set(have))
    with io.open('docs/EXPANSION_DE_FR.csv', 'w', encoding='utf-8-sig', newline='') as f:
        c = csv.writer(f, quoting=csv.QUOTE_ALL)
        c.writerow(['category', 'english', 'arabic', 'german', 'german_sentence', 'french', 'french_sentence'])
        for r in R: c.writerow([r['cat'], r['en'], ar.get(r['en'], ''), r['de'], r['de_s'], r['fr'].replace('/', ''), r['fr_s']])
    io.open('tools/expansion_de_fr.json', 'w', encoding='utf-8', newline='\n').write(json.dumps(R, ensure_ascii=False, indent=0))
    print(len(R), 'words')
