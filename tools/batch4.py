import sys
sys.path.insert(0, 'tools')
from tr2 import tr2edits
from rep import rep

tr2edits('lib/library/lesson_engine.dart', [
    ("اضغط «استمع» لتسمع", "Press “Listen” to hear the word again. The word: ${t.ar}."),
    ("اقرأ الكلمة ببطء: ${t.ar}.", "Read the word slowly: ${t.ar}."),
    ("كم ${t.ar} في الصورة؟", "How many ${t.en ?? t.ar} are in the picture?"),
    ("'كم ${t.ar}؟'", "How many ${t.en ?? t.ar}?"),
    ("العدد $n", "The number is $n"),
])
tr2edits('lib/teachers_requests.dart', [
    ("عمر الطفل: ${r.childAge}", "Child's age: ${r.childAge}"),
    ("الطريقة: ${formatLabel(r.format)}", "Format: ${formatLabel(r.format)}"),
    ("المواعيد: ${r.schedule}", "Schedule: ${r.schedule}"),
    ("الميزانية: ${budgetText(r)}", "Budget: ${budgetText(r)}"),
    ("الأسلوب: ${r.approach}", "Approach: ${r.approach}"),
    ("الأسلوب المفضل: ${r.approach}", "Preferred approach: ${r.approach}"),
    ("مفتوح حتى ${fmtDay(", "Open until ${fmtDay(DateTime.fromMillisecondsSinceEpoch(r.expiresMs))}"),
    ("الميزانية: ${budgetText(widget.request)}", "Budget: ${budgetText(widget.request)}"),
])
tr2edits('lib/teachers_directory.dart', [
    ("${t.experienceYears} سنوات'", "${t.experienceYears} years"),
])
tr2edits('lib/journey/lands.dart', [
    ("${land.title} · المستوى $level", "${land.title} · Level $level"),
])
tr2edits('lib/stories/story_screens.dart', [
    ("${h.day} · ${h.completed", "${h.day} · ${h.completed ? 'finished' : 'not finished'}"),
])
rep('lib/journey/ui/privacy_screen.dart', [
    ("Expanded(child: Text(item, style: const TextStyle(fontSize: 15))),", "Expanded(child: Text(loc(item), style: const TextStyle(fontSize: 15))),"),
])
rep('lib/studio/story_pictures.dart', [
    ("Text(_prompts[_step].$1,", "Text(loc(_prompts[_step].$1),"),
    ("Text(_prompts[_step].$2, style", "Text(loc(_prompts[_step].$2), style"),
    ("AppAudio.say('${_prompts[_step].$1}. ${_prompts[_step].$2}')", "AppAudio.say('${loc(_prompts[_step].$1)}. ${loc(_prompts[_step].$2)}', lang: AppLocale.instance.code)"),
])
rep('lib/teachers_directory.dart', [
    ("const Text(kIdentityBadgeMeaning, style", "Text(loc(kIdentityBadgeMeaning), style"),
    ("const Text(kQualificationBadgeMeaning, style", "Text(loc(kQualificationBadgeMeaning), style"),
    ("_badge(context, loc('الهوية تم التحقق منها'), kIdentityBadgeMeaning)", "_badge(context, loc('الهوية تم التحقق منها'), loc(kIdentityBadgeMeaning))"),
    ("_badge(context, loc('المؤهل تم التحقق منه'), kQualificationBadgeMeaning)", "_badge(context, loc('المؤهل تم التحقق منه'), loc(kQualificationBadgeMeaning))"),
])
