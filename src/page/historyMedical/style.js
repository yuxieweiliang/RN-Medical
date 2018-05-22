import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: '#eee'
  },
  list: {
    width,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fafafa',
  },


  listHeader: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center'
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
    minHeight: 100,
    paddingTop: 10,
  },
  listBodyRow: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  listBodyLabel: {
    width: 100,
  },
  listBodyContent: {
    flex: 1,
  },
  listFooter: {
    height: 20,
    flexDirection: 'row'
  },
});
