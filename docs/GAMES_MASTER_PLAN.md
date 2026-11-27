# Games Master Plan — Rehlaty (branch ai/moss-work)

Written 2026-11-27 by Muse, from the full fleet audit of the same day
(`full_audit/racing_action.md`, `full_audit/runners_build.md`,
`full_audit/puzzle_girls_learn.md` in the audit workspace; fleet numbers from
`docs/FLEET_PERF_AUDIT.md`). This is the document the upgrade program executes
against. Owner review flow is unchanged: work lands on `ai/moss-work` in small
commits; the owner diffs against `feature/rehlaty`, tests, and decides merge
or rollback.

**Scope.** 62 games are ours to upgrade: 10 racing, 16 action, 13 runners,
12 build, 9 puzzle, 2 girls (the girls hub `girls_world` plus its five sister
folders from the same kit — little_princess_dress, little_salon, baby_and_pet,
cupcake_shop, butterfly_garden — follow the girls_world row). The 11 learn_*
games are **externally owned** (owner + Claude Code, voices in 5 languages);
they appear only in the coordination appendix — this plan never schedules work
on them.

**The template.** Sunset Highway is the approved proof of the method: full
audit → distinct identity → juice and a living world → event-driven voice
encouragement → dynamic music → performance pass → full playtest from the
first level to the last. Every game below goes through the same pipeline
(checklist in §6). Sunset also produced the fleet's hardest performance
lesson, now codified as a rule: its slowness was never the GPU — the renderer
rebuilt ~258 procedural traffic cars from scratch **every frame**. That bug
class is banned fleet-wide (§2).

---

## 1. Executive summary — what the audit found across the fleet

1. **The fleet weighs 441 MB built; the weight is concentrated.** Audio is
   280 MB of it — and 237 MB of that is the single `learn_voice` pack
   (9,479 lesson clips; owner's area, owner's decision, §7). Images are
   116 MB (39 MB is the drawing app's `art` folder). JavaScript is 35.5 MB,
   of which ~32 MB is 47 private copies of the same three.js engine.
   Excluding the two owner-decision items, our 62 games account for
   ≈165 MB — the part this plan can and will shrink.
2. **Clones are sold as different games.** moto_race, dune_titans and
   rain_circuit share a byte-identical track and a sim differing in 32 lines;
   squad_shooter and archer_bridge are one package with two skins;
   pumpkin_pie and space_store share one sim skeleton, save format and UI;
   alien_sky and rhino_summit are one chassis with and without a jetpack.
3. **Levels are stat changes, not places.** One maze ×6 (ice_dragon),
   "same looks, bigger numbers" chapters (hero_tower, in its own comment),
   one arena ×6 named levels (golden_tail), 36 formula-generated "levels"
   (sweet_tray), hazard-slider cups (barrel_knights). Very few games pass
   the owner's test: *every level a different world*.
4. **Content is dead or unreachable.** A progression cap makes rounds 4–6 of
   both course_race games unplayable — half of two games. rhythm ships 7
   panoramas (including a Cairo finale) that no code loads; golden_tail
   ships 6 more; pumpkin_pie 4; samurai ships ~5 MB of panoramas while its
   background is a flat colour.
5. **Art is mismatched to its own names.** coastal_drive labels Matrouh
   Beach "neon" and Nubian Aswan "canyon"; air_race flies glacier palettes
   over Cairo landmarks and cycles panoramas unmatched to courses;
   hamster_warrior's "Black Desert" is a green forest. Wrong pictures of
   real places teach wrong geography.
6. **Pressure mechanics contradict the house rule.** Stars are for
   completion only — yet the fleet has fail-clocks (summit_rush 60 s,
   card_battle 150 s, barrel_knights 60 s), a countdown with a lose state
   (marble_dozer), move-limit fails (frost_coil), timers + lives (deep_sea),
   lives (chomp_maze), hearts and killers (hungry_frog), fail states and
   par/combo-graded stars (pin_puzzle, sweet_tray, gum_ball, gem_quarry),
   and two games that award a fixed ⭐⭐⭐ regardless of play (pumpkin_pie,
   space_store). §4 Batch C removes or converts every one.
7. **Voice is wired everywhere and present almost nowhere.** VoiceCoach is
   integrated in all 51 fun games it serves, but 14 built games ship no
   `voice/` folder at all (device TTS or silence), and several are nearly
   empty (nutmeg_rush 1/32 real lines, ocean_defense 6/34, sky_capy 2/36,
   pearl_divers 6/16). 294 of 1,808 lines are installed; the remaining-lines
   file is being prepared for the owner separately, and installation needs
   zero code changes (§5, standing track).
8. **Egyptian identity is the biggest unused asset.** Only a handful of
   games anchor to real Egypt (sunset_highway is the benchmark: six
   place-true stages). Meanwhile the shared art pool in `assets/games/art/`
   already holds a landmark set (pyramids ×3, oasis, desert pano, camel,
   mosque, lantern) plus drawn Egyptian foods — and grep proves **no puzzle
   or girls game references any of it**. temple_army is a sandstone temple
   that never says "Karnak"; ocean_defense's reefs never say "Red Sea";
   dino_grow ignores that Egypt's own Spinosaurus was found in Bahariya.
9. **The bones are often excellent.** carnival_race's kind ticket economy,
   zombie_rooftop's ~40-minute campaign, hero_tower's 72 floors,
   mars_farm's 2–4-hour campaign, fashion_queen's 6-world progression,
   tomb_puzzle's Pharaonic mechanics, the choose-3-powers systems — the
   fleet mostly needs content volume, identity and kindness fixes, not
   new mechanics.
10. **Small breaks children can feel.** Girls never receive feminine win
    lines in two games (a `&& false` and a both-branches-`'m'` ternary);
    sky_jumper renders power-ups as 🚀/🚁 emoji because its art files were
    never loaded; pearl_divers stores the *slowest* win as "best";
    creator_tycoon's career is not persisted and two of its backgrounds
    don't exist; honey_farm loses all progress on quit and prices in $;
    chomp_maze ships with no music file and no hero/poster art.

## 2. Performance budget — hard numbers, every game

Speed and lightness come first: ~60 games live inside one app, so the budget
is a gate, not a guideline. A game that misses the budget is not "done".

| Rule | Number |
|---|---|
| game.js after shared-engine conversion | **≤ 200 KB** per game (pilot measured 125–148 KB) |
| game.js for canvas/DOM games | **≤ 200 KB** (already true fleet-wide) |
| Shared engine | one file, `three_shared.js` = 685 KB, loaded once, cached |
| Built folder size | **≤ 5 MB hard cap** per game; **≤ 3 MB** target for most games |
| Draw calls (3D games, gameplay) | **≤ 200 hard ceiling**; **≤ 150 target** for new/converted work (Sunset measures 192–206 today and is the tightening reference) |
| Triangles (3D games, gameplay) | **≤ 150k hard ceiling**; typical ≤ 75k (Sunset measures 36–75k) |
| Per-frame work | **ZERO** geometry/mesh rebuilds and zero allocations in hot loops — the Sunset rule. Visible-window building only; pooled particles; cached HUD writes (update DOM only when the displayed value changes, ~10 Hz) |
| Frame rate | 60 fps target on integrated-GPU laptops/tablets; Sunset-style auto-degrade is mandatory for 3D games (pixel-ratio steps, then shed decorative systems; never step back up mid-session) |
| Textures | panoramas ≤ 2048 px on the long edge; **no shipped-but-unreferenced asset survives review** (dead art is removed or wired, never carried) |
| Renderer | `powerPreference: 'high-performance'`; no unused depth/stencil features; no shadow maps unless a game justifies them in its audit card |
| Boot test | every game must pass the **real click-flow test** — actual menu buttons clicked, audio unlocked by the gesture — with zero page errors (the ALIVE freeze lesson: programmatic starts hide audio-unlock bugs) |

### Shared-engine rollout schedule

Mechanism validated and piloted (`docs/SHARED_THREE_ROLLOUT.md`): an esbuild
onResolve plugin routes `three` to `cozy_kit/three_shim.js`
(`window.__THREE__`); each game's index.html loads `../three_shared.js`
before game.js. Pilot results: sunset_highway 830→148 KB, deep_sea
827→143 KB, gum_ball 616→125 KB, all tests green, all boot-smoke clean.
Fleet projection: 32.7 MB → ~6.3 MB of JS, **≈26 MB saved (~80%)**.

Schedule (Batch A, §4):
1. **Flutter side first** (owner reviews via diff): add
   `- assets/games/three_shared.js` to pubspec assets; in
   `web_game_view_web.dart` `_whenLoaded`, load the shared script (id
   `rehlaty-three-js`, guarded by `globalContext.has('__THREE__')`) before
   injecting the game bundle; then `flutter analyze` + `flutter test`.
   The mobile webview path needs no Dart change.
2. **Convert the remaining 32 three-using packages (44 built folders)** in
   section batches — racing+action, then runners+build, then puzzle/girls —
   per package: swap build to `build_game.mjs`, `npm test`, `npm run build`,
   add the script tag, Chromium boot-smoke every built folder.
   Multi-output packages: course_race (2 folders), lane_shooter (2).
3. **learn_games is excluded from our conversion runs** — it is the owner's
   area; the rollout doc leaves him the identical recipe (his
   `learn_letters` at 1.7 MB game.js is where it pays most). Coordination
   only (Appendix A).
4. Remove the dead `three` dependency from the 14 canvas packages that
   declare but never import it (fleet audit list) — no size change today;
   it keeps future audits truthful and prevents accidental bundling.

## 3. Per-game table — all 62 games in scope

Name changes apply the owner's rule (Arabic + English pair, distinctive,
Egyptian where the game allows). "Reuse" lists art that already exists in the
repo and must be used **before** any new art is generated. Level targets state
count · how levels differ · target full playtime. Batch letters refer to §4.

