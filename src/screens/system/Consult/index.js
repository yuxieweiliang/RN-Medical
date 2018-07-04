import React, { Component } from 'react';
import { Text, TouchableHighlight, ScrollView, View, TextInput,
  TouchableNativeFeedback, Dimensions, NativeAppEventEmitter } from 'react-native';
import { connect } from 'react-redux'
import { typeOf } from '../../../utils'
import styles from './style'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
import { initState } from '../../../reducers/consult/actions'
import { registerNetEase } from '../../../reducers/app/actions'
// 操作动作
 import { NimSession, NimFriend } from 'react-native-netease-im';



const title = '咨询'
const { width, height } = Dimensions.get('window');


const ConsultItem = ({itemTitle, itemName, onPress}) => (
  <TouchableNativeFeedback
    title="Go to Details"
    onPress={onPress}
  >
    <View style={styles.listItem}>
      <Text>{itemTitle}：</Text>
      <Text style={{flex:1}}>{itemName}</Text>
      <Text>》</Text>
    </View>
  </TouchableNativeFeedback>
)

const PathologicalCardItem = ({itemTitle, itemName}) => {
  let ItemContent = null
  let createItem = (text, key) => (
    <View style={styles.listChildRight} key={key}>
      <Text style={styles.listChildRightTextColor}>
        {text}
      </Text>
    </View>
  )

  if(itemName) {
    ItemContent = typeOf(itemName, 'array')
      ? itemName.map((item, key) => createItem(itemName, key))
      : createItem(itemName)
  }

  return (
    <View style={styles.listChildItem}>
      <View style={{width: 100}}>
        <Text>{itemTitle}：</Text>
      </View>
      <View style={{height: 30}}>
        {ItemContent}
      </View>
    </View>
  )
}

class ConsultPage extends React.Component {
  /**
   * 检查是否登录
   * */
  componentWillMount() {
    let { dispatch, navigator, token, user } = this.props
    dispatch(initState())
    NimFriend.startFriendList();
  }

  componentDidMount() {
    this.friendListener = NativeAppEventEmitter.addListener("observeFriend",(data)=>{
      this.setState({friend: data})
      console.log('observeFriend', data)
    });
  }
  componentWillUnmount() {
    NimFriend.stopFriendList();
    this.friendListener && this.friendListener.remove();
  }

  leavingMessage() {
    const { navigator } = this.props
    let bool = true;
    for(let i in this.state.friend) {
      if(bool) {
        navigator.push({
          screen:'Koe.Chat',
          title:this.state.friend[i][0].name,
          passProps:{
            session: {
              ...this.state.friend[i][0],
              sessionType:'1'
            }
          },
          rightButton:{
            id: 'setting',
            color: '#fff',
            buttonColor:'#fff',
            title:'设置'
          }
        });
        console.log('observeFriend', this.state.friend[i][0])
        bool = false
      }
    }
    /*navigator.push({
      screen:"Koe.FriendList",
      title:'朋友'
    });*/
    // navigator.push({screen: 'Koe.Chat'})
  }

  onPressItem(router) {
    let { navigator } = this.props
    navigator.push({
      screen: router,
      passProps: {
        router: 'pop'
      }})
  }
  leavingVideo() {
    const { navigator } = this.props
    navigator.push({screen: 'Koe.InterrogationVideo'})
  }
  render() {
    let { complication, symptom, position,
      pathological, hospital, expert, illness } = this.props

    return (
      <ScrollView style={styles.container}>

        <ConsultItem
          itemTitle="医院"
          itemName={hospital && hospital.MerchantName}
          onPress={() => this.onPressItem('Koe.HospitalList')}
        />
        <ConsultItem
          itemTitle="病种"
          itemName={illness && illness.Illness_Name}
          onPress={() => this.onPressItem('Koe.IllnessTypeList')}
        />
        <ConsultItem
          itemTitle="专家"
          itemName={expert && expert.UserName}
          onPress={() => this.onPressItem('Koe.ExpertList')}
        />


        <Card title="症状"
              onPress={() => this.onPressItem('Koe.BodyParts')}
              style={styles.listChildCard}>
          <TouchableHighlight
            onPress={() => this.onPressItem('Koe.BodyParts')}>
            <View style={{padding: 15}}>

              <PathologicalCardItem
                itemTitle="身体部位"
                itemName={position && position.ItemName}
              />
              <PathologicalCardItem
                itemTitle="状态症状"
                itemName={symptom && symptom.ItemName}
              />
              <PathologicalCardItem
                itemTitle="病例病程"
                itemName={complication && complication.ItemName}
              />
              <PathologicalCardItem
                itemTitle="并发症状"
                itemName={pathological && pathological.ItemName}
              />
            </View>
          </TouchableHighlight>
        </Card>
        <View style={{flexDirection: 'row', width, marginTop: 10}}>
          <Button style={{flex: 1}} onPress={() => this.leavingMessage()}>即时咨询</Button>
          <Button onPress={() => this.leavingVideo()} style={{flex: 1}}>视频问诊</Button>
        </View>
      </ScrollView>
    );
  }
}

/*ConsultPage.navigationOptions = ({ navigation, navigationOptions }) => {
  const { params } = navigation.state;
  const { headerLeft, headerRight, headerTitle } = navigationOptions
  return {
    headerLeft: headerLeft && headerLeft(navigation, navigationOptions),
    headerRight: headerRight && headerRight(navigation, navigationOptions),
    headerTitle: headerTitle && headerTitle(navigation, navigationOptions, title),
    // title: <View><Icon name="home"/><Text>咨询</Text></View>,
    // tabBarVisible: false,
  }
};*/
const createState = function(state) {
  return ({
    ...state.user,
    ...state.consult,
  })
}

export default connect(createState)(ConsultPage)
//export default connect(state => ({...state.consult}))(ConsultPage)