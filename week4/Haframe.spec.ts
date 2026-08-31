import  { test,expect } from "@playwright/test";

test('Learn frames using playwright',async({page,context})=>{
    await page.goto("https://leafground.com/frame.xhtml")

    //first frame
 const firstframe= page.frameLocator('//iframe[@src="default.xhtml"]');
const firstbutton=  firstframe.locator('//button[@id="Click"]').nth(0);
await firstbutton.click();
 await expect(firstbutton).toHaveText('Hurray! You Clicked Me.');
 //count
const allframes=page.frames();
console.log("Total Frame:",allframes.length)
//nested frame
const outerframe = page.frameLocator('//iframe[@id="frame2"]');
const innerframe=outerframe.frameLocator('//iframe[@src="page.xhtml"]');
const nestedbutton=innerframe.locator('//button[@id="Click"]').last();
await nestedbutton.click()
await expect(nestedbutton).toHaveText('Hurray! You Clicked Me.');

})