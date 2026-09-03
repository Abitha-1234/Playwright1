import {test, expect } from "@playwright/test";
test("fileupload",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")
    const upload = page.locator('//input[@type="file"]').nth(0)
    await upload.setInputFiles('testdata/Playwright Locators.pdf')
    await page.waitForTimeout(3000);
    await page.locator('//input[@id="file-submit"]').click()
    


})
test("filedownload",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/download")
        const filedown=page.waitForEvent('download')
        page.locator('//a[text()="hello.txt"]').click()
        const filedown1 = await filedown;
        await filedown1.saveAs('data/$(filedownload.suggestedFilename()')
        expect(filedown1.suggestedFilename()).toBe('hello.txt')
    console.log("Successfully verified and document download")
    
    
    })

//create event listner and upload the file in redsquare area
test.only("fileuploadfile",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")
    const fileupload1=page.waitForEvent('filechooser')
    await page.locator('//div[@id="drag-drop-upload"]').click()
    const fup= await fileupload1
    await fup.setFiles("testdata/Playwright Locators.pdf")
    const file =await page.locator('//span["Playwright Locators.pdf"]').first()
    await expect(file).toHaveText("Playwright Locators.pdf")
    await page.waitForTimeout(20000)




})