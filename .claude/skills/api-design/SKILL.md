---
name: api-design
description: Use when designing or changing an API: REST or JSON endpoints, a repository/service interface between layers, error formats, pagination, versioning, or an HTTP client in Flutter and Dart. Covers contract design, validation, errors, idempotency and client code.
---

# API design

## Workflow
1. Write the contract first: operations, inputs, outputs, errors, who may call it. Review it before coding.
2. Model resources (nouns) and use verbs of the protocol (GET read, POST create, PUT/PATCH update, DELETE remove).
3. Define the error shape once and use it everywhere.
4. Decide pagination, filtering, idempotency and versioning up front.
5. Implement behind a small interface; write contract tests with a fake server or in-memory fake.

## Design rules
- Stable, predictable names; plural nouns for collections; no verbs in paths unless it is an action (`POST /bookings/{id}/cancel`).
- Correct status codes: 200/201/204 success; 400 validation; 401 unauthenticated; 403 forbidden; 404 missing; 409 conflict; 422 semantic error; 429 rate limit; 5xx server.
- Errors: `{ "error": { "code": "invalid_name", "message": "...", "field": "name" } }` with a stable machine code and a human message.
- Validate every input at the edge (type, range, length); never trust the client.
- Idempotency: retries must not duplicate (client-chosen ids or idempotency keys). Writes that must not change later are create-only.
- Pagination: cursor/keyset with `limit` and `next`; bounded page size; stable ordering.
- Versioning: additive changes only within a version; breaking change = new version; keep readers tolerant of unknown fields.
- Security: authentication, per-record authorization, rate limits, no secrets in URLs, HTTPS only; return the minimum fields.
- Do not leak existence: unknown and forbidden may look the same where that matters.

## Flutter and Dart specifics
- Put the API behind an abstract class (`FooRepository`) with typed methods; the HTTP/Firebase version and an in-memory fake implement it. Widgets depend on the interface.
- Use typed models with `fromJson`/`toJson`; parse in try/catch; unknown fields ignored; missing optional fields defaulted.
- One HTTP client wrapper: base URL from build config, timeout, a typed exception with an `offline` flag for no-connection, and no logging of bodies with personal data.
- Do not add `http`/`dio` without approval; check what the project already uses.
- Retries: only for idempotent calls, with backoff and a cap; queue user-written messages locally and send with a client id so a retry cannot duplicate.
- Never call an API from `build`; load in a controller and expose state (loading, data, error, empty).

## When to read more
- Endpoint spec template and error catalogue: `references/contract-template.md`.
