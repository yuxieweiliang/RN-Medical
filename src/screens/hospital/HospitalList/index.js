import React, { Component } from 'react'
import { Text, FlatList, ScrollView, View, Dimensions, TouchableHighlight, TextInput } from 'react-native'
import styles from './style'
import { connect } from 'react-redux'
const { width, height } = Dimensions.get('window')
import { getHospitalList } from '../../../reducers/hospital/actions'


class HospitalList extends React.Component {

  componentWillMount() {
    const { dispatch } = this.props
    dispatch(getHospitalList())
  }
  componentDidMount() {}
  componentWillUnmount() {}

  _onPressHospitalList(hospital) {
    const { navigator, dispatch, router }= this.props
    dispatch({
      type: 'CHANGE_CONSULT_ITEM',
      data: {
        key: 'hospital',
        value: hospital
      }
    })
    // 咨询
    if(router === 'pop') {
      navigator.pop()
    } else {
      navigator.push({
        screen: 'ExpertList',
        passProps: {
          hospital,
        }})
    }
  }
  createHospitalList(item) {
    console.log(item)
    return item.map((item, i) => ({
      key: item.MerchantName + i,
      ...item
    }))
  }
  render() {
    let { hospitalList, navigation }= this.props
    hospitalList = hospitalList && this.createHospitalList(hospitalList)
    return (

      <ScrollView style={styles.container}>
        <View style={{width, height: 60, justifyContent: 'center', alignItems: 'center'}}>
          <TextInput underlineColorAndroid="transparent"
                     style={{fontSize: 20, width: width - 120, height: 40, alignItems: 'center', justifyContent: 'center',backgroundColor: '#ccc', borderRadius: 8}}
                     placeholder="医院列表"/>
        </View>
        <FlatList
          data={hospitalList}
          renderItem={({item}) => (
            <TouchableHighlight onPress={() => this._onPressHospitalList(item)}>
              <View style={styles.list}>
                <View style={{flex: 1}}>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: '#333'}}>{item.MerchantName}</Text>
                </View>
                <View style={{flex: 3, flexDirection: 'row', }}>
                  <View>
                    <Text>医院地址: 西安市/陕西省/霸王区/菜市场</Text>
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

HospitalList.navigationOptions = ({ navigation : nav, navigationOptions: option }) => {
  const { headerLeft, headerRight, headerTitle } = option;
  return {
    headerTitle: function() {
      return (
        <View style={{width: width - 120, height: 50, alignItems: 'center', justifyContent: 'center',}}>
          <Text style={{fontSize: 20}}>医院列表</Text>
          {/*<TextInput underlineColorAndroid="transparent"
           style={{fontSize: 20, width: width - 120, height: 40, alignItems: 'center', justifyContent: 'center',backgroundColor: '#ccc', borderRadius: 8}}
           placeholder="医院列表"/>*/}
        </View>
      )
    },
    headerRight: <View style={{width: 60, height: 50, alignItems: 'center', justifyContent: 'center',}}>
      <Text>搜索</Text>
    </View>
  }
};

const createState = function(state) {
  return ({...state.hospital})
}

export default connect(createState)(HospitalList)
