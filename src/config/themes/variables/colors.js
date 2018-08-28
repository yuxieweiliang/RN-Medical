// @flow
import {Platform} from 'react-native'

// 不能使用rgb，必须rgba
const colors = {
  // color
  black: '#111', // 黑色文字
  white: '#fafafa', // 白色文字
  gray: '#333', // 浅黑色文字

}

const colorsIos = {}

const colorsAndroid = {}

export default Object.assign(colors, (Platform.OS == 'ios' ? colorsIos : colorsAndroid))
