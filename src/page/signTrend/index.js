import React, { Component } from 'react';
import { Text, WebView, StatusBar, View, Button, Dimensions } from 'react-native';
import styles from './style'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const { width, height } = Dimensions.get('window');


export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      webViewData: ''
    }
    this.data = 0;
  }
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: '体征趋势',
    }
  };

  componentDidMount() {}

  // 从 WebView 接收的数据
  sendMessage() {
    this.refs.webview.postMessage(++this.data);
  }

  // 向 WebView 发送的数据
  handleMessage(e) {
    this.setState({webViewData: e.nativeEvent.data});
  }

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
        <View style={{ flex: 1 }}>
          <WebView
            ref={'webview'}
            automaticallyAdjustContentInsets={false}
            style={{width, height: 200, }}
            source={{uri: 'http://10.0.0.98:8011/index.html'}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            decelerationRate="normal"
            startInLoadingState={true}
            onMessage={(e) => {
              this.handleMessage(e)
            }}
          />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>来自webview的数据 : {this.state.webViewData}</Text>
            <Text onPress={() => {
              this.sendMessage()
            }}>发送数据到WebView</Text>
          </View>
        </View>
      </View>



    );
  }
}

