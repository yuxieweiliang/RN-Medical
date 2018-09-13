import React, { Component } from 'react';
import { StyleSheet, Text, FlatList, ScrollView, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Content, List, Item, Left, Right, Tab, Tabs, Card, Row, Col, Icon } from 'native-base';
import { connect } from 'react-redux'
import CalendarStrip  from 'react-native-calendar-strip'
// import {  } from '../../reducers/consult/actions'
import moment from 'moment'

import { getExportList } from '../../reducers/expert/actions'
import ReservationVideo from '../ReservationVideo'
import RegistrationItem from '../../components/RegistrationItem'
import styles from './style'

/**
 * store
 */
import {initState, changeRegistrationTime} from '../../reducers/registration/actions'
import { changeExpert } from '../../reducers/expert/actions'
import { changeDepartment } from '../../reducers/department/actions'
import { changeHospital } from '../../reducers/hospital/actions'

const borderWidth = StyleSheet.hairlineWidth;


class Registration extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: null,
    }
  }
  componentWillMount() {
    const { dispatch, bodyPosition } = this.props
    if(!bodyPosition) {
      // 获取咨询的本地缓存
      this.props.dispatch(initState())
    }

    // 请求专家列表
    dispatch(getExportList({hospitalId: 1001, deptCode: '001'}))
  }

  /**
   * 修改预约时间
   * @param day
   */
  onDateSelected(day) {
    this.props.dispatch(changeRegistrationTime(moment(day).format('YYYY-MM-DD')))
  }

  // 选择医院
  selectHospital() {
    this.props.navigator.showModal({
      screen: 'Koe.HospitalList',
      title: '医院列表',
      passProps: {
        onClose: (option) => {
          this.props.dispatch(changeHospital(option))
          this.props.navigator.dismissModal()
        },
      },
    })
  }
  // 选择科室
  selectDepartment() {
    this.props.navigator.showModal({
      screen: 'Koe.DepartmentList',
      title: '科室列表',
      passProps: {
        onClose: (option) => {
          this.props.dispatch(changeDepartment(option))
          this.props.navigator.dismissModal()
        },
      },
    })
  }

  /**
   * 查看专家信息
   * @param data
   */
  showExportMessage(data) {

    this.props.dispatch(changeExpert(data))
    this.props.navigator.push({
      screen: 'Koe.Expert',
      title: '专家',
    })
  }

  /**
   * 预约专家
   * @private
   */
  _appointmentDoctor(option) {
    this.props.dispatch(changeExpert(option))
    this.props.navigator.push({
      screen: 'Koe.Registration.Information',
      /*navigatorStyle: {
        navBarHidden: true
      },*/
      passProps: {
        onClose: (option) => {
          this.props.navigator.dismissModal()
        },
      },
    })
    // this.props.navigator.push({screen: 'Koe.DepartmentList'})
  }
  render() {
    let { expertList, department, hospital }= this.props

    // registrationList = registrationList && registrationList.map(item => ({...item, key: item.UserName + item.ID}))
    // console.log(expertList)

    let customDatesStyles = [];
    let startDate = moment();
    for (let i = -7; i<12; i++) {
      customDatesStyles.push({
        startDate: startDate.clone().add(i, 'days'), // Single date since no endDate provided
        dateNameStyle: styles.someDateNameStyle,
        dateNumberStyle: styles.someDateNumberStyle, // Random color...
        dateContainerStyle: {backgroundColor: '#'+('#00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6)},
      });
    }

    return (
      <Container style={styles.container}>
        <Tabs initialPage={0}>
          <Tab heading="预约挂号">
            <Row style={{height: 40, paddingLeft: 10, paddingRight: 10,}}>
              <Item style={{height: 40, paddingRight: 10, flex: 1}} onPress={() => this.selectHospital()}>
                <Left style={{flexDirection: 'row'}}>
                  <Text>医院: </Text>
                  <Text style={{paddingLeft: 10}}>{hospital && hospital.MerchantName}</Text>
                </Left>
                <Icon name="chevron-down" type="EvilIcons"/>
              </Item>
              <Item style={{height: 40, paddingLeft: 10, flex: 1}} onPress={() => this.selectDepartment()}>
                <Left><Text>科室: {department && department.Dept_Name}</Text></Left>
                <Icon name="chevron-down" type="EvilIcons"/>
              </Item>
            </Row>
            <CalendarStrip
              // 每个按钮 从左到右依次出现的动画
              calendarAnimation={{type: 'sequence', duration: 30}}
              //
              daySelectionAnimation={{type: 'background', duration: 300, highlightColor: '#9265DC'}}
              // 头部年月的样式
              calendarHeaderStyle={{color: 'white'}}
              // 日期数字的颜色
              dateNumberStyle={{color: 'white'}}

              // 日历插件的背景色
              calendarColor={'#7743CE'}
              // 日期数字的颜色
              dateNameStyle={{color: 'white'}}
              // 两侧按钮的宽度
              iconContainer={{flex: 0.1}}
              maxDayComponentSize={40}
              innerStyle={{height: 120}}
              style={{paddingTop: 10, paddingBottom: 10, paddingLeft: 50}}
              // 不现实每一天的名字
              // showDayName={false}
              // 定义每一个日期按钮的颜色
              // customDatesStyles={customDatesStyles}
              onDateSelected={(e) => this.onDateSelected(e)}
            />
            <Content>
              {
                expertList && (
                  <List
                    dataArray={expertList}
                    renderRow={item => (
                      <RegistrationItem
                        item={item}
                        onPressItem={(option, time) => this._appointmentDoctor(item, time)}
                        onPressPic={() => this.showExportMessage(item)}
                      />
                    )}
                  />
                )
              }

            </Content>

          </Tab>
          <Tab heading="视频问诊" style={{height: 380}}>
            <ReservationVideo {...this.props}/>
            <TouchableOpacity
              style={{
                width: '100%',
                backgroundColor: '#5a75ff',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onPress={() => alert('预约')}>
              <Text style={{padding: 15, color: '#fff'}}>
                预约
              </Text>
            </TouchableOpacity>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const createState = function(state) {
  return ({
    ...state.registration,
    ...state.hospital,
    ...state.department,
    ...state.self,
    ...state.expert,
  })
}

export default connect(createState)(Registration)
