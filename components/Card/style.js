import { StyleSheet, Dimensions } from 'react-native';
import { title, color, CARD } from '../../src/config'
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: CARD.BACKGROUND_COLOR,
  },

  header: {
    height: 50,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: CARD.BACKGROUND_COLOR,
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
  headerFont: title.h1,
  scroll: {
    flexDirection: 'row',
    height: 150,
    width
  },
  body: {
    flexDirection: 'row',
    height: 150,
  },
});


















