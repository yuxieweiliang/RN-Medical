import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');


export default {
  container: {
    width,
    height: 800,
  },
  header: {
    width,
    height: 40,
    flexDirection: 'row'
  },
  body: {
    width,
    height: 200
  },
  items: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#aaa',
    borderBottomWidth: 1
  }
};
