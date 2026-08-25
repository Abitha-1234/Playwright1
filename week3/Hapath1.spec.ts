//Assignment: 2 Edit Lead
import test from "@playwright/test";
test('Learn x-path',async({page})=>{
    // Launch the browser 
    await page.goto('http://leaftaps.com/opentaps/control/main ');

    // Enter the username 
    await page.locator('//input[@id="username"]').fill("Demosalesmanager");
    //Enter the password 
    await page.locator('//input[@id="password"]').fill("crmsfa");
    // Click Login 
    await page.locator('//input[@class="decorativeSubmit"]').click();
    //Click CRM/SFA link
    await page.locator('//a[contains(text(),"CRM/SFA")]').click();
    // Click Leads link 
    await page.locator('//a[text()="Leads"]').click();
    // Click on Create Lead 
    await page.locator('//a[text()="Create Lead"]').click();
    //Enter company name 
    await page.locator('//input[@name="companyName"]').nth(1).fill("TestLeaf");
    //Enter first name 
    await page.locator('//input[@name="firstName"]').nth(2).fill("Abitha");
    //Enter last name 
    await page.locator('//input[@name="lastName"]').nth(2).fill("Sriram");
    //Click on Create Lead button  
    await page.locator('//input[@name="submitButton"]').click();
    //Click Edit 
    await page.locator('//a[text()="Edit"]').click();

    //Change the company name 
    await page.locator('//input[@id="updateLeadForm_companyName"]').fill("CTS");

    //Click Update 
    await page.locator('//input[@class="smallSubmit"]').nth(0).click();








})