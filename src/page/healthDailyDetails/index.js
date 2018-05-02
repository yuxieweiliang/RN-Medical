import React, { Component } from 'react';
import { Text, Image,StatusBar, View, Button, TouchableNativeFeedback } from 'react-native';
import styles from './style'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


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

