import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    width,
    height,
  },
  card: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  bloodPressure: {
    height: 300,
    paddingLeft: 10,
    paddingRight: 10,
  },
  temperature: {
    height: 200,
    paddingLeft: 10,
    paddingRight: 10,
  },
  breathing: {
    height: 200,
    paddingLeft: 10,
    paddingRight: 10,
  },
  pulse: {
    height: 200,
    paddingLeft: 10,
    paddingRight: 10,
  },
  bloodOxygenSaturation: {
    height: 200,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
