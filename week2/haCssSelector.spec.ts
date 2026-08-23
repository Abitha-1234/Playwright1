import test from "@playwright/test";
test('CssSelector',async({page})=>{
    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.waitForTimeout(3000);
     //id value -Enter username
     await page.locator('[id="username"]').fill('democsr2');
     //id value -Enter Password
     await page.locator('[id="password"]').fill( 'crmsfa');
     //By value -click on login button
     await page.locator('[value="Login"]').click();
     //By Attribute - Click on CRM/SFA
     await page.locator('text=CRM/SFA').click();
     //Child Combinator - click on Leads
     //await page.locator('div>a').nth(2).click();
     //descendant combinator - Click Create lead
     await page.locator('a:has-text("Create Lead")').click();
     await page.locator('[name="companyName"]').fill('Testleaf');
     await page.locator('[name="firstName"]').nth(2).fill('Abitha');
     await page.locator('[name="lastName"]').nth(2).fill('Sriram');
    await page.locator('[name="personalTitle"]').fill("MS");
    await page.locator('[name="generalProfTitle"]').fill("PlayWright");
    await page.locator('[name="annualRevenue"]').fill("960000");
    await page.locator('[name="departmentName"]').fill("Accounts");
    const dropdown=page.locator('select[name="currencyUomId"]');
    const value=await dropdown.count();
    for(let i=0;i< value;i++){
        console.log(await dropdown.nth(i).innerText());

    }


 await page.locator('[name="primaryPhoneNumber"]').nth(3).fill("8015773538");
     await page.locator('[name="submitButton"]').click();



    

     




})