### Racing (10)

| Game | Name (current → confirmed/new) | Hero | Egyptian anchor | Reuse existing art | Level target | Signature upgrade | Batch |
|---|---|---|---|---|---|---|---|
| moto_race | سباق الموتوسيكل / Motorbike Race → **keep** (heritage GP) | Kid rider #7 vs Salim, Laila, Omar, Mariam, Youssef | Alexandria → Giza → Luxor → Grand Museum tour | pano1–6 incl. verified Giza pyramids+Sphinx pano (already in use) | 6 rounds × 2 laps + 3-lap cup rematches · own geometry for Giza & Grand Museum rounds · ≈20 min | Championship table + unlockable liveries | F |
| dune_titans | عربيات الصحرا / Desert Trucks → **رالي الواحات / Oasis Rally** | Rally truck «التيتان» + falcon co-pilot | Siwa → Bahariya → White Desert → Black Desert → Farafra | Existing desert/oasis panos for the early legs | Own dune track (no coastal circuit, no grass) · point-to-point legs between oases · ≈25–30 min | Real separation from the template: dune geometry + rally-diary map | D |
| rain_circuit | سباق المطر / Rain Race → **عاصفة إسكندرية / Alexandria Storm GP** | New kid-racer cast (shared RIDERS retired) | Alexandria Corniche in a winter storm; Qaitbey Citadel finale | moto_race's Alexandria pano as art-direction base | Own seafront point-to-point track · weather escalates per round · ≈25 min | Wet-grip physics (lower GRIP) — the storm is felt, not just seen | D |
| carnival_race | عربيات الملاهي / Funfair Cars → **ملاهي المولد / Moulid Funfair** | Mishmish the cat + 5 animal racers | Nile funfair → Alexandria → Eid Night; + Cairo moulid, Luxor fair, Matrouh beach fair | 6 funfair panos + Eid pano (in use) | 6 tracks × 2 laps on the existing ticket economy · ≈60–75 min | 3 new tracks in the existing data format + fair-tour map | F |
| sunset_highway | سباق الغروب / Sunset Race → **keep** (the benchmark) | Child's racer vs rival Barq (برق) + dashboard mascot | Wadi El Rayan, Sokhna, Alamein night, White Desert, Port Said, Gouna (all in use) | All six place-true panos (in use) | 6 stages + Season 2 return journey (same places, new time of day & traffic) · ≈50 min | Sticker-album map of Egypt; nitro realism pass (owner's note, in progress) | F |
| coastal_drive | عربيات الشاطئ / Beach Cars → **keep name; fix the map** | Sports car + garage cast | Siwa, Dahab, Nubian Aswan (Nile world), Sinai, Matrouh-Ageeba, New Alamein finale | pano5 (Ageeba beach) relabelled to Matrouh; sunset harbour art direction for Aswan | 12 levels completing the coast · ≈30 min | Correct place↔art mapping (Batch B) + Egyptian liveries (taxi, microbus) | B, F |
| air_race | سباق الطيارات / Plane Race → **جولة النيل الجوية / Nile Air Tour** | Captain Farida + little red plane | Aswan → Alexandria over the Nile, one course per landmark | moto_race Giza pano + harbour art as course panos | 10 courses · pano matched to course (Batch B fix) · postcard per course · ≈20 min | Fly *through* landmark rings; golden-ring photo moments | B, F |
| sky_ace | طيار السحاب / Sky Ace → **طيار النيل / Nile Sky Ace** | Pilot Pop | Flight up the Nile: Delta → Saqqara → Giza → Luxor; tour 2 = Red Sea coast | moto_race Giza pano as horizon strip | 8 stages + second tour · 2 new boss kinds (sphinx-blimp) · ≈35 min | Telegraphed-shooter design kept; dead `three` dep removed (Batch A) | A, E |
| splash_race | سباق السباحة / Swim Race → **سباحة في مياه مصر / Egypt Waters Tour** | Swimmer with pharaoh-striped cap | Wadi El Rayan, Ras Sudr, Qarun Lake, Ayun Musa, Aswan + Siwa's Cleopatra spring, Matrouh, Magic Lake, Nile | sunset stage-1 pano art for Rayan | 10 rounds · swim passport stamped per water · ≈25 min | Final stops being "1st or nothing" — every finisher is stamped (Batch C) | C, E |
| summit_rush | سباق التلج / Snow Race → **قمة كاترين / Catherine Summit** | Child climber in the red jacket | Mount Catherine, Sinai; monastery at the summit | None fits — new backdrop art justified (art-batch gap list) | 3 peaks (Catherine, Abbas, Safsafa) + base-camp hub + sled-home bonuses · ≈20 min | 60 s fail-clock → story goal "reach the monastery before the lanterns light" (Batch C) | C, E |

