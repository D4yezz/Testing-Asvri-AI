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

  test.describe("Ringkasan Dokumen dan Suara", () => {
    test("Berkas Pengetahuan (TC-09)", async ({ page }) => {
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
      await page
        .locator("a")
        .filter({ hasText: "Ringkasan Dokumen & Suara" })
        .click();
      await page.getByRole("button", { name: "Tambah Ringkasan" }).click();
      await page.getByRole("button", { name: "Berkas Pengetahuan" }).click();
      await page.getByRole("combobox", { name: "Pilih Topik" }).click();
      await page.getByRole("option", { name: "test aja" }).click();
      await page.getByRole("combobox", { name: "Pilih Dokumen" }).click();
      await page.getByRole("option", { name: "pusat.pdf" }).click();
      await page.getByRole("button", { name: "Selanjutnya" }).click();

      await page.getByRole("combobox", { name: "Model", exact: true }).click();
      await page
        .getByRole("option", { name: "Zephyr 7B Beta (Fireworks)" })
        .click();
      await page
        .getByRole("slider", { name: "Temperature Model" })
        .locator("div")
        .click();
      await page.locator('[id="static\\.static-slider\\.temperature"]').click();
      await page
        .getByRole("slider", { name: "Temperature Model" })
        .locator("div")
        .click();
      await page
        .locator(
          ".col-span-12 > div > div > div > div > div:nth-child(2) > div > div > div > .flex-1 > div:nth-child(2)"
        )
        .click();
      // await page.locator('[id="static\\.static-slider\\.temperature"] > .form-shadow-input > div').first().click();
      await page
        .getByRole("slider", { name: "Temperature Model" })
        .press("ArrowRight");
      await page
        .getByRole("combobox", { name: "Prompt / Instruksi Model" })
        .click();
      await page
        .getByRole("option", { name: "Ringkasan Dokumen Umum" })
        .click();
      await page
        .locator(
          "div:nth-child(4) > div > .flex-1 > div:nth-child(2) > div > div > span"
        )
        .first()
        .click();
      await page
        .getByRole("combobox", { name: "Prompt / Instruksi Model" })
        .click();
      await page.getByRole("option", { name: "Ringkasan Hasil Rapat" }).click();
      await page.getByRole("button", { name: "Ringkas Dokumen" }).click();
      await page.getByRole("button", { name: "Ringkas Ulang" }).click(); //tombol tidak berfungsi
      await page.getByRole("button", { name: "Simpan" }).click(); //tidak bisa disimpan karena "Could not find field at `createOneBotSummary.data.sourceId`"
    });

    test("Transkrip Rekaman (TC-10)", async ({ page }) => {
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
      await page
        .locator("a")
        .filter({ hasText: "Ringkasan Dokumen & Suara" })
        .click();
      await page.getByRole("button", { name: "Tambah Ringkasan" }).click();
      await page.getByRole("button", { name: "Transkrip Rekaman" }).click();

      await page.getByRole("combobox", { name: "Pilih Kategori" }).click();
      await page.locator("#pv_id_12_0").click();
      await page.getByRole("combobox", { name: "Pilih Transkrip" }).click();
      await page.getByRole("option", { name: "hanya testing" }).click();
      await page.getByRole("button", { name: "Selanjutnya" }).click();
      await page.getByRole("combobox", { name: "Model", exact: true }).click();
      await page
        .getByRole("option", { name: "Capybara 34B (Fireworks)" })
        .click();
      await page
        .locator(
          ".col-span-12 > div > div > div > div > div:nth-child(2) > div > div > div > .flex-1 > div:nth-child(2)"
        )
        .click();
      await page
        .getByRole("group")
        .filter({ hasText: /^$/ })
        .getByRole("textbox")
        .click();
      await page
        .getByRole("group")
        .filter({ hasText: /^$/ })
        .getByRole("textbox")
        .fill("0.7");
      await page
        .getByRole("combobox", { name: "Prompt / Instruksi Model" })
        .click();
      await page
        .getByRole("option", { name: "Ringkasan Dokumen Umum" })
        .click();

      await page.locator("#instruksi").click();
      await page
        .locator("#instruksi")
        .fill(
          "Dapatkah Anda memberikan ringkasan yang komprehensif dari teks yang diberikan? Ringkasan tersebut harus mencakup semua poin utama dan gagasan utama yang disajikan dalam teks asli, sekaligus meringkas informasi ke dalam format yang ringkas dan mudah dipahami. Pastikan bahwa ringkasan tersebut mencakup detail dan contoh yang relevan yang mendukung gagasan utama, sekaligus keren dan bagus serta testing saja menghindari informasi atau pengulangan yang tidak perlu. Panjang ringkasan harus sesuai dengan panjang dan kompleksitas teks asli, memberikan gambaran umum yang jelas dan akurat tanpa menghilangkan informasi penting apa pun."
        );
      await page.getByRole("button", { name: "Ringkas Dokumen" }).click();
      await page.getByRole("button", { name: "Simpan" }).click(); //tidak bisa disimpan karena "Could not find field at `createOneBotSummary.data.sourceId`"
    });
  });

  test.describe("Obrolan (Percakapan)", () => {
    test("Percakapan Baru (TC-11)", async ({ page }) => {
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

      await page.locator("a").filter({ hasText: "Percakapan" }).click();
      await page.locator("a").filter({ hasText: "Obrolan" }).click();
      await page.getByRole("button", { name: "Percakapan Baru" }).click(); //tidak bisa menambah percakapan baru
    });

    test("Pengaturan Chat (TC-12)", async ({ page }) => {
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
      await page.locator("a").filter({ hasText: "Percakapan" }).click();
      await page.locator("a").filter({ hasText: "Obrolan" }).click();
      await page.getByRole("button").filter({ hasText: /^$/ }).nth(1).click();
      // ucapan ke text
      await page.getByRole("combobox", { name: "Pilih Bahasa" }).click();
      await page.getByRole("option", { name: "Arabic" }).click();
      await page.getByRole("button", { name: "Terapkan" }).click();
      // ucapan ke text

      // text ke ucapan
      await page.getByRole("button").filter({ hasText: /^$/ }).nth(1).click();
      await page.getByText("Text ke Ucapan").click();
      await page
        .getByRole("switch", { name: "Aktifkan atau Nonaktifkan" })
        .locator("span")
        .first()
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
        .fill("test hari ini");
      await page.getByRole("button", { name: "Terapkan" }).click();
      // text ke ucapan
    });

    test("Sesi Percakapan (TC-13) ", async ({ page }) => {
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
      await page.locator("a").filter({ hasText: "Percakapan" }).click();
      await page.locator("a").filter({ hasText: "Obrolan" }).click();
      await page
        .getByRole("list")
        .locator("div")
        .filter({ hasText: "Sesi Percakapan 19 Mar 2025 tes" })
        .getByRole("listitem")
        .click();
      await page
        .getByRole("textbox", { name: "Tulis Pertanyaan Anda di sini" })
        .click();
      await page
        .getByRole("textbox", { name: "Tulis Pertanyaan Anda di sini" })
        .fill("pertanyaan test");
      await page.getByRole("button", { name: "Kirim" }).click();
      await page.getByText("Puas", { exact: true }).nth(3).click();

      await page
        .getByRole("listitem")
        .filter({ hasText: "coba test chat" })
        .click();
      await expect(
        page.getByText("Pengguna20 Maret 2025 20:27:47coba test chat")
      ).toBeVisible();
    });

    test("Chat Playground (TC-14) ", async ({ page }) => {
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
      await page.locator("a").filter({ hasText: "Percakapan" }).click();
      await page.locator("a").filter({ hasText: "Obrolan" }).click();
      await page
        .getByRole("textbox", { name: "Tulis Pertanyaan Anda di sini" })
        .click();
      await page
        .getByRole("textbox", { name: "Tulis Pertanyaan Anda di sini" })
        .fill("coba test chat");
      await page.getByRole("button", { name: "Kirim" }).click();
      await expect(
        page.locator("div").filter({ hasText: /^coba test chat$/ })
      ).toBeVisible();
    });
  });

  test.describe("Riwayat (Percakapan)", () => {
    test("Jenis (TC-15)", async ({ page }) => {
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
      await page.locator("a").filter({ hasText: "Percakapan" }).click();
      await page.locator("a").filter({ hasText: "Riwayat" }).click();
      await page.locator("#type").click();
      await page.getByRole("option", { name: "Playground" }).click();
      await expect(page.getByText("Sesi Percakapan 20 Mar")).toBeVisible();
    });
    test("Tanggal (TC-16)", async ({ page }) => {
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
      await page.locator("a").filter({ hasText: "Percakapan" }).click();
      await page.locator("a").filter({ hasText: "Riwayat" }).click();
      await page.getByRole("textbox", { name: "Pilih Tanggal" }).click();
      await page.locator(".arrowDown").click();
      await page.locator(".arrowDown").click();
      await page.getByLabel("Month").selectOption("5");
      await page.getByLabel("June 1,").click();
      await page.locator(".arrowUp").click();
      await page.getByLabel("Month").selectOption("11");
      await page.getByLabel("December 12,").click();
    });
  });

  test.describe("Analitik (Percakapan)", () => {
    test("Feedback (TC-17)", async ({ page }) => {
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
      await page.locator("a").filter({ hasText: "Percakapan" }).click();
      await page.locator("a").filter({ hasText: "Analitik" }).click();
      await page.waitForLoadState("load");
      await page
        .locator("#metabase-dashboard")
        .contentFrame()
        .getByRole("button", { name: "Feedback" })
        .click();
      await page
        .locator("#metabase-dashboard")
        .contentFrame()
        .getByRole("textbox", { name: "Enter some text" })
        .fill("test feedback");
      await page
        .locator("#metabase-dashboard")
        .contentFrame()
        .getByRole("button", { name: "Add filter" })
        .click();
      await page
        .locator("#metabase-dashboard")
        .contentFrame()
        .getByRole("button", { name: "Feedback" })
        .click();
      await expect(
        page
          .locator("#metabase-dashboard")
          .contentFrame()
          .getByTestId("field-values-widget")
          .getByRole("listitem")
          .filter({ hasText: "test feedback" })
      ).toBeVisible();
    });

    test("Chanel (TC-18)", async ({ page }) => {
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
      await page.locator("a").filter({ hasText: "Percakapan" }).click();
      await page.locator("a").filter({ hasText: "Analitik" }).click();
      await page.waitForLoadState("load");
      await page
        .locator("#metabase-dashboard")
        .contentFrame()
        .getByRole("group")
        .filter({ hasText: "Chanel" })
        .click();
      await page
        .locator("#metabase-dashboard")
        .contentFrame()
        .getByRole("textbox", { name: "Enter some text" })
        .fill("test chanel");
      await page
        .locator("#metabase-dashboard")
        .contentFrame()
        .getByRole("button", { name: "Add filter" })
        .click();
      await page
        .locator("#metabase-dashboard")
        .contentFrame()
        .getByRole("button", { name: "Chanel" })
        .click();
      await expect(
        page
          .locator("#metabase-dashboard")
          .contentFrame()
          .getByTestId("field-values-widget")
          .getByRole("listitem")
          .filter({ hasText: "test chanel" })
      ).toBeVisible();
    });

    const fs = require("fs");
    const path = require("path");

    test("Download Results (TC-19)", async ({ page }) => {
      await page.goto("http://sim.dev.asvri.ai/");
      await page.locator('input[name="identifier"]').fill("PKLJAGR");
      await page.getByRole("button", { name: "Sign in" }).click();
      await page.locator('input[type="password"]').fill("IFcXRPCK");
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
      await page.locator("a").filter({ hasText: "Analitik" }).click();
      await page.waitForLoadState("load");
      await page
        .locator("#metabase-dashboard")
        .contentFrame()
        .locator("div")
        .filter({ hasText: /^Jml\. Percakapan per Feedback$/ })
        .first()
        .hover();
      await page
        .locator("#metabase-dashboard")
        .contentFrame()
        .getByRole("img", { name: "ellipsis icon" })
        .click();
      await page
        .locator("#metabase-dashboard")
        .contentFrame()
        .getByRole("dialog", { name: "ellipsis icon" })
        .locator("div")
        .nth(1)
        .click();

      const downloadPath = path.join(__dirname, "../../assets upload");

      const [download] = await Promise.all([
        page.waitForEvent("download"),
        page
          .locator("#metabase-dashboard")
          .contentFrame()
          .getByRole("button", { name: ".json" })
          .click(),
      ]);

      const filePath = path.join(
        downloadPath,
        await download.suggestedFilename()
      );
      await download.saveAs(filePath);

      expect(filePath.endsWith(".json")).toBeTruthy();
      expect(fs.existsSync(filePath)).toBeTruthy();
    });
  });

  test.describe("Sumber Data (Pengetahuan)", () => {
    test("Tambah Topik (TC-20)", async ({ page }) => {
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
      await page.locator("a").filter({ hasText: "Pengetahuan" }).click();
      await page.locator("a").filter({ hasText: "Sumber Data" }).click();
      await page.getByRole("button", { name: "Tambah Topik" }).click();
      await page
        .getByRole("textbox", { name: "Topik *" })
        .fill("testing hari ini");
      await page
        .getByRole("textbox", { name: "Deskripsi *" })
        .fill("coba fitur testing");
      await page
        .getByRole("switch", { name: "Private" })
        .locator("span")
        .first()
        .click();
      await page.getByRole("button", { name: "Simpan" }).click();
      await expect(
        page.getByRole("cell", { name: "testing hari ini coba fitur" })
      ).toBeVisible();
    });

    test("Lihat Berkas (TC-21)", async ({ page }) => {
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
      await page.locator("a").filter({ hasText: "Pengetahuan" }).click();
      await page.locator("a").filter({ hasText: "Sumber Data" }).click();
      await page
        .getByRole("cell", { name: "3 Lihat Berkas" })
        .locator("u")
        .click();
      await expect(
        page
          .getByRole("navigation")
          .filter({ hasText: "Daftar Topik / Daftar Berkas" })
      ).toBeVisible();
    });

    test("Status (TC-22)", async ({ page }) => {
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
      await page.locator("a").filter({ hasText: "Pengetahuan" }).click();
      await page.locator("a").filter({ hasText: "Sumber Data" }).click();
      await page
        .getByRole("row", { name: "testing hari ini coba fitur" })
        .getByRole("switch")
        .click();
      await page.getByRole("button", { name: "Ya" }).click();
      await expect(
        page
          .getByRole("row", { name: "testing hari ini coba fitur" })
          .getByRole("switch")
      ).toHaveAttribute("aria-checked", "false");
    });

    test("Ubah Info (TC-23)", async ({ page }) => {
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
      await page.locator("a").filter({ hasText: "Pengetahuan" }).click();
      await page.locator("a").filter({ hasText: "Sumber Data" }).click();

      await page
        .getByRole("row", { name: "testing hari ini coba fitur" })
        .getByRole("button")
        .click();
      await page
        .getByRole("menuitem", { name: "Ubah Info" })
        .locator("a")
        .click();
      await page.getByRole("textbox", { name: "Deskripsi *" }).click();
      await page
        .getByRole("textbox", { name: "Deskripsi *" })
        .fill("coba fitur testing yang di ubah");
      await page
        .getByRole("switch", { name: "Private" })
        .locator("span")
        .first()
        .click();
      await page.getByRole("button", { name: "Simpan" }).click();
      await expect(page.getByText("coba fitur testing yang di")).toBeVisible();
    });

    test("Perbaharui Pengetahuan (TC-24)", async ({ page }) => {
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
      await page.locator("a").filter({ hasText: "Pengetahuan" }).click();
      await page.locator("a").filter({ hasText: "Sumber Data" }).click();

      await page
        .getByRole("row", { name: "testing hari ini coba fitur" })
        .getByRole("button")
        .click();
      await page
        .getByRole("menuitem", { name: "Perbaharui Pengetahuan" })
        .locator("a")
        .click();
      await expect(page).toHaveURL(
        "https://sim.dev.asvri.ai/bot/cm83uh4l200051x3g7sbmo70h/source/cm8mg9j0p0003961bc9c1d2ax"
      );
    });

    test("Hapus (TC-25)", async ({ page }) => {
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
      await page.locator("a").filter({ hasText: "Pengetahuan" }).click();
      await page.locator("a").filter({ hasText: "Sumber Data" }).click();

      await page
        .getByRole("row", { name: "testing hari ini coba fitur" })
        .getByRole("button")
        .click();
      await page.getByRole("menuitem", { name: "Hapus" }).locator("a").click();
      await page.getByRole("button", { name: "Hapus" }).click();
      await expect(
        page.getByRole("cell", { name: "testing hari ini coba fitur" })
      ).not.toBeVisible();
    });
  });

  test.describe("Daftar Berkas Pengetahuan", () => {
    test("Tambah Berkas (TC-26)", async ({ page }) => {
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
      await page.locator("a").filter({ hasText: "Pengetahuan" }).click();
      await page.locator("a").filter({ hasText: "Sumber Data" }).click();
      await page
        .getByRole("cell", { name: "3 Lihat Berkas" })
        .locator("u")
        .click();
      await page.getByRole("button", { name: "Tambah Berkas" }).click();
      await page.getByRole("combobox", { name: "Kategori Dokumen *" }).click();
      await page.getByRole("option", { name: "Situs Web" }).click();

      await page
        .getByRole("switch", { name: "Private" })
        .locator("div")
        .click();
      await page.getByRole("button", { name: "Unggah File" }).click();

      await page.getByRole("button", { name: "Selanjutnya" }).click();
      await page
        .locator("#multifile")
        .setInputFiles(
          "D:/File Coding/RPL-SMKN-8-MALANG/PKL_24-25/PlayWright/Testing-Asvri-AI/assets upload/test.docx"
        );
      await expect(
        page.locator(".flex-1>.col-span-12>div>.flex>.text-sm")
      ).toHaveText("test.docx");
      await page.getByRole("button", { name: "Simpan" }).click();
      await expect(
        page.getByRole("cell", { name: "test.docx File Size: 0.36 MB" })
      ).toBeVisible();
    });

    test("Filter (TC-27)", async ({ page }) => {
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
      await page.locator("a").filter({ hasText: "Pengetahuan" }).click();
      await page.locator("a").filter({ hasText: "Sumber Data" }).click();
      await page
        .getByRole("cell", { name: "4 Lihat Berkas" })
        .locator("u")
        .click();

      await page.locator("button:nth-child(2)").click();
      // tombol reset
      await page.getByRole("combobox", { name: "Jenis Dokumen" }).click();
      await page.getByRole("option", { name: "Situs Web" }).click();
      await page.getByRole("spinbutton", { name: "Minimal Kata" }).fill("34");
      await page.getByRole("button", { name: "Reset" }).click();
      await expect(page.locator('[type="number"]')).not.toHaveValue("34");
      // tombol reset

      await page.getByRole("combobox", { name: "Jenis Dokumen" }).click();
      await page.getByRole("option", { name: "Situs Web" }).click();
      await page.getByRole("spinbutton", { name: "Minimal Kata" }).fill("55");
      await page.getByRole("button", { name: "Terapkan" }).click();
      await expect(
        page.getByRole("cell", { name: "pusat.pdf File Size: 0.00 MB" })
      ).toBeVisible();
    });

    test("Cuplikan Kata (TC-28)", async ({ page }) => {
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
      await page.locator("a").filter({ hasText: "Pengetahuan" }).click();
      await page.locator("a").filter({ hasText: "Sumber Data" }).click();
      await page
        .getByRole("cell", { name: "4 Lihat Berkas" })
        .locator("u")
        .click();
      await page
        .getByRole("row", { name: "test.docx File Size: 0.36 MB" })
        .getByRole("button")
        .click();
      await page
        .getByRole("menuitem", { name: "Cuplikan Kata" })
        .locator("a")
        .click();
      await expect(
        page.locator("div").filter({ hasText: /^Cuplikan Data$/ })
      ).toBeVisible();
    });

    test("Edit (TC-29)", async ({ page }) => {
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
      await page.locator("a").filter({ hasText: "Pengetahuan" }).click();
      await page.locator("a").filter({ hasText: "Sumber Data" }).click();
      await page
        .getByRole("cell", { name: "4 Lihat Berkas" })
        .locator("u")
        .click();
      await page
        .getByRole("row", { name: "test.docx File Size: 0.36 MB" })
        .getByRole("button")
        .click();
      await page.getByRole("menuitem", { name: "Edit" }).locator("a").click();
      await page
        .getByRole("switch", { name: "Publik" })
        .locator("span")
        .first()
        .click();
      await page.getByRole("button", { name: "Simpan" }).click();
      await expect(page.locator(".inline-flex>.gap-2").first()).toHaveText(
        "Private"
      );
    });

    test("re-Fetch Data (TC-30)", async ({ page }) => {
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
      await page.locator("a").filter({ hasText: "Pengetahuan" }).click();
      await page.locator("a").filter({ hasText: "Sumber Data" }).click();
      await page
        .getByRole("cell", { name: "4 Lihat Berkas" })
        .locator("u")
        .click();
      await page
        .getByRole("row", { name: "test.docx File Size: 0.36 MB" })
        .getByRole("button")
        .click();
      await page
        .getByRole("menuitem", { name: "re-Fetch Data" })
        .locator("a")
        .click();
      await expect(page.locator('[data-pc-name="toast"]')).toBeVisible();
    });

    test("Tambah Cuplikan Data (TC-31)", async ({ page }) => {
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
      await page.locator("a").filter({ hasText: "Pengetahuan" }).click();
      await page.locator("a").filter({ hasText: "Sumber Data" }).click();
      await page
        .getByRole("cell", { name: "4 Lihat Berkas" })
        .locator("u")
        .click();
      await page
        .getByRole("row", { name: "test.docx File Size: 0.36 MB" })
        .getByRole("button")
        .click();
      await page
        .getByRole("menuitem", { name: "Cuplikan Kata" })
        .locator("a")
        .click();
      await expect(
        page.locator("div").filter({ hasText: /^Cuplikan Data$/ })
      ).toBeVisible();
      await page.getByRole("button", { name: "Tambah Cuplikan" }).click();
      await page
        .getByRole("textbox", { name: "Konten *" })
        .fill("test cuplikan data");
      await page.getByRole("button", { name: "Simpan" }).click();
    });

    test("Hapus (TC-32)", async ({ page }) => {
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
      await page.locator("a").filter({ hasText: "Pengetahuan" }).click();
      await page.locator("a").filter({ hasText: "Sumber Data" }).click();
      await page
        .getByRole("cell", { name: "4 Lihat Berkas" })
        .locator("u")
        .click();
      await page
        .getByRole("row", { name: "test.docx File Size: 0.36 MB" })
        .getByRole("button")
        .click();
      await page.getByRole("menuitem", { name: "Hapus" }).locator("a").click();
      await page.getByRole("button", { name: "Hapus" }).click();
      await expect(
        page.getByRole("cell", { name: "test.docx File Size: 0.36 MB" })
      ).not.toBeVisible();
    });
  });
});

