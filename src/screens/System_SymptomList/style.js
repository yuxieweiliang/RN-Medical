import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width,
    height,
    flexDirection: 'row'
  },
  leftContent: {
    width: 80,
    backgroundColor: '#ddd'
  },
  rightContent: {
    flex: 1,
  },
  userCard: {
    width,
    height: 300,
    backgroundColor: '#a0ceff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  list: {
    width,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  listLeft: {

  },
  listRight: {
    paddingRight: 15,

  },
  label: {
    fontSize: 14,
  },
  text: {
    fontSize: 14,
    flex: 1,
  },
  goto: {
    fontSize: 18,
  },


});
