# وضع «اتعلّم» — الخطة وإيه المطلوب (2026-11-26)

## الفكرة
فوق شاشة الألعاب التعليمية **تبويبين**: **«مستويات»** (زي دلوقتي: 8 أسئلة وبرافو) و**«اتعلّم»** (الأساسيات كلها مقسّمة أقسام).
الطفل يدخل قسم (الأرقام مثلًا) فياخده **من أول عنصر لآخر عنصر** من غير حد (1 لحد 20، من A لحد Z، كل الحيوانات…):
1. الصورة بتظهر كبيرة، والكلمة بتتقال **أكتر من مرة**: عادي، بعدين ببطء، بعدين عادي (+ الجملة: «This is a cat»). نفس تسجيلاتك الموجودة، بدون أي صوت جديد.
2. الطفل يضغط «اللي بعده» (أو بتكمّل لوحدها بعد ثواني)، وزرار 🔊 يعيد كل الكلام، وزرار «قول معايا».
3. آخر القسم: «خلصت كل حاجة!» ونجمة مرة واحدة. مفيش عدّاد ولا عقوبة، والطفل يرجع لأي عنصر.
4. تتكرر نفس الأقسام بالأربع لغات (عربي / English / Deutsch / Français) والصور هي هي.

## الأقسام وعدد العناصر (من اللي عندنا دلوقتي)
| القسم | عربي | English | Deutsch | Français |
|---|---|---|---|---|
| الحروف | 28 | 26 | 26 + Ä Ö Ü ß | 26 + é è ç ê |
| الأرقام 0-20 | 21 | 21 | 21 | 21 |
| العشرات 30-100 | 8 | 8 | 8 | 8 |
| الحيوانات | 64 | 98 | 64 | 64 |
| الألوان | 34 | 34 | 34 | 34 |
| الأشكال | 25 | 25 | 25 | 25 |
| الأيام / الشهور / الفصول | 7 / 12 / 4 | 7 / 12 / 4 | 7 / 12 / 4 | 7 / 12 / 4 |
| جسمي، هدومي، عيلتي، أكلي، فاكهة وخضار، مهن، مدرسة، جو | 12 لكل قسم تقريبًا | 12 + الجديد | 12 | 12 |
| البيت، المدينة، حواليّا | — | 46 / 38 / 87 | بعد ترجمة الكلمات الزيادة | بعد ترجمة الكلمات الزيادة |

## المطلوب منك
### 1) أصوات (ملف جاهز: `LEARN_MODE_LINES.csv` — 120 جملة، 30 لكل لغة)
- 10 جمل عامة لكل لغة («يلا نتعلم سوا»، «قول معايا»، «تاني»، «برافو»، «خلصت كل حاجة»…).
- 20 مقدمة قسم لكل لغة («هنتعلم الأرقام!»…).
- **باقي الأصوات (الكلمات والجمل) موجودة بالفعل أو مطلوبة قبل كده** في `NEW_CLIPS_TO_RECORD.csv`: الإنجليزي ناقص 572، والألماني 1311، والفرنساوي 1311. العربي بتاع الأقسام الأساسية عندنا بالفعل (أصوات فاطمة).
- **اختياري ومفيد جدًا:** نطق صوت كل حرف (phonics) — عربي 28، English 26 (a = «ah»)، Deutsch 30، Français 30. لو حبيت، أكتب لك نصوصها بعد ما تقرر الأسلوب.

### 2) صور (برومتات تحت)
- 20 أيقونة قسم (شيت واحد 5×4) تظهر في شاشة الأقسام.
- 2 أيقونة للتبويبين («مستويات» و«اتعلّم»).
- 4 كلمات حروف ناقصة صورتها (للألماني والفرنساوي): igloo, usine (factory), wagon, Yacht.
- كل صور الكلمات (730 صورة) موجودة.

### 3) كلمات
- ترجمة الـ297 كلمة الزيادة للألماني والفرنساوي (لو عايز أقسام البيت والمدينة وحواليّا فيهم). قولّي «اكتب الكلمات الزيادة».
- مفيش كلمات تانية ناقصة للأساسيات.

---
## برومتات الصور
**LEARN-SECTIONS** — Polished kids' mobile-game art, cute 3D-cartoon look, rounded shapes, saturated friendly colours, family friendly (no blood, no weapons, no brands, no known cartoon characters). {TECH} Exact grid of 5 columns x 4 rows, 20 round badges with a thick coloured rim and a glossy centre picture (no text, no numbers), in this exact order left to right, top to bottom: (1) Letters (a bold coloured block of letter shapes, no readable letters); (2) Numbers (a stack of colourful counting beads / abacus); (3) Tens (ten bright pencils in a bundle); (4) Animals (a friendly lion and giraffe); (5) Colours (a paint palette with brushes); (6) Shapes (a circle, square, triangle toys); (7) Days of the week (a cute desk calendar with no numbers); (8) Months (a tear-off wall calendar with no numbers); (9) Seasons (a tree split in four seasons); (10) My body (a smiling child waving); (11) Clothes (a T-shirt, cap and sock); (12) Family (a happy family of four); (13) Food (bread, cheese and an apple); (14) Fruit and vegetables (a basket of fruit and carrots); (15) Jobs (a doctor stethoscope and a chef hat); (16) School things (a backpack, pencils and a book); (17) Weather (sun, cloud and umbrella); (18) At home (a cosy house with a door); (19) The city (buildings, a bus and a traffic light); (20) My day (a sun rising over a bed and a toothbrush).
(TECH = TECHNICAL RULES (the picture is cut by machine): ONE single image, pure flat white background #FFFFFF, no gradient, no floor, no cast shadows, no frame, no text, no letters, no numbers. Every cell the same size, each item centred with a clear margin, nothing touching the cell edges.)

**LEARN-TABS** — Polished kids' mobile-game art, cute 3D-cartoon look, rounded shapes, saturated friendly colours, family friendly (no blood, no weapons, no brands, no known cartoon characters). TECHNICAL RULES as above. Grid of 2 columns x 1 row: (1) a round golden trophy-and-stairs badge «levels» (a small staircase of three steps with a star on top); (2) a round open picture-book badge «learn» (an open book with a lightbulb above). No text.

**LEARN-LETTERWORDS** — Polished kids' mobile-game art, cute 3D-cartoon look, rounded shapes, saturated friendly colours, family friendly (no blood, no weapons, no brands, no known cartoon characters). TECHNICAL RULES as above. Grid of 4 columns x 1 row, in this order: an igloo, a small factory with a chimney, an old goods wagon (railway truck), a white sailing yacht.
