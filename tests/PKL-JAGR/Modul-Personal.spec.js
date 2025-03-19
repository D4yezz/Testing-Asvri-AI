import { test, expect } from "@playwright/test";

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
        await page.getByRole('toolbar').getByText('PKL JAGR').click();
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
  });

  test("Ubah Password (TC-02)", async ({ page }) => {
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

    await page.getByRole('toolbar').getByText('PKL JAGR').click();
    await page.getByRole('menuitem', { name: 'Pengaturan Akun' }).click();
    await page.getByText('Ubah Password').click();
    await page.getByRole('textbox', { name: 'Kata Sandi Lama' }).click();
    await page.getByRole('textbox', { name: 'Kata Sandi Lama' }).fill('IFcXRPCK');
    await page.getByRole('textbox', { name: 'Kata Sandi Baru', exact: true }).click();
    await page.getByRole('textbox', { name: 'Kata Sandi Baru', exact: true }).fill('ubahpassword');
    await page.getByRole('textbox', { name: 'Konfirmasi Kata Sandi Baru' }).click();
    await page.getByRole('textbox', { name: 'Konfirmasi Kata Sandi Baru' }).fill('ubahpassword');
    await page.getByRole('button', { name: 'Simpan' }).click();
    await page.getByRole('textbox', { name: 'Kata Sandi Baru', exact: true }).click();
    await page.getByRole('textbox', { name: 'Kata Sandi Baru', exact: true }).fill('asidauidbiasbda');
    await page.getByRole('button', { name: 'Simpan' }).click();
});