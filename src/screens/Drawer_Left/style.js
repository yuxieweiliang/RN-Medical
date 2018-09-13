import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: width * .75,
    height,
    backgroundColor: '#fafafa'
  },
  headerBackgroundImage: {
    height: 140,
    width: '100%',
    paddingLeft: 10,
  },
  portraitBox: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  usernameBox: {
    height: 40,
  },
  username: {
    color: '#fff',
    lineHeight: 40,
  },
  footer: {
    flexDirection: 'row',
  },
  footerLeft: {
    flexDirection: 'row'
  },
  footerRight: {
    alignSelf: 'flex-end'
  }
});
