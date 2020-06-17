const CONFIG = require('./config.json');
/**
 * Environment constants
 */
const constant = function () {
    return {
        PATH: {
            BASE_URL: `https://${CONFIG.domain}/`,
            LOGIN_URL: `https://${CONFIG.domain}/signin`,
            INDEX_URL: `https://${CONFIG.domain}/engage#insights/overview`,
        }
    };
};

module.exports = constant();