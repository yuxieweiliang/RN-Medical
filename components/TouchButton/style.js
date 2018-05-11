import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import config from '../../src/config'
const { color, component } = config
console.log(config)
export default {
  btnStyle: {
    width: '100%',
    padding: 15,
    backgroundColor: color.APP.THEME,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fontStyle: {
    // ...title.font,
    color: '#fff'
  },
};
