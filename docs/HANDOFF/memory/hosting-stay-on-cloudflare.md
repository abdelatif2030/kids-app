---
name: hosting-stay-on-cloudflare
description: Owner decided (2026-11-18) to stay on Cloudflare Pages + R2; an Oracle Cloud Free Trial account exists but is unused
metadata:
  node_type: memory
  type: project
  originSessionId: d15d89a8-4495-416f-ab2d-a88b962dd6c0
  modified: 2026-11-17T22:21:59.142Z
---

Decision 2026-11-18: keep the demo on Cloudflare Pages and the lesson videos on Cloudflare R2 (free 10 GB, egress free). Do NOT migrate to Oracle.

State of the Oracle account (read-only look on 2026-11-18): Free Trial, home region me-dubai-1 (tenancy `abdo1997mohamed2030`), no instances, no subscriptions, budget `free-guard` ($1/month alert only, it does not stop spending). Nothing was created. Never click Upgrade.

Cloudflare state (read 2026-11-18): R2 bucket `rehlaty-lessons` holds 31 objects, 2.74 GB (of 10 GB free), billable usage $0.00. A budget alert `free-guard 1 USD` (emails the owner at $1) was created in Notifications that day with the owner's OK. A DNS zone `p1-datahub.ddns.net` also exists in the account (not touched).

**Why:** the 60 lesson videos are only about 150 MB, so 10 GB is not a limit; a self-run Oracle VM would need a domain, HTTPS, maintenance, and the app accepts only ONE video host (`LESSONS_BASE_URL`).

**How to apply:** revisit Oracle only if the videos grow past roughly 30 GB AND the owner wants exactly $0 (then an Always Free A1 VM 2 OCPU / 12 GB, Ubuntu aarch64, with a domain). Beyond 10 GB R2 costs $0.015 per GB-month and needs a card on the account. Facts were read from Oracle's and Cloudflare's docs on 2026-11-18 (docs can change).
