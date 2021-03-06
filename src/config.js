const ENV = require('./environment.json');
const User = require('./entity/User.js');
const Utils = require('./utils/Utils');
const Faker = require('faker');

const usersData = {
    firstName: Faker.name.firstName(),
    lastName: Faker.name.lastName(),
    manager: 'Alexa Admin'
}

const usersData1 = {
    firstName: Faker.name.firstName(),
    lastName: Faker.name.firstName(),
    manager: 'Alexa Admin'
}

const config = function () {
    return {
        PATH: {
            BASE_URL: `https://${ENV.domain}/`,
            LOGIN_URL: `https://${ENV.domain}/signin`,
            LOGOUT_URL: `https://${ENV.domain}/signout`,
            INDEX_URL: `https://${ENV.domain}/engage#insights/overview`,
        },
        user: {
            admin: new User({ email: ENV.adminstrator.username, password: ENV.adminstrator.password }),
            normalUser: Utils.generateUsers(5, usersData),
            normalUser1: Utils.generateUsers(2, usersData1),
        }
    };
};

module.exports = config();