const CONSTANT = require('../../config.js');
const ElementHandler = require('../../common/ElementHandler.js');
const BrowserHandler = require('../../common/BrowserHandler.js');

const USERNAME_TXB = '#session_email';
const PASSWORD_TXB = '#session_password';
const LOGIN_BTN = "//button[text()='Sign In']";

class LoginPage {
    open() {
        BrowserHandler.navigate(CONSTANT.PATH.LOGIN_URL);
        ElementHandler.verifyURL(CONSTANT.PATH.LOGIN_URL)
        return this;
    }

    /**
     *
     * @param {User} user
     */
    doLogin(user) {
        ElementHandler.addValue(USERNAME_TXB, user.username)
        ElementHandler.addValue(PASSWORD_TXB, user.password)
        ElementHandler.click(LOGIN_BTN)
        ElementHandler.verifyURL(CONSTANT.PATH.INDEX_URL)
        return this;
    }
}

module.exports = new LoginPage();
