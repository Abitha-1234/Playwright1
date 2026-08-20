import test from "@playwright/test";
test('storage',async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.getByLabel('Username',{exact:true}).fill('democsr2')
    await page.getByLabel('Password').fill('crmsfa')
    await page.getByRole('button',{name:"Login"}).click()
    await page.locator('text=CRM/SFA').click();
    await page.waitForTimeout(20000);
    await page.context().storageState({path:"Data/storage.json"})



})