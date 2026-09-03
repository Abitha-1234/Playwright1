import test from "@playwright/test";
test("HADataParameterization",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.getByRole('textbox',{name:'Username',exact:true}).fill("democsr2")
    await page.getByRole('textbox',{name:'Password',exact:true}).fill("crmsfa")
    await page.getByRole('button',{name:'Login',exact:true}).click()
    await page.getByRole('link',{name:"CRM/SFA"}).click()
    await page.locator('//a[text()="Leads"]').click()
    await page.locator('//a[text()="Create Lead"]').click()
    await page.locator('//input[@name="companyName"]').nth(1).fill("TestLeaf")
    await page.locator('//input[@id="createLeadForm_firstName"]').fill("Dhruv")
    await page.locator('//input[@id="createLeadForm_lastName"]').fill("sriram")
    const Sourcedropdown= page.locator('//select[@id="createLeadForm_dataSourceId"]')
    await Sourcedropdown.selectOption({ label: "Direct Mail" })
    const Marketingdropdown=page.locator('//select[@name="marketingCampaignId"]')
    await Marketingdropdown.selectOption({value:"DEMO_MKTG_CAMP"})
    const option=Marketingdropdown.locator('option')
    const count= await option.count();
    console.log("Total option:",count);
    for(let i=0; i< count;i++){
        console.log(await option.nth(i).getAttribute('value'))
    }
    const Industrydropdown= page.locator('//select[@name="industryEnumId"]')
    await Industrydropdown.selectOption({index:6})
    const Currencydropdown= page.locator('//select[@name="currencyUomId"]')
    await Currencydropdown.selectOption({label:"INR - Indian Rupee"})
    const Countrydropdown=page.locator('//select[@name="generalCountryGeoId"]')
    await Countrydropdown.selectOption({label:"India"})
    const Statedropdown=page.locator('//select[@name="generalStateProvinceGeoId"]')
    await Statedropdown.selectOption({label:"TAMILNADU"})
    const option1 =Statedropdown.locator('option')
    const count1=await option1.count()
    console.log("Total States:",count1)
    for(let i=0;i<count;i++){
        console.log(await option1.nth(i).getAttribute('value'));
    }
    await page.locator('//input[@value="Create Lead"]').click()





})
