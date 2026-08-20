import test from "@playwright/test";
test.use({storageState:'Data/storage.json'})
test('storageState',async({page})=>{
    await page.goto("https://leaftaps.com/crmsfa/control/main?externalLoginKey=EL156123537907 ")
   
   await page.waitForTimeout(8000)
    

})