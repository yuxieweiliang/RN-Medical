import { StyleSheet, Dimensions } from 'react-native';
import config from '../../config'
const { width, height } = Dimensions.get('window');
const { color, component } = config

export default StyleSheet.create({
  container: {
    width,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  searchInput: {
    fontSize: 12,
    width: width - 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
    borderRadius: 8
  },

});


















