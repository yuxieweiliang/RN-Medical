import { StyleSheet, Dimensions } from 'react-native';
import config from '../../config'
const { width, height } = Dimensions.get('window');
const { CARD } = config.color

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


















