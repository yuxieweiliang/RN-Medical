import React, { Component } from 'react';
import { Text, Image,ScrollView, View, Dimensions, TouchableHighlight, ImageBackground  } from 'react-native';
import styles from './style'
import { connect } from 'react-redux'
const { width, height } = Dimensions.get('window');
import CalendarStrip  from 'react-native-calendar-strip';

class Appointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.onDayPress = this.onDayPress.bind(this);
  }
  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
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
  render() {
    return (

      <ScrollView style={styles.container}>
        <View>
          <View style={{borderBottomWidth: 1, borderColor: '#ccc', backgroundColor: '#fafafa',  paddingTop: 10,paddingBottom: 10}}>
            <ImageBackground source={require('../../../assets/images/a3.jpg')} style={{width: '100%', height: 240, paddingRight: 15, paddingLeft: 15,}}>
              <Image style={{width: 100, height: 200}} source={require('../../../assets/images/a3.jpg')}/>

            </ImageBackground >
            <CalendarStrip
              onDayPress={() => this.onDayPress()}
              style={{backgroundColor: '#fff'}}
              hideExtraDays
              markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
            />

          </View>

          <TouchableHighlight
            style={{width, height: 40, backgroundColor: '#ccc'}}
            onPress={() => this.props.navigation.navigate('RegisteredInformation')}>
            <Text>预约</Text>
          </TouchableHighlight>
          <View style={{flex: 3}}>
            <View style={{width: width, marginTop: 10, borderBottomWidth: 1, borderBottomColor: '#ccc', height: 50, backgroundColor: '#fafafa', paddingRight: 15, paddingLeft: 15, }}>
              <Text>预约挂号条款</Text>
            </View>
            <View style={{width: width, marginTop: 10, borderBottomWidth: 1, borderBottomColor: '#ccc', height: 50, backgroundColor: '#fafafa', paddingRight: 15, paddingLeft: 15, }}>
              <Text>患者评价</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

Appointment.navigationOptions = ({ navigation : nav, navigationOptions: option }) => {
  const { headerLeft, headerRight, headerTitle } = option;
  return {
    headerTitle: function() {
      return (
        <View style={{width: width - 120, height: 50, alignItems: 'center', justifyContent: 'center',}}>
          <Text>
            专家主页
          </Text>
        </View>
      )
    },
    headerRight: <View style={{width: 60, height: 50, alignItems: 'center', justifyContent: 'center',}}>
      <Text>
        搜索
      </Text>
    </View>
  }
};

const createState = function(state) {
  return ({...state.appointment})
}

export default connect(createState)(Appointment)