### Action (16)

| Game | Name (current → confirmed/new) | Hero | Egyptian anchor | Reuse existing art | Level target | Signature upgrade | Batch |
|---|---|---|---|---|---|---|---|
| samurai | سيف الساموراي / Samurai Action → **حارس المعبد / Guardian of the Temple** | Young temple guardian with a khopesh | Pharaonic courtyard → hypostyle hall → roof at dawn | temple_army sandstone palette; pano slots already exist in sibling pattern | 9 stages across 3 temples · sun-disc shield unlocked mid-campaign · ≈30 min | Full reskin on the proven wave/boss sim; **delete the ~5 MB of unused Japanese panos** (Batch B) | B, E |
| squad_shooter | فرقة الجنود / Squad Shooter → **فرقة الإنقاذ / Rescue Squad** | Nile lifeboat rescue crew | The Nile: Aswan → Luxor → Cairo reaches | sunset river art as backdrop reference | 16 levels · crew album of rescued friends · ≈40 min | De-militarised re-theme on the same sim (gates = river buoys, no guns); add the missing music track | D, E |
| archer_bridge | رماة الجسر / Archer Bridge → **رماة جسر قصر النيل / Qasr El Nil Archers** | Archer squad | Qasr El Nil bridge → Stanley Bridge (Alexandria) → Aswan dam bridge | Fleet pano style for skylines (new backdrops = art gap) | 3 bridges × levels + target-practice bonus gates · ≈30 min | The bridge becomes a real place (lion statues, Nile, Cairo towers); add music | D, E |
| zombie_rooftop | البقاء على قيد الحياة / Zombie Rooftop Shooter → **سطوح القاهرة / Cairo Rooftops** | Rooftop kid with light & firework tools | Cairo rooftops → Islamic Cairo minarets → Alexandria sea roofs | carnival_race city-pano style for the skyline ring | 8 roofs + second district · ≈60 min incl. endless | Invaders become night-ghouls (عفاريت الليل) scared of light; launchers → light/fireworks only | E |
| ice_dragon | تنين الجليد / Ice Dragon → **تنين الواحة / Oasis Dragon** | Small hero + the great water-serpent | Fayoum oasis → Nile bend → Red Sea lagoon | dune_titans oasis pano (waterfalls + palms) as the missing backdrop | 3 maze layouts (not 1) × serpent variants · ≈30 min | "Taming" endings — feed and befriend the dragon; add the missing music track | E, F |
| hero_tower | برج الأبطال / Hero Tower → **برج القلعة / Citadel Tower** | Chibi climber-knight | Cairo Citadel → Siwa sand tower → Philae island tower; + Nubian fortress, Pharos chapters | temple_army sandy palette; existing sky_* slots per theme | 72 floors + 2 new-look chapters · visible tower map · ≈60 min | The climb gets a map (floors light up); chapters 4–6 stop being numbers-only | E, F |
| hamster_warrior | هامي الشجاع / Hammy the Brave → **keep** | Hammy the hamster warrior | Moqattam Hills, Black Desert, Eastern Desert (names already) + Siwa, Fayoum | Chapter sky art (in use) | 5 chapters × 4 levels = 20 · ≈25 min | Paths finally *look like* their names (Black Desert = black stone, not forest); add music | B, F |
| ocean_defense | دفاع القلعة البحرية / Ocean Defense → **قلعة مرجان البحر الأحمر / Red Sea Reef Fort** | Marjan (مرجان) the clownfish | Ras Mohammed, Giftun Island, Dahab Blue Hole shallows + marine-park map | bg_reef1–7 (already Red-Sea-looking, in use) | 10 reefs · reef-guide album with one spoken fact per fish · ≈40 min | Naming + framing fix (no art rebuild); octopus becomes a friend-rival | E |
| nutmeg_rush | سكة الكورة / Nutmeg Rush → **كورة الحارة / Hara Football** | Kooro (red/white #7) | Hara street pitch → school → local club → Cairo International Stadium | Existing stadium art direction | 12 levels across 4 venues · trick book + cup brackets vs named kid teams · ≈30 min | Par times stop grading — stars from tricks/completion (Batch C); new tricks unlock per venue | C, E |
| viking_sling | مقلاع الفايكنج / Viking Slingshot → **keep + «أولاف في مصر» tour pack** | Olaf the viking kid | Home fjord forts, then the Nile bank (temple-block forts) | temple_army palette for the Egypt pack | 10 forts + 6 Egypt forts + fort-of-the-day · ≈35 min | One game teaches "far away" vs "home"; 2 new projectile types per region | F |
| card_battle | معركة الكروت النيون / Neon Card Battle → **كروت الأبطال / Heroes' Cards** | Robot team + Commander Bolt | A Nile landmark tour — the UFO is sightseeing Egypt | moto_race Giza pano as the Giza-duel arena backdrop | 8-duel campaign (the game has none today) · landmark card album · ≈30 min | Campaign structure + themed Overlord decks per place; 150 s match clock removed (Batch C) | C, E |
| dino_grow | ديناصور صغير يكبر / Dino Grow → **سبينو الصغير / Little Spino** | Baby Spinosaurus | Bahariya Oasis, Wadi El Hitan, Black Desert + Siwa, Dakhla, Red Sea hills | hamster_warrior Black Desert art direction | 6 fossil sites · evolution album with real Spinosaurus facts (voiced) · ≈25 min | Egypt's own dinosaur — a flagship identity no competitor owns | E |
| ice_rink | معركة حلبة الجليد / Ice Rink Brawl → **حلبة شرم / Sharm Ice Rink** | Animal hero trio + seal goalie (unlock) | Sharm's winter festival (Soho Square's real rink) → Alexandria Corniche rink | bg_festival (in use) | 12 levels + second rink · festival stalls trade stars for scarves/hats · ≈30 min | "Brawl" stats presentation softened to bumper-play language | E, F |
| barrel_knights | فرسان البرميل / Barrel Knights → **فرسان القلعة / Citadel Knights** | Mamluk page boys | Cairo Citadel festival | hero_tower castle sky slot for backdrops | 8 cups re-placed + 4 lantern-lit night cups + parade mode · ≈25 min | 60 s clock → "first to 2, take your time" outside cup finals (Batch C); barrel becomes a giant water jar (زير) | C, E |
| gummy_squad | فرقة الدببة الجيلي / Gummy Squad → **فرقة الحلويات / The Sweet Shop Squad** | Kunafa, Basbousa & Qatayef guardians | An Egyptian sweet shop at Eid + the Ramadan tent | carnival_race Eid Night pano as shop-street backdrop | 10 stages · rotating bosses (King Kunafa, Queen Basbousa, Date Giant) · recipe cards · ≈30 min | One boss ×6 becomes a boss roster; syrup-glaze rain | E |
| temple_army | جيش المعبد / Temple Army → **حرّاس الكرنك / Guardians of Karnak** | Temple guardians with scarab shields | Karnak, Philae, Edfu, Abu Simbel, Luxor, Dendera | Its own sandstone palette — the bones are already Egyptian | 6 temples + a 2-floor Karnak with sacred lake · procession mode · ≈35 min | Naming + hieroglyph art pass, **zero sim changes** — the cheapest flagship in the fleet | E |

