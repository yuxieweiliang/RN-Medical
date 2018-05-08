import { StyleSheet, Dimensions } from 'react-native';
import { title, color, CARD } from '../../../src/config'
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width,
    height: height - 120,
    backgroundColor: '#ccc'
  },
  tabCardText: {
    ...title.font,
    lineHeight: 40,
    paddingBottom: 15,
    height: '100%'
  },
  tabItemStyle: {
    width,
    height: 200,
    padding: 15
  },
  /**
   * 晒健康样式
   */
  exposureHeader: {
    height: 50,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fafafa',
    flexDirection: 'row',
  },

  exposureHeaderLeft: {
    flex: 1,
    justifyContent: 'center',
  },

  exposureHeaderRight: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  exposureHeaderFont: {
    width: width / 3,
    fontSize: 16
  },
  exposureBody: {
    flexDirection: 'row',
    height: 180,
  },
  /**
   * 健康日报样式
   */
  dailyBody: {
    width,
  },
  exposureCard: {
    width: width / 3,
    height: 170,
    backgroundColor: '#fafafa',
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 15,
  },
  exposureCardText: {
    height: 50,
    lineHeight: 20,
    width: '100%',
    fontSize: 16,
    paddingBottom: 10,
  },
  dailyCard: {
    flexDirection: 'row',
    width: width,
    height: 150,
    backgroundColor: '#fafafa',
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 15,
  },
  dailyCardTextCenter: {
    height: 50,
    width: '66.666%',
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  dailyCardTextTitleBox: {
    width: '100%',
    paddingBottom: 10,
  },
  dailyCardTextTitle: {
    width: '100%',
    fontSize: 22,
    fontWeight: 'bold',
  },
  dailyCardTextBox: {
    width: '100%',
  },
  dailyCardText: {
    width: '100%',
    fontSize: 16,
  },

  avatar: {
    flex: 1,
  },
});


















