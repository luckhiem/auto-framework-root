const Login = require('./login/Login.po');
const AdminSettings = require('./admin_settings/AdminSettings.po');
const PeopleAdd = require('./admin_settings/PeopleAdd.po');


const PageFactory = function () {
    return {
        Login: Login,
        AdminSettings: AdminSettings,
        PeopleAdd: PeopleAdd
    }
};
module.exports = PageFactory();
