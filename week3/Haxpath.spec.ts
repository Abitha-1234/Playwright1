import test from "@playwright/test";
test('Learn x-path',async({page})=>{
    //login
    await page.goto('https://login.salesforce.com/?locale=in')
    await page.locator('//input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('//input[@name="Login"]').click();
    await page.locator('//input[@id="password"]').fill('TestLeaf@2025');
    await page.locator('//input[@id="Login"]').click();
    //Click on toggle menu button from the left corner 
    await page.locator('//button[@title="App Launcher"]').click();

    // Click view All and click Sales from App Launcher 
    await page.locator('//button[@class="slds-button"]').click();
    await page.locator('//p[text()="Sales"]').click();

    //Click on Leads tab  
    await page.locator('//span[text()="Leads"]').nth(0).click();

    //Click on New button 
    await page.locator('//div[@title="New"]').click();

    //Select Salutation dropdown
    await page.locator('//button[@name="salutation"]').click();

    await page.locator('//span[text()="Mr."]').click();

    //Enter the Last Name
    await page.locator('//input[@name="lastName"]').fill("Sriram");


    // Enter the Company Name  
    await page.locator('//input[@name="Company"]').fill("TestLeaf");

    // Click Save and Verify Leads name created 
    await page.locator('//button[@name="SaveEdit"]').click();








})