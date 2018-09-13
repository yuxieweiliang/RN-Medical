import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const borderWidth = StyleSheet.hairlineWidth;
export default StyleSheet.create({
  container: {
    width,
    height: height - 80,
  },
  touchButton: {
    width: width - 30,
    height: 40,
    backgroundColor: '#ccc',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 15
  },
  scroll: {
    width,
    height: '100%',
  },
  list: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fafafa',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10
  }
});
