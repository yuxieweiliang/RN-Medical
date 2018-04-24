import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width,
    height,
  },

  btn: {
    borderRadius: 10,
    shadowColor:'green',
    shadowOffset:{h:10,w:10},
    shadowRadius:3,
    shadowOpacity:0.8,
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

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
    fontSize: 16,
  },
  exposureScroll: {
    flexDirection: 'row',
    height: 150,
    width
  },
  exposureBody: {
    flexDirection: 'row',
    height: 150,
  },
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
    width: '66.666%',
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

});


















