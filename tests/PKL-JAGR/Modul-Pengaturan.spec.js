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
        await page.getByRole('textbox', { name: 'Email' }).fill('tambahdataPKL@asvri.ai');
        await page.getByRole('button', { name: 'Selanjutnya' }).click();
        await page.getByRole('textbox', { name: 'Nama Lengkap' }).fill('MOHAMMAD ALIP');
        await page.getByRole('textbox', { name: 'Username' }).fill('ALIP');
        await page.getByRole('spinbutton', { name: 'No Handphone / WA' }).click();
        await page.getByRole('spinbutton', { name: 'No Handphone / WA' }).fill('08312345678');
        await page.getByRole('textbox', { name: 'Password' }).fill('test123');
        await page.getByRole('button', { name: 'Simpan' }).click();
        await page.getByRole('toolbar').getByText('PKL JAGR').click();
        await page.getByRole('menuitem', { name: 'Keluar' }).click();
        
    });  
})

