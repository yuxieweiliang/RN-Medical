import React, { Component } from 'react';
import { Text, TouchableHighlight, ScrollView, View, TextInput, TouchableNativeFeedback, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import TabCardView from '../../../components/TabCardView/index'
import styles from './style'
import Button from '../../../components/Button'
// 操作动作
import userAction from '../../action/user'
import systemAction from '../../action/system'
import consultAction from '../../action/consult'



const title = '咨询'
const { width, height } = Dimensions.get('window');


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
      if(!user) {
        user = await dispatch(userAction.loadUser('322717145007458'))
      }
      // 获取当前用户的咨询列表
      dispatch(consultAction.getConsultList(user.UserID))
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
  render() {
    const tabItemStyle= {width, height: 200, padding: 15}

    console.log(this.props)
    return (
      <ScrollView style={styles.slide1}>

        <TouchableNativeFeedback
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('HospitalList')}
        >
          <View style={{width, height: 50, flexDirection: 'row', backgroundColor: '#fff',alignItems: 'center', paddingLeft: 15, paddingRight: 15, borderBottomWidth: 1, borderColor: '#ccc'}}>
            <Text>医院：</Text>
            <Text style={{flex:1}}>西京医院</Text>
            <Text>》</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('IllnessTypeList')}
        >
          <View style={{width, height: 50, flexDirection: 'row', backgroundColor: '#fff',alignItems: 'center', paddingLeft: 15, paddingRight: 15, borderBottomWidth: 1, borderColor: '#ccc'}}>
            <Text>病种：</Text>
            <Text style={{flex:1}}>心脑血管疾病</Text>
            <Text>》</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('ExpertList')}
        >
          <View style={{width, height: 50, flexDirection: 'row', backgroundColor: '#fff',alignItems: 'center', paddingLeft: 15, paddingRight: 15, borderBottomWidth: 1, borderColor: '#ccc'}}>
            <Text>专家：</Text>
            <Text style={{flex:1}}>张三</Text>
            <Text>》</Text>
          </View>
        </TouchableNativeFeedback>


        <View style={{width, height: 200}}>
          <TouchableNativeFeedback
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('BodyParts')}
          >
            <View style={{width, height: 50, flexDirection: 'row', backgroundColor: '#fff',alignItems: 'center', paddingLeft: 15, paddingRight: 15, borderBottomWidth: 1, borderColor: '#ccc'}}>
              <Text>症状</Text>
              <Text style={{flex:1}}/>
            </View>
          </TouchableNativeFeedback>
          <View style={{padding: 15}}>
            <View>
              <Text>症状一：fdsafdsafdsa</Text>
            </View>
            <View>
              <Text>症状一：fdsafdsafdsa,fdsafdsa</Text>
            </View>
            <View>
              <Text>症状一：fdsafdsafdsafdsafdsafdsafdsafdsa</Text>
            </View>
            <View>
              <Text>症状一：fdsafdsafds</Text>
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', width}}>
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
    ...state.consult,
  })
}

export default connect(createState)(ConsultPage)
//export default connect(state => ({...state.consult}))(ConsultPage)