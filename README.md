# uninstall-all-app-from-device
Remove **all apps** from **all your connected android device** except the white list.

## Useage

### 1. Get the script
```shell
git clone https://github.com/x13945/uninstall-all-app-from-device
```

### 2. Enter the script folder
```shell
cd uninstall-all-app-from-device
```
### 3. Configure white list(optinal)

You can add some app's pacakge name that will not uninstall into the config's white list attribute. Like below:

`config.json`
```
{
    "whiteList":[
        "org.lstec",
        "com.github"
    ]
}
```

### 4. Run the script.

Run the script from command line with nodejs
```shell
node ./uninstallAllApkFromDevice.js
```

Then, you will get some result like this:
```shell
➜  uninstall-all-app-from-device git:(master) ✗ node ./uninstallAllApkFromDevice.js
Get white list:
[ 'org.lstec' ]
====================================
Get device list:
[ 'emulator-5556', 'emulator-5554' ]
====================================
====================================
Get app list from emulator-5554
[ 'com.fengwu' ]
====================================
Trying to uninstall com.fengwu from emulator-5554
Success
```
