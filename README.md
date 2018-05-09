夜神调试:
adb connect 127.0.0.1:62001

显示当前链接 移动设备:
adb devices


#### 打包配置过程
· 在 android/app/src/main 目录下创建一个 assets空文件夹
mkdir android/app/src/main/assets

· 在项目根目录运行
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/



#### 打包
cd android && ./gradlew assembleRelease

#### 修改app名称
android/app/src/main/res/values/strings.xml

#### 修改app图标
android/app/src/main/AndroidManifest.xml



>### 获取token:

`api:` http://auth.kecoretest.com:81/connect/token

`type:` post

`data:` client_id，client_secret，username，scope，password，grant_type

`参数含义:`

· client_id: // # 这个是做什么的
· client_secret: // # 这个是做什么的
· username: // # 登陆方式|医院ID|用户名 -> 比如：（loginname| mobilephone | email | mobilephonepsw）| 0 | admin
· scope: // # 这个是做什么的
· password: // # 这个是做什么的
· grant_type: // # 这个是做什么的

`实例:`

    {
        client_id: APPClient,
        client_secret: 4FA42C86ED02A2EB905E94F25D359C05,
        username: loginname|0|admin,
        scope: offline_access,
        password: admin888,
        grant_type: password,
    }

`返回值:`

    {
        "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9......",
        "expires_in": 1296000,
        "token_type": "Bearer",
        "refresh_token": "4ee848f59a905e87a3cc416e8d606ae82055036412a95642c0ecf3416717c9ee"
    }








