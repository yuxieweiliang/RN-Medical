import { StyleSheet, Dimensions } from 'react-native';
import config from '../../../src/config'
const { width, height } = Dimensions.get('window');
const { CARD } = config.color

const debug = false
const borer = debug? {
  borderColor: 'red',
  borderWidth: 1,
} : {}

export default StyleSheet.create({
  container: {
    width,
    height: height - 120,
    backgroundColor: '#ccc'
  },
  tabCardText: {
    fontSize: CARD.CONTENT_FONT_SIZE,
    color: CARD.CONTENT_FONT_COLOR,
    lineHeight: 30,
    height: '100%'
  },
  tabItemStyle: {
    width,
    height: 200,
    padding: 15
  },

});


















