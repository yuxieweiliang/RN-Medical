import React, { Component } from 'react'
import { FlatList, ScrollView, View, Dimensions, TouchableHighlight } from 'react-native'
import { Container, Content, List, Item, Left, Right, Tab, Tabs, Card, CardItem, Text, Header, Title, Body, Icon, Button } from 'native-base';
import styles from './style'
import { connect } from 'react-redux'
import { getDepartmentList } from '../../../reducers/department/actions'
import { getHospital } from '../../../reducers/hospital/actions'
import Search from '../../../components/Search'

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

  _onPressDepartmentItem(item) {

    this.props.onClose(item)

    console.log(item)

    /*this.props.dispatch({
      type: 'change_registration_item',
      data: {
        key: 'department',
        value: item
      }
    })*/
    /*

    this.props.navigator.push({screen: 'Koe.ExpertList'})*/
  }
  render() {
    const { departmentList, hospital, navigation }= this.props

    const list = departmentList ? departmentList.map((item, i) => ({...item, key: item.Dept_Name+i})) : false
    console.log(this.props)
    return (
      <Container style={styles.container}>
        {/*<Search/>*/}
        {
          list && (
            <FlatList
              data={list}
              renderItem={({item}) => {
                return (
                  <TouchableHighlight
                    onPress={() => this._onPressDepartmentItem(item)}>
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
      </Container>
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
