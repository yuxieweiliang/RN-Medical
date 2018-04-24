import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  wrapper: {
    // backgroundColor: '#63d0b4'
  },
  slide1: {
    width,
    height,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btn: {
    borderRadius: 10,
    shadowColor:'green',
    shadowOffset:{h:10,w:10},
    shadowRadius:3,
    shadowOpacity:0.8,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});
