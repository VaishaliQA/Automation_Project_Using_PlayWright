const {test, expect} =require ('@playwright/test');
const exp = require('constants');

test("Register new user and login",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/client/")
   /* await page.locator("[style*='cursor: pointer;']").click();
    await page.locator('#firstName').fill('princi')
    await page.locator('#lastName').fill('patel')
    await page.locator('#userEmail').fill('princi34@gmail.com')
    await page.locator('#userMobile').fill('3450985678')
    await page.locator('[formcontrolname="occupation"]').selectText('Student')
    await page.locator('[value*="Female"]').check();*/

    await page.locator('#userEmail').fill('princi34@gmail.com')
    await page.locator('#userPassword').fill('test12345')
    //await page.locator('#confirmPassword').fill('test12345')
    await page.locator('#login').click()
    // wait for elment to fully loaded after in network idel state
    //await page.waitForLoadState('networkidle')
    await page.locator('.card-body b').first().waitFor()
    const cardTitles = await page.locator('.card-body b').allTextContents();
    console.log("All Titles",cardTitles)




})