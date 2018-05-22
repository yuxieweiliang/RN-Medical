import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width,
    height,
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