### Runners (13)

| Game | Name (current → confirmed/new) | Hero | Egyptian anchor | Reuse existing art | Level target | Signature upgrade | Batch |
|---|---|---|---|---|---|---|---|
| jungle_adventure | مغامرة الأدغال / Jungle Adventure → **مغامرة الفيوم / Fayoum Adventure** | Adam & Nour, young archaeologists | Wadi El Rayan waterfalls, Qasr Qarun temple, Wadi El Hitan fossils; island 2 = Siwa | pano1–6 temple-gate art (in use — the Egyptian gate finally makes sense) | 12 **real** maps (levels 4–6 stop being `remix()` copies) · relic album · ≈20 min | Wall-kick shafts + relic hunt; Nour gets painted sprites like Adam | F |
| cloud_dash | ركضة السحاب / Cloud Dash → **ركضة فوق مصر / Dash Over Egypt** | The cloud kid | 10 regions from the clouds: Delta → Cairo → Luxor → Aswan → Red Sea → Alexandria → Siwa → White Desert → Sinai → Matrouh | Pano-ring pattern from sibling games; one painted pano per region (art gap) | 10 authored set-pieces (temple gates to slide under, felucca masts) + endless expedition · ≈25 min | Coins finally buy capes/hats in a cosmetic shop | E, F |
| alien_sky | زومي في الفضا / Zoomi in Space → **زومي فوق الأهرامات / Zoomi over the Pyramids** | Zoomi + his jetpack | Night races over Giza, Cairo Tower, Alexandria harbour lights | Fleet Egyptian pano style replaces candy planets | **Unlock fix restores rounds 4–6 (Batch B)** + rounds 7–12 Grand Tour · ≈15 min | Warp tubes become pharaoh portals between landmarks | B, E |
| rhino_summit | كركوز والغيوم / Karkoz in the Clouds → **كركوز يطلع الجبل / Karkoz Climbs Saint Catherine** | Karkoz the rhino | Galala → Red Sea mountains → Mount Saint Catherine | Own pano set, re-themed per peak | Unlock fix (Batch B) + own 6-round ladder + summit journal · ≈15 min | Head-charge that smashes gates — the mechanic alien_sky doesn't have (Batch D) | B, D |
| fizz_runner | فيزو الشاطر / Fizzo the Brave → **فيزو في مصر / Fizzo in Egypt** | Fizz Man, the soda hero | وسط البلد Cairo → Alexandria Corniche → Luxor → Aswan → Port Said → Gouna | The existing tram pano *is* Alexandria — assign it there | 7 environments + one chained Grand Tour run · outfit garage · ≈20 min | One-hit death → stumble + hearts like its neighbours (Batch C); Fizz delivers drinks to thirsty kids | C, E |
| ball_scoop | هامي الشجاع / "Hammy" (name collides with hamster_warrior) → **جولة الكورنيش / Corniche Scoop Tour** | Scoop-truck driver (renamed — Hammy belongs to the hamster) | Alexandria → Alamein → Matrouh → North Coast → Gouna → Dahab | pano3 Alexandria/Qaitbay + pano2 Old-Cairo bazaar (in use) | 30 levels re-themed · clean-the-beach bonus per coast · sand-buggy unlock · ≈35 min | Fix pano↔theme misalignment (Batch B); ship the missing `voice/` folder (Track G) | B, E |
| sky_capy | سكاي كابي / Sky Capy → **كابي فوق النيل / Capy over the Nile** | Capy + rescued migrant birds (hoopoe, bee-eater, kingfisher) | The Nile flyway: Lake Nasser → Aswan → Luxor → Cairo → Delta → Alexandria | Art-batch sky_capy set (§5, App. B) lands here | 3 stages → 8 river stops · second boss · all 20 badges awardable · ≈20 min | The endless stat-loop becomes a journey with an ending; loop stays as post-game "migration season" | F |
| golden_tail | مغامرة الذيل الذهبي / Golden Tail Chase → **الذيل الذهبي في الواحة / Golden Tail Oasis** | Fennec kit + the plush cast | Siwa: palm canopy, spring pools, salt-lake shore, Shali fortress ruins | **Wire the 6 shipped-but-unused panos** or replace with Siwa art (Batch B) | 6 genuinely different arenas (today: 1) · tournament ladder · ≈20 min | Level names finally describe their arenas; tail-trail cosmetic shop | B, F |
| rhythm | البقاء على الإيقاع / Rhythm Survival → **إيقاع القاهرة / Cairo Rhythm** | Plush dino + the band | Mohamed Ali Street → Cairo venues → Cairo Tower & Giza finale | **pano1–7 already exist and are loaded by nothing — wire them (Batch B, zero new art)** | 7 tracks + 5 Egyptian-instrument tracks (oud, tabla, rababa, mizmar) + encore mode · ≈15 min | Each track's lead instrument is Egyptian — it sounds like Cairo, not just looks it | B, F |
| fox_family | أم الثعلب ومغامرات العيور (sic) / Fox Family Rescue → **أم الفنك / Fennec Family Rescue** | Mother fennec + her cub parade | Delta farm roads & irrigation canals → Nile-bank reeds → Fayoum desert-edge den | None exists — small art gap | 6 → 12 levels (two Egyptian worlds between the seasons) · berry picnic album · ≈25 min | The cub parade is the signature; logs become felucca planks and palm trunks | E, F |
| hop_world | عالم القفز / Hop World → **قفزات النيل / Nile Hops** | Fox kid explorer | Delta hills → Saqqara tomb caves → Giza plateau (Sphinx gate) → Alexandria shore; finale = Siwa | Code-drawn pyramids already render in its desert world — claim them | 8 worlds with one hand-designed set-piece each + secret coin rooms + world 9 · ≈25 min | `?` blocks become hieroglyph blocks; replace the IP-adjacent hills tune (Batch B) | B, E |
| trick_or_treat | حلاوة ولا مقلب / Trick or Treat → **وحوي يا وحوي / Wahawy Night Run** | Lantern-carrying kids' parade | The hara → Khan el-Khalili souk → the corniche at dawn | Street/porch structure kept; hara art from the art batch (§5, App. B) | 7 streets re-themed + 3 new · one lantern collected per street · ≈25 min | An imported holiday becomes Egypt's beloved Ramadan-night tradition; fix the girls' win-line bug (Batch B) | B, E |
| sky_jumper | النطاط / Sky Jumper → **نطاط برج القاهرة / Cairo Tower Jumper** | The doodle creature (card art fixed to match) | Cairo Tower's lattice at night; Nile below, Giza on the horizon | Load the art its code already looks for (platform/jetpack/propeller) — no more 🚀/🚁 emoji | Endless climb + height zones every 500 m with balcony checkpoints · heights passport · open-ended | The app's only vertical game gets milestones worth climbing for | B, F |

### Build (12)

