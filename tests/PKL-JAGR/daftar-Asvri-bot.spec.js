// @ts-check
import { test, expect } from "@playwright/test";

test.describe("Toggle", () => {
  test("Kategori (TC-01)", async ({ page }) => {
    await page.goto("http://sim.dev.asvri.ai/");
    await page.locator('input[name="identifier"]').fill("PKLJAGR");
    await page.getByRole("button", { name: "Sign in" }).click();
    await page.locator('input[type="password"]').fill("IFcXRPCK");
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
    await page.locator('input[name="identifier"]').fill("PKLJAGR");
    await page.getByRole("button", { name: "Sign in" }).click();
    await page.locator('input[type="password"]').fill("IFcXRPCK");
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

  test("Tambah Bot (TC-03)", async ({ page }) => {
    await page.goto("http://sim.dev.asvri.ai/");
    await page.locator('input[name="identifier"]').fill("PKLJAGR");
    await page.getByRole("button", { name: "Sign in" }).click();
    await page.locator('input[type="password"]').fill("IFcXRPCK");
    await page.getByRole("button", { name: "Continue" }).click();
    await expect(
      page.getByRole("heading", { name: "Daftar Organisasi Anda" })
    ).toBeVisible();
    await page.locator(".grid > .bg-white").click();
    await expect(page).toHaveURL(
      "https://sim.dev.asvri.ai/orgs/c2117f0f11f4a6aed00c4705f"
    );
    await page.locator("a").filter({ hasText: "Daftar ASVRI Bot" }).click();
    await page.getByRole("button", { name: "Tambah Bot" }).click();
    await page.getByRole("textbox", { name: "Nama Bot" }).click();
    await page.getByRole("textbox", { name: "Nama Bot" }).fill("test saja");
    await page.locator("#jenis_bot_id").selectOption("3");
    await page.locator("#model").selectOption("deepseek/deepseek-r1:free");
    await page.getByLabel("Embedding Model").selectOption("ollama");
    await page.getByRole("button", { name: "Simpan" }).click();
    await expect(
      page.getByRole("heading", { name: "test saja" })
    ).toBeVisible();
  });
});

test.describe("Bot Testing", () => {
  test("Beranda (TC-04)", async ({ page }) => {
    await page.goto("http://sim.dev.asvri.ai/");
    await page.locator('input[name="identifier"]').fill("PKLJAGR");
    await page.getByRole("button", { name: "Sign in" }).click();
    await page.locator('input[type="password"]').fill("IFcXRPCK");
    await page.getByRole("button", { name: "Continue" }).click();
    await expect(
      page.getByRole("heading", { name: "Daftar Organisasi Anda" })
    ).toBeVisible();
    await page.locator(".grid > .bg-white").click();
    await expect(page).toHaveURL(
      "https://sim.dev.asvri.ai/orgs/c2117f0f11f4a6aed00c4705f"
    );
    await page.locator("a").filter({ hasText: "Daftar ASVRI Bot" }).click();

    await page
      .locator("div")
      .filter({ hasText: /^TestingRAG0 Token dipakai$/ })
      .first()
      .click();
    await page.getByText("12 Maret 2025 s/d 19 Maret").click();
    await expect(
      page.locator("div").filter({ hasText: "Tanggal Awal March2025" }).nth(1)
    ).toBeVisible();
    await page
      .locator("#pv_id_10_panel")
      .getByRole("button", { name: "Choose Year" })
      .click();
    await page.getByText("2020", { exact: true }).click();
    await page.getByText("Jun").click();
    await page
      .locator("#pv_id_10_panel")
      .getByText("12", { exact: true })
      .click();

    await page
      .locator("#pv_id_12_panel")
      .getByRole("button", { name: "Previous Month" })
      .click();
    await page
      .locator("#pv_id_12_panel")
      .getByText("20", { exact: true })
      .click();
    await page.getByRole("button", { name: "Terapkan" }).click();
    await expect(
      page.getByText("Juni 2020 s/d 19 Februari 2025")
    ).toBeVisible();

    // zoom in out
    await page.evaluate(() => {
      document.body.style.zoom = "0.9";
    });
    await page.waitForTimeout(1000);
  });

  test.describe("Transkrip Rekaman", () => {
    test("Tambah Kategori (TC-05)", async ({ page }) => {
      await page.goto("http://sim.dev.asvri.ai/");
      await page.locator('input[name="identifier"]').fill("PKLJAGR");
      await page.getByRole("button", { name: "Sign in" }).click();
      await page.locator('input[type="password"]').fill("IFcXRPCK");
      await page.getByRole("button", { name: "Continue" }).click();
      await expect(
        page.getByRole("heading", { name: "Daftar Organisasi Anda" })
      ).toBeVisible();
      await page.locator(".grid > .bg-white").click();
      await expect(page).toHaveURL(
        "https://sim.dev.asvri.ai/orgs/c2117f0f11f4a6aed00c4705f"
      );
      await page.locator("a").filter({ hasText: "Daftar ASVRI Bot" }).click();
      await page
        .locator("div")
        .filter({ hasText: /^TestingRAG0 Token dipakai$/ })
        .first()
        .click();

      await page.locator("a").filter({ hasText: "Transkrip Rekaman" }).click();
      await page.getByRole("button", { name: "Tambah Kategori" }).click();
      await page.getByRole("textbox", { name: "Nama Kategori *" }).click();
      await page
        .getByRole("textbox", { name: "Nama Kategori *" })
        .fill("testing");
      await page.getByRole("textbox", { name: "Deskripsi" }).click();
      await page
        .getByRole("textbox", { name: "Deskripsi" })
        .fill("test hari ini");
      await page.getByRole("button", { name: "Simpan" }).click();
    });

    test("Ubah Kategori (TC-06)", async ({ page }) => {
      await page.goto("http://sim.dev.asvri.ai/");
      await page.locator('input[name="identifier"]').fill("PKLJAGR");
      await page.getByRole("button", { name: "Sign in" }).click();
      await page.locator('input[type="password"]').fill("IFcXRPCK");
      await page.getByRole("button", { name: "Continue" }).click();
      await expect(
        page.getByRole("heading", { name: "Daftar Organisasi Anda" })
      ).toBeVisible();
      await page.locator(".grid > .bg-white").click();
      await expect(page).toHaveURL(
        "https://sim.dev.asvri.ai/orgs/c2117f0f11f4a6aed00c4705f"
      );
      await page.locator("a").filter({ hasText: "Daftar ASVRI Bot" }).click();
      await page
        .locator("div")
        .filter({ hasText: /^TestingRAG0 Token dipakai$/ })
        .first()
        .click();

      await page.locator("a").filter({ hasText: "Transkrip Rekaman" }).click();
      await page
        .getByRole("row", { name: "testing test hari ini 0 Lihat" })
        .getByRole("button")
        .click();
      await page.getByRole("menuitem", { name: "Ubah" }).locator("a").click();
      await page
        .getByRole("textbox", { name: "Deskripsi" })
        .fill("test hari ini diubah");
      await page.getByRole("button", { name: "Simpan" }).click();
      await expect(page.getByText("test hari ini")).toBeVisible();
    });

    test("Hapus (TC-07)", async ({ page }) => {
      await page.goto("http://sim.dev.asvri.ai/");
      await page.locator('input[name="identifier"]').fill("PKLJAGR");
      await page.getByRole("button", { name: "Sign in" }).click();
      await page.locator('input[type="password"]').fill("IFcXRPCK");
      await page.getByRole("button", { name: "Continue" }).click();
      await expect(
        page.getByRole("heading", { name: "Daftar Organisasi Anda" })
      ).toBeVisible();
      await page.locator(".grid > .bg-white").click();
      await expect(page).toHaveURL(
        "https://sim.dev.asvri.ai/orgs/c2117f0f11f4a6aed00c4705f"
      );
      await page.locator("a").filter({ hasText: "Daftar ASVRI Bot" }).click();
      await page
        .locator("div")
        .filter({ hasText: /^TestingRAG0 Token dipakai$/ })
        .first()
        .click();

      await page.locator("a").filter({ hasText: "Transkrip Rekaman" }).click();
      await page
        .getByRole("row", {
          name: "testing test hari ini diubah 0 Lihat Rekaman 19/03/2025 13:",
        })
        .getByRole("button")
        .click();
      await page.getByRole("menuitem", { name: "Hapus" }).locator("a").click();
      await page.getByRole("button", { name: "Hapus" }).click();
      await expect(
        page.getByRole("cell", { name: "/03/2025 13:14" })
      ).not.toBeVisible();
    });

    test("Tambah Rekaman (TC-08)", async ({ page }) => {
      await page.goto("http://sim.dev.asvri.ai/");
      await page.locator('input[name="identifier"]').fill("PKLJAGR");
      await page.getByRole("button", { name: "Sign in" }).click();
      await page.locator('input[type="password"]').fill("IFcXRPCK");
      await page.getByRole("button", { name: "Continue" }).click();
      await expect(
        page.getByRole("heading", { name: "Daftar Organisasi Anda" })
      ).toBeVisible();
      await page.locator(".grid > .bg-white").click();
      await expect(page).toHaveURL(
        "https://sim.dev.asvri.ai/orgs/c2117f0f11f4a6aed00c4705f"
      );
      await page.locator("a").filter({ hasText: "Daftar ASVRI Bot" }).click();
      await page
        .locator("div")
        .filter({ hasText: /^TestingRAG0 Token dipakai$/ })
        .first()
        .click();

      await page.locator("a").filter({ hasText: "Transkrip Rekaman" }).click();
      await page
        .getByRole("row", { name: "testing test hari ini 1 Lihat" })
        .getByRole("button")
        .click();
      await page
        .getByRole("menuitem", { name: "Lihat Transkrip Rekaman" })
        .locator("a")
        .click();
      await page.getByRole("button", { name: "Tambah Rekaman" }).click();

      await page.getByRole("textbox", { name: "Judul *" }).click();
      await page
        .getByRole("textbox", { name: "Judul *" })
        .fill("hanya testing");
      await page.getByRole("combobox", { name: "Tags" }).click();
      await page.getByRole("combobox", { name: "Tags" }).fill("tagtest");
      await page.getByRole("combobox", { name: "Tags" }).press("Enter");
      await page.getByRole("combobox", { name: "tagtest Tags" }).fill("tag2");
      await page.getByRole("combobox", { name: "tagtest Tags" }).press("Enter");
      await page.getByRole("button", { name: "Selanjutnya" }).click();
      await page.getByRole("button", { name: "Unggah Audio/Video" }).click();
      await page.setInputFiles(
        "input#multifile",
        "D:/File Coding/RPL-SMKN-8-MALANG/PKL_24-25/PlayWright/Testing-Asvri-AI/assets upload/keyboard.mp3"
      );
      await page.getByRole("button", { name: "Simpan" }).click();
      await page
        .getByRole("cell")
        .filter({ hasText: /^$/ })
        .getByRole("button")
        .click();
      await page
        .getByRole("menuitem", { name: "Transkrip Ulang" })
        .locator("a")
        .click();
      await expect(page.getByText("DALAM PROSES")).toBeVisible();
    });
  });
  // test.describe("Bot Testing", () => {
  //   test("Transkrip Rekaman (TC-07)", async ({ page }) => {
  //     await page.goto("http://sim.dev.asvri.ai/");
  //     await page.locator('input[name="identifier"]').fill("PKLJAGR");
  //     await page.getByRole("button", { name: "Sign in" }).click();
  //     await page.locator('input[type="password"]').fill("IFcXRPCK");
  //     await page.getByRole("button", { name: "Continue" }).click();
  //     await expect(
  //       page.getByRole("heading", { name: "Daftar Organisasi Anda" })
  //     ).toBeVisible();
  //     await page.locator(".grid > .bg-white").click();
  //     await expect(page).toHaveURL(
  //       "https://sim.dev.asvri.ai/orgs/c2117f0f11f4a6aed00c4705f"
  //     );
  //     await page.locator("a").filter({ hasText: "Daftar ASVRI Bot" }).click();
  //     await page
  //       .locator("div")
  //       .filter({ hasText: /^TestingRAG0 Token dipakai$/ })
  //       .first()
  //       .click();
  //   });
  // });
});
