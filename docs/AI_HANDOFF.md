# تسليم المشروع لمساعد AI تاني (Moss AI): ملخص التطبيق وطريقة الشغل بأمان

**الهدف:** المساعد يشتغل على **برانش خاص بيه وفولدر منفصل** من غير ما يلمس شغلنا. لما يخلص، بنراجع الفرق (diff) ونجرّب ونطبّق، ولو فيه مشكلة بنعمل رول باك.

## 1) التطبيق في سطرين
«رحلتي / Rehlaty»: تطبيق عربي أولا لتعليم الأطفال من سنة لـ 6 (ومعاه محتوى لحد 12)، «مدرسة صغيرة»: ألعاب تعليمية، وضع «اتعلّم» (حروف، أرقام، كلمات بصور بأربع لغات: عربي · English · Deutsch · Français)، قصص، رسم، ركن للأهل بالرقم السري، وألعاب ترفيهية كتير. Flutter للموبايل والويب، وألعاب three.js / canvas مبنية بـ esbuild وبتتحط جوه التطبيق. الأصوات كليبات mp3 (ElevenLabs) والصور رسومات المالك.

## 2) الريبو والبرانشات
- الريبو: `https://github.com/abdelatif2030/kids-app` (محلي: `C:\dev\rehlaty`).
- **برانش شغلنا (ما تلمسهوش): `feature/rehlaty`** (آخر commit وقت كتابة الملف: `10b60fa7`).
- **برانش النشر: `demo-site`** (كل نشر للديمو بيروح هنا): **ممنوع المساعد ينشر عليه أو يـ push عليه.**
- برانشات قديمة: `main`، `feature/teachers`، `feature/ui-uploads`، `feature/mini-school`، `feature/color-game`، `instinct-test`.
- الديمو المنشور: `https://demo-site-e3g.pages.dev` (Cloudflare Pages).

## 3) إزاي المساعد يشتغل بشكل منفصل (الأمان)
**الأفضل: فولدر منفصل (worktree) وبرانش جديد من `feature/rehlaty`.** نفّذ ده في PowerShell:
```powershell
cd C:\dev\rehlaty
git fetch origin
git worktree add C:\dev\rehlaty-moss -b ai/moss-work feature/rehlaty
```
بعد كده المساعد يفتح `C:\dev\rehlaty-moss` **بس**. مش بيلمس `C:\dev\rehlaty`.
- كل commits على `ai/moss-work`. الـ push على نفس الاسم بس: `git push -u origin ai/moss-work`.
- المساحة: الفولدر الجديد حوالي 1-2GB. ديسك C: قريب من الامتلاء (حوالي 5GB فاضلة)، تأكد قبلها.
- بديل أأمن لو المساحة ضيقة: يشتغل على جهاز تاني أو clone منفصل على ديسك تاني.

## 4) قواعد المشروع (غير قابلة للتفاوض)، لازم المساعد يقرأ `CLAUDE.md` كله
1. **للأطفال 1-6:** مفيش إعلانات، ولا تتبع، ولا روابط خارجية في شاشات الطفل، ولا حزم تحليلات، ولا فيديوهات من YouTube. النجوم بس على إنهاء نشاط (من غير سلاسل أيام ولا ضغط).
2. **وضع الطفل** بيبدأه الأب ويخرج منه بالرقم السري، والتايمر بينهي الجلسة بلطف.
3. **قواعد أبل** (`docs/APPLE_REVIEW_RULES.md` وتحميها `test/apple_review_test.dart`): الدفع داخل التطبيق = Apple In-App Purchase بس (ممنوع Stripe/MyFatoorah/Moyasar)، لينكات الخصوصية والشروط على أي شاشة تسجيل أو دفع، حذف الحساب جوه التطبيق، مفيش شاشات «قريباً».
4. **ممنوع إضافة باكدج (pub أو npm) من غير موافقة المالك.**
5. **ممنوع أي أسرار:** مفاتيح Firebase وElevenLabs وCloudflare بتتقرا من متغيرات البيئة بس، ومش بتتكتب في ملف أو commit.
6. **ممنوع النشر** (للديمو أو أي حاجة)، **ممنوع تغيير `firestore.rules` أو نشرها**، **ممنوع تغيير الـ id أو إعدادات المتجر.**
7. اللغة: النصوص عربي أولا، وفيه ترجمة إنجليزي (`tr2('عربي','English')` و`loc()`). الألماني والفرنساوي بيراجعهم ناطق أصلي.
8. ما تولّدش أصوات ولا صور بالأدوات الخارجية: المالك هو اللي بيولّدها.

