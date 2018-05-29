import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width,
    height: height - 140,
  },
  registration: {

  },
  list: {
    width,
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  cardList: {
    width,
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  label: {
    paddingRight: 15,
  },
  labelFont: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    paddingRight: 15,
    alignItems: 'center',
    justifyContent: 'center',

  },
  messageContent: {
    flex: 1,
    paddingRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentFont: {
    fontSize: 18,
    width: '100%',
    flex: 1
  },
  goto: {
    fontSize: 18,
  },
  icon: {
    width: 30,
    height: 30
  }
});









