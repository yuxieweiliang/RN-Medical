import React, { Component } from 'react';
import { Text, FlatList,ScrollView, View, Dimensions, TouchableHighlight } from 'react-native';
import styles from './style'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { connect } from 'react-redux'
const { width, height } = Dimensions.get('window');
import TabCardView from '../../../components/TabCardView/index'
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';
import ImagePicker from 'react-native-image-crop-picker';
LocaleConfig.locales['cn'] = {
  monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
  monthNamesShort: ['1.','2.','3','4','5','6','7.','8','9.','10.','11.','12.'],
  dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
  dayNamesShort: ['日','一','二','三','四','五','六']
};
LocaleConfig.defaultLocale = 'cn';

const navigation = ({ navigation : nav, navigationOptions: option }) => {
  const { headerLeft, headerRight, headerTitle } = option;
  return {
    headerLeft: headerLeft && headerLeft(nav, option),
    headerRight: headerRight && headerRight(nav, option),
    headerTitle: headerTitle && headerTitle(nav, option, '预约挂号'),
  }
};






class Appointment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: '2018-05-14',
      markedDates: {
        '2018-05-14': {selected: true, selectedColor: 'blue'},
        '2018-05-15': {selected: true, selectedColor: 'red'},
      }
    }
  }
  static navigationOptions = navigation

  componentDidMount() {}

  _onPressButton() {
    this.props.navigation.navigate('Product', {
      itemId: 87,
      otherParam: 'anything you want here',
    })
  }
  _onPressTabCardButton() {
    this.props.navigation.navigate('HospitalList', {
      otherParam: 'anything you want here',
    })
  }

  componentWillUnmount() {
    // this._onPressButton.remove();
  }
  calendarDayChange(day) {
    const { markedDates, dispatch } = this.props
    dispatch({
      type: 'CALENDAR',
      data: day
    })
  }
  render() {
    const { healthGuide, markedDates}= this.props
    const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
    const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
    const workout = {key:'workout', color: 'green'};

    return (
      <View style={styles.container}>
        <TabCardView {...healthGuide}>
          <View>
            <CalendarList
              horizontal={true}
              selected={this.state.selected}
              // 每次滑动一页
              pagingEnabled={true}
              // 是否有选中的日期
              markedDates={{[markedDates]: {selected: true, selectedColor: 'blue'}}}
              // 月份的格式
              monthFormat={'yyyy/MM'}
              // 当日期改变时
              onDayChange={(day)=>{console.log('day changed')}}
              onDayLongPress={(day) => {console.log('selected day', day)}}
              onDayPress={this.calendarDayChange.bind(this)}
            />
            <TouchableHighlight
              style={styles.touchButton}
              onPress={this._onPressTabCardButton.bind(this)}>
              <Text>预约</Text>
            </TouchableHighlight>
          </View>
          <Text>fdsa</Text>
          <Text>fda</Text>
        </TabCardView>
        <ScrollView>
          <FlatList
            data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}, {key: 'g'}, {key: 'h'}, {key: 'i'}]}
            renderItem={({item}) => (
              <View style={styles.list}>
                <View style={{flex: 1}}>
                  <Text>预约挂号：</Text>
                </View>
                <View style={{flex: 3}}>
                  <View>
                    <Text>陕西中医药大学附属医院</Text>
                  </View>
                  <View>
                    <Text>2014-11-08 何大夫 下午</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </ScrollView>
      </View>
    );
  }
}


const createState = function(state) {
  return ({...state.appointment})
}

export default connect(createState)(Appointment)
