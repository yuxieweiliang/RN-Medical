import React, { Component } from 'react';
import { Text, Alert,ScrollView, View, Dimensions, TouchableHighlight } from 'react-native';
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

class Appointment extends React.Component {
  static navigationOptions = ({ navigation : nav, navigationOptions: option }) => {
    const { headerLeft, headerRight, headerTitle } = option;
    return {
      headerLeft: headerLeft && headerLeft(nav, option),
      headerRight: headerRight && headerRight(nav, option),
      headerTitle: headerTitle && headerTitle(nav, option, '预约挂号'),
    }
  };

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
  render() {
    const { healthGuide }= this.props
    const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
    const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
    const workout = {key:'workout', color: 'green'};
    return (

      <ScrollView style={styles.container}>
        <TabCardView {...healthGuide}>

          <View>
            <CalendarList
              // Initially visible month. Default = Date()
              horizontal={true}
              pagingEnabled={true}
              markedDates={{
                '2018-04-25': {dots: [vacation, massage, workout], selected: true, selectedColor: 'red'},
                '2018-04-12': { startingDay: true, color: 'red', textColor: '#fff',},
                '2018-04-13': { endingDay: true, color: 'red', textColor: '#fff'},
                '2018-04-16': {dots: [massage, workout], disabled: true},
              }}
              markingType={'period'}
            />
            <TouchableHighlight
              style={{width: width - 30, height: 40, backgroundColor: '#ccc', borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginTop: 20, marginLeft: 15}}
              onPress={(option) => this._onPressTabCardButton(option)}>
              <Text>预约</Text>
            </TouchableHighlight>
          </View>
          <Text>fdsa</Text>
          <Text>fda</Text>
          <Text>fda</Text>
        </TabCardView>

        <View>
          {
            [1,2,3,4,5,6,7,8].map((item, key) => (
              <View key={key} style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: '#ccc', backgroundColor: '#fafafa', paddingLeft: 15, paddingRight: 15, paddingTop: 10, paddingBottom: 10}}>
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
            ))
          }
        </View>
      </ScrollView>



    );
  }
}


const createState = function(state) {
  return ({...state.appointment})
}

export default connect(createState)(Appointment)
