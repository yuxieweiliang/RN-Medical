import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoBox: {
    height: 200,
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
    height: 24,
    width: 40,
    borderRightWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightColor: '#fafafa'
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
  verification: {
    height: 40,
    width: width - 200,
    paddingLeft: 20,
    fontSize: 16,
    color: '#fff',
  },
  verify: {
    height: 24,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#fafafa'
  },
  verifyText: {
    textAlign: 'center',
    color: '#fff'
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