test.describe("Bot test saja", () => {
  test.describe("Konfigurasi Bot (Pengaturan)", () => {
    test("Form Konfigurasi (TC-33)", async ({ page }) => {
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
        .filter({ hasText: /^test saja diubahMs GraphRAG0 Token dipakai$/ })
        .first()
        .click();
      await page.locator("a").filter({ hasText: "Pengaturan" }).click();
      await page.locator("a").filter({ hasText: "Konfigurasi Bot" }).click();
      await page.getByRole("textbox", { name: "Nama Bot" }).click();
      await page
        .getByRole("textbox", { name: "Nama Bot" })
        .fill("test saja diubah");
      await page.getByRole("combobox", { name: "SQL Agent Jenis Bot" }).click();
      await page.getByRole("option", { name: "Ms GraphRAG" }).click();
      await page
        .getByRole("combobox", { name: "deepseek-r1:free (Deepseek)" })
        .click();
      await page.getByRole("option", { name: "qwen-2.5-32b (Groq)" }).click();
      await page
        .getByRole("slider", { name: "Temperatur Model" })
        .locator("div")
        .click();
      await page
        .locator("#val_temp > .form-shadow-input > div")
        .first()
        .click();
      await page
        .getByRole("combobox", { name: "Ollama Embeddings Embedding" })
        .click();
      await page.getByRole("option", { name: "text-embedding-ada-" }).click();
      await page
        .getByRole("switch", { name: "Streaming Percakapan" })
        .locator("span")
        .first()
        .click();
      await page
        .getByRole("switch", { name: "Streaming Percakapan" })
        .locator("span")
        .first()
        .click();
      await page
        .getByRole("switch", { name: "Kutip sumber dalam Percakapan" })
        .locator("span")
        .first()
        .click();
      await page
        .getByRole("switch", { name: "Menggunakan Pencarian dari" })
        .locator("span")
        .nth(1)
        .click();
      await page
        .getByRole("switch", { name: "Gunakan Pengambilan Pencarian" })
        .locator("span")
        .first()
        .click();
      await page
        .getByRole("spinbutton", { name: "Jumlah dokumen yang akan" })
        .click();
      await page
        .getByRole("spinbutton", { name: "Jumlah dokumen yang akan" })
        .fill("12");
      await page.getByLabel("Semantic Search Similarity").selectOption("0.5");
      await page.getByRole("spinbutton", { name: "Kontekstual Bot" }).click();
      await page
        .getByRole("spinbutton", { name: "Kontekstual Bot" })
        .fill("07");
      await page
        .getByRole("textbox", { name: "Pengaturan Prompt : Menjawab" })
        .click();
      await page
        .getByRole("textbox", { name: "Pengaturan Prompt : Menjawab" })
        .fill(
          "Anda adalah asisten AI yang sangat membantu dan pintar. Pertanyaan: {question} Jawaban yang membantu dalam format markdown text:"
        );
      await page
        .getByRole("switch", { name: "Aktifkan Perlindungan Bot" })
        .locator("div")
        .click();
      await page
        .getByRole("switch", { name: "Sinkronisasi Otomatis Sumber" })
        .locator("span")
        .nth(1)
        .click();
      await page
        .getByRole("switch", { name: "Atur Ulang Sesi Obrolan" })
        .locator("div")
        .click();
      await page
        .getByRole("spinbutton", { name: "Batas Waktu Tidak Aktif" })
        .click();
      await page
        .getByRole("spinbutton", { name: "Batas Waktu Tidak Aktif" })
        .fill("4000");
      await page.getByRole("button", { name: "Simpan" }).first().click();
      await page
        .locator("div")
        .filter({ hasText: /^BOT ASVRI$/ })
        .first()
        .click();
      await expect(
        page
          .locator("div")
          .filter({ hasText: /^test saja diubahMs GraphRAG0 Token dipakai$/ })
          .first()
      ).toBeVisible();
    });

    test(" Form Perlindungan Sandi (TC-34)", async ({ page }) => {
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
        .filter({ hasText: /^test saja diubahMs GraphRAG0 Token dipakai$/ })
        .first()
        .click();
      await expect(
        page.getByRole("heading", { name: "Ringkasan Data statistik" })
      ).toBeVisible();
      await page.waitForLoadState("load");
      await page.locator("a").filter({ hasText: "Pengaturan" }).click();
      await page.locator("a").filter({ hasText: "Konfigurasi Bot" }).click();
      await page
        .getByRole("switch", { name: "Aktifkan Perlindungan Kata" })
        .locator("span")
        .first()
        .click();
      await page
        .getByRole("textbox", { name: "Kata Sandi" })
        .fill("testkatasandi");
      await page.getByRole("button", { name: "Simpan" }).nth(1).click();
    });
  });
});
