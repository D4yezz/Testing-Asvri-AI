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

test.describe('Modul Test Fitur Bot', () => {
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
    
       
       test.describe('Percakapan(TC-03)', () => {
            test.describe('Obrolan', () => {
                test('Chat Playground-Bot Testing(TC-01)', async ({ page }) => {
                    test.setTimeout(120000);
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
                //bot testing
                await page.getByRole('heading', { name: 'Testing' }).click();
                await expect(page).toHaveURL('https://sim.dev.asvri.ai/bot/cm83uh4l200051x3g7sbmo70h');
                await page.locator('a').filter({ hasText: 'Percakapan' }).click();
                await page.locator('a').filter({ hasText: 'Obrolan' }).click();
                await expect(page).toHaveURL('https://sim.dev.asvri.ai/bot/cm83uh4l200051x3g7sbmo70h/playground');
    
                await page.getByRole('textbox', { name: 'Tulis Pertanyaan Anda di sini' }).click();
                await page.getByRole('textbox', { name: 'Tulis Pertanyaan Anda di sini' }).fill('testing playground tes1');
                await page.getByRole('button', { name: 'Kirim' }).click();
                await page.getByRole('textbox', { name: 'Tulis Pertanyaan Anda di sini' }).click();
                await page.getByRole('textbox', { name: 'Tulis Pertanyaan Anda di sini' }).fill('halo bot');
                await page.getByRole('button', { name: 'Kirim' }).click();
                await page.waitForTimeout(5000);
                await page.getByRole('textbox', { name: 'Tulis Pertanyaan Anda di sini' }).click();
                await page.getByRole('textbox', { name: 'Tulis Pertanyaan Anda di sini' }).fill('bisa jawab pertanyaan saya?');
                await page.getByRole('button', { name: 'Kirim' }).click();
                await page.waitForTimeout(5000);
                await page.getByRole('textbox', { name: 'Tulis Pertanyaan Anda di sini' }).click();
                await page.getByRole('textbox', { name: 'Tulis Pertanyaan Anda di sini' }).fill('apa saja yang diberikan');
                await page.getByRole('button', { name: 'Kirim' }).click();
                await page.waitForTimeout(4000);
                await page.getByRole('textbox', { name: 'Tulis Pertanyaan Anda di sini' }).click();
                await page.getByRole('textbox', { name: 'Tulis Pertanyaan Anda di sini' }).fill('Apa peran Pusat Standar dan Kebijakan Pendidikan (PSKP) dalam sistem pendidikan di Indonesia?');
                await page.getByRole('button', { name: 'Kirim' }).click();
                await page.waitForTimeout(6000);
                await page.getByRole('textbox', { name: 'Tulis Pertanyaan Anda di sini' }).click();
                await page.getByRole('textbox', { name: 'Tulis Pertanyaan Anda di sini' }).fill('こんにちはボット');
                await page.getByRole('button', { name: 'Kirim' }).click();
    
                
    
                
    
                })
                
                test('Percakapan Baru (TC-02)', async ({ page }) => {
                test.setTimeout(120000);
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
                //bot testing
                await page.getByRole('heading', { name: 'Testing' }).click();
                await expect(page).toHaveURL('https://sim.dev.asvri.ai/bot/cm83uh4l200051x3g7sbmo70h');
                await page.locator('a').filter({ hasText: 'Percakapan' }).click();
                await page.locator('a').filter({ hasText: 'Obrolan' }).click();
                await expect(page).toHaveURL('https://sim.dev.asvri.ai/bot/cm83uh4l200051x3g7sbmo70h/playground');
                await page.locator('li').first().click();
                await page.getByRole('button', { name: 'Percakapan Baru' }).click();
                await page.getByRole('textbox', { name: 'Tulis Pertanyaan Anda di sini' }).click();
                await page.getByRole('textbox', { name: 'Tulis Pertanyaan Anda di sini' }).fill('tes chat baru');
                await page.getByRole('button', { name: 'Kirim' }).click();
                await page.getByRole('button', { name: 'Percakapan Baru' }).dblclick();
                })

                test('Pengaturan Percakapan (TC-03)', async ({ page }) => {
                    test.setTimeout(120000);
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
                    //bot testing
                    await page.getByRole('heading', { name: 'Testing' }).click();
                    await expect(page).toHaveURL('https://sim.dev.asvri.ai/bot/cm83uh4l200051x3g7sbmo70h');
                    await page.locator('a').filter({ hasText: 'Percakapan' }).click();
                    await page.locator('a').filter({ hasText: 'Obrolan' }).click();
                    await await page.getByRole('button').filter({ hasText: /^$/ }).nth(1).click();expect(page).toHaveURL('https://sim.dev.asvri.ai/bot/cm83uh4l200051x3g7sbmo70h/playground');
                    // belum selesai

                    })
                
                
            })
            
            
       })
       
       test.describe('Riwayat', () => {
            test('Riwayat', async ({ page }) => {
                test.setTimeout(120000);
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
                //bot testing
                await page.getByRole('heading', { name: 'Testing' }).click();
                await expect(page).toHaveURL('https://sim.dev.asvri.ai/bot/cm83uh4l200051x3g7sbmo70h');

                await page.locator('a').filter({ hasText: 'Percakapan' }).click();
                await page.locator('a').filter({ hasText: 'Riwayat' }).click();

                await page.locator('#type').click();
                await page.getByRole('option', { name: 'Website' }).click();
                await page.getByRole('combobox', { name: 'Website' }).click();
                await page.getByRole('option', { name: 'API' }).click();
                await page.getByRole('combobox', { name: 'API' }).click();
                await page.getByRole('option', { name: 'Discord' }).click();
                await page.getByRole('combobox', { name: 'Discord' }).click();
                await page.getByRole('option', { name: 'Whatsapp' }).click();
                await page.getByRole('combobox', { name: 'Whatsapp' }).click();
                await page.getByRole('option', { name: 'Playground' }).click();
                await page.locator('body').press('ArrowDown');
                await page.locator('body').press('ArrowDown');
                await page.locator('body').press('ArrowDown');
                await page.locator('body').press('ArrowDown');
                await page.locator('body').press('ArrowDown');
                await page.locator('body').press('ArrowUp');
                await page.locator('body').press('ArrowUp');
                await page.locator('body').press('ArrowUp');
                await page.locator('body').press('ArrowUp');
                await page.locator('body').press('ArrowUp');
                await page.getByRole('textbox', { name: 'Pilih Tanggal' }).click();
                await page.getByLabel('April 16,').click();
                await page.getByLabel('April 17,').click();
                // await page.getByRole('textbox', { name: 'Pilih Tanggal' }).fill('16/04/2025 - 17/04/2025');
                await page.getByRole('textbox', { name: 'Pilih Tanggal' }).click();
                await page.getByLabel('April 16,').click();
                await page.getByLabel('April 16,').click();
                // await page.getByRole('textbox', { name: 'Pilih Tanggal' }).fill('16/04/2025');
                await page.getByRole('textbox', { name: 'Pilih Tanggal' }).click();
                await page.getByLabel('April 14,').dblclick();
                // await page.getByRole('textbox', { name: 'Pilih Tanggal' }).fill('14/04/2025');
                await page.getByRole('textbox', { name: 'Pilih Tanggal' }).click();
                await page.getByLabel('April 16,').click();
                await page.getByLabel('April 15,').click();
                // await page.getByRole('textbox', { name: 'Pilih Tanggal' }).fill('15/04/2025 - 16/04/2025');
                await page.getByRole('textbox', { name: 'Pilih Tanggal' }).dblclick();
                await page.getByLabel('April 15,').click();
                await page.getByLabel('April 14,').click();
                // await page.getByRole('textbox', { name: 'Pilih Tanggal' }).fill('14/04/2025 - 15/04/2025');
            })
            // kurang sedikit
            
       })
       
    })
})

