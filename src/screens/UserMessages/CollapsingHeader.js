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
    drawUnderTabBar: true,
    navBarButtonColor: '#ffffff',
    navBarTextColor: '#ffffff',
    collapsingToolBarImage: require('../../../img/gyro_header.jpg'),
    collapsingToolBarCollapsedColor: '#0f2362',
    navBarBackgroundColor: '#eeeeee'
  };

  componentWillMount() {
    let user = null
    if(global.token) {
      user = getToken(global.token.access_token)
    }
    console.log('a_cold', )

    // 设置当前用户昵称
    JPushModule.setAlias(user.UserID, () => {
      console.log('success set alias');
    },() => {
      console.log('fail set alias');
    });
  }
  /*componentDidMount() {

    JPushModule.notifyJSDidLoad(ret => { console.log('initial!', ret) });

    // 自定义消息
    JPushModule.addReceiveCustomMsgListener((message) => {
      this.setState({pushMsg: message});
      console.log("receive customer notification000000: " + message);
    });

    // 通知消息
    JPushModule.addReceiveNotificationListener((message) => {
      this.setState({clickMsg: message});
      console.log("receive notification11111: " + message);
    })

    // 点击通知后触发的事件
    JPushModule.addReceiveOpenNotificationListener((message) => {
      this.setState({clickMsg: message});

      this.alertHandle(message)
      // 跳转页面
      // this.props.dispatch(appActions.appVideoChat());

      console.log("receive notification----------: ", message);
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

      fetch('http://fileserver.api.koenn.cn:81/api/UserMainImages/UploadUserHead', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1MzE3OTk2MDYsImV4cCI6MTUzMzA5NTYwNiwiaXNzIjoiaHR0cDovL2F1dGgua29lbm4uY246ODEiLCJhdWQiOiJodHRwOi8vYXV0aC5rb2Vubi5jbjo4MS9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJBUFBDbGllbnQiLCJzdWIiOiJhZG1pbiIsImF1dGhfdGltZSI6MTUzMTc5OTYwNiwiaWRwIjoibG9jYWwiLCJJRCI6IjEiLCJVc2VySUQiOiI4Nzc1NTQzMTEwOTU4NzgxNzgiLCJNSUQiOiIxMDAxIiwiRW1pYWwiOiIwIiwiTG9naW5OYW1lIjoiYWRtaW4iLCJNb2JpbGVQaG9uZSI6IjAiLCJXWF9JRCI6IjAiLCJOaWNrTmFtZSI6IjAiLCJSb2xlIjpbIkFkbWluIiwiTG9naW4iLCJNZXJBZG1pbiJdLCJzY29wZSI6WyJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsiY3VzdG9tIl19.ON6Jv0VwMzThMqH85CRKHTdonmEgUx42cvWO7HAsbUsLvItExDx62MRbPcpQjoJALq4W7j_RTNXqIdj57Bk2dYfUl4qnU1Ej8Rq-eoiIoUZHfj9VtPXLFvzRpDDHTcvA6UcWVqeWjig5gWzNojmLq7WwQ61EydLwxnOoEKpUjagPdSLooXsEllxRNiH6LpAejQI-_rgcAqa13ttKEMyyXko-QgOhd_8oVD3N4A83XsWAVHqP8EP_DHSuFNVyT3NrShw6j6qIdeltu9mQYlgiLf8JB0WLMD7EfCgj10-QPgnw5tHsiEODATybeRbbQUyhX4ls9063ZkF82lzCU3KhvA',
          'Content-Type': 'multipart/form-data;charset=utf-8',
        },
        body: data
      }).then(res => {
        console.log(res, "myImg");
      })
      console.log(image.path, "myName");
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
