import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');


export default {
  container: {
    width,
  },
  header: {
    width,
    height: 50,
    flexDirection: 'row'
  },
  body: {
    width,
    height: 300,
    backgroundColor: '#fafafa'
  },
  items: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#aaa',
    borderBottomWidth: 1
  }
};
