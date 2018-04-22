夜神调试：
adb connect 127.0.0.1:62001

显示当前链接 移动设备
adb devices

在 android/app/src/main 目录下创建一个 assets空文件夹
mkdir android/app/src/main/assets

在项目根目录运行
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/



// 打包
cd android && ./gradlew assembleRelease

# 修改app名称
android/app/src/main/res/values/strings.xml
# 修改app图标
android/app/src/main/AndroidManifest.xml
