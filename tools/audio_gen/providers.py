"""Text-to-speech providers for the offline audio tools.

Keys come ONLY from environment variables on the developer's machine; they are never written to a file
and never shipped in the app. The app only bundles the resulting audio files.

STATUS: GoogleCloudTTS was written from Google's public REST API shape and has NOT been run against the real
service from this project (no key in the build environment, and the official docs host was not reachable
there). Run `generate.py --dry-run` first, then with a key on ONE item, and listen before generating more.
"""
import base64
import json
import os
import urllib.error
import urllib.request


class ProviderError(Exception):
    pass


class Provider:
    name = 'base'
    license_note = 'unconfirmed'

    def synthesize(self, text, lang, voice_id, locale, rate=1.0):
        """Returns MP3 bytes."""
        raise NotImplementedError


class GoogleCloudTTS(Provider):
    """https://texttospeech.googleapis.com/v1/text:synthesize

    Needs GOOGLE_TTS_API_KEY (an API key restricted to the Text-to-Speech API) in the environment.
    Terms: Google Cloud Platform Terms of Service and the service terms. The owner must confirm that storing
    and shipping the generated audio inside the app is allowed before any file is approved; until then every
    generated file is recorded with the license 'unconfirmed: ...' and cannot be approved.
    """
    name = 'google-cloud-tts'
    license_note = 'unconfirmed: Google Cloud TTS output, the owner has not confirmed the terms for bundling the audio in the app'
    endpoint = 'https://texttospeech.googleapis.com/v1/text:synthesize'

    def __init__(self, api_key=None):
        self.api_key = api_key or os.environ.get('GOOGLE_TTS_API_KEY')

    def request_body(self, text, locale, voice_id, rate=1.0):
        return {
            'input': {'text': text},
            'voice': {'languageCode': locale, 'name': voice_id},
            'audioConfig': {'audioEncoding': 'MP3', 'speakingRate': rate, 'sampleRateHertz': 24000},
        }

    def synthesize(self, text, lang, voice_id, locale, rate=1.0):
        if not self.api_key:
            raise ProviderError('Set GOOGLE_TTS_API_KEY in your environment (never in a file that is committed).')
        body = json.dumps(self.request_body(text, locale, voice_id, rate)).encode('utf-8')
        req = urllib.request.Request(
            self.endpoint, data=body,
            headers={'Content-Type': 'application/json', 'X-Goog-Api-Key': self.api_key})
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                data = json.loads(r.read().decode('utf-8'))
        except urllib.error.HTTPError as e:
            raise ProviderError(f'HTTP {e.code}: {e.read().decode("utf-8", "replace")[:300]}')
        except urllib.error.URLError as e:
            raise ProviderError(f'network error: {e.reason}')
        audio = data.get('audioContent')
        if not audio:
            raise ProviderError('the response had no audioContent')
        return base64.b64decode(audio)


PROVIDERS = {'google-cloud-tts': GoogleCloudTTS}
