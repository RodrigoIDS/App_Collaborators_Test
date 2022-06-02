const path = require('path')
const { config } = require('./wdio.shared.conf')

config.port = 4723

config.specs = [
    './test/android/specs/login/loginTest*.js'
]

config.capabilities = [
    {
        platformName: "Android", //plataforma
        "appium:platformVersion" : "11.0",
        "appium:deviceName": "Pixel 3", //deviceName
        "appium:automationName": "UIAutomator2", //automation Name
        "appium:app": path.join(process.cwd(), "./app/android/Collaborators_base.apk"), 
        "appium:app:autoGrantPermissions": true //adrdress of apk
    }
]

//
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    config.services['appium'];

exports.config = config