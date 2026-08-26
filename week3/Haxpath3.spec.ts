//Assignment: 4 Edit Individuals //
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
   await page.locator('//span[text()="Individuals"]').nth(0).click();

   // Search the Individuals last name 
   await page.locator('//input[@name="Individual-search-input"]').fill("Sriram");
await page.locator('//input[@name="Individual-search-input"]').press("Enter");
// Click on the Dropdown icon and Select Edit 

   await page.locator('//span[text()="Show Actions"]').nth(1).click();
   await page.locator('//div[@title="Edit"]').click()
   //Select Salutation as 'Mr' 

   await page.locator('//span[text()="--None--"]').nth(0).click();
   await page.locator('//a[@title="Mr."]').click();

   //Now enter the first name 
   await page.locator('//input[@placeholder="First Name"]').fill("Abitha");

   // Click on Save and Verify the first name 
   await page.locator('//span[text()="Save"]').click(); 



})