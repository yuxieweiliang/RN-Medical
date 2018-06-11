import React, { Component } from 'react';
import { Text, Image,ScrollView, View, Dimensions, TouchableHighlight, TextInput, FlatList } from 'react-native';
import styles from './style'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { connect } from 'react-redux'
import TabCardView from '../../../components/TabCardView/index'
import systemAction from '../../action/system'
import expertAction from '../../action/expert'

const TITLE = '专家列表'
const { width, height } = Dimensions.get('window');

class ExpertList extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props
    dispatch(systemAction.illnessList({hospitalId: 1001}))
  }
  componentDidMount() {}
  componentWillUnmount() {}

  _onPressList(option) {
    const { navigation, dispatch } = this.props
    let router = navigation.getParam('router')
    console.log(option)

    dispatch({
      type: 'CHANGE_CONSULT_ITEM',
      data: {
        key: 'illness',
        value: option
      }
    })
    if(router === 'Consult') {
      navigation.goBack()
    } else {
      this.props.navigation.navigate('ExpertHome', {
        doctor: option,
      })
    }
  }
  render() {
    let { illnessList }= this.props
    illnessList = illnessList && illnessList.map(item => ({...item, key: item.Illness_Name + item.ID}))

    return (
      <ScrollView style={styles.container}>
        <View style={{width, height: 60, justifyContent: 'center', alignItems: 'center'}}>
          <TextInput underlineColorAndroid="transparent"
                     style={styles.search}
                     placeholder="专家列表"/>
        </View>
        <FlatList
          data={illnessList}
          renderItem={({item}) => (
            <TouchableHighlight onPress={() => this._onPressList(item)}>
              <View style={styles.list}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#111'}}>{item.Illness_Name}</Text>
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
  return ({...state.system})
}

export default connect(createState)(ExpertList)
