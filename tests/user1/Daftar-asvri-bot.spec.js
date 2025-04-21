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

  test("Tambah Bot (TC-03)", async ({ page }) => {
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
    await page.getByRole("button", { name: "Tambah Bot" }).click();
    await page.getByRole("textbox", { name: "Nama Bot" }).click();
    await page
      .getByRole("textbox", { name: "Nama Bot" })
      .fill("bot test user1");
    await page.locator("#jenis_bot_id").selectOption("6");
    await page.getByRole("button", { name: "Simpan" }).click();
    await expect(page.locator('[data-pc-name="dialog"]')).not.toBeVisible();
  });
});

test.describe("Bot Testing", () => {
  test("Navigasi Bot (TC-04)", async ({ page }) => {
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

    await page
      .locator("div")
      .filter({ hasText: /^TestingRAG0 Token dipakai$/ })
      .first()
      .click();
    await page
      .locator("div")
      .filter({ hasText: /^Testing$/ })
      .first()
      .click();
    await page.getByRole("combobox").click();
    await page.getByText("Daftarnya kosong").click();
    await page.getByRole("textbox", { name: "Cari Bot" }).click();
    await page.getByRole("textbox", { name: "Cari Bot" }).fill("umum");
    await expect(
      page
        .locator("div")
        .filter({ hasText: /^Bot Umum PKL JAGRRAG0 Token dipakai$/ })
        .nth(1)
    ).toBeVisible();
    await page
      .locator("div")
      .filter({ hasText: /^Bot Umum PKL JAGRRAG0 Token dipakai$/ })
      .nth(1)
      .click();
    await expect(
      page
        .locator("div")
        .filter({ hasText: /^Bot Umum PKL JAGR$/ })
        .first()
    ).toBeVisible();
  });

  test("Beranda (TC-05)", async ({ page }) => {
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

    await page
      .locator("div")
      .filter({ hasText: /^TestingRAG0 Token dipakai$/ })
      .first()
      .click();
    await page.locator(".gap-6>.p-4").click();
    await expect(
      page.locator("div").filter({ hasText: "Tanggal Awal April2025" }).nth(1)
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
    await expect(page.getByText("Juni 2020 s/d 19 Maret 2025")).toBeVisible();

    // zoom in out
    await page.evaluate(() => {
      document.body.style.zoom = "0.9";
    });
    await page.waitForTimeout(1000);
  });

  test.describe("Obrolan (Percakapan)", () => {
    test("Percakapan Baru (TC-06)", async ({ page }) => {
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

      await page
        .locator("div")
        .filter({ hasText: /^TestingRAG0 Token dipakai$/ })
        .first()
        .click();

      await page.locator("a").filter({ hasText: "Percakapan" }).click();
      await page.locator("a").filter({ hasText: "Obrolan" }).click();
      await page.getByRole("button", { name: "Percakapan Baru" }).click();
      await expect(page.locator(".col-span-2>.overflow-y-scroll")).toBeEmpty();
    });

    test("Pengaturan Chat (TC-07)", async ({ page }) => {
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

      await page
        .locator("div")
        .filter({ hasText: /^TestingRAG0 Token dipakai$/ })
        .first()
        .click();

      await page.locator("a").filter({ hasText: "Percakapan" }).click();
      await page.locator("a").filter({ hasText: "Obrolan" }).click();
      await page.getByRole("button").filter({ hasText: /^$/ }).nth(1).click();
      await page.getByRole("combobox", { name: "Pilih Bahasa" }).click();
      await page.getByRole("option", { name: "German" }).click();
      await page.getByRole("button", { name: "Terapkan" }).click();
      await page.getByRole("button").filter({ hasText: /^$/ }).nth(1).click();
      await page.getByText("Text ke Ucapan").click();
      await page
        .getByRole("switch", { name: "Aktifkan atau Nonaktifkan" })
        .locator("div")
        .click();
      await page
        .getByRole("combobox", { name: "Penyedia Teks ke Ucapan" })
        .click();
      await page.getByRole("option", { name: "EvelenLabs" }).click();
      await page
        .getByRole("combobox", { name: "Suara Teks ke Ucapan" })
        .click();
      await page
        .getByRole("combobox", { name: "Suara Teks ke Ucapan" })
        .fill("test");
      await page.getByRole("button", { name: "Terapkan" }).click();
    });

    test("Sesi Percakapan (TC-08)", async ({ page }) => {
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

      await page
        .locator("div")
        .filter({ hasText: /^TestingRAG0 Token dipakai$/ })
        .first()
        .click();

      await page.locator("a").filter({ hasText: "Percakapan" }).click();
      await page.locator("a").filter({ hasText: "Obrolan" }).click();
      await page
        .getByRole("textbox", { name: "Tulis Pertanyaan Anda di sini" })
        .click();
      await page
        .getByRole("textbox", { name: "Tulis Pertanyaan Anda di sini" })
        .fill("halo ini test");
      await page.getByRole("button", { name: "Kirim" }).click();
      await expect(
        page.locator(".col-span-2>.overflow-y-scroll")
      ).not.toBeEmpty();
    });
  });

  test.describe("Riwayat (Percakapan)", () => {
    test("Pilih Jenis (TC-09)", async ({ page }) => {
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

      await page
        .locator("div")
        .filter({ hasText: /^TestingRAG0 Token dipakai$/ })
        .first()
        .click();

      await page.locator("a").filter({ hasText: "Percakapan" }).click();
      await page.locator("a").filter({ hasText: "Riwayat" }).click();
      await page.locator("#type").click();
      await page.getByRole("option", { name: "Playground" }).click();
      const tabel = page.locator(".space-y-2>ul>div").nth(1);
      await expect(tabel.locator("li")).toHaveCount(4);
    });

    test("Pilih Tanggal (TC-10)", async ({ page }) => {
      await page.goto("http://sim.dev.asvri.ai/");
      await page.locator('input[name="identifier"]').fill("user1");
      await page.getByRole("button", { name: "Sign in" }).click();
      await page.locator('input[type="password"]').fill("YRdZIrsq");
      await page.getByRole("button", { name: "Continue" }).click();
      await page.waitForLoadState("load");
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

      await page.locator("a").filter({ hasText: "Percakapan" }).click();
      await page.locator("a").filter({ hasText: "Riwayat" }).click();
      await page.locator("#type").click();
      await page.getByRole("option", { name: "Playground" }).click();

      await page.getByRole("textbox", { name: "Pilih Tanggal" }).click();
      await page.getByLabel("April 16,").click();
      await page.getByLabel("April 16,").click();
      await page.waitForTimeout(1000);
      const filterTgl = page.locator(".space-y-2>ul>div>.pb-2").first();
      await expect(filterTgl).toBeVisible();
      await expect(filterTgl).toHaveText(" Sesi Percakapan 16 Apr 2025 ");

      // coba tanggal lain
      // await page.getByRole('textbox', { name: 'Pilih Tanggal' }).click();
      // await page.getByLabel('April 8,').click();
      // await page.getByLabel('April 11,').click();
      // await page.waitForTimeout(1000);
      // await expect(filterTgl).not.toBeVisible();
    });
  });
});

test.describe("Bot Umum PKL JAGR", () => {
  test("Navigasi Bot (TC-11)", async ({ page }) => {
    await page.goto("http://sim.dev.asvri.ai/");
    await page.locator('input[name="identifier"]').fill("user1");
    await page.getByRole("button", { name: "Sign in" }).click();
    await page.locator('input[type="password"]').fill("YRdZIrsq");
    await page.getByRole("button", { name: "Continue" }).click();
    await page.waitForLoadState("load");
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
      .filter({ hasText: /^Bot Umum PKL JAGRRAG0 Token dipakai$/ })
      .first()
      .click();
    await page
      .locator("div")
      .filter({ hasText: /^Bot Umum PKL JAGR$/ })
      .first()
      .click();
    await page.getByRole("combobox").click();
    await page.getByText("Daftarnya kosong").click();
    await page.getByRole("textbox", { name: "Cari Bot" }).click();
    await page.getByRole("textbox", { name: "Cari Bot" }).fill("testing");
    await expect(
      page
        .locator("div")
        .filter({ hasText: /^TestingRAG0 Token dipakai$/ })
        .nth(1)
    ).toBeVisible();
    await page
      .locator("div")
      .filter({ hasText: /^TestingRAG0 Token dipakai$/ })
      .nth(1)
      .click();
    await expect(
      page
        .locator("div")
        .filter({ hasText: /^BOT ASVRITesting$/ })
        .first()
    ).toBeVisible();
    await expect(page).toHaveURL(
      "https://sim.dev.asvri.ai/bot/cm83uh4l200051x3g7sbmo70h"
    );
  });

  test("Beranda (TC-12)", async ({ page }) => {
    await page.goto("http://sim.dev.asvri.ai/");
    await page.locator('input[name="identifier"]').fill("user1");
    await page.getByRole("button", { name: "Sign in" }).click();
    await page.locator('input[type="password"]').fill("YRdZIrsq");
    await page.getByRole("button", { name: "Continue" }).click();
    await page.waitForLoadState("load");
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
      .filter({ hasText: /^Bot Umum PKL JAGRRAG0 Token dipakai$/ })
      .first()
      .click();
    await page.locator(".gap-6>.p-4").click();
    await expect(
      page.locator("div").filter({ hasText: "Tanggal Awal April2025" }).nth(1)
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
    await expect(page.getByText("Juni 2020 s/d 19 Maret 2025")).toBeVisible();

    // zoom in out
    await page.evaluate(() => {
      document.body.style.zoom = "0.9";
    });
    await page.waitForTimeout(1000);
  });

  test.describe("Obrolan (Percakapan)", () => {
    test("Percakapan Baru (TC-13)", async ({ page }) => {
      await page.goto("http://sim.dev.asvri.ai/");
      await page.locator('input[name="identifier"]').fill("user1");
      await page.getByRole("button", { name: "Sign in" }).click();
      await page.locator('input[type="password"]').fill("YRdZIrsq");
      await page.getByRole("button", { name: "Continue" }).click();
      await page.waitForLoadState("load");
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
        .filter({ hasText: /^Bot Umum PKL JAGRRAG0 Token dipakai$/ })
        .first()
        .click();

      await page.locator("a").filter({ hasText: "Percakapan" }).click();
      await page.locator("a").filter({ hasText: "Obrolan" }).click();
      await page.getByRole("button", { name: "Percakapan Baru" }).click();
      await expect(page.locator(".col-span-2>.overflow-y-scroll")).toBeEmpty();
    });

    test("Pengaturan Chat (TC-14)", async ({ page }) => {
      await page.goto("http://sim.dev.asvri.ai/");
      await page.locator('input[name="identifier"]').fill("user1");
      await page.getByRole("button", { name: "Sign in" }).click();
      await page.locator('input[type="password"]').fill("YRdZIrsq");
      await page.getByRole("button", { name: "Continue" }).click();
      await page.waitForLoadState("load");
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
        .filter({ hasText: /^Bot Umum PKL JAGRRAG0 Token dipakai$/ })
        .first()
        .click();

      await page.locator("a").filter({ hasText: "Percakapan" }).click();
      await page.locator("a").filter({ hasText: "Obrolan" }).click();
      await page.getByRole("button").filter({ hasText: /^$/ }).nth(1).click();
      await page.getByRole("combobox", { name: "Pilih Bahasa" }).click();
      await page.getByRole("option", { name: "Tamil" }).click();
      await page.getByRole("button", { name: "Terapkan" }).click();
      await page.getByRole("button").filter({ hasText: /^$/ }).nth(1).click();
      await page.getByText("Text ke Ucapan").click();
      await page
        .getByRole("switch", { name: "Aktifkan atau Nonaktifkan" })
        .locator("div")
        .click();
      await page
        .getByRole("combobox", { name: "Penyedia Teks ke Ucapan" })
        .click();
      await page.getByRole("option", { name: "Web API" }).click();
      await page
        .getByRole("combobox", { name: "Suara Teks ke Ucapan" })
        .click();
      await page
        .getByRole("combobox", { name: "Suara Teks ke Ucapan" })
        .fill("test umum");
      await page.getByRole("button", { name: "Terapkan" }).click();
    });

    test("Sesi Percakapan (TC-15)", async ({ page }) => {
      await page.goto("http://sim.dev.asvri.ai/");
      await page.locator('input[name="identifier"]').fill("user1");
      await page.getByRole("button", { name: "Sign in" }).click();
      await page.locator('input[type="password"]').fill("YRdZIrsq");
      await page.getByRole("button", { name: "Continue" }).click();
      await page.waitForLoadState("load");
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
        .filter({ hasText: /^Bot Umum PKL JAGRRAG0 Token dipakai$/ })
        .first()
        .click();

      await page.locator("a").filter({ hasText: "Percakapan" }).click();
      await page.locator("a").filter({ hasText: "Obrolan" }).click();
      await page
        .getByRole("textbox", { name: "Tulis Pertanyaan Anda di sini" })
        .click();
      await page
        .getByRole("textbox", { name: "Tulis Pertanyaan Anda di sini" })
        .fill("test bot umum");
      await page.getByRole("button", { name: "Kirim" }).click();
      await expect(
        page.locator(".col-span-2>.overflow-y-scroll")
      ).not.toBeEmpty();
    });
  });

  test.describe("Riwayat (Percakapan)", () => {
    test("Pilih Jenis (TC-16)", async ({ page }) => {
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

      await page
        .locator('div').filter({ hasText: /^Bot Umum PKL JAGRRAG0 Token dipakai$/ }).first()
        .click();

      await page.locator("a").filter({ hasText: "Percakapan" }).click();
      await page.locator("a").filter({ hasText: "Riwayat" }).click();
      await page.locator("#type").click();
      await page.getByRole("option", { name: "Playground" }).click();
      const tabel = page.locator(".space-y-2>ul>div").first();
      await expect(tabel.locator("li")).toHaveCount(1);
    });

    test("Pilih Tanggal (TC-17)", async ({ page }) => {
      await page.goto("http://sim.dev.asvri.ai/");
      await page.locator('input[name="identifier"]').fill("user1");
      await page.getByRole("button", { name: "Sign in" }).click();
      await page.locator('input[type="password"]').fill("YRdZIrsq");
      await page.getByRole("button", { name: "Continue" }).click();
      await page.waitForLoadState("load");
      await expect(
        page.getByRole("heading", { name: "Daftar Organisasi Anda" })
      ).toBeVisible();
      await page.locator(".grid > .bg-white").click();
      await expect(page).toHaveURL(
        "https://sim.dev.asvri.ai/orgs/c2117f0f11f4a6aed00c4705f"
      );
      await page.locator("a").filter({ hasText: "Daftar ASVRI Bot" }).click();

      await page
        .locator('div').filter({ hasText: /^Bot Umum PKL JAGRRAG0 Token dipakai$/ }).first()
        .click();

      await page.locator("a").filter({ hasText: "Percakapan" }).click();
      await page.locator("a").filter({ hasText: "Riwayat" }).click();
      await page.locator("#type").click();
      await page.getByRole("option", { name: "Playground" }).click();

      await page.getByRole("textbox", { name: "Pilih Tanggal" }).click();
      await page.getByLabel("April 16,").click();
      await page.getByLabel("April 16,").click();
      await page.waitForTimeout(1000);
      const filterTgl = page.locator(".space-y-2>ul>div>.pb-2").first();
      await expect(filterTgl).toBeVisible();
      await expect(filterTgl).toHaveText(" Sesi Percakapan 16 Apr 2025 ");

      // coba tanggal lain
      // await page.getByRole('textbox', { name: 'Pilih Tanggal' }).click();
      // await page.getByLabel('April 8,').click();
      // await page.getByLabel('April 11,').click();
      // await page.waitForTimeout(1000);
      // await expect(filterTgl).not.toBeVisible();
    });
  });
});
