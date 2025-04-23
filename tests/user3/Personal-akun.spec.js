// @ts-check
import { test, expect } from "@playwright/test";

test.describe("Pengaturan akun", () => {
  test("Ubah Profil (TC-01)", async ({ page }) => {
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
    await page.getByRole("toolbar").getByRole("img").nth(1).click();
    await page.getByRole("menuitem", { name: "Pengaturan Akun" }).click();
    await expect(
      page.getByRole("dialog", { name: "Pengaturan Akun" })
    ).toBeVisible();
    await page.getByRole("spinbutton", { name: "Nomor Handphone" }).click();
    await page
      .getByRole("spinbutton", { name: "Nomor Handphone" })
      .fill("082317316123");
    await page.getByLabel("Jenis Kelamin").selectOption("L");
    await page.getByRole("button", { name: "Simpan" }).click();
    await expect(
      page
        .locator("div")
        .filter({ hasText: "Peringatanbody UpdateBody:" })
        .nth(3)
    ).toBeVisible();
  });

  test("Ubah Password (TC-02)", async ({ page }) => {
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
    await page.getByRole("toolbar").getByRole("img").nth(1).click();
    await page.getByRole("menuitem", { name: "Pengaturan Akun" }).click();
    await expect(
      page.getByRole("dialog", { name: "Pengaturan Akun" })
    ).toBeVisible();
    await page
      .locator("div")
      .filter({ hasText: /^Ubah Password$/ })
      .click();
    await page.getByRole("textbox", { name: "Kata Sandi Lama" }).click();
    await page
      .getByRole("textbox", { name: "Kata Sandi Lama" })
      .fill("AWkBAQtX");
    await page
      .getByRole("textbox", { name: "Kata Sandi Baru", exact: true })
      .click();
    await page
      .getByRole("textbox", { name: "Kata Sandi Baru", exact: true })
      .fill("testsandibaru");
    await page
      .getByRole("textbox", { name: "Konfirmasi Kata Sandi Baru" })
      .click();
    await page
      .getByRole("textbox", { name: "Konfirmasi Kata Sandi Baru" })
      .fill("testsandibaru");
    await page.getByRole("button", { name: "Simpan" }).click();
  });
});

test.describe("Pindah Organisasi", () => {
  test("Cari Organisasi (TC-03)", async ({ page }) => {
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
    await page.getByRole("toolbar").getByRole("img").nth(1).click();
    await page.getByRole("menuitem", { name: "Pindah Organisasi" }).click();
    await expect(
      page.getByRole("dialog").filter({ hasText: "Daftar Organisasi Anda" })
    ).toBeVisible();
    await page.getByRole("textbox", { name: "Cari Organisasi" }).click();
    await page.getByRole("textbox", { name: "Cari Organisasi" }).fill("123");
    await expect(page.getByText("Terdapat 0 Organisasi Anda.")).toBeVisible();
  });
  test("Organisasi (TC-04)", async ({ page }) => {
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
    await page.getByRole("toolbar").getByRole("img").nth(1).click();
    await page.getByRole("menuitem", { name: "Pindah Organisasi" }).click();
    await expect(
      page.getByRole("dialog").filter({ hasText: "Daftar Organisasi Anda" })
    ).toBeVisible();
    await page.locator(".space-y-5 > .grid > .bg-white").click();
    await expect(
      page.getByLabel("Sidebar").getByText("PKL JAGR")
    ).toBeVisible();
  });
});

test("Keluar (TC-05)", async ({ page }) => {
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
  await page.getByRole("toolbar").getByRole("img").nth(1).click();
  await page.getByRole("menuitem", { name: "Keluar" }).click();
  await expect(page).toHaveURL("https://auth.dev.siap.id/sign-in");
});


