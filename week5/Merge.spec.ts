import {test, expect } from "@playwright/test";
test("Learn Window handling",async({page,context})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main ")
    await page.locator('//input[@id="username"]').fill("Demosalesmanager")
    await page.locator('//input[@id="password"]').fill("crmsfa")
    await page.locator('//input[@class="decorativeSubmit"]').click()
    await page.locator('//a[contains(text(),"CRM/SFA")]').click()
    await page.locator('//a[text()="Leads"]').click()
    await page.locator('//a[text()="Merge Leads"]').click()
   const NewPagePromise=context.waitForEvent('page')
    await page.locator('//img[@src="/images/fieldlookup.gif"]').nth(0).click()
    const NewPage=await NewPagePromise
    await NewPage.waitForLoadState();
   await NewPage.locator('//input[@name="id"]').fill("10050")
await NewPage.locator('//button[text()="Find Leads"]').click()
    await NewPage.locator('//a[@class="linktext"]').nth(0).click()
    const NewPagePromise1=context.waitForEvent('page')
    await page.locator('//img[@src="/images/fieldlookup.gif"]').nth(1).click()
    const NewPage1=await NewPagePromise1
    await NewPage1.waitForLoadState()
    await NewPage1.locator('//input[@name="id"]').fill("10051")
    await NewPage1.locator('//button[text()="Find Leads"]').click()
    await NewPage1.locator('//a[@class="linktext"]').first().click()
    
    page.on('dialog',async (alert)=>{
        const message=alert.message();
        console.log(message);
        const AlertType=alert.type();
        console.log(AlertType);
        await alert.accept();
    })
    await page.waitForTimeout(20000)
await page.locator('//a[text()="Merge"]').click()
await page.waitForTimeout(20000)
await expect(page).toHaveTitle("View Lead | opentaps CRM");


    


})