#!/usr/bin/env python3
"""Generate a SMALL comparison set: the same real Rehlaty phrases through each candidate voice.

  GOOGLE_TTS_API_KEY=... python3 tools/audio_gen/compare.py            # all candidates, ~20 phrases
  python3 tools/audio_gen/compare.py --dry-run                           # prints what would be sent, no network

Writes assets/audio/comparison/<voiceId>/<phrase>.mp3 and assets/audio/comparison/index.json (every sample marked
temporary). Then run the app: Parent settings -> Sound and learning -> Voice comparison.
Isolated letter sounds are NOT sent to a synthetic voice (see common.NEVER_SYNTHETIC); their phrases are skipped.
"""
import argparse
import os
import sys

sys.path.insert(0, os.path.dirname(__file__))
from common import ROOT, CANDIDATES, EVAL, NEVER_SYNTHETIC, load_json, save_json, looks_like_mp3  # noqa: E402
from providers import PROVIDERS, ProviderError  # noqa: E402

# Categories of eval_set.json that make a fair comparison, and how many phrases of each.
WANT = {
    'arabic_letter_name': 3, 'difficult_consonant_word': 3, 'shadda': 2, 'sukoon': 2, 'tanween': 1, 'long_vowels': 2,
    'arabic_instruction': 2, 'arabic_number': 2, 'story': 2, 'long_sentence_punctuation': 1,
    'english_letter_name': 2, 'english_vocabulary': 3, 'mixed_label': 1,
}
SKIP_CATEGORIES = {'arabic_letter_sound', 'arabic_short_vowels', 'similar_letters', 'english_phonics'}  # isolated sounds


def pick_phrases():
    samples = load_json(EVAL, {}).get('samples', [])
    out, seen = [], {}
    for s in samples:
        c = s['category']
        if c in SKIP_CATEGORIES or c not in WANT:
            continue
        if seen.get(c, 0) >= WANT[c]:
            continue
        seen[c] = seen.get(c, 0) + 1
        out.append(s)
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--dry-run', action='store_true')
    ap.add_argument('--voice', help='only this voice id')
    ap.add_argument('--out', default=os.path.join(ROOT, 'assets', 'audio', 'comparison'))
    a = ap.parse_args()
    cands = load_json(CANDIDATES, {}).get('candidates', [])
    phrases = pick_phrases()
    index = load_json(os.path.join(a.out, 'index.json'), {'samples': []})
    index['note'] = 'Real audio samples of candidate voices, written by tools/audio_gen/compare.py. TEMPORARY TESTS, never approved assets.'
    done = {(s['voiceId'], s['id']) for s in index.get('samples', [])}
    n = 0
    for c in cands:
        if a.voice and c['voiceId'] != a.voice:
            continue
        prov = PROVIDERS[c['provider']]()
        for s in phrases:
            lang = 'ar' if s['lang'] in ('ar', 'mixed') else s['lang']
            if lang != c['lang'] or (s['lang'] == 'mixed' and c['lang'] != 'en'):
                continue
            if (c['voiceId'], s['id']) in done:
                continue
            rel = f"{c['voiceId']}/{s['id']}.mp3"
            print(('DRY ' if a.dry_run else '') + f"{c['voiceId']:28} {s['id']} {s['text'][:40]}")
            if a.dry_run:
                continue
            try:
                data = prov.synthesize(s['text'], c['lang'], c['voiceId'], c['locale'])
            except ProviderError as e:
                print('  ERROR:', e)
                sys.exit(2)
            if not looks_like_mp3(data):
                print('  ERROR: the response is not an MP3 stream; not saved')
                continue
            path = os.path.join(a.out, rel)
            os.makedirs(os.path.dirname(path), exist_ok=True)
            with open(path, 'wb') as f:
                f.write(data)
            index['samples'].append({
                'id': s['id'], 'category': s['category'], 'lang': c['lang'], 'text': s['text'],
                'provider': c['provider'], 'voiceId': c['voiceId'], 'locale': c['locale'],
                'file': 'assets/audio/comparison/' + rel, 'temporary': True,
            })
            n += 1
    if not a.dry_run:
        save_json(os.path.join(a.out, 'index.json'), index)
    print(f'{n} samples written' if not a.dry_run else 'dry run: nothing written')


if __name__ == '__main__':
    main()
