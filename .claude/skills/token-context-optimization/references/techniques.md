# Techniques

## Cheap ways to look
```bash
git status --short | head
git diff --stat | tail -5
wc -l path/to/file
grep -n "pattern" -r lib | head -20
sed -n 120,180p path/to/file        # a range, not the whole file
find . -name "*.dart" -newer pubspec.yaml | head
```

## Taming big output
```bash
flutter test 2>&1 | grep -E "\[E\]|Some tests|All tests" | head
flutter analyze 2>&1 | grep -E "error|issues found"
some_command > /tmp/out.txt; tail -40 /tmp/out.txt
```

## Context budget checklist
- [ ] Am I reading a whole file when a range would do?
- [ ] Is this output needed in the conversation, or only a count/failure list?
- [ ] Did I already learn this earlier in the session?
- [ ] Can independent calls run in one batch?
- [ ] Is a state note written before a long detour?

## Long tasks
- Break into stages with a clear "done" test for each; finish and verify one stage before the next.
- Keep a short progress file or task list; update it as you go.
- When context is compacted, the summary should hold: goal, decisions, files touched, test status, open items.

## Writing a skill that stays cheap
- Frontmatter `description` under ~300 characters of trigger conditions, not a manual.
- `SKILL.md` under about 100 lines; examples and long lists in `references/`.
- No scripts or dependencies unless they remove real work.
