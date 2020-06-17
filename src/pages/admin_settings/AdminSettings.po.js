const ElementHandler = require('../../common/ElementHandler');

const ICON_SETTINGS = '.icon-people-setting';

class AdminSettings {
    openPage() {
        ElementHandler.click(ICON_SETTINGS);
        browser.pause(5000)
        return this;
    }

    /**
    * @param {string} itemName    engage item name
    */
    accessToEngageItem(itemName) {
        browser.pause(5000)
        const ITEM_NAME_LOCATOR = `//div[text()='${itemName}']`;
        ElementHandler.click(ITEM_NAME_LOCATOR);
        return this;
    }
}

module.exports = new AdminSettings();
