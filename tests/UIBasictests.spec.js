const {test, expect} =require ('@playwright/test');
const exp = require('constants');
const { request } = require('http');

test('First playwright test',async function(){
    expect("pass")

})

test('Browser Context Playwright test',async ({browser} ) =>{
    const context  = await browser.newContext();
    const page = await context.newPage()
    //Block Css File for execution faster
    page.route('**/*.css',route=>route.abort())
    //Block image file to load
     page.route('**/*.{jpg,png,jpeg}',route=>route.abort());
    let errorBlock = page.locator("[style*='block']")
    let signIn = page.locator('#signInBtn')
    let  userName = page.locator("[id='username']")
    const cardTiltes = page.locator(".card-body a")
    // get request log and response log, status code
    page.on('request',request=>console.log(request.url()));
    page.on('response',response=>console.log(response.url(),response.status()));
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    console.log(await page.title())
    // css, xpath used to find element on page
    await userName.fill('princi12@gmail.com')

    await page.locator('#password').fill('learning')
    await signIn.click()
    let errormsg =await errorBlock.textContent()
    await expect(errormsg).toContain('Incorrect')

    await userName.fill("")
    await userName.fill("rahulshettyacademy")
    await signIn.click()
    console.log(await cardTiltes.first().textContent());
    console.log(await cardTiltes.nth(1).textContent());
    const allTitles = await cardTiltes.allTextContents();
    console.log(allTitles)

})

test('Page playwright test',async ({page})=>{
    await page.goto("https://google.com")
    page.title()
    await expect(page).toHaveTitle('Google')
})

