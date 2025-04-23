import { test, expect } from "@playwright/test";

test.describe('Profil Organisasi)', () => {
    test("Ubah Profil (TC-01)", async ({ page }) => {
        await page.goto('http://sim.dev.asvri.ai/');
        // await expect(page).toHaveURL('https://auth.dev.siap.id/sign-in');
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('PKLJAGR');
        await page.getByRole('button', { name: 'Sign in' }).click()
        await expect(page).toHaveURL('https://auth.dev.siap.id/sign-in/password');
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('IFcXRPCK');
        await page.getByRole('button', { name: 'Continue' }).click()
        await expect(page).toHaveURL('https://sim.dev.asvri.ai/');
        
        await page.getByRole('dialog').getByText('PKL JAGR').click();
        await page.locator('a').filter({ hasText: 'Pengaturan' }).click();
        await page.locator('a').filter({ hasText: 'Profil Organisasi' }).click();
        await expect(page).toHaveURL('https://sim.dev.asvri.ai/orgs/c2117f0f11f4a6aed00c4705f/profil');
        //mencoba ssimpan ketika data tidak full
        await page.getByRole('button', { name: 'Simpan' }).click();
        await expect(page.locator('body')).toContainText('Nama Instansi Resmi wajib diisi.');

        //data di isi tapi tidak berfungsi
        await page.getByRole('textbox', { name: 'Nama Instansi Resmi' }).fill('test ubah');
        await page.getByRole('button', { name: 'Simpan' }).click();
       
        });  
})

