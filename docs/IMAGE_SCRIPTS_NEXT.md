# Next picture packs (prompts for the new ChatGPT account)

Each pack is ONE sheet: a 4 x 3 grid read left to right, top to bottom. Send the sheets back one at a time; Claude cuts them with
`python tools/art/cut_pack.py <pack> <sheet number>` and rebuilds the game (the pack switches on when all 12 pictures exist).
Paste the STYLE block, then the SHEET block, then the ITEMS line of each pack. Upload any finished sheet as the style reference.

## STYLE
```
Glossy 3D-rendered cartoon style for a children's learning game: soft studio lighting, smooth rounded shapes, bright saturated colors, thick clean edges, cute friendly look, simple readable silhouettes. No text, no letters, no logos, nothing scary.
```

## SHEET (12 items)
```
Image 1536x1024, pure flat white background (#FFFFFF). A grid of 4 columns x 3 rows = 12 items, each centered in its own invisible cell with at least 50 px of empty white margin on every side; items never touch, overlap or cross the image edge. All items have a similar visual size. No ground shadows, no glow beams, no light rays, no particles, no motion trails. Light or white items must have a subtle soft grey-blue shaded edge so they stay visible on the white.
```

## Pack `veg` — Vegetables (art prefix `v_`)
```
Vegetables sheet. The 12 items, left to right, top to bottom: red tomato; green cucumber; brown potato; onion; purple eggplant; red bell pepper; lettuce head; broccoli; open pea pod with peas; orange pumpkin; garlic bulb; white mushroom.
```

## Pack `fruit2` — More fruit (art prefix `q_`)
```
More fruit sheet. The 12 items, left to right, top to bottom: kiwi fruit cut in half; melon slice; bunch of dates; fig; apricot; blue berries; plum; avocado cut in half; peach; two red cherries; green olives on a branch; coconut cut in half.
```

## Pack `school` — School (art prefix `e_`)
```
School sheet. The 12 items, left to right, top to bottom: yellow pencil; closed colorful book; spiral notebook; child scissors; ruler; pink eraser; box of crayons; classroom blackboard on a stand; folded colorful map; glue bottle; school desk with a chair; sheet of paper.
```

## Pack `clothes` — Clothes (art prefix `l_`)
```
Clothes sheet. The 12 items, left to right, top to bottom: blue shirt; trousers; pink dress; sun hat; pair of striped socks; jacket; long scarf; pair of gloves; round glasses; baseball cap; pajamas with stars; yellow raincoat.
```

## Pack `body` — Body parts (cute, friendly, not realistic) (art prefix `y_`)
```
Body parts (cute, friendly, not realistic) sheet. The 12 items, left to right, top to bottom: cartoon eye; cartoon ear; cartoon nose; smiling mouth; waving hand; bare foot; brown hair tuft; shiny white tooth; child head with a happy face; pointing finger; knee; round belly.
```

## Pack `jobs` — People who help us (friendly cartoon adults, standing) (art prefix `z_`)
```
People who help us (friendly cartoon adults, standing) sheet. The 12 items, left to right, top to bottom: doctor with a stethoscope; teacher holding a book; police officer; firefighter with a helmet; farmer with a straw hat; cook with a tall white hat; bus driver; pilot with a cap; nurse; builder with a yellow helmet; singer with a microphone; painter with a brush and palette.
```

## Pack `weather` — Weather and nature (art prefix `t_`)
```
Weather and nature sheet. The 12 items, left to right, top to bottom: rain cloud with raindrops; snow pile with snowflakes; swirling wind with leaves; cloud with a lightning bolt; golden lightning bolt; open umbrella; big snowflake; red flower; orange autumn leaves; very hot sun with a thermometer; cold thermometer with ice; green mountain.
```

## Pack `food` — Food and drinks (art prefix `o_`)
```
Food and drinks sheet. The 12 items, left to right, top to bottom: loaf of bread; cheese wedge; boiled egg; milk bottle; bowl of rice; cooked chicken leg; glass of orange juice with a straw; glass of water; cookie; honey jar with a dipper; bowl of soup; pizza slice.
```

## Pack `music` — Music (art prefix `m_`)
```
Music sheet. The 12 items, left to right, top to bottom: drum with sticks; guitar; small piano; violin with a bow; reed flute (nay); trumpet; tambourine (daff); oud (Arabic lute); microphone; headphones; two music notes; golden bell.
```

## Pack `insects` — Small creatures and birds (art prefix `i_`)
```
Small creatures and birds sheet. The 12 items, left to right, top to bottom: friendly ant; fly; cute spider; green caterpillar; eagle; peacock with open tail; pink flamingo; white swan; ostrich; small sparrow; cute bat; snail.
```

## Pack `family` — Family (friendly cartoon people, standing, different ages) (art prefix `a_`)
```
Family (friendly cartoon people, standing, different ages) sheet. The 12 items, left to right, top to bottom: mother; father; grandmother; grandfather; baby; older brother; older sister; boy; girl; two friends holding hands; family of four together; uncle.
```

## Panoramas and floors for NEW worlds (optional, one world = panorama + floor + decor sheet + pads sheet)

The same recipe as the 12 worlds already built (see docs/LEARNING_WORLD_HANDOVER.md). Ideas for worlds 13+: farm night, mountain camp,
playground, supermarket, kitchen, bedroom, school, hospital, airport, zoo, mosque courtyard (calm, no people), Ramadan street with lanterns.
