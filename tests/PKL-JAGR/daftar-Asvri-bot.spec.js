// @ts-check
import { test, expect } from "@playwright/test";

test.describe("Toggle", () => {
  test("Kategori", async ({ page }) => {
    await page.goto("http://sim.dev.asvri.ai/");
    await page.locator('input[name="identifier"]').fill("PKLJAGR");
    await page.getByRole("button", { name: "Sign in" }).click();
    await page.locator('input[type="password"]').fill("IFcXRPCK");
    await page.getByRole("button", { name: "Continue" }).click();
    await expect(
      page.getByRole("heading", { name: "Daftar Organisasi Anda" })
    ).toBeVisible();
    await page.locator('.grid > .bg-white').click();
    await expect(page).toHaveURL('https://sim.dev.asvri.ai/orgs/c2117f0f11f4a6aed00c4705f')
    await page.locator('a').filter({ hasText: 'Daftar ASVRI Bot' }).click();
    await page.getByRole('combobox', { name: 'Kategori ASVRI BOT' }).click();
  });
});
