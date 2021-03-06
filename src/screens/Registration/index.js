import React, { Component } from 'react';
import { Container, Content, Text, List, Item, Left, Right, Button, Tabs, Card, Row, Col, Icon } from 'native-base';
import CalendarStrip  from 'react-native-calendar-strip'
import { connect } from 'react-redux'
import moment from 'moment'

import behavior from './behavior'
import HeaderView from '../../components/HeaderView'
import { getExportList } from '../../reducers/expert/actions'
import RegistrationItem from '../../components/RegistrationItem'

import { initState, changeRegistrationTime, getDoctorScheduleList } from '../../reducers/registration/actions'
import { changeExpert } from '../../reducers/expert/actions'
import { changeDepartment } from '../../reducers/department/actions'
import { changeHospital } from '../../reducers/hospital/actions'

import styles from './style'


class Registration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: null,
    }
  }
  componentWillMount() {
    const { dispatch, bodyPosition } = this.props

    // 请求专家列表
    dispatch(getExportList({hospitalId: 1001, deptCode: '001'}))
    dispatch(getDoctorScheduleList(1001, '001'))
  }

  /**
   * 修改预约时间
   * @param day
   */
  onDateSelected(day) {}

  // 选择医院
  selectHospital() {
    this.props.navigator.showModal({
      screen: 'Koe.Hospital.List',
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
      screen: 'Koe.Department.List',
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
  _appointmentDoctor(option, Doctor, time) {

    console.log(option, Doctor)
    this.props.dispatch(changeExpert(Doctor))
    this.props.dispatch(changeRegistrationTime(option, time))

    // 预约视频
    this.registrationVideo()
    // this.props.navigator.push({screen: 'Koe.DepartmentList'})
  }

  registration() {
    let {appointDate, hospital, department, expert, user} = this.props

    // 如果验证不通过
    if(! behavior._verifyRegistration(appointDate, hospital, department, expert)) {
      return;
    }

    // 进入预约页面
    this.props.navigator.push({
      screen: 'Koe.Registration.Information',
      /*navigatorStyle: {
       navBarHidden: true
       },*/
      passProps: {
        onClose: (option) => {
          // 返回
          this.props.navigator.pop();
        },
      },
    })
  }
  registrationVideo() {
    let {appointDate, hospital, department, expert, user} = this.props

    console.log(this.props)
    // 如果验证不通过
    if(! behavior._verifyRegistration(appointDate, hospital, department, expert)) {
      return;
    }

    // this.props.dispatch(postRegistration({ appointTime, user, hospital, department, expert }))
      this.props.navigator.push({
        screen: 'Koe.Registration.Information',
        /*navigatorStyle: {
         navBarHidden: true
         },*/
        passProps: {
          onClose: (option) => {
            // 返回
            this.props.navigator.pop();
          },
        },
      })
  }

  render() {
    let { expertList, department, hospital, schedulingList }= this.props

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

        <HeaderView
          {...this.props}
          avatar={require('../../../assets/images/a3.jpg')}
          title="康恩"
        />


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
          // 点击日期每一天时调用
          // onDateSelected={(e) => this.onDateSelected(e)}
        />
        <Content>
          {
            schedulingList && (
              <List
                dataArray={schedulingList}
                renderRow={(item,) => (
                  <RegistrationItem
                    item={item}
                    onPressItem={(option, time) => this._appointmentDoctor(option, item.Doctor, time)}
                    onPressPic={() => this.showExportMessage(item)}
                  />
                )}
              />
            )
          }
          {/*<Item style={{flex: 1, padding: 10}}>
            <Left style={{flex: 1, padding: 5}}>
              <Button full onPress={() => this.registration()}><Text>预约挂号</Text></Button>
            </Left>
            <Right style={{flex: 1, padding: 5}}>
              <Button full onPress={() => this.registrationVideo()}><Text>预约视频</Text></Button>
            </Right>
          </Item>*/}
        </Content>

      </Container>
    );
  }
}

const createState = function(state) {
  return ({
    ...state.registration,
    ...state.hospital,
    ...state.department,
    ...state.user,
    ...state.expert,
  })
}

export default connect(createState)(Registration)
