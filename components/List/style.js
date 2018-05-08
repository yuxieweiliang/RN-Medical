import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  /**
   * 健康日报样式
   */
  dailyBody: {
    width,
  },
  list: {
    width: width,
    height: 150,
    backgroundColor: '#fafafa',
    paddingLeft: 15,
    paddingBottom: 15,
    borderColor: 'red',
    borderWidth: 1
  },
  list_row: {
    flexDirection:  'row'
  },
  list_column: {
    flexDirection:  'column'
  },
  avatar: {
    flex: 1,
    height: '100%'
  },
  listTextBox: {
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    // borderColor: 'red',
    // borderWidth: 1
  },
  listTextBox_row: {
    width:  '66.666%',
  },
  listTextBox_column: {
    width: '100%',
  },
  listTextTitle: {
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
  },
  listText: {
    width: '100%',
    fontSize: 16,
    lineHeight: 30
  },

});


















