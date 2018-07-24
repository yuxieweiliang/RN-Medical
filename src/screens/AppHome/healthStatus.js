import React, { Component } from 'react';
import { Text, TouchableOpacity, View,  Dimensions  } from 'react-native';
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

    setTimeout(() => {
      for (let i = -15; i < 35; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < numItems; j++) {
            const data = {
              name: 'Item for ' + strTime,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            }

            if(healthStatus[j]) {
              Object.assign(data, healthStatus[j])
            }
            this.state.items[strTime].push(data);
          }
        }
      }
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });

    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item, isFirst) {
    const style = isFirst ? {marginTop: 10} : {borderTopWidth: 1, borderTopColor: '#ccc'}
    console.log(item, isFirst)
    return (
      <View style={[styles.item, {height: item.height}, style]}>
        {/*<Text>{item.name}</Text>*/}
        <View style={{flex: 1, width: '100%', flexDirection: 'row'}}>
          <Text style={{flex: 1, textAlign: 'center'}}>{item.temperature}℃</Text>
          <Text style={{flex: 1, textAlign: 'center'}}>{item.breathing}</Text>
          <Text style={{flex: 1, textAlign: 'center'}}>{item.bloodOxygen}</Text>
          <Text style={{flex: 1, textAlign: 'center'}}>{item.bloodPressure}</Text>
        </View>
      </View>
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
          selected={'2017-05-16'}
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
        <View style={{flexDirection: 'row', height: 40}}>
          <View style={{flex: 1, alignItems: 'center'}}><Text>4月</Text></View>
          <View style={{flex: 1, alignItems: 'center'}}><Text>体温</Text></View>
          <View style={{flex: 1, alignItems: 'center'}}><Text>呼吸</Text></View>
          <View style={{flex: 1, alignItems: 'center'}}><Text>血氧</Text></View>
          <View style={{flex: 2, alignItems: 'center'}}><Text>血压</Text></View>
        </View>
      </View>
    )
  }
}
