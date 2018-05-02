import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  wrapper: {
    // backgroundColor: '#63d0b4'
  },
  container: {
    width,
    height: height - 80,
  },
  scroll: {
    width,
    height: '100%',
  },

});
