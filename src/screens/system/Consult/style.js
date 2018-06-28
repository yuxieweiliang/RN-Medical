import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width,
    height,
  },
  listItem: {
    width,
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#fafafa',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  listChildCard: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  listChildItem: {
    flexDirection: 'row',
    paddingBottom: 10
  },
  listChildRight: {
    backgroundColor: '#57aeff',
    borderRadius: 4,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    paddingBottom: 2
  },
  listChildRightTextColor: {
    color: '#fafafa'
  }
});
