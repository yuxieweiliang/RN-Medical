import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: '100%',
    width: width - 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent',
    backgroundColor: '#fafafa',
    borderWidth: 1,
    paddingRight: 20
  },

  search: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
  searchItemEmpty: {
    height: 100,
    width,
    justifyContent: 'center',
    alignItems: 'center'
  }

});


















