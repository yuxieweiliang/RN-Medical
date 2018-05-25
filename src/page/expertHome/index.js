import React, { Component } from 'react';
import { Text, Image,ScrollView, View, Dimensions, TouchableHighlight, Modal  } from 'react-native';
import styles from './style'
import { connect } from 'react-redux'
import expertAction from '../../action/expert'
import CalendarStrip  from 'react-native-calendar-strip';
import systemAction from '../../action/system'
import moment from 'moment'


const TITLE = '专家主页'
const { width, height } = Dimensions.get('window');


class ExpertHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.onDayPress = this.onDayPress.bind(this);
  }

  /**
   * 检查是否登录
   * */
  async beforeMount() {
    let { dispatch, navigation, token } = this.props
    if(!token) {
      token = await dispatch(systemAction.loadToken())
    }

    console.log('this.props.token', token)
    if(token) {
      dispatch(expertAction.getExpert({hospitalId: 1001, userId: 322717314500745}))
    } else {
      navigation.navigate('Login')
    }
  }
  componentWillMount() {
    this.beforeMount()
  }
  componentDidMount() {}
  componentWillUnmount() {}

  onDateSelected(day) {

    console.log(moment(day).format('YYYY-MM-DD'))
    /*this.setState({
      selected: day.dateString
    });*/
    // alert('上午还是下午')
  }
  render() {
    const { expert } = this.props


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

      <ScrollView style={styles.container}>
        <View>
          <View style={styles.doctorCardBox}>
            <Image style={{width: '100%', opacity: .5, height: 200}} source={require('../../../assets/images/a3.jpg')}/>
            <View style={styles.doctorCard}>
              <Image style={styles.doctorImage} source={require('../../../assets/images/a2.jpg')}/>
              <View style={styles.doctorTextContent}>
                <Text style={styles.doctorName}>{expert && expert.UserName}</Text>
                <Text>{expert && expert.UserType}</Text>
              </View>
            </View >
          </View>
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
            style={{paddingTop: 10, paddingBottom: 10}}
            // 不现实每一天的名字
            // showDayName={false}
            // 定义每一个日期按钮的颜色
            // customDatesStyles={customDatesStyles}
            onDateSelected={(e) => this.onDateSelected(e)}
          />
          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {alert("Modal has been closed.")}}
          >
            <View style={{marginTop: 22}}>
              <View>
                <Text>Hello World!</Text>

                <TouchableHighlight onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}>
                  <Text>Hide Modal</Text>
                </TouchableHighlight>

              </View>
            </View>
          </Modal>
          {/*<TouchableHighlight
            style={{width, height: 40, backgroundColor: '#ccc'}}
            onPress={() => this.props.navigation.navigate('RegisteredInformation')}>
            <Text>预约</Text>
          </TouchableHighlight>*/}
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

ExpertHome.navigationOptions = ({ navigation : nav, navigationOptions: option }) => {
  const { headerLeft, headerRight, headerTitle } = option;
  return {
    headerTitle: function() {
      return (
        <View style={{width: width - 120, height: 50, alignItems: 'center', justifyContent: 'center',}}>
          <Text>
            { TITLE }
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
  return ({...state.hospital.expert, ...state.system})
}

export default connect(createState)(ExpertHome)
