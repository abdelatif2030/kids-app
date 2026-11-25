# -*- coding: utf-8 -*-
# Word lists for growing every English level to 100+ items (2026-11-26). Plural / uncountable words are listed below.
# EXIST: pictures the app already has (thing id) -> only the voice is missing.  NEW: needs a picture (image sheet prompts are built from this).
EXIST = [  # (english, arabic, thing id)
 ('ball','كورة','ball'),('starfish','نجمة بحر','u_star'),('peach','خوخ','q_peach'),('orange','برتقالة','orange'),('pineapple','أناناس','pineapple'),
 ('mango','مانجا','mango'),('ambulance','عربية الإسعاف','ambulance'),('police car','عربية الشرطة','police'),('helicopter','هليكوبتر','helicopter'),
 ('school bus','أتوبيس مدرسي','c_schoolbus'),('city bus','أتوبيس المدينة','c_citybus'),('taxi','تاكسي','c_taxi'),('tram','ترام','c_tram'),
 ('bulldozer','جرافة','c_bulldozer'),('felucca','فلوكة','d_boat'),('donkey cart','عربة حمار','d_donkeycart'),('tractor','جرار','tractor_f'),
 ('sled','زحافة','w_sled'),('space rover','مركبة الفضاء','s_rover'),('flying saucer','طبق طائر','s_ufo'),('fence','سور','h_fence'),('tulips','زهور التوليب','h_tulips'),
 ('bird bath','حوض طيور','h_birdbath'),('garden gnome','قزم الحديقة','h_gnome'),('plant','زرعة','h_plant'),('ice cream','آيس كريم','r_icecream'),
 ('lollipop','مصاصة','r_lolli'),('gingerbread house','بيت الزنجبيل','r_gingerhouse'),('yellow bird','عصفور أصفر','bird_yellow'),('rainbow','قوس قزح','r_rainbow'),
 ('kite','طيارة ورق','r_kite'),('pinwheel','مروحة ملونة','r_pinwheel'),('clownfish','سمكة المهرج','b_clown'),('yellow fish','سمكة صفرا','b_yellowfish'),
 ('seagull','نورس','b_gull'),('coral','مرجان','b_coral'),('beach ball','كورة الشاطئ','b_ball'),('life ring','عوامة','b_ring'),('beach palm','نخلة','b_palm1'),
 ('small boat','مركب صغير','b_boat'),('dock','رصيف','b_dock'),('beach chair','كرسي الشاطئ','b_chair'),('rocks','صخور','b_rocks'),('seaweed','أعشاب البحر','b_weed'),
 ('surfboard','لوح التزلج','b_surf'),('bucket','جردل','b_bucket'),('shipwreck','سفينة غارقة','u_wreck'),('anchor','مرساة','u_anchor'),('clam','محارة','u_clam'),
 ('sea anemone','شقائق البحر','u_anemone'),('puffer fish','سمكة منتفخة','u_puffer'),('small rocket','صاروخ صغير','s_rocket'),('space helmet','خوذة الفضاء','s_helmet'),
 ('comet','مذنب','s_comet'),('space station','محطة فضاء','s_station'),('tower','برج','k_tower'),('princess','أميرة','k_princess'),('shield','درع','k_shield'),
 ('torch','مشعل','k_torch'),('knight horse','حصان الفارس','k_horse'),('jester','مهرج الملك','k_jester'),('cottage','كوخ','k_cottage'),('well','بئر','k_well'),
 ('banner','راية','k_banner'),('hut','كوخ خشب','j_hut'),('bridge','جسر','j_bridge'),('totem','تمثال خشب','j_totem'),('silo','صومعة','silo_f'),
 ('scarecrow','فزاعة','scarecrow_f'),('haystack','كومة قش','haystack_f'),('trough','معلف','trough_f'),('farm gate','بوابة المزرعة','gate_f'),
 ('water pump','طلمبة مية','pump_f'),('chicken coop','بيت الفراخ','f_coop'),('wheelbarrow','عربة يد','f_barrow'),('watering can','مرش','f_water_can'),
 ('snow cabin','كوخ في الثلج','w_cabin'),('skis','زلاجات','w_skis'),('snowballs','كور ثلج','w_snowballs'),('ice block','قطعة ثلج','w_iceblock'),
 ('fire station','محطة مطافي','c_firestation'),('bus stop','موقف أتوبيس','c_busstop'),('street lamp','عمود نور','c_lamp'),('bench','دكة','c_bench'),
 ('mailbox','صندوق بريد','c_mailbox'),('sand dune','كثبان رملية','d_dune'),('oasis','واحة','d_oasis'),('jar','جرة','d_jar'),('wooden cart','عربة خشب','d_cart'),
 ('lantern','فانوس','d_lantern'),('baby camel','جمل صغير','d_babycamel'),
]
PLURAL = {'tulips', 'rocks', 'skis', 'snowballs', 'shorts', 'boots', 'sandals', 'twins', 'stairs', 'nuts', 'peanuts', 'fava beans', 'green beans', 'french fries', 'stuffed vine leaves'}
UNCOUNT = {'coral', 'seaweed', 'butter', 'sugar', 'salt', 'tea', 'jam', 'strawberry jam', 'cereal', 'hummus', 'tahini', 'rice pudding', 'spaghetti', 'chocolate', 'salad',
           'koshari', 'molokhia', 'kunafa', 'basbousa', 'om ali', 'yogurt', 'lemonade', 'okra', 'spinach', 'cabbage', 'cauliflower', 'sky', 'sea', 'happy', 'sad', 'angry', 'tired',
           'hungry', 'thirsty', 'scared', 'surprised', 'sleepy', 'shy', 'proud', 'excited'}
