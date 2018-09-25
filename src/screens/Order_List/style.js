import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  listItem: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fafafa'
  },
  listItemLeft: {
    flex: 1,
    flexDirection: 'row'
  },
  listItemRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  listItemLeftText: {
    marginLeft: 10,
    fontSize: 16,
  },
  goto: {
    fontSize: 14,
  },
  icon: {
    width: 30,
    height: 30
  }

});
