import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

  container: {
    width,
    height: height - 80,
  },
  card: {
    width: '100%',
    height: 140,
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fafafa'
  },
  cardLeft: {
    flex: 2,
    paddingRight: 15
  },
  cardRight: {
    flex: 1,
  },

  cardLeftTitle: {
    height: 30,
  },
  cardLeftTitleText: {
    fontSize: 20,
    color: '#333',
  },
  cardLeftContent: {
  },
  cardLeftContentText: {
    fontSize: 16,
    lineHeight: 30,
  },
  cardRightImage: {
    width: '100%',
    height: '100%'
  }
});