| Game | Name (current → confirmed/new) | Hero | Egyptian anchor | Reuse existing art | Level target | Signature upgrade | Batch |
|---|---|---|---|---|---|---|---|
| happy_farm | مزرعتي السعيدة / Happy Farm → **مزرعة الدلتا / Delta Farm** | The animals are the cast (driver unseen) | A Nile Delta farm with an irrigation canal and a working ساقية | Quaternius animal models (in use) | 8 farms × 2 seasons (flood & planting) · market-day finale per farm · ≈90 min | Cotton, sugarcane & برسيم join the crops; buffalo join the animals; `bumps≤2` star gate → completion stars (Batch C) | C, E |
| pumpkin_pie | مخبز اليقطين / Pumpkin Pie Maker → **فرن الحارة / Hara Bakery** | Chef Adam / Chef Nour | A فرن بلدي in an Old Cairo lane | ball_scoop pano2's Old-Cairo art style; **remove/replace the 4 unused European panos (0.66 MB)** | Pad chain + day structure (morning prep / evening rush, never a fail) + Khan el-Khalili stall · recipe book · ≈45 min | Fixed ⭐⭐⭐ → stars earned per recipe (Batch C); kahk, basbousa & kunafa join the pies | B, E |
| space_store | متجر الفضاء الذكي / Space Store Manager → **متجر النيل الفضائي / Nile Space Store** | Kid astronaut | Orbit above Egypt — the window shows the Nile Delta glowing at night | Quaternius robot (in use) | Station wings (garden dome, toy deck) + a Moon-base second chapter · ≈40 min | Real differentiation from pumpkin_pie's skeleton (Batch D); shoppers stop waiting forever; earned stars | D, E |
| honey_farm | مزرعة العسل / Honey Farm → **عسل سيوة / Siwa Honey** | Young beekeeper «نحّال الواحة» | A Siwa oasis apiary under the palms | None exists — art gap (small, 2D) | Persistent apiary + blossom seasons (orange-blossom, clover, sidr) + market day · ≈40 min across sessions | **Progress is saved** (today it evaporates — Batch B); $ symbols → ج.م; honey-variety album | B, E |
| pearl_divers | غوّاصو اللؤلؤ / Pearl Divers → **غواصو البحر الأحمر / Red Sea Pearl Divers** | The young diver + stall-boat crew | Dahab Blue Hole shallows → Hurghada coral gardens → sunken lighthouse reef → Ras Mohammed deep | Tropical lagoon art as base plates | 5 zones (+ a sunken temple garden) · pearl album · gear upgrades that show · ≈20 min | Fix the slowest-win "best" bug and the hard-coded `x3` label (Batch B); voice `charge`-on-every-sale repetition capped | B, E |
| winter_camp | معسكر الشتاء / Winter Camp → **مخيم سانت كاترين / Saint Catherine Camp** | Camper + Bedouin guide helpers | Foot of Mount Catherine; the builds become a Bedouin camp above the monastery valley | None (100% procedural today) | 6 builds + a summit camp with an observatory · camp album (photo per build) · ≈45 min | Egypt's real snow; sled finale carries supplies to the summit at dawn; fix the storm audio-bed bug | E, F |
| castaway_raft | طوف الناجي / Castaway Raft → **فلوكة النيل / Nile Felucca** | Young felucca sailor | Aswan → Alexandria: Kitchener's Island, Elephantine, Luxor, Qena, Sohag, Minya, Cairo, the Delta | sunset river art direction as reference | 12 stops with a landmark at each · Nile fish album · raft decorations · ≈30 min | The shark becomes a cheeky Nile crocodile; fix `_girl()` (`&& false`) and the dead hint logic (Batch B) | B, E |
| creator_tycoon | مبدع الذكاء / AI Creator → **استوديو النيل / Nile Studio** | Young Cairo creator | An office over the Nile & Cairo Tower; client orders are Egyptian subjects | rhythm's Cairo pano style; create the 2 missing office backgrounds | 6 ranks **persisted** + animation & music content types + landmark orders · ≈30 min across sessions | The career stops evaporating between sessions (Batch B); a studio-decoration shop | B, E |
| hot_spring | ينابيع القرية / Hot Spring Village → **عين كليوباترا / Cleopatra's Spring** | Caretaker of Cleopatra's Bath | Siwa Oasis; second site = Bahariya's Bir Sigam | Art-batch hot_spring set (§5, App. B) lands here | 2 sites · branching upgrade order (not one chain) · lantern festival every 14 guests · ≈30 min | Snow monkeys → oasis guests (fennec, ibex, travellers); ginger → Siwa herbs & dates | E |
| mars_farm | مزرعة المريخ / Mars Farm Colony → **مستعمرة النيل / Nile Colony** | An Egyptian crew — colonists get names & faces (Adam, Nour…) | Mars, framed Egyptian: a station named for the Nile; Earth-view finale | Procedural iso art (in use) | 12 levels + per-level stars (none today) + research tree + Olympus chapter · ≈3 h | Colonists become people with greetings, not counters | F |
| gem_quarry | محجر الجواهر / Gemlode Quarry → **محجر أسوان / Aswan Quarry** | The quarry crew | Aswan's granite quarry & the Unfinished Obelisk; second quarry = Tura limestone | None exists — art gap | 20 levels (2 quarries) · artefact museum (one find per level) · ≈90 min | Trucks become Nile barges; "load the barge" rhythm restores the player's hands; efficiency stars → museum collection (Batch C) | C, E |
| rug_cleaning | تنظيف السجاد / Rug Cleaning → **مغسلة الكليم / Kilim Workshop** | The cleaner + neighbour clients (عم صالح، ست سلمى، ليلى، يوسف) | A rooftop washing workshop in old Cairo; second workshop = Siwa | 13 art webp incl. client portraits (in use) | 24 jobs with client story arcs (second visits, beloved rugs) · ≈60 min | Rugs become hand-woven kilims; a pattern-choice moment at the final rinse — creativity, not pressure | F |

### Puzzle (9)

