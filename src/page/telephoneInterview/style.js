import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width,
    height,
  },
  doctor: {
    width,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fafafa',
  },
  basicSituation: {
    paddingLeft: 10,
    paddingRight: 10
  },
  basicSituationRow: {
    height: 30,
    flexDirection: 'row',
  },
  basicSituationRowLabel: {
    width: '40%',
    fontSize: 14
  },
  basicSituationRowText: {
    width: '60%',
    fontSize: 14
  },
  detailedContent: {
    paddingLeft: 10,
    paddingRight: 10
  }

});
