# API contract template

## Operation
- **Name / path / method:**
- **Purpose (one sentence):**
- **Auth and permission:** who may call it; what ownership check applies.
- **Request:** fields with type, required?, limits.
- **Success response:** status, fields.
- **Errors:** table of status, code, when.
- **Idempotency:** how a repeat call behaves.
- **Rate limit / size limits:**
- **Notes on privacy:** which fields are personal; minimum returned.

## Error catalogue (example)
| Status | Code | Meaning |
|---|---|---|
| 400 | invalid_input | A field failed validation (`field` says which). |
| 401 | unauthenticated | No or expired credentials. |
| 403 | forbidden | Signed in but not allowed. |
| 404 | not_found | No such record (or hidden). |
| 409 | conflict | State changed; retry with fresh data. |
| 429 | rate_limited | Slow down; `retryAfter` seconds. |
| 503 | unavailable | Try again later (client treats as offline). |

## Pagination envelope
`{ "items": [...], "next": "opaque-cursor-or-null" }`

## Dart client skeleton
```dart
abstract class BookingRepository {
  Future<Booking> create(NewBooking input, {required String clientId});
  Future<Page<Booking>> list({String? after, int limit = 20});
}
class ApiException implements Exception {
  final String code; final String message; final bool offline;
  const ApiException(this.code, this.message, {this.offline = false});
}
```

## Review checklist
- [ ] Contract written before code and reviewed.
- [ ] One error shape; every failure mapped to it.
- [ ] Inputs validated and bounded on the server side.
- [ ] Retried calls cannot duplicate.
- [ ] A fake implements the interface and tests cover success, validation error, forbidden and offline.
