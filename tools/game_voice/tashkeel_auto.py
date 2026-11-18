# -*- coding: utf-8 -*-
# Builds the diacritized reading of NEW sentences word by word from the readings that already exist (each plain word -> its most common reading),
# plus a small hand-written dictionary of the words that never appeared before (tashkeel_words.py). Used for the 2026-11-18 topic facts.
import json, re, collections, os
strip = lambda s: re.sub('[ً-ْـٰ]', '', s)


def build(M, extra):
    cnt = collections.defaultdict(collections.Counter)
    for k, v in M.items():
        kw, vw = k.split(' '), v.split(' ')
        if len(kw) == len(vw):
            for a, b in zip(kw, vw):
                if strip(a) == strip(b):
                    cnt[a][b] += 1
    d = {w: c.most_common(1)[0][0] for w, c in cnt.items()}
    d.update(extra)
    return d


def compose(sentence, d):
    out, unknown = [], []
    for w in sentence.split(' '):
        tail = ''
        core = w
        while core and core[-1] in '؟!،.':
            tail = core[-1] + tail
            core = core[:-1]
        if core in d:
            out.append(d[core] + tail)
        elif strip(core) != core:
            out.append(w)
        else:
            unknown.append(core)
            out.append(w)
    return ' '.join(out), unknown
