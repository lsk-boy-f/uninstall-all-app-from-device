const {exec} = require('child_process');

const whiteList=[
    'org.lstec',
];

function uninstallAppsFromAllDevice(){
    exec("adb devices | sed '1d' | awk '{print $1}'", function(err, stdout, stderr){
        if(stdout){
            const deviceList = stdout.split('\n').map(device=> device.trim()).filter(device => device);
            console.log('====================================');
            console.log("Get device list: " );
            console.log(deviceList);
            console.log('====================================');
            for(device of deviceList){
                if(device){
                    uninstallAppsFromDevice (device);
                }
            }
        }
        if (stderr){
            console.log(stderr);
        }
})
}

function uninstallAppsFromDevice(deviceSerial){
    exec("adb -s " + deviceSerial + " shell pm list package -3| awk 'BEGIN{FS=\":\"} {print $2}'", function(err, stdout, stderr){
        if(stdout){
            // console.log(stdout)
            const appList = stdout.split('\n').map(app=> app.trim()).filter(app => app);
            console.log('====================================');
            console.log("Get app list from " + deviceSerial);
            console.log(appList)
            console.log('====================================');

            for (const app of appList) {
                if(!whiteList.includes(app)){
                    uninstallAppFromDevice(deviceSerial, app);
                }
            }
        }
        if (stderr){
            console.log('====================================');
            console.log("err");
            console.log(stderr);
            console.log('====================================');
        }
    })
}

function uninstallAppFromDevice(deviceSerial, app){
    exec("adb -s " + deviceSerial + " uninstall " + app, function(err, stdout, stderr){
        console.log("Trying to uninstall " + app + " from " + deviceSerial);
        if(stdout){
            console.log(stdout)
        }
        if (stderr){
            console.log(stderr);
        }
    })
}

uninstallAppsFromAllDevice();
