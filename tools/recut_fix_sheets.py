# Re-cuts only the sheets in a fix delivery (EXE-* and EXP-*): python -X utf8 tools/recut_fix_sheets.py <dir with the PNGs>
import glob, os, sys
from concurrent.futures import ProcessPoolExecutor
sys.path.insert(0, 'tools')
import install_learn_sheets as t


def main():
    root = sys.argv[1]
    exe = t.parse('docs/EXAMPLES_IMAGE_PROMPTS_PER_EXAMPLE.md', 'EXE', r'grid of (\d+) columns x (\d+) rows')
    exp = t.parse('docs/EXAMPLES_IMAGE_PROMPTS.md', 'EXP', r'grid of (\d+) columns x (\d+) rows')
    jobs = []
    for p in sorted(glob.glob(os.path.join(root, 'EXE-*.png'))):
        sid = os.path.basename(p)[:-4]
        c, r, n = exe[sid]
        jobs.append((p, c, r, n, 'exe'))
    for p in sorted(glob.glob(os.path.join(root, 'EXP-*.png'))):
        sid = os.path.basename(p)[:-4]
        c, r, n = exp[sid]
        jobs.append((p, c, r, n, 'exp'))
    with ProcessPoolExecutor(6) as ex:
        for res in ex.map(t.cut_scenes, jobs):
            print(os.path.basename(res[0]), len(res[1]), 'rejected cells:', res[2], flush=True)


if __name__ == '__main__':
    main()
