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
      let data = this.createSignData(signList)
      let option = {
        title: {
          text: null
        },
        yAxis: {
          title: {
            enabled: false
          }
        },
        legend: {
          // 关闭图列
          enabled: false
        },
        plotOptions: {
          line: {
            dataLabels: {
              // 开启数据标签
              enabled: true
            },
            // 关闭鼠标跟踪，对应的提示框、点击事件会失效
            enableMouseTracking: false
          },
          series: {
            label: {
              connectorAllowed: false
            },
            pointStart: 1
          }
        },
        responsive: {
          rules: [{
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }]
        }
      }



      // 血压
      let bloodPressure = Object.assign({ series: [{
        name: 'fdafa',
        data: data.XYH
      },{
        name: 'fdafa',
        data: data.XYL
      }] }, option)

      // 体温
      let temperature = Object.assign({ series: [{
        name: 'fdafa',
        data: data.TW
      }] }, option)

      // 呼吸
      let breathing = Object.assign({ series: [{
        name: 'fdafa',
        data: data.HX
      }] }, option)

      // 脉搏
      let pulse = Object.assign({ series: [{
        name: 'fdafa',
        data: data.MB
      }] }, option)

      // 血氧饱和度
      let bloodOxygenSaturation = Object.assign({ series: [{
        name: 'fdafa',
        data: data.XYBHD
      }] }, option)

      this.refs.bloodPressure.postMessage(JSON.stringify(bloodPressure));
      this.refs.temperature.postMessage(JSON.stringify(temperature));
      this.refs.breathing.postMessage(JSON.stringify(breathing));
      this.refs.pulse.postMessage(JSON.stringify(pulse));
      this.refs.bloodOxygenSaturation.postMessage(JSON.stringify(bloodOxygenSaturation));
    }
  }
  componentWillUnmount() {}

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
        if(['HX', 'MB', 'TW', 'XYL', 'XYH', 'XYBHD'].indexOf(i) > -1) {
          data[i] = data[i] || []
          data[i].push(list[i])
        }
      }

    })
    return data
  }

  // 从 WebView 接收的数据
  sendMessage() {}

  // 向 WebView 发送的数据
  handleMessage(e) {
    console.log(e.nativeEvent)
    this.setState({webViewData: e.nativeEvent.data});
  }

  render() {

    const webViewStyle = {
      automaticallyAdjustContentInsets: false,
      style: {width, height: 300, },
      source: {uri: 'http://10.0.0.33:8011/index.html'},
      javaScriptEnabled: true,
      domStorageEnabled: true,
      decelerationRate: "normal",
      startInLoadingState: true
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity  onPress={() => {this.openImage()}}>
          <Text>打开图片</Text>
        </TouchableOpacity>

        <View style={{ flex: 1 }}>

          {/*   血压  */}
          <WebView
            ref={'bloodPressure'}
            {...webViewStyle}
          />

          {/*   体温  */}
          <WebView
            ref={'temperature'}
            {...webViewStyle}
          />

          {/*   呼吸  */}
          <WebView
            ref={'breathing'}
            {...webViewStyle}
          />

          {/*   脉搏  */}
          <WebView
            ref={'pulse'}
            {...webViewStyle}
          />

          {/*   血氧饱和度  */}
          <WebView
            ref={'bloodOxygenSaturation'}
            {...webViewStyle}
          />

        </View>
        <View style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
          <Text>来自webview的数据 : {this.state.webViewData}</Text>
          <Text onPress={() => {
            this.sendMessage()
          }}>发送数据到WebView</Text>
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
