import { test, expect } from "@playwright/test";

test.describe('Toggle ', () => {
    test('Kategori (TC-01))', async ({ page }) => {
        await page.goto('http://sim.dev.asvri.ai/');
        // Login
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('user2');
        await page.getByRole('button', { name: 'Sign in' }).click();
        await expect(page).toHaveURL('https://auth.dev.siap.id/sign-in/password');
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('wq2JVDOh');
        await page.getByRole('button', { name: 'Continue' }).click();
        await expect(page).toHaveURL('https://sim.dev.asvri.ai/');
        
        await page.getByRole('dialog').getByText('PKL JAGR').click();
        await page.locator('a').filter({ hasText: 'Daftar ASVRI Bot' }).click();
        await page.getByRole('combobox', { name: 'Kategori ASVRI BOT' }).click();
        await page.getByRole('option', { name: 'RAG', exact: true }).click();
        await page.getByRole('combobox', { name: 'Kategori ASVRI BOT' }).click();
        await page.getByRole('option', { name: 'Table RAG' }).click();
        await page.getByRole('combobox', { name: 'Kategori ASVRI BOT' }).click();
        await page.getByRole('option', { name: 'SQL Agent' }).click();
        await page.getByRole('combobox', { name: 'Kategori ASVRI BOT' }).click();
        await page.getByRole('option', { name: 'RAG with HyDE' }).click();
        await page.getByRole('combobox', { name: 'Kategori ASVRI BOT' }).click();
        await page.getByRole('option', { name: 'Ms GraphRAG' }).click();
        await page.getByRole('combobox', { name: 'Kategori ASVRI BOT' }).click();
        await page.getByRole('option', { name: 'Dataframe Agent' }).click();
        await page.getByRole('combobox', { name: 'Kategori ASVRI BOT' }).click();
        await page.getByRole('combobox', { name: 'Kategori ASVRI BOT' }).locator('span').nth(1).click();
    })

    test('Pencarian (TC-02)', async ({ page }) => {
        // Buka halaman utama
        await page.goto('http://sim.dev.asvri.ai/');
    
        // Login step 1
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('user2');
        await page.getByRole('button', { name: 'Sign in' }).click();
    
        // Pastikan redirect ke halaman login password
        await expect(page).toHaveURL('https://auth.dev.siap.id/sign-in/password');
    
        // Login step 2 (isi password)
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('wq2JVDOh');
        await page.getByRole('button', { name: 'Continue' }).click();
    
        // Pastikan redirect kembali ke halaman utama
        await expect(page).toHaveURL('https://sim.dev.asvri.ai/');
    
        // Pilih dialog "PKL JAGR"
        await page.getByRole('dialog').getByText('PKL JAGR').click();
    
        // Klik menu "Daftar ASVRI Bot"
        await page.locator('a').filter({ hasText: 'Daftar ASVRI Bot' }).click();
    
        // Lakukan pencarian pertama (opsional)
        await page.getByRole('textbox', { name: 'Pencarian Bot' }).click();
        await page.getByRole('textbox', { name: 'Pencarian Bot' }).fill('test');
        await page.getByRole('textbox', { name: 'Pencarian Bot' }).press('Enter');
        await expect(page.getByRole('heading', { name: 'Testing' })).toBeVisible();
        await page.waitForTimeout(2000);
        // Lakukan pencarian kedua dengan kata "bot"
        await page.getByRole('textbox', { name: 'Pencarian Bot' }).fill('bot');
        await page.getByRole('textbox', { name: 'Pencarian Bot' }).press('Enter');
        await expect(page.getByRole('heading', { name: 'Bot Umum PKL JAGR' })).toBeVisible();
        
        
    });
    
    test('Tambah Bot (T-03C)', async ({ page }) => {
        await page.goto('http://sim.dev.asvri.ai/');
    
        // Login
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('user2');
        await page.getByRole('button', { name: 'Sign in' }).click();
        await expect(page).toHaveURL('https://auth.dev.siap.id/sign-in/password');
    
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('wq2JVDOh');
        await page.getByRole('button', { name: 'Continue' }).click();
        await expect(page).toHaveURL('https://sim.dev.asvri.ai/');
    
        // Masuk ke halaman Tambah Bot
        await page.getByRole('dialog').getByText('PKL JAGR').click();
        await page.locator('a').filter({ hasText: 'Daftar ASVRI Bot' }).click();
        await page.getByRole('button', { name: 'Tambah Bot' }).click();
    
        // Verifikasi popup "Tambah Bot" muncul
        const popup = page.getByRole('dialog', { name: 'Tambah Bot' });
        await expect(popup).toBeVisible();
    
        // Isi form
        await page.getByRole('textbox', { name: 'Nama Bot' }).fill('Test Tambah Bot User2');
        await page.locator('#jenis_bot_id').selectOption('6');
        await page.getByLabel('Embedding Model').click(); // Sesuaikan kalau ini dropdown atau field lainnya
    
        // Klik Simpan
        await page.getByRole('button', { name: 'Simpan' }).click();
    
        // Tunggu sampai popup tertutup
        await expect(popup).not.toBeVisible({ timeout: 3000 });
    });
    
    
    
    
    
})

