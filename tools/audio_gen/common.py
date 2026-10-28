import csv
import hashlib
import json
import os
import struct

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
SHEET = os.path.join(ROOT, 'docs', 'AUDIO_RECORDING_SHEET.csv')
MANIFEST = os.path.join(ROOT, 'assets', 'audio', 'manifest.json')
EVAL = os.path.join(ROOT, 'assets', 'audio', 'eval_set.json')
CANDIDATES = os.path.join(os.path.dirname(__file__), 'candidates.json')

# Isolated sounds are never generated with a synthetic voice: it cannot say them correctly.
NEVER_SYNTHETIC = {'letterSound', 'phonics'}


def read_sheet():
    with open(SHEET, encoding='utf-8', newline='') as f:
        return list(csv.DictReader(f))


def load_json(path, default):
    try:
        with open(path, encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        return default


def save_json(path, obj):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(obj, f, ensure_ascii=False, indent=2)
        f.write('\n')


def looks_like_mp3(data: bytes) -> bool:
    """Cheap sanity check: an ID3 tag or an MPEG frame sync, and more than a few hundred bytes."""
    if len(data) < 800:
        return False
    return data[:3] == b'ID3' or (data[0] == 0xFF and (data[1] & 0xE0) == 0xE0)


def sha256(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()
