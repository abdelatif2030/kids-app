import sys
sys.path.insert(0, 'tools')
from tr2 import tr2edits

tr2edits('lib/dashboard_screen.dart', [
    ("(أكملها)", "• ${st.title}${st.completed ? ' (finished)' : ''}${st.understoodChecked ? ' · answered its questions' : ''}"),
])
tr2edits('lib/journey/ui/home_tab.dart', [
    ("${p.reason}، ${p.doneToday", "${activityTitle(p.activity)}, ${p.reason}, ${p.doneToday ? context.tr('home.done') : context.tr('home.notYet')}"),
    ("أنهيت ${progress.completed} من $kLevelsPerLand مستويات", "${land.title}, finished ${progress.completed} of $kLevelsPerLand levels, ${progress.stars} stars"),
])
tr2edits('lib/journey/ui/home_tasks_screen.dart', [
    ("بانتظار التأكيد (${waiting.length})", "Waiting for confirmation (${waiting.length})"),
    ("تمت (${done.length})", "Done (${done.length})"),
])
tr2edits('lib/journey/ui/kit.dart', [("$stars من $max نجوم", "$stars of $max stars")])
tr2edits('lib/journey/ui/land_map_screen.dart', [
    ("${progress.completed} من $kLevelsPerLand مستويات", "${progress.completed} of $kLevelsPerLand levels"),
    ("مكتمل بـ ${state.bestStars} نجوم", "completed with ${state.bestStars} stars"),
    ("المستوى $n، ${activity.kindLabel}، $status", "Level $n, ${activity.kindLabel}, $status"),
])
tr2edits('lib/journey/ui/lesson_flow.dart', [("أجبت $right من $total من أول محاولة 👏", "You answered $right of $total right on the first try 👏")])
tr2edits('lib/journey/ui/me_tab.dart', [("${badge.title}، ${badge.description}", "${badge.title}, ${badge.description}")])
tr2edits('lib/journey/ui/memory_view.dart', [
    ("الأزواج: $_found من $_pairs", "Pairs: $_found of $_pairs"),
    ("بطاقة ${_cards[i]}", "Card ${_cards[i]}"),
    ("بطاقة مقلوبة رقم ${i + 1}", "Face-down card number ${i + 1}"),
])
tr2edits('lib/journey/ui/profile_forms.dart', [
    ("كل نشاط يستغرق نحو ${minutesFor(d.age)} دقائق لهذا العمر.", "Each activity takes about ${minutesFor(d.age)} minutes at this age."),
    ("العمر ${c.age} · ${store.progressOf(c.id).totalStars} نجمة", "Age ${c.age} · ${store.progressOf(c.id).totalStars} stars"),
    ("سيُحذف ملف «${widget.child.nickname}»", "“${widget.child.nickname}”'s profile and all their progress will be deleted from this device permanently."),
])
tr2edits('lib/journey/ui/quiz_view.dart', [
    ("${q.repeat} أشياء", "${q.repeat} things"),
    ("اللون ${colorNameOf(o.color!)}", "Color ${colorNameOf(o.color!)}"),
    ("شكل ${shapeNameOf(o.shape!.kind)}", "Shape ${shapeNameOf(o.shape!.kind)}"),
    ("السؤال ${_i + 1} من $total", "Question ${_i + 1} of $total"),
    ("ضع ${h.a} مع ${h.b} واعدّ الكل", "Put ${h.a} with ${h.b} and count them all"),
    ("عندنا ${h.a} وشطبنا ${h.b}، فكم بقي؟", "We have ${h.a} and crossed out ${h.b}. How many are left?"),
    ("${h.a} صفوف، في كل صف ${h.b}", "${h.a} rows, ${h.b} in each row"),
])
tr2edits('lib/journey/ui/report_screen.dart', [
    ("تقرير من تطبيق رحلتي", "Report from the Rehlaty app (version $version)\nType: $type\nPlace: $area\nDetails: ${note.trim().isEmpty ? '—' : note.trim()}\n"),
])
tr2edits('lib/journey/ui/sequence_view.dart', [
    ("الجولة ${_r + 1} من ${widget.rounds.length}", "Round ${_r + 1} of ${widget.rounds.length}"),
    ("رتّب الخطوات: ${_round.title}", "Put the steps in order: ${_round.title}"),
    ("الخطوة ${slot + 1}: ${steps[_placed[slot]]}", "Step ${slot + 1}: ${steps[_placed[slot]]}"),
    ("مكان الخطوة ${slot + 1} فارغ", "Step ${slot + 1} place is empty"),
])
tr2edits('lib/journey/ui/start_screen.dart', [("ابدأ اللعب: ${c.nickname}", "Start playing: ${c.nickname}")])
tr2edits('lib/library/activity_screens.dart', [
    ("${a.skill} · ${a.minutes} د · ${a.minAge}–${a.maxAge} سنة", "${a.skill} · ${a.minutes} min · ages ${a.minAge}–${a.maxAge}"),
    ("المواد: ${a.materials.isEmpty", "Materials: ${a.materials.isEmpty ? 'none' : a.materials.join(', ')}"),
])
tr2edits('lib/library/learning_summary.dart', [
    ("حرف ${l.letter} (${l.name})", "letter ${l.letter} (${l.name})"),
    ("كلمة ${v.ar}", "word ${v.ar}"),
    ("راجعوا معاً:", "Review together: ${needsLetters.join(', ')}. The “Today's review” button in the letters section collects them."),
])
tr2edits('lib/library/lesson_runner.dart', [("أجبت $right من $total من أول محاولة", "You answered $right of $total right on the first try")])
tr2edits('lib/library/vocab_screens.dart', [("${v.ar}، ${v.en}", "${v.ar}, ${v.en}")])
tr2edits('lib/literacy/exercises.dart', [
    ("اسم الحرف: ${l.name}.", "The letter's name: ${l.name}."),
    ("${l.letter} اسمه ${l.name}", "${l.letter} is called ${l.name}"),
    ("الصوت: ${l.soundFatha}", "The sound: ${l.soundFatha}"),
    ("صوت ${l.letter} هو ${l.soundFatha}", "The sound of ${l.letter} is ${l.soundFatha}"),
    ("أي صورة تبدأ بحرف", "Which picture starts with the letter “${l.letter}”?"),
    ("قل الكلمة ببطء", "Say the word slowly and listen to the first sound: ${right.word}."),
    ("تبدأ بحرف ${l.letter}", "${right.emoji} ${right.word} starts with the letter ${l.letter}"),
    ("أين حرف «${l.letter}» في كلمة", "Where is the letter “${l.letter}” in the word “${w.word}”?"),
    ("حرف ${l.letter} ${pos.label}", "The letter ${l.letter} is ${pos.label} in “${w.word}”"),
    ("قرأنا $target", "We read $target"),
])
tr2edits('lib/literacy/screens.dart', [
    ("مراجعة اليوم (${_due.length})", "Today's review (${_due.length})"),
    ("حرف ${l.name}${_states[l.letter]?.mastered", "Letter ${l.name}${_states[l.letter]?.mastered == true ? ', mastered' : ''}"),
    ("حرف ${l.name}، مقفل", "Letter ${l.name}, locked"),
    ("'حرف ${l.name}'", "Letter ${l.name}"),
    ("الحرف ${l.name}'", "The letter ${l.name}"),
    ("اسمه: ${l.name}", "Name: ${l.name}"),
    ("صوته: ${l.soundFatha}", "Sound: ${l.soundFatha}   ${l.soundDamma}   ${l.soundKasra}"),
    ("استمع إلى ${w.word}", "Listen to ${w.word}"),
    ("تمرين حرف ${l.name}", "Practice the letter ${l.name}"),
    ("تتبّع حرف ${letter.name}", "Trace the letter ${letter.name}"),
])
tr2edits('lib/literacy/tracing.dart', [("مساحة تتبّع حرف ${widget.letter.name}", "Tracing area for the letter ${widget.letter.name}")])
tr2edits('lib/literacy/word_tiles.dart', [
    ("أحسنت! ${_w.word} ${_w.emoji}", "Well done! ${_w.word} ${_w.emoji}"),
    ("الكلمة ${_i + 1} من ${widget.words.length}", "Word ${_i + 1} of ${widget.words.length}"),
    ("الحروف المرتبة: $_placed", "Letters placed: $_placed"),
    ("'حرف ${letterOf(_tiles[t])?.name ?? _tiles[t]}'", "Letter ${letterOf(_tiles[t])?.name ?? _tiles[t]}"),
])
tr2edits('lib/main.dart', [("فيديوهات لعمر $age", "Videos for age $age")])
tr2edits('lib/parent_screens.dart', [
    ("محاولات كثيرة. انتظر $left ثانية.", "Too many attempts. Wait $left seconds."),
    ("'$m دقيقة'", "$m minutes"),
])
tr2edits('lib/plan_screen.dart', [
    ("أكمل $done من $target هذا الأسبوع", "Finished $done of $target this week"),
    ("أكمل $done هذا الأسبوع (بدون هدف)", "Finished $done this week (no goal)"),
    ("الدروس المتاحة: $available", "Available lessons: $available"),
])
tr2edits('lib/progress_report.dart', [
    ("'$m د'", "$m min"),
    ("${m ~/ 60} س ${m % 60} د", "${m ~/ 60} h ${m % 60} min"),
    ("أكثر ما أخطأ فيه", " (most often wrong in: ${s.missed.join(loc('، '))})"),
    ("يحتاج إلى تدريب في", "Needs practice in ${s.skill.label}$detail. Try the “${s.skill.game}” game for a few rounds every day."),
    ("ينقص ${e.value - done}", "${e.value - done} more lessons in “${subject.label}” to reach this week's goal (${e.value})."),
    ("أتقن ${s.skill.label}. ما شاء الله!", "Has mastered ${s.skill.label}. Well done!"),
    ("ويمكنه الآن تجربة", "Has mastered ${s.skill.label} and can now try “${next.label}”."),
    ("لم يكمل درساً في", "No lesson finished in “${subjectById(id)?.label ?? id}” this week. Start with a short lesson from “My lessons”."),
    ("أسبوع ${_d(r.start)}", "Report ${childName == null ? '' : '$childName, '}week ${_d(r.start)} – ${_d(r.end)}"),
    ("الوقت في التعلم:", "Time learning: ${formatDuration(r.secondsInApp)} (${r.activeDays} active days)"),
    ("دروس مكتملة:", "Lessons finished: ${r.videosFinished}, game rounds: ${r.gameRounds}"),
    ("أتقن: ${r.mastered", "Mastered: ${r.mastered.map((s) => s.skill.label).join(', ')}"),
    ("يحتاج تدريباً:", "Needs practice: ${r.needsPractice.map((s) => s.skill.label).join(', ')}"),
])
tr2edits('lib/rest_screen.dart', [("تمديد ${SessionManager.extendMinutes} دقيقة", "Extend by ${SessionManager.extendMinutes} minutes")])
tr2edits('lib/stories/story_screens.dart', [
    ("تابع ${s.title}", "Continue ${s.title}"),
    ("${story.title}، ${story.description}", "${story.title}, ${story.description}, about $minutes minutes"),
    ("≈ $minutes د", "≈ $minutes min · ages ${story.minAge}–${story.maxAge} · ${story.isDeviceVoice ? 'demo device voice' : 'recording'}"),
    ("بعد $m دقيقة", "After $m minutes"),
    ("أسئلة عن «${s.title}»", "Questions about “${s.title}”"),
    ("مضى ${_mmss(pos)}", "Elapsed ${_mmss(pos)}"),
    ("المتبقي ${_mmss(_c.remainingSec)}", "Remaining ${_mmss(_c.remainingSec)}"),
    ("الراوي: ${s.narrator}", "Narrator: ${s.narrator}\n${s.themes.join(' · ')}"),
    ("توقفتَ عند", "You stopped at ${_mmss(_c.positionSec)}. Press play to continue"),
    ("الفصل ${i + 1}: ${s.chapters[i].title}", "Chapter ${i + 1}: ${s.chapters[i].title}"),
    ("السرعة ${_c.speed}x", "Speed ${_c.speed}x"),
])
tr2edits('lib/studio/story_pictures.dart', [
    ("اختر 3 صور لقصتك", "Pick 3 pictures for your story (${_pics.length} of 3)"),
    ("'الصورة ${i + 1}'", "Picture ${i + 1}"),
    ("مكان فارغ ${i + 1}", "Empty place ${i + 1}"),
])
tr2edits('lib/studio/studio_screens.dart', [("${c.kind.label} بتاريخ ${c.day}", "${c.kind.label} on ${c.day}")])
tr2edits('lib/subjects_screen.dart', [("${counts[s.id]} دروس", "${counts[s.id]} lessons")])
tr2edits('lib/teachers_availability.dart', [
    ("أُضيفت المواعيد", "Slots added (${slots.length})"),
    ("'${s.minutes} دقيقة'", "${s.minutes} minutes"),
    ("مدة الحصة $m دقيقة", "Lesson length: $m minutes"),
    ("لمدة $w أسابيع", "For $w weeks"),
])
tr2edits('lib/teachers_bookings.dart', [
    ("ولي الأمر: ${b.parentName}", "Parent: ${b.parentName}"),
    ("المدرس: ${b.teacherName}", "Teacher: ${b.teacherName}"),
    ("المادة: ${subjectById", "Subject: ${subjectById(b.subject)?.label ?? b.subject}"),
    ("الموعد: ${fmtDateTime(b.start!)}", "Time: ${fmtDateTime(b.start!)} (${b.minutes ?? ''} minutes, in your device's time)"),
    ("الوقت المطلوب: ${b.whenText}", "Requested time: ${b.whenText}"),
    ("السعر: ${b.priceEgp} جنيه للحصة", "Price: ${b.priceEgp} EGP per lesson (no payment inside the app)"),
    ("عمر الطفل: ${b.childAge}", "Child's age: ${b.childAge}"),
    ("ملاحظة: ${b.note}", "Note: ${b.note}"),
])
tr2edits('lib/teachers_directory.dart', [
    ("${t.priceEgp} جنيه للحصة", "${t.priceEgp} EGP per lesson"),
    ("'${t.lessonMinutes} دقيقة'", "${t.lessonMinutes} minutes"),
    ("خبرة ${t.experienceYears} سنوات", "${t.experienceYears} years of experience (stated by the teacher)"),
    ("من ${t.ageMin} إلى ${t.ageMax} سنوات", "Ages ${t.ageMin} to ${t.ageMax}"),
    ("${results.length} مدرس · الترتيب: ${_sort.label}", "${results.length} teachers · Sorted by: ${_sort.label}"),
    ("عرض المزيد (${results.length - page.length})", "Show more (${results.length - page.length})"),
    ("قارن ${_compare.length} مدرسين", "Compare ${_compare.length} teachers"),
    ("أقرب موعد:", "${(rating ?? RatingSummary.none).label}${earliestMs == null ? '' : ' · Earliest slot: ${fmtDateTime(DateTime.fromMillisecondsSinceEpoch(earliestMs!))}'}"),
    ("'$a سنوات'", "$a years"),
    ("'${t.priceEgp} جنيه'", "${t.priceEgp} EGP"),
    ("'${t.lessonMinutes} دقيقة'", "x") if False else ("(t) => t.lessonMinutes == null ? loc('غير محددة') : '${t.lessonMinutes} دقيقة'", "(t) => t.lessonMinutes == null ? loc('غير محددة') : tr2('${t.lessonMinutes} دقيقة', '${t.lessonMinutes} minutes')"),
])
tr2edits('lib/teachers_followup.dart', [
    ("مع ${booking.teacherName}", "With ${booking.teacherName}${booking.start == null ? '' : ' · ${fmtDateTime(booking.start!)}'}"),
    ("قيّم ${booking.teacherName}", "Rate ${booking.teacherName}"),
    ("'$i من 5'", "$i of 5"),
])
tr2edits('lib/teachers_market.dart', [("من 5 ($count تقييم)", "${average.toStringAsFixed(1)} of 5 ($count ratings)")])
tr2edits('lib/teachers_parent.dart', [
    ("${done.done.length} من ${done.total}", "${done.done.length} of ${done.total} (written by the teacher, not a verification badge)"),
    ("سياسة الإلغاء: ${widget.teacher.cancellationPolicy}", "Cancellation policy: ${widget.teacher.cancellationPolicy}"),
    ("من 5 · ${summary.count} تقييم", "★ ${summary.average.toStringAsFixed(1)} of 5 · ${summary.count} ratings (a real average from completed lessons' reviews)"),
    ("${fmtDateTime(s.start)} · ${s.minutes} د", "${fmtDateTime(s.start)} · ${s.minutes} min"),
    ("'${t.priceEgp} جنيه للحصة'", "${t.priceEgp} EGP per lesson"),
    ("${t.name}\n${fmtDateTime(s.start)}", "${t.name}\n${fmtDateTime(s.start)} · ${s.minutes} minutes"),
    ("السعر: $price", "Price: $price"),
    ("سياسة الإلغاء: ${t.cancellationPolicy}", "Cancellation policy: ${t.cancellationPolicy}"),
])
tr2edits('lib/teachers_requests.dart', [
    ("${r.budgetMin}–${r.budgetMax} جنيه للحصة", "${r.budgetMin}–${r.budgetMax} EGP per lesson"),
    ("حتى ${r.budgetMax} جنيه للحصة", "Up to ${r.budgetMax} EGP per lesson"),
    ("من ${r.budgetMin} جنيه للحصة", "From ${r.budgetMin} EGP per lesson"),
    ("'$a سنوات'", "$a years"),
    ("يبقى الطلب مفتوحاً $d يوماً", "The request stays open for $d days"),
    ("ملخص الاتفاق:", "Summary of the agreement:\n• Teacher: ${p.teacherName}\n• Price: ${p.priceEgp} EGP per lesson (${p.minutes} minutes)\n• Schedule: ${p.schedule.isEmpty ? loc('تُتفق لاحقاً') : p.schedule}\n\nThe booking is only confirmed after the teacher accepts the request and sends the lesson link. There is no payment inside the app."),
    ("من عرض على طلب: ${r.goal}", "From a proposal on a request: ${r.goal}"),
    ("'${p.priceEgp} جنيه · ${p.minutes} دقيقة", "${p.priceEgp} EGP · ${p.minutes} minutes${p.schedule.isEmpty ? '' : ' · ${p.schedule}'}"),
    ("أول خطوات: ${p.firstSteps}", "First steps: ${p.firstSteps}"),
    ("عرضك: ${_proposalStatus", "Your proposal: ${_proposalStatus(mine[r.id]!.status)}"),
    ("مدة الحصة $m دقيقة", "Lesson length: $m minutes"),
])
tr2edits('lib/teachers_teacher.dart', [
    ("السعر: ${p.priceNote}", "Price: ${p.priceNote}"),
    ("السيرة الذاتية: ${p.cvName}", "CV: ${p.cvName}"),
    ("'$m دقيقة'", "$m minutes"),
    ("اكتمال الملف: ${c.done.length} من ${c.total}", "Profile completeness: ${c.done.length} of ${c.total}"),
])
