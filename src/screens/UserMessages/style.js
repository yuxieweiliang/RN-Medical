import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width,
    height,
  },
  userCard: {
    width,
    height: width / 2,
    backgroundColor: '#a0ceff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  list: {
    width,
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  label: {
    fontSize: 18,
  },
  text: {
    fontSize: 18,
    flex: 1,
  },
  goto: {
    fontSize: 18,
  },


});
