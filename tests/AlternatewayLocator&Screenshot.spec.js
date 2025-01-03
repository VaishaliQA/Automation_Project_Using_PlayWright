const {test, expect} =require ('@playwright/test');
const exp = require('constants');


//test.describe.configure({mode:'serial'});
test.describe.configure({mode:'parallel'});

test("Playwright Special locators",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.screenshot({path:'screenshot.png'})
    await page.getByPlaceholder("Password").fill("abc123");
    await page.locator('#exampleInputPassword1').screenshot({path:'partialscreenshot.png'})
    await page.getByRole("button", {name: 'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await page.getByRole("link",{name : "Shop"}).click();
    
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
 
    //locator(css)
 

})

test('Take Visual Screenshot',async({page})=>{
    await page.goto('https://google.com')
    expect(await page.screenshot()).toMatchSnapshot('landing.png');
})