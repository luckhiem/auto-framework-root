exports.config = {
    runner: 'local',
    host: 'localhost',
    port: 4444,
    specs: [
        './src/testScripts/mobile/calculator1_test.js',
        './src/testScripts/mobile/calculator2_test.js',
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        deviceName: "iPhone 7",
        automationName: "XCUITest",
        bundleId: "com.apple.calculator",
        platformName: "iOS",
        platformVersion: "12.2",
        udid: "47d64c6046a5b56ed2f9b7fa5a9607a6d944968d",
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
}