test.describe('Bot Testing', () => {
    test('Navigasi Bot(TC-01)', async ({ page }) => {
        await page.goto('http://sim.dev.asvri.ai/');
        // Login
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('user2');
        await page.getByRole('button', { name: 'Sign in' }).click();
        await expect(page).toHaveURL('https://auth.dev.siap.id/sign-in/password');
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('wq2JVDOh');
        await page.getByRole('button', { name: 'Continue' }).click();
        await expect(page).toHaveURL('https://sim.dev.asvri.ai/');
        
        await page.getByRole('dialog').getByText('PKL JAGR').click();
        await page.locator('a').filter({ hasText: 'Daftar ASVRI Bot' }).click();
        await page.getByRole('heading', { name: 'Testing' }).click();
        await expect(page).toHaveURL('https://sim.dev.asvri.ai/bot/cm83uh4l200051x3g7sbmo70h');
        await page.locator('div').filter({ hasText: /^Testing$/ }).first().click();
        await page.getByRole('combobox').click();
        // await page.getByText('Daftarnya kosong').click();
        await page.getByRole('textbox', { name: 'Cari Bot' }).click();
        await page.getByRole('textbox', { name: 'Cari Bot' }).fill('tes');
        await page.getByRole('textbox', { name: 'Cari Bot' }).press('Enter');
        await page.getByRole('textbox', { name: 'Cari Bot' }).fill('bot');
        await page.getByRole('textbox', { name: 'Cari Bot' }).press('Enter');
        await page.getByRole('textbox', { name: 'Cari Bot' }).fill('');
        await page.getByText('Bot Umum PKL JAGR').click();
        await expect(page).toHaveURL('https://sim.dev.asvri.ai/bot/cm82eb3ck000hvwbdvuv166yi');
        await page.locator('div').filter({ hasText: /^BOT ASVRI$/ }).first().click();

        await page.getByText('Testing').click();
        await expect(page).toHaveURL('https://sim.dev.asvri.ai/bot/cm83uh4l200051x3g7sbmo70h');
    })

   test.describe('Beranda (TC-02)', () => {
    test('Filter Tanggal', async ({ page }) => {
        await page.goto('http://sim.dev.asvri.ai/');
        // Login
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('user2');
        await page.getByRole('button', { name: 'Sign in' }).click();
        await expect(page).toHaveURL('https://auth.dev.siap.id/sign-in/password');
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('wq2JVDOh');
        await page.getByRole('button', { name: 'Continue' }).click();
        await expect(page).toHaveURL('https://sim.dev.asvri.ai/');
        
        await page.getByRole('dialog').getByText('PKL JAGR').click();
        await page.locator('a').filter({ hasText: 'Daftar ASVRI Bot' }).click();
        await page.getByRole('heading', { name: 'Testing' }).click();
        await expect(page).toHaveURL('https://sim.dev.asvri.ai/bot/cm83uh4l200051x3g7sbmo70h');

        await page.getByText('08 April 2025 s/d 15 April').click();
        await page.getByText('1', { exact: true }).first().click();
        await page.locator('#pv_id_12_panel').getByLabel('15').getByText('15').click();
        await page.getByRole('button', { name: 'Terapkan' }).click();
        await page.getByText('31 Maret 2025 s/d 14 April').click();
        await page.locator('#pv_id_15_panel').getByText('8', { exact: true }).click();
        await page.locator('#pv_id_17_panel').getByLabel('14').getByText('14').click();
        await page.getByRole('button', { name: 'Terapkan' }).click();
   })

    test('Zoom in/Zoom out', async ({ page }) => {
        await page.goto('http://sim.dev.asvri.ai/');
        // Login
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('user2');
        await page.getByRole('button', { name: 'Sign in' }).click();
        await expect(page).toHaveURL('https://auth.dev.siap.id/sign-in/password');
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('wq2JVDOh');
        await page.getByRole('button', { name: 'Continue' }).click();
        await expect(page).toHaveURL('https://sim.dev.asvri.ai/');
        
        await page.getByRole('dialog').getByText('PKL JAGR').click();
        await page.locator('a').filter({ hasText: 'Daftar ASVRI Bot' }).click();
        await page.getByRole('heading', { name: 'Testing' }).click();
        await expect(page).toHaveURL('https://sim.dev.asvri.ai/bot/cm83uh4l200051x3g7sbmo70h');
          // Setelah klik, zoom ke 67%
          document.body.style.zoom = '67%';
          await page.evaluate(() => {
        });

         await page.waitForTimeout(6000); // kasih delay biar bisa lihat efek zoom

        // Kembalikan ke 100%
         await page.evaluate(() => {
         document.body.style.zoom = '100%';
          });
    })
   })
   
})