// 
//                                     ....
//                                   .:1t11i;:,
//                                  :11tfffLCLf;
//                                 ;fttffffLLfft.
// ;.                              ,tt1t11ii11i1,
// 11;;i;:,.....                   .ii1111111ttfi
// i1ttfLLLLLffftt1:,..    ..:;::,,,:i1111tt11tft:..
// .,:;i1tttffffffLCCCfttt1tf1:,,,,...:;ii1tiii1t:.,,,.
//     .,:;i111ttfLLLLffffft1,...... ..::iii;;;ii...,,::,
//         .,,::;;iii;;;i;;i:....  .....:;:,,........,,,:,.
//                 ...,,,,,,..............      ......,i1i:
//                         ............ .    ........,i11i;
//                           ...... ..,,,,....... ..:i1ii;;
//                            .......,,,:,...... .;i11ii;i;
//                             .......,,,...    .i1111111i:
//                 ..           ...            .it111111i;.
//                 it1;,.        ,.            ,tt11iiii;,
//                 .;tffft1i;:,,,,..           ;ttt1ii;:,
//                   .:ifLLLLLLL1,..      ..,:;1fLft1;,.
//                      ,;tfLLLLft1i;::;ii1tfLLLfft1;,
//                        .itfLLfLftt11111111111ii;;,
//                          .:;;;;::,,,,,,,,,,,,,,,.
// 
//                                           .,,,:::,,.
//                                         ,it1:::::::::.
//                                       .:i11;;::,,,,,,:,
//                                 ..,,:::::::,,,,....,,,:.
//                                 ,,:;;:::::,,,.........,.
//                                    ..:::,,,,,:::,.....,.
//                                     ,i;;;;;i1tt1:::;;,,
//                                     :;;;1tffftt;:11ii:,,,....
//                                   ..,;;;i111111;;1t1i:..,,,,,,,,..
//                               .,,::,,i1i;iiiiii;;;;iii,.....,,,,:::,.
//                             .,,,,,,.:t11i;;;;::::;ii1i..........,,,,:,.
//                           .,,,......,;i;:,,,,,::;;;i;..............,,,,,.
//                         .,,,,...      .    .,,::;;:,...................,,,
//              .         .,,,,...              .,,,........................,.
//          .;iit1:,     ,:,,,,...                .  .... .....................
//         .1LGCGCft;,,;i;,,,,....             ....   .   .........    ..  ......
//        .1LLCLGLfLffffLLt;,...     ..          ....      ....             ..  ..
//        ifffttLftt1tt1ttff1:.  ....  ..       ,:;:,..    ..                   ...
//        :i11iiiii;;11ttft1i;:..       ..      .::,.::.                          .
//        .,:::::::;;i1t11fi:,.          ..
//             .,,,,::;;;1f:              ...........  .. ..........  ..   ........
//                       .
// 
//                                .,:ii111;
//                              .:11ttttfff;
//                            .:1t11tffLCCCLi
//                            ;fftttttfLLCCCL;
//                            ;tttt1ttttt11t11,
//                            :1111111iii11tfti
//                            :1ii11111tff111ff:
//                           .:;;i111111ii1111fi
//                     ...,,,,..,;;;;;;ii1;:;;1i,..
//                  .,::,,....  .:i;::;111;;i1ti,,,,.
//               ..:::,,.....    .,:::iiii;;;ii:...,,
//             ..,::,,.......      ..,,,,...........,.
//             ..i1i;,.......             ..........,:
//            .,i1111:.......            ...........:;
//            .i1iiiii:.....           ........... ,i:
//            ,tii;;;;;,          ..,,,::,,.......,i1i
//           .11i;;;;;;:.        ..,,,:,,,,,.... .;;i1,
//          .i1iii;;;;;;,       ....,::,...... ..:;;i1:
//          :11iiiiiiii;:       .........      .:;;iii;
//          ;1iiiiiiii;:.      ........... ..  .::;;i11,
//          .,,,,,,,,,,.. ..   ......................,,.
// 
// 
// 
// 
//            .;;i1;.
//            ;t111t;                     ..,:;,
//            :i111ti                     ,::i,.......       .....
//         ....,:ii;:.                    .,,:.    .........,:::::,.
//       ,i1i;::::,,,,                      ......      ...,,,,,.,,,.
//      :i11iiiiiiii;i.                           ..    .,,,,...  .,,
//     ,1iii,..,,::::;.                            .     ,:,,,,....,.
//    ,1111:     .. .i:                            ..    ::,.,,,,..,..
//    1tti:        .;t1.                           ..    :,,....  ...,,
//   .i1tt1:.      :CG0;                           ..    ...        ..,
//     ,ii1t1;.    ,L@G;                 .,,,,..    .    .   .....   ..
//      :::;itf1:,,;fC:                  :;ii11i;;;:;:,:::::::........
//      .;:::itt1:,:;i,                  ,;i11111iiiiii11ttttti,......
//      ,;:::,;;;,.,,:i,                  ,,::;::::::::;;;;;;;;:.  ...
//      ,::,,....  ...,.                          .,,,,..,,,,.      ..
//                                                   .:.           ..
//                                                   .:.   ...,,,,,,.
//                                                   .,.....,,,:,,,,
//                              ,,,.
//                           .:;iii;;,
//                         .:ii;ii11t1;,
//                        ,iiiii11ttttt1;.
//                       .i111ii11111ii1;:
//                       .;iiiii111iii111i:
//                        ,i;;;iii111tt1ii1:
//                        .;;iiiii1111111iii.
//                        .:,:;;;;;ii111i,:i,          ..,,:,
//                       ..:,,:::::;i111i;;i,     :i111111i:,
//                    .,:,,...,;;;::;ii1ii;i.   .iffttt111i
//                   ,:,........,:::;;;:::..  .,i111ti;;;;:
//                 .,,...,,,,,..........,. .,;ttii;:::;i;,
//                .,..,:;iii1i;:...    .,:;1tfft1;;::::,.
//               .,..,;ii111111i,....,:i1ttffft1;,.
//               ,...,;;ii111iii,,:i1tffffttt1;,.
//              .:...:;;ii1tt1111tffffffft11;:.
//              ,,...:;iii1ttttttffffttt1i;:.
//             .:,...:;iii1ttttfffttt11i;:,,
//             ,:....:;;ii11ttttt11iii;:,..,
//            .:,....,,:;iii111ii;;;::,...,.
//            ,:......,.,:;;;i;;:,,.......,
