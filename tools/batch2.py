import sys
sys.path.insert(0, 'tools')
from tr2 import tr2edits

tr2edits('lib/journey/ui/activity_screen.dart', [
    ("ممتاز يا ${child.nickname}! نجوم كاملة", "Excellent, ${child.nickname}! All the stars 🌟"),
    ("رائع يا ${child.nickname}! أحسنت", "Great, ${child.nickname}! Well done 👏"),
    ("أحسنت يا ${child.nickname}! أكملت المغامرة", "Well done, ${child.nickname}! You finished the adventure 🎉"),
    ("${outcome.stars} من 3 نجوم", "${outcome.stars} of 3 stars"),
    ("أجبت ${outcome.firstTry} من ${outcome.total} من أول محاولة", "You answered ${outcome.firstTry} of ${outcome.total} right on the first try"),
    ("+${outcome.xpGain} نقطة خبرة", "+${outcome.xpGain} XP"),
    ("شارة جديدة: ${b.title}", "New badge: ${b.title}"),
    ("فتحتَ ${a.name} لشخصيتك!", "You unlocked ${a.name} for your character! Find it in “Me”"),
])
tr2edits('lib/journey/ui/admin_screen.dart', [
    ("$kLevelsPerLand مستويات · أسئلة مخصصة: ", "$kLevelsPerLand levels · custom questions: ${store.custom.where((q) => q.landId == land.id).length}"),
    ("الأعمار المناسبة: ${ages[0]} إلى ${ages[1]}", "Suitable ages: ${ages[0]} to ${ages[1]}"),
    ("المستوى ${q.difficulty} · ", "${landById(q.landId).title} · Level ${q.difficulty} · Ages ${q.minAge}–${q.maxAge}\n${[for (var i = 0; i < q.options.length; i++) i == q.correct ? '✓ ${q.options[i]}' : q.options[i]].join(' | ')}"),
    ("'الخيار ${i + 1}'", "Option ${i + 1}"),
    ("المستوى الذي يظهر فيه: $_level", "Level it appears in: $_level"),
    ("الأعمار: ${_ages.start.round()} إلى ${_ages.end.round()}", "Ages: ${_ages.start.round()} to ${_ages.end.round()}"),
    ("العدد المطلوب: $value", "${b.description}\nRequired number: $value"),
    ("${c.nickname} · عمر ${c.age}", "${c.nickname} · age ${c.age}"),
    ("الترتيب: ${(c.plan.isEmpty", "Order: ${(c.plan.isEmpty ? [for (final l in kLands) l.id] : c.plan).map((id) => landById(id).title).join(' → ')}\n${c.dailyCount} activities a day · ${['Easier', 'Normal', 'Harder'][c.bias + 1]} · about ${minutesFor(c.age)} minutes each"),
])
tr2edits('lib/journey/ui/me_tab.dart', [
    ("المستوى ${progress.explorerLevel} · ${progress.xp} نقطة خبرة", "Level ${progress.explorerLevel} · ${progress.xp} XP"),
    ("من 100 للمستوى التالي", "${progress.xpIntoLevel} of 100 to the next level"),
    ("${a.name}، تُفتح عند ${a.starsNeeded} نجمة", "${a.name}, unlocks at ${a.starsNeeded} stars"),
    ("$title: $done من $target", "$title: $done of $target${reached ? ', reached' : ''}"),
    ("${badge.title}، تم الحصول عليها", "${badge.title}, earned"),
])
