import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import config from '../../src/config'
const { color, component } = config


export default {
  btnStyle: {
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: color.APP.THEME,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnContent: {
    flexDirection: 'row',
    width: '100%',
    // borderColor: 'red',
    // borderWidth: 1
  },
  fontStyle: {
    // ...title.font,
    color: '#fff'
  },
};
