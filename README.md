列出当前模拟器列表:
netstat -ano |findstr 620

夜神调试:
adb connect 127.0.0.1:62001

显示当前链接 移动设备:
adb devices

### 清除缓存
gradlew.bat clean

## 查看错误
react-native run-android installDebug failed

#### 打包配置过程
· 在 android/app/src/main 目录下创建一个 assets空文件夹
mkdir android/app/src/main/assets

· 在项目根目录运行
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/


cd android && gradlew assembleDebug --info

#### 打包
cd android && gradlew assembleRelease
gradlew.bat assembleRelease --console plain
#### 修改app名称
android/app/src/main/res/values/strings.xml

#### 修改app图标
android/app/src/main/AndroidManifest.xml

npm cache clean && npm install

cd android && gradlew clean
cd .. && react-native run-android
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
### 获取token:

__api:__  http://auth.kecoretest.com:81/connect/token

__type:__  post

__data:__  `client_id`，`client_secret`，`username`，`scope`，`password`，`grant_type`

__参数含义:__

+ client_id: // 这个是做什么的
+ client_secret: // 这个是做什么的
+ username: // 登陆方式|医院ID|用户名 -> 比如：（loginname| mobilephone | email | mobilephonepsw）| 0 | admin
  - loginname: 账号
  - mobilephone: 手机号码
  - email: 邮箱
  - mobilephonepsw: 手机号码和密码
+ scope: // 这个是做什么的
+ password: // 这个是做什么的
+ grant_type: // 这个是做什么的

__示例:__

    {
        client_id: APPClient,
        client_secret: 4FA42C86ED02A2EB905E94F25D359C05,
        username: loginname|0|admin,
        scope: offline_access,
        password: admin888,
        grant_type: password,
    }

__返回值:__

    {
        "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9......",
        "expires_in": 1296000,
        "token_type": "Bearer",
        "refresh_token": "4ee848f59a905e87a3cc416e8d606ae82055036412a95642c0ecf3416717c9ee"
    }

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
### 获取token:

__api:__  http://auth.kecoretest.com:81/connect/token

__type:__  post

__data:__  `client_id`，`client_secret`，`username`，`scope`，`password`，`grant_type`

__参数含义:__

* client_id: // 这个是做什么的
* client_secret: // 这个是做什么的
* username: // 登陆方式|医院ID|用户名 -> 比如：（loginname | mobilephone | email | mobilephonepsw）| 0 | admin
* scope: // 这个是做什么的
* password: // 这个是做什么的
* grant_type: // 这个是做什么的

__示例:__

    {
        client_id: APPClient,
        client_secret: 4FA42C86ED02A2EB905E94F25D359C05,
        username: loginname|0|admin,
        scope: offline_access,
        password: admin888,
        grant_type: password,
    }

__返回值:__

    {
        "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9......",
        "expires_in": 1296000,
        "token_type": "Bearer",
        "refresh_token": "4ee848f59a905e87a3cc416e8d606ae82055036412a95642c0ecf3416717c9ee"
    }

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


需要重新获取最新版本
JavaScript version: 0.54.2
Native version: 0.55.3


react-native-vector-icons
https://www.npmjs.com/package/react-native-vector-icons
图标模块

react-navigation

https://reactnavigation.org.cn
路由导航模块

react-native-parallax-view
https://github.com/lelandrichardson/react-native-parallax-view

下拉放大模块

react-native-swipeout
https://github.com/dancormier/react-native-swipeout

侧滑按钮模块

react-native-uploader

https://github.com/aroth/react-native-uploader
文件上传模块

react-native-blur

https://github.com/react-native-community/react-native-blur
毛玻璃模块

react-native-app-intro

https://github.com/FuYaoDe/react-native-app-intro
APP引导页模块

react-native-image-picker

https://github.com/marcshilling/react-native-image-picker

图片选择模块

react-native-storage

https://github.com/sunnylqm/react-native-storage
本地存储模块

rn-splash-screen
https://github.com/mehcode/rn-splash-screen
安卓 IOS 启动白屏解决模块

react-native-gifted-listview

https://github.com/FaridSafi/react-native-gifted-listview
下拉刷新上拉加载更多模块

react-native-swiper

https://github.com/leecade/react-native-swiper
轮播视图

react-native-sound

https://github.com/zmxv/react-native-sound
音频播放模块

react-native-message-bar

https://github.com/KBLNY/react-native-message-bar
提示消息模块


react-native-marquee-label

https://github.com/remobile/react-native-marquee-label

文本跑马灯效果模块

react-native-modalbox
https://github.com/maxs15/react-native-modalbox
模态视图模块
