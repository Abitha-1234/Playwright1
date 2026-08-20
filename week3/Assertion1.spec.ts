import {test, expect } from "@playwright/test";
test("Learn Assortion",async({page})=>{
    await page.goto("https://leafground.com/input.xhtml")
    console.log(await page.title());
    console.log(page.url());
    //validate an enable text box
    const disabledFiled = page.getByPlaceholder('Disabled')
    await expect(disabledFiled).toBeDisabled();
    const inputFiled = page.getByPlaceholder('Babu Manickam')
    await expect(inputFiled).toBeEditable();
    await inputFiled.fill("Abitha")
    const inputFilled1 = page.getByPlaceholder('Your email and tab')
    await expect.soft(inputFilled1).toBeDisabled();
    await page.getByPlaceholder('Babu Manickam').fill("Playwright Learing");
    

    

}





























)