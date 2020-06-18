# auto-framework-root
This repository is used for executing automation test

## Version
1.0.0

## Setup
```
$ mkdir auto-test
$ cd auto-test
$ git clone https://github.com/luckhiem/auto-framework.git
$ cd auto-framework
$ npm install
```
## Run Test
* Run web automation test
    ```
    $ npm run test
    ```
## Report
After executing test, run comand to generate html report
```
$ npm run generate-reports
``` 
# Framework structure
The framework base on WebdriverIO & Mocha
```
├── allure-reports                   // folder contains report after generating from json to html format
├── results
├── resource                         // folder contains data for framework (json, excel, csv, png ...)        
├── src
│   ├── common                       // folder includes common funcions/ultilities that can used in all project
│   ├── config.json
│   ├── pageObjects
│   │   ├── mobile                   // folder contains page object for using automate web
│   │   └── web                      // folder contains page object for using automate mobile app
│   └── testScripts 
│       ├── mobile                   // folder includes test script for web automation
│       └── web                      // folder includes test script for mobile automation mobile app
├── wdio.conf.mobile.js              // config file to execute test in mobile
└── wdio.conf.web.js                 // config file to execute test in web
```
