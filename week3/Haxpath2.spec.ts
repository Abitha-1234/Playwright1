import test from "@playwright/test";
test('Learn x-path',async({page})=>{
    //Login
    await page.goto("https://login.salesforce.com ")
    await page.locator('//input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('//input[@id="Login"]').click();
    await page.locator('//input[@id="password"]').fill("TestLeaf@2025");
    await page.locator('//input[@id="Login"]').click();

    //Click on the toggle menu button from the left corner 
   await page.locator('//span[text()="App Launcher"]').click();

   //Click View All and click Individuals from App Launcher 

   await page.locator('//button[@class="slds-button"]').click();
   await page.locator('//p[text()="Individuals"]').click();

   //Click on the Dropdown icon in the Individuals tab
   await page.locator('//span[text()="Select a List View: Individuals"]').click();

    await page.locator('//div[@title="New"]').click();

    await page.locator('//input[@placeholder="Last Name"]').fill("Sriram");

    await page.locator('//span[text()="Save"]').click()
    




   


}) 