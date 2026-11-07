# Translation status (Arabic default, English supported)

Arabic is the default for every new installation (also in the web demo) and nothing was removed or hidden. The language is
changed in **Parent settings → App settings → App language**, and, in the web demo only, with the «English / العربية»
button in the demo notice on the first screens. The choice is saved (`ui_lang`) and restored after a browser restart.
Direction follows the language (Arabic right-to-left, English left-to-right) for the whole app.

## Complete
* Every interface string goes through `tr2(ar, en)` or `loc()` with an English entry (`lib/l10n/en_dictionary.dart`;
  `test/dictionary_test.dart` fails when a `loc()` string has no English).
* Vocabulary words (107 of 107 have an English name), curriculum units, adventures, games, parent screens, demo screens.

## Not translated yet (content, not interface). Seen in English mode.
| Content | State | Why / next step |
|---|---|---|
| **Video titles** (157 in `assets/videos.json`) | all written in Arabic, also for English-language videos | needs an English title field per video (data change) and a native check |
| **Stories** (`lib/stories/story_data.dart`, branching stories) | Arabic text, read by the Arabic device voice | content written in Arabic on purpose; English versions need writing and a voice |
| **Arabic letters** (`letters_data.dart`) | Arabic by nature | not a translation task |
| **Shape/letter names read aloud** | the spoken/captioned word is Arabic (e.g. «دائرة»), the instruction above it is English | learn-language setting `both`; an English-only voice path is not built |
| **The picture of the Games Hub** (`assets/games/hub_scene.webp`) | the wooden sign «يلا نلعب!» is painted in Arabic; the ten island names are real text over it and ARE translated | needs an English version of the picture |
| Audio (Adam and Nour recordings) | 1 approved Arabic recording; everything else is device voice | see AUDIO docs |
| Names of languages in the language pickers | shown in their own language on purpose | n/a |
| Machine-written Arabic of the new curriculum units, hub labels and demo texts | not reviewed by a native teacher | marked draft |

## How to complete it later
1. Add `titleEn` to `assets/videos.json` and show it when the interface is English.
2. Write English story texts, or mark stories as "Arabic story" in the English interface.
3. Draw an English sign for the hub picture.
4. Ask a native speaker to review the new Arabic and English strings.