| Game | Name (current → confirmed/new) | Hero | Egyptian anchor | Reuse existing art | Level target | Signature upgrade | Batch |
|---|---|---|---|---|---|---|---|
| marble_dozer | جرّافة الكرات / Marble Dozer → **المعماري الصغير: جرّافة الألوان / Little Builder: Colour Dozer** | «بُلدوزر بُلبُل» the dozer, with a face and a driver's cap | An Egyptian building site; each district finishes by placing a landmark in a growing mini-Egypt diorama | Shared pool: `d_pyramid`, `desert_pano`, city sets (unused today) | 30 levels in 3 districts (Village, City, Landmarks) + free-build sandbox · ≈45 min | The only game that *builds Egypt piece by piece*; **countdown and timeout-loss deleted** (Batch C) | C, E |
| frost_coil | طريق التنين الجليدي / Frost Coil → **تنين التلج في إسكندرية / The Snow Dragon of Alexandria** | The little ice dragon | Alexandria's Corniche in its famous rare snowfall: Stanley Bridge → Citadel → Bibliotheca | Pool beach/city art with a snow pass | 24 levels · new piece types per district (T-junctions, splitters, melt-tiles as features) · ≈40 min | **Move limit and fail state deleted** — the dragon simply waits (Batch C) | C, E |
| chomp_maze | الأكول / Chomp Maze → **مطاردة الحلويات في خان الخليلي / Sweet Chase in Khan el-Khalili** | Sunny the chomper + 4 bazaar cats (Rosa, Bolt, Sprout, Ember keep their AIs) | The lantern-lit lanes of Khan el-Khalili, day and night | Pool: `d_lantern`, `x_kunafa`, `x_basbousa` (unused today) | 16 levels = 8 real layouts × day/night + grand-souk finale + tea-break endless · ≈35 min | Ghosts become cats racing you to the sweets; **lives → sweet-count** (Batch C); add the missing music file + hero/poster art (Batch B) | B, C, E |
| gum_ball | كرة العلكة العملاقة / Gum Ball Roll → **كرة العلكة في إسكندرية / Gum Ball: The Great Alex Roll** | The gum ball itself | The Alexandria Corniche: Gleem → Stanley → Sidi Gaber → Sporting → Citadel → Lighthouse | Pool: `city_pano`, `c_*` props, beach set (unused today) | 6-stop tour, each stop its own stickable set · biggest-ball garden · ≈20 min | **Stars per completed stop, not per diameter** (Batch C); registry note: it is an action game in the Puzzle section — re-home proposed to the owner via diff | C, E |
| hungry_frog | لعبة الضفدع الجائع / "Hungry Frog Game" → **فرفور في بحيرة البرلس / Farfour of Lake Burullus** | Farfour the frog | Lake Burullus + the Delta lakes (Manzala, Edku, Mariout) + a Nile-bank finale | Pool wetland art (`ground_water`, lilies) | 9 levels · pond album of every creature met · ≈40 min | **Hearts → "splashes"**: caught = splashed back to the last lily pad, size kept, progress never lost (Batch C) | C, E |
| deep_sea | أسماك الأعماق / Deep Sea Fish → **بُوري في البحر الأحمر / Bouri of the Red Sea** | Bouri the grey mullet | Hurghada → Ras Mohammed → the great wreck → Dolphin House → Blue Hole → Elphinstone + 2 more stops | Its own 6 bg art pieces as base plates + the owner's saved WebGL Aquarium reference (swarms, god-rays, coral) | 8 stops on a Red Sea map · reef album · ≈30 min | **Timers and lives deleted** — a lunge bumps Bouri and costs a bite of growth, never progress (Batch C). Already converted in the engine pilot | C, E |
| pin_puzzle | اسحب الدبوس / Pull the Pin → **دبابيس الحلواني / The Sweet-Maker's Pins** | «عم سكّر» the sweet-maker | A حلواني glass counter in El-Hussein; chapters: Everyday Sweets, Ramadan Nights, Mawled Festival | Its own cosy wooden-toy art direction | 24 levels · one new device per chapter (splitter funnel, rotating tray, two-jar) · ≈45 min | Par becomes "عم سكّر is impressed" sparkle, not a star condition; fail state softened by undo-first design (Batch C); the one missing clip `ar/charge_1` requested in the next voice batch | C, E |
| tomb_puzzle | لغز المقبرة / Tomb Puzzle → **سليم وكنوز الفراعنة / Salim and the Pharaohs' Treasure** | Salim the little explorer | Saqqara → Valley of the Kings → Abu Simbel (+ 2 more tombs) | Pool: `d_pyramid2`, `desert_pano` for exteriors and the between-tombs map | 5 tombs, 20 rooms · museum collection book · free-explore in finished tombs · ≈60 min | The heritage flagship, named and placed; par → sparkle only (Batch C); 628 KB game.js shrinks in Batch A | A, C, E |
| sweet_tray | طبق الحلويات / Sweet Tray → **صينية الكنافة / The Kunafa Tray** | «صبيّ الحلواني» the tray-carrier kid | A حلواني → Ramadan nights (qatayef) → a Mawled stall → a family picnic | Pool: `x_kunafa`, `x_basbousa`, `x_om_ali` and the Egyptian food set (unused today) | 4 chapters × 9 trays · the *board itself* changes per chapter (round tray, Ramadan table, stall shelf, picnic cloth) · ≈60 min | The 36 formula levels become 4 real chapters; **full tray = the carrier swaps in a bigger tray, never a loss** (Batch C) | C, E |

### Girls (2)

| Game | Name (current → confirmed/new) | Hero | Egyptian anchor | Reuse existing art | Level target | Signature upgrade | Batch |
|---|---|---|---|---|---|---|---|
| fashion_queen | ملكة الموضة / Fashion Queen → **ليلى، ملكة موضة مصر / Layla, Fashion Queen of Egypt** | Layla | A 6-world Egyptian style tour: Alexandria Corniche, Khan el-Khalili ateliers, Luxor (pharaonic gold & linen), Siwa weavers, Red Sea, Cairo Fashion Week | Pool motifs: `d_lantern`, `x_mosque` silhouettes for backdrops | 30 missions (existing skeleton — the app's best) + style passport + Ramadan & Eid collections · hours | Embroidered galabeya, pharaonic collar, Siwi shawl join the closet; runway numeric score → "the audience loved…" reactions (Batch C); full voice set (Track G) | C, E |
| girls_world | عالم الأميرة / Princess World → **عالم نور / Nour's World** (hub + 5 sister folders follow this row) | Nour and the doll cast | The party integrator sails on a **Nile felucca** at sunset; 2 of 6 dress places become Egyptian (Nile garden, Alexandria beach) | Pool: `b_lighthouse`, `b_boat`, `d_palm` motifs + a Nile pano; the owner's 43 webp get a compression pass | 6 doors, each deepened with a second layer (silly combos, garden seasons, picture orders, growing felucca guest list) · ≈30 min + free play | The BAG meta-loop is the fleet's most original toddler design — deepen it; warm spoken lines for pre-readers are the highest-value voice spend in the app (Track G) | E, G |

## 4. Rollout batches — ordered by impact per effort

Each batch is a coherent, parallelisable work unit. Within a batch, games are
independent and can be worked concurrently; every game still passes the full
checklist (§6) before its batch is called done. Dead content and unused-art
wiring come first because they are nearly free.

### Batch A — Foundation: one engine, honest manifests
- Land the Flutter side of the shared engine (pubspec entry + web chained
  loader in `web_game_view_web.dart`) for the owner's diff review, then
  `flutter analyze` + `flutter test`.
- Convert the remaining 32 three-using packages (44 built folders) to
  `build_game.mjs` + `../three_shared.js`, section by section, boot-smoking
  every folder. Expected: ≈26 MB of JS removed.
- Remove the dead `three` dependency from the 14 canvas packages that
  declare but never import it.
- Fleet sweep for the Sunset anti-pattern: grep every game's frame loop for
  per-frame construction/rebuilds and DOM writes; fix or file each hit.

### Batch B — Free wins: dead content, unused art, felt bugs
Nearly all of these are a few lines or a wiring change; together they double
two games and re-dress five more.
- **course_race unlock cap**: rounds 4–6 of alien_sky and rhino_summit become
  playable (game.js `_finish`, sim.js `won`, normalizeSave stars).
- **Wire the unused panoramas**: rhythm (7 — incl. the Cairo finale),
  golden_tail (6), pumpkin_pie (replace its 4 European panos with hara art
  or wire a themed set), samurai (delete the ~5 MB of unreferenced panos —
  its real backdrops arrive with the Batch E reskin).
- **Fix place↔art mismatches**: coastal_drive world labels (Matrouh =
  Ageeba pano, Aswan = Nile world, "Game City" → New Alamein); air_race
  pano-to-course matching and the glacier-over-Cairo palettes; ball_scoop
  pano/theme index misalignment.
- **Felt bugs**: girls' feminine win lines (castaway_raft `_girl()`,
  trick_or_treat `_won`); pearl_divers slowest-win "best" + hard-coded `x3`
  label; sky_jumper art loading (emoji power-ups end) + card/hero mismatch;
  sky_jumper auto-pause on `visibilitychange`; creator_tycoon career
  persistence + its 2 missing office backgrounds; honey_farm persistent
  save + ج.م currency; chomp_maze music file + hero/poster art;
  music tracks for the four silent action games (ice_dragon,
  hamster_warrior, squad_shooter, archer_bridge); hop_world's IP-adjacent
  hills tune replaced; stale header comments that contradict the code
  (dune_titans "coastal circuit… the bikes", samurai "three stages",
  fox_family "three short levels", rhythm "five tracks").

