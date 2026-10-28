# Voice research, provider options and workflow

**Read this first: what could and could not be verified.** The research was done from a cloud session whose network
allows only some hosts. `docs.cloud.google.com`, `learn.microsoft.com` and `docs.aws.amazon.com` were **not reachable**
(DNS failed), so no official voice list, pricing page or terms page could be read. `cloud.google.com/text-to-speech/pricing`
returned only its title. What follows comes from web-search result snippets and forum posts and is labelled
**unverified**: confirm every item on the official page before relying on it. No voice was listened to (no audio hardware here),
and no audio was generated (no API key). Nothing in this file is a tested result of a real voice.

## 1. Candidates

| Candidate | Arabic | English | What the snippets said (unverified) | Rights / terms | Fit |
|---|---|---|---|---|---|
| Google Cloud Text-to-Speech | `ar-XA` (Arabic, documented as one locale; Modern Standard Arabic expected, confirm) | `en-US` etc. | Arabic families: `ar-XA-Standard-A..D`, `ar-XA-Wavenet-A..D` (A, D female; B, C male per snippet), and Chirp 3 HD names such as `ar-XA-Chirp3-HD-Achernar` (female). **No Neural2 voice for Arabic** was listed. | A Google developer forum answer says audio made with Text-to-Speech may be used in applications or media under the Google Cloud Platform Terms, no attribution required. Another thread says the terms forbid using the output to train a competing TTS. **Not read from the official terms: confirm.** | Dynamic instructions, words, stories: likely suitable. Isolated sounds: not suitable (see 3). |
| Microsoft Azure AI Speech | Arabic locales exist (e.g. `ar-SA`, `ar-EG`); voice names unconfirmed | many | Third-party pages quote about $15 per million characters for neural voices and conflicting free tiers (500,000 vs 5,000,000 characters a month). | A Microsoft Q&A answer: personal and commercial use allowed, not on free initial credits. Unconfirmed. | Worth comparing for Arabic MSA (`ar-SA`). |
| Amazon Polly | Arabic voices exist (names and neural/standard support unconfirmed) | yes | A page quoted about $16 per million characters. Unconfirmed. | Unconfirmed. | Worth comparing. |
| Human recordings by a skilled native speaker | any, with diacritics | any | n/a | Full control: a written agreement that grants the app the right to ship, including commercial use. | **Required** for isolated letter sounds, letter names and the first words; the best choice for everything early. |
| Existing public-domain / licensed recordings | rare for Arabic phonics | some | n/a | Each file needs a verified license; none was found or downloaded. Search results are not a license. | None adopted. |

Chosen direction (not a verified decision): **human recordings** for letter names, isolated sounds and the first vocabulary;
a **cloud neural/WaveNet voice** for instructions, longer sentences and stories, **only after the comparison below sounds acceptable to people**;
English tested separately (likely a Neural2 voice). No provider is "approved".

## 2. Costs (formula, because no price could be verified)
Volume of the real content: Arabic items about 610 characters, English items about 630 characters (360 items in total, isolated
sounds excluded from synthesis), the 8 stories about 3,300 characters of chapter text. In total about **4,500 characters**.
Cost = characters / 1,000,000 x (documented price per million). At the prices the snippets quote (around $15-$16 per million) this is a few cents,
and the free allowances of the providers likely cover it. Confirm real prices before relying on this; the cost is not the obstacle,
the review and the recording are.

## 3. Why isolated sounds are never synthesized
A letter's isolated sound (e.g. بَ /ba/) cannot be requested reliably from a general TTS engine: it reads the letter name, adds a vowel
or a syllable, or spells it. The manifest marks sounds and phonics `deviceVoiceAllowed = false` and `syntheticNotAllowed`; the app,
the generator (`NEVER_SYNTHETIC`) and the review screen all refuse them. Record them with a human.

## 4. The workflow that was built
1. `docs/AUDIO_RECORDING_SHEET.csv`: all 360 items with the exact file name and pronunciation note (for a speaker or the generator).
2. `tools/audio_gen/compare.py`: sends ~20 real Rehlaty phrases (eval set) through each voice in `tools/audio_gen/candidates.json`
   and writes MP3 samples plus `assets/audio/comparison/index.json` (every sample marked temporary).
3. App: Parent settings -> Sound and learning -> **Voice comparison**: pick Arabic/English, play the same phrase through each candidate (and the
   device voice as a temporary baseline), see voice id, provider and locale, mark Acceptable / Unacceptable / Needs review, write notes, copy them.
4. `tools/audio_gen/generate.py`: for the chosen voice, generates draft files in small batches and records them in `assets/audio/manifest.json`
   as `generated`, license `unconfirmed: ...`, both reviews `pending`.
5. App: **Audio review (admin)**: filter by status/kind/language, play the file, record two separate decisions (sound quality; language correctness)
   with a reviewer name. An item becomes `approved` only with a file, a confirmed license and both decisions by named people. Decisions are kept on the
   device and exported (button) to merge into `manifest.json`.
6. Lesson screens use an item only when it is approved; otherwise they say so (device demo voice, or "not recorded yet").

States: missing, discovered, generated, awaiting_audio_review, awaiting_language_review, approved, rejected, needs_recheck.

## 5. Setup (the part that needs you)
```powershell
# 1. In Google Cloud: create a project, enable the Text-to-Speech API, create an API key restricted to that API.
# 2. Put it in YOUR shell only (never in a file in the repository):
$env:GOOGLE_TTS_API_KEY = "<your key>"
# 3. Compare the candidates (starts with a dry run):
python tools\audio_gen\compare.py --dry-run
python tools\audio_gen\compare.py
# 4. Rebuild the app (assets changed) and open Voice comparison on your Android phone; listen with a native speaker.
# 5. Generate a first small batch with the voices you accepted:
python tools\audio_gen\generate.py --voice-ar <accepted-ar-voice> --voice-en <accepted-en-voice> --limit 20 --kind letterName
```
The generator was NOT run against the real service from this project. Run it on one item first.
Before approving any generated file the owner must read the provider's current terms (storing and shipping generated audio in the app,
and the restriction on training competing TTS) and replace the `unconfirmed:` license text in `manifest.json`.

## 6. Sources used (search results only)
Google voice docs (snippet), forum threads on Text-to-Speech licensing, third-party pages on Azure pricing. All are secondary; the official pages
have to be opened by someone with access: Google Cloud Text-to-Speech "Supported voices", "Pricing" and the service terms;
Azure AI Speech "Language support" and "Pricing"; Amazon Polly "Available voices".
