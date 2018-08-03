import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: '100%',
    height,
    backgroundColor: '#eee'
  },
  list: {
    width,
    paddingBottom: 10,
    backgroundColor: '#fafafa',
  },


  userAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  username: {
    paddingLeft: 10,
  },

  listBody: {
    padding: 10,
  },
  listFooter: {
    height: 20,
    paddingLeft: 10,
    paddingRight: 10,

    flexDirection: 'row'
  },
  listFooterLeft: {
    flex: 1,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  listFooterRight: {
    flex: 1,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
});
