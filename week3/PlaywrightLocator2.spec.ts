//Assignment: 3 Create a new Account
import  { test,expect } from "@playwright/test";
expect
test("PlaywrightLocator",async({page})=>{
    await page.goto("https://login.salesforce.com/ ")

    //Enter username using getByLabel
    await page.getByLabel("username").fill("dilipkumar.rajendran@testleaf.com");
    await page.getByRole("button",{name:"Log In"}).click()

    //Enter password using getByLabel
    await page.getByLabel("password").fill("TestLeaf@2025");
    await page.getByRole("button",{name:"Log In"}).click()
    await page.waitForLoadState("domcontentloaded")

    //Verify the title and url of the page using appropriate assertions
    await expect(page).toHaveTitle("Home | Salesforce");
    await expect(page).toHaveURL("https://testleaf.lightning.force.com/lightning/page/home");

    //Click App Launcher using the class locator
    await page.locator('//button[@title="App Launcher"]').click()

    //Click View All using getByText 
    await page.locator('//button[@class="slds-button"]').nth(1).click()

    //Enter 'Service' in the App Launcher Search box using getByPlaceholder
   await page.locator('//input[@placeholder="Search apps or items..."]').click()
    //Click Service using index based XPath
     await page.locator('//p[text()="Service"]').click()

    //  Click Accounts using attribute based CSS selector 
    await page.locator('//span[text()="Accounts"]').nth(0).click()

    // Click New using getByRole
    await page.locator('//div[@title="New"]').click()
    //Enter Account name using attribute based CSS selector
    await page.locator('//input[@name="Name"]').fill("Abitha")
    //Click Save button using XPath 
    await page.locator('//button[@name="SaveEdit"]').click()
    
    



    
    
})