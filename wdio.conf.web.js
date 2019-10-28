exports.config = {
    runner: 'local',
    host: 'localhost',
    specs: [
        './src/testScripts/web/homepage_test.js',
    ],
    services: ['selenium-standalone'],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        'goog:chromeOptions': {
            // to run chrome headless the following flags are required
            // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
            args: ['--headless', '--disable-gpu'],
        }
    }],
    logLevel: 'trace',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        compilers: ['js:@babel/register'],
        timeout: 60000
    },
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],
    seleniumLogs: 'logs',
    seleniumInstallArgs: {
        drivers: {
            chrome: { version: '77.0.3865.40' },
        }
    },
    seleniumArgs: {
        drivers: {
            chrome: { version: '77.0.3865.40' },
        }
    },
}
