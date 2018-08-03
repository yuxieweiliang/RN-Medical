import { StyleSheet, Dimensions } from 'react-native';
import config from '../../../src/config'
const { width, height } = Dimensions.get('window');
const { CARD } = config.color

const debug = false
const borer = debug? {
  borderColor: 'red',
  borderWidth: 1,
} : {}

const borderWidth = StyleSheet.hairlineWidth;
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
  },
  tabItemStyle: {
    width,
    height: 200,
  },

  healthDaily: {
    width,
    padding: 10,
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    // marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});


















