import React, { Component } from 'react';
import { Text, Image,ScrollView, View, Dimensions, TouchableHighlight, TextInput, FlatList } from 'react-native';
import styles from './style'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { connect } from 'react-redux'
import TabCardView from '../../../components/TabCardView/index'
import expertAction from '../../action/expert'

const TITLE = '专家列表'
const { width, height } = Dimensions.get('window');

class ExpertList extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props
    dispatch(expertAction.getExpertList({hospitalId: 1001, deptCode: '001'}))
  }
  componentDidMount() {}
  componentWillUnmount() {}

  _onPressExpertList(option) {

    console.log('doctor', option)
    this.props.navigation.navigate('ExpertHome', {
      doctor: option,
    })
  }
  render() {
    let { expertList }= this.props
    expertList = expertList && expertList.map(item => ({...item, key: item.UserName + item.UserID}))
    console.log()

    return (
      <ScrollView style={styles.container}>
        <View style={{width, height: 60, justifyContent: 'center', alignItems: 'center'}}>
          <TextInput underlineColorAndroid="transparent"
                     style={styles.search}
                     placeholder="专家列表"/>
        </View>
        <FlatList
          data={expertList}
          renderItem={({item}) => (
            <TouchableHighlight onPress={() => this._onPressExpertList(item)}>
              <View style={styles.list}>
                <View style={{flex: 1}}>
                  <Image style={{width: '100%', height: 100}} source={require('../../../assets/images/a3.jpg')}/>
                </View>
                <View style={{flex: 4, paddingLeft: 15 }}>
                  <View>
                    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#111'}}>{item.UserName}</Text>
                  </View>
                  <View>
                    <Text style={{fontSize: 16,color: '#333'}}>
                      下面是一个较复杂的例子，演示了利用Pure，来进一步优化性能和减少bug产生的可能。
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', paddingTop: 10}}>
                    <View style={{flex: 1}}>
                      <View style={{backgroundColor: 'blue', borderRadius: 4, alignItems: 'center', justifyContent: 'center', padding: 4}}>
                        <Text style={{color: '#fff', }}>可预约</Text>
                      </View>
                    </View>
                    <View style={{flex: 4, paddingTop: 4, paddingLeft: 15}}>
                      <Text>医院地址: 西安市/陕西省/霸王区/菜市场</Text>
                    </View>

                  </View>
                </View>
              </View>
            </TouchableHighlight>
          )}
        />
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
  return ({...state.hospital.expert})
}

export default connect(createState)(ExpertList)
