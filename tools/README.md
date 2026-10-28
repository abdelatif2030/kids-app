# Translation tools

The English texts for static Arabic strings live in `tools/en/*.txt` (`index|English`, numbered against
`tools/ar_all.json`) and `tools/en/extra.txt` (`Arabic|English`). `python3 tools/build_dict.py` regenerates
`lib/l10n/en_dictionary.dart`. `collect.py` rebuilds `ar_all.json` from the source (strings inside `loc(...)` or
static data). `test/dictionary_test.dart` fails when a `loc('...')` text has no English entry.

Interpolated texts use `tr2('arabic $x', 'english $x')` in the code instead.
