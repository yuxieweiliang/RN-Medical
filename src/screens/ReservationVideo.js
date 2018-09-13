import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, NativeAppEventEmitter, Dimensions } from 'react-native';
import { Container, Content, List, Item, Left, Right, Tab, Tabs, Card, CardItem, Col, Icon } from 'native-base';
import { typeOf } from '../utils'
import { getExportList } from '../reducers/expert/actions'
import {NimFriend, NimUtils, NimSession} from 'react-native-netease-im';
import { addFriendNetEase } from '../reducers/app/actions'
import {
  // 更换 病种
  diseaseSpeciesChange,
  // 更换 身体部位
  bodyPositionChange,
  // 更换 症状
  symptomChange,
  // 更换 病理病程
  pathologicalCourseChange,
  // 更换 并发症
  complicationChange,
} from '../reducers/registration/actions'
import PathologicalCardItem from '../components/PathologicalCardItem'

// 更换 专家
import { changeExpert } from '../reducers/expert/actions'
// 更换 医院
import { changeHospital } from '../reducers/hospital/actions'
import { changeBodyPositionOfList } from '../reducers/system/actions'

const { width, height } = Dimensions.get('window');

export default class ReservationVideo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: null,
    }
  }
  componentWillMount() {
    const { dispatch } = this.props

    NimFriend.startFriendList();
    dispatch(getExportList({hospitalId: 1001, deptCode: '001'}))
  }
  componentDidMount() {
    this.friendListener = NativeAppEventEmitter.addListener("observeFriend",(data)=>{

      // console.log("observeFriend", data)
    });
  }
  componentWillUnmount() {
    NimFriend.stopFriendList();
    this.friendListener && this.friendListener.remove();
  }

  /**
   * 更换医院
   */
  onPressHospital() {
    let { navigator } = this.props
    navigator.push({
      screen: `Koe.Hospital.List`,
      passProps: {
        onClose: (option) => {
          this.props.dispatch(changeHospital(option))
          this.props.navigator.pop()
        },
      }})
  }

  /**
   * 更换病种
   */
  onPressDiseaseSpecies() {
    let { navigator } = this.props
    navigator.push({
      screen: `Koe.System.DiseaseSpeciesList`,
      passProps: {
        onClose: (option) => {
          this.props.dispatch(diseaseSpeciesChange(option))
          this.props.navigator.pop()
        },
      }})
  }

  /**
   * 更换专家
   */
  onPressExpert() {
    let { navigator, self, dispatch } = this.props
    navigator.push({
      screen: `Koe.Expert.List`,
      passProps: {
        onClose: (option) => {
          const self = self.UserID
          const friend = option.UserID

          // 添加好友
          addFriendNetEase(self, friend)
            .then(res => {
              if(res.code === 200) {
                // 添加好友成功，修改专家信息
                dispatch(changeExpert(data))

              }
            })
          this.props.dispatch(changeExpert(option))
          this.props.navigator.pop()
        },
      }})
  }


  /**
   * 跳转到选择  部位 症状  的页面
   */
  onPressSymptom() {

    this.props.navigator.push({
      screen: 'Koe.System.SymptomList',
      title: '症状',
      passProps: {
        onClose: (option) => {

          this.props.dispatch(symptomChange(option))
          this.props.navigator.pop()
          this._routerToPathologicalCourseList() // ↓↓↓
        },
        bodyPositionChange: (option) => {
          this.props.dispatch(changeBodyPositionOfList(option))
        },
        changeBodyPositionOfList: (option) => {
          this.props.dispatch(changeBodyPositionOfList(option))
        }
      }
    })
  }

  /**
   * 跳转到 病理病程
   * @private
   */
  _routerToPathologicalCourseList() {

    this.props.navigator.push({
      screen: 'Koe.PathologicalList',
      title: '病理病程',
      passProps: {
        onClose: (option) => {
          this.props.dispatch(pathologicalCourseChange(option))
          this.props.navigator.pop()
          this._routerToComplication() // ↓↓↓
        },
      }
    })
  }

  /**
   * 跳转到 并发症
   * @private
   */
  _routerToComplication() {

    this.props.navigator.push({
      screen: 'Koe.Complication',
      title: '并发症',
      passProps: {
        onClose: (option) => {
          this.props.dispatch(complicationChange(option))
          this.props.navigator.pop()
        },
      }
    })
  }
  render() {
    let { complication, symptom, bodyPosition,
      pathologicalCourse, hospital, expert, diseaseSpecies } = this.props


    return(
      <Content>
        <List>
          <Item style={styles.listItem} onPress={() => this.onPressHospital()}>
            <Left style={{flexDirection: 'row'}}>
              <Text>医院：</Text>
              <Text style={{marginLeft: 10}}>{hospital && hospital.MerchantName}</Text>
            </Left>
            <Right><Icon name="chevron-right" type="EvilIcons"/></Right>
          </Item>
          <Item style={styles.listItem} onPress={() => this.onPressDiseaseSpecies()}>
            <Left style={{flexDirection: 'row'}}>
              <Text>病种：</Text>
              <Text style={{marginLeft: 10}}>{diseaseSpecies && diseaseSpecies.Illness_Name}</Text>
            </Left>
            <Right><Icon name="chevron-right" type="EvilIcons"/></Right>
          </Item>
          <Item style={styles.listItem} onPress={() => this.onPressExpert()}>
            <Left style={{flexDirection: 'row'}}>
              <Text>专家：</Text>
              <Text style={{marginLeft: 10}}>{expert && expert.UserName}</Text>
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
                itemName={pathologicalCourse && pathologicalCourse.ItemName}
              />
              <PathologicalCardItem
                itemTitle="并发症状"
                itemName={complication && complication.ItemName}
              />
            </View>
          </TouchableOpacity>
        </Card>
      </Content>
    )
  }
}


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
