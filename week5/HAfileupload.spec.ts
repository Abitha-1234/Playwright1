
import  { test,expect } from "@playwright/test";
test("uploaded the file",async({page})=>{
    await page.goto("https://login.salesforce.com/ ")
   await page.locator('//input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('//input[@id="Login"]').click();
    await page.locator('//input[@id="password"]').fill("TestLeaf@2025");
    await page.locator('//input[@id="Login"]').click();
    await page.locator('//button[@title="App Launcher"]').click()
    await page.locator('//button[text()="View All"]').click()
    await page.locator('//input[@placeholder="Search apps or items..."]').fill("Accounts")
    await page.locator('//mark[text()="Accounts"]').click()
    await page.locator('//div[@title="New"]').nth(0).click()
    await page.locator('//input[@name="Name"]').fill("dlip1")
    const typedropdown=page.getByRole('combobox',{name:'Type',exact:true});
    await typedropdown.click();
    await page.locator('//span[@title="Prospect"]').click()
    const Industrydropdown=page.getByRole('combobox',{name:'Industry',exact:true})
    await Industrydropdown.click()
    await page.locator('//span[@title="Banking"]').click()
    await page.getByRole('button',{name:"Save",exact:true}).click()
    const accountName = page.locator("//span[@class = 'toastMessage slds-text-heading--small forceActionsText']//a");
    console.log(await accountName.innerText());
     await expect(accountName).toContainText('dlip')
    console.log("success the Account name is displayed");

   
   const upload=page.waitForEvent("filechooser")
    await page.locator('//a[@title="Upload Files"]').click()
    const upload1=await upload
    await upload1.setFiles("testdata/Playwright Locators.pdf")
    await page.locator('//span[text()="Done"]').click()
    await expect(page.getByText("1 file was added to the Account.")).toBeVisible
    await page.waitForTimeout(2000)
    /*await expect(upload1).toBe('Playwright Locators.pdf')
    await page.waitForTimeout(2000)*/
    




     



    

    


})