test.describe('Pengguna', () => {
    test("Kelola Pengguna (TC-01)", async ({ page }) => {
        await page.goto('http://sim.dev.asvri.ai/');
        // await expect(page).toHaveURL('https://auth.dev.siap.id/sign-in');
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('PKLJAGR');
        await page.getByRole('button', { name: 'Sign in' }).click()
        await expect(page).toHaveURL('https://auth.dev.siap.id/sign-in/password');
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('IFcXRPCK');
        await page.getByRole('button', { name: 'Continue' }).click()
        await expect(page).toHaveURL('https://sim.dev.asvri.ai/');
        
        await page.getByRole('dialog').getByText('PKL JAGR').click();
        await page.locator('a').filter({ hasText: 'Pengaturan' }).click();
        await page.locator('a').filter({ hasText: 'Pengguna' }).click();await page.getByRole('button', { name: 'Tambah' }).click();
        await page.getByRole('textbox', { name: 'Email' }).fill('tambahdataPKL1@asvri.ai');
        await page.getByRole('button', { name: 'Selanjutnya' }).click();
        await page.getByRole('textbox', { name: 'Nama Lengkap' }).fill('TESTING TAMBAH1');
        await page.getByRole('textbox', { name: 'Username' }).fill('TestingTambah1');
        await page.getByRole('spinbutton', { name: 'No Handphone / WA' }).click();
        await page.getByRole('spinbutton', { name: 'No Handphone / WA' }).fill('08312345678');
        await page.getByRole('textbox', { name: 'Password' }).fill('test123');
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('toolbar').getByText('PKL JAGR').click();
        await page.getByRole('menuitem', { name: 'Keluar' }).click();
        await expect(page).toHaveURL('https://auth.dev.siap.id/sign-in');
        await page.getByRole('textbox').fill('TestingTambah1');
        await page.getByRole('button', { name: 'Sign in' }).click();
        await expect(page).toHaveURL('https://auth.dev.siap.id/sign-in/password');
        await page.getByRole('textbox').fill('test123');
        await page.getByRole('button', { name: 'Continue' }).click();
        await expect(page).toHaveURL('https://sim.dev.asvri.ai/');

    });  
    test("Cari Data (TC-02)", async ({ page }) => {
        await page.goto('http://sim.dev.asvri.ai/');
        
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('PKLJAGR');
        await page.getByRole('button', { name: 'Sign in' }).click();
        await expect(page).toHaveURL('https://auth.dev.siap.id/sign-in/password');
    
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('IFcXRPCK');
        await page.getByRole('button', { name: 'Continue' }).click();
        await expect(page).toHaveURL('https://sim.dev.asvri.ai/');

        await page.getByRole('dialog').getByText('PKL JAGR').click();

        await page.locator('a').filter({ hasText: 'Pengaturan' }).click(); 
        await page.locator('a').filter({ hasText: 'Pengguna' }).dblclick();
    
        // Cari 'Danang'
        await page.getByRole('textbox', { name: 'Cari Data' }).dblclick();
        await page.getByRole('textbox', { name: 'Cari Data' }).fill('Danang');
        await page.locator('.flex-none > .border').click();
    
        // Expect hasil pencarian "Danang" muncul di kolom pertama baris pertama
        await expect(page.locator('table tbody tr:first-child td:first-child')).toContainText('Danang');
    
        // Cari 'choirul'
        await page.getByRole('textbox', { name: 'Cari Data' }).click();
        await page.getByRole('textbox', { name: 'Cari Data' }).fill('choirul');
        await page.locator('.flex-none > .border').click();
    
        // Expect hasil pencarian "choirul" muncul di kolom pertama baris pertama
        await expect(page.locator('table tbody tr:first-child td:first-child')).toContainText('choirul');
    });

    test("Plotting Bot (TC-03)", async ({ page, context }) => {

        test.setTimeout(120000)
        await page.goto('http://sim.dev.asvri.ai/');
        
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('PKLJAGR');
        await page.getByRole('button', { name: 'Sign in' }).click();
        await expect(page).toHaveURL('https://auth.dev.siap.id/sign-in/password');
    
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('IFcXRPCK');
        await page.getByRole('button', { name: 'Continue' }).click();
        await expect(page).toHaveURL('https://sim.dev.asvri.ai/');
    
        await page.getByRole('dialog').getByText('PKL JAGR').click();
    
        await page.locator('a').filter({ hasText: 'Pengaturan' }).click(); 
        await page.locator('a').filter({ hasText: 'Pengguna' }).dblclick();
    
        await page.getByRole('row', { name: 'Ahmad Santoso user1 userpkl1@' }).getByRole('button').click();
        await page.getByRole('menuitem', { name: 'Plotting Bot' }).locator('a').click();
    
        await page.getByRole('row', { name: 'Testing RAG Pengguna Admin' }).getByRole('checkbox').check();
        await page.getByRole('row', { name: 'test saja SQL Agent Pengguna' }).getByRole('checkbox').check();
        await page.getByRole('row', { name: 'test saja diubah Ms GraphRAG' }).getByRole('checkbox').check();
        await page.getByRole('button', { name: 'Simpan' }).click();
    
        // ✅ Verifikasi jumlah bot yang terplotting = 4
        const checkedBotsAfterPlot = await page.locator('input[type="checkbox"]:checked').count();
        expect(checkedBotsAfterPlot).toBe(4);
    
        
        // logout untuk melihat bahwa bisa login atau tidak
        await page.locator('.mr-2').first().click();

        await page.getByRole('menuitem', { name: 'Keluar' }).click();
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('user1');
        await page.getByRole('button', { name: 'Sign in' }).click();
        await page.getByRole('textbox').fill('YRdZIrsq');
        await page.getByRole('button', { name: 'Continue' }).click();
        await page.getByText('PKL JAGR').click();
        await page.locator('.mr-2').first().click();
        await page.getByRole('menuitem', { name: 'Keluar' }).click();
        
        //kembali ke pkl jagr
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('PKLJAGR');
        await page.getByRole('button', { name: 'Sign in' }).click();
        await expect(page).toHaveURL('https://auth.dev.siap.id/sign-in/password');
    
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('IFcXRPCK');
        await page.getByRole('button', { name: 'Continue' }).click();
        await expect(page).toHaveURL('https://sim.dev.asvri.ai/');
    
        await page.getByRole('dialog').getByText('PKL JAGR').click();
    
        await page.locator('a').filter({ hasText: 'Pengaturan' }).click(); 
        await page.locator('a').filter({ hasText: 'Pengguna' }).dblclick();

        // ✅ Lanjutkan test di tab awal
        await page.getByRole('row', { name: 'Ahmad Santoso user1 userpkl1@' }).getByRole('button').click();
        await page.getByRole('menuitem', { name: 'Plotting Bot' }).locator('a').click();
        await page.getByRole('row', { name: 'test saja diubah Ms GraphRAG' }).getByRole('checkbox').uncheck();
        await page.getByRole('row', { name: 'test saja SQL Agent Pengguna' }).getByRole('checkbox').uncheck();
        // await page.getByRole('row', { name: 'Testing RAG Pengguna Admin' }).getByRole('checkbox').uncheck();
        // await page.getByRole('row', { name: 'Bot Umum PKL JAGR RAG' }).getByRole('checkbox').uncheck();
        await page.getByRole('button', { name: 'Simpan' }).click();
    
        const checkedBotsAfterUncheck = await page.locator('input[type="checkbox"]:checked').count();
        expect(checkedBotsAfterUncheck).toBe(2);

        await page.locator('.mr-2').first().click();

        await page.getByRole('menuitem', { name: 'Keluar' }).click();
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('user1');
        await page.getByRole('button', { name: 'Sign in' }).click();
        await page.getByRole('textbox').fill('YRdZIrsq');
        await page.getByRole('button', { name: 'Continue' }).click();
        await page.getByText('PKL JAGR').click();
        await page.locator('.mr-2').first().click();
        await page.getByRole('menuitem', { name: 'Keluar' }).click();
        
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('PKLJAGR');
        await page.getByRole('button', { name: 'Sign in' }).click();
        await expect(page).toHaveURL('https://auth.dev.siap.id/sign-in/password');
    
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('IFcXRPCK');
        await page.getByRole('button', { name: 'Continue' }).click();
        await expect(page).toHaveURL('https://sim.dev.asvri.ai/');
    
        await page.getByRole('dialog').getByText('PKL JAGR').click();
    
        await page.locator('a').filter({ hasText: 'Pengaturan' }).click(); 
        await page.locator('a').filter({ hasText: 'Pengguna' }).dblclick();

        await page.getByRole('row', { name: 'Ahmad Santoso user1 userpkl1@' }).getByRole('button').click();
        await page.getByRole('menuitem', { name: 'Plotting Bot' }).locator('a').dblclick();
    
        await page.getByRole('textbox', { name: 'Cari Bot' }).click();
        await page.getByRole('textbox', { name: 'Cari Bot' }).fill('bot');
        await page.getByRole('textbox', { name: 'Cari Bot' }).press('Enter');
        await page.getByRole('textbox', { name: 'Cari Bot' }).fill('test saja');
        await page.getByRole('textbox', { name: 'Cari Bot' }).press('Enter');
        await page.getByRole('textbox', { name: 'Cari Bot' }).fill('');
        await page.getByRole('button', { name: 'Simpan' }).click();
    });
    
    

    test("Hapus (TC-04)", async ({ page }) => {
        await page.goto('http://sim.dev.asvri.ai/');
        
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('PKLJAGR');
        await page.getByRole('button', { name: 'Sign in' }).click();
        await expect(page).toHaveURL('https://auth.dev.siap.id/sign-in/password');
    
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('IFcXRPCK');
        await page.getByRole('button', { name: 'Continue' }).click();
        await expect(page).toHaveURL('https://sim.dev.asvri.ai/');
        
        await page.getByRole('dialog').getByText('PKL JAGR').click();
    
        await page.locator('a').filter({ hasText: 'Pengaturan' }).click(); 
        await page.locator('a').filter({ hasText: 'Pengguna' }).dblclick();
    
        await page.getByRole('button', { name: 'Tambah' }).click();
        await page.getByRole('menuitem', { name: 'Menggunakan Email' }).locator('a').click();
        await page.getByRole('textbox', { name: 'Email' }).click();
        await page.getByRole('textbox', { name: 'Email' }).fill('tambahhapus@mail.com');
        await page.getByRole('button', { name: 'Selanjutnya' }).click();
        await page.getByRole('textbox', { name: 'Nama Lengkap' }).click();
        await page.getByRole('textbox', { name: 'Nama Lengkap' }).fill('tes tambah/hapus email');
        await page.getByRole('textbox', { name: 'Username' }).dblclick();
        await page.getByRole('textbox', { name: 'Username' }).fill('aeae');
        await page.getByRole('spinbutton', { name: 'No Handphone / WA' }).click();
        await page.getByRole('spinbutton', { name: 'No Handphone / WA' }).fill('123');
        await page.getByRole('textbox', { name: 'Password' }).dblclick();
        await page.getByRole('textbox', { name: 'Password' }).fill('test');
        await page.getByRole('button', { name: 'Simpan' }).dblclick();
        await page.getByRole('textbox', { name: 'Password' }).dblclick();
        await page.getByRole('textbox', { name: 'Password' }).press('ArrowRight');
        await page.getByRole('textbox', { name: 'Password' }).fill('test123');
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('row', { name: 'tes tambah/hapus email aeae' }).getByRole('button').click();
        await page.getByRole('menuitem', { name: 'Hapus' }).locator('a').dblclick();
        await page.getByRole('button', { name: 'Hapus' }).click();
    });
    
    
    
    
})

