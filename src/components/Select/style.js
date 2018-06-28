import { StyleSheet, Dimensions } from 'react-native';
import config from '../../config'
const { width, height } = Dimensions.get('window');
const { color, component } = config

export default StyleSheet.create({
  container: {
    width,
    height,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 10
  },

  selectBox: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 4
  },

  selectItem: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },

  headerRight: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  headerFont: {
    color: '#333',
    fontSize: 16
  },
  scroll: {
    flexDirection: 'row',
    width
  },
  body: {
    flexDirection: 'row',
    height: 150,
  },
});


















