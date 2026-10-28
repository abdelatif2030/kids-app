import sys, glob, re
sys.path.insert(0, 'tools')
from tr2 import tokens
AR = re.compile(r'[؀-ۿ]')
EX = ('lib/l10n/', 'letters_data', 'vocab.dart', 'story_data', 'journey/content.dart', 'library/activities.dart')
only = sys.argv[1:]
for f in sorted(glob.glob('lib/**/*.dart', recursive=True)):
    if any(e in f for e in EX): continue
    if only and not any(o in f for o in only): continue
    src = open(f, encoding='utf-8').read()
    for s, e in tokens(src):
        lit = src[s:e]
        if not AR.search(lit): continue
        # already inside loc( or tr2( ?
        before = src[max(0, s - 6):s]
        if before.endswith('loc(') or before.endswith('tr2('): continue
        line = src.count('\n', 0, s) + 1
        # skip literal whose only Arabic is inside nested ${ loc(...) }? keep simple
        print(f'{f}:{line}: {lit}')
