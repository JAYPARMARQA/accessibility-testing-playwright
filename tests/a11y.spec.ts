import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('home page has no serious accessibility violations', async ({ page }) => {
  await page.goto(process.env.BASE_URL ?? 'https://example.com');
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations.filter((v) => ['serious', 'critical'].includes(v.impact ?? '')).toEqual([]);
});
