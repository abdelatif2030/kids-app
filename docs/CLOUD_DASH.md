# «ركضة السحاب» — Cloud Dash (2026-11-18, from the owner's video + prompt)

A 3D pastel runner in «ألعاب للتسلية» (third page). three.js, all models, textures and sound made in code, no network.

- A cartoon kid (boy or girl, by the child's gender) runs by himself along a three-lane track of floating pastel tiles in the clouds. Swipe left/right to change lane, up to jump
  (a tap also jumps), down to slide. Keyboard arrows/WASD/space too.
- Hazards: candy barriers (jump), slime blobs (jump or dodge), spikes (jump), overhead bars (slide), gaps and crumbling tiles that open when you come close (jump), wind gusts
  (push one lane over), side-wall stretches (swipe outward to run on the wall for coins). Power-ups: shield (blocks one hit), candy-cane coin magnet, slow motion.
- Three hearts (five for age 4 and under); a hit or a fall costs one, with a short blink; «Perfect landing!» after a jump over a hazard. Reach the finish gate for 1-3 stars (hearts + coins).
- Ten levels (longer, faster, denser; each introduces a new hazard: slime/bars L2, gaps L3, spikes L4, wind L5, walls L6). Every play builds a new track.
- Save per child: unlocked levels, stars, coins. Erased with the child (`cloud_dash`).
- Code: game_src/cloud_dash (sim.js rules + level generator, main.js scene, audio.js); `npm run build`; `npm test` (7 tests incl. a robot that finishes every level with its hearts).
- NOT tested on a real phone; sound not listened to by a person; swipe feel needs a real touch screen.

## تصحيحات (2026-11-18 مساءً، من تجربة الأيفون)
- **اليمين/الشمال كانوا معكوسين**: الكاميرا بتبص ناحية +z فاليمين على الشاشة هو -x. اتعكس موضع المسارات (laneX) وكل اللي بيعتمد عليه (إخفاء البلاط في الفجوات، سهم الريح، ميل الطفل، الجري على الحيطان). اتأكدت: سحبة يمين بتودّي الطفل لليمين على الشاشة.
- **المراحل أطول**: بدل 20-30 ثانية بقت حوالي دقيقة لدقيقة ونص (طول 520 + 90 لكل مرحلة)، وفي اختبار بيتأكد إن المرحلة الأولى أكتر من 55 ثانية.
- **العملات والـ power-ups بقت سبرايتات زي الفيديو**: عملة ذهبية لامعة بنجمة، درع أزرق، مغناطيس عصاية حلوى، ساعة رملية. بتتحرك (بتتأرجح وبتدور) ولما الطفل ياخدها بتطلع لفوق وتكبر وتختفي. عيون السلايم بقت ناحية الطفل.
