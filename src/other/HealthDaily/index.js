import React, { Component } from 'react';
import { Text, Image,StatusBar, View, Button, TouchableNativeFeedback } from 'react-native';
import styles from './style'

export default class extends React.Component {
  /*static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: '健康日报',
    }
  };*/

  componentDidMount() {}

  _onPressButton() {
    this.props.navigation.navigate('Product', {
      itemId: 87,
      otherParam: 'anything you want here',
    })
  }
  componentWillUnmount() {
    // this._onPressButton.remove();
  }
  render() {
    return (

      <View style={styles.container}>
        <TouchableNativeFeedback
          style={styles.card}
          onPress={() => this.props.navigator.push({screen: 'Koe.HealthDailyDetails'})}>
          <View style={styles.card}>
            <View style={styles.cardLeft}>
              <View style={styles.cardLeftTitle}>
                <Text style={styles.cardLeftTitleText}>健康日报</Text>
              </View>
              <View style={styles.cardLeftContent}>
                <Text style={styles.cardLeftContentText}>健康日报健康日，报健康日报健康日报健康日，报健康日报健康日，报健康日报健康日报健康日，报健康日报健......</Text>
              </View>
            </View>
            <View style={styles.cardRight}>
              <Image style={styles.cardRightImage} source={require('../../../assets/images/a1.jpg')}/>
            </View>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback style={styles.card}>
          <View style={styles.card}>
            <View style={styles.cardLeft}>

              <View style={styles.cardLeftTitle}>
                <Text style={styles.cardLeftTitleText}>健康日报</Text>
              </View>
              <View style={styles.cardLeftContent}>
                <Text style={styles.cardLeftContentText}>健康日报健康日，报健康日报健康日报健康日，报健康日报健康日，报健康日报健康日报健康日，报健康日报健......</Text>
              </View>
            </View>
            <View style={styles.cardRight}>
              <Image style={styles.cardRightImage} source={require('../../../assets/images/a1.jpg')}/>
            </View>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback style={styles.card}>
          <View style={styles.card}>
            <View style={styles.cardLeft}>

              <View style={styles.cardLeftTitle}>
                <Text style={styles.cardLeftTitleText}>健康日报</Text>
              </View>
              <View style={styles.cardLeftContent}>
                <Text style={styles.cardLeftContentText}>健康日报健康日，报健康日报健康日报健康日，报健康日报健康日，报健康日报健康日报健康日，报健康日报健......</Text>
              </View>
            </View>
            <View style={styles.cardRight}>
              <Image style={styles.cardRightImage} source={require('../../../assets/images/a1.jpg')}/>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>



    );
  }
}

