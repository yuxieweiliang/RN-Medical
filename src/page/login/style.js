import { StyleSheet, Dimensions } from 'react-native';
import * as config from '../../config'
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 140,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  returnBox: {
    width,
    height: 80,
    backgroundColor: 'rgba(0, 0, 0, .1)',
  },
  returnIconBox: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
  returnIcon: {
    color: '#fff',
    paddingLeft: 30,
    paddingRight: 10,
    fontSize: 36,
  },
  returnIconFont: {
    color: '#fff',
    fontSize: 20,
  },
  logoBox: {
    paddingTop: 30,
    paddingBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    width: width - 40,
    alignItems: 'center',
    borderColor: 'rgba(255, 255, 255, .5)',
    borderBottomWidth: 1

  },
  iconBox: {
    width: 40,
    // height: 24,
    borderRightWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightColor: '#fafafa'
  },
  icon: {
    // height: 300
  },
  userIcon: {
    color: '#fff',
    fontSize: 20,

  },
  input: {
    height: 40,
    width: width - 60,
    paddingLeft: 20,
    fontSize: 16,
    color: '#fff',
  },
  button: {
    marginTop: 30,
    width: width - 40,
    height: 46,
    backgroundColor: 'rgba(255, 255, 255, .8)',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: '#03a47f',
    fontSize: 18,
  },
  goRegister: {
    color: 'rgba(255, 255, 255, .8)',
    width: width - 40,
    textAlign: 'right',
    fontSize: 14,
    margin: 10,
  },
});