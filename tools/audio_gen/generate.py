#!/usr/bin/env python3
"""Generate audio FILES for content items with the chosen voice, as a first draft for human review.

  GOOGLE_TTS_API_KEY=... python3 tools/audio_gen/generate.py --voice-ar ar-XA-Wavenet-B --voice-en en-US-Neural2-C --limit 20
  python3 tools/audio_gen/generate.py --dry-run

What it does:  for each item of docs/AUDIO_RECORDING_SHEET.csv that has no file yet, synthesizes it, saves the MP3
at the path in the sheet and adds an entry to assets/audio/manifest.json with source 'generated', the provider,
the voice, license 'unconfirmed: ...', and both reviews 'pending'. A generated file is NEVER approved by this tool:
approval needs the review screen, two named people and a confirmed license.
Never generated: isolated letter sounds and phonics (a synthetic voice cannot model them: record them with a human).
"""
import argparse
import os
import sys

sys.path.insert(0, os.path.dirname(__file__))
from common import ROOT, MANIFEST, NEVER_SYNTHETIC, load_json, read_sheet, save_json, looks_like_mp3, sha256  # noqa: E402
from providers import PROVIDERS, ProviderError  # noqa: E402

LOCALES = {'ar': 'ar-XA', 'en': 'en-US'}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--provider', default='google-cloud-tts')
    ap.add_argument('--voice-ar')
    ap.add_argument('--voice-en')
    ap.add_argument('--limit', type=int, default=20, help='how many items in this run (generate in small batches)')
    ap.add_argument('--kind', help='only this kind, e.g. letterName, word, number')
    ap.add_argument('--rate', type=float, default=0.9, help='speaking rate; do not use extreme values')
    ap.add_argument('--dry-run', action='store_true')
    a = ap.parse_args()
    voices = {'ar': a.voice_ar, 'en': a.voice_en}
    manifest = load_json(MANIFEST, {'version': 1, 'assets': {}})
    manifest.setdefault('assets', {})
    prov = PROVIDERS[a.provider]()
    n = 0
    for row in read_sheet():
        if n >= a.limit:
            break
        if row['kind'] in NEVER_SYNTHETIC or (a.kind and row['kind'] != a.kind):
            continue
        if row['id'] in manifest['assets'] and manifest['assets'][row['id']].get('file'):
            continue
        voice = voices.get(row['language'])
        if not voice:
            continue
        path = os.path.join(ROOT, row['file_to_create'])
        print(('DRY ' if a.dry_run else '') + f"{row['id']:34} {voice:26} {row['text']}")
        if a.dry_run:
            n += 1
            continue
        try:
            data = prov.synthesize(row['text'], row['language'], voice, LOCALES[row['language']], a.rate)
        except ProviderError as e:
            print('  ERROR:', e)
            sys.exit(2)
        if not looks_like_mp3(data):
            print('  ERROR: not an MP3 stream; skipped')
            continue
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, 'wb') as f:
            f.write(data)
        old = manifest['assets'].get(row['id'], {})
        manifest['assets'][row['id']] = {
            'file': row['file_to_create'], 'source': 'generated', 'provider': prov.name, 'voice': voice,
            'license': prov.license_note, 'audioReview': 'pending', 'languageReview': 'pending',
            'version': int(old.get('version', 0)) + 1, 'sha256': sha256(data),
        }
        n += 1
    if not a.dry_run:
        save_json(MANIFEST, manifest)
    print(f'{n} items {"listed" if a.dry_run else "generated"}. Next: listen, then review in the app (Parent settings -> Sound and learning -> Audio review).')


if __name__ == '__main__':
    main()
