import { StyleSheet, Platform, Dimensions, PixelRatio } from "react-native";

// APP 主题颜色
import Colors from './colors'

// APP 主题字体设置
import Fonts from './fonts'

// 设备宽高
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

// 边框宽度
const borderWidth = StyleSheet.hairlineWidth;

// 设备
const OS = Platform.OS;

export default{
  OS,
  deviceHeight,
  deviceWidth,
  width: deviceWidth,
  height: OS === "ios" ? deviceHeight : deviceHeight - 20,
  borderWidth,
  Colors,
  Fonts,
}