## 5) هيكل الكود (أهم الأماكن)
| المكان | فيه إيه |
|---|---|
| `lib/` | تطبيق Flutter. `main.dart`، `journey/` (الواجهة والتقدم)، `games/` (الألعاب وصفحاتها)، `auth/` (تسجيل الدخول)، `parent/` وإعدادات الأهل، `l10n/` (الترجمة) |
| `lib/games/web_games/` | تسجيل ألعاب الويب (`web_game.dart`) وشاشاتها |
| `game_src/<لعبة>/` | كود كل لعبة JS (`src/`, `test/`, `package.json`). الناتج بيتبني في `assets/games/<لعبة>/game.js` |
| `game_src/learn_games/` | عالم التعلّم (الحروف، المستويات، وضع «اتعلّم»): `src/letters/main.js`، `src/learn/*` (الأقسام)، `src/english|german|french/` (الكلمات والمستويات)، `src/kit/` (الصوت والمشهد) |
| `assets/games/learn_voice/<ar|en|de|fr>/` | كليبات الأصوات (الاسم = هاش النص). `manifest.js` بيتولّد |
| `assets/games/art/` | صور الكلمات (webp) |
| `tools/` | أدوات (قوايم الأصوات، التسجيل، النشر) |
| `docs/` | الخطط والمراجع (ابدأ بـ `docs/LEARN_COVERAGE_MASTER.md` و`docs/TEN_X_CONTENT_PLAN.md` و`docs/APPLE_REVIEW_RULES.md`) |
| `test/` | اختبارات Flutter (حوالي 1600) |

## 6) أوامر الاختبار والبناء
```powershell
flutter pub get
flutter analyze                       # لازم نضيف (فيه تحذير قديم واحد معروف: _round في where_animal_game.dart)
flutter test                          # كل الاختبارات (ياخد دقايق)
flutter test test/<ملف>.dart          # ملف واحد
# لعبة JS:
cd game_src\<لعبة> ; npm test ; npm run build
# عالم التعلّم كله:
cd game_src\learn_games ; npm test ; npm run build
# مانيفست الأصوات بعد إضافة كليبات:
node tools/game_voice/generate.mjs --manifest
```
- لتجربة لعبة JS في المتصفح محليا: `python -m http.server 8099` من فولدر `assets/games` وافتح `http://localhost:8099/<لعبة>/index.html`.
- **لازم المساعد يشغّل الاختبارات قبل أي commit.** ولو غيّر لعبة: يبني (`npm run build`) ويـ commit ملف `game.js` الناتج.

## 7) الخاصة بالمساعد (طريقة commits)
- commits صغيرة، رسالة واضحة بالإنجليزي، وكل commit ليه سبب واحد.
- ما يعملش `git push --force` ولا يغيّر `main`/`feature/rehlaty`/`demo-site`.
- لو الشغل كبير: ملف `docs/AI_WORK_LOG.md` على برانشه فيه: عمل إيه، إزاي يجرّبوه، وإيه اللي مش متأكد منه.

## 8) إزاي نراجع ونطبّق (إنت وأنا، بعد ما يخلص)
1. **نشوف الفرق:**
```powershell
cd C:\dev\rehlaty
git fetch origin
git diff --stat feature/rehlaty...origin/ai/moss-work
```
2. **نجرّب:** نعمل برانش اختبار مؤقت `git checkout -b test/moss origin/ai/moss-work`، ونشغّل `flutter analyze` و`flutter test` وبناء الألعاب، ونجرّب في المتصفح.
3. **نطبّق:** لو تمام: `git checkout feature/rehlaty` ثم `git merge --no-ff origin/ai/moss-work`، ونشغّل الاختبارات تاني، وبعدها بس ننشر الديمو (نشر واحد بالمرة).
4. **رول باك لو حصل مشكلة:**
   - قبل الدمج: مفيش حاجة اتغيرت في `feature/rehlaty`، بنمسح برانشه بس (`git branch -D ai/moss-work` والفولدر `git worktree remove C:\dev\rehlaty-moss`).
   - بعد الدمج: `git revert -m 1 <commit-الدمج>` (بيرجّع الحالة من غير ما يمسح تاريخ)، أو نرجع لآخر commit سليم: `10b60fa7`.
   - الديمو: آخر نسخة سليمة نعيد نشرها من الـ commit ده.

## 9) ملاحظات عن الوضع الحالي (عشان ما يتفاجأش)
- الألماني ناقص أصوات كتير (1507 سطر)؛ أي كلمة ألماني من غير كليب بتشتغل صامتة. ده طبيعي لحد ما المالك يولّدها.
- في ملفات جاهزة بتستنى صور وأصوات: `docs/LEARN_NEW_ITEMS.csv` (386 كلمة)، `LEARN_EXPANSION_WORDS.csv` (203). ما تضيفهاش للعبة قبل ما صورها وأصواتها توصل.
- الإصدار الأول للمتجر أوفلاين: الميزات الأونلاين (حسابات، دردشة عائلة، معلمين) مقفولة بـ `kOnlineFeaturesIntended = false`.
- ما اتجرّبش على موبايل حقيقي ولا آيباد.
- ديسك الجهاز قريب من الامتلاء: امسح نواتج البناء المؤقتة (`build/`) بعد ما تخلص.
