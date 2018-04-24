import React, { Component } from 'react';
import { Text, TouchableHighlight,StatusBar, View, Button, TouchableNativeFeedback } from 'react-native';
import styles from './style'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


export default class extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: '就医历史',
    }
  };

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

      <View style={styles.slide1}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>就医历史</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>就医历史</Text>
              </View>
            </View>
            <Text>就医历史</Text>
            <Button
              title="点击进入建议的详情页面"
              onPress={() => this.props.navigation.navigate('DefaultRecommend')}
            />

          </View>

          <Text>就医历史</Text>
          <Button
            title="点击进入建议的详情页面"
            onPress={() => this.props.navigation.navigate('DefaultRecommend')}
          />

        </View>
      </View>



    );
  }
}

