cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
        "file": "plugins/es6-promise-plugin/www/promise.js",
        "id": "es6-promise-plugin.Promise",
        "pluginId": "es6-promise-plugin",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
        "id": "cordova-plugin-x-socialsharing.SocialSharing",
        "pluginId": "cordova-plugin-x-socialsharing",
        "clobbers": [
            "window.plugins.socialsharing"
        ]
    },
    {
        "file": "plugins/cordova-plugin-admob-simple/www/AdMob.js",
        "id": "cordova-plugin-admob-simple.AdMob",
        "pluginId": "cordova-plugin-admob-simple",
        "clobbers": [
            "window.plugins.AdMob"
        ]
    },
    {
        "file": "plugins/cordova-connectivity-monitor/www/connectivity.js",
        "id": "cordova-connectivity-monitor.connectivity",
        "pluginId": "cordova-connectivity-monitor",
        "clobbers": [
            "window.connectivity"
        ]
    },
    {
        "file": "plugins/cordova-admob/www/admob.js",
        "id": "cordova-admob.AdMobAds",
        "pluginId": "cordova-admob",
        "clobbers": [
            "window.admob",
            "window.tappx"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-whitelist": "1.3.3",
    "es6-promise-plugin": "4.2.2",
    "cordova-plugin-x-socialsharing": "5.4.1",
    "cordova-admob-sdklibs": "2.1.6",
    "cordova-plugin-admob-simple": "3.3.4",
    "cordova-connectivity-monitor": "1.2.2",
    "cordova-admob": "4.1.16"
}
// BOTTOM OF METADATA
});