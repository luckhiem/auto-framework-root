const Auth = require('./auth/Auth.po');
const AdminSettings = require('./admin_settings/AdminSettings.po');
const PeopleAdd = require('./admin_settings/PeopleAdd.po');


const PageFactory = function () {
    return {
        Auth: Auth,
        AdminSettings: AdminSettings,
        PeopleAdd: PeopleAdd
    }
};
module.exports = PageFactory();
