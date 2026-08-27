//Assignment: 2 Edit a Lead //
import test from "@playwright/test";
test("PlaywrightLocator",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.getByRole("textbox",{name:"Username"}).fill("Demosalesmanager")
    await page.getByRole("textbox",{name:"Password"}).fill("crmsfa")
    await page.getByRole("button",{name:"Login"}).click()
     await page.getByRole("link",{name:"CRM/SFA"}).click()
     await page.getByRole("link",{name:"Leads"}).click()
     //await page.locator('//input[@name="firstName"]').nth(0).fill("Abitha");
     await page.locator('//input[@name="firstName"]').nth(0).press("Enter");
     await page.getByRole("link",{name:"Find Leads"}).click()
     await page.getByRole("link",{name:"10011"}).click()
     await page.getByRole("link",{name:"Edit"}).click()
     await page.locator('//input[@name="companyName"]').nth(1).fill("ddd company");
     await page.locator('//input[@name="annualRevenue"]').fill("100000");
     await page.locator('//input[@name="departmentName"]').fill("development");
     await page.locator('//textarea[@name="description"]').fill("Good Morning");
     await page.locator('//input[@name="submitButton"]').nth(0).click()
    
})