exports.MainPage = class MainPage{
    constructor(page){
        this.page = page;

        //Locators
        this.userBtn = page.locator("//button[contains(@class,'user-menu')]");
        this.logOutBtn = page.locator("//div[@class='v-list-item v-list-item--link v-theme--light v-list-item--density-compact v-list-item--one-line v-list-item--variant-text']");
    }

    //Actions
    async logOutAction(page){
        await page.userBtn.click();
        await page.logOutBtn.click();
    }
}