### Batch C — Kind rules: every pressure mechanic converted
One sweep, one rule: **stars only for completion; nothing punishes.**
- summit_rush: 60 s fail-clock → story goal (lanterns at the monastery).
- card_battle: 150 s clock + double-energy endgame → untimed duels.
- barrel_knights: 60 s matches → first-to-2 untimed (finals keep a soft cap).
- splash_race: elimination ladder → every finisher stamped.
- marble_dozer: countdown + timeout-loss deleted; stars for completion.
- frost_coil: move limit + fail state deleted.
- deep_sea: per-level timers + lives deleted; lunge = bump + small growth cost.
- chomp_maze: lives → sweet-count.
- hungry_frog: hearts → splashes (progress never lost).
- fizz_runner: one-hit death → stumble + hearts.
- happy_farm: `bumps≤2` star gate → completion stars.
- pin_puzzle / sweet_tray / gum_ball / gem_quarry: par, combo, diameter and
  efficiency grades → completion stars (+ non-star sparkles/collections).
- nutmeg_rush: par times stop grading; stars from tricks/completion.
- pumpkin_pie / space_store: fixed ⭐⭐⭐ → earned stars.
- fashion_queen: runway numeric score → audience reactions.
- hero_tower / temple_army: verify retry and −gate designs stay kind
  (they largely are) and document the check.

### Batch D — Clone separation
- Racing trio: dune_titans gets its own dune track + Oasis Rally identity;
  rain_circuit gets wet-grip physics + Alexandria Storm identity and a new
  rival cast; moto_race stays the heritage GP. The shared `track.js` era ends.
- lane_shooter pair: squad_shooter → Nile Rescue Squad; archer_bridge →
  Qasr El Nil Archers. One sim, two genuinely different worlds and verbs.
- course_race pair: rhino_summit gains the head-charge; alien_sky keeps the
  jetpack. Same chassis, different signature moves and ladders.
- Build skeletons: space_store differentiates from pumpkin_pie (station
  wings, delivery-rocket events, shopper leave-logic) before either grows.

### Batch E — Egypt identity: reskins and anchors
The identity spine (§3 anchors), reusing in-repo art first, generating only
for gaps (Appendix B shows where the in-production art batch lands):
flagships first — temple_army → Guardians of Karnak (naming + glyph pass,
zero sim change), samurai → Guardian of the Temple, tomb_puzzle re-sited at
Saqqara / Valley of the Kings / Abu Simbel, dino_grow → Little Spino,
deep_sea → Bouri of the Red Sea (Aquarium reference as art target) — then the
long list: zombie_rooftop, hero_tower, gummy_squad, ocean_defense,
nutmeg_rush, barrel_knights, squad/archer (with Batch D), ice_dragon,
ice_rink, sky_ace, cloud_dash, fox_family, hop_world, trick_or_treat
(Wahawy), happy_farm, pumpkin_pie, space_store, honey_farm, pearl_divers,
winter_camp, castaway_raft, creator_tycoon, hot_spring, gem_quarry,
marble_dozer, frost_coil, chomp_maze, gum_ball, hungry_frog, pin_puzzle,
sweet_tray, fashion_queen, girls_world, ball_scoop, summit_rush, splash_race.

### Batch F — Longer worlds: content volume
Level-structure targets from §3, game by game: real maps instead of remixes
(jungle_adventure, golden_tail arenas, ice_dragon mazes), new tracks and
courses (carnival_race +3, air_race +5, coastal_drive +6), tours and second
chapters (sky_capy 8 stops, castaway 12 stops, space_store Moon base,
mars_farm Olympus, gem_quarry Tura, rug_cleaning Siwa, hot_spring Bir
Sigam, winter_camp summit camp, hero_tower 2 new-look chapters,
sunset_highway Season 2), albums and passports everywhere (relic, reef,
pond, heights, swim, style). This is the long batch; it ships game by game.

## 5. Standing pipelines — voice and art (run parallel to all batches)

