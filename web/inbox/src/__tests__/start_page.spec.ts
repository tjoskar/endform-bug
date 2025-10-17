import { test, expect } from "@playwright/test";
import { hello } from "@endform/sdk/common";

test('should display "Hello, React!" on the start page', async ({
  page,
  request,
}) => {
  // await fetch("http://localhost:3001/api/hello", {
  //   method: 'POST',
  // }).then(response => response.json()).then(data => {
  //   console.log(data);
  // });
  await request.post(`http://localhost:3001/api/hello`, {
    data: {},
    headers: {
      "content-type": "application/json",
    },
    failOnStatusCode: true,
    maxRetries: 1,
  });
  console.log(hello());
  await page.goto("http://localhost:1337");
  await expect(page.locator("text=Hello, React!")).toBeVisible();
});
