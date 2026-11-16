# Requirements tracker — عالم رحلتي التعليمي (2026-11-12)

Status words: **Done** = built and checked in a browser/by tests; **Partly** = a working first version; **Not yet** = not built.
Nothing here is marked done unless it runs. Nothing has been tested on a real phone/tablet or heard by a person from my side.

| # | Requirement (from the owner's prompts) | Status | Notes |
|---|---|---|---|
| 1 | Boy and girl heroes, selection, saved | **Done** (first version) | `kit/kids.js`: curly-hair boy, ponytail girl, hair/clothes colours saved. Not yet: shoes/accessories/backpack choices, back/side/3-4 views, 15 expressions (5 exist), 20 poses (8 exist), outfits |
| 2 | Owl mascot, animated | **Partly** | `kit/owl.js` blue owl, bow tie, glasses, cap, wand: point, toss, clap, cheer, think. Not yet: laugh, fly, explain poses; the sheet calls him "Lulu" |
| 3 | Arabic alphabet (28) with accurate tashkeel | **Partly** | 28 letters, a thing for each, voice with full tashkeel (guard test). Not yet: tracing/writing, listening challenge, memory pairs, letter shown as 3D solid letter |
| 4 | English alphabet | **Not yet** | needs English voice + data in `levels.js` |
| 5 | Numbers and counting | **Partly** | 1-20, counting aloud, numerals. Not yet: 0, 21-100, addition/subtraction, more/less |
| 6 | Colours and shapes | **Partly** | 11 colours, 5 shapes. Not yet: rectangle, oval, diamond, cube, sphere, cylinder, cone |
| 7 | Animals, sounds, facts | **Partly** | 8 animals + food. Not yet: the 48-animal library, sounds, facts, categories, animations (walk/run/eat) |
| 8 | Fruits and vegetables | **Partly** | 9 items, find-it level. Not yet: health facts, more items |
| 9 | Body parts | **Not yet** | needs models |
| 10 | Transportation | **Partly** | 6 vehicles, find-it level. Not yet: fire truck, ambulance, police, helicopter, bicycle, how they move |
| 11 | Opposites and everyday vocabulary | **Not yet** | |
| 12 | Healthy habits and safety | **Partly** | 10 gentle habits with Mama and Baba. Not yet: safety scenes |
| 13 | Science, nature, weather | **Not yet** | |
| 14 | Multiple 3D worlds | **Partly** | one pond hosts all 12 levels. Not yet: separate environments (farm, sea, space, city, castle...) and a world-map hub |
| 15 | Mini-games and challenges | **Partly** | find-it, order, counting. Not yet: matching/drag-drop, missing piece, memory, tracing, sound recognition, mini stories (the old sort/treasure/ladders/pattern/day/ball games exist as code but are no longer offered; they should become levels) |
| 16 | Rewards (stars, trophies, badges, gifts) | **Partly** | stars per finished level (existing rule), sticker album and garden in the app. Not yet: trophies/badges/chests inside the world, outfit unlocks |
| 17 | Progress and achievements | **Partly** | every round goes to the existing parent dashboard by skill; level unlock/done saved |
| 18 | Parent dashboard | **Done** (existing app) | not extended for the new levels' names yet |
| 19 | Music and sound effects | **Partly** | one calm theme that grows with answers, pentatonic notes, effects, ducking under voice. Not yet: separate loops per area |
| 20 | Arabic and English voiceovers | **Partly** | Arabic: 480 clips, Fatima (+ Mahmoud for Baba), full tashkeel enforced. English: none |
| 21 | Asset library as GLB/PNG | **Not done, by design for now** | all models are drawn in code (`kit/*3d.js`), no files, small size; GLB export would need a modelling tool |
| 22 | Match the reference sheets | **Partly** | heroes, owl colours, shapes follow the sheets; animals/fruit/vehicles are simpler than the sheets |

Next steps in order: (1) move the old sort/treasure/ladders/pattern/day/ball games in as levels, (2) English alphabet, (3) animal library (48), (4) body parts + opposites, (5) more environments and a world-map hub, (6) tracing, memory and drag-drop activities, (7) outfits and rewards shop.
