import {test, expect} from '@playwright/test'
const {AuthorizationPage} = require("../pages/authorization.page");
const {MainPage} = require("../pages/main.page");
import { validUserData, invalidUserData } from '../fixtures/fixture';

test.describe('Authorization tests', () => {

    let page;
    test.beforeEach(async ({browser}) => {
        page = await browser.newPage();
        await page.goto("https://dev.omni-dispatch.com");
    });

    test('Authorization with correct data', async () => {
        const authorizationPage = new AuthorizationPage(page);

        await authorizationPage.authorization(validUserData.username, validUserData.password);

        await expect(page).toHaveTitle('Chats – TMS');
    });

    test('Authorization with incorrect data', async () => {
        const authorizationPage = new AuthorizationPage(page);

        await authorizationPage.authorization(invalidUserData.username, invalidUserData.password);
        await expect(authorizationPage.errorText).toBeVisible();
    });
})