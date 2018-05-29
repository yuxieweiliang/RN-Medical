import React, { Component } from 'react'
import { Text, FlatList, ScrollView, View, Dimensions, TouchableHighlight } from 'react-native'
import styles from './style'
import { connect } from 'react-redux'
import departmentAction from '../../action/department'
import hospitalAction from '../../action/hospital'
import Search from '../../../components/Search'
import Card from '../../../components/Card'

const TITLE = '科室列表'
const { width, height } = Dimensions.get('window')

class Appointment extends React.Component {

  componentWillMount() {
    const { dispatch } = this.props
    // 获取科室列表
    dispatch(departmentAction.getDepartmentList({hospitalId: 1001}))
    // 获取默认医院
    dispatch(hospitalAction.getHospital({hospitalId: 1001}))

  }
  componentDidMount() {}
  componentWillUnmount() {}

  _onPressButton() {
    this.props.navigation.navigate('Product', {
      itemId: 87,
    })
  }
  _onPressTabCardButton() {
    this.props.navigation.navigate('ExpertList', {
      otherParam: 'anything you want here',
    })
  }
  render() {
    const { departmentList, hospital, navigation }= this.props

    const list = departmentList ? departmentList.map((item, i) => ({...item, key: item.Dept_Name+i})) : false

    console.log('departmentList', this.props)
    return (
      <ScrollView style={styles.container}>
        <Search/>

        <TouchableHighlight onPress={() => navigation.navigate('HospitalList', {router: 'HospitalList'})}>
          <View style={styles.hospital}>
            <View style={{ flex: 2, height: 40, justifyContent: 'center'}}>
              <Text>{hospital && hospital.MerchantName}</Text>
            </View>
            <View style={{ flex: 1, height: 40, justifyContent: 'center', alignItems: 'flex-end'}}>
              <Text>》</Text>
            </View>
          </View>
        </TouchableHighlight>

        <Card title="科室列表">
          {
            list && (
              <FlatList
                data={list}
                renderItem={({item}) => {
                  console.log(item)
                  return (
                    <TouchableHighlight onPress={() => this._onPressTabCardButton()}>
                      <View style={styles.list}>
                        <View style={{flex: 1}}>
                          <Text style={{fontSize: 16, color: '#333'}}>
                            {item.Dept_Name}
                          </Text>
                        </View>
                        <View style={{flex: 3, flexDirection: 'row', }}>
                          <View>
                            <Text>医院地址: 西安市/陕西省/霸王区/菜市场</Text>
                          </View>
                        </View>
                      </View>
                    </TouchableHighlight>
                  )
                }}
              />
            )
          }
        </Card>
      </ScrollView>
    );
  }
}


Appointment.navigationOptions = ({ navigation : nav, navigationOptions: option }) => {
  const { headerLeft, headerRight, headerTitle } = option;
  return {
    headerTitle: function() {
      return (
        <View style={{width: width - 120, height: 50, alignItems: 'center', justifyContent: 'center',}}>
          <Text style={{fontSize: 20}}>{TITLE}</Text>
          {/*<TextInput underlineColorAndroid="transparent"
           style={{fontSize: 20, width: width - 120, height: 40, alignItems: 'center', justifyContent: 'center',backgroundColor: '#ccc', borderRadius: 8}}
           placeholder="医院列表"/>*/}
        </View>
      )
    },
    /*headerRight: <View style={{width: 60, height: 50, alignItems: 'center', justifyContent: 'center',}}>
     <Text>搜索</Text>
     </View>*/
  }
};

const createState = function(state) {
  return ({
    ...state.hospital.department,
    ...state.hospital.hospital
  })
}

export default connect(createState)(Appointment)
