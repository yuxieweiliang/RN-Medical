import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  returnBox: {
    width,
    height: 50,
    backgroundColor: 'rgba(0, 0, 0, .1)',
  },
  returnIconBox: {
    height: 50,
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
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    width: width - 40,
    alignItems: 'center',
    borderColor: 'rgba(0, 0, 0, .3)',
    borderBottomWidth: 1

  },
  iconBox: {
    height: 24,
    width: 40,
    borderRightWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightColor: '#ccc'
  },
  userIcon: {
    color: '#333',
    fontSize: 20,
  },
  input: {
    height: 40,
    width: width - 60,
    paddingLeft: 20,
    fontSize: 16,
    color: '#333',
  },
  verification: {
    height: 40,
    width: width - 200,
    paddingLeft: 20,
    fontSize: 16,
    color: '#333',
  },
  verifyBox: {
    width: 120,
    borderRadius: 4,
    paddingTop: 4,
    paddingBottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#03a47f',
  },
  verifyText: {
    width: '100%',
    textAlign: 'center',
    color: '#fff'
  },
  button: {
    marginTop: 30,
    width: width - 40,
    height: 46,
    backgroundColor: '#03a47f',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: '#fafafa',
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