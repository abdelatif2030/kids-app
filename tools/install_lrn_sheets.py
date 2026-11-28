# Cuts Muse's wave-1 LRN sheets (17 sheets, 4x3 cells, 202 words) into assets/games/art/<picture_file_id>.webp.
# The cell order is the order of WAVE1_LRN_WORDS.csv (row-major, 12 per sheet), as Muse's README states.
#   python -X utf8 tools/install_lrn_sheets.py <dir with LRN-01.png ...> <WAVE1_LRN_WORDS.csv>
import csv, os, subprocess, sys
from concurrent.futures import ThreadPoolExecutor

src, csvp = sys.argv[1], sys.argv[2]
rows = list(csv.DictReader(open(csvp, encoding='utf-8-sig')))
ids = [r['picture_file_id'] for r in rows]
jobs = []
for i in range(0, len(ids), 12):
    names = ids[i:i + 12]
    names += ['-'] * (12 - len(names))
    jobs.append((os.path.join(src, 'LRN-%02d.png' % (i // 12 + 1)), names))


def run(j):
    sheet, names = j
    r = subprocess.run([sys.executable, '-X', 'utf8', 'tools/cut_sheet.py', sheet, '4', '3', 'assets/games/art', ','.join(names), '640'], capture_output=True, text=True)
    return sheet, r.returncode, (r.stderr or '')[-200:]


with ThreadPoolExecutor(4) as ex:
    for s, rc, err in ex.map(run, jobs):
        print(os.path.basename(s), 'ok' if rc == 0 else 'FAIL ' + err)
missing = [i for i in ids if not os.path.exists(f'assets/games/art/{i}.webp')]
print('cut', len(ids) - len(missing), 'of', len(ids), 'missing', missing)
