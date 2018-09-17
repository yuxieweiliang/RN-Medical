import React from 'react';
import {StyleSheet, Alert, Text, ScrollView, TouchableHighlight} from 'react-native';
import buffer from 'buffer'
import { getToken } from '../../utils/_utils'

import ImagePicker from 'react-native-image-crop-picker';

import JPushModule from 'jpush-react-native'

class CollapsingHeader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pushMsg: '',
      clickMsg: ''
    }

    // JPushModule.setTags(["t_guo"], () => {}, () => { });
  }

  static navigatorStyle = {
    tabBarHidden: true,
    drawUnderTabBar: true,
    navBarButtonColor: '#ffffff',
    navBarTextColor: '#ffffff',
    collapsingToolBarImage: require('../../../assets/images/img/gyro_header.jpg'),
    collapsingToolBarCollapsedColor: '#0f2362',
    navBarBackgroundColor: '#eeeeee'
  };

  componentWillMount() {
    let user = null
    if(global.token) {
      user = getToken(global.token.access_token)
    }
    // console.log('a_cold', )

    // 设置当前用户昵称
    JPushModule.setAlias(user.UserID, () => {
      // console.log('success set alias');
    },() => {
      // console.log('fail set alias');
    });
  }
  /*componentDidMount() {

   JPushModule.notifyJSDidLoad(ret => { // console.log('initial!', ret) });

   // 自定义消息
   JPushModule.addReceiveCustomMsgListener((message) => {
   this.setState({pushMsg: message});
   // console.log("receive customer notification000000: " + message);
   });

   // 通知消息
   JPushModule.addReceiveNotificationListener((message) => {
   this.setState({clickMsg: message});
   // console.log("receive notification11111: " + message);
   })

   // 点击通知后触发的事件
   JPushModule.addReceiveOpenNotificationListener((message) => {
   this.setState({clickMsg: message});

   this.alertHandle(message)
   // 跳转页面
   // this.props.dispatch(appActions.appVideoChat());

   // console.log("receive notification----------: ", message);
   })

   }*/

  alertHandle(message) {
    Alert.alert(message.alertContent)
  }


  componentWillUnmount() {
    JPushModule.removeReceiveCustomMsgListener();
    JPushModule.removeReceiveNotificationListener();
    JPushModule.removeReceiveOpenNotificationListener();
  }

  /**
   * 打开相册
   */
  handleImagePicker() {

    ImagePicker.openPicker({
      mediaType: 'photo',
      loadingLabelText: '请稍候...'
    }).then(image => {

      let data = new FormData();
      let file = { uri: image.path, type: "multipart/form-data", name: "image.png" };
      data.append("imgFile", file);
      // console.log(image.path, "myName");
    });
  }

  async pushMessage()  {
    let user = null
    try {
      if(global.token) {
        user = getToken(global.token.access_token)
      }

      let postdata = JSON.stringify({
        "platform": ["android"],
        "audience": "all",
        "notification": {
          "alert": user.UserID,
        },
      })

      const res = await fetch('https://api.jpush.cn/v3/push', {
        method: 'POST',
        headers: {
          'Connection': 'Keep-Alive',
          'Charset': 'UTF-8',
          'Content-Type': 'application/json',
          "Authorization": "Basic " + new buffer.Buffer.from("cb421288cf278b1a3ced70b8:c241a3ef3f786b736b65845c").toString('base64')
        },
        body:postdata
      })
      const event = await res.json()
      // alert(JSON.stringify(event))
      return event
    } catch (err) {
      alert(err);
    }
  }


  render() {

    return (
      <ScrollView style={styles.container}>
        <TouchableHighlight  onPress={this.handleImagePicker.bind(this)}>
          <Text>
            点击
          </Text>
        </TouchableHighlight>
        <TouchableHighlight  onPress={this.pushMessage.bind(this)}>
          <Text>
            点击
          </Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default CollapsingHeader;
