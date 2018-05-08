import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { color, title } from '../../src/config'


export default {
  btnStyle: {
    width: '100%',
    padding: 15,
    backgroundColor: color.button,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fontStyle: {
    ...title.font,
    color: '#fff'
  },
};
