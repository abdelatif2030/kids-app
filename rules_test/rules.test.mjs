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
    for (const [uid, role] of [['p1', 'parent'], ['p2', 'parent'], ['t1', 'teacher'], ['t2', 'teacher']]) {
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
