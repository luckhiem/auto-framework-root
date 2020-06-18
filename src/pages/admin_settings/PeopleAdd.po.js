const AdminSettings = require('../admin_settings/AdminSettings.po')
const ElementHandler = require('../../common/ElementHandler');

const FIRST_NAME_TXB = 'input[field=firstName]';
const LAST_NAME_TXB = 'input[field=lastName]'
const EMAIL_TXB = 'input[field=email]';
const ADD_PEOPLE_BTN = '.cucumber-send-invite-button';
const PAGE_INDEX = '#content-container';
const MANAGER_DDL = '.new-custom-select';
const SEARCH_MANAGER_TXB = 'input[placeholder="Search..."]';
const MANAGER_ITEM = '.select-email-item';
const ADD_MORE_BTN = '.js-cucumber-add-more';


class PeopleAdd {
    acccessToAddPeoplePage() {
        AdminSettings.openPage();
        ElementHandler.click("a[href='/invite']");
        ElementHandler.waitForElementDisplayed(PAGE_INDEX);
        return this;
    }

    /**
    * @param {string} firstName
    * @param {string} lastName
    */
    _inputPeopleName(index, firstName, lastName) {
        ElementHandler.addValue(`tr:nth-child(${index}) ` + FIRST_NAME_TXB, firstName);
        ElementHandler.addValue(`tr:nth-child(${index}) ` + LAST_NAME_TXB, lastName);
        return this;
    }

    /**
     * @param {string} email
     */
    _inputPeopleEmail(index, email) {
        ElementHandler.addValue(`tr:nth-child(${index}) ` + EMAIL_TXB, email);
        return this;
    }

    /**
     * @param {string} manager
     */
    _selectManager(index, manager) {
        ElementHandler.click(`tr:nth-child(${index}) ` + MANAGER_DDL)
        ElementHandler.addValue(SEARCH_MANAGER_TXB, manager)
        ElementHandler.click(MANAGER_ITEM)
        return this;
    }


    saveAddPeople() {
        ElementHandler.click(ADD_PEOPLE_BTN);
        return this;
    }

    /**
     * @param {User} user
     */
    addNewPeople(user) {
        for (let i = 0; i < user.length; i++) {
            const index = i + 1;
            if (index % 4 === 0) {
                ElementHandler.click(ADD_MORE_BTN);
            }
            this._inputPeopleName(index, user[i].firstName, user[i].lastName);
            this._inputPeopleEmail(index, user[i].email);
            this._selectManager(index, user[i].manager)
        }
        this.saveAddPeople()
        return this
    }
}

module.exports = new PeopleAdd();
