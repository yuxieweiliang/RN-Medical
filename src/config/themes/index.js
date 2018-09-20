import {StyleSheet, Dimensions, Platform} from 'react-native'

import Colors from './variables/Colors'
import Fonts from './variables/Fonts'
import components from './components'

const {width, height} = Dimensions.get('window')

const OS = Platform.OS;
const borderWidth = StyleSheet.hairlineWidth;

export default {
  OS,
  height,
  width,
  borderWidth,

  Colors,
  Fonts,
  components,
}
