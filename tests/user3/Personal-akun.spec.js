// @ts-check
import { test, expect } from "@playwright/test";

test.describe("Pengaturan akun", () => {
  test("Ubah Profil (TC-01)", async ({ page }) => {
    await page.goto("http://sim.dev.asvri.ai/");
    await page.locator('input[name="identifier"]').fill("user3");
    await page.getByRole("button", { name: "Sign in" }).click();
    await page.locator('input[type="password"]').fill("AWkBAQtX");
    await page.getByRole("button", { name: "Continue" }).click();
    await expect(
      page.getByRole("heading", { name: "Daftar Organisasi Anda" })
    ).toBeVisible();
    await page.locator(".grid > .bg-white").click();
    await expect(page).toHaveURL(
      "https://sim.dev.asvri.ai/orgs/c2117f0f11f4a6aed00c4705f"
    );
    await page.getByRole("toolbar").getByRole("img").nth(1).click();
    await page.getByRole("menuitem", { name: "Pengaturan Akun" }).click();
    await expect(
      page.getByRole("dialog", { name: "Pengaturan Akun" })
    ).toBeVisible();
    await page.getByRole("spinbutton", { name: "Nomor Handphone" }).click();
    await page
      .getByRole("spinbutton", { name: "Nomor Handphone" })
      .fill("082317316123");
    await page.getByLabel("Jenis Kelamin").selectOption("L");
    await page.getByRole("button", { name: "Simpan" }).click();
    await expect(
      page
        .locator("div")
        .filter({ hasText: "Peringatanbody UpdateBody:" })
        .nth(3)
    ).toBeVisible();
  });

  test("Ubah Password (TC-02)", async ({ page }) => {
    await page.goto("http://sim.dev.asvri.ai/");
    await page.locator('input[name="identifier"]').fill("user3");
    await page.getByRole("button", { name: "Sign in" }).click();
    await page.locator('input[type="password"]').fill("AWkBAQtX");
    await page.getByRole("button", { name: "Continue" }).click();
    await expect(
      page.getByRole("heading", { name: "Daftar Organisasi Anda" })
    ).toBeVisible();
    await page.locator(".grid > .bg-white").click();
    await expect(page).toHaveURL(
      "https://sim.dev.asvri.ai/orgs/c2117f0f11f4a6aed00c4705f"
    );
    await page.getByRole("toolbar").getByRole("img").nth(1).click();
    await page.getByRole("menuitem", { name: "Pengaturan Akun" }).click();
    await expect(
      page.getByRole("dialog", { name: "Pengaturan Akun" })
    ).toBeVisible();
    await page
      .locator("div")
      .filter({ hasText: /^Ubah Password$/ })
      .click();
    await page.getByRole("textbox", { name: "Kata Sandi Lama" }).click();
    await page
      .getByRole("textbox", { name: "Kata Sandi Lama" })
      .fill("AWkBAQtX");
    await page
      .getByRole("textbox", { name: "Kata Sandi Baru", exact: true })
      .click();
    await page
      .getByRole("textbox", { name: "Kata Sandi Baru", exact: true })
      .fill("testsandibaru");
    await page
      .getByRole("textbox", { name: "Konfirmasi Kata Sandi Baru" })
      .click();
    await page
      .getByRole("textbox", { name: "Konfirmasi Kata Sandi Baru" })
      .fill("testsandibaru");
    await page.getByRole("button", { name: "Simpan" }).click();
  });
});

test.describe("Pindah Organisasi", () => {
  test("Cari Organisasi (TC-03)", async ({ page }) => {
    await page.goto("http://sim.dev.asvri.ai/");
    await page.locator('input[name="identifier"]').fill("user3");
    await page.getByRole("button", { name: "Sign in" }).click();
    await page.locator('input[type="password"]').fill("AWkBAQtX");
    await page.getByRole("button", { name: "Continue" }).click();
    await expect(
      page.getByRole("heading", { name: "Daftar Organisasi Anda" })
    ).toBeVisible();
    await page.locator(".grid > .bg-white").click();
    await expect(page).toHaveURL(
      "https://sim.dev.asvri.ai/orgs/c2117f0f11f4a6aed00c4705f"
    );
    await page.getByRole("toolbar").getByRole("img").nth(1).click();
    await page.getByRole("menuitem", { name: "Pindah Organisasi" }).click();
    await expect(
      page.getByRole("dialog").filter({ hasText: "Daftar Organisasi Anda" })
    ).toBeVisible();
    await page.getByRole("textbox", { name: "Cari Organisasi" }).click();
    await page.getByRole("textbox", { name: "Cari Organisasi" }).fill("123");
    await expect(page.getByText("Terdapat 0 Organisasi Anda.")).toBeVisible();
  });
  test("Organisasi (TC-04)", async ({ page }) => {
    await page.goto("http://sim.dev.asvri.ai/");
    await page.locator('input[name="identifier"]').fill("user3");
    await page.getByRole("button", { name: "Sign in" }).click();
    await page.locator('input[type="password"]').fill("AWkBAQtX");
    await page.getByRole("button", { name: "Continue" }).click();
    await expect(
      page.getByRole("heading", { name: "Daftar Organisasi Anda" })
    ).toBeVisible();
    await page.locator(".grid > .bg-white").click();
    await expect(page).toHaveURL(
      "https://sim.dev.asvri.ai/orgs/c2117f0f11f4a6aed00c4705f"
    );
    await page.getByRole("toolbar").getByRole("img").nth(1).click();
    await page.getByRole("menuitem", { name: "Pindah Organisasi" }).click();
    await expect(
      page.getByRole("dialog").filter({ hasText: "Daftar Organisasi Anda" })
    ).toBeVisible();
    await page.locator(".space-y-5 > .grid > .bg-white").click();
    await expect(
      page.getByLabel("Sidebar").getByText("PKL JAGR")
    ).toBeVisible();
  });
});

test("Keluar (TC-05)", async ({ page }) => {
  await page.goto("http://sim.dev.asvri.ai/");
  await page.locator('input[name="identifier"]').fill("user3");
  await page.getByRole("button", { name: "Sign in" }).click();
  await page.locator('input[type="password"]').fill("AWkBAQtX");
  await page.getByRole("button", { name: "Continue" }).click();
  await expect(
    page.getByRole("heading", { name: "Daftar Organisasi Anda" })
  ).toBeVisible();
  await page.locator(".grid > .bg-white").click();
  await expect(page).toHaveURL(
    "https://sim.dev.asvri.ai/orgs/c2117f0f11f4a6aed00c4705f"
  );
  await page.getByRole("toolbar").getByRole("img").nth(1).click();
  await page.getByRole("menuitem", { name: "Keluar" }).click();
  await expect(page).toHaveURL("https://auth.dev.siap.id/sign-in");
});
