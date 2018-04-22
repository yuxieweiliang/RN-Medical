import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import styles from './style'
import Swiper from 'react-native-swiper';

export default class InitSwiper extends Component {
  render() {
    return (
      <View
        style={styles.wrapper}>
        <TouchableHighlight
          style={styles.btn}
          color="#fff"
          activeOpacity={.9}
          onPress={this.props.afterSwiper}>
          <Text style={styles.text}>关闭</Text>
        </TouchableHighlight>
        <Swiper
          style={styles.wrapper}
          loop={false}
          autoplay={true}
          onIndexChanged={this.props.changeIndex}
          bounces={false}>
          <View style={styles.slide1}>
            <Text>slide1</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>

            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
      </View>
    );
  }
}
