import sys
sys.path.insert(0, 'tools')
from tr2 import tr2edits

tr2edits('lib/journey/content.dart', [
    ("أي صورة تبدأ بحرف «${item.$1}»؟", "Which picture starts with the letter “${item.$1}”?"),
    ("فكّر في صوت الحرف", "Think of the sound of the letter “${item.$1}”, like “${item.$2}”."),
    ("بأي حرف تبدأ كلمة", "Which letter does the word “${item.$2}” start with?"),
    ("انطق «${item.$2}» ببطء", "Say “${item.$2}” slowly and listen to the first sound."),
    ("ابدأ من $a وعُدّ $b خطوات للأمام.", "Start at $a and count $b steps forward."),
    ("ابدأ من $a وارجع $b خطوات للخلف.", "Start at $a and go back $b steps."),
    ("اجمع $a ما مقداره $b مرات.", "Add $a together $b times."),
    ("اختر اللون ${right.$1}", "Pick the color ${loc(right.$1)}"),
    ("ابحث عن اللون ${right.$1}.", "Look for the color ${loc(right.$1)}."),
    ("اختر الشكل: ${right.$2}", "Pick the shape: ${loc(right.$2)}"),
    ("ابحث عن ${right.$2}.", "Look for the ${loc(right.$2)}."),
    ("اختر ${s[0].$2} لونها ${c[0].$1}", "Pick the ${loc(c[0].$1)} ${loc(s[0].$2)}"),
    ("يجب أن يكون الشكل ${s[0].$2} واللون ${c[0].$1} معاً.", "It must be a ${loc(s[0].$2)} and ${loc(c[0].$1)} at the same time."),
    ("معناها بالعربية: ${item.$2}.", "Its meaning in Arabic: ${item.$2}."),
    ("أيّ صورة هي «${item.$1}»؟", "Which picture is “${item.$1}”?"),
    ("ما الرقم الناقص؟", "Which number is missing?   $start , ${start + 1} , ?"),
])
