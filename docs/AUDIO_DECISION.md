# Future voice decision (no provider added yet)

Status today (read it from **Parent settings -> Sound and learning -> Lesson audio status**, which counts the real data):
no approved human recordings, no generated files shipped, the device voice stands in for names and words,
and isolated letter sounds are silent until a reviewed recording exists.

| Option | Naturalness for Arabic | Licensing | Cost | Credentials | Notes |
|---|---|---|---|---|---|
| Device voice (now) | Not judged by a person yet; varies by phone and Android version | Nothing to license; speech is made on the phone | Free | None | Cannot say isolated sounds (بَ) correctly, so the app never uses it for them. Needs listening on real phones. |
| Professionally recorded speech | Best, if a native speaker is chosen and reviewed | A written agreement that lets the app ship the files forever | Per item or per hour of studio time (360 items ~ a short session) | None in the app | Best for letter sounds. Needs an audio review and a language review before approval. |
| Cloud TTS (e.g. Google Cloud Text-to-Speech) | Must be listened to by a native speaker; a successful API call proves nothing | The provider's terms must allow storing and shipping the files in an app. Not verified here (the docs were not reachable) | Priced per character; about 4,500 characters for the word and name list | An API key kept only in the developer's environment, never in the app or the repository | Fine for words and names after review; unsuitable for isolated sounds. Files are generated offline by `tools/audio_gen`, which has not been run against the real service. |

Decision criteria: license that allows shipping, cost, who holds the key, native-speaker approval, and offline playback.
Recommendation: record the 28 letter sounds and names with a human speaker; consider reviewed cloud-generated files
for words only after a native speaker approves a sample set; keep the device voice as a labelled temporary stand-in.
Nothing here is approved. Approval needs a file, a confirmed license and two human reviews.