**Voice.** VoiceCoach is wired in every in-scope game; installing the
owner's clips is a file copy into `assets/games/<game>/voice/<lang>/` with
**zero code changes** (clip URLs are built at runtime from per-game
manifests). State: 294 of 1,808 lines installed (Sunset 44 + batch 2's 250);
the remaining-lines file (game/lang/file/text, with speaker and delivery
notes) is being prepared for the owner separately. As each of his batches
arrives: verify against the CSV, copy, spot-play, commit per game.
Installation priority when batches land: (1) the 14 games with no `voice/`
folder at all; (2) near-empty games (nutmeg_rush 1/32, sky_capy 2/36,
ocean_defense 6/34, pearl_divers 6/16, fizz_runner 9 files); (3) single-line
holes (pin_puzzle `ar/charge_1`; sky_ace's 4 English lines); (4) the girls
section's warm lines for pre-readers (girls_world, fashion_queen).
Repetition discipline from the audits applies: events that fire constantly
(pearl_divers' `charge` on every sale) get longer cooldowns, not more clips.

**Art.** The owner's 830-image art batch is in production now: 34 per-game
sets (13–18 images each — menu key art, UI sheets, model sheets, cast
sheets, level backdrops, reward icons, game cards), the 5-piece Italian
world set (IT-CARD / IT-MAP / IT-ICONS / IT-WIN / IT-GUIDE), and 316
learn-word sheets (LNW/EXP/EXE — the owner's Learn area; coordination only).
Every image is visually QA'd against its prompt on arrival. As each game's
set completes, it is wired into that game during its Batch E/F work — the
full landing map is Appendix B. New art beyond the batch is generated only
for audited gaps (summit_rush's Catherine backdrops, archer_bridge skylines,
cloud_dash region panos, fox_family, gem_quarry) and follows the same
prompt → generate → visual-QA pipeline.

## 6. Per-game production checklist — the Sunset method

No game is "done" until every step passes, in this order:

1. **Audit card read & identity locked** — hero, world, Egyptian anchor,
   AR+EN name pair, signature verb, target level structure and playtime
   (§3 row) confirmed against the game's audit card.
2. **Reuse before generation** — every in-repo asset named in the audit
   (pool art, sibling panos, art-batch set) is wired in; new art only for
   listed gaps, each image visually QA'd against its prompt.
3. **Levels are places** — each level/stage differs in setting, cast or
   mechanic (not only numbers); difficulty curve rises by design, and the
   §3 playtime target is reachable by a child, verified by the robot/test
   playthrough where one exists.
4. **Juice & living world** — movement has weight (springs, roll, squash);
   the world breathes (ambient motion, bystanders, weather where fitting);
   every action has a sound; celebrations are earned and kind.
5. **Voice** — VoiceCoach events fire on real gameplay events with
   cooldowns (per-event ~9 s, global ~4 s — the Sunset tuning); installed
   owner clips verified present; TTS fallback never the primary experience
   once the owner's batch for the game has arrived.
6. **Music** — a music bed exists (no silent games); dynamic layers where
   the design calls for them (Sunset's speed-following arrangement is the
   reference); mute toggle works and persists.
7. **Kind-rules check** — no fail-clocks, lives, move limits or graded
   stars remain (Batch C list); stars are for completion; losing is always
   "try again, friend", never punishment.
8. **Performance pass** — §2 budget verified with measurements: game.js
   size, folder size, `renderer.info` draw calls/triangles where 3D,
   per-frame allocation/rebuild sweep clean, auto-degrade present in 3D
   games.
9. **Tests** — `npm test` green and `npm run build` with the built game.js
   committed; `flutter analyze` + `flutter test` whenever Dart changed.
10. **Real click-flow test** — the game is started by clicking its actual
    menu buttons with audio unlocked by the gesture (never only a
    programmatic start); zero page errors; first level played through.
11. **Full playtest, first level to last** — the whole campaign is played
    or robot-driven end to end; unlocks, saves and the final level/ending
    verified; save migration checked against `normalizeSave`.
12. **Log & deliver** — entry in `docs/AI_WORK_LOG.md` (identity line,
    changes, test results); small commits with clear English messages;
    playable copy for the owner when the game is a milestone delivery.

## 7. Risks and open owner decisions

**His decisions — not ours to take:**
1. **`learn_voice` — 237 MB (9,479 lesson clips).** More than half the
   app's game weight. Options when he is ready: re-encode speech at a lower
   mono bitrate (estimated 30–50% saving, no audible loss for speech),
   and/or move non-Arabic languages to on-demand download. Untouched until
   he decides; it is approved lesson content in his own work area.
2. **Style unification (RC child pastel vs DS adult calm).** The app
   deliberately carries two UI looks (`docs/DESIGN_SYSTEM.md`). This plan's
   unified system governs the *game experience* only; merging the two looks
   is the owner's visual call and remains open.
3. **`art` folder — 39 MB (1,067 webp, the drawing app).** Recompression
   headroom likely exists, but it is owner content; audit dimensions with
   him before touching.
4. **gum_ball's section** — an action game registered under Puzzle;
   re-homing it in the registry is a one-line change he reviews via diff.

**Risks we manage:**
- **Shared engine = single point of failure.** If `three_shared.js` fails
  to load, converted games throw the shim's explicit error rather than
  failing silently. Mitigation: the Flutter loader lands *before* mass
  conversion (§2 order), and every converted folder is boot-smoked.
- **Voice supply is owner-paced.** 1,514 of 1,808 lines are still with the
  owner. The plan never blocks on them: games ship with wiring + fallback,
  and each arriving batch is installed the same day (Track in §5).
- **Scope discipline.** The Learn world, `firestore.rules`, app id and
  store settings are never touched by this program; no publishing, no
  pushes to `feature/rehlaty` or `demo-site`, ever.
- **Estimate honesty.** Batches A–C are days-scale; D–E are weeks-scale;
  Batch F is the long tail. The owner's stated window (weeks to a month)
  fits A–E comfortably with F well advanced; per-game deliveries keep him
  able to diff, test and roll back at every step.

## Appendix A — Learn games: coordination only (11 games, externally owned)

The owner + Claude Code are actively developing these, including recorded
voices in 5 languages (AR/EN/DE/FR/IT) through their own hashed-clip
architecture (`assets/games/learn_voice/`, 9,479 clips ≈ 237 MB on disk;
German is the thinnest at 150 files — his pipeline, his pacing). This plan
schedules **no work** on them. Coordination points only:

| Game | State on record | Coordination note |
|---|---|---|
| learn_letters (+ learn_english, learn_german, learn_french, learn_basics_*) | Flagship; one 2.59 MB folder (game.js 1.7 MB) serves 8 registered games | Biggest single shared-engine saving in the app — recipe left in `docs/SHARED_THREE_ROLLOUT.md` for when he wants it |
| learn_maze | 3D hedge maze, mouse in a red cap | Own three.js bundle (coordination as above) |
| learn_sort | Toy-shop sorting with Robi the robot | Word lists overlap his LEARN_NEW_ITEMS.csv queue |
| learn_treasure | Island treasure, Coco the parrot, voice-led clues | — |
| learn_day | Daily-routine ordering, day-cycle room | Uses pool `x_routine_*` art |
| learn_ladders | Ladders & slides vs Teddy — no-loss by design | Cited in the audit as a good house-rule pattern |
| learn_ball | Spatial language with Bobby the puppy | Pool `x_where_*` art exists |
| learn_pattern | Bead-pattern completion | Pool `x_bead_*` art exists |
| learn_counting | Counting at an Egyptian market stall | Proof the Learn world already does heritage anchoring |
| learn_shapes | Shape sorter with Kitty | — |
| learn_animals | Feed-the-animal, voice-explained | Pool includes camel/Delta species if wanted |

The learn kit already references the shared pool's pyramid/desert art
(`kit/worlds3d.js`, letters levels) — the heritage pattern this plan extends
to the fun games is already proven in his area.

## Appendix B — Art-batch landing map (830 images, in production)

Per-game sets (menu key art, UI sheet, button sheet, hero model sheet, cast
sheet, level backdrops, reward icons, game card) land in the named game's
Batch E/F work: archer_bridge (13), barrel_knights (18), card_battle (13),
castaway_raft (18), chomp_maze (15), cloud_dash (15), creator_tycoon (14),
dino_grow (15), fashion_queen (18), frost_coil (10), gem_quarry (18),
gummy_squad (15), hero_tower (15), honey_farm (15), hop_world (15),
hot_spring (15), ice_dragon (16), ice_rink (15), marble_dozer (14),
mars_farm (15), nutmeg_rush (17), pearl_divers (15), pin_puzzle (15),
rug_cleaning (15), sky_ace (14), sky_capy (14), sky_jumper (14),
squad_shooter (13), sweet_tray (15), temple_army (15), tomb_puzzle (15),
trick_or_treat (16), viking_sling (15), winter_camp (14) — 34 games, 509
images. Plus the Italian world set (5: IT-CARD, IT-MAP, IT-ICONS, IT-WIN,
IT-GUIDE) for the owner's Italian world, and 316 learn-word sheets
(LNW 47, EXP 55, EXE 214) for the Learn area (coordination only).
Games without a set in this batch (the racing section, sunset_highway,
ocean_defense, zombie_rooftop, samurai, hungry_frog, deep_sea, girls_world
and others) draw from the shared pool and sibling art first; any further
sets are generated per-game during their Batch E/F work, same pipeline,
same per-image QA.
