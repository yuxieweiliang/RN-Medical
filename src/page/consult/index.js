import React, { Component } from 'react';
import { Text, TouchableHighlight, ScrollView, View, TextInput, TouchableNativeFeedback, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import TabCardView from '../../../components/TabCardView/index'
import util from '../../util'
import styles from './style'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
// 操作动作
import userAction from '../../action/user'
import systemAction from '../../action/system'
import consultAction from '../../action/consult'



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
    ItemContent = util.typeOf(itemName, 'array')
      ? itemName.map((item, key) => createItem(itemName, key))
      : createItem(itemName)
  }

  return (
    <View style={styles.listChildItem}>
      <View style={{width: 100}}>
        <Text>{itemTitle}：</Text>
      </View>
      <View style={{}}>
        {ItemContent}
      </View>
    </View>
  )
}

class ConsultPage extends React.Component {
  /**
   * 检查是否登录
   * */
  async beforeMount() {
    let { dispatch, navigation, token, user } = this.props
    if(!token) {
      token = await dispatch(systemAction.loadToken())
    }

    if(token) {
      // 获取当前用户信息
      if(!user) {
        user = await dispatch(userAction.loadUser('322717145007458'))
      }

      dispatch(userAction.loadUser('322717145007458'))
      // 获取当前用户的咨询列表
      // dispatch(systemAction.getIllnessList({hospitalId: }))

      //
      /*dispatch(consultAction.getAdviceMessage({
        userId: '322717145007458',
        adviceId: '7ff26839b0cf4e0ea4e6c9f35fe15960',
        messageType: 'text'
      }))*/
    } else {
      navigation.navigate('Login')
    }
  }
  componentWillMount() {
    this.beforeMount()
  }

  componentDidMount() {}
  componentWillUnmount() {}

  leavingMessage() {
    const { navigation } = this.props
    navigation.navigate('GiftedChat')
  }

  getOptionOfKey(option, key1, key2) {
    if(option && option[key1]) {
      return  option[key1][key2]
    }
  }

  onPressItem(router) {
    let { navigation } = this.props
    navigation.navigate(router, {router: 'Consult'})
  }
  render() {
    let { consult, navigation } = this.props
    let { complication, symptom, position, pathological } = consult

    let hospitalName = this.getOptionOfKey(consult, 'hospital', 'MerchantName')
    let illnessName = this.getOptionOfKey(consult, 'illness', 'Illness_Name')
    let expertName = this.getOptionOfKey(consult, 'expert', 'UserName')

    return (
      <ScrollView style={styles.container}>

        <ConsultItem
          itemTitle="医院"
          itemName={hospitalName}
          onPress={() => this.onPressItem('HospitalList')}
        />
        <ConsultItem
          itemTitle="病种"
          itemName={illnessName}
          onPress={() => this.onPressItem('IllnessTypeList')}
        />
        <ConsultItem
          itemTitle="专家"
          itemName={expertName}
          onPress={() => this.onPressItem('ExpertList')}
        />


        <TouchableHighlight
          onPress={() => this.onPressItem('BodyParts')}
        >
          <Card title="症状"
                style={styles.listChildCard}>
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


              {
                [1,2,3].map(item => (
                  <View>
                    <Text>{item}</Text>
                  </View>
                ))
              }
            </View>
          </Card>
        </TouchableHighlight>




        <View style={{flexDirection: 'row', width, marginTop: 10}}>
          <Button style={{flex: 1}} onPress={() => this.leavingMessage()}>即时咨询</Button>
          <Button style={{flex: 1}}>视频问诊</Button>
        </View>
      </ScrollView>
    );
  }
}

ConsultPage.navigationOptions = ({ navigation, navigationOptions }) => {
  const { params } = navigation.state;
  const { headerLeft, headerRight, headerTitle } = navigationOptions
  return {
    headerLeft: headerLeft && headerLeft(navigation, navigationOptions),
    headerRight: headerRight && headerRight(navigation, navigationOptions),
    headerTitle: headerTitle && headerTitle(navigation, navigationOptions, title),
    // title: <View><Icon name="home"/><Text>咨询</Text></View>,
    // tabBarVisible: false,
  }
};
const createState = function(state) {
  return ({
    ...state.user.user,
    consult: state.user.consult,
  })
}

export default connect(createState)(ConsultPage)
//export default connect(state => ({...state.consult}))(ConsultPage)