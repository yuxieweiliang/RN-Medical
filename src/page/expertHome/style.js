import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  /*container: {
    width,
    height: height - 80,
  },*/
  scroll: {
    width,
    height: '100%',
  },
  doctorCardBox: {
    position: 'relative',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fafafa',
  },
  doctorCard: {
    position: 'absolute',
    width: '100%',
    height: 200,
    paddingRight: 15,
    paddingLeft: 15,
    alignItems: 'center',
    flexDirection: 'row'
  },
  doctorImage: {
    width: 100,
    height: 140
  },
  doctorTextContent: {
    height: 140,
    padding: 10
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },

  modal: {
    flex: 1,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 0, 0, 0.2)'
  },
  button: {
    backgroundColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  close: {
    position: 'absolute',
    right: 20,
    top: 40,
    backgroundColor: 'red'
  },
  modalContainer: {
    height: 100,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  text: {
    color: '#fff'
  }

});
