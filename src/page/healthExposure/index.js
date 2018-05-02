import React, { Component } from 'react';
import { Text, WebView,StatusBar, View, Button, TouchableNativeFeedback } from 'react-native';
import styles from './style'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


export default class extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: '晒健康',
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

      <View style={styles.container}>
        <WebView
          automaticallyAdjustContentInsets={false}
          style={styles.scroll}
          source={{uri: 'http://10.0.0.98:8011/healthExposure/view.html'}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          startInLoadingState={true}
        />
      </View>



    );
  }
}

