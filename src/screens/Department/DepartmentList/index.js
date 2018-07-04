import React, { Component } from 'react'
import { Text, FlatList, ScrollView, View, Dimensions, TouchableHighlight } from 'react-native'
import styles from './style'
import { connect } from 'react-redux'
import { getDepartmentList } from '../../../reducers/department/actions'
import { getHospital } from '../../../reducers/hospital/actions'
import Search from '../../../components/Search'
import Card from '../../../components/Card'

const TITLE = '科室列表'
const { width, height } = Dimensions.get('window')

class DepartmentList extends React.Component {
  constructor(props) {
    super(props)
    // 添加页面名称
    this.props.navigator.setTitle({
      title: TITLE // the new title of the screen as appears in the nav bar
    });
  }

  componentWillMount() {
    const { dispatch } = this.props
    // 获取科室列表
    dispatch(getDepartmentList({hospitalId: 1001}))
    // 获取默认医院
    // dispatch(getHospital({hospitalId: 1001}))

  }
  componentDidMount() {}
  componentWillUnmount() {}

  _onPressTabCardButton() {
    this.props.navigator.push({screen: 'Koe.ExpertList'})
  }
  render() {
    const { departmentList, hospital, navigation }= this.props

    const list = departmentList ? departmentList.map((item, i) => ({...item, key: item.Dept_Name+i})) : false

    console.log('departmentList', this.props)
    return (
      <ScrollView style={styles.container}>
        {/*<Search/>*/}

        {/*<TouchableHighlight onPress={() => navigation.navigate('HospitalList', {router: 'HospitalList'})}>
          <View style={styles.hospital}>
            <View style={{ flex: 2, height: 40, justifyContent: 'center'}}>
              <Text>{hospital && hospital.MerchantName}</Text>
            </View>
            <View style={{ flex: 1, height: 40, justifyContent: 'center', alignItems: 'flex-end'}}>
              <Text>》</Text>
            </View>
          </View>
        </TouchableHighlight>*/}

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


const createState = function(state) {
  return ({
    ...state.department,
    ...state.hospital
  })
}

export default connect(createState)(DepartmentList)
