import React, { Component } from 'react';
import {  TouchableOpacity, View,  Dimensions  } from 'react-native';
import {Container, Icon, Item, Text, Button, Right, Left} from 'native-base';
import { Agenda } from 'react-native-calendars'
import styles from './style'
const { width, height } = Dimensions.get('window');


/**
 * 健康状况
 * @param healthStatus
 * @param style
 * @param navigator
 */
export default class HealthStatus extends Component{
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  loadItems(day) {
    const { healthStatus, style, navigator } = this.props

    // 组装一个月的数据
    const newItems = {};

    healthStatus.map(item => {
      if(!newItems[item.time]) {
        newItems[item.time] = [];
      }
      newItems[item.time].push(item)
    })

    this.setState({
      items: newItems
    });
  }

  renderItem(item, isFirst) {
    const style = isFirst ? {marginTop: 10} : {borderTopWidth: 1, borderTopColor: '#ccc'}
    console.log(item, this.props)
    return (
      <TouchableOpacity
        style={[styles.item, style]}
        onPress={() => this.props.navigator.push({screen: 'Koe.HealthIndicators'})}>
        {/*<Text>{item.name}</Text>*/}
        <Text style={{color: '#6881ff', marginBottom: 10}}>4月19日 农历 三月初四 天气：晴 健康指标：5星</Text>
        <Text style={styles.tabCardText}>
          富含精氨酸的食物有助调节血管张力、抑制血小板聚集，减少血管损伤。这类食物有海参、泥鳅、鳝鱼及芝麻、山药、银杏、豆腐皮、葵花子等。
        </Text>
      </TouchableOpacity>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    );
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }

  renderDome() {


    return (
      <TouchableOpacity
        onPress={() => navigator.push({screen:'Koe.SignTrend'})}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, alignItems: 'center'}}><Text>4月</Text></View>
          <View style={{flex: 1, alignItems: 'center'}}><Text>体温</Text></View>
          <View style={{flex: 1, alignItems: 'center'}}><Text>呼吸</Text></View>
          <View style={{flex: 1, alignItems: 'center'}}><Text>血氧</Text></View>
          <View style={{flex: 2, alignItems: 'center'}}><Text>血压</Text></View>
        </View>
        {
          healthStatus.map((items, i) => {
            return (
              <View
                key={i}
                style={{flexDirection: 'row'}}>
                <Text style={[styles.tabCardText, {flex: 1, textAlign: 'center'}]}>
                  { items.time }
                </Text>
                <Text style={[styles.tabCardText, {flex: 1, textAlign: 'center'}]}>
                  { items.temperature }
                </Text>
                <Text style={[styles.tabCardText, {flex: 1, textAlign: 'center'}]}>
                  { items.breathing }
                </Text>
                <Text style={[styles.tabCardText, {flex: 1, textAlign: 'center'}]}>
                  { items.bloodOxygen }
                </Text>
                <Text style={[styles.tabCardText, {flex: 2, textAlign: 'center'}]}>
                  { items.bloodPressure }
                </Text>
              </View>
            )
          })
        }
      </TouchableOpacity>
    )
  }
  render() {
    const { healthStatus, style, navigator } = this.props
    // console.log('this.state:', this.state);
    return (
      <View style={[style, {flex: 1}]}>
        <Agenda
          /**
           * 组件所需数据
           */
          items={this.state.items}
          /**
           * 加载组件数据
           */
          loadItemsForMonth={this.loadItems.bind(this)}
          selected={'2018-08-10'}
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          rowHasChanged={(r1, r2) => r1.name !== r2.name}

          /**
           * 是否隐藏日历下拉
           * 默认 false
           */
          hideKnob={false}
          /**
           * 定义左边日期的样式
           * day: { year: 2017, month: 6, day: 6, timestamp: 1496707200000, dateString: "2017-06-06" }
           * item: { name: "Item for 2017-06-06", height: 50 }
           */
          renderDay={(day, item) => {
            if(day && day.day) {
              return (<View style={{
                width: 40,
                height: 40,
                paddingTop: 20,
                paddingLeft: 5,
                paddingRight: 5,
              }}>
                <View style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30,
                  backgroundColor: '#cd3902',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <Text style={{color: '#fff'}}>{day.day}</Text>
                </View>
              </View>);
            } else {
              return (<View  style={{
                width: 40,
                height: 40,
              }}/>);
            }
            }}
          /**
           * 定义被选中的日期的样式
           * multi-dot | period | multi-period
           */
          markingType={'multi-dot'}
          // markedDates={{
          //    '2017-05-08': {textColor: '#666'},
          //    '2017-05-09': {textColor: '#666'},
          //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
          //    '2017-05-21': {startingDay: true, color: 'blue'},
          //    '2017-05-22': {endingDay: true, color: 'gray'},
          //    '2017-05-24': {startingDay: true, color: 'gray'},
          //    '2017-05-25': {color: 'gray'},
          //    '2017-05-26': {endingDay: true, color: 'gray'}}}
          // monthFormat={'yyyy'}
          // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
          //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
        />
      </View>
    )
  }
}
