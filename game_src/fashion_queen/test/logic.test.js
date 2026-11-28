
import fs from 'node:fs';

test('Layla anchor: title names Layla of Egypt; runway praise comes from the audience, not judges', () => {
  const i18n = fs.readFileSync(new URL('../src/i18n.js', import.meta.url), 'utf8');
  assert.ok(i18n.includes('ليلى ملكة أزياء مصر'));
  assert.ok(i18n.includes('الجمهور بيصفق لك'));
  assert.ok(i18n.includes('الجمهور بيهتف باسمك'));
});
