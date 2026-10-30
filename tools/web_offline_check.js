const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 390, height: 800 } });
  const page = await ctx.newPage();
  const log = [];
  page.on('requestfailed', r => log.push('FAILED ' + r.url().slice(0, 110)));
  page.on('console', m => { if (m.type() === 'error') log.push('console.error ' + m.text().slice(0, 140)); });
  const t0 = Date.now();
  await page.goto('http://localhost:8099/', { waitUntil: 'load' });
  await page.waitForTimeout(12000);
  const online = await page.evaluate(() => ({
    glass: !!document.querySelector('flt-glass-pane'),
    sw: navigator.serviceWorker ? 'supported' : 'none',
  }));
  const regs = await page.evaluate(async () => (await navigator.serviceWorker.getRegistrations()).map(r => r.active && r.active.scriptURL));
  const cacheNames = await page.evaluate(async () => await caches.keys());
  await page.screenshot({ path: '/tmp/web_online.png' });
  console.log('online first load:', JSON.stringify(online), 'ms to settle ~', Date.now() - t0, 'registrations:', JSON.stringify(regs), 'caches:', JSON.stringify(cacheNames));
  // go offline and reload
  await ctx.setOffline(true);
  log.push('--- offline reload ---');
  let navErr = null;
  try { await page.reload({ waitUntil: 'load', timeout: 20000 }); } catch (e) { navErr = String(e).slice(0, 160); }
  await page.waitForTimeout(8000);
  const off = await page.evaluate(() => ({ glass: !!document.querySelector('flt-glass-pane'), title: document.title })).catch(e => ({ err: String(e).slice(0, 100) }));
  await page.screenshot({ path: '/tmp/web_offline.png' });
  console.log('offline reload:', JSON.stringify(off), 'navigation error:', navErr);
  console.log(log.join('\n'));
  await browser.close();
})();
