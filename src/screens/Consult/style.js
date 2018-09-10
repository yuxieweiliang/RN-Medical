import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width,
    height,
  },
  consultBtnBox: {
    flexDirection: 'row',
    width,
    padding: 10
  }
});
