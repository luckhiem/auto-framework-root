const ENV = require('./environment.json');
const User = require('./entity/User.js');
const Utils = require('./utils/Utils')

const usersData = {
    firstName: "mark",
    lastName: "levinson",
    manager: 'Khiem Luc'
}

const config = function () {
    return {
        PATH: {
            BASE_URL: `https://${ENV.domain}/`,
            LOGIN_URL: `https://${ENV.domain}/signin`,
            INDEX_URL: `https://${ENV.domain}/engage#insights/overview`,
        },
        user: {
            admin: new User({email: ENV.adminstrator.username, password: ENV.adminstrator.password}),
            normalUser: Utils.generateUsers(7, usersData)
        }
    };
};

module.exports = config();