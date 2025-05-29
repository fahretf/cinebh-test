import SignInPage from '../../pageobjects/SignIn.js';

describe('Sign In Test', () => {
    it('should sign in successfully', async () => {
        await browser.url('/');

        await SignInPage.clickSignInTrigger();
        await SignInPage.enterCredentials('esma.alicic2002@gmail.com', '`5^SHw0z1z\'');
        await SignInPage.submitLogin();

        const loggedIn = await SignInPage.isLoggedIn();
        expect(loggedIn).toBe(true);
    });
});
