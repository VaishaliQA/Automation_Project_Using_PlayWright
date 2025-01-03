const {test, expect} =require ('@playwright/test');
const exp = require('constants');

test("Handle Dropdown and Radio Button",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const documentLink = page.locator("[href*='documents-request']")
    const userName= page.locator('#userEmail')
   const userPassword = page.locator('#userPassword')
    await page.locator('select.form-control').selectOption('Consultant');
    await page.locator('.radiotextsty').last().click();
    await page.locator('#okayBtn').click()
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    await page.locator("#terms").click();
    await expect(page.locator("#terms").last()).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    await expect(documentLink).toHaveAttribute("class","blinkingText")


    // asserion 
    //await page.pause();


})



test('Code Gen Script', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('thanks');
  await page.getByText('thanksgiving', { exact: true }).click();
  await page.getByText('Thu, Nov 28,').click();
  await page.getByRole('button', { name: 'What day is Thanksgiving Day' }).click();
  await page.getByRole('button', { name: 'What day is Thanksgiving Day' }).click();
});