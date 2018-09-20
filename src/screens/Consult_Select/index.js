import React, { Component } from 'react';
import { TouchableOpacity, View, StyleSheet, NativeAppEventEmitter, Dimensions } from 'react-native';
import { Container, Content, List, Item, Left, Right, Tab, Button, Card, CardItem, Text, Icon } from 'native-base';
import {NimFriend, NimUtils, NimSession} from 'react-native-netease-im';
import { JPushAlert, JPushModule } from '../../reducers/registration/actions'
import moment from 'moment'
import { connect } from 'react-redux'
import { postConsult } from '../../reducers/consult/actions'
import Toast from 'react-native-simple-toast'
import { getReceiptByAdviceId } from '../../reducers/receipt/actions'
import PathologicalCardItem from '../../components/PathologicalCardItem'

const { width, height } = Dimensions.get('window');

class ConsultSelect extends Component {
  static navigatorStyle  = {
    tabBarHidden: true,
  }
  constructor(props) {
    super(props)
    this.state = {
      selected: null,
    }
  }
  componentWillMount() {
    const { dispatch } = this.props

    // 回执
    // dispatch(getReceiptByAdviceId())
    NimFriend.startFriendList();
    // dispatch(getExportList({hospitalId: 1001, deptCode: '001'}))
  }
  componentDidMount() {
    let { patient, expert } = this.props
    this.friendListener = NativeAppEventEmitter.addListener("observeFriend",(data)=>{

      // console.log("observeFriend", data)
    });

    console.log('nextProps: ', this.props)

  }
  componentWillUnmount() {
    NimFriend.stopFriendList();
    this.friendListener && this.friendListener.remove();
  }


  /**
   * 更换病种
   */
  onPressDiseaseSpecies() {
    let { navigator } = this.props
    navigator.push({
      screen: `Koe.System.DiseaseSpeciesList`,
      title: '病种列表'
   })
  }

  /**
   * 跳转到选择  部位 症状  的页面
   */
  onPressSymptom() {

    this.props.navigator.push({
      screen: 'Koe.System.SymptomList',
      title: '症状',
    })
  }


  beforeOrAfter() {
    const { consultVideo } = this.props
    let today = moment().format();
    let { ReserveHours, StartTime } = consultVideo;
    let endTime = moment(StartTime).add(ReserveHours*1, 'h').format();
    return moment(today).isBefore(moment(StartTime)) || moment(endTime).isBefore(moment(today));
  }

  /**
   * 视频通话 { 点击 }
   */
  leavingVideo() {
    const { navigator, dispatch, patient, expert,
      complication, symptom, bodyPosition,
      pathological, diseaseSpecies } = this.props
    const data = { complication, symptom, bodyPosition, pathological, diseaseSpecies }

    if(diseaseSpecies) {
      dispatch(postConsult(expert, diseaseSpecies))
    }

    // 极光推送
    dispatch(JPushAlert(patient.UserID, expert.UserID, data)).then(res => {
      console.log('极光推送', res)
      if(res) {
        // 跳转到视频页面
        navigator.push({
          screen: 'Koe.Telephone.Video',
          title: '视频'
        })
      } else {
        Toast.show("对方不在线，请稍后再拨！")
      }
    }).catch(err => console.log(err))
  }
  render() {
    let { complication, symptom, bodyPosition,
      pathological, hospital, expert, diseaseSpecies } = this.props
    const MerchantName = hospital ? hospital.MerchantName : expert ? expert.MerchantName : ''

    return(
      <Container>
        <Content>
          <List>
            <Item style={styles.listItem}>
              <Left style={{flexDirection: 'row'}}>
                <Text>医院：</Text>
                <Text style={{marginLeft: 10}}>{ MerchantName }</Text>
              </Left>
              <Right style={{flexDirection: 'row'}}>
                <Text>专家：</Text>
                <Text style={{marginLeft: 10}}>{expert && expert.UserName}</Text>
              </Right>
            </Item>
            <Item style={styles.listItem} onPress={() => this.onPressDiseaseSpecies()}>
              <Left style={{flexDirection: 'row'}}>
                <Text>病种：</Text>
                <Text style={{marginLeft: 10}}>{diseaseSpecies && diseaseSpecies.Illness_Name}</Text>
              </Left>
              <Right><Icon name="chevron-right" type="EvilIcons"/></Right>
            </Item>
          </List>
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
          <View style={{flex: 1, padding: 10}}>
            <Button full onPress={() => this.leavingVideo()} disabled={this.beforeOrAfter()}>
              <Text>咨询</Text>
            </Button>
          </View>
          <View style={{flex: 1, padding: 10}}>
            <Button full onPress={() => this.leavingVideo()}>
              <Text>咨询（测试）</Text>
            </Button>
          </View>

        </Content>
      </Container>
    )
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

export default connect(createState)(ConsultSelect)


const styles = StyleSheet.create({
  container: {
    width,
    height,
  },
  listItem: {
    width,
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#fafafa',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  listChildCard: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  listChildItem: {
    flexDirection: 'row',
    paddingBottom: 10
  },
  listChildItemLeft: {
    width: 100,
  },
  listChildRight: {
    backgroundColor: '#57aeff',
    borderRadius: 4,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    paddingBottom: 2,
    // borderColor: 'red',
    // borderWidth: 1
  },
  listChildRightTextColor: {
    color: '#fafafa',
    // borderColor: 'red',
    // borderWidth: 1
  }
});
