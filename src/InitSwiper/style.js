import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  wrapper: {
    position: 'relative',
    flex: 1,
    opacity: .9,
    flexDirection: 'column',
    // alignItems: 'flex-end',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#63d0b4'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dc9096'
  },
  slide3: {
    flex: 1,
    backgroundColor: '#938fdc'
  },

  btn: {
    position: 'absolute',
    top: 10,
    right: 10,
    borderRadius: 4,
    marginTop: 20,
    marginRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignSelf: 'flex-end',
    zIndex: 1000
  },
  text: {
    color: '#fff',
    fontSize: 14,
  }
});
