git push -u origin master -f



列出当前模拟器列表:
netstat -ano |findstr 620

夜神调试:
adb connect 127.0.0.1:62001

显示当前链接 移动设备:
adb devices

显示当前连接的设备:
react-native run-android --deviceId YOUR_ID


# 启动和关闭 adb server
adb start-server
adb kill-server
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