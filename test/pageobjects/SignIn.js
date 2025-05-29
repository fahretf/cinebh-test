class SignIn {
    get signInTriggerBtn() {
        return $('nav button'); 
    }

    get inputEmail() {
        return $('input[name="email"]');
    }

    get inputPassword() {
        return $('input[name="password"]');
    }

    get submitBtn() {
        return $('form button[type="submit"]');
    }

    get profileBtn() {
        return $('nav img'); 
    }

    async clickSignInTrigger() {
        await this.signInTriggerBtn.waitForDisplayed({ timeout: 5000 });
        await this.signInTriggerBtn.click();
    }

    async enterCredentials(email, password) {
        await this.inputEmail.waitForDisplayed({ timeout: 5000 });
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
    }

    async submitLogin() {
        await this.submitBtn.waitForDisplayed({ timeout: 5000 });
        await this.submitBtn.click();
    }

    async isLoggedIn() {
        return this.profileBtn.waitForDisplayed({ timeout: 10000 });
    }
}

export default new SignIn();
