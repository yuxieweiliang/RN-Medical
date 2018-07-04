import React, { Component } from 'react';
import { Text, FlatList,ScrollView, View, Dimensions, TouchableHighlight } from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { connect } from 'react-redux'
import TabCardView from '../../components/TabCardView/index'
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';
import { getRegistration } from '../../reducers/registration/actions'
import styles from './style'

LocaleConfig.locales['cn'] = {
  monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
  monthNamesShort: ['1.','2.','3','4','5','6','7.','8','9.','10.','11.','12.'],
  dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
  dayNamesShort: ['日','一','二','三','四','五','六']
};
LocaleConfig.defaultLocale = 'cn';

const TITLE = '预约挂号'
const { width, height } = Dimensions.get('window');

class Registration extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: null,
    }
  }
  componentWillMount() {
    const { dispatch } = this.props
    dispatch(getRegistration({start: '2018-05-18 00:00', end: '2018-05-29 23:59'}))
  }
  componentDidMount() {}
  componentWillUnmount() {}

  _appointmentDoctor() {
    this.props.navigator.push({screen: 'Koe.DepartmentList'})
  }

  calendarDayChange(data) {
    const {  dispatch } = this.props
  }
  render() {
    let { healthGuide, appointTime, registrationList }= this.props

    registrationList = registrationList && registrationList.map(item => ({...item, key: item.UserName + item.ID}))

    return (
      <ScrollView style={styles.container}>
        <Tabs initialPage={0}>
          <Tab heading="预约挂号" style={{height: 380}}>
            <View style={{height: 380}}>
              <CalendarList
                horizontal={true}
                // 每次滑动一页
                pagingEnabled={true}
                // 是否有选中的日期
                markedDates={{[appointTime]: {selected: true, selectedColor: 'blue'}}}
                // 月份的格式
                monthFormat={'yyyy/MM'}
                // 当日期改变时
                onDayPress={(e) => this.calendarDayChange(e)}
              />
              <TouchableHighlight
                style={styles.touchButton}
                onPress={() => this._appointmentDoctor()}>
                <Text>预约</Text>
              </TouchableHighlight>
            </View>
          </Tab>
          <Tab heading="视频问诊" style={{height: 380}}>
            <Text>fdsa</Text>
          </Tab>
          <Tab heading="预约床位" style={{height: 380}}>
            <Text>fda</Text>
          </Tab>
        </Tabs>

        <View>
          <FlatList
            data={registrationList}
            renderItem={({item}) => (
              <View style={styles.list}>
                <View style={{flex: 1}}>
                  <Text>预约挂号：</Text>
                </View>
                <View style={{flex: 3}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{flex: 2}}>{item.Reg_MerchantName}</Text>
                    <Text style={{flex: 1}}>{item.Reg_Dept_Name}</Text>
                  </View>
                  <View>
                    <Text>{item.Reg_VisitTime} {item.Reg_Doc_Title} 下午</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    );
  }
}


Registration.navigationOptions = ({ navigation : nav, navigationOptions: option }) => {
  const { headerLeft, headerRight, headerTitle } = option;
  return {
    headerLeft: headerLeft && headerLeft(nav, option),
    headerRight: headerRight && headerRight(nav, option),
    headerTitle: headerTitle && headerTitle(nav, option, TITLE),
  }
};
const createState = function(state) {
  return ({
    ...state.registration
  })
}

export default connect(createState)(Registration)
