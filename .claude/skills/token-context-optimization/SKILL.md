---
name: token-context-optimization
description: Use when a session is long, the context is filling up, outputs are too large, or when planning how to work on a big task cheaply. Techniques to read, search, delegate and summarize efficiently in Claude Code while keeping accuracy.
---

# Token and context optimization

Goal: spend context only on what changes the answer.

## Workflow
1. Before reading, decide the question the file must answer. Search first (`Grep`, `Glob`), then read only the needed range (`offset`/`limit`).
2. Prefer targeted commands (`grep -n`, `head`, `wc -l`, `git diff --stat`) over printing whole files or logs.
3. Batch independent tool calls in one message.
4. Keep large outputs out of the conversation: write them to a file and read the relevant part; filter with `grep`, `tail`, `jq`.
5. Delegate wide, read-heavy exploration to a subagent only when the user asked for one or the search spans many files; ask for a short conclusion, not file dumps.
6. At natural checkpoints, write a short state note (what is done, what remains, decisions) so a restart or compaction loses nothing.

## Habits that save the most
- Do not re-read a file you just edited or already hold in context.
- Do not paste long command output back into the answer; quote the few lines that matter.
- For test and analyze runs, print only the summary and the failures (`| tail`, `grep -E "\[E\]|passed|failed"`).
- Prefer editing with small exact replacements over rewriting whole files.
- Summarize decisions once; do not restate the plan every turn.
- Keep answers short: lead with the result, then only what the reader must act on.

## Progressive disclosure for skills and docs
- Put the workflow in `SKILL.md` (short); push depth into `references/` files that are read only when needed; link them from `SKILL.md`.
- One skill, one job; descriptions say exactly when to use it so they load only then.
- Avoid duplicating the same guidance in two skills; link instead.

## When to read more
- Concrete commands and a context budget checklist: `references/techniques.md`.
