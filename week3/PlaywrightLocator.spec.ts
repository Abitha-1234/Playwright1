import test from "@playwright/test";
test('Playwright Locator',async({page})=>{
    await page.goto('http://leaftaps.com/opentaps/control/main');
     await page.waitForTimeout(3000);
     await page.getByRole("textbox",{name:"Username"}).fill('democsr2')
     await page.getByLabel("Password").fill('crmsfa')
     await page.getByRole("button",{name:"Login"}).click()
     await page.getByRole("link",{name:"CRM/SFA"}).click()
     await page.getByRole("link",{name:"Leads"}).click()

})