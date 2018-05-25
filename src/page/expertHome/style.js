import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width,
    height: height - 80,
  },
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
  }

});
