import { StyleSheet, Dimensions } from 'react-native';
import config from '../../config'
const { width, height } = Dimensions.get('window');
const { color, component } = config

export default StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: color.CARD.BACKGROUND_COLOR,
  },

  header: {
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: color.CARD.BACKGROUND_COLOR,
    flexDirection: 'row',
  },

  headerLeft: {
    flex: 1,
    justifyContent: 'center',
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


















