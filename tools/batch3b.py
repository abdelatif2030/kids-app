import sys
sys.path.insert(0, 'tools')
from tr2 import tr2edits
tr2edits('lib/teachers_parent.dart', [
    ("${s.minutes} د'", "${fmtDateTime(s.start)} · ${s.minutes} min"),
    (r"${t.name}\n${fmtDateTime(s.start)}", "${t.name}\n${fmtDateTime(s.start)} · ${s.minutes} minutes"),
])
