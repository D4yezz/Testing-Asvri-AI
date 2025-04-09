// @ts-check
import { test, expect } from "@playwright/test";

test.describe("Toggle", () => {
    test("Kategori (TC-01)", async ({ page }) => {
        await page.goto("http://sim.dev.asvri.ai/");
        await page.locator('input[name="identifier"]').fill("user1");
        await page.getByRole("button", { name: "Sign in" }).click();
        await page.locator('input[type="password"]').fill("YRdZIrsq");
        await page.getByRole("button", { name: "Continue" }).click();
        await expect(
          page.getByRole("heading", { name: "Daftar Organisasi Anda" })
        ).toBeVisible();
        await page.locator(".grid > .bg-white").click();
        await expect(page).toHaveURL(
          "https://sim.dev.asvri.ai/orgs/c2117f0f11f4a6aed00c4705f"
        );
        await page.locator("a").filter({ hasText: "Daftar ASVRI Bot" }).click();
        await page.getByRole("combobox", { name: "Kategori ASVRI BOT" }).click();
        await page.getByRole("option", { name: "Table RAG" }).click();
        await expect(
          page.getByText("Belum ada daftar bot ditemukan")
        ).toBeVisible();
        await page.waitForTimeout(3000);
        await page.getByRole("combobox", { name: "Kategori ASVRI BOT" }).click();
        await page.getByRole("option", { name: "RAG", exact: true }).click();
        await expect(
          page
            .locator("div")
            .filter({ hasText: /^Bot Umum PKL JAGRRAG0 Token dipakai$/ })
            .first()
        ).toBeVisible();
      });
    
      test("Pencarian (TC-02)", async ({ page }) => {
        await page.goto("http://sim.dev.asvri.ai/");
        await page.locator('input[name="identifier"]').fill("user1");
        await page.getByRole("button", { name: "Sign in" }).click();
        await page.locator('input[type="password"]').fill("YRdZIrsq");
        await page.getByRole("button", { name: "Continue" }).click();
        await expect(
          page.getByRole("heading", { name: "Daftar Organisasi Anda" })
        ).toBeVisible();
        await page.locator(".grid > .bg-white").click();
        await expect(page).toHaveURL(
          "https://sim.dev.asvri.ai/orgs/c2117f0f11f4a6aed00c4705f"
        );
        await page.locator("a").filter({ hasText: "Daftar ASVRI Bot" }).click();
        await expect(
          page
            .locator("div")
            .filter({ hasText: /^TestingRAG0 Token dipakai$/ })
            .first()
        ).toBeVisible();
        await page.locator('input[name="search"]').fill("umum");
        await expect(
          page
            .locator("div")
            .filter({ hasText: /^Bot Umum PKL JAGRRAG0 Token dipakai$/ })
            .first()
        ).toBeVisible();
        await page.locator('input[name="search"]').fill("abcdefk123456789");
        await expect(
          page.getByText("Belum ada daftar bot ditemukan")
        ).toBeVisible();
      });
    //   belum selesai
});