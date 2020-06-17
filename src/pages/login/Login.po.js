const CONSTANT = require('../../contains.js');
const ElementHandler = require('../../common/ElementHandler.js');
const BrowserHandler = require('../../common/BrowserHandler.js');

const USERNAME_TXB = '#session_email';
const PASSWORD_TXB = '#session_password';
const LOGIN_BTN = "//button[text()='Sign In']";
const INDEX_PAGE_TITLE = "TINYpulse | Engage"

class LoginPage {
    open() {
        BrowserHandler.maximizeWindow();
        BrowserHandler.navigate(CONSTANT.PATH.LOGIN_URL);
        ElementHandler.verifyURL(CONSTANT.PATH.LOGIN_URL)
        return this;
    }

    verifyPageAfterLogin() {
        ElementHandler.verifyURL(CONSTANT.PATH.INDEX_URL)
        ElementHandler.verifyTitle(INDEX_PAGE_TITLE)
    }

    /**
     *
     * @param {User} user
     */
    doLogin(user) {
        ElementHandler.addValue(USERNAME_TXB, user.username)
        ElementHandler.addValue(PASSWORD_TXB, user.password)
        ElementHandler.click(LOGIN_BTN)
        this.verifyPageAfterLogin()
        return this;
    }
}

module.exports = new LoginPage();