FEELINGS = {'happy', 'sad', 'angry', 'tired', 'hungry', 'thirsty', 'scared', 'surprised', 'sleepy', 'shy', 'proud', 'excited'}

NEW = {  # level -> [(english, arabic)]  (these need a picture)
 'Animals': [('squirrel','سنجاب'),('hedgehog','قنفذ'),('deer','غزال'),('wolf','ذئب'),('hippo','فرس النهر'),('rhino','وحيد القرن'),('kangaroo','كنغر'),
  ('koala','كوالا'),('polar bear','دب قطبي'),('puppy','جرو'),('kitten','قطة صغيرة'),('lamb','خروف صغير'),('calf','عجل'),('hamster','هامستر'),('walrus','فظ'),
  ('otter','قضاعة'),('beaver','سمور'),('raccoon','راكون'),('pelican','بجعة'),('stork','لقلق'),('hummingbird','طائر طنان'),('woodpecker','نقار الخشب'),
  ('lobster','استاكوزا'),('shrimp','جمبري'),('beetle','خنفساء'),('grasshopper','جندب'),('wasp','دبور'),('mosquito','بعوضة'),('llama','لاما'),
  ('leopard','نمر مرقط'),('chimpanzee','شمبانزي'),('sloth','كسلان'),('squid','حبار'),('meerkat','ميركات')],
 'Me and my world': [('happy','سعيد'),('sad','حزين'),('angry','غضبان'),('tired','تعبان'),('hungry','جعان'),('thirsty','عطشان'),('scared','خايف'),
  ('surprised','متفاجئ'),('sleepy','نعسان'),('shy','خجول'),('proud','فخور'),('excited','متحمس'),
  ('shoulder','كتف'),('neck','رقبة'),('arm','دراع'),('leg','رجل'),('elbow','كوع'),('back','ضهر'),('chin','دقن'),('cheek','خد'),('eyebrow','حاجب'),('tongue','لسان'),
  ('shorts','شورت'),('skirt','جيب'),('sweater','سويتر'),('boots','بوت'),('sandals','صندل'),('t-shirt','تي شيرت'),('coat','معطف'),('belt','حزام'),
  ('aunt','عمة'),('cousin','ابن العم'),('twins','توأم'),('neighbour','جار'),
  ('baker','خباز'),('dentist','دكتور أسنان'),('mechanic','ميكانيكي'),('waiter','جرسون'),('captain','قبطان'),('scientist','عالم'),('astronaut','رائد فضاء'),
  ('gardener','جنايني'),('fisherman','صياد سمك'),('shopkeeper','بقال'),('tailor','خياط'),('vet','دكتور بيطري')],
 'Food': [('koshari','كشري'),('falafel','طعمية'),('fava beans','فول'),('molokhia','ملوخية'),('feteer','فطير'),('basbousa','بسبوسة'),('kunafa','كنافة'),
  ('om ali','أم علي'),('stuffed vine leaves','محشي'),('hummus','حمص'),('tahini','طحينة'),('rice pudding','رز بلبن'),('burger','برجر'),('sandwich','ساندوتش'),
  ('spaghetti','مكرونة'),('french fries','بطاطس مقلية'),('salad','سلطة'),('butter','زبدة'),('yogurt','زبادي'),('cake','تورتة'),('chocolate','شوكولاتة'),
  ('jam','مربى'),('sugar','سكر'),('salt','ملح'),('tea','شاي'),('lemonade','ليمونادة'),('cereal','كورن فليكس'),('nuts','مكسرات'),('peanuts','فول سوداني'),
  ('spinach','سبانخ'),('zucchini','كوسة'),('cabbage','كرنب'),('cauliflower','قرنبيط'),('okra','بامية'),('green beans','فاصوليا'),
  ('radish','فجل'),('grapefruit','جريب فروت'),('tangerine','يوسفي'),('guava','جوافة'),('lime','ليمون أخضر')],
 'My home and my city': [('door','باب'),('window','شباك'),('sofa','كنبة'),('kitchen','مطبخ'),('bathroom','حمام'),('bedroom','أوضة النوم'),('stairs','سلم'),('roof','سطح'),
  ('fridge','تلاجة'),('oven','فرن'),('lamp','أباجورة'),('carpet','سجادة'),('mirror','مراية'),('curtain','ستارة'),('key','مفتاح'),('cup','كوباية'),('plate','طبق'),
  ('spoon','معلقة'),('fork','شوكة'),('knife','سكينة'),('bowl','زبدية'),('bottle','زجاجة'),('pot','حلة'),('soap','صابونة'),('comb','مشط'),('bin','سلة زبالة'),
  ('television','تلفزيون'),('phone','تليفون'),('computer','كمبيوتر'),('pillow','مخدة'),('blanket','بطانية'),('chair','كرسي'),('garden','حديقة'),('park','جنينة'),
  ('zoo','حديقة الحيوان'),('farm','مزرعة'),('beach','شاطئ'),('market','سوق'),('mosque','جامع'),('church','كنيسة'),('library','مكتبة'),('bakery','مخبز'),
  ('shop','محل'),('bank','بنك'),('airport','مطار'),('train station','محطة قطر'),('street','شارع'),('traffic light','إشارة مرور'),('river','نهر'),('sea','بحر'),
  ('lake','بحيرة'),('island','جزيرة'),('forest','غابة'),('desert','صحرا'),('hill','تل'),('sky','سما'),('star','نجمة'),('volcano','بركان'),('cave','كهف'),('waterfall','شلال')],
}
# "A is for ...": a picture word per letter; a star marks a word that needs a new picture
LETTER_WORDS = ['apple', 'ball', 'cat', 'dog', 'egg', 'fish', 'grapes', 'hat*', 'ice cream', 'jellyfish', 'kite', 'lion', 'monkey', 'nest*', 'orange', 'pig', 'queen', 'rabbit',
                'sun', 'tree', 'umbrella', 'van*', 'watermelon', 'xylophone*', 'yo-yo*', 'zebra']
