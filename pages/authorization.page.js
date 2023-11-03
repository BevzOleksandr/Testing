exports.AuthorizationPage = class AuthorizationPage {
    constructor(page){
        this.page = page;

        //Locators
        this.loginField = page.locator("//input[@id='input-0']");
        this.passwordField = page.locator("//input[@id='input-2']");
        this.logInBtn = page.locator("//span[@class='v-btn__overlay']");
        this.errorText = page.locator("//div[@class='v-messages__message']");
    }

    //Actions
    async authorization(login, password){
        await this.loginField.fill(login);
        await this.passwordField.fill(password);
        await this.logInBtn.click();
    }
}