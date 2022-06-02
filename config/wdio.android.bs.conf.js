require('dotenv').config()
const { config } = require('./wdio.shared.conf');


//
// =====
// BrowserStack Credentials
// =====
config.user = process.env.BROWSERSTACK_USER
config.key = process.env.BROWSERSTACK_KEY

config.specs = [
    './test/android/specs/login/loginTest*.js'
];

config.capabilities = [
    {
        platformName: "Android", //plataforma
        "appium:platformVersion" : "9.0",
        "appium:deviceName": "Google Pixel 3", //deviceName
        "appium:automationName": "UIAutomator2", //automation Name
        "appium:app": "bs://9b5bde2e784b031eea9e570cfffebc376571ac69", 
        "appium:app:autoGrantPermissions": true //adrdress of apk
    }
]

    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    config.services = ['browserstack'];

exports.config = config;