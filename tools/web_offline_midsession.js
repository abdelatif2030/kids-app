const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 390, height: 800 } });
  const page = await ctx.newPage();
  await page.goto('http://localhost:8099/', { waitUntil: 'load' });
  await page.waitForTimeout(12000);
  await page.screenshot({ path: '/tmp/mid_1_online.png' });
  await ctx.setOffline(true);
  // tap the first language button (Arabic) near the middle of the screen
  await page.mouse.click(195, 520);
  await page.waitForTimeout(4000);
  await page.screenshot({ path: '/tmp/mid_2_offline_after_tap.png' });
  console.log('done');
  await browser.close();
})();
