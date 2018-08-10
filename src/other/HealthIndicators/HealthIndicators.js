import React, { Component } from 'react';
import { Text, Dimensions,StatusBar, View, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import styles from './style'
import { connect } from 'react-redux'
import CalendarStrip  from 'react-native-calendar-strip';
import Card from '../../components/Card'
const TITLE = '健康指标'
const { width, height } = Dimensions.get('window');

class HealthIndicators extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
   // this.onDayPress = this.onDayPress.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {
    // this._onPressButton.remove();
  }

  render() {
    return (

      <View style={styles.container}>

        <CalendarStrip style={{ height: 100, backgroundColor: '#fafafa'}}/>
        <Card title="适宜类型">
          <View style={styles.contentBox}>
            <TouchableNativeFeedback style={styles.contentRow}>
              <View style={styles.contentRow}>
                <View style={styles.rowLeft}>
                  <Text style={styles.rowFont}>种类</Text>
                </View>
                <View style={styles.rowMiddle}>
                  <TouchableOpacity style={styles.rowMiddleButton}>
                    <Text style={styles.rowFontSmall}>少量</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.rowMiddleButtonMD}>
                    <Text style={styles.rowFontSmallWhite}>一般</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.rowMiddleButton}>
                    <Text style={styles.rowFontSmall}>大量</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.rowRight}>

                  <Text style={styles.rowFont}>建议的详情页面</Text>
                </View>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback style={styles.contentRow}>
              <View style={styles.contentRow}>
                <View style={styles.rowLeft}>
                  <Text style={styles.rowFont}>种类</Text>
                </View>
                <View style={styles.rowMiddle}>
                  <TouchableOpacity style={styles.rowMiddleButton}>
                    <Text style={styles.rowFontSmall}>少量</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.rowMiddleButtonMD}>
                    <Text style={styles.rowFontSmallWhite}>一般</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.rowMiddleButton}>
                    <Text style={styles.rowFontSmall}>大量</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.rowRight}>

                  <Text style={styles.rowFont}>建议的详情页面</Text>
                </View>
              </View>
            </TouchableNativeFeedback>

          </View>
        </Card>
        <Card title="禁忌类型">
          <View style={styles.contentBox}>
            <TouchableNativeFeedback style={styles.contentRow}>
              <View style={styles.contentRow}>
                <View style={styles.rowLeft}>
                  <Text style={styles.rowFont}>种类</Text>
                </View>
                <View style={styles.rowMiddle}>
                  <TouchableOpacity style={styles.rowMiddleButton}>
                    <Text style={styles.rowFontSmall}>少量</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.rowMiddleButtonMD}>
                    <Text style={styles.rowFontSmallWhite}>一般</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.rowMiddleButton}>
                    <Text style={styles.rowFontSmall}>大量</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.rowRight}>

                  <Text style={styles.rowFont}>建议的详情页面</Text>
                </View>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback style={styles.contentRow}>
              <View style={styles.contentRow}>
                <View style={styles.rowLeft}>
                  <Text style={styles.rowFont}>种类</Text>
                </View>
                <View style={styles.rowMiddle}>
                  <TouchableOpacity style={styles.rowMiddleButton}>
                    <Text style={styles.rowFontSmall}>少量</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.rowMiddleButtonMD}>
                    <Text style={styles.rowFontSmallWhite}>一般</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.rowMiddleButton}>
                    <Text style={styles.rowFontSmall}>大量</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.rowRight}>

                  <Text style={styles.rowFont}>建议的详情页面</Text>
                </View>
              </View>
            </TouchableNativeFeedback>

          </View>
        </Card>

      </View>
    );
  }
}

/*HealthIndicators.navigationOptions = ({ navigation, navigationOptions }) => {
  const { params } = navigation.state;
  return {
    title: TITLE,
  }
};*/


export default connect(state => {
  console.log(state)
  return state
})(HealthIndicators)