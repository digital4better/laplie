import { expect, test } from "@playwright/test";

test("index page has expected description", async ({ page }) => {
  await page.goto("/laplie");
  expect(await page.textContent(".header--motd")).toBe(
    " Le PLIE est un dispositif territorial qui vise à faciliter l’accès à l’emploi des publics les plus en difficulté."
  );
});
