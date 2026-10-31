# Store listing drafts (Google Play and App Store): DRAFT, not submitted

Rules for this text: describe only what the app really does today; no claim of review, safety certification, recorded voices, or online features that are not switched on; no medical or learning-outcome promises. Keep these edits true if the build changes (see "What not to write").

## Facts to keep consistent
App name **Rehlaty (رحلتي)** · Publisher: individual (your legal name) · Ages **1-6** · Languages **Arabic and English** · Landscape · Works offline except videos · No ads, no tracking, no in-app purchases · Parent area behind a PIN · Parents approve every video.

## English (draft)
**Title (<= 30):** Rehlaty - Kids Learning 1-6
**Short description (<= 80):** Arabic and English learning games, stories and activities for ages 1-6.
**Full description:**
Rehlaty is a learning journey for children aged 1 to 6, made for parents and children to use together. It is designed in Arabic and English and works without internet for most activities.
- Learning games for letters, numbers, shapes, colours, listening and thinking, with gentle encouragement and no losing.
- Original stories, including "choose your path" stories, and bedtime sounds.
- A friendly companion (Adam or Nour) who says short, ready-made sentences.
- A growing world, weekly adventures, a sticker album and an achievement museum that only show what your child really did.
- Everyday-life activities to do together with a grown-up, with safety notes.
- A parent area (PIN protected): progress, daily time limit and quiet hours, printable worksheets, data export and deletion.
- Videos: your child sees only lessons that **you** have previewed and approved. Nothing is approved by default. Videos play in YouTube's official player and need internet.
- No ads, no tracking, no purchases. Child information stays on the device.
Voices use your phone's text-to-speech voice. Online features (family messages and calls, teacher service) are not part of this version unless this listing says otherwise.

## Arabic (draft)
**العنوان:** رحلتي - تعلّم للأطفال ١-٦
**وصف قصير:** ألعاب وقصص وأنشطة تعليمية بالعربية والإنجليزية للأطفال من سنة إلى ٦ سنوات.
**الوصف الكامل:**
رحلتي رحلة تعلّم للأطفال من سنة إلى ٦ سنوات، مصمَّمة ليستخدمها الأهل مع أطفالهم. بالعربية والإنجليزية، وأغلب الأنشطة تعمل بلا إنترنت.
- ألعاب تعليمية للحروف والأرقام والأشكال والألوان والاستماع والتفكير، مع تشجيع لطيف وبلا خسارة.
- قصص أصلية، منها قصص «اختر الطريق»، وأصوات للنوم.
- رفيق ودود (آدم أو نور) يقول جملاً قصيرة جاهزة.
- عالم ينمو، ومغامرات أسبوعية، وألبوم ملصقات ومتحف إنجازات يعرض فقط ما أنجزه طفلك فعلاً.
- أنشطة من الحياة اليومية مع شخص بالغ، مع ملاحظات للسلامة.
- منطقة للأهل محمية برقم سري: المتابعة، وحد الوقت اليومي، وأوراق للطباعة، وتصدير البيانات وحذفها.
- الفيديوهات: لا يرى طفلك إلا الدروس التي عاينتَها ووافقتَ عليها أنت. لا شيء مقبول افتراضياً. تُعرض عبر مشغّل يوتيوب الرسمي وتحتاج إلى إنترنت.
- بلا إعلانات ولا تتبّع ولا مشتريات. معلومات الطفل تبقى على الجهاز.
الأصوات من صوت الهاتف (تحويل النص إلى كلام). الخدمات عبر الإنترنت (رسائل ومكالمات العائلة وخدمة المدرّسين) ليست جزءاً من هذا الإصدار ما لم يُذكر خلاف ذلك في هذه الصفحة.

## What NOT to write (until it is true and verified)
- "All videos are reviewed / safe / curated by experts" (none is verified; the parent reviews).
- "Professional voices / recorded by actors" (device text-to-speech only).
- "Chat with grandparents / video calls / find a teacher" (online features are behind the closed release gate).
- "Sign in with Google/Apple", "push notifications", "cloud sync".
- "Approved by Google/Apple", "COPPA/GDPR-K compliant", or any legal or medical claim.
- Exact learning outcomes ("your child will read in a month").

## Category and ratings (decisions, see the Kids Category evaluation below)
Google Play: Education; target audience 5 and under and 6-8 (declare honestly; Families policy applies). Apple: Education category (primary), age rating by the questionnaire (expect 4+); Kids Category is a separate decision.

## Apple Kids Category: evaluation against the actual app (no category was chosen)
| Requirement or risk | The app today | Assessment |
|---|---|---|
| No third-party advertising or analytics | none | meets |
| No links out or purchases without a parental gate | no external links on child screens; YouTube title/logo/end-screen suggestions are blocked by `safe_player.dart` (written without a device, NOT verified) | **needs device proof** |
| Third-party web content | the embedded YouTube iframe player is third-party web content; it can show YouTube's own advertisements and branding (kept on purpose: removing them is forbidden by the project rules) | **main risk**: Apple may refuse, and YouTube terms for child-directed use must be satisfied |
| Parental gate | PIN for the parent area; multiplication question before the first PIN; a parent approves each video | likely meets; Apple may test it |
| Human interaction / communication | family chat/calls exist in code but are behind the closed gate | if enabled in the first build, Kids Category review is much harder |
| Privacy | no data collected in the default build; manifest present | meets for the default build |
| **Recommendation** | Release 1: **normal Education category**, age rating by questionnaire, gate closed, YouTube only after parent approval. Consider Kids Category later, after (a) real-device proof of the player restrictions, (b) a decision on whether to keep YouTube, (c) reading Apple's current guidelines 1.3 and 5.1.4 with App Review's feedback. | owner's decision |
