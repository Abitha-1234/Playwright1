import  {test, expect } from "@playwright/test";
test("Learn AlertType",async({page})=>{
   // Load the URL
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")

    //Handle the alert
 page.on("dialog",async (alert)=>{

   //Get alert message
    const message=alert.message()
    console.log(message);
    
      //Get alert type
    const alertType=alert.type()
    console.log(alertType);

    //Accept the alert
     await alert.accept()

      })
     //Switch to iframe and click Try it
const frame = page.frameLocator('#iframeResult');

//Switch to iframe and click Try it
 await frame.locator('//button[(text()="Try it")]').click()

 //Verify the display;
 await expect(frame.locator('//p[@id="demo"]')).toHaveText("You pressed OK!")
   
})