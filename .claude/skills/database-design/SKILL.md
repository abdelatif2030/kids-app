---
name: database-design
description: Use when designing or changing a data model, schema, indexes, queries, migrations, local storage or Firestore collections, or when queries are slow or data keeps getting inconsistent. Covers relational and document/NoSQL design plus Flutter and Dart local storage and Firestore guidance.
---

# Database design and optimization

## Workflow
1. List the entities, who owns each record, and the questions the app must answer (reads) and the writes it makes. Design for those access patterns.
2. Pick the store: small private settings -> key/value; structured local data -> SQLite (drift/sqflite) if the project already uses it; shared or remote data -> the existing backend (Firestore/SQL).
3. Model: one source of truth per fact; normalize in SQL; in document stores denormalize only what a read needs and say how it stays in sync.
4. Add constraints and indexes for the queries you listed; measure before adding more.
5. Plan how existing data migrates; keep readers tolerant of old versions.
6. Test: valid write, invalid write, missing/damaged record, and the heavy query.

## Relational rules
- Primary key on every table; foreign keys with a chosen delete rule; NOT NULL and CHECK for invariants.
- Third normal form by default; denormalize only for a measured read cost.
- Index columns used in WHERE, JOIN and ORDER BY (composite in query order); no index "just in case" (each costs writes).
- Avoid N+1 queries; select needed columns; paginate with keyset (`WHERE id > ? LIMIT n`).
- Transactions for multi-row invariants; migrations are forward-only scripts with a version.

## Document (Firestore) rules
- Design around queries: collections per access path; documents small (under 1 MB, far less in practice); avoid unbounded arrays.
- Use sub-collections for lists that grow; denormalize display fields (name, nickname) into the child record and accept staleness explicitly.
- Every query needs an index it can use; use exact-id reads where possible (also better for privacy: no listing of other users).
- Writes: set document ids from the client when you need idempotent retries; make immutable records create-only in the rules.
- Cost: reads are billed per document; limit queries, use `limit`, listen narrowly, poll slowly on free plans.

## Flutter and Dart specifics
- `shared_preferences` is for small settings only (not megabytes, not relational data). Store JSON with a version, cap list lengths, and decode defensively (a damaged value must not crash).
- Keep one storage class per concern with `load`/`save` and typed models (`fromJson`/`toJson`); no raw maps in UI code.
- Singletons that cache storage must be re-read when the storage object changes (tests) and cleared on "delete my data".
- Deleting a user's data must remove every key/collection that holds it; add a test that lists the keys.
- Never store secrets in plain preferences (use secure storage).

## When to read more
- Schema/index worksheet and migration steps: `references/schema-worksheet.md`.
