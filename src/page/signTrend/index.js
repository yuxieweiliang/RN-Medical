import React, { Component } from 'react';
import { Text, WebView, StatusBar, View, Button, Dimensions } from 'react-native';
import styles from './style'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const { width, height } = Dimensions.get('window');


export default class extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: '体征趋势',
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
          <Text>体征趋势</Text>
          <WebView
            automaticallyAdjustContentInsets={false}
            style={{width, height: 300, }}
            source={{uri: 'http://henhaomai.top:8011'}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            decelerationRate="normal"
            startInLoadingState={true}
          />
          <Button
            title="点击进入建议的详情页面"
            onPress={() => this.props.navigation.goBack('Home')}
          />

        </View>
      </View>



    );
  }
}

