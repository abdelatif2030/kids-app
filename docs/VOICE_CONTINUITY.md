# استمرار نفس الصوت بعد تغيير حساب ElevenLabs (2026-11-18)

الصوت الحالي للّعبة التعليمية: **Fatima** (ElevenLabs).
- voice id: `I3u6waC588j43py1kDN2`
- الموديل: `eleven_multilingual_v2`، الإخراج `mp3_44100_64`
- الإعدادات: stability 0.55، similarity_boost 0.8 (وسرعة اختيارية `--speed` لو جملة محتاجة)
- النص اللي بيتبعت للصوت دايمًا **بالتشكيل الكامل** (tools/game_voice/tashkeel.json، بيتبني من tashkeel_*.py وقاموس الكلمات tashkeel_words*.py) و`generate.mjs` بيرفض أي كلمة من غير تشكيل.
- بعد التسجيل: `verify_voice.mjs` بيسمع الملفات بالتفريغ الصوتي (نفس المفتاح)، وبعدين الجمل المشتبه فيها بتتعاد (best of 3 بـ `takes.mjs`).
- الأصوات الحالية: assets/games/learn_voice/ar/*.mp3 (2277 ملف)، وأصوات الترحيب في assets/audio/voices/fatima/.

**اسم الصوت على الحساب القديم:** «Fatima – Expressive Egyptian Voice»، النوع `professional` (شكله صوت من مكتبة الأصوات، فالأرجح تضيفه للحساب الجديد من Voice Library بالاسم ده وتكمّل بنفس الصوت).

## ملاحظة مهمة: الـ voice id بتاع الحساب
رقم الصوت مرتبط بالحساب اللي أنشأه أو أضافه. لما تحط المفتاح الجديد:
1. شغّل `ELEVENLABS_API_KEY=<الجديد> node tools/game_voice/check_voice.mjs` (بيقول الباقة والرصيد، وهل الصوت شغال على الحساب ده).
2. لو قال «voice OK»: كمّل عادي بنفس الأمر القديم:
   `node tools/game_voice/generate.mjs --provider elevenlabs --voice I3u6waC588j43py1kDN2 --lang ar`
3. لو قال «NOT usable»:
   - لو Fatima صوت من **مكتبة الأصوات** (Voice Library): افتح المكتبة في الحساب الجديد وأضفها لـ My Voices، وهتشتغل بنفس الرقم أو رقم جديد (مرّره بـ `--voice`).
   - لو كانت صوت **مستنسخ/مصمَّم** على الحساب القديم: لازم تنسخه تاني بحساب جديد من تسجيلات Fatima اللي عندنا (Instant Voice Clone من حوالي 5-10 دقايق من `assets/games/learn_voice/ar/` + `assets/audio/voices/fatima/`)، أو تنقل الصوت من الحساب القديم لو بتسمح بكده (Voice sharing). النسخة هتكون **قريبة** مش مطابقة 100%، فلازم تسمع عينة جنب القديمة قبل ما نكمّل.
4. المفتاح بيتحط في متغير بيئة فقط (`ELEVENLABS_API_KEY`)، ما بيتكتبش في أي ملف.

## اللي لسه محتاج تسجيل
حوالي 270 جملة معلومات جديدة (الأسئلة اللي ما اتسجلتش) + أي جمل جديدة بعدها. بعد التسجيل: `node tools/game_voice/voiced.mjs` عشان اللعبة تبدأ تسألها، وبعدها `verify_voice.mjs`.
