import { test, expect } from '@playwright/test';
import { hello } from '@endform/sdk/common';

test('should display "Hello, React!" on the start page', async ({ page }) => {
  console.log(hello());
  await page.goto('http://localhost:1337');
  await expect(page.locator('text=Hello, React!')).toBeVisible();
});
