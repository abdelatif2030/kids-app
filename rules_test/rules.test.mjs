import { test, before, after, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { initializeTestEnvironment, assertSucceeds, assertFails } from '@firebase/rules-unit-testing';
import { doc, setDoc, getDoc, updateDoc, deleteDoc, writeBatch, serverTimestamp, deleteField, collection, getDocs, query, where } from 'firebase/firestore';

let env;
const HOUR = 3600 * 1000;
const future = (h = 48) => Date.now() + h * HOUR;
const past = (h = 5) => Date.now() - h * HOUR;

before(async () => {
  env = await initializeTestEnvironment({
    projectId: 'demo-rehlaty',
    firestore: { rules: readFileSync('../firestore.rules', 'utf8'), host: '127.0.0.1', port: 8081 },
  });
});
after(async () => { await env.cleanup(); });

const as = (uid) => env.authenticatedContext(uid).firestore();

beforeEach(async () => {
  await env.clearFirestore();
  await env.withSecurityRulesDisabled(async (ctx) => {
    const db = ctx.firestore();
    for (const [uid, role] of [['p1', 'parent'], ['p2', 'parent'], ['t1', 'teacher'], ['t2', 'teacher'], ['r1', 'relative'], ['r2', 'relative']]) {
      await setDoc(doc(db, 'users', uid), { role, name: uid });
    }
    await setDoc(doc(db, 'teachers', 't1'), { name: 'T1', bio: 'b', subjects: ['math'], languages: ['العربية'], priceNote: '', status: 'approved', priceEgp: 200 });
    await setDoc(doc(db, 'teachers', 't2'), { name: 'T2', bio: 'b', subjects: ['math'], languages: ['العربية'], priceNote: '', status: 'approved' });
  });
});

// helpers ------------------------------------------------------------------
const slotId = (t, ms) => `${t}_${ms}`;
async function seedSlot(t = 't1', ms = future(), extra = {}) {
  await env.withSecurityRulesDisabled(async (ctx) => {
    await setDoc(doc(ctx.firestore(), 'slots', slotId(t, ms)), { teacherUid: t, startMs: ms, minutes: 45, status: 'open', ...extra });
  });
  return ms;
}
const bookingData = (over = {}) => ({
  parentUid: 'p1', teacherUid: 't1', teacherName: 'T1', parentName: 'P1', subject: 'math',
  whenText: 'x', childAge: 6, note: '', status: 'requested', lessonLink: null, ...over,
});
async function seedBooking(id, over = {}) {
  await env.withSecurityRulesDisabled(async (ctx) => {
    await setDoc(doc(ctx.firestore(), 'bookings', id), bookingData(over));
  });
}
async function bookSlot(uid, ms, bookingId = 'b1', over = {}) {
  const db = as(uid);
  const b = writeBatch(db);
  b.set(doc(db, 'bookings', bookingId), bookingData({ parentUid: uid, slotId: slotId('t1', ms), startMs: ms, minutes: 45, priceEgp: 200, ...over }));
  b.update(doc(db, 'slots', slotId('t1', ms)), { status: 'booked', bookingId });
  return b.commit();
}

// teacher profiles ---------------------------------------------------------
test('a teacher can never write or change the verification badges', async () => {
  const db = as('t3');
  await env.withSecurityRulesDisabled(async (ctx) => setDoc(doc(ctx.firestore(), 'users', 't3'), { role: 'teacher', name: 't3' }));
  const base = { name: 'N', bio: 'b', subjects: ['math'], languages: ['العربية'], priceNote: '', status: 'approved' };
  await assertFails(setDoc(doc(db, 'teachers', 't3'), { ...base, identityVerified: true }));
  await assertSucceeds(setDoc(doc(db, 'teachers', 't3'), base));
  await assertFails(updateDoc(doc(db, 'teachers', 't3'), { qualificationVerified: true }));
  await env.withSecurityRulesDisabled(async (ctx) => updateDoc(doc(ctx.firestore(), 'teachers', 't3'), { identityVerified: true }));
  await assertFails(updateDoc(doc(db, 'teachers', 't3'), { identityVerified: false })); // cannot remove it either
  await assertSucceeds(updateDoc(doc(db, 'teachers', 't3'), { bio: 'new bio' }));
});

// slots --------------------------------------------------------------------
test('slots: only the teacher creates them, in the future, with the right id', async () => {
  const ms = future();
  const good = { teacherUid: 't1', startMs: ms, minutes: 45, status: 'open' };
  await assertSucceeds(setDoc(doc(as('t1'), 'slots', slotId('t1', ms)), good));
  await assertFails(setDoc(doc(as('t1'), 'slots', slotId('t1', ms + 1)), good)); // id must match the start
  await assertFails(setDoc(doc(as('t2'), 'slots', slotId('t1', ms + HOUR)), { ...good, startMs: ms + HOUR })); // someone else's
  await assertFails(setDoc(doc(as('t1'), 'slots', slotId('t1', past())), { ...good, startMs: past() })); // past
  await assertFails(setDoc(doc(as('t1'), 'slots', slotId('t1', ms + 2 * HOUR)), { ...good, startMs: ms + 2 * HOUR, minutes: 5 }));
  await assertFails(setDoc(doc(as('t1'), 'slots', slotId('t1', ms + 3 * HOUR)), { ...good, startMs: ms + 3 * HOUR, status: 'booked' }));
  await assertFails(setDoc(doc(as('p1'), 'slots', slotId('p1', ms + 4 * HOUR)), { ...good, teacherUid: 'p1', startMs: ms + 4 * HOUR }));
});

test('slots: any signed-in user can read, anonymous cannot; the teacher can block, reopen and delete free slots', async () => {
  const ms = await seedSlot();
  await assertSucceeds(getDoc(doc(as('p1'), 'slots', slotId('t1', ms))));
  await assertFails(getDoc(doc(env.unauthenticatedContext().firestore(), 'slots', slotId('t1', ms))));
  await assertSucceeds(updateDoc(doc(as('t1'), 'slots', slotId('t1', ms)), { status: 'blocked' }));
  await assertSucceeds(updateDoc(doc(as('t1'), 'slots', slotId('t1', ms)), { status: 'open' }));
  await assertFails(updateDoc(doc(as('t2'), 'slots', slotId('t1', ms)), { status: 'blocked' }));
  await assertFails(updateDoc(doc(as('p1'), 'slots', slotId('t1', ms)), { status: 'blocked' }));
  await assertSucceeds(deleteDoc(doc(as('t1'), 'slots', slotId('t1', ms))));
});

// booking a slot -------------------------------------------------------------
test('booking: a parent books an open slot atomically; a second parent cannot take the same slot', async () => {
  const ms = await seedSlot();
  await assertSucceeds(bookSlot('p1', ms, 'b1'));
  let data;
  await env.withSecurityRulesDisabled(async (ctx) => { data = (await getDoc(doc(ctx.firestore(), 'slots', slotId('t1', ms)))).data(); });
  assert.equal(data.status, 'booked');
  assert.equal(data.bookingId, 'b1');
  await assertFails(bookSlot('p2', ms, 'b2')); // double booking refused
  await assertFails(deleteDoc(doc(as('t1'), 'slots', slotId('t1', ms)))); // a booked slot cannot be deleted
});

test('booking: two parents racing for one slot, exactly one wins', async () => {
  const ms = await seedSlot();
  const results = await Promise.allSettled([bookSlot('p1', ms, 'b1'), bookSlot('p2', ms, 'b2')]);
  assert.equal(results.filter((r) => r.status === 'fulfilled').length, 1);
});

test('booking: the booking must match the slot (teacher, start, length) and cannot be created alone', async () => {
  const ms = await seedSlot();
  await assertFails(bookSlot('p1', ms, 'b1', { startMs: ms + 1 }));
  await assertFails(bookSlot('p1', ms, 'b1', { minutes: 60 }));
  await assertFails(bookSlot('p1', ms, 'b1', { teacherUid: 't2' }));
  // A booking that names a slot but leaves it open is refused.
  await assertFails(setDoc(doc(as('p1'), 'bookings', 'b9'), bookingData({ slotId: slotId('t1', ms), startMs: ms, minutes: 45 })));
  // A slot cannot be marked booked without a matching booking.
  await assertFails(updateDoc(doc(as('p1'), 'slots', slotId('t1', ms)), { status: 'booked', bookingId: 'nope' }));
  // A blocked slot cannot be booked.
  await env.withSecurityRulesDisabled(async (ctx) => updateDoc(doc(ctx.firestore(), 'slots', slotId('t1', ms)), { status: 'blocked' }));
  await assertFails(bookSlot('p1', ms, 'b1'));
});

test('booking: a slot in the past cannot be booked; teachers cannot book; a suspended teacher cannot be booked', async () => {
  const old = await seedSlot('t1', past(1));
  await assertFails(bookSlot('p1', old, 'b1'));
  const ms = await seedSlot('t1', future(10));
  const db = as('t2');
  const b = writeBatch(db);
  b.set(doc(db, 'bookings', 'bt'), bookingData({ parentUid: 't2', slotId: slotId('t1', ms), startMs: ms, minutes: 45 }));
  b.update(doc(db, 'slots', slotId('t1', ms)), { status: 'booked', bookingId: 'bt' });
  await assertFails(b.commit());
  await env.withSecurityRulesDisabled(async (ctx) => updateDoc(doc(ctx.firestore(), 'teachers', 't1'), { status: 'suspended' }));
  await assertFails(bookSlot('p1', ms, 'b1'));
});

// booking state changes ------------------------------------------------------
test('booking: only the teacher accepts or declines a pending request, https link required, once', async () => {
  await seedBooking('b1');
  await assertFails(updateDoc(doc(as('t1'), 'bookings', 'b1'), { status: 'accepted', lessonLink: 'http://x.com/a' }));
  await assertFails(updateDoc(doc(as('t2'), 'bookings', 'b1'), { status: 'accepted', lessonLink: 'https://x.com/a' }));
  await assertFails(updateDoc(doc(as('p1'), 'bookings', 'b1'), { status: 'accepted', lessonLink: 'https://x.com/a' }));
  await assertSucceeds(updateDoc(doc(as('t1'), 'bookings', 'b1'), { status: 'accepted', lessonLink: 'https://meet.example.com/a' }));
  await assertFails(updateDoc(doc(as('t1'), 'bookings', 'b1'), { status: 'declined' })); // already decided
});

test('booking: a cancelled booking cannot be revived, and a parent cannot cancel a completed lesson', async () => {
  await seedBooking('b1', { status: 'cancelled' });
  await assertFails(updateDoc(doc(as('t1'), 'bookings', 'b1'), { status: 'accepted', lessonLink: 'https://x.com/a' }));
  await seedBooking('b2', { status: 'completed' });
  await assertFails(updateDoc(doc(as('p1'), 'bookings', 'b2'), { status: 'cancelled' }));
  await seedBooking('b3', { status: 'accepted' });
  await assertFails(updateDoc(doc(as('p2'), 'bookings', 'b3'), { status: 'cancelled' })); // not their booking
  await assertSucceeds(updateDoc(doc(as('p1'), 'bookings', 'b3'), { status: 'cancelled' }));
});

test('booking: cancelling or declining frees the slot, nothing else does', async () => {
  const ms = await seedSlot();
  await bookSlot('p1', ms, 'b1');
  // Freeing it without cancelling the booking is refused.
  await assertFails(updateDoc(doc(as('p1'), 'slots', slotId('t1', ms)), { status: 'open', bookingId: deleteField() }));
  await assertFails(updateDoc(doc(as('p2'), 'slots', slotId('t1', ms)), { status: 'open', bookingId: deleteField() }));
  const db = as('p1');
  const b = writeBatch(db);
  b.update(doc(db, 'bookings', 'b1'), { status: 'cancelled' });
  b.update(doc(db, 'slots', slotId('t1', ms)), { status: 'open', bookingId: deleteField() });
  await assertSucceeds(b.commit());
  await assertSucceeds(bookSlot('p2', ms, 'b2')); // bookable again
  // The teacher declines the new request and frees the slot.
  const tdb = as('t1');
  const b2 = writeBatch(tdb);
  b2.update(doc(tdb, 'bookings', 'b2'), { status: 'declined' });
  b2.update(doc(tdb, 'slots', slotId('t1', ms)), { status: 'open', bookingId: deleteField() });
  await assertSucceeds(b2.commit());
});

test('booking: completing needs an accepted, scheduled lesson whose start has passed, by its teacher', async () => {
  await seedBooking('past', { status: 'accepted', startMs: past(), minutes: 45, slotId: 'x' });
  await seedBooking('future', { status: 'accepted', startMs: future(), minutes: 45, slotId: 'y' });
  await seedBooking('inquiry', { status: 'accepted' }); // no start time: cannot be completed
  await seedBooking('pending', { status: 'requested', startMs: past(), minutes: 45, slotId: 'z' });
  await assertSucceeds(updateDoc(doc(as('t1'), 'bookings', 'past'), { status: 'completed' }));
  await assertFails(updateDoc(doc(as('t1'), 'bookings', 'future'), { status: 'completed' }));
  await assertFails(updateDoc(doc(as('t1'), 'bookings', 'inquiry'), { status: 'completed' }));
  await assertFails(updateDoc(doc(as('t1'), 'bookings', 'pending'), { status: 'completed' }));
  await assertFails(updateDoc(doc(as('p1'), 'bookings', 'past'), { status: 'completed' }));
  await assertFails(updateDoc(doc(as('t2'), 'bookings', 'past'), { status: 'no_show' }));
  await seedBooking('past2', { status: 'accepted', startMs: past(), minutes: 45, slotId: 'w' });
  await assertSucceeds(updateDoc(doc(as('t1'), 'bookings', 'past2'), { status: 'no_show' }));
  await assertFails(updateDoc(doc(as('t1'), 'bookings', 'past2'), { status: 'completed' })); // final
});

test('booking: only the two people involved can read it', async () => {
  await seedBooking('b1');
  await assertSucceeds(getDoc(doc(as('p1'), 'bookings', 'b1')));
  await assertSucceeds(getDoc(doc(as('t1'), 'bookings', 'b1')));
  await assertFails(getDoc(doc(as('p2'), 'bookings', 'b1')));
  await assertFails(getDoc(doc(as('t2'), 'bookings', 'b1')));
});

// lesson reports -------------------------------------------------------------
const reportData = (over = {}) => ({ teacherUid: 't1', parentUid: 'p1', covered: 'a', understood: 'b', needsReview: 'c', homeActivity: 'd', nextLesson: 'e', updatedAt: serverTimestamp(), ...over });

test('lesson reports: only the teacher of a completed lesson writes; only its parent and teacher read', async () => {
  await seedBooking('done', { status: 'completed', startMs: past(), minutes: 45 });
  await seedBooking('open', { status: 'accepted', startMs: past(), minutes: 45 });
  await assertSucceeds(setDoc(doc(as('t1'), 'lessonReports', 'done'), reportData()));
  await assertSucceeds(setDoc(doc(as('t1'), 'lessonReports', 'done'), reportData({ covered: 'edited' }))); // the teacher may correct it
  await assertFails(setDoc(doc(as('t1'), 'lessonReports', 'open'), reportData())); // not completed
  await assertFails(setDoc(doc(as('t2'), 'lessonReports', 'done'), reportData({ teacherUid: 't2' })));
  await assertFails(setDoc(doc(as('p1'), 'lessonReports', 'done'), reportData()));
  await assertFails(setDoc(doc(as('t1'), 'lessonReports', 'done'), reportData({ parentUid: 'p2' }))); // wrong parent
  await assertFails(setDoc(doc(as('t1'), 'lessonReports', 'done'), reportData({ covered: 'x'.repeat(601) })));
  await assertFails(setDoc(doc(as('t1'), 'lessonReports', 'done'), reportData({ extra: 1 })));
  await assertSucceeds(getDoc(doc(as('p1'), 'lessonReports', 'done')));
  await assertSucceeds(getDoc(doc(as('t1'), 'lessonReports', 'done')));
  await assertFails(getDoc(doc(as('p2'), 'lessonReports', 'done')));
  await assertFails(getDoc(doc(as('t2'), 'lessonReports', 'done')));
  await assertFails(deleteDoc(doc(as('t1'), 'lessonReports', 'done')));
});

// reviews --------------------------------------------------------------------
const reviewData = (over = {}) => ({ bookingId: 'done', teacherUid: 't1', parentUid: 'p1', rating: 5, text: 'ممتاز', createdAt: serverTimestamp(), ...over });

test('reviews: one per completed booking, by its parent only, never edited', async () => {
  await seedBooking('done', { status: 'completed', startMs: past(), minutes: 45 });
  await seedBooking('notyet', { status: 'accepted', startMs: past(), minutes: 45 });
  await assertFails(setDoc(doc(as('p1'), 'reviews', 'notyet'), reviewData({ bookingId: 'notyet' })));
  await assertFails(setDoc(doc(as('p2'), 'reviews', 'done'), reviewData({ parentUid: 'p2' }))); // not their booking
  await assertFails(setDoc(doc(as('t1'), 'reviews', 'done'), reviewData({ parentUid: 't1' }))); // a teacher cannot review
  await assertFails(setDoc(doc(as('p1'), 'reviews', 'done'), reviewData({ rating: 6 })));
  await assertFails(setDoc(doc(as('p1'), 'reviews', 'done'), reviewData({ rating: 0 })));
  await assertFails(setDoc(doc(as('p1'), 'reviews', 'done'), reviewData({ rating: 4.5 })));
  await assertFails(setDoc(doc(as('p1'), 'reviews', 'done'), reviewData({ text: 'x'.repeat(401) })));
  await assertFails(setDoc(doc(as('p1'), 'reviews', 'done'), reviewData({ teacherUid: 't2' })));
  await assertFails(setDoc(doc(as('p1'), 'reviews', 'done'), reviewData({ verified: true })));
  await assertSucceeds(setDoc(doc(as('p1'), 'reviews', 'done'), reviewData()));
  await assertFails(setDoc(doc(as('p1'), 'reviews', 'done'), reviewData({ rating: 1 }))); // a second review for the same booking
  await assertFails(updateDoc(doc(as('p1'), 'reviews', 'done'), { rating: 1 }));
  await assertFails(deleteDoc(doc(as('p1'), 'reviews', 'done')));
  await assertSucceeds(getDoc(doc(as('p2'), 'reviews', 'done')));
  await assertFails(getDoc(doc(env.unauthenticatedContext().firestore(), 'reviews', 'done')));
});

test('review reports: anyone signed in can report, nobody can read them in the app', async () => {
  const ok = { bookingId: 'done', reporterUid: 'p2', reason: 'مسيء', createdAt: serverTimestamp() };
  await assertSucceeds(setDoc(doc(as('p2'), 'reviewReports', 'r1'), ok));
  await assertFails(setDoc(doc(as('p2'), 'reviewReports', 'r2'), { ...ok, reporterUid: 'p1' }));
  await assertFails(getDoc(doc(as('p2'), 'reviewReports', 'r1')));
});

// messages -------------------------------------------------------------------
const msg = (uid, text = 'مرحباً') => ({ senderUid: uid, text, createdAt: serverTimestamp() });

test('messages: only the parent and teacher of the booking, text only, never edited', async () => {
  await seedBooking('b1', { status: 'accepted' });
  const m = (uid) => doc(as(uid), 'bookings', 'b1', 'messages', `m_${uid}`);
  await assertSucceeds(setDoc(m('p1'), msg('p1')));
  await assertSucceeds(setDoc(m('t1'), msg('t1')));
  await assertFails(setDoc(m('p2'), msg('p2')));
  await assertFails(setDoc(m('t2'), msg('t2')));
  await assertFails(setDoc(doc(as('p1'), 'bookings', 'b1', 'messages', 'spoof'), msg('t1'))); // wrong sender
  await assertFails(setDoc(doc(as('p1'), 'bookings', 'b1', 'messages', 'long'), msg('p1', 'x'.repeat(501))));
  await assertFails(setDoc(doc(as('p1'), 'bookings', 'b1', 'messages', 'empty'), msg('p1', '')));
  await assertFails(setDoc(doc(as('p1'), 'bookings', 'b1', 'messages', 'file'), { ...msg('p1'), attachment: 'x' }));
  await assertSucceeds(getDoc(m('t1')));
  await assertFails(getDoc(doc(as('p2'), 'bookings', 'b1', 'messages', 'm_p1')));
  await assertFails(updateDoc(m('p1'), { text: 'edited' }));
  await assertFails(deleteDoc(m('p1')));
});

test('messages: closed once a booking is cancelled or declined', async () => {
  await seedBooking('b1', { status: 'cancelled' });
  await assertFails(setDoc(doc(as('p1'), 'bookings', 'b1', 'messages', 'm'), msg('p1')));
  await seedBooking('b2', { status: 'requested' });
  await assertSucceeds(setDoc(doc(as('p1'), 'bookings', 'b2', 'messages', 'm'), msg('p1'))); // a question before the teacher answers
});

// requests and proposals -----------------------------------------------------
const requestData = (over = {}) => ({ parentUid: 'p1', subject: 'arabic', goal: 'تأسيس قراءة', childAge: 6, format: 'online', schedule: 'مرتين أسبوعياً', budgetMin: 100, budgetMax: 250, approach: 'ألعاب', status: 'open', createdAt: serverTimestamp(), expiresMs: future(24 * 14), ...over });

test('requests: a parent publishes one without child identity; teachers see open ones; others do not', async () => {
  await assertSucceeds(setDoc(doc(as('p1'), 'requests', 'r1'), requestData()));
  await assertFails(setDoc(doc(as('t1'), 'requests', 'r2'), requestData({ parentUid: 't1' })));
  await assertFails(setDoc(doc(as('p1'), 'requests', 'r3'), requestData({ childName: 'سلمى أحمد' }))); // no extra identity fields
  await assertFails(setDoc(doc(as('p1'), 'requests', 'r4'), requestData({ childAge: 30 })));
  await assertFails(setDoc(doc(as('p1'), 'requests', 'r5'), requestData({ goal: '' })));
  await assertFails(setDoc(doc(as('p1'), 'requests', 'r6'), requestData({ budgetMin: 500, budgetMax: 100 })));
  await assertFails(setDoc(doc(as('p1'), 'requests', 'r7'), requestData({ expiresMs: past() })));
  await assertFails(setDoc(doc(as('p1'), 'requests', 'r8'), requestData({ expiresMs: future(24 * 400) })));
  await assertFails(setDoc(doc(as('p1'), 'requests', 'r9'), requestData({ parentUid: 'p2' })));
  await assertSucceeds(getDoc(doc(as('p1'), 'requests', 'r1')));
  await assertSucceeds(getDoc(doc(as('t1'), 'requests', 'r1')));
  await assertFails(getDoc(doc(as('p2'), 'requests', 'r1')));
  const open = await assertSucceeds(getDocs(query(collection(as('t1'), 'requests'), where('status', '==', 'open'))));
  assert.equal(open.size, 1);
  await assertFails(updateDoc(doc(as('t1'), 'requests', 'r1'), { status: 'closed' }));
  await assertFails(updateDoc(doc(as('p1'), 'requests', 'r1'), { goal: 'changed' }));
  await assertSucceeds(updateDoc(doc(as('p1'), 'requests', 'r1'), { status: 'closed' }));
  await assertFails(getDoc(doc(as('t2'), 'requests', 'r1'))); // closed requests disappear for teachers
});

const proposalData = (over = {}) => ({ requestId: 'r1', parentUid: 'p1', teacherUid: 't1', teacherName: 'T1', message: 'أقترح خطة', priceEgp: 200, minutes: 45, schedule: 'السبت', firstSteps: 'تقييم', status: 'sent', createdAt: serverTimestamp(), ...over });

test('proposals: one per teacher per open request; only the parent and the proposing teacher read', async () => {
  await env.withSecurityRulesDisabled(async (ctx) => setDoc(doc(ctx.firestore(), 'requests', 'r1'), { ...requestData(), createdAt: new Date() }));
  await assertSucceeds(setDoc(doc(as('t1'), 'proposals', 'r1_t1'), proposalData()));
  await assertFails(setDoc(doc(as('t1'), 'proposals', 'r1_other'), proposalData())); // id must be request_teacher
  await assertFails(setDoc(doc(as('t2'), 'proposals', 'r1_t2'), proposalData({ teacherUid: 't1' }))); // spoofed teacher
  await assertFails(setDoc(doc(as('p2'), 'proposals', 'r1_p2'), proposalData({ teacherUid: 'p2' }))); // a parent cannot propose
  await assertFails(setDoc(doc(as('t2'), 'proposals', 'r1_t2'), proposalData({ teacherUid: 't2', parentUid: 'p2' }))); // wrong parent
  await assertFails(setDoc(doc(as('t2'), 'proposals', 'r1_t2'), proposalData({ teacherUid: 't2', priceEgp: -5 })));
  await assertFails(setDoc(doc(as('t2'), 'proposals', 'r1_t2'), proposalData({ teacherUid: 't2', message: '' })));
  await assertSucceeds(getDoc(doc(as('p1'), 'proposals', 'r1_t1')));
  await assertSucceeds(getDoc(doc(as('t1'), 'proposals', 'r1_t1')));
  await assertFails(getDoc(doc(as('t2'), 'proposals', 'r1_t1')));
  await assertFails(getDoc(doc(as('p2'), 'proposals', 'r1_t1')));
  // A closed request takes no more proposals.
  await env.withSecurityRulesDisabled(async (ctx) => updateDoc(doc(ctx.firestore(), 'requests', 'r1'), { status: 'closed' }));
  await assertFails(setDoc(doc(as('t2'), 'proposals', 'r1_t2'), proposalData({ teacherUid: 't2' })));
});

test('proposals: the parent shortlists, declines or accepts; accepting creates a matching booking in the same batch', async () => {
  await env.withSecurityRulesDisabled(async (ctx) => {
    await setDoc(doc(ctx.firestore(), 'requests', 'r1'), { ...requestData(), createdAt: new Date() });
    await setDoc(doc(ctx.firestore(), 'proposals', 'r1_t1'), { ...proposalData(), createdAt: new Date() });
  });
  await assertFails(updateDoc(doc(as('t1'), 'proposals', 'r1_t1'), { status: 'accepted' })); // a teacher cannot accept their own
  await assertFails(updateDoc(doc(as('p2'), 'proposals', 'r1_t1'), { status: 'accepted' }));
  await assertSucceeds(updateDoc(doc(as('p1'), 'proposals', 'r1_t1'), { status: 'shortlisted' }));
  // A booking claiming a proposal that is not accepted is refused.
  await assertFails(setDoc(doc(as('p1'), 'bookings', 'bp'), bookingData({ proposalId: 'r1_t1' })));
  const db = as('p1');
  const b = writeBatch(db);
  b.update(doc(db, 'proposals', 'r1_t1'), { status: 'accepted' });
  b.set(doc(db, 'bookings', 'bp'), bookingData({ proposalId: 'r1_t1', whenText: 'السبت' }));
  await assertSucceeds(b.commit());
  // Nobody else can attach a booking to that proposal.
  await assertFails(setDoc(doc(as('p2'), 'bookings', 'bx'), bookingData({ parentUid: 'p2', proposalId: 'r1_t1' })));
  await assertFails(updateDoc(doc(as('p1'), 'proposals', 'r1_t1'), { status: 'declined' })); // final
});

test('proposals: the teacher can withdraw, and then cannot be accepted', async () => {
  await env.withSecurityRulesDisabled(async (ctx) => {
    await setDoc(doc(ctx.firestore(), 'requests', 'r1'), { ...requestData(), createdAt: new Date() });
    await setDoc(doc(ctx.firestore(), 'proposals', 'r1_t1'), { ...proposalData(), createdAt: new Date() });
  });
  await assertSucceeds(updateDoc(doc(as('t1'), 'proposals', 'r1_t1'), { status: 'withdrawn' }));
  await assertFails(updateDoc(doc(as('p1'), 'proposals', 'r1_t1'), { status: 'accepted' }));
});

// portfolio -----------------------------------------------------------------
const work = (over = {}) => ({ teacherUid: 't1', type: 'worksheet', title: 'Letter ba', description: 'tracing', status: 'published', ...over });
async function seedWork(id, over = {}) {
  await env.withSecurityRulesDisabled(async (ctx) => {
    await setDoc(doc(ctx.firestore(), 'portfolio', id), work(over));
  });
}

test('a teacher can create a draft or published work; parents cannot create works', async () => {
  await assertSucceeds(setDoc(doc(as('t1'), 'portfolio', 'w1'), work({ status: 'draft' })));
  await assertSucceeds(setDoc(doc(as('t1'), 'portfolio', 'w2'), work()));
  await assertFails(setDoc(doc(as('p1'), 'portfolio', 'w3'), work({ teacherUid: 'p1' })));
});

test('a teacher cannot create a work for someone else, nor as hidden, nor with bad fields', async () => {
  await assertFails(setDoc(doc(as('t1'), 'portfolio', 'w1'), work({ teacherUid: 't2' })));
  await assertFails(setDoc(doc(as('t1'), 'portfolio', 'w1'), work({ status: 'hidden' })));
  await assertFails(setDoc(doc(as('t1'), 'portfolio', 'w1'), work({ title: '' })));
  await assertFails(setDoc(doc(as('t1'), 'portfolio', 'w1'), work({ title: 'x'.repeat(81) })));
  await assertFails(setDoc(doc(as('t1'), 'portfolio', 'w1'), work({ description: 'x'.repeat(601) })));
  await assertFails(setDoc(doc(as('t1'), 'portfolio', 'w1'), work({ type: 'video' })));
  await assertFails(setDoc(doc(as('t1'), 'portfolio', 'w1'), work({ imageB64: 'x'.repeat(150000) })));
});

test('parents read published works only; drafts and hidden works are private', async () => {
  await seedWork('pub'); await seedWork('dr', { status: 'draft' }); await seedWork('hid', { status: 'hidden' });
  await assertSucceeds(getDoc(doc(as('p1'), 'portfolio', 'pub')));
  await assertFails(getDoc(doc(as('p1'), 'portfolio', 'dr')));
  await assertFails(getDoc(doc(as('p1'), 'portfolio', 'hid')));
  const published = query(collection(as('p1'), 'portfolio'), where('teacherUid', '==', 't1'), where('status', '==', 'published'));
  const snap = await assertSucceeds(getDocs(published));
  assert.equal(snap.size, 1);
  await assertFails(getDocs(query(collection(as('p1'), 'portfolio'), where('teacherUid', '==', 't1')))); // a list that could include drafts
  // the owner teacher reads all of their own
  await assertSucceeds(getDoc(doc(as('t1'), 'portfolio', 'dr')));
  await assertSucceeds(getDocs(query(collection(as('t1'), 'portfolio'), where('teacherUid', '==', 't1'))));
  await assertFails(getDoc(doc(as('t2'), 'portfolio', 'dr')));
});

test('a teacher can publish, unpublish and edit their own work, but not change its owner', async () => {
  await seedWork('w1', { status: 'draft' });
  await assertSucceeds(updateDoc(doc(as('t1'), 'portfolio', 'w1'), { status: 'published' }));
  await assertSucceeds(updateDoc(doc(as('t1'), 'portfolio', 'w1'), { status: 'draft', title: 'New title' }));
  await assertFails(updateDoc(doc(as('t1'), 'portfolio', 'w1'), { teacherUid: 't2' }));
  await assertFails(updateDoc(doc(as('t1'), 'portfolio', 'w1'), { status: 'hidden' }));
  await assertFails(updateDoc(doc(as('t2'), 'portfolio', 'w1'), { title: 'Hijacked' }));
});

test('a teacher cannot lift or edit a work the owner hid', async () => {
  await seedWork('h1', { status: 'hidden' });
  await assertFails(updateDoc(doc(as('t1'), 'portfolio', 'h1'), { status: 'published' }));
  await assertFails(updateDoc(doc(as('t1'), 'portfolio', 'h1'), { title: 'Edited' }));
  await assertSucceeds(deleteDoc(doc(as('t1'), 'portfolio', 'h1'))); // they may still remove their own
});

test('only the owner teacher can delete a work', async () => {
  await seedWork('w1');
  await assertFails(deleteDoc(doc(as('t2'), 'portfolio', 'w1')));
  await assertFails(deleteDoc(doc(as('p1'), 'portfolio', 'w1')));
  await assertSucceeds(deleteDoc(doc(as('t1'), 'portfolio', 'w1')));
});

test('the intro video link must be a short https link', async () => {
  const base = { name: 'T1', bio: 'b', subjects: ['math'], languages: ['العربية'], priceNote: '', status: 'approved' };
  await assertSucceeds(updateDoc(doc(as('t1'), 'teachers', 't1'), { introVideoUrl: 'https://example.com/v/1' }));
  await assertSucceeds(updateDoc(doc(as('t1'), 'teachers', 't1'), { introVideoUrl: '' }));
  await assertFails(updateDoc(doc(as('t1'), 'teachers', 't1'), { introVideoUrl: 'http://example.com/v' }));
  await assertFails(updateDoc(doc(as('t1'), 'teachers', 't1'), { introVideoUrl: 'javascript:alert(1)' }));
  await assertFails(updateDoc(doc(as('t1'), 'teachers', 't1'), { introVideoUrl: 'https://exa mple.com' }));
  await assertFails(updateDoc(doc(as('t1'), 'teachers', 't1'), { introVideoUrl: 'https://' + 'a'.repeat(300) }));
  void base;
});

// family chat --------------------------------------------------------------
const inviteData = (over = {}) => ({
  familyId: 'p1', parentName: 'Sara', relation: 'grandma', children: { c1: 'Lina' }, used: false, createdAt: serverTimestamp(), ...over,
});
async function seedInvite(code = 'ABC123', over = {}) {
  await env.withSecurityRulesDisabled(async (ctx) => {
    await setDoc(doc(ctx.firestore(), 'invites', code), inviteData({ createdAt: new Date(), ...over }));
  });
}
async function seedRelative(rel = 'r1', status = 'active', fid = 'p1') {
  await env.withSecurityRulesDisabled(async (ctx) => {
    await setDoc(doc(ctx.firestore(), 'families', fid, 'relatives', rel), { name: 'Nana', relation: 'grandma', status, children: { c1: 'Lina' }, code: 'ABC123' });
  });
}
const fmsg = (over = {}) => ({
  threadId: 'c1__r1', childId: 'c1', childName: 'Lina', relUid: 'r1', from: 'child', kind: 'phrase', body: 'p_love', at: serverTimestamp(), ...over,
});
const msgRef = (db, id = 'm1', fid = 'p1') => doc(db, 'families', fid, 'messages', id);

test('family: only a parent makes an invite for their own family', async () => {
  await assertSucceeds(setDoc(doc(as('p1'), 'invites', 'ABC123'), inviteData()));
  await assertFails(setDoc(doc(as('p2'), 'invites', 'ZZZ'), inviteData())); // someone else's family id
  await assertFails(setDoc(doc(as('t1'), 'invites', 'TTT'), inviteData({ familyId: 't1' }))); // not a parent
  await assertFails(setDoc(doc(as('p1'), 'invites', 'USED'), inviteData({ used: true })));
  await assertFails(setDoc(doc(as('p1'), 'invites', 'EMPTY'), inviteData({ children: {} })));
});

test('family: an invite can be read by its code but never listed', async () => {
  await seedInvite();
  await assertSucceeds(getDoc(doc(as('r1'), 'invites', 'ABC123')));
  await assertFails(getDocs(collection(as('r1'), 'invites')));
});

test('family: a relative joins once with the code and starts pending', async () => {
  await seedInvite();
  const db = as('r1');
  const b = writeBatch(db);
  b.set(doc(db, 'families', 'p1', 'relatives', 'r1'), { name: 'Nana', relation: 'grandma', status: 'pending', children: { c1: 'Lina' }, code: 'ABC123' });
  b.update(doc(db, 'invites', 'ABC123'), { used: true, usedBy: 'r1' });
  b.set(doc(db, 'users', 'r1', 'families', 'p1'), { parentName: 'Sara' });
  await assertSucceeds(b.commit());
  // the same code cannot be used by a second person
  const db2 = as('r2');
  const b2 = writeBatch(db2);
  b2.set(doc(db2, 'families', 'p1', 'relatives', 'r2'), { name: 'Uncle', relation: 'grandma', status: 'pending', children: { c1: 'Lina' }, code: 'ABC123' });
  b2.update(doc(db2, 'invites', 'ABC123'), { used: true, usedBy: 'r2' });
  await assertFails(b2.commit());
});

test('family: a relative cannot join as active, with a wrong code, or with more children than invited', async () => {
  await seedInvite();
  const rel = (over) => ({ name: 'Nana', relation: 'grandma', status: 'pending', children: { c1: 'Lina' }, code: 'ABC123', ...over });
  await assertFails(setDoc(doc(as('r1'), 'families', 'p1', 'relatives', 'r1'), rel({ status: 'active' })));
  await assertFails(setDoc(doc(as('r1'), 'families', 'p1', 'relatives', 'r1'), rel({ code: 'NOPE' })));
  await assertFails(setDoc(doc(as('r1'), 'families', 'p1', 'relatives', 'r1'), rel({ children: { c1: 'Lina', c2: 'Omar' } })));
  await assertFails(setDoc(doc(as('r1'), 'families', 'p1', 'relatives', 'r2'), rel({}))); // for someone else
  await assertFails(setDoc(doc(as('p2'), 'families', 'p1', 'relatives', 'p2'), rel({}))); // a parent is not a relative
});

test('family: only the parent approves, pauses or removes; a relative cannot change their own status', async () => {
  await seedRelative('r1', 'pending');
  await assertFails(updateDoc(doc(as('r1'), 'families', 'p1', 'relatives', 'r1'), { status: 'active' }));
  await assertFails(updateDoc(doc(as('p2'), 'families', 'p1', 'relatives', 'r1'), { status: 'active' }));
  await assertSucceeds(updateDoc(doc(as('p1'), 'families', 'p1', 'relatives', 'r1'), { status: 'active' }));
  await assertSucceeds(updateDoc(doc(as('p1'), 'families', 'p1', 'relatives', 'r1'), { status: 'paused' }));
  await assertFails(updateDoc(doc(as('p1'), 'families', 'p1', 'relatives', 'r1'), { name: 'Hacker' }));
  await assertFails(deleteDoc(doc(as('p1'), 'families', 'p1', 'relatives', 'r1')));
});

test('family: messages need an active relative linked to that child', async () => {
  await seedRelative('r1', 'active');
  await assertSucceeds(setDoc(msgRef(as('p1')), fmsg()));
  await assertSucceeds(setDoc(msgRef(as('r1'), 'm2'), fmsg({ from: 'relative', kind: 'text', body: 'Good night my star' })));
  await assertFails(setDoc(msgRef(as('p1'), 'm3'), fmsg({ childId: 'c2', threadId: 'c2__r1' }))); // not linked
  await seedRelative('r2', 'pending');
  await assertFails(setDoc(msgRef(as('p1'), 'm4'), fmsg({ relUid: 'r2', threadId: 'c1__r2' }))); // pending
  await env.withSecurityRulesDisabled(async (ctx) => { await updateDoc(doc(ctx.firestore(), 'families', 'p1', 'relatives', 'r1'), { status: 'paused' }); });
  await assertFails(setDoc(msgRef(as('p1'), 'm5'), fmsg())); // paused
  await assertFails(setDoc(msgRef(as('r1'), 'm6'), fmsg({ from: 'relative' })));
});

test('family: nobody can write as someone else', async () => {
  await seedRelative('r1', 'active');
  await assertFails(setDoc(msgRef(as('r1')), fmsg({ from: 'child' }))); // a relative writing as the child
  await assertFails(setDoc(msgRef(as('p1')), fmsg({ from: 'relative' }))); // the parent writing as the relative
  await assertFails(setDoc(msgRef(as('r2')), fmsg({ from: 'relative' }))); // another relative
  await assertFails(setDoc(msgRef(as('p2')), fmsg())); // another family's parent
});

test('family: message content is limited (kinds, length, no links or addresses)', async () => {
  await seedRelative('r1', 'active');
  const txt = (body) => fmsg({ from: 'relative', kind: 'text', body });
  await assertSucceeds(setDoc(msgRef(as('r1'), 'a'), txt('hello')));
  for (const [i, bad] of ['see https://x.y', 'WWW.site', 'a@b.c', 'x.com', 'ftp://a', '', 'x'.repeat(201)].entries()) {
    await assertFails(setDoc(msgRef(as('r1'), `bad${i}`), txt(bad)));
  }
  await assertFails(setDoc(msgRef(as('r1'), 'k'), fmsg({ from: 'relative', kind: 'image', body: 'x' })));
  await assertFails(setDoc(msgRef(as('p1'), 'ph'), fmsg({ body: 'drop table' }))); // phrases are ids
  await assertFails(setDoc(msgRef(as('r1'), 'extra'), { ...fmsg({ from: 'relative' }), photo: 'x' }));
  await assertFails(setDoc(msgRef(as('r1'), 'time'), fmsg({ from: 'relative', at: new Date(0) })));
});

test('family: the parent reads everything; a relative reads only their own thread; others nothing', async () => {
  await seedRelative('r1', 'active');
  await seedRelative('r2', 'active');
  await env.withSecurityRulesDisabled(async (ctx) => {
    const db = ctx.firestore();
    await setDoc(msgRef(db, 'x1'), { ...fmsg(), at: new Date() });
    await setDoc(msgRef(db, 'x2'), { ...fmsg({ relUid: 'r2', threadId: 'c1__r2' }), at: new Date() });
  });
  await assertSucceeds(getDocs(collection(as('p1'), 'families', 'p1', 'messages')));
  await assertSucceeds(getDocs(query(collection(as('r1'), 'families', 'p1', 'messages'), where('relUid', '==', 'r1'))));
  await assertFails(getDocs(collection(as('r1'), 'families', 'p1', 'messages'))); // unfiltered = other threads too
  await assertFails(getDoc(msgRef(as('r1'), 'x2'))); // r2's thread
  await assertFails(getDocs(collection(as('p2'), 'families', 'p1', 'messages')));
});

test('family: only the parent deletes messages; nobody edits them', async () => {
  await seedRelative('r1', 'active');
  await env.withSecurityRulesDisabled(async (ctx) => { await setDoc(msgRef(ctx.firestore(), 'x1'), { ...fmsg(), at: new Date() }); });
  await assertFails(updateDoc(msgRef(as('p1'), 'x1'), { body: 'p_miss' }));
  await assertFails(deleteDoc(msgRef(as('r1'), 'x1')));
  await assertSucceeds(deleteDoc(msgRef(as('p1'), 'x1')));
});

// family calls -------------------------------------------------------------
const callRef = (db, id = 'k1', fid = 'p1') => doc(db, 'families', fid, 'calls', id);
const callData = (over = {}) => ({
  childId: 'c1', childName: 'Lina', relUid: 'r1', from: 'parent', status: 'ringing', offer: { sdp: 'v=0', type: 'offer' }, createdAt: serverTimestamp(), ...over,
});
async function seedCallsOn(rel = 'r1', status = 'active', calls = true) {
  await env.withSecurityRulesDisabled(async (ctx) => {
    await setDoc(doc(ctx.firestore(), 'families', 'p1', 'relatives', rel), { name: 'Nana', relation: 'grandma', status, children: { c1: 'Lina' }, code: 'ABC123', ...(calls ? { calls: true } : {}) });
  });
}

test('calls: only the parent turns calls on for a relative', async () => {
  await seedRelative('r1', 'active');
  await assertFails(updateDoc(doc(as('r1'), 'families', 'p1', 'relatives', 'r1'), { calls: true }));
  await assertFails(updateDoc(doc(as('p2'), 'families', 'p1', 'relatives', 'r1'), { calls: true }));
  await assertSucceeds(updateDoc(doc(as('p1'), 'families', 'p1', 'relatives', 'r1'), { calls: true }));
});

test('calls: nobody can start a call until the parent switched calls on', async () => {
  await seedCallsOn('r1', 'active', false);
  await assertFails(setDoc(callRef(as('p1')), callData()));
  await assertFails(setDoc(callRef(as('r1')), callData({ from: 'relative' })));
});

test('calls: the parent calls on the child behalf, the relative calls the parent, nobody else', async () => {
  await seedCallsOn();
  await assertSucceeds(setDoc(callRef(as('p1'), 'a'), callData()));
  await assertSucceeds(setDoc(callRef(as('r1'), 'b'), callData({ from: 'relative' })));
  await assertFails(setDoc(callRef(as('r1'), 'c'), callData({ from: 'parent' }))); // relative pretending to be the parent
  await assertFails(setDoc(callRef(as('p1'), 'd'), callData({ from: 'relative' }))); // parent pretending to be the relative
  await assertFails(setDoc(callRef(as('r2'), 'e'), callData({ from: 'relative' }))); // someone else
  await assertFails(setDoc(callRef(as('p1'), 'f'), callData({ childId: 'c2' }))); // not linked
  await assertFails(setDoc(callRef(as('p1'), 'g'), callData({ status: 'accepted' }))); // must start ringing
  await assertFails(setDoc(callRef(as('p1'), 'h'), { ...callData(), video: true })); // no extra fields
});

test('calls: not for a paused relative', async () => {
  await seedCallsOn('r1', 'paused');
  await assertFails(setDoc(callRef(as('p1')), callData()));
});

test('calls: only the callee can answer; either side can end; nobody else touches it', async () => {
  await seedCallsOn();
  await env.withSecurityRulesDisabled(async (ctx) => { await setDoc(callRef(ctx.firestore()), { ...callData(), createdAt: new Date() }); });
  const answer = { sdp: 'v=0', type: 'answer' };
  await assertFails(updateDoc(callRef(as('p1')), { status: 'accepted', answer })); // the caller cannot answer their own call
  await assertFails(updateDoc(callRef(as('r2')), { status: 'ended' })); // a stranger
  await assertSucceeds(updateDoc(callRef(as('r1')), { status: 'accepted', answer }));
  await assertFails(updateDoc(callRef(as('r1')), { offer: { sdp: 'x', type: 'offer' } })); // only status/answer
  await assertSucceeds(updateDoc(callRef(as('p1')), { status: 'ended' }));
});

test('calls: signalling is read only by the two sides', async () => {
  await seedCallsOn();
  await env.withSecurityRulesDisabled(async (ctx) => { await setDoc(callRef(ctx.firestore()), { ...callData(), createdAt: new Date() }); });
  await assertSucceeds(getDoc(callRef(as('p1'))));
  await assertSucceeds(getDoc(callRef(as('r1'))));
  await assertFails(getDoc(callRef(as('r2'))));
  await assertFails(getDoc(callRef(as('p2'))));
});

test('calls: network candidates are written by the right side only and kept small', async () => {
  await seedCallsOn();
  await env.withSecurityRulesDisabled(async (ctx) => { await setDoc(callRef(ctx.firestore()), { ...callData(), createdAt: new Date() }); });
  const cand = (db, from, data = '{"candidate":"x"}') => setDoc(doc(db, 'families', 'p1', 'calls', 'k1', 'candidates', String(Math.random())), { from, data });
  await assertSucceeds(cand(as('p1'), 'parent'));
  await assertSucceeds(cand(as('r1'), 'relative'));
  await assertFails(cand(as('r1'), 'parent'));
  await assertFails(cand(as('r2'), 'relative'));
  await assertFails(cand(as('p1'), 'parent', 'x'.repeat(2001)));
  await assertSucceeds(getDocs(collection(as('r1'), 'families', 'p1', 'calls', 'k1', 'candidates')));
  await assertFails(getDocs(collection(as('r2'), 'families', 'p1', 'calls', 'k1', 'candidates')));
});

test('family: the parent can set a short next-call note; nobody else; no links; not too long', async () => {
  await seedRelative('r1', 'active');
  const ref = (db) => doc(db, 'families', 'p1', 'relatives', 'r1');
  await assertSucceeds(updateDoc(ref(as('p1')), { nextCall: 'Friday 6 pm' }));
  await assertSucceeds(updateDoc(ref(as('p1')), { nextCall: '' }));
  await assertFails(updateDoc(ref(as('r1')), { nextCall: 'now' }));
  await assertFails(updateDoc(ref(as('p2')), { nextCall: 'now' }));
  await assertFails(updateDoc(ref(as('p1')), { nextCall: 'x'.repeat(61) }));
  await assertFails(updateDoc(ref(as('p1')), { nextCall: 'see https://x.y' }));
  await assertFails(updateDoc(ref(as('p1')), { nextCall: 'mail a@b.c' }));
});

// connection requests (replace invite codes) -------------------------------
const asMail = (uid, email) => env.authenticatedContext(uid, { email }).firestore();
const reqRef = (db, id = 'q1') => doc(db, 'connectRequests', id);
const reqData = (over = {}) => ({
  familyId: 'p1', parentName: 'Sara', toEmail: 'nana@test.com', relation: 'grandma', children: { c1: 'Lina' }, status: 'pending', createdAt: serverTimestamp(), ...over,
});
async function seedReq(id = 'q1', over = {}) {
  await env.withSecurityRulesDisabled(async (ctx) => { await setDoc(reqRef(ctx.firestore(), id), reqData({ createdAt: new Date(), ...over })); });
}
const accept = (db, uid, reqId = 'q1', over = {}, relOver = {}) => {
  const b = writeBatch(db);
  b.set(doc(db, 'families', 'p1', 'relatives', uid), { name: 'Nana', relation: 'grandma', status: 'active', children: { c1: 'Lina' }, requestId: reqId, ...relOver });
  b.update(reqRef(db, reqId), { status: 'accepted', ...over });
  return b.commit();
};

test('requests: only a parent sends one, for their own family, to a plausible e-mail, with children', async () => {
  await assertSucceeds(setDoc(reqRef(as('p1')), reqData()));
  await assertFails(setDoc(reqRef(as('p2'), 'a'), reqData())); // someone else's family id
  await assertFails(setDoc(reqRef(as('t1'), 'b'), reqData({ familyId: 't1' }))); // a teacher
  await assertFails(setDoc(reqRef(as('p1'), 'c'), reqData({ toEmail: 'not-an-email' })));
  await assertFails(setDoc(reqRef(as('p1'), 'd'), reqData({ toEmail: 'Nana@Test.com' }))); // must be lower case
  await assertFails(setDoc(reqRef(as('p1'), 'e'), reqData({ children: {} })));
  await assertFails(setDoc(reqRef(as('p1'), 'f'), reqData({ status: 'accepted' })));
});

test('requests: read only by the parent and by the person it was sent to (matching e-mail)', async () => {
  await seedReq();
  await assertSucceeds(getDoc(reqRef(as('p1'))));
  await assertSucceeds(getDoc(reqRef(asMail('r1', 'Nana@Test.com'))));
  await assertFails(getDoc(reqRef(asMail('r2', 'other@test.com'))));
  await assertFails(getDoc(reqRef(as('p2'))));
  await assertSucceeds(getDocs(query(collection(asMail('r1', 'nana@test.com'), 'connectRequests'), where('toEmail', '==', 'nana@test.com'))));
  await assertFails(getDocs(collection(asMail('r2', 'other@test.com'), 'connectRequests')));
});

test('requests: the right person accepts in one batch and becomes an active relative; nobody else can', async () => {
  await seedReq();
  await assertFails(accept(asMail('r2', 'other@test.com'), 'r2', 'q1')); // wrong e-mail
  await assertFails(accept(as('r1'), 'r1', 'q1')); // no e-mail on the account
  await assertFails(accept(asMail('r1', 'nana@test.com'), 'r1', 'q1', {}, { status: 'pending' })); // cannot choose its own status
  await assertFails(accept(asMail('r1', 'nana@test.com'), 'r1', 'q1', {}, { children: { c1: 'Lina', c2: 'Omar' } })); // more children than asked
  await assertFails(accept(asMail('r1', 'nana@test.com'), 'r1', 'q1', {}, { relation: 'father' }));
  await assertSucceeds(accept(asMail('r1', 'Nana@test.com'), 'r1', 'q1'));
  await assertFails(accept(asMail('r1', 'nana@test.com'), 'r1', 'q1')); // already used
});

test('requests: a relative cannot join without the batch marking the request accepted', async () => {
  await seedReq();
  const db = asMail('r1', 'nana@test.com');
  await assertFails(setDoc(doc(db, 'families', 'p1', 'relatives', 'r1'), { name: 'Nana', relation: 'grandma', status: 'active', children: { c1: 'Lina' }, requestId: 'q1' }));
});

test('requests: decline, and the parent can cancel while it waits', async () => {
  await seedReq();
  await assertSucceeds(updateDoc(reqRef(asMail('r1', 'nana@test.com')), { status: 'declined' }));
  await assertFails(updateDoc(reqRef(as('p1')), { status: 'cancelled' })); // no longer pending
  await seedReq('q2');
  await assertFails(updateDoc(reqRef(as('p2'), 'q2'), { status: 'cancelled' })); // someone else
  await assertSucceeds(updateDoc(reqRef(as('p1'), 'q2'), { status: 'cancelled' }));
  await seedReq('q3');
  await assertFails(updateDoc(reqRef(as('p1'), 'q3'), { status: 'accepted' })); // the parent cannot accept for them
  await assertFails(updateDoc(reqRef(asMail('r1', 'nana@test.com'), 'q3'), { status: 'accepted', toEmail: 'x@y.z' })); // only status changes
});

// voice messages ---------------------------------------------------------------
const voiceRef = (db, id = 'v1', fid = 'p1') => doc(db, 'families', fid, 'voices', id);
const voiceData = (over = {}) => ({ childId: 'c1', relUid: 'r1', from: 'relative', data: 'AAAA', mime: 'audio/webm', secs: 5, at: serverTimestamp(), ...over });
async function seedVoiceOn(rel = 'r1', status = 'active', voice = true) {
  await env.withSecurityRulesDisabled(async (ctx) => {
    await setDoc(doc(ctx.firestore(), 'families', 'p1', 'relatives', rel), { name: 'Nana', relation: 'grandma', status, children: { c1: 'Lina' }, code: 'X', ...(voice ? { voice: true } : {}) });
  });
}

test('voice: only the parent turns voice messages on for a relative', async () => {
  await seedRelative('r1', 'active');
  await assertFails(updateDoc(doc(as('r1'), 'families', 'p1', 'relatives', 'r1'), { voice: true }));
  await assertSucceeds(updateDoc(doc(as('p1'), 'families', 'p1', 'relatives', 'r1'), { voice: true }));
  await assertFails(updateDoc(doc(as('p1'), 'families', 'p1', 'relatives', 'r1'), { voice: 'yes' }));
});

test('voice: nobody can send a recording until the parent switched voice on', async () => {
  await seedVoiceOn('r1', 'active', false);
  await assertFails(setDoc(voiceRef(as('r1')), voiceData()));
  await assertFails(setDoc(voiceRef(as('p1'), 'v2'), voiceData({ from: 'child' })));
});

test('voice: the right person records for the right child; limits on size, length and type', async () => {
  await seedVoiceOn();
  await assertSucceeds(setDoc(voiceRef(as('r1'), 'a'), voiceData()));
  await assertSucceeds(setDoc(voiceRef(as('p1'), 'b'), voiceData({ from: 'child' })));
  await assertFails(setDoc(voiceRef(as('r1'), 'c'), voiceData({ from: 'child' }))); // relative pretending to be the child
  await assertFails(setDoc(voiceRef(as('p1'), 'd'), voiceData({ from: 'relative' }))); // parent pretending to be the relative
  await assertFails(setDoc(voiceRef(as('r2'), 'e'), voiceData())); // someone else
  await assertFails(setDoc(voiceRef(as('r1'), 'f'), voiceData({ childId: 'c2' }))); // not linked
  await assertFails(setDoc(voiceRef(as('r1'), 'g'), voiceData({ secs: 31 })));
  await assertFails(setDoc(voiceRef(as('r1'), 'h'), voiceData({ secs: 0 })));
  await assertFails(setDoc(voiceRef(as('r1'), 'i'), voiceData({ data: 'x'.repeat(420001) })));
  await assertFails(setDoc(voiceRef(as('r1'), 'j'), voiceData({ mime: 'video/mp4' })));
  await assertFails(setDoc(voiceRef(as('r1'), 'k'), voiceData({ at: new Date(0) })));
  await assertFails(setDoc(voiceRef(as('r1'), 'l'), { ...voiceData(), extra: 1 }));
});

test('voice: a voice message needs its recording and the voice switch; other kinds cannot carry secs', async () => {
  await seedVoiceOn();
  await assertFails(setDoc(msgRef(as('r1'), 'm1'), fmsg({ from: 'relative', kind: 'voice', body: 'nope', secs: 5 }))); // no such recording
  await assertSucceeds(setDoc(voiceRef(as('r1'), 'vv'), voiceData()));
  await assertSucceeds(setDoc(msgRef(as('r1'), 'm2'), fmsg({ from: 'relative', kind: 'voice', body: 'vv', secs: 5 })));
  await assertFails(setDoc(msgRef(as('r1'), 'm3'), fmsg({ from: 'relative', kind: 'voice', body: 'vv', secs: 99 })));
  await assertFails(setDoc(msgRef(as('r1'), 'm4'), fmsg({ from: 'relative', kind: 'text', body: 'hi', secs: 5 })));
});

test('voice: recordings are read only by the parent and that relative; only the parent deletes', async () => {
  await seedVoiceOn();
  await seedRelative('r2', 'active');
  await env.withSecurityRulesDisabled(async (ctx) => { await setDoc(voiceRef(ctx.firestore()), { ...voiceData(), at: new Date() }); });
  await assertSucceeds(getDoc(voiceRef(as('p1'))));
  await assertSucceeds(getDoc(voiceRef(as('r1'))));
  await assertFails(getDoc(voiceRef(as('r2'))));
  await assertFails(getDoc(voiceRef(as('p2'))));
  await assertFails(updateDoc(voiceRef(as('p1')), { secs: 6 }));
  await assertFails(deleteDoc(voiceRef(as('r1'))));
  await assertSucceeds(deleteDoc(voiceRef(as('p1'))));
});

// video calls ----------------------------------------------------------------
test('video: only the parent turns video on, and only together with calls', async () => {
  await seedCallsOn('r1', 'active', false); // calls off
  const ref = (db) => doc(db, 'families', 'p1', 'relatives', 'r1');
  await assertFails(updateDoc(ref(as('r1')), { video: true }));
  await assertFails(updateDoc(ref(as('p1')), { video: true })); // calls are off
  await assertSucceeds(updateDoc(ref(as('p1')), { calls: true, video: true }));
});

test('video: a video call needs the video switch; a voice call is unaffected', async () => {
  await seedCallsOn(); // calls on, video off
  await assertSucceeds(setDoc(callRef(as('p1'), 'a'), callData()));
  await assertFails(setDoc(callRef(as('p1'), 'b'), callData({ video: true })));
  await assertFails(setDoc(callRef(as('r1'), 'c'), callData({ from: 'relative', video: true })));
  await env.withSecurityRulesDisabled(async (ctx) => { await updateDoc(doc(ctx.firestore(), 'families', 'p1', 'relatives', 'r1'), { video: true }); });
  await assertSucceeds(setDoc(callRef(as('p1'), 'd'), callData({ video: true })));
  await assertSucceeds(setDoc(callRef(as('r1'), 'e'), callData({ from: 'relative', video: true })));
  await assertFails(setDoc(callRef(as('p1'), 'f'), callData({ video: 'yes' })));
  await assertFails(setDoc(callRef(as('p1'), 'g'), callData({ video: false }))); // either true or absent
});

test('calls: the parent can delete old call records and their network candidates; nobody else', async () => {
  await seedCallsOn();
  await env.withSecurityRulesDisabled(async (ctx) => {
    const db = ctx.firestore();
    await setDoc(callRef(db), { ...callData(), status: 'ended', createdAt: new Date() });
    await setDoc(doc(db, 'families', 'p1', 'calls', 'k1', 'candidates', 'c1'), { from: 'parent', data: '{}' });
  });
  const cand = (db) => doc(db, 'families', 'p1', 'calls', 'k1', 'candidates', 'c1');
  await assertFails(deleteDoc(cand(as('r1'))));
  await assertFails(deleteDoc(cand(as('p2'))));
  await assertSucceeds(deleteDoc(cand(as('p1'))));
  await assertFails(deleteDoc(callRef(as('r1'))));
  await assertSucceeds(deleteDoc(callRef(as('p1'))));
});
