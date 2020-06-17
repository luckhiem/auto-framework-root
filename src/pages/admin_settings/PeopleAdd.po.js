const AdminSettings = require('../admin_settings/AdminSettings.po')
const ElementHandler = require('../../common/ElementHandler');

class PeopleAdd {
    acccessToAddPeoplePage() {
        AdminSettings.openPage();
        ElementHandler.click("a[href='/invite']")
        return this;
    }
}

module.exports = new PeopleAdd();
