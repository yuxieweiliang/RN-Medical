import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width,
    height: height - 80,
  },
  scroll: {
    width,
    height: '100%',
  },
  list: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fafafa',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10
  }
});
