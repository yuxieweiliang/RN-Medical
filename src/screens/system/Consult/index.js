import React, { Component } from 'react'
import { View, Dimensions, NativeAppEventEmitter } from 'react-native'
import { Container, Header, Content, Tab, Tabs } from 'native-base'
import { connect } from 'react-redux'
import styles from './style'
import Button from '../../../components/Button'
import { initState } from '../../../reducers/consult/actions'
import { registerNetEase } from '../../../reducers/app/actions'
import ReservationVideo from '../../ReservationVideo'
// 操作动作
import { NimSession, NimFriend } from 'react-native-netease-im'


const title = '咨询'
const { width, height } = Dimensions.get('window');

class ConsultPage extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }
  /**
   * 检查是否登录
   * */
  componentWillMount() {
      this.props.dispatch(initState())
  }

  componentDidMount() {

    this.sessionListener = NativeAppEventEmitter
      .addListener("observeRecentContact",(data)=>{
      console.info('会话列表',data)
    });

  }
  componentWillUnmount() {
    this.sessionListener && this.sessionListener.remove();
  }

  /**
   * 即时资讯 { 点击 }
   */
  leavingMessage() {
    const { navigator, expert } = this.props

    NimFriend.getUserInfo(expert.UserID)
      .then((data)=> {

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
   * 预约 { 点击 }
   */
  registration() {}

  /**
   * 视频通话 { 点击 }
   */
  leavingVideo() {
    const { navigator } = this.props
    if(!this.state.isRegistration) {
      alert('您尚未预约，请先预约！')
      return;
    }
    navigator.push({screen: 'Koe.InterrogationVideo'})
  }

  render() {

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
              <Button
                onPress={this.leavingVideo.bind(this)}
                style={{flex: 1, backgroundColor: '#ccc'}}>
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
    ...state.consult,
    ...state.export,
  })
}

export default connect(createState)(ConsultPage)
