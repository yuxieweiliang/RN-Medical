// @flow
import { Platform } from 'react-native'

const _colors = {
  // color
  black: '#111', // 黑色文字
  white: '#fafafa', // 白色文字
  gray: '#333', // 浅黑色文字

}


// 不能使用rgb，必须rgba
const colors = {
  ..._colors,

  // Container
  ContainerBackgroundColor: '#eee',

}

const colorsIos = {}

const colorsAndroid = {}

export default Object.assign(colors, (Platform.OS === 'ios' ? colorsIos : colorsAndroid))
