import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

  container: {
    width,
  },
  card: {
    width: '100%',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fafafa'
  },
  cardTitle: {
    height: 50,
  },
  cardTitleText: {
    fontSize: 20,
    color: '#333',
  },
  cardImageBox: {
    height: 200,
    overflow: 'hidden',
    paddingTop: 15,
    paddingBottom: 15,
  },
  cardImage: {
    width: '100%',
    overflow: 'hidden'
  },
  cardContent: {
    backgroundColor: '#fafafa',
    paddingTop: 15,
    paddingBottom: 15,
  },
  cardContentText: {
    fontSize: 16,
    lineHeight: 30,
  },

});
