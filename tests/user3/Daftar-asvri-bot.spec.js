// @ts-check
import { test, expect } from "@playwright/test";

test.describe("Toggle", () => {
  test("Kategori (TC-01)", async ({ page }) => {
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
    await page.locator("a").filter({ hasText: "Daftar ASVRI Bot" }).click();
    await page.getByRole("combobox", { name: "Kategori ASVRI BOT" }).click();
    await page.getByRole("option", { name: "Ms GraphRAG" }).click();
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
    await page.locator('input[name="search"]').fill("mencari 123444444");
    await expect(
      page.getByText("Belum ada daftar bot ditemukan")
    ).toBeVisible();
  });

  test("Tambah Bot (TC-03)", async ({ page }) => {
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
      .fill("test menambah bot3");
    await page.locator("#jenis_bot_id").selectOption("6");
    await page.getByRole("button", { name: "Simpan" }).click();
    await expect(page.locator('[data-pc-name="dialog"]')).not.toBeVisible();
  });
});

test.describe("Bot Umum PKL JAGR", () => {
  test("Navigasi Bot (TC-04)", async ({ page }) => {
    await page.goto("http://sim.dev.asvri.ai/");
    await page.locator('input[name="identifier"]').fill("user3");
    await page.getByRole("button", { name: "Sign in" }).click();
    await page.locator('input[type="password"]').fill("AWkBAQtX");
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
    await page.getByRole("textbox", { name: "Cari Bot" }).fill("saja");
    await expect(
      page
        .locator("div")
        .filter({ hasText: /^test sajaSQL Agent0 Token dipakai$/ })
        .nth(1)
    ).toBeVisible();
    await page
      .locator("div")
      .filter({ hasText: /^test sajaSQL Agent0 Token dipakai$/ })
      .nth(1)
      .click();
    await expect(
      page
        .locator("div")
        .filter({ hasText: /^BOT ASVRItest saja$/ })
        .first()
    ).toBeVisible();
    await expect(page).toHaveURL(
      "https://sim.dev.asvri.ai/bot/cm8fd8yt8000wbqu6fhp27tx5"
    );
  });

  test("Beranda (TC-05)", async ({ page }) => {
    await page.goto("http://sim.dev.asvri.ai/");
    await page.locator('input[name="identifier"]').fill("user3");
    await page.getByRole("button", { name: "Sign in" }).click();
    await page.locator('input[type="password"]').fill("AWkBAQtX");
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
    await page.getByText("2022").click();
    await page.getByText("Jul").click();
    await page.getByText("4", { exact: true }).nth(1).click();
    await page.getByText("2", { exact: true }).nth(2).click();
    await page.getByRole("button", { name: "Terapkan" }).click();
    await expect(page.getByText("03 Juli 2022 s/d 01 April")).toBeVisible();

    // zoom in out
    await page.evaluate(() => {
      document.body.style.zoom = "0.9";
    });
    await page.waitForTimeout(1000);
  });

  test.describe("Obrolan (Percakapan)", () => {
    test("Percakapan Baru (TC-06)", async ({ page }) => {
      await page.goto("http://sim.dev.asvri.ai/");
      await page.locator('input[name="identifier"]').fill("user3");
      await page.getByRole("button", { name: "Sign in" }).click();
      await page.locator('input[type="password"]').fill("AWkBAQtX");
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

    test("Pengaturan Chat (TC-07)", async ({ page }) => {
      await page.goto("http://sim.dev.asvri.ai/");
      await page.locator('input[name="identifier"]').fill("user3");
      await page.getByRole("button", { name: "Sign in" }).click();
      await page.locator('input[type="password"]').fill("AWkBAQtX");
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
      await page.getByRole("option", { name: "Greek" }).click();
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
        .fill("test umum");
      await page.getByRole("button", { name: "Terapkan" }).click();
    });

    test("Sesi Percakapan (TC-08)", async ({ page }) => {
      await page.goto("http://sim.dev.asvri.ai/");
      await page.locator('input[name="identifier"]').fill("user3");
      await page.getByRole("button", { name: "Sign in" }).click();
      await page.locator('input[type="password"]').fill("AWkBAQtX");
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
        .fill("test bot umum user 3");
      await page.getByRole("button", { name: "Kirim" }).click();
      await expect(page.locator(".overflow-y-auto>.space-y-2")).not.toBeEmpty();
    });
  });
});

test.describe("Fitur Peran Bot (Bot test saja)", () => {
  test("Pengguna (TC-09)", async ({ page }) => {
    test.setTimeout(120000);
    await page.goto("http://sim.dev.asvri.ai/");

    await page.getByRole("textbox").click();
    await page.getByRole("textbox").fill("PKLJAGR");
    await page.getByRole("button", { name: "Sign in" }).click();
    await expect(page).toHaveURL("https://auth.dev.siap.id/sign-in/password");

    await page.getByRole("textbox").click();
    await page.getByRole("textbox").fill("IFcXRPCK");
    await page.getByRole("button", { name: "Continue" }).click();
    await expect(page).toHaveURL("https://sim.dev.asvri.ai/");

    await page.getByRole("dialog").getByText("PKL JAGR").click();

    await page.locator("a").filter({ hasText: "Pengaturan" }).click();
    await page.locator("a").filter({ hasText: "Pengguna" }).dblclick();
    // await page.getByRole('row', { name: 'Rahmad Fatih user3 userpkl3@asvri.ai' }).getByRole('button').click();
    // await page.getByRole('menuitem', { name: 'Plotting Bot' }).locator('a').click();

    await page
      .getByRole("row", { name: "Rahmad Fatih user3 userpkl3@asvri.ai" })
      .getByRole("button")
      .click();
    await page
      .getByRole("menuitem", { name: "Plotting Bot" })
      .locator("a")
      .click();
    await page
      .getByRole("row", { name: "test saja SQL Agent Pengguna" })
      .getByRole("radio")
      .first()
      .check();
    await page
      .getByRole("row", { name: "test saja SQL Agent Pengguna" })
      .getByRole("checkbox")
      .uncheck();
    await page
      .getByRole("row", { name: "test saja SQL Agent Pengguna" })
      .getByRole("checkbox")
      .check();
    await page.getByRole("button", { name: "Simpan" }).click();
    // login ke fatih cek fitur

    await page.getByRole("toolbar").getByText("PKL JAGR").click();
    await page.getByRole("menuitem", { name: "Keluar" }).dblclick();
    await page.getByRole("textbox").click();
    await page.getByRole("textbox").fill("user3");
    await page.getByRole("button", { name: "Sign in" }).click();
    await page.getByRole("textbox").fill("AWkBAQtX");
    await page.getByRole("textbox").click({
      modifiers: ["ControlOrMeta"],
    });
    await page.getByRole("button", { name: "Continue" }).click();
    await page.getByText("PKL JAGR").click();
    await page.locator("a").filter({ hasText: "Daftar ASVRI Bot" }).click();
    await page
      .locator("div")
      .filter({ hasText: /^test sajaSQL Agent0 Token dipakai$/ })
      .first()
      .click();
    await page.locator("a").filter({ hasText: "Percakapan" }).click();
    await page.locator("a").filter({ hasText: "Obrolan" }).click();
    await page.locator("a").filter({ hasText: "Riwayat" }).click();
    await page.locator("a").filter({ hasText: "Percakapan" }).click();
  });
  test("Admin (TC-10)", async ({ page }) => {
    test.setTimeout(120000);
    await page.goto("http://sim.dev.asvri.ai/");

    await page.getByRole("textbox").click();
    await page.getByRole("textbox").fill("PKLJAGR");
    await page.getByRole("button", { name: "Sign in" }).click();
    await expect(page).toHaveURL("https://auth.dev.siap.id/sign-in/password");

    await page.getByRole("textbox").click();
    await page.getByRole("textbox").fill("IFcXRPCK");
    await page.getByRole("button", { name: "Continue" }).click();
    await expect(page).toHaveURL("https://sim.dev.asvri.ai/");

    await page.getByRole("dialog").getByText("PKL JAGR").click();

    await page.locator("a").filter({ hasText: "Pengaturan" }).click();
    await page.locator("a").filter({ hasText: "Pengguna" }).dblclick();
    // await page.getByRole('row', { name: 'Rahmad Fatih user3 userpkl3@asvri.ai' }).getByRole('button').click();
    // await page.getByRole('menuitem', { name: 'Plotting Bot' }).locator('a').click();
    await page
      .getByRole("row", { name: "Rahmad Fatih user3 userpkl3@asvri.ai" })
      .getByRole("button")
      .click();
    await page
      .getByRole("menuitem", { name: "Plotting Bot" })
      .locator("a")
      .click();
    await page
      .getByRole("row", { name: "test saja SQL Agent Pengguna" })
      .getByRole("radio")
      .nth(1)
      .check();
    await page.getByRole("button", { name: "Simpan" }).click();
    await page.getByRole("toolbar").getByText("PKL JAGR").click();
    await page.getByRole("menuitem", { name: "Keluar" }).click();

    await expect(page).toHaveURL("https://auth.dev.siap.id/sign-in");
    await page.getByRole("textbox").click();
    await page.getByRole("textbox").fill("user3");
    await page.getByRole("button", { name: "Sign in" }).click();
    await page.getByRole("textbox").fill("AWkBAQtX");
    await page.getByRole("button", { name: "Continue" }).click();
    await page.getByRole("textbox").click({
      modifiers: ["ControlOrMeta"],
    });
    await page.getByRole("button", { name: "Continue" }).click();
    await page.getByText("PKL JAGR").click();
    await page.locator("a").filter({ hasText: "Daftar ASVRI Bot" }).click();
    await page
      .locator("div")
      .filter({ hasText: /^test sajaSQL Agent0 Token dipakai$/ })
      .first()
      .click();
  });
  test("Pengelola Data (TC-11)", async ({ page }) => {
    test.setTimeout(120000);
    await page.goto("http://sim.dev.asvri.ai/");

    await page.getByRole("textbox").click();
    await page.getByRole("textbox").fill("PKLJAGR");
    await page.getByRole("button", { name: "Sign in" }).click();
    await expect(page).toHaveURL("https://auth.dev.siap.id/sign-in/password");

    await page.getByRole("textbox").click();
    await page.getByRole("textbox").fill("IFcXRPCK");
    await page.getByRole("button", { name: "Continue" }).click();
    await expect(page).toHaveURL("https://sim.dev.asvri.ai/");

    await page.getByRole("dialog").getByText("PKL JAGR").click();

    await page.locator("a").filter({ hasText: "Pengaturan" }).click();
    await page.locator("a").filter({ hasText: "Pengguna" }).dblclick();
    // await page.getByRole('row', { name: 'Rahmad Fatih user3 userpkl3@asvri.ai' }).getByRole('button').click();
    // await page.getByRole('menuitem', { name: 'Plotting Bot' }).locator('a').click();
    await page
      .getByRole("row", { name: "Rahmad Fatih user3 userpkl3@asvri.ai" })
      .getByRole("button")
      .click();
    await page
      .getByRole("menuitem", { name: "Plotting Bot" })
      .locator("a")
      .click();
    await page
      .getByRole("row", { name: "test saja SQL Agent Pengguna" })
      .getByRole("radio")
      .nth(2)
      .check();
    await page.getByRole("button", { name: "Simpan" }).click();
    await page.getByRole("toolbar").getByText("PKL JAGR").click();
    await page.getByRole("menuitem", { name: "Keluar" }).click();

    await page.getByRole("textbox").click();
    await page.getByRole("textbox").fill("user3");
    await page.getByRole("button", { name: "Sign in" }).dblclick();
  });
});

test.describe("Fitur Peran Bot (Bot Testing)", () => {
  test("Pengguna (TC-12)", async ({ page }) => {
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
    await page.locator("a").filter({ hasText: "Pengaturan" }).click();
    await page.locator("a").filter({ hasText: "Pengguna" }).click();
    await page
      .getByRole("row", { name: "Rahmad Fatih user3 userpkl3@asvri.ai" })
      .getByRole("button")
      .click();
    await page
      .getByRole("menuitem", { name: "Plotting Bot" })
      .locator("a")
      .click();
    await page
      .getByRole("row", { name: "Testing RAG Pengguna Admin" })
      .getByRole("checkbox")
      .check();
    await page
      .getByRole("row", { name: "Testing RAG Pengguna Admin" })
      .getByRole("radio")
      .first()
      .check();
    await page.getByRole("button", { name: "Simpan" }).click();

    await page.getByRole("toolbar").getByRole("img").nth(1).click();
    await page.getByRole("menuitem", { name: "Keluar" }).click();
    await page.locator('input[name="identifier"]').fill("user3");
    await page.getByRole("button", { name: "Sign in" }).click();
    await page.locator('input[type="password"]').fill("AWkBAQtX");
    await page.getByRole("button", { name: "Continue" }).click();
    await page.waitForTimeout(1000);
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
    await expect(
      page.locator("a").filter({ hasText: "Percakapan" })
    ).toBeVisible();
    await expect(
      page.locator("a").filter({ hasText: "Obrolan" })
    ).toBeVisible();
    await expect(
      page.locator("a").filter({ hasText: "Riwayat" })
    ).toBeVisible();
    await expect(page.locator("div>.space-y-1")).toHaveCount(2);
  });

  test("Admin (TC-13)", async ({ page }) => {
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
    await page.locator("a").filter({ hasText: "Pengaturan" }).click();
    await page.locator("a").filter({ hasText: "Pengguna" }).click();
    await page
      .getByRole("row", { name: "Rahmad Fatih user3 userpkl3@asvri.ai" })
      .getByRole("button")
      .click();
    await page
      .getByRole("menuitem", { name: "Plotting Bot" })
      .locator("a")
      .click();
    await page
      .getByRole("row", { name: "Testing RAG Pengguna Admin" })
      .getByRole("checkbox")
      .check();
    await page
      .getByRole("row", { name: "Testing RAG Pengguna Admin" })
      .getByRole("radio")
      .nth(1)
      .check();
    await page.getByRole("button", { name: "Simpan" }).click();

    await page.getByRole("toolbar").getByRole("img").nth(1).click();
    await page.getByRole("menuitem", { name: "Keluar" }).click();
    await page.locator('input[name="identifier"]').fill("user3");
    await page.getByRole("button", { name: "Sign in" }).click();
    await page.locator('input[type="password"]').fill("AWkBAQtX");
    await page.getByRole("button", { name: "Continue" }).click();
    await page.waitForTimeout(1000);
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
    await expect(
      page.locator("a").filter({ hasText: "Obrolan" })
    ).toBeVisible();
    await expect(
      page.locator("a").filter({ hasText: "Riwayat" })
    ).toBeVisible();
    await expect(
      page.locator("a").filter({ hasText: "Analitik" })
    ).toBeVisible();
    // await expect(page.locator("div>.ml-8>.ml-4").first())).toHaveCount(3);
    await page.locator("a").filter({ hasText: "Pengetahuan" }).click();
    await expect(
      page.locator("a").filter({ hasText: "Sumber Data" })
    ).toBeVisible();
    await page.locator("a").filter({ hasText: "Pengaturan" }).click();
    // await expect(page.locator("div>.ml-8>.space-y-1").nth(2)).toHaveCount(2);
    await expect(
      page.locator("a").filter({ hasText: "Konfigurasi Bot" })
    ).toBeVisible();
    await expect(
      page.locator("a").filter({ hasText: "Integrasi layanan" })
    ).toBeVisible();
  });

  test("Pengelola Data (TC-14) (Bot Testing)", async ({ page }) => {
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
    await page.locator("a").filter({ hasText: "Pengaturan" }).click();
    await page.locator("a").filter({ hasText: "Pengguna" }).click();
    await page
      .getByRole("row", { name: "Rahmad Fatih user3 userpkl3@asvri.ai" })
      .getByRole("button")
      .click();
    await page
      .getByRole("menuitem", { name: "Plotting Bot" })
      .locator("a")
      .click();
    await page
      .getByRole("row", { name: "Testing RAG Pengguna Admin" })
      .getByRole("checkbox")
      .check();
    await page
      .getByRole("row", { name: "Testing RAG Pengguna Admin" })
      .getByRole("radio")
      .nth(2)
      .check();
    await page.getByRole("button", { name: "Simpan" }).click();

    await page.getByRole("toolbar").getByRole("img").nth(1).click();
    await page.getByRole("menuitem", { name: "Keluar" }).click();
    await page.locator('input[name="identifier"]').fill("user3");
    await page.getByRole("button", { name: "Sign in" }).click();
    await page.locator('input[type="password"]').fill("AWkBAQtX");
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
    await page.locator("a").filter({ hasText: "Pengetahuan" }).click();
    await expect(
      page.locator("a").filter({ hasText: "Pengetahuan" })
    ).toBeVisible();
    await expect(
      page.locator("a").filter({ hasText: "Sumber Data" })
    ).toBeVisible();
    await expect(page.locator("div>.space-y-1")).toHaveCount(2);
  });
});
