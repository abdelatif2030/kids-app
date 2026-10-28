"""Tests of the tool's own logic with a fake provider. NOT tests of any real voice or of audio quality:
the bytes below are a synthetic stand-in to exercise file writing, and are never copied into the app."""
import os
import sys
import tempfile
import unittest

sys.path.insert(0, os.path.dirname(__file__))
import common  # noqa: E402
from providers import GoogleCloudTTS, ProviderError  # noqa: E402


class Plumbing(unittest.TestCase):
    def test_mp3_check(self):
        self.assertTrue(common.looks_like_mp3(b'ID3' + b'\0' * 2000))
        self.assertTrue(common.looks_like_mp3(b'\xff\xfb' + b'\0' * 2000))
        self.assertFalse(common.looks_like_mp3(b'{"error": "nope"}' * 100))
        self.assertFalse(common.looks_like_mp3(b'ID3'))

    def test_sheet_has_no_synthetic_isolated_sounds_to_generate(self):
        kinds = {r['kind'] for r in common.read_sheet()}
        self.assertTrue(common.NEVER_SYNTHETIC <= kinds)

    def test_google_request_shape_and_key_handling(self):
        p = GoogleCloudTTS(api_key=None)
        os.environ.pop('GOOGLE_TTS_API_KEY', None)
        p.api_key = None
        with self.assertRaises(ProviderError):
            p.synthesize('x', 'ar', 'ar-XA-Wavenet-A', 'ar-XA')
        b = p.request_body('قَمَر', 'ar-XA', 'ar-XA-Wavenet-A', 0.9)
        self.assertEqual(b['voice'], {'languageCode': 'ar-XA', 'name': 'ar-XA-Wavenet-A'})
        self.assertEqual(b['audioConfig']['audioEncoding'], 'MP3')

    def test_no_key_in_the_repository(self):
        for root, _, files in os.walk(common.ROOT):
            if any(x in root for x in ('node_modules', '.git', 'build', '.dart_tool')):
                continue
            for f in files:
                if f.endswith(('.py', '.json', '.md', '.dart', '.yaml')):
                    s = open(os.path.join(root, f), encoding='utf-8', errors='ignore').read()
                    self.assertNotIn('AI' + 'za', s, f'{f} looks like it contains a Google API key')

    def test_generator_writes_license_unconfirmed_and_pending_reviews(self):
        import generate
        old_manifest, old_sheet = generate.MANIFEST, generate.read_sheet
        with tempfile.TemporaryDirectory() as d:
            generate.MANIFEST = os.path.join(d, 'manifest.json')
            generate.ROOT = d
            generate.read_sheet = lambda: [{'id': 'ar.letter.0628.name', 'language': 'ar', 'kind': 'letterName', 'text': 'باء',
                                            'file_to_create': 'assets/audio/ar/letters/ar.letter.0628.name.mp3'},
                                           {'id': 'ar.letter.0628.sound', 'language': 'ar', 'kind': 'letterSound', 'text': 'بَ',
                                            'file_to_create': 'assets/audio/ar/letters/ar.letter.0628.sound.mp3'}]
            class Fake(GoogleCloudTTS):
                def synthesize(self, *a, **k):
                    return b'ID3' + b'\0' * 3000
            generate.PROVIDERS = {'google-cloud-tts': Fake}
            sys.argv = ['generate.py', '--voice-ar', 'ar-XA-Wavenet-B']
            generate.main()
            m = common.load_json(generate.MANIFEST, {})
            e = m['assets']['ar.letter.0628.name']
            self.assertEqual((e['source'], e['audioReview'], e['languageReview']), ('generated', 'pending', 'pending'))
            self.assertTrue(e['license'].startswith('unconfirmed'))
            self.assertNotIn('ar.letter.0628.sound', m['assets'])  # the isolated sound was not synthesized
        generate.MANIFEST, generate.read_sheet = old_manifest, old_sheet


if __name__ == '__main__':
    unittest.main()
