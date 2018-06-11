import React, { Component } from 'react';
import { Text, WebView, TouchableOpacity, View, Button, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import ImagePicker from 'react-native-image-crop-picker';
import styles from './style'
import signAction from '../../action/sign'


const { width, height } = Dimensions.get('window');


class SignTrend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      webViewData: ''
    }
    this.data = 0;
  }
  componentWillMount() {
    const { dispatch } = this.props
    dispatch(signAction.signList())
    dispatch(signAction.sign(3))
  }

  componentDidMount() {}
  componentWillReceiveProps(nextProps) {
    const { signList } = nextProps
    if(signList) {
      console.log('componentDidMount', this.createSignData(signList))

      this.refs.webview.postMessage(JSON.stringify(this.createSignData(signList)));
    }
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

  openImage() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    });
  }
  createSignData(option) {
    let data = {}
    option.map(function(list) {

      for(i in list) {
        if(['HX', 'MB', 'TW', 'XYL', 'XYH'].indexOf(i) > -1) {
          data[i] = data[i] || []
          data[i].push(list[i])
        }
      }

    })
    return data
  }

  // 从 WebView 接收的数据
  sendMessage() {
  }

  // 向 WebView 发送的数据
  handleMessage(e) {
    console.log(e.nativeEvent)
    this.setState({webViewData: e.nativeEvent.data});
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity  onPress={() => {this.openImage()}}>
          <Text>打开图片</Text>
        </TouchableOpacity>

        <View style={{ flex: 1 }}>
          <WebView
            ref={'webview'}
            automaticallyAdjustContentInsets={false}
            style={{width, height, }}
            source={{uri: 'http://10.0.0.33:8011/index.html'}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            decelerationRate="normal"
            startInLoadingState={true}
            onMessage={(e) => {
              this.handleMessage(e)
            }}
          />
          <View style={{ flex: 1, height: 100, alignItems: 'center', justifyContent: 'center' }}>
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

SignTrend.navigationOptions = ({ navigation, navigationOptions }) => {
  const { params } = navigation.state;
  return {
    title: '体征趋势',
  }
};
export default connect(state => ({...state.user.sign}))(SignTrend)
