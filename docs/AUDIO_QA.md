# Audio: audit, architecture and quality checklist

## 1. Audit (what the code actually did before)
Found by reading `lib/media/audio.dart`, `lib/literacy/*`, `lib/library/*`, `lib/stories/*`:
- All spoken Arabic and English was the **phone's own text-to-speech** (`flutter_tts`; in the web preview the browser's
  `speechSynthesis`). There were **no recorded voices**. The only audio files are four synthetic ambient loops.
- `TtsSpeech.speak` set only the language `ar`; it did not pick a voice, a locale (Modern Standard Arabic vs Egyptian),
  or check that an Arabic voice existed. On a device without one the engine may use a default voice (unintelligible) or stay silent.
- `AppAudio.say` swallowed every error: a failed or silent speech looked like success.
- The "speaking" icon in the guided letter lesson was a **timer estimate**, so it could show "playing" when nothing played.
- The isolated letter **sound** (e.g. `بَ`) was sent to the TTS engine like a word. Synthetic voices cannot reliably say an isolated
  consonant: they read a name, add a vowel, or spell it. That teaches a wrong sound.
- No central list of what must be said, who recorded it, its licence or review status; no way to replace a voice with a recording
  without editing screens.

Root causes of "unclear, unnatural" speech: (1) synthetic device voices, whose quality depends on the phone; (2) no voice/locale
selection or availability check; (3) isolated sounds voiced by TTS; (4) no recorded, reviewed source. A cloud neural voice or
recordings are needed for production quality; code alone cannot make a device voice natural.

## 2. What was built
- `lib/media/audio_manifest.dart`: every spoken item of the content (28 letters x name + 3 isolated sounds, 185 words, numbers 0-10,
  English A-Z names and phonics) with id, language, locale (MSA `ar`), text, content reference, source, speaker id, licence, review
  status, reviewer, duration, version and the pronunciation note for the speaker. Overrides come from `assets/audio/manifest.json`.
  `validate()` refuses an approved item without a file, reviewer, speaker or licence.
- `lib/media/audio_service.dart`: one clip at a time (starting one stops the previous), states idle/loading/playing/paused/completed/error
  that follow the real playback, explicit problems (voice off, missing, no voice, recording failed, failed), slow practice
  (file speed 0.8 / speech rate x0.7, same text), replay, pause, recovery after failure, voice availability check.
- Rules: an **approved recording** is always preferred; the **device voice is a labelled demo fallback**, never used for isolated letter
  sounds or phonics (`deviceVoiceAllowed = false`): those show "not recorded yet" until a recording is approved. The parent can switch the
  demo voice off (Parent settings -> Sound and learning).
- `lib/media/audio_button.dart`: `AudioButton` (spinner / speaking icon / warning) and `AudioNotice` (demo voice, approved recording, or the reason
  there is no sound). Used in the letter screen and the guided letter lesson.
- `TtsSpeech` asks for `ar-SA` (then `ar`) / `en-US` (then `en`) and reports "unavailable" when the device has no voice.
- `assets/audio/eval_set.json`: 92 curated evaluation samples (letter names and sounds, short vowels, difficult consonants, similar letters,
  shadda, sukoon, tanween, long vowels, instructions, numbers, English names/phonics/words, story and punctuation, mixed label).
- `docs/AUDIO_RECORDING_SHEET.csv`: the script for a recording session: 360 items with the exact file to create and the pronunciation note.

## 3. How to add a real recording
1. Record the item (WAV, 44.1 kHz or higher, quiet room, no noise reduction/compression), export MP3 or AAC without normalising dynamics away
   (match loudness between items, about -16 LUFS), trim without cutting the sound.
2. Put it at the path in the CSV (`assets/audio/ar/letters/ar.letter.0628.name.mp3`).
3. Add an entry to `assets/audio/manifest.json`: `file`, `voice` (speaker id, never a real name), `license`, `durationMs`.
4. A native Arabic literacy reviewer listens; only then add `"review": "approved"` and `"reviewedBy": "Name, date"`.
5. `flutter test test/audio_service_test.dart` checks the manifest and that the file exists and is bundled.

## 4. Automated vs human
Automated (`test/audio_service_test.dart`, `test/audio_qa_test.dart`): manifest completeness and unique ids, no approval without evidence,
isolated sounds never voiced by the device, state transitions, no overlapping speech, replay/slow, failure recovery, missing/offline states,
button icons follow the real state, the four bundled MP3 files have valid MP3 headers, evaluation-set structure.
NOT automated (need people): whether a voice or recording sounds natural and correct, Arabic pronunciation, diacritics, similar-letter contrast,
child-appropriateness, volume match between files.

## 5. Manual listening checklist (do on a real phone and a desktop, Arabic and English separately)
For each sample in `assets/audio/eval_set.json` (and each new recording):
- [ ] Clear and intelligible at phone speaker volume and with headphones.
- [ ] Correct Modern Standard Arabic (no dialect), correct letter name / isolated sound / vowels / shadda / sukoon / tanween / long vowels.
- [ ] The isolated sound has no extra vowel or syllable; name and sound are different recordings.
- [ ] Natural pace, warm tone, suitable for a young child; punctuation shapes the intonation.
- [ ] Beginning and end not clipped; no clicks, hiss or distortion; no speed or pitch artefacts.
- [ ] Volume similar to the other items.
- [ ] Replay works, a new clip stops the previous one, slow mode is the same pronunciation only slower.
- [ ] With no recording the screen says so; with the device voice the screen says "demo voice".
- [ ] Reviewer name and date written in `manifest.json`.

## 6. Status today (honest)
- Approved recordings: **0 of 360**. Every item awaits recording and native review.
- The device demo voice reads names, words, instructions and stories (labelled as a demo). Its quality was NOT evaluated on real devices in
  this environment (no audio hardware, no devices): it must be listened to.
- Cloud neural TTS was not added: it needs a provider decision (Arabic voice quality tested on this content, licence for storing audio,
  cost) and a server-side key. See the final report for the options.

## 7. Interface language vs learning language
`ChildProfile.learnLang` ('ar', 'en' or 'both') is chosen in the setup (step 1) and in the child's edit screen. It is independent of the
interface language (`ui_lang`): changing the app language never changes it (`test/learning_language_test.dart`). It orders the language
lands (letters / English) in the plan; nothing is removed.
