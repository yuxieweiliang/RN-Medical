import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  spirit: {
    width: 40,
    height: 40,
    position: 'absolute',
    right: 20,
    top: 100,
    backgroundColor: 'rgba(0, 155, 155, .2)',
    borderRadius: 20,
    zIndex: 100
  },
});


















