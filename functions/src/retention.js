'use strict';
// Server-enforced retention (S5). NOT DEPLOYED. Voice recordings: 14 days. Call records and their network details: 24 hours.
// Same storage interface as deletion.js. It only deletes documents older than the cutoff and never anything newer.

const DAY = 24 * 3600 * 1000;

function ms(v) {
  if (v == null) return null;
  if (typeof v.toMillis === 'function') return v.toMillis();
  if (v instanceof Date) return v.getTime();
  if (typeof v === 'number') return v;
  return null;
}

async function purgeExpired(store, nowMs, opts = {}) {
  const voiceMs = (opts.voiceDays ?? 14) * DAY;
  const callMs = (opts.callHours ?? 24) * 3600 * 1000;
  const counts = { voices: 0, calls: 0, candidates: 0 };
  for (const v of await store.listGroup('voices')) {
    const t = ms(v.data.at);
    if (t != null && nowMs - t > voiceMs) {
      await store.remove(v.path);
      counts.voices++;
    }
  }
  for (const c of await store.listGroup('calls')) {
    const t = ms(c.data.createdAt);
    if (t != null && nowMs - t > callMs) {
      for (const k of await store.list(`${c.path}/candidates`)) {
        await store.remove(k.path);
        counts.candidates++;
      }
      await store.remove(c.path);
      counts.calls++;
    }
  }
  return counts;
}

module.exports = { purgeExpired };
