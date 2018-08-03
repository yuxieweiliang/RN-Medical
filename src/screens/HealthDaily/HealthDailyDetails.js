import React, { Component } from 'react';
import { Text, Image,StatusBar, View, Button, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: '健康日报',
    }
  };

  componentDidMount() {}

  _onPressButton() {
    /*this.props.navigation.navigate('Product', {
      itemId: 87,
      otherParam: 'anything you want here',
    })*/
  }
  componentWillUnmount() {
    // this._onPressButton.remove();
  }
  render() {
    return (

      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cardTitle}>
            <Text style={styles.cardTitleText}>健康日报</Text>
          </View>
          <View style={styles.cardImageBox}>
            <Image style={styles.cardImage} source={require('../../../assets/images/a1.jpg')}/>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardContentText}>健康日报健康日，报健康日报健康日报健康日，报健康日报健康日，报健康日报健康日报健康日，报健康日报健......</Text>
          </View>
        </View>
      </View>
    );
  }
}


const styles =  StyleSheet.create({

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
