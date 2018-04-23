import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height,
  },
  photoBox: {
    backgroundColor: '#6d9feb',
    paddingVertical: 40,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxStyle: {
    height: 110,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: 60,
    width: 60,
    borderRadius: 60
  },
  textStyle: {
    height: 40,
    lineHeight: 40,
    color: '#fff'
  },
  btnStyle: {
    height: 40,
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#eee',
    paddingLeft: 20
  },
  fontStyle: {
    fontSize: 16,
    height: 40,
    lineHeight: 40,
  },
  bottomBtnStyle: {
    height: 40,
    width: 70,
    paddingLeft: 20
  },
  bottomFontStyle: {
    fontSize: 16,
    height: 40,
    lineHeight: 40,
  },
});
