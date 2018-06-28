import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const debug = false
const borer = debug? {
  borderColor: 'red',
  borderWidth: 1,
} : {}

export default StyleSheet.create({
  /**
   * 健康日报样式
   */
  dailyBody: {
    width,
  },
  list: {
    width,
    height: 150,
    backgroundColor: '#fafafa',
    paddingLeft: 15,
    paddingBottom: 15,
    ...borer
  },
  list_row: {
    flexDirection:  'row',
  },
  list_column: {
    flexDirection:  'column',
  },
  avatar: {
    flex: 1,
    height: '100%',
  },
  listTextBox: {
    // paddingBottom: 15,
    ...borer
    // borderColor: 'red',
    // borderWidth: 1
  },
  listTextBox_row: {
    paddingLeft: 10,
    paddingRight: 10,
    width:  '66.666%',
  },
  listTextBox_column: {
    width: '100%',
    paddingBottom: 15,
  },
  listTextTitle: {
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    ...borer
  },
  listText: {
    width: '100%',
    fontSize: 16,
    ...borer
  },

});


















