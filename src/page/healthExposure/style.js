import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width,
    height: height - 80,
    backgroundColor: '#eee',
  },
  animated: {
    // borderWidth: 1,
    // borderColor: 'red',
    overflow: 'hidden',
    position: 'relative'
  },
  scroll: {
    width,
    height: '100%',
  },
  list: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    backgroundColor: '#fafafa',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  username: {
    paddingLeft: 10,
  },
  listBody: {

  },
  listBodyText: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
  },
  listBodyImage: {
    width: '100%',
    paddingLeft: 40,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  listBodyImageItem: {
    width: (width - 66) / 3,
    height: (width - 66) / 3,
    marginRight: 2,
    marginBottom: 2,
  },
  listFooter: {
    flexDirection: 'row',
    paddingLeft: 50,
    height: 40,
    alignItems: 'center'
  },
  listFooterLeft: {},
  listFooterRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
  },

  inputField: {
    height: 50,
    width,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fafafa',
  },
  textInput: {
    width: '100%',
  }
});
