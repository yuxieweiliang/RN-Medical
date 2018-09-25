import React, { Component } from 'react'
import { View, Dimensions, NativeAppEventEmitter, Image, TouchableOpacity  } from 'react-native'
import { Container, Content, Text, List, Item, Left, Tab, Tabs, Right, Row, Card, CardItem, Button } from 'native-base';
import JPushModule from 'jpush-react-native'
import { connect } from 'react-redux'
import moment from 'moment'
import styles from './style'
import storage from '../../utils/storage'
import { getToken } from '../../utils/_utils'
import HeaderView from '../../components/HeaderView'
import { setExpertId, JPushAlert } from '../../reducers/video/actions'
import { getConsultVideoList, changeConsult } from '../../reducers/consult/actions'
import { appInitialized } from '../../reducers/app/actions'
import PathologicalCardItem from '../../components/PathologicalCardItem'

// 更换专家
import { changeExpert } from '../../reducers/expert/actions'

// 更换医院
import { changeHospital } from '../../reducers/hospital/actions'

// 更换 病种
import { diseaseSpeciesChange } from '../../reducers/diseaseSpecies/actions'


// 下拉选择  更滑列表项
import SelectOfRouter from '../../components/SelectOfRouter'

// 操作动作
import { NimSession, NimFriend } from 'react-native-netease-im'

const title = '咨询';
const { width, height } = Dimensions.get('window');

