import { test, expect } from "@playwright/test";
import { beforeEach } from "node:test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000");
});

test("has page title", async ({ page }) => {
  await expect(page).toHaveTitle(/Door Game/);
});

test("home has link to Door Game", async ({ page }) => {
  await expect(page.locator("a > button")).toHaveText("Entrar na Porta");
});
test("titulo do jogo deve estar presente na tela", async ({ page }) => {
  await expect(page.locator("h1")).toHaveText("Alguma coisa aconteceu");
});

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });
