import React, { Component } from 'react'
import { View, Dimensions, NativeAppEventEmitter } from 'react-native'
import { Container, Header, Content, Tab, Tabs } from 'native-base'
import { connect } from 'react-redux'
import styles from './style'
import Button from '../../../components/Button'
import { initState, JPushAlert } from '../../../reducers/appointmentConsultation/actions'
import { appInitialized } from '../../../reducers/app/actions'
import ReservationVideo from '../../ReservationVideo'

// 操作动作
import { NimSession, NimFriend } from 'react-native-netease-im'

import JPushModule from 'jpush-react-native'

const title = '咨询'
const { width, height } = Dimensions.get('window');

class ConsultPage extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    const { dispatch, bodyPosition } = this.props
    // 获取咨询的本地缓存
    this.props.dispatch(initState())

    //=============================================================
    // 极光推送 start
    //=============================================================
    // 在监听所有相关事件之前要调用此方法，否则不会收到点击通知事件。
    JPushModule.notifyJSDidLoad(ret => { console.log('initial!', ret) });

    // 监听自定义消息
    JPushModule.addReceiveCustomMsgListener((message) => {
      // this.setState({pushMsg: message});
      // console.log("receive customer notification000000: " + message);
    });

    // 监听通知消息
    JPushModule.addReceiveNotificationListener((message) => {
      // this.setState({clickMsg: message});
      // console.log("receive notification11111: " + message);
    })

    // 监听点击通知后触发的事件
    JPushModule.addReceiveOpenNotificationListener((message) => {
      // this.setState({clickMsg: message});

      // this.alertHandle(message)
      // 跳转页面
      this.props.dispatch(appInitialized('InterrogationVideo'));

      // console.log("receive notification----------: ", message);
    })


    //=============================================================
    // 网易聊天列表
    //=============================================================
    this.sessionListener = NativeAppEventEmitter
      .addListener("observeRecentContact",(data)=>{
        console.info('会话列表',data)
      });
  }
  alertHandle(message) {
    console.log('ffffffffffffffff', message)
  }
  // props更新时调用
  componentWillReceiveProps(nextProps) {
    let { user } = nextProps

    // 设置当前用户昵称 -> { 极光推送 }
    if(user !== this.props.user) {
      JPushModule.setAlias(user.UserID, (res) => {
        // console.log('极光昵称：', res);
      },() => {
        // console.log('fail set alias');
      });
    }
  }

  /**
   * 卸载
   */
  componentWillUnmount() {
    this.sessionListener && this.sessionListener.remove();
    // 取消监听：自定义消息后事件
    JPushModule.removeReceiveCustomMsgListener()
    // 取消监听：接收推送事件
    JPushModule.removeReceiveNotificationListener()
    // 取消监听：点击推送事件
    JPushModule.removeReceiveOpenNotificationListener()
  }

  /**
   * 即时资讯 { 点击 }
   */
  leavingMessage() {
    const { navigator, expert } = this.props

    NimFriend.getUserInfo(expert.UserID)
      .then((data)=> {


      // console.log('即时资讯: ',data)


      navigator.push({
        screen:'Koe.Chat',
        title: '咨询',
        passProps:{
          session: {
            ...data,
            sessionType:'0',
          }
        }
      });
    })
  }

  /**
   * 视频通话 { 点击 }
   */
  leavingVideo() {
    const { navigator, dispatch, user, expert } = this.props
    /*if(!this.state.isRegistration) {
      alert('您尚未预约，请先预约！')
      return;
    }*/

    // 极光推送
    dispatch(JPushAlert(user.UserID, expert.UserID)).then(res => {
      console.log(res)
      if(res) {

        // 跳转到视频页面
        navigator.push({screen: 'Koe.InterrogationVideo'})
      }
    }).catch(err => console.log(err))
  }
  /**
  * 预约视频问诊
  */
   registrationVideoInquisition() {

   }
  render() {
    const { isRegistration } = this.props
    let videoClass = isRegistration ? {flex: 1, backgroundColor: '#3f51b5'} : {flex: 1, backgroundColor: '#ccc'}

    return (
      <Container style={styles.container}>
        <Tabs initialPage={0}>

          <Tab heading="即时咨询">

            {/*       共用选择   医院、病种、专家、症状     */}
            <ReservationVideo { ...this.props }/>

            <View style={styles.consultBtnBox}>
              <Button
                style={{flex: 1}}
                onPress={this.leavingMessage.bind(this)}>
                咨询
              </Button>
            </View>
          </Tab>

          <Tab heading="视频问诊">

            {/*       共用选择   医院、病种、专家、症状     */}
            <ReservationVideo { ...this.props }/>

            <View style={styles.consultBtnBox}>
              {/*<Button
                onPress={this.registrationVideoInquisition.bind(this)}>
                预约问诊
              </Button>*/}
              <Button
                onPress={this.leavingVideo.bind(this)}
                style={videoClass} underlayColor={videoClass.backgroundColor}>
                视频问诊
              </Button>
            </View>
          </Tab>

        </Tabs>

      </Container>
    );
  }
}

const createState = function(state) {
  return ({
    ...state.user,
    ...state.expert,
    ...state.appointmentConsultation,
    ...state.hospital,
    ...state.department,
  })
}

export default connect(createState)(ConsultPage)
