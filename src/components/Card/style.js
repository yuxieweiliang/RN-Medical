import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: '#fafafa',
  },

  header: {
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fafafa',
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


















