import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: '100%',
    width: width - 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingRight: 20
  },

  titleText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#ccc',
    // borderRadius: 8,
    textAlign: 'center'
  },

});


















