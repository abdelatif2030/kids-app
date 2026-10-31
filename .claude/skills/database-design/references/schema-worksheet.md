# Schema worksheet

## 1. Access patterns (fill first)
| # | Question or write | Frequency | Who | Fields needed |
|---|---|---|---|---|

## 2. Entities
For each: name, owner, id format, required fields, optional fields, size limits, retention.

## 3. Relationships
One-to-many: store the parent id on the child (SQL) or a sub-collection (Firestore). Many-to-many: a link table or a map keyed by id with bounded size.

## 4. Indexes
For each access pattern: the index that serves it. Remove any index no pattern uses.

## 5. Consistency
Which duplicated fields exist, who updates them, and how stale they may be.

## 6. Migration steps
1. Add the new field/table (nullable or defaulted).
2. Write both formats for one release; read the new one with fallback to the old.
3. Backfill; verify counts.
4. Stop writing the old format; remove it a release later.
Keep a `schemaVersion`; migrations are idempotent.

## 7. Local JSON storage checklist
- [ ] Version field present; unknown versions handled.
- [ ] Reader skips bad entries instead of failing.
- [ ] List length and age caps.
- [ ] Included in the "delete my data" and export functions.

## 8. Security
Who may read and write each record; enforce in rules/back end; bound strings and sizes; test denied cases.
