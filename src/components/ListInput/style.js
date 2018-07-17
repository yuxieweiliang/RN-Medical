import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const debug = false
const borer = debug ? {
  borderColor: 'red',
  borderWidth: 1,
} : {}

export default StyleSheet.create({
  /**
   * 健康日报样式
   */
  container: {
    width,
    flexDirection:  'row',
    alignItems:'center',
    backgroundColor: '#fafafa',
    paddingLeft: 15,
    ...borer
  },
  list: {
    flex: 1,
  },
  listTitle: {
    fontSize: 14,
    ...borer
  },
  listInput: {
    width: '100%',
    fontSize: 14,
    ...borer
  },
  request: {
    fontSize: 16,
    ...borer
  },

});


















