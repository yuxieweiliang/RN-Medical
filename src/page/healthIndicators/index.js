import React, { Component } from 'react';
import { Text, Dimensions,StatusBar, View, Button, TouchableNativeFeedback } from 'react-native';
import styles from './style'
import { connect } from 'react-redux'
import CalendarStrip  from 'react-native-calendar-strip';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const TITLE = '健康指标'
const { width, height } = Dimensions.get('window');

class HealthIndicators extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }

  componentDidMount() {}

  _onPressButton() {
    this.props.navigation.navigate('Product', {
      itemId: 87,
      otherParam: 'anything you want here',
    })
  }
  componentWillUnmount() {
    // this._onPressButton.remove();
  }
  onDayPress() {
    this.props.navigation.navigate('HospitalList', {
      otherParam: 'anything you want here',
    })
  }
  render() {
    return (

      <View style={styles.container}>
        <View style={{ height: 200, width, paddingLeft: 15, paddingRight: 15, borderBottomWidth: 1, borderColor: '#ccc', backgroundColor: '#fafafa', marginTop: 10}}>

          <CalendarStrip
            onDayPress={this.onDayPress}
            style={{backgroundColor: '#fff'}}
            hideExtraDays
            markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
          />
          <View style={{ width,  }}>
            <TouchableNativeFeedback style={{ width }}>
              <View style={{ width, flexDirection: 'row' }}>
                <Text style={{ width: '20%',fontSize: 16 }}>种类</Text>
                <Text style={{ width: '20%',fontSize: 16 }}>1255</Text>
                <Text style={{ width: '60%',fontSize: 16 }}>建议的详情页面</Text>
              </View>
            </TouchableNativeFeedback>

          </View>

        </View>
      </View>
    );
  }
}

HealthIndicators.navigationOptions = ({ navigation, navigationOptions }) => {
  const { params } = navigation.state;
  return {
    title: TITLE,
  }
};


export default connect(state => {
  console.log(state)
  return state.healthIndicators
})(HealthIndicators)