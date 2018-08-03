import React, { Component } from 'react';
import { Text, Image,ScrollView, View, Dimensions, TouchableHighlight, NativeAppEventEmitter, FlatList } from 'react-native';
import styles from './style'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {NimFriend, NimUtils, NimSession} from 'react-native-netease-im';
import { connect } from 'react-redux'
import Card from '../../../components/Card'
import TabCardView from '../../../components/TabCardView/index'
import { establishUsnPsw } from '../../../utils'
import { getExportList, changeExport } from '../../../reducers/expert/actions'
import { addFriendNetEase } from '../../../reducers/app/actions'

const TITLE = '专家列表'
const { width, height } = Dimensions.get('window');

class ExpertList extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props

    NimFriend.startFriendList();
    dispatch(getExportList({hospitalId: 1001, deptCode: '001'}))
  }
  componentDidMount() {
    this.friendListener = NativeAppEventEmitter.addListener("observeFriend",(data)=>{

      console.log("observeFriend", data)
    });

  }
  componentWillUnmount() {
    NimFriend.stopFriendList();
    this.friendListener && this.friendListener.remove();
  }

  async _onPressExpertList(option) {
    const { navigator, dispatch, router, user }= this.props
    const data = { key: 'expert', value: option }


    if(router === 'pop') {
      const self = user.UserID
      const friend = option.UserID

      // console.log(user.UserID, option.UserID)
      // 添加好友
      addFriendNetEase(self, friend)
        .then(res => {

          console.log('添加好友', res)
          if(res.code === 200) {
            // 添加好友成功，可以去 export 获取当前医生的信息
            dispatch({type: 'CHANGE_CONSULT_ITEM', data: data})

            console.log('export: ',data)

            dispatch(changeExport(data))

          }
        })

      navigator.pop()
    } else {

      console.log(option)
      this.props.dispatch({
        type: 'change_registration_item',
        data: {
          key: 'expert',
          value: option
        }
      })



      navigator.push({
        screen: 'Koe.ExpertHome',
        passProps: {
          doctor: option,
        }})
    }
  }
  render() {
    let { expertList }= this.props
    expertList = expertList && expertList.map(item => ({...item, key: item.UserName + item.UserID}))


    return (
      <ScrollView style={styles.container}>
        {/*<View style={{width, height: 60, justifyContent: 'center', alignItems: 'center'}}>
         <TextInput underlineColorAndroid="transparent"
         style={styles.search}
         placeholder="专家列表"/>
         </View>*/}
        <Card title="专家列表">
          <FlatList
            data={expertList}
            renderItem={({item}) => (
              <TouchableHighlight onPress={() => this._onPressExpertList(item)}>
                <View style={styles.list}>
                  <View style={{flex: 1}}>
                    <Image style={{width: '100%', height: 100}} source={require('../../../../assets/images/a3.jpg')}/>
                  </View>
                  <View style={{flex: 4, paddingLeft: 15 }}>
                    <View>
                      <Text style={{fontSize: 18, fontWeight: 'bold', color: '#111'}}>{item.UserName}</Text>
                    </View>
                    <View>
                      <Text style={{fontSize: 16,color: '#333'}}>
                        这里写医生的自我简介
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', paddingTop: 10}}>
                      <View style={{flex: 1}}>
                        <View style={{backgroundColor: 'blue', borderRadius: 4, alignItems: 'center', justifyContent: 'center', padding: 4}}>
                          <Text style={{color: '#fff', }}>可预约</Text>
                        </View>
                      </View>
                      <View style={{flex: 4, paddingTop: 4, paddingLeft: 15}}>
                        <Text>这里些医生的级别</Text>
                      </View>

                    </View>
                  </View>
                </View>
              </TouchableHighlight>
            )}
          />
        </Card>
      </ScrollView>



    );
  }
}

ExpertList.navigationOptions = ({ navigation : nav, navigationOptions: option }) => {
  const { headerLeft, headerRight, headerTitle } = option;
  return {
    headerTitle: function() {
      return (
        <View style={{width: width - 120, height: 50, alignItems: 'center', justifyContent: 'center',}}>
          <Text style={{fontSize: 20}}>{TITLE}</Text>
        </View>
      )
    },
    headerRight: <View style={{width: 60, height: 50, alignItems: 'center', justifyContent: 'center',}}>
      <Text>
        搜索
      </Text>
    </View>
  }
};

const createState = function(state) {
  return ({...state.expert, ...state.user})
}

export default connect(createState)(ExpertList)
