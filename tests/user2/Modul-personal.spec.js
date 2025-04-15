import { test, expect } from "@playwright/test";
import { describe } from "node:test";

test.describe('Pengaturan akun', () => {
    test("Ubah Profil (TC-01)", async ({ page }) => {
      await page.goto('http://sim.dev.asvri.ai/');
      // await expect(page).toHaveURL('https://auth.dev.siap.id/sign-in');
      await page.getByRole('textbox').click();
      await page.getByRole('textbox').fill('user2');
      await page.getByRole('button', { name: 'Sign in' }).click()
      await expect(page).toHaveURL('https://auth.dev.siap.id/sign-in/password');
      await page.getByRole('textbox').click();
      await page.getByRole('textbox').fill('wq2JVDOh');
      await page.getByRole('button', { name: 'Continue' }).click()
      await expect(page).toHaveURL('https://sim.dev.asvri.ai/');
  
      await page.getByRole('dialog').getByText('PKL JAGR').click();
      await page.getByRole('toolbar').getByText('Andi Agung').click();
      await page.getByRole('menuitem', { name: 'Pengaturan Akun' }).click();
  
      await page.getByRole('textbox', { name: 'Nama Lengkap' }).click();
      await page.getByRole('textbox', { name: 'Nama Lengkap' }).fill('PKL J');
      await page.getByRole('textbox', { name: 'Nama Lengkap' }).press('CapsLock');
      await page.getByRole('textbox', { name: 'Nama Lengkap' }).fill('PKL JAGR TEST UBAH');
      await page.getByRole('textbox', { name: 'Username' }).click();
      await page.getByRole('textbox', { name: 'Username' }).fill('PKLJAGRUBAH');
      await page.getByRole('textbox', { name: 'Email' }).click();
      await page.getByRole('textbox', { name: 'Email' }).fill('pkljagrUBAH@asvri.ai');
      await page.getByRole('spinbutton', { name: 'Nomor Handphone' }).click();
      await page.getByRole('spinbutton', { name: 'Nomor Handphone' }).fill('08242872487111');
      await page.locator('div').filter({ hasText: /^Ubah ProfilUbah Password$/ }).first().click();
      await page.getByRole('button', { name: 'Simpan' }).click();
      await page.getByRole('button', { name: 'Close' }).click


      await expect(page.getByRole('toolbar')).toContainText('PKL JAGR TEST UBAH');

  });
  test("Ubah Password (TC-02)", async ({ page }) => {
    await page.goto('http://sim.dev.asvri.ai/');
    
    await page.getByRole('textbox').click();
    await page.getByRole('textbox').fill('user2');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page).toHaveURL('https://auth.dev.siap.id/sign-in/password');
    await page.getByRole('textbox').click();
    await page.getByRole('textbox').fill('wq2JVDOh'); // password lama
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(page).toHaveURL('https://sim.dev.asvri.ai/');
    
    await page.getByRole('dialog').getByText('PKL JAGR').click();
    await page.getByRole('toolbar').getByText('Andi Agung').click();
    await page.getByRole('menuitem', { name: 'Pengaturan Akun' }).click();
    await page.getByText('Ubah Password').click();
    
    await page.getByRole('textbox', { name: 'Kata Sandi Lama' }).click();
    await page.getByRole('textbox', { name: 'Kata Sandi Lama' }).fill('wq2JVDOh'); // password lama
    await page.getByRole('textbox', { name: 'Kata Sandi Baru', exact: true }).click();
    await page.getByRole('textbox', { name: 'Kata Sandi Baru', exact: true }).fill('ubahpassword'); // password baru
    await page.getByRole('textbox', { name: 'Konfirmasi Kata Sandi Baru' }).click();
    await page.getByRole('textbox', { name: 'Konfirmasi Kata Sandi Baru' }).fill('ubahpassword');
    await page.getByRole('button', { name: 'Simpan' }).click();
    await page.getByRole('button', { name: 'Close' }).click();
    // Logout
    await page.getByRole('toolbar').getByText('Andi Agung').click();
    await page.getByRole('menuitem', { name: 'Keluar' }).click();
    await expect(page).toHaveURL('https://auth.dev.siap.id/sign-in');

    // Login ulang pakai password baru
    await page.getByRole('textbox').click();
    await page.getByRole('textbox').fill('user2');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('textbox').click();
    await page.getByRole('textbox').fill('ubahpassword'); // password baru
    await page.getByRole('button', { name: 'Continue' }).click();

    // Ekspektasi: berhasil login ke dashboard
    await expect(page).toHaveURL('https://sim.dev.asvri.ai/');
    await expect(page.getByRole('toolbar')).toContainText('Andi Agung');
});

  
  })

test.describe('Pindah Organisasi', () => {
    test("Cari (TC-01)", async ({ page }) => {
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
        
        // Navigasi ke menu Pindah Organisasi
        await page.getByRole('dialog').getByText('PKL JAGR').click();
        await page.getByRole('toolbar').getByText('Andi Agung').click();
        await page.getByRole('menuitem', { name: 'Pindah Organisasi' }).click();
    
        // Pencarian Organisasi
        await page.getByRole('textbox', { name: 'Cari Organisasi' }).click();
        await page.getByRole('textbox', { name: 'Cari Organisasi' }).fill('tes');
        await page.getByRole('textbox', { name: 'Cari Organisasi' }).press('Enter');
        
        // Mengecek apakah muncul pesan "Terdapat 0 Organisasi Anda."
        await expect(page.getByText('Terdapat 0 Organisasi Anda.')).toBeVisible();
    });

    test("Pindah Organisasi(TC-02)", async ({ page }) => {
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
        
        // Navigasi ke menu Pindah Organisasi
        await page.getByRole('dialog').getByText('PKL JAGR').click();
        await page.getByRole('toolbar').getByText('Andi Agung').click();
        await page.getByRole('menuitem', { name: 'Pindah Organisasi' }).click();
    
        
        await page.getByRole('paragraph').filter({ hasText: 'PKL JAGR' }).click();
        await expect(page).toHaveURL('https://sim.dev.asvri.ai/orgs/c2117f0f11f4a6aed00c4705f');
    });
    
    
})

test.describe('Keluar', () => {
    test("keluar(TC-1)", async ({ page }) => {
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
        await page.getByRole('toolbar').getByText('Andi Agung').click();
        await page.getByRole('menuitem', { name: 'Keluar' }).click();
        await expect(page).toHaveURL('https://auth.dev.siap.id/sign-in');
    });
})

  
