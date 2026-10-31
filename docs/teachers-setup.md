# تفعيل المدرسين (Firebase)

التطبيق يعمل كالمعتاد بدون هذه الخطوات. شاشة «المدرسون وحسابي» في إعدادات الوالدين
تقول «غير مفعّلة» حتى تكمل الخطوات التالية مرة واحدة.

## 1. أنشئ مشروع Firebase
1. افتح https://console.firebase.google.com وأنشئ مشروعاً جديداً.
2. عندما يسأل عن **Google Analytics** اختر **تعطيل** (قاعدة المشروع: لا تحليلات ولا تتبع).

## 2. فعّل تسجيل الدخول
Authentication ← Sign-in method ← فعّل **Email/Password**.

## 3. أنشئ قاعدة البيانات وضع القواعد
1. Firestore Database ← Create database (اختر أقرب منطقة، وابدأ بوضع Production).
2. Rules ← انسخ محتوى الملف `firestore.rules` من هذا المشروع والصقه ← Publish.

هذه القواعد تضمن أن:
- الأهل يرون المدرسين الظاهرين (`approved`) فقط، ويمكنك إخفاء أي مدرس بـ `suspended`.
- المدرس لا يستطيع رفع الإيقاف عن نفسه.
- طلب الحصة لا يراه إلا ولي الأمر والمدرس المعنيان.
- البلاغات لا يقرؤها أحد داخل التطبيق.
- رابط الحصة يجب أن يبدأ بـ `https`.
- لا توجد أي محادثات، ولا بيانات عن الطفل إلا عمره (اختياري) في طلب الحصة.

## 4. اربط التطبيق بالمشروع
في مجلد المشروع (PowerShell):

```powershell
dart pub global activate flutterfire_cli
```

```powershell
flutterfire configure
```

اختر مشروعك ومنصتي Android وWeb. هذا الأمر يستبدل الملف `lib/firebase_options.dart`
ويجهّز Android (`google-services.json`).

ثم افتح `lib/firebase_config.dart` وغيّر:

```dart
const kFirebaseEnabled = true;
```

وشغّل التطبيق من جديد (`R`).

## تحديث القواعد بعد إضافة الصور والسيرة الذاتية
إذا نشرت القواعد قبل إضافة رفع الصورة والسيرة الذاتية، افتح Firestore ← Rules وامسح القديم،
والصق محتوى `firestore.rules` الجديد واضغط Publish. القواعد الجديدة تضيف مجموعة
`teacherFiles` (السيرة الذاتية) وحدود الحجم.

حدود الملفات (الخطة المجانية Spark): الصورة حتى 100 كيلوبايت، والسيرة الذاتية حتى 500 كيلوبايت
(PDF أو JPG أو PNG). يمكن للأهل تنزيل السيرة الذاتية، لذلك ينبّه التطبيق المدرس لحذف رقم
هاتفه وعنوانه منها.

## 5. ظهور المدرسين (بدون موافقة مسبقة)
بقرار صاحب التطبيق، المدرس يظهر للأهل **فور حفظ ملفه**، من غير موافقتك. لذلك:
- التطبيق يكتب للأهل تنبيهاً أن المدرسين يسجلون بأنفسهم ولا يفحصهم التطبيق.
- **لإخفاء مدرس:** Firebase ← Firestore ← `teachers/<id>` وغيّر `status` إلى `suspended`.
  المدرس لا يستطيع رفع الإيقاف بنفسه، ولا يظهر للأهل بعدها.
- **بلاغات الأهل:** زر «إبلاغ عن هذا المدرس» يحفظ البلاغ في مجموعة `reports`
  (تقرأها أنت من لوحة Firebase فقط). راجعها بانتظام.
- لو كان عندك مدرس قديم بحالة `pending`، يكفي أن يفتح ملفه ويضغط «حفظ» ليظهر.

## ملاحظات أمان
- المدرسون والحسابات في منطقة الوالدين خلف الرمز السري، ولا يصل إليها الطفل.
- التطبيق لا يفتح روابط خارجية: رابط الحصة يظهر لولي الأمر للنسخ، ويفتحه بنفسه ويجلس بجانب طفله.
- جرّب القواعد بحسابات تجريبية قبل أي استخدام حقيقي.

## Verification badges and the professional profile (stage 1 of the marketplace)

1. **Re-publish `firestore.rules`** (Firestore → Rules → paste → Publish). The new rules limit field sizes/ranges and stop teachers from writing the two badge fields.
2. To verify a teacher: check their documents yourself, outside the app. Then open `teachers/{uid}` in the console and add a boolean field:
   - `identityVerified = true` after checking an official ID, and/or
   - `qualificationVerified = true` after checking the qualification they claim.
   The two badges are separate. Remove the field (or set `false`) to take a badge away. A teacher cannot add, change or remove either field, and a complete profile never gives a badge.
3. Keep your own private record of what you checked and when (there is no audit log in the app yet).
4. Existing teachers keep working: every new field is optional.

## Portfolio and intro video (added 2026-11)

- Teachers add work samples (worksheet, lesson plan, activity, story) from **Teacher account -> My portfolio**.
  Each has a title, a short description and an optional small picture (up to 100 KB, base64 in Firestore, because
  Storage needs the paid plan). There is no file or video upload. A teacher can hold up to 20 items.
- **Draft** is seen only by the teacher; **published** is seen by parents on the teacher page, before booking.
  To hide one item, open `portfolio/{id}` in the console and set `status` to `hidden`. A teacher cannot lift it
  (the rules refuse), and the app shows them "hidden by the app owner".
- The optional intro video is an **https link** (30-60 seconds). Parents see it as a link to copy; nothing plays
  or opens by itself, and there is no player.
- Everything in the portfolio is written by the teacher and is NOT reviewed by the app; the page says so.
- **You must re-publish `firestore.rules`** (new `portfolio` collection and the `introVideoUrl` check).
  The rules were tested with the emulator (`cd rules_test && npm test`: 28 tests pass).
- "Preview as parents" on the teacher account already shows the page exactly as parents see it, including the portfolio.

> **Update (Release 1):** teacher profiles are created `pending` and become visible only after the owner sets `status` to `approved` in the console; teachers can never approve themselves. Earlier text saying profiles are visible at once is outdated. The teacher service is OFF in Release 1. See `docs/RELEASE_1_DECISIONS.md`.
