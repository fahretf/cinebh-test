import dotenv from 'dotenv';
dotenv.config();

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
        await this.signInTriggerBtn.click();
    }

    async enterCredentials(email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
    }

    async enterDefaultCredentials() {
        await this.enterCredentials(process.env.EMAIL, process.env.PASSWORD);
    }

    async submitLogin() {
        await this.submitBtn.click();
    }

    async isLoggedIn() {
        return this.profileBtn.waitForDisplayed({ timeout: 1000 });
    }
}

export default new SignIn();
