import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width,
    height,
  },
  contentBox: {
    width,
    // paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fafafa'
  },
  contentRow: {
    width,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    paddingTop: 3,
    paddingBottom: 3,
    // borderBottomWidth: 1,
    /// borderColor: '#eee'
  },
  rowLeft: {
    width: '15%'
  },
  rowMiddle: {
    width: '35%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowMiddleButton: {
    backgroundColor: '#c2fcff',
    borderRadius: 4,
    paddingLeft: 5,
    paddingRight: 5
  },
  rowMiddleButtonMD: {
    backgroundColor: '#7fc2ff',
    borderRadius: 4,
    paddingLeft: 5,
    paddingRight: 5
  },
  rowRight: {
    paddingLeft: 10,
    width: '50%',
  },
  rowFont: {
    fontSize: 14
  },
  rowFontSmall: {
    fontSize: 12
  },
  rowFontSmallWhite: {
    fontSize: 12,
    color: '#fff',

  }
});