class ConsultPage extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    const { dispatch, bodyPosition, navigator, expert } = this.props;
    const _this = this;

    //=============================================================
    // 极光推送 start
    //=============================================================
    // 在监听所有相关事件之前要调用此方法，否则不会收到点击通知事件。
    JPushModule.notifyJSDidLoad(ret => { console.log('initial!', ret) });

    // 监听自定义消息
    JPushModule.addReceiveCustomMsgListener((message) => {

      console.log("极光推送 【自定义消息】: ", message);

      /**
       * 接听 || 决绝
       * 接收到医生端发来的视频，跳转到接听页面，
       * 然后在接听页面，如果拒绝的话，则会点击 onCancel 事件
       */
      if(message.content === 'open-answer') {
        let extras = JSON.parse(message.extras);

        console.log("极光推送 【打开接听界面】: ", extras);

        dispatch(setExpertId(extras.id));
        // this.props.navigator.dismissModal({animationType: 'none'});
        navigator.showModal({
          screen: 'Koe.Telephone.Answer',
          passProps: {
            onCancel:(err) => {
              // this.props.navigator.pop()
              navigator.dismissModal({animationType: 'none'});
            }
          }});
        // 数据
      }

      /**
       * 视频
       */
      if(message.content === 'open-video') {

        console.log("极光推送 【打开电话界面】: ");

        navigator.showModal({
          screen: 'Koe.Telephone.Video',
          passProps: {
            onCancel:(err) => {
              // this.props.navigator.pop()

              dispatch(JPushAlert(expert.UserID, { msg_content: 'close-video' }));
              navigator.dismissAllModals({animationType: 'none'});
            }
          }});
      }

      /**
       * 挂断
       */
      if(message.content === 'close-answer' || message.content === 'close-video') {
        console.log("极光推送 【关闭电话】: ");
        navigator.dismissAllModals({animationType: 'none'});
      }

    });

    // 监听通知消息
    JPushModule.addReceiveNotificationListener((message) => {
      // this.setState({clickMsg: message});
      // console.log("receive notification11111: " + message);
    });

    // 监听点击通知后触发的事件
    JPushModule.addReceiveOpenNotificationListener((message) => {
      // this.setState({clickMsg: message});

      // 跳转页面
      this.props.dispatch(appInitialized('Video'));

      // console.log("receive notification----------: ", message);
    });


    //=============================================================
    // 网易聊天列表
    //=============================================================
    this.sessionListener = NativeAppEventEmitter
      .addListener("observeRecentContact",(data)=>{
        console.info('会话列表',data)
      });
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const self = getToken(global.token.access_token);

    dispatch(getConsultVideoList(self.MID, self.UserID))
  }
  // props更新时调用
  componentWillReceiveProps(nextProps) {
    let { patient } = nextProps

    // 设置当前用户昵称 -> { 极光推送 }
    if(patient !== this.props.patient) {
      JPushModule.setAlias(patient.UserID, (res) => {
        console.log('极光昵称：', res);
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

    if(!expert) {
      alert('请先选择专家')
      return;
    }

    NimFriend.getUserInfo(expert.UserID)
      .then((data)=> {

      // console.log('即时资讯: ',data)
      navigator.push({
        screen:'Koe.Consult.Chat',
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

  // 选择医院
  selectHospital() {
    this.props.navigator.showModal({
      screen: 'Koe.Hospital.List',
      title: '医院列表',
      passProps: {
        onClose: (option) => {
          this.props.dispatch(changeHospital(option));
          this.props.navigator.dismissModal()
        },
      },
    })
  }
  // 选择科室
  selectExpert() {
    this.props.navigator.showModal({
      screen: 'Koe.Expert.List',
      title: '专家列表',
      passProps: {
        onClose: (option) => {
          this.props.dispatch(changeExpert(option));
          this.props.navigator.dismissModal()
        },
      },
    })
  }
  /**
   * 更换病种
   */
  selectDiseaseSpecies() {
    let { navigator } = this.props;
    navigator.push({
      screen: `Koe.System.DiseaseSpeciesList`,
      passProps: {
        onClose: (option) => {
          this.props.dispatch(diseaseSpeciesChange(option));
          this.props.navigator.pop()
        },
      }})
  }


  /**
   * 点击预约列表每一项
   * @param option
   */
  consultSelect(option) {
     const { dispatch } = this.props

    dispatch(changeConsult(option))
    dispatch(changeExpert(option.Doctor))

    // 跳转到， 预约视频， 选择预约条件页面
    this.props.navigator.push({screen: 'Koe.Consult.Select'})
  }

  /**
   * 跳转到选择  部位 症状 病理 并发症  的页面
   */
  onPressSymptom() {

    this.props.navigator.push({
      screen: 'Koe.System.SymptomList',
      title: '症状',
    })
  }


  render() {
    const { complication, symptom, bodyPosition, hospital,
      expert, consultVideoList,  pathological, diseaseSpecies } = this.props

    return (
      <Container style={styles.container}>

        <HeaderView
          {...this.props}
          avatar={require('../../../assets/images/a3.jpg')}
          title="咨询"
        />

        <Tabs initialPage={0}>

          <Tab heading="即时咨询">
            <Row style={{height: 40, paddingLeft: 10, paddingRight: 10,}}>
              <SelectOfRouter
                onPress={() => this.selectHospital()}
                label="医院"
                value={hospital && hospital.MerchantName}
              />
              <SelectOfRouter
                onPress={() => this.selectExpert()}
                label="专家"
                value={expert && expert.UserName}
              />
            </Row>
            <Row style={{height: 40, paddingLeft: 10, paddingRight: 10,}}>
              <SelectOfRouter
                onPress={() => this.selectDiseaseSpecies()}
                label="病种"
                value={diseaseSpecies && diseaseSpecies.Illness_Name}
              />
            </Row>

            {/*       共用选择   医院、病种、专家、症状     */}
            <Card style={styles.listChildCard}>
              <CardItem>
                <Text>症状</Text>
              </CardItem>
              <TouchableOpacity
                onPress={() => this.onPressSymptom()}>
                <View style={{padding: 15}}>

                  <PathologicalCardItem
                    itemTitle="身体部位"
                    itemName={bodyPosition && bodyPosition.ItemName}
                  />
                  <PathologicalCardItem
                    itemTitle="状态症状"
                    itemName={symptom && symptom.ItemName}
                  />
                  <PathologicalCardItem
                    itemTitle="病例病程"
                    itemName={pathological && pathological.ItemName}
                  />
                  <PathologicalCardItem
                    itemTitle="并发症状"
                    itemName={complication && complication.ItemName}
                  />
                </View>
              </TouchableOpacity>
            </Card>

            <View style={styles.consultBtnBox}>
              <Button full
                style={{flex: 1}}
                onPress={this.leavingMessage.bind(this)}>
                <Text>咨询</Text>
              </Button>
            </View>
          </Tab>
          <Tab heading="视频问诊">
            <List dataArray={consultVideoList} renderRow={(item) => {
              let today = moment().format();
              let { ReserveHours, StartTime, Doctor } = item;
              let endTime = moment(StartTime).add(ReserveHours*1, 'h').format();
              let text = moment(today).isBefore(moment(endTime)) ? '未完成' : '已完成'
              return (
                <Item style={{padding: 10}} onPress={() => this.consultSelect(item)}>
                  <Image style={{width: 40, height: 40}} source={require('../../../assets/images/a3.jpg')}/>
                  <Left style={{paddingLeft: 10}}>
                    <Text>{item.Doctor && item.Doctor.UserName}</Text>
                    <Text>{moment(item.StartTime).format('MM/DD HH:mm')}</Text>
                  </Left>
                  <Right>
                    <Text>{item.Doctor && item.Doctor.UserType}</Text>
                    <Text>{text}</Text>
                  </Right>
                </Item>
              )
            }}/>
          </Tab>

        </Tabs>

      </Container>
    );
  }
}

const createState = function(state) {
  return ({
    ...state.patient,
    ...state.expert,
    ...state.consult,
    ...state.diseaseSpecies,
    ...state.bodyPosition,
    ...state.symptom,
    ...state.pathological,
    ...state.hospital,
    ...state.complication,
  })
}

export default connect(createState)(ConsultPage)
