'use strict';
// Account deletion logic (docs/ACCOUNT_DELETION_DESIGN.md). NOT DEPLOYED.
//
// The logic is written against a tiny storage interface so it can be tested on the local Firestore emulator and run in production
// with the Admin SDK (see ../index.js):
//   store.get(path)                         -> data object or null
//   store.list(collectionPath)              -> [{ path, data }]   (a collection or sub-collection)
//   store.listWhere(collection, field, val) -> [{ path, data }]   (top-level collection, field == val)
//   store.listGroup(collectionId)           -> [{ path, data }]   (every collection with that id, anywhere)
//   store.update(path, patch)               -> void
//   store.remove(path)                      -> void
// It never touches a document that does not belong to `uid` (it deletes it, or anonymises the uid fields in shared history).

const DELETED = 'deleted';
const DELETED_NAME = 'Deleted account';

async function removeAll(store, docs, counts, label) {
  for (const d of docs) {
    await store.remove(d.path);
    counts[label] = (counts[label] || 0) + 1;
  }
}

// A family tree: relatives, messages, voices, calls and their candidates.
async function removeFamilyTree(store, fid, counts) {
  for (const c of await store.list(`families/${fid}/calls`)) {
    await removeAll(store, await store.list(`${c.path}/candidates`), counts, 'candidates');
  }
  for (const sub of ['calls', 'messages', 'voices', 'relatives']) {
    await removeAll(store, await store.list(`families/${fid}/${sub}`), counts, sub);
  }
}

// Bookings of this person: open ones are cancelled (and their slot freed), the history is anonymised, the messages are deleted.
async function settleBookings(store, field, uid, counts) {
  for (const b of await store.listWhere('bookings', field, uid)) {
    const d = b.data;
    const patch = {};
    if (d.status === 'requested' || d.status === 'accepted') patch.status = 'cancelled';
    if (field === 'parentUid') {
      patch.parentUid = DELETED;
      patch.parentName = DELETED_NAME;
      patch.note = '';
    } else {
      patch.teacherUid = DELETED;
      patch.teacherName = DELETED_NAME;
    }
    patch.lessonLink = null;
    await removeAll(store, await store.list(`${b.path}/messages`), counts, 'bookingMessages');
    if (d.slotId && (patch.status === 'cancelled' || d.status === 'cancelled' || d.status === 'declined')) {
      const slot = await store.get(`slots/${d.slotId}`);
      if (slot && slot.status === 'booked' && field === 'parentUid') await store.update(`slots/${d.slotId}`, { status: 'open', bookingId: null });
    }
    await store.update(b.path, patch);
    counts.bookingsAnonymised = (counts.bookingsAnonymised || 0) + 1;
  }
}

/** Deletes everything that belongs to [uid] except the Authentication record (the caller deletes that last). Safe to run twice. */
async function deleteAccountData(store, uid) {
  if (!uid || typeof uid !== 'string') throw new Error('uid required');
  const counts = {};
  const user = await store.get(`users/${uid}`);
  const role = user && user.role;

  if (role === 'parent') {
    await removeFamilyTree(store, uid, counts);
    await removeAll(store, await store.listWhere('connectRequests', 'familyId', uid), counts, 'connectRequests');
    await removeAll(store, await store.listWhere('requests', 'parentUid', uid), counts, 'requests');
    await removeAll(store, await store.listWhere('proposals', 'parentUid', uid), counts, 'proposals');
    await settleBookings(store, 'parentUid', uid, counts);
    for (const r of await store.listWhere('reviews', 'parentUid', uid)) {
      await store.update(r.path, { parentUid: DELETED });
      counts.reviewsAnonymised = (counts.reviewsAnonymised || 0) + 1;
    }
    for (const r of await store.listWhere('lessonReports', 'parentUid', uid)) {
      await store.remove(r.path);
      counts.lessonReports = (counts.lessonReports || 0) + 1;
    }
    for (const r of await store.listWhere('reports', 'reporterUid', uid)) await store.update(r.path, { reporterUid: DELETED });
  } else if (role === 'relative') {
    const name = user.username;
    if (name) {
      const u = await store.get(`usernames/${name}`);
      if (u && u.uid === uid) await store.remove(`usernames/${name}`);
    }
    for (const f of await store.list(`users/${uid}/families`)) {
      const fid = f.path.split('/').pop();
      await removeAll(store, (await store.list(`families/${fid}/messages`)).filter((m) => m.data.relUid === uid), counts, 'messages');
      await removeAll(store, (await store.list(`families/${fid}/voices`)).filter((m) => m.data.relUid === uid), counts, 'voices');
      for (const c of (await store.list(`families/${fid}/calls`)).filter((x) => x.data.relUid === uid)) {
        await removeAll(store, await store.list(`${c.path}/candidates`), counts, 'candidates');
        await store.remove(c.path);
        counts.calls = (counts.calls || 0) + 1;
      }
      await store.remove(`families/${fid}/relatives/${uid}`); // access ends here
      await store.remove(f.path);
    }
    await removeAll(store, await store.listWhere('connectRequests', 'toUid', uid), counts, 'connectRequests');
  } else if (role === 'teacher') {
    await settleBookings(store, 'teacherUid', uid, counts);
    await removeAll(store, await store.listWhere('slots', 'teacherUid', uid), counts, 'slots');
    await removeAll(store, await store.listWhere('portfolio', 'teacherUid', uid), counts, 'portfolio');
    await removeAll(store, await store.listWhere('proposals', 'teacherUid', uid), counts, 'proposals');
    await removeAll(store, await store.listWhere('lessonReports', 'teacherUid', uid), counts, 'lessonReports');
    await removeAll(store, await store.listWhere('reviews', 'teacherUid', uid), counts, 'reviews');
    if (await store.get(`teacherFiles/${uid}`)) await store.remove(`teacherFiles/${uid}`);
    if (await store.get(`teachers/${uid}`)) await store.remove(`teachers/${uid}`);
  }
  // the account record last: rules read it for the role
  if (user) await store.remove(`users/${uid}`);
  return { role: role || null, counts };
}

module.exports = { deleteAccountData, DELETED, DELETED_NAME };
