import test from "@playwright/test";
test ('Learn Dropdown',async ({page}) => {
    await page.goto('https://leafground.com/select.xhtml')
    await page.waitForTimeout(3000)
    await page.locator('[class="ui-selectonemenu"]').selectOption({label:'Playwright'})
    await page.waitForTimeout(3000)

    const dropdown=page.locator('[class="ui-selectonemenu"]>Option')
    const dropdownvalue=await dropdown.count()
    console.log("the count of the drowndownis:",dropdownvalue);
    for(let i=0;i<dropdownvalue;i++){
        console.log(await dropdown.nth(i).innerText());
        
    }
    

    
})