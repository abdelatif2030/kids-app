# Review: Viking Slingshot («مقلاع الفايكنج») against the owner's original video (brief #22)

Original (recording 20261118-2126, portrait, 2 min, title "Sling Raiders"): low-poly 3D meadow. The camera sits behind a big carved
Y-shaped slingshot and looks away from the player; the fort stands far off. The player pulls back and releases, the camera cuts to the
fort and follows the flight. HUD: pause, a big purple "goblin x N" pill, a coin pill, a level pill, a star bar (0/30) on the title screen.
A queue of round viking icons at the bottom (axe, bounce, bomb) with coloured name badges; the current one is large and yellow.
Tutorial text "PULL BACK & RELEASE" then "TAP to throw!" (tap in the air = special move, "TAP to raise the shield!").
Forts of wood palisades, planks and stone blocks with purple banners; goblins pop with coins (+15). Result panel "FORT RAIDED!":
stars, Goblins 3/3, Plunder +67, Unused vikings 0 x 100, First raid +45, buttons Map / Longhouse / Next. Level intro banner
("LEVEL 2 - STONE STEADING", names the new viking).

## Differences found
1. 3D scene and camera behind the slingshot vs our flat 2D side view. 2. Portrait phone: our world was tiny (25 units across) with a huge empty
sky and slab of ground. 3. HUD: plain pills; no big purple goblin pill, queue icons had no kind badges, queue at the left. 4. Result card showed
only stars and gold; no goblins/plunder/unused vikings/first-raid rows. 5. No level intro banner naming the level / new viking. 6. Title screen is
a card, not a scene with the vikings; no star total bar or "Longhouse" button. 7. Art is original but simpler (no banners, palisade, trees).

## Fixed (game_src/viking_sling)
- Portrait scaling: the world is drawn about 1.5x larger and the ground line sits at 80 percent of the height, so the sling and fort fill the screen.
- HUD like the original: large purple goblin pill ("x N"), coin pill, level pill, round pause; queue centred at the bottom with coloured BOMB / BOUNCE / GIANT badges.
- Result card rows: Goblins n/N, Plunder +gold, Unused vikings n x 15, and a REAL one-time "First raid" +45 gold bonus on the first win of a level (added to the save).
- Re-played in headless Chrome at 390x800 with real pointer events (aim, launch, flight with camera follow, a goblin kill, lose card, forced win card): no console errors. `npm test` 9/9 pass.

## Still different
- No 3D: it stays a 2D side-view physics game (planks/stone/ice physics is unchanged), no behind-the-sling camera, no low-poly trees/palisade/banners.
- Launch is very sensitive (small pulls travel far, e.g. level 1 needs about 1 unit of pull): not changed because it is shared balance, but worth tuning.
- No level intro banner, no title scene with vikings/star bar/Longhouse; no tutorial phrase sequence beyond the aim/tap